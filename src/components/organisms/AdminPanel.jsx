import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

export default function AdminPanel({
  isAdminRoute,
  isAdmin,
  onLogin,
  onLogout,
  passwordValue,
  setPasswordValue,
  adminTab,
  setAdminTab,
  posts,
  onEditPost,
  onDeletePost,
  postFormMode,
  postTitle,
  setPostTitle,
  postTag,
  setPostTag,
  postContent,
  setPostContent,
  onCoverChange,
  onAttachmentChange,
  onClearAttachment,
  coverInputRef,
  attachmentInputRef,
  coverFileName,
  coverPreviewSrc,
  attachmentFileName,
  showClearAttachment,
  onSavePost,
  onCancelPostEdit,
  documents,
  onEditDocument,
  onDeleteDocument,
  documentFormMode,
  documentTitle,
  setDocumentTitle,
  documentCategory,
  setDocumentCategory,
  documentDescription,
  setDocumentDescription,
  onDocumentFileChange,
  onClearDocument,
  documentInputRef,
  documentFileName,
  showClearDocument,
  onSaveDocument,
  onCancelDocumentEdit,
}) {
  if (!isAdminRoute) {
    return null;
  }

  return (
    <div id="admin-section" className="active">
      {!isAdmin ? (
        <div className="admin-login" id="adminLogin">
          <h2>Admin <span style={{ color: 'var(--orange)' }}>Access</span></h2>
          <p>Ingresa la contrasena para administrar publicaciones y documentos del sitio.</p>
          <input
            type="password"
            id="adminPassword"
            placeholder="Contrasena"
            autoComplete="off"
            value={passwordValue}
            onChange={(event) => setPasswordValue(event.target.value)}
            onKeyUp={(event) => event.key === 'Enter' && onLogin()}
          />
          <button id="adminLoginBtn" onClick={onLogin} type="button">Entrar</button>
          <div className="hint">Demo password: <code>speedbolt2026</code></div>
          <div style={{ marginTop: '24px' }}>
            <Button href="#hero" variant="secondary" data-cursor="hover" id="backToSiteFromLogin">
              {'<-'} Volver al sitio
            </Button>
          </div>
        </div>
      ) : (
        <div id="adminDashboard">
          <div className="admin-header">
            <div>
              <h1 className="admin-title">Speed Bolt <span className="accent">Admin.</span></h1>
              <p className="admin-subtitle">Publicaciones, documentos y materiales visibles para el sitio publico.</p>
            </div>
            <div className="admin-actions">
              <a href="#hero" className="btn-cancel" data-cursor="hover" id="backToSite">
                {'<-'} Ver sitio
              </a>
              <button className="btn-save" id="adminLogoutBtn" data-cursor="hover" onClick={onLogout} type="button">
                Cerrar sesion
              </button>
            </div>
          </div>

          <div className="admin-tabs">
            <button className={`admin-tab${adminTab === 'posts' ? ' active' : ''}`} onClick={() => setAdminTab('posts')} type="button">
              Posts
            </button>
            <button className={`admin-tab${adminTab === 'new' ? ' active' : ''}`} onClick={() => setAdminTab('new')} type="button">
              Nueva publicacion
            </button>
            <button className={`admin-tab${adminTab === 'documents' ? ' active' : ''}`} onClick={() => setAdminTab('documents')} type="button">
              Documentos
            </button>
          </div>

          <div className={`admin-pane${adminTab === 'posts' ? ' active' : ''}`} id="pane-posts">
            <div id="adminPostsList" className="admin-list">
              {posts.length ? (
                posts.map((post) => (
                  <div className="admin-item" data-id={post.id} key={post.id}>
                    <div className="admin-item-cover">
                      {post.cover ? <img src={post.cover} alt="" /> : <div className="admin-item-cover-fallback">{post.coverFallback || 'SB'}</div>}
                    </div>
                    <div className="admin-item-info">
                      <h4>{post.title}</h4>
                      <div className="meta">
                        <span className="tag-pill">{post.tag}</span> {post.date}
                        {post.attachment ? ' · Adjunto' : ''}
                      </div>
                    </div>
                    <div className="admin-item-actions">
                      <button className="btn-icon" data-cursor="hover" onClick={() => onEditPost(post.id)} type="button">
                        Editar
                      </button>
                      <button className="btn-icon danger" data-cursor="hover" onClick={() => onDeletePost(post.id)} type="button">
                        Borrar
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="admin-empty-state">No hay publicaciones aun. Crea la primera.</div>
              )}
            </div>
          </div>

          <div className={`admin-pane${adminTab === 'new' ? ' active' : ''}`} id="pane-new">
            <div className="admin-form">
              <h3>{postFormMode}</h3>

              <div className="form-row">
                <FormField label="Titulo">
                  <input
                    type="text"
                    id="postTitle"
                    placeholder="Ej. Primer boceto del chasis SpeedBolt-00"
                    value={postTitle}
                    onChange={(event) => setPostTitle(event.target.value)}
                  />
                </FormField>
                <FormField label="Categoria / Tag">
                  <input
                    type="text"
                    id="postTag"
                    placeholder="Ej. Ingenieria, Branding, Competencia"
                    value={postTag}
                    onChange={(event) => setPostTag(event.target.value)}
                  />
                </FormField>
              </div>

              <FormField label="Imagen de portada obligatoria">
                <div className="file-input-wrap">
                  <label htmlFor="postCover" className="file-input-btn" data-cursor="hover">Elegir imagen</label>
                  <input ref={coverInputRef} type="file" id="postCover" accept="image/*" style={{ display: 'none' }} onChange={onCoverChange} />
                  <span className="file-input-name">{coverFileName}</span>
                </div>
                {coverPreviewSrc ? <img className="file-preview-img" alt="Preview" src={coverPreviewSrc} /> : null}
              </FormField>

              <FormField label="Descripcion / Contenido">
                <textarea
                  id="postContent"
                  placeholder="Escribe el contenido completo del post aqui..."
                  value={postContent}
                  onChange={(event) => setPostContent(event.target.value)}
                />
              </FormField>

              <FormField label="Documento adjunto opcional">
                <div className="file-input-wrap">
                  <label htmlFor="postAttachment" className="file-input-btn" data-cursor="hover">Adjuntar archivo</label>
                  <input ref={attachmentInputRef} type="file" id="postAttachment" accept=".pdf,.doc,.docx,.zip,.png,.jpg,.jpeg" onChange={onAttachmentChange} />
                  <span className="file-input-name">{attachmentFileName}</span>
                  {showClearAttachment ? (
                    <button type="button" className="btn-icon" onClick={onClearAttachment}>
                      Quitar
                    </button>
                  ) : null}
                </div>
              </FormField>

              <div className="admin-form-actions">
                <button className="btn-save" data-cursor="hover" onClick={onSavePost} type="button">
                  Publicar
                </button>
                <button className="btn-cancel" data-cursor="hover" onClick={onCancelPostEdit} type="button">
                  Cancelar
                </button>
              </div>
            </div>
          </div>

          <div className={`admin-pane${adminTab === 'documents' ? ' active' : ''}`} id="pane-documents">
            <div className="admin-documents-layout">
              <div className="admin-form">
                <h3>{documentFormMode}</h3>

                <div className="form-row">
                  <FormField label="Titulo">
                    <input
                      type="text"
                      placeholder="Ej. Dossier institucional 2026"
                      value={documentTitle}
                      onChange={(event) => setDocumentTitle(event.target.value)}
                    />
                  </FormField>
                  <FormField label="Categoria">
                    <input
                      type="text"
                      placeholder="Ej. Patrocinios, Institucional, Tecnico"
                      value={documentCategory}
                      onChange={(event) => setDocumentCategory(event.target.value)}
                    />
                  </FormField>
                </div>

                <FormField label="Descripcion corta">
                  <textarea
                    placeholder="Resume para que sirve este documento y cuando conviene revisarlo."
                    value={documentDescription}
                    onChange={(event) => setDocumentDescription(event.target.value)}
                  />
                </FormField>

                <FormField label="Archivo obligatorio">
                  <div className="file-input-wrap">
                    <label htmlFor="libraryDocument" className="file-input-btn" data-cursor="hover">Subir documento</label>
                    <input
                      ref={documentInputRef}
                      type="file"
                      id="libraryDocument"
                      accept=".pdf,.doc,.docx,.zip,.png,.jpg,.jpeg,.webp"
                      onChange={onDocumentFileChange}
                    />
                    <span className="file-input-name">{documentFileName}</span>
                    {showClearDocument ? (
                      <button type="button" className="btn-icon" onClick={onClearDocument}>
                        Quitar
                      </button>
                    ) : null}
                  </div>
                </FormField>

                <div className="admin-form-actions">
                  <button className="btn-save" data-cursor="hover" onClick={onSaveDocument} type="button">
                    Guardar documento
                  </button>
                  <button className="btn-cancel" data-cursor="hover" onClick={onCancelDocumentEdit} type="button">
                    Limpiar
                  </button>
                </div>
              </div>

              <div className="admin-library-list">
                <div className="admin-library-head">
                  <h3>Biblioteca publica</h3>
                  <p>Todo lo que cargues aqui aparecera en la nueva seccion de documentos del sitio.</p>
                </div>

                {documents.length ? (
                  <div className="admin-list">
                    {documents.map((document) => (
                      <div className="admin-item admin-item-document" key={document.id}>
                        <div className="admin-item-cover admin-item-cover-doc">
                          <span>{document.kind?.toUpperCase?.() || 'FILE'}</span>
                        </div>
                        <div className="admin-item-info">
                          <h4>{document.title}</h4>
                          <div className="meta">
                            <span className="tag-pill">{document.category}</span> {document.date}
                          </div>
                          <div className="admin-document-filename">{document.fileName}</div>
                        </div>
                        <div className="admin-item-actions">
                          <button className="btn-icon" data-cursor="hover" onClick={() => onEditDocument(document.id)} type="button">
                            Editar
                          </button>
                          <button className="btn-icon danger" data-cursor="hover" onClick={() => onDeleteDocument(document.id)} type="button">
                            Borrar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="admin-empty-state">
                    La biblioteca publica todavia esta vacia. Sube el primer archivo institucional desde este panel.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
