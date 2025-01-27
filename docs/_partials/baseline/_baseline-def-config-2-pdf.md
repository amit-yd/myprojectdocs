### Trackers
   1. Select the tracker type(s) from the **Tracker Type** drop-down list. These are the tracker types available in the project.
      ![](/docs/assets/images/baseline-tracker-type.png)
   2. Click **Add Filter(s)** and select the tracker type to set the required filters. The tracker type(s) that you have selected at step 1 are listed here.
      ![](/docs/assets/images/tracker-type-add-filter.png)       
      * _Attribute_ - Lists all the available attributes for the selected tracker type(s).
      * _Condition_ - Lists the conditions for the selected attribute type. 
      * _Value_ - Based on the selected attribute, either lists the values or provides the text box to enable you enter a suitable value.  

      Here's an example of how it appears after the filters are set. If you create the baseline at this point, it would create the baseline with completed user stories for the selected trackers.
      ![](/docs/assets/images/tracker-type-add-filter-2.png)
   3. Click **Add "AND" Condition** to concatenate more conditions to the filter criteria.
      ![](/docs/assets/images/baseline-tracker-type-add-condition.png)
   4. Repeat steps b and c until you've added the required filter criteria for Trackers.
   5. Click the cancel button ( ![](/docs/assets/images/baseline-cancel.png)) against the filter criteria that you want to cancel.
   6. Select the planning folder. It is good enough that you select the parent/root planning folder to show all its child/sub folders. 
   ![](/docs/assets/images/baseline-planning-folder-filter.png)
   To see all the sub folders under the selected root planning folder, click "More".
   ![](/docs/assets/images/baseline-planning-folder-filter-2.png) 

   If you want to see the list of artifacts in the tracker(s) selected, click the view link ( ![](/docs/assets/images/view-link.png)) in the **TRACKER/PLANNING FOLDER** section.

   You can narrow down the list by selecting the desired tracker and/or doing a keyword search in the preview pane.
   ![](/docs/assets/images/baseline-tracker-artifacts-preview.png)

   You can also do a keyword search by using the search ( ![](/docs/assets/images/search-baseline-button.png)) on the preview pane.

### Documents
   1. Select the document folder path. Similar to planning folders, to all the sub folders under the selected root document folder, click "More".
   2. Select the document version.
   3. Click **Add Filter(s)** to include the filter criteria.
      * _Attribute_ - Lists all the available attributes for documents.
      * _Condition_ - Lists the conditions for the selected attribute type. 
      * _Value_ - Based on the selected attribute, either lists the values or provides the text box to enable you enter a suitable value.
   4. Click **Add "AND" Condition** to concatenate more conditions to the filter criteria.
   5. Repeat steps c and d until you've added the required filter criteria for Documents.
   6. Click the cancel button ( ![](/docs/assets/images/baseline-cancel.png)) against the filter criteria that you want to cancel.

   If you want to see the list of documents in the document folder selected, click the view link ( ![](/docs/assets/images/view-link.png)) in the **DOCUMENTS** section.

   You can narrow down the list by selecting the desired document folder from its path in the preview pane.
   ![](/docs/assets/images/baseline-documents-preview.png)    

   You can also do a keyword search by using the search ( ![](/docs/assets/images/search-baseline-button.png)) on the preview pane.

### Source Code Repositories
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

### File Releases
   Select the package or the release name from the **Package/Release Name** drop-down list.

   If you want to see the list of files in the releases selected, click the view link ( ![](/docs/assets/images/view-link.png)) in the **FILE RELEASE** section.

   You can narrow down the list by selecting the desired release in the preview pane.
   ![](/docs/assets/images/baseline-filerelease-preview.png)

   You can also do a keyword search by using the search ( ![](/docs/assets/images/search-baseline-button.png))on the preview pane.

### Binaries
   Select the server and repository from the **Server** and **Repository** drop-down lists, and select one or more packages from the **Select Packages** drop-down list.

   * The **Select Packages** drop-down list lets you search for packages using glob patterns. 
   * The **Select Packages** drop-down list loads the first 100 packages to start with. 
   * You must search for packages using file path glob patterns if you do not find what you are looking for.
   * For example, use the `com/**/*.jar` glob pattern to recursively search for JAR files in the `com` folder.

   ![](/docs/assets/images/210-glob-binaries-01.png)
