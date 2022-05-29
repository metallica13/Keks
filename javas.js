// window.scrollX = window.sessionStorage.scrollCache;
// window.addEventListener('scroll', () => {
//   window.sessionStorage.scrollCache = window.scrollX;
// });

// window.onload = function () {
//   window.scrollTo(0, 999999999999999);
// };

window.onload = function () {
  window.scrollTo(0, document.body.scrollHeight);
};
