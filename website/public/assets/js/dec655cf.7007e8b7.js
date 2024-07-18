"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7552],{73865:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var l=d(62540),n=d(43023);const t={description:"The SearchReindex.py script allows you to reindex the entire TeamForge data.",id:"searchreindex-py",keywords:["index","reindex"],lastUpdatedAt:"Mar 14, 2018",product:"teamforge",tags:["upgrade","scripts","site_admin_tasks","search_filter_sort"],title:"SearchReindex.py"},r=void 0,i={id:"scripts/searchreindex-py",title:"SearchReindex.py",description:"The SearchReindex.py script allows you to reindex the entire TeamForge data.",source:"@site/../docs/scripts/searchreindex-py.md",sourceDirName:"scripts",slug:"/scripts/searchreindex-py",permalink:"/teamforge/docs/next/scripts/searchreindex-py",draft:!1,unlisted:!1,tags:[{inline:!0,label:"upgrade",permalink:"/teamforge/docs/next/tags/upgrade"},{inline:!0,label:"scripts",permalink:"/teamforge/docs/next/tags/scripts"},{inline:!0,label:"site_admin_tasks",permalink:"/teamforge/docs/next/tags/site-admin-tasks"},{inline:!0,label:"search_filter_sort",permalink:"/teamforge/docs/next/tags/search-filter-sort"}],version:"current",lastUpdatedAt:1721042912e3,frontMatter:{description:"The SearchReindex.py script allows you to reindex the entire TeamForge data.",id:"searchreindex-py",keywords:["index","reindex"],lastUpdatedAt:"Mar 14, 2018",product:"teamforge",tags:["upgrade","scripts","site_admin_tasks","search_filter_sort"],title:"SearchReindex.py"},sidebar:"docs",previous:{title:"restore-rb-data.py",permalink:"/teamforge/docs/next/scripts/restore-rb-data-py"},next:{title:"task-data-export.py",permalink:"/teamforge/docs/next/scripts/task-data-export-py"}},a={},c=[{value:"Overview",id:"overview",level:2},{value:"Example",id:"example",level:2},{value:"Options",id:"options",level:2}];function h(e){const s={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,l.jsx)(s.p,{children:"You can use this script to reindex the entire TeamForge data or you can choose to reindex the subset of data types.\r\nUsage"}),"\n",(0,l.jsx)(s.p,{children:"Run this script as follows:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"./SearchReindex.py --<component name>\n"})}),"\n",(0,l.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["To perform a search reindex for the tracker, run this command:","\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"./SearchReindex.py --trackers-only\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["To perform a search reindex for the wiki, run this command:","\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"./SearchReindex.py --wiki-only\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["To perform a search reindex for documents run this command:","\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"./SearchReindex.py --documents-only\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:" --single-item itemId, | -i"})}),(0,l.jsx)("dd",{class:"dd",children:" Schedules a re-index for just the given item. If the item id is for a project the scheduling results in the server re-indexing all of the project data. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:" ---force-index | -f"})}),(0,l.jsx)("dd",{class:"dd",children:" Force indexing (doesn't check if item is searchable already). "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:" --artifacts only | -a"})}),(0,l.jsx)("dd",{class:"dd",children:" Reindex all artifacts on the site that are currently not searchable or all artifacts if option f is selected. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:" --documents only | -d "})}),(0,l.jsx)("dd",{class:"dd",children:" Reindex all documents on the site that are currently not searchable or all artifacts if option f is selected. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:"---posts only "})}),(0,l.jsx)("dd",{class:"dd",children:" Reindex all posts on the site that are currently not searchable or all artifacts if option f is selected. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:"---trackers only  "})}),(0,l.jsx)("dd",{class:"dd",children:" Reindex all trackers on the site. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:"---document_folders-only  "})}),(0,l.jsx)("dd",{class:"dd",children:" Reindex all document folders on the site. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:"---topics-only  "})}),(0,l.jsx)("dd",{class:"dd",children:" Reindex all topics. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:"---forums-only  "})}),(0,l.jsx)("dd",{class:"dd",children:" Reindex all forums on the site. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:"---news-only  "})}),(0,l.jsx)("dd",{class:"dd",children:" Reindex all news. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:"---project_pages-only  "})}),(0,l.jsx)("dd",{class:"dd",children:" Reindex all project pages. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:"---packages  "})}),(0,l.jsx)("dd",{class:"dd",children:" Reindex all packages. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:"---commits-only  "})}),(0,l.jsx)("dd",{class:"dd",children:" Reindex all commits. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:"---frs_files-only  "})}),(0,l.jsx)("dd",{class:"dd",children:" Reindex all frs files. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:"---releases-only "})}),(0,l.jsx)("dd",{class:"dd",children:" Reindex all releases. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:"---wikis-only  "})}),(0,l.jsx)("dd",{class:"dd",children:" Reindex all wikis. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:"--project-id projectID | -p "})}),(0,l.jsx)("dd",{class:"dd",children:" Limit the re-indexing to data for single project when re-indexing only artifacts and or documents. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:"--verify | -x "})}),(0,l.jsx)("dd",{class:"dd",children:" Searches for each item that is scheduled for re-indexing. There is a one minute wait limit for each item to be re-indexed by the server. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:"--dryrun | -r "})}),(0,l.jsx)("dd",{class:"dd",children:" Executes all the steps for scheduling a re-index without actually sending any re-index requests to the server. This provides a list of items that need re-indexing. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:"output-file filePath, | -o "})}),(0,l.jsx)("dd",{class:"dd",children:"Prints the output for the given file. "})]}),"\n",(0,l.jsxs)("dl",{class:"dl",children:[(0,l.jsx)("dt",{class:"dt dlterm",children:(0,l.jsx)("span",{class:"ph filepath",children:"--verbose | -v "})}),(0,l.jsx)("dd",{class:"dd",children:"Chronicles the process of scheduling the re-index a bit more. "})]})]})}function o(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},43023:(e,s,d)=>{d.d(s,{R:()=>r,x:()=>i});var l=d(63696);const n={},t=l.createContext(n);function r(e){const s=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),l.createElement(t.Provider,{value:s},e.children)}}}]);