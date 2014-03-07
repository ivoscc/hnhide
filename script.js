var comments = Array.prototype.slice.call(document.querySelectorAll('td > img[height="1"]'));

Array.prototype.forEach.call(comments, function(el) {
  if (parseInt(el.getAttribute("width")) > 0) {
    el.parentNode.parentNode.style.display = 'none';
  };
});
