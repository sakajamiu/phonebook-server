(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),a=t(14),u=t.n(a),r=(t(19),t(3)),i=t(0),s=function(e){var n=e.person,t=e.deletePerson;return Object(i.jsxs)("p",{className:"contactDisplay",children:["  ",n.name," : ",n.phone,Object(i.jsx)("button",{onClick:function(){window.confirm("Delete ".concat(n.name," ?"))&&t()},children:"delete"})]})},l=function(e){var n=e.onChange1,t=e.onChange2,c=e.value1,o=e.value2,a=e.onSubmit;return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:a,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:c,onChange:n})]}),Object(i.jsxs)("div",{children:["phone: ",Object(i.jsx)("input",{value:o,onChange:t,type:"number"})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})})},d=function(e){var n=e.onChange;return Object(i.jsxs)("div",{children:["filter shown with ",Object(i.jsx)("input",{onChange:n})]})},j=t(4),f=t.n(j),h="/api/persons",b=function(){return f.a.get(h).then((function(e){return e.data}))},m=function(e){return f.a.post(h,e).then((function(e){return e.data}))},O=function(e,n){return f.a.put("".concat(h,"/").concat(n),e).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},v=function(e){var n=e.message,t=e.type;return null===n?null:Object(i.jsx)("div",{className:t,children:n})},x=function(){var e=Object(c.useState)([]),n=Object(r.a)(e,2),t=n[0],o=n[1],a=Object(c.useState)(""),u=Object(r.a)(a,2),j=u[0],f=u[1],h=Object(c.useState)(""),x=Object(r.a)(h,2),w=x[0],g=x[1],C=Object(c.useState)(!0),y=Object(r.a)(C,2),S=y[0],k=y[1],N=Object(c.useState)(""),L=Object(r.a)(N,2),T=L[0],D=L[1],P=Object(c.useState)(null),E=Object(r.a)(P,2),J=E[0],B=E[1],I=Object(c.useState)(""),M=Object(r.a)(I,2),q=M[0],z=M[1];Object(c.useEffect)((function(){b().then((function(e){return o(e)}))}),[]);var A=S?t:t.filter((function(e){return e.name.toLowerCase().includes(T.toLowerCase())||e.phone.includes(T)}));return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(v,{message:J,type:q}),Object(i.jsx)(d,{onChange:function(e){k(!1),D(e.target.value)}}),Object(i.jsx)("div",{children:Object(i.jsx)("h2",{children:"add a New"})}),Object(i.jsx)(l,{onChange1:function(e){f(e.target.value)},onChange2:function(e){g(e.target.value)},value1:j,value2:w,onSubmit:function(e){e.preventDefault();var n={name:j,phone:w};if(t.some((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))){if(window.confirm("".concat(j," is already in the phonebook, \n        do you want to replace the old number with a new one"))){var c=t.find((function(e){return e.name===n.name}));O(n,c.id).then((function(e){return o(t.map((function(n){return n.id!==c.id?n:e})))})),B("".concat(n.name," contact successfully update")),z("success"),f(""),g(""),setTimeout((function(){B(null)}),2e3)}}else t.some((function(e){return e.phone===n.phone}))?alert("".concat(w," is already in the phonebook")):""===n.name||""===n.number?alert("please fill all the details to add new number"):(f(""),g(""),m(n).then((function(e){return o(t.concat(e))})),B("".concat(n.name," contact successfully added")),z("success"),setTimeout((function(){B(null)}),2e3))}}),Object(i.jsx)("h2",{children:"Numbers"}),A.map((function(e){return Object(i.jsx)(s,{person:e,deletePerson:function(){return function(e){var n=t.find((function(n){return n.id===e}));p(e).then((function(e){return console.log(e)})).catch((function(e){B("".concat(n.name," details was already deleted from server")),z("error"),setTimeout((function(){B(null)}),2e3)})),o(t.filter((function(n){return n.id!==e}))),B("".concat(n.name," details is deleted successfully")),z("success"),setTimeout((function(){B(null)}),2e3)}(e.id)}},e.id)}))]})};u.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6170b014.chunk.js.map