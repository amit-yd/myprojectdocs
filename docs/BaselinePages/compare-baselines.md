---
description: You can compare two Baselines created at two different points in time to
  know the differences. You can also compare the Baseline Definitions of two Baselines.
id: compare-baselines
keywords:
- compare baselines
- compare baseline definitions
lastUpdatedAt: Feb 11, 2020
product: teamforge
tags:
- baseline
- ctf_18.2
- ctf_18.3
- ctf_19.2
title: Compare Baselines and Baseline Definitions
---

import Exporttoexcel from '../_partials/baseline/_exporttoexcel.md'

**Prerequisite**: You must have either **Create/View Baseline** permission or **View Only** permission to compare Baselines and Baseline Definitions.

## Supported Browsers 

<!--https://forge.collab.net/sf/go/artf315513, https://forge.collab.net/sf/go/artf315513artf315478 -->

**Compare Baselines** feature is supported in the following browsers:

* Google Chrome
* Mozilla Firefox
* Microsoft Internet Explorer
* Microsoft Edge

## Compare Baselines {#comparebaselines}

You can compare <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.baseline">Baselines</a> by applying the filter criteria from the components such as Trackers, Documents, Source Code Repositories, File Releases, and Binaries (only Nexus binaries are supported). 

1. Click **Compare Baseline** on the baseline list view.

   ![](/docs/assets/images/compare-baselines-button.png)   

2. Select two Baselines to compare from the **Baseline 1** and **Baseline 2** drop-down lists on the **Compare Baselines** page. 

   ![](/docs/assets/images/compare-baselines.png)

   By default, the most recently added/modified Baselines are shown in the list.

   You can click the search icon ( ![](/docs/assets/images/search-baseline-button.png) ) in the **Baseline 1** and **Baseline 2** drop-down lists and search for the Baselines you want to compare.

   ![](/docs/assets/images/compare-baselines-search.png)


   By default, you can only view the differences in the result data for all components for which the filter criteria are applied. (here, the **Show only difference** check box is selected). <br></br>

   ![](/docs/assets/images/status-success-small.png) To view the entire data for all components, clear the  **Show only difference** check box.<br></br>

   ![](/docs/assets/images/status-success-small.png) To view the entire data for specific components, select the component(s) from the **Filter by component** drop-down list and the clear the **Show only difference** check box.<br></br>

   ![](/docs/assets/images/status-success-small.png) To view only the differences in the result data of specific component(s) with filter criteria, select the component(s) from the **Filter by component** drop-down list and select the **Show only difference** check box. 
   

   ![](/docs/assets/images/compare-baselines-results.png)

<!--artf319573-->
### Export to Excel to Compare Baselines

 <Exporttoexcel />  

You can now export the diff of two baselines to Excel, if required. 

This `Export to Excel` feature comes in handy when the number of records in the diff exceeds 10,000, which is the number of records that the **Compare Baselines** page can handle. While you can choose to use the **Compare Baselines** page or the "Export to Excel" feature when the diff has less than 10,000 records, you must export to Excel in case the diff exceeds the maximum limit of 10,000 records. 

![\"Export To Excel\" button](/docs/assets/images/export-to-excel-button.png)

![Error message shown when the diff has more than 10,000 records](/docs/assets/images/export-to-excel-message.png)

A new `site-options.conf` token, [BASELINE_COMPARE_ROOT_FOLDER](../siteoptiontokens#BASELINE_COMPARE_ROOT_FOLDER), has been added to configure the location where the Excel file is generated and stored when you export the diff of two Baselines.


## Compare Baseline Definitions {#comparebaselinedefs}

You can compare the filter criteria of two Baselines. The results show only the filter criteria included for selected component(s) between the compared Baselines.

To compare the <a href="#" data-toggle="tooltip" data-original-title="VAR::glossary.baseline_definition">Baseline Definitions</a>:

1. Click on the **Definition** part of the ![](/docs/assets/images/baseline-definition-toggle.png) toggle button on the **Compare Baselines** page.

2. Select the Baselines from the **Baseline 1** and **Baseline 2** drop-down lists. 

   ![](/docs/assets/images/compare-baseline-defs-results.png)


**Color codes to highlight the differences while comparing two Baselines** <br></br>

The differences between two Baselines are color-coded to highlight the newly added filter criteria, modified filter criteria, and deleted filter criteria.

<table>
<tr>
<td markdown="1">
![](/docs/assets/images/compare-baselines-modified-artifacts.png) 
</td>
<td>Modified filter criteria in Baseline 1 or Baseline 2 are highlighted by this color. Within the rows, values that have changed between these baselines are highlighted in a darker shade, as shown in the screenshot above.</td>
</tr>
<tr>
<td markdown="1">
![](/docs/assets/images/compare-baselines-new-artifacts.png)
</td>
<td>Newly added filter criteria in Baseline 2 are highlighted by this color. Blank rows are shown in Baseline 1 results for the filter criteria added in Baseline 2.</td>
</tr>
<tr>
<td markdown="1">
![](/docs/assets/images/compare-baselines-removed-artifacts.png) 
</td>
<td>Deleted filter criteria in Baseline 1 are highlighted by this color in Baseline 1 results. Blank rows are shown in Baseline 2 results for the filter criteria deleted in Baseline 1.</td>
</tr>
<tr>
<td>No data for similar filter criteria.</td>
<td>When both Baseline 1 and Baseline 2 have similar filter criteria, no data is shown. However, when <b>Show only difference</b> check box is not selected, the filter criteria are shown both in Baseline 1 and Baseline 2 results.</td> 
</tr>
</table>
