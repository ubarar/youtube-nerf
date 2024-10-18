(function scrub() {
  if (!document.getElementById('youtube-nerf')) {
    var css = '.ytd-reel-shelf-renderer, .ytd-browse, #related, #shorts-container, #comments, #info {display: none !important;}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    head.appendChild(style);
    style.setAttribute('id', 'youtube-nerf')
    style.appendChild(document.createTextNode(css));
  }
  setTimeout(scrub, 1000)
})();
