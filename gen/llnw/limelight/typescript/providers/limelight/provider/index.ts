// https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LimelightProviderConfig {
  /**
  * The API key to be used for authenticating with the Limelight Networks Configuration API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs#api_key LimelightProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * The base URL for the Limelight Networks Configuration API (trailing / should be omitted)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs#config_api_base_url LimelightProvider#config_api_base_url}
  */
  readonly configApiBaseUrl?: string;
  /**
  * The base URL for the Limelight Networks EdgeFunctions API (trailing / should be omitted)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs#edgefunctions_api_base_url LimelightProvider#edgefunctions_api_base_url}
  */
  readonly edgefunctionsApiBaseUrl?: string;
  /**
  * The username to be used for authenticating with the Limelight Networks Configuration API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs#username LimelightProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs#alias LimelightProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs limelight}
*/
export class LimelightProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "limelight";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LimelightProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LimelightProvider to import
  * @param importFromId The id of the existing LimelightProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LimelightProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "limelight", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/llnw/limelight/1.0.3/docs limelight} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LimelightProviderConfig
  */
  public constructor(scope: Construct, id: string, config: LimelightProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'limelight',
      terraformGeneratorMetadata: {
        providerName: 'limelight',
        providerVersion: '1.0.3',
        providerVersionConstraint: '1.0.3'
      },
      terraformProviderSource: 'llnw/limelight'
    });
    this._apiKey = config.apiKey;
    this._configApiBaseUrl = config.configApiBaseUrl;
    this._edgefunctionsApiBaseUrl = config.edgefunctionsApiBaseUrl;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // config_api_base_url - computed: false, optional: true, required: false
  private _configApiBaseUrl?: string; 
  public get configApiBaseUrl() {
    return this._configApiBaseUrl;
  }
  public set configApiBaseUrl(value: string | undefined) {
    this._configApiBaseUrl = value;
  }
  public resetConfigApiBaseUrl() {
    this._configApiBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configApiBaseUrlInput() {
    return this._configApiBaseUrl;
  }

  // edgefunctions_api_base_url - computed: false, optional: true, required: false
  private _edgefunctionsApiBaseUrl?: string; 
  public get edgefunctionsApiBaseUrl() {
    return this._edgefunctionsApiBaseUrl;
  }
  public set edgefunctionsApiBaseUrl(value: string | undefined) {
    this._edgefunctionsApiBaseUrl = value;
  }
  public resetEdgefunctionsApiBaseUrl() {
    this._edgefunctionsApiBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgefunctionsApiBaseUrlInput() {
    return this._edgefunctionsApiBaseUrl;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      config_api_base_url: cdktf.stringToTerraform(this._configApiBaseUrl),
      edgefunctions_api_base_url: cdktf.stringToTerraform(this._edgefunctionsApiBaseUrl),
      username: cdktf.stringToTerraform(this._username),
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
      config_api_base_url: {
        value: cdktf.stringToHclTerraform(this._configApiBaseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edgefunctions_api_base_url: {
        value: cdktf.stringToHclTerraform(this._edgefunctionsApiBaseUrl),
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
