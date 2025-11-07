// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_proxy_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicesProxyProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Proxy profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_proxy_profile#name ServicesProxyProfile#name}
  */
  readonly name: string;
  /**
  * Proxy server name or IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_proxy_profile#protocol_http_host ServicesProxyProfile#protocol_http_host}
  */
  readonly protocolHttpHost: string;
  /**
  * Proxy server port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_proxy_profile#protocol_http_port ServicesProxyProfile#protocol_http_port}
  */
  readonly protocolHttpPort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_proxy_profile junos_services_proxy_profile}
*/
export class ServicesProxyProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_services_proxy_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicesProxyProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicesProxyProfile to import
  * @param importFromId The id of the existing ServicesProxyProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_proxy_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicesProxyProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_services_proxy_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_proxy_profile junos_services_proxy_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicesProxyProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ServicesProxyProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_services_proxy_profile',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._protocolHttpHost = config.protocolHttpHost;
    this._protocolHttpPort = config.protocolHttpPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // protocol_http_host - computed: false, optional: false, required: true
  private _protocolHttpHost?: string; 
  public get protocolHttpHost() {
    return this.getStringAttribute('protocol_http_host');
  }
  public set protocolHttpHost(value: string) {
    this._protocolHttpHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolHttpHostInput() {
    return this._protocolHttpHost;
  }

  // protocol_http_port - computed: false, optional: true, required: false
  private _protocolHttpPort?: number; 
  public get protocolHttpPort() {
    return this.getNumberAttribute('protocol_http_port');
  }
  public set protocolHttpPort(value: number) {
    this._protocolHttpPort = value;
  }
  public resetProtocolHttpPort() {
    this._protocolHttpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolHttpPortInput() {
    return this._protocolHttpPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      protocol_http_host: cdktf.stringToTerraform(this._protocolHttpHost),
      protocol_http_port: cdktf.numberToTerraform(this._protocolHttpPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_http_host: {
        value: cdktf.stringToHclTerraform(this._protocolHttpHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_http_port: {
        value: cdktf.numberToHclTerraform(this._protocolHttpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
