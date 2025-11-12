// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuickcreateAwsWorkspacesAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Access Key associated with the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_account#aws_access_key_id QuickcreateAwsWorkspacesAccount#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * Indicates if the associated AWS EDC account has BYOL support enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_account#aws_byol_feature_enabled QuickcreateAwsWorkspacesAccount#aws_byol_feature_enabled}
  */
  readonly awsByolFeatureEnabled?: boolean | cdktf.IResolvable;
  /**
  * AWS region the account is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_account#aws_region QuickcreateAwsWorkspacesAccount#aws_region}
  */
  readonly awsRegion: string;
  /**
  * ARN of the role to assume when making requests in this account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_account#aws_role_arn QuickcreateAwsWorkspacesAccount#aws_role_arn}
  */
  readonly awsRoleArn?: string;
  /**
  * Secret associated with the Access Key for the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_account#aws_secret_access_key QuickcreateAwsWorkspacesAccount#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * Name of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_account#name QuickcreateAwsWorkspacesAccount#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_account citrix_quickcreate_aws_workspaces_account}
*/
export class QuickcreateAwsWorkspacesAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_quickcreate_aws_workspaces_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuickcreateAwsWorkspacesAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuickcreateAwsWorkspacesAccount to import
  * @param importFromId The id of the existing QuickcreateAwsWorkspacesAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuickcreateAwsWorkspacesAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_quickcreate_aws_workspaces_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_account citrix_quickcreate_aws_workspaces_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuickcreateAwsWorkspacesAccountConfig
  */
  public constructor(scope: Construct, id: string, config: QuickcreateAwsWorkspacesAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_quickcreate_aws_workspaces_account',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccessKeyId = config.awsAccessKeyId;
    this._awsByolFeatureEnabled = config.awsByolFeatureEnabled;
    this._awsRegion = config.awsRegion;
    this._awsRoleArn = config.awsRoleArn;
    this._awsSecretAccessKey = config.awsSecretAccessKey;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_access_key_id - computed: false, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_account - computed: true, optional: false, required: false
  public get awsAccount() {
    return this.getStringAttribute('aws_account');
  }

  // aws_byol_feature_enabled - computed: true, optional: true, required: false
  private _awsByolFeatureEnabled?: boolean | cdktf.IResolvable; 
  public get awsByolFeatureEnabled() {
    return this.getBooleanAttribute('aws_byol_feature_enabled');
  }
  public set awsByolFeatureEnabled(value: boolean | cdktf.IResolvable) {
    this._awsByolFeatureEnabled = value;
  }
  public resetAwsByolFeatureEnabled() {
    this._awsByolFeatureEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsByolFeatureEnabledInput() {
    return this._awsByolFeatureEnabled;
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_role_arn - computed: false, optional: true, required: false
  private _awsRoleArn?: string; 
  public get awsRoleArn() {
    return this.getStringAttribute('aws_role_arn');
  }
  public set awsRoleArn(value: string) {
    this._awsRoleArn = value;
  }
  public resetAwsRoleArn() {
    this._awsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleArnInput() {
    return this._awsRoleArn;
  }

  // aws_secret_access_key - computed: false, optional: true, required: false
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  public resetAwsSecretAccessKey() {
    this._awsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_access_key_id: cdktf.stringToTerraform(this._awsAccessKeyId),
      aws_byol_feature_enabled: cdktf.booleanToTerraform(this._awsByolFeatureEnabled),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      aws_role_arn: cdktf.stringToTerraform(this._awsRoleArn),
      aws_secret_access_key: cdktf.stringToTerraform(this._awsSecretAccessKey),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_access_key_id: {
        value: cdktf.stringToHclTerraform(this._awsAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_byol_feature_enabled: {
        value: cdktf.booleanToHclTerraform(this._awsByolFeatureEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_role_arn: {
        value: cdktf.stringToHclTerraform(this._awsRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_secret_access_key: {
        value: cdktf.stringToHclTerraform(this._awsSecretAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
