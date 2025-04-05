import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { AwsProvider } from "@cdktf/provider-aws/lib/provider";
import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Set AWS provider to use the us-west-2 region
    new AwsProvider(this, 'AWS', {
      region: 'us-west-2',
    });

    // Create S3 bucket with a name starting with "my-first-cdktf-bucket-"
    new S3Bucket(this, 'MyFirstBucket', {
      bucket: `my-first-cdktf-bucket-${Math.floor(Math.random() * 100000)}`, // Unique identifier
    });
  }
}

const app = new App();
new MyStack(app, "MyStack");
app.synth();