// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/nve_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNxosNveInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/nve_interface#device DataNxosNveInterface#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/nve_interface nxos_nve_interface}
*/
export class DataNxosNveInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_nve_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNxosNveInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNxosNveInterface to import
  * @param importFromId The id of the existing DataNxosNveInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/nve_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNxosNveInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_nve_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/nve_interface nxos_nve_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNxosNveInterfaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNxosNveInterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nxos_nve_interface',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: true, optional: false, required: false
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }

  // advertise_virtual_mac - computed: true, optional: false, required: false
  public get advertiseVirtualMac() {
    return this.getBooleanAttribute('advertise_virtual_mac');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // hold_down_time - computed: true, optional: false, required: false
  public get holdDownTime() {
    return this.getNumberAttribute('hold_down_time');
  }

  // host_reachability_protocol - computed: true, optional: false, required: false
  public get hostReachabilityProtocol() {
    return this.getStringAttribute('host_reachability_protocol');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_replication_protocol_bgp - computed: true, optional: false, required: false
  public get ingressReplicationProtocolBgp() {
    return this.getBooleanAttribute('ingress_replication_protocol_bgp');
  }

  // multicast_group_l2 - computed: true, optional: false, required: false
  public get multicastGroupL2() {
    return this.getStringAttribute('multicast_group_l2');
  }

  // multicast_group_l3 - computed: true, optional: false, required: false
  public get multicastGroupL3() {
    return this.getStringAttribute('multicast_group_l3');
  }

  // multisite_source_interface - computed: true, optional: false, required: false
  public get multisiteSourceInterface() {
    return this.getStringAttribute('multisite_source_interface');
  }

  // source_interface - computed: true, optional: false, required: false
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }

  // suppress_arp - computed: true, optional: false, required: false
  public get suppressArp() {
    return this.getBooleanAttribute('suppress_arp');
  }

  // suppress_mac_route - computed: true, optional: false, required: false
  public get suppressMacRoute() {
    return this.getBooleanAttribute('suppress_mac_route');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
