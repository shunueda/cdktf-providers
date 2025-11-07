// https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpServerNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The network DHCP server(s) will lease addresses from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server_network#address DhcpServerNetwork#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server_network#comment DhcpServerNetwork#comment}
  */
  readonly comment?: string;
  /**
  * The DHCP client will use these as the default DNS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server_network#dns_server DhcpServerNetwork#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * The default gateway to be used by DHCP Client. Default: `0.0.0.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server_network#gateway DhcpServerNetwork#gateway}
  */
  readonly gateway?: string;
  /**
  * The actual network mask to be used by DHCP client. If set to '0' - netmask from network address will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server_network#netmask DhcpServerNetwork#netmask}
  */
  readonly netmask?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server_network mikrotik_dhcp_server_network}
*/
export class DhcpServerNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mikrotik_dhcp_server_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpServerNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpServerNetwork to import
  * @param importFromId The id of the existing DhcpServerNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpServerNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mikrotik_dhcp_server_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server_network mikrotik_dhcp_server_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpServerNetworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DhcpServerNetworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mikrotik_dhcp_server_network',
      terraformGeneratorMetadata: {
        providerName: 'mikrotik',
        providerVersion: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._comment = config.comment;
    this._dnsServer = config.dnsServer;
    this._gateway = config.gateway;
    this._netmask = config.netmask;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dns_server - computed: true, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      comment: cdktf.stringToTerraform(this._comment),
      dns_server: cdktf.stringToTerraform(this._dnsServer),
      gateway: cdktf.stringToTerraform(this._gateway),
      netmask: cdktf.stringToTerraform(this._netmask),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server: {
        value: cdktf.stringToHclTerraform(this._dnsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
