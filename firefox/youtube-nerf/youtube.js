var count = 0

// an exception can crash the whole extension and it's too tedious
// to handle all the cases
function saferunner(foo) {
  try {
    foo()
  } catch (e) {}
}

function scrub() {
  saferunner(() => document.querySelectorAll('ytd-browse').forEach(node => {node.style.display = 'none'}))
  saferunner(() => document.querySelector('#related').style.display = 'none')
  saferunner(() => document.querySelector('#comments').style.display = 'none')
  saferunner(() => document.querySelector('#info').style.display = 'none')
}

// scrub in quick succession early on, so you never see flickering
var rampinterval = 20;
var rampcount = 15000/rampinterval;
function rampup() {
  if (rampcount > 0) {
    rampcount--;
    scrub()
    setTimeout(rampup, 20)
  }
}


// how often the page gets scrubbed in millis
var interval = 200 

function startloop() {
  scrub()
  setTimeout(startloop, interval)
}

rampup()
startloop()
