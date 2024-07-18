"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1771],{53966:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var i=s(62540),t=s(43023);const n={description:"You can control all Gerrit Code Review features directly from TeamForge by specifying a code review policy.",id:"codereviewpolicy",keywords:["code review","policy","git","gerrit"],lastUpdatedAt:"Feb 11, 2020",product:"teamforge",tags:["git_gerrit","integration","source_code","pull_request","scm","code_review"],title:"Control Your Code Review Policy"},o=void 0,a={id:"codereviewpolicy",title:"Control Your Code Review Policy",description:"You can control all Gerrit Code Review features directly from TeamForge by specifying a code review policy.",source:"@site/../docs/codereviewpolicy.md",sourceDirName:".",slug:"/codereviewpolicy",permalink:"/docs/next/codereviewpolicy",draft:!1,unlisted:!1,tags:[{inline:!0,label:"git_gerrit",permalink:"/docs/next/tags/git-gerrit"},{inline:!0,label:"integration",permalink:"/docs/next/tags/integration"},{inline:!0,label:"source_code",permalink:"/docs/next/tags/source-code"},{inline:!0,label:"pull_request",permalink:"/docs/next/tags/pull-request"},{inline:!0,label:"scm",permalink:"/docs/next/tags/scm"},{inline:!0,label:"code_review",permalink:"/docs/next/tags/code-review"}],version:"current",lastUpdatedAt:1721042912e3,frontMatter:{description:"You can control all Gerrit Code Review features directly from TeamForge by specifying a code review policy.",id:"codereviewpolicy",keywords:["code review","policy","git","gerrit"],lastUpdatedAt:"Feb 11, 2020",product:"teamforge",tags:["git_gerrit","integration","source_code","pull_request","scm","code_review"],title:"Control Your Code Review Policy"},sidebar:"docs",previous:{title:"Set up LFS",permalink:"/docs/next/setuplfs"},next:{title:"References",permalink:"/docs/next/gitreference"}},l={},d=[{value:"Mandatory Code Reviews for Git Repositories",id:"mandatory-code-reviews-for-git-repositories",level:2},{value:"Optional Code Review for Git Repositories",id:"optional-code-review-for-git-repositories",level:2},{value:"No Code Review for Git Repositories",id:"no-code-review-for-git-repositories",level:2},{value:"Pull Request Reviews for Git Repositories",id:"pull-request-reviews-for-git-repositories",level:2},{value:"Custom Code Review for Git Repositories",id:"custom-code-review-for-git-repositories",level:2},{value:"User-defined Reviews for Git Repositories",id:"user-defined-reviews-for-git-repositories",level:2},{value:"Create a User-defined Repository Category",id:"adduserdefinedrepocat",level:3},{value:"Related Links",id:"related-links",level:4}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["For more information on Gerrit Code Review, see the ",(0,i.jsx)(r.a,{href:"http://code.google.com/p/gerrit/",children:"Gerrit documentation"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"The following code review policy options are supported:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"No review"}),": All Gerrit review features are turned off and read/write access is enforced. This is the default option."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Mandatory"})," review: All code changes must be reviewed and read/write access is enforced."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Optional"})," review: The review feature is turned on but can be bypassed if necessary; read/write access is enforced."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Pull request"})," review: Pull requests allow developers to collaborate with each other on a code change before merging it into another branch on a Git repository. Using a pull request, you notify others about a feature or fix change that needs attention."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Custom"}),": Access rights must be set manually in the Gerrit web interface; they will not be overridden by TeamForge.\r\nThis specification is intended for advanced users who are familiar with Gerrit access rights and want to turn off \u201cauto pilot\u201d."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"User-defined review"}),": You can add your own categories, if you have access to the ",(0,i.jsx)(r.code,{children:"TeamForgeGerritMappings.xml"})," file. For more information on adding a user-defined repository category, see ",(0,i.jsx)(r.a,{href:"./codereviewpolicy.html#adduserdefinedrepocat",children:"Creat a User-defined Repository Category"}),"."]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"The following animation illustrates the detailed mapping between SCM permissions, repository policies, and Gerrit access rights."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"Mapping between SCM permissions, repository policies, and Gerrit access rights",src:s(47875).A+"",width:"960",height:"760"})}),"\n",(0,i.jsx)("iframe",{width:"700",height:"700",src:"videos/CTF72_RBAC.swf",frameborder:"0",allowfullscreen:!0}),"\n",(0,i.jsx)(r.h2,{id:"mandatory-code-reviews-for-git-repositories",children:"Mandatory Code Reviews for Git Repositories"}),"\n",(0,i.jsx)(r.p,{children:"When a mandatory review is specified, every change pushed to the repository must pass through a review process before it can get committed (merged) to the repository."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:s(96612).A+"",width:"888",height:"416"})}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsxs)(r.p,{children:["Only TeamForge users with the ",(0,i.jsx)(r.strong,{children:"Source Code Admin"})," permission can bypass reviews."]})}),"\n",(0,i.jsx)(r.p,{children:"Here's a list of permissions and what users with these permissions can do:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.strong,{children:"No access"})}),": Users with no permissions cannot do anything."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.strong,{children:"View only"})}),": Users with read permissions can read branches and push for reviews, and have -1 and +1 for reviews."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.strong,{children:"Commit/View"})}),": Users with commit permissions can do everything read permissions would grant and in addition have -2, +2 for reviews. They can verify and submit permissions but have no right to bypass reviews."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Delete/View"}),": Users with delete permissions can do everything commit permissions would grant."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Source Code Admin"}),": Users with admin permissions can do everything delete permissions would grant and in addition push to and create any branch (bypassing review). They can rewrite history, forge the identity of the Gerrit server, and have the right to push tags, the right to upload merges, and the right to fine tune access rights in Gerrit for the Gerrit project involved."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"optional-code-review-for-git-repositories",children:"Optional Code Review for Git Repositories"}),"\n",(0,i.jsxs)(r.p,{children:["When an optional review is specified, every change submitted to the repository can be pushed for code review or directly pushed to the repository bypassing review. This depends on the TeamForge user having the appropriate permissions \u2014 source code ",(0,i.jsx)(r.strong,{children:"Delete/View"})," or ",(0,i.jsx)(r.strong,{children:"Commit/View"})," permission for the former, or ",(0,i.jsx)(r.strong,{children:"Source Code Admin"})," permission for the latter."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:s(69679).A+"",width:"887",height:"409"})}),"\n",(0,i.jsx)(r.p,{children:"Here's a list of permissions and what users with these permissions can do:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.strong,{children:"No access"})}),": Users with no permissions cannot do anything."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.strong,{children:"View only"})}),": Users with read permissions can read branches and push for reviews, and have -1 and +1 for reviews."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.strong,{children:"Commit/View"})}),": Users with commit permissions can do everything read permissions would grant and in addition have -2, +2 for reviews. They can verify and submit permissions, push to/create any branch (bypassing review) and push tags."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.strong,{children:"Delete/View"})}),": Users with delete permissions can do everything commit permissions would grant and in addition, have the right to rewrite history, upload merges and forge identity."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Source Code Admin"}),": Users with admin permissions can do everything delete permissions would grant and in addition push to/create any branch (bypassing review). They can rewrite history, forge the identity of the Git server, and have the right to push tags, the right to upload merges, and the right to fine tune access rights in Git for the Git project involved."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"no-code-review-for-git-repositories",children:"No Code Review for Git Repositories"}),"\n",(0,i.jsxs)(r.p,{children:["In TeamForge 8.0 and later, the ",(0,i.jsx)(r.strong,{children:"No review"})," policy is selected unless you choose some other policy."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:s(40722).A+"",width:"886",height:"412"})}),"\n",(0,i.jsx)(r.p,{children:"Here's a list of permissions and what users with these permissions can do:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"No access"}),": Users with no permissions cannot do anything."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"View only"}),": Users with read permissions can only read branches."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Commit/View"}),": Users with commit permissions can do everything read permissions would grant and in addition, push to/create any branch and push tags."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Delete/View"}),": Users with delete permissions can do everything commit permissions would grant and in addition, have the right to rewrite history, upload merges and forge identity."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Source Code Admin"}),": Users with admin permissions can do everything delete permissions would grant. In addition, they can forge the identity of the Gerrit server, and have the right to fine tune access rights in Git for the Git project involved."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"pull-request-reviews-for-git-repositories",children:"Pull Request Reviews for Git Repositories"}),"\n",(0,i.jsx)(r.p,{children:"Pull requests allow developers to collaborate with each other on a code change before merging it into another branch on a Git repository. Using a pull request, you notify others about a feature or fix change that needs attention."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:s(30173).A+"",width:"894",height:"414"})}),"\n",(0,i.jsxs)(r.p,{children:["From TeamForge 19.2, after a Git repository is created, the ",(0,i.jsx)(r.code,{children:"master"})," branch is automatically added as the default protected branch for the ",(0,i.jsx)(r.strong,{children:"Pull request"})," repository category on the ",(0,i.jsx)(r.strong,{children:"Settings > Policies"})," tab of the repository."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"&quot;master&quot; added as default protected branch for the repository category &quot;Pull request&quot;",src:s(57312).A+"",width:"706",height:"381"})}),"\n",(0,i.jsxs)(r.p,{children:["For more information about pull requests, see ",(0,i.jsx)(r.a,{href:"./pullrequest",children:"Pull Request"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"custom-code-review-for-git-repositories",children:"Custom Code Review for Git Repositories"}),"\n",(0,i.jsxs)(r.p,{children:["When a custom code review is specified, users with the TeamForge ",(0,i.jsx)(r.strong,{children:"Source Code Admin"})," permission can directly fine tune permissions (access rights) in gerrit\u2019s web interface. Those changes will not be overridden by TeamForge."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:s(23368).A+"",width:"884",height:"421"})}),"\n",(0,i.jsx)(r.p,{children:"For information on manually defining access rights in the Gerrit web interface, see Update Git repository access permissions in Gerrit."}),"\n",(0,i.jsx)(r.p,{children:"Here's a list of permissions and what users with these permissions can do:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"No access"}),": Users with no permissions cannot do anything."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"View only"}),": Users with read permissions cannot do anything unless added in Gerrit."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Commit/View"}),": Users with commit permissions cannot do anything unless added in Gerrit."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Delete/View"}),": Users with delete permissions cannot do anything unless added in Gerrit."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Source Code Admin"}),": Users with admin permissions have the right to fine tune access rights in Gerrit for the Gerrit project involved."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"user-defined-reviews-for-git-repositories",children:"User-defined Reviews for Git Repositories"}),"\n",(0,i.jsx)(r.p,{children:"Users can define their own code review policy."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:s(58253).A+"",width:"883",height:"441"})}),"\n",(0,i.jsx)(r.h3,{id:"adduserdefinedrepocat",children:"Create a User-defined Repository Category"}),"\n",(0,i.jsxs)(r.p,{children:["You can add your own categories, if you have access to the ",(0,i.jsx)(r.code,{children:"TeamForgeGerritMappings.xml"})," file."]}),"\n",(0,i.jsx)(r.p,{children:"To add a new user-defined repository category, follow these steps:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Create an empty Git repository, say ",(0,i.jsx)(r.code,{children:"test-git-repo"}),"."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:"git init `test-git-repo`\n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Change to the directory ",(0,i.jsx)(r.code,{children:"test-git-repo"}),"."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:"cd test-git-repo\n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Download the commits, files, and refs from the remote repository to your local repository."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:"git fetch ssh://admin@<your_domain>:29418/TF-Projects refs/meta/config:meta-config\n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Check out the ",(0,i.jsx)(r.code,{children:"TeamForgeGerritMappings.xml"})," file."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:"git checkout meta-config\n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Open the ",(0,i.jsx)(r.code,{children:"TeamForgeGerritMappings.xml"})," file in the editor."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:"vim TeamForgeGerritMappings.xml\n"})}),"\n",(0,i.jsx)(r.p,{children:'Add a new repository category, say "pull_request_new" to it.'}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-xml",children:'<RepoCategory name="pull_request_new" keepRightsAddedInGerrit="false">\r\n     <ScmAdmin>\r\n         <GerritRead value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritCodeReview upperRange="2" lowerRange="-2" refPattern="refs/*" exclusive="false"/>\r\n         <GerritVerify upperRange="1" lowerRange="-1" refPattern="refs/*" exclusive="false"/>\r\n         <GerritSubmit value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritPush forcePush="true" value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritCreateReference value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritForgeAuthorIdentity value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritForgeCommitterIdentity value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritForgeServerIdentity value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritOwner value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritAbandon value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritPushMerges value="ALLOW" refPattern="refs/for/refs/*" exclusive="false"/>\r\n         <GerritPush forcePush="false" value="ALLOW" refPattern="refs/for/refs/*" exclusive="false"/>\r\n         <GerritRebase value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritPushAnnotatedTag forcePush="false" value="ALLOW" refPattern="refs/tags/*" exclusive="false"/>\r\n         <GerritPushSignedTag value="ALLOW" refPattern="refs/tags/*" exclusive="false"/>\r\n         \x3c!-- protected branches--\x3e\r\n         <GerritPush forcePush="true" value="ALLOW" refPattern="refs/heads/{RepoParams/@protectedBranches}" exclusive="true"/>\r\n         <GerritSubmit value="ALLOW" refPattern="refs/for/refs/heads/{RepoParams/@protectedBranches}" exclusive="true"/>\r\n     </ScmAdmin>\r\n     <ScmDeleteView>\r\n         <GerritRead value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritCodeReview upperRange="2" lowerRange="-2" refPattern="refs/*" exclusive="false"/>\r\n         <GerritVerify upperRange="1" lowerRange="-1" refPattern="refs/*" exclusive="false"/>\r\n         <GerritSubmit value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritPush forcePush="true" value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritCreateReference value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritForgeAuthorIdentity value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritForgeCommitterIdentity value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritPushMerges value="ALLOW" refPattern="refs/for/refs/*" exclusive="false"/>\r\n         <GerritPush forcePush="false" value="ALLOW" refPattern="refs/for/refs/*" exclusive="false"/>\r\n         <GerritRebase value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritPushAnnotatedTag forcePush="false" value="ALLOW" refPattern="refs/tags/*" exclusive="false"/>\r\n         <GerritPushSignedTag value="ALLOW" refPattern="refs/tags/*" exclusive="false"/>\r\n         \x3c!-- protected branches--\x3e\r\n         <GerritPush forcePush="false" value="DENY" refPattern="refs/heads/{RepoParams/@protectedBranches}" exclusive="true"/>\r\n         <GerritSubmit value="DENY" refPattern="refs/for/refs/heads/{RepoParams/@protectedBranches}" exclusive="true"/>\r\n     </ScmDeleteView>\r\n     <ScmCommitView>\r\n         <GerritRead value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritCodeReview upperRange="2" lowerRange="-2" refPattern="refs/*" exclusive="false"/>\r\n         <GerritVerify upperRange="1" lowerRange="-1" refPattern="refs/*" exclusive="false"/>\r\n         <GerritSubmit value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritPush forcePush="false" value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritCreateReference value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritPush forcePush="false" value="ALLOW" refPattern="refs/for/refs/*" exclusive="false"/>\r\n         <GerritRebase value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritPushAnnotatedTag forcePush="false" value="ALLOW" refPattern="refs/tags/*" exclusive="false"/>\r\n         <GerritPushSignedTag value="ALLOW" refPattern="refs/tags/*" exclusive="false"/>\r\n         <GerritPushMerges value="ALLOW" refPattern="refs/for/refs/*" exclusive="false"/>\r\n         \x3c!-- protected branches--\x3e\r\n         <GerritPush forcePush="false" value="DENY" refPattern="refs/heads/{RepoParams/@protectedBranches}" exclusive="true"/>\r\n         <GerritSubmit value="DENY" refPattern="refs/for/refs/heads/{RepoParams/@protectedBranches}" exclusive="true"/>\r\n     </ScmCommitView>\r\n     <ScmViewOnly>\r\n         <GerritRead value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n         <GerritCodeReview upperRange="1" lowerRange="-1" refPattern="refs/*" exclusive="false"/>\r\n         <GerritPushMerges value="ALLOW" refPattern="refs/for/refs/*" exclusive="false"/>\r\n         <GerritPush forcePush="false" value="ALLOW" refPattern="refs/for/refs/*" exclusive="false"/>\r\n         <GerritRebase value="ALLOW" refPattern="refs/*" exclusive="false"/>\r\n     </ScmViewOnly>\r\n </RepoCategory>\n'})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Run this command to add the changes to your local directory."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:"git add TeamForgeGerritMappings.xml \n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Commit the changes."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:"git commit -m \"add user-defined repo type 'pull_request_new'\"\n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Check-in the changes to your remote repository."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:"git push ssh://admin@<your-domain>:29418/TF-Projects meta-config:refs/meta/config\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Now the user-defined category ",(0,i.jsx)(r.code,{children:"Pull Request New"})," is added successfully."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"User-defined repository category &quot;Pull Request New&quot;",src:s(2500).A+"",width:"628",height:"170"})}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"master"}),' branch becomes the default protected branch for repositories that belong to the user-defined repository category, provided that its name is prefixed with "Pull Request".']}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"User-defined repository category &quot;pull_request_new&quot; in TeamForgeGerritMappings.xml file",src:s(94089).A+"",width:"718",height:"151"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"User-defined repository category &quot;pull_request_new&quot; shown as &quot;Pull Request New&quot; in the UI",src:s(2500).A+"",width:"628",height:"170"})}),"\n",(0,i.jsxs)(r.p,{children:["Once the repository is created, the ",(0,i.jsx)(r.code,{children:"master"})," branch becomes a protected branch of the repository by default."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"&quot;master&quot; added as the default protected branch for user-defined repository category &quot;Pull Request New&quot;",src:s(69348).A+"",width:"1205",height:"523"})}),"\n",(0,i.jsx)(r.h4,{id:"related-links",children:"Related Links"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"./pullrequest",children:"Review Code"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},47875:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/Animated-GIF-Repository-Policies-Short-36726473516bdfc22a7dbcb1f5832870.gif"},23368:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/custom-review-new-3922242796327e5e5be97c7b9d4e4ac8.png"},57312:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/default-protected-branch-d471319d2dc6cbbd7d0fd3221e9b7840.png"},40722:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/default-review-new-877d1a7fa17c0bc04c487c6c3a09b399.png"},96612:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/mandatory-review-new-5a03be2f709022e131aaa24575321948.png"},69679:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/optional-review-new-df4f1bc748d3081d360552bd23403852.png"},30173:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/pull-request-review-fd8c1f1e9971e5791bd627a6aee8e47e.png"},94089:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/user-defined-pull-request-new-7b14641ea6c2a424e9c988686eecbf7f.png"},2500:(e,r,s)=>{s.d(r,{A:()=>i});const i="data:image/png;base64,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"},58253:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/user-defined-review-ce8a8fe0581234e8af73e46c80d2e53f.png"},69348:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/user_defined_pull_req_master-2fcdd6bd97f6f60f5b472441be6e909e.png"},43023:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>a});var i=s(63696);const t={},n=i.createContext(t);function o(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);