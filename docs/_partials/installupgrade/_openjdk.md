<!-- % capture openjdk % -->
TeamForge 16.10 and earlier versions use Oracle JDK. As TeamForge 19.2 and later use OpenJDK, the TeamForge installer checks if Oracle JDK is present when you upgrade to TeamForge 19.2 or later—and if found—would error out when you provision TeamForge. You must uninstall Oracle JDK and proceed.<br></br>

Run the following command to uninstall Oracle JDK:<br></br>

`rpm -e jdk1.8.0_74-1.8.0_74-fcs.x86_64`
<!-- % endcapture %
% include callout.html type="primary" content=openjdk % -->