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
      title: "TeamForge 23.0",
      link: "/docs/23.0/release-notes/teamforge-new",
    },
    {
      title: "TeamForge 22.1",
      link: "/docs/22.1/release-notes/teamforge-new",
    },
    {
      title: "TeamForge 22.0",
      link: "/docs/22.0/release-notes/teamforge-new",
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
      link: "/docs/category/install",
    },
    {
      title: "SCM",
      description:
        "You can install Git on the TeamForge Application Server or on a separate server dedicated for SCM.",
      link: "/docs/category/source-code",
    },
    {
      title: "Trackers",
      description:
        "Learn more about issue tracking in TeamForge. A TeamForge tracker is a collection of records that follow the development of a unit of work from conception through to completion. You can create a tracker to manage almost any kind of work that your project calls for.",
      link: "/docs/category/trackers",
    },
    {
      title: "Planning folders",
      description:
        "When you've thought through your plan, express it in one or more planning folders.",
      link: "/docs/category/planning-folders",
    },
    {
      title: "Boards",
      description:
        "Learn more about how to set up and work with the Planning, Kanban, and Task boards.",
      link: "/docs/category/boards",
    },
    {
      title: "Authentication",
      description:
        "TeamForge supports LDAP, SAML, and OAuth. Learn more about TeamForge's authentication options here.",
      link: "/docs/identityinfo",
    },
    {
      title: "Reports",
      description:
        "TeamForge supports LDAP, SAML and OAuth. Learn more about TeamForge's authentication options here.",
      link: "/docs/category/reports",
    },    
  ],
};
