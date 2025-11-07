// https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HsdpProviderConfig {
  /**
  * The Cartel host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#cartel_host HsdpProvider#cartel_host}
  */
  readonly cartelHost?: string;
  /**
  * Disable TLS for Cartel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#cartel_no_tls HsdpProvider#cartel_no_tls}
  */
  readonly cartelNoTls?: boolean | cdktf.IResolvable;
  /**
  * The Cartel secret key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#cartel_secret HsdpProvider#cartel_secret}
  */
  readonly cartelSecret?: string;
  /**
  * Skip certificate verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#cartel_skip_verify HsdpProvider#cartel_skip_verify}
  */
  readonly cartelSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * The Cartel token key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#cartel_token HsdpProvider#cartel_token}
  */
  readonly cartelToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#credentials HsdpProvider#credentials}
  */
  readonly credentials?: string;
  /**
  * The log file to write debugging output to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#debug_log HsdpProvider#debug_log}
  */
  readonly debugLog?: string;
  /**
  * Debug to stderr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#debug_stderr HsdpProvider#debug_stderr}
  */
  readonly debugStderr?: boolean | cdktf.IResolvable;
  /**
  * The HSDP environment to configure for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#environment HsdpProvider#environment}
  */
  readonly environment?: string;
  /**
  * The HSDP IAM instance URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#iam_url HsdpProvider#iam_url}
  */
  readonly iamUrl?: string;
  /**
  * The HSDP IDM instance URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#idm_url HsdpProvider#idm_url}
  */
  readonly idmUrl?: string;
  /**
  * The Connect MDM URL to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#mdm_url HsdpProvider#mdm_url}
  */
  readonly mdmUrl?: string;
  /**
  * The HSDP Notification service base URL to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#notification_url HsdpProvider#notification_url}
  */
  readonly notificationUrl?: string;
  /**
  * The OAuth2 client id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#oauth2_client_id HsdpProvider#oauth2_client_id}
  */
  readonly oauth2ClientId?: string;
  /**
  * The OAuth2 password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#oauth2_password HsdpProvider#oauth2_password}
  */
  readonly oauth2Password?: string;
  /**
  * The password of the Organization Admin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#org_admin_password HsdpProvider#org_admin_password}
  */
  readonly orgAdminPassword?: string;
  /**
  * The username of the Organization Admin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#org_admin_username HsdpProvider#org_admin_username}
  */
  readonly orgAdminUsername?: string;
  /**
  * The HSDP region to configure for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#region HsdpProvider#region}
  */
  readonly region?: string;
  /**
  * Maximum number of retries for API requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#retry_max HsdpProvider#retry_max}
  */
  readonly retryMax?: number;
  /**
  * The HSDP S3 Credentials instance URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#s3creds_url HsdpProvider#s3creds_url}
  */
  readonly s3CredsUrl?: string;
  /**
  * The secret key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#secret_key HsdpProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The service ID to use as Organization Admin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#service_id HsdpProvider#service_id}
  */
  readonly serviceId?: string;
  /**
  * The private key of the service ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#service_private_key HsdpProvider#service_private_key}
  */
  readonly servicePrivateKey?: string;
  /**
  * The shared key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#shared_key HsdpProvider#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * The password of the Cloudfoundry account to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#uaa_password HsdpProvider#uaa_password}
  */
  readonly uaaPassword?: string;
  /**
  * The URL of the UAA server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#uaa_url HsdpProvider#uaa_url}
  */
  readonly uaaUrl?: string;
  /**
  * The username of the Cloudfoundry account to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#uaa_username HsdpProvider#uaa_username}
  */
  readonly uaaUsername?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#alias HsdpProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs hsdp}
*/
export class HsdpProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HsdpProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HsdpProvider to import
  * @param importFromId The id of the existing HsdpProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HsdpProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs hsdp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HsdpProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HsdpProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hsdp',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.70.0'
      },
      terraformProviderSource: 'philips-software/hsdp'
    });
    this._cartelHost = config.cartelHost;
    this._cartelNoTls = config.cartelNoTls;
    this._cartelSecret = config.cartelSecret;
    this._cartelSkipVerify = config.cartelSkipVerify;
    this._cartelToken = config.cartelToken;
    this._credentials = config.credentials;
    this._debugLog = config.debugLog;
    this._debugStderr = config.debugStderr;
    this._environment = config.environment;
    this._iamUrl = config.iamUrl;
    this._idmUrl = config.idmUrl;
    this._mdmUrl = config.mdmUrl;
    this._notificationUrl = config.notificationUrl;
    this._oauth2ClientId = config.oauth2ClientId;
    this._oauth2Password = config.oauth2Password;
    this._orgAdminPassword = config.orgAdminPassword;
    this._orgAdminUsername = config.orgAdminUsername;
    this._region = config.region;
    this._retryMax = config.retryMax;
    this._s3CredsUrl = config.s3CredsUrl;
    this._secretKey = config.secretKey;
    this._serviceId = config.serviceId;
    this._servicePrivateKey = config.servicePrivateKey;
    this._sharedKey = config.sharedKey;
    this._uaaPassword = config.uaaPassword;
    this._uaaUrl = config.uaaUrl;
    this._uaaUsername = config.uaaUsername;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cartel_host - computed: false, optional: true, required: false
  private _cartelHost?: string; 
  public get cartelHost() {
    return this._cartelHost;
  }
  public set cartelHost(value: string | undefined) {
    this._cartelHost = value;
  }
  public resetCartelHost() {
    this._cartelHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cartelHostInput() {
    return this._cartelHost;
  }

  // cartel_no_tls - computed: false, optional: true, required: false
  private _cartelNoTls?: boolean | cdktf.IResolvable; 
  public get cartelNoTls() {
    return this._cartelNoTls;
  }
  public set cartelNoTls(value: boolean | cdktf.IResolvable | undefined) {
    this._cartelNoTls = value;
  }
  public resetCartelNoTls() {
    this._cartelNoTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cartelNoTlsInput() {
    return this._cartelNoTls;
  }

  // cartel_secret - computed: false, optional: true, required: false
  private _cartelSecret?: string; 
  public get cartelSecret() {
    return this._cartelSecret;
  }
  public set cartelSecret(value: string | undefined) {
    this._cartelSecret = value;
  }
  public resetCartelSecret() {
    this._cartelSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cartelSecretInput() {
    return this._cartelSecret;
  }

  // cartel_skip_verify - computed: false, optional: true, required: false
  private _cartelSkipVerify?: boolean | cdktf.IResolvable; 
  public get cartelSkipVerify() {
    return this._cartelSkipVerify;
  }
  public set cartelSkipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._cartelSkipVerify = value;
  }
  public resetCartelSkipVerify() {
    this._cartelSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cartelSkipVerifyInput() {
    return this._cartelSkipVerify;
  }

  // cartel_token - computed: false, optional: true, required: false
  private _cartelToken?: string; 
  public get cartelToken() {
    return this._cartelToken;
  }
  public set cartelToken(value: string | undefined) {
    this._cartelToken = value;
  }
  public resetCartelToken() {
    this._cartelToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cartelTokenInput() {
    return this._cartelToken;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this._credentials;
  }
  public set credentials(value: string | undefined) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // debug_log - computed: false, optional: true, required: false
  private _debugLog?: string; 
  public get debugLog() {
    return this._debugLog;
  }
  public set debugLog(value: string | undefined) {
    this._debugLog = value;
  }
  public resetDebugLog() {
    this._debugLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLogInput() {
    return this._debugLog;
  }

  // debug_stderr - computed: false, optional: true, required: false
  private _debugStderr?: boolean | cdktf.IResolvable; 
  public get debugStderr() {
    return this._debugStderr;
  }
  public set debugStderr(value: boolean | cdktf.IResolvable | undefined) {
    this._debugStderr = value;
  }
  public resetDebugStderr() {
    this._debugStderr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugStderrInput() {
    return this._debugStderr;
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

  // iam_url - computed: false, optional: true, required: false
  private _iamUrl?: string; 
  public get iamUrl() {
    return this._iamUrl;
  }
  public set iamUrl(value: string | undefined) {
    this._iamUrl = value;
  }
  public resetIamUrl() {
    this._iamUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamUrlInput() {
    return this._iamUrl;
  }

  // idm_url - computed: false, optional: true, required: false
  private _idmUrl?: string; 
  public get idmUrl() {
    return this._idmUrl;
  }
  public set idmUrl(value: string | undefined) {
    this._idmUrl = value;
  }
  public resetIdmUrl() {
    this._idmUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idmUrlInput() {
    return this._idmUrl;
  }

  // mdm_url - computed: false, optional: true, required: false
  private _mdmUrl?: string; 
  public get mdmUrl() {
    return this._mdmUrl;
  }
  public set mdmUrl(value: string | undefined) {
    this._mdmUrl = value;
  }
  public resetMdmUrl() {
    this._mdmUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmUrlInput() {
    return this._mdmUrl;
  }

  // notification_url - computed: false, optional: true, required: false
  private _notificationUrl?: string; 
  public get notificationUrl() {
    return this._notificationUrl;
  }
  public set notificationUrl(value: string | undefined) {
    this._notificationUrl = value;
  }
  public resetNotificationUrl() {
    this._notificationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationUrlInput() {
    return this._notificationUrl;
  }

  // oauth2_client_id - computed: false, optional: true, required: false
  private _oauth2ClientId?: string; 
  public get oauth2ClientId() {
    return this._oauth2ClientId;
  }
  public set oauth2ClientId(value: string | undefined) {
    this._oauth2ClientId = value;
  }
  public resetOauth2ClientId() {
    this._oauth2ClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientIdInput() {
    return this._oauth2ClientId;
  }

  // oauth2_password - computed: false, optional: true, required: false
  private _oauth2Password?: string; 
  public get oauth2Password() {
    return this._oauth2Password;
  }
  public set oauth2Password(value: string | undefined) {
    this._oauth2Password = value;
  }
  public resetOauth2Password() {
    this._oauth2Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2PasswordInput() {
    return this._oauth2Password;
  }

  // org_admin_password - computed: false, optional: true, required: false
  private _orgAdminPassword?: string; 
  public get orgAdminPassword() {
    return this._orgAdminPassword;
  }
  public set orgAdminPassword(value: string | undefined) {
    this._orgAdminPassword = value;
  }
  public resetOrgAdminPassword() {
    this._orgAdminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgAdminPasswordInput() {
    return this._orgAdminPassword;
  }

  // org_admin_username - computed: false, optional: true, required: false
  private _orgAdminUsername?: string; 
  public get orgAdminUsername() {
    return this._orgAdminUsername;
  }
  public set orgAdminUsername(value: string | undefined) {
    this._orgAdminUsername = value;
  }
  public resetOrgAdminUsername() {
    this._orgAdminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgAdminUsernameInput() {
    return this._orgAdminUsername;
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

  // retry_max - computed: false, optional: true, required: false
  private _retryMax?: number; 
  public get retryMax() {
    return this._retryMax;
  }
  public set retryMax(value: number | undefined) {
    this._retryMax = value;
  }
  public resetRetryMax() {
    this._retryMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMaxInput() {
    return this._retryMax;
  }

  // s3creds_url - computed: false, optional: true, required: false
  private _s3CredsUrl?: string; 
  public get s3CredsUrl() {
    return this._s3CredsUrl;
  }
  public set s3CredsUrl(value: string | undefined) {
    this._s3CredsUrl = value;
  }
  public resetS3CredsUrl() {
    this._s3CredsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3CredsUrlInput() {
    return this._s3CredsUrl;
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

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this._serviceId;
  }
  public set serviceId(value: string | undefined) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_private_key - computed: false, optional: true, required: false
  private _servicePrivateKey?: string; 
  public get servicePrivateKey() {
    return this._servicePrivateKey;
  }
  public set servicePrivateKey(value: string | undefined) {
    this._servicePrivateKey = value;
  }
  public resetServicePrivateKey() {
    this._servicePrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrivateKeyInput() {
    return this._servicePrivateKey;
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string; 
  public get sharedKey() {
    return this._sharedKey;
  }
  public set sharedKey(value: string | undefined) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
  }

  // uaa_password - computed: false, optional: true, required: false
  private _uaaPassword?: string; 
  public get uaaPassword() {
    return this._uaaPassword;
  }
  public set uaaPassword(value: string | undefined) {
    this._uaaPassword = value;
  }
  public resetUaaPassword() {
    this._uaaPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uaaPasswordInput() {
    return this._uaaPassword;
  }

  // uaa_url - computed: false, optional: true, required: false
  private _uaaUrl?: string; 
  public get uaaUrl() {
    return this._uaaUrl;
  }
  public set uaaUrl(value: string | undefined) {
    this._uaaUrl = value;
  }
  public resetUaaUrl() {
    this._uaaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uaaUrlInput() {
    return this._uaaUrl;
  }

  // uaa_username - computed: false, optional: true, required: false
  private _uaaUsername?: string; 
  public get uaaUsername() {
    return this._uaaUsername;
  }
  public set uaaUsername(value: string | undefined) {
    this._uaaUsername = value;
  }
  public resetUaaUsername() {
    this._uaaUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uaaUsernameInput() {
    return this._uaaUsername;
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
      cartel_host: cdktf.stringToTerraform(this._cartelHost),
      cartel_no_tls: cdktf.booleanToTerraform(this._cartelNoTls),
      cartel_secret: cdktf.stringToTerraform(this._cartelSecret),
      cartel_skip_verify: cdktf.booleanToTerraform(this._cartelSkipVerify),
      cartel_token: cdktf.stringToTerraform(this._cartelToken),
      credentials: cdktf.stringToTerraform(this._credentials),
      debug_log: cdktf.stringToTerraform(this._debugLog),
      debug_stderr: cdktf.booleanToTerraform(this._debugStderr),
      environment: cdktf.stringToTerraform(this._environment),
      iam_url: cdktf.stringToTerraform(this._iamUrl),
      idm_url: cdktf.stringToTerraform(this._idmUrl),
      mdm_url: cdktf.stringToTerraform(this._mdmUrl),
      notification_url: cdktf.stringToTerraform(this._notificationUrl),
      oauth2_client_id: cdktf.stringToTerraform(this._oauth2ClientId),
      oauth2_password: cdktf.stringToTerraform(this._oauth2Password),
      org_admin_password: cdktf.stringToTerraform(this._orgAdminPassword),
      org_admin_username: cdktf.stringToTerraform(this._orgAdminUsername),
      region: cdktf.stringToTerraform(this._region),
      retry_max: cdktf.numberToTerraform(this._retryMax),
      s3creds_url: cdktf.stringToTerraform(this._s3CredsUrl),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      service_id: cdktf.stringToTerraform(this._serviceId),
      service_private_key: cdktf.stringToTerraform(this._servicePrivateKey),
      shared_key: cdktf.stringToTerraform(this._sharedKey),
      uaa_password: cdktf.stringToTerraform(this._uaaPassword),
      uaa_url: cdktf.stringToTerraform(this._uaaUrl),
      uaa_username: cdktf.stringToTerraform(this._uaaUsername),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cartel_host: {
        value: cdktf.stringToHclTerraform(this._cartelHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cartel_no_tls: {
        value: cdktf.booleanToHclTerraform(this._cartelNoTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cartel_secret: {
        value: cdktf.stringToHclTerraform(this._cartelSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cartel_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._cartelSkipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cartel_token: {
        value: cdktf.stringToHclTerraform(this._cartelToken),
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
      debug_log: {
        value: cdktf.stringToHclTerraform(this._debugLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug_stderr: {
        value: cdktf.booleanToHclTerraform(this._debugStderr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_url: {
        value: cdktf.stringToHclTerraform(this._iamUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idm_url: {
        value: cdktf.stringToHclTerraform(this._idmUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mdm_url: {
        value: cdktf.stringToHclTerraform(this._mdmUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_url: {
        value: cdktf.stringToHclTerraform(this._notificationUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_client_id: {
        value: cdktf.stringToHclTerraform(this._oauth2ClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_password: {
        value: cdktf.stringToHclTerraform(this._oauth2Password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_admin_password: {
        value: cdktf.stringToHclTerraform(this._orgAdminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_admin_username: {
        value: cdktf.stringToHclTerraform(this._orgAdminUsername),
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
      retry_max: {
        value: cdktf.numberToHclTerraform(this._retryMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      s3creds_url: {
        value: cdktf.stringToHclTerraform(this._s3CredsUrl),
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
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_private_key: {
        value: cdktf.stringToHclTerraform(this._servicePrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_key: {
        value: cdktf.stringToHclTerraform(this._sharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uaa_password: {
        value: cdktf.stringToHclTerraform(this._uaaPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uaa_url: {
        value: cdktf.stringToHclTerraform(this._uaaUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uaa_username: {
        value: cdktf.stringToHclTerraform(this._uaaUsername),
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
