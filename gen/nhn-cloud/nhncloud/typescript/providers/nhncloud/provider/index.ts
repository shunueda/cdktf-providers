// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NhncloudProviderConfig {
  /**
  * If set to `false`, OpenStack authorization won't be perfomed
  * automatically, if the initial auth token get expired. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#allow_reauth NhncloudProvider#allow_reauth}
  */
  readonly allowReauth?: boolean | cdktf.IResolvable;
  /**
  * Application Credential ID to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#application_credential_id NhncloudProvider#application_credential_id}
  */
  readonly applicationCredentialId?: string;
  /**
  * Application Credential name to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#application_credential_name NhncloudProvider#application_credential_name}
  */
  readonly applicationCredentialName?: string;
  /**
  * Application Credential secret to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#application_credential_secret NhncloudProvider#application_credential_secret}
  */
  readonly applicationCredentialSecret?: string;
  /**
  * The Identity authentication URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#auth_url NhncloudProvider#auth_url}
  */
  readonly authUrl?: string;
  /**
  * A Custom CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#cacert_file NhncloudProvider#cacert_file}
  */
  readonly cacertFile?: string;
  /**
  * A client certificate to authenticate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#cert NhncloudProvider#cert}
  */
  readonly cert?: string;
  /**
  * An entry in a `clouds.yaml` file to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#cloud NhncloudProvider#cloud}
  */
  readonly cloud?: string;
  /**
  * The name of the Domain ID to scope to if no other domain is specified. Defaults to `default` (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#default_domain NhncloudProvider#default_domain}
  */
  readonly defaultDomain?: string;
  /**
  * If set to `false`, OpenStack authorization will be perfomed,
  * every time the service provider client is called. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#delayed_auth NhncloudProvider#delayed_auth}
  */
  readonly delayedAuth?: boolean | cdktf.IResolvable;
  /**
  * If set to `true`, the HTTP `Cache-Control: no-cache` header will not be added by default to all API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#disable_no_cache_header NhncloudProvider#disable_no_cache_header}
  */
  readonly disableNoCacheHeader?: boolean | cdktf.IResolvable;
  /**
  * The ID of the Domain to scope to (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#domain_id NhncloudProvider#domain_id}
  */
  readonly domainId?: string;
  /**
  * The name of the Domain to scope to (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#domain_name NhncloudProvider#domain_name}
  */
  readonly domainName?: string;
  /**
  * Outputs very verbose logs with all calls made to and responses from OpenStack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#enable_logging NhncloudProvider#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * A map of services with an endpoint to override what was
  * from the Keystone catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#endpoint_overrides NhncloudProvider#endpoint_overrides}
  */
  readonly endpointOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#endpoint_type NhncloudProvider#endpoint_type}
  */
  readonly endpointType?: string;
  /**
  * Trust self-signed certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#insecure NhncloudProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * A client private key to authenticate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#key NhncloudProvider#key}
  */
  readonly key?: string;
  /**
  * How many times HTTP connection should be retried until giving up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#max_retries NhncloudProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Password to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#password NhncloudProvider#password}
  */
  readonly password?: string;
  /**
  * The ID of the domain where the proejct resides (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#project_domain_id NhncloudProvider#project_domain_id}
  */
  readonly projectDomainId?: string;
  /**
  * The name of the domain where the project resides (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#project_domain_name NhncloudProvider#project_domain_name}
  */
  readonly projectDomainName?: string;
  /**
  * The NHN Cloud region to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#region NhncloudProvider#region}
  */
  readonly region?: string;
  /**
  * Use Swift's authentication system instead of Keystone. Only used for
  * interaction with Swift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#swauth NhncloudProvider#swauth}
  */
  readonly swauth?: boolean | cdktf.IResolvable;
  /**
  * If set to `true`, system scoped authorization will be enabled. Defaults to `false` (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#system_scope NhncloudProvider#system_scope}
  */
  readonly systemScope?: boolean | cdktf.IResolvable;
  /**
  * The ID of the Tenant (Identity v2) or Project (Identity v3)
  * to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#tenant_id NhncloudProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * The name of the Tenant (Identity v2) or Project (Identity v3)
  * to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#tenant_name NhncloudProvider#tenant_name}
  */
  readonly tenantName?: string;
  /**
  * Authentication token to use as an alternative to username/password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#token NhncloudProvider#token}
  */
  readonly token?: string;
  /**
  * If set to `true`, API requests will go the Load Balancer
  * service (Octavia) instead of the Networking service (Neutron).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#use_octavia NhncloudProvider#use_octavia}
  */
  readonly useOctavia?: boolean | cdktf.IResolvable;
  /**
  * The ID of the domain where the user resides (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#user_domain_id NhncloudProvider#user_domain_id}
  */
  readonly userDomainId?: string;
  /**
  * The name of the domain where the user resides (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#user_domain_name NhncloudProvider#user_domain_name}
  */
  readonly userDomainName?: string;
  /**
  * Username to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#user_id NhncloudProvider#user_id}
  */
  readonly userId?: string;
  /**
  * Username to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#user_name NhncloudProvider#user_name}
  */
  readonly userName?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#alias NhncloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs nhncloud}
*/
export class NhncloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NhncloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NhncloudProvider to import
  * @param importFromId The id of the existing NhncloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NhncloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs nhncloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NhncloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NhncloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nhncloud',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.7',
        providerVersionConstraint: '1.0.7'
      },
      terraformProviderSource: 'nhn-cloud/nhncloud'
    });
    this._allowReauth = config.allowReauth;
    this._applicationCredentialId = config.applicationCredentialId;
    this._applicationCredentialName = config.applicationCredentialName;
    this._applicationCredentialSecret = config.applicationCredentialSecret;
    this._authUrl = config.authUrl;
    this._cacertFile = config.cacertFile;
    this._cert = config.cert;
    this._cloud = config.cloud;
    this._defaultDomain = config.defaultDomain;
    this._delayedAuth = config.delayedAuth;
    this._disableNoCacheHeader = config.disableNoCacheHeader;
    this._domainId = config.domainId;
    this._domainName = config.domainName;
    this._enableLogging = config.enableLogging;
    this._endpointOverrides = config.endpointOverrides;
    this._endpointType = config.endpointType;
    this._insecure = config.insecure;
    this._key = config.key;
    this._maxRetries = config.maxRetries;
    this._password = config.password;
    this._projectDomainId = config.projectDomainId;
    this._projectDomainName = config.projectDomainName;
    this._region = config.region;
    this._swauth = config.swauth;
    this._systemScope = config.systemScope;
    this._tenantId = config.tenantId;
    this._tenantName = config.tenantName;
    this._token = config.token;
    this._useOctavia = config.useOctavia;
    this._userDomainId = config.userDomainId;
    this._userDomainName = config.userDomainName;
    this._userId = config.userId;
    this._userName = config.userName;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_reauth - computed: false, optional: true, required: false
  private _allowReauth?: boolean | cdktf.IResolvable; 
  public get allowReauth() {
    return this._allowReauth;
  }
  public set allowReauth(value: boolean | cdktf.IResolvable | undefined) {
    this._allowReauth = value;
  }
  public resetAllowReauth() {
    this._allowReauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowReauthInput() {
    return this._allowReauth;
  }

  // application_credential_id - computed: false, optional: true, required: false
  private _applicationCredentialId?: string; 
  public get applicationCredentialId() {
    return this._applicationCredentialId;
  }
  public set applicationCredentialId(value: string | undefined) {
    this._applicationCredentialId = value;
  }
  public resetApplicationCredentialId() {
    this._applicationCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationCredentialIdInput() {
    return this._applicationCredentialId;
  }

  // application_credential_name - computed: false, optional: true, required: false
  private _applicationCredentialName?: string; 
  public get applicationCredentialName() {
    return this._applicationCredentialName;
  }
  public set applicationCredentialName(value: string | undefined) {
    this._applicationCredentialName = value;
  }
  public resetApplicationCredentialName() {
    this._applicationCredentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationCredentialNameInput() {
    return this._applicationCredentialName;
  }

  // application_credential_secret - computed: false, optional: true, required: false
  private _applicationCredentialSecret?: string; 
  public get applicationCredentialSecret() {
    return this._applicationCredentialSecret;
  }
  public set applicationCredentialSecret(value: string | undefined) {
    this._applicationCredentialSecret = value;
  }
  public resetApplicationCredentialSecret() {
    this._applicationCredentialSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationCredentialSecretInput() {
    return this._applicationCredentialSecret;
  }

  // auth_url - computed: false, optional: true, required: false
  private _authUrl?: string; 
  public get authUrl() {
    return this._authUrl;
  }
  public set authUrl(value: string | undefined) {
    this._authUrl = value;
  }
  public resetAuthUrl() {
    this._authUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // cacert_file - computed: false, optional: true, required: false
  private _cacertFile?: string; 
  public get cacertFile() {
    return this._cacertFile;
  }
  public set cacertFile(value: string | undefined) {
    this._cacertFile = value;
  }
  public resetCacertFile() {
    this._cacertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertFileInput() {
    return this._cacertFile;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this._cert;
  }
  public set cert(value: string | undefined) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this._cloud;
  }
  public set cloud(value: string | undefined) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // default_domain - computed: false, optional: true, required: false
  private _defaultDomain?: string; 
  public get defaultDomain() {
    return this._defaultDomain;
  }
  public set defaultDomain(value: string | undefined) {
    this._defaultDomain = value;
  }
  public resetDefaultDomain() {
    this._defaultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDomainInput() {
    return this._defaultDomain;
  }

  // delayed_auth - computed: false, optional: true, required: false
  private _delayedAuth?: boolean | cdktf.IResolvable; 
  public get delayedAuth() {
    return this._delayedAuth;
  }
  public set delayedAuth(value: boolean | cdktf.IResolvable | undefined) {
    this._delayedAuth = value;
  }
  public resetDelayedAuth() {
    this._delayedAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayedAuthInput() {
    return this._delayedAuth;
  }

  // disable_no_cache_header - computed: false, optional: true, required: false
  private _disableNoCacheHeader?: boolean | cdktf.IResolvable; 
  public get disableNoCacheHeader() {
    return this._disableNoCacheHeader;
  }
  public set disableNoCacheHeader(value: boolean | cdktf.IResolvable | undefined) {
    this._disableNoCacheHeader = value;
  }
  public resetDisableNoCacheHeader() {
    this._disableNoCacheHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNoCacheHeaderInput() {
    return this._disableNoCacheHeader;
  }

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this._domainId;
  }
  public set domainId(value: string | undefined) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this._domainName;
  }
  public set domainName(value: string | undefined) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this._enableLogging;
  }
  public set enableLogging(value: boolean | cdktf.IResolvable | undefined) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // endpoint_overrides - computed: false, optional: true, required: false
  private _endpointOverrides?: { [key: string]: string }; 
  public get endpointOverrides() {
    return this._endpointOverrides;
  }
  public set endpointOverrides(value: { [key: string]: string } | undefined) {
    this._endpointOverrides = value;
  }
  public resetEndpointOverrides() {
    this._endpointOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointOverridesInput() {
    return this._endpointOverrides;
  }

  // endpoint_type - computed: false, optional: true, required: false
  private _endpointType?: string; 
  public get endpointType() {
    return this._endpointType;
  }
  public set endpointType(value: string | undefined) {
    this._endpointType = value;
  }
  public resetEndpointType() {
    this._endpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this._key;
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
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

  // project_domain_id - computed: false, optional: true, required: false
  private _projectDomainId?: string; 
  public get projectDomainId() {
    return this._projectDomainId;
  }
  public set projectDomainId(value: string | undefined) {
    this._projectDomainId = value;
  }
  public resetProjectDomainId() {
    this._projectDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectDomainIdInput() {
    return this._projectDomainId;
  }

  // project_domain_name - computed: false, optional: true, required: false
  private _projectDomainName?: string; 
  public get projectDomainName() {
    return this._projectDomainName;
  }
  public set projectDomainName(value: string | undefined) {
    this._projectDomainName = value;
  }
  public resetProjectDomainName() {
    this._projectDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectDomainNameInput() {
    return this._projectDomainName;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // swauth - computed: false, optional: true, required: false
  private _swauth?: boolean | cdktf.IResolvable; 
  public get swauth() {
    return this._swauth;
  }
  public set swauth(value: boolean | cdktf.IResolvable | undefined) {
    this._swauth = value;
  }
  public resetSwauth() {
    this._swauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swauthInput() {
    return this._swauth;
  }

  // system_scope - computed: false, optional: true, required: false
  private _systemScope?: boolean | cdktf.IResolvable; 
  public get systemScope() {
    return this._systemScope;
  }
  public set systemScope(value: boolean | cdktf.IResolvable | undefined) {
    this._systemScope = value;
  }
  public resetSystemScope() {
    this._systemScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemScopeInput() {
    return this._systemScope;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // tenant_name - computed: false, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this._tenantName;
  }
  public set tenantName(value: string | undefined) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // use_octavia - computed: false, optional: true, required: false
  private _useOctavia?: boolean | cdktf.IResolvable; 
  public get useOctavia() {
    return this._useOctavia;
  }
  public set useOctavia(value: boolean | cdktf.IResolvable | undefined) {
    this._useOctavia = value;
  }
  public resetUseOctavia() {
    this._useOctavia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOctaviaInput() {
    return this._useOctavia;
  }

  // user_domain_id - computed: false, optional: true, required: false
  private _userDomainId?: string; 
  public get userDomainId() {
    return this._userDomainId;
  }
  public set userDomainId(value: string | undefined) {
    this._userDomainId = value;
  }
  public resetUserDomainId() {
    this._userDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDomainIdInput() {
    return this._userDomainId;
  }

  // user_domain_name - computed: false, optional: true, required: false
  private _userDomainName?: string; 
  public get userDomainName() {
    return this._userDomainName;
  }
  public set userDomainName(value: string | undefined) {
    this._userDomainName = value;
  }
  public resetUserDomainName() {
    this._userDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDomainNameInput() {
    return this._userDomainName;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this._userId;
  }
  public set userId(value: string | undefined) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this._userName;
  }
  public set userName(value: string | undefined) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
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
      allow_reauth: cdktf.booleanToTerraform(this._allowReauth),
      application_credential_id: cdktf.stringToTerraform(this._applicationCredentialId),
      application_credential_name: cdktf.stringToTerraform(this._applicationCredentialName),
      application_credential_secret: cdktf.stringToTerraform(this._applicationCredentialSecret),
      auth_url: cdktf.stringToTerraform(this._authUrl),
      cacert_file: cdktf.stringToTerraform(this._cacertFile),
      cert: cdktf.stringToTerraform(this._cert),
      cloud: cdktf.stringToTerraform(this._cloud),
      default_domain: cdktf.stringToTerraform(this._defaultDomain),
      delayed_auth: cdktf.booleanToTerraform(this._delayedAuth),
      disable_no_cache_header: cdktf.booleanToTerraform(this._disableNoCacheHeader),
      domain_id: cdktf.stringToTerraform(this._domainId),
      domain_name: cdktf.stringToTerraform(this._domainName),
      enable_logging: cdktf.booleanToTerraform(this._enableLogging),
      endpoint_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(this._endpointOverrides),
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      insecure: cdktf.booleanToTerraform(this._insecure),
      key: cdktf.stringToTerraform(this._key),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      password: cdktf.stringToTerraform(this._password),
      project_domain_id: cdktf.stringToTerraform(this._projectDomainId),
      project_domain_name: cdktf.stringToTerraform(this._projectDomainName),
      region: cdktf.stringToTerraform(this._region),
      swauth: cdktf.booleanToTerraform(this._swauth),
      system_scope: cdktf.booleanToTerraform(this._systemScope),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
      token: cdktf.stringToTerraform(this._token),
      use_octavia: cdktf.booleanToTerraform(this._useOctavia),
      user_domain_id: cdktf.stringToTerraform(this._userDomainId),
      user_domain_name: cdktf.stringToTerraform(this._userDomainName),
      user_id: cdktf.stringToTerraform(this._userId),
      user_name: cdktf.stringToTerraform(this._userName),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_reauth: {
        value: cdktf.booleanToHclTerraform(this._allowReauth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      application_credential_id: {
        value: cdktf.stringToHclTerraform(this._applicationCredentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_credential_name: {
        value: cdktf.stringToHclTerraform(this._applicationCredentialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_credential_secret: {
        value: cdktf.stringToHclTerraform(this._applicationCredentialSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_url: {
        value: cdktf.stringToHclTerraform(this._authUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cacert_file: {
        value: cdktf.stringToHclTerraform(this._cacertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_domain: {
        value: cdktf.stringToHclTerraform(this._defaultDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delayed_auth: {
        value: cdktf.booleanToHclTerraform(this._delayedAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_no_cache_header: {
        value: cdktf.booleanToHclTerraform(this._disableNoCacheHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_logging: {
        value: cdktf.booleanToHclTerraform(this._enableLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_overrides: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._endpointOverrides),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      endpoint_type: {
        value: cdktf.stringToHclTerraform(this._endpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_domain_id: {
        value: cdktf.stringToHclTerraform(this._projectDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_domain_name: {
        value: cdktf.stringToHclTerraform(this._projectDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      swauth: {
        value: cdktf.booleanToHclTerraform(this._swauth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      system_scope: {
        value: cdktf.booleanToHclTerraform(this._systemScope),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_octavia: {
        value: cdktf.booleanToHclTerraform(this._useOctavia),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_domain_id: {
        value: cdktf.stringToHclTerraform(this._userDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_domain_name: {
        value: cdktf.stringToHclTerraform(this._userDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
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
