(()=>{"use strict";const e="blue-marker",t="蓝色马克笔 (Ctrl+U)",o="fa fa-paint-brush",n='<mark style="background: linear-gradient(#D9ECFA 90%, transparent 100%); padding: 1px 1px;">',l="red-underline",c="红色下划线 (Ctrl+R)",r="fa fa-underline",s='<mark style="border-bottom: 3px solid #EC407A; padding: 0px 1px; margin: 0 -2px; background: none;">',i="data-operationType",a=window.getSelection||window.document.getSelection,d=n=>{const{activeElement:s}=document;if(!s)return;let{parentElement:a}=s;for(;a;){if("DIV"===a.tagName&&a.className.includes("notebook__cell")&&a.className.includes("cell--markdown")&&a.className.includes("cell--active")&&a.className.includes("cell--editing")){let n=a.getAttribute("id");d.currentEditNoteBookId=n;const s=a.querySelector(".editor-toolbar"),p=Array.from(s.childNodes).find((e=>!("A"!==e.tagName||!e.getAttribute("title").includes("标题"))));if(Array.from(s.childNodes).find((e=>e.getAttribute("title")===t)))break;const g=p.cloneNode();g.setAttribute("title",t),g.setAttribute("class",o),g.setAttribute(i,e),g.onclick=u;const m=p.cloneNode();m.setAttribute("title",c),m.setAttribute("class",r),m.setAttribute(i,l),m.onclick=u,s.insertBefore(g,p.nextSibling),s.insertBefore(m,p.nextSibling);break}a=a.parentElement}};d.currentEditNoteBookId="";const u=e=>{const{target:t}=e,o=t.getAttribute(i);p(o)},p=t=>{if(!a().toString()&&!a().text)return void alert("Please selected the content you want to highlight first.");const o=a().anchorNode.parentElement.CodeMirror;if(!o)return;const l=o.getCursor("start"),c=l.line;o.replaceRange(t===e?n:s,{line:c,ch:l.ch},{line:c,ch:l.ch});const r=o.getCursor("end"),i=r.line;o.replaceRange("</mark>",{line:i,ch:r.ch},{line:i,ch:r.ch})},g=()=>{const e=document.querySelector(".notebook__content"),t=[...document.querySelectorAll(".cell__editor-wrapper")];GM_log(t.length),m(0,t,e)},m=(e,t,o)=>{if(e>=t.length)return o.scrollTop=0,void document.querySelector("ul.notebook__actions").childNodes[0].click();const n=t[e];n.scrollIntoView(),n.click(),o.scrollTop=o.scrollTop-20,GM_log("scroll to:",n,e),setTimeout((()=>{n.parentNode.parentNode.querySelector(".cell__toolbar").childNodes[2].click()}),0),setTimeout((()=>{m(e+1,t,o)}),500)},b=()=>{let e=!1;const t=unsafeWindow.window.XMLHttpRequest.prototype.open,o=unsafeWindow.window.XMLHttpRequest.prototype.send;unsafeWindow.window.XMLHttpRequest.prototype.open=function(o,n,...l){GM_log(o,n),e="PUT"===o&&/(\/api\/notebooks\/).*/.test(n),t.apply(this,arguments)},unsafeWindow.window.XMLHttpRequest.prototype.send=function(t){try{const o=JSON.parse(t);o&&o?.Content?.cells.length&&(o.Content.cells=o.Content.cells.map(((e,t)=>("markdown"===e.cell_type&&(e.source=pangu.spacing(e.source),e.source=e.source.replace(/(\*\*)\s(.*?)\s(\*\*)/g,"$1$2$3").replace(/(\*)\s(.*?)\s(\*)/g,"$1$2$3"),e.source.match(/\[.*\]\(((https?:\/\/|www\.)(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?\)/gi)?.every((t=>(e.source=e.source.replaceAll(t,t.replaceAll(/\s+/g,"")),!0)))),"code"===e.cell_type&&(e.source=e.source.replace(/(\n)$/,"")),e))),GM_log("updateData",o),t=JSON.stringify(o),e=!1)}catch(e){}o.apply(this,[t])}};!function(){const t=()=>{const o=setTimeout((()=>{const n=document.getElementsByClassName("download-progress__btn").length>0;if(GM_log("isDownloading",n),n)return clearTimeout(o),t();(()=>{unsafeWindow.window.$pangu=pangu;const e=document.querySelector(".header"),t=e.childNodes[e.childNodes.length-1].querySelectorAll("button")[0],o=t.cloneNode(!0);o.textContent="Format Notebook",t.parentNode.prepend(o),o.setAttribute("style","background-color: #0969da !important; color: white;"),o.onclick=g})(),b(),document.body.onmouseup=d,document.addEventListener("keydown",(t=>{let{parentElement:o}=document.activeElement||{},n=!1;for(;o;){if("DIV"===o.tagName&&o.className.includes("notebook__cell")&&o.className.includes("cell--markdown")&&o.className.includes("cell--active")&&o.className.includes("cell--editing")){n=!0;break}o=o.parentElement}t.ctrlKey&&n&&(85===t.keyCode?p(e):82===t.keyCode&&p(l))}))}),5e3)};t()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDQXpHLEVBQWtCQSxFQUFnQkQsYUFDcEMsQ0FFSUYsRUFBRTZHLFNBQVdELElBQ0csS0FBZDVHLEVBQUU4RyxRQUNKakYsRUFBa0JwQyxHQUVHLEtBQWRPLEVBQUU4RyxTQUNUakYsRUFBa0JwQyxHQUV0QixHRTFIRSxHQUNDLElBQUksRUFHVG9HLEdBQ0QsQ0FqQkQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm1hdGhleXdoYWxlbm90ZWJvb2svLi9zcmMvaGlnaGxpZ2h0LmpzIiwid2VicGFjazovL2Zvcm1hdGhleXdoYWxlbm90ZWJvb2svLi9zcmMvZm9ybWF0LmpzIiwid2VicGFjazovL2Zvcm1hdGhleXdoYWxlbm90ZWJvb2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBvcGVyYXRpb25zID0ge1xuICBibHVlTWFya2VyOiB7XG4gICAgYWN0aW9uOiAnYmx1ZS1tYXJrZXInLFxuICAgIHRpdGxlOiAn6JOd6Imy6ams5YWL56yUIChDdHJsK1UpJyxcbiAgICBjbGFzc05hbWU6ICdmYSBmYS1wYWludC1icnVzaCcsXG4gICAgbWFyazogJzxtYXJrIHN0eWxlPVwiYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNEOUVDRkEgOTAlLCB0cmFuc3BhcmVudCAxMDAlKTsgcGFkZGluZzogMXB4IDFweDtcIj4nXG4gIH0sXG4gIHJlZFVuZGVybGluZToge1xuICAgIGFjdGlvbjogJ3JlZC11bmRlcmxpbmUnLFxuICAgIHRpdGxlOiAn57qi6Imy5LiL5YiS57q/IChDdHJsK1IpJyxcbiAgICBjbGFzc05hbWU6ICdmYSBmYS11bmRlcmxpbmUnLFxuICAgIG1hcms6ICc8bWFyayBzdHlsZT1cImJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRUM0MDdBOyBwYWRkaW5nOiAwcHggMXB4OyBtYXJnaW46IDAgLTJweDsgYmFja2dyb3VuZDogbm9uZTtcIj4nXG4gIH1cbn07XG5cbmNvbnN0IG9wZXJhdGlvbkN1c3RvbUF0dHJpYnV0ZSA9ICdkYXRhLW9wZXJhdGlvblR5cGUnO1xuXG5jb25zdCBfZ2V0U2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbiB8fCB3aW5kb3cuZG9jdW1lbnQuZ2V0U2VsZWN0aW9uO1xuLy8gY29uc3QgQkxVRV9ISUdITElHSFRfU1RBUlRfTUFSSyA9ICc8bWFyayBzdHlsZT1cImJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRDlFQ0ZBIDkwJSwgdHJhbnNwYXJlbnQgMTAwJSk7IHBhZGRpbmc6IDFweCAxcHg7XCI+Jztcbi8vIGNvbnN0IFVOREVSTElORV9TVEFSVF9NQVJLID0gJzxtYXJrIHN0eWxlPVwiYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNFQzQwN0E7IHBhZGRpbmc6IDBweCAxcHg7IG1hcmdpbjogMCAtMnB4OyBiYWNrZ3JvdW5kOiBub25lO1wiPidcbmNvbnN0IEVORF9NQVJLID0gJzwvbWFyaz4nO1xuXG5cbmNvbnN0IGJpbmRPcGVyYXRpb25CdG5zID0gKGUpID0+IHtcbiAgY29uc3QgeyBhY3RpdmVFbGVtZW50IH0gPSBkb2N1bWVudDtcbiAgaWYgKCFhY3RpdmVFbGVtZW50KSByZXR1cm47XG5cbiAgLy8gRmluZCBjdXJyZW50IGVkaXRpbmcgbm90ZWJvb2tcbiAgbGV0IHsgcGFyZW50RWxlbWVudDogbm90ZWJvb2tFbGVtZW50IH0gPSBhY3RpdmVFbGVtZW50O1xuICB3aGlsZSAobm90ZWJvb2tFbGVtZW50KSB7XG4gICAgaWYgKFxuICAgICAgbm90ZWJvb2tFbGVtZW50LnRhZ05hbWUgPT09ICdESVYnIFxuICAgICAgJiYgbm90ZWJvb2tFbGVtZW50LmNsYXNzTmFtZS5pbmNsdWRlcygnbm90ZWJvb2tfX2NlbGwnKVxuICAgICAgJiYgbm90ZWJvb2tFbGVtZW50LmNsYXNzTmFtZS5pbmNsdWRlcygnY2VsbC0tbWFya2Rvd24nKVxuICAgICAgJiYgbm90ZWJvb2tFbGVtZW50LmNsYXNzTmFtZS5pbmNsdWRlcygnY2VsbC0tYWN0aXZlJylcbiAgICAgICYmIG5vdGVib29rRWxlbWVudC5jbGFzc05hbWUuaW5jbHVkZXMoJ2NlbGwtLWVkaXRpbmcnKVxuICAgICkge1xuICAgICAgbGV0IGN1cnJlbnRFZGl0Tm90ZUJvb2tJZCA9IG5vdGVib29rRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICBiaW5kT3BlcmF0aW9uQnRucy5jdXJyZW50RWRpdE5vdGVCb29rSWQgPSBjdXJyZW50RWRpdE5vdGVCb29rSWQ7XG4gICAgICBjb25zdCB0b29sYmFyRWxlbWVudCA9IG5vdGVib29rRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yLXRvb2xiYXInKTtcbiAgICAgIC8vIEZpbmQgdGhlIHRpdGxlIG9wZXJhdGlvbiBidXR0b25cbiAgICAgIGNvbnN0IHRpdGxlQnRuID0gQXJyYXkuZnJvbSh0b29sYmFyRWxlbWVudC5jaGlsZE5vZGVzKS5maW5kKG5vZGUgPT4ge1xuICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSAnQScgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykuaW5jbHVkZXMoJ+agh+mimCcpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2VcbiAgICAgIH0pO1xuICAgICAgaWYgKEFycmF5LmZyb20odG9vbGJhckVsZW1lbnQuY2hpbGROb2RlcykuZmluZChlbGUgPT4ge1xuICAgICAgICByZXR1cm4gZWxlLmdldEF0dHJpYnV0ZSgndGl0bGUnKSA9PT0gb3BlcmF0aW9ucy5ibHVlTWFya2VyLnRpdGxlO1xuICAgICAgfSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBjcmVhdGUgYmx1ZS1tYXJrZXIgYnV0dG9uXG4gICAgICBjb25zdCBibHVlTWFya2VyQnRuID0gdGl0bGVCdG4uY2xvbmVOb2RlKCk7XG4gICAgICBibHVlTWFya2VyQnRuLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBvcGVyYXRpb25zLmJsdWVNYXJrZXIudGl0bGUpO1xuICAgICAgYmx1ZU1hcmtlckJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgb3BlcmF0aW9ucy5ibHVlTWFya2VyLmNsYXNzTmFtZSk7XG4gICAgICBibHVlTWFya2VyQnRuLnNldEF0dHJpYnV0ZShvcGVyYXRpb25DdXN0b21BdHRyaWJ1dGUsIG9wZXJhdGlvbnMuYmx1ZU1hcmtlci5hY3Rpb24pO1xuICAgICAgYmx1ZU1hcmtlckJ0bi5vbmNsaWNrID0gaGFuZGxlQ2xpY2s7XG4gICAgICAvLyBjcmVhdGUgdW5kZXJsaW5lIGJ1dHRvblxuICAgICAgY29uc3QgcmVkVW5kZXJsaW5lQnRuID0gdGl0bGVCdG4uY2xvbmVOb2RlKCk7XG4gICAgICByZWRVbmRlcmxpbmVCdG4uc2V0QXR0cmlidXRlKCd0aXRsZScsIG9wZXJhdGlvbnMucmVkVW5kZXJsaW5lLnRpdGxlKTtcbiAgICAgIHJlZFVuZGVybGluZUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgb3BlcmF0aW9ucy5yZWRVbmRlcmxpbmUuY2xhc3NOYW1lKTtcbiAgICAgIHJlZFVuZGVybGluZUJ0bi5zZXRBdHRyaWJ1dGUob3BlcmF0aW9uQ3VzdG9tQXR0cmlidXRlLCBvcGVyYXRpb25zLnJlZFVuZGVybGluZS5hY3Rpb24pO1xuICAgICAgcmVkVW5kZXJsaW5lQnRuLm9uY2xpY2sgPSBoYW5kbGVDbGljaztcbiAgICAgIC8vIEFkZCB0aGVtIHRvIHRoZSB0b29sYmFyXG4gICAgICB0b29sYmFyRWxlbWVudC5pbnNlcnRCZWZvcmUoYmx1ZU1hcmtlckJ0biwgdGl0bGVCdG4ubmV4dFNpYmxpbmcpO1xuICAgICAgdG9vbGJhckVsZW1lbnQuaW5zZXJ0QmVmb3JlKHJlZFVuZGVybGluZUJ0biwgdGl0bGVCdG4ubmV4dFNpYmxpbmcpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG5vdGVib29rRWxlbWVudCA9IG5vdGVib29rRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB9XG59O1xuXG5iaW5kT3BlcmF0aW9uQnRucy5jdXJyZW50RWRpdE5vdGVCb29rSWQgPSAnJztcblxuY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZ0KSA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2dDtcbiAgICBjb25zdCBvcGVyYXRpb25UeXBlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShvcGVyYXRpb25DdXN0b21BdHRyaWJ1dGUpO1xuICAgIGhpZ2hsaWdodE9wZXJhaW9uKG9wZXJhdGlvblR5cGUpO1xufTtcblxuY29uc3QgaGlnaGxpZ2h0T3BlcmFpb24gPSAob3BlcmF0aW9uVHlwZSkgPT4ge1xuICBjb25zdCBzZWxlY3RDb250ZW50ID0gX2dldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkgfHwgX2dldFNlbGVjdGlvbigpLnRleHQ7XG4gIGlmICghc2VsZWN0Q29udGVudCkge1xuICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0ZWQgdGhlIGNvbnRlbnQgeW91IHdhbnQgdG8gaGlnaGxpZ2h0IGZpcnN0LicpXG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0ICRjb2RlTWlycm9yID0gX2dldFNlbGVjdGlvbigpLmFuY2hvck5vZGUucGFyZW50RWxlbWVudC5Db2RlTWlycm9yO1xuICBpZighJGNvZGVNaXJyb3IpIHJldHVybjtcbiAgY29uc3Qgc3RhcnROb2RlID0gJGNvZGVNaXJyb3IuZ2V0Q3Vyc29yKCdzdGFydCcpO1xuICBjb25zdCBzdGFydExpbmUgPSBzdGFydE5vZGUubGluZTtcbiAgLy8gY29uc3Qgc3RhcnRDb250ZW50ID0gJGNvZGVNaXJyb3IuZ2V0TGluZShzdGFydExpbmUpO1xuICAkY29kZU1pcnJvci5yZXBsYWNlUmFuZ2UoIG9wZXJhdGlvblR5cGUgPT09IG9wZXJhdGlvbnMuYmx1ZU1hcmtlci5hY3Rpb24gPyBvcGVyYXRpb25zLmJsdWVNYXJrZXIubWFyayA6IG9wZXJhdGlvbnMucmVkVW5kZXJsaW5lLm1hcmssIHtcbiAgICAgIGxpbmU6IHN0YXJ0TGluZSxcbiAgICAgIGNoOiBzdGFydE5vZGUuY2hcbiAgfSwge1xuICAgICAgbGluZTogc3RhcnRMaW5lLFxuICAgICAgY2g6IHN0YXJ0Tm9kZS5jaFxuICB9KTtcblxuICBjb25zdCBlbmROb2RlID0gJGNvZGVNaXJyb3IuZ2V0Q3Vyc29yKCdlbmQnKTtcbiAgY29uc3QgZW5kTGluZSA9IGVuZE5vZGUubGluZTtcbiAgLy8gY29uc3QgZW5kQ29udGVudCA9ICRjb2RlTWlycm9yLmdldExpbmUoZW5kTGluZSk7XG4gICRjb2RlTWlycm9yLnJlcGxhY2VSYW5nZShFTkRfTUFSSywge1xuICAgICAgbGluZTogZW5kTGluZSxcbiAgICAgIGNoOiBlbmROb2RlLmNoXG4gIH0sIHtcbiAgICAgIGxpbmU6IGVuZExpbmUsXG4gICAgICBjaDogZW5kTm9kZS5jaFxuICB9KTtcbn07XG5cbmNvbnN0IGVuYWJsZUhpZ2hMaWdodCA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5vbm1vdXNldXAgPSBiaW5kT3BlcmF0aW9uQnRucztcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgIGxldCB7IHBhcmVudEVsZW1lbnQ6IG5vdGVib29rRWxlbWVudCB9ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCB8fCB7fTtcbiAgICBsZXQgaXNFZGl0aW5nID0gZmFsc2U7XG4gICAgd2hpbGUgKG5vdGVib29rRWxlbWVudCkge1xuICAgICAgaWYgKFxuICAgICAgICBub3RlYm9va0VsZW1lbnQudGFnTmFtZSA9PT0gJ0RJVicgXG4gICAgICAgICYmIG5vdGVib29rRWxlbWVudC5jbGFzc05hbWUuaW5jbHVkZXMoJ25vdGVib29rX19jZWxsJylcbiAgICAgICAgJiYgbm90ZWJvb2tFbGVtZW50LmNsYXNzTmFtZS5pbmNsdWRlcygnY2VsbC0tbWFya2Rvd24nKVxuICAgICAgICAmJiBub3RlYm9va0VsZW1lbnQuY2xhc3NOYW1lLmluY2x1ZGVzKCdjZWxsLS1hY3RpdmUnKVxuICAgICAgICAmJiBub3RlYm9va0VsZW1lbnQuY2xhc3NOYW1lLmluY2x1ZGVzKCdjZWxsLS1lZGl0aW5nJylcbiAgICAgICkge1xuICAgICAgICBpc0VkaXRpbmcgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIG5vdGVib29rRWxlbWVudCA9IG5vdGVib29rRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIGlmIChlLmN0cmxLZXkgJiYgaXNFZGl0aW5nKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSA4NSkge1xuICAgICAgICBoaWdobGlnaHRPcGVyYWlvbihvcGVyYXRpb25zLmJsdWVNYXJrZXIuYWN0aW9uKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gODIpIHtcbiAgICAgICAgaGlnaGxpZ2h0T3BlcmFpb24ob3BlcmF0aW9ucy5yZWRVbmRlcmxpbmUuYWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGVuYWJsZUhpZ2hMaWdodDsiLCJjb25zdCBjcmVhdGVGb3JtYXRCdXR0b24gPSAoKSA9PiB7XG4gIHVuc2FmZVdpbmRvdy53aW5kb3cuJHBhbmd1ID0gcGFuZ3U7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgY29uc3QgbGVmdENvbW1hbmRzID0gaGVhZGVyLmNoaWxkTm9kZXNbaGVhZGVyLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG4gIGNvbnN0IGxlZnRDb21tYW5kc0J1dHRvbnMgPSBsZWZ0Q29tbWFuZHMucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gIGNvbnN0IGdob3N0Tm9kZSA9IGxlZnRDb21tYW5kc0J1dHRvbnNbMF07XG4gIGNvbnN0IGZvcm1hdE5vZGUgPSBnaG9zdE5vZGUuY2xvbmVOb2RlKHRydWUpO1xuICBmb3JtYXROb2RlLnRleHRDb250ZW50ID0gXCJGb3JtYXQgTm90ZWJvb2tcIjtcbiAgZ2hvc3ROb2RlLnBhcmVudE5vZGUucHJlcGVuZChmb3JtYXROb2RlKTtcbiAgZm9ybWF0Tm9kZS5zZXRBdHRyaWJ1dGUoICdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiAjMDk2OWRhICFpbXBvcnRhbnQ7IGNvbG9yOiB3aGl0ZTsnKTtcbiAgZm9ybWF0Tm9kZS5vbmNsaWNrID0gZm9ybWF0UGFnZTtcbn07XG5cbmNvbnN0IGZvcm1hdFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZWJvb2tfX2NvbnRlbnQnKTtcbiAgY29uc3QgcHl0aG9uQ29kZWNoaWxkcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbF9fZWRpdG9yLXdyYXBwZXInKV07XG4gIEdNX2xvZyhweXRob25Db2RlY2hpbGRzLmxlbmd0aCk7XG4gIGZvcm1hdENvZGUoMCwgcHl0aG9uQ29kZWNoaWxkcywgY29udGVudCk7XG59XG5cbmNvbnN0IGZvcm1hdENvZGUgPSAoaWR4LCBpdGVtcywgY29udGVudCkgPT4ge1xuICBpZiAoaWR4ID49IGl0ZW1zLmxlbmd0aCkge1xuICAgIGNvbnRlbnQuc2Nyb2xsVG9wID0gMDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bC5ub3RlYm9va19fYWN0aW9ucycpLmNoaWxkTm9kZXNbMF0uY2xpY2soKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY2hpbGQgPSBpdGVtc1tpZHhdO1xuICBjaGlsZC5zY3JvbGxJbnRvVmlldygpO1xuICBjaGlsZC5jbGljaygpO1xuICBjb250ZW50LnNjcm9sbFRvcCA9IGNvbnRlbnQuc2Nyb2xsVG9wIC0gMjA7XG4gIEdNX2xvZygnc2Nyb2xsIHRvOicsIGNoaWxkLCBpZHgpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gZm9ybWF0IHRoZSBweXRob24gY29kZSBieSBjbGljayB0aGUgcGFnZSBwcmV0dHkgYnV0dG9uXG4gICAgICBjaGlsZC5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmNlbGxfX3Rvb2xiYXInKS5jaGlsZE5vZGVzWzJdLmNsaWNrKCk7XG4gIH0sIDApXG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb3JtYXRDb2RlKGlkeCArIDEsIGl0ZW1zLCBjb250ZW50KTtcbiAgfSwgNTAwKVxufVxuXG5jb25zdCBmb3JtYXRCeVNhdiA9ICgpID0+IHtcbiAgbGV0IHNob3VsZEZvcm1hdCA9IGZhbHNlO1xuICBjb25zdCBvcmlnaW5PcGVuID0gdW5zYWZlV2luZG93LndpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3BlbjtcbiAgY29uc3Qgb3JpZ2luU2VuZCA9IHVuc2FmZVdpbmRvdy53aW5kb3cuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQ7XG4gIHVuc2FmZVdpbmRvdy53aW5kb3cuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwsIC4uLmFyZ3MpIHtcbiAgICBHTV9sb2cobWV0aG9kLCB1cmwpXG4gICAgc2hvdWxkRm9ybWF0ID0gbWV0aG9kID09PSAnUFVUJyAmJiAvKFxcL2FwaVxcL25vdGVib29rc1xcLykuKi8udGVzdCh1cmwpO1xuICAgIG9yaWdpbk9wZW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICB1bnNhZmVXaW5kb3cud2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXBkYXRlRGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICBpZiAodXBkYXRlRGF0YSAmJiB1cGRhdGVEYXRhPy5Db250ZW50Py5jZWxscy5sZW5ndGgpXG4gICAgICB7XG4gICAgICAgIHVwZGF0ZURhdGEuQ29udGVudC5jZWxscyA9IHVwZGF0ZURhdGEuQ29udGVudC5jZWxscy5tYXAoKGNlbGwsIGlkeCkgPT4ge1xuICAgICAgICAgIGlmIChjZWxsLmNlbGxfdHlwZSA9PT0gJ21hcmtkb3duJykge1xuICAgICAgICAgICAgY2VsbC5zb3VyY2UgPSBwYW5ndS5zcGFjaW5nKGNlbGwuc291cmNlKTtcbiAgICAgICAgICAgIGNlbGwuc291cmNlID0gY2VsbC5zb3VyY2UucmVwbGFjZSgvKFxcKlxcKilcXHMoLio/KVxccyhcXCpcXCopL2csICckMSQyJDMnKS5yZXBsYWNlKC8oXFwqKVxccyguKj8pXFxzKFxcKikvZywgJyQxJDIkMycpO1xuXG4gICAgICAgICAgICBjZWxsLnNvdXJjZS5tYXRjaCgvXFxbLipcXF1cXCgoKGh0dHBzPzpcXC9cXC98d3d3XFwuKSgoW2EtekEtWjAtOV0rLT8pK1thLXpBLVowLTldK1xcLikrW2EtekEtWl0rKSg6XFxkKyk/KFxcLy4qKT8oXFw/LiopPygjLiopP1xcKS9pZylcbiAgICAgICAgICAgICAgPy5ldmVyeSh1cmwgPT4ge1xuICAgICAgICAgICAgICAgIGNlbGwuc291cmNlID0gY2VsbC5zb3VyY2UucmVwbGFjZUFsbCh1cmwsIHVybC5yZXBsYWNlQWxsKC9cXHMrL2csICcnKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY2VsbC5jZWxsX3R5cGUgPT09ICdjb2RlJykge1xuICAgICAgICAgICAgY2VsbC5zb3VyY2UgPSBjZWxsLnNvdXJjZS5yZXBsYWNlKC8oXFxuKSQvLCAnJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjZWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICBHTV9sb2coJ3VwZGF0ZURhdGEnLCB1cGRhdGVEYXRhKVxuICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkodXBkYXRlRGF0YSk7XG4gICAgICAgIHNob3VsZEZvcm1hdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7fVxuICAgIG9yaWdpblNlbmQuYXBwbHkodGhpcywgW2RhdGFdKTtcbiAgfTtcbn07XG5cbmNvbnN0IGVuYWJsZUZvcm1hdCA9ICgpID0+IHtcbiAgY3JlYXRlRm9ybWF0QnV0dG9uKCk7XG4gIGZvcm1hdEJ5U2F2KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbmFibGVGb3JtYXQ7IiwiaW1wb3J0IGVuYWJsZUhpZ2hMaWdodCBmcm9tICcuL2hpZ2hsaWdodCc7XG5pbXBvcnQgZW5hYmxlRm9ybWF0IGZyb20gJy4vZm9ybWF0JztcblxuKGZ1bmN0aW9uKCkge1xuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PntcbiAgICAgIGNvbnN0IGlzRG93bmxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkb3dubG9hZC1wcm9ncmVzc19fYnRuJykubGVuZ3RoID4gMDtcbiAgICAgIEdNX2xvZygnaXNEb3dubG9hZGluZycsIGlzRG93bmxvYWRpbmcpO1xuICAgICAgaWYgKGlzRG93bmxvYWRpbmcpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgcmV0dXJuIGluaXQoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlbmFibGVGb3JtYXQoKTtcbiAgICAgICAgZW5hYmxlSGlnaExpZ2h0KCk7XG4gICAgICB9XG4gICAgfSwgNTAwMClcbiAgfTtcblxuICBpbml0KCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbIm9wZXJhdGlvbnMiLCJvcGVyYXRpb25DdXN0b21BdHRyaWJ1dGUiLCJfZ2V0U2VsZWN0aW9uIiwid2luZG93IiwiZ2V0U2VsZWN0aW9uIiwiZG9jdW1lbnQiLCJiaW5kT3BlcmF0aW9uQnRucyIsImUiLCJhY3RpdmVFbGVtZW50IiwicGFyZW50RWxlbWVudCIsIm5vdGVib29rRWxlbWVudCIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJpbmNsdWRlcyIsImN1cnJlbnRFZGl0Tm90ZUJvb2tJZCIsImdldEF0dHJpYnV0ZSIsInRvb2xiYXJFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInRpdGxlQnRuIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGROb2RlcyIsImZpbmQiLCJub2RlIiwiZWxlIiwiYmx1ZU1hcmtlckJ0biIsImNsb25lTm9kZSIsInNldEF0dHJpYnV0ZSIsIm9uY2xpY2siLCJoYW5kbGVDbGljayIsInJlZFVuZGVybGluZUJ0biIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiZXZ0IiwidGFyZ2V0Iiwib3BlcmF0aW9uVHlwZSIsImhpZ2hsaWdodE9wZXJhaW9uIiwidG9TdHJpbmciLCJ0ZXh0IiwiYWxlcnQiLCIkY29kZU1pcnJvciIsImFuY2hvck5vZGUiLCJDb2RlTWlycm9yIiwic3RhcnROb2RlIiwiZ2V0Q3Vyc29yIiwic3RhcnRMaW5lIiwibGluZSIsInJlcGxhY2VSYW5nZSIsImNoIiwiZW5kTm9kZSIsImVuZExpbmUiLCJmb3JtYXRQYWdlIiwiY29udGVudCIsInB5dGhvbkNvZGVjaGlsZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiR01fbG9nIiwibGVuZ3RoIiwiZm9ybWF0Q29kZSIsImlkeCIsIml0ZW1zIiwic2Nyb2xsVG9wIiwiY2xpY2siLCJjaGlsZCIsInNjcm9sbEludG9WaWV3Iiwic2V0VGltZW91dCIsInBhcmVudE5vZGUiLCJmb3JtYXRCeVNhdiIsInNob3VsZEZvcm1hdCIsIm9yaWdpbk9wZW4iLCJ1bnNhZmVXaW5kb3ciLCJYTUxIdHRwUmVxdWVzdCIsInByb3RvdHlwZSIsIm9wZW4iLCJvcmlnaW5TZW5kIiwic2VuZCIsIm1ldGhvZCIsInVybCIsImFyZ3MiLCJ0ZXN0IiwiYXBwbHkiLCJ0aGlzIiwiYXJndW1lbnRzIiwiZGF0YSIsInVwZGF0ZURhdGEiLCJKU09OIiwicGFyc2UiLCJDb250ZW50IiwiY2VsbHMiLCJtYXAiLCJjZWxsIiwiY2VsbF90eXBlIiwic291cmNlIiwicGFuZ3UiLCJzcGFjaW5nIiwicmVwbGFjZSIsIm1hdGNoIiwiZXZlcnkiLCJyZXBsYWNlQWxsIiwic3RyaW5naWZ5IiwiZXJyIiwiaW5pdCIsInRpbWVyIiwiaXNEb3dubG9hZGluZyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGVhclRpbWVvdXQiLCIkcGFuZ3UiLCJoZWFkZXIiLCJnaG9zdE5vZGUiLCJmb3JtYXROb2RlIiwidGV4dENvbnRlbnQiLCJwcmVwZW5kIiwiY3JlYXRlRm9ybWF0QnV0dG9uIiwiYm9keSIsIm9ubW91c2V1cCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpc0VkaXRpbmciLCJjdHJsS2V5Iiwia2V5Q29kZSJdLCJzb3VyY2VSb290IjoiIn0=