// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/quagga_bgp_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpnsenseQuaggaBgpNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/quagga_bgp_neighbor#id DataOpnsenseQuaggaBgpNeighbor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/quagga_bgp_neighbor opnsense_quagga_bgp_neighbor}
*/
export class DataOpnsenseQuaggaBgpNeighbor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_quagga_bgp_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpnsenseQuaggaBgpNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpnsenseQuaggaBgpNeighbor to import
  * @param importFromId The id of the existing DataOpnsenseQuaggaBgpNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/quagga_bgp_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpnsenseQuaggaBgpNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_quagga_bgp_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/quagga_bgp_neighbor opnsense_quagga_bgp_neighbor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpnsenseQuaggaBgpNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpnsenseQuaggaBgpNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_quagga_bgp_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.0',
        providerVersionConstraint: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as_override - computed: true, optional: false, required: false
  public get asOverride() {
    return this.getBooleanAttribute('as_override');
  }

  // attribute_unchanged - computed: true, optional: false, required: false
  public get attributeUnchanged() {
    return this.getStringAttribute('attribute_unchanged');
  }

  // bfd - computed: true, optional: false, required: false
  public get bfd() {
    return this.getBooleanAttribute('bfd');
  }

  // connect_timer - computed: true, optional: false, required: false
  public get connectTimer() {
    return this.getNumberAttribute('connect_timer');
  }

  // default_route - computed: true, optional: false, required: false
  public get defaultRoute() {
    return this.getBooleanAttribute('default_route');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable_connected_check - computed: true, optional: false, required: false
  public get disableConnectedCheck() {
    return this.getBooleanAttribute('disable_connected_check');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // hold_down - computed: true, optional: false, required: false
  public get holdDown() {
    return this.getNumberAttribute('hold_down');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // keep_alive - computed: true, optional: false, required: false
  public get keepAlive() {
    return this.getNumberAttribute('keep_alive');
  }

  // link_local_interface - computed: true, optional: false, required: false
  public get linkLocalInterface() {
    return this.getStringAttribute('link_local_interface');
  }

  // local_ip - computed: true, optional: false, required: false
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }

  // md5_password - computed: true, optional: false, required: false
  public get md5Password() {
    return this.getStringAttribute('md5_password');
  }

  // multi_hop - computed: true, optional: false, required: false
  public get multiHop() {
    return this.getBooleanAttribute('multi_hop');
  }

  // multi_protocol - computed: true, optional: false, required: false
  public get multiProtocol() {
    return this.getBooleanAttribute('multi_protocol');
  }

  // next_hop_self - computed: true, optional: false, required: false
  public get nextHopSelf() {
    return this.getBooleanAttribute('next_hop_self');
  }

  // next_hop_self_all - computed: true, optional: false, required: false
  public get nextHopSelfAll() {
    return this.getBooleanAttribute('next_hop_self_all');
  }

  // peer_ip - computed: true, optional: false, required: false
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }

  // prefix_list_in - computed: true, optional: false, required: false
  public get prefixListIn() {
    return this.getStringAttribute('prefix_list_in');
  }

  // prefix_list_out - computed: true, optional: false, required: false
  public get prefixListOut() {
    return this.getStringAttribute('prefix_list_out');
  }

  // remote_as - computed: true, optional: false, required: false
  public get remoteAs() {
    return this.getNumberAttribute('remote_as');
  }

  // route_map_in - computed: true, optional: false, required: false
  public get routeMapIn() {
    return this.getStringAttribute('route_map_in');
  }

  // route_map_out - computed: true, optional: false, required: false
  public get routeMapOut() {
    return this.getStringAttribute('route_map_out');
  }

  // rr_client - computed: true, optional: false, required: false
  public get rrClient() {
    return this.getBooleanAttribute('rr_client');
  }

  // update_source - computed: true, optional: false, required: false
  public get updateSource() {
    return this.getStringAttribute('update_source');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
