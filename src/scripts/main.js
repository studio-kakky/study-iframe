const overrideFrame = url => {
  const iFrameElement = document.createElement('iframe');
  iFrameElement.setAttribute('src', url);
  iFrameElement.classList.add('OverrideFrame');
  document.querySelector('body').appendChild(iFrameElement);

  return iFrameElement;
}

(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const iframe = overrideFrame('https://iframe-test.studio-kakky.com/form/');
    window.addEventListener('message', () => {
      alert('iFrameを閉じます');
      iframe.parentNode.removeChild(iframe);
    })
  })
})();
