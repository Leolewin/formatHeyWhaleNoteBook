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
      GM_log('script loaded')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV5d2hhbGUuZm9ybWF0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm1hdGhleXdoYWxlbm90ZWJvb2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHBhbmd1IGZyb20gJ3Bhbmd1JztcclxuXHJcbmNvbnN0IGluc2VydFBhbmd1ID0gKCkgPT4ge1xyXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcclxuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3Bhbmd1LzQuMC43L3Bhbmd1Lm1pbi5qcyc7XHJcbiAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgR01fbG9nKCdzY3JpcHQgbG9hZGVkJylcclxuICAgICAgdW5zYWZlV2luZG93LndpbmRvdy4kcGFuZ3UgPSBwYW5ndTtcclxuICB9XHJcbiAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG59O1xyXG5cclxuaW5zZXJ0UGFuZ3UoKTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICBjb25zdCBjcmVhdGVGb3JtYXRCdXR0b24gPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdob3N0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdnUtYnRuLWdob3N0Jyk7XHJcbiAgICAgIGNvbnN0IGZvcm1hdE5vZGUgPSBnaG9zdE5vZGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICBmb3JtYXROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5vdXRwdXQtbWVudV9fYnRuLXRleHQnKS5pbm5lclRleHQgPSBcImZvcm1hdFwiO1xyXG4gICAgICBnaG9zdE5vZGUucGFyZW50Tm9kZS5wcmVwZW5kKGZvcm1hdE5vZGUpO1xyXG4gICAgICBmb3JtYXROb2RlLm9uY2xpY2sgPSBmb3JtYXRQYWdlO1xyXG5cclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtYXRQYWdlID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVib29rX19jb250ZW50Jyk7XHJcbiAgICAgIGNvbnN0IGNoaWxkcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbF9fZWRpdG9yLXdyYXBwZXInKV07XHJcblxyXG4gICAgICBHTV9sb2coY2hpbGRzLmxlbmd0aCk7XHJcbiAgICAgIGZvY3VzVG9JdGVtKDAsIGNoaWxkcywgY29udGVudCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb2N1c1RvSXRlbSA9IChpZHgsIGl0ZW1zLCBjb250ZW50KSA9PiB7XHJcbiAgICAgIGlmIChpZHggPj0gaXRlbXMubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IGNoaWxkID0gaXRlbXNbaWR4XTtcclxuICAgICAgY2hpbGQuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgY2hpbGQuY2xpY2soKTtcclxuICAgICAgY29udGVudC5zY3JvbGxUb3AgPSBjb250ZW50LnNjcm9sbFRvcCAtIDIwO1xyXG4gICAgICBHTV9sb2coJ3Njcm9sbCB0bzonLCBjaGlsZCwgaWR4KTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBjaGlsZC5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmNlbGxfX3Rvb2xiYXInKS5jaGlsZE5vZGVzWzJdLmNsaWNrKCk7XHJcbiAgICAgIH0sIDApXHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGZvY3VzVG9JdGVtKGlkeCArIDEsIGl0ZW1zLCBjb250ZW50KTtcclxuICAgICAgfSwgMjAwMClcclxuICB9XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT57XHJcblxyXG4gICAgICBjcmVhdGVGb3JtYXRCdXR0b24oKTtcclxuXHJcbiAgfSwgNTAwMClcclxuICAvLyBZb3VyIGNvZGUgaGVyZS4uLlxyXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==