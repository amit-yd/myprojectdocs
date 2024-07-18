"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9662],{40528:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var n=i(62540),s=i(43023);const r={description:"SAML is an XML-based open standard developed by OASIS Security Services Technical Committee. It defines a framework to perform web browser SSO using secure tokens for exchanging security information between web applications.",id:"saml",keywords:["saml","external authentication","identity management","single sign on","SSO"],lastUpdatedAt:"May 23, 2019",product:"teamforge",tags:["sso","authentication","site_admin_tasks","saml"],title:"Use SAML for TeamForge User Authentication"},o=void 0,a={id:"saml",title:"Use SAML for TeamForge User Authentication",description:"SAML is an XML-based open standard developed by OASIS Security Services Technical Committee. It defines a framework to perform web browser SSO using secure tokens for exchanging security information between web applications.",source:"@site/../docs/saml.md",sourceDirName:".",slug:"/saml",permalink:"/docs/next/saml",draft:!1,unlisted:!1,tags:[{inline:!0,label:"sso",permalink:"/docs/next/tags/sso"},{inline:!0,label:"authentication",permalink:"/docs/next/tags/authentication"},{inline:!0,label:"site_admin_tasks",permalink:"/docs/next/tags/site-admin-tasks"},{inline:!0,label:"saml",permalink:"/docs/next/tags/saml"}],version:"current",lastUpdatedAt:1721042912e3,frontMatter:{description:"SAML is an XML-based open standard developed by OASIS Security Services Technical Committee. It defines a framework to perform web browser SSO using secure tokens for exchanging security information between web applications.",id:"saml",keywords:["saml","external authentication","identity management","single sign on","SSO"],lastUpdatedAt:"May 23, 2019",product:"teamforge",tags:["sso","authentication","site_admin_tasks","saml"],title:"Use SAML for TeamForge User Authentication"},sidebar:"docs",previous:{title:"OAuth 2.0",permalink:"/docs/next/teamforgeoauth"},next:{title:"LDAP",permalink:"/docs/next/ldap-authentication"}},d={},h=[{value:"SAML Terms and Their Purpose",id:"saml-terms-and-their-purpose",level:2},{value:"How SAML-based SSO Works in TeamForge?",id:"how-saml-based-sso-works-in-teamforge",level:2},{value:"Setting up TeamForge in a SAML-compliant Third-party IdP Environment",id:"setting-up-teamforge-in-a-saml-compliant-third-party-idp-environment",level:2},{value:"Intermediate Login Page for Multiple User Accounts",id:"intermediate-login-page-for-multiple-user-accounts",level:2},{value:"Direct Login to TeamForge",id:"directlogin",level:2},{value:"Authenticate SAML Users to Access Non-web Applications",id:"accesscliapps",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["For more information about SAML, its concepts and components, see ",(0,n.jsx)(t.a,{href:"https://www.oasis-open.org/",children:"https://www.oasis-open.org/"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"saml-terms-and-their-purpose",children:"SAML Terms and Their Purpose"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"End User / Browser:"})," The end user is generally a human or a browser (agent) who accesses the Service Provider to get access to a service or a protected resource. The browser carries out all the redirections from the SP to the IdP and vice versa."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Service Provider (SP):"})," The entity that provides its protected resource when an end user tries to access this resource. To accomplish the SAML based SSO authentication, the Service Provider must have the Identity Provider's metadata."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"It is not necessary that the authentication flow should start from a Service Provider. Even an IdP can initiate the authentication process."})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Identity Provider (IdP):"})," Defines the entity that provides the user identities, including the ability to authenticate a user to get access to a protected resource / application from a Service Provider. To accomplish the SAML based SSO authentication, the IdP must have the Service Provider's metadata."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"SAML Request:"})," This is the authentication request generated by the Service Provider to request an authentication from the Identity Provider for verifying the user's identity."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"SAML Response:"})," The SAML Response contains the acutal assertion of the authenticated user and is generated by the Identity Provider. The SAML Response also consists of additional information such as user profile information, group or role information and so on based on what the Service Provider can support."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Service Provider-initiated Authentication Flow:"})," This describes the SAML authentication flow initiated by the Service Provider. The authentication process from the SP is triggered when the user tries to access a resouce or log on to the Service Provider application. A typical example is that a browser trying to access a protected resource from the Service Provider."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Identity Provider-initiated Authentication Flow:"})," This describes the SAML authentication flow initiated by the Identity Provider. Unlike the SP-initiated authentication flow in which the authentication is triggered by a redirection from the Service Provider, here the IdP initiates the SAML Response that is redirected to the SP to assert the user's identity."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-saml-based-sso-works-in-teamforge",children:"How SAML-based SSO Works in TeamForge?"}),"\n",(0,n.jsx)(t.p,{children:"In addition to OAuth 2.0 (with Open ID Connect), TeamForge supports SAML (Security Assertion Markup Language) authentication and authorization protocol."}),"\n",(0,n.jsx)(t.p,{children:'As in a typical SSO-enabled environment, Single Sign-on in TeamForge works in such a way that the Identity Provider "asserts" the identity of the user and the Service Provider consumes the "assertion" and passes the identity information to the application. This is done by exchanging digitally signed XML documents.'}),"\n",(0,n.jsx)(t.p,{children:"TeamForge, as a SAML compliant Service Provider, can be integrated with any SAML compliant Identity Provider. TeamForge Administrators should make sure that the Identity Provider is SAML 2.0 compliant and must keep the IdP metadata handy before configuring the IdP details in TeamForge."}),"\n",(0,n.jsx)(t.p,{children:"SAML metadata is an XML file that contains configuration information to be shared between the Service Provider and the Identity Provider."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"Service Provider metadata XML"})," file contains the SP certificate, the entity ID, ACS parameters and so on. To get the TeamForge (Service Provider) metadata, check at: https://<<hostname>>/oauth/metadata.jsp"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"Identity Provider metadata XML"})," file contains the IdP certificate, the entity ID, redirect URL, logout URL and so on."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"TeamForge Administrator must keep the IdP metadata handy before integrating TeamForge with a SAML IdP. The following illustration shows the high-level authentication flow of SAML integration in TeamForge. This is typically a Service Provider-initiated SSO workflow."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(47211).A+"",width:"1617",height:"1263"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Let's see how it works"}),":"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"The end user tries to access a resource URL within the application provided by the Resource Server (Service Provider) via the Client application / Web Browser (A)."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"The Resource Server application generates the authentication request for user and sends it to Authorization Server (Identity Provider). The Service Provider uses the HTTP POST binding component to send the request to the IdP (B)."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"If the authentication is successful, the user is redirected to the Authorization Server's (IdP) login page, through which the user logs in (C)."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"The IdP generates the security token based on SAML assertions for the user and sends the response with the SAML token to the Resource Server application (D)."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"The user now gets a session in the Resource Server and can access the resources in it."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"setting-up-teamforge-in-a-saml-compliant-third-party-idp-environment",children:"Setting up TeamForge in a SAML-compliant Third-party IdP Environment"}),"\n",(0,n.jsx)(t.p,{children:"For TeamForge to support SAML based SSO from a SAML-compliant third-party IdP, it is required to set up TeamForge in the IdP environment. This means that it is necessary to configure the SAML IdP with the details of TeamForge, who in this case is the SAML Service Provider."}),"\n",(0,n.jsx)(t.p,{children:"Configuring a SAML IdP is beyond the scope of TeamForge Administrators, as you can use any third-party IdP based on the business requirements."}),"\n",(0,n.jsx)(t.p,{children:"Once a SAML IdP has been set up, the SAML IdP administrator can set up TeamForge as a Service Provider with the SAML IdP and keep both the IdP and SP metadata handy for creating the TeamForge-SAML IdP integration in TeamForge."}),"\n",(0,n.jsx)(t.p,{children:"For setting up SAML IdP integration in TeamForge, enable Federated Login in TeamForge."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Log on to TeamForge as a Site Administrator."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Select ",(0,n.jsx)(t.strong,{children:"My Workspace > Admin"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Select ",(0,n.jsx)(t.strong,{children:"Projects > Identity"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Select the ",(0,n.jsx)(t.em,{children:"Federation"})," tab."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Select the ",(0,n.jsx)(t.strong,{children:"Use Federated Login"})," check box and select ",(0,n.jsx)(t.em,{children:"SAML"})," as the IdP from the drop-down list."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.strong,{children:"Save"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(54018).A+"",width:"1095",height:"291"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Select the ",(0,n.jsx)(t.em,{children:"SAML"})," tab. This page is used to capture the security configurations of TeamForge and the SAML IdP. The IdP details that you provide in this page is obtained from the metadata XML of the third-party IdP."]}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsx)(t.p,{children:"The Service Provider ACS (Assertion Consumer Service) Logout related properties are generated by the system, hence they should not be changed unless required."})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(57022).A+"",width:"595",height:"267"})}),"\n",(0,n.jsx)(t.p,{children:"This table provides the parameters and their description used in the SAML configuration page."}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsx)(t.p,{children:"Configuration details are mandatory for fields 1 through 8 for a basic SAML integration."})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IDP Entity ID"}),(0,n.jsx)(t.td,{children:"Defines the unique identifier of the Identity Provider. It must be a URI."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IDP Single Sign-On URL"}),(0,n.jsx)(t.td,{children:"Defines the URL that defines the SSO endpoint of the IdP. It is the target URL of the IdP where the SP sends its authentication request message."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IDP X.509 Certificate"}),(0,n.jsx)(t.td,{children:"Defines the digital certificate that verifies the public key of the IdP."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IDP Single Sign-On Logout URL"}),(0,n.jsx)(t.td,{children:"Identity Provider\u2019s Single Sign-On Logout URL. If the IdP does not support logout, leave this blank."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IDP Single Sign-On Logout Response URL"}),(0,n.jsx)(t.td,{children:"Defines the Single Sign-On Logout (SLO) endpoint of the IdP that specifies the URL location of the IdP where the SP will send the SLO response. If this is left blank, the same URL as the logout service URL will be used. This property can be used if the IdP uses a separate URL for sending a logout request and response."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Service Provider Entity ID"}),(0,n.jsx)(t.td,{children:"Defines the unique identifier of the Service Provider. It must be a URI."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Assertion Consumer Service URL"}),(0,n.jsx)(t.td,{children:"Defines the URL of the Service Provider's Assertion Consumer Service, where the assertion from the IdP will be sent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Service Provider Logout URL"}),(0,n.jsx)(t.td,{children:"Defines the URL of the Service Provider where the Logout Response message will be returned."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Assertion Consumer Service Binding"}),(0,n.jsxs)(t.td,{children:['Defines which SAML protocol binding to be used when returning the Response message. TeamForge supports the "urn:oasis:names:tc:SAML:2.0:bindings',":HTTP-POST",'" binding only.']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Service Provider Logout Binding"}),(0,n.jsxs)(t.td,{children:['Defines which SAML protocol binding to be used when returning the logout response or sending the logout request message. TeamForge supports the "urn:oasis:names:tc:SAML:2.0:bindings',":HTTP-Redirect",'" binding only.']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Name ID Format"}),(0,n.jsxs)(t.td,{children:["Defines the constraints on the name identifier to be used to represent the requested subject. It is a mandatory attribute sent by the IdP in its SAML response to make the federation. TeamForge supports the following three Name ID formats:",(0,n.jsx)("br",{})," - urn:oasis:names:tc:SAML:1.1:nameid-format",":unspecified"," [default],",(0,n.jsx)("br",{})," - urn:oasis:names:tc:SAML:1.1:nameid-format",":emailAddress",",",(0,n.jsx)("br",{})," - urn:oasis:names:tc:SAML:2.0:nameid-format",":transient"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Service Provider X.509 Certificate"}),(0,n.jsx)(t.td,{children:"Defines the digital certificate that verifies the public key of the SP."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Service Provider Private Key"}),(0,n.jsx)(t.td,{children:"Defines the private key of the Service Provider. Required Format: PKCS#8 BEGIN PRIVATE KEY. If you have PKCS#1 BEGIN RSA PRIVATE KEY, convert it using \u201copenssl pkcs8 -topk8 -inform pem -nocrypt -in sp.rsa_key -outform pem -out sp.pem\u201d."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IDP Single Sign-On Service Binding"}),(0,n.jsxs)(t.td,{children:['Defines the SAML protocol binding to be used when returning the response message. TeamForge supports the "urn:oasis:names:tc:SAML:2.0:bindings',":HTTP-Redirect",'" binding only.']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IDP Single Sign-On Logout Service Binding"}),(0,n.jsxs)(t.td,{children:['Defines the SAML protocol binding to be used when returning the response message. TeamForge supports the "urn:oasis:names:tc:SAML:2.0:bindings',":HTTP-Redirect",'" binding only.']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IDP Certificate Fingerprint"}),(0,n.jsx)(t.td,{children:"You can use the fingerprint instead of using the entire X.509 certificate."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IDP Certificate Fingerprint Algorithm"}),(0,n.jsx)(t.td,{children:"If an IdP fingerprint is provided, then the fingerprint algorithm is required to let the toolkit know which algorithm is used. Possible values: sha1 (default value), sha256, sha384."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Use Strict Mode"}),(0,n.jsx)(t.td,{children:"Values are True and False. TeamForge rejects unsigned or unencrypted messages if the strict mode is set to True."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Debug"}),(0,n.jsx)(t.td,{children:"This is used to set the log level to debug. Values are True and False."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Logout Name ID Encrypted"}),(0,n.jsx)(t.td,{children:"This indicates that the Name ID of the logout response sent by the Service Provider will be encrypted. Values are True and False."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Sign Authentication Request"}),(0,n.jsx)(t.td,{children:"This indicates whether the AuthnRequest message sent by the Service Provider is signed. The Metadata of the SP provides this information. Values are True and False."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Sign Logout Request"}),(0,n.jsx)(t.td,{children:"This indicates whether the logout request messages sent by the Service Provider are signed. Values are True and False."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Sign Logout Response"}),(0,n.jsx)(t.td,{children:"This indicates whether the logout response sent by this Service Provider is signed. Values are True and False."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Sign Messages"}),(0,n.jsx)(t.td,{children:"This indicates whether the messages are to be signed or not. Values are True and False."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Sign Assertions"}),(0,n.jsx)(t.td,{children:"This indicates whether the response, logout request, and logout response elements received by the SP need to be signed or not. Values are True and False."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Encrypt Assertions"}),(0,n.jsx)(t.td,{children:"This indicates whether the assertions received by the Service Provider need to be encrypted or not. Values are True and False."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Need Name ID"}),(0,n.jsx)(t.td,{children:"This indicates whether the Name ID is required or not in the SAML response. Values are True and False."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Name ID Encrypted"}),(0,n.jsx)(t.td,{children:"This indicates whether the Name ID received by the Service Provider needs to be encrypted or not. Values are True and False."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Sign Metadata"}),(0,n.jsx)(t.td,{children:"This indicates whether the SP Metadata needs to be signed or not. Values are True (sign using SP private key) and False (or null to not sign)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Authentication Context"}),(0,n.jsxs)(t.td,{children:["Defines the authentication context of the Service Provider. If no value is provided, then no authentication context will be sent in the AuthnRequest. Set the value as \u201curn:oasis:names:tc:SAML:2.0:ac:classes: urn:oasis: names:tc:SAML:2.0:ac:classes",":Password","\u201d"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Authentication Context Comparison"}),(0,n.jsx)(t.td,{children:"This allows the authentication context comparison parameter to be set. Default value is exact."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Validate XML"}),(0,n.jsxs)(t.td,{children:["This indicates whether the Service Provider will validate all received XMLs. Note: To validate the XML, the Use Strict Mode to set to \u2018strict\u2019 and ",(0,n.jsx)(t.code,{children:"wantXMLValidation"})," to be set to True."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Signature Algorithm"}),(0,n.jsxs)(t.td,{children:["This indicates the algorithm that the toolkit will use during the signing process. Some of the options:",(0,n.jsx)("br",{})," - ",(0,n.jsx)(t.a,{href:"http://www.w3.org/2000/09/xmldsig#dsa-sha1",children:"http://www.w3.org/2000/09/xmldsig#dsa-sha1"}),(0,n.jsx)("br",{})," - ",(0,n.jsx)(t.a,{href:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256",children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"}),(0,n.jsx)("br",{})," - ",(0,n.jsx)(t.a,{href:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha384",children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha384"}),(0,n.jsx)("br",{})," - ",(0,n.jsx)(t.a,{href:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha512",children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha512"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Reject Unsolicited Response To"}),(0,n.jsx)(t.td,{children:"This indicates where to send the rejected unsolicited response."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Compress Request"}),(0,n.jsx)(t.td,{children:"This indicates whether the request needs to be compressed or not. Values are True and False."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Compress Response"}),(0,n.jsx)(t.td,{children:"This indicates whether the response needs to be compressed or not. Values are True and False."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Technical Contact Name"}),(0,n.jsx)(t.td,{children:"This indicates the contact name of the Technical person at the Service Provider\u2019s end."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Technical Contact Email"}),(0,n.jsx)(t.td,{children:"This indicates the email id of the Technical person at the Service Provider\u2019s end."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Organization Name"}),(0,n.jsx)(t.td,{children:"This indicates the organization name at the Service Provider\u2019s end."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Organization Display Name"}),(0,n.jsx)(t.td,{children:"This indicates the organization\u2019s display name at the Service Provider\u2019s end."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Organization URL"}),(0,n.jsx)(t.td,{children:"This indicates the URL of the organization at the Service Provider\u2019s end."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Username Attribute"}),(0,n.jsx)(t.td,{children:"This indicates the username attribute of the IdP."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Email Attribute"}),(0,n.jsx)(t.td,{children:"This indicates the email attribute of the IdP."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"User Display Name Attribute"}),(0,n.jsx)(t.td,{children:"This indicates the display name attribute of the user."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Map Email to Username"}),(0,n.jsx)(t.td,{children:"This indicates whether the username needs to be mapped to the user\u2019s email id or not. Values are True and False."})]})]})]}),"\n",(0,n.jsxs)(t.ol,{start:"8",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.strong,{children:"Test Connection"})," to verify whether the integration works properly with the IdP configured in this page."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.strong,{children:"Get SP Metadata"})," to obtain the Service Provider's metadata."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.strong,{children:"Save"})," to save the configuration."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"intermediate-login-page-for-multiple-user-accounts",children:"Intermediate Login Page for Multiple User Accounts"}),"\n",(0,n.jsx)(t.p,{children:"In a SAML enabled and SAML+LDAP enabled environment, if you have multiple user accounts for the same email address, you will be redirected to an intermediate login page before the third party IdP for authentication. In this intermediate login page, you can see the list of accounts associated with your email address. Select one from this list and set it as default account so that you would log on with this account every time you are authenticated via the third party IdP. After you have set a default account, you would not see the intermediate login page the next time you are authenticated via SAML."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(59680).A+"",width:"1352",height:"660"})}),"\n",(0,n.jsxs)(t.p,{children:["If you want to change or reset the default user account at any point in time, you can do so from the ",(0,n.jsx)(t.strong,{children:"My Settings > Edit User Information"})," page."]}),"\n",(0,n.jsx)(t.h2,{id:"directlogin",children:"Direct Login to TeamForge"}),"\n",(0,n.jsx)(t.p,{children:"In a SAML-enabled TeamForge environment, TeamForge administrators are provided with a direct login URL which can be used to log on to TeamForge without any intermediaries such as an IdP whenever things go wrong (due to some changes in SAML IdP endpoints) and if TeamForge is not accessible."}),"\n",(0,n.jsx)(t.p,{children:"You can also use this direct login to fix any issues with SAML configuration. The direct login URL for local TeamForge administrators can be found in the TeamForge SAML configuration UI. TeamForge Administrators are advised to bookmark or keep this URL handy."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Other users can use the \u2018Forgot Password\u2019 link at the login page to set the local TeamForge password that should authenticate them to carry out any other user activities based on their RBAC permissions."})}),"\n",(0,n.jsx)(t.h2,{id:"accesscliapps",children:"Authenticate SAML Users to Access Non-web Applications"}),"\n",(0,n.jsx)(t.p,{children:"Earlier, users authenticated via SAML were able to access only the TeamForge web applications. From TeamForge 18.3, users in a SAML-enabled environment can access the non-web applications such as Git, SVN, and other CLI applications using their TeamForge credentials."}),"\n",(0,n.jsx)(t.p,{children:"SAML users must have a TeamForge account to access the non-web applications."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"To create a new TeamForge account in a SAML-enabled environment:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.strong,{children:"Login"})," on your TeamForge site. You are redirected to the login page of third-party IdP."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Enter the SAML (third-party IdP) user credentials."}),"\n",(0,n.jsxs)(t.p,{children:["On successful login, you are redirected to the ",(0,n.jsx)(t.strong,{children:"Create TeamForge Account"})," page."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(50894).A+"",width:"1089",height:"327"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Enter the password in the ",(0,n.jsx)(t.strong,{children:"Password"})," and ",(0,n.jsx)(t.strong,{children:"Confirm Password"})," fields."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"User Name"})," and ",(0,n.jsx)(t.strong,{children:"Email Address"})," fields are read-only fields. All email communications to SAML users are sent via the email id provided in the ",(0,n.jsx)(t.strong,{children:"Email Address"})," field."]})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Enter the values for other required fields."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.strong,{children:"Create"}),". Now you can use this password to log on to non-web applications."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you have created the account without providing the password on the ",(0,n.jsx)(t.strong,{children:"Create TeamForge Account"})," page, you would receive an email with instructions to set the password."]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"To enable the existing TeamForge users to reset their password in a SAML-enabled environment:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click the ",(0,n.jsx)(t.strong,{children:"Forgot Your Password"})," link on the TeamForge Home page. You would receive an email with instructions to reset your password."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Reset the password based on the instructions in your reset password email."}),"\n",(0,n.jsx)(t.p,{children:"After resetting your TeamForge password, you can access the non-web applications using this password."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["To enforce password security policy, site administrators can set the site-options.conf token ",(0,n.jsx)(t.a,{href:"./siteoptiontokens#REQUIRE_PASSWORD_SECURITY",children:(0,n.jsx)(t.strong,{children:"REQUIRED_PASSWORD_SECURITY"})})," to ",(0,n.jsx)(t.em,{children:"true"}),"."]})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},47211:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/17-8-SAML-Process-Flow-52627169233d20bc87f7f7f6646fc3c3.png"},57022:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/17-8-SAML-tab-d5c0ffaafa95f35da138948552138d80.png"},54018:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/17-8-federation-tab-f861ff0a5faff9163033b06c529ec898.png"},50894:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/create-teamforge-acct-2f683e1d293850de242569262a2a048a.png"},59680:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/defaultuser-intermediatelogin-f3209f79bdb7c7d3cb77564dcd22fb36.png"},43023:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(63696);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);