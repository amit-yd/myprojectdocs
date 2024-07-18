"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9979],{92674:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var o=i(62540),s=i(43023);const n={description:"Create associations between code commits and other Digital.ai TeamForge items, such as tracker artifacts or documents, to help define relationships, track dependencies, and enforce workflow rules.",id:"associatecodecommits",keywords:["manage source code","get the code","view code commits","associate code commits with other items","create a source code repository","delete a source code repository","replicate a repository","check command history","check out code","review code","search code"],lastUpdatedAt:"Jul 10, 2020",product:"teamforge",tags:["ctf_20.2","project_member_tasks","source_code","git_gerrit","scm","associations"],title:"Associate Code Commits"},a=void 0,c={id:"associatecodecommits",title:"Associate Code Commits",description:"Create associations between code commits and other Digital.ai TeamForge items, such as tracker artifacts or documents, to help define relationships, track dependencies, and enforce workflow rules.",source:"@site/versioned_docs/version-23.1/associatecodecommits.md",sourceDirName:".",slug:"/associatecodecommits",permalink:"/docs/associatecodecommits",draft:!1,unlisted:!1,tags:[{inline:!0,label:"ctf_20.2",permalink:"/docs/tags/ctf-20-2"},{inline:!0,label:"project_member_tasks",permalink:"/docs/tags/project-member-tasks"},{inline:!0,label:"source_code",permalink:"/docs/tags/source-code"},{inline:!0,label:"git_gerrit",permalink:"/docs/tags/git-gerrit"},{inline:!0,label:"scm",permalink:"/docs/tags/scm"},{inline:!0,label:"associations",permalink:"/docs/tags/associations"}],version:"23.1",lastUpdatedAt:1721042912e3,frontMatter:{description:"Create associations between code commits and other Digital.ai TeamForge items, such as tracker artifacts or documents, to help define relationships, track dependencies, and enforce workflow rules.",id:"associatecodecommits",keywords:["manage source code","get the code","view code commits","associate code commits with other items","create a source code repository","delete a source code repository","replicate a repository","check command history","check out code","review code","search code"],lastUpdatedAt:"Jul 10, 2020",product:"teamforge",tags:["ctf_20.2","project_member_tasks","source_code","git_gerrit","scm","associations"],title:"Associate Code Commits"},sidebar:"docs",previous:{title:"View Code Commits",permalink:"/docs/viewcodecommits"},next:{title:"Check Command History",permalink:"/docs/checkcommandhistory"}},r={},d=[{value:"Associate Code with Other Items While Committing",id:"associate-code-with-other-items-while-committing",level:2},{value:"Create Associations with Code That is Already Committed",id:"create-associations-with-code-that-is-already-committed",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"For example:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Associate a code commit with the bugs, feature requests, or other tracker artifacts that the code addresses."}),"\n",(0,o.jsx)(t.li,{children:"Associate a code commit with the task requiring its completion."}),"\n",(0,o.jsx)(t.li,{children:"Associate a code commit with an object in an integrated application."}),"\n",(0,o.jsx)(t.li,{children:"Associate a code commit with a requirements document."}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["When you commit files to your source code repository, a source code commit notification mail is sent to users who are monitoring that source code repository. An option is provided at site level and user level to make sure whether the notification mail has to be sent or not. For more information on this, see ",(0,o.jsx)(t.a,{href:"./siteadmin-configuresiteviaui",children:"Configure your Site's Settings"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"associate-code-with-other-items-while-committing",children:"Associate Code with Other Items While Committing"}),"\n",(0,o.jsx)(t.p,{children:"When you commit files to your source code repository, use the commit comment to quickly link your commit with one or more tracker artifacts or other TeamForge items."}),"\n",(0,o.jsx)(t.p,{children:"Associations track the links between code and the bugs, feature requests, or other tracker artifacts that the code addresses. You also associate code commits with other TeamForge items, such as tasks or documents."}),"\n",(0,o.jsx)(t.p,{children:"A project administrator can make associations mandatory for all code commits. When this is made mandatory, the following additional rules pertaining to code commit can also be set. These rules will be enforced when performing the code commit."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"the artifact and the commit must be in the same TeamForge project."}),"\n",(0,o.jsx)(t.li,{children:"the artifact must be in open state."}),"\n",(0,o.jsx)(t.li,{children:"the committer must be the owner of the specific artifact."}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"Once you enforce the above rules, validations are strictly enforced for commits against tracker artifacts only. In case you commit against any other TeamForge object, for example a wiki or a document, mere existence of the object ID ensures successful commit and association and no validations are performed against the status of the object or who it is assigned to."})}),"\n",(0,o.jsx)(t.p,{children:"You can create tracker artifact associations from whatever interface you normally use to check code into your SCM repository. You do not have to log into TeamForge."}),"\n",(0,o.jsx)(t.p,{children:"Use the same syntax for commits to Subversion repositories."}),"\n",(0,o.jsx)(t.p,{children:"When making a code commit, add the associate command in the commit message like this: [<item id>], such as the TeamForge tracker artifact ID or task ID."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["TeamForge item IDs are always letters followed by four or more numbers, such as ",(0,o.jsx)(t.code,{children:"task1029"})," or ",(0,o.jsx)(t.code,{children:"artf10011"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"To associate a commit with multiple TeamForge items, separate the item IDs with commas."}),"\n",(0,o.jsxs)(t.li,{children:["All associations are displayed in the ",(0,o.jsx)(t.em,{children:"ASSOCIATIONS"})," tab of the ",(0,o.jsx)(t.strong,{children:"Commit Details"})," page."]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.strong,{children:"Comment"})," section lists the comments made with each commit."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"To associate an object in an integrated application, use the [<prefix_objectid>] format. Each integrated application displays its prefix on moving the mouse over the application name."})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["When you commit files to your source code repository, a source code commit notification mail is sent to users who are monitoring that source code repository. An option is provided at site level and user level to make sure whether the notification mail has to be sent or not. For more information on this, see ",(0,o.jsx)(t.a,{href:"./siteadmin-configuresiteviaui",children:"Configure your Site's Settings"}),"."]})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["To remind yourself of the details of the association later, look in the ",(0,o.jsx)("i",{children:"CHANGE LOG"})," tab of the associated ",(0,o.jsx)("b",{children:"View Artifact"})," page."]})}),"\n",(0,o.jsx)(t.h2,{id:"create-associations-with-code-that-is-already-committed",children:"Create Associations with Code That is Already Committed"}),"\n",(0,o.jsx)(t.p,{children:"At any time after a code commit is made, you can associate the code commit with other Digital.ai TeamForge items, such as tasks, integrated application objects, or documents."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.strong,{children:"SOURCE CODE"})," from the ",(0,o.jsx)(t.strong,{children:"Project Home"})," menu."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"On the list of project repositories, select the repository containing the code commit with which you want to create an association."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.strong,{children:"View Commits"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["On the ",(0,o.jsx)(t.strong,{children:"Repository Details"})," page, click the name of the commit with which you want to create an association."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["On the ",(0,o.jsx)(t.strong,{children:"Commit Details"})," page, click the ",(0,o.jsx)(t.em,{children:"ASSOCIATIONS"})," tab."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["On the list of existing associations, click ",(0,o.jsx)(t.strong,{children:"Add"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.strong,{children:"Add Association Wizard"})," window, select the items with which you want to associate the artifact:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"ENTER ITEM ID"})," - If you know the item's ID, you can enter it directly.\r\n",(0,o.jsx)(t.img,{src:i(75905).A+"",width:"22",height:"22"})," To associate an object in an integrated application from with TeamForge, use the [<prefix_objectid>] format.",(0,o.jsx)("br",{}),"\r\n",(0,o.jsx)(t.img,{src:i(75905).A+"",width:"22",height:"22"})," Each integrated application displays its prefix on moving the mouse over the application name in the tool bar."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"ADD FROM RECENTLY VIEWED"})," - Select one of the last ten items you looked at during this session."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"ADD FROM RECENTLY EDITED"})," - Select one of the last ten items you changed."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["You may add a comment in the ",(0,o.jsx)(t.strong,{children:"ASSOCIATION COMMENT"})," text box."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Save your work."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Finish and Add Another"})," to add additional associations."]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Finish"})," to return to the ",(0,o.jsx)(t.strong,{children:"Details"})," page."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["When you commit files to your source code repository, a source code commit notification mail is sent to users who are monitoring that source code repository. An option is provided at site level and user level to make sure whether the notification mail has to be sent or not. For more information on this, see ",(0,o.jsx)(t.a,{href:"./siteadmin-configuresiteviaui",children:"Configure your Site's Settings"}),"."]})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click the ",(0,o.jsx)(t.em,{children:"Associations"})," tab to view a graphical representation of all the associated items. Through the Association Viewer, you can choose to view associations in the form of a list or flip over to the Trace view to explore the layers of associations (including parent/child dependencies) laid out in a timeline. You can scroll across the Trace view by dragging the mouse over the association layer or use the 'Previous' and 'Next' arrows to view all the objects as events in a timeline."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["While the ",(0,o.jsx)(t.em,{children:"Associations"})," tab shows the count of the total number of associations, you can only view the most recent 500 associations when you click the ",(0,o.jsx)(t.em,{children:"Associations"})," tab in case the artifact has more than 500 associations. You can, however, browse through the Association Viewer to view older associations."]}),"\n",(0,o.jsx)(t.p,{children:"You can click on each node on the graphical association viewer to filter and display the associated items in the table below the association viewer thus matching the number of associations provided on the selected node. For example, if the node that you select for filtering is having two associations on it, the table displays the two associated items as a result of the filtering process."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},75905:(e,t,i)=>{i.d(t,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExQTk2MURCMzQ1QTg3OTcyOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQ0IzQzI5Qjg2NTYxMUUxQjU1NkZCQ0RDQTk1MEE3NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQ0IzQzI5QTg2NTYxMUUxQjU1NkZCQ0RDQTk1MEE3NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZDQzBDNjg4MTkyMDY4MTE4REJCODA3RUZEMkZCNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAxODAxMTc0MDcyMDY4MTFBOTYxREIzNDVBODc5NzI5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+gwrFywAAAehJREFUeNpi/P//PwMtABMDjcDQM5gFXYCRkZEU/cxPnz5LBjGkpaXmAqm/OA0mxdAbN25mTn+yeDKIA2SzaWioT4cZzkSJoQvfrJ+89f5+BhC+9P/W5JUrV2qDPE2uwWBD5z5bN3nj7f0MP7//Z3AVd2D4fur9pPDw8DeEDGa6evWq+b1nDw8DXSEOUwwzdOaDdZPX3dgHNPQfg4e0A4PcVZ758fFxy4Hy34D4Py6DmY4ePWZ57PO13T7r8myEtGX2L1q0GGQ4C8jQKbfXTl5zbS/Drx//GbzkHRmUbvHOz8nJmQOUvwPEn2EGM6LnPGCq4Dx/88rmkK2Vzp9+fmXgY+NmKDGNuWEnrLNy8q0N9Wtv7AWrC9F0ZtB+wg8z9BYQv0dOFdgM5rW0tDQv622Yn39ossynH1/A4hayugwnHl8Gs8N0XBj0XgjgNBSXwexASkZbW9uiaWZvZ/beidIff3yFy0fouTAYvxXCaygYgAxGxtCI4gRiVS0trZjVh3c8Eary+M9cZPM/dnHj/ylTpswDylkBsQgoMnGmHSwGYxp+cPuTnBU9xBuKx2AUw3V0dCK6u3t6iDYURxijG84BNQxEvwPiD1jDlESDYYYzQ9P8X2IMJbYQAtn8h9R8zzhaNcEAQIABAPHG9uJTK4WgAAAAAElFTkSuQmCC"},43023:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>c});var o=i(63696);const s={},n=o.createContext(s);function a(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);