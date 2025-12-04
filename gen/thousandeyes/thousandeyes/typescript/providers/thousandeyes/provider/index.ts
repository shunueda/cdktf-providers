// https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThousandeyesProviderConfig {
  /**
  * The ThousandEyes account group's unique ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs#account_group_id ThousandeyesProvider#account_group_id}
  */
  readonly accountGroupId?: string;
  /**
  * The ThousandEyes API Endpoint's URL. Defaults to: https://api.thousandeyes.com/v7 . This is the only API version supported by this provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs#api_endpoint ThousandeyesProvider#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * Enable the API SDK logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs#api_sdk_logs_enabled ThousandeyesProvider#api_sdk_logs_enabled}
  */
  readonly apiSdkLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The timeout value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs#timeout ThousandeyesProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * The ThousandEyes organization's authentication token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs#token ThousandeyesProvider#token}
  */
  readonly token: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs#alias ThousandeyesProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs thousandeyes}
*/
export class ThousandeyesProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thousandeyes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThousandeyesProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThousandeyesProvider to import
  * @param importFromId The id of the existing ThousandeyesProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThousandeyesProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thousandeyes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs thousandeyes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThousandeyesProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ThousandeyesProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'thousandeyes',
      terraformGeneratorMetadata: {
        providerName: 'thousandeyes',
        providerVersion: '3.1.4',
        providerVersionConstraint: '3.1.4'
      },
      terraformProviderSource: 'thousandeyes/thousandeyes'
    });
    this._accountGroupId = config.accountGroupId;
    this._apiEndpoint = config.apiEndpoint;
    this._apiSdkLogsEnabled = config.apiSdkLogsEnabled;
    this._timeout = config.timeout;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_group_id - computed: false, optional: true, required: false
  private _accountGroupId?: string; 
  public get accountGroupId() {
    return this._accountGroupId;
  }
  public set accountGroupId(value: string | undefined) {
    this._accountGroupId = value;
  }
  public resetAccountGroupId() {
    this._accountGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountGroupIdInput() {
    return this._accountGroupId;
  }

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public set apiEndpoint(value: string | undefined) {
    this._apiEndpoint = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
  }

  // api_sdk_logs_enabled - computed: false, optional: true, required: false
  private _apiSdkLogsEnabled?: boolean | cdktf.IResolvable; 
  public get apiSdkLogsEnabled() {
    return this._apiSdkLogsEnabled;
  }
  public set apiSdkLogsEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._apiSdkLogsEnabled = value;
  }
  public resetApiSdkLogsEnabled() {
    this._apiSdkLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSdkLogsEnabledInput() {
    return this._apiSdkLogsEnabled;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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
      account_group_id: cdktf.stringToTerraform(this._accountGroupId),
      api_endpoint: cdktf.stringToTerraform(this._apiEndpoint),
      api_sdk_logs_enabled: cdktf.booleanToTerraform(this._apiSdkLogsEnabled),
      timeout: cdktf.numberToTerraform(this._timeout),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_group_id: {
        value: cdktf.stringToHclTerraform(this._accountGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_endpoint: {
        value: cdktf.stringToHclTerraform(this._apiEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_sdk_logs_enabled: {
        value: cdktf.booleanToHclTerraform(this._apiSdkLogsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
