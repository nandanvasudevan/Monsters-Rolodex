(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),s=(n(14),n(1)),l=n.n(s),i=n(4),u=n(5),m=n(6),h=n(7),d=n(8),p=(n(16),n(17),n(18),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.name,".png?set=set2&bgset=bg1&ignoreext=false")}),a.a.createElement("h1",{className:"monster-name"},e.monster.name),a.a.createElement("p",null,e.monster.email))}),f=function(e){return a.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return a.a.createElement(p,{key:e.id,monster:e})})))},v=(n(19),function(e){var t=e.placeholder,n=e.handler;return a.a.createElement("input",{className:"search-box",type:"search",placeholder:t,onChange:n})}),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).SearchHandler=function(t){return e.setState({searchString:t.target.value})},e.state={monsters:[],searchString:""},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(i.a)(l.a.mark((function t(){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,e.setState({monsters:r}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchString,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monsters' Rolodex"),a.a.createElement(v,{placeholder:"Search Monsters",handler:this.SearchHandler}),a.a.createElement(f,{monsters:r}),a.a.createElement("h1",null,0===r.length?"No results":""))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.2b6d5038.chunk.js.map