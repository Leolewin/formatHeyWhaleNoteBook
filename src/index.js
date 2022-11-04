import pangu from 'pangu';

// const insertPangu = () => {
//   var head = document.getElementsByTagName('head')[0];
//   var script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pangu/4.0.7/pangu.min.js';
//   script.onload = () => {
//       GM_log('script loaded leon')
//       debugger;
//       unsafeWindow.window.$pangu = pangu;
//   }
//   head.appendChild(script);
// };

// insertPangu();

(function() {
  const createFormatButton = () => {
      unsafeWindow.window.$pangu = pangu;
      const ghostNode = document.querySelector('.ivu-btn-ghost');
      const formatNode = ghostNode.cloneNode(true);
      formatNode.querySelector('.output-menu__btn-text').innerText = "format";
      ghostNode.parentNode.prepend(formatNode);
      formatNode.onclick = formatPage;
  };

  const formatPage = () => {
      const content = document.querySelector('.notebook__content');
      const pythonCodechilds = [...document.querySelectorAll('.cell__editor-wrapper')];
      const markdownChilds = [...document.querySelectorAll('.cell--markdown')];
      GM_log(pythonCodechilds.length);

      //focusToCodeItem(0, pythonCodechilds, content);
      focusMDItem(0, markdownChilds, content);
  }

//   const focusToCodeItem = (idx, items, content) => {
//       if (idx >= items.length) return;
//       const child = items[idx];
//       child.scrollIntoView();
//       child.click();
//       content.scrollTop = content.scrollTop - 20;
//       GM_log('scroll to:', child, idx);

//       setTimeout(() => {
//           // format the python code by click the page pretty button
//           child.parentNode.parentNode.querySelector('.cell__toolbar').childNodes[2].click();
//       }, 0)

//       setTimeout(() => {
//           focusToCodeItem(idx + 1, items, content);
//       }, 2000)
//   }

  const focusMDItem = (idx, items, content) => {
    if (idx >= items.length) return;
    const child = items[idx];
    child.click();
    child.click();

    setTimeout(() => {
        unsafeWindow.window.$pangu.spacingNode(child.querySelector('.cell__editor--markdown'));
        focusMDItem(idx + 1, items, content);
    }, 500);
  }

  setTimeout(() =>{

      createFormatButton();

  }, 5000)
  // Your code here...
})();