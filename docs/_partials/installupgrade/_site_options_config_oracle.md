<!-- <button type="button" class="btn btn-primary btn-xs" data-toggle="collapse" href="#siteOptionsConfiguration" aria-expanded="false" aria-controls="siteOptionsConfiguration">Site options configuration contd...</button>
   <div class="collapse" id="siteOptionsConfiguration" markdown="1">
   <div class="well well-lg" markdown="1"> -->
   <h3 markdown="1">SSL Tokens</h3>
   SSL is enabled by default and a self-signed certificate is auto-generated. Use the following tokens to adjust this behavior. 

   :::note 
   TeamForge runs only with SSL from TeamForge 19.2. Hence the `site-options.conf` token option `SSL=off` is not supported any more. TeamForge provision fails and throws an error, if `SSL` is set to `off`.
   :::

   ```shell
   SSL_CERT_FILE=
   SSL_KEY_FILE=
   SSL_CHAIN_FILE=
   ````
   * To generate the SSL certificates, see [Generate SSL certificates](../generatesslcerts).
   * Have the custom SSL certificate and private key for custom SSL certificate in place and provide their absolute paths in these tokens. SSL_CHAIN_FILE (intermediate certificate) is optional.


   <h3 markdown="1">Password Tokens</h3>
   * TeamForge 7.1 and later support automatic password creation. See [AUTO_DATA](../siteoptiontokens#auto_data) for more information.
   * Set the [REQUIRE_PASSWORD_SECURITY](../siteoptiontokens#REQUIRE_PASSWORD_SECURITY) token to `true` to enforce password security policy for the site.

     If the token [REQUIRE_PASSWORD_SECURITY](../siteoptiontokens#REQUIRE_PASSWORD_SECURITY) is enabled, then set a value for the token, [PASSWORD_CONTROL_EFFECTIVE_DATE](../siteoptiontokens#PASSWORD_CONTROL_EFFECTIVE_DATE).

     :::warning 
     The Password Control Kit (PCK) disables, deletes or expires user accounts that don't meet the password security requirements starting from the date set for the `PASSWORD_CONTROL_EFFECTIVE_DATE` token. If a date is not set, the PCK disables, deletes or expires user accounts immediately. See [PASSWORD_CONTROL_EFFECTIVE_DATE](../siteoptiontokens#PASSWORD_CONTROL_EFFECTIVE_DATE) for more information.
     :::

     You can also set the following tokens to enforce a more stricter password policy:
     * [MINIMUM_PASSWORD_LENGTH](../siteoptiontokens#MINIMUM_PASSWORD_LENGTH)
     * [MAX_PASSWORD_LENGTH](../siteoptiontokens#MAX_PASSWORD_LENGTH)
     * [PASSWORD_REQUIRES_NUMBER](../siteoptiontokens#PASSWORD_REQUIRES_NUMBER)
     * [PASSWORD_REQUIRES_NON_ALPHANUM](../siteoptiontokens#PASSWORD_REQUIRES_NON_ALPHANUM)
     * [PASSWORD_REQUIRES_MIXED_CASE](../siteoptiontokens#PASSWORD_REQUIRES_MIXED_CASE)
     * [REQUIRE_PASSWORD_SECURITY](../siteoptiontokens#REQUIRE_PASSWORD_SECURITY)
     * [LOGIN_ATTEMPT_LOCK](../siteoptiontokens#LOGIN_ATTEMPT_LOCK)
     * [PASSWORD_HISTORY_AGE](../siteoptiontokens#PASSWORD_HISTORY_AGE)
     * [ALLOW_PASSWORD_DICTIONARY_WORD](../siteoptiontokens#ALLOW_PASSWORD_DICTIONARY_WORD)

    * If the token [REQUIRE_RANDOM_ADMIN_PASSWORD](../siteoptiontokens#require_random_admin_password) is already set to `true`, then set the token [ADMIN_EMAIL](../siteoptiontokens#admin_email) with a valid email address.
     ```shell
     ADMIN_EMAIL=root@{__APPLICATION_HOST__}
     ````
    * If you have LDAP set up for external authentication, you must set the [REQUIRE_USER_PASSWORD_CHANGE](../siteoptiontokens#REQUIRE_USER_PASSWORD_CHANGE) site options token to `false`.

   <h3 markdown="1">Prevent Cross-site Scripting</h3>
   An attacker could potentially upload an HTML page to TeamForge that contains active code, such as JavaScript. This active code would then be executed by clients' browsers when they view the page, which can harm the system.

   To prevent an attack of this sort, you can specify whether or not HTML code is displayed in TeamForge. This flag applies to all documents, tracker, task, and forum attachments, and files in the file release system.

   Set the SAFE_DOWNLOAD_MODE token according to your requirements. For more information, see [SAFE_DOWNLOAD_MODE](../siteoptiontokens#SAFE_DOWNLOAD_MODE).

   <h3 markdown="1">JAVA_OPTS</h3>
   Configure the JBOSS_JAVA_OPTS site-options.conf token. See [JBOSS_JAVA_OPTS](../siteoptiontokens#jboss_java_opts).

   :::note 
   All JVM parameters but `-Xms1024m` and `-Xmx2048m` have been hard-coded in the TeamForge core application. You need not manually configure any other parameter (such as `-XX:MaxMetaspaceSize=512m` `-XX:ReservedCodeCacheSize=128M` `-server -XX:+HeapDumpOnOutOfMemoryError` `-Djsse.enableSNIExtension=false` `-Dsun.rmi.dgc.client.gcInterval=600000` `-Dsun.rmi.dgc.server.gcInterval=600000`) in the site-options.conf file.
   :::

   <!-- (See: https://forge.collab.net/sf/go/artf300770) -->
   TeamForge 18.1 (and later) supports Java 9. As a result of changes to the logging framework in Java 9, the `PrintGCDetails` and `PrintGCTimeStamps` logging options are no longer supported. Remove these options from the following tokens while upgrading to TeamForge 18.1 or later.

   * JBOSS_JAVA_OPTS
   * PHOENIX_JAVA_OPTS
   * INTEGRATION_JAVA_OPTS
   * ETL_JAVA_OPTS
   * ELASTICSEARCH_JAVA_OPTS

   TeamForge provision fails on sites that use these options post upgrade to TeamForge 18.1.

   <h4 markdown="1">Save the `site-options.conf` file.</h4>

