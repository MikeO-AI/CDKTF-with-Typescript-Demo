## Install the AWS Provider
   ```
   npm install @cdktf/provider-aws
   ```

## Run the cdktf synth command to validate your changes. This will generate the cdk.tf.json file and confirm that your script is syntactically correct.

   ```
   cdktf synth
   ```

`Do NOT change the stack name, it should be MyStack as default value.`

## Deploy the project:
   ```
    cd cdktf_aws/
    cdktf deploy --auto-approve
    ...
    Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
    No outputs found.
    ```
    