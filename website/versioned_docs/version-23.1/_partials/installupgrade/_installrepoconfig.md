<!-- <button type="button" class="btn btn-primary btn-xs" data-toggle="collapse" href="#installRepoConfig" aria-expanded="true" aria-controls="installRepoConfig">Configure the TeamForge installation repository</button> -->

<!-- <div class="collapse in" id="installRepoConfig" markdown="1"> -->
<!-- <div class="well well-lg" markdown="1"> -->
	<h3>TeamForge Installation Repository Configuration for Sites with Internet Access</h3>

	1. Contact the [Digital.ai Support](https://support.digital.ai) and download the TeamForge VAR::identifiers.teamforge installation repository package to `/tmp`.
	2. Install the repository package.
	   ```shell
	   yum install -y /tmp/VAR::identifiers.teamforge_noarch_repo_name
	   ````
	3. Refresh your repository cache.
	   ```shell
	   yum clean all
	   ````

	<h3>TeamForge Installation Repository Configuration for Sites without Internet Access</h3>

	1. Contact the [Digital.ai Support](https://support.digital.ai) to get the auxiliary installer package for TeamForge VAR::identifiers.teamforge disconnected installation and save it in `/tmp`.
	   * VAR::identifiers.rhel_centos_now 64 bit: `VAR::identifiers.teamforge_rhel_centos_now_64_bit_dm_repo_name`
	2. Unpack the disconnected installation package.
	   ```shell
	   rpm -ivh <package-name>
	   ````
<!-- 1. If you are installing TeamForge VAR::identifiers.teamforge on VAR::identifiers.rhel_centos_now, contact the [Digital.ai Support](https://support.digital.ai) to get the `python-modules-sources-el8.zip` file and unzip it to `/opt/collabnet/teamforge/service/reviewboard/resources/SOURCES/python-modules-sources`.
   ```shell
   unzip python-modules-sources-el8.zip -d /opt/collabnet/teamforge/service/reviewboard/resources/SOURCES/python-modules-sources
   ```` -->
	3. If not mounted already, mount the RHEL/CentOS installation DVD.

	   The DVD contains the necessary software and utilities required for installing TeamForge without internet access. In the following commands, replace "cdrom" with the identifier for your server's CD/DVD drive, if necessary.
	   ```shell
	   cd /media/
	   mkdir cdrom
	   mount /dev/cdrom ./cdrom/
	   ````

	   If there are any spaces in the automount, unmount it first and mount it as a filepath, with no spaces.
	4. Create a yum configuration file that points to the RHEL/CentOS installation DVD.
	   ```shell
	   vi /etc/yum.repos.d/cdrom.repo
	   ````

	   Here's a sample yum configuration file.
	   ```shell
	   [RHEL-CDROM]
	   name=RHEL CDRom 			
	   baseurl=file:///media/cdrom/Server/
	   gpgfile=file:///media/cdrom/RPM-GPG-KEY-redhat-release 
	   enabled=1
	   gpgcheck=0
	   ````
	5. Verify your yum configuration files.
	   ```shell
	   yum list httpd
	   yum list apr
	   ````
<!-- </div> -->
