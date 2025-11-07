// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EvpnInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Core isolation group
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_interface#core_isolation_group EvpnInterface#core_isolation_group}
  */
  readonly coreIsolationGroup?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_interface#delete_mode EvpnInterface#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_interface#device EvpnInterface#device}
  */
  readonly device?: string;
  /**
  * ESI value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_interface#ethernet_segment_identifier_type_zero_esi EvpnInterface#ethernet_segment_identifier_type_zero_esi}
  */
  readonly ethernetSegmentIdentifierTypeZeroEsi: string;
  /**
  * All-Active load balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_interface#ethernet_segment_load_balancing_mode_all_active EvpnInterface#ethernet_segment_load_balancing_mode_all_active}
  */
  readonly ethernetSegmentLoadBalancingModeAllActive?: boolean | cdktf.IResolvable;
  /**
  * Port-Active load balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_interface#ethernet_segment_load_balancing_mode_port_active EvpnInterface#ethernet_segment_load_balancing_mode_port_active}
  */
  readonly ethernetSegmentLoadBalancingModePortActive?: boolean | cdktf.IResolvable;
  /**
  * Single-Active load balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_interface#ethernet_segment_load_balancing_mode_single_active EvpnInterface#ethernet_segment_load_balancing_mode_single_active}
  */
  readonly ethernetSegmentLoadBalancingModeSingleActive?: boolean | cdktf.IResolvable;
  /**
  * Single-Flow-Active load balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_interface#ethernet_segment_load_balancing_mode_single_flow_active EvpnInterface#ethernet_segment_load_balancing_mode_single_flow_active}
  */
  readonly ethernetSegmentLoadBalancingModeSingleFlowActive?: boolean | cdktf.IResolvable;
  /**
  * Specify interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_interface#interface_name EvpnInterface#interface_name}
  */
  readonly interfaceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_interface iosxr_evpn_interface}
*/
export class EvpnInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_evpn_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EvpnInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EvpnInterface to import
  * @param importFromId The id of the existing EvpnInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EvpnInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_evpn_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_interface iosxr_evpn_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EvpnInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: EvpnInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_evpn_interface',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._coreIsolationGroup = config.coreIsolationGroup;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._ethernetSegmentIdentifierTypeZeroEsi = config.ethernetSegmentIdentifierTypeZeroEsi;
    this._ethernetSegmentLoadBalancingModeAllActive = config.ethernetSegmentLoadBalancingModeAllActive;
    this._ethernetSegmentLoadBalancingModePortActive = config.ethernetSegmentLoadBalancingModePortActive;
    this._ethernetSegmentLoadBalancingModeSingleActive = config.ethernetSegmentLoadBalancingModeSingleActive;
    this._ethernetSegmentLoadBalancingModeSingleFlowActive = config.ethernetSegmentLoadBalancingModeSingleFlowActive;
    this._interfaceName = config.interfaceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // core_isolation_group - computed: false, optional: true, required: false
  private _coreIsolationGroup?: number; 
  public get coreIsolationGroup() {
    return this.getNumberAttribute('core_isolation_group');
  }
  public set coreIsolationGroup(value: number) {
    this._coreIsolationGroup = value;
  }
  public resetCoreIsolationGroup() {
    this._coreIsolationGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreIsolationGroupInput() {
    return this._coreIsolationGroup;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // ethernet_segment_identifier_type_zero_esi - computed: false, optional: false, required: true
  private _ethernetSegmentIdentifierTypeZeroEsi?: string; 
  public get ethernetSegmentIdentifierTypeZeroEsi() {
    return this.getStringAttribute('ethernet_segment_identifier_type_zero_esi');
  }
  public set ethernetSegmentIdentifierTypeZeroEsi(value: string) {
    this._ethernetSegmentIdentifierTypeZeroEsi = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetSegmentIdentifierTypeZeroEsiInput() {
    return this._ethernetSegmentIdentifierTypeZeroEsi;
  }

  // ethernet_segment_load_balancing_mode_all_active - computed: false, optional: true, required: false
  private _ethernetSegmentLoadBalancingModeAllActive?: boolean | cdktf.IResolvable; 
  public get ethernetSegmentLoadBalancingModeAllActive() {
    return this.getBooleanAttribute('ethernet_segment_load_balancing_mode_all_active');
  }
  public set ethernetSegmentLoadBalancingModeAllActive(value: boolean | cdktf.IResolvable) {
    this._ethernetSegmentLoadBalancingModeAllActive = value;
  }
  public resetEthernetSegmentLoadBalancingModeAllActive() {
    this._ethernetSegmentLoadBalancingModeAllActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetSegmentLoadBalancingModeAllActiveInput() {
    return this._ethernetSegmentLoadBalancingModeAllActive;
  }

  // ethernet_segment_load_balancing_mode_port_active - computed: false, optional: true, required: false
  private _ethernetSegmentLoadBalancingModePortActive?: boolean | cdktf.IResolvable; 
  public get ethernetSegmentLoadBalancingModePortActive() {
    return this.getBooleanAttribute('ethernet_segment_load_balancing_mode_port_active');
  }
  public set ethernetSegmentLoadBalancingModePortActive(value: boolean | cdktf.IResolvable) {
    this._ethernetSegmentLoadBalancingModePortActive = value;
  }
  public resetEthernetSegmentLoadBalancingModePortActive() {
    this._ethernetSegmentLoadBalancingModePortActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetSegmentLoadBalancingModePortActiveInput() {
    return this._ethernetSegmentLoadBalancingModePortActive;
  }

  // ethernet_segment_load_balancing_mode_single_active - computed: false, optional: true, required: false
  private _ethernetSegmentLoadBalancingModeSingleActive?: boolean | cdktf.IResolvable; 
  public get ethernetSegmentLoadBalancingModeSingleActive() {
    return this.getBooleanAttribute('ethernet_segment_load_balancing_mode_single_active');
  }
  public set ethernetSegmentLoadBalancingModeSingleActive(value: boolean | cdktf.IResolvable) {
    this._ethernetSegmentLoadBalancingModeSingleActive = value;
  }
  public resetEthernetSegmentLoadBalancingModeSingleActive() {
    this._ethernetSegmentLoadBalancingModeSingleActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetSegmentLoadBalancingModeSingleActiveInput() {
    return this._ethernetSegmentLoadBalancingModeSingleActive;
  }

  // ethernet_segment_load_balancing_mode_single_flow_active - computed: false, optional: true, required: false
  private _ethernetSegmentLoadBalancingModeSingleFlowActive?: boolean | cdktf.IResolvable; 
  public get ethernetSegmentLoadBalancingModeSingleFlowActive() {
    return this.getBooleanAttribute('ethernet_segment_load_balancing_mode_single_flow_active');
  }
  public set ethernetSegmentLoadBalancingModeSingleFlowActive(value: boolean | cdktf.IResolvable) {
    this._ethernetSegmentLoadBalancingModeSingleFlowActive = value;
  }
  public resetEthernetSegmentLoadBalancingModeSingleFlowActive() {
    this._ethernetSegmentLoadBalancingModeSingleFlowActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetSegmentLoadBalancingModeSingleFlowActiveInput() {
    return this._ethernetSegmentLoadBalancingModeSingleFlowActive;
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
      core_isolation_group: cdktf.numberToTerraform(this._coreIsolationGroup),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      ethernet_segment_identifier_type_zero_esi: cdktf.stringToTerraform(this._ethernetSegmentIdentifierTypeZeroEsi),
      ethernet_segment_load_balancing_mode_all_active: cdktf.booleanToTerraform(this._ethernetSegmentLoadBalancingModeAllActive),
      ethernet_segment_load_balancing_mode_port_active: cdktf.booleanToTerraform(this._ethernetSegmentLoadBalancingModePortActive),
      ethernet_segment_load_balancing_mode_single_active: cdktf.booleanToTerraform(this._ethernetSegmentLoadBalancingModeSingleActive),
      ethernet_segment_load_balancing_mode_single_flow_active: cdktf.booleanToTerraform(this._ethernetSegmentLoadBalancingModeSingleFlowActive),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      core_isolation_group: {
        value: cdktf.numberToHclTerraform(this._coreIsolationGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet_segment_identifier_type_zero_esi: {
        value: cdktf.stringToHclTerraform(this._ethernetSegmentIdentifierTypeZeroEsi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet_segment_load_balancing_mode_all_active: {
        value: cdktf.booleanToHclTerraform(this._ethernetSegmentLoadBalancingModeAllActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ethernet_segment_load_balancing_mode_port_active: {
        value: cdktf.booleanToHclTerraform(this._ethernetSegmentLoadBalancingModePortActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ethernet_segment_load_balancing_mode_single_active: {
        value: cdktf.booleanToHclTerraform(this._ethernetSegmentLoadBalancingModeSingleActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ethernet_segment_load_balancing_mode_single_flow_active: {
        value: cdktf.booleanToHclTerraform(this._ethernetSegmentLoadBalancingModeSingleFlowActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
