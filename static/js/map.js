export function MP (ak) {
  return new Promise(function (resolve, reject) {
    window.onload = function () {
      resolve(BMap)
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
      script.src = 'https://api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=init'
    }
    else {
      script.src = 'http://api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=init'
    }
    script.onerror = reject
    document.head.appendChild(script)
  })
}
