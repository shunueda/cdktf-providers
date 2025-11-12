// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetboxProviderConfig {
  /**
  * Flag to set whether to allow https with invalid certificates. Can be set via the `NETBOX_ALLOW_INSECURE_HTTPS` environment variable. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs#allow_insecure_https NetboxProvider#allow_insecure_https}
  */
  readonly allowInsecureHttps?: boolean | cdktf.IResolvable;
  /**
  * Netbox API authentication token. Can be set via the `NETBOX_API_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs#api_token NetboxProvider#api_token}
  */
  readonly apiToken: string;
  /**
  * Path to a PEM-encoded CA certificate for verifying the Netbox server certificate. Can be set via the `NETBOX_CA_CERT_FILE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs#ca_cert_file NetboxProvider#ca_cert_file}
  */
  readonly caCertFile?: string;
  /**
  * Tags to add to every resource managed by this provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs#default_tags NetboxProvider#default_tags}
  */
  readonly defaultTags?: string[];
  /**
  * Set these header on all requests to Netbox. Can be set via the `NETBOX_HEADERS` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs#headers NetboxProvider#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Netbox API HTTP request timeout in seconds. Can be set via the `NETBOX_REQUEST_TIMEOUT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs#request_timeout NetboxProvider#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Location of Netbox server including scheme (http or https) and optional port. Can be set via the `NETBOX_SERVER_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs#server_url NetboxProvider#server_url}
  */
  readonly serverUrl: string;
  /**
  * If true, do not try to determine the running Netbox version at provider startup. Disables warnings about possibly unsupported Netbox version. Also useful for local testing on terraform plans. Can be set via the `NETBOX_SKIP_VERSION_CHECK` environment variable. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs#skip_version_check NetboxProvider#skip_version_check}
  */
  readonly skipVersionCheck?: boolean | cdktf.IResolvable;
  /**
  * If true, strip trailing slashes from the `server_url` parameter and print a warning when doing so. Note that using trailing slashes in the `server_url` parameter will usually lead to errors. Can be set via the `NETBOX_STRIP_TRAILING_SLASHES_FROM_URL` environment variable. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs#strip_trailing_slashes_from_url NetboxProvider#strip_trailing_slashes_from_url}
  */
  readonly stripTrailingSlashesFromUrl?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs#alias NetboxProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs netbox}
*/
export class NetboxProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetboxProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetboxProvider to import
  * @param importFromId The id of the existing NetboxProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetboxProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs netbox} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetboxProviderConfig
  */
  public constructor(scope: Construct, id: string, config: NetboxProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.0',
        providerVersionConstraint: '5.0.0'
      },
      terraformProviderSource: 'e-breuninger/netbox'
    });
    this._allowInsecureHttps = config.allowInsecureHttps;
    this._apiToken = config.apiToken;
    this._caCertFile = config.caCertFile;
    this._defaultTags = config.defaultTags;
    this._headers = config.headers;
    this._requestTimeout = config.requestTimeout;
    this._serverUrl = config.serverUrl;
    this._skipVersionCheck = config.skipVersionCheck;
    this._stripTrailingSlashesFromUrl = config.stripTrailingSlashesFromUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_insecure_https - computed: false, optional: true, required: false
  private _allowInsecureHttps?: boolean | cdktf.IResolvable; 
  public get allowInsecureHttps() {
    return this._allowInsecureHttps;
  }
  public set allowInsecureHttps(value: boolean | cdktf.IResolvable | undefined) {
    this._allowInsecureHttps = value;
  }
  public resetAllowInsecureHttps() {
    this._allowInsecureHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureHttpsInput() {
    return this._allowInsecureHttps;
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // ca_cert_file - computed: false, optional: true, required: false
  private _caCertFile?: string; 
  public get caCertFile() {
    return this._caCertFile;
  }
  public set caCertFile(value: string | undefined) {
    this._caCertFile = value;
  }
  public resetCaCertFile() {
    this._caCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertFileInput() {
    return this._caCertFile;
  }

  // default_tags - computed: false, optional: true, required: false
  private _defaultTags?: string[]; 
  public get defaultTags() {
    return this._defaultTags;
  }
  public set defaultTags(value: string[] | undefined) {
    this._defaultTags = value;
  }
  public resetDefaultTags() {
    this._defaultTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTagsInput() {
    return this._defaultTags;
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

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this._requestTimeout;
  }
  public set requestTimeout(value: number | undefined) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // server_url - computed: false, optional: false, required: true
  private _serverUrl?: string; 
  public get serverUrl() {
    return this._serverUrl;
  }
  public set serverUrl(value: string | undefined) {
    this._serverUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
  }

  // skip_version_check - computed: false, optional: true, required: false
  private _skipVersionCheck?: boolean | cdktf.IResolvable; 
  public get skipVersionCheck() {
    return this._skipVersionCheck;
  }
  public set skipVersionCheck(value: boolean | cdktf.IResolvable | undefined) {
    this._skipVersionCheck = value;
  }
  public resetSkipVersionCheck() {
    this._skipVersionCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipVersionCheckInput() {
    return this._skipVersionCheck;
  }

  // strip_trailing_slashes_from_url - computed: false, optional: true, required: false
  private _stripTrailingSlashesFromUrl?: boolean | cdktf.IResolvable; 
  public get stripTrailingSlashesFromUrl() {
    return this._stripTrailingSlashesFromUrl;
  }
  public set stripTrailingSlashesFromUrl(value: boolean | cdktf.IResolvable | undefined) {
    this._stripTrailingSlashesFromUrl = value;
  }
  public resetStripTrailingSlashesFromUrl() {
    this._stripTrailingSlashesFromUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripTrailingSlashesFromUrlInput() {
    return this._stripTrailingSlashesFromUrl;
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
      allow_insecure_https: cdktf.booleanToTerraform(this._allowInsecureHttps),
      api_token: cdktf.stringToTerraform(this._apiToken),
      ca_cert_file: cdktf.stringToTerraform(this._caCertFile),
      default_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultTags),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      request_timeout: cdktf.numberToTerraform(this._requestTimeout),
      server_url: cdktf.stringToTerraform(this._serverUrl),
      skip_version_check: cdktf.booleanToTerraform(this._skipVersionCheck),
      strip_trailing_slashes_from_url: cdktf.booleanToTerraform(this._stripTrailingSlashesFromUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_insecure_https: {
        value: cdktf.booleanToHclTerraform(this._allowInsecureHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert_file: {
        value: cdktf.stringToHclTerraform(this._caCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      request_timeout: {
        value: cdktf.numberToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_url: {
        value: cdktf.stringToHclTerraform(this._serverUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_version_check: {
        value: cdktf.booleanToHclTerraform(this._skipVersionCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strip_trailing_slashes_from_url: {
        value: cdktf.booleanToHclTerraform(this._stripTrailingSlashesFromUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
