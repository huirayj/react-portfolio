(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{29:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),i=a(9),r=a.n(i),n=a(2),o=(a(29),a(0)),l=function(e){var t=e.menuState,a=e.setMenuState;return Object(o.jsx)("div",{className:"navbar ".concat(t&&"active"),children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)("a",{href:"#hero",className:"logo",children:"<JH />"})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsxs)("div",{className:"hamburger",onClick:function(){return a(!t)},children:[Object(o.jsx)("span",{className:"line1"}),Object(o.jsx)("span",{className:"line2"}),Object(o.jsx)("span",{className:"line3"})]})})]})})},d=(a(31),function(e){var t=e.menuState,a=e.setMenuState,s=e.currPage,c=e.setCurrPage;return Object(o.jsx)("div",{className:"menu ".concat(t&&"active"),children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"hero"===s?"active":"",onClick:function(){a(!1),c("hero")},children:Object(o.jsx)("a",{href:"#hero",children:"Home"})}),Object(o.jsx)("li",{className:"about"===s?"active":"",onClick:function(){a(!1),c("about")},children:Object(o.jsx)("a",{href:"#about",children:"About Me"})}),Object(o.jsx)("li",{className:"featured"===s?"active":"",onClick:function(){a(!1),c("featured")},children:Object(o.jsx)("a",{href:"#featured",children:"Featured"})}),Object(o.jsx)("li",{className:"portfolio"===s?"active":"",onClick:function(){a(!1),c("portfolio")},children:Object(o.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(o.jsx)("li",{className:"resume"===s?"active":"",onClick:function(){a(!1),c("resume")},children:Object(o.jsx)("a",{href:"#resume",children:"Skills & Resume"})}),Object(o.jsx)("li",{className:"contact"===s?"active":"",onClick:function(){a(!1),c("contact")},children:Object(o.jsx)("a",{href:"#contact",children:"Contact"})})]})})}),j=a(12),m=a(13),h=a.n(m),u=(a(32),function(){var e=Object(s.useRef)();return Object(s.useEffect)((function(){Object(j.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Front-end","Back-end","Full Stack"]})}),[]),Object(o.jsxs)("div",{className:"hero",id:"hero",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)("div",{className:"imgContainer",children:Object(o.jsx)("img",{src:"".concat("/react-portfolio","/assets/images/avatar.svg"),alt:"An avatar."})})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("h2",{children:"Hello There, I'm"}),Object(o.jsx)("h1",{children:"Justin Hui"}),Object(o.jsxs)("h3",{children:["An Aspiring ",Object(o.jsx)("span",{ref:e})," Developer."]})]})}),Object(o.jsx)("div",{className:"bottom",children:Object(o.jsx)("a",{href:"#about",children:Object(o.jsx)(h.a,{className:"icon"})})})]})}),b=(a(38),function(){return Object(o.jsx)("div",{className:"about",id:"about",children:Object(o.jsxs)("div",{className:"aboutContainer",children:[Object(o.jsx)("h1",{children:"About Me"}),Object(o.jsx)("p",{children:"I'm a North Carolina native who first became interested in web development when stumbling upon the freeCodeCamp site. For a year or so, I casually learned about the basic concepts of HTML, CSS, and JavaScript. Most of my time, there, was spent practicing JavaScript and solving algorithms. I soon became more serious about pursing a career in web development and decided to enroll in a coding bootcamp."}),Object(o.jsx)("p",{children:"Recently, I was certified by a Trilogy Full Stack Bootcamp through the University of North Carolina at Charlotte and was able to develop a greater understanding of the process. More importantly, I had the opportunity to be guided by an industry veteran and to work alongside other passionate individuals through assignments and group projects."}),Object(o.jsx)("p",{children:"As of now, I continue to enjoy striving toward efficient code and searching for ways to improve my coding abilities and productivity."}),Object(o.jsx)("p",{children:"In my free time, I enjoy looking at tech gadgets and PC parts, reading comics, playing video games, and cooking."})]})})}),p=(a(39),function(e){var t=e.id,a=e.title,s=e.active,c=e.setSelected;return Object(o.jsx)("li",{className:"list ".concat(s?"active":""),onClick:function(){return c(t)},children:a},t)}),g=(a(40),[{id:0,title:"Password Generator",img:"".concat("/react-portfolio","/assets/images/Portfolio/javascript/password-generator.png"),alt:"Password Generator site.",deployed:"https://huirayj.github.io/password-generator/",description:"A site that generates a random password with length of 8-128 user-selected characters. Math.random(), for loops, and String.fromCharCode played essential roles."},{id:1,title:"Javascript Quiz",img:"".concat("/react-portfolio","/assets/images/Portfolio/javascript/javascript-quiz.png"),alt:"Javascript Quiz site.",deployed:"https://huirayj.github.io/js-online-quiz/",description:"A time-based JavaScript Quiz that features setInterval and local storage for score keeping."},{id:2,title:"Work Day Scheduler",img:"".concat("/react-portfolio","/assets/images/Portfolio/javascript/work-day-scheduler.png"),alt:"Work Day Scheduler site.",deployed:"https://huirayj.github.io/work-day-scheduler/",description:"A single day todo list that revolves around the typical 9-5 schedule. Moment.js, jQuery, and local storage are utilized."}]),f=[{id:0,title:"TBD",img:"".concat("/react-portfolio","/assets/images/Featured/work-in-progress.jpg"),alt:"Work in Progress.",deployed:"https://github.com/huirayj/restaurant-landing-page"}],O=[{id:0,title:"Budget Tracker",img:"".concat("/react-portfolio","/assets/images/Portfolio/database/budget-tracker.png"),alt:"Budget Tracker site.",deployed:"https://budget-tracker-huirayj.herokuapp.com/",description:"A budget tracker site that features MongoDB and indexedDB. Additionally, it can be downloaded as a progressive web app."},{id:1,title:"E-commerce Back-end",img:"".concat("/react-portfolio","/assets/images/Portfolio/database/e-commerce-back-end.png"),alt:"E-commerce demo.",deployed:"https://github.com/huirayj/e-commerce-back-end",description:"An activity that involves using Sequelize to manage the data of e-Commerce products."}],x=[{id:0,title:"Fitness Tracker",img:"".concat("/react-portfolio","/assets/images/Portfolio/server/fitness-tracker.png"),alt:"Fitness Tracker site.",deployed:"https://workout-tracker-huirayj.herokuapp.com/",description:"A site that tracks daily cardio and resistance workouts, featuring MongoDB, Express.js, and styled with Bootstrap."},{id:1,title:"Note Taker",img:"".concat("/react-portfolio","/assets/images/Portfolio/server/note-taker.png"),alt:"Note Taker site.",deployed:"https://note-taker-huirayj.herokuapp.com/",description:"A todo list using Express.js."}],v=[{id:0,title:"Team Profile Generator",img:"".concat("/react-portfolio","/assets/images/Portfolio/cli/team-profile-generator.png"),alt:"Team Profile Generator screenshot.",deployed:"https://github.com/huirayj/team-profile-generator",description:"An application that takes Inquirer inputs and converts them to cards in Html."},{id:1,title:"Employee Tracker",img:"".concat("/react-portfolio","/assets/images/Portfolio/cli/employee-tracker.png"),alt:"Employee Tracker screenshot.",deployed:"https://github.com/huirayj/employee-tracker",description:"An application that manages employee information using Inquirer, mySQL, and async functions."}],y=function(){var e=Object(s.useState)("javascript"),t=Object(n.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)([]),r=Object(n.a)(i,2),l=r[0],d=r[1];return Object(s.useEffect)((function(){switch(a){case"javascript":d(g);break;case"styling":d(f);break;case"database":d(O);break;case"server":d(x);break;case"cli":d(v);break;default:d(g)}}),[a]),Object(o.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(o.jsx)("div",{className:"listContainer",children:Object(o.jsx)("ul",{children:[{id:"javascript",title:"Javascript"},{id:"styling",title:"HTML/CSS"},{id:"database",title:"Database"},{id:"server",title:"Server"},{id:"cli",title:"CLI"}].map((function(e){return Object(o.jsx)(p,{title:e.title,active:a===e.id,setSelected:c,id:e.id},e.id)}))})}),Object(o.jsx)("div",{className:"container",children:l.map((function(e){return Object(o.jsx)("a",{href:e.deployed,target:"_blank",rel:"noopener noreferrer",children:Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("img",{src:e.img,alt:e.alt}),Object(o.jsxs)("div",{className:"description",children:[Object(o.jsx)("h3",{children:e.title}),Object(o.jsx)("p",{children:e.description})]})]},e.id)},e.id)}))})]})},N=a(15),k=a.n(N),S=a(16),w=a.n(S),C=(a(41),function(){var e=Object(s.useState)(0),t=Object(n.a)(e,2),a=t[0],c=t[1],i=[{id:"0",title:"Random Meal Generator",github:"https://github.com/huirayj/random-meal-generator",role:"Front-end (DOM, Javascript).",desc:"An HTML/CSS site that uses TheMealDB and TheCocktailDB API's to create a random pairing of recipes of each.",img:"".concat("/react-portfolio","/assets/images/Featured/random-meal-generator.jpg"),alt:"Random meal generator site",deployed:"https://huirayj.github.io/random-meal-generator/"},{id:"1",title:"Forum Friends",github:"https://github.com/huirayj/forum-friends",role:"Back-end (Models, Schemas, RESTful Routes).",desc:"A messaging site made with Handlebars.js, Sequelize, and Express server.",img:"".concat("/react-portfolio","/assets/images/Featured/forum-friends.png"),alt:"Forum Friends site",deployed:"https://forum-friends.herokuapp.com/"},{id:"2",title:"PostGrubDash",github:"https://github.com/b00000001/PostGrubDash",desc:"A MERN stack site that utlizes the Stripe payment API.",role:"Back-end (Models, Schemas). Front-end (React Components and Pages).",img:"".concat("/react-portfolio","/assets/images/featured/postgrubdash.jpg"),alt:"PostGrudDash demo",deployed:"https://postgrubdash.herokuapp.com/"},{id:"6",title:"TBD",github:"https://github.com/huirayj",desc:"Work In Progress.",role:"TBD",img:"".concat("/react-portfolio","/assets/images/Featured/work-in-progress.jpg"),alt:"Work in Progress.",deployed:"https://github.com/huirayj"}],r=function(e){c("right"===e?a<i.length-1?a+1:0:a>0?a-1:2)};return Object(o.jsxs)("div",{className:"featured",id:"featured",children:[Object(o.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*a,"vw)")},children:i.map((function(e){var t=e.id,a=e.github,s=e.title,c=e.role,i=e.desc,r=e.deployed,n=e.img,l=e.alt;return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsxs)("div",{className:"leftContainer",children:[Object(o.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("h2",{children:s})}),Object(o.jsx)("p",{children:i}),Object(o.jsxs)("p",{children:["Role: ",c]})]})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("img",{src:n,alt:l})})})]})},t)}))}),Object(o.jsxs)("div",{className:"iconContainer",children:[Object(o.jsx)(k.a,{className:"icon left",onClick:function(){return r()}}),Object(o.jsx)(w.a,{className:"icon right",onClick:function(){return r("right")}})]})]})}),M=a(17),P=a.n(M),T=(a(42),function(){var e="".concat("/react-portfolio","/assets/images/icons/");return Object(o.jsxs)("div",{className:"resume",id:"resume",children:[Object(o.jsxs)("div",{className:"left",children:[Object(o.jsx)("h1",{children:"Familiar Technologies"}),Object(o.jsx)("h2",{children:"Front-end"}),Object(o.jsxs)("div",{className:"iconContainer",children:[Object(o.jsx)("img",{className:"icon",src:"".concat(e,"/html5.svg"),alt:"HTML5 icon"}),Object(o.jsx)("img",{className:"icon",src:"".concat(e,"/css3.svg"),alt:"CSS3 icon"}),Object(o.jsx)("img",{className:"icon",src:"".concat(e,"/javascript.svg"),alt:"JavaScript icon"}),Object(o.jsx)("img",{className:"icon",src:"".concat(e,"/jquery.svg"),alt:"Typecript icon"}),Object(o.jsx)("img",{className:"icon",src:"".concat(e,"/bootstrap.svg"),alt:"Bootstrap icon"}),Object(o.jsx)("img",{className:"icon",src:"".concat(e,"/react-native.svg"),alt:"React Native icon"})]}),Object(o.jsx)("h2",{children:"Back-end"}),Object(o.jsxs)("div",{className:"iconContainer",children:[Object(o.jsx)("img",{className:"icon",src:"".concat(e,"/nodejs.svg"),alt:"NodeJS icon"}),Object(o.jsx)("img",{className:"icon",src:"".concat(e,"/mysql.svg"),alt:"MySQL icon"}),Object(o.jsx)("img",{className:"icon",src:"".concat(e,"/mongodb.svg"),alt:"MongoDB icon"}),Object(o.jsx)("img",{className:"icon",src:"".concat(e,"/apollo.svg"),alt:"Apollo icon"}),Object(o.jsx)("img",{className:"icon",src:"".concat(e,"/graphql.svg"),alt:"GraphQL icon"})]}),Object(o.jsx)("h2",{children:"Other"}),Object(o.jsxs)("div",{className:"iconContainer",children:[Object(o.jsx)("img",{className:"icon",src:"".concat(e,"/git.svg"),alt:"Git icon"}),Object(o.jsx)("img",{className:"icon",src:"".concat(e,"/typescript.svg"),alt:"TypeScript icon"})]})]}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsx)("h1",{children:"Current Interests"}),Object(o.jsxs)("div",{className:"iconContainer",children:[Object(o.jsx)("img",{className:"icon",src:"".concat(e,"/vue-js.svg"),alt:"Vue JS icon"}),Object(o.jsx)("img",{className:"icon",src:"".concat(e,"/bulma-css.svg"),alt:"Bulma CSS icon"}),Object(o.jsx)("img",{className:"icon",src:"".concat(e,"/react-native.svg"),alt:"React Native icon"}),Object(o.jsx)("img",{className:"icon",src:"".concat(e,"/python.svg"),alt:"Python icon"})]})]}),Object(o.jsxs)("div",{className:"bottom",children:[Object(o.jsx)("h2",{children:"Download Resume"}),Object(o.jsx)("div",{className:"resumeContainer",children:Object(o.jsx)("a",{href:"https://drive.google.com/file/d/1uQRjzE05aUhfg01iaakMOORl6Vl_-6Sp/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)(P.a,{className:"icon"})})})]})]})}),A=a(18),B=a.n(A),D=a(19),F=a.n(D),E=a(20),I=a.n(E),J=a(21),R=a.n(J),_=a(22),z=a.n(_),G=a(23),H=(a(43),function(){var e,t=Object(s.useState)(""),a=Object(n.a)(t,2),c=a[0],i=a[1],r=Object(s.useState)(""),l=Object(n.a)(r,2),d=l[0],j=l[1],m=Object(s.useState)(""),h=Object(n.a)(m,2),u=h[0],b=h[1],p=Object(s.useState)([]),g=Object(n.a)(p,2),f=g[0],O=g[1],x=function(e){"name"===e.target.name&&i(e.target.value),"email"===e.target.name&&j(e.target.value),"message"===e.target.name&&b(e.target.value)};return Object(o.jsxs)("div",{className:"contact",id:"contact",children:[Object(o.jsxs)("div",{className:"top",children:[Object(o.jsx)("h2",{children:"Let's Talk"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c||O("Name was empty."),d||O("Email was empty."),u||O("Message was empty."),c||d||O("Name and Email were empty."),c||u||O("Name and Message were empty."),d||u||O("Email and Message were empty."),c||d||u||O("Form was empty."),c&&d&&u&&(G.a.sendForm("service_lb6s0ud","default_template",e.target,"user_gJ2nynJ0taEWDWivwO58l").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),O("Thank you very much. Your message has been sent.")),i(""),j(""),b("")},children:[Object(o.jsx)("input",{className:"input",name:"name",type:"text",placeholder:"Name",spellCheck:"false",value:c,onChange:x}),Object(o.jsx)("input",{className:"input ".concat(d.length&&(e=d,!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e))?"error":""),name:"email",type:"text",label:"Email",placeholder:"Email",spellCheck:"false",value:d,onChange:x}),Object(o.jsx)("textarea",{className:"textarea",placeholder:"Message",name:"message",value:u,onChange:x}),Object(o.jsx)("button",{type:"submit",children:"Send"})]}),f&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:f})})]}),Object(o.jsx)("div",{className:"bottom",children:Object(o.jsxs)("div",{className:"iconContainer",children:[Object(o.jsx)("a",{href:"https://github.com/huirayj",target:"_blank",rel:"noreferrer",children:Object(o.jsx)(B.a,{className:"icon"})}),Object(o.jsx)("a",{href:"mailto:huirayj@gmail.com",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)(F.a,{className:"icon"})}),Object(o.jsx)("a",{href:"https://linkedin.com/in/justin-hui-424bab99",target:"_blank",rel:"noreferrer",children:Object(o.jsx)(I.a,{className:"icon"})}),Object(o.jsx)("a",{href:"https://leetcode.com/huirayj/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)(R.a,{className:"icon"})}),Object(o.jsx)("a",{href:"https://www.freecodecamp.org/fcc362dd55e-8a8d-43a9-a582-7182af74dbd2",target:"_blank",rel:"noreferrer",children:Object(o.jsx)(z.a,{className:"icon"})})]})})]})}),q=(a(44),function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)("hero"),r=Object(n.a)(i,2),j=r[0],m=r[1];return Object(s.useEffect)((function(){m(function(){var e=["hero","portfolio","featured","resume","contact"],t=window.location.hash;if(!t)return e[0];var a=t.split("#")[1],s=e.indexOf(a);return e[s]}())}),[]),Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(l,{menuState:a,setMenuState:c}),Object(o.jsx)(d,{menuState:a,setMenuState:c,currPage:j,setCurrPage:m}),Object(o.jsxs)("div",{className:"sections",children:[Object(o.jsx)(u,{}),Object(o.jsx)(b,{}),Object(o.jsx)(C,{}),Object(o.jsx)(y,{}),Object(o.jsx)(T,{}),Object(o.jsx)(H,{})]})]})});r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(q,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.f0dc6a7f.chunk.js.map