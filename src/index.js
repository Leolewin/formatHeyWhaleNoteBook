import enableHighLight from './highlight';
import enableFormat from './format';

(function() {
  const init = () => {
    const timer = setTimeout(() =>{
      const isDownloading = document.getElementsByClassName('download-progress__btn').length > 0;
      GM_log('isDownloading', isDownloading);
      if (isDownloading) {
        clearTimeout(timer);
        return init();
      }
      else {
        enableFormat();
        enableHighLight();
      }
    }, 5000)
  };

  init();
})();
