export const getFileExtension = (url) => (url || '').split('?')[0].split('.').pop().toLowerCase();

export const getViewerUrl = (url) =>
  ['doc', 'docx', 'ppt', 'pptx'].includes(getFileExtension(url))
    ? `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`
    : url;