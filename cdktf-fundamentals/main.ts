import { Construct } from "constructs";
import { App, TerraformOutput, TerraformStack } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // define resources here
    new TerraformOutput(this, "helloCDKTF", {
      value: "Hello, CDKTF!",
    })
  }
}

const app = new App();
new MyStack(app, "cdktf-fundamentals");
app.synth();
