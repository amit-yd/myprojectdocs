find . -type f -name "config.xml" -exec sed -i 's/net.collab.orchestrate.BuildNotifier/hudson.plugins.collabnet.orchestrate.BuildNotifier/g' {} +;
find . -type f -name "config.xml" -exec sed -i 's/plugin=\"Orchestrate-Jenkins-adapter@2.0\"/plugin=\"collabnet@2.0.2\"/g' {} +;
find . -type f -name "config.xml" -exec sed -i '/<ctfUrl>/,/<\/ctfPassword>/{;h;p;x;}' {} + ;
find . -type f -name "config.xml" -exec sed -i '0,/<ctfUrl>/{s/<ctfUrl>/<url>/}' {} +;
find . -type f -name "config.xml" -exec sed -i '0,/<\/ctfUrl>/{s/<\/ctfUrl>/<\/url>/}' {} +;
find . -type f -name "config.xml" -exec sed -i '0,/<ctfUser>/{s/<ctfUser>/<username>/}' {} +;
find . -type f -name "config.xml" -exec sed -i '0,/<\/ctfUser>/{s/<\/ctfUser>/<\/username>/}' {} +;
find . -type f -name "config.xml" -exec sed -i '0,/<ctfPassword>/{s/<ctfPassword>/<password>/}' {} +;
find . -type f -name "config.xml" -exec sed -i '0,/<\/ctfPassword>/{s/<\/ctfPassword>/<\/password>/}' {} +;
find . -type f -name "config.xml" -exec sed -i '/<\/ctfUrl>/a <override__auth>true<\/override__auth>' {} +;
find . -type f -name "config.xml" -exec sed -i '/<\/ctfUrl>/a <useAssociationView>true<\/useAssociationView>' {} +;