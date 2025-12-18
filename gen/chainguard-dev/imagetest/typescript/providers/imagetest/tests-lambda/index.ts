// https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests_lambda
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TestsLambdaConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ARN of the IAM role to use for the Lambda function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests_lambda#execution_role TestsLambda#execution_role}
  */
  readonly executionRole: string;
  /**
  * The image ref to deploy and test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests_lambda#image_ref TestsLambda#image_ref}
  */
  readonly imageRef: string;
  /**
  * The AWS region to deploy the test in. If not provided, the default region will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests_lambda#region TestsLambda#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests_lambda imagetest_tests_lambda}
*/
export class TestsLambda extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "imagetest_tests_lambda";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TestsLambda resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TestsLambda to import
  * @param importFromId The id of the existing TestsLambda that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests_lambda#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TestsLambda to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "imagetest_tests_lambda", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests_lambda imagetest_tests_lambda} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TestsLambdaConfig
  */
  public constructor(scope: Construct, id: string, config: TestsLambdaConfig) {
    super(scope, id, {
      terraformResourceType: 'imagetest_tests_lambda',
      terraformGeneratorMetadata: {
        providerName: 'imagetest',
        providerVersion: '0.0.109',
        providerVersionConstraint: '0.0.109'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._executionRole = config.executionRole;
    this._imageRef = config.imageRef;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // execution_role - computed: false, optional: false, required: true
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_ref - computed: false, optional: false, required: true
  private _imageRef?: string; 
  public get imageRef() {
    return this.getStringAttribute('image_ref');
  }
  public set imageRef(value: string) {
    this._imageRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRefInput() {
    return this._imageRef;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      execution_role: cdktf.stringToTerraform(this._executionRole),
      image_ref: cdktf.stringToTerraform(this._imageRef),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      execution_role: {
        value: cdktf.stringToHclTerraform(this._executionRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_ref: {
        value: cdktf.stringToHclTerraform(this._imageRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
