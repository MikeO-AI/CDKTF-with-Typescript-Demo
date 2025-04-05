## Change Package Manager to YARN (Optional)

1. Delete package.json
2. NPM is slow and does not have modern tooling. Run the following commands
   ```
   corepack prepare yarn@stable --activate
   touch yarn.lock
   yarn config set nodeLinker node-modules
   yarn install
   ```
3. Add cdktf-cli to Project (Optional). This is great for CICD and testing while being explicit what you're using in your project -- not just globally. 
   ```
   # Install cdktf-cli using YARN
   yarn add -D cdktf-cli

   # You can remove CDKTF globally
   npm uninstall --global cdktf-cli
   ```
4. Run the CDKTF Init Validation
   ```
   yarn cdktf synth
   ```
5. Deploy the generated Terraform configuration files to specified cloud provider or infrastructure environment. 
   ```
   yarn cdktf deploy
   ```