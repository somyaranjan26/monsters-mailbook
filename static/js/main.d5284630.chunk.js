(this.webpackJsonpmonster=this.webpackJsonpmonster||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),s=n(3),a=n.n(s),c=(n(12),n(4)),i=n(5),l=n(7),d=n(6),u=n(0),h=function(e){return Object(u.jsxs)("div",{className:"border-2 text-center bg-gradient-to-b from-pink-900 to-gray-900  border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-110",children:[Object(u.jsx)("img",{className:"mx-auto w-2/5",src:"https://robohash.org/".concat(e.monster.id,"?set=set2"),alt:"monster"}),Object(u.jsx)("div",{className:"pt-6",children:e.monster.name}),Object(u.jsx)("div",{className:"pb-6",children:e.monster.email})]})},b=function(e){return Object(u.jsx)("div",{className:"flex flex-col md:flex-row flex-wrap ",children:e.monsters.map((function(e){return Object(u.jsx)("div",{className:"p-4 md:w-1/3",children:Object(u.jsx)(h,{monster:e},e.id)})}))})},m=function(e){var t=e.placeholder,n=e.handleChange;return Object(u.jsx)("input",{type:"search",placeholder:t,class:"w-1/2 my-10 bg-gray-800  rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-gray-900 text-base outline-none text-gray-100 placeholder-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",onChange:n})},j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsx)("section",{class:"h-full bg-gradient-to-b from-gray-800 to-gray-900 text-white body-font",children:Object(u.jsxs)("div",{className:"container px-5 py-24 mx-auto text-center",children:[Object(u.jsx)("h1",{className:"font-header text-7xl ",children:"Monsters MailBook"}),Object(u.jsx)(m,{placeholder:"Search Monsters",handleChange:this.handleChange}),Object(u.jsx)(b,{monsters:r})]})})}}]),n}(r.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),s(e),a(e)}))};n(14);a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.d5284630.chunk.js.map