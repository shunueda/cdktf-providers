// https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_proxy_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigProxyServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional list of hosts to exclude communication via Proxy Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_proxy_server#exclude_hosts ConfigProxyServer#exclude_hosts}
  */
  readonly excludeHosts?: string[];
  /**
  * Hostname of the Proxy Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_proxy_server#hostname ConfigProxyServer#hostname}
  */
  readonly hostname: string;
  /**
  * Password for the Proxy Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_proxy_server#password ConfigProxyServer#password}
  */
  readonly password?: string;
  /**
  * Whether the password is included
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_proxy_server#password_is_included ConfigProxyServer#password_is_included}
  */
  readonly passwordIsIncluded?: boolean | cdktf.IResolvable;
  /**
  * Port Number for the Proxy Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_proxy_server#port ConfigProxyServer#port}
  */
  readonly port: number;
  /**
  * Username for the Proxy Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_proxy_server#username ConfigProxyServer#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_proxy_server sonatypeiq_config_proxy_server}
*/
export class ConfigProxyServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonatypeiq_config_proxy_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigProxyServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigProxyServer to import
  * @param importFromId The id of the existing ConfigProxyServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_proxy_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigProxyServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonatypeiq_config_proxy_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_proxy_server sonatypeiq_config_proxy_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigProxyServerConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigProxyServerConfig) {
    super(scope, id, {
      terraformResourceType: 'sonatypeiq_config_proxy_server',
      terraformGeneratorMetadata: {
        providerName: 'sonatypeiq',
        providerVersion: '0.12.1',
        providerVersionConstraint: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._excludeHosts = config.excludeHosts;
    this._hostname = config.hostname;
    this._password = config.password;
    this._passwordIsIncluded = config.passwordIsIncluded;
    this._port = config.port;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_hosts - computed: true, optional: true, required: false
  private _excludeHosts?: string[]; 
  public get excludeHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_hosts'));
  }
  public set excludeHosts(value: string[]) {
    this._excludeHosts = value;
  }
  public resetExcludeHosts() {
    this._excludeHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeHostsInput() {
    return this._excludeHosts;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_is_included - computed: true, optional: true, required: false
  private _passwordIsIncluded?: boolean | cdktf.IResolvable; 
  public get passwordIsIncluded() {
    return this.getBooleanAttribute('password_is_included');
  }
  public set passwordIsIncluded(value: boolean | cdktf.IResolvable) {
    this._passwordIsIncluded = value;
  }
  public resetPasswordIsIncluded() {
    this._passwordIsIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordIsIncludedInput() {
    return this._passwordIsIncluded;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeHosts),
      hostname: cdktf.stringToTerraform(this._hostname),
      password: cdktf.stringToTerraform(this._password),
      password_is_included: cdktf.booleanToTerraform(this._passwordIsIncluded),
      port: cdktf.numberToTerraform(this._port),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeHosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      password_is_included: {
        value: cdktf.booleanToHclTerraform(this._passwordIsIncluded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
