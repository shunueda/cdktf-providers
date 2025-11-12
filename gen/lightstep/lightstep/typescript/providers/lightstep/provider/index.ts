// https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LightstepProviderConfig {
  /**
  * The API Key for a Lightstep organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs#api_key LightstepProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Environment variable for Lightstep API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs#api_key_env_var LightstepProvider#api_key_env_var}
  */
  readonly apiKeyEnvVar?: string;
  /**
  * The base URL for the Lightstep API. This setting takes precedent over 'environment'. For example, https://api.lightstep.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs#api_url LightstepProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * The name of the Lightstep environment, must be one of: staging, meta, public. Deprecated in favor of `api_url`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs#environment LightstepProvider#environment}
  */
  readonly environment?: string;
  /**
  * The name of the Lightstep organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs#organization LightstepProvider#organization}
  */
  readonly organization: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs#alias LightstepProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs lightstep}
*/
export class LightstepProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lightstep";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LightstepProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LightstepProvider to import
  * @param importFromId The id of the existing LightstepProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LightstepProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lightstep", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs lightstep} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LightstepProviderConfig
  */
  public constructor(scope: Construct, id: string, config: LightstepProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'lightstep',
      terraformGeneratorMetadata: {
        providerName: 'lightstep',
        providerVersion: '1.98.2',
        providerVersionConstraint: '1.98.2'
      },
      terraformProviderSource: 'lightstep/lightstep'
    });
    this._apiKey = config.apiKey;
    this._apiKeyEnvVar = config.apiKeyEnvVar;
    this._apiUrl = config.apiUrl;
    this._environment = config.environment;
    this._organization = config.organization;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_env_var - computed: false, optional: true, required: false
  private _apiKeyEnvVar?: string; 
  public get apiKeyEnvVar() {
    return this._apiKeyEnvVar;
  }
  public set apiKeyEnvVar(value: string | undefined) {
    this._apiKeyEnvVar = value;
  }
  public resetApiKeyEnvVar() {
    this._apiKeyEnvVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyEnvVarInput() {
    return this._apiKeyEnvVar;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this._apiUrl;
  }
  public set apiUrl(value: string | undefined) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this._environment;
  }
  public set environment(value: string | undefined) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this._organization;
  }
  public set organization(value: string | undefined) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_key_env_var: cdktf.stringToTerraform(this._apiKeyEnvVar),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      environment: cdktf.stringToTerraform(this._environment),
      organization: cdktf.stringToTerraform(this._organization),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key_env_var: {
        value: cdktf.stringToHclTerraform(this._apiKeyEnvVar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
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
