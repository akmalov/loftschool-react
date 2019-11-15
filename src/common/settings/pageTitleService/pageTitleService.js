const title = "Loft taxi";

function pageTitleService(pageTitle) {
  pageTitle ? document.title = `${title} | ${pageTitle}` : document.title = title;
}

export default pageTitleService;