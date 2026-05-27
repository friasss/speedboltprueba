import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import '../../styles/global.css';
import { DOCUMENTS_STORAGE_KEY, SAMPLE_DOCUMENTS } from '../../data/documents';
import { ADMIN_PASSWORD, POSTS_STORAGE_KEY, POST_COVER_POOL, SAMPLE_POSTS } from '../../data/posts';
import { PARTNER_CONTACT } from '../../data/partners';
import { normalizeDocuments } from '../../utils/documents';
import { buildExcerpt, buildFallbackLetters, formatCurrentDate } from '../../utils/format';
import { getStoredValue, setStoredValue } from '../../utils/storage';
import AboutSection from '../organisms/AboutSection';
import AdminPanel from '../organisms/AdminPanel';
import BrandSection from '../organisms/BrandSection';
import CarShowcase from '../organisms/CarShowcase';
import CtaSection from '../organisms/CtaSection';
import CustomCursor from '../organisms/CustomCursor';
import DocumentModal from '../organisms/DocumentModal';
import DocumentsSection from '../organisms/DocumentsSection';
import FeedSection from '../organisms/FeedSection';
import Footer from '../organisms/Footer';
import HeroSlider from '../organisms/HeroSlider';
import ImpactSection from '../organisms/ImpactSection';
import Navbar from '../organisms/Navbar';
import PartnerModal from '../organisms/PartnerModal';
import PostModal from '../organisms/PostModal';
import Preloader from '../organisms/Preloader';
import StemSection from '../organisms/StemSection';
import Toast from '../organisms/Toast';

function normalizePosts(posts) {
  return posts.map((post, index) => ({
    ...post,
    cover: post.cover || POST_COVER_POOL[index % POST_COVER_POOL.length],
  }));
}

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [adminTab, setAdminTab] = useState('posts');
  const [activeBrandKey, setActiveBrandKey] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedDocumentId, setSelectedDocumentId] = useState(null);
  const [activePartner, setActivePartner] = useState(null);
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '', type: '' });
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 60);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [editingPostId, setEditingPostId] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postTag, setPostTag] = useState('Equipo');
  const [postContent, setPostContent] = useState('');
  const [coverDataURL, setCoverDataURL] = useState(null);
  const [coverFileName, setCoverFileName] = useState('Sin imagen seleccionada');
  const [coverPreviewSrc, setCoverPreviewSrc] = useState('');
  const [attachmentData, setAttachmentData] = useState(null);
  const [attachmentFileName, setAttachmentFileName] = useState('Sin archivo');
  const [showClearAttachment, setShowClearAttachment] = useState(false);

  const [editingDocumentId, setEditingDocumentId] = useState('');
  const [documentTitle, setDocumentTitle] = useState('');
  const [documentCategory, setDocumentCategory] = useState('Institucional');
  const [documentDescription, setDocumentDescription] = useState('');
  const [documentFileData, setDocumentFileData] = useState(null);
  const [documentFileName, setDocumentFileName] = useState('Sin archivo');
  const [documentFileType, setDocumentFileType] = useState('');
  const [showClearDocument, setShowClearDocument] = useState(false);

  const coverInputRef = useRef(null);
  const attachmentInputRef = useRef(null);
  const documentInputRef = useRef(null);

  const selectedPost = useMemo(
    () => posts.find((post) => post.id === selectedPostId) || null,
    [posts, selectedPostId],
  );

  const selectedDocument = useMemo(
    () => documents.find((document) => document.id === selectedDocumentId) || null,
    [documents, selectedDocumentId],
  );

  const isAdminRoute = currentHash === '#admin';

  const showToast = (message, type = '') => {
    setToast({ visible: true, message, type });
  };

  const resetPostForm = () => {
    setEditingPostId('');
    setPostTitle('');
    setPostTag('Equipo');
    setPostContent('');
    setCoverDataURL(null);
    setCoverFileName('Sin imagen seleccionada');
    setCoverPreviewSrc('');
    setAttachmentData(null);
    setAttachmentFileName('Sin archivo');
    setShowClearAttachment(false);
    if (coverInputRef.current) {
      coverInputRef.current.value = '';
    }
    if (attachmentInputRef.current) {
      attachmentInputRef.current.value = '';
    }
  };

  const resetDocumentForm = () => {
    setEditingDocumentId('');
    setDocumentTitle('');
    setDocumentCategory('Institucional');
    setDocumentDescription('');
    setDocumentFileData(null);
    setDocumentFileName('Sin archivo');
    setDocumentFileType('');
    setShowClearDocument(false);
    if (documentInputRef.current) {
      documentInputRef.current.value = '';
    }
  };

  const persistPosts = useCallback(async (nextPosts) => {
    try {
      await setStoredValue(POSTS_STORAGE_KEY, JSON.stringify(nextPosts));
    } catch (error) {
      console.error('Save failed:', error);
      showToast('Error guardando publicaciones', 'error');
    }
  }, []);

  const persistDocuments = useCallback(async (nextDocuments) => {
    try {
      await setStoredValue(DOCUMENTS_STORAGE_KEY, JSON.stringify(nextDocuments));
    } catch (error) {
      console.error('Save failed:', error);
      showToast('Error guardando documentos', 'error');
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsPreloaderDone(true);
    }, 1700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    let active = true;

    const loadData = async () => {
      try {
        const [storedPosts, storedDocuments] = await Promise.all([
          getStoredValue(POSTS_STORAGE_KEY),
          getStoredValue(DOCUMENTS_STORAGE_KEY),
        ]);

        const parsedPosts = storedPosts ? JSON.parse(storedPosts) : SAMPLE_POSTS;
        const normalizedPosts = normalizePosts(parsedPosts);

        const parsedDocuments = storedDocuments ? JSON.parse(storedDocuments) : SAMPLE_DOCUMENTS;
        const normalizedDocs = normalizeDocuments(parsedDocuments);

        if (!storedPosts) {
          await persistPosts(normalizedPosts);
        }
        if (!storedDocuments) {
          await persistDocuments(normalizedDocs);
        }

        if (active) {
          setPosts(normalizedPosts);
          setDocuments(normalizedDocs);
        }
      } catch {
        if (active) {
          setPosts(normalizePosts(SAMPLE_POSTS));
          setDocuments(normalizeDocuments(SAMPLE_DOCUMENTS));
        }
      }
    };

    loadData();

    return () => {
      active = false;
    };
  }, [persistDocuments, persistPosts]);

  useEffect(() => {
    if (!toast.visible) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setToast((previous) => ({ ...previous, visible: false }));
    }, 3500);

    return () => window.clearTimeout(timer);
  }, [toast.visible]);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      if (window.location.hash !== '#admin') {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isAdminRoute) {
      window.scrollTo(0, 0);
    }
  }, [isAdminRoute]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const elements = Array.from(document.querySelectorAll('.reveal'));
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [isAdminRoute, posts, documents, activeBrandKey, adminTab]);

  useEffect(() => {
    document.body.style.overflow = selectedPost || activePartner || selectedDocument ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPost, activePartner, selectedDocument]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedPostId(null);
        setSelectedDocumentId(null);
        setActivePartner(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleToggleBrand = (brandKey) => {
    setActiveBrandKey((current) => (current === brandKey ? null : brandKey));
  };

  const handleOpenPartnerContact = () => {
    setActivePartner(PARTNER_CONTACT);
  };

  const handleCoverChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      const result = loadEvent.target?.result;
      if (typeof result === 'string') {
        setCoverDataURL(result);
        setCoverFileName(file.name);
        setCoverPreviewSrc(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAttachmentChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      const result = loadEvent.target?.result;
      if (typeof result === 'string') {
        setAttachmentData({ data: result, name: file.name });
        setAttachmentFileName(file.name);
        setShowClearAttachment(true);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleClearAttachment = () => {
    setAttachmentData(null);
    setAttachmentFileName('Sin archivo');
    setShowClearAttachment(false);
    if (attachmentInputRef.current) {
      attachmentInputRef.current.value = '';
    }
  };

  const handleDocumentFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      const result = loadEvent.target?.result;
      if (typeof result === 'string') {
        setDocumentFileData(result);
        setDocumentFileName(file.name);
        setDocumentFileType(file.type);
        setShowClearDocument(true);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleClearDocument = () => {
    setDocumentFileData(null);
    setDocumentFileName('Sin archivo');
    setDocumentFileType('');
    setShowClearDocument(false);
    if (documentInputRef.current) {
      documentInputRef.current.value = '';
    }
  };

  const handleLogin = () => {
    if (passwordValue === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setPasswordValue('');
      showToast('Bienvenido, admin');
    } else {
      showToast('Contrasena incorrecta', 'error');
      setPasswordValue('');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setPasswordValue('');
    showToast('Sesion cerrada');
  };

  const handleEditPost = (postId) => {
    const post = posts.find((item) => item.id === postId);
    if (!post) {
      return;
    }

    setEditingPostId(post.id);
    setPostTitle(post.title);
    setPostTag(post.tag);
    setPostContent(post.content);
    setCoverDataURL(undefined);
    setCoverPreviewSrc(post.cover || '');
    setCoverFileName(post.cover ? 'Imagen actual (se mantiene)' : 'Sin imagen seleccionada');
    setAttachmentData(undefined);
    setAttachmentFileName(post.attachment ? `Adjunto actual: ${post.attachment.name}` : 'Sin archivo');
    setShowClearAttachment(Boolean(post.attachment));
    if (coverInputRef.current) {
      coverInputRef.current.value = '';
    }
    if (attachmentInputRef.current) {
      attachmentInputRef.current.value = '';
    }
    setAdminTab('new');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeletePost = async (postId) => {
    if (!window.confirm('Borrar esta publicacion de manera permanente?')) {
      return;
    }

    const nextPosts = posts.filter((post) => post.id !== postId);
    setPosts(nextPosts);
    await persistPosts(nextPosts);
    showToast('Publicacion eliminada');
  };

  const handleSavePost = async () => {
    const title = postTitle.trim();
    const tag = postTag.trim() || 'Equipo';
    const content = postContent.trim();
    const existingPost = editingPostId ? posts.find((post) => post.id === editingPostId) : null;

    if (!title) {
      showToast('El titulo es obligatorio', 'error');
      return;
    }

    if (!content) {
      showToast('El contenido es obligatorio', 'error');
      return;
    }

    if (!coverDataURL && !existingPost?.cover) {
      showToast('La imagen de portada es obligatoria', 'error');
      return;
    }

    let nextPosts;

    if (existingPost) {
      nextPosts = posts.map((post) =>
        post.id === editingPostId
          ? {
              ...post,
              title,
              tag,
              content,
              excerpt: buildExcerpt(content),
              cover: coverDataURL === undefined ? existingPost.cover : coverDataURL,
              coverFallback: existingPost.coverFallback || buildFallbackLetters(title),
              attachment: attachmentData === undefined ? existingPost.attachment : attachmentData,
            }
          : post,
      );
      showToast('Publicacion actualizada');
    } else {
      nextPosts = [
        {
          id: `post-${Date.now()}`,
          title,
          tag,
          content,
          excerpt: buildExcerpt(content),
          cover: coverDataURL,
          coverFallback: buildFallbackLetters(title),
          attachment: attachmentData,
          date: formatCurrentDate(),
        },
        ...posts,
      ];
      showToast('Publicacion creada');
    }

    setPosts(nextPosts);
    await persistPosts(nextPosts);
    resetPostForm();
    setAdminTab('posts');
  };

  const handleEditDocument = (documentId) => {
    const document = documents.find((item) => item.id === documentId);
    if (!document) {
      return;
    }

    setEditingDocumentId(document.id);
    setDocumentTitle(document.title);
    setDocumentCategory(document.category);
    setDocumentDescription(document.description);
    setDocumentFileData(undefined);
    setDocumentFileName(document.fileName ? `Archivo actual: ${document.fileName}` : 'Sin archivo');
    setDocumentFileType(document.fileType || '');
    setShowClearDocument(Boolean(document.fileData));
    if (documentInputRef.current) {
      documentInputRef.current.value = '';
    }
    setAdminTab('documents');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteDocument = async (documentId) => {
    if (!window.confirm('Borrar este documento de manera permanente?')) {
      return;
    }

    const nextDocuments = documents.filter((document) => document.id !== documentId);
    setDocuments(nextDocuments);
    await persistDocuments(nextDocuments);
    showToast('Documento eliminado');
  };

  const handleSaveDocument = async () => {
    const title = documentTitle.trim();
    const category = documentCategory.trim() || 'Institucional';
    const description = documentDescription.trim();
    const existingDocument = editingDocumentId
      ? documents.find((document) => document.id === editingDocumentId)
      : null;

    const resolvedFileData = documentFileData === undefined ? existingDocument?.fileData : documentFileData;
    const resolvedFileName = documentFileData === undefined
      ? existingDocument?.fileName
      : documentFileName;
    const resolvedFileType = documentFileData === undefined
      ? existingDocument?.fileType
      : documentFileType;

    if (!title) {
      showToast('El titulo del documento es obligatorio', 'error');
      return;
    }

    if (!description) {
      showToast('La descripcion del documento es obligatoria', 'error');
      return;
    }

    if (!resolvedFileData || !resolvedFileName) {
      showToast('Debes adjuntar un archivo', 'error');
      return;
    }

    let nextDocuments;

    if (existingDocument) {
      nextDocuments = normalizeDocuments(
        documents.map((document) =>
          document.id === editingDocumentId
            ? {
                ...document,
                title,
                category,
                description,
                fileData: resolvedFileData,
                fileName: resolvedFileName,
                fileType: resolvedFileType,
              }
            : document,
        ),
      );
      showToast('Documento actualizado');
    } else {
      nextDocuments = normalizeDocuments([
        {
          id: `document-${Date.now()}`,
          title,
          category,
          description,
          fileName: resolvedFileName,
          fileData: resolvedFileData,
          fileType: resolvedFileType,
          date: formatCurrentDate(),
        },
        ...documents,
      ]);
      showToast('Documento creado');
    }

    setDocuments(nextDocuments);
    await persistDocuments(nextDocuments);
    resetDocumentForm();
    setAdminTab('documents');
  };

  const handleCancelPostEdit = () => {
    resetPostForm();
    setAdminTab('posts');
  };

  const handleCancelDocumentEdit = () => {
    resetDocumentForm();
  };

  const postFormMode = editingPostId ? 'Editar publicacion' : 'Nueva publicacion';
  const documentFormMode = editingDocumentId ? 'Editar documento' : 'Nuevo documento';

  return (
    <>
      <div className="grain" />
      <CustomCursor />
      <Preloader done={isPreloaderDone} />

      <div id="main-site" className={isAdminRoute ? 'hidden' : ''}>
        <Navbar isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <HeroSlider />

        <div className="marquee">
          <div className="marquee-track">
            <span>SPEED BOLT <span className="dot" /></span>
            <span>STEM RACING DR <span className="dot" /></span>
            <span>SpeedBolt-00 <span className="dot" /></span>
            <span>TEMPORADA 2026 <span className="dot" /></span>
            <span>HECHO EN RD <span className="dot" /></span>
            <span>ENGINEERED FOR SPEED <span className="dot" /></span>
            <span>SPEED BOLT <span className="dot" /></span>
            <span>STEM RACING DR <span className="dot" /></span>
            <span>SpeedBolt-00 <span className="dot" /></span>
            <span>TEMPORADA 2026 <span className="dot" /></span>
            <span>HECHO EN RD <span className="dot" /></span>
            <span>ENGINEERED FOR SPEED <span className="dot" /></span>
          </div>
        </div>

        <BrandSection activeBrandKey={activeBrandKey} onToggle={handleToggleBrand} />
        <AboutSection />
        <StemSection />
        <ImpactSection />
        <DocumentsSection documents={documents} onOpenDocument={setSelectedDocumentId} />
        <CarShowcase />
        <FeedSection posts={posts} onOpenPost={setSelectedPostId} />
        <CtaSection onOpenPartnerContact={handleOpenPartnerContact} />
        <Footer />
      </div>

      <AdminPanel
        isAdminRoute={isAdminRoute}
        isAdmin={isAdmin}
        onLogin={handleLogin}
        onLogout={handleLogout}
        passwordValue={passwordValue}
        setPasswordValue={setPasswordValue}
        adminTab={adminTab}
        setAdminTab={setAdminTab}
        posts={posts}
        onEditPost={handleEditPost}
        onDeletePost={handleDeletePost}
        postFormMode={postFormMode}
        postTitle={postTitle}
        setPostTitle={setPostTitle}
        postTag={postTag}
        setPostTag={setPostTag}
        postContent={postContent}
        setPostContent={setPostContent}
        onCoverChange={handleCoverChange}
        onAttachmentChange={handleAttachmentChange}
        onClearAttachment={handleClearAttachment}
        coverInputRef={coverInputRef}
        attachmentInputRef={attachmentInputRef}
        coverFileName={coverFileName}
        coverPreviewSrc={coverPreviewSrc}
        attachmentFileName={attachmentFileName}
        showClearAttachment={showClearAttachment}
        onSavePost={handleSavePost}
        onCancelPostEdit={handleCancelPostEdit}
        documents={documents}
        onEditDocument={handleEditDocument}
        onDeleteDocument={handleDeleteDocument}
        documentFormMode={documentFormMode}
        documentTitle={documentTitle}
        setDocumentTitle={setDocumentTitle}
        documentCategory={documentCategory}
        setDocumentCategory={setDocumentCategory}
        documentDescription={documentDescription}
        setDocumentDescription={setDocumentDescription}
        onDocumentFileChange={handleDocumentFileChange}
        onClearDocument={handleClearDocument}
        documentInputRef={documentInputRef}
        documentFileName={documentFileName}
        showClearDocument={showClearDocument}
        onSaveDocument={handleSaveDocument}
        onCancelDocumentEdit={handleCancelDocumentEdit}
      />

      <PostModal post={selectedPost} onClose={() => setSelectedPostId(null)} />
      <DocumentModal document={selectedDocument} onClose={() => setSelectedDocumentId(null)} />
      <PartnerModal partner={activePartner} onClose={() => setActivePartner(null)} />
      <Toast toast={toast} />
    </>
  );
}
