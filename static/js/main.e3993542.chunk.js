(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=(n(9),n(10),n(11),n(12),n(1)),u=(n(13),"https://raw.githubusercontent.com/pdouu/random-quote-machine/master/quotes.json"),s=["peach-gradient","aqua-gradient","warm-flame-gradient","young-passion-gradient","rainy-ashville-gradient","sunny-morning-gradient","blue-gradient"];var l=function(){var e=Object(a.useState)("blue-gradient"),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),l=Object(i.a)(c,2),d=l[0],m=l[1],h=Object(a.useState)(""),f=Object(i.a)(h,2),b=f[0],g=f[1];Object(a.useEffect)((function(){p()}),[]);var p=function(){var e=Math.floor(102*Math.random()),t=Math.floor(6*Math.random());console.log(t),fetch(u).then((function(e){return e.json()})).then((function(n){m(n[e].quote),g(n[e].author),o(s[t])})).catch((function(e){console.log(e)}))};return r.a.createElement("div",{id:"dis-container",className:n+" container-fluid vh-100"},r.a.createElement("div",{id:"quote-container",className:"row justify-content-center h-100"},r.a.createElement("div",{id:"quote-box",className:"col-4 text-center my-auto h-25"},r.a.createElement("div",{id:"text",className:"row text-dark h2 justify-content-center"},r.a.createElement("p",null,d)),r.a.createElement("div",{id:"author",className:"row text-dark h4 justify-content-end"},r.a.createElement("p",null,"- "+b)),r.a.createElement("div",{id:"buttons-container",className:"row align-items-end justify-content-between mt-5"},r.a.createElement("a",{id:"tweet-quote",href:"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+d+"-"+b,target:"_blank",rel:"noopener noreferrer",className:"btn btn-lg peach-gradient "},"Tweet"),r.a.createElement("button",{id:"new-quote",className:"btn btn-lg purple-gradient",onClick:p},"New Quote")))))};c.a.render(r.a.createElement(l,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(14)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.e3993542.chunk.js.map