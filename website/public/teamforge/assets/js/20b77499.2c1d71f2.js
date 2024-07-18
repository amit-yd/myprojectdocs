"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5711],{72560:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=s(62540),t=s(43023);const o={description:"Here's a list of few noteworthy issues fixed in TeamForge 24.0.",id:"teamforge-fixedissues",keywords:["release","notes","fixed","issues","bug","fixes"],lastUpdatedAt:"Nov 23, 2023",product:"teamforge",tags:["release_notes"],title:"What's Fixed in TeamForge 24.0?"},r=void 0,d={id:"release-notes/teamforge-fixedissues",title:"What's Fixed in TeamForge 24.0?",description:"Here's a list of few noteworthy issues fixed in TeamForge 24.0.",source:"@site/../docs/release-notes/teamforge-fixedissues.md",sourceDirName:"release-notes",slug:"/release-notes/teamforge-fixedissues",permalink:"/docs/next/release-notes/teamforge-fixedissues",draft:!1,unlisted:!1,tags:[{inline:!0,label:"release_notes",permalink:"/docs/next/tags/release-notes"}],version:"current",lastUpdatedAt:1721064795e3,frontMatter:{description:"Here's a list of few noteworthy issues fixed in TeamForge 24.0.",id:"teamforge-fixedissues",keywords:["release","notes","fixed","issues","bug","fixes"],lastUpdatedAt:"Nov 23, 2023",product:"teamforge",tags:["release_notes"],title:"What's Fixed in TeamForge 24.0?"},sidebar:"docs",previous:{title:"What's New?",permalink:"/docs/next/release-notes/teamforge-new"},next:{title:"Known Issues",permalink:"/docs/next/release-notes/teamforge-known"}},l={},a=[];function c(e){const n={code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In addition to fixing a few security vulnerabilities, the following issues were also fixed in TeamForge 24.0."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed\u2014After upgrading to TeamForge release 24.0, HTML editing displayed HTML code instead of text components in the project home."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed an issue that caused a provision error during database migration."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed\u2014The Transport Layer Security (TLS) encryption is now supported in TeamForge 24.0, adding a TLS stamp to both email sending and receiving end."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed an issue that led to high CPU utilization when the baseline creation count was increased in the baseline server."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed\u2014After upgrading to TeamForge release 23.0, HTML editing displayed HTML codes instead of text components in the project home."}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"Documents"})," module is enhanced to address the following issues:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed\u2014The ",(0,i.jsx)(n.strong,{children:"Last modified by"})," and ",(0,i.jsx)(n.strong,{children:"Created by"})," links on the document description page now takes you to the user details page."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed\u2014Project members with document edit permission can now download locked documents on documents list and view pages."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed\u2014The document tree now displays the document folder name instead of using ellipses when the name contains a large number of characters."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed\u2014The web browser context menu now displays ",(0,i.jsx)(n.strong,{children:"Save link as"})," option when you right-click the document icon, title, or previous version inside the document folder."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed an issue with the ",(0,i.jsx)(n.code,{children:"POST /documentfolders/{docfolderid}/documents"})," API call that caused the sample payload to fail when creating a document."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed an issue with document downloads due to which the active version of a document was downloaded instead of the latest version."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed\u2014When you navigate to a nested folder document within a large folder tree on the left navigation bar of the document or planning folder, now points the selected folder instead of resetting to the top."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed\u2014The manual and automation responses for the ",(0,i.jsx)(n.code,{children:"GET /foundation/v1/objects"})," API call now sort the ",(0,i.jsx)(n.code,{children:"create"})," operation first, followed by other ",(0,i.jsx)(n.code,{children:"update"})," operations."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed an issue that prevented the new text page component from displaying an image when you copied and pasted an image into it, even if the image name contained special characters."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"TeamForge SCM\u2014Bug Fixes"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed\u2014The ",(0,i.jsx)(n.code,{children:"GET /servers/{serverId}"})," and ",(0,i.jsx)(n.code,{children:"GET /servers"})," API calls are now restricted for users without source code admin permission."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed\u2014Assigning roles and users to ",(0,i.jsx)(n.strong,{children:"Merge via Pull Request"})," in protected branch settings prevented enabling the ",(0,i.jsx)(n.strong,{children:"Merge"})," button for merging feature branch into master."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed an issue that prevented newly created Gerrit custom labels from displaying in the UI and impeding the full functionality of Gerrit."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed\u2014the expansion arrow in the Git submodule page now functions properly when you expand the searched submodule repository."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed\u2014When cloning a Git replica server, the ",(0,i.jsx)(n.strong,{children:"SSH HOOK FETCH COMMAND"})," now correctly displays the ",(0,i.jsx)(n.strong,{children:"cURL"})," option selected in ",(0,i.jsx)(n.strong,{children:"Integrations"})," > ",(0,i.jsx)(n.strong,{children:"Settings"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var i=s(63696);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);