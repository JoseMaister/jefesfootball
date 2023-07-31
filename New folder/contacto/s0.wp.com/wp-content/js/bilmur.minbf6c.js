!function(){"use strict";var n,o,i,r,a;function c(){n&&n.disconnect()}function d(){o&&o.disconnect()}function u(){i&&(i.disconnect(),i=null)}function s(e,t){for(var n=e||{},r=0;r<t.length;r++)n=void 0===n?n:n[t[r]];return n}function f(e){var t,n,r={};for(n in e||{})"string"==typeof e[n]&&(r[n]=e[n]);return t=Object.keys(r).length?JSON.stringify(r):t}function m(e){var t;if(e)try{t=f(JSON.parse(e))}catch(e){}return t}function l(e,t,n,r){return typeof t[e]===n?t[e]:s(t.configEl,["dataset",e])||r}function p(e,t){t=l(e,t,"string","")||[];return"string"==typeof t?t.split(","):t}function v(e,t){return l(e,t,"string")}var y={},g={};function h(t,n,e){return e.some(function(e){return 0===t.indexOf(e)||0===n.indexOf(e)})}function w(o,i){return function(e){for(var t=e.getEntries(),n=0;n<t.length;n++){var r=t[n].name.replace(/^\d/,"_").replace(/\W/g,"_");"mark"===t[n].entryType?h(r,t[n].name,i.customMarksPrefixes)&&(y[r]=Math.round(t[n].startTime)||0):h(r,t[n].name,i.customMeasuresPrefixes)&&(g[r]=Math.round(t[n].duration)||0)}e=o,Object.keys(y).length&&(e.custom_marks=JSON.stringify(y)),Object.keys(g).length&&(e.custom_measures=JSON.stringify(g))}}function S(){r&&r.disconnect(),a&&a.disconnect()}function _(e,t){!function(r){if(window.LayoutShift)try{var o=0;(n=new PerformanceObserver(function(e){for(var t=e.getEntries(),n=0;n<t.length;n++)o+=t[n].hadRecentInput?0:t[n].value,r.cumulative_layout_shift=Math.round(1e3*o)/1e3})).observe({type:"layout-shift",buffered:!0}),r.cumulative_layout_shift=o}catch(e){c()}}(e),function(r){if(window.LargestContentfulPaint)try{(o=new PerformanceObserver(function(e){for(var t=e.getEntries(),n=0;n<t.length;n++)r.largest_contentful_paint=Math.round(t[n].startTime)})).observe({type:"largest-contentful-paint",buffered:!0})}catch(e){d()}}(e),function(r){if(window.PerformanceElementTiming)try{var o=document.querySelector("[data-bilmur-mie]");if(!o||!o.hasAttribute("elementtiming"))return;(i=new PerformanceObserver(function(e){for(var t=e.getEntries(),n=0;n<t.length;n++)t[n].element===o&&(r.mie_renderTime=Math.round(t[n].renderTime),u())})).observe({type:"element",buffered:!0})}catch(e){u()}}(e),function(e,t){if(window.PerformanceMeasure&&window.PerformanceMark){t.customMeasuresPrefixes=p("customMeasuresPrefixes",t),t.customMarksPrefixes=p("customMarksPrefixes",t);t=w(e,t);try{(r=new PerformanceObserver(t)).observe({type:"mark",buffered:!0}),(a=new PerformanceObserver(t)).observe({type:"measure",buffered:!0})}catch(e){S()}}}(e,t)}function E(e,t){e.provider=v("provider",t),e.service=v("service",t),e.custom_properties="string"==typeof(t=(e=t).customproperties)?m(t):"object"==typeof t?f(t):m(s(e.configEl,["dataset","customproperties"]))}function b(e){return 0<e||0===e}function M(n){var e,t,r=s(window,["performance","timing"])||{},o={};r.navigationStart&&(e=0===(o=(e=window.performance.getEntriesByType("navigation"))&&e[0]?e[0]:{}).startTime?2:1,["unloadEventStart","unloadEventEnd","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","connectEnd","secureConnectionStart","requestStart","responseStart","responseEnd","domLoading","domInteractive","domContentLoadedEventStart","domContentLoadedEventEnd","domComplete","loadEventStart","loadEventEnd"].forEach(function(e){var t;n["nt_"+e]="number"!=typeof r[e=e]||"number"!=typeof r.navigationStart||r[e]<=0||r.navigationStart<=0||0<=(t=r[e]-r.navigationStart)?t:void 0}),2==e&&("number"==typeof o.secureConnectionStart&&0<o.secureConnectionStart&&(t=Math.floor(o.secureConnectionStart)),n.nt_secureConnectionStart=t),n.nt_redirectCount=o.redirectCount,n.nt_nextHopProtocol=o.nextHopProtocol,n.nt_api_level=e)}function t(e,t){var n;!function(e){try{var t=0;document.createNodeIterator(document.body,NodeFilter.SHOW_COMMENT,function(e){return-1<(e.nodeValue||"").indexOf("served from batcache in")?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}).nextNode()&&(t=1),e.batcache_hit=t}catch(e){}}(e),E(e,t),function(e){e.effective_connection_type=s(window,["navigator","connection","effectiveType"]);var t=s(window,["navigator","connection","rtt"]);e.rtt=b(t)?t:void 0,t=s(window,["navigator","connection","downlink"]),e.downlink=b(t)?Math.round(1e3*t):void 0}(e),(n=e).host_name=s(window,["location","hostname"]),n.url_path=s(window,["location","pathname"]),M(e),function(e){for(var t=window.performance.getEntriesByType("paint")||[],n=0;n<t.length;n++)"first-paint"===t[n].name&&(e.start_render=Math.round(t[n].startTime)),"first-contentful-paint"===t[n].name&&(e.first_contentful_paint=Math.round(t[n].startTime))}(e),function(e,t){function n(e){return 0===e.duration||(0<e.encodedBodySize&&0<e.transferSize&&e.transferSize<e.encodedBodySize||!(0<e.transferSize)&&(0<e.decodedBodySize||e.duration<30))}if(e.nt_domContentLoadedEventStart){for(var r=window.performance.getEntriesByType("resource")||[],o=0,i=0,a=0,c=0,d=0,u=0,s=0;s<r.length;s++){var f=r[s];f.responseEnd<e.nt_domContentLoadedEventStart&&(i+=f.decodedBodySize||0,n(f)?a+=f.decodedBodySize||0:o+=f.transferSize||0,"script"===f.initiatorType&&(d+=f.decodedBodySize||0,n(f)?u+=f.decodedBodySize||0:c+=f.transferSize||0))}e.resource_size=i,e.resource_transferred=o,e.js_size=d,e.js_transferred=c,0<i&&(e.resource_cache_percent=Math.floor(a/i*100)),0<d&&(e.js_cache_percent=Math.floor(u/d*100)),t.isFullyLoaded&&(e.last_resource_end=r.reduce(function(e,t){return Math.round(Math.max(e,t.responseEnd))},0))}}(e,t),function(t){for(var e=document.getElementsByTagName("img"),n="0",r=0;r<e.length;r++)if(e[r].getAttribute("scale")&&"0"!==e[r].getAttribute("scale")){n="1";break}if(t.custom_properties)try{var o=JSON.parse(t.custom_properties);o.devicepx=n,t.custom_properties=JSON.stringify(o)}catch(e){t.custom_properties=JSON.stringify({devicepx:n})}else t.custom_properties=JSON.stringify({devicepx:n})}(e)}var T=2e3;var O,x=!1,C={};function P(e){(e=e||{}).wasHiddenOnStart&&(x=!0),c(),d(),u(),S(),x||"loading"===document.readyState||(x=!0,t(C,e),O(C))}!function(t,e){if(window.performance&&window.performance.getEntriesByType){if(O)throw new Error("bilmur was already initialized");if("function"!=typeof t)throw new Error("Callback function expected on bilmur init");O=t,(e=e||{}).configEl=document.getElementById("bilmur")||{};var n,r,t="true"===l("allowIframe",e);try{if(window.self!==window.top&&!t)return}catch(e){if(!t)return}_(C,e),function(e,t){if("hidden"===document.visibilityState)return t.wasHiddenOnStart=!0,e(t);function n(){"hidden"===document.visibilityState&&(document.removeEventListener("visibilitychange",n),t.wasHiddenOnStart=!1,e(t))}document.addEventListener("visibilitychange",n)}(P,e),n=P,r=e,"complete"===document.readyState?setTimeout(o,T):window.addEventListener("load",function(){setTimeout(o,T)})}function o(){var e=performance.getEntriesByType("resource").reduce(function(e,t){return Math.max(e,t.responseEnd)},0),e=Math.floor(performance.now())-Math.floor(e);if(T<e)return r.isFullyLoaded=!0,n(r);e=.75*T<=e?.05*T:.25*T;window.setTimeout(o,e)}}(function(e){var t,n="";for(t in e){var r=e[t];void 0!==r&&(n+="&"+t+"="+encodeURIComponent(r))}n&&((new Image).src="https://pixel.wp.com/boom.gif?bilmur=1"+n)})}();