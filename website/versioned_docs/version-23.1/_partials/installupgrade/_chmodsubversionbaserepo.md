<!-- Artifact artf318255 : [DOC] Pre-upgrade step to run for upgrades to 18.2 and above -->
<div class="panel panel-info">
<div class="panel-heading">**Before You Begin—chmod /svnroot**</div>
<div class="panel-body" markdown="1">
Do this before you stop TeamForge while upgrading to TeamForge 18.2 or later versions.

Get value of `SUBVERSION_REPOSITORY_BASE` from the `/opt/collabnet/teamforge/runtime/conf/runtime-options.conf` file of your existing TeamForge server and run the following command:

```shell
chmod -R 775 $SUBVERSION_REPOSITORY_BASE
````

Where `$SUBVERSION_REPOSITORY_BASE` is the path to the `/svnroot` directory.

This is required to work around the unusually long time taken to migrate the Subversion data during the first run of the `teamforge provision` command.
</div>
</div>