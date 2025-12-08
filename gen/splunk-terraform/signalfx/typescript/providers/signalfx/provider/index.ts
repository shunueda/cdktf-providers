// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SignalfxProviderConfig {
  /**
  * API URL for your Splunk Observability Cloud org, may include a realm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs#api_url SignalfxProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Splunk Observability Cloud auth token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs#auth_token SignalfxProvider#auth_token}
  */
  readonly authToken?: string;
  /**
  * Application URL for your Splunk Observability Cloud org, often customized for organizations using SSO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs#custom_app_url SignalfxProvider#custom_app_url}
  */
  readonly customAppUrl?: string;
  /**
  * Used to create a session token instead of an API token, it requires the account to be configured to login with Email and Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs#email SignalfxProvider#email}
  */
  readonly email?: string;
  /**
  * Allows for users to opt-in to new features that are considered experimental or not ready for general availability yet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs#feature_preview SignalfxProvider#feature_preview}
  */
  readonly featurePreview?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Required if the user is configured to be part of multiple organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs#organization_id SignalfxProvider#organization_id}
  */
  readonly organizationId?: string;
  /**
  * Used to create a session token instead of an API token, it requires the account to be configured to login with Email and Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs#password SignalfxProvider#password}
  */
  readonly password?: string;
  /**
  * Max retries for a single HTTP call. Defaults to 4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs#retry_max_attempts SignalfxProvider#retry_max_attempts}
  */
  readonly retryMaxAttempts?: number;
  /**
  * Maximum retry wait for a single HTTP call in seconds. Defaults to 30
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs#retry_wait_max_seconds SignalfxProvider#retry_wait_max_seconds}
  */
  readonly retryWaitMaxSeconds?: number;
  /**
  * Minimum retry wait for a single HTTP call in seconds. Defaults to 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs#retry_wait_min_seconds SignalfxProvider#retry_wait_min_seconds}
  */
  readonly retryWaitMinSeconds?: number;
  /**
  * Allows for Tags to be added by default to resources that allow for tags to be included. If there is already tags configured, the global tags are added in prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs#tags SignalfxProvider#tags}
  */
  readonly tags?: string[];
  /**
  * Allows for teams to be defined at a provider level, and apply to all applicable resources created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs#teams SignalfxProvider#teams}
  */
  readonly teams?: string[];
  /**
  * Timeout duration for a single HTTP call in seconds. Defaults to 120
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs#timeout_seconds SignalfxProvider#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs#alias SignalfxProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs signalfx}
*/
export class SignalfxProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SignalfxProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SignalfxProvider to import
  * @param importFromId The id of the existing SignalfxProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SignalfxProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs signalfx} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SignalfxProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SignalfxProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'signalfx',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.23.0',
        providerVersionConstraint: '9.23.0'
      },
      terraformProviderSource: 'splunk-terraform/signalfx'
    });
    this._apiUrl = config.apiUrl;
    this._authToken = config.authToken;
    this._customAppUrl = config.customAppUrl;
    this._email = config.email;
    this._featurePreview = config.featurePreview;
    this._organizationId = config.organizationId;
    this._password = config.password;
    this._retryMaxAttempts = config.retryMaxAttempts;
    this._retryWaitMaxSeconds = config.retryWaitMaxSeconds;
    this._retryWaitMinSeconds = config.retryWaitMinSeconds;
    this._tags = config.tags;
    this._teams = config.teams;
    this._timeoutSeconds = config.timeoutSeconds;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this._authToken;
  }
  public set authToken(value: string | undefined) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // custom_app_url - computed: false, optional: true, required: false
  private _customAppUrl?: string; 
  public get customAppUrl() {
    return this._customAppUrl;
  }
  public set customAppUrl(value: string | undefined) {
    this._customAppUrl = value;
  }
  public resetCustomAppUrl() {
    this._customAppUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAppUrlInput() {
    return this._customAppUrl;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this._email;
  }
  public set email(value: string | undefined) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // feature_preview - computed: false, optional: true, required: false
  private _featurePreview?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get featurePreview() {
    return this._featurePreview;
  }
  public set featurePreview(value: { [key: string]: (boolean | cdktf.IResolvable) } | undefined) {
    this._featurePreview = value;
  }
  public resetFeaturePreview() {
    this._featurePreview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featurePreviewInput() {
    return this._featurePreview;
  }

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this._organizationId;
  }
  public set organizationId(value: string | undefined) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // retry_max_attempts - computed: false, optional: true, required: false
  private _retryMaxAttempts?: number; 
  public get retryMaxAttempts() {
    return this._retryMaxAttempts;
  }
  public set retryMaxAttempts(value: number | undefined) {
    this._retryMaxAttempts = value;
  }
  public resetRetryMaxAttempts() {
    this._retryMaxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMaxAttemptsInput() {
    return this._retryMaxAttempts;
  }

  // retry_wait_max_seconds - computed: false, optional: true, required: false
  private _retryWaitMaxSeconds?: number; 
  public get retryWaitMaxSeconds() {
    return this._retryWaitMaxSeconds;
  }
  public set retryWaitMaxSeconds(value: number | undefined) {
    this._retryWaitMaxSeconds = value;
  }
  public resetRetryWaitMaxSeconds() {
    this._retryWaitMaxSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryWaitMaxSecondsInput() {
    return this._retryWaitMaxSeconds;
  }

  // retry_wait_min_seconds - computed: false, optional: true, required: false
  private _retryWaitMinSeconds?: number; 
  public get retryWaitMinSeconds() {
    return this._retryWaitMinSeconds;
  }
  public set retryWaitMinSeconds(value: number | undefined) {
    this._retryWaitMinSeconds = value;
  }
  public resetRetryWaitMinSeconds() {
    this._retryWaitMinSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryWaitMinSecondsInput() {
    return this._retryWaitMinSeconds;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this._tags;
  }
  public set tags(value: string[] | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return this._teams;
  }
  public set teams(value: string[] | undefined) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
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
      api_url: cdktf.stringToTerraform(this._apiUrl),
      auth_token: cdktf.stringToTerraform(this._authToken),
      custom_app_url: cdktf.stringToTerraform(this._customAppUrl),
      email: cdktf.stringToTerraform(this._email),
      feature_preview: cdktf.hashMapper(cdktf.booleanToTerraform)(this._featurePreview),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      password: cdktf.stringToTerraform(this._password),
      retry_max_attempts: cdktf.numberToTerraform(this._retryMaxAttempts),
      retry_wait_max_seconds: cdktf.numberToTerraform(this._retryWaitMaxSeconds),
      retry_wait_min_seconds: cdktf.numberToTerraform(this._retryWaitMinSeconds),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._teams),
      timeout_seconds: cdktf.numberToTerraform(this._timeoutSeconds),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_token: {
        value: cdktf.stringToHclTerraform(this._authToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_app_url: {
        value: cdktf.stringToHclTerraform(this._customAppUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_preview: {
        value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(this._featurePreview),
        isBlock: false,
        type: "map",
        storageClassType: "booleanMap",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_max_attempts: {
        value: cdktf.numberToHclTerraform(this._retryMaxAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_wait_max_seconds: {
        value: cdktf.numberToHclTerraform(this._retryWaitMaxSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_wait_min_seconds: {
        value: cdktf.numberToHclTerraform(this._retryWaitMinSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._teams),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
