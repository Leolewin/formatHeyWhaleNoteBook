(()=>{!function(){const o=()=>{const e=document.querySelector(".notebook__content"),o=[...document.querySelectorAll(".cell__editor-wrapper")];GM_log(o.length),t(0,o,e)},t=(e,o,n)=>{if(e>=o.length)return n.scrollTop=0,void document.querySelector("ul.notebook__actions").childNodes[0].click();const c=o[e];c.scrollIntoView(),c.click(),n.scrollTop=n.scrollTop-20,GM_log("scroll to:",c,e),setTimeout((()=>{c.parentNode.parentNode.querySelector(".cell__toolbar").childNodes[2].click()}),0),setTimeout((()=>{t(e+1,o,n)}),500)};setTimeout((()=>{(()=>{unsafeWindow.window.$pangu=pangu;const e=document.querySelector(".ivu-btn-ghost"),t=e.cloneNode(!0);t.querySelector(".output-menu__btn-text").innerText="format",e.parentNode.prepend(t),t.querySelector(".iconfont").remove(),t.setAttribute("style","background-color: #0969da !important; color: white"),t.onclick=o})(),e()}),5e3)}();const e=()=>{let e=!1;const o=unsafeWindow.window.XMLHttpRequest.prototype.open,t=unsafeWindow.window.XMLHttpRequest.prototype.send;unsafeWindow.window.XMLHttpRequest.prototype.open=function(t,n,...c){GM_log(t,n),e="PUT"===t&&/(\/api\/notebooks\/).*/.test(n),o.apply(this,arguments)},unsafeWindow.window.XMLHttpRequest.prototype.send=function(o){try{const t=JSON.parse(o);t&&t?.Content?.cells&&(t.Content.cells=t.Content.cells.map(((e,o)=>("markdown"===e.cell_type&&(e.source=pangu.spacing(e.source),e.source=e.source.replace(/(\*\*)\s(.*?)\s(\*\*)/g,"$1$2$3").replace(/(\*)\s(.*?)\s(\*)/g,"$1$2$3"),e.source.match(/\[.*\]\((https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?\)/gi).every((o=>(GM_log("matched URL:",o),e.source.replaceAll(o,o.replaceAll(/\s+/g,"")),!0)))),"code"===e.cell_type&&(e.source=e.source.replace(/(\n)$/,"")),e))),GM_log("updateData",t),o=JSON.stringify(t),e=!1)}catch(e){}t.apply(this,[o])}}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV5d2hhbGUuZm9ybWF0LmpzIiwibWFwcGluZ3MiOiJPQUVBLFdBQ0UsTUFXTUEsRUFBYSxLQUNmLE1BQU1DLEVBQVVDLFNBQVNDLGNBQWMsc0JBQ2pDQyxFQUFtQixJQUFJRixTQUFTRyxpQkFBaUIsMEJBQ3ZEQyxPQUFPRixFQUFpQkcsUUFDeEJDLEVBQVcsRUFBR0osRUFBa0JILEVBQVEsRUFHdENPLEVBQWEsQ0FBQ0MsRUFBS0MsRUFBT1QsS0FDNUIsR0FBSVEsR0FBT0MsRUFBTUgsT0FHZixPQUZBTixFQUFRVSxVQUFZLE9BQ3BCVCxTQUFTQyxjQUFjLHdCQUF3QlMsV0FBVyxHQUFHQyxRQUcvRCxNQUFNQyxFQUFRSixFQUFNRCxHQUNwQkssRUFBTUMsaUJBQ05ELEVBQU1ELFFBQ05aLEVBQVFVLFVBQVlWLEVBQVFVLFVBQVksR0FDeENMLE9BQU8sYUFBY1EsRUFBT0wsR0FFNUJPLFlBQVcsS0FFUEYsRUFBTUcsV0FBV0EsV0FBV2QsY0FBYyxrQkFBa0JTLFdBQVcsR0FBR0MsT0FBTyxHQUNsRixHQUVIRyxZQUFXLEtBQ1BSLEVBQVdDLEVBQU0sRUFBR0MsRUFBT1QsRUFBUSxHQUNwQyxJQUFHLEVBR1ZlLFlBQVcsS0F4Q2dCLE1BQ3ZCRSxhQUFhQyxPQUFPQyxPQUFTQyxNQUM3QixNQUFNQyxFQUFZcEIsU0FBU0MsY0FBYyxrQkFDbkNvQixFQUFhRCxFQUFVRSxXQUFVLEdBQ3ZDRCxFQUFXcEIsY0FBYywwQkFBMEJzQixVQUFZLFNBQy9ESCxFQUFVTCxXQUFXUyxRQUFRSCxHQUM3QkEsRUFBV3BCLGNBQWMsYUFBYXdCLFNBQ3RDSixFQUFXSyxhQUFjLFFBQVMsc0RBQ2xDTCxFQUFXTSxRQUFVN0IsQ0FBVSxFQWlDL0I4QixHQUNBQyxHQUFhLEdBQ2QsSUFFSixDQTlDRCxHQWdEQSxNQUFNQSxFQUFjLEtBQ2xCLElBQUlDLEdBQWUsRUFDbkIsTUFBTUMsRUFBYWYsYUFBYUMsT0FBT2UsZUFBZUMsVUFBVUMsS0FDMURDLEVBQWFuQixhQUFhQyxPQUFPZSxlQUFlQyxVQUFVRyxLQUNoRXBCLGFBQWFDLE9BQU9lLGVBQWVDLFVBQVVDLEtBQU8sU0FBVUcsRUFBUUMsS0FBUUMsR0FDNUVuQyxPQUFPaUMsRUFBUUMsR0FDZlIsRUFBMEIsUUFBWE8sR0FBb0IseUJBQXlCRyxLQUFLRixHQUNqRVAsRUFBV1UsTUFBTUMsS0FBTUMsVUFDekIsRUFFQTNCLGFBQWFDLE9BQU9lLGVBQWVDLFVBQVVHLEtBQU8sU0FBVVEsR0FDNUQsSUFDRSxNQUFNQyxFQUFhQyxLQUFLQyxNQUFNSCxHQUMxQkMsR0FBY0EsR0FBWUcsU0FBU0MsUUFHckNKLEVBQVdHLFFBQVFDLE1BQVFKLEVBQVdHLFFBQVFDLE1BQU1DLEtBQUksQ0FBQ0MsRUFBTTVDLEtBQ3RDLGFBQW5CNEMsRUFBS0MsWUFDUEQsRUFBS0UsT0FBU2xDLE1BQU1tQyxRQUFRSCxFQUFLRSxRQUNqQ0YsRUFBS0UsT0FBU0YsRUFBS0UsT0FBT0UsUUFBUSx5QkFBMEIsVUFBVUEsUUFBUSxxQkFBc0IsVUFDcEdKLEVBQUtFLE9BQU9HLE1BQU0sbUdBQ2ZDLE9BQU1uQixJQUNMbEMsT0FBTyxlQUFnQmtDLEdBQ3ZCYSxFQUFLRSxPQUFPSyxXQUFXcEIsRUFBS0EsRUFBSW9CLFdBQVcsT0FBUSxNQUM1QyxNQUdVLFNBQW5CUCxFQUFLQyxZQUNQRCxFQUFLRSxPQUFTRixFQUFLRSxPQUFPRSxRQUFRLFFBQVMsS0FFdENKLEtBR1QvQyxPQUFPLGFBQWN5QyxHQUNyQkQsRUFBT0UsS0FBS2EsVUFBVWQsR0FDdEJmLEdBQWUsRUFHTixDQUFiLE1BQU84QixHQUFNLENBQ2J6QixFQUFXTSxNQUFNQyxLQUFNLENBQUNFLEdBQzFCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm1hdGhleXdoYWxlbm90ZWJvb2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHBhbmd1IGZyb20gJ3Bhbmd1JztcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICBjb25zdCBjcmVhdGVGb3JtYXRCdXR0b24gPSAoKSA9PiB7XHJcbiAgICAgIHVuc2FmZVdpbmRvdy53aW5kb3cuJHBhbmd1ID0gcGFuZ3U7XHJcbiAgICAgIGNvbnN0IGdob3N0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdnUtYnRuLWdob3N0Jyk7XHJcbiAgICAgIGNvbnN0IGZvcm1hdE5vZGUgPSBnaG9zdE5vZGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICBmb3JtYXROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5vdXRwdXQtbWVudV9fYnRuLXRleHQnKS5pbm5lclRleHQgPSBcImZvcm1hdFwiO1xyXG4gICAgICBnaG9zdE5vZGUucGFyZW50Tm9kZS5wcmVwZW5kKGZvcm1hdE5vZGUpO1xyXG4gICAgICBmb3JtYXROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5pY29uZm9udCcpLnJlbW92ZSgpO1xyXG4gICAgICBmb3JtYXROb2RlLnNldEF0dHJpYnV0ZSggJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6ICMwOTY5ZGEgIWltcG9ydGFudDsgY29sb3I6IHdoaXRlJyk7XHJcbiAgICAgIGZvcm1hdE5vZGUub25jbGljayA9IGZvcm1hdFBhZ2U7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWF0UGFnZSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlYm9va19fY29udGVudCcpO1xyXG4gICAgICBjb25zdCBweXRob25Db2RlY2hpbGRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsX19lZGl0b3Itd3JhcHBlcicpXTtcclxuICAgICAgR01fbG9nKHB5dGhvbkNvZGVjaGlsZHMubGVuZ3RoKTtcclxuICAgICAgZm9ybWF0Q29kZSgwLCBweXRob25Db2RlY2hpbGRzLCBjb250ZW50KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZvcm1hdENvZGUgPSAoaWR4LCBpdGVtcywgY29udGVudCkgPT4ge1xyXG4gICAgICBpZiAoaWR4ID49IGl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnRlbnQuc2Nyb2xsVG9wID0gMDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bC5ub3RlYm9va19fYWN0aW9ucycpLmNoaWxkTm9kZXNbMF0uY2xpY2soKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgY2hpbGQgPSBpdGVtc1tpZHhdO1xyXG4gICAgICBjaGlsZC5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICBjaGlsZC5jbGljaygpO1xyXG4gICAgICBjb250ZW50LnNjcm9sbFRvcCA9IGNvbnRlbnQuc2Nyb2xsVG9wIC0gMjA7XHJcbiAgICAgIEdNX2xvZygnc2Nyb2xsIHRvOicsIGNoaWxkLCBpZHgpO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAvLyBmb3JtYXQgdGhlIHB5dGhvbiBjb2RlIGJ5IGNsaWNrIHRoZSBwYWdlIHByZXR0eSBidXR0b25cclxuICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY2VsbF9fdG9vbGJhcicpLmNoaWxkTm9kZXNbMl0uY2xpY2soKTtcclxuICAgICAgfSwgMClcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgZm9ybWF0Q29kZShpZHggKyAxLCBpdGVtcywgY29udGVudCk7XHJcbiAgICAgIH0sIDUwMClcclxuICB9XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT57XHJcbiAgICAgIGNyZWF0ZUZvcm1hdEJ1dHRvbigpO1xyXG4gICAgICBmb3JtYXRCeVNhdigpO1xyXG4gIH0sIDUwMDApXHJcbiAgLy8gWW91ciBjb2RlIGhlcmUuLi5cclxufSkoKTtcclxuXHJcbmNvbnN0IGZvcm1hdEJ5U2F2ID0gKCkgPT4ge1xyXG4gIGxldCBzaG91bGRGb3JtYXQgPSBmYWxzZTtcclxuICBjb25zdCBvcmlnaW5PcGVuID0gdW5zYWZlV2luZG93LndpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3BlbjtcclxuICBjb25zdCBvcmlnaW5TZW5kID0gdW5zYWZlV2luZG93LndpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZDtcclxuICB1bnNhZmVXaW5kb3cud2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKG1ldGhvZCwgdXJsLCAuLi5hcmdzKSB7XHJcbiAgICBHTV9sb2cobWV0aG9kLCB1cmwpXHJcbiAgICBzaG91bGRGb3JtYXQgPSBtZXRob2QgPT09ICdQVVQnICYmIC8oXFwvYXBpXFwvbm90ZWJvb2tzXFwvKS4qLy50ZXN0KHVybCk7XHJcbiAgICBvcmlnaW5PcGVuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfTtcclxuICBcclxuICB1bnNhZmVXaW5kb3cud2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZURhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICBpZiAodXBkYXRlRGF0YSAmJiB1cGRhdGVEYXRhPy5Db250ZW50Py5jZWxscylcclxuICAgICAge1xyXG4gICAgICAgXHJcbiAgICAgICAgdXBkYXRlRGF0YS5Db250ZW50LmNlbGxzID0gdXBkYXRlRGF0YS5Db250ZW50LmNlbGxzLm1hcCgoY2VsbCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoY2VsbC5jZWxsX3R5cGUgPT09ICdtYXJrZG93bicpIHtcclxuICAgICAgICAgICAgY2VsbC5zb3VyY2UgPSBwYW5ndS5zcGFjaW5nKGNlbGwuc291cmNlKTtcclxuICAgICAgICAgICAgY2VsbC5zb3VyY2UgPSBjZWxsLnNvdXJjZS5yZXBsYWNlKC8oXFwqXFwqKVxccyguKj8pXFxzKFxcKlxcKikvZywgJyQxJDIkMycpLnJlcGxhY2UoLyhcXCopXFxzKC4qPylcXHMoXFwqKS9nLCAnJDEkMiQzJyk7XHJcbiAgICAgICAgICAgIGNlbGwuc291cmNlLm1hdGNoKC9cXFsuKlxcXVxcKChodHRwcz86XFwvXFwvKChbYS16QS1aMC05XSstPykrW2EtekEtWjAtOV0rXFwuKStbYS16QS1aXSspKDpcXGQrKT8oXFwvLiopPyhcXD8uKik/KCMuKik/XFwpL2lnKVxyXG4gICAgICAgICAgICAgIC5ldmVyeSh1cmwgPT4ge1xyXG4gICAgICAgICAgICAgICAgR01fbG9nKCdtYXRjaGVkIFVSTDonLCB1cmwpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zb3VyY2UucmVwbGFjZUFsbCh1cmwsIHVybC5yZXBsYWNlQWxsKC9cXHMrL2csICcnKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjZWxsLmNlbGxfdHlwZSA9PT0gJ2NvZGUnKSB7XHJcbiAgICAgICAgICAgIGNlbGwuc291cmNlID0gY2VsbC5zb3VyY2UucmVwbGFjZSgvKFxcbikkLywgJycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGNlbGw7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIEdNX2xvZygndXBkYXRlRGF0YScsIHVwZGF0ZURhdGEpXHJcbiAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHVwZGF0ZURhdGEpO1xyXG4gICAgICAgIHNob3VsZEZvcm1hdCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7fVxyXG4gICAgb3JpZ2luU2VuZC5hcHBseSh0aGlzLCBbZGF0YV0pO1xyXG4gIH07XHJcbn0iXSwibmFtZXMiOlsiZm9ybWF0UGFnZSIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJweXRob25Db2RlY2hpbGRzIiwicXVlcnlTZWxlY3RvckFsbCIsIkdNX2xvZyIsImxlbmd0aCIsImZvcm1hdENvZGUiLCJpZHgiLCJpdGVtcyIsInNjcm9sbFRvcCIsImNoaWxkTm9kZXMiLCJjbGljayIsImNoaWxkIiwic2Nyb2xsSW50b1ZpZXciLCJzZXRUaW1lb3V0IiwicGFyZW50Tm9kZSIsInVuc2FmZVdpbmRvdyIsIndpbmRvdyIsIiRwYW5ndSIsInBhbmd1IiwiZ2hvc3ROb2RlIiwiZm9ybWF0Tm9kZSIsImNsb25lTm9kZSIsImlubmVyVGV4dCIsInByZXBlbmQiLCJyZW1vdmUiLCJzZXRBdHRyaWJ1dGUiLCJvbmNsaWNrIiwiY3JlYXRlRm9ybWF0QnV0dG9uIiwiZm9ybWF0QnlTYXYiLCJzaG91bGRGb3JtYXQiLCJvcmlnaW5PcGVuIiwiWE1MSHR0cFJlcXVlc3QiLCJwcm90b3R5cGUiLCJvcGVuIiwib3JpZ2luU2VuZCIsInNlbmQiLCJtZXRob2QiLCJ1cmwiLCJhcmdzIiwidGVzdCIsImFwcGx5IiwidGhpcyIsImFyZ3VtZW50cyIsImRhdGEiLCJ1cGRhdGVEYXRhIiwiSlNPTiIsInBhcnNlIiwiQ29udGVudCIsImNlbGxzIiwibWFwIiwiY2VsbCIsImNlbGxfdHlwZSIsInNvdXJjZSIsInNwYWNpbmciLCJyZXBsYWNlIiwibWF0Y2giLCJldmVyeSIsInJlcGxhY2VBbGwiLCJzdHJpbmdpZnkiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9