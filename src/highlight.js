
const operations = {
  blueMarker: {
    action: 'blue-marker',
    title: '蓝色马克笔 (Ctrl+U)',
    className: 'fa fa-paint-brush',
    mark: '<mark style="background: linear-gradient(#D9ECFA 90%, transparent 100%); padding: 1px 1px;">'
  },
  redUnderline: {
    action: 'red-underline',
    title: '红色下划线 (Ctrl+R)',
    className: 'fa fa-underline',
    mark: '<mark style="border-bottom: 3px solid #EC407A; padding: 0px 1px; margin: 0 -2px; background: none;">'
  }
};

const operationCustomAttribute = 'data-operationType';

const _getSelection = window.getSelection || window.document.getSelection;
const BLUE_HIGHLIGHT_START_MARK = '<mark style="background: linear-gradient(#D9ECFA 90%, transparent 100%); padding: 1px 1px;">';
const UNDERLINE_START_MARK = '<mark style="border-bottom: 3px solid #EC407A; padding: 0px 1px; margin: 0 -2px; background: none;">'
const END_MARK = '</mark>';


const bindOperationBtns = (e) => {
  const { activeElement } = document;
  if (!activeElement) return;

  // Find current editing notebook
  let { parentElement: notebookElement } = activeElement;
  while (notebookElement) {
    if (
      notebookElement.tagName === 'DIV' 
      && notebookElement.className.includes('notebook__cell')
      && notebookElement.className.includes('cell--markdown')
      && notebookElement.className.includes('cell--active')
      && notebookElement.className.includes('cell--editing')
    ) {
      let currentEditNoteBookId = notebookElement.getAttribute('id');
      bindOperationBtns.currentEditNoteBookId = currentEditNoteBookId;
      const toolbarElement = notebookElement.querySelector('.editor-toolbar');
      // Find the title operation button
      const titleBtn = Array.from(toolbarElement.childNodes).find(node => {
        if (node.tagName === 'A' && node.getAttribute('title').includes('标题')) return true;
        else return false
      });
      if (Array.from(toolbarElement.childNodes).find(ele => {
        return ele.getAttribute('title') === operations.blueMarker.title;
      })) {
        break;
      }
      // create blue-marker button
      const blueMarkerBtn = titleBtn.cloneNode();
      blueMarkerBtn.setAttribute('title', operations.blueMarker.title);
      blueMarkerBtn.setAttribute('class', operations.blueMarker.className);
      blueMarkerBtn.setAttribute(operationCustomAttribute, operations.blueMarker.action);
      blueMarkerBtn.onclick = handleClick;
      // create underline button
      const redUnderlineBtn = titleBtn.cloneNode();
      redUnderlineBtn.setAttribute('title', operations.redUnderline.title);
      redUnderlineBtn.setAttribute('class', operations.redUnderline.className);
      redUnderlineBtn.setAttribute(operationCustomAttribute, operations.redUnderline.action);
      redUnderlineBtn.onclick = handleClick;
      // Add them to the toolbar
      toolbarElement.insertBefore(blueMarkerBtn, titleBtn.nextSibling);
      toolbarElement.insertBefore(redUnderlineBtn, titleBtn.nextSibling);
      break;
    }
    notebookElement = notebookElement.parentElement;
  }
};

bindOperationBtns.currentEditNoteBookId = '';

const handleClick = (evt) => {
    const { target } = evt;
    const operationType = target.getAttribute(operationCustomAttribute);
    highlightOperaion(operationType);
};

const highlightOperaion = (operationType) => {
  const selectContent = _getSelection().toString() || _getSelection().text;
  if (!selectContent) {
    alert('Please selected the content you want to highlight first.')
    return;
  }
  const $codeMirror = _getSelection().anchorNode.parentElement.CodeMirror;
  if(!$codeMirror) return;
  const startNode = $codeMirror.getCursor('start');
  const startLine = startNode.line;
  // const startContent = $codeMirror.getLine(startLine);
  $codeMirror.replaceRange( operationType === operations.blueMarker.action ? operations.blueMarker.mark : operations.redUnderline.mark, {
      line: startLine,
      ch: startNode.ch
  }, {
      line: startLine,
      ch: startNode.ch
  });

  const endNode = $codeMirror.getCursor('end');
  const endLine = endNode.line;
  // const endContent = $codeMirror.getLine(endLine);
  $codeMirror.replaceRange(END_MARK, {
      line: endLine,
      ch: endNode.ch
  }, {
      line: endLine,
      ch: endNode.ch
  });
};

const enableHighLight = () => {
  document.body.onmouseup = bindOperationBtns;
  document.addEventListener('keydown', e => {
    let { parentElement: notebookElement } = document.activeElement || {};
    let isEditing = false;
    while (notebookElement) {
      if (
        notebookElement.tagName === 'DIV' 
        && notebookElement.className.includes('notebook__cell')
        && notebookElement.className.includes('cell--markdown')
        && notebookElement.className.includes('cell--active')
        && notebookElement.className.includes('cell--editing')
      ) {
        isEditing = true;
        break;
      }
      notebookElement = notebookElement.parentElement;
    }

    if (e.ctrlKey && isEditing) {
      if (e.keyCode === 85) {
        highlightOperaion(operations.blueMarker.action);
      }
      else if (e.keyCode === 82) {
        highlightOperaion(operations.redUnderline.action);
      }
    }
  })
}

export default enableHighLight;