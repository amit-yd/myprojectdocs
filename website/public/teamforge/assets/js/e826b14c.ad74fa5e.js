"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9368],{66177:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>n,contentTitle:()=>i,default:()=>x,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=s(62540),d=s(43023);const a={description:"Tasks, as a component, is no longer supported and was completely removed from TeamForge 20.1 and later. The task-data-export.py script is used to back up the Tasks data.",id:"task-data-export-py",keywords:["back up","restore","tasks"],lastUpdatedAt:"Apr 17, 2020",product:"teamforge",tags:["upgrade","backup_restore","scripts"],title:"task-data-export.py"},i=void 0,l={id:"scripts/task-data-export-py",title:"task-data-export.py",description:"Tasks, as a component, is no longer supported and was completely removed from TeamForge 20.1 and later. The task-data-export.py script is used to back up the Tasks data.",source:"@site/../docs/scripts/task-data-export-py.md",sourceDirName:"scripts",slug:"/scripts/task-data-export-py",permalink:"/docs/next/scripts/task-data-export-py",draft:!1,unlisted:!1,tags:[{inline:!0,label:"upgrade",permalink:"/docs/next/tags/upgrade"},{inline:!0,label:"backup_restore",permalink:"/docs/next/tags/backup-restore"},{inline:!0,label:"scripts",permalink:"/docs/next/tags/scripts"}],version:"current",lastUpdatedAt:1721042912e3,frontMatter:{description:"Tasks, as a component, is no longer supported and was completely removed from TeamForge 20.1 and later. The task-data-export.py script is used to back up the Tasks data.",id:"task-data-export-py",keywords:["back up","restore","tasks"],lastUpdatedAt:"Apr 17, 2020",product:"teamforge",tags:["upgrade","backup_restore","scripts"],title:"task-data-export.py"},sidebar:"docs",previous:{title:"SearchReindex.py",permalink:"/docs/next/scripts/searchreindex-py"},next:{title:"teamforge.py",permalink:"/docs/next/scripts/teamforgescript"}},n={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Importing Tasks Data to a TeamForge Tracker",id:"importing-tasks-data-to-a-teamforge-tracker",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Tasks, as a component, is no longer supported and was completely removed from TeamForge 20.1 and later. However, if you have been using Tasks, you can use the ",(0,r.jsx)(t.code,{children:"task-data-export.py"})," script to export the Tasks data to Excel files, which you can later import into one of the TeamForge trackers."]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"[RUNTIME_DIR]/scripts/task-data-export.py [--rows|-r] | [--path|-p] | [--help|-h]\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.p,{children:["The following parameters are available for the ",(0,r.jsx)(t.code,{children:"tasks-data-export.py"})," script."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Parameter"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"-r | --rows"}),(0,r.jsx)("td",{children:"The maximum number of rows to export to an Excel file. Ignoring this option allows a maximum of 4500 rows exported to an Excel file."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"-p | --path"}),(0,r.jsx)("td",{children:"The path to the location where the Excel files (with Tasks data) are stored."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"-h | --help"}),(0,r.jsx)("td",{children:"Provides a list of all available options for this script."})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Usage Example 1"}),": The following command exports the Tasks data to as many Excel files as required with no more than 400 rows in each Excel file. For example, if you have 900 records, the following command exports 400 records to the first two Excel files and the remaining 100 records to a third Excel file."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"./task-data-export.py -r 400 -p /tmp/TaskExport/\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Usage Example 2"}),": The following command exports the Tasks data to as many Excel files as required with a maximum of 4500 rows per Excel file. For example, if you have 9000 records, the following command exports the data to two excel files with 4500 records per file."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"/task-data-export.py -p /tmp/TaskExport/\n"})}),"\n",(0,r.jsx)(t.h2,{id:"importing-tasks-data-to-a-teamforge-tracker",children:"Importing Tasks Data to a TeamForge Tracker"}),"\n",(0,r.jsxs)(t.p,{children:["You can create a new Tasks tracker and ",(0,r.jsx)(t.a,{href:"../trackers-importingtrackerartifacts",children:"mass import"})," the data that you exported as discussed earlier using the ",(0,r.jsx)(t.code,{children:"tasks-data-export.py"})," script."]}),"\n",(0,r.jsx)(t.p,{children:"However, the new tracker you create must comply with the following field structure. The following table lists the fields (both fixed and flex fields) and their values, if any, as expected in the new Tasks tracker that you create."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Artifact ID"}),(0,r.jsx)(t.th,{children:"Field Values"}),(0,r.jsx)(t.th,{children:"Type"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Title"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Fixed Field"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Fixed Field"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Assigned To"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Fixed Field"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Team"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Fixed Field"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Status"}),(0,r.jsxs)(t.td,{children:["Pre-configured values of Task",(0,r.jsx)("br",{}),"Alert, OK, Warning, NotStarted, Complete"]}),(0,r.jsx)(t.td,{children:"Fixed Field"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Priority"}),(0,r.jsxs)(t.td,{children:["None",(0,r.jsx)("br",{}),"1 - Highest",(0,r.jsx)("br",{}),"2 - High",(0,r.jsx)("br",{}),"3 - Medium",(0,r.jsx)("br",{}),"4 - Low",(0,r.jsx)("br",{}),"5 - Lowest"]}),(0,r.jsx)(t.td,{children:"Fixed Field"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Category"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Fixed Field"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Start Date"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Text-Flex Fields"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"End Date"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Text-Flex Fields"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Percent Complete"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Text-Flex Fields"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Estimated Hours"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Text-Flex Fields"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Created Date"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Text-Flex Fields"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Task Created By"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Text-Flex Fields"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Planned"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Text-Flex Fields"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Accomplishments"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Text-Flex Fields"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Issues"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Text-Flex Fields"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Actual Hours"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Text-Flex Fields"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Task Calendar"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Text-Flex Fields"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Task Associations"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Text-Flex Fields"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Task Successor"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Text-Flex Fields"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Task Id"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Text-Flex Fields"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Folder Hierarchy"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Text-Flex Fields"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Task Predecessor"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Text-Flex Fields"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},43023:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var r=s(63696);const d={},a=r.createContext(d);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);