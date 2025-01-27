## Reinitialize TeamForge
1. Reinitialize TeamForge on the Review Board Server. 
   ```shell
   teamforge reinitialize
   ````

2. During `teamforge provision`, the `Register SCM integration` process fails on sites that use self-signed certificates. Perform these steps in such cases.
   1. Restart JBoss on the TeamForge Application Server. 
      ```shell
      teamforge restart -s jboss
      ````
   2. Reinitialize TeamForge on the SCM Server. 
      ```shell
      teamforge reinitialize
      ```
	<!-- % capture separategitbox % -->
	**Do you have Git and other SCM tools (SVN) on two separate servers?**<br></br>
	Git and other SCM tools (SVN) are typically installed on a server dedicated for SCM. However, if you have Git and SCM (SVN) installed on two separate servers, restart Jboss on the TeamForge Application Server and reinitialize TeamForge on the SCM Server (SVN server) as discussed earlier. In addition, you must also restart TeamForge on the Git Server.<br></br>

	Restart TeamForge on the Git Server: `teamforge restart`
	<!-- % endcapture %
	% include callout.html type="primary" content=separategitbox % -->