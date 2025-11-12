// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrEvpnInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_interface#device DataIosxrEvpnInterface#device}
  */
  readonly device?: string;
  /**
  * Specify interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_interface#interface_name DataIosxrEvpnInterface#interface_name}
  */
  readonly interfaceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_interface iosxr_evpn_interface}
*/
export class DataIosxrEvpnInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_evpn_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrEvpnInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrEvpnInterface to import
  * @param importFromId The id of the existing DataIosxrEvpnInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrEvpnInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_evpn_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_interface iosxr_evpn_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrEvpnInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrEvpnInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_evpn_interface',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
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
    this._interfaceName = config.interfaceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // core_isolation_group - computed: true, optional: false, required: false
  public get coreIsolationGroup() {
    return this.getNumberAttribute('core_isolation_group');
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

  // ethernet_segment_identifier_type_zero_esi - computed: true, optional: false, required: false
  public get ethernetSegmentIdentifierTypeZeroEsi() {
    return this.getStringAttribute('ethernet_segment_identifier_type_zero_esi');
  }

  // ethernet_segment_load_balancing_mode_all_active - computed: true, optional: false, required: false
  public get ethernetSegmentLoadBalancingModeAllActive() {
    return this.getBooleanAttribute('ethernet_segment_load_balancing_mode_all_active');
  }

  // ethernet_segment_load_balancing_mode_port_active - computed: true, optional: false, required: false
  public get ethernetSegmentLoadBalancingModePortActive() {
    return this.getBooleanAttribute('ethernet_segment_load_balancing_mode_port_active');
  }

  // ethernet_segment_load_balancing_mode_single_active - computed: true, optional: false, required: false
  public get ethernetSegmentLoadBalancingModeSingleActive() {
    return this.getBooleanAttribute('ethernet_segment_load_balancing_mode_single_active');
  }

  // ethernet_segment_load_balancing_mode_single_flow_active - computed: true, optional: false, required: false
  public get ethernetSegmentLoadBalancingModeSingleFlowActive() {
    return this.getBooleanAttribute('ethernet_segment_load_balancing_mode_single_flow_active');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
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
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
