const siteBody = document.querySelector('.body');

window.addEventListener('load', () => {
  siteBody.classList.add('loader-hidden');

  window.setTimeout(() => {
    siteBody.classList.add('loaded');
    siteBody.classList.remove('loader-hidden');
  }, 500);
});
