Here's the release notes for TeamForge-Nexus integration plugin.  <button type="button" class="btn btn-primary btn-xs" data-toggle="collapse" href="#nexuspluginrn" aria-expanded="false" aria-controls="nexuspluginrn">Show/Hide</button>
   
<div class="collapse" id="nexuspluginrn">
   
<div markdown="1">

:::important
You must use the latest Nexus plugin regardless of the TeamForge version you have installed or upgraded to.
:::

### TeamForge-Nexus Integration Plugin v2.0

Name of the plugin: `CTF-Nexus-Integration-Plugin-2.0`.

#### Release Highlights
* Usability of the Nexus installer (used to integrate Nexus with TeamForge) has been enhanced.
* Improved peformance while loading Nexus UI.

#### Bug Fixes
* When users log on to Nexus using CTF user credentials, the Nexus UI showed poor performance. This is fixed.
* Fixed the time delay due to the presence of Nexus plugin in Maven builds.

### TeamForge-Nexus Integration Plugin v2.0.1

Name of the plugin: `CTF-Nexus-Integration-Plugin-2.0.1`.

#### Release Highlights
* Minor patch release.
* Enhanced the TeamForge top navigation bar supported by Angular JS.
* Released with TeamForge 16.7.

### TeamForge-Nexus Integration Plugin v2.1.1

Name of the plugin: `CTF-Nexus-Integration-Plugin-2.1.1`.

#### Release Highlights
* User session management between Nexus application and TeamForge integrated with Nexus has been handled in a much better way so that communication between TeamForge and Nexus happens smoothly as expected. This enhancement is done for the Nexus versions 2.9 through 2.14.
* Improved peformance while loading Nexus UI.
* Released with TeamForge 17.4.

#### Bug Fixes
* Fixed the issue in which the `500: Internal Server Error` was shown instead of `401: Unauthorized Error` for any user activities in Nexus after a session timeout for the Nexus versions 2.9, 2.10, and 2.11. This fix is applicable for Nexus versions 2.9 through 2.14.
* A `403: Forbidden` error was shown as Nexus authentication failed for users whose session has timed out due to the expiration of OAuth token. This is fixed.

**Also see**: [Known Limitations with TeamForge-Nexus Integrations][managebinaries.html#limitations]

</div>
</div>