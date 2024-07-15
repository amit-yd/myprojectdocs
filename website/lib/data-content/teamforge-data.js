import AppManIconDarkPNG from "@site/static/brand/products/App_Management-RGB/App Management/PNG/Large/app-mgmt-icon-no-echo-fc-dark-RGB-lg.png";

export const HomePageData = {
  id: 7,
  name: "TeamForge",
  title: "Digital.ai TeamForge",
  description:
    "Ensure governance, compliance, and code security standards are maintained in development.",
  iconImage: AppManIconDarkPNG,
  authorAvatar: "/manu.png",
  link: "./teamforge",
  baseColor: "alm",
  gradientColor: "agile",
  description:
    "Digital.ai TeamForge is a secure management platform for app development to reduce IT support costs, drive standards and IP reuse.",

  isBusinessSegment: false,
  subSegments: [],
  releaseNotes: [
    {
      title: "TeamForge 23.1",
      link: "/docs/release-notes/teamforge-new",
    },
    {
      title: "TeamForge 24.0",
      link: "/docs/next/release-notes/teamforge-new",
    },
  ],  
  getStarted: [
    {
      title: "Get started",
      description:
        "The process of joining a TeamForge site varies according to your site's setup.",
      link: "/docs/getstarted-joinasite", 
    },
    {
      title: "Install / Upgrade",
      description:
        "Install TeamForge on a single server or on a distributed high availability setup. A TeamForge site consists of a core TeamForge application and several tightly integrated services that support it. In addition, you can integrate TeamForge with other third party applications such as Nexus, Jenkins, Jira and so on. Some of the TeamForge services are mandatory and some are optional. You can install the services, all in one single server, or distribute them across two or more servers.",
      link: "/docs/installpages/allinoneserver_rhel_centos",
    },
    {
      title: "Source Code",
      description:
        "You can install Git on the TeamForge Application Server or on a separate server dedicated for SCM.",
      link: "/docs/internalcodebrowser",
    },
    {
      title: "Git Integration",
      description:
        "TeamForge supports LDAP, SAML, and OAuth. Learn more about TeamForge's authentication options here.",
      link: "/docs/gitoverview",
    },    
  ],
};
