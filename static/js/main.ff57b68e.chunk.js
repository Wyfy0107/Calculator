(this["webpackJsonpmy-test"]=this["webpackJsonpmy-test"]||[]).push([[0],[,function(t,e,n){},,,,,,,function(t,e,n){t.exports=n(17)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(3),r=n.n(s),c=(n(13),n(4)),l=n(5),o=n(7),u=n(6),p=(n(14),n(15),function(t){return i.a.createElement("div",{className:"display"},t.display)}),d=(n(1),function(t){return i.a.createElement("div",{className:"button",onClick:t.click},i.a.createElement("p",null,t.content))}),f=(n(16),function(t){return i.a.createElement("div",{className:"button-area"},t.a,t.children)}),m=function(t){return i.a.createElement("div",{className:"button",onClick:t.add},t.but)},y=function(t){return i.a.createElement("div",{className:"button",onClick:t.del},t.but)},h=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={display:""},t.clickInput=function(e){var n=t.props.buttonSign[e];if("string"==typeof t.state.display){var a=t.state.display.slice();a+=n,t.setState({display:a})}},t.delDisp=function(){if("string"==typeof t.state.display){var e=t.state.display.slice(0,t.state.display.length-1);t.setState({display:e})}else t.setState({display:""})},t.calculation=function(){var e=null,n=t.state.display.indexOf("+"),a=t.state.display.indexOf("-"),i=t.state.display.indexOf("*"),s=t.state.display.indexOf("/");if(-1!==n)t.state.display.split("+").map((function(t){return parseInt(t)})).reduce((function(t,n){return e=t+n})),t.setState({display:e});else if(-1!==a){t.state.display.split("-").map((function(t){return parseInt(t)})).reduce((function(t,n){return e=t-n})),t.setState({display:e})}else if(-1!==i){t.state.display.split("*").map((function(t){return parseInt(t)})).reduce((function(t,n){return e=t*n})),t.setState({display:e})}else if(-1!==s){t.state.display.split("/").map((function(t){return parseInt(t)})).reduce((function(t,n){return e=t/n})),t.setState({display:e.toFixed(2)})}},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props.buttonSign.map((function(e,n){return i.a.createElement(d,{key:n,content:e,click:function(){return t.clickInput(n)},index:n})}));return i.a.createElement("div",{className:"App"},i.a.createElement(p,{display:this.state.display})," ",i.a.createElement(f,{a:e},i.a.createElement(m,{add:this.calculation,but:this.props.buttonRes[0]})," ",i.a.createElement(y,{del:this.delDisp,but:this.props.buttonRes[1]})," ")," ")}}]),n}(a.Component);h.defaultProps={buttonSign:["1","2","3","4","5","6","7","8","9","0","+","-","*","/"],buttonRes:["=","del"]};var v=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.ff57b68e.chunk.js.map