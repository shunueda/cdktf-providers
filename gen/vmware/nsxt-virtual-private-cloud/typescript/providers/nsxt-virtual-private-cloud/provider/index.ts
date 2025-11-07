// https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtVirtualPrivateCloudProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#allow_unverified_ssl NsxtVirtualPrivateCloudProvider#allow_unverified_ssl}
  */
  readonly allowUnverifiedSsl?: boolean | cdktf.IResolvable;
  /**
  * CA certificate passed as string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#ca NsxtVirtualPrivateCloudProvider#ca}
  */
  readonly ca?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#ca_file NsxtVirtualPrivateCloudProvider#ca_file}
  */
  readonly caFile?: string;
  /**
  * Client certificate passed as string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#client_auth_cert NsxtVirtualPrivateCloudProvider#client_auth_cert}
  */
  readonly clientAuthCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#client_auth_cert_file NsxtVirtualPrivateCloudProvider#client_auth_cert_file}
  */
  readonly clientAuthCertFile?: string;
  /**
  * Client certificate key passed as string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#client_auth_key NsxtVirtualPrivateCloudProvider#client_auth_key}
  */
  readonly clientAuthKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#client_auth_key_file NsxtVirtualPrivateCloudProvider#client_auth_key_file}
  */
  readonly clientAuthKeyFile?: string;
  /**
  * Maximum time in milliseconds for connection to wait for a TLS handshake. Zero means no timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#connection_timeout NsxtVirtualPrivateCloudProvider#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Enforcement Point for NSXT Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#enforcement_point NsxtVirtualPrivateCloudProvider#enforcement_point}
  */
  readonly enforcementPoint?: string;
  /**
  * The hostname or IP address of the NSX manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#host NsxtVirtualPrivateCloudProvider#host}
  */
  readonly host?: string;
  /**
  * Maximum number of HTTP client retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#max_retries NsxtVirtualPrivateCloudProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Organisation identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#org NsxtVirtualPrivateCloudProvider#org}
  */
  readonly org?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#password NsxtVirtualPrivateCloudProvider#password}
  */
  readonly password?: string;
  /**
  * Identifier for the project under the organisation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#project NsxtVirtualPrivateCloudProvider#project}
  */
  readonly project: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#remote_auth NsxtVirtualPrivateCloudProvider#remote_auth}
  */
  readonly remoteAuth?: boolean | cdktf.IResolvable;
  /**
  * Delay interval in milliseconds between retries of a request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#retry_interval NsxtVirtualPrivateCloudProvider#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * HTTP replies status codes to retry on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#retry_on_status_codes NsxtVirtualPrivateCloudProvider#retry_on_status_codes}
  */
  readonly retryOnStatusCodes?: number[];
  /**
  * Site for NSXT Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#site NsxtVirtualPrivateCloudProvider#site}
  */
  readonly site?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#username NsxtVirtualPrivateCloudProvider#username}
  */
  readonly username?: string;
  /**
  * Identifier for the VPC under the project of an organisation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#vpc NsxtVirtualPrivateCloudProvider#vpc}
  */
  readonly vpc: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#alias NsxtVirtualPrivateCloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs nsxt-virtual-private-cloud}
*/
export class NsxtVirtualPrivateCloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt-virtual-private-cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtVirtualPrivateCloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtVirtualPrivateCloudProvider to import
  * @param importFromId The id of the existing NsxtVirtualPrivateCloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtVirtualPrivateCloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt-virtual-private-cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs nsxt-virtual-private-cloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtVirtualPrivateCloudProviderConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtVirtualPrivateCloudProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt-virtual-private-cloud',
      terraformGeneratorMetadata: {
        providerName: 'nsxt-virtual-private-cloud',
        providerVersion: '1.0.0'
      },
      terraformProviderSource: 'vmware/nsxt-virtual-private-cloud'
    });
    this._allowUnverifiedSsl = config.allowUnverifiedSsl;
    this._ca = config.ca;
    this._caFile = config.caFile;
    this._clientAuthCert = config.clientAuthCert;
    this._clientAuthCertFile = config.clientAuthCertFile;
    this._clientAuthKey = config.clientAuthKey;
    this._clientAuthKeyFile = config.clientAuthKeyFile;
    this._connectionTimeout = config.connectionTimeout;
    this._enforcementPoint = config.enforcementPoint;
    this._host = config.host;
    this._maxRetries = config.maxRetries;
    this._org = config.org;
    this._password = config.password;
    this._project = config.project;
    this._remoteAuth = config.remoteAuth;
    this._retryInterval = config.retryInterval;
    this._retryOnStatusCodes = config.retryOnStatusCodes;
    this._site = config.site;
    this._username = config.username;
    this._vpc = config.vpc;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unverified_ssl - computed: false, optional: true, required: false
  private _allowUnverifiedSsl?: boolean | cdktf.IResolvable; 
  public get allowUnverifiedSsl() {
    return this._allowUnverifiedSsl;
  }
  public set allowUnverifiedSsl(value: boolean | cdktf.IResolvable | undefined) {
    this._allowUnverifiedSsl = value;
  }
  public resetAllowUnverifiedSsl() {
    this._allowUnverifiedSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnverifiedSslInput() {
    return this._allowUnverifiedSsl;
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this._ca;
  }
  public set ca(value: string | undefined) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this._caFile;
  }
  public set caFile(value: string | undefined) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // client_auth_cert - computed: false, optional: true, required: false
  private _clientAuthCert?: string; 
  public get clientAuthCert() {
    return this._clientAuthCert;
  }
  public set clientAuthCert(value: string | undefined) {
    this._clientAuthCert = value;
  }
  public resetClientAuthCert() {
    this._clientAuthCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthCertInput() {
    return this._clientAuthCert;
  }

  // client_auth_cert_file - computed: false, optional: true, required: false
  private _clientAuthCertFile?: string; 
  public get clientAuthCertFile() {
    return this._clientAuthCertFile;
  }
  public set clientAuthCertFile(value: string | undefined) {
    this._clientAuthCertFile = value;
  }
  public resetClientAuthCertFile() {
    this._clientAuthCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthCertFileInput() {
    return this._clientAuthCertFile;
  }

  // client_auth_key - computed: false, optional: true, required: false
  private _clientAuthKey?: string; 
  public get clientAuthKey() {
    return this._clientAuthKey;
  }
  public set clientAuthKey(value: string | undefined) {
    this._clientAuthKey = value;
  }
  public resetClientAuthKey() {
    this._clientAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthKeyInput() {
    return this._clientAuthKey;
  }

  // client_auth_key_file - computed: false, optional: true, required: false
  private _clientAuthKeyFile?: string; 
  public get clientAuthKeyFile() {
    return this._clientAuthKeyFile;
  }
  public set clientAuthKeyFile(value: string | undefined) {
    this._clientAuthKeyFile = value;
  }
  public resetClientAuthKeyFile() {
    this._clientAuthKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthKeyFileInput() {
    return this._clientAuthKeyFile;
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this._connectionTimeout;
  }
  public set connectionTimeout(value: number | undefined) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // enforcement_point - computed: false, optional: true, required: false
  private _enforcementPoint?: string; 
  public get enforcementPoint() {
    return this._enforcementPoint;
  }
  public set enforcementPoint(value: string | undefined) {
    this._enforcementPoint = value;
  }
  public resetEnforcementPoint() {
    this._enforcementPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementPointInput() {
    return this._enforcementPoint;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this._org;
  }
  public set org(value: string | undefined) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // remote_auth - computed: false, optional: true, required: false
  private _remoteAuth?: boolean | cdktf.IResolvable; 
  public get remoteAuth() {
    return this._remoteAuth;
  }
  public set remoteAuth(value: boolean | cdktf.IResolvable | undefined) {
    this._remoteAuth = value;
  }
  public resetRemoteAuth() {
    this._remoteAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAuthInput() {
    return this._remoteAuth;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this._retryInterval;
  }
  public set retryInterval(value: number | undefined) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // retry_on_status_codes - computed: false, optional: true, required: false
  private _retryOnStatusCodes?: number[]; 
  public get retryOnStatusCodes() {
    return this._retryOnStatusCodes;
  }
  public set retryOnStatusCodes(value: number[] | undefined) {
    this._retryOnStatusCodes = value;
  }
  public resetRetryOnStatusCodes() {
    this._retryOnStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnStatusCodesInput() {
    return this._retryOnStatusCodes;
  }

  // site - computed: false, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this._site;
  }
  public set site(value: string | undefined) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vpc - computed: false, optional: false, required: true
  private _vpc?: string; 
  public get vpc() {
    return this._vpc;
  }
  public set vpc(value: string | undefined) {
    this._vpc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
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
      allow_unverified_ssl: cdktf.booleanToTerraform(this._allowUnverifiedSsl),
      ca: cdktf.stringToTerraform(this._ca),
      ca_file: cdktf.stringToTerraform(this._caFile),
      client_auth_cert: cdktf.stringToTerraform(this._clientAuthCert),
      client_auth_cert_file: cdktf.stringToTerraform(this._clientAuthCertFile),
      client_auth_key: cdktf.stringToTerraform(this._clientAuthKey),
      client_auth_key_file: cdktf.stringToTerraform(this._clientAuthKeyFile),
      connection_timeout: cdktf.numberToTerraform(this._connectionTimeout),
      enforcement_point: cdktf.stringToTerraform(this._enforcementPoint),
      host: cdktf.stringToTerraform(this._host),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      org: cdktf.stringToTerraform(this._org),
      password: cdktf.stringToTerraform(this._password),
      project: cdktf.stringToTerraform(this._project),
      remote_auth: cdktf.booleanToTerraform(this._remoteAuth),
      retry_interval: cdktf.numberToTerraform(this._retryInterval),
      retry_on_status_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(this._retryOnStatusCodes),
      site: cdktf.stringToTerraform(this._site),
      username: cdktf.stringToTerraform(this._username),
      vpc: cdktf.stringToTerraform(this._vpc),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_unverified_ssl: {
        value: cdktf.booleanToHclTerraform(this._allowUnverifiedSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ca: {
        value: cdktf.stringToHclTerraform(this._ca),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_file: {
        value: cdktf.stringToHclTerraform(this._caFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_auth_cert: {
        value: cdktf.stringToHclTerraform(this._clientAuthCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_auth_cert_file: {
        value: cdktf.stringToHclTerraform(this._clientAuthCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_auth_key: {
        value: cdktf.stringToHclTerraform(this._clientAuthKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_auth_key_file: {
        value: cdktf.stringToHclTerraform(this._clientAuthKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_timeout: {
        value: cdktf.numberToHclTerraform(this._connectionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enforcement_point: {
        value: cdktf.stringToHclTerraform(this._enforcementPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_auth: {
        value: cdktf.booleanToHclTerraform(this._remoteAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retry_interval: {
        value: cdktf.numberToHclTerraform(this._retryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_on_status_codes: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._retryOnStatusCodes),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc: {
        value: cdktf.stringToHclTerraform(this._vpc),
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
