"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8522],{60475:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(62540),t=n(43023);const a={description:"A Baseline or a Project Baseline, once created can be reviewed. During the review cycle, the Baseline or the Project Baseline undergoes various status transitions as defined by the Baseline Administrator.",id:"baseline-review-approval-workflow",keywords:["review project baseline","approval for project baseline"],lastUpdatedAt:"Apr 12, 2019",product:"teamforge",tags:["baseline","ctf_18.2","ctf_18.3"],title:"Review Baselines"},r=void 0,o={id:"BaselinePages/baseline-review-approval-workflow",title:"Review Baselines",description:"A Baseline or a Project Baseline, once created can be reviewed. During the review cycle, the Baseline or the Project Baseline undergoes various status transitions as defined by the Baseline Administrator.",source:"@site/versioned_docs/version-23.1/BaselinePages/baseline-review-approval-workflow.md",sourceDirName:"BaselinePages",slug:"/BaselinePages/baseline-review-approval-workflow",permalink:"/docs/BaselinePages/baseline-review-approval-workflow",draft:!1,unlisted:!1,tags:[{inline:!0,label:"baseline",permalink:"/docs/tags/baseline"},{inline:!0,label:"ctf_18.2",permalink:"/docs/tags/ctf-18-2"},{inline:!0,label:"ctf_18.3",permalink:"/docs/tags/ctf-18-3"}],version:"23.1",lastUpdatedAt:1721042912e3,frontMatter:{description:"A Baseline or a Project Baseline, once created can be reviewed. During the review cycle, the Baseline or the Project Baseline undergoes various status transitions as defined by the Baseline Administrator.",id:"baseline-review-approval-workflow",keywords:["review project baseline","approval for project baseline"],lastUpdatedAt:"Apr 12, 2019",product:"teamforge",tags:["baseline","ctf_18.2","ctf_18.3"],title:"Review Baselines"}},l={},c=[{value:"Baseline Review Process",id:"baseline-review-process",level:2},{value:"Review a Baseline or a Project Baseline",id:"review-a-baseline-or-a-project-baseline",level:2},{value:"Add Comments",id:"addcomments",level:2},{value:"View Baseline",id:"viewbaseline",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{class:"prerequisite-callout",children:(0,i.jsxs)("p",{children:["Prerequisite: You must have ",(0,i.jsx)("strong",{children:"Baseline Review"})," permission to review a Baseline or a Project Baseline."]})}),"\n",(0,i.jsx)(s.h2,{id:"baseline-review-process",children:"Baseline Review Process"}),"\n",(0,i.jsxs)(s.p,{children:["You can take an action on a ",(0,i.jsx)("a",{href:"#","data-toggle":"tooltip","data-original-title":"VAR::glossary.baseline",children:"Baseline"})," or a ",(0,i.jsx)("a",{href:"#","data-toggle":"tooltip","data-original-title":"VAR::glossary.project_baseline",children:"Project Baseline"})," that is submitted for review. The available actions are based on the workflow status transition associated with the user role. For more information on the workflow status transitions, see ",(0,i.jsx)(s.a,{href:"../BaselinePages/baseline-settings#addstatustransitionworkflow",children:"Add Status Transition Workflow"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["You can edit a Baseline or a Project Baseline (only the baseline fields; not the filter criteria) as long as its custom status is having the status type ",(0,i.jsx)(s.code,{children:"Open"}),". For more information on how to configure custom statuses, see ",(0,i.jsx)(s.a,{href:"../BaselinePages/baseline-settings#configurecustomstatuses",children:"Configure Custom Statuses"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["You cannot edit a Baseline or a Project Baseline in a terminal status, that is, custom statuses that are assigned to the status type ",(0,i.jsx)(s.code,{children:"Approved"})," or ",(0,i.jsx)(s.code,{children:"Rejected"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"You cannot re-submit a rejected Baseline or a Project Baseline. If a Baseline or Project Baseline is rejected, you can create a new Baseline or a Project Baseline and initiate the review process again."}),"\n",(0,i.jsx)(s.h2,{id:"review-a-baseline-or-a-project-baseline",children:"Review a Baseline or a Project Baseline"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Log on to TeamForge and select a project from the ",(0,i.jsx)(s.strong,{children:"My Workspace"})," menu."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Click ",(0,i.jsx)(s.strong,{children:"Baselines"})," from ",(0,i.jsx)(s.strong,{children:"Project Home"})," menu."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.strong,{children:"Pending Review"})," on the left navigation menu."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"List of review pending baselines",src:n(96616).A+"",width:"1347",height:"508"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Click a Baseline or a Project Baseline on the ",(0,i.jsx)(s.strong,{children:"Pending Review Baselines"})," page."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(33671).A+"",width:"1321",height:"1063"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Click the ",(0,i.jsx)(s.strong,{children:"Submit"})," drop-down button. This lists the custom statuses associated with the workflow transitions for your user role. For more information on how to add workflow transitions, see ",(0,i.jsx)(s.a,{href:"../BaselinePages/baseline-settings#addstatustransitionworkflow",children:"Manage Status Transition Workflow"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Select the required status and click ",(0,i.jsx)(s.strong,{children:"Submit"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["If you have selected a custom status whose status type is either ",(0,i.jsx)(s.strong,{children:"Approved"})," or ",(0,i.jsx)(s.strong,{children:"Rejected"}),", you are asked for the reason to approve or reject. However, while rejecting the Baseline or a Project Baseline, you must give a reason/comment for rejecting it."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"addcomments",children:"Add Comments"}),"\n",(0,i.jsxs)(s.p,{children:["You can add comments to a ",(0,i.jsx)("a",{href:"#","data-toggle":"tooltip","data-original-title":"VAR::glossary.baseline",children:"Baseline"}),". or a ",(0,i.jsx)("a",{href:"#","data-toggle":"tooltip","data-original-title":"VAR::glossary.project_baseline",children:"Project Baseline"})," during the review process."]}),"\n",(0,i.jsx)(s.p,{children:"To add comments to a baseline:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Select the Baseline or the Project Baseline, for which you want to add comment, from the list of baselines."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Enter the required comments in the text box in the ",(0,i.jsx)(s.strong,{children:"Comments"})," section and click the ",(0,i.jsx)(s.strong,{children:"Save"})," link (or press ",(0,i.jsx)(s.strong,{children:"Shift+Enter"}),")."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(98155).A+"",width:"982",height:"320"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Show All"})," option"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Show All"})," is the default option selected in the ",(0,i.jsx)(s.strong,{children:"Comments"})," section to show the comments and audit logs."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(30832).A+"",width:"982",height:"854"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Comments Only"})," option"]}),"\n",(0,i.jsxs)(s.p,{children:["To view only the comments, select the ",(0,i.jsx)(s.strong,{children:"Comments Only"})," option in the ",(0,i.jsx)(s.strong,{children:"Comments"})," section."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(45800).A+"",width:"983",height:"550"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"viewbaseline",children:"View Baseline"}),"\n",(0,i.jsxs)(s.p,{children:["You can view a ",(0,i.jsx)("a",{href:"#","data-toggle":"tooltip","data-original-title":"VAR::glossary.baseline",children:" Baseline"})," or ",(0,i.jsx)("a",{href:"#","data-toggle":"tooltip","data-original-title":"VAR::glossary.project_baseline",children:"Project Baseline"}),", after it is approved or rejected. In other words, you cannot edit the baseline fields after the status of the Baseline or Project Baseline changes to ",(0,i.jsx)(s.strong,{children:"Approved"})," or ",(0,i.jsx)(s.strong,{children:"Rejected"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(95572).A+"",width:"1350",height:"1358"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},45800:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/baseline-comments-only-b50160cd72a3269d1658b3c54b9c745b.png"},30832:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/baseline-comments-showall-188e12905fdcd99ad62660e7ec07440b.png"},98155:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/baseline-comments-52061388f9353848e11ef5c3be1c1b9e.png"},33671:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/review-baseline-3477963c6996f85d80dc0edf13540e09.png"},96616:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/reviewpendingbaselines-b6ace0065a52970101bcd977d19ec6cb.png"},95572:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/view-approved-baseline-8445ee9c0a4a4920e95653e81c0bb938.png"},43023:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>o});var i=n(63696);const t={},a=i.createContext(t);function r(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);