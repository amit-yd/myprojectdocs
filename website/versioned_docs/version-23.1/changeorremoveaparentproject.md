---
description: When a subproject grows beyond its original scope, you may want to make it
  a standalone project or move it to a different project hierarchy.
id: changeorremoveaparentproject
keywords:
- how to remove a subproject from its parent project
- removing a subproject from its parent project
- how to move a subproject from its parent project
- moving a subproject from its parent project
lastUpdatedAt: Jun 08, 2017
product: teamforge
tags:
- project_admin_tasks
title: Separate a Subproject from its Parent Project
---

By removing the association with a parent project, you can manage the subproject as a separate project.
:::note
Only one parent project can be selected for a subproject. However, the parent project can be changed or removed, as required.
:::
1. Click **Project Admin** from the **Project Home** menu.
2. On the **Project Settings** page, click **Edit Parent**.
3. Change the parent project as required. You can be a project administrator or a site administrator to change or remove a parent project. As a project administrator, you can remove or change a parent project only if you have administrator permissions for both the projects that are being linked.
   :::note
   A parent project can be removed or changed only when its members, user groups and roles are not in use in any other project. In other words, you can not remove/change a parent project while its members, user groups or roles are in use in any other project.
   :::
   * On the **Choose a Parent Project** page, select the desired parent project and click **Update**.
     :::note
     If the project hierarchy exists, the project and its subprojects are moved only under the project from which members, user groups or roles are inherited. If project hierarchy does not exist and no inheritance is in use, the project is made a 'Root' project.
     :::
   * Click **Remove Parent** in the **Project Settings** page to remove the association with parent project.
   * On the pop-up message box, click **OK**, if you wish to make the project a 'Root' project. 

   The project hierarchy is changed or removed in accordance with role based access control and inheritance rules. 
