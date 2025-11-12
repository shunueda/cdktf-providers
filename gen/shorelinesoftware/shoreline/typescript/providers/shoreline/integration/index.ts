// https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID for a 3rd-party service integration. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#account_id Integration#account_id}
  */
  readonly accountId?: string;
  /**
  * API certificate for a 3rd-party service integration. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#api_certificate Integration#api_certificate}
  */
  readonly apiCertificate?: string;
  /**
  * API key for a 3rd-party service integration. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#api_key Integration#api_key}
  */
  readonly apiKey?: string;
  /**
  * The number of API calls a client is able to make in a minute. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#api_rate_limit Integration#api_rate_limit}
  */
  readonly apiRateLimit?: number;
  /**
  * API url for a 3rd-party service integration. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#api_url Integration#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Application key for a 3rd-party service integration. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#app_key Integration#app_key}
  */
  readonly appKey?: string;
  /**
  * The amount of time group memberships will be cached (in milliseconds). Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#cache_ttl Integration#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * The amount of time group memberships will be cached (in milliseconds). Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#cache_ttl_ms Integration#cache_ttl_ms}
  */
  readonly cacheTtlMs?: number;
  /**
  * Application id for a 3rd-party service integration (Microsoft Entra ID). Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#client_id Integration#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret for a 3rd-party service integration (Microsoft Entra ID). Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#client_secret Integration#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The credentials used for a 3rd-party service integration (google cloud identity), encoded in base64. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#credentials Integration#credentials}
  */
  readonly credentials?: string;
  /**
  * **Deprecated** Field 'dashboard_name' is obsolete. The name of a dashboard for 3rd-party service integration (datadog). Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#dashboard_name Integration#dashboard_name}
  */
  readonly dashboardName?: string;
  /**
  * If the object is currently enabled or disabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#enabled Integration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * External url for a 3rd-party service integration. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#external_url Integration#external_url}
  */
  readonly externalUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#id Integration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Identity Provider's name. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#idp_name Integration#idp_name}
  */
  readonly idpName?: string;
  /**
  * Insights key for a 3rd-party service integration. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#insights_collector_api_key Integration#insights_collector_api_key}
  */
  readonly insightsCollectorApiKey?: string;
  /**
  * Insights url for a 3rd-party service integration. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#insights_collector_url Integration#insights_collector_url}
  */
  readonly insightsCollectorUrl?: string;
  /**
  * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#name Integration#name}
  */
  readonly name: string;
  /**
  * The user which 3rd-party service integration remediations run as (default 'Shoreline'). Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#permissions_user Integration#permissions_user}
  */
  readonly permissionsUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#serial_number Integration#serial_number}
  */
  readonly serialNumber: string;
  /**
  * The name of a 3rd-party service to integrate with (e.g. 'datadog', or 'newrelic').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#service_name Integration#service_name}
  */
  readonly serviceName: string;
  /**
  * Site/Application url for a 3rd-party service integration. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#site_url Integration#site_url}
  */
  readonly siteUrl?: string;
  /**
  * The subject whose authentication details is used for a 3rd-party service integration (google cloud identity). Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#subject Integration#subject}
  */
  readonly subject?: string;
  /**
  * Tenant id for a 3rd-party service integration (Microsoft Entra ID). Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#tenant_id Integration#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * The name of a webhook for 3rd-party service integration (datadog). Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#webhook_name Integration#webhook_name}
  */
  readonly webhookName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration shoreline_integration}
*/
export class Integration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shoreline_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Integration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Integration to import
  * @param importFromId The id of the existing Integration that should be imported. Refer to the {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Integration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shoreline_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/integration shoreline_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'shoreline_integration',
      terraformGeneratorMetadata: {
        providerName: 'shoreline',
        providerVersion: '1.15.38',
        providerVersionConstraint: '1.15.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._apiCertificate = config.apiCertificate;
    this._apiKey = config.apiKey;
    this._apiRateLimit = config.apiRateLimit;
    this._apiUrl = config.apiUrl;
    this._appKey = config.appKey;
    this._cacheTtl = config.cacheTtl;
    this._cacheTtlMs = config.cacheTtlMs;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._credentials = config.credentials;
    this._dashboardName = config.dashboardName;
    this._enabled = config.enabled;
    this._externalUrl = config.externalUrl;
    this._id = config.id;
    this._idpName = config.idpName;
    this._insightsCollectorApiKey = config.insightsCollectorApiKey;
    this._insightsCollectorUrl = config.insightsCollectorUrl;
    this._name = config.name;
    this._permissionsUser = config.permissionsUser;
    this._serialNumber = config.serialNumber;
    this._serviceName = config.serviceName;
    this._siteUrl = config.siteUrl;
    this._subject = config.subject;
    this._tenantId = config.tenantId;
    this._webhookName = config.webhookName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // api_certificate - computed: false, optional: true, required: false
  private _apiCertificate?: string; 
  public get apiCertificate() {
    return this.getStringAttribute('api_certificate');
  }
  public set apiCertificate(value: string) {
    this._apiCertificate = value;
  }
  public resetApiCertificate() {
    this._apiCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCertificateInput() {
    return this._apiCertificate;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_rate_limit - computed: false, optional: true, required: false
  private _apiRateLimit?: number; 
  public get apiRateLimit() {
    return this.getNumberAttribute('api_rate_limit');
  }
  public set apiRateLimit(value: number) {
    this._apiRateLimit = value;
  }
  public resetApiRateLimit() {
    this._apiRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRateLimitInput() {
    return this._apiRateLimit;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // app_key - computed: false, optional: true, required: false
  private _appKey?: string; 
  public get appKey() {
    return this.getStringAttribute('app_key');
  }
  public set appKey(value: string) {
    this._appKey = value;
  }
  public resetAppKey() {
    this._appKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appKeyInput() {
    return this._appKey;
  }

  // cache_ttl - computed: false, optional: true, required: false
  private _cacheTtl?: number; 
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }
  public set cacheTtl(value: number) {
    this._cacheTtl = value;
  }
  public resetCacheTtl() {
    this._cacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // cache_ttl_ms - computed: false, optional: true, required: false
  private _cacheTtlMs?: number; 
  public get cacheTtlMs() {
    return this.getNumberAttribute('cache_ttl_ms');
  }
  public set cacheTtlMs(value: number) {
    this._cacheTtlMs = value;
  }
  public resetCacheTtlMs() {
    this._cacheTtlMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlMsInput() {
    return this._cacheTtlMs;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
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
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // dashboard_name - computed: false, optional: true, required: false
  private _dashboardName?: string; 
  public get dashboardName() {
    return this.getStringAttribute('dashboard_name');
  }
  public set dashboardName(value: string) {
    this._dashboardName = value;
  }
  public resetDashboardName() {
    this._dashboardName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardNameInput() {
    return this._dashboardName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // external_url - computed: false, optional: true, required: false
  private _externalUrl?: string; 
  public get externalUrl() {
    return this.getStringAttribute('external_url');
  }
  public set externalUrl(value: string) {
    this._externalUrl = value;
  }
  public resetExternalUrl() {
    this._externalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUrlInput() {
    return this._externalUrl;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // idp_name - computed: false, optional: true, required: false
  private _idpName?: string; 
  public get idpName() {
    return this.getStringAttribute('idp_name');
  }
  public set idpName(value: string) {
    this._idpName = value;
  }
  public resetIdpName() {
    this._idpName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpNameInput() {
    return this._idpName;
  }

  // insights_collector_api_key - computed: false, optional: true, required: false
  private _insightsCollectorApiKey?: string; 
  public get insightsCollectorApiKey() {
    return this.getStringAttribute('insights_collector_api_key');
  }
  public set insightsCollectorApiKey(value: string) {
    this._insightsCollectorApiKey = value;
  }
  public resetInsightsCollectorApiKey() {
    this._insightsCollectorApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsCollectorApiKeyInput() {
    return this._insightsCollectorApiKey;
  }

  // insights_collector_url - computed: false, optional: true, required: false
  private _insightsCollectorUrl?: string; 
  public get insightsCollectorUrl() {
    return this.getStringAttribute('insights_collector_url');
  }
  public set insightsCollectorUrl(value: string) {
    this._insightsCollectorUrl = value;
  }
  public resetInsightsCollectorUrl() {
    this._insightsCollectorUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsCollectorUrlInput() {
    return this._insightsCollectorUrl;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // permissions_user - computed: false, optional: true, required: false
  private _permissionsUser?: string; 
  public get permissionsUser() {
    return this.getStringAttribute('permissions_user');
  }
  public set permissionsUser(value: string) {
    this._permissionsUser = value;
  }
  public resetPermissionsUser() {
    this._permissionsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsUserInput() {
    return this._permissionsUser;
  }

  // serial_number - computed: false, optional: false, required: true
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // site_url - computed: false, optional: true, required: false
  private _siteUrl?: string; 
  public get siteUrl() {
    return this.getStringAttribute('site_url');
  }
  public set siteUrl(value: string) {
    this._siteUrl = value;
  }
  public resetSiteUrl() {
    this._siteUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteUrlInput() {
    return this._siteUrl;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // webhook_name - computed: false, optional: true, required: false
  private _webhookName?: string; 
  public get webhookName() {
    return this.getStringAttribute('webhook_name');
  }
  public set webhookName(value: string) {
    this._webhookName = value;
  }
  public resetWebhookName() {
    this._webhookName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookNameInput() {
    return this._webhookName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      api_certificate: cdktf.stringToTerraform(this._apiCertificate),
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_rate_limit: cdktf.numberToTerraform(this._apiRateLimit),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      app_key: cdktf.stringToTerraform(this._appKey),
      cache_ttl: cdktf.numberToTerraform(this._cacheTtl),
      cache_ttl_ms: cdktf.numberToTerraform(this._cacheTtlMs),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      credentials: cdktf.stringToTerraform(this._credentials),
      dashboard_name: cdktf.stringToTerraform(this._dashboardName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      external_url: cdktf.stringToTerraform(this._externalUrl),
      id: cdktf.stringToTerraform(this._id),
      idp_name: cdktf.stringToTerraform(this._idpName),
      insights_collector_api_key: cdktf.stringToTerraform(this._insightsCollectorApiKey),
      insights_collector_url: cdktf.stringToTerraform(this._insightsCollectorUrl),
      name: cdktf.stringToTerraform(this._name),
      permissions_user: cdktf.stringToTerraform(this._permissionsUser),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      service_name: cdktf.stringToTerraform(this._serviceName),
      site_url: cdktf.stringToTerraform(this._siteUrl),
      subject: cdktf.stringToTerraform(this._subject),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      webhook_name: cdktf.stringToTerraform(this._webhookName),
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
      api_certificate: {
        value: cdktf.stringToHclTerraform(this._apiCertificate),
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
      api_rate_limit: {
        value: cdktf.numberToHclTerraform(this._apiRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_key: {
        value: cdktf.stringToHclTerraform(this._appKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_ttl: {
        value: cdktf.numberToHclTerraform(this._cacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_ttl_ms: {
        value: cdktf.numberToHclTerraform(this._cacheTtlMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      credentials: {
        value: cdktf.stringToHclTerraform(this._credentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_name: {
        value: cdktf.stringToHclTerraform(this._dashboardName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_url: {
        value: cdktf.stringToHclTerraform(this._externalUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_name: {
        value: cdktf.stringToHclTerraform(this._idpName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insights_collector_api_key: {
        value: cdktf.stringToHclTerraform(this._insightsCollectorApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insights_collector_url: {
        value: cdktf.stringToHclTerraform(this._insightsCollectorUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions_user: {
        value: cdktf.stringToHclTerraform(this._permissionsUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_url: {
        value: cdktf.stringToHclTerraform(this._siteUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject: {
        value: cdktf.stringToHclTerraform(this._subject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_name: {
        value: cdktf.stringToHclTerraform(this._webhookName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
