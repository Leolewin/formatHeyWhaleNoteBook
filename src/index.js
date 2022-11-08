// import pangu from 'pangu';

(function() {
  const createFormatButton = () => {
      unsafeWindow.window.$pangu = pangu;
      const ghostNode = document.querySelector('.ivu-btn-ghost');
      const formatNode = ghostNode.cloneNode(true);
      formatNode.querySelector('.output-menu__btn-text').innerText = "format";
      ghostNode.parentNode.prepend(formatNode);
      formatNode.querySelector('.iconfont').remove();
      formatNode.setAttribute( 'style', 'background-color: #0969da !important; color: white');
      formatNode.onclick = formatPage;
  };

  const formatPage = () => {
      const content = document.querySelector('.notebook__content');
      const pythonCodechilds = [...document.querySelectorAll('.cell__editor-wrapper')];
      GM_log(pythonCodechilds.length);

      formatCode(0, pythonCodechilds, content);
  }

  const formatCode = (idx, items, content) => {
      if (idx >= items.length) {
        content.scrollTop = 0;
        document.querySelector('ul.notebook__actions').childNodes[0].click();
        return;
      }
      const child = items[idx];
      child.scrollIntoView();
      child.click();
      content.scrollTop = content.scrollTop - 20;
      GM_log('scroll to:', child, idx);

      setTimeout(() => {
          // format the python code by click the page pretty button
          child.parentNode.parentNode.querySelector('.cell__toolbar').childNodes[2].click();
      }, 0)

      setTimeout(() => {
          formatCode(idx + 1, items, content);
      }, 500)
  }

  setTimeout(() =>{
      createFormatButton();
      formatBySav();
  }, 5000)
  // Your code here...
})();

const formatBySav = () => {
  let shouldFormat = false;
  const originOpen = unsafeWindow.window.XMLHttpRequest.prototype.open;
  const originSend = unsafeWindow.window.XMLHttpRequest.prototype.send;
  unsafeWindow.window.XMLHttpRequest.prototype.open = function (method, url, ...args) {
    GM_log(method, url)
    shouldFormat = method === 'PUT' && /(\/api\/notebooks\/).*/.test(url);
    originOpen.apply(this, arguments);
  };
  
  unsafeWindow.window.XMLHttpRequest.prototype.send = function (data) {
    try {
      const updateData = JSON.parse(data);
      if (updateData && updateData?.Content?.cells && shouldFormat)
      {
       
        updateData.Content.cells = updateData.Content.cells.map((cell, idx) => {
          if (cell.cell_type === 'markdown') {
            cell.source = pangu.spacing(cell.source);
          }
          else if (cell.cell_type === 'code') {
            cell.source = cell.source.replace(/.*(\n)$/, '');
          }
          return cell;
        });

        GM_log('updateData', updateData)
        data = JSON.stringify(updateData);
      }
    }
    catch (err) {}
    originSend.apply(this, [data]);
    if (shouldFormat) {
      setTimeout(() => {
        shouldFormat = false;
        location.reload();
      }, 2000);
    }
  };
}