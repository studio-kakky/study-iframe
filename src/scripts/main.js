function overrideFrame (url) {
  const iFrameElement = document.createElement('iframe');
  iFrameElement.setAttribute('src', url);
  iFrameElement.classList.add('OverrideFrame');
  document.querySelector('body').appendChild(iFrameElement);

  return iFrameElement;
}

(function () {
  window.addEventListener('DOMContentLoaded', function() {
    const iframe = overrideFrame('https://iframe-test.studio-kakky.com/form/');
    window.addEventListener('message', function (e) {
      if (!e.data || e.data !== 'CLOSE_IFRAME_WINDOW_STUDIO_KAKKY') {
        return;
      }

      alert('iFrameを閉じます');
      iframe.parentNode.removeChild(iframe);
    })
  })
})();
