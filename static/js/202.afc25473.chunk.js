"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[202],{202:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,o,a,i,c,s,u=t(861),l=t(439),p=t(757),d=t.n(p),h=t(791),x=t(340),Z=t(689),m=t(168),f=t(924),g=t(87),v=f.ZP.div(r||(r=(0,m.Z)(["\n  padding: 20px;\n\n  padding-top: 120px;\n"]))),j=f.ZP.input(o||(o=(0,m.Z)(["\n  margin-right: 10px;\n  padding: 8px;\n  font-size: 16px;\n"]))),b=f.ZP.button(a||(a=(0,m.Z)(["\n  background-color: #a855f7;\n  color: white;\n  border: none;\n  padding: 10px 16px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #9333ea;\n  }\n"]))),k=f.ZP.ul(i||(i=(0,m.Z)(["\n  list-style: none;\n  padding: 0;\n  margin-top: 20px;\n"]))),I=f.ZP.li(c||(c=(0,m.Z)(["\n  margin-bottom: 10px;\n"]))),J=(0,f.ZP)(g.rU)(s||(s=(0,m.Z)(["\n  text-decoration: none;\n  color: #c084fc;\n  font-weight: bold;\n  font-size: 1.5rem;\n\n  transition: color 0.3s ease;\n\n  &:hover {\n    color: #0056b3;\n  }\n"]))),w=t(184),y=function(){var n=(0,h.useState)(""),e=(0,l.Z)(n,2),t=e[0],r=e[1],o=(0,h.useState)([]),a=(0,l.Z)(o,2),i=a[0],c=a[1],s=(0,Z.s0)(),p=function(){var n=(0,u.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,x.Z.get("https://api.themoviedb.org/3/search/movie",{params:{include_adult:!1,language:"en-US",page:1,query:t},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWM4YjU4MjhiNGVjNGMwZjU5YzFkZTVlMmQ1ZTNiOCIsInN1YiI6IjY1YzNhMDVlMmZlMmZhMDE4NDJhODNlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V9SAFWmxQkdTT5KUPdr_PSuh1d-FJ7WmxFeruZ9_Y5Q"}});case 3:e=n.sent,c(e.data.results),s("/movies?query=".concat(t)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(v,{children:[(0,w.jsx)(j,{onChange:function(n){return r(n.target.value)},type:"text",value:t}),(0,w.jsx)(b,{onClick:p,children:"Search"}),(0,w.jsx)(k,{children:i.map((function(n){return(0,w.jsx)(I,{children:(0,w.jsx)(J,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})})}}}]);
//# sourceMappingURL=202.afc25473.chunk.js.map