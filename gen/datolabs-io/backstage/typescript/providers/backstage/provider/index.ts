// https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackstageProviderConfig {
  /**
  * Base URL of the Backstage instance, e.g. https://demo.backstage.io. May also be provided via `BACKSTAGE_BASE_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs#base_url BackstageProvider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Name of default namespace for entities (`default`, if not set). May also be provided via `BACKSTAGE_DEFAULT_NAMESPACE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs#default_namespace BackstageProvider#default_namespace}
  */
  readonly defaultNamespace?: string;
  /**
  * Headers to be sent with each request to the Backstage API. Useful for authentication. May also be provided via `BACKSTAGE_HEADERS` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs#headers BackstageProvider#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Number of retries to attempt on recoverable API errors (default: 0). May also be provided via `BACKSTAGE_RETRIES` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs#retries BackstageProvider#retries}
  */
  readonly retries?: number;
  /**
  * Timeout for requests to the Backstage API in seconds (default: 15). May also be provided via `BACKSTAGE_TIMEOUT_SECONDS` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs#timeout_seconds BackstageProvider#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs#alias BackstageProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs backstage}
*/
export class BackstageProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "backstage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackstageProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackstageProvider to import
  * @param importFromId The id of the existing BackstageProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackstageProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "backstage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs backstage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackstageProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BackstageProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'backstage',
      terraformGeneratorMetadata: {
        providerName: 'backstage',
        providerVersion: '3.3.0'
      },
      terraformProviderSource: 'datolabs-io/backstage'
    });
    this._baseUrl = config.baseUrl;
    this._defaultNamespace = config.defaultNamespace;
    this._headers = config.headers;
    this._retries = config.retries;
    this._timeoutSeconds = config.timeoutSeconds;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string | undefined) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // default_namespace - computed: false, optional: true, required: false
  private _defaultNamespace?: string; 
  public get defaultNamespace() {
    return this._defaultNamespace;
  }
  public set defaultNamespace(value: string | undefined) {
    this._defaultNamespace = value;
  }
  public resetDefaultNamespace() {
    this._defaultNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNamespaceInput() {
    return this._defaultNamespace;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this._headers;
  }
  public set headers(value: { [key: string]: string } | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this._retries;
  }
  public set retries(value: number | undefined) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this._timeoutSeconds;
  }
  public set timeoutSeconds(value: number | undefined) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
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
      base_url: cdktf.stringToTerraform(this._baseUrl),
      default_namespace: cdktf.stringToTerraform(this._defaultNamespace),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      retries: cdktf.numberToTerraform(this._retries),
      timeout_seconds: cdktf.numberToTerraform(this._timeoutSeconds),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_namespace: {
        value: cdktf.stringToHclTerraform(this._defaultNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._timeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
