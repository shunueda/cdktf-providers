// https://registry.terraform.io/providers/files-com/files/0.1.419/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FilesProviderConfig {
  /**
  * The API key used to authenticate with Files.com. It can also be sourced from the `FILES_API_KEY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs#api_key FilesProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Required if your site is configured to disable global acceleration. This can also be set to use a mock server in development or CI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs#endpoint_override FilesProvider#endpoint_override}
  */
  readonly endpointOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs#environment FilesProvider#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs#feature_flags FilesProvider#feature_flags}
  */
  readonly featureFlags?: string[];
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs#alias FilesProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs files}
*/
export class FilesProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FilesProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FilesProvider to import
  * @param importFromId The id of the existing FilesProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FilesProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs files} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FilesProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FilesProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'files',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.419',
        providerVersionConstraint: '0.1.419'
      },
      terraformProviderSource: 'Files-com/files'
    });
    this._apiKey = config.apiKey;
    this._endpointOverride = config.endpointOverride;
    this._environment = config.environment;
    this._featureFlags = config.featureFlags;
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

  // endpoint_override - computed: false, optional: true, required: false
  private _endpointOverride?: string; 
  public get endpointOverride() {
    return this._endpointOverride;
  }
  public set endpointOverride(value: string | undefined) {
    this._endpointOverride = value;
  }
  public resetEndpointOverride() {
    this._endpointOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointOverrideInput() {
    return this._endpointOverride;
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

  // feature_flags - computed: false, optional: true, required: false
  private _featureFlags?: string[]; 
  public get featureFlags() {
    return this._featureFlags;
  }
  public set featureFlags(value: string[] | undefined) {
    this._featureFlags = value;
  }
  public resetFeatureFlags() {
    this._featureFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureFlagsInput() {
    return this._featureFlags;
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
      endpoint_override: cdktf.stringToTerraform(this._endpointOverride),
      environment: cdktf.stringToTerraform(this._environment),
      feature_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._featureFlags),
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
      endpoint_override: {
        value: cdktf.stringToHclTerraform(this._endpointOverride),
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
      feature_flags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._featureFlags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
