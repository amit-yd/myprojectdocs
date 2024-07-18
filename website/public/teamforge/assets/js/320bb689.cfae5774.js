"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8067],{75763:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var s=i(62540),t=i(43023);const l={description:"Once you have your Nexus server set up, install the TeamForge-Nexus integration plugin.",id:"installnexusplugin",keywords:["nexus","binary"],lastUpdatedAt:"Jun 11, 2021",product:"teamforge",tags:["ctf_21.1","ctf_21.0","ctf_20.3","ctf_20.2","ctf_20.1","ctf_20.0","ctf_19.3","installation","upgrade","binaries","ctf_19.2","integration"],title:"Install or Upgrade the TeamForge\u2014Nexus Integration Plugin"},r=void 0,a={id:"IntegrationPages/installnexusplugin",title:"Install or Upgrade the TeamForge\u2014Nexus Integration Plugin",description:"Once you have your Nexus server set up, install the TeamForge-Nexus integration plugin.",source:"@site/versioned_docs/version-23.1/IntegrationPages/installnexusplugin.md",sourceDirName:"IntegrationPages",slug:"/IntegrationPages/installnexusplugin",permalink:"/docs/IntegrationPages/installnexusplugin",draft:!1,unlisted:!1,tags:[{inline:!0,label:"ctf_21.1",permalink:"/docs/tags/ctf-21-1"},{inline:!0,label:"ctf_21.0",permalink:"/docs/tags/ctf-21-0"},{inline:!0,label:"ctf_20.3",permalink:"/docs/tags/ctf-20-3"},{inline:!0,label:"ctf_20.2",permalink:"/docs/tags/ctf-20-2"},{inline:!0,label:"ctf_20.1",permalink:"/docs/tags/ctf-20-1"},{inline:!0,label:"ctf_20.0",permalink:"/docs/tags/ctf-20-0"},{inline:!0,label:"ctf_19.3",permalink:"/docs/tags/ctf-19-3"},{inline:!0,label:"installation",permalink:"/docs/tags/installation"},{inline:!0,label:"upgrade",permalink:"/docs/tags/upgrade"},{inline:!0,label:"binaries",permalink:"/docs/tags/binaries"},{inline:!0,label:"ctf_19.2",permalink:"/docs/tags/ctf-19-2"},{inline:!0,label:"integration",permalink:"/docs/tags/integration"}],version:"23.1",lastUpdatedAt:1721042912e3,frontMatter:{description:"Once you have your Nexus server set up, install the TeamForge-Nexus integration plugin.",id:"installnexusplugin",keywords:["nexus","binary"],lastUpdatedAt:"Jun 11, 2021",product:"teamforge",tags:["ctf_21.1","ctf_21.0","ctf_20.3","ctf_20.2","ctf_20.1","ctf_20.0","ctf_19.3","installation","upgrade","binaries","ctf_19.2","integration"],title:"Install or Upgrade the TeamForge\u2014Nexus Integration Plugin"}},o={},c=[{value:"Install and Configure the TeamForge-Nexus 3 Integration Plugin",id:"installtfnexus3plugin",level:2},{value:"Upgrade the TeamForge\u2014Nexus 3 Integration Plugin",id:"upgradetfnexus3plugin",level:2},{value:"Related Links",id:"related-links",level:4}];function d(n){const e={a:"a",code:"code",h2:"h2",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["TeamForge\u2014Nexus 2 integration is no longer supported by TeamForge 19.2 and later. If you have TeamForge\u2014Nexus 2 integration, ",(0,s.jsx)(e.a,{href:"../IntegrationPages/installnexus#upgradenexus2to3",children:"Upgrade to Nexus 3"})," and integrate TeamForge and Nexus 3."]}),"\n",(0,s.jsx)(e.p,{children:"You must keep the following information handy before installing the TeamForge\u2014Nexus integration plugin:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Nexus absolute path"}),"\u2014This is the path to the directory where you have Nexus installed. In other words, the path to the directory where you have your Nexus files unzipped. For example, ",(0,s.jsx)(e.code,{children:"/nexus-3.29.2-02-unix/sonatype-work/nexus3"})," (Nexus 3)."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"TeamForge host URL"}),"\u2014The URL to access TeamForge. For example, ",(0,s.jsx)(e.a,{href:"http://ctf.cloud.collab.net",children:"http://ctf.cloud.collab.net"}),"."]}),"\n",(0,s.jsx)(e.li,{children:"TeamForge administrator user name and password."}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Nexus Application Name"}),"\u2014The name given to your Nexus integration. In other words, the name found in the Nexus integrated application configuration file."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Nexus Application Prefix"}),"\u2014The prefix chosen for Nexus. In other words, the prefix found in the Nexus integrated application configuration file."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Nexus URL"}),": The fully qualified Nexus URL."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"installtfnexus3plugin",children:"Install and Configure the TeamForge-Nexus 3 Integration Plugin"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Log on to the Nexus server."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Stop Nexus if it's running."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Linux:","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-linux",children:"./bin/nexus stop\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Windows:","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-msdos",children:"\\bin\\nexus stop\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Download the TeamForge\u2014Nexus 3 integration plugin."}),"\n",(0,s.jsxs)(e.p,{children:["TeamForge\u2014Nexus 3.61.0 integration plugin\u2014",(0,s.jsx)(e.a,{href:"https://mvn.collab.net/nexus/content/repositories/binaries-integration/com/collabnet/CTF-Nexus-3-Integration-Plugin/3.61.0-plugin-version/CTF-Nexus-3-Integration-Plugin-3.61.0-plugin-version.zip",children:"Download"})," the ",(0,s.jsx)(e.code,{children:"CTF-Nexus-3-Integration-Plugin-3.61.0-plugin-version}}.zip"})," file."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Unzip the ",(0,s.jsx)(e.code,{children:"CTF-Nexus-3-Integration-Plugin-3.61.0-plugin-version}}.zip"})," file."]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Linux:","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-linux",children:"cd <nexus-install-directory>/nexus/system\r\nunzip CTF-Nexus-3-Integration-Plugin-3.61.0-plugin-version.zip\n"})}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"Windows: Use a utility such as WinRAR."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Install the TeamForge-Nexus 3 integration plugin."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"sudo java -jar <nexus-install-directory>/nexus/system/CTF-Nexus-3-Integration-Plugin-3.61.0-plugin-version/installer.jar -enable\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Enter the Nexus absolute path and TeamForge host URL when prompted."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Start Nexus."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Linux:","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-linux",children:"cd <nexus-install-directory>\r\n./bin/nexus start\n"})}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"Windows:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-msdos",children:"cd <nexus-install-directory>\r\n \\bin\\nexus start\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Log on to Nexus 3 as a Site Administrator."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Click ",(0,s.jsx)(e.strong,{children:"Realms"})," under the ",(0,s.jsx)(e.strong,{children:"Security"})," section on the ",(0,s.jsx)(e.strong,{children:"Administration"})," menu."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Select ",(0,s.jsx)(e.strong,{children:"TF Authentication Realm"})," and ",(0,s.jsx)(e.strong,{children:"TF Authentication Token Realm"})," from the available list of realms.\r\n",(0,s.jsx)(e.img,{src:i(81501).A+"",width:"1361",height:"629"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Add them to the list of active realms and click ",(0,s.jsx)(e.strong,{children:"Save"}),".\r\n",(0,s.jsx)(e.img,{src:i(22260).A+"",width:"1360",height:"630"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Once Nexus is up and running, upload the Nexus IAF descriptors to TeamForge."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"java -jar <nexus-install-directory>/nexus/system/CTF-Nexus-3-Integration-Plugin-3.61.0-plugin-version/installer.jar -installxml\n"})}),"\n",(0,s.jsx)(e.p,{children:"Enter the TeamForge Host URL, TeamForge admin user name and password, Nexus application name, Nexus application prefix and Nexus URL when prompted."}),"\n",(0,s.jsx)(e.h2,{id:"upgradetfnexus3plugin",children:"Upgrade the TeamForge\u2014Nexus 3 Integration Plugin"}),"\n",(0,s.jsxs)(e.p,{children:["You must upgrade your TeamForge\u2014Nexus 3 integration plugin to ",(0,s.jsx)(e.code,{children:"CTF-Nexus-3-Integration-Plugin-3.61.0-plugin-version}}.zip"})," if you are upgrading to TeamForge 23.1."]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Download the TeamForge\u2014Nexus 3 integration plugin."}),"\n",(0,s.jsxs)(e.p,{children:["TeamForge\u2014Nexus 3.61.0}} integration plugin\u2014",(0,s.jsx)(e.a,{href:"https://mvn.collab.net/nexus/content/repositories/binaries-integration/com/collabnet/CTF-Nexus-3-Integration-Plugin/3.61.0-plugin-version/CTF-Nexus-3-Integration-Plugin-3.61.0-plugin-version.zip",children:"Download"})," the ",(0,s.jsx)(e.code,{children:"CTF-Nexus-3-Integration-Plugin-3.61.0-plugin-version}}.zip"})," file."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Unzip the ",(0,s.jsx)(e.code,{children:"CTF-Nexus-3-Integration-Plugin-3.61.0-plugin-version.zip"})," file."]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Linux:","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-linux",children:"cd <nexus-install-directory>/nexus/system\r\nunzip CTF-Nexus-3-Integration-Plugin-3.61.0-plugin-version.zip\n"})}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"Windows: Use a utility such as WinRAR."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Install the TeamForge-Nexus 3 integration plugin."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"sudo java -jar <nexus-install-directory>/nexus/system/CTF-Nexus-3-Integration-Plugin-3.61.0-plugin-version}}/installer.jar -enable\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Log on to Nexus 3 as a Site Administrator."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Click ",(0,s.jsx)(e.strong,{children:"Realms"})," under the ",(0,s.jsx)(e.strong,{children:"Security"})," section on the ",(0,s.jsx)(e.strong,{children:"Administration"})," menu."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Select ",(0,s.jsx)(e.strong,{children:"TF Authentication Realm"})," and ",(0,s.jsx)(e.strong,{children:"TF Authentication Token Realm"})," from the ",(0,s.jsx)(e.strong,{children:"Active"})," list of realms, move them to the ",(0,s.jsx)(e.strong,{children:"Available"})," list of realms and move them back to the ",(0,s.jsx)(e.strong,{children:"Active"})," list of realms."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"related-links",children:"Related Links"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"../IntegrationPages/managebinaries",children:"TeamForge Binary Integration Overview"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"../IntegrationPages/installnexus",children:"Install Nexus"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"../IntegrationPages/managebinaryrepos",children:"Manage Binary Repositories"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"../FAQPages/binaries-faqs",children:"TeamForge-Binary Integration FAQs"})}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},22260:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/nexus-3-authentication-2-7400a8fc4cc492d2ef1687fc2370c098.png"},81501:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/nexus-3-authentication-4acdb90a5dcf8bf5fbcf484b769ac1aa.png"},43023:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>a});var s=i(63696);const t={},l=s.createContext(t);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);