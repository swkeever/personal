(window["webpackJsonpswkeever.github.io"]=window["webpackJsonpswkeever.github.io"]||[]).push([[0],{16:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a(2),c=a(5),r=a(3),i=a(6),s=a(0),o=a.n(s),m=a(8),u=a.n(m),d=(a(25),a(26),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={sidebarOpen:!1},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return[o.a.createElement("a",{key:"nav-menu-button",className:"menu-toggle rounded",onClick:function(){return e.onMenuClick()}},o.a.createElement("i",{className:"fas ".concat(this.state.sidebarOpen?"fa-times":"fa-bars")})),o.a.createElement("nav",{key:"nav-menu",id:"sidebar-wrapper",className:this.state.sidebarOpen?"active":""},o.a.createElement("ul",{className:"sidebar-nav"},o.a.createElement("li",{className:"sidebar-brand"},o.a.createElement("a",{className:"js-scroll-trigger",href:"#top"},"Menu")),[{title:"Home",url:"#top"},{title:"About",url:"#about"},{title:"Skills",url:"#skills"},{title:"Portfolio",url:"#portfolio"},{title:"Contact",url:"#contact"}].map((function(t){return o.a.createElement("li",{key:t.url,className:"sidebar-nav-item",onClick:function(){return e.onMenuItemClick()}},o.a.createElement("a",{className:"js-scroll-trigger",href:t.url},t.title))}))))]}},{key:"onMenuItemClick",value:function(){this.setState({sidebarOpen:!1})}},{key:"onMenuClick",value:function(){this.setState({sidebarOpen:!this.state.sidebarOpen})}}]),t}(o.a.Component)),p=function(){return o.a.createElement("header",{className:"masthead d-flex"},o.a.createElement("div",{className:"container text-center my-auto"},o.a.createElement("h1",{className:"mb-1"},"Sean Keever"),o.a.createElement("h2",{className:"mb-5"},"Welcome to my personal page"),o.a.createElement("a",{className:"btn btn-primary btn-xl js-scroll-trigger",href:"#about"},"Learn More")),o.a.createElement("div",{className:"overlay"}))},h=a(4),b=a.n(h),g=function(){return o.a.createElement(b.a,{id:"about"},o.a.createElement("section",{className:"content-section bg-light"},o.a.createElement("div",{className:"container text-center"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-10 mx-auto"},o.a.createElement("h2",null,"About Me"),o.a.createElement("p",{className:"lead mb-5"},"I'm a full-stack developer and senior studying Computer Engineering at the\xa0",o.a.createElement("a",{href:"https://www.cs.washington.edu/",target:"_blank"},"University of Washington"),". Currently, I'm geeking out over GraphQL, styled-components, and Gatsby.js. Ask me if you have any questions."),o.a.createElement("a",{className:"btn btn-dark btn-xl js-scroll-trigger",href:"#skills"},"Learn More"))))))},f=[{title:"Tools",description:"Git, Ubuntu, VS Code",icon:"fas fa-toolbox"},{title:"Languages",description:"JavaScript, Java, HTML/CSS",icon:"fas fa-code"},{title:"Databases",description:"MS SQL Server, MongoDB, DynamoDB",icon:"fas fa-database"}],E=function(){return o.a.createElement(b.a,{id:"skills"},o.a.createElement("section",{className:"content-section bg-primary text-white text-center"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"content-section-heading"},o.a.createElement("h3",{className:"text-secondary mb-0"},"Skills"),o.a.createElement("h2",{className:"mb-5"},"Languages & Technologies")),o.a.createElement("div",{className:"row"},f.map((function(e,t){return o.a.createElement("div",{className:"col-lg-4 col-md-6 mb-5 mb-lg-0",key:"service_".concat(t)},o.a.createElement("span",{className:"service-icon rounded-circle mx-auto mb-3"},o.a.createElement("i",{className:e.icon})),o.a.createElement("h4",null,o.a.createElement("strong",null,e.title)),o.a.createElement("p",{className:"text-faded mb-0"},e.description))}))))))},v=a(9),k=a.n(v),N=function(){return o.a.createElement(k.a,{id:"contact"},o.a.createElement("section",{className:"contact"},o.a.createElement("div",{className:"container text-center"},o.a.createElement("h2",{className:"mx-auto mb-5"},"Take the next step."),o.a.createElement("a",{className:"btn btn-primary btn-xl",href:"https://github.com/swkeever/resume/raw/master/cv.pdf"},"Download CV"))))},w=[{imgSrc:"./img/nwretina.png",heading:"NW Retina",description:"Website built for local retina specialist",link:"https://www.nwretina.com"},{imgSrc:"./img/beautimage.png",heading:"Beautimage",description:"A simple way to find beautiful images",link:"https://swkeever.github.io/beautimage"},{imgSrc:"./img/333gle.jpg",heading:"333gle",description:"Google search mock-up. Built in CSE 333 course at the University of Washington.",link:"https://mock-google.herokuapp.com/"},{imgSrc:"./img/campus-paths.jpg",heading:"Campus Paths",description:"Finds the shortest path between two buildings using Dijkstra's algorithm. Built in CSE 331 course at the University of Washington.",link:"https://swkeever.github.io/campuspaths"}],y=function(){return o.a.createElement(b.a,{id:"portfolio"},o.a.createElement("section",{className:"content-section"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"content-section-heading text-center"},o.a.createElement("h3",{className:"text-secondary mb-0"},"Portfolio"),o.a.createElement("h2",{className:"mb-5"},"Recent Projects")),o.a.createElement("div",{className:"row no-gutters"},w.map((function(e,t){return o.a.createElement("div",{className:"col-lg-6",key:"portfolio_item_".concat(t)},o.a.createElement("a",{className:"portfolio-item",href:e.link,target:"_blank"},o.a.createElement("span",{className:"caption"},o.a.createElement("span",{className:"caption-content"},o.a.createElement("h2",null,e.heading),o.a.createElement("p",{className:"mb-0"},e.description))),o.a.createElement("img",{className:"img-fluid",src:e.imgSrc,alt:""})))}))))))},S=[{link:"mailto:swkeever@gmail.com",icon:"far fa-envelope"},{link:"https://github.com/swkeever",icon:"icon-social-github"},{link:"https://www.linkedin.com/in/swkeever",icon:"icon-social-linkedin"}],j=function(){return o.a.createElement("footer",{className:"footer text-center"},o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list-inline mb-5"},S.map((function(e,t){return o.a.createElement("li",{className:"list-inline-item",key:"social_".concat(t)},o.a.createElement("a",{className:"social-link rounded-circle text-white mr-3",href:e.link},o.a.createElement("i",{className:e.icon})))}))),o.a.createElement("p",{className:"text-muted small mb-0"},"Copyright \xa9 Sean Keever 2019")))},O=a(7),x=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).handleScroll=a.handleScroll.bind(Object(O.a)(a)),a.state={isScrolled:!1},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("a",{className:"".concat(this.state.isScrolled?"fadeIn":""," scroll-to-top rounded"),href:"#top"},o.a.createElement("i",{className:"fas fa-angle-up"}))}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.debounceScroll)}},{key:"debounceScroll",value:function(e){var t=this;setTimeout((function(){return t.handleScroll(e)}),300)}},{key:"handleScroll",value:function(e){var t=void 0!==window.pageXOffset,a="CSS1Compat"===(document.compatMode||""),n=(t?window.pageXOffset:a?document.documentElement.scrollLeft:document.body.scrollLeft,t?window.pageYOffset:a?document.documentElement.scrollTop:document.body.scrollTop);this.setState({isScrolled:n>0})}}]),t}(o.a.Component),C=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement(p,null),o.a.createElement(g,null),o.a.createElement(E,null),o.a.createElement(y,null),o.a.createElement(N,null),o.a.createElement(j,null),o.a.createElement(x,null))}}]),t}(o.a.Component),M=document.getElementById("root");u.a.render(o.a.createElement(C,null),M)}},[[16,1,2]]]);
//# sourceMappingURL=main.7519c9f3.chunk.js.map