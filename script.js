const keywords = [
  'MutationObserver',
  'observe',
  'location.js',
  'X-Forwarded-For',
  'extend-native-history-api.js',
  'window.navigator.userAgent',
  'document.location.href',
  'XMLHttpRequest',
  'window.navigator.userAgent',
  'document.location.href',
  'XMLHttpRequest',
  'X-Forwarded-For',
  'Via',
  'Proxy-Connection',
  'onbeforeunload',
  'navigator.onLine',
  'contentWindow',
  'document.body.innerHTML',
   
 ];

const scripts = document.querySelectorAll('script');

for (const script of scripts) {
  for (const keyword of keywords) {
    if (script.textContent.includes(keyword)) {
      // Bloquear o script
      // ...
    }
  }
}
