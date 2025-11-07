// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OvhProviderConfig {
  /**
  * The OVH API Access Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs#access_token OvhProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * Specify the API request rate limit, X operations by seconds (default: unlimited)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs#api_rate_limit OvhProvider#api_rate_limit}
  */
  readonly apiRateLimit?: number;
  /**
  * The OVH API Application Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs#application_key OvhProvider#application_key}
  */
  readonly applicationKey?: string;
  /**
  * The OVH API Application Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs#application_secret OvhProvider#application_secret}
  */
  readonly applicationSecret?: string;
  /**
  * OAuth 2.0 application's ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs#client_id OvhProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * OAuth 2.0 application's secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs#client_secret OvhProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The OVH API Consumer Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs#consumer_key OvhProvider#consumer_key}
  */
  readonly consumerKey?: string;
  /**
  * The OVH API endpoint to target (ex: "ovh-eu")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs#endpoint OvhProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Extra information to append to the user-agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs#user_agent_extra OvhProvider#user_agent_extra}
  */
  readonly userAgentExtra?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs#alias OvhProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs ovh}
*/
export class OvhProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OvhProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OvhProvider to import
  * @param importFromId The id of the existing OvhProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OvhProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs ovh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OvhProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OvhProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ovh',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      terraformProviderSource: 'ovh/ovh'
    });
    this._accessToken = config.accessToken;
    this._apiRateLimit = config.apiRateLimit;
    this._applicationKey = config.applicationKey;
    this._applicationSecret = config.applicationSecret;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._consumerKey = config.consumerKey;
    this._endpoint = config.endpoint;
    this._userAgentExtra = config.userAgentExtra;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this._accessToken;
  }
  public set accessToken(value: string | undefined) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // api_rate_limit - computed: false, optional: true, required: false
  private _apiRateLimit?: number; 
  public get apiRateLimit() {
    return this._apiRateLimit;
  }
  public set apiRateLimit(value: number | undefined) {
    this._apiRateLimit = value;
  }
  public resetApiRateLimit() {
    this._apiRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRateLimitInput() {
    return this._apiRateLimit;
  }

  // application_key - computed: false, optional: true, required: false
  private _applicationKey?: string; 
  public get applicationKey() {
    return this._applicationKey;
  }
  public set applicationKey(value: string | undefined) {
    this._applicationKey = value;
  }
  public resetApplicationKey() {
    this._applicationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyInput() {
    return this._applicationKey;
  }

  // application_secret - computed: false, optional: true, required: false
  private _applicationSecret?: string; 
  public get applicationSecret() {
    return this._applicationSecret;
  }
  public set applicationSecret(value: string | undefined) {
    this._applicationSecret = value;
  }
  public resetApplicationSecret() {
    this._applicationSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSecretInput() {
    return this._applicationSecret;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // consumer_key - computed: false, optional: true, required: false
  private _consumerKey?: string; 
  public get consumerKey() {
    return this._consumerKey;
  }
  public set consumerKey(value: string | undefined) {
    this._consumerKey = value;
  }
  public resetConsumerKey() {
    this._consumerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerKeyInput() {
    return this._consumerKey;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // user_agent_extra - computed: false, optional: true, required: false
  private _userAgentExtra?: string; 
  public get userAgentExtra() {
    return this._userAgentExtra;
  }
  public set userAgentExtra(value: string | undefined) {
    this._userAgentExtra = value;
  }
  public resetUserAgentExtra() {
    this._userAgentExtra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentExtraInput() {
    return this._userAgentExtra;
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
      access_token: cdktf.stringToTerraform(this._accessToken),
      api_rate_limit: cdktf.numberToTerraform(this._apiRateLimit),
      application_key: cdktf.stringToTerraform(this._applicationKey),
      application_secret: cdktf.stringToTerraform(this._applicationSecret),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      consumer_key: cdktf.stringToTerraform(this._consumerKey),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      user_agent_extra: cdktf.stringToTerraform(this._userAgentExtra),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token: {
        value: cdktf.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_rate_limit: {
        value: cdktf.numberToHclTerraform(this._apiRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      application_key: {
        value: cdktf.stringToHclTerraform(this._applicationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_secret: {
        value: cdktf.stringToHclTerraform(this._applicationSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_key: {
        value: cdktf.stringToHclTerraform(this._consumerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_agent_extra: {
        value: cdktf.stringToHclTerraform(this._userAgentExtra),
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
