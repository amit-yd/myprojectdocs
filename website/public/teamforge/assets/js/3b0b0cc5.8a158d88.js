"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[189],{20251:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=t(62540),i=t(43023),s=t(40224);function a(e){const r={h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"one-hop-upgrade-compatibility",children:"One-hop Upgrade Compatibility"}),"\n",(0,n.jsx)(r.p,{children:"Though the TeamForge 24.0 installer supports one-hop upgrade from TeamForge 22.1 or later versions, TeamForge 24.0 upgrade instructions, in general, are for upgrading from TeamForge 23.1 (including update releases, if any) to TeamForge 24.0 ."}),"\n",(0,n.jsx)(r.p,{children:"There is no support for one-hop upgrade from TeamForge 22.0 or earlier to TeamForge 24.0 . You must upgrade your site to TeamForge 22.1 or later and then upgrade to TeamForge 24.0 ."})]})}function o(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}const l={description:"Plan your installation or upgrade setup, hardware and software requirements and so on before you begin.",id:"plan_your_installation_upgrade",keywords:["plan","planning","services"],lastUpdatedAt:"Jun 3, 2021",product:"teamforge",tags:["ctf_21.1","ctf_21.0","ctf_20.3","ctf_20.2","ctf_20.1","ctf_19.0","ctf_18.3","installation","upgrade","getting_started","backup_restore"],title:"Plan Your Installation / Upgrade"},d=void 0,c={id:"installpages/plan_your_installation_upgrade",title:"Plan Your Installation / Upgrade",description:"Plan your installation or upgrade setup, hardware and software requirements and so on before you begin.",source:"@site/../docs/installpages/plan_your_installation_upgrade.md",sourceDirName:"installpages",slug:"/installpages/plan_your_installation_upgrade",permalink:"/docs/next/installpages/plan_your_installation_upgrade",draft:!1,unlisted:!1,tags:[{inline:!0,label:"ctf_21.1",permalink:"/docs/next/tags/ctf-21-1"},{inline:!0,label:"ctf_21.0",permalink:"/docs/next/tags/ctf-21-0"},{inline:!0,label:"ctf_20.3",permalink:"/docs/next/tags/ctf-20-3"},{inline:!0,label:"ctf_20.2",permalink:"/docs/next/tags/ctf-20-2"},{inline:!0,label:"ctf_20.1",permalink:"/docs/next/tags/ctf-20-1"},{inline:!0,label:"ctf_19.0",permalink:"/docs/next/tags/ctf-19-0"},{inline:!0,label:"ctf_18.3",permalink:"/docs/next/tags/ctf-18-3"},{inline:!0,label:"installation",permalink:"/docs/next/tags/installation"},{inline:!0,label:"upgrade",permalink:"/docs/next/tags/upgrade"},{inline:!0,label:"getting_started",permalink:"/docs/next/tags/getting-started"},{inline:!0,label:"backup_restore",permalink:"/docs/next/tags/backup-restore"}],version:"current",lastUpdatedAt:1721042912e3,frontMatter:{description:"Plan your installation or upgrade setup, hardware and software requirements and so on before you begin.",id:"plan_your_installation_upgrade",keywords:["plan","planning","services"],lastUpdatedAt:"Jun 3, 2021",product:"teamforge",tags:["ctf_21.1","ctf_21.0","ctf_20.3","ctf_20.2","ctf_20.1","ctf_19.0","ctf_18.3","installation","upgrade","getting_started","backup_restore"],title:"Plan Your Installation / Upgrade"}},h={},u=[{value:"TeamForge Services",id:"teamforgeservices",level:2},{value:"Single Server or Distributed Setup?",id:"singleordistributed",level:2},{value:"PostgreSQL or Oracle?",id:"postgresororacle",level:2},{value:"Integrations",id:"integrations",level:2},{value:"One-hop Upgrade Compatibility",id:"one-hop-upgrade-compatibility",level:2},{value:"Gerrit Upgrade from Version 2.16 to 3.2",id:"gerrit-upgrade-from-version-216-to-32",level:2},{value:"Hardware and Backup",id:"hardware-and-backup",level:2},{value:"Applying OS Security Patches",id:"applying-os-security-patches",level:2},{value:"TeamForge License Framework",id:"teamforge-license-framework",level:2},{value:"Other Dos and Don&#39;ts",id:"other-dos-and-donts",level:2}];function g(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"teamforgeservices",children:"TeamForge Services"}),"\n",(0,n.jsx)(r.p,{children:"Before you plan your installation or upgrade, let us understand TeamForge and its services."}),"\n",(0,n.jsx)(r.p,{children:"A TeamForge site consists of a core TeamForge application and several tightly integrated services that support it. In addition, you can integrate TeamForge with other third party applications such as Nexus, Jenkins, Jira and so on. Some of the TeamForge services are mandatory and some are optional. You can install the services, all in one single server, or distribute them across two or more servers."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"The core TeamForge application provides the Web interface that users see, and the API that other applications can interact with. It also includes the file system where some user content is stored, such as wiki pages."}),"\n",(0,n.jsx)(r.li,{children:"The site database is where most of the user-created content is stored and accessed. Documents, discussion posts, tracker artifacts, project administration settings: all that sort of thing lives in the database."}),"\n",(0,n.jsx)(r.li,{children:"The source control server ties any number of Subversion or Git/Gerrit repositories into the TeamForge site."}),"\n",(0,n.jsx)(r.li,{children:"The Extract Transform and Load (ETL) server pulls data from the site database and populates the datamart to generate charts and graphs about how people are using the site.\r\nThe datamart (Reports DB) is an abstraction of the site database, optimized to support the reporting functionality."}),"\n",(0,n.jsxs)(r.li,{children:["Baseline is a TeamForge capability that lets you create snapshot of selected configuration items from a given TeamForge project at a given point in time. For more information, see ",(0,n.jsx)(r.a,{href:"../BaselinePages/baseline-overview",children:"TeamForge Baseline"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["TeamForge Webhooks-based Event Broker, which is also referred to as the integration broker, is a webhooks-based message broker that pushes the messages of specific events received from a Publisher to a Subscriber. For more information, see ",(0,n.jsx)(r.a,{href:"../WEBRPages/webhooks-event-broker-overview",children:"TeamForge Webhooks-based Event Broker"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Here's a list of available TeamForge services."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Service"}),(0,n.jsx)(r.th,{children:"Mandatory/Optional"}),(0,n.jsx)(r.th,{children:"Old Name"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ctfcore"}),(0,n.jsx)(r.td,{children:"Mandatory"}),(0,n.jsx)(r.td,{children:"app"}),(0,n.jsx)(r.td,{children:"Main TeamForge application server"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"search"}),(0,n.jsx)(r.td,{children:"Mandatory"}),(0,n.jsx)(r.td,{children:"indexer"}),(0,n.jsx)(r.td,{children:"Indexing and searching"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"mail"}),(0,n.jsx)(r.td,{children:"Mandatory"}),(0,n.jsx)(r.td,{children:"NA (added in TeamForge 17.1)"}),(0,n.jsx)(r.td,{children:"Email server"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ctfcore-database"}),(0,n.jsx)(r.td,{children:"Mandatory"}),(0,n.jsx)(r.td,{children:"database"}),(0,n.jsx)(r.td,{children:"Operational database"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ctfcore-database-mirror"}),(0,n.jsx)(r.td,{children:"Optional"}),(0,n.jsx)(r.td,{children:"NA"}),(0,n.jsx)(r.td,{children:"Mirror of operational database"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"codesearch"}),(0,n.jsx)(r.td,{children:"Mandatory"}),(0,n.jsx)(r.td,{children:"codesearch"}),(0,n.jsx)(r.td,{children:"Code Search"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"etl"}),(0,n.jsx)(r.td,{children:"Optional"}),(0,n.jsx)(r.td,{children:"etl"}),(0,n.jsx)(r.td,{children:"ETL for Datamart"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ctfcore-datamart"}),(0,n.jsxs)(r.td,{children:["Mandatory if and only if you install ",(0,n.jsx)(r.code,{children:"etl"})]}),(0,n.jsx)(r.td,{children:"datamart"}),(0,n.jsx)(r.td,{children:"Datamart database"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"cliserver"}),(0,n.jsx)(r.td,{children:"Mandatory"}),(0,n.jsx)(r.td,{children:"NA"}),(0,n.jsx)(r.td,{children:"CLI Server"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"subversion"}),(0,n.jsx)(r.td,{children:"Optional"}),(0,n.jsx)(r.td,{children:"subversion"}),(0,n.jsx)(r.td,{children:"SVN Version Control"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"gerrit"}),(0,n.jsx)(r.td,{children:"Optional"}),(0,n.jsx)(r.td,{children:"gerrit"}),(0,n.jsx)(r.td,{children:"Git/Gerrit Version Control"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"gerrit-database"}),(0,n.jsxs)(r.td,{children:["Mandatory if and only if you install ",(0,n.jsx)(r.code,{children:"gerrit"})]}),(0,n.jsx)(r.td,{children:"NA (added in TeamForge 17.1)"}),(0,n.jsxs)(r.td,{children:["Database for Git/Gerrit. In a distributed setup, add this identifier to the server where you want to run Gerrit database.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," In a distributed setup with multiple Git integration servers, add this identifier to all the servers that run the Git databases. For more information, see ",(0,n.jsxs)(r.a,{href:"../siteconfigtokens",children:["host",":SERVICES"]})," token."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"binary"}),(0,n.jsx)(r.td,{children:"Optional"}),(0,n.jsx)(r.td,{children:"Optional"}),(0,n.jsx)(r.td,{children:"Artifact repository integration"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"binary-database"}),(0,n.jsxs)(r.td,{children:["Mandatory if and only if you install ",(0,n.jsx)(r.code,{children:"binary"})]}),(0,n.jsx)(r.td,{children:"binary"}),(0,n.jsx)(r.td,{children:"Database for artifact repository integration. Binary app (binary) and database (binary-database) have to be installed on the same server."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"reviewboard"}),(0,n.jsx)(r.td,{children:"Optional"}),(0,n.jsx)(r.td,{children:"reviewboard"}),(0,n.jsx)(r.td,{children:"Review Board code review tool"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"reviewboard-database"}),(0,n.jsxs)(r.td,{children:["Mandatory if and only if you install ",(0,n.jsx)(r.code,{children:"reviewboard"})]}),(0,n.jsx)(r.td,{children:"NA (added in TeamForge 17.1)"}),(0,n.jsx)(r.td,{children:"Database for Review Board. In a distributed setup, add this identifier to the server where you want to run Review Board database."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"reviewboard-adapter"}),(0,n.jsxs)(r.td,{children:["Mandatory if and only if you install ",(0,n.jsx)(r.code,{children:"reviewboard"})]}),(0,n.jsx)(r.td,{children:"NA"}),(0,n.jsxs)(r.td,{children:["Adapter for reviewboard to copy ",(0,n.jsx)(r.code,{children:"ctfrbevents.jar"}),". In a distributed setup, ",(0,n.jsx)(r.code,{children:"reviewboard-adapter"})," must always be installed on the TeamForge Application Server."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"baseline"}),(0,n.jsx)(r.td,{children:"Optional"}),(0,n.jsx)(r.td,{children:"NA"}),(0,n.jsx)(r.td,{children:"Baseline service. In a distributed setup, add this identifier to the server where you want to run the Baseline application."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"baseline-database"}),(0,n.jsxs)(r.td,{children:["Mandatory if and only if you install ",(0,n.jsx)(r.code,{children:"baseline"})]}),(0,n.jsx)(r.td,{children:"NA"}),(0,n.jsx)(r.td,{children:"Baseline database service. In a distributed setup, add this identifier to the server where you want to run the Baseline database."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"baseline-post-install"}),(0,n.jsxs)(r.td,{children:["Mandatory if and only if you install ",(0,n.jsx)(r.code,{children:"baseline"})]}),(0,n.jsx)(r.td,{children:"NA"}),(0,n.jsx)(r.td,{children:"Baseline service that is used to synchronize user information between the Baseline and TeamForge databases."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"webr"}),(0,n.jsx)(r.td,{children:"Mandatory. The WEBR application is installed by default when you install or upgrade to TeamForge."}),(0,n.jsx)(r.td,{children:"NA"}),(0,n.jsx)(r.td,{children:"Webhooks-based Event Broker service that is used to push the messages of specific events received from a Publisher to a Subscriber."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"webr-database"}),(0,n.jsx)(r.td,{children:"Mandatory."}),(0,n.jsx)(r.td,{children:"NA"}),(0,n.jsx)(r.td,{children:"Database service for the TeamForge Webhooks-based Event Broker."})]})]})]}),"\n",(0,n.jsxs)(r.p,{children:["These service identifiers are used in the ",(0,n.jsx)(r.code,{children:"site-options.conf"})," file's ",(0,n.jsx)(r.code,{children:"host:SERVICES"})," token. For more information, see ",(0,n.jsxs)(r.a,{href:"../siteconfigtokens",children:["host",":SERVICES"]})," token."]}),"\n",(0,n.jsx)(r.p,{children:"In addition, installing TeamForge with service-specific FQDNs (instead of machine-specific host/domain names) is highly recommended so that you will be able to change the system landscape at a later point in time without having any impact on the URLs (in other words, end users do not have to notice or change anything). For example, you can create FQDNs specifically for services such as Subversion, Git, mail, Codesearch and so on. For more information, see [Service-specific FQDNs][siteconfigtokens]."}),"\n",(0,n.jsx)(r.h2,{id:"singleordistributed",children:"Single Server or Distributed Setup?"}),"\n",(0,n.jsx)(r.p,{children:"If you are installing TeamForge, are you planning to install on a single server or distribute TeamForge services across two or more servers? How are you going to distribute the services?"}),"\n",(0,n.jsx)(r.p,{children:"In the default setup, all services run on the same server as the main TeamForge application. But in practice, only the TeamForge application needs to run on the TeamForge application server. The other services can share that server or run on other servers, in almost any combination."}),"\n",(0,n.jsxs)(r.p,{children:["Assess your own site's particular use patterns and resources to decide how to distribute your services, if at all. For example, if you anticipate heavy use of your site, you will want to consider running the site database, the source control service, or the reporting engine on separate hardware to help balance the load. For examples on how to distribute TeamForge services, see ",(0,n.jsxs)(r.a,{href:"../siteconfigtokens",children:["host",":SERVICES"]})," token."]}),"\n",(0,n.jsxs)(r.p,{children:["In a distributed setup, it is highly recommended to have dedicated servers for TeamForge database and SCM services, as these are the most sought after services in TeamForge. If you are installing ",(0,n.jsx)(r.a,{href:"../BaselinePages/baseline-overview",children:"TeamForge Baseline"}),", it is always recommended to install it on a separate server."]}),"\n",(0,n.jsxs)(r.p,{children:["When you distribute your services on multiple servers, you must do some configuration to handle communication between the services. Verify your basic networking setup. See ",(0,n.jsx)(r.a,{href:"../setupnetworking",children:"Set Up Networking for TeamForge"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"postgresororacle",children:"PostgreSQL or Oracle?"}),"\n",(0,n.jsx)(r.p,{children:"PostgreSQL 13.11 is installed automatically when you install TeamForge 24.0. If you intend to use Oracle, CollabNet recommends that you let the installer run its course, make sure things work normally, and then set up your Oracle database and switch over to it."}),"\n",(0,n.jsx)(r.p,{children:"If you want to use Oracle as your database, consider the following points:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"TeamForge 24.0 supports Oracle server 19c and Oracle client 19c."}),"\n",(0,n.jsx)(r.li,{children:"Oracle express edition is not supported for both client and server."}),"\n",(0,n.jsx)(r.li,{children:"Review Board VAR::identifiers.review_board was tested with PostgreSQL 13.11 only. Review Board with Oracle was not tested."}),"\n",(0,n.jsx)(r.li,{children:"Git integration works only with PostgreSQL. The Git integration uses PostgreSQL even if your TeamForge site uses Oracle."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The efficiency of your database can have an impact on your users' perception of the site's usability. If your site uses a PostgreSQL database (which is the default), you may want to consider tuning it to fit your specific circumstances. The default settings are intended for a small-to-medium site running on a single server. See ",(0,n.jsx)(r.a,{href:"../FAQPages/database-faqs#postgres_settings",children:"What are the right PostgreSQL settings for my site?"})," for recommendations from CollabNet's performance team on optimizing PostgreSQL for different conditions."]}),"\n",(0,n.jsx)(r.h2,{id:"integrations",children:"Integrations"}),"\n",(0,n.jsx)(r.p,{children:"TeamForge supports integration with a wide array of third party applications such as Nexus, Jira and so on. As a customer, you may or may not always want (or have) all of TeamForge's supported integrated applications. It's also quite possible that some of the integrated applications may not always run on all the platforms supported by TeamForge. To accommodate a wider audience, by default, TeamForge install and upgrade instructions include steps to integrate such third party applications with TeamForge."}),"\n",(0,n.jsxs)(r.p,{children:["However, use your discretion to ignore and skip such steps if they are not relevant to your site. See ",(0,n.jsx)(r.a,{href:"../installpages/requirements",children:"TeamForge Installation Requirements"})," to understand what it takes to run TeamForge 24.0 with integrations."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:["Do you have ",(0,n.jsx)(r.code,{children:"UserFilter"})," in your Gerrit Quality Gates/Review Rules?"]}),"\r\nSee: ",(0,n.jsx)(r.a,{href:"/docs/next/userfilterremoval#workflowreadiness",children:"How to verify if you can upgrade to TeamForge\u2014Git integration 20.1 or later?"})]}),"\n","\n",(0,n.jsx)(o,{}),"\n",(0,n.jsx)(r.h2,{id:"gerrit-upgrade-from-version-216-to-32",children:"Gerrit Upgrade from Version 2.16 to 3.2"}),"\n",(0,n.jsx)(r.p,{children:"Skip this section if you are upgrading from TeamForge 20.3 to 21.0. This is valid if and only if you are upgrading from TeamForge 20.2 or earlier to TeamForge 21.0."}),"\n",(0,n.jsxs)(r.p,{children:["TeamForge 20.3 and later support Gerrit 3.2\u2014a major upgrade that skips two Gerrit versions\u2014",(0,n.jsx)(r.a,{href:"https://www.gerritcodereview.com/3.0.html",children:"3.0"})," and ",(0,n.jsx)(r.a,{href:"https://www.gerritcodereview.com/3.1.html",children:"3.1"})," and includes the following note-worthy changes:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"TeamForge 20.3 (and later) Gerrit is not data-compatible with Gerrit 2.16 or earlier (in other words, not data-compatible with TeamForge 20.0 or earlier). Intermediate data migration to Gerrit 2.16 happens when you upgrade from TeamForge 20.0 or earlier to TeamForge 20.3 (or later). This means that data migration during upgrade takes more than usual time to complete."}),"\n",(0,n.jsx)(r.li,{children:"TeamForge 20.3 (and later) Gerrit is not index-compatible with any previous version. All open reviews are reindexed offline when you upgrade from TeamForge 20.0 or earlier to TeamForge 20.3 (or later). This means that data migration during upgrade takes more than usual time to complete."}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://www.gerritcodereview.com/3.2.html#schema-changes",children:"Orphaned draft comments are cleaned up"})," when you upgrade to TeamForge 20.3 (or later). It is recommended to schedule and run the following Git garbage collection (Git GC) command directly on the ",(0,n.jsx)(r.code,{children:"All-Users"})," project before you upgrade to TeamForge 20.3 (or later).","\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"ssh -p 29418 [admin]@[git-server] gerrit gc All-Users --aggressive --show-progress\n"})}),"\n"]}),"\n",(0,n.jsx)(r.li,{children:"Git Protocol v2 is now default"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"ReviewDB"})," and Gerrit GWT UIs are no longer available"]}),"\n",(0,n.jsxs)(r.li,{children:["For more information about Git protocol v2, see the ",(0,n.jsx)(r.a,{href:"https://git-scm.com/docs/protocol-v2/en",children:"documentation for Git Protocol v2"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"ReviewDB"})," removal means that the database backend for changes, accounts, groups and projects (",(0,n.jsx)(r.code,{children:"ReviewDb"}),") is removed and this metadata is now stored in git (\u201cNoteDb\u201d). As ",(0,n.jsx)(r.code,{children:"NoteDb"})," is being used by TeamForge 19.0 and later, this change is seamless for the users."]}),"\n",(0,n.jsx)(r.li,{children:"However, the Gerrit GWT UI has more visible consequences. The GWT-related UI plugin functionality had to be ported\u2014either to the new Gerrit Polymer UI or to the TeamForge UI."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Noteworthy Changes"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"The Gerrit UI has a new look and feel with the new Gerrit Polymer UI replacing the GWT UI."}),"\n",(0,n.jsx)(r.li,{children:"The Gerrit UI no longer has the history protection tab. This functionality is now available via the TeamForge Code Browser UI."}),"\n",(0,n.jsx)(r.li,{children:"Gerrit internal repositories are exposed at the integration level in TeamForge."}),"\n",(0,n.jsx)(r.li,{children:"Microsoft Internet Explorer 11 is no longer supported in Gerrit UI."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"hardware-and-backup",children:"Hardware and Backup"}),"\n",(0,n.jsx)(r.p,{children:"If you aren't the person who first installed your current TeamForge site (or maybe, even if you are), it's essential to catalog the hosts where your services are running and to know what configuration has been applied to them."}),"\n",(0,n.jsx)(r.p,{children:"While upgrading to a latest TeamForge version, you can choose to upgrade on the same hardware or on new hardware. In general, it is good to have a backup plan in place. Same hardware upgrades need no backup. However, it's recommended to take a back up as a measure of caution. See [Back up and Restore TeamForge][backupandrestore] for more information."}),"\n",(0,n.jsx)(r.h2,{id:"applying-os-security-patches",children:"Applying OS Security Patches"}),"\n",(0,n.jsx)(r.p,{children:"Do not upgrade the following libraries while applying regular OS security patches as TeamForge uses these libraries:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Python"}),"\n",(0,n.jsx)(r.li,{children:"Java"}),"\n",(0,n.jsx)(r.li,{children:"Postgres"}),"\n",(0,n.jsx)(r.li,{children:"Apache"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"teamforge-license-framework",children:"TeamForge License Framework"}),"\n",(0,n.jsx)(r.p,{children:"The TeamForge license framework has been revamped in TeamForge 21.1."}),"\n",(0,n.jsx)(r.p,{children:"The new TeamForge license model consists of the following license types:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"TeamForge ALM"}),"\n",(0,n.jsx)(r.li,{children:"TeamForge ALM Essentials"}),"\n",(0,n.jsx)(r.li,{children:"TeamForge SCM"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Here's the list of changes to the new TeamForge license model."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.code,{children:"Version Control"}),", ",(0,n.jsx)(r.code,{children:"Collaboration"}),", and ",(0,n.jsx)(r.code,{children:"Trackers"})," license types are no longer available in TeamForge 21.1 and later"]}),"\n",(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.code,{children:"ALM"})," and ",(0,n.jsx)(r.code,{children:"Baselines"})," license types are bundled together and are being offered as the new ",(0,n.jsx)(r.code,{children:"TeamForge ALM"})," license"]}),"\n",(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.code,{children:"SCM"})," license type has been renamed as ",(0,n.jsx)(r.code,{children:"TeamForge SCM"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"When you migrate from TeamForge 21.0 or earlier to TeamForge 21.1 or later:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Existing ALM licenses are migrated to the new TeamForge ALM license"}),"\n",(0,n.jsx)(r.li,{children:"Existing SCM licenses are migrated to TeamForge SCM"}),"\n",(0,n.jsx)(r.li,{children:"All other types of licenses such as Baselines, Version Control, Tracker, and Collaboration are deleted"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["For more information, see ",(0,n.jsx)(r.a,{href:"../teamforgelicense",children:"TeamForge License"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"other-dos-and-donts",children:"Other Dos and Don'ts"}),"\n",(0,n.jsx)(s.A,{})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},40224:(e,r,t)=>{t.d(r,{A:()=>l});var n=t(63696),i=t(62540),s=t(43023);function a(e){const r={a:"a",code:"code",li:"li",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsx)("div",{class:"",id:"beforeYouBegin",children:(0,i.jsxs)("div",{markdown:"1",children:[(0,i.jsx)("h3",{children:"Dos"}),(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Understand ",(0,i.jsx)(r.a,{href:"../installpages/requirements",children:"TeamForge installation requirements"})," and ",(0,i.jsx)(r.a,{href:"../installpages/plan_your_installation_upgrade",children:"plan your installation or upgrade"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["Get your ",(0,i.jsx)(r.a,{href:"../teamforgelicense",children:"TeamForge license"})," key and keep it handy."]}),"\n",(0,i.jsxs)(r.li,{children:["Verify your basic networking setup before installing or upgrading TeamForge. See ",(0,i.jsx)(r.a,{href:"../setupnetworking",children:"Set Up Networking for TeamForge"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["Look for new or modified ",(0,i.jsx)(r.code,{children:"site-options.conf"})," tokens and update your ",(0,i.jsx)(r.code,{children:"site-options.conf"})," file as required during the upgrade process. See ",(0,i.jsx)(r.a,{href:"../release-notes/siteoptionschangelog",children:"Site Options Change Log"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"Set up a TeamForge Stage Server before you upgrade your Production Server."}),"\n",(0,i.jsx)(r.li,{children:"Stop TeamForge services on all servers in a distributed setup while upgrading to TeamForge 24.0."}),"\n",(0,i.jsx)(r.li,{children:"Uninstall hot fixes and add-ons, if any, before you start the TeamForge 24.0 upgrade procedure."}),"\n",(0,i.jsxs)(r.li,{children:["s a result of changes to the logging framework in Java 9, the ",(0,i.jsx)(r.code,{children:"PrintGCDetails"})," and ",(0,i.jsx)(r.code,{children:"PrintGCTimeStamps"})," logging options are no longer supported. Remove these options from the following tokens while upgrading to TeamForge 18.1 or later. TeamForge provision fails otherwise.","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"JBOSS_JAVA_OPTS"}),"\n",(0,i.jsx)(r.li,{children:"PHOENIX_JAVA_OPTS"}),"\n",(0,i.jsx)(r.li,{children:"INTEGRATION_JAVA_OPTS"}),"\n",(0,i.jsx)(r.li,{children:"ETL_JAVA_OPTS"}),"\n",(0,i.jsx)(r.li,{children:"ELASTICSEARCH_JAVA_OPTS"}),"\n"]}),"\n"]}),"\n"]}),(0,i.jsx)("h3",{children:"Don'ts"}),(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Do not customize your operating system installation. Select only the default packages list."}),"\n",(0,i.jsxs)(r.li,{children:["While upgrading TeamForge, whether in place or on new hardware, always reuse the old ",(0,i.jsx)(r.code,{children:"site-options.conf"})," file and make changes as necessary. ",(0,i.jsx)(r.strong,{children:"Do not"})," try to start with a new ",(0,i.jsx)(r.code,{children:"site-options.conf"})," file. Reusing the old ",(0,i.jsx)(r.code,{children:"site-options.conf"})," avoids many potential problems, particularly around the management of usernames and passwords."]}),"\n",(0,i.jsxs)(r.li,{children:["Do not manually modify TeamForge-managed site option tokens such as the ",(0,i.jsx)(r.code,{children:"AUTO_DATA"})," token. See [AUTO_DATA][siteoptiontokens.html#auto_data] for more information."]}),"\n",(0,i.jsxs)(r.li,{children:["f you are creating symlinks, note that you must create symlinks only to the TeamForge data directory (",(0,i.jsx)(r.code,{children:"/opt/collabnet/teamforge/var"}),"). You should not create symlinks to TeamForge application directories (such as ",(0,i.jsx)(r.code,{children:"/opt/collabnet"}),")."]}),"\n",(0,i.jsxs)(r.li,{children:["o not upgrade the following libraries while applying regular OS security patches as TeamForge uses these libraries:","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Python"}),"\n",(0,i.jsx)(r.li,{children:"Java"}),"\n",(0,i.jsx)(r.li,{children:"Postgres"}),"\n",(0,i.jsx)(r.li,{children:"Apache"}),"\n"]}),"\n"]}),"\n"]}),(0,i.jsx)("h3",{children:"Points to Remember"}),(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Installing or upgrading TeamForge needs root privileges. You must log on as root or use a root shell to install or upgrade TeamForge."}),"\n",(0,i.jsxs)(r.li,{children:["SSL is enabled by default and a self-signed certificate is auto-generated. However, you can use a few ",(0,i.jsx)(r.code,{children:"site-options.conf"})," tokens to adjust this behavior. To generate the SSL certificates, see ",(0,i.jsx)(r.a,{href:"../generatesslcerts",children:"Generate SSL Certificates"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"For the ETL service to run as expected in a distributed TeamForge installation, all servers must have the same time zone."}),"\n",(0,i.jsx)(r.li,{children:"If you have Git integration on a separate server, both TeamForge and Git servers must have their time and date synchronized. Similarly, if Subversion is on a separate server, both TeamForge and Subversion servers must have their time and date synchronized."}),"\n"]}),(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["It's highly recommended that you install the ",(0,i.jsx)(r.a,{href:"../baseline-overview",children:"TeamForge Baseline"})," services on a separate server as the baselining process can consume considerable CPU and database resources. For more information, see ",(0,i.jsx)(r.a,{href:"../installpages/distributed_install_rhel_centos",children:"Install TeamForge in a Distributed Setup"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"No backup is required for same hardware upgrades. However, you can create a backup as a measure of caution. See [Back up and Restore TeamForge][backupandrestore] for more information."}),"\n",(0,i.jsxs)(r.li,{children:["Always use compatible JDBC drivers meant for specific database versions. See ",(0,i.jsx)(r.a,{href:"https://help.pentaho.com/Documentation/5.2/0D0/160/010",children:"JDBC Drivers Reference"})," for more information. Also see: ",(0,i.jsx)(r.a,{href:"../FAQPages/database-faqs#etl_fails_post_upgrade",children:"Why do ETL jobs fail post TeamForge upgrade?"})]}),"\n",(0,i.jsxs)(r.li,{children:["You can run the initial load job any time after the installation of TeamForge. We recommend that you run it before you hand over the site to the users. For more information, see ",(0,i.jsx)(r.a,{href:"../FAQPages/database-faqs.html#etl_initial_load_jobs",children:"ETL Initial Load Jobs"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"SOAP50 APIs and event handlers are no longer supported in TeamForge 16.10 and later. Use the latest TeamForge SOAP/REST APIs."}),"\n",(0,i.jsxs)(r.li,{children:["TeamForge 24.0 installer expects the system locale to be ",(0,i.jsx)(r.code,{children:"LANG=en_US.UTF-8"}),". TeamForge create runtime (",(0,i.jsx)(r.code,{children:"teamforge provision"}),") fails otherwise."]}),"\n",(0,i.jsxs)(r.li,{children:["Installing TeamForge with service-specific FQDNs (instead of machine-specific host/domain names) is highly recommended so that you will be able to change the system landscape at a later point in time without having any impact on the URLs (in other words, end users do not have to notice or change anything). For example, you can create FQDNs specifically for services such as Subversion, Git, mail, Codesearch and so on. For more information, see ",(0,i.jsx)(r.a,{href:"../siteconfigtokens",children:"Service-specific FQDNs"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"All such service-specific FQDNs must belong to a single sub domain and it is recommended to create a new sub domain for TeamForge."}),"\n",(0,i.jsxs)(r.li,{children:["If you are using service-specific FQDNs","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"A wildcard SSL cert is required. SNI SSL cert cannot be used."}),"\n",(0,i.jsx)(r.li,{children:"When SSL is enabled and no custom SSL certificates are provided, a self-signed wildcard cert is generated for the sub domain."}),"\n",(0,i.jsx)(r.li,{children:"When SSL is enabled and a custom SSL certificate is provided, the CN of the certificate is verified to be a wildcard CN."}),"\n"]}),"\n"]}),"\n"]}),(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"The ability to run separate PostgreSQL instances for TeamForge database and datamart on the same server is being deprecated in TeamForge 17.11. If you have TeamForge database and datamart on separate PostgreSQL instances on the same server and if you are upgrading on a new hardware, you must [Create a Single Cluster for Both Database and Datamart][movedbdmintoonepginstance] while upgrading to TeamForge 17.11 or later."}),"\n",(0,i.jsx)(r.li,{children:"While upgrading TeamForge-Git integration servers, it is important that Git master and slave servers are upgraded to the same version of TeamForge-Git integration. On sites with Git Replica Servers, you must upgrade the Git Replica Servers first and then upgrade the master Git servers."}),"\n"]}),(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["From TeamForge 19.3, TeamForge Webhooks-based Event Broker is installed automatically when you install/upgrade TeamForge. In other words, you don't have to run the command ",(0,i.jsx)(r.code,{children:"yum install teamforge-webr"})," separately."]}),"\n",(0,i.jsx)(r.li,{children:"Call back URLs registered with WEBR are lost when you restart WEBR. This means, a TeamForge/Jboss restart must follow immediately after you stop or restart WEBR."}),"\n",(0,i.jsxs)(r.li,{children:["TeamForge supports ",(0,i.jsx)(r.a,{href:"https://mmonit.com/monit/",children:"Monit"})," for monitoring services and recovering failed services. Monit is installed on the TeamForge Application server to monitor the health of services and restart the services when they fail. Monit log file is located at ",(0,i.jsx)(r.code,{children:"/opt/collabnet/teamforge/log/monit/monit.log"}),"."]}),"\n"]})]})})}function o(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function l(e){let{children:r}=e;const[t,s]=(0,n.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Here's a list of dos, don'ts and points to remember when you install or upgrade TeamForge."}),(0,i.jsx)("button",{type:"button",className:"btn btn-primary btn-xs light-blue-bg","data-toggle":"collapse",href:"#beforeYouBegin","aria-expanded":"false","aria-controls":"beforeYouBegin",onClick:()=>s((e=>!e)),children:"Click to Show/Hide"}),t&&(0,i.jsx)(o,{})]})}},43023:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>o});var n=t(63696);const i={},s=n.createContext(i);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);