(function scrub() {
  if (!window.location.toString().includes('https://www.instagram.com/direct/')) {
    var css = 'main, footer {display: none !important;}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    head.appendChild(style);
    style.setAttribute('id', 'ig-nerf')
    style.appendChild(document.createTextNode(css));
  } else {
    document.querySelectorAll('#ig-nerf').forEach(node => node.remove())
  }
  setTimeout(scrub, 500)
})();
