(this["webpackJsonpnew-game-react"]=this["webpackJsonpnew-game-react"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},,function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),i=c(7),o=c.n(i),s=(c(12),c(6)),r=c(2),l=(c(13),[{id:"cat1",img:"2",color:"red"},{id:"cat1",img:"2",color:"red"},{id:"cat2",img:"3",color:"yellow"},{id:"cat2",img:"3",color:"yellow"},{id:"cat3",img:"4",color:"orange"},{id:"cat3",img:"4",color:"orange"},{id:"cat4",img:"5",color:"blue"},{id:"cat4",img:"5",color:"blue"},{id:"cat5",img:"12",color:"green"},{id:"cat5",img:"12",color:"green"},{id:"cat6",img:"13",color:"purple"},{id:"cat6",img:"13",color:"purple"}]),d=[{id:"cat1",img:"2",color:"red"},{id:"cat1",img:"2",color:"red"},{id:"cat2",img:"3",color:"yellow"},{id:"cat2",img:"3",color:"yellow"},{id:"cat3",img:"4",color:"orange"},{id:"cat3",img:"4",color:"orange"},{id:"cat4",img:"5",color:"blue"},{id:"cat4",img:"5",color:"blue"},{id:"cat5",img:"12",color:"green"},{id:"cat5",img:"12",color:"green"},{id:"cat6",img:"13",color:"purple"},{id:"cat6",img:"13",color:"purple"},{id:"cat7",img:"1",color:"lime"},{id:"cat7",img:"1",color:"lime"},{id:"cat8",img:"15",color:"aqua"},{id:"cat8",img:"15",color:"aqua"},{id:"cat9",img:"16",color:"cyan"},{id:"cat9",img:"16",color:"cyan"},{id:"cat10",img:"10",color:"gray"},{id:"cat10",img:"10",color:"gray"}],u=(c(14),c(0)),b=function(t){var e=t.gamePeriod,c=t.endDate,a=t.setGamePeriod,i=t.steps,o=t.setGameType,s=t.setCardsType,l=t.gameType,d=t.cardsType,b=Object(n.useState)(null),m=Object(r.a)(b,2),j=m[0],g=m[1],O=Math.round((c-j)/1e3).toString().split(""),f=3===O[O.length-1]||2;return Object(u.jsx)("div",{children:"start"===e?Object(u.jsx)("div",{className:"results-modal",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:' \u0442\u0438\u043f\u0438\u0447\u043d\u0430\u044f \u0438\u0433\u0440\u0430 "\u043d\u0430\u0439\u0434\u0438 \u043f\u0430\u0440\u0443". \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u043f\u0440\u043e\u0441\u0442\u044b: \u043d\u0430\u0434\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u0439\u0442\u0438 \u043f\u0430\u0440\u0443'}),Object(u.jsxs)("div",{className:"side-buttons",children:[Object(u.jsx)("button",{className:"3x4"===l?"side-buttons__butttons active":"side-buttons__butttons",onClick:function(){return o("3x4")},children:"3x4"}),Object(u.jsx)("button",{className:"5x4"===l?"side-buttons__butttons active":"side-buttons__butttons",onClick:function(){return o("5x4")},children:"5x4"}),Object(u.jsx)("button",{className:"cats"===d?"side-buttons__butttons active":"side-buttons__butttons",onClick:function(){return s("cats")},children:"cats"}),Object(u.jsx)("button",{className:"colors"===d?"side-buttons__butttons active":"side-buttons__butttons",onClick:function(){return s("colors")},children:"colors"}),Object(u.jsx)("button",{className:"modal-button-start",onClick:function(){a("started");var t=Date.now();g(t)},children:"\u0441\u0442\u0430\u0440\u0442\u0443\u0435\u043c"})]})]})}):"end"===e?Object(u.jsx)("div",{className:"results-modal",children:Object(u.jsxs)("div",{className:"results-modal__body",children:[Object(u.jsx)("h1",{className:"results-modal__header",children:"\u0432\u044b \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0438"}),Object(u.jsxs)("div",{className:"results-modal__statistic",children:["\u043d\u0430 \u044d\u0442\u043e \u0443\u0448\u043b\u043e",Object(u.jsxs)("span",{children:[" ",O.join("")>60?((c-j)/6e4).toFixed(2):O," "]}),O.join("")>60?Object(u.jsx)("p",{children:f?"\u043c\u0438\u043d\u0443\u0442":"\u043c\u0438\u043d\u0443\u0442\u044b"}):Object(u.jsx)("p",{children:f?"\u0441\u0435\u043a\u0443\u043d\u0434":"\u0441\u0435\u043a\u0443\u043d\u0434\u044b"}),"\u0430 \u0435\u0449\u0435 \u0432\u044b \u0441\u0434\u0435\u043b\u0430\u043b\u0438 ",i/2," \u0448\u0430\u0433\u043e\u0432"]}),Object(u.jsx)("div",{className:"buttons"}),Object(u.jsx)("button",{className:"buttons__modal-button",onClick:function(){return alert("\u043d\u0443 \u0431\u043b\u0438\u043d")},children:"\u0431\u043b\u0438\u043d"}),Object(u.jsx)("button",{className:"buttons__modal-button",onClick:function(){return window.location.reload()},children:"\u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"})]})}):null})},m=(c(16),function(t){var e=t.card,c=t.index,n=t.flippedArr,a=t.guessedCards,i=t.flip,o=t.cardsType;return Object(u.jsxs)("div",{className:n.some((function(t){return t.index===c}))||a.flat().find((function(t){return t.index===c}))?"card flip":"card",onClick:function(){return i(c,e.id)},children:[Object(u.jsx)("div",{className:"back-face"}),"cats"===o?Object(u.jsx)("img",{className:"front-face",alt:"img",src:"http://placekitten.com/200/300?image=".concat(e.img)}):Object(u.jsx)("div",{className:"front-face ".concat(e.color)})]},c)});var j=function(){var t=Object(n.useState)([]),e=Object(r.a)(t,2),c=e[0],a=e[1],i=Object(n.useState)([]),o=Object(r.a)(i,2),j=o[0],g=o[1],O=Object(n.useState)([]),f=Object(r.a)(O,2),x=f[0],p=f[1],h=Object(n.useState)("start"),v=Object(r.a)(h,2),_=v[0],N=v[1],y=Object(n.useState)(0),C=Object(r.a)(y,2),k=C[0],T=C[1],w=Object(n.useState)(0),S=Object(r.a)(w,2),P=S[0],D=S[1],F=Object(n.useState)("3x4"),G=Object(r.a)(F,2),A=G[0],E=G[1],M=Object(n.useState)("cats"),q=Object(r.a)(M,2),B=q[0],I=q[1],J=!1;Object(n.useEffect)((function(){var t=[].concat("3x4"===A?l:d);p(t.sort((function(){return.5-Math.random()})))}),[A]),Object(n.useEffect)((function(){if("3x4"===A&&12===j.flat().length||"5x4"===A&&20===j.flat().length){N("end");var t=Date.now();T(t)}return null}),[j]);var L=function(t,e){J||"started"===_&&(D(P+1),a((function(c){return[].concat(Object(s.a)(c),[{index:t,name:e}])})))},z=function(t){g((function(e){return[].concat(Object(s.a)(e),[t])})),J=!1,a([])},H=function(){setTimeout((function(){a([]),J=!1}),700)};return 2===c.length&&(J=!0,function(){var t=c.filter((function(t){return t}));t[0].name===t[1].name?z(t):H()}()),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("span",{className:"version",children:"1.0.1"}),Object(u.jsxs)("div",{className:"3x4"===A?"main-block_4x3":"main-block_5x4",children:[Object(u.jsx)(b,{endDate:k,guessedCards:j,gamePeriod:_,setGamePeriod:N,steps:P,setGameType:E,setCardsType:I,gameType:A,cardsType:B}),Object(u.jsx)("div",{className:"card-list",children:x.map((function(t,e){return Object(u.jsx)(m,{cardsType:B,card:t,index:e,guessedCards:j,flippedArr:c,flip:L},e)}))})]})]})},g=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;c(t),n(t),a(t),i(t),o(t)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),g()}],[[17,1,2]]]);
//# sourceMappingURL=main.2d045574.chunk.js.map