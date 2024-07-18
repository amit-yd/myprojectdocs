"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5630],{8336:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var s=t(62540),c=t(43023);const n={description:"You can use the checkout command to check out the code from Subversion or GIT repository.",id:"checkoutcode",keywords:["check out code"],lastUpdatedAt:"Oct 10, 2019",product:"teamforge",tags:["ctf_19.3","project admin_tasks","project_member_tasks","source_code","git_gerrit","scm"],title:"Check Out Code"},i=void 0,r={id:"checkoutcode",title:"Check Out Code",description:"You can use the checkout command to check out the code from Subversion or GIT repository.",source:"@site/versioned_docs/version-23.1/checkoutcode.md",sourceDirName:".",slug:"/checkoutcode",permalink:"/teamforge/docs/checkoutcode",draft:!1,unlisted:!1,tags:[{inline:!0,label:"ctf_19.3",permalink:"/teamforge/docs/tags/ctf-19-3"},{inline:!0,label:"project admin_tasks",permalink:"/teamforge/docs/tags/project-admin-tasks"},{inline:!0,label:"project_member_tasks",permalink:"/teamforge/docs/tags/project-member-tasks"},{inline:!0,label:"source_code",permalink:"/teamforge/docs/tags/source-code"},{inline:!0,label:"git_gerrit",permalink:"/teamforge/docs/tags/git-gerrit"},{inline:!0,label:"scm",permalink:"/teamforge/docs/tags/scm"}],version:"23.1",lastUpdatedAt:1721042912e3,frontMatter:{description:"You can use the checkout command to check out the code from Subversion or GIT repository.",id:"checkoutcode",keywords:["check out code"],lastUpdatedAt:"Oct 10, 2019",product:"teamforge",tags:["ctf_19.3","project admin_tasks","project_member_tasks","source_code","git_gerrit","scm"],title:"Check Out Code"},sidebar:"docs",previous:{title:"Check Command History",permalink:"/teamforge/docs/checkcommandhistory"},next:{title:"Get the Code",permalink:"/teamforge/docs/getcode"}},a={},d=[{value:"Check out Subversion Code Anonymously",id:"check-out-subversion-code-anonymously",level:2},{value:"Check out GIT Code",id:"check-out-git-code",level:2},{value:"Configurable Checkout Command for Git Repositories",id:"configurable-checkout-command-for-git-repositories",level:3}];function h(e){const o={code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h2,{id:"check-out-subversion-code-anonymously",children:"Check out Subversion Code Anonymously"}),"\n",(0,s.jsx)(o.p,{children:'When you want to experiment with the code, you can do an anonymous checkout from the Subversion repository. The checkout command uses a unique system-created user called "guest" and works without authentication.'}),"\n",(0,s.jsx)(o.p,{children:'To make anonymous checkout possible, the project administrator must set public and repository view permission to "All Users." The checkout command differs based on whether a user is logged in or not.'}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"When you are not logged in, use this command to check out:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell",children:"svn checkout --username guest <domain>/svn/repo URL name\n"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"When you are logged in, use this command to check out:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell",children:" svn checkout --username <logged in_username><domain>/svn/repo URL name\n"})}),"\n",(0,s.jsx)(o.h2,{id:"check-out-git-code",children:"Check out GIT Code"}),"\n",(0,s.jsxs)(o.p,{children:["Generally, GIT repositories can be accessed by more than one protocol. To support this, a ",(0,s.jsx)(o.strong,{children:"Protocol"})," drop-down list is available on the source code repositories page. This feature applies only to GIT repositories and so selecting a protocol determines the check out command for a GIT repository. This also gives the user an option to override the default protocol which is set while configuring the GIT integration server."]}),"\n",(0,s.jsx)(o.h3,{id:"configurable-checkout-command-for-git-repositories",children:"Configurable Checkout Command for Git Repositories"}),"\n",(0,s.jsx)(o.p,{children:"Prior to TeamForge 19.3, by default, the checkout command/clone URL of a Git repository, included the SCP-based commit message hook for SSH protocol and cURL-based commit message hook for HTTP protocol."}),"\n",(0,s.jsxs)(o.p,{children:["From now on, you can modify the checkout command settings for both HTTPS and SSH protocols to include either the SCP-based or cURL-based commit message hook in their clone URL, using the two new parameters, ",(0,s.jsx)(o.strong,{children:"HTTPS HOOK FETCH COMMAND"})," and ",(0,s.jsx)(o.strong,{children:"SSH HOOK FETCH COMMAND"})," (",(0,s.jsxs)(o.strong,{children:["Admin > Integrations > <Git ",(0,s.jsx)("a",{href:"#","data-toggle":"tooltip","data-original-title":"hostname refers to the server on which Git integration is hosted",children:"hostname"}),">"]})," page). This setting applies across projects on your site."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"&quot;HTTPS HOOK FETCH COMMAND&quot; and &quot;SSH HOOK FETCH COMMAND&quot; parameters",src:t(72317).A+"",width:"1349",height:"547"})}),"\n",(0,s.jsxs)(o.p,{children:["For instance, if you want the checkout command for HTTPS protocol to include SCP-based commit message hook, you can select the option ",(0,s.jsx)(o.em,{children:"SCP"})," from the ",(0,s.jsx)(o.strong,{children:"HTTPS HOOK FETCH COMMAND"})," parameter."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"HTTPS clone URL with SCP-based commit message hook",src:t(51070).A+"",width:"589",height:"344"})}),"\n",(0,s.jsxs)(o.p,{children:["You can also include the cURL-based commit message hook in the HTTPS checkout command by selecting the ",(0,s.jsx)(o.em,{children:"cURL"})," option from ",(0,s.jsx)(o.strong,{children:"HTTPS HOOK FETCH COMMAND"}),"."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"HTTPS checkout command with cURL-based commit message hook",src:t(21308).A+"",width:"589",height:"344"})}),"\n",(0,s.jsxs)(o.p,{children:["Similarly, you can select the option ",(0,s.jsx)(o.em,{children:"cURL"})," from the ",(0,s.jsx)(o.strong,{children:"SSH HOOK FETCH COMMAND"})," parameter to include the cURL-based commit message hook in the checkout command for SSH protocol, if required."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"SSH checkout command with CURL-based commit message hook",src:t(791).A+"",width:"588",height:"347"})}),"\n",(0,s.jsxs)(o.p,{children:["You can select the ",(0,s.jsx)(o.em,{children:"SCP"})," option to get the SCP-based commit message hook included for SSH protocol."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"SSH clone URL with SCP-based commit message hook",src:t(21435).A+"",width:"588",height:"347"})})]})}function m(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},21308:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/git-clone-https-curl-77ef4ecd40d389a6128c488006a04d85.png"},51070:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/git-clone-https-scp-0fc632dc1d63c52f7d703962fc58d097.png"},791:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/git-clone-ssh-curl-4efd40e62fcfc8acea1bca031029ac71.png"},21435:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/git-clone-ssh-scp-44e281cef269071ffa55c33b49de1bdf.png"},72317:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/git-fetch-commands-8c109a5fb60b4dcdf09f44f479a62cd4.png"},43023:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>r});var s=t(63696);const c={},n=s.createContext(c);function i(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);