// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_proxy_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentsProxyConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_proxy_configuration#description EnvironmentsProxyConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_proxy_configuration#host EnvironmentsProxyConfiguration#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_proxy_configuration#name EnvironmentsProxyConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_proxy_configuration#no_proxy_hosts EnvironmentsProxyConfiguration#no_proxy_hosts}
  */
  readonly noProxyHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_proxy_configuration#password EnvironmentsProxyConfiguration#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_proxy_configuration#port EnvironmentsProxyConfiguration#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_proxy_configuration#protocol EnvironmentsProxyConfiguration#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_proxy_configuration#user EnvironmentsProxyConfiguration#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_proxy_configuration cdp_environments_proxy_configuration}
*/
export class EnvironmentsProxyConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_environments_proxy_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvironmentsProxyConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentsProxyConfiguration to import
  * @param importFromId The id of the existing EnvironmentsProxyConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_proxy_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentsProxyConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_environments_proxy_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_proxy_configuration cdp_environments_proxy_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentsProxyConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentsProxyConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_environments_proxy_configuration',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._host = config.host;
    this._name = config.name;
    this._noProxyHosts = config.noProxyHosts;
    this._password = config.password;
    this._port = config.port;
    this._protocol = config.protocol;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // no_proxy_hosts - computed: false, optional: true, required: false
  private _noProxyHosts?: string[]; 
  public get noProxyHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('no_proxy_hosts'));
  }
  public set noProxyHosts(value: string[]) {
    this._noProxyHosts = value;
  }
  public resetNoProxyHosts() {
    this._noProxyHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyHostsInput() {
    return this._noProxyHosts;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      host: cdktf.stringToTerraform(this._host),
      name: cdktf.stringToTerraform(this._name),
      no_proxy_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noProxyHosts),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_proxy_hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noProxyHosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
