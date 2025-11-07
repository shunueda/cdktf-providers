// https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/dynamic_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The host name to update in the dynamic DNS service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/dynamic_dns#host_name DynamicDns#host_name}
  */
  readonly hostName: string;
  /**
  * The interface for the dynamic DNS. Can be `wan` or `wan2`. Defaults to `wan`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/dynamic_dns#interface DynamicDns#interface}
  */
  readonly interface?: string;
  /**
  * The server for the dynamic DNS service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/dynamic_dns#login DynamicDns#login}
  */
  readonly login?: string;
  /**
  * The server for the dynamic DNS service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/dynamic_dns#password DynamicDns#password}
  */
  readonly password?: string;
  /**
  * The server for the dynamic DNS service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/dynamic_dns#server DynamicDns#server}
  */
  readonly server?: string;
  /**
  * The Dynamic DNS service provider, various values are supported (for example `dyndns`, etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/dynamic_dns#service DynamicDns#service}
  */
  readonly service: string;
  /**
  * The name of the site to associate the dynamic DNS with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/dynamic_dns#site DynamicDns#site}
  */
  readonly site?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/dynamic_dns unifi_dynamic_dns}
*/
export class DynamicDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unifi_dynamic_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicDns to import
  * @param importFromId The id of the existing DynamicDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/dynamic_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unifi_dynamic_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/dynamic_dns unifi_dynamic_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicDnsConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicDnsConfig) {
    super(scope, id, {
      terraformResourceType: 'unifi_dynamic_dns',
      terraformGeneratorMetadata: {
        providerName: 'unifi',
        providerVersion: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostName = config.hostName;
    this._interface = config.interface;
    this._login = config.login;
    this._password = config.password;
    this._server = config.server;
    this._service = config.service;
    this._site = config.site;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // login - computed: false, optional: true, required: false
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  public resetLogin() {
    this._login = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
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

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // site - computed: true, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host_name: cdktf.stringToTerraform(this._hostName),
      interface: cdktf.stringToTerraform(this._interface),
      login: cdktf.stringToTerraform(this._login),
      password: cdktf.stringToTerraform(this._password),
      server: cdktf.stringToTerraform(this._server),
      service: cdktf.stringToTerraform(this._service),
      site: cdktf.stringToTerraform(this._site),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login: {
        value: cdktf.stringToHclTerraform(this._login),
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
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
