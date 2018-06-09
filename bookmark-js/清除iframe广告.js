(function() {
  clean();
  document.addEventListener('load', clean);

  var timer = setInterval(function() {
    if (iframeAreAllEmpty())
      clearInterval(timer);
    clean();
  }, 1000);

  function iframeAreAllEmpty() {
    for (var i = 0, a = allIframes(); i < a.length; i++) {
      if (!(a[i].src || a[i].contentWindow.document.body.children.length))
        return false;
    }
    return true;
  }

  function allIframes() {
    var iframes = document.getElementsByTagName('iframe');
    return Array.prototype.slice.call(iframes, 0);
  }

  function clean() {
    allIframes().forEach(function(iframe){
      try {
        iframe.style.visibility = 'hidden';
        if (iframe.parentElement != document.body) {
          iframe.parentElement.style.visibility = 'hidden';
        }
        iframe.src = '';
        iframe.contentWindow.document.body.innerHTML = '';
        iframe.addEventListener('load', function() {
          iframe.contentWindow.document.body.innerHTML = '';
        });
      } catch(e) {}
    });
  }
})();
