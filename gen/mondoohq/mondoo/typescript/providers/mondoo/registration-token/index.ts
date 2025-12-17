// https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/registration_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegistrationTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/registration_token#description RegistrationToken#description}
  */
  readonly description?: string;
  /**
  * The date and time when the token will expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/registration_token#expires_at RegistrationToken#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * The duration after which the token will expire. Format: 1h, 1d, 1w, 1m, 1y
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/registration_token#expires_in RegistrationToken#expires_in}
  */
  readonly expiresIn?: string;
  /**
  * If set to true, the token will not expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/registration_token#no_expiration RegistrationToken#no_expiration}
  */
  readonly noExpiration?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the token is revoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/registration_token#revoked RegistrationToken#revoked}
  */
  readonly revoked?: boolean | cdktf.IResolvable;
  /**
  * Identifier of the Mondoo space in which to create the token. If there is no space ID, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/registration_token#space_id RegistrationToken#space_id}
  */
  readonly spaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/registration_token mondoo_registration_token}
*/
export class RegistrationToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_registration_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RegistrationToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RegistrationToken to import
  * @param importFromId The id of the existing RegistrationToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/registration_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RegistrationToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_registration_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/registration_token mondoo_registration_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegistrationTokenConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RegistrationTokenConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mondoo_registration_token',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.35.2',
        providerVersionConstraint: '0.35.2'
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
    this._expiresAt = config.expiresAt;
    this._expiresIn = config.expiresIn;
    this._noExpiration = config.noExpiration;
    this._revoked = config.revoked;
    this._spaceId = config.spaceId;
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

  // expires_at - computed: true, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // expires_in - computed: false, optional: true, required: false
  private _expiresIn?: string; 
  public get expiresIn() {
    return this.getStringAttribute('expires_in');
  }
  public set expiresIn(value: string) {
    this._expiresIn = value;
  }
  public resetExpiresIn() {
    this._expiresIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInInput() {
    return this._expiresIn;
  }

  // mrn - computed: true, optional: false, required: false
  public get mrn() {
    return this.getStringAttribute('mrn');
  }

  // no_expiration - computed: false, optional: true, required: false
  private _noExpiration?: boolean | cdktf.IResolvable; 
  public get noExpiration() {
    return this.getBooleanAttribute('no_expiration');
  }
  public set noExpiration(value: boolean | cdktf.IResolvable) {
    this._noExpiration = value;
  }
  public resetNoExpiration() {
    this._noExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noExpirationInput() {
    return this._noExpiration;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // revoked - computed: true, optional: true, required: false
  private _revoked?: boolean | cdktf.IResolvable; 
  public get revoked() {
    return this.getBooleanAttribute('revoked');
  }
  public set revoked(value: boolean | cdktf.IResolvable) {
    this._revoked = value;
  }
  public resetRevoked() {
    this._revoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedInput() {
    return this._revoked;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      expires_in: cdktf.stringToTerraform(this._expiresIn),
      no_expiration: cdktf.booleanToTerraform(this._noExpiration),
      revoked: cdktf.booleanToTerraform(this._revoked),
      space_id: cdktf.stringToTerraform(this._spaceId),
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
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires_in: {
        value: cdktf.stringToHclTerraform(this._expiresIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_expiration: {
        value: cdktf.booleanToHclTerraform(this._noExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      revoked: {
        value: cdktf.booleanToHclTerraform(this._revoked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
