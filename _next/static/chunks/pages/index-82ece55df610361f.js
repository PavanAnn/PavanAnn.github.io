(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1312)}])},1312:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893),s=n(7294),i=n(392),a=n(6210),l=n(5730),o=n(2938),u=n(5093),c=n(7985),h=n(5121),d=()=>{let[e,t]=(0,s.useState)(),[n,d]=(0,s.useState)(!1),[f,g]=(0,s.useState)(0),[m,p]=(0,s.useState)([]),[x,T]=(0,s.useState)(""),[_,E]=(0,s.useState)(""),[j,S]=(0,s.useState)(0);(0,s.useEffect)(()=>{d(!0),h.Z.get("/api/get_anime_list").then(e=>{t(e.data.animeList),d(!1)}).catch(e=>{console.error("Error fetching data:",e),d(!1)})},[]),(0,s.useEffect)(()=>{k()},[e,f]);let k=()=>{if(e&&e.length>0){Array.from({length:5},(e,t)=>t);let t=[],n=[];for(;t.length<4;){let r=Math.floor(Math.random()*e.length);n.includes(r)||(t.push(e[r].node.title),n.push(r))}t.splice(Math.floor(5*Math.random()),0,e[f].node.title),p(t)}},w=e=>{E(e)},C=()=>{g(e=>e+1),E(""),T(""),k()};return(0,r.jsxs)(i.G,{textAlign:"center",children:[(0,r.jsxs)(a.x,{fontSize:"2xl",children:["TESTE TESTE TESTE  ","-> "," ",j]}),n?(0,r.jsx)(i.G,{as:"div",marginTop:"2rem",children:(0,r.jsx)(l.aN,{})}):e&&f<e.length?(0,r.jsxs)(i.G,{as:"div",marginTop:"2rem",children:[(0,r.jsx)("img",{style:{filter:"blur(10px)"},src:e[f].node.main_picture.large,alt:e[f].node.title}),(0,r.jsx)(i.G,{as:"div",marginTop:"1rem",children:m.map((e,t)=>(0,r.jsx)(o.j,{value:"yes",checked:e===_,onChange:()=>w(e),label:e,name:e},t))}),(0,r.jsx)(u.z,{onClick:()=>{e[f].node.title===_?(T("Correct guess!"),S(j+1)):T("Incorrect guess! Try again."),C()},marginTop:"1rem",children:"Check Guess"}),x&&(0,r.jsx)(a.x,{marginTop:"1rem",children:x}),(0,r.jsx)(c.i,{marginTop:"1rem"})]}):null]})};function f(){return(0,r.jsx)(d,{})}}},function(e){e.O(0,[442,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);