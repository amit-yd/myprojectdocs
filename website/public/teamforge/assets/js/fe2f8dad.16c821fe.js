"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1063],{62030:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(62540),r=t(43023);const a={description:"TeamForge supports integration with Git, a distributed version control tool powered by Gerrit.",id:"gitoverview",keywords:["git","gerrit","integration"],lastUpdatedAt:"Jul 13, 2020",product:"teamforge",tags:["ctf_20.2","git_gerrit","integration","source_code","code_review"],title:"TeamForge-Git Integration"},o=void 0,s={id:"gitoverview",title:"TeamForge-Git Integration",description:"TeamForge supports integration with Git, a distributed version control tool powered by Gerrit.",source:"@site/versioned_docs/version-23.1/gitoverview.md",sourceDirName:".",slug:"/gitoverview",permalink:"/docs/gitoverview",draft:!1,unlisted:!1,tags:[{inline:!0,label:"ctf_20.2",permalink:"/docs/tags/ctf-20-2"},{inline:!0,label:"git_gerrit",permalink:"/docs/tags/git-gerrit"},{inline:!0,label:"integration",permalink:"/docs/tags/integration"},{inline:!0,label:"source_code",permalink:"/docs/tags/source-code"},{inline:!0,label:"code_review",permalink:"/docs/tags/code-review"}],version:"23.1",lastUpdatedAt:1721042912e3,frontMatter:{description:"TeamForge supports integration with Git, a distributed version control tool powered by Gerrit.",id:"gitoverview",keywords:["git","gerrit","integration"],lastUpdatedAt:"Jul 13, 2020",product:"teamforge",tags:["ctf_20.2","git_gerrit","integration","source_code","code_review"],title:"TeamForge-Git Integration"},sidebar:"docs",previous:{title:"TeamForge Load Balancing Setup",permalink:"/docs/loadbalancing"},next:{title:"Set up Git Replica Servers",permalink:"/docs/setupgitreplica"}},d={},l=[{value:"Install or Upgrade TeamForge-Git Integration",id:"install-or-upgrade-teamforge-git-integration",level:2},{value:"Git Integration Blog Posts",id:"git-integration-blog-posts",level:2},{value:"Add Git as a Linked Application",id:"add-git-as-a-linked-application",level:2},{value:"Illustrations on TeamForge-Gerrit Communication",id:"illustrations-on-teamforge-gerrit-communication",level:2},{value:"TeamForge and Git/Gerrit on a Single Host",id:"teamforge-and-gitgerrit-on-a-single-host",level:3},{value:"TeamForge and Git/Gerrit in a Distributed Two-server Setup",id:"teamforge-and-gitgerrit-in-a-distributed-two-server-setup",level:3},{value:"TeamForge, Git/Gerrit and Replica Server in a Three-server Distributed Setup",id:"teamforge-gitgerrit-and-replica-server-in-a-three-server-distributed-setup",level:3}];function g(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:'Although Git is the world\u2019s leading distributed version control system, the enterprise has been slow and tentative in its adoption. Concerned with security breaches, compliance violations and lack of governance, many organizations have chosen to take a "wait and see" approach. With TeamForge, Git is ready for the enterprise. TeamForge lets you realize all the benefits of Git while ensuring the security, governance and manageability your business demands. With TeamForge, you can even manage Git and Subversion together, within each individual project.'}),"\n",(0,n.jsx)(i.p,{children:"Gerrit is an open source code review system designed to work with Git. Gerrit supports various access control mechanisms. The TeamForge Git integration uses Gerrit as a vehicle to bring TeamForge project roles and permissions into Git."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:t(53054).A+"",width:"692",height:"273"})}),"\n",(0,n.jsx)(i.h2,{id:"install-or-upgrade-teamforge-git-integration",children:"Install or Upgrade TeamForge-Git Integration"}),"\n",(0,n.jsx)(i.p,{children:"You can install Git on the TeamForge Application Server or on a separate server dedicated for SCM. For more information about installing and upgrading Git, see TeamForge install and upgrade instructions."}),"\n",(0,n.jsx)(i.h2,{id:"git-integration-blog-posts",children:"Git Integration Blog Posts"}),"\n",(0,n.jsxs)(i.p,{children:["You can also read the ",(0,n.jsx)(i.a,{href:"http://blogs.collab.net/git",children:"CollabNet blog posts on Git"})," and follow the latest developments in the Digital.ai TeamForge-Git integration space."]}),"\n",(0,n.jsx)(i.h2,{id:"add-git-as-a-linked-application",children:"Add Git as a Linked Application"}),"\n",(0,n.jsx)(i.p,{children:"Once you have installed Git, you can add Git as a linked application on your TeamForge site."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{src:t(75905).A+"",width:"22",height:"22"})," In TeamForge 7.2 and later versions, installing Git for the first time creates a site-wide linked application automatically.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{src:t(75905).A+"",width:"22",height:"22"})," However, this behavior can be controlled by the ",(0,n.jsx)(i.code,{children:"teamforge.createTFProjectLinkedApps"})," Gerrit config (",(0,n.jsx)(i.code,{children:"gerrit.config"}),") property."]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Set up the URL ",(0,n.jsx)(i.code,{children:"http://<TEAMFORGEHOSTNAME>/gerrit/sso/"}),"."]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"/"})," at the end of the URL matters. Make sure you have it."]})}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["For instructions on setting up a site-wide linked application in TeamForge, see ",(0,n.jsx)(i.a,{href:"./externalapplications#linkedapps",children:"Create a Site-wide Linked Application"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"Here's an example for Git:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:t(33698).A+"",width:"836",height:"448"})}),"\n",(0,n.jsx)(i.p,{children:"A link for Git is added to the More menu in your TeamForge navigation bar."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:t(67248).A+"",width:"648",height:"263"})}),"\n",(0,n.jsxs)(i.p,{children:["Clicking ",(0,n.jsx)(i.strong,{children:"Git"})," displays the Git console in the main TeamForge window."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"illustrations-on-teamforge-gerrit-communication",children:"Illustrations on TeamForge-Gerrit Communication"}),"\n",(0,n.jsx)(i.p,{children:"The following illustrations help you understand the communication flow between TeamForge and Gerrit in a single host and distributed environments."}),"\n",(0,n.jsx)(i.h3,{id:"teamforge-and-gitgerrit-on-a-single-host",children:"TeamForge and Git/Gerrit on a Single Host"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:t(73863).A+"",width:"912",height:"758"})}),"\n",(0,n.jsx)(i.h3,{id:"teamforge-and-gitgerrit-in-a-distributed-two-server-setup",children:"TeamForge and Git/Gerrit in a Distributed Two-server Setup"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:t(53804).A+"",width:"998",height:"841"})}),"\n",(0,n.jsx)(i.h3,{id:"teamforge-gitgerrit-and-replica-server-in-a-three-server-distributed-setup",children:"TeamForge, Git/Gerrit and Replica Server in a Three-server Distributed Setup"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:t(22901).A+"",width:"1408",height:"942"})})]})}function c(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},67248:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/gerrit-linkedapp-80-1-317a65f93d6a9b02d6884037c389de74.png"},33698:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/gerrit-linkedapp-80-f0dc5dec37efa83eca0208a2e16f8218.png"},75905:(e,i,t)=>{t.d(i,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExQTk2MURCMzQ1QTg3OTcyOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQ0IzQzI5Qjg2NTYxMUUxQjU1NkZCQ0RDQTk1MEE3NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQ0IzQzI5QTg2NTYxMUUxQjU1NkZCQ0RDQTk1MEE3NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZDQzBDNjg4MTkyMDY4MTE4REJCODA3RUZEMkZCNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAxODAxMTc0MDcyMDY4MTFBOTYxREIzNDVBODc5NzI5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+gwrFywAAAehJREFUeNpi/P//PwMtABMDjcDQM5gFXYCRkZEU/cxPnz5LBjGkpaXmAqm/OA0mxdAbN25mTn+yeDKIA2SzaWioT4cZzkSJoQvfrJ+89f5+BhC+9P/W5JUrV2qDPE2uwWBD5z5bN3nj7f0MP7//Z3AVd2D4fur9pPDw8DeEDGa6evWq+b1nDw8DXSEOUwwzdOaDdZPX3dgHNPQfg4e0A4PcVZ758fFxy4Hy34D4Py6DmY4ePWZ57PO13T7r8myEtGX2L1q0GGQ4C8jQKbfXTl5zbS/Drx//GbzkHRmUbvHOz8nJmQOUvwPEn2EGM6LnPGCq4Dx/88rmkK2Vzp9+fmXgY+NmKDGNuWEnrLNy8q0N9Wtv7AWrC9F0ZtB+wg8z9BYQv0dOFdgM5rW0tDQv622Yn39ossynH1/A4hayugwnHl8Gs8N0XBj0XgjgNBSXwexASkZbW9uiaWZvZ/beidIff3yFy0fouTAYvxXCaygYgAxGxtCI4gRiVS0trZjVh3c8Eary+M9cZPM/dnHj/ylTpswDylkBsQgoMnGmHSwGYxp+cPuTnBU9xBuKx2AUw3V0dCK6u3t6iDYURxijG84BNQxEvwPiD1jDlESDYYYzQ9P8X2IMJbYQAtn8h9R8zzhaNcEAQIABAPHG9uJTK4WgAAAAAElFTkSuQmCC"},53054:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/teamforge-git-overview-f43d4c134494c63d2e2cf0b79dee6460.png"},73863:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/tfgerritcomm01-5ee95b029d38692f13a99941c96c86ae.png"},53804:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/tfgerritcomm02-f90dfc10bd249339a76aaded0a67abe9.png"},22901:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/tfgerritcomm03-6ff51162d4665c02b7fa6545daed1c95.png"},43023:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>s});var n=t(63696);const r={},a=n.createContext(r);function o(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);