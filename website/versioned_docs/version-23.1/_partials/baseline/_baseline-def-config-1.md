   <div id="BDefConfigFirst" class="container"> 
   <ul  class="nav nav-tabs">
   <li class="active"><a href="#trackerartifactsFirst" data-toggle="tab">Tracker Artifacts</a></li>
   <li><a href="#documentsFirst" data-toggle="tab">Documents</a></li>
   <li><a href="#scmFirst" data-toggle="tab">Source Code Repositories</a></li>
   <li><a href="#filereleasesFirst" data-toggle="tab">File Releases</a></li>
   <li><a href="#binariesFirst" data-toggle="tab">Binaries</a></li>
   </ul>
   <div class="tab-content clearfix">
   <div class="tab-pane active" id="trackerartifactsFirst" markdown="1">
   1. Select the tracker type(s) from the **Tracker Type** drop-down list.
      ![](/docs/assets/images/baseline-tracker-type.png)
   2. Click **Add Filter(s)**.
      ![](/docs/assets/images/tracker-type-add-filter.png)       
      * **Attribute**--Select a tracker attribute from the drop-down list.
      * **Condition**--Select a condition from the drop-down list. 
      * **Value**--For the selected attribute, either select one or more values or enter a value.

      For example, the following filter includes all the **Closed** tracker artifacts in the baseline.
      ![](/docs/assets/images/tracker-type-add-filter-2.png)
   3. Click **Add "AND" Condition** to add more constraints to the filter criteria.
      ![](/docs/assets/images/baseline-tracker-type-add-condition.png)
   4. Repeat steps b and c to add more filters.
      
      You can click the remove icon ( ![](/docs/assets/images/baseline-cancel.png)) next to a filter criteria to remove it.      
   5. Select the planning folder. Selecting the parent/root planning folder shows all its child/sub folders. 
      ![](/docs/assets/images/baseline-planning-folder-filter.png)
      For folders with sub folders, click **More** to view the complete folder structure and select the required folders.
      ![](/docs/assets/images/baseline-planning-folder-filter-2.png) 
      To view the filtered list of artifacts, click the view icon ( ![](/docs/assets/images/view-link.png) ) in the **TRACKER/PLANNING FOLDER** section. The **Tracker/PlanningFolder Preview** dialog box appears.

      You can also do a keyword search by clicking the search icon ( ![](/docs/assets/images/search-baseline-button.png) ) on the **Tracker/PlanningFolder Preview** dialog box.
      ![](/docs/assets/images/baseline-tracker-artifacts-preview.png)
   </div>
   <div class="tab-pane" id="documentsFirst" markdown="1">
   1. Select the document folder. 

      For folders with sub folders, click **More** to view the complete folder structure and select the required sub folders.
   2. Select the document version.
   3. Click **Add Filter(s)**.
      * **Attribute**--Select an attribute from the drop-down list.
      * **Condition**--Select a condition from the drop-down list. 
      * **Value**--For the selected attribute, either select one or more values or enter a value.
   4. Click **Add "AND" Condition** to add more constraints to the filter criteria.
   5. Repeat steps c and d to add more filters.
   
      You can click the remove icon ( ![](/docs/assets/images/baseline-cancel.png)) next to a filter criteria to remove it.
   
      To view the filtered list of documents, click the view icon ( ![](/docs/assets/images/view-link.png) ) in the **DOCUMENTS** section. The **Documents Preview** dialog box appears.

      You can also do a keyword search by clicking the search icon ( ![](/docs/assets/images/search-baseline-button.png) ) on the **Documents Preview** dialog box.
      
      ![](/docs/assets/images/baseline-documents-preview.png)
   </div>
   <div class="tab-pane" id="scmFirst" markdown="1">
   1. Select a repository from the **Repository/Source Name** drop-down list. Select the repository again if you want to clear your selection.

      ![](/docs/assets/images/baseline-scm-repository.png)

   2. Select a tag for the selected repository. Select the tag again if you want to clear your selection.

      ![](/docs/assets/images/baseline-scm-tags.png)

      <!-- [artf396198] Source Code filter for Project Baseline creation in case of Subversion repository -->
      Tagging is one of the features of version control systems that lets you mark particular revisions (for example, a release version)—so that you can recreate a certain build or environment at a later point in time.

      * The **Select Tag** drop-down list shows all the tags you have for the selected Git or Subversion repository.
      * For Subversion repositories, the list of tags comes from the `/tags` directory of the repository.
      * For more information about SVN tags, see [Branching / Tagging](https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-dug-branchtag.html).
      * You can click the **View Tag** link to view the tag details.

      ![](/docs/assets/images/baseline-scm-view-tag.png)

   3. Click **Add another Repository** to add more repositories.
   </div>
   <div class="tab-pane" id="filereleasesFirst" markdown="1">
   Select the package or the release name from the **Package/Release Name** drop-down list.

   To view the filtered list of files, click the view icon ( ![](/docs/assets/images/view-link.png)) in the **File Releases** section.

   You can also do a keyword search by clicking the search icon ( ![](/docs/assets/images/search-baseline-button.png)) on the **File Releases** dialog box.

   ![](/docs/assets/images/baseline-filerelease-preview.png)
   </div>
   <div class="tab-pane" id="binariesFirst" markdown="1">
   :::warning
   Projects created via the Project Baseline supports only Nexus 3 binary repositories. Nexus `Maven2` and `Raw` formatted Proxy, Hosted and Group types of repositories are only supported.
   :::
   Select the server and repository from the **Server** and **Repository** drop-down lists, and select one or more packages from the **Select Packages** drop-down list.

   * The **Select Packages** drop-down list lets you search for packages using glob patterns. 
   * The **Select Packages** drop-down list loads the first 100 packages to start with. 
   * You must search for packages using file path glob patterns if you do not find what you are looking for.
   * For example, use the `com/**/*.jar` glob pattern to recursively search for JAR files in the `com` folder.

   ![](/docs/assets/images/210-glob-binaries-01.png)
   </div>
   </div>
   </div>
