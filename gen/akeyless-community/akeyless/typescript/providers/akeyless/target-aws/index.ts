// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS secret access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_aws#access_key TargetAws#access_key}
  */
  readonly accessKey?: string;
  /**
  * AWS access key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_aws#access_key_id TargetAws#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_aws#description TargetAws#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_aws#id TargetAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key name. The key will be used to encrypt the target secret value. If key name is not specified, the account default protection key is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_aws#key TargetAws#key}
  */
  readonly key?: string;
  /**
  * Target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_aws#name TargetAws#name}
  */
  readonly name: string;
  /**
  * AWS region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_aws#region TargetAws#region}
  */
  readonly region?: string;
  /**
  * Required only for temporary security credentials retrieved using STS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_aws#session_token TargetAws#session_token}
  */
  readonly sessionToken?: string;
  /**
  * Use the GW's Cloud IAM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_aws#use_gw_cloud_identity TargetAws#use_gw_cloud_identity}
  */
  readonly useGwCloudIdentity?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_aws akeyless_target_aws}
*/
export class TargetAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_target_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TargetAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TargetAws to import
  * @param importFromId The id of the existing TargetAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TargetAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_target_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_aws akeyless_target_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetAwsConfig
  */
  public constructor(scope: Construct, id: string, config: TargetAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_target_aws',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKey = config.accessKey;
    this._accessKeyId = config.accessKeyId;
    this._description = config.description;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._region = config.region;
    this._sessionToken = config.sessionToken;
    this._useGwCloudIdentity = config.useGwCloudIdentity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // region - computed: false, optional: true, required: false
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

  // session_token - computed: false, optional: true, required: false
  private _sessionToken?: string; 
  public get sessionToken() {
    return this.getStringAttribute('session_token');
  }
  public set sessionToken(value: string) {
    this._sessionToken = value;
  }
  public resetSessionToken() {
    this._sessionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTokenInput() {
    return this._sessionToken;
  }

  // use_gw_cloud_identity - computed: false, optional: true, required: false
  private _useGwCloudIdentity?: boolean | cdktf.IResolvable; 
  public get useGwCloudIdentity() {
    return this.getBooleanAttribute('use_gw_cloud_identity');
  }
  public set useGwCloudIdentity(value: boolean | cdktf.IResolvable) {
    this._useGwCloudIdentity = value;
  }
  public resetUseGwCloudIdentity() {
    this._useGwCloudIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGwCloudIdentityInput() {
    return this._useGwCloudIdentity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      access_key_id: cdktf.stringToTerraform(this._accessKeyId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      session_token: cdktf.stringToTerraform(this._sessionToken),
      use_gw_cloud_identity: cdktf.booleanToTerraform(this._useGwCloudIdentity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_key_id: {
        value: cdktf.stringToHclTerraform(this._accessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_token: {
        value: cdktf.stringToHclTerraform(this._sessionToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_gw_cloud_identity: {
        value: cdktf.booleanToHclTerraform(this._useGwCloudIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
