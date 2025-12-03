// https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrefectProviderConfig {
  /**
  * Default Prefect Cloud Account ID. Can also be set via the `PREFECT_CLOUD_ACCOUNT_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs#account_id PrefectProvider#account_id}
  */
  readonly accountId?: string;
  /**
  * Prefect Cloud API key. Can also be set via the `PREFECT_API_KEY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs#api_key PrefectProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Prefect basic auth key. Can also be set via the `PREFECT_BASIC_AUTH_KEY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs#basic_auth_key PrefectProvider#basic_auth_key}
  */
  readonly basicAuthKey?: string;
  /**
  * Enable CSRF protection for API requests. Defaults to false. If enabled, the provider will fetch a CSRF token from the Prefect API and include it in all requests. This should be enabled if your Prefect server instance has CSRF protection active. Can also be set via the `PREFECT_CSRF_ENABLED` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs#csrf_enabled PrefectProvider#csrf_enabled}
  */
  readonly csrfEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Prefect API URL. Can also be set via the `PREFECT_API_URL` environment variable. Defaults to `https://api.prefect.cloud` if not configured. Can optionally include the default account ID and workspace ID in the following format: `https://api.prefect.cloud/api/accounts/<accountID>/workspaces/<workspaceID>`. This is the same format used for the `PREFECT_API_URL` value in the Prefect CLI configuration file. The `account_id` and `workspace_id` attributes and their matching environment variables will take priority over any account and workspace ID values provided in the `endpoint` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs#endpoint PrefectProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Prefect profile name to use for authentication. If not specified, uses the active profile from `~/.prefect/profiles.toml`. This allows you to use a specific profile instead of the active one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs#profile PrefectProvider#profile}
  */
  readonly profile?: string;
  /**
  * Path to the Prefect profiles file. If not specified, uses the default location `~/.prefect/profiles.toml`. This allows you to use a custom profiles file location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs#profile_file PrefectProvider#profile_file}
  */
  readonly profileFile?: string;
  /**
  * Default Prefect Cloud Workspace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs#workspace_id PrefectProvider#workspace_id}
  */
  readonly workspaceId?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs#alias PrefectProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs prefect}
*/
export class PrefectProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrefectProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrefectProvider to import
  * @param importFromId The id of the existing PrefectProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrefectProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs prefect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrefectProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PrefectProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prefect',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.90.4',
        providerVersionConstraint: '2.90.4'
      },
      terraformProviderSource: 'PrefectHQ/prefect'
    });
    this._accountId = config.accountId;
    this._apiKey = config.apiKey;
    this._basicAuthKey = config.basicAuthKey;
    this._csrfEnabled = config.csrfEnabled;
    this._endpoint = config.endpoint;
    this._profile = config.profile;
    this._profileFile = config.profileFile;
    this._workspaceId = config.workspaceId;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this._accountId;
  }
  public set accountId(value: string | undefined) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

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

  // basic_auth_key - computed: false, optional: true, required: false
  private _basicAuthKey?: string; 
  public get basicAuthKey() {
    return this._basicAuthKey;
  }
  public set basicAuthKey(value: string | undefined) {
    this._basicAuthKey = value;
  }
  public resetBasicAuthKey() {
    this._basicAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthKeyInput() {
    return this._basicAuthKey;
  }

  // csrf_enabled - computed: false, optional: true, required: false
  private _csrfEnabled?: boolean | cdktf.IResolvable; 
  public get csrfEnabled() {
    return this._csrfEnabled;
  }
  public set csrfEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._csrfEnabled = value;
  }
  public resetCsrfEnabled() {
    this._csrfEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrfEnabledInput() {
    return this._csrfEnabled;
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

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // profile_file - computed: false, optional: true, required: false
  private _profileFile?: string; 
  public get profileFile() {
    return this._profileFile;
  }
  public set profileFile(value: string | undefined) {
    this._profileFile = value;
  }
  public resetProfileFile() {
    this._profileFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileFileInput() {
    return this._profileFile;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this._workspaceId;
  }
  public set workspaceId(value: string | undefined) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
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
      account_id: cdktf.stringToTerraform(this._accountId),
      api_key: cdktf.stringToTerraform(this._apiKey),
      basic_auth_key: cdktf.stringToTerraform(this._basicAuthKey),
      csrf_enabled: cdktf.booleanToTerraform(this._csrfEnabled),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      profile: cdktf.stringToTerraform(this._profile),
      profile_file: cdktf.stringToTerraform(this._profileFile),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth_key: {
        value: cdktf.stringToHclTerraform(this._basicAuthKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csrf_enabled: {
        value: cdktf.booleanToHclTerraform(this._csrfEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_file: {
        value: cdktf.stringToHclTerraform(this._profileFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
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
