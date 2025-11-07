// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetGcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gcp#description TargetGcp#description}
  */
  readonly description?: string;
  /**
  * Base64-encoded service account private key text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gcp#gcp_key TargetGcp#gcp_key}
  */
  readonly gcpKey?: string;
  /**
  * GCP service account email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gcp#gcp_sa_email TargetGcp#gcp_sa_email}
  */
  readonly gcpSaEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gcp#id TargetGcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key name. The key will be used to encrypt the target secret value. If key name is not specified, the account default protection key is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gcp#key TargetGcp#key}
  */
  readonly key?: string;
  /**
  * Target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gcp#name TargetGcp#name}
  */
  readonly name: string;
  /**
  * Use the GW's Cloud IAM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gcp#use_gw_cloud_identity TargetGcp#use_gw_cloud_identity}
  */
  readonly useGwCloudIdentity?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gcp akeyless_target_gcp}
*/
export class TargetGcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_target_gcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TargetGcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TargetGcp to import
  * @param importFromId The id of the existing TargetGcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TargetGcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_target_gcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_gcp akeyless_target_gcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetGcpConfig
  */
  public constructor(scope: Construct, id: string, config: TargetGcpConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_target_gcp',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._gcpKey = config.gcpKey;
    this._gcpSaEmail = config.gcpSaEmail;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._useGwCloudIdentity = config.useGwCloudIdentity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // gcp_key - computed: false, optional: true, required: false
  private _gcpKey?: string; 
  public get gcpKey() {
    return this.getStringAttribute('gcp_key');
  }
  public set gcpKey(value: string) {
    this._gcpKey = value;
  }
  public resetGcpKey() {
    this._gcpKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpKeyInput() {
    return this._gcpKey;
  }

  // gcp_sa_email - computed: false, optional: true, required: false
  private _gcpSaEmail?: string; 
  public get gcpSaEmail() {
    return this.getStringAttribute('gcp_sa_email');
  }
  public set gcpSaEmail(value: string) {
    this._gcpSaEmail = value;
  }
  public resetGcpSaEmail() {
    this._gcpSaEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSaEmailInput() {
    return this._gcpSaEmail;
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
      description: cdktf.stringToTerraform(this._description),
      gcp_key: cdktf.stringToTerraform(this._gcpKey),
      gcp_sa_email: cdktf.stringToTerraform(this._gcpSaEmail),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      use_gw_cloud_identity: cdktf.booleanToTerraform(this._useGwCloudIdentity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_key: {
        value: cdktf.stringToHclTerraform(this._gcpKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_sa_email: {
        value: cdktf.stringToHclTerraform(this._gcpSaEmail),
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
