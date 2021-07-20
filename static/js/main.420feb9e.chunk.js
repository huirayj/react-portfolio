(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{28:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),r=s(9),i=s.n(r),n=s(2),o=s(11),l=s.n(o),j=s(12),m=s.n(j),d=s(13),h=s.n(d),u=(s(28),s(0)),b=function(e){var t=e.menuState,s=e.setMenuState;return Object(u.jsx)("div",{className:"navbar ".concat(t&&"active"),children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsx)("a",{href:"#hero",className:"logo",children:"<JH />"})}),Object(u.jsxs)("div",{className:"itemContainer",children:[Object(u.jsx)("a",{href:"https://github.com/huirayj",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(l.a,{className:"icon"})}),Object(u.jsx)("a",{href:"mailto:huirayj@gmail.com",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(m.a,{className:"icon"})}),Object(u.jsx)("a",{href:"https://linkedin.com/in/justin-hui-424bab99",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(h.a,{className:"icon"})})]}),Object(u.jsx)("div",{className:"right",children:Object(u.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(u.jsx)("span",{className:"line1"}),Object(u.jsx)("span",{className:"line2"}),Object(u.jsx)("span",{className:"line3"})]})})]})})},g=(s(35),function(e){var t=e.menuState,s=e.setMenuState,a=e.currPage,c=e.setCurrPage;return Object(u.jsx)("div",{className:"menu ".concat(t&&"active"),children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:"hero"===a?"active":"",onClick:function(){s(!1),c("hero")},children:Object(u.jsx)("a",{href:"#hero",children:"Home"})}),Object(u.jsx)("li",{className:"portfolio"===a?"active":"",onClick:function(){s(!1),c("portfolio")},children:Object(u.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(u.jsx)("li",{className:"carousel"===a?"active":"",onClick:function(){s(!1),c("carousel")},children:Object(u.jsx)("a",{href:"#carousel",children:"Carousel"})}),Object(u.jsx)("li",{className:"resume"===a?"active":"",onClick:function(){s(!1),c("resume")},children:Object(u.jsx)("a",{href:"#resume",children:"Resume"})}),Object(u.jsx)("li",{className:"contact"===a?"active":"",onClick:function(){s(!1),c("contact")},children:Object(u.jsx)("a",{href:"#contact",children:"Contact"})})]})})}),p=s(16),O=s(17),f=s.n(O),x=(s(36),function(){var e=Object(a.useRef)();return Object(a.useEffect)((function(){Object(p.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Front-end","Back-end","Full Stack"]})}),[]),Object(u.jsxs)("div",{className:"hero",id:"hero",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsx)("div",{className:"imgContainer",children:Object(u.jsx)("img",{src:"assets/images/avatar.svg",alt:"An avatar."})})}),Object(u.jsx)("div",{className:"right",children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("h2",{children:"Hello There, I'm"}),Object(u.jsx)("h1",{children:"Justin Hui"}),Object(u.jsxs)("h3",{children:["An Aspiring ",Object(u.jsx)("span",{ref:e})," Developer."]})]})}),Object(u.jsx)("div",{className:"bottom",children:Object(u.jsx)("a",{href:"#portfolio",children:Object(u.jsx)(f.a,{className:"icon"})})})]})}),v=(s(37),function(e){var t=e.id,s=e.title,a=e.active,c=e.setSelected;return Object(u.jsx)("li",{className:"list ".concat(a?"active":""),onClick:function(){return c(t)},children:s})}),k=(s(38),[{id:0,title:"Password Generator",img:"assets/images/Portfolio/javascript/password-generator.png",alt:"Password generator site.",deployed:"https://huirayj.github.io/password-generator/"},{id:1,title:"Javascript Quiz",img:"assets/images/Portfolio/javascript/javascript-quiz.png",alt:"Javascript Quiz site.",deployed:"https://huirayj.github.io/js-online-quiz/"},{id:2,title:"Work Day Scheduler",img:"assets/images/Portfolio/javascript/work-day-scheduler.png",alt:"Work Day Scheduler site.",deployed:"https://huirayj.github.io/work-day-scheduler/"}]),N=[{id:0,title:"TBD",img:"assets/images/Carousel/work-in-progress.jpg",alt:"Work in Progress.",deployed:"https://github.com/huirayj/restaurant-landing-page"}],y=[{id:0,title:"Budget Tracker",img:"assets/images/Portfolio/database/budget-tracker.png",alt:"Budget Tracker site.",deployed:"https://budget-tracker-huirayj.herokuapp.com/"},{id:1,title:"E-commerce Back-end",img:"assets/images/Portfolio/database/e-commerce-back-end.png",alt:"E-commerce demo.",deployed:"https://github.com/huirayj/e-commerce-back-end"}],C=[{id:0,title:"Fitness Tracker",img:"assets/images/Portfolio/server/fitness-tracker.png",alt:"Fitness Tracker site.",deployed:"https://workout-tracker-huirayj.herokuapp.com/"},{id:1,title:"Note Taker",img:"assets/images/Portfolio/server/note-taker.png",alt:"Note Taker site.",deployed:"https://note-taker-huirayj.herokuapp.com/"}],S=[{id:0,title:"Team Profile Generator",img:"assets/images/Portfolio/cli/team-profile-generator.png",alt:"Team Profile Generator screenshot.",deployed:"https://github.com/huirayj/team-profile-generator"},{id:1,title:"Employee Tracker",img:"assets/images/Portfolio/cli/employee-tracker.png",alt:"Employee Tracker screenshot.",deployed:"https://github.com/huirayj/employee-tracker"}],w=function(){var e=Object(a.useState)("javascript"),t=Object(n.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)([]),i=Object(n.a)(r,2),o=i[0],l=i[1];return Object(a.useEffect)((function(){switch(s){case"javascript":l(k);break;case"styling":l(N);break;case"database":l(y);break;case"server":l(C);break;case"cli":l(S);break;default:l(k)}}),[s]),Object(u.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(u.jsx)("div",{className:"listContainer",children:Object(u.jsx)("ul",{children:[{id:"javascript",title:"Javascript"},{id:"styling",title:"HTML/CSS"},{id:"database",title:"Database"},{id:"server",title:"Server"},{id:"cli",title:"CLI"}].map((function(e){return Object(u.jsx)(v,{title:e.title,active:s===e.id,setSelected:c,id:e.id},e.id)}))})}),Object(u.jsx)("div",{className:"container",children:o.map((function(e){return Object(u.jsx)("a",{href:e.deployed,target:"_blank",rel:"noopener noreferrer",children:Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("img",{src:e.img,alt:e.alt}),Object(u.jsx)("h3",{children:e.title})]},e.id)})}))})]})},P=s(18),T=s.n(P),A=s(19),E=s.n(A),_=(s(39),function(){var e=Object(a.useState)(0),t=Object(n.a)(e,2),s=t[0],c=t[1],r=[{id:"0",title:"Random Meal Generator",github:"https://github.com/huirayj/random-meal-generator",desc:"A site that uses TheMealDB and TheCocktailDB API's to create a random pairing of recipes of each.",img:"assets/images/Carousel/random-meal-generator.jpg",alt:"Random meal generator site",deployed:"https://huirayj.github.io/random-meal-generator/"},{id:"1",title:"Forum Friends",github:"https://github.com/huirayj/forum-friends",desc:"A messaging site made with Handlebars.js, Sequelize, and Express server.",img:"assets/images/Carousel/forum-friends.png",alt:"Forum Friends site",deployed:"https://forum-friends.herokuapp.com/"},{id:"2",title:"Employee Tracker",github:"https://github.com/huirayj/employee-tracker",desc:"A CLI app that manages employees.",img:"assets/images/Portfolio/cli/employee-tracker.png",alt:"Employee Tracker demo",deployed:"https://github.com/huirayj/employee-tracker"},{id:"3",title:"Team Profile Generator",github:"https://github.com/huirayj/team-profile-generator",desc:"A CLI app that generates cards of team member information.",img:"assets/images/Portfolio/cli/team-profile-generator.png",alt:"Team member cards.",deployed:"https://github.com/huirayj/team-profile-generator"},{id:"4",title:"Fitness Tracker",github:"https://github.com/huirayj/workout-tracker",desc:"A site that logs cardio and resistance workouts.",img:"assets/images/Portfolio/server/fitness-tracker.png",alt:"Two graphs.",deployed:"https://workout-tracker-huirayj.herokuapp.com/"},{id:"5",title:"Budget Tracker",github:"https://github.com/huirayj/budget-tracker",desc:"A budget tracking site with PWA design in mind.",img:"assets/images/Portfolio/database/budget-tracker.png",alt:"A line chart.",deployed:"https://budget-tracker-huirayj.herokuapp.com/"},{id:"6",title:"TBD",github:"https://github.com/huirayj",desc:"Work In Progress.",img:"assets/images/Carousel/work-in-progress.jpg",alt:"Work in Progress.",deployed:"https://github.com/huirayj"}],i=function(e){c("right"===e?s<r.length?s+1:0:s>0?s-1:2)};return Object(u.jsxs)("div",{className:"carousel",id:"carousel",children:[Object(u.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*s,"vw)")},children:r.map((function(e){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsxs)("div",{className:"leftContainer",children:[Object(u.jsx)("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)("h2",{children:e.title})}),Object(u.jsx)("p",{children:e.desc})]})}),Object(u.jsx)("div",{className:"right",children:Object(u.jsx)("a",{href:e.deployed,target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)("img",{src:e.img,alt:e.alt})})})]})},e.id)}))}),Object(u.jsx)(T.a,{className:"icon left",onClick:function(){return i()}}),Object(u.jsx)(E.a,{className:"icon right",onClick:function(){return i("right")}})]})}),B=s(20),M=s.n(B),D=(s(40),function(){return Object(u.jsxs)("div",{className:"resume",id:"resume",children:[Object(u.jsxs)("div",{className:"left",children:[Object(u.jsx)("h1",{children:"Familiar Technologies"}),Object(u.jsxs)("div",{className:"iconContainer",children:[Object(u.jsx)("img",{className:"icon",src:"assets/images/icons/html5.svg",alt:"HTML5 icon"}),Object(u.jsx)("img",{className:"icon",src:"assets/images/icons/css3.svg",alt:"CSS3 icon"}),Object(u.jsx)("img",{className:"icon",src:"assets/images/icons/javascript.svg",alt:"JavaScript icon"}),Object(u.jsx)("img",{className:"icon",src:"assets/images/icons/bootstrap.svg",alt:"Bootstrap icon"}),Object(u.jsx)("img",{className:"icon",src:"assets/images/icons/react-native.svg",alt:"React Native icon"}),Object(u.jsx)("img",{className:"icon",src:"assets/images/icons/nodejs.svg",alt:"NodeJS icon"}),Object(u.jsx)("img",{className:"icon",src:"assets/images/icons/mysql.svg",alt:"MySQL icon"}),Object(u.jsx)("img",{className:"icon",src:"assets/images/icons/mongodb.svg",alt:"MongoDB icon"}),Object(u.jsx)("img",{className:"icon",src:"assets/images/icons/typescript.svg",alt:"Typecript icon"})]})]}),Object(u.jsxs)("div",{className:"right",children:[Object(u.jsx)("h1",{children:"Current Interests"}),Object(u.jsxs)("div",{className:"iconContainer",children:[Object(u.jsx)("img",{className:"icon",src:"assets/images/icons/vue-js.svg",alt:"Vue JS icon"}),Object(u.jsx)("img",{className:"icon",src:"assets/images/icons/bulma-css.svg",alt:"Bulma CSS icon"}),Object(u.jsx)("img",{className:"icon",src:"assets/images/icons/react-native.svg",alt:"React Native icon"}),Object(u.jsx)("img",{className:"icon",src:"assets/images/icons/python.svg",alt:"Python icon"})]})]}),Object(u.jsxs)("div",{className:"bottom",children:[Object(u.jsx)("h2",{children:"Download Resume"}),Object(u.jsx)("div",{className:"resumeContainer",children:Object(u.jsx)("a",{href:"https://drive.google.com/file/d/1uQRjzE05aUhfg01iaakMOORl6Vl_-6Sp/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(M.a,{className:"icon"})})})]})]})}),F=s(21),J=s.n(F),z=s(22),R=s.n(z),I=(s(41),function(){var e,t=Object(a.useState)(""),s=Object(n.a)(t,2),c=s[0],r=s[1],i=Object(a.useState)(""),o=Object(n.a)(i,2),j=o[0],d=o[1],b=Object(a.useState)(""),g=Object(n.a)(b,2),p=(g[0],g[1]),O=function(e){"name"===e.target.name&&r(e.target.value),"email"===e.target.name&&d(e.target.value),"message"===e.target.name&&p(e.target.value)};return Object(u.jsxs)("div",{className:"contact",id:"contact",children:[Object(u.jsxs)("div",{className:"top",children:[Object(u.jsx)("h2",{children:"Let's Talk"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(u.jsx)("input",{className:"input",name:"name",type:"text",placeholder:"Name",spellCheck:"false",value:c,onChange:O}),Object(u.jsx)("input",{className:"input ".concat(j.length&&(e=j,!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e))?"error":""),name:"email",type:"text",label:"Email",placeholder:"Email",spellCheck:"false",value:j,onChange:O}),Object(u.jsx)("textarea",{className:"textarea",placeholder:"Message"}),Object(u.jsx)("button",{type:"submit",children:"Send"})]})]}),Object(u.jsx)("div",{className:"bottom",children:Object(u.jsxs)("div",{className:"iconContainer",children:[Object(u.jsx)("a",{href:"https://github.com/huirayj",target:"_blank",rel:"noreferrer",children:Object(u.jsx)(l.a,{className:"icon"})}),Object(u.jsx)("a",{href:"mailto:huirayj@gmail.com",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(m.a,{className:"icon"})}),Object(u.jsx)("a",{href:"https://linkedin.com/in/justin-hui-424bab99",target:"_blank",rel:"noreferrer",children:Object(u.jsx)(h.a,{className:"icon"})}),Object(u.jsx)("a",{href:"https://leetcode.com/huirayj/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)(J.a,{className:"icon"})}),Object(u.jsx)("a",{href:"https://www.freecodecamp.org/fcc362dd55e-8a8d-43a9-a582-7182af74dbd2",target:"_blank",rel:"noreferrer",children:Object(u.jsx)(R.a,{className:"icon"})})]})})]})}),H=(s(42),function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)("hero"),i=Object(n.a)(r,2),o=i[0],l=i[1];return Object(a.useEffect)((function(){l(function(){var e=["hero","portfolio","carousel","resume","contact"],t=window.location.hash;if(!t)return e[0];var s=t.split("#")[1],a=e.indexOf(s);return e[a]}())}),[]),Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(b,{menuState:s,setMenuState:c}),Object(u.jsx)(g,{menuState:s,setMenuState:c,currPage:o,setCurrPage:l}),Object(u.jsxs)("div",{className:"sections",children:[Object(u.jsx)(x,{}),Object(u.jsx)(w,{}),Object(u.jsx)(_,{}),Object(u.jsx)(D,{}),Object(u.jsx)(I,{})]})]})});i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(H,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.420feb9e.chunk.js.map