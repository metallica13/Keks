window.scrollX = window.sessionStorage.scrollCache;
window.addEventListener('scroll', () => {
  window.sessionStorage.scrollCache = window.scrollX;
});
