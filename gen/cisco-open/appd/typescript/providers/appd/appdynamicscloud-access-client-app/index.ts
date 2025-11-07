// https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_access_client_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppdynamicscloudAccessClientAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Supported authentication methods used to request OAuth tokens: `client_secret_basic` - The client credentials will be sent in the authorization header `client_secret_post` - The client credentials will be sent in the request body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_access_client_app#auth_type AppdynamicscloudAccessClientApp#auth_type}
  */
  readonly authType: string;
  /**
  * A user provided description of the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_access_client_app#description AppdynamicscloudAccessClientApp#description}
  */
  readonly description: string;
  /**
  * The display name for the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_access_client_app#display_name AppdynamicscloudAccessClientApp#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_access_client_app#id AppdynamicscloudAccessClientApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Revokes all the rotated client secrets of the specified client. Defaults to false. Please note that this cannot be used along with rotate_secret. If you wish to rotate the secret to a newer version and revoke the current one immediately, use the `revoke_previous_secret_in` and set it to `now`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_access_client_app#revoke_now AppdynamicscloudAccessClientApp#revoke_now}
  */
  readonly revokeNow?: boolean | cdktf.IResolvable;
  /**
  * Time duration of how long the previous secret should be active for. Acceptable values are `NOW`, `1D`, `3D`, `7D` and `30D`. Must be set when rotating a secret with rotate_secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_access_client_app#revoke_previous_secret_in AppdynamicscloudAccessClientApp#revoke_previous_secret_in}
  */
  readonly revokePreviousSecretIn?: string;
  /**
  * Rotates the client secret of the specified service client. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_access_client_app#rotate_secret AppdynamicscloudAccessClientApp#rotate_secret}
  */
  readonly rotateSecret?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_access_client_app appdynamicscloud_access_client_app}
*/
export class AppdynamicscloudAccessClientApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "appdynamicscloud_access_client_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppdynamicscloudAccessClientApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppdynamicscloudAccessClientApp to import
  * @param importFromId The id of the existing AppdynamicscloudAccessClientApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_access_client_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppdynamicscloudAccessClientApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "appdynamicscloud_access_client_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_access_client_app appdynamicscloud_access_client_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppdynamicscloudAccessClientAppConfig
  */
  public constructor(scope: Construct, id: string, config: AppdynamicscloudAccessClientAppConfig) {
    super(scope, id, {
      terraformResourceType: 'appdynamicscloud_access_client_app',
      terraformGeneratorMetadata: {
        providerName: 'appd',
        providerVersion: '0.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authType = config.authType;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._revokeNow = config.revokeNow;
    this._revokePreviousSecretIn = config.revokePreviousSecretIn;
    this._rotateSecret = config.rotateSecret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // has_rotated_secrets - computed: true, optional: false, required: false
  public get hasRotatedSecrets() {
    return this.getBooleanAttribute('has_rotated_secrets');
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

  // revoke_now - computed: false, optional: true, required: false
  private _revokeNow?: boolean | cdktf.IResolvable; 
  public get revokeNow() {
    return this.getBooleanAttribute('revoke_now');
  }
  public set revokeNow(value: boolean | cdktf.IResolvable) {
    this._revokeNow = value;
  }
  public resetRevokeNow() {
    this._revokeNow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeNowInput() {
    return this._revokeNow;
  }

  // revoke_previous_secret_in - computed: false, optional: true, required: false
  private _revokePreviousSecretIn?: string; 
  public get revokePreviousSecretIn() {
    return this.getStringAttribute('revoke_previous_secret_in');
  }
  public set revokePreviousSecretIn(value: string) {
    this._revokePreviousSecretIn = value;
  }
  public resetRevokePreviousSecretIn() {
    this._revokePreviousSecretIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokePreviousSecretInInput() {
    return this._revokePreviousSecretIn;
  }

  // rotate_secret - computed: false, optional: true, required: false
  private _rotateSecret?: boolean | cdktf.IResolvable; 
  public get rotateSecret() {
    return this.getBooleanAttribute('rotate_secret');
  }
  public set rotateSecret(value: boolean | cdktf.IResolvable) {
    this._rotateSecret = value;
  }
  public resetRotateSecret() {
    this._rotateSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateSecretInput() {
    return this._rotateSecret;
  }

  // rotated_secret_expires_at - computed: true, optional: false, required: false
  public get rotatedSecretExpiresAt() {
    return this.getStringAttribute('rotated_secret_expires_at');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_type: cdktf.stringToTerraform(this._authType),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      revoke_now: cdktf.booleanToTerraform(this._revokeNow),
      revoke_previous_secret_in: cdktf.stringToTerraform(this._revokePreviousSecretIn),
      rotate_secret: cdktf.booleanToTerraform(this._rotateSecret),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      revoke_now: {
        value: cdktf.booleanToHclTerraform(this._revokeNow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      revoke_previous_secret_in: {
        value: cdktf.stringToHclTerraform(this._revokePreviousSecretIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotate_secret: {
        value: cdktf.booleanToHclTerraform(this._rotateSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
