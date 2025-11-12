// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityUserTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Activate the feature of user tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user_token#enabled SecurityUserToken#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Number of days for which you want user tokens to remain valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user_token#expiration_days SecurityUserToken#expiration_days}
  */
  readonly expirationDays?: number;
  /**
  * Set user tokens expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user_token#expiration_enabled SecurityUserToken#expiration_enabled}
  */
  readonly expirationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Require user tokens for repository authentication. This does not effect UI access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user_token#protect_content SecurityUserToken#protect_content}
  */
  readonly protectContent?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user_token nexus_security_user_token}
*/
export class SecurityUserToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_security_user_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityUserToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityUserToken to import
  * @param importFromId The id of the existing SecurityUserToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityUserToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_security_user_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user_token nexus_security_user_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityUserTokenConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityUserTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_security_user_token',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._expirationDays = config.expirationDays;
    this._expirationEnabled = config.expirationEnabled;
    this._protectContent = config.protectContent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expiration_days - computed: false, optional: true, required: false
  private _expirationDays?: number; 
  public get expirationDays() {
    return this.getNumberAttribute('expiration_days');
  }
  public set expirationDays(value: number) {
    this._expirationDays = value;
  }
  public resetExpirationDays() {
    this._expirationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDaysInput() {
    return this._expirationDays;
  }

  // expiration_enabled - computed: false, optional: true, required: false
  private _expirationEnabled?: boolean | cdktf.IResolvable; 
  public get expirationEnabled() {
    return this.getBooleanAttribute('expiration_enabled');
  }
  public set expirationEnabled(value: boolean | cdktf.IResolvable) {
    this._expirationEnabled = value;
  }
  public resetExpirationEnabled() {
    this._expirationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationEnabledInput() {
    return this._expirationEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // protect_content - computed: false, optional: true, required: false
  private _protectContent?: boolean | cdktf.IResolvable; 
  public get protectContent() {
    return this.getBooleanAttribute('protect_content');
  }
  public set protectContent(value: boolean | cdktf.IResolvable) {
    this._protectContent = value;
  }
  public resetProtectContent() {
    this._protectContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectContentInput() {
    return this._protectContent;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      expiration_days: cdktf.numberToTerraform(this._expirationDays),
      expiration_enabled: cdktf.booleanToTerraform(this._expirationEnabled),
      protect_content: cdktf.booleanToTerraform(this._protectContent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expiration_days: {
        value: cdktf.numberToHclTerraform(this._expirationDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expiration_enabled: {
        value: cdktf.booleanToHclTerraform(this._expirationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protect_content: {
        value: cdktf.booleanToHclTerraform(this._protectContent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
