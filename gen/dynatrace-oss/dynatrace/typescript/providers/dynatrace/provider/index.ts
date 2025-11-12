// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynatraceProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#account_id DynatraceProvider#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#automation_client_id DynatraceProvider#automation_client_id}
  */
  readonly automationClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#automation_client_secret DynatraceProvider#automation_client_secret}
  */
  readonly automationClientSecret?: string;
  /**
  * The URL of the Dynatrace Environment with Platform capabilities turned on (`https://#####.apps.dynatrace.com)`. This is optional configuration when `dt_env_url` already specifies a SaaS Environment like `https://#####.live.dynatrace.com` or `https://#####.apps.dynatrace.com`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#automation_env_url DynatraceProvider#automation_env_url}
  */
  readonly automationEnvUrl?: string;
  /**
  * The URL that provides the Bearer tokens when accessing the Automation REST API. This is optional configuration when `dt_env_url` already specifies a SaaS Environment like `https://#####.live.dynatrace.com` or `https://#####.apps.dynatrace.com`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#automation_token_url DynatraceProvider#automation_token_url}
  */
  readonly automationTokenUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#client_id DynatraceProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#client_secret DynatraceProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#dt_api_token DynatraceProvider#dt_api_token}
  */
  readonly dtApiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#dt_cluster_api_token DynatraceProvider#dt_cluster_api_token}
  */
  readonly dtClusterApiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#dt_cluster_url DynatraceProvider#dt_cluster_url}
  */
  readonly dtClusterUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#dt_env_url DynatraceProvider#dt_env_url}
  */
  readonly dtEnvUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#iam_account_id DynatraceProvider#iam_account_id}
  */
  readonly iamAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#iam_client_id DynatraceProvider#iam_client_id}
  */
  readonly iamClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#iam_client_secret DynatraceProvider#iam_client_secret}
  */
  readonly iamClientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#iam_endpoint_url DynatraceProvider#iam_endpoint_url}
  */
  readonly iamEndpointUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#iam_token_url DynatraceProvider#iam_token_url}
  */
  readonly iamTokenUrl?: string;
  /**
  * A Dynatrace Platform Token. Specifying such a token allows for easy authentication against Platform resources. In such a case it supersedes `automation_client_id`, `automation_client_secret`, `automation_token_url` and `automation_env_url`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#platform_token DynatraceProvider#platform_token}
  */
  readonly platformToken?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#alias DynatraceProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs dynatrace}
*/
export class DynatraceProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynatraceProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynatraceProvider to import
  * @param importFromId The id of the existing DynatraceProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynatraceProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs dynatrace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynatraceProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DynatraceProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      terraformProviderSource: 'dynatrace-oss/dynatrace'
    });
    this._accountId = config.accountId;
    this._automationClientId = config.automationClientId;
    this._automationClientSecret = config.automationClientSecret;
    this._automationEnvUrl = config.automationEnvUrl;
    this._automationTokenUrl = config.automationTokenUrl;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._dtApiToken = config.dtApiToken;
    this._dtClusterApiToken = config.dtClusterApiToken;
    this._dtClusterUrl = config.dtClusterUrl;
    this._dtEnvUrl = config.dtEnvUrl;
    this._iamAccountId = config.iamAccountId;
    this._iamClientId = config.iamClientId;
    this._iamClientSecret = config.iamClientSecret;
    this._iamEndpointUrl = config.iamEndpointUrl;
    this._iamTokenUrl = config.iamTokenUrl;
    this._platformToken = config.platformToken;
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

  // automation_client_id - computed: false, optional: true, required: false
  private _automationClientId?: string; 
  public get automationClientId() {
    return this._automationClientId;
  }
  public set automationClientId(value: string | undefined) {
    this._automationClientId = value;
  }
  public resetAutomationClientId() {
    this._automationClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationClientIdInput() {
    return this._automationClientId;
  }

  // automation_client_secret - computed: false, optional: true, required: false
  private _automationClientSecret?: string; 
  public get automationClientSecret() {
    return this._automationClientSecret;
  }
  public set automationClientSecret(value: string | undefined) {
    this._automationClientSecret = value;
  }
  public resetAutomationClientSecret() {
    this._automationClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationClientSecretInput() {
    return this._automationClientSecret;
  }

  // automation_env_url - computed: false, optional: true, required: false
  private _automationEnvUrl?: string; 
  public get automationEnvUrl() {
    return this._automationEnvUrl;
  }
  public set automationEnvUrl(value: string | undefined) {
    this._automationEnvUrl = value;
  }
  public resetAutomationEnvUrl() {
    this._automationEnvUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationEnvUrlInput() {
    return this._automationEnvUrl;
  }

  // automation_token_url - computed: false, optional: true, required: false
  private _automationTokenUrl?: string; 
  public get automationTokenUrl() {
    return this._automationTokenUrl;
  }
  public set automationTokenUrl(value: string | undefined) {
    this._automationTokenUrl = value;
  }
  public resetAutomationTokenUrl() {
    this._automationTokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationTokenUrlInput() {
    return this._automationTokenUrl;
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

  // dt_api_token - computed: false, optional: true, required: false
  private _dtApiToken?: string; 
  public get dtApiToken() {
    return this._dtApiToken;
  }
  public set dtApiToken(value: string | undefined) {
    this._dtApiToken = value;
  }
  public resetDtApiToken() {
    this._dtApiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtApiTokenInput() {
    return this._dtApiToken;
  }

  // dt_cluster_api_token - computed: false, optional: true, required: false
  private _dtClusterApiToken?: string; 
  public get dtClusterApiToken() {
    return this._dtClusterApiToken;
  }
  public set dtClusterApiToken(value: string | undefined) {
    this._dtClusterApiToken = value;
  }
  public resetDtClusterApiToken() {
    this._dtClusterApiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtClusterApiTokenInput() {
    return this._dtClusterApiToken;
  }

  // dt_cluster_url - computed: false, optional: true, required: false
  private _dtClusterUrl?: string; 
  public get dtClusterUrl() {
    return this._dtClusterUrl;
  }
  public set dtClusterUrl(value: string | undefined) {
    this._dtClusterUrl = value;
  }
  public resetDtClusterUrl() {
    this._dtClusterUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtClusterUrlInput() {
    return this._dtClusterUrl;
  }

  // dt_env_url - computed: false, optional: true, required: false
  private _dtEnvUrl?: string; 
  public get dtEnvUrl() {
    return this._dtEnvUrl;
  }
  public set dtEnvUrl(value: string | undefined) {
    this._dtEnvUrl = value;
  }
  public resetDtEnvUrl() {
    this._dtEnvUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtEnvUrlInput() {
    return this._dtEnvUrl;
  }

  // iam_account_id - computed: false, optional: true, required: false
  private _iamAccountId?: string; 
  public get iamAccountId() {
    return this._iamAccountId;
  }
  public set iamAccountId(value: string | undefined) {
    this._iamAccountId = value;
  }
  public resetIamAccountId() {
    this._iamAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamAccountIdInput() {
    return this._iamAccountId;
  }

  // iam_client_id - computed: false, optional: true, required: false
  private _iamClientId?: string; 
  public get iamClientId() {
    return this._iamClientId;
  }
  public set iamClientId(value: string | undefined) {
    this._iamClientId = value;
  }
  public resetIamClientId() {
    this._iamClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamClientIdInput() {
    return this._iamClientId;
  }

  // iam_client_secret - computed: false, optional: true, required: false
  private _iamClientSecret?: string; 
  public get iamClientSecret() {
    return this._iamClientSecret;
  }
  public set iamClientSecret(value: string | undefined) {
    this._iamClientSecret = value;
  }
  public resetIamClientSecret() {
    this._iamClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamClientSecretInput() {
    return this._iamClientSecret;
  }

  // iam_endpoint_url - computed: false, optional: true, required: false
  private _iamEndpointUrl?: string; 
  public get iamEndpointUrl() {
    return this._iamEndpointUrl;
  }
  public set iamEndpointUrl(value: string | undefined) {
    this._iamEndpointUrl = value;
  }
  public resetIamEndpointUrl() {
    this._iamEndpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamEndpointUrlInput() {
    return this._iamEndpointUrl;
  }

  // iam_token_url - computed: false, optional: true, required: false
  private _iamTokenUrl?: string; 
  public get iamTokenUrl() {
    return this._iamTokenUrl;
  }
  public set iamTokenUrl(value: string | undefined) {
    this._iamTokenUrl = value;
  }
  public resetIamTokenUrl() {
    this._iamTokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamTokenUrlInput() {
    return this._iamTokenUrl;
  }

  // platform_token - computed: false, optional: true, required: false
  private _platformToken?: string; 
  public get platformToken() {
    return this._platformToken;
  }
  public set platformToken(value: string | undefined) {
    this._platformToken = value;
  }
  public resetPlatformToken() {
    this._platformToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformTokenInput() {
    return this._platformToken;
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
      automation_client_id: cdktf.stringToTerraform(this._automationClientId),
      automation_client_secret: cdktf.stringToTerraform(this._automationClientSecret),
      automation_env_url: cdktf.stringToTerraform(this._automationEnvUrl),
      automation_token_url: cdktf.stringToTerraform(this._automationTokenUrl),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      dt_api_token: cdktf.stringToTerraform(this._dtApiToken),
      dt_cluster_api_token: cdktf.stringToTerraform(this._dtClusterApiToken),
      dt_cluster_url: cdktf.stringToTerraform(this._dtClusterUrl),
      dt_env_url: cdktf.stringToTerraform(this._dtEnvUrl),
      iam_account_id: cdktf.stringToTerraform(this._iamAccountId),
      iam_client_id: cdktf.stringToTerraform(this._iamClientId),
      iam_client_secret: cdktf.stringToTerraform(this._iamClientSecret),
      iam_endpoint_url: cdktf.stringToTerraform(this._iamEndpointUrl),
      iam_token_url: cdktf.stringToTerraform(this._iamTokenUrl),
      platform_token: cdktf.stringToTerraform(this._platformToken),
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
      automation_client_id: {
        value: cdktf.stringToHclTerraform(this._automationClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automation_client_secret: {
        value: cdktf.stringToHclTerraform(this._automationClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automation_env_url: {
        value: cdktf.stringToHclTerraform(this._automationEnvUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automation_token_url: {
        value: cdktf.stringToHclTerraform(this._automationTokenUrl),
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
      dt_api_token: {
        value: cdktf.stringToHclTerraform(this._dtApiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dt_cluster_api_token: {
        value: cdktf.stringToHclTerraform(this._dtClusterApiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dt_cluster_url: {
        value: cdktf.stringToHclTerraform(this._dtClusterUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dt_env_url: {
        value: cdktf.stringToHclTerraform(this._dtEnvUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_account_id: {
        value: cdktf.stringToHclTerraform(this._iamAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_client_id: {
        value: cdktf.stringToHclTerraform(this._iamClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_client_secret: {
        value: cdktf.stringToHclTerraform(this._iamClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_endpoint_url: {
        value: cdktf.stringToHclTerraform(this._iamEndpointUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_token_url: {
        value: cdktf.stringToHclTerraform(this._iamTokenUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_token: {
        value: cdktf.stringToHclTerraform(this._platformToken),
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
