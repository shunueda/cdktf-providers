// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RafayProviderConfig {
  /**
  * Rafay API key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs#api_key RafayProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs#ignore_insecure_tls_error RafayProvider#ignore_insecure_tls_error}
  */
  readonly ignoreInsecureTlsError?: boolean | cdktf.IResolvable;
  /**
  * Rafay project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs#project RafayProvider#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs#provider_config_file RafayProvider#provider_config_file}
  */
  readonly providerConfigFile?: string;
  /**
  * Rafay API endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs#rest_endpoint RafayProvider#rest_endpoint}
  */
  readonly restEndpoint?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs#alias RafayProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs rafay}
*/
export class RafayProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RafayProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RafayProvider to import
  * @param importFromId The id of the existing RafayProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RafayProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs rafay} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RafayProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RafayProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.55',
        providerVersionConstraint: '1.1.55'
      },
      terraformProviderSource: 'RafaySystems/rafay'
    });
    this._apiKey = config.apiKey;
    this._ignoreInsecureTlsError = config.ignoreInsecureTlsError;
    this._project = config.project;
    this._providerConfigFile = config.providerConfigFile;
    this._restEndpoint = config.restEndpoint;
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

  // ignore_insecure_tls_error - computed: false, optional: true, required: false
  private _ignoreInsecureTlsError?: boolean | cdktf.IResolvable; 
  public get ignoreInsecureTlsError() {
    return this._ignoreInsecureTlsError;
  }
  public set ignoreInsecureTlsError(value: boolean | cdktf.IResolvable | undefined) {
    this._ignoreInsecureTlsError = value;
  }
  public resetIgnoreInsecureTlsError() {
    this._ignoreInsecureTlsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInsecureTlsErrorInput() {
    return this._ignoreInsecureTlsError;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // provider_config_file - computed: false, optional: true, required: false
  private _providerConfigFile?: string; 
  public get providerConfigFile() {
    return this._providerConfigFile;
  }
  public set providerConfigFile(value: string | undefined) {
    this._providerConfigFile = value;
  }
  public resetProviderConfigFile() {
    this._providerConfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigFileInput() {
    return this._providerConfigFile;
  }

  // rest_endpoint - computed: false, optional: true, required: false
  private _restEndpoint?: string; 
  public get restEndpoint() {
    return this._restEndpoint;
  }
  public set restEndpoint(value: string | undefined) {
    this._restEndpoint = value;
  }
  public resetRestEndpoint() {
    this._restEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restEndpointInput() {
    return this._restEndpoint;
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
      ignore_insecure_tls_error: cdktf.booleanToTerraform(this._ignoreInsecureTlsError),
      project: cdktf.stringToTerraform(this._project),
      provider_config_file: cdktf.stringToTerraform(this._providerConfigFile),
      rest_endpoint: cdktf.stringToTerraform(this._restEndpoint),
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
      ignore_insecure_tls_error: {
        value: cdktf.booleanToHclTerraform(this._ignoreInsecureTlsError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config_file: {
        value: cdktf.stringToHclTerraform(this._providerConfigFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_endpoint: {
        value: cdktf.stringToHclTerraform(this._restEndpoint),
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
