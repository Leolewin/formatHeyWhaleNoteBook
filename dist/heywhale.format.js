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
          return cell;
        });

        GM_log('updateData', updateData)
        shouldFormat = false;
        data = JSON.stringify(updateData);
      }
    }
    catch (err) {}
    originSend.apply(this, [data]);
  };
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV5d2hhbGUuZm9ybWF0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybWF0aGV5d2hhbGVub3RlYm9vay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgcGFuZ3UgZnJvbSAncGFuZ3UnO1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGNyZWF0ZUZvcm1hdEJ1dHRvbiA9ICgpID0+IHtcclxuICAgICAgdW5zYWZlV2luZG93LndpbmRvdy4kcGFuZ3UgPSBwYW5ndTtcclxuICAgICAgY29uc3QgZ2hvc3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml2dS1idG4tZ2hvc3QnKTtcclxuICAgICAgY29uc3QgZm9ybWF0Tm9kZSA9IGdob3N0Tm9kZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgIGZvcm1hdE5vZGUucXVlcnlTZWxlY3RvcignLm91dHB1dC1tZW51X19idG4tdGV4dCcpLmlubmVyVGV4dCA9IFwiZm9ybWF0XCI7XHJcbiAgICAgIGdob3N0Tm9kZS5wYXJlbnROb2RlLnByZXBlbmQoZm9ybWF0Tm9kZSk7XHJcbiAgICAgIGZvcm1hdE5vZGUucXVlcnlTZWxlY3RvcignLmljb25mb250JykucmVtb3ZlKCk7XHJcbiAgICAgIGZvcm1hdE5vZGUuc2V0QXR0cmlidXRlKCAnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogIzA5NjlkYSAhaW1wb3J0YW50OyBjb2xvcjogd2hpdGUnKTtcclxuICAgICAgZm9ybWF0Tm9kZS5vbmNsaWNrID0gZm9ybWF0UGFnZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtYXRQYWdlID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVib29rX19jb250ZW50Jyk7XHJcbiAgICAgIGNvbnN0IHB5dGhvbkNvZGVjaGlsZHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGxfX2VkaXRvci13cmFwcGVyJyldO1xyXG4gICAgICBHTV9sb2cocHl0aG9uQ29kZWNoaWxkcy5sZW5ndGgpO1xyXG5cclxuICAgICAgZm9ybWF0Q29kZSgwLCBweXRob25Db2RlY2hpbGRzLCBjb250ZW50KTtcclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtYXRDb2RlID0gKGlkeCwgaXRlbXMsIGNvbnRlbnQpID0+IHtcclxuICAgICAgaWYgKGlkeCA+PSBpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICBjb250ZW50LnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwubm90ZWJvb2tfX2FjdGlvbnMnKS5jaGlsZE5vZGVzWzBdLmNsaWNrKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGNoaWxkID0gaXRlbXNbaWR4XTtcclxuICAgICAgY2hpbGQuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgY2hpbGQuY2xpY2soKTtcclxuICAgICAgY29udGVudC5zY3JvbGxUb3AgPSBjb250ZW50LnNjcm9sbFRvcCAtIDIwO1xyXG4gICAgICBHTV9sb2coJ3Njcm9sbCB0bzonLCBjaGlsZCwgaWR4KTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgLy8gZm9ybWF0IHRoZSBweXRob24gY29kZSBieSBjbGljayB0aGUgcGFnZSBwcmV0dHkgYnV0dG9uXHJcbiAgICAgICAgICBjaGlsZC5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmNlbGxfX3Rvb2xiYXInKS5jaGlsZE5vZGVzWzJdLmNsaWNrKCk7XHJcbiAgICAgIH0sIDApXHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGZvcm1hdENvZGUoaWR4ICsgMSwgaXRlbXMsIGNvbnRlbnQpO1xyXG4gICAgICB9LCA1MDApXHJcbiAgfVxyXG5cclxuICBzZXRUaW1lb3V0KGFzeW5jICgpID0+e1xyXG5cclxuICAgICAgY3JlYXRlRm9ybWF0QnV0dG9uKCk7XHJcbiAgICAgIGZvcm1hdEJ5U2F2KCk7XHJcblxyXG4gIH0sIDUwMDApXHJcbiAgLy8gWW91ciBjb2RlIGhlcmUuLi5cclxufSkoKTtcclxuXHJcbmNvbnN0IGZvcm1hdEJ5U2F2ID0gKCkgPT4ge1xyXG4gIGxldCBzaG91bGRGb3JtYXQgPSBmYWxzZTtcclxuICBjb25zdCBvcmlnaW5PcGVuID0gdW5zYWZlV2luZG93LndpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3BlbjtcclxuICBjb25zdCBvcmlnaW5TZW5kID0gdW5zYWZlV2luZG93LndpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZDtcclxuICB1bnNhZmVXaW5kb3cud2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKG1ldGhvZCwgdXJsLCAuLi5hcmdzKSB7XHJcbiAgICBHTV9sb2cobWV0aG9kLCB1cmwpXHJcbiAgICBzaG91bGRGb3JtYXQgPSBtZXRob2QgPT09ICdQVVQnICYmIC8oXFwvYXBpXFwvbm90ZWJvb2tzXFwvKS4qLy50ZXN0KHVybCk7XHJcbiAgICBvcmlnaW5PcGVuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfTtcclxuICBcclxuICB1bnNhZmVXaW5kb3cud2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZURhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICBpZiAodXBkYXRlRGF0YSAmJiB1cGRhdGVEYXRhPy5Db250ZW50Py5jZWxscyAmJiBzaG91bGRGb3JtYXQpXHJcbiAgICAgIHtcclxuICAgICAgIFxyXG4gICAgICAgIHVwZGF0ZURhdGEuQ29udGVudC5jZWxscyA9IHVwZGF0ZURhdGEuQ29udGVudC5jZWxscy5tYXAoKGNlbGwsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGNlbGwuY2VsbF90eXBlID09PSAnbWFya2Rvd24nKSB7XHJcbiAgICAgICAgICAgIGNlbGwuc291cmNlID0gcGFuZ3Uuc3BhY2luZyhjZWxsLnNvdXJjZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gY2VsbDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgR01fbG9nKCd1cGRhdGVEYXRhJywgdXBkYXRlRGF0YSlcclxuICAgICAgICBzaG91bGRGb3JtYXQgPSBmYWxzZTtcclxuICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkodXBkYXRlRGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHt9XHJcbiAgICBvcmlnaW5TZW5kLmFwcGx5KHRoaXMsIFtkYXRhXSk7XHJcbiAgfTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==