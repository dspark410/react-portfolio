(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{54:function(e,a,t){e.exports=t(98)},59:function(e,a,t){},60:function(e,a,t){},71:function(e,a,t){},80:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(8),o=t.n(l),s=t(13),c=(t(59),t(60),t(118)),m=t(122),i=t(46),u=t.n(i),d=t(123),f=t(43),p=t.n(f),E=t(121),g=t(124);t(37);function b(){return r.a.createElement("div",null,r.a.createElement(E.a,{onSubmit:function(e){e.preventDefault(),p.a.sendForm("gmail","template_k9gw8ll",e.target,"user_BGjh1sRDSGwzot0DIczEl").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()}},r.a.createElement(E.a.Group,{style:{fontFamily:"Jura, sans-serif",fontWeight:"bold"}},r.a.createElement(E.a.Label,null,"Name"),r.a.createElement(E.a.Control,{id:"name",required:!0,type:"text",placeholder:"Name",name:"name"})),r.a.createElement(E.a.Group,{style:{fontFamily:"Jura, sans-serif",fontWeight:"bold"}},r.a.createElement(E.a.Label,null,"Email"),r.a.createElement(E.a.Control,{id:"email",required:!0,type:"email",placeholder:"Email ",name:"email"})),r.a.createElement(E.a.Group,{style:{fontFamily:"Jura, sans-serif",fontWeight:"bold"}},r.a.createElement(E.a.Label,null,"Subject"),r.a.createElement(E.a.Control,{id:"subject",required:!0,type:"text",placeholder:"Subject",name:"subject"})),r.a.createElement(E.a.Group,{style:{fontFamily:"Jura, sans-serif",fontWeight:"bold"}},r.a.createElement(E.a.Label,null,"Message"),r.a.createElement(E.a.Control,{id:"text",required:!0,as:"textarea",rows:"3",name:"message"})),r.a.createElement(g.a,{onClick:function(){var e=document.getElementById("name"),a=document.getElementById("email"),t=document.getElementById("subject"),n=document.getElementById("text");if(""!==e.value&&""!==a.value&&""!==t.value&&""!==n.value){var r=document.getElementById("message");r.innerText="Message sent succesfully!",setTimeout((function(){r.innerText=""}),1500)}},type:"submit",style:{backgroundColor:"cornflowerblue",fontFamily:"Jura, sans-serif",fontWeight:"bold"}},"Send"),r.a.createElement("span",{style:{fontFamily:"Jura, sans-serif",fontWeight:"bold"},className:"message",id:"message"})))}var h=t(125),N=Object(c.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(1)},paper:{boxShadow:"0 0 10px cornflowerblue",borderRadius:"5px",padding:e.spacing(1),backgroundColor:e.palette.background.paper,marginBottom:"30px",width:"300px"}}}));function y(){var e=N(),a=r.a.useState(null),t=Object(s.a)(a,2),n=t[0],l=t[1],o=Boolean(n),c=o?"transitions-popper":void 0;return r.a.createElement("div",null,r.a.createElement("div",{className:e.root},r.a.createElement(m.a,{onClick:function(e){l(n?null:e.currentTarget)},style:{backgroundColor:"cornflowerblue",color:"#eee",position:"fixed",bottom:"0",right:"0",marginBottom:"30px",marginRight:"30px",height:"70px",width:"70px",outline:"none"},"aria-label":"add"},r.a.createElement(u.a,{style:{fontSize:"30px"}}))),r.a.createElement(h.a,{id:c,open:o,anchorEl:n,transition:!0},(function(a){var t=a.TransitionProps;return r.a.createElement(d.a,Object.assign({},t,{timeout:1e3}),r.a.createElement("div",{className:e.paper},r.a.createElement(b,null)))})))}function v(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," David S. Park"),r.a.createElement(y,null))}t(71);var k=t(28),w=t.n(k),j=(t(39),t(120)),x=t(44),C=t(20),S=t.n(C),F=t(26),T={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",padding:"0",transform:"translate(-50%, -50%)",border:"none",boxShadow:"0px 0px 6px 2px #e9e9e9"}};function J(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(!1),c=Object(s.a)(o,2),m=c[0],i=c[1],u=Object(n.useState)(!1),d=Object(s.a)(u,2),f=d[0],p=d[1],E=Object(n.useState)(!1),g=Object(s.a)(E,2),b=g[0],h=g[1];function N(){l(!1)}function y(){i(!1)}function v(){p(!1)}function k(){h(!1)}return Object(n.useEffect)((function(){w.a.init({duration:1500})}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{"data-aos":"fade",className:"project-header mb-4"},r.a.createElement("span",{className:"projects"},"Projects")),r.a.createElement(j.a,null,r.a.createElement(x.a,{xs:12,sm:12,md:6,lg:4,xl:3,className:"justify-content-center"},r.a.createElement("div",{className:"image-container"},r.a.createElement("button",{onClick:function(){l(!0)},className:"image-button"},r.a.createElement("img",{"data-aos":"fade-up",className:"project-image mb-2",src:"./images/covidtracker.png",alt:"Covid-19 Tracker"})),r.a.createElement(S.a,{isOpen:t,onRequestClose:N,style:T},r.a.createElement("div",{className:"modal-container"},r.a.createElement("h3",{className:"modal-header"},"Covid-19 Tracker"),r.a.createElement("img",{className:"modal-image m-auto",src:"./images/covidtracker.png",alt:"Covid-19 Tracker"}),r.a.createElement("p",{className:"font-weight-bold w-75 description"},"In light of the situation in 2020 and the Coronavirus, I decided to make a Covid-19 tracker that displays live data for the world and each country."),r.a.createElement("p",{className:"font-weight-bold"},"Technologies Used:",r.a.createElement("span",{className:"font-weight-normal"}," ","React.js, React-Leaflet, Chart.js, Bootstrap")),r.a.createElement("div",{className:"button-container"},r.a.createElement("a",{href:"https://main.d3tcy20w66t5z5.amplifyapp.com/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("button",{className:"footer-button",style:{fontFamily:"Jura, sans-serif"}},"View Site")),r.a.createElement("a",{href:"https://github.com/dspark410/covid-19-tracker",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("button",{className:"footer-button",style:{fontFamily:"Jura, sans-serif"}},"GitHub"))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{className:"modal-footer-button",style:{fontFamily:"Jura, sans-serif"},onClick:N},"Close")),r.a.createElement("button",{className:"close-button",onClick:N},r.a.createElement(F.a,null)))))),r.a.createElement(x.a,{xs:12,sm:12,md:6,lg:4,xl:3,className:"justify-content-center"},r.a.createElement("div",{className:"image-container"},r.a.createElement("button",{onClick:function(){i(!0)},className:"image-button"},r.a.createElement("img",{"data-aos":"fade-up",className:"project-image  mb-2",src:"./images/hiho.png",alt:"Hi Ho"})),r.a.createElement(S.a,{isOpen:m,onRequestClose:y,style:T},r.a.createElement("div",{className:"modal-container"},r.a.createElement("h3",{className:"modal-header"},"Hi Ho"),r.a.createElement("img",{className:"modal-image m-auto",src:"./images/hiho.png",alt:"Hi Ho"}),r.a.createElement("p",{className:"font-weight-bold w-75 description"},"For my final group project during bootcamp, we created a job search application using ZipRecruiter's API to retrieve job listing info and the Numbeo API to display cost of living info for the city searched."),r.a.createElement("p",{className:"font-weight-bold"},"Technologies Used:",r.a.createElement("span",{className:"font-weight-normal"}," ","MongoDB, Express.js, React.js, Node.js, Material-UI")),r.a.createElement("p",{className:"font-weight-bolder"},"Note:"," ",r.a.createElement("span",{className:"font-weight-normal"}," ","Due to ZipRecruiter API key access expiration, the job searching functionality is currently unavailable.")),r.a.createElement("div",{className:"button-container"},r.a.createElement("a",{href:"https://hi-ho-frontend.herokuapp.com/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("button",{className:"footer-button",style:{fontFamily:"Jura, sans-serif"}},"View Site")),r.a.createElement("a",{href:"https://github.com/dspark410/Hi-Ho-Frontend",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("button",{className:"footer-button",style:{fontFamily:"Jura, sans-serif"}},"GitHub"))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{className:"modal-footer-button",style:{fontFamily:"Jura, sans-serif"},onClick:y},"Close")),r.a.createElement("button",{className:"close-button",onClick:y},r.a.createElement(F.a,null)))))),r.a.createElement(x.a,{xs:12,sm:6,md:6,lg:4,xl:3,className:"justify-content-center "},r.a.createElement("div",{className:"image-container "},r.a.createElement("button",{onClick:function(){p(!0)},className:"image-button"},r.a.createElement("img",{"data-aos":"fade-up",className:"project-image mb-2",src:"./images/smasual.png",alt:"Smasual"})),r.a.createElement(S.a,{isOpen:f,onRequestClose:v,style:T},r.a.createElement("div",{className:"modal-container"},r.a.createElement("h3",{className:"modal-header"},"Smasual"),r.a.createElement("img",{className:"modal-image m-auto",src:"./images/smasual.png",alt:"Smasual"}),r.a.createElement("p",{className:"font-weight-bold w-75 description"},"For my second group project during bootcamp, we created a simple dating application that allowed the user to find a date by gender orientation, age preference, and location using zipcode. The user could then contact a potential match via email."),r.a.createElement("p",{className:"font-weight-bold"},"Technologies Used:",r.a.createElement("span",{className:"font-weight-normal"}," ","MySQL, HTML, CSS, JavaScript, Express.js, Node.js, Nodemailer.js, Firebase")),r.a.createElement("p",{className:"font-weight-bolder"},"Note:"," ",r.a.createElement("span",{className:"font-weight-normal"}," ","Due to a limited database there may be unavailable matches based on user specified criteria.")),r.a.createElement("div",{className:"button-container"},r.a.createElement("a",{href:"https://radiant-spire-72704.herokuapp.com/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("button",{className:"footer-button",style:{fontFamily:"Jura, sans-serif"}},"View Site")),r.a.createElement("a",{href:"https://github.com/dspark410/Smasual",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("button",{className:"footer-button",style:{fontFamily:"Jura, sans-serif"}},"GitHub"))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{className:"modal-footer-button",style:{fontFamily:"Jura, sans-serif"},onClick:v},"Close")),r.a.createElement("button",{className:"close-button",onClick:v},r.a.createElement(F.a,null)))))),r.a.createElement(x.a,{xs:12,sm:6,md:6,lg:4,xl:3,className:"justify-content-center "},r.a.createElement("div",{className:"image-container "},r.a.createElement("button",{onClick:function(){h(!0)},className:"image-button"},r.a.createElement("img",{"data-aos":"fade-up",className:"project-image mb-2",src:"./images/nurse.png",alt:"Travel Nurse App"})),r.a.createElement(S.a,{isOpen:b,onRequestClose:k,style:T},r.a.createElement("div",{className:"modal-container"},r.a.createElement("h3",{className:"modal-header"},"Travel Nurses Job Spot"),r.a.createElement("img",{className:"modal-image m-auto",src:"./images/nurse.png",alt:"Travel Nurse App"}),r.a.createElement("p",{className:"font-weight-bold w-75 description"},"My first group project during bootcamp was an application dedicated for travel nurses. The application allowed the user to select two cities and compare the salary and cost of living expenses, which ultimately, led the user to make a more informed decision about the job."),r.a.createElement("p",{className:"font-weight-bold"},"Technologies Used:",r.a.createElement("span",{className:"font-weight-normal"}," HTML, CSS, jQuery")),r.a.createElement("p",{className:"font-weight-bolder"},"Note:"," ",r.a.createElement("span",{className:"font-weight-normal"}," ","Due to CORS, the city selection menu will load very slowly after the application is loaded.")),r.a.createElement("div",{className:"button-container"},r.a.createElement("a",{href:"https://dspark410.github.io/Travel-Nurse-App/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("button",{className:"footer-button",style:{fontFamily:"Jura, sans-serif"}},"View Site")),r.a.createElement("a",{href:"https://github.com/dspark410/Travel-Nurse-App",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("button",{className:"footer-button",style:{fontFamily:"Jura, sans-serif"}},"GitHub"))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{className:"modal-footer-button",style:{fontFamily:"Jura, sans-serif"},onClick:k},"Close")),r.a.createElement("button",{className:"close-button",onClick:k},r.a.createElement(F.a,null))))))))}S.a.setAppElement("#root");var I=t(12),O=t(30),D=t(48),H=t(49);t(80);function R(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{"data-aos":"fade",style:{marginTop:"50px",color:"cornflowerblue"}},"Skills"),r.a.createElement("div",{className:"skills","data-aos":"fade"},r.a.createElement(I.d,{className:"html"}),r.a.createElement(I.b,{className:"css"}),r.a.createElement(I.a,{className:"bs"}),r.a.createElement(I.e,{className:"js"}),r.a.createElement(O.b,{className:"jquery"}),r.a.createElement(I.g,{className:"react"}),r.a.createElement(D.a,{className:"node"}),r.a.createElement(O.c,{className:"mongo"}),r.a.createElement(H.a,{className:"sql"}),r.a.createElement(O.a,{className:"git"})))}var _=t(51),B=t(50),W=t(81);var q=function(){return r.a.createElement("div",{style:{height:"100vh",backgroundImage:"linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"auto 0"}},r.a.createElement("div",null,r.a.createElement(W,{name:"three-bounce",color:"cornflowerblue"})))};var G=function(){var e=Object(n.useState)(!0),a=Object(s.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){w.a.init({duration:2e3})}),[]),Object(n.useEffect)((function(){setTimeout((function(){l(!1)}),3900)}),[]),r.a.createElement(r.a.Fragment,null,t?r.a.createElement(q,null):r.a.createElement("div",{className:"container app_container"},r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"box"},r.a.createElement("img",{"data-aos":"fade",className:"profile-pic",width:"200px",height:"200px",src:"./images/profilepic.jpg",alt:"David Park"}),r.a.createElement("div",{"data-aos":"fade",className:"border2"})),r.a.createElement("h1",{"data-aos":"fade",className:"name"},"David S. Park"),r.a.createElement("h2",{"data-aos":"fade",className:"title",style:{textTransform:"uppercase",color:"cornflowerblue",fontWeight:"600",fontSize:"1.0rem"}},"Web Developer"),r.a.createElement("div",{className:"mainsummary-container"},r.a.createElement("div",{className:"summary-container"},r.a.createElement("p",{style:{color:"black",fontWeight:"bold"},className:"summary","data-aos":"fade"},"Hey! My name is David and I'm a web developer with a passion for the front end. I'm a bootcamp graduate from the UC Berkeley Extension Full Stack Web Development Program looking for opportunities in front end development.")),r.a.createElement("div",{className:"summary-container"},r.a.createElement("p",{style:{color:"black",fontWeight:"bold"},className:"summary","data-aos":"fade"},"When I'm not coding I love to cook, explore different foods from various restaurants, weight train, and play video games.")),r.a.createElement("div",{className:"summary-container"},r.a.createElement("p",{style:{color:"black",fontWeight:"bold"},className:"summary","data-aos":"fade"},"I'm also a certified personal trainer and exercise physiologist."))),r.a.createElement("div",{className:"icon-row","data-aos":"fade"},r.a.createElement("div",{className:"icon-container"},r.a.createElement("a",{className:"icon",href:"mailto:dspark410@gmail.com",rel:"noopener noreferrer"},r.a.createElement(B.a,{className:"iconborder",style:{fontSize:"16px"}})),r.a.createElement("a",{className:"icon",href:"./assets/David_Park_Resume.pdf",rel:"noopener noreferrer",download:!0},r.a.createElement(_.a,{className:"iconborder"})),r.a.createElement("a",{className:"icon",href:"https://github.com/dspark410",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(I.c,{className:"iconborder"})),r.a.createElement("a",{className:"icon",href:"https://www.linkedin.com/in/david-s-park/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(I.f,{className:"iconborder"})))),r.a.createElement(R,null)),r.a.createElement(J,null),r.a.createElement(v,null)))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.c90a29b7.chunk.js.map