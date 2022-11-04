/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// import pangu from 'pangu';

const insertPangu = () => {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pangu/4.0.7/pangu.min.js';
  script.onload = () => {
      GM_log('script loaded leon')
      unsafeWindow.window.$pangu = pangu;
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV5d2hhbGUuZm9ybWF0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm1hdGhleXdoYWxlbm90ZWJvb2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHBhbmd1IGZyb20gJ3Bhbmd1JztcclxuXHJcbmNvbnN0IGluc2VydFBhbmd1ID0gKCkgPT4ge1xyXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcclxuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3Bhbmd1LzQuMC43L3Bhbmd1Lm1pbi5qcyc7XHJcbiAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgR01fbG9nKCdzY3JpcHQgbG9hZGVkIGxlb24nKVxyXG4gICAgICB1bnNhZmVXaW5kb3cud2luZG93LiRwYW5ndSA9IHBhbmd1O1xyXG4gIH1cclxuICBoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbn07XHJcblxyXG5pbnNlcnRQYW5ndSgpO1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGNyZWF0ZUZvcm1hdEJ1dHRvbiA9ICgpID0+IHtcclxuICAgICAgY29uc3QgZ2hvc3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml2dS1idG4tZ2hvc3QnKTtcclxuICAgICAgY29uc3QgZm9ybWF0Tm9kZSA9IGdob3N0Tm9kZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgIGZvcm1hdE5vZGUucXVlcnlTZWxlY3RvcignLm91dHB1dC1tZW51X19idG4tdGV4dCcpLmlubmVyVGV4dCA9IFwiZm9ybWF0XCI7XHJcbiAgICAgIGdob3N0Tm9kZS5wYXJlbnROb2RlLnByZXBlbmQoZm9ybWF0Tm9kZSk7XHJcbiAgICAgIGZvcm1hdE5vZGUub25jbGljayA9IGZvcm1hdFBhZ2U7XHJcblxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1hdFBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZWJvb2tfX2NvbnRlbnQnKTtcclxuICAgICAgY29uc3QgY2hpbGRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsX19lZGl0b3Itd3JhcHBlcicpXTtcclxuXHJcbiAgICAgIEdNX2xvZyhjaGlsZHMubGVuZ3RoKTtcclxuICAgICAgZm9jdXNUb0l0ZW0oMCwgY2hpbGRzLCBjb250ZW50KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZvY3VzVG9JdGVtID0gKGlkeCwgaXRlbXMsIGNvbnRlbnQpID0+IHtcclxuICAgICAgaWYgKGlkeCA+PSBpdGVtcy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgY29uc3QgY2hpbGQgPSBpdGVtc1tpZHhdO1xyXG4gICAgICBjaGlsZC5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICBjaGlsZC5jbGljaygpO1xyXG4gICAgICBjb250ZW50LnNjcm9sbFRvcCA9IGNvbnRlbnQuc2Nyb2xsVG9wIC0gMjA7XHJcbiAgICAgIEdNX2xvZygnc2Nyb2xsIHRvOicsIGNoaWxkLCBpZHgpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY2VsbF9fdG9vbGJhcicpLmNoaWxkTm9kZXNbMl0uY2xpY2soKTtcclxuICAgICAgfSwgMClcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgZm9jdXNUb0l0ZW0oaWR4ICsgMSwgaXRlbXMsIGNvbnRlbnQpO1xyXG4gICAgICB9LCAyMDAwKVxyXG4gIH1cclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PntcclxuXHJcbiAgICAgIGNyZWF0ZUZvcm1hdEJ1dHRvbigpO1xyXG5cclxuICB9LCA1MDAwKVxyXG4gIC8vIFlvdXIgY29kZSBoZXJlLi4uXHJcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9