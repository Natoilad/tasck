"use strict";(self.webpackChunktasck=self.webpackChunktasck||[]).push([[724],{724:function(n,t,e){e.r(t),e.d(t,{default:function(){return R}});var r,o,a,c,s,i,l,u=e(433),f=e(683),p=e(439),d=e(134),g=e(689),x=e(168),h=e(934),w=e(87),m=h.Z.li(r||(r=(0,x.Z)(["\n  list-style: none;\n  padding: 3px;\n  margin: 0;\n  :hover {\n    // border: 1px solid;\n  }\n"]))),Z=((0,h.Z)(w.rU)(o||(o=(0,x.Z)(["\n  text-decoration: none;\n  color: black;\n  :hover {\n    color: white;\n    background: black;\n  }\n"]))),h.Z.ul(a||(a=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  // textAlign: center:\n  flex-wrap: wrap;\n  // padding: 0;\n  margin: 0 'auto';\n"])))),v=h.Z.img(c||(c=(0,x.Z)(["\n  width: 80px;\n  border-radius: 50px;\n  margin-top: 178px;\n  margin-left: 150px;\n"]))),b=h.Z.p(s||(s=(0,x.Z)(["\n  margin: 5px;\n  color: white;\n"]))),S=h.Z.div(i||(i=(0,x.Z)(["\n  border-radius: 14px;\n\n  background: #471ca9;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-bottom: 20px;\n  text-align: center;\n  width: 380px;\n  height: 460px;\n\n  :hover {\n    // scale: 1.1;\n    // color: white;\n    // background: black;\n  }\n"]))),k=h.Z.button(l||(l=(0,x.Z)(["\n  // box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n\n  width: 196px;\n  margin: 0 auto;\n  border: none;\n  cursor: pointer;\n  padding: 14px 28px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n  transition: background-color 0.3s ease-in-out;\n  &:hover {\n    background-color: #5cd3a8;\n  }\n"]))),j=e(861),y=e(687),F=e.n(y),I=e(243),J="https://6441ae9133997d3ef90088cd.mockapi.io/api/v1/users",N=function(){var n=(0,j.Z)(F().mark((function n(){var t,e,r=arguments;return F().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,n.prev=1,n.next=4,I.Z.get("".concat(J,"?page=").concat(t,"&limit=3"));case 4:return e=n.sent,n.abrupt("return",e.data);case 8:throw n.prev=8,n.t0=n.catch(1),new Error(n.t0.statusText);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}(),O=function(){var n=(0,j.Z)(F().mark((function n(){var t;return F().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,I.Z.get("".concat(J));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0.statusText);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),E=function(){var n=(0,j.Z)(F().mark((function n(t,e){var r;return F().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,I.Z.put("".concat(J,"/").concat(t),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0.statusText);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}(),C=e(184),z=function(n){return new Intl.NumberFormat("ja-JP").format(n)},T=function(n){var t=n.users,e=n.handleFollowing;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Z,{children:t.map((function(n){var t=n.id,r=n.user,o=n.avatar,a=n.tweets,c=n.followers,s=n.isFollow;return(0,C.jsx)(m,{children:(0,C.jsxs)(S,{children:[o?(0,C.jsx)(v,{src:o,alt:r,size:80}):(0,C.jsx)(d.ofX,{size:80}),(0,C.jsxs)(b,{children:[z(a)," tweets"]}),(0,C.jsxs)(b,{children:[z(c)," followers"]}),(0,C.jsx)(k,{onClick:function(){e(t),E(t,{followers:s?c-1:c+1})},children:s?"following":"follow"})]})},t)}))}),(0,C.jsx)(g.j3,{})]})},U=function(){},P=e(791),A="USERS",L="Page",M="totalUser",R=function(){var n=(0,P.useState)([]),t=(0,p.Z)(n,2),e=t[0],r=t[1],o=(0,P.useState)(!1),a=(0,p.Z)(o,2),c=a[0],s=a[1],i=(0,P.useState)(null),l=(0,p.Z)(i,2),d=l[0],g=l[1],x=(0,P.useState)(1),h=(0,p.Z)(x,2),w=h[0],m=h[1],Z=(0,P.useState)(0),v=(0,p.Z)(Z,2),b=v[0],S=v[1];console.log(b);var j=JSON.parse(localStorage.getItem(L)),y=JSON.parse(localStorage.getItem(M));(0,P.useEffect)((function(){s(!0);var n=JSON.parse(localStorage.getItem(A));null!==n?r(n):N().then((function(n){var t=n.map((function(n){return(0,f.Z)((0,f.Z)({},n),{},{isFollow:!1})}));r(t),localStorage.setItem(A,JSON.stringify(t))})).catch((function(n){return g(n.message)})).finally((function(){s(!1)}))}),[]),(0,P.useEffect)((function(){w>1?N(w).then((function(n){var t=n.map((function(n){return(0,f.Z)((0,f.Z)({},n),{},{isFollow:!1})}));r([].concat((0,u.Z)(e),(0,u.Z)(t))),localStorage.setItem(A,JSON.stringify([].concat((0,u.Z)(e),(0,u.Z)(t)))),function(n){localStorage.setItem(L,JSON.stringify(n))}(w)})).catch((function(n){return g(n.message)})).finally((function(){s(!1)})):O().then((function(n){var t=n.length;S(t),localStorage.setItem(M,JSON.stringify(t))}))}));return(0,C.jsxs)("div",{children:[d&&(0,C.jsx)("h2",{children:d.message}),e.length>0&&(0,C.jsx)(T,{users:e,handleFollowing:function(n){var t=e.map((function(t){return t.id===n?(0,f.Z)((0,f.Z)({},t),{},{isFollow:!t.isFollow,followers:t.isFollow?t.followers-1:t.followers+1}):t}));r(t),localStorage.setItem(A,JSON.stringify(t))}}),c&&(0,C.jsx)(U,{}),j<y/3&&(0,C.jsx)(k,{onClick:function(){m(j?j+1:function(n){return n+1})},children:"Load More"})]})}}}]);
//# sourceMappingURL=724.8294f16d.chunk.js.map