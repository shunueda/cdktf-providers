// https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WindnsProviderConfig {
  /**
  * The hostname of the DNS server. (Environment variable: WINDNS_DNS_SERVER_HOSTNAME)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs#dns_server WindnsProvider#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * The hostname of the server we will use to run powershell scripts over SSH. (Environment variable: WINDNS_SSH_HOSTNAME)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs#ssh_hostname WindnsProvider#ssh_hostname}
  */
  readonly sshHostname?: string;
  /**
  * The password used to authenticate to the server's SSH service. (Environment variable: WINDNS_SSH_PASSWORD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs#ssh_password WindnsProvider#ssh_password}
  */
  readonly sshPassword?: string;
  /**
  * The username used to authenticate to the server's SSH service. (Environment variable: WINDNS_SSH_USERNAME)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs#ssh_username WindnsProvider#ssh_username}
  */
  readonly sshUsername?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs#alias WindnsProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs windns}
*/
export class WindnsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "windns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WindnsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WindnsProvider to import
  * @param importFromId The id of the existing WindnsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WindnsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "windns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs windns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WindnsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WindnsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'windns',
      terraformGeneratorMetadata: {
        providerName: 'windns',
        providerVersion: '1.0.5'
      },
      terraformProviderSource: 'nrkno/windns'
    });
    this._dnsServer = config.dnsServer;
    this._sshHostname = config.sshHostname;
    this._sshPassword = config.sshPassword;
    this._sshUsername = config.sshUsername;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this._dnsServer;
  }
  public set dnsServer(value: string | undefined) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // ssh_hostname - computed: false, optional: true, required: false
  private _sshHostname?: string; 
  public get sshHostname() {
    return this._sshHostname;
  }
  public set sshHostname(value: string | undefined) {
    this._sshHostname = value;
  }
  public resetSshHostname() {
    this._sshHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostnameInput() {
    return this._sshHostname;
  }

  // ssh_password - computed: false, optional: true, required: false
  private _sshPassword?: string; 
  public get sshPassword() {
    return this._sshPassword;
  }
  public set sshPassword(value: string | undefined) {
    this._sshPassword = value;
  }
  public resetSshPassword() {
    this._sshPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPasswordInput() {
    return this._sshPassword;
  }

  // ssh_username - computed: false, optional: true, required: false
  private _sshUsername?: string; 
  public get sshUsername() {
    return this._sshUsername;
  }
  public set sshUsername(value: string | undefined) {
    this._sshUsername = value;
  }
  public resetSshUsername() {
    this._sshUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUsernameInput() {
    return this._sshUsername;
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
      dns_server: cdktf.stringToTerraform(this._dnsServer),
      ssh_hostname: cdktf.stringToTerraform(this._sshHostname),
      ssh_password: cdktf.stringToTerraform(this._sshPassword),
      ssh_username: cdktf.stringToTerraform(this._sshUsername),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_server: {
        value: cdktf.stringToHclTerraform(this._dnsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_hostname: {
        value: cdktf.stringToHclTerraform(this._sshHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_password: {
        value: cdktf.stringToHclTerraform(this._sshPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_username: {
        value: cdktf.stringToHclTerraform(this._sshUsername),
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
