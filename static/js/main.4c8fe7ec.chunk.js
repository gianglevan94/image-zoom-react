(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(27)},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(1),r=n.n(i),s=(n(19),n(8)),c=n(9),u=n(6),l=n(5),m=(n(20),"mouseover"),d="grab",h=function(e){var t=e.url,n=e.zoomUrl,i=e.duration,r=e.magnify,s=e.on,c=e.onImageLoaded,h=e.onZoomIn,p=e.onZoomOut,g=e.alt,f=e.touch,y=Object(o.useState)({left:0,top:0}),w=Object(l.a)(y,2),v=w[0],b=w[1],k=Object(o.useState)(!1),I=Object(l.a)(k,2),E=I[0],L=I[1],j=Object(o.useRef)(null);Object(o.useEffect)(function(){E?h():p()},[E]),Object(o.useLayoutEffect)(function(){var e=document.createElement("img");e.onload=function(){c(),b(Object(u.a)({},v,{width:j.current.clientWidth*r,height:j.current.clientHeight*r}))},e.src=t},[]);var O=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.target.getBoundingClientRect(),o=t?e.targetTouches[0].clientX:e.clientX,a=t?e.targetTouches[0].clientY:e.clientY;return{x:o-n.left,y:a-n.top}}(e,arguments.length>1&&void 0!==arguments[1]&&arguments[1]),n=v.width/r,o=v.height/r,a=t.x/n*(n-v.width),i=t.y/o*(o-v.height);b(Object(u.a)({},v,{left:"".concat(a,"px"),top:"".concat(i,"px")}))};return a.a.createElement("div",{className:"react-zoom-wrapper",style:{cursor:s===d&&E?"grab":"default"},onMouseDown:function(e){s===d&&(L(!0),O(e))},onMouseUp:function(){s===d&&L(!1)},onMouseEnter:function(){s===m&&L(!0)},onMouseLeave:function(){L(!1)},onMouseMove:function(e){E&&O(e)},onTouchStart:function(e){f&&(O(e,!0),L(!0))},onTouchMove:function(e){f&&O(e,!0)},onTouchEnd:function(e){f&&L(!1)}},a.a.createElement("img",{ref:j,alt:g,className:"react-zoom-origin-image",src:t}),!!v.width&&a.a.createElement("img",{className:"react-zoom-image",style:{width:"".concat(v.width,"px"),height:"".concat(v.height,"px"),left:v.left,top:v.top,transition:"opacity ".concat(i,"ms ease-in-out"),opacity:+E},alt:"image zoom",src:n||t}))};h.defaultProps={zoomUrl:"",touch:!0,alt:"image",on:m,magnify:1.5,duration:200,onImageLoaded:function(){},onZoomIn:function(){},onZoomOut:function(){}};var p=Object(o.memo)(h);n(21);function g(){var e=Object(s.a)(["\n  width: 300px;\n"]);return g=function(){return e},e}var f=c.a.div(g()),y=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null,a.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),a.a.createElement(p,{on:"mouseover",url:"http://www.jacklmoore.com/img/daisy.jpg"}),a.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.4c8fe7ec.chunk.js.map