// https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * CLI idle timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/system#cli_timeout System#cli_timeout}
  */
  readonly cliTimeout?: number;
  /**
  * System Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/system#hostname System#hostname}
  */
  readonly hostname: string;
  /**
  * HTTPS Ciphersuite in OpenSSL format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/system#httpd_ciphersuite System#httpd_ciphersuite}
  */
  readonly httpdCiphersuite?: string;
  /**
  * Login Banner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/system#login_banner System#login_banner}
  */
  readonly loginBanner?: string;
  /**
  * Message of the day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/system#motd System#motd}
  */
  readonly motd?: string;
  /**
  * List of httpd ciphersuite in OpenSSL format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/system#sshd_ciphers System#sshd_ciphers}
  */
  readonly sshdCiphers?: string[];
  /**
  * List of the sshd host key algorithms in OpenSSH format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/system#sshd_hkey_alg System#sshd_hkey_alg}
  */
  readonly sshdHkeyAlg?: string[];
  /**
  * SSH Idle timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/system#sshd_idle_timeout System#sshd_idle_timeout}
  */
  readonly sshdIdleTimeout?: string;
  /**
  * List of sshd key exchange algorithms in OpenSSH format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/system#sshd_kex_alg System#sshd_kex_alg}
  */
  readonly sshdKexAlg?: string[];
  /**
  * List of sshd Mac algorithms in OpenSSH format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/system#sshd_mac_alg System#sshd_mac_alg}
  */
  readonly sshdMacAlg?: string[];
  /**
  * Timezone for the system per TZ database name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/system#timezone System#timezone}
  */
  readonly timezone?: string;
  /**
  * Token lifetime length in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/system#token_lifetime System#token_lifetime}
  */
  readonly tokenLifetime?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/system f5os_system}
*/
export class System extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "f5os_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a System resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the System to import
  * @param importFromId The id of the existing System that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the System to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "f5os_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/system f5os_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemConfig
  */
  public constructor(scope: Construct, id: string, config: SystemConfig) {
    super(scope, id, {
      terraformResourceType: 'f5os_system',
      terraformGeneratorMetadata: {
        providerName: 'f5os',
        providerVersion: '1.10.0',
        providerVersionConstraint: '1.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cliTimeout = config.cliTimeout;
    this._hostname = config.hostname;
    this._httpdCiphersuite = config.httpdCiphersuite;
    this._loginBanner = config.loginBanner;
    this._motd = config.motd;
    this._sshdCiphers = config.sshdCiphers;
    this._sshdHkeyAlg = config.sshdHkeyAlg;
    this._sshdIdleTimeout = config.sshdIdleTimeout;
    this._sshdKexAlg = config.sshdKexAlg;
    this._sshdMacAlg = config.sshdMacAlg;
    this._timezone = config.timezone;
    this._tokenLifetime = config.tokenLifetime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cli_timeout - computed: false, optional: true, required: false
  private _cliTimeout?: number; 
  public get cliTimeout() {
    return this.getNumberAttribute('cli_timeout');
  }
  public set cliTimeout(value: number) {
    this._cliTimeout = value;
  }
  public resetCliTimeout() {
    this._cliTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliTimeoutInput() {
    return this._cliTimeout;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // httpd_ciphersuite - computed: false, optional: true, required: false
  private _httpdCiphersuite?: string; 
  public get httpdCiphersuite() {
    return this.getStringAttribute('httpd_ciphersuite');
  }
  public set httpdCiphersuite(value: string) {
    this._httpdCiphersuite = value;
  }
  public resetHttpdCiphersuite() {
    this._httpdCiphersuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpdCiphersuiteInput() {
    return this._httpdCiphersuite;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // login_banner - computed: false, optional: true, required: false
  private _loginBanner?: string; 
  public get loginBanner() {
    return this.getStringAttribute('login_banner');
  }
  public set loginBanner(value: string) {
    this._loginBanner = value;
  }
  public resetLoginBanner() {
    this._loginBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginBannerInput() {
    return this._loginBanner;
  }

  // motd - computed: false, optional: true, required: false
  private _motd?: string; 
  public get motd() {
    return this.getStringAttribute('motd');
  }
  public set motd(value: string) {
    this._motd = value;
  }
  public resetMotd() {
    this._motd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motdInput() {
    return this._motd;
  }

  // sshd_ciphers - computed: false, optional: true, required: false
  private _sshdCiphers?: string[]; 
  public get sshdCiphers() {
    return this.getListAttribute('sshd_ciphers');
  }
  public set sshdCiphers(value: string[]) {
    this._sshdCiphers = value;
  }
  public resetSshdCiphers() {
    this._sshdCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshdCiphersInput() {
    return this._sshdCiphers;
  }

  // sshd_hkey_alg - computed: false, optional: true, required: false
  private _sshdHkeyAlg?: string[]; 
  public get sshdHkeyAlg() {
    return this.getListAttribute('sshd_hkey_alg');
  }
  public set sshdHkeyAlg(value: string[]) {
    this._sshdHkeyAlg = value;
  }
  public resetSshdHkeyAlg() {
    this._sshdHkeyAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshdHkeyAlgInput() {
    return this._sshdHkeyAlg;
  }

  // sshd_idle_timeout - computed: false, optional: true, required: false
  private _sshdIdleTimeout?: string; 
  public get sshdIdleTimeout() {
    return this.getStringAttribute('sshd_idle_timeout');
  }
  public set sshdIdleTimeout(value: string) {
    this._sshdIdleTimeout = value;
  }
  public resetSshdIdleTimeout() {
    this._sshdIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshdIdleTimeoutInput() {
    return this._sshdIdleTimeout;
  }

  // sshd_kex_alg - computed: false, optional: true, required: false
  private _sshdKexAlg?: string[]; 
  public get sshdKexAlg() {
    return this.getListAttribute('sshd_kex_alg');
  }
  public set sshdKexAlg(value: string[]) {
    this._sshdKexAlg = value;
  }
  public resetSshdKexAlg() {
    this._sshdKexAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshdKexAlgInput() {
    return this._sshdKexAlg;
  }

  // sshd_mac_alg - computed: false, optional: true, required: false
  private _sshdMacAlg?: string[]; 
  public get sshdMacAlg() {
    return this.getListAttribute('sshd_mac_alg');
  }
  public set sshdMacAlg(value: string[]) {
    this._sshdMacAlg = value;
  }
  public resetSshdMacAlg() {
    this._sshdMacAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshdMacAlgInput() {
    return this._sshdMacAlg;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // token_lifetime - computed: false, optional: true, required: false
  private _tokenLifetime?: number; 
  public get tokenLifetime() {
    return this.getNumberAttribute('token_lifetime');
  }
  public set tokenLifetime(value: number) {
    this._tokenLifetime = value;
  }
  public resetTokenLifetime() {
    this._tokenLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLifetimeInput() {
    return this._tokenLifetime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cli_timeout: cdktf.numberToTerraform(this._cliTimeout),
      hostname: cdktf.stringToTerraform(this._hostname),
      httpd_ciphersuite: cdktf.stringToTerraform(this._httpdCiphersuite),
      login_banner: cdktf.stringToTerraform(this._loginBanner),
      motd: cdktf.stringToTerraform(this._motd),
      sshd_ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshdCiphers),
      sshd_hkey_alg: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshdHkeyAlg),
      sshd_idle_timeout: cdktf.stringToTerraform(this._sshdIdleTimeout),
      sshd_kex_alg: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshdKexAlg),
      sshd_mac_alg: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshdMacAlg),
      timezone: cdktf.stringToTerraform(this._timezone),
      token_lifetime: cdktf.numberToTerraform(this._tokenLifetime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cli_timeout: {
        value: cdktf.numberToHclTerraform(this._cliTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpd_ciphersuite: {
        value: cdktf.stringToHclTerraform(this._httpdCiphersuite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_banner: {
        value: cdktf.stringToHclTerraform(this._loginBanner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      motd: {
        value: cdktf.stringToHclTerraform(this._motd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sshd_ciphers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshdCiphers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sshd_hkey_alg: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshdHkeyAlg),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sshd_idle_timeout: {
        value: cdktf.stringToHclTerraform(this._sshdIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sshd_kex_alg: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshdKexAlg),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sshd_mac_alg: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshdMacAlg),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_lifetime: {
        value: cdktf.numberToHclTerraform(this._tokenLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
