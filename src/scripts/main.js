const overrideFrame = url => {
  const iFrameElement = document.createElement('iframe');
  iFrameElement.setAttribute('src', url);
  iFrameElement.classList.add('OverrideFrame');
  document.querySelector('body').appendChild(iFrameElement);

  return iFrameElement;
}

const makeCloseBtn = () => {
  const closeBtn = document.createElement('button')
  closeBtn.classList.add('IframeCloser')
  const lead = document.createElement('span')
  lead.classList.add('IframeCloser_lead')
  lead.textContent = 'このボタンはiframe内のコンテンツに追加しているボタン'

  const main = document.createElement('span')
  main.classList.add('IframeCloser_main')
  main.textContent = 'iframeを閉じる'

  closeBtn.appendChild(lead)
  closeBtn.appendChild(main)

  const style = document.createElement('style')
  style.textContent = `
    .IframeCloser {
      display: block;
      margin: 0 auto;
      padding: 20px;
      background-color: #0089FF;
      border-radius: 5px;
      color: #fff;
    }
    .IframeCloser_lead {
      display: block;
      font-size: 0.8em;
    }
    .IframeCloser_main {
      display: block;
      font-size: 2em;
      font-weight: bold;
    }
    
    
  `

  console.log(closeBtn)
  return {
    closeBtn,
    styleNode: style
  }
}

(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const iframe = overrideFrame('form/');
    iframe.addEventListener('load', (e) => {
      if (!/^\/form\/complete\.html/.test(iframe.contentWindow.location.pathname)) {
        return;
      }

      const { closeBtn, styleNode } = makeCloseBtn();

      console.log(closeBtn)

      closeBtn.addEventListener('click', () => {
        iframe.parentNode.removeChild(iframe);
      })

      iframe.contentWindow.document.body.appendChild(closeBtn)
      iframe.contentWindow.document.body.appendChild(styleNode)
    })
  })
})();
