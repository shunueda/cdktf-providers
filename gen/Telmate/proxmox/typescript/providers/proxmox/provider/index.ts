// https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProxmoxProviderConfig {
  /**
  * API TokenID e.g. root@pam!mytesttoken
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#pm_api_token_id ProxmoxProvider#pm_api_token_id}
  */
  readonly pmApiTokenId?: string;
  /**
  * The secret uuid corresponding to a TokenID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#pm_api_token_secret ProxmoxProvider#pm_api_token_secret}
  */
  readonly pmApiTokenSecret?: string;
  /**
  * https://host.fqdn:8006/api2/json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#pm_api_url ProxmoxProvider#pm_api_url}
  */
  readonly pmApiUrl?: string;
  /**
  * By default this provider will exit if an unknown attribute is found. This is to prevent the accidential destruction of VMs or Data when something in the proxmox API has changed/updated and is not confirmed to work with this provider. Set this to true at your own risk. It may allow you to proceed in cases when the provider refuses to work, but be aware of the danger in doing so.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#pm_dangerously_ignore_unknown_attributes ProxmoxProvider#pm_dangerously_ignore_unknown_attributes}
  */
  readonly pmDangerouslyIgnoreUnknownAttributes?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the verbose debug output from proxmox api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#pm_debug ProxmoxProvider#pm_debug}
  */
  readonly pmDebug?: boolean | cdktf.IResolvable;
  /**
  * Set custom http headers e.g. Key,Value,Key1,Value1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#pm_http_headers ProxmoxProvider#pm_http_headers}
  */
  readonly pmHttpHeaders?: string;
  /**
  * Enable provider logging to get proxmox API logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#pm_log_enable ProxmoxProvider#pm_log_enable}
  */
  readonly pmLogEnable?: boolean | cdktf.IResolvable;
  /**
  * Write logs to this specific file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#pm_log_file ProxmoxProvider#pm_log_file}
  */
  readonly pmLogFile?: string;
  /**
  * Configure the logging level to display; trace, debug, info, warn, etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#pm_log_levels ProxmoxProvider#pm_log_levels}
  */
  readonly pmLogLevels?: { [key: string]: string };
  /**
  * OTP 2FA code (if required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#pm_otp ProxmoxProvider#pm_otp}
  */
  readonly pmOtp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#pm_parallel ProxmoxProvider#pm_parallel}
  */
  readonly pmParallel?: number;
  /**
  * Password to authenticate into proxmox
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#pm_password ProxmoxProvider#pm_password}
  */
  readonly pmPassword?: string;
  /**
  * Proxy Server passed to Api client(useful for debugging). Syntax: http://proxy:port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#pm_proxy_server ProxmoxProvider#pm_proxy_server}
  */
  readonly pmProxyServer?: string;
  /**
  * How many seconds to wait for operations for both provider and api-client, default is 20m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#pm_timeout ProxmoxProvider#pm_timeout}
  */
  readonly pmTimeout?: number;
  /**
  * By default, every TLS connection is verified to be secure. This option allows terraform to proceed and operate on servers considered insecure. For example if you're connecting to a remote host and you do not have the CA cert that issued the proxmox api url's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#pm_tls_insecure ProxmoxProvider#pm_tls_insecure}
  */
  readonly pmTlsInsecure?: boolean | cdktf.IResolvable;
  /**
  * Username e.g. myuser or myuser@pam
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#pm_user ProxmoxProvider#pm_user}
  */
  readonly pmUser?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#alias ProxmoxProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs proxmox}
*/
export class ProxmoxProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProxmoxProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProxmoxProvider to import
  * @param importFromId The id of the existing ProxmoxProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProxmoxProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs proxmox} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProxmoxProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ProxmoxProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'proxmox',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '2.9.14'
      },
      terraformProviderSource: 'Telmate/proxmox'
    });
    this._pmApiTokenId = config.pmApiTokenId;
    this._pmApiTokenSecret = config.pmApiTokenSecret;
    this._pmApiUrl = config.pmApiUrl;
    this._pmDangerouslyIgnoreUnknownAttributes = config.pmDangerouslyIgnoreUnknownAttributes;
    this._pmDebug = config.pmDebug;
    this._pmHttpHeaders = config.pmHttpHeaders;
    this._pmLogEnable = config.pmLogEnable;
    this._pmLogFile = config.pmLogFile;
    this._pmLogLevels = config.pmLogLevels;
    this._pmOtp = config.pmOtp;
    this._pmParallel = config.pmParallel;
    this._pmPassword = config.pmPassword;
    this._pmProxyServer = config.pmProxyServer;
    this._pmTimeout = config.pmTimeout;
    this._pmTlsInsecure = config.pmTlsInsecure;
    this._pmUser = config.pmUser;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // pm_api_token_id - computed: false, optional: true, required: false
  private _pmApiTokenId?: string; 
  public get pmApiTokenId() {
    return this._pmApiTokenId;
  }
  public set pmApiTokenId(value: string | undefined) {
    this._pmApiTokenId = value;
  }
  public resetPmApiTokenId() {
    this._pmApiTokenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmApiTokenIdInput() {
    return this._pmApiTokenId;
  }

  // pm_api_token_secret - computed: false, optional: true, required: false
  private _pmApiTokenSecret?: string; 
  public get pmApiTokenSecret() {
    return this._pmApiTokenSecret;
  }
  public set pmApiTokenSecret(value: string | undefined) {
    this._pmApiTokenSecret = value;
  }
  public resetPmApiTokenSecret() {
    this._pmApiTokenSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmApiTokenSecretInput() {
    return this._pmApiTokenSecret;
  }

  // pm_api_url - computed: false, optional: true, required: false
  private _pmApiUrl?: string; 
  public get pmApiUrl() {
    return this._pmApiUrl;
  }
  public set pmApiUrl(value: string | undefined) {
    this._pmApiUrl = value;
  }
  public resetPmApiUrl() {
    this._pmApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmApiUrlInput() {
    return this._pmApiUrl;
  }

  // pm_dangerously_ignore_unknown_attributes - computed: false, optional: true, required: false
  private _pmDangerouslyIgnoreUnknownAttributes?: boolean | cdktf.IResolvable; 
  public get pmDangerouslyIgnoreUnknownAttributes() {
    return this._pmDangerouslyIgnoreUnknownAttributes;
  }
  public set pmDangerouslyIgnoreUnknownAttributes(value: boolean | cdktf.IResolvable | undefined) {
    this._pmDangerouslyIgnoreUnknownAttributes = value;
  }
  public resetPmDangerouslyIgnoreUnknownAttributes() {
    this._pmDangerouslyIgnoreUnknownAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmDangerouslyIgnoreUnknownAttributesInput() {
    return this._pmDangerouslyIgnoreUnknownAttributes;
  }

  // pm_debug - computed: false, optional: true, required: false
  private _pmDebug?: boolean | cdktf.IResolvable; 
  public get pmDebug() {
    return this._pmDebug;
  }
  public set pmDebug(value: boolean | cdktf.IResolvable | undefined) {
    this._pmDebug = value;
  }
  public resetPmDebug() {
    this._pmDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmDebugInput() {
    return this._pmDebug;
  }

  // pm_http_headers - computed: false, optional: true, required: false
  private _pmHttpHeaders?: string; 
  public get pmHttpHeaders() {
    return this._pmHttpHeaders;
  }
  public set pmHttpHeaders(value: string | undefined) {
    this._pmHttpHeaders = value;
  }
  public resetPmHttpHeaders() {
    this._pmHttpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmHttpHeadersInput() {
    return this._pmHttpHeaders;
  }

  // pm_log_enable - computed: false, optional: true, required: false
  private _pmLogEnable?: boolean | cdktf.IResolvable; 
  public get pmLogEnable() {
    return this._pmLogEnable;
  }
  public set pmLogEnable(value: boolean | cdktf.IResolvable | undefined) {
    this._pmLogEnable = value;
  }
  public resetPmLogEnable() {
    this._pmLogEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmLogEnableInput() {
    return this._pmLogEnable;
  }

  // pm_log_file - computed: false, optional: true, required: false
  private _pmLogFile?: string; 
  public get pmLogFile() {
    return this._pmLogFile;
  }
  public set pmLogFile(value: string | undefined) {
    this._pmLogFile = value;
  }
  public resetPmLogFile() {
    this._pmLogFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmLogFileInput() {
    return this._pmLogFile;
  }

  // pm_log_levels - computed: false, optional: true, required: false
  private _pmLogLevels?: { [key: string]: string }; 
  public get pmLogLevels() {
    return this._pmLogLevels;
  }
  public set pmLogLevels(value: { [key: string]: string } | undefined) {
    this._pmLogLevels = value;
  }
  public resetPmLogLevels() {
    this._pmLogLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmLogLevelsInput() {
    return this._pmLogLevels;
  }

  // pm_otp - computed: false, optional: true, required: false
  private _pmOtp?: string; 
  public get pmOtp() {
    return this._pmOtp;
  }
  public set pmOtp(value: string | undefined) {
    this._pmOtp = value;
  }
  public resetPmOtp() {
    this._pmOtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmOtpInput() {
    return this._pmOtp;
  }

  // pm_parallel - computed: false, optional: true, required: false
  private _pmParallel?: number; 
  public get pmParallel() {
    return this._pmParallel;
  }
  public set pmParallel(value: number | undefined) {
    this._pmParallel = value;
  }
  public resetPmParallel() {
    this._pmParallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmParallelInput() {
    return this._pmParallel;
  }

  // pm_password - computed: false, optional: true, required: false
  private _pmPassword?: string; 
  public get pmPassword() {
    return this._pmPassword;
  }
  public set pmPassword(value: string | undefined) {
    this._pmPassword = value;
  }
  public resetPmPassword() {
    this._pmPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmPasswordInput() {
    return this._pmPassword;
  }

  // pm_proxy_server - computed: false, optional: true, required: false
  private _pmProxyServer?: string; 
  public get pmProxyServer() {
    return this._pmProxyServer;
  }
  public set pmProxyServer(value: string | undefined) {
    this._pmProxyServer = value;
  }
  public resetPmProxyServer() {
    this._pmProxyServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmProxyServerInput() {
    return this._pmProxyServer;
  }

  // pm_timeout - computed: false, optional: true, required: false
  private _pmTimeout?: number; 
  public get pmTimeout() {
    return this._pmTimeout;
  }
  public set pmTimeout(value: number | undefined) {
    this._pmTimeout = value;
  }
  public resetPmTimeout() {
    this._pmTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmTimeoutInput() {
    return this._pmTimeout;
  }

  // pm_tls_insecure - computed: false, optional: true, required: false
  private _pmTlsInsecure?: boolean | cdktf.IResolvable; 
  public get pmTlsInsecure() {
    return this._pmTlsInsecure;
  }
  public set pmTlsInsecure(value: boolean | cdktf.IResolvable | undefined) {
    this._pmTlsInsecure = value;
  }
  public resetPmTlsInsecure() {
    this._pmTlsInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmTlsInsecureInput() {
    return this._pmTlsInsecure;
  }

  // pm_user - computed: false, optional: true, required: false
  private _pmUser?: string; 
  public get pmUser() {
    return this._pmUser;
  }
  public set pmUser(value: string | undefined) {
    this._pmUser = value;
  }
  public resetPmUser() {
    this._pmUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmUserInput() {
    return this._pmUser;
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
      pm_api_token_id: cdktf.stringToTerraform(this._pmApiTokenId),
      pm_api_token_secret: cdktf.stringToTerraform(this._pmApiTokenSecret),
      pm_api_url: cdktf.stringToTerraform(this._pmApiUrl),
      pm_dangerously_ignore_unknown_attributes: cdktf.booleanToTerraform(this._pmDangerouslyIgnoreUnknownAttributes),
      pm_debug: cdktf.booleanToTerraform(this._pmDebug),
      pm_http_headers: cdktf.stringToTerraform(this._pmHttpHeaders),
      pm_log_enable: cdktf.booleanToTerraform(this._pmLogEnable),
      pm_log_file: cdktf.stringToTerraform(this._pmLogFile),
      pm_log_levels: cdktf.hashMapper(cdktf.stringToTerraform)(this._pmLogLevels),
      pm_otp: cdktf.stringToTerraform(this._pmOtp),
      pm_parallel: cdktf.numberToTerraform(this._pmParallel),
      pm_password: cdktf.stringToTerraform(this._pmPassword),
      pm_proxy_server: cdktf.stringToTerraform(this._pmProxyServer),
      pm_timeout: cdktf.numberToTerraform(this._pmTimeout),
      pm_tls_insecure: cdktf.booleanToTerraform(this._pmTlsInsecure),
      pm_user: cdktf.stringToTerraform(this._pmUser),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      pm_api_token_id: {
        value: cdktf.stringToHclTerraform(this._pmApiTokenId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pm_api_token_secret: {
        value: cdktf.stringToHclTerraform(this._pmApiTokenSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pm_api_url: {
        value: cdktf.stringToHclTerraform(this._pmApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pm_dangerously_ignore_unknown_attributes: {
        value: cdktf.booleanToHclTerraform(this._pmDangerouslyIgnoreUnknownAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pm_debug: {
        value: cdktf.booleanToHclTerraform(this._pmDebug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pm_http_headers: {
        value: cdktf.stringToHclTerraform(this._pmHttpHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pm_log_enable: {
        value: cdktf.booleanToHclTerraform(this._pmLogEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pm_log_file: {
        value: cdktf.stringToHclTerraform(this._pmLogFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pm_log_levels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._pmLogLevels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      pm_otp: {
        value: cdktf.stringToHclTerraform(this._pmOtp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pm_parallel: {
        value: cdktf.numberToHclTerraform(this._pmParallel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pm_password: {
        value: cdktf.stringToHclTerraform(this._pmPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pm_proxy_server: {
        value: cdktf.stringToHclTerraform(this._pmProxyServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pm_timeout: {
        value: cdktf.numberToHclTerraform(this._pmTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pm_tls_insecure: {
        value: cdktf.booleanToHclTerraform(this._pmTlsInsecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pm_user: {
        value: cdktf.stringToHclTerraform(this._pmUser),
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
