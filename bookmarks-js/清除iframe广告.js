var iframes = document.getElementsByTagName('iframe');
Array.prototype.slice.call(iframes, 0).forEach(function(iframe){
  try {
    iframe.contentWindow.document.body.innerHTML = '';
    iframe.src = '';
  } catch(e) {}
});
