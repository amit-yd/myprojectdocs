"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1585],{82026:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=i(62540),r=i(43023);const s={description:"External public Git repositories can now be imported into TeamForge from the Code Browser UI.",id:"import-git-repo",keywords:["import git repository","add git repository"],lastUpdatedAt:"Jan 25, 2020",product:"teamforge",tags:["ctf_20.0","ctf_19.2","project_admin_tasks","project_member_tasks","source_code","git_gerrit","scm"],title:"Import External Git Repositories into TeamForge from the Code Browser UI"},n=void 0,c={id:"import-git-repo",title:"Import External Git Repositories into TeamForge from the Code Browser UI",description:"External public Git repositories can now be imported into TeamForge from the Code Browser UI.",source:"@site/versioned_docs/version-23.1/import-git-repo.md",sourceDirName:".",slug:"/import-git-repo",permalink:"/docs/import-git-repo",draft:!1,unlisted:!1,tags:[{inline:!0,label:"ctf_20.0",permalink:"/docs/tags/ctf-20-0"},{inline:!0,label:"ctf_19.2",permalink:"/docs/tags/ctf-19-2"},{inline:!0,label:"project_admin_tasks",permalink:"/docs/tags/project-admin-tasks"},{inline:!0,label:"project_member_tasks",permalink:"/docs/tags/project-member-tasks"},{inline:!0,label:"source_code",permalink:"/docs/tags/source-code"},{inline:!0,label:"git_gerrit",permalink:"/docs/tags/git-gerrit"},{inline:!0,label:"scm",permalink:"/docs/tags/scm"}],version:"23.1",lastUpdatedAt:1721042912e3,frontMatter:{description:"External public Git repositories can now be imported into TeamForge from the Code Browser UI.",id:"import-git-repo",keywords:["import git repository","add git repository"],lastUpdatedAt:"Jan 25, 2020",product:"teamforge",tags:["ctf_20.0","ctf_19.2","project_admin_tasks","project_member_tasks","source_code","git_gerrit","scm"],title:"Import External Git Repositories into TeamForge from the Code Browser UI"},sidebar:"docs",previous:{title:"Create a Source Code Repository",permalink:"/docs/createasourcecoderepository"},next:{title:"Linkify Custom Object IDs in Code Browser",permalink:"/docs/linkifycustomobjectids"}},a={},l=[{value:"Related Links",id:"related-links",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The new repository import feature lets you import an external, public Git repository into TeamForge using the Code Browser UI."}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["This functionality was already available outside the UI, with CLI-based import (see ",(0,o.jsx)(t.a,{href:"./FAQPages/gitgerrit-faqs#howtoimportgitrepo",children:"How can I import an existing Git repository into Gerrit?"}),")."]})}),"\n",(0,o.jsx)(t.p,{children:"To import an external Git repository into TeamForge:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Select ",(0,o.jsx)(t.strong,{children:"Source Code"})," from the ",(0,o.jsx)(t.strong,{children:"Project Home"})," menu."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["In the list of the project repositories, click ",(0,o.jsx)(t.strong,{children:"Add"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Select the ",(0,o.jsx)(t.strong,{children:"Import"})," tab."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:i(31325).A+"",width:"896",height:"540"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Configure Advanced Repository Settings During Repository Creation/Import"}),(0,o.jsx)("br",{}),"\r\nThe repository ",(0,o.jsx)(t.strong,{children:"Import"})," tab lets you import repositories by simply giving the repo a name and selecting the destination server. However, a ",(0,o.jsx)(t.strong,{children:"Settings"})," toggle button ia also available, which if selected, shows you all the advanced repository settings\u2014thereby letting you configure the advanced repository settings at the time of repository import itself.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(t.p,{children:"This toggle button is not selected by default."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"The Import repository tab with the Settings toggle button selected",src:i(32795).A+"",width:"1335",height:"557"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Type the external public Git repository;s URL in the ",(0,o.jsx)(t.strong,{children:"IMPORT URL"})," field."]}),"\n",(0,o.jsxs)(t.p,{children:['For example, if you want to import a repository named "testwebhook" from GitHub, simply type, ',(0,o.jsx)(t.code,{children:"https://github.com/mkamaraj/testwebhook"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Type the username and password (to access the Git repository on the server where it resides). These are optional fields."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Type a name, display name, and description for the repository. If you plan to use an SCM server that requires approval for new repositories, use the ",(0,o.jsx)(t.strong,{children:"Description"})," field to provide your reason for asking to create this repository."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Choose a code review policy from the ",(0,o.jsx)(t.strong,{children:"REPOSITORY CATEGORY"})," drop-down list. For more information on Gerrit code review policies, see ",(0,o.jsx)(t.a,{href:"./codereviewpolicy",children:"Control Your Code Review Policy"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"PROTECT HISTORY"})," check box is selected by default. You can disable it, if required. For more information, see ",(0,o.jsx)(t.a,{href:"./historyprotect",children:"History Protection"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Choose values from the ",(0,o.jsx)(t.strong,{children:"GIT LFS ENABLED"})," and ",(0,o.jsx)(t.strong,{children:"MAX LFS OBJECT SIZE"})," drop-down lists. For more information, see ",(0,o.jsx)(t.a,{href:"./setuplfs",children:"Set up LFS"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["If you want each code commit to be associated with an artifact, select the ",(0,o.jsx)(t.strong,{children:"Required on commit"})," check box next to the ",(0,o.jsx)(t.strong,{children:"Association"})," field."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"One of the commit governance rules mandates that the artifact and the commit must be on the same TeamForge project."})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:i(23275).A+"",width:"3284",height:"1873"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["For security reasons, you may want to restrict email notifications to the essential information. If so, select ",(0,o.jsx)(t.strong,{children:"Hide Details in Monitoring Messages"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["To index the repository and to make the repository searchable, select the ",(0,o.jsx)(t.strong,{children:"Repository content will be available in search results"})," check box."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.strong,{children:"Import Repository"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"An email notification is sent to you, after successful import. Once the repository is imported, it gets added to the list of repositories."}),"\n",(0,o.jsx)(t.h4,{id:"related-links",children:"Related Links"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"./createasourcecoderepository",children:"Create a Source Code Repository"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"./codereviewpolicy",children:"Gerrit Code Review Policies"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"./historyprotect",children:"History Protection"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"./setuplfs",children:"Set up LFS"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},32795:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/20.0-scm-settingstoggle02-d57b37ca6bf8e3111ea2330f93658942.png"},23275:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/SCM-same_project_association-011f215b07f88c484b5e45e41d8c6cac.png"},31325:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/import-gitrepo-tab-5ed967ec6ab5eeb5683346c59a53cf15.png"},43023:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>c});var o=i(63696);const r={},s=o.createContext(r);function n(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);