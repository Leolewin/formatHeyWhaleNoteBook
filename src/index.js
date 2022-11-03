// ==UserScript==
// @name         format heywhale
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.heywhale.com/notebooks/run/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=heywhale.com
// @grant        GM_log
// @grant        unsafeWindow
// ==/UserScript==


import pangu from 'pangu';

const insertPangu = () => {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pangu/4.0.7/pangu.min.js';
  script.onload = () => {
      GM_log('script loaded')
      unsafeWindow.pangu = pangu;
  }
  head.appendChild(script);
};

insertPangu();

(function() {
  const createFormatButton = () => {
      const ghostNode = document.querySelector('.ivu-btn-ghost');
      const formatNode = ghostNode.cloneNode(true);
      formatNode.querySelector('.output-menu__btn-text').innerText = "format";
      ghostNode.parentNode.prepend(formatNode);
      formatNode.onclick = formatPage;

  };

  const formatPage = () => {
      const content = document.querySelector('.notebook__content');
      const childs = [...document.querySelectorAll('.cell__editor-wrapper')];

      GM_log(childs.length);
      focusToItem(0, childs, content);
  }

  const focusToItem = (idx, items, content) => {
      if (idx >= items.length) return;
      const child = items[idx];
      child.scrollIntoView();
      child.click();
      content.scrollTop = content.scrollTop - 20;
      GM_log('scroll to:', child, idx);
      setTimeout(() => {
          child.parentNode.parentNode.querySelector('.cell__toolbar').childNodes[2].click();
      }, 0)

      setTimeout(() => {
          focusToItem(idx + 1, items, content);
      }, 2000)
  }

  setTimeout(() =>{

      createFormatButton();

  }, 5000)
  // Your code here...
})();