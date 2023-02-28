function createCookie(name, value, days) {
  var expires = ''
  if (days) {
    var date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + value + expires + '; path=/'
}
function readCookie(name) {
  var nameEQ = name + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}
function eraseCookie(name) {
  createCookie(name, '', -1)
}

if (readCookie('cookie-notice-option') == 'true') {
  document.getElementById('c-banner').style.display = 'none'

  function loadScriptAsync(scriptSrc, callback) {
    if (typeof callback !== 'function') {
      throw new Error('Not a valid callback for async script load')
    }
    var script = document.createElement('script')
    script.onload = callback
    script.src = scriptSrc
    document.head.appendChild(script)
  }

  /* This is the part where you call the above defined function and "calls back" your code which gets executed after the script has loaded */

  loadScriptAsync(
    'https://www.googletagmanager.com/gtag/js?id=G-FDGXRYRKNX',
    function () {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())
      gtag('config', 'G-FDGXRYRKNX', { anonymize_ip: true })
    }
  )
} else if (readCookie('cookie-notice-option') == 'false') {
  document.getElementById('c-banner').style.display = 'none'
}

document
  .getElementById('c-banner-accept')
  .addEventListener('click', function () {
    createCookie('cookie-notice-option', 'true', 31)
    document.getElementById('c-banner').style.display = 'none'
    location.reload()
  })

document.getElementById('c-banner-deny').addEventListener('click', function () {
  createCookie('cookie-notice-option', 'false', 31)
  document.getElementById('c-banner').style.display = 'none'
  location.reload()
})

const carousel = () => {
  return {
    selected: 0,
    images: [
      '../assets/images/compass/timeline1.png',
      '../assets/images/compass/timeline2.png',
      '../assets/images/compass/timeline3.png',
      '../assets/images/compass/timeline4.png',
      '../assets/images/compass/timeline5.png',
    ],
  }
}
