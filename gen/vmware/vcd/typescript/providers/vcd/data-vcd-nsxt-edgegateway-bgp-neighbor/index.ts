// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway_bgp_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdNsxtEdgegatewayBgpNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Edge gateway ID for BGP Neighbor Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway_bgp_neighbor#edge_gateway_id DataVcdNsxtEdgegatewayBgpNeighbor#edge_gateway_id}
  */
  readonly edgeGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway_bgp_neighbor#id DataVcdNsxtEdgegatewayBgpNeighbor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * BGP Neighbor IP address (IPv4 or IPv6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway_bgp_neighbor#ip_address DataVcdNsxtEdgegatewayBgpNeighbor#ip_address}
  */
  readonly ipAddress: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway_bgp_neighbor#org DataVcdNsxtEdgegatewayBgpNeighbor#org}
  */
  readonly org?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway_bgp_neighbor vcd_nsxt_edgegateway_bgp_neighbor}
*/
export class DataVcdNsxtEdgegatewayBgpNeighbor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_edgegateway_bgp_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdNsxtEdgegatewayBgpNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdNsxtEdgegatewayBgpNeighbor to import
  * @param importFromId The id of the existing DataVcdNsxtEdgegatewayBgpNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway_bgp_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdNsxtEdgegatewayBgpNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_edgegateway_bgp_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway_bgp_neighbor vcd_nsxt_edgegateway_bgp_neighbor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdNsxtEdgegatewayBgpNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdNsxtEdgegatewayBgpNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_edgegateway_bgp_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeGatewayId = config.edgeGatewayId;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._org = config.org;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_as_in - computed: true, optional: false, required: false
  public get allowAsIn() {
    return this.getBooleanAttribute('allow_as_in');
  }

  // bfd_dead_multiple - computed: true, optional: false, required: false
  public get bfdDeadMultiple() {
    return this.getNumberAttribute('bfd_dead_multiple');
  }

  // bfd_enabled - computed: true, optional: false, required: false
  public get bfdEnabled() {
    return this.getBooleanAttribute('bfd_enabled');
  }

  // bfd_interval - computed: true, optional: false, required: false
  public get bfdInterval() {
    return this.getNumberAttribute('bfd_interval');
  }

  // edge_gateway_id - computed: false, optional: false, required: true
  private _edgeGatewayId?: string; 
  public get edgeGatewayId() {
    return this.getStringAttribute('edge_gateway_id');
  }
  public set edgeGatewayId(value: string) {
    this._edgeGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayIdInput() {
    return this._edgeGatewayId;
  }

  // graceful_restart_mode - computed: true, optional: false, required: false
  public get gracefulRestartMode() {
    return this.getStringAttribute('graceful_restart_mode');
  }

  // hold_down_timer - computed: true, optional: false, required: false
  public get holdDownTimer() {
    return this.getNumberAttribute('hold_down_timer');
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

  // in_filter_ip_prefix_list_id - computed: true, optional: false, required: false
  public get inFilterIpPrefixListId() {
    return this.getStringAttribute('in_filter_ip_prefix_list_id');
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // keep_alive_timer - computed: true, optional: false, required: false
  public get keepAliveTimer() {
    return this.getNumberAttribute('keep_alive_timer');
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // out_filter_ip_prefix_list_id - computed: true, optional: false, required: false
  public get outFilterIpPrefixListId() {
    return this.getStringAttribute('out_filter_ip_prefix_list_id');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // remote_as_number - computed: true, optional: false, required: false
  public get remoteAsNumber() {
    return this.getStringAttribute('remote_as_number');
  }

  // route_filtering - computed: true, optional: false, required: false
  public get routeFiltering() {
    return this.getStringAttribute('route_filtering');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edge_gateway_id: cdktf.stringToTerraform(this._edgeGatewayId),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      org: cdktf.stringToTerraform(this._org),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edge_gateway_id: {
        value: cdktf.stringToHclTerraform(this._edgeGatewayId),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
