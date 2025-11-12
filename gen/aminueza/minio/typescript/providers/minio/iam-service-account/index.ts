// https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/iam_service_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamServiceAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of service account (256 bytes max), can't be cleared once set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/iam_service_account#description IamServiceAccount#description}
  */
  readonly description?: string;
  /**
  * Disable service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/iam_service_account#disable_user IamServiceAccount#disable_user}
  */
  readonly disableUser?: boolean | cdktf.IResolvable;
  /**
  * Expiration of service account in RFC3339 format. Must be between NOW+15min & NOW+365d. If not set, the service account will not expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/iam_service_account#expiration IamServiceAccount#expiration}
  */
  readonly expiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/iam_service_account#id IamServiceAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of service account (32 bytes max), can't be cleared once set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/iam_service_account#name IamServiceAccount#name}
  */
  readonly name?: string;
  /**
  * policy of service account as encoded JSON string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/iam_service_account#policy IamServiceAccount#policy}
  */
  readonly policy?: string;
  /**
  * User the service account will be created for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/iam_service_account#target_user IamServiceAccount#target_user}
  */
  readonly targetUser: string;
  /**
  * rotate secret key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/iam_service_account#update_secret IamServiceAccount#update_secret}
  */
  readonly updateSecret?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/iam_service_account minio_iam_service_account}
*/
export class IamServiceAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "minio_iam_service_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamServiceAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamServiceAccount to import
  * @param importFromId The id of the existing IamServiceAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/iam_service_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamServiceAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "minio_iam_service_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/iam_service_account minio_iam_service_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamServiceAccountConfig
  */
  public constructor(scope: Construct, id: string, config: IamServiceAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'minio_iam_service_account',
      terraformGeneratorMetadata: {
        providerName: 'minio',
        providerVersion: '3.11.4',
        providerVersionConstraint: '3.11.4'
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
    this._disableUser = config.disableUser;
    this._expiration = config.expiration;
    this._id = config.id;
    this._name = config.name;
    this._policy = config.policy;
    this._targetUser = config.targetUser;
    this._updateSecret = config.updateSecret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
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

  // disable_user - computed: false, optional: true, required: false
  private _disableUser?: boolean | cdktf.IResolvable; 
  public get disableUser() {
    return this.getBooleanAttribute('disable_user');
  }
  public set disableUser(value: boolean | cdktf.IResolvable) {
    this._disableUser = value;
  }
  public resetDisableUser() {
    this._disableUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUserInput() {
    return this._disableUser;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_user - computed: false, optional: false, required: true
  private _targetUser?: string; 
  public get targetUser() {
    return this.getStringAttribute('target_user');
  }
  public set targetUser(value: string) {
    this._targetUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUserInput() {
    return this._targetUser;
  }

  // update_secret - computed: false, optional: true, required: false
  private _updateSecret?: boolean | cdktf.IResolvable; 
  public get updateSecret() {
    return this.getBooleanAttribute('update_secret');
  }
  public set updateSecret(value: boolean | cdktf.IResolvable) {
    this._updateSecret = value;
  }
  public resetUpdateSecret() {
    this._updateSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSecretInput() {
    return this._updateSecret;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      disable_user: cdktf.booleanToTerraform(this._disableUser),
      expiration: cdktf.stringToTerraform(this._expiration),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy: cdktf.stringToTerraform(this._policy),
      target_user: cdktf.stringToTerraform(this._targetUser),
      update_secret: cdktf.booleanToTerraform(this._updateSecret),
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
      disable_user: {
        value: cdktf.booleanToHclTerraform(this._disableUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expiration: {
        value: cdktf.stringToHclTerraform(this._expiration),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_user: {
        value: cdktf.stringToHclTerraform(this._targetUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_secret: {
        value: cdktf.booleanToHclTerraform(this._updateSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
