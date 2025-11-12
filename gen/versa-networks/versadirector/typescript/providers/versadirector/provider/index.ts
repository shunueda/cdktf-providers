// https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VersadirectorProviderConfig {
  /**
  * IP Address for versadirector, May also be provided via VERSA_DIRECTOR_HOST environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs#host VersadirectorProvider#host}
  */
  readonly host?: string;
  /**
  * OAUTH2 Client-ID for authentication, May also be provided via VERSA_DIRECTOR_OAUTH_CLIENT_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs#oauth_client_id VersadirectorProvider#oauth_client_id}
  */
  readonly oauthClientId?: string;
  /**
  * OAUTH2 Client-secret for authentication, May also be provided via VERSA_DIRECTOR_OAUTH_CLIENT_SECRET environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs#oauth_client_secret VersadirectorProvider#oauth_client_secret}
  */
  readonly oauthClientSecret?: string;
  /**
  * Grant-Type for OAUTH2 authentication, May also be provided via VERSA_DIRECTOR_OAUTH_GRANT_TYPE environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs#oauth_grant_type VersadirectorProvider#oauth_grant_type}
  */
  readonly oauthGrantType?: string;
  /**
  * Password for versadirector, May also be provided via VERSA_DIRECTOR_PASSWORD environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs#password VersadirectorProvider#password}
  */
  readonly password?: string;
  /**
  * Port for versadirector, May also be provided via VERSA_DIRECTOR_PORT environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs#port VersadirectorProvider#port}
  */
  readonly port?: string;
  /**
  * Username for versadirector, May also be provided via VERSA_DIRECTOR_USERNAME environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs#username VersadirectorProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs#alias VersadirectorProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs versadirector}
*/
export class VersadirectorProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "versadirector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VersadirectorProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VersadirectorProvider to import
  * @param importFromId The id of the existing VersadirectorProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VersadirectorProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "versadirector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs versadirector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VersadirectorProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VersadirectorProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'versadirector',
      terraformGeneratorMetadata: {
        providerName: 'versadirector',
        providerVersion: '0.0.1',
        providerVersionConstraint: '0.0.1'
      },
      terraformProviderSource: 'versa-networks/versadirector'
    });
    this._host = config.host;
    this._oauthClientId = config.oauthClientId;
    this._oauthClientSecret = config.oauthClientSecret;
    this._oauthGrantType = config.oauthGrantType;
    this._password = config.password;
    this._port = config.port;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // oauth_client_id - computed: false, optional: true, required: false
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this._oauthClientId;
  }
  public set oauthClientId(value: string | undefined) {
    this._oauthClientId = value;
  }
  public resetOauthClientId() {
    this._oauthClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
  }

  // oauth_client_secret - computed: false, optional: true, required: false
  private _oauthClientSecret?: string; 
  public get oauthClientSecret() {
    return this._oauthClientSecret;
  }
  public set oauthClientSecret(value: string | undefined) {
    this._oauthClientSecret = value;
  }
  public resetOauthClientSecret() {
    this._oauthClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientSecretInput() {
    return this._oauthClientSecret;
  }

  // oauth_grant_type - computed: false, optional: true, required: false
  private _oauthGrantType?: string; 
  public get oauthGrantType() {
    return this._oauthGrantType;
  }
  public set oauthGrantType(value: string | undefined) {
    this._oauthGrantType = value;
  }
  public resetOauthGrantType() {
    this._oauthGrantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthGrantTypeInput() {
    return this._oauthGrantType;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this._port;
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host: cdktf.stringToTerraform(this._host),
      oauth_client_id: cdktf.stringToTerraform(this._oauthClientId),
      oauth_client_secret: cdktf.stringToTerraform(this._oauthClientSecret),
      oauth_grant_type: cdktf.stringToTerraform(this._oauthGrantType),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.stringToTerraform(this._port),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_id: {
        value: cdktf.stringToHclTerraform(this._oauthClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_secret: {
        value: cdktf.stringToHclTerraform(this._oauthClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_grant_type: {
        value: cdktf.stringToHclTerraform(this._oauthGrantType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
