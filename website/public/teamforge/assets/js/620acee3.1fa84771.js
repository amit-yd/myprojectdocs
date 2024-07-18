"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4130],{68228:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(62540),i=t(43023);const r={description:"An important aspect of the end-to-end development lifecycle is the creation and storage of software packages that are often binary artifacts. In the Java world, these are usually reusable jars that are used by other projects. Binary artifact repository managers are software systems that manage, version, and store binary artifacts. Example of such repository manager is Sonatype Nexus.",id:"managebinaries",keywords:["binary","repository","binaries","artifactory","nexus","maven"],lastUpdatedAt:"Feb 18, 2020",product:"teamforge",tags:["binaries","authentication","integration","installation","release_notes","ctf_18.2","ctf_19.3"],title:"TeamForge Binary Integration Overview"},s=void 0,o={id:"IntegrationPages/managebinaries",title:"TeamForge Binary Integration Overview",description:"An important aspect of the end-to-end development lifecycle is the creation and storage of software packages that are often binary artifacts. In the Java world, these are usually reusable jars that are used by other projects. Binary artifact repository managers are software systems that manage, version, and store binary artifacts. Example of such repository manager is Sonatype Nexus.",source:"@site/../docs/IntegrationPages/managebinaries.md",sourceDirName:"IntegrationPages",slug:"/IntegrationPages/managebinaries",permalink:"/docs/next/IntegrationPages/managebinaries",draft:!1,unlisted:!1,tags:[{inline:!0,label:"binaries",permalink:"/docs/next/tags/binaries"},{inline:!0,label:"authentication",permalink:"/docs/next/tags/authentication"},{inline:!0,label:"integration",permalink:"/docs/next/tags/integration"},{inline:!0,label:"installation",permalink:"/docs/next/tags/installation"},{inline:!0,label:"release_notes",permalink:"/docs/next/tags/release-notes"},{inline:!0,label:"ctf_18.2",permalink:"/docs/next/tags/ctf-18-2"},{inline:!0,label:"ctf_19.3",permalink:"/docs/next/tags/ctf-19-3"}],version:"current",lastUpdatedAt:1721042912e3,frontMatter:{description:"An important aspect of the end-to-end development lifecycle is the creation and storage of software packages that are often binary artifacts. In the Java world, these are usually reusable jars that are used by other projects. Binary artifact repository managers are software systems that manage, version, and store binary artifacts. Example of such repository manager is Sonatype Nexus.",id:"managebinaries",keywords:["binary","repository","binaries","artifactory","nexus","maven"],lastUpdatedAt:"Feb 18, 2020",product:"teamforge",tags:["binaries","authentication","integration","installation","release_notes","ctf_18.2","ctf_19.3"],title:"TeamForge Binary Integration Overview"}},l={},c=[{value:"What is a binary artifact repository?",id:"what-is-a-binary-artifact-repository",level:2},{value:"How does a binary artifact repository manager help?",id:"how-does-a-binary-artifact-repository-manager-help",level:2},{value:"How to integrate TeamForge with Nexus? #integratenexus",id:"how-to-integrate-teamforge-with-nexus-integratenexus",level:2},{value:"Authentication Policies",id:"authentication-policies",level:2},{value:"Known Limitations with TeamForge\u2014Nexus 3 Integration",id:"limitations",level:2},{value:"Related Links",id:"related-links",level:4}];function d(e){const n={a:"a",admonition:"admonition",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Here is an overview of integrating TeamForge, a complete ALM suite, with binary repository managers."}),"\n",(0,a.jsx)(n.h2,{id:"what-is-a-binary-artifact-repository",children:"What is a binary artifact repository?"}),"\n",(0,a.jsx)(n.p,{children:"A binary artifact repository stores binary artifacts along with the metadata in a defined directory structure, conceptually similar to a source code repository. The metadata describes the binary software artifact and includes information such as dependencies, versioning, and build promotions. Maven is the widely used tool for dependency management, especially for Java projects. Maven represents dependencies in an XML file called Project Object Model (POM). Other tools can use similar approaches to store documentation archives, source archives, Flash libraries and applications, and Ruby libraries."}),"\n",(0,a.jsx)(n.h2,{id:"how-does-a-binary-artifact-repository-manager-help",children:"How does a binary artifact repository manager help?"}),"\n",(0,a.jsx)(n.p,{children:"Some of the advantages of using a binary artifact repository manager are:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Dependency management"}),": Nexus can act as a Maven repository. Maven is a widely used Java dependency management and build tool."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Efficient builds"}),": With the help of a binary artifact repository manager, you can save the download time from public repositories as the artifacts once downloaded are cached locally."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Predictability and release stability"}),": Once published onto a release repository, the binary artifact and metadata do not change. It ensures predictable and repeatable builds."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Control and audit"}),": If you want to standardize libraries that are used in your software, the binary artifact repository helps track the versions of your software components. Also it enables you to audit the licenses of your third-party components used in your software."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Promotes collaboration"}),": The binary artifact repository enables you to share components with other teams."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-integrate-teamforge-with-nexus-integratenexus",children:"How to integrate TeamForge with Nexus? #integratenexus"}),"\n",(0,a.jsxs)(n.p,{children:["24.0 supports integration only with Nexus 3. If you have TeamForge-Nexus 2 integration, ",(0,a.jsx)(n.a,{href:"../IntegrationPages/installnexus#upgradenexus2to3",children:"upgrade to Nexus 3"})," and integrate TeamForge and Nexus 3. For more information, see:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../IntegrationPages/installnexus",children:"Install Nexus"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../IntegrationPages/installnexusplugin#installtfnexus3plugin",children:"Install and Configure the TeamForge\u2014Nexus 3 Integration Plugin"})}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"important",children:(0,a.jsx)(n.p,{children:"TeamForge\u2014Nexus integration is not supported in SUSE Linux platform. See [TeamForge Installation Requirements][requirements]."})}),"\n",(0,a.jsx)(n.p,{children:"TeamForge supports integration with Nexus 3.61.0 in both ALM and SCM modes."}),"\n",(0,a.jsx)(n.p,{children:"To integrate Nexus with TeamForge:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Download and install the Nexus OSS. To set up the Nexus 3 server, see ",(0,a.jsx)(n.a,{href:"../IntegrationPages/installnexus",children:"Install Nexus"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Download and install the TeamForge\u2014Nexus integration plugin. To install the TeamForge\u2014Nexus 3 integration plugin, see ",(0,a.jsx)(n.a,{href:"../IntegrationPages/installnexusplugin",children:"Install the TeamForge-Nexus Integration Plugin"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"You must have a Nexus instance running before you install the TeamForge-Nexus integration plugin. If you are upgrading from an earlier version of the plugin, ensure that the old plugin is completely removed from the directory and the new plugin is unzipped on the same directory before you restart the Nexus instance."}),"\n",(0,a.jsx)(n.p,{children:"You need to have the following information handy before you start off with the installation:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Installation path of the running Nexus instance."}),"\n",(0,a.jsx)(n.li,{children:"TeamForge host's URL."}),"\n",(0,a.jsx)(n.li,{children:"TeamForge site administrator credentials."}),"\n",(0,a.jsx)(n.li,{children:"A suitable name for your Nexus instance; the Binaries Application in TeamForge refers to this name."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Change your build system and use the ",(0,a.jsx)(n.a,{href:"../WEBRPages/configuremavenplugin",children:"CollabNet supplied Maven deploy plugin"})," for end-to-end traceability from requirements to source code all the way to deployed binary artifacts."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Accessing Nexus through TeamForge"}),": You have to introduce a TeamForge project context in Nexus and allow authentication to use TeamForge credentials for logging into Nexus directly. Accessing Nexus through the TeamForge project toolbar provides you with Single Sign-on (SSO). It logs you into Nexus automatically with the project context. You can allow RBAC (Role Based Access Control) using TeamForge roles."]}),"\n",(0,a.jsx)(n.h2,{id:"authentication-policies",children:"Authentication Policies"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.th,{children:"Nexus"})})}),(0,a.jsx)(n.tbody,{children:(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"Your site administrator can enable the integration with the following two authentication mechanisms:"})})})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"TeamForge and native Nexus login (default)"}),"\n",(0,a.jsx)(n.li,{children:"TeamForge only"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In both cases, you can use your TeamForge credentials to log on to Nexus. If your Site Administrator has used the default setup, you can use your pre-existing Nexus credentials."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Roles and Permissions"})}),"\n",(0,a.jsx)(n.p,{children:"Following are the two administrative privileges in Nexus:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Nexus Admin (Site Admin in TeamForge will be a Nexus Admin)"}),"\n",(0,a.jsx)(n.li,{children:"Project admin (permissions to create, update, and delete binary artifact repositories.)"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"For all other users, privileges are based on the TeamForge RBAC setup."}),"\n",(0,a.jsx)(n.h2,{id:"limitations",children:"Known Limitations with TeamForge\u2014Nexus 3 Integration"}),"\n",(0,a.jsx)(n.p,{children:"Here's a list of known limitations of TeamForge\u2014Nexus 3 integration."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Unlike Nexus 2 users, Nexus 3 users cannot create binary repositories from the TeamForge ",(0,a.jsx)(n.strong,{children:"Binaries"})," page. When they do so, they are redirected to the Nexus 3 Repository Manager in Nexus Application, to let them create binary repositories."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"A TeamForge user cannot be configured as an anonymous user in Nexus as TeamForge users are not available in the Nexus database."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"TeamForge broadcast messages and license notifications are not visible in Sonatype Nexus pages in TeamForge. This is due to a limitation with the TeamForge\u2014Nexus integration plugin."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"When the TeamForge Project administrator changes the existing binary permissions for a user, the changes will not immediately take place due to the cache implementation in Nexus to improve the performance of session handling. Due to this limitation, when a user tries to create a new Nexus repository, he will get the permission denied error. Hence the user must wait for the changes to take effect. However, the user can view the changes immediately on a standalone Nexus application by restarting his session on it."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"related-links",children:"Related Links"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../IntegrationPages/installnexus",children:"Install Nexus"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../IntegrationPages/installnexusplugin",children:"Install the TeamForge-Nexus Integration Plugin"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../IntegrationPages/managebinaryrepos",children:"Manage Binary Repositories"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../FAQPages/binaries-faqs",children:"TeamForge-Binary Integration FAQs"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(63696);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);