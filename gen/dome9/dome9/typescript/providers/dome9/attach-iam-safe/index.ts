// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/attach_iam_safe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AttachIamSafeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/attach_iam_safe#aws_cloud_account_id AttachIamSafe#aws_cloud_account_id}
  */
  readonly awsCloudAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/attach_iam_safe#aws_group_arn AttachIamSafe#aws_group_arn}
  */
  readonly awsGroupArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/attach_iam_safe#aws_policy_arn AttachIamSafe#aws_policy_arn}
  */
  readonly awsPolicyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/attach_iam_safe#id AttachIamSafe#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/attach_iam_safe dome9_attach_iam_safe}
*/
export class AttachIamSafe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_attach_iam_safe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AttachIamSafe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AttachIamSafe to import
  * @param importFromId The id of the existing AttachIamSafe that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/attach_iam_safe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AttachIamSafe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_attach_iam_safe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/attach_iam_safe dome9_attach_iam_safe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AttachIamSafeConfig
  */
  public constructor(scope: Construct, id: string, config: AttachIamSafeConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_attach_iam_safe',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4',
        providerVersionConstraint: '1.40.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsCloudAccountId = config.awsCloudAccountId;
    this._awsGroupArn = config.awsGroupArn;
    this._awsPolicyArn = config.awsPolicyArn;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_cloud_account_id - computed: false, optional: false, required: true
  private _awsCloudAccountId?: string; 
  public get awsCloudAccountId() {
    return this.getStringAttribute('aws_cloud_account_id');
  }
  public set awsCloudAccountId(value: string) {
    this._awsCloudAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCloudAccountIdInput() {
    return this._awsCloudAccountId;
  }

  // aws_group_arn - computed: false, optional: false, required: true
  private _awsGroupArn?: string; 
  public get awsGroupArn() {
    return this.getStringAttribute('aws_group_arn');
  }
  public set awsGroupArn(value: string) {
    this._awsGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsGroupArnInput() {
    return this._awsGroupArn;
  }

  // aws_policy_arn - computed: false, optional: false, required: true
  private _awsPolicyArn?: string; 
  public get awsPolicyArn() {
    return this.getStringAttribute('aws_policy_arn');
  }
  public set awsPolicyArn(value: string) {
    this._awsPolicyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPolicyArnInput() {
    return this._awsPolicyArn;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_cloud_account_id: cdktf.stringToTerraform(this._awsCloudAccountId),
      aws_group_arn: cdktf.stringToTerraform(this._awsGroupArn),
      aws_policy_arn: cdktf.stringToTerraform(this._awsPolicyArn),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_cloud_account_id: {
        value: cdktf.stringToHclTerraform(this._awsCloudAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_group_arn: {
        value: cdktf.stringToHclTerraform(this._awsGroupArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_policy_arn: {
        value: cdktf.stringToHclTerraform(this._awsPolicyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
