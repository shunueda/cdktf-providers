// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KonnectProviderConfig {
  /**
  * The Konnect access token is meant to be used by the Konnect dashboard and the decK CLI to authenticate with..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs#konnect_access_token KonnectProvider#konnect_access_token}
  */
  readonly konnectAccessToken?: string;
  /**
  * The personal access token is meant to be used as an alternative to basic-auth when accessing Konnect via APIs. You can generate a Personal Access Token (PAT) from the personal access token page in the Konnect dashboard.. Configurable via environment variable `KONNECT_TOKEN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs#personal_access_token KonnectProvider#personal_access_token}
  */
  readonly personalAccessToken?: string;
  /**
  * Server URL (defaults to https://global.api.konghq.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs#server_url KonnectProvider#server_url}
  */
  readonly serverUrl?: string;
  /**
  * The Service access token is meant to be used between internal services.
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs#service_access_token KonnectProvider#service_access_token}
  */
  readonly serviceAccessToken?: string;
  /**
  * The system account access token is meant for automations and integrations that are not directly associated with a human identity.
  * You can generate a system account Access Token by creating a system account and then obtaining a system account access token for that account.
  * The access token must be passed in the header of a request, for example:
  * `curl -X GET 'https://global.api.konghq.com/v2/users/' --header 'Authorization: Bearer spat_i2Ej...'`
  * . Configurable via environment variable `KONNECT_SPAT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs#system_account_access_token KonnectProvider#system_account_access_token}
  */
  readonly systemAccountAccessToken?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs#alias KonnectProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs konnect}
*/
export class KonnectProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KonnectProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KonnectProvider to import
  * @param importFromId The id of the existing KonnectProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KonnectProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs konnect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KonnectProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KonnectProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'konnect',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      terraformProviderSource: 'Kong/konnect'
    });
    this._konnectAccessToken = config.konnectAccessToken;
    this._personalAccessToken = config.personalAccessToken;
    this._serverUrl = config.serverUrl;
    this._serviceAccessToken = config.serviceAccessToken;
    this._systemAccountAccessToken = config.systemAccountAccessToken;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // konnect_access_token - computed: false, optional: true, required: false
  private _konnectAccessToken?: string; 
  public get konnectAccessToken() {
    return this._konnectAccessToken;
  }
  public set konnectAccessToken(value: string | undefined) {
    this._konnectAccessToken = value;
  }
  public resetKonnectAccessToken() {
    this._konnectAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get konnectAccessTokenInput() {
    return this._konnectAccessToken;
  }

  // personal_access_token - computed: false, optional: true, required: false
  private _personalAccessToken?: string; 
  public get personalAccessToken() {
    return this._personalAccessToken;
  }
  public set personalAccessToken(value: string | undefined) {
    this._personalAccessToken = value;
  }
  public resetPersonalAccessToken() {
    this._personalAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalAccessTokenInput() {
    return this._personalAccessToken;
  }

  // server_url - computed: false, optional: true, required: false
  private _serverUrl?: string; 
  public get serverUrl() {
    return this._serverUrl;
  }
  public set serverUrl(value: string | undefined) {
    this._serverUrl = value;
  }
  public resetServerUrl() {
    this._serverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
  }

  // service_access_token - computed: false, optional: true, required: false
  private _serviceAccessToken?: string; 
  public get serviceAccessToken() {
    return this._serviceAccessToken;
  }
  public set serviceAccessToken(value: string | undefined) {
    this._serviceAccessToken = value;
  }
  public resetServiceAccessToken() {
    this._serviceAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessTokenInput() {
    return this._serviceAccessToken;
  }

  // system_account_access_token - computed: false, optional: true, required: false
  private _systemAccountAccessToken?: string; 
  public get systemAccountAccessToken() {
    return this._systemAccountAccessToken;
  }
  public set systemAccountAccessToken(value: string | undefined) {
    this._systemAccountAccessToken = value;
  }
  public resetSystemAccountAccessToken() {
    this._systemAccountAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAccountAccessTokenInput() {
    return this._systemAccountAccessToken;
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
      konnect_access_token: cdktf.stringToTerraform(this._konnectAccessToken),
      personal_access_token: cdktf.stringToTerraform(this._personalAccessToken),
      server_url: cdktf.stringToTerraform(this._serverUrl),
      service_access_token: cdktf.stringToTerraform(this._serviceAccessToken),
      system_account_access_token: cdktf.stringToTerraform(this._systemAccountAccessToken),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      konnect_access_token: {
        value: cdktf.stringToHclTerraform(this._konnectAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      personal_access_token: {
        value: cdktf.stringToHclTerraform(this._personalAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_url: {
        value: cdktf.stringToHclTerraform(this._serverUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_access_token: {
        value: cdktf.stringToHclTerraform(this._serviceAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_account_access_token: {
        value: cdktf.stringToHclTerraform(this._systemAccountAccessToken),
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
