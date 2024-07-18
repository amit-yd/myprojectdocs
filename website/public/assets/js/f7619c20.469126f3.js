"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1147],{94898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(62540),i=n(43023);const r={description:"To help third party developers write integrated applications, CollabNet provides an SDK.",id:"authenticateintegratedapp",keywords:["teamforge","extend","api","integrated app authentication"],lastUpdatedAt:"May 29, 2019",product:"teamforge",tags:["extend_teamforge","path_based_permission","integration","SOAP","role_based_access_control","authentication"],title:"Authenticate your Integrated Application with TeamForge"},s=void 0,o={id:"authenticateintegratedapp",title:"Authenticate your Integrated Application with TeamForge",description:"To help third party developers write integrated applications, CollabNet provides an SDK.",source:"@site/../docs/authenticateintegratedapp.md",sourceDirName:".",slug:"/authenticateintegratedapp",permalink:"/teamforge/docs/next/authenticateintegratedapp",draft:!1,unlisted:!1,tags:[{inline:!0,label:"extend_teamforge",permalink:"/teamforge/docs/next/tags/extend-teamforge"},{inline:!0,label:"path_based_permission",permalink:"/teamforge/docs/next/tags/path-based-permission"},{inline:!0,label:"integration",permalink:"/teamforge/docs/next/tags/integration"},{inline:!0,label:"SOAP",permalink:"/teamforge/docs/next/tags/soap"},{inline:!0,label:"role_based_access_control",permalink:"/teamforge/docs/next/tags/role-based-access-control"},{inline:!0,label:"authentication",permalink:"/teamforge/docs/next/tags/authentication"}],version:"current",lastUpdatedAt:1721042912e3,frontMatter:{description:"To help third party developers write integrated applications, CollabNet provides an SDK.",id:"authenticateintegratedapp",keywords:["teamforge","extend","api","integrated app authentication"],lastUpdatedAt:"May 29, 2019",product:"teamforge",tags:["extend_teamforge","path_based_permission","integration","SOAP","role_based_access_control","authentication"],title:"Authenticate your Integrated Application with TeamForge"}},p={},l=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"At the heart of the SDK is the IntegratedAppSupport helper class. You use IntegratedAppSupport to authenticate integrated application requests with TeamForge, and provide context information for subsequent processing of forms and links within the application."}),"\n",(0,a.jsxs)(t.p,{children:["You can download the SDK from ",(0,a.jsx)(t.a,{href:"https://forge.collab.net/apidoc/",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["You must call the ",(0,a.jsx)(t.a,{href:"./integratedappref#integratedappsupport",children:"IntegratedAppSupport"})," class for every request made by the integrated application. This class takes HttpServletRequest and HttpServletResponse for each request and determines whether the user is already authenticated. It also provides project- and user-related information that can be used throughout the request."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"It is a good idea to store this as a ThreadLocal so that it can be used from anywhere in the application."})}),"\n",(0,a.jsx)(t.p,{children:"Here's what you need to do to call IntegratedAppSupport from the application:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"To create an object, pass in these three parameters:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"TeamForge Base URL -- this is where TeamForge is installed"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Integrated application URL -- this is where the application is installed"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Application Name -- the name of the application as defined in the integrated application's descriptor"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Typically these parameters are stored as web.xml initialization parameters so that they are passed to IntegratedAppSupport's constructor."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"When you have a validated IntegratedAppSupport object, store it in a ThreadLocal object so that it can be used in other places. For example, when constructing the blog URLs, we get IntegratedAppSupport from ThreadLocal and retrieve the IntegratedAppId from there. Once the object is created, another method called processRequest is called on it. This takes an HttpServletRequest and HttpServletResponse object that the servlet or a filter gets."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"For each request that enters your system and needs to be validated, create an IntegratedAppRequest object."}),"\n",(0,a.jsx)(t.p,{children:"Subsequently, you also need to call the processRequest method to set the required parameters internally."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Where you construct the IntegratedAppSupport and call ProcessRequest subsequently depends on the architecture of your application. We've provided two cases -- for servlet filters and httpservlets."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"If your application has servlet filters, use them as shown in the example of respective integrated application."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"If your application does not use servlet filters, but directly calls an HttpServlet as the point of entry, place the call to IntegratedAppRequest where the application enters the HttpServlet code."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"ProcessRequest does the following tasks:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"If the URL is coming in for the first time from the TeamForge, it will have the singlesignon token. The method validates the token and stores a cookie which identifies the soap session for the user as well as the project for which this request is being made. This will also be the case for a Go URL coming in from TeamForge."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"If it is a subsequent request (from a form submission or a click from a previous page), then the cookie information is picked up and used in IntegratedAppSupport. For this, the integrated application expects that the linkid (the id linking the integrated application and the project, obtained through IntegratedAppSupport.getIntegratedAppId()) is provided either as a request attribute or as a request parameter or in the request path -- it can be any one of these:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"http://my.integrated.application/reach/linkid/prplxxxx/me\r\nhttp://my.integrated.application/reach/me?linkId=prplxxxx\n"})}),"\n",(0,a.jsx)(t.p,{children:"a request parameter obtained through any other means and set as a Request Attribute."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["It is advisable to set it so that all originating URLs (forms and other links to the application) have the ",(0,a.jsx)(t.code,{children:"/linkid/prplxxxx"})," in their request URL. This helps subsequent URLs to be validated correctly. You can retrieve the linkid using IntegratedAppSupport.getIntegratedAppId."]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},43023:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(63696);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);