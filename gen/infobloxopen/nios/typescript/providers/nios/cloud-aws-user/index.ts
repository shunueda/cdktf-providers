// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAwsUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique Access Key ID of this AWS user. Maximum 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_user#access_key_id CloudAwsUser#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * The AWS Account ID of this AWS user. Maximum 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_user#account_id CloudAwsUser#account_id}
  */
  readonly accountId: string;
  /**
  * Indicates if gov cloud is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_user#govcloud_enabled CloudAwsUser#govcloud_enabled}
  */
  readonly govcloudEnabled?: boolean | cdktf.IResolvable;
  /**
  * The AWS user name. Maximum 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_user#name CloudAwsUser#name}
  */
  readonly name: string;
  /**
  * The NIOS user name mapped to this AWS user. Maximum 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_user#nios_user_name CloudAwsUser#nios_user_name}
  */
  readonly niosUserName?: string;
  /**
  * The Secret Access Key for the Access Key ID of this user. Maximum 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_user#secret_access_key CloudAwsUser#secret_access_key}
  */
  readonly secretAccessKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_user nios_cloud_aws_user}
*/
export class CloudAwsUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_cloud_aws_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAwsUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAwsUser to import
  * @param importFromId The id of the existing CloudAwsUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAwsUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_cloud_aws_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_user nios_cloud_aws_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAwsUserConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAwsUserConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_cloud_aws_user',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKeyId = config.accessKeyId;
    this._accountId = config.accountId;
    this._govcloudEnabled = config.govcloudEnabled;
    this._name = config.name;
    this._niosUserName = config.niosUserName;
    this._secretAccessKey = config.secretAccessKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // govcloud_enabled - computed: true, optional: true, required: false
  private _govcloudEnabled?: boolean | cdktf.IResolvable; 
  public get govcloudEnabled() {
    return this.getBooleanAttribute('govcloud_enabled');
  }
  public set govcloudEnabled(value: boolean | cdktf.IResolvable) {
    this._govcloudEnabled = value;
  }
  public resetGovcloudEnabled() {
    this._govcloudEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get govcloudEnabledInput() {
    return this._govcloudEnabled;
  }

  // last_used - computed: true, optional: false, required: false
  public get lastUsed() {
    return this.getNumberAttribute('last_used');
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

  // nios_user_name - computed: true, optional: true, required: false
  private _niosUserName?: string; 
  public get niosUserName() {
    return this.getStringAttribute('nios_user_name');
  }
  public set niosUserName(value: string) {
    this._niosUserName = value;
  }
  public resetNiosUserName() {
    this._niosUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get niosUserNameInput() {
    return this._niosUserName;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_id: cdktf.stringToTerraform(this._accessKeyId),
      account_id: cdktf.stringToTerraform(this._accountId),
      govcloud_enabled: cdktf.booleanToTerraform(this._govcloudEnabled),
      name: cdktf.stringToTerraform(this._name),
      nios_user_name: cdktf.stringToTerraform(this._niosUserName),
      secret_access_key: cdktf.stringToTerraform(this._secretAccessKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_id: {
        value: cdktf.stringToHclTerraform(this._accessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      govcloud_enabled: {
        value: cdktf.booleanToHclTerraform(this._govcloudEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nios_user_name: {
        value: cdktf.stringToHclTerraform(this._niosUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_access_key: {
        value: cdktf.stringToHclTerraform(this._secretAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
