// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpentelekomcloudProviderConfig {
  /**
  * The access key for API operations. You can retrieve this
  * from the 'My Credential' section of the console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#access_key OpentelekomcloudProvider#access_key}
  */
  readonly accessKey?: string;
  /**
  * The name of domain who created the agency (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#agency_domain_name OpentelekomcloudProvider#agency_domain_name}
  */
  readonly agencyDomainName?: string;
  /**
  * The name of agency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#agency_name OpentelekomcloudProvider#agency_name}
  */
  readonly agencyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#allow_reauth OpentelekomcloudProvider#allow_reauth}
  */
  readonly allowReauth?: boolean | cdktf.IResolvable;
  /**
  * The Identity authentication URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#auth_url OpentelekomcloudProvider#auth_url}
  */
  readonly authUrl?: string;
  /**
  * Timeout in seconds for backoff retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#backoff_retry_timeout OpentelekomcloudProvider#backoff_retry_timeout}
  */
  readonly backoffRetryTimeout?: number;
  /**
  * A Custom CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#cacert_file OpentelekomcloudProvider#cacert_file}
  */
  readonly cacertFile?: string;
  /**
  * A client certificate to authenticate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#cert OpentelekomcloudProvider#cert}
  */
  readonly cert?: string;
  /**
  * An entry in a `clouds.yaml` file to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#cloud OpentelekomcloudProvider#cloud}
  */
  readonly cloud?: string;
  /**
  * The name of delegated project (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#delegated_project OpentelekomcloudProvider#delegated_project}
  */
  readonly delegatedProject?: string;
  /**
  * The ID of the Domain to scope to (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#domain_id OpentelekomcloudProvider#domain_id}
  */
  readonly domainId?: string;
  /**
  * The name of the Domain to scope to (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#domain_name OpentelekomcloudProvider#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#endpoint_type OpentelekomcloudProvider#endpoint_type}
  */
  readonly endpointType?: string;
  /**
  * enterprise project id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#enterprise_project_id OpentelekomcloudProvider#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Trust self-signed certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#insecure OpentelekomcloudProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * A client private key to authenticate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#key OpentelekomcloudProvider#key}
  */
  readonly key?: string;
  /**
  * How many times HTTP request should be retried when rate limit reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#max_backoff_retries OpentelekomcloudProvider#max_backoff_retries}
  */
  readonly maxBackoffRetries?: number;
  /**
  * How many times HTTP connection should be retried until giving up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#max_retries OpentelekomcloudProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * One-time MFA passcode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#passcode OpentelekomcloudProvider#passcode}
  */
  readonly passcode?: string;
  /**
  * Password to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#password OpentelekomcloudProvider#password}
  */
  readonly password?: string;
  /**
  * The OpenTelekomCloud region to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#region OpentelekomcloudProvider#region}
  */
  readonly region?: string;
  /**
  * The secret key for API operations. You can retrieve this
  * from the 'My Credential' section of the console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#secret_key OpentelekomcloudProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Security token to use for OBS federated authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#security_token OpentelekomcloudProvider#security_token}
  */
  readonly securityToken?: string;
  /**
  * Use Swift's authentication system instead of Keystone. Only used for
  * interaction with Swift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#swauth OpentelekomcloudProvider#swauth}
  */
  readonly swauth?: boolean | cdktf.IResolvable;
  /**
  * The ID of the Tenant (Identity v2) or Project (Identity v3)
  * to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#tenant_id OpentelekomcloudProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * The name of the Tenant (Identity v2) or Project (Identity v3)
  * to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#tenant_name OpentelekomcloudProvider#tenant_name}
  */
  readonly tenantName?: string;
  /**
  * Authentication token to use as an alternative to username/password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#token OpentelekomcloudProvider#token}
  */
  readonly token?: string;
  /**
  * User ID to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#user_id OpentelekomcloudProvider#user_id}
  */
  readonly userId?: string;
  /**
  * Username to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#user_name OpentelekomcloudProvider#user_name}
  */
  readonly userName?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#alias OpentelekomcloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs opentelekomcloud}
*/
export class OpentelekomcloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpentelekomcloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpentelekomcloudProvider to import
  * @param importFromId The id of the existing OpentelekomcloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpentelekomcloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs opentelekomcloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpentelekomcloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OpentelekomcloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.54',
        providerVersionConstraint: '1.36.54'
      },
      terraformProviderSource: 'opentelekomcloud/opentelekomcloud'
    });
    this._accessKey = config.accessKey;
    this._agencyDomainName = config.agencyDomainName;
    this._agencyName = config.agencyName;
    this._allowReauth = config.allowReauth;
    this._authUrl = config.authUrl;
    this._backoffRetryTimeout = config.backoffRetryTimeout;
    this._cacertFile = config.cacertFile;
    this._cert = config.cert;
    this._cloud = config.cloud;
    this._delegatedProject = config.delegatedProject;
    this._domainId = config.domainId;
    this._domainName = config.domainName;
    this._endpointType = config.endpointType;
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._insecure = config.insecure;
    this._key = config.key;
    this._maxBackoffRetries = config.maxBackoffRetries;
    this._maxRetries = config.maxRetries;
    this._passcode = config.passcode;
    this._password = config.password;
    this._region = config.region;
    this._secretKey = config.secretKey;
    this._securityToken = config.securityToken;
    this._swauth = config.swauth;
    this._tenantId = config.tenantId;
    this._tenantName = config.tenantName;
    this._token = config.token;
    this._userId = config.userId;
    this._userName = config.userName;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this._accessKey;
  }
  public set accessKey(value: string | undefined) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // agency_domain_name - computed: false, optional: true, required: false
  private _agencyDomainName?: string; 
  public get agencyDomainName() {
    return this._agencyDomainName;
  }
  public set agencyDomainName(value: string | undefined) {
    this._agencyDomainName = value;
  }
  public resetAgencyDomainName() {
    this._agencyDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agencyDomainNameInput() {
    return this._agencyDomainName;
  }

  // agency_name - computed: false, optional: true, required: false
  private _agencyName?: string; 
  public get agencyName() {
    return this._agencyName;
  }
  public set agencyName(value: string | undefined) {
    this._agencyName = value;
  }
  public resetAgencyName() {
    this._agencyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agencyNameInput() {
    return this._agencyName;
  }

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

  // backoff_retry_timeout - computed: false, optional: true, required: false
  private _backoffRetryTimeout?: number; 
  public get backoffRetryTimeout() {
    return this._backoffRetryTimeout;
  }
  public set backoffRetryTimeout(value: number | undefined) {
    this._backoffRetryTimeout = value;
  }
  public resetBackoffRetryTimeout() {
    this._backoffRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffRetryTimeoutInput() {
    return this._backoffRetryTimeout;
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

  // delegated_project - computed: false, optional: true, required: false
  private _delegatedProject?: string; 
  public get delegatedProject() {
    return this._delegatedProject;
  }
  public set delegatedProject(value: string | undefined) {
    this._delegatedProject = value;
  }
  public resetDelegatedProject() {
    this._delegatedProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedProjectInput() {
    return this._delegatedProject;
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

  // enterprise_project_id - computed: false, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this._enterpriseProjectId;
  }
  public set enterpriseProjectId(value: string | undefined) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
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

  // max_backoff_retries - computed: false, optional: true, required: false
  private _maxBackoffRetries?: number; 
  public get maxBackoffRetries() {
    return this._maxBackoffRetries;
  }
  public set maxBackoffRetries(value: number | undefined) {
    this._maxBackoffRetries = value;
  }
  public resetMaxBackoffRetries() {
    this._maxBackoffRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackoffRetriesInput() {
    return this._maxBackoffRetries;
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

  // passcode - computed: false, optional: true, required: false
  private _passcode?: string; 
  public get passcode() {
    return this._passcode;
  }
  public set passcode(value: string | undefined) {
    this._passcode = value;
  }
  public resetPasscode() {
    this._passcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeInput() {
    return this._passcode;
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

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this._secretKey;
  }
  public set secretKey(value: string | undefined) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // security_token - computed: false, optional: true, required: false
  private _securityToken?: string; 
  public get securityToken() {
    return this._securityToken;
  }
  public set securityToken(value: string | undefined) {
    this._securityToken = value;
  }
  public resetSecurityToken() {
    this._securityToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTokenInput() {
    return this._securityToken;
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
      access_key: cdktf.stringToTerraform(this._accessKey),
      agency_domain_name: cdktf.stringToTerraform(this._agencyDomainName),
      agency_name: cdktf.stringToTerraform(this._agencyName),
      allow_reauth: cdktf.booleanToTerraform(this._allowReauth),
      auth_url: cdktf.stringToTerraform(this._authUrl),
      backoff_retry_timeout: cdktf.numberToTerraform(this._backoffRetryTimeout),
      cacert_file: cdktf.stringToTerraform(this._cacertFile),
      cert: cdktf.stringToTerraform(this._cert),
      cloud: cdktf.stringToTerraform(this._cloud),
      delegated_project: cdktf.stringToTerraform(this._delegatedProject),
      domain_id: cdktf.stringToTerraform(this._domainId),
      domain_name: cdktf.stringToTerraform(this._domainName),
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      insecure: cdktf.booleanToTerraform(this._insecure),
      key: cdktf.stringToTerraform(this._key),
      max_backoff_retries: cdktf.numberToTerraform(this._maxBackoffRetries),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      passcode: cdktf.stringToTerraform(this._passcode),
      password: cdktf.stringToTerraform(this._password),
      region: cdktf.stringToTerraform(this._region),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      security_token: cdktf.stringToTerraform(this._securityToken),
      swauth: cdktf.booleanToTerraform(this._swauth),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
      token: cdktf.stringToTerraform(this._token),
      user_id: cdktf.stringToTerraform(this._userId),
      user_name: cdktf.stringToTerraform(this._userName),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agency_domain_name: {
        value: cdktf.stringToHclTerraform(this._agencyDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agency_name: {
        value: cdktf.stringToHclTerraform(this._agencyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_reauth: {
        value: cdktf.booleanToHclTerraform(this._allowReauth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_url: {
        value: cdktf.stringToHclTerraform(this._authUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backoff_retry_timeout: {
        value: cdktf.numberToHclTerraform(this._backoffRetryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      delegated_project: {
        value: cdktf.stringToHclTerraform(this._delegatedProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      endpoint_type: {
        value: cdktf.stringToHclTerraform(this._endpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_project_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectId),
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
      max_backoff_retries: {
        value: cdktf.numberToHclTerraform(this._maxBackoffRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      passcode: {
        value: cdktf.stringToHclTerraform(this._passcode),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_token: {
        value: cdktf.stringToHclTerraform(this._securityToken),
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
