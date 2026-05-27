function getExtension(fileName = '') {
  const parts = fileName.toLowerCase().split('.');
  return parts.length > 1 ? parts.pop() : '';
}

export function inferDocumentType({ fileName = '', fileType = '' }) {
  const mime = fileType.toLowerCase();
  const extension = getExtension(fileName);

  if (mime.startsWith('image/')) {
    return 'image';
  }

  if (mime === 'application/pdf' || extension === 'pdf') {
    return 'pdf';
  }

  if (
    mime.includes('word')
    || extension === 'doc'
    || extension === 'docx'
  ) {
    return 'doc';
  }

  if (mime.includes('zip') || extension === 'zip') {
    return 'zip';
  }

  return 'file';
}

export function normalizeDocuments(documents) {
  return documents.map((document) => ({
    ...document,
    kind: inferDocumentType(document),
  }));
}

export function buildDocumentLabel(kind) {
  switch (kind) {
    case 'pdf':
      return 'PDF';
    case 'image':
      return 'Imagen';
    case 'doc':
      return 'Documento';
    case 'zip':
      return 'ZIP';
    default:
      return 'Archivo';
  }
}

export function canPreviewDocument(document) {
  return document?.kind === 'pdf' || document?.kind === 'image';
}
