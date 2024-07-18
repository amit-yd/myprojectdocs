"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2129],{5287:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=s(62540),n=s(43023);const o={description:"When you want to search for TeamForge objects such as tracker artifacts or documents, you can quickly search using a unique identifier or a keyword or you can perform an advanced search.",id:"search-keyword",keywords:["jump to ID","search"],lastUpdatedAt:"Mar 19, 2019",product:"teamforge",tags:["project_member_tasks","search_filter_sort"],title:"Jump to ID / Advanced Search"},a=void 0,c={id:"search-keyword",title:"Jump to ID / Advanced Search",description:"When you want to search for TeamForge objects such as tracker artifacts or documents, you can quickly search using a unique identifier or a keyword or you can perform an advanced search.",source:"@site/versioned_docs/version-23.1/search-keyword.md",sourceDirName:".",slug:"/search-keyword",permalink:"/teamforge/docs/search-keyword",draft:!1,unlisted:!1,tags:[{inline:!0,label:"project_member_tasks",permalink:"/teamforge/docs/tags/project-member-tasks"},{inline:!0,label:"search_filter_sort",permalink:"/teamforge/docs/tags/search-filter-sort"}],version:"23.1",lastUpdatedAt:1721042912e3,frontMatter:{description:"When you want to search for TeamForge objects such as tracker artifacts or documents, you can quickly search using a unique identifier or a keyword or you can perform an advanced search.",id:"search-keyword",keywords:["jump to ID","search"],lastUpdatedAt:"Mar 19, 2019",product:"teamforge",tags:["project_member_tasks","search_filter_sort"],title:"Jump to ID / Advanced Search"}},i={},l=[{value:"Full-text Search in TeamForge",id:"full-text-search-in-teamforge",level:2},{value:"An Overview of Full-text Search",id:"an-overview-of-full-text-search",level:3},{value:"Searchable Items in TeamForge",id:"searchable-items-in-teamforge",level:4},{value:"TeamForge Full-text Search Guidelines",id:"teamforge-full-text-search-guidelines",level:3},{value:"Single Term Search",id:"single-term-search",level:4},{value:"Multiple Terms Search",id:"multipletermssearch",level:4},{value:"Search by Phrase",id:"search-by-phrase",level:4},{value:"Boolean Operators",id:"booleanoperators",level:4},{value:"Wildcard Searches",id:"wildcards",level:4},{value:"Fuzzy Searches",id:"fuzzy-searches",level:4},{value:"Special Characters",id:"special-characters",level:4},{value:"Regular Expression Search with Forward Slashes",id:"regular-expression-search-with-forward-slashes",level:4},{value:"Excluded Words",id:"excluded-words",level:4},{value:"Range Searches",id:"range-searches",level:4},{value:"Jump to ID Search",id:"jumptoidsearch",level:2},{value:"Advanced Search",id:"advancedsearch",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["While searching with an ID, you can select an object category from the drop-down list and search only within the selected object category. You can also select ",(0,t.jsx)(r.strong,{children:"Advanced Search"})," from the drop-down list to perform an advanced search."]})}),"\n",(0,t.jsx)(r.h2,{id:"full-text-search-in-teamforge",children:"Full-text Search in TeamForge"}),"\n",(0,t.jsx)(r.p,{children:"Here is some detailed information to help you make the most of TeamForge's full-text search capabilities powered by the Apache Lucene full-text search engine."}),"\n",(0,t.jsx)(r.h3,{id:"an-overview-of-full-text-search",children:"An Overview of Full-text Search"}),"\n",(0,t.jsx)(r.p,{children:"Here is some detailed information about the TeamForge's full-text search."}),"\n",(0,t.jsx)(r.h4,{id:"searchable-items-in-teamforge",children:"Searchable Items in TeamForge"}),"\n",(0,t.jsx)(r.p,{children:"The following items are searchable in TeamForge."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Discussion forums, posts and topics"}),"\n",(0,t.jsx)(r.li,{children:"Documents and document folders"}),"\n",(0,t.jsx)(r.li,{children:"File releases, packages, and FRS files"}),"\n",(0,t.jsx)(r.li,{children:"News posts"}),"\n",(0,t.jsx)(r.li,{children:"Visible project pages"}),"\n",(0,t.jsx)(r.li,{children:"Projects"}),"\n",(0,t.jsx)(r.li,{children:"Source code files and commits"}),"\n",(0,t.jsx)(r.li,{children:"Tasks and task folders"}),"\n",(0,t.jsx)(r.li,{children:"Trackers and tracker artifacts"}),"\n",(0,t.jsx)(r.li,{children:"Users"}),"\n",(0,t.jsx)(r.li,{children:"Wiki pages"}),"\n",(0,t.jsx)(r.li,{children:"Integrated applications"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Integrated applications"})}),"\n",(0,t.jsx)(r.p,{children:"Integrated applications may or may not have search capabilities. Refer to the integrated application's documentation to know more about its search features and to appreciate how the search features of the integrated application and TeamForge differ."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Attached files"})}),"\n",(0,t.jsxs)(r.p,{children:["You can search the contents of attached files. For more information about supported document formats, click ",(0,t.jsx)(r.a,{href:"http://tika.apache.org/1.0/formats.html",children:"here"}),"."]}),"\n",(0,t.jsxs)(r.admonition,{type:"note",children:[(0,t.jsx)(r.p,{children:"You may witness some delay for the TeamForge objects to appear in the search results and the extent of delay depends on the load on the server."}),(0,t.jsx)(r.p,{children:'When you search, the contents of all the search-able fields (of an object) are collectively searched for matches. For instance, when you search for an artifact, the contents of the title, description and comment fields, put together, are searched. As an example, the search entry CollabNet AND TeamForge returns an artifact if the content of its title, description and comment, put together, has both the words "CollabNet" and "TeamForge". In other words, the word "CollabNet" could be in the artifact title and the word "TeamForge" could be in the artifact description (and not necessarily present on the same field).'}),(0,t.jsxs)(r.p,{children:["If you search with multiple words, items containing any of the words in the search string are returned. For more information, see ",(0,t.jsx)(r.a,{href:"./search-keyword#multipletermssearch",children:"Multiple Terms Search"}),". On the other hand, if you want to find items where the words, say CollabNet and TeamForge, both appear, type CollabNet AND TeamForge. For more information, see ",(0,t.jsx)(r.a,{href:"./search-keyword#booleanoperators",children:"Boolean Operators"}),"."]}),(0,t.jsxs)(r.p,{children:["The TeamForge searches for full words. Use ",(0,t.jsx)(r.a,{href:"./search-keyword#wildcards",children:"Wildcard Searches"})," for partial word searches."]}),(0,t.jsxs)(r.p,{children:["Search terms are case-insensitive. For example, if you search using the keyword ",(0,t.jsx)(r.code,{children:"collabnet"}),", pages that contain COLLABNET, CollabNet and collabnet are all returned."]})]}),"\n",(0,t.jsx)(r.h3,{id:"teamforge-full-text-search-guidelines",children:"TeamForge Full-text Search Guidelines"}),"\n",(0,t.jsx)(r.p,{children:"Here is some guidelines to help you create effective searches."}),"\n",(0,t.jsx)(r.h4,{id:"single-term-search",children:"Single Term Search"}),"\n",(0,t.jsxs)(r.p,{children:["Single-term search looks for all search results that match the search text. For example, a search entry of ",(0,t.jsx)(r.code,{children:"doc"}),' only returns search results of "doc".']}),"\n",(0,t.jsx)(r.h4,{id:"multipletermssearch",children:"Multiple Terms Search"}),"\n",(0,t.jsxs)(r.p,{children:["Multiple-terms search looks for all search results that match any of the words in the search text. For example, a search entry of ",(0,t.jsx)(r.code,{children:"document plan"}),' returns search results of "document", "plan", and "document plan".']}),"\n",(0,t.jsx)(r.h4,{id:"search-by-phrase",children:"Search by Phrase"}),"\n",(0,t.jsxs)(r.p,{children:["A group of words surrounded by double quotes, such as ",(0,t.jsx)(r.code,{children:'"product requirements"'}),", return only search results containing the entire phrase."]}),"\n",(0,t.jsx)(r.h4,{id:"booleanoperators",children:"Boolean Operators"}),"\n",(0,t.jsx)(r.p,{children:"Terms and phrases can be combined with Boolean operators for more complex searches. Boolean operators must be in upper case. Use:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"OR"})," between two terms returns search results containing either of the terms. This is the default operator used if no other operator is specified."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"AND"})," between two terms returns only search results containing both of the terms."]}),"\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.code,{children:"+"})," operator before a term makes the term required. Only search results containing the terms are returned."]}),"\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.code,{children:"-"})," or ",(0,t.jsx)(r.code,{children:"NOT"}),' operator before a term returns only search results that do not contain the term. The character "-" represents the Boolean operator AND NOT.']}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["You can group Boolean searches using parentheses. For example, (",(0,t.jsx)(r.code,{children:"doc"})," OR ",(0,t.jsx)(r.code,{children:"test"}),") AND ",(0,t.jsx)(r.code,{children:"plan"}),' returns search results containing "doc plan" and "test plan".']})}),"\n",(0,t.jsx)(r.h4,{id:"wildcards",children:"Wildcard Searches"}),"\n",(0,t.jsxs)(r.p,{children:['To look for search results with a single character replaced, use the ? symbol. For example, to look for search results with "text" or "test", enter ',(0,t.jsx)(r.code,{children:"te?t"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:['To look for search results with more than one character replaced, use the * symbol. For example, to look for search results such as "content" or "contest" or "continuous" or "control", enter ',(0,t.jsx)(r.code,{children:"cont*"}),"."]}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsx)(r.p,{children:"You can use wildcard symbols in the middle or at the end of a search, but not as the first character of a search keyword."})}),"\n",(0,t.jsx)(r.h4,{id:"fuzzy-searches",children:"Fuzzy Searches"}),"\n",(0,t.jsxs)(r.p,{children:['To look for search results with spelling similar to the search term entered, use the ~ symbol as the last character of the search keyword. For example, to look for search results with spelling similar to "roam", enter ',(0,t.jsx)(r.code,{children:"roam~"}),'. This returns search results such as "roam" and "roams".']}),"\n",(0,t.jsx)(r.h4,{id:"special-characters",children:"Special Characters"}),"\n",(0,t.jsxs)(r.p,{children:["If you have any of the following special characters in your search text, you must escape them by enclosing the entire phrase in double quotes. ",(0,t.jsx)(r.code,{children:'+ - & || ! ( ) { } [ ] ^ " ~ * ? : \\'})]}),"\n",(0,t.jsxs)(r.p,{children:['For example, to look for search results containing the hyphenated term "product-development", enter ',(0,t.jsx)(r.code,{children:"product-development"}),"."]}),"\n",(0,t.jsx)(r.p,{children:'The special character "+" represents the Boolean operator AND. The special character "-" represents the Boolean operator AND NOT.'}),"\n",(0,t.jsx)(r.h4,{id:"regular-expression-search-with-forward-slashes",children:"Regular Expression Search with Forward Slashes"}),"\n",(0,t.jsxs)(r.p,{children:['Lucene 4 supports regular expression searches matching a pattern between forward slashes "/". For example, to look for search results containing the words "moat" or "boat", use the search string ',(0,t.jsx)(r.code,{children:"/[mb]oat/."})]}),"\n",(0,t.jsxs)(r.p,{children:['If you are specifically looking for search results containing a forward slash "/" character, you must backslash-escape or quote-escape the forward slash character. For example, to look for search results containing ',(0,t.jsx)(r.code,{children:"<opt/collabnet>"}),", use the search string ",(0,t.jsx)(r.code,{children:"<opt\\/collabnet>"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"excluded-words",children:"Excluded Words"}),"\n",(0,t.jsxs)(r.p,{children:["The following words are considered stop words and are not search-able on their own: ",(0,t.jsx)(r.code,{children:"a, an, and, are, as, at, be, but, by, for, if, in, into, is, it, no, not, of, on, or, s, such, that, the, their, then, there, these, they, this, to, was, will, with"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"range-searches",children:"Range Searches"}),"\n",(0,t.jsxs)(r.p,{children:["You can do a range-bound search using the TO operator. For example, the search entry, ",(0,t.jsx)(r.code,{children:"[artf1100 TO artf1200]"}),", returns items containing values between artf1100 and artf1200, including artf1100 and artf1200. To exclude the upper and lower bounds from the search results, use curly brackets "," instead of square brackets []."]}),"\n",(0,t.jsx)(r.h2,{id:"jumptoidsearch",children:"Jump to ID Search"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Log on to TeamForge. If you are not logged on, you can search only projects and items that have been designated public."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["If you know the unique identifier of an object and want to quickly go to the object, type the unique identifier in the ",(0,t.jsx)(r.strong,{children:"Jump to ID"})," text box and click the search icon.",(0,t.jsx)("br",{}),"\r\nThe default quick search option is ",(0,t.jsx)(r.strong,{children:"Jump to ID"}),"."]}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsxs)(r.p,{children:["In addition to other objects, the ",(0,t.jsx)(r.strong,{children:"Jump to ID"})," search supports Baseline and Baseline Definition IDs."]})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"If you want to do a keyword search of a specific object type (such as documents or discussions), type the keyword in the text box, select an object type from the drop-down list and click the search icon. The following table lists the search-able object types you can select from the drop-down list."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Searchable object types"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Discussions"}),(0,t.jsx)(r.td,{children:"Select this option to search in discussion forums."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Documents"}),(0,t.jsx)(r.td,{children:"Select this option to search for documents."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"File Releases"}),(0,t.jsx)(r.td,{children:"Select this option to search in file releases."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"News"}),(0,t.jsx)(r.td,{children:"Select this option to search project news."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Project Pages (Visible)"}),(0,t.jsx)(r.td,{children:"Select this option to search project pages."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Projects"}),(0,t.jsx)(r.td,{children:"Select this option to search projects."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Repository Name"}),(0,t.jsx)(r.td,{children:"Select this option to search the repository by name across the SCM servers and projects."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Source Code"}),(0,t.jsxs)(r.td,{children:["Select this option to search the source code. For more information, see ",(0,t.jsx)(r.a,{href:"./searchcode",children:"How to search for Source Code?"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Tasks"}),(0,t.jsx)(r.td,{children:"Select this option to search for tasks."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Trackers"}),(0,t.jsx)(r.td,{children:"Select this option to search for tracker artifacts."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Users"}),(0,t.jsx)(r.td,{children:"Select this option to search for users."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Wiki"}),(0,t.jsx)(r.td,{children:"Select this option to search in Wiki pages."})]})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"advancedsearch",children:"Advanced Search"}),"\n",(0,t.jsx)(r.p,{children:"The Advanced Search function lets you search globally on all the projects or on specific projects of interest. You can also scope your search to one or more components such as Documents, Discussions and so on using the Advanced Search."}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Click ",(0,t.jsx)(r.strong,{children:"Advanced Search"})," from the ",(0,t.jsx)(r.strong,{children:"Jump to ID"})," menu (drop-down list)."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["On the ",(0,t.jsx)(r.strong,{children:"Search Criteria"})," page, enter the keywords to search for."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Select one or more components such as ",(0,t.jsx)(r.strong,{children:"Discussions"}),", ",(0,t.jsx)(r.strong,{children:"Documents"})," and so on from the ",(0,t.jsx)(r.strong,{children:"IN"})," list."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Select one or more projects listed in the ",(0,t.jsx)(r.strong,{children:"IN PROJECTS"})," list. You can also select ",(0,t.jsx)(r.strong,{children:"All Projects"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Select the ",(0,t.jsx)(r.strong,{children:"Search Attachments"})," check box and the ",(0,t.jsx)(r.strong,{children:"Search Comments"})," check box if you want to search attachments and comments respectively.\r\nAttachments refer to tracker artifact attachments. Comments refer to tracker artifact comments and task comments."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Select one of the two options, ",(0,t.jsx)(r.strong,{children:"Search Active Versions Only"})," or ",(0,t.jsx)(r.strong,{children:"Search All Versions"}),", to specify whether you want to search active document versions only or all document versions respectively.\r\nSearching only active document versions allows you to eliminate search results for outdated documents."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Click ",(0,t.jsx)(r.strong,{children:"Search"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Your search results are organized by TeamForge application. The search score indicates the relevance of each result to your search criteria. You can see only those items that your project membership and permissions allow you to see."}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},43023:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>c});var t=s(63696);const n={},o=t.createContext(n);function a(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);