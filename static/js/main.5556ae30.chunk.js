(this.webpackJsonpreact_trivia=this.webpackJsonpreact_trivia||[]).push([[0],{104:function(e,t,r){},182:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r.n(c),s=r(23),a=r.n(s),i=(r(104),r(15)),o=r(186),l=r(187),u=r(184),j=r(64),d=(r(74),r(75),r(2)),h=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"header-container",children:Object(d.jsx)("h1",{className:"header",children:"Welcome to Trivia!"})}),Object(d.jsx)(u.a,{}),Object(d.jsxs)("div",{className:"content-container",children:[Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("span",{className:"paytone",children:"Trivia!"})," takes advantage of the ",Object(d.jsx)("a",{href:"https://opentdb.com/",rel:"noreferrer",target:"_blank",children:"Open Trivia Database"})," to provide you with a fun and challenging way to test your knowledge of the world!"]}),Object(d.jsx)(j.a,{type:"primary",size:"large",onClick:function(){return e.setSelected(2)},children:"Play Now!"})]})]})},b=r(43),O=r.n(b),y=r(57),f=r(188),x=r(36),m=["Any Category","General Knowledge","Books","Film","Music","Musicals & Theatres","Television","Video Games","Board Games","Science & Nature","Computers","Mathematics","Mythology","Sports","Geography","History","Politics","Art","Celebrities","Animals","Vehicles","Comics","Gadgets","Japanese Anime & Manga","Cartoon & Animations"],p=["Any Difficulty","Easy","Medium","Hard"],w=["Any Type","Multiple Choice","True and False"],g=function(e){switch(e){case"Any Category":default:return null;case"General Knowledge":return 9;case"Books":return 10;case"Film":return 11;case"Music":return 12;case"Musicals & Theatres":return 13;case"Television":return 14;case"Video Games":return 15;case"Board Games":return 16;case"Science & Nature":return 17;case"Computers":return 18;case"Mathematics":return 19;case"Mythology":return 20;case"Sports":return 21;case"Geography":return 22;case"History":return 23;case"Politics":return 24;case"Art":return 25;case"Celebrities":return 26;case"Animals":return 27;case"Vehicles":return 28;case"Comics":return 29;case"Gadgets":return 30;case"Japanese Anime & Manga":return 31;case"Cartoon & Animations":return 32}},v=function(e){switch(e){case"Any Difficulty":default:return null;case"Easy":return"easy";case"Medium":return"medium";case"Hard":return"hard"}},C=function(e){switch(e){case"Any Type":default:return null;case"Multiple Choice":return"multiple";case"True and False":return"boolean"}},k=function(e){for(var t=0;t<e.length;t++){var r=Math.floor(Math.random()*(t+1)),c=e[t];e[t]=e[r],e[r]=c}return e},A=function(){var e=Object(y.a)(O.a.mark((function e(t,r,c){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://opentdb.com/api.php?amount=1".concat(g(t)?"&category="+g(t):"").concat(v(r)?"&difficulty="+v(r):"").concat(C(c)?"&type="+C(c):"")).then((function(e){return e.json()})).then((function(e){for(var t=(e=e.results[0]).incorrect_answers.concat(e.correct_answer),r=0;r<t.length;r++)t[r]=Object(x.decode)(t[r]);return[Object(x.decode)(e.category),Object(x.decode)(e.question),k(t),Object(x.decode)(e.correct_answer),Object(x.decode)(e.difficulty[0].toUpperCase()+e.difficulty.slice(1)),Object(x.decode)(e.type),"easy"===e.difficulty?"green":"medium"===e.difficulty?"orange":"red"]})));case 1:case"end":return e.stop()}}),e)})));return function(t,r,c){return e.apply(this,arguments)}}(),S=r(185),M=r(72),N=r(189),T=r(190),F=r(29),G=function(e){return Object(F.useMediaQuery)({maxWidth:980})?Object(d.jsxs)(f.b,{direction:"vertical",size:"middle",wrap:!0,align:"center",children:[Object(d.jsx)(N.a,{placement:"bottomLeft",overlay:function(){return Object(d.jsx)(l.a,{children:e.categories.map((function(t,r){return Object(d.jsx)(l.a.Item,{onClick:function(){return e.setCategory(t)},children:t},r)}))})},children:Object(d.jsxs)(j.a,{style:{width:"50vw"},children:[e.category,Object(d.jsx)(T.a,{})]})}),Object(d.jsx)(N.a,{placement:"bottomLeft",overlay:function(){return Object(d.jsx)(l.a,{children:e.difficulties.map((function(t,r){return Object(d.jsx)(l.a.Item,{onClick:function(){return e.setDifficulty(t)},children:t},r)}))})},children:Object(d.jsxs)(j.a,{style:{width:"50vw"},children:[e.difficulty,Object(d.jsx)(T.a,{})]})}),Object(d.jsx)(N.a,{placement:"bottomLeft",overlay:function(){return Object(d.jsx)(l.a,{children:e.types.map((function(t,r){return Object(d.jsx)(l.a.Item,{onClick:function(){return e.setType(t)},children:t},r)}))})},children:Object(d.jsxs)(j.a,{style:{width:"50vw"},children:[e.type,Object(d.jsx)(T.a,{})]})}),Object(d.jsx)(j.a,{type:"primary",style:{width:"50vw"},onClick:e.handleNextQuestion,children:"Go"})]}):Object(d.jsxs)(f.b,{direction:"horizontal",size:"middle",wrap:!0,align:"center",children:[Object(d.jsx)(N.a,{trigger:["click"],arrow:!0,placement:"bottomLeft",overlay:function(){return Object(d.jsx)(l.a,{style:{maxHeight:"300px",overflowY:"scroll",overflowX:"hidden"},children:e.categories.map((function(t,r){return Object(d.jsx)(l.a.Item,{onClick:function(){return e.setCategory(t)},children:t},r)}))})},children:Object(d.jsxs)(j.a,{style:{width:"22vw"},children:[e.category,Object(d.jsx)(T.a,{})]})}),Object(d.jsx)(N.a,{trigger:["click"],arrow:!0,placement:"bottomLeft",overlay:function(){return Object(d.jsx)(l.a,{children:e.difficulties.map((function(t,r){return Object(d.jsx)(l.a.Item,{onClick:function(){return e.setDifficulty(t)},children:t},r)}))})},children:Object(d.jsxs)(j.a,{style:{width:"15vw"},children:[e.difficulty,Object(d.jsx)(T.a,{})]})}),Object(d.jsx)(N.a,{trigger:["click"],arrow:!0,placement:"bottomLeft",overlay:function(){return Object(d.jsx)(l.a,{children:e.types.map((function(t,r){return Object(d.jsx)(l.a.Item,{onClick:function(){return e.setType(t)},children:t},r)}))})},children:Object(d.jsxs)(j.a,{style:{width:"15vw"},children:[e.type,Object(d.jsx)(T.a,{})]})}),Object(d.jsx)(j.a,{type:"primary",onClick:e.handleNextQuestion,children:"Go"})]})},Q=function(e){var t=Object(F.useMediaQuery)({maxWidth:980});return Object(d.jsxs)("div",{className:"header-container",children:[Object(d.jsx)("h1",{className:t?"header":"header-md",children:e.question}),Object(d.jsxs)("h4",{className:"sub",children:[e.questionCategory," | ",Object(d.jsx)("span",{style:{color:e.diffColor},children:e.questionDiff})]})]})},z=function(e){return Object(F.useMediaQuery)({maxWidth:980})?Object(d.jsx)(f.b,{direction:"vertical",size:"middle",children:e.answers.map((function(t,r){return Object(d.jsx)(j.a,{style:{minWidth:"50vw"},block:!0,onClick:function(){return e.handleAnswer(t)},children:t},r)}))}):Object(d.jsx)(f.b,{direction:"vertical",size:"middle",children:e.answers.map((function(t,r){return Object(d.jsx)(j.a,{style:{minWidth:"25vw"},block:!0,onClick:function(){return e.handleAnswer(t)},children:t},r)}))})},I=function(e){var t=["Correct!","You got it!","You are correct!","That's right!","Good job!"],r=["Incorrect!","That's not right!","Sorry, that's not it!","Sorry, that's incorrect!","Nope, that's not it!"];return Object(F.useMediaQuery)({maxWidth:980})?Object(d.jsx)(f.b,{direction:"vertical",size:"middle",children:Object(d.jsxs)("div",{style:e.isAnswered?{display:"block",width:"50vw"}:{display:"none",width:"50vw"},children:[Object(d.jsx)(u.a,{id:"results"}),e.correctAnswer===e.userAnswer?Object(d.jsx)("h3",{style:{color:"green"},children:t[Math.floor(Math.random()*t.length)]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{style:{color:"red"},children:"Sorry, thats incorrect!"}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{style:{marginTop:"-30px"},className:"sub",children:["The correct answer was ",Object(d.jsx)("b",{children:e.correctAnswer})]})]}),Object(d.jsx)(j.a,{onClick:function(){return e.handleNextQuestion()},type:"primary",style:{width:"50vw"},children:"Next Question"})]})}):Object(d.jsx)(f.b,{direction:"vertical",size:"middle",children:Object(d.jsxs)("div",{style:e.isAnswered?{display:"block"}:{display:"none"},children:[Object(d.jsx)(u.a,{}),e.correctAnswer===e.userAnswer?Object(d.jsx)("h3",{style:{color:"green"},children:t[Math.floor(Math.random()*t.length)]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{style:{color:"red"},children:r[Math.floor(Math.random()*r.length)]}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{style:{marginTop:"-30px"},className:"sub",children:["The correct answer was ",Object(d.jsx)("b",{children:e.correctAnswer})]})]}),Object(d.jsx)(j.a,{onClick:function(){return e.handleNextQuestion()},type:"primary",style:{width:"50vh"},children:"Next Question"})]})})},D=Object(d.jsx)(M.a,{style:{fontSize:24},spin:!0}),L=function(){var e=Object(c.useState)("Any Category"),t=Object(i.a)(e,2),r=t[0],n=t[1],s=Object(c.useState)("Any Difficulty"),a=Object(i.a)(s,2),o=a[0],l=a[1],j=Object(c.useState)("Any Type"),h=Object(i.a)(j,2),b=h[0],x=h[1],g=Object(c.useState)(!1),v=Object(i.a)(g,2),C=v[0],k=v[1],M=Object(c.useState)(""),N=Object(i.a)(M,2),T=N[0],F=N[1],L=Object(c.useState)(""),q=Object(i.a)(L,2),H=q[0],W=q[1],_=Object(c.useState)([]),B=Object(i.a)(_,2),P=B[0],E=B[1],J=Object(c.useState)(""),K=Object(i.a)(J,2),V=K[0],Y=K[1],R=Object(c.useState)(""),U=Object(i.a)(R,2),X=U[0],Z=U[1],$=Object(c.useState)(""),ee=Object(i.a)($,2),te=(ee[0],ee[1]),re=Object(c.useState)("green"),ce=Object(i.a)(re,2),ne=ce[0],se=ce[1],ae=Object(c.useState)(""),ie=Object(i.a)(ae,2),oe=ie[0],le=ie[1],ue=Object(c.useState)(!1),je=Object(i.a)(ue,2),de=je[0],he=je[1];Object(c.useEffect)((function(){he(!1),le(""),be()}),[]);var be=function(){var e=Object(y.a)(O.a.mark((function e(){var t,c,n,s,a,l,u,j,d;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!1),e.next=3,A(r,o,b);case 3:t=e.sent,c=Object(i.a)(t,7),n=c[0],s=c[1],a=c[2],l=c[3],u=c[4],j=c[5],d=c[6],F(n),W(s),E(a),Y(l),Z(u),te(j),se(d),k(!0);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){he(!1),le(""),be()};return Object(d.jsxs)("div",{className:"play-container",children:[Object(d.jsx)(G,{categories:m,category:r,setCategory:n,difficulties:p,difficulty:o,setDifficulty:l,types:w,type:b,setType:x,handleNextQuestion:Oe}),Object(d.jsx)(u.a,{}),C?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Q,{question:H,questionCategory:T,questionDiff:X,diffColor:ne}),Object(d.jsxs)(f.b,{direction:"vertical",size:"middle",style:{width:"100%"},children:[Object(d.jsx)(z,{answers:P,handleAnswer:function(e){de||(le(e),he(!0))},userAnswer:oe}),Object(d.jsx)(I,{correctAnswer:V,isAnswered:de,userAnswer:oe,handleNextQuestion:Oe})]})]}):Object(d.jsx)(S.a,{indicator:D})]})},q=r(191),H=o.a.Header,W=o.a.Content,_=o.a.Footer;var B=function(){var e=Object(c.useState)(1),t=Object(i.a)(e,2),r=t[0],n=t[1];return Object(d.jsxs)(o.a,{className:"layout",children:[Object(d.jsxs)(H,{children:[Object(d.jsx)("div",{className:"logo",children:"Trivia!"}),Object(d.jsxs)(l.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],selectedKeys:r.toString(),children:[Object(d.jsx)(l.a.Item,{onClick:function(){return n(1)},children:"Home"},"1"),Object(d.jsx)(l.a.Item,{onClick:function(){return n(2)},children:"Play"},"2")]})]}),Object(d.jsx)(W,{style:{padding:"50px 50px 0 50px"},children:Object(d.jsx)("div",{className:"site-layout-content",children:1===r?Object(d.jsx)(h,{setSelected:n}):2===r&&Object(d.jsx)(L,{})})}),Object(d.jsxs)(_,{style:{textAlign:"center"},children:["Trivia! \xa92021 Created by Ethan Shealey | ",Object(d.jsx)("a",{href:"https://www.github.com/ethanshealey/ReactTrivia",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(q.a,{style:{color:"black"}})})]})]})},P=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,192)).then((function(t){var r=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),c(e),n(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root")),P()},75:function(e,t,r){}},[[182,1,2]]]);
//# sourceMappingURL=main.5556ae30.chunk.js.map