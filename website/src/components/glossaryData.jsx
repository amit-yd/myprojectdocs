import React from "react"
export const Active_passive_cluster = () => {
  return (
    <p>Active/passive — Consists of a cluster of fully redundant servers, of which only one remains active at any point in time. Other servers remain passive. Failover happens when the active server fails.</p>
  )
}

export const Active_active_cluster = () => {
  return (
    <p>Active/active — Traffic is passed on to any of the intended for the failed node is either passed onto an existing node or load balanced across the remaining nodes. This is usually only possible when the nodes use a homogeneous software configuration.</p>
  )
}

export const Baseline = () => {
  return (
    <p>An approved snapshot of selected configuration items from a TeamForge project at a given point in time. For example, create a Baseline when you release or deliver a product or when you accomplish specific milestones in your project. Baselines can be created from the ground up or from existing Baseline Definitions.</p>
  )
}

export const Configuration_item = () => {
  return (
    <p>A project component that can be uniquely identified. Typically, a Baseline in TeamForge can include the following configuration items such as Tracker Artifacts, Documents, Source Code Repositories (only Git and Subversion are supported), File Releases, and Binaries (only Nexus binaries are supported).</p>
  )
}

export const Baseline_definition = () => {
  return (
    <p>The filter criteria that is used to create a baseline of a set of selected configuration items such as Tracker Artifacts, Documents, Source Code Repositories (only Git and Subversion are supported), File Releases, and Binaries (only Nexus binaries are supported) in a TeamForge project. A Baseline Definition can include other Baseline Definitions from within the same project, in which case the Baseline Definition would be derived as a union of the native filter conditions as defined in the Baseline Definition and the filter conditions of the selected Baseline Definitions.</p>
  )
}

export const Project_baseline_definition = () => {
  return (
    <p>The filter criteria that is used to create a baseline of a set of selected configuration items at the project level. Such a Project Baseline Definition can include one or more Baseline Definitions too, in which case the Project Baseline Definition would be derived as a union of the native filter conditions as defined in the Project Baseline Definition and the filter conditions of the selected Baseline Definitions. A TeamForge project can have only one Project Baseline Definition and can be modified whenever required.</p>
  )
}

export const Project_baseline = () => {
  return (
    <p>A Project Baseline is a baseline created on a project at a given point in time. Project Baselines are typically created using Project Baseline Definitions. Once you have Project Baselines created, you can restart previously baselined TeamForge projects from Project Baselines and continue from the exact point when the project was last baselined.</p>
  )
}

export const External_baselines = () => {
  return (
    <p>Any approved Baseline or Project Baseline from other TeamForge projects included within a given Baseline or Project Baseline.</p>
  )
}

export const Baseline_package = () => {
  return (
    <p>A downloadable package of physical project artifacts such as Tracker Artifacts, Documents, Source Code Repositories (only Git and Subversion are supported), File Releases, and Binaries (only Nexus binaries are supported) generated from an approved Baseline or a Project Baseline. Once generated, you can download and share the package with your stakeholders.</p>
  )
}
