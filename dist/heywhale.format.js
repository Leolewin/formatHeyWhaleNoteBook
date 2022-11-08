/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

  setTimeout(async () =>{

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
        shouldFormat = false;
        data = JSON.stringify(updateData);
      }
    }
    catch (err) {}
    originSend.apply(this, [data]);
    setTimeout(() => {
      location.reload();
    }, 2000);
  };
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV5d2hhbGUuZm9ybWF0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtYXRoZXl3aGFsZW5vdGVib29rLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBwYW5ndSBmcm9tICdwYW5ndSc7XHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgY3JlYXRlRm9ybWF0QnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICB1bnNhZmVXaW5kb3cud2luZG93LiRwYW5ndSA9IHBhbmd1O1xyXG4gICAgICBjb25zdCBnaG9zdE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXZ1LWJ0bi1naG9zdCcpO1xyXG4gICAgICBjb25zdCBmb3JtYXROb2RlID0gZ2hvc3ROb2RlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgZm9ybWF0Tm9kZS5xdWVyeVNlbGVjdG9yKCcub3V0cHV0LW1lbnVfX2J0bi10ZXh0JykuaW5uZXJUZXh0ID0gXCJmb3JtYXRcIjtcclxuICAgICAgZ2hvc3ROb2RlLnBhcmVudE5vZGUucHJlcGVuZChmb3JtYXROb2RlKTtcclxuICAgICAgZm9ybWF0Tm9kZS5xdWVyeVNlbGVjdG9yKCcuaWNvbmZvbnQnKS5yZW1vdmUoKTtcclxuICAgICAgZm9ybWF0Tm9kZS5zZXRBdHRyaWJ1dGUoICdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiAjMDk2OWRhICFpbXBvcnRhbnQ7IGNvbG9yOiB3aGl0ZScpO1xyXG4gICAgICBmb3JtYXROb2RlLm9uY2xpY2sgPSBmb3JtYXRQYWdlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1hdFBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZWJvb2tfX2NvbnRlbnQnKTtcclxuICAgICAgY29uc3QgcHl0aG9uQ29kZWNoaWxkcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbF9fZWRpdG9yLXdyYXBwZXInKV07XHJcbiAgICAgIEdNX2xvZyhweXRob25Db2RlY2hpbGRzLmxlbmd0aCk7XHJcblxyXG4gICAgICBmb3JtYXRDb2RlKDAsIHB5dGhvbkNvZGVjaGlsZHMsIGNvbnRlbnQpO1xyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IGZvcm1hdENvZGUgPSAoaWR4LCBpdGVtcywgY29udGVudCkgPT4ge1xyXG4gICAgICBpZiAoaWR4ID49IGl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnRlbnQuc2Nyb2xsVG9wID0gMDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bC5ub3RlYm9va19fYWN0aW9ucycpLmNoaWxkTm9kZXNbMF0uY2xpY2soKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgY2hpbGQgPSBpdGVtc1tpZHhdO1xyXG4gICAgICBjaGlsZC5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICBjaGlsZC5jbGljaygpO1xyXG4gICAgICBjb250ZW50LnNjcm9sbFRvcCA9IGNvbnRlbnQuc2Nyb2xsVG9wIC0gMjA7XHJcbiAgICAgIEdNX2xvZygnc2Nyb2xsIHRvOicsIGNoaWxkLCBpZHgpO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAvLyBmb3JtYXQgdGhlIHB5dGhvbiBjb2RlIGJ5IGNsaWNrIHRoZSBwYWdlIHByZXR0eSBidXR0b25cclxuICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY2VsbF9fdG9vbGJhcicpLmNoaWxkTm9kZXNbMl0uY2xpY2soKTtcclxuICAgICAgfSwgMClcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgZm9ybWF0Q29kZShpZHggKyAxLCBpdGVtcywgY29udGVudCk7XHJcbiAgICAgIH0sIDUwMClcclxuICB9XHJcblxyXG4gIHNldFRpbWVvdXQoYXN5bmMgKCkgPT57XHJcblxyXG4gICAgICBjcmVhdGVGb3JtYXRCdXR0b24oKTtcclxuICAgICAgZm9ybWF0QnlTYXYoKTtcclxuXHJcbiAgfSwgNTAwMClcclxuICAvLyBZb3VyIGNvZGUgaGVyZS4uLlxyXG59KSgpO1xyXG5cclxuY29uc3QgZm9ybWF0QnlTYXYgPSAoKSA9PiB7XHJcbiAgbGV0IHNob3VsZEZvcm1hdCA9IGZhbHNlO1xyXG4gIGNvbnN0IG9yaWdpbk9wZW4gPSB1bnNhZmVXaW5kb3cud2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vcGVuO1xyXG4gIGNvbnN0IG9yaWdpblNlbmQgPSB1bnNhZmVXaW5kb3cud2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kO1xyXG4gIHVuc2FmZVdpbmRvdy53aW5kb3cuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwsIC4uLmFyZ3MpIHtcclxuICAgIEdNX2xvZyhtZXRob2QsIHVybClcclxuICAgIHNob3VsZEZvcm1hdCA9IG1ldGhvZCA9PT0gJ1BVVCcgJiYgLyhcXC9hcGlcXC9ub3RlYm9va3NcXC8pLiovLnRlc3QodXJsKTtcclxuICAgIG9yaWdpbk9wZW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICB9O1xyXG4gIFxyXG4gIHVuc2FmZVdpbmRvdy53aW5kb3cuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXBkYXRlRGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgIGlmICh1cGRhdGVEYXRhICYmIHVwZGF0ZURhdGE/LkNvbnRlbnQ/LmNlbGxzICYmIHNob3VsZEZvcm1hdClcclxuICAgICAge1xyXG4gICAgICAgXHJcbiAgICAgICAgdXBkYXRlRGF0YS5Db250ZW50LmNlbGxzID0gdXBkYXRlRGF0YS5Db250ZW50LmNlbGxzLm1hcCgoY2VsbCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoY2VsbC5jZWxsX3R5cGUgPT09ICdtYXJrZG93bicpIHtcclxuICAgICAgICAgICAgY2VsbC5zb3VyY2UgPSBwYW5ndS5zcGFjaW5nKGNlbGwuc291cmNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKGNlbGwuY2VsbF90eXBlID09PSAnY29kZScpIHtcclxuICAgICAgICAgICAgY2VsbC5zb3VyY2UgPSBjZWxsLnNvdXJjZS5yZXBsYWNlKC8uKihcXG4pJC8sICcnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBjZWxsO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBHTV9sb2coJ3VwZGF0ZURhdGEnLCB1cGRhdGVEYXRhKVxyXG4gICAgICAgIHNob3VsZEZvcm1hdCA9IGZhbHNlO1xyXG4gICAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh1cGRhdGVEYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge31cclxuICAgIG9yaWdpblNlbmQuYXBwbHkodGhpcywgW2RhdGFdKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0sIDIwMDApO1xyXG4gIH07XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=