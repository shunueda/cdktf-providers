// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address_nat_address_port_range
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6Lw4O6BindingTableTunnelAddressNatAddressPortRangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Binding_table_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address_nat_address_port_range#binding_table_name Cgnv6Lw4O6BindingTableTunnelAddressNatAddressPortRange#binding_table_name}
  */
  readonly bindingTableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address_nat_address_port_range#id Cgnv6Lw4O6BindingTableTunnelAddressNatAddressPortRange#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ipv4NatAddr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address_nat_address_port_range#ipv4_nat_addr Cgnv6Lw4O6BindingTableTunnelAddressNatAddressPortRange#ipv4_nat_addr}
  */
  readonly ipv4NatAddr: string;
  /**
  * Ipv6TunnelAddr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address_nat_address_port_range#ipv6_tunnel_addr Cgnv6Lw4O6BindingTableTunnelAddressNatAddressPortRange#ipv6_tunnel_addr}
  */
  readonly ipv6TunnelAddr: string;
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address_nat_address_port_range#port_end Cgnv6Lw4O6BindingTableTunnelAddressNatAddressPortRange#port_end}
  */
  readonly portEnd: number;
  /**
  * Single Port or Port Range Start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address_nat_address_port_range#port_start Cgnv6Lw4O6BindingTableTunnelAddressNatAddressPortRange#port_start}
  */
  readonly portStart: number;
  /**
  * Configure LW-4over6 IPIP Tunnel Endpoint Address (LW-4over6 Tunnel Endpoint Address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address_nat_address_port_range#tunnel_endpoint_address Cgnv6Lw4O6BindingTableTunnelAddressNatAddressPortRange#tunnel_endpoint_address}
  */
  readonly tunnelEndpointAddress: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address_nat_address_port_range thunder_cgnv6_lw_4o6_binding_table_tunnel_address_nat_address_port_range}
*/
export class Cgnv6Lw4O6BindingTableTunnelAddressNatAddressPortRange extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lw_4o6_binding_table_tunnel_address_nat_address_port_range";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6Lw4O6BindingTableTunnelAddressNatAddressPortRange resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6Lw4O6BindingTableTunnelAddressNatAddressPortRange to import
  * @param importFromId The id of the existing Cgnv6Lw4O6BindingTableTunnelAddressNatAddressPortRange that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address_nat_address_port_range#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6Lw4O6BindingTableTunnelAddressNatAddressPortRange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lw_4o6_binding_table_tunnel_address_nat_address_port_range", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lw_4o6_binding_table_tunnel_address_nat_address_port_range thunder_cgnv6_lw_4o6_binding_table_tunnel_address_nat_address_port_range} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6Lw4O6BindingTableTunnelAddressNatAddressPortRangeConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6Lw4O6BindingTableTunnelAddressNatAddressPortRangeConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lw_4o6_binding_table_tunnel_address_nat_address_port_range',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bindingTableName = config.bindingTableName;
    this._id = config.id;
    this._ipv4NatAddr = config.ipv4NatAddr;
    this._ipv6TunnelAddr = config.ipv6TunnelAddr;
    this._portEnd = config.portEnd;
    this._portStart = config.portStart;
    this._tunnelEndpointAddress = config.tunnelEndpointAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binding_table_name - computed: false, optional: false, required: true
  private _bindingTableName?: string; 
  public get bindingTableName() {
    return this.getStringAttribute('binding_table_name');
  }
  public set bindingTableName(value: string) {
    this._bindingTableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingTableNameInput() {
    return this._bindingTableName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ipv4_nat_addr - computed: false, optional: false, required: true
  private _ipv4NatAddr?: string; 
  public get ipv4NatAddr() {
    return this.getStringAttribute('ipv4_nat_addr');
  }
  public set ipv4NatAddr(value: string) {
    this._ipv4NatAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatAddrInput() {
    return this._ipv4NatAddr;
  }

  // ipv6_tunnel_addr - computed: false, optional: false, required: true
  private _ipv6TunnelAddr?: string; 
  public get ipv6TunnelAddr() {
    return this.getStringAttribute('ipv6_tunnel_addr');
  }
  public set ipv6TunnelAddr(value: string) {
    this._ipv6TunnelAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TunnelAddrInput() {
    return this._ipv6TunnelAddr;
  }

  // port_end - computed: false, optional: false, required: true
  private _portEnd?: number; 
  public get portEnd() {
    return this.getNumberAttribute('port_end');
  }
  public set portEnd(value: number) {
    this._portEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portEndInput() {
    return this._portEnd;
  }

  // port_start - computed: false, optional: false, required: true
  private _portStart?: number; 
  public get portStart() {
    return this.getNumberAttribute('port_start');
  }
  public set portStart(value: number) {
    this._portStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portStartInput() {
    return this._portStart;
  }

  // tunnel_endpoint_address - computed: false, optional: false, required: true
  private _tunnelEndpointAddress?: string; 
  public get tunnelEndpointAddress() {
    return this.getStringAttribute('tunnel_endpoint_address');
  }
  public set tunnelEndpointAddress(value: string) {
    this._tunnelEndpointAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEndpointAddressInput() {
    return this._tunnelEndpointAddress;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      binding_table_name: cdktf.stringToTerraform(this._bindingTableName),
      id: cdktf.stringToTerraform(this._id),
      ipv4_nat_addr: cdktf.stringToTerraform(this._ipv4NatAddr),
      ipv6_tunnel_addr: cdktf.stringToTerraform(this._ipv6TunnelAddr),
      port_end: cdktf.numberToTerraform(this._portEnd),
      port_start: cdktf.numberToTerraform(this._portStart),
      tunnel_endpoint_address: cdktf.stringToTerraform(this._tunnelEndpointAddress),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      binding_table_name: {
        value: cdktf.stringToHclTerraform(this._bindingTableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_nat_addr: {
        value: cdktf.stringToHclTerraform(this._ipv4NatAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_tunnel_addr: {
        value: cdktf.stringToHclTerraform(this._ipv6TunnelAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_end: {
        value: cdktf.numberToHclTerraform(this._portEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_start: {
        value: cdktf.numberToHclTerraform(this._portStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_endpoint_address: {
        value: cdktf.stringToHclTerraform(this._tunnelEndpointAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
