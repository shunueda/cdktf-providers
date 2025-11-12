// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_oidc_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultOidcSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * lifetime duration of access tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_oidc_settings#access_token_lifetime DefaultOidcSettings#access_token_lifetime}
  */
  readonly accessTokenLifetime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_oidc_settings#id DefaultOidcSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * lifetime duration of id tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_oidc_settings#id_token_lifetime DefaultOidcSettings#id_token_lifetime}
  */
  readonly idTokenLifetime: string;
  /**
  * expiration duration of refresh tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_oidc_settings#refresh_token_expiration DefaultOidcSettings#refresh_token_expiration}
  */
  readonly refreshTokenExpiration: string;
  /**
  * expiration duration of idle refresh tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_oidc_settings#refresh_token_idle_expiration DefaultOidcSettings#refresh_token_idle_expiration}
  */
  readonly refreshTokenIdleExpiration: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_oidc_settings zitadel_default_oidc_settings}
*/
export class DefaultOidcSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_default_oidc_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultOidcSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultOidcSettings to import
  * @param importFromId The id of the existing DefaultOidcSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_oidc_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultOidcSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_default_oidc_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_oidc_settings zitadel_default_oidc_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultOidcSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultOidcSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_default_oidc_settings',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenLifetime = config.accessTokenLifetime;
    this._id = config.id;
    this._idTokenLifetime = config.idTokenLifetime;
    this._refreshTokenExpiration = config.refreshTokenExpiration;
    this._refreshTokenIdleExpiration = config.refreshTokenIdleExpiration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_lifetime - computed: false, optional: false, required: true
  private _accessTokenLifetime?: string; 
  public get accessTokenLifetime() {
    return this.getStringAttribute('access_token_lifetime');
  }
  public set accessTokenLifetime(value: string) {
    this._accessTokenLifetime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenLifetimeInput() {
    return this._accessTokenLifetime;
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

  // id_token_lifetime - computed: false, optional: false, required: true
  private _idTokenLifetime?: string; 
  public get idTokenLifetime() {
    return this.getStringAttribute('id_token_lifetime');
  }
  public set idTokenLifetime(value: string) {
    this._idTokenLifetime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenLifetimeInput() {
    return this._idTokenLifetime;
  }

  // refresh_token_expiration - computed: false, optional: false, required: true
  private _refreshTokenExpiration?: string; 
  public get refreshTokenExpiration() {
    return this.getStringAttribute('refresh_token_expiration');
  }
  public set refreshTokenExpiration(value: string) {
    this._refreshTokenExpiration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenExpirationInput() {
    return this._refreshTokenExpiration;
  }

  // refresh_token_idle_expiration - computed: false, optional: false, required: true
  private _refreshTokenIdleExpiration?: string; 
  public get refreshTokenIdleExpiration() {
    return this.getStringAttribute('refresh_token_idle_expiration');
  }
  public set refreshTokenIdleExpiration(value: string) {
    this._refreshTokenIdleExpiration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenIdleExpirationInput() {
    return this._refreshTokenIdleExpiration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_lifetime: cdktf.stringToTerraform(this._accessTokenLifetime),
      id: cdktf.stringToTerraform(this._id),
      id_token_lifetime: cdktf.stringToTerraform(this._idTokenLifetime),
      refresh_token_expiration: cdktf.stringToTerraform(this._refreshTokenExpiration),
      refresh_token_idle_expiration: cdktf.stringToTerraform(this._refreshTokenIdleExpiration),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_lifetime: {
        value: cdktf.stringToHclTerraform(this._accessTokenLifetime),
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
      id_token_lifetime: {
        value: cdktf.stringToHclTerraform(this._idTokenLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_token_expiration: {
        value: cdktf.stringToHclTerraform(this._refreshTokenExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_token_idle_expiration: {
        value: cdktf.stringToHclTerraform(this._refreshTokenIdleExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
