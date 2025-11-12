// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_pw_class
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrL2VpnPwClassConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_pw_class#device DataIosxrL2VpnPwClass#device}
  */
  readonly device?: string;
  /**
  * Pseudowire class template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_pw_class#name DataIosxrL2VpnPwClass#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_pw_class iosxr_l2vpn_pw_class}
*/
export class DataIosxrL2VpnPwClass extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_l2vpn_pw_class";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrL2VpnPwClass resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrL2VpnPwClass to import
  * @param importFromId The id of the existing DataIosxrL2VpnPwClass that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_pw_class#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrL2VpnPwClass to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_l2vpn_pw_class", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_pw_class iosxr_l2vpn_pw_class} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrL2VpnPwClassConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrL2VpnPwClassConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_l2vpn_pw_class',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // encapsulation_mpls - computed: true, optional: false, required: false
  public get encapsulationMpls() {
    return this.getBooleanAttribute('encapsulation_mpls');
  }

  // encapsulation_mpls_load_balancing_flow_label_both - computed: true, optional: false, required: false
  public get encapsulationMplsLoadBalancingFlowLabelBoth() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_flow_label_both');
  }

  // encapsulation_mpls_load_balancing_flow_label_both_static - computed: true, optional: false, required: false
  public get encapsulationMplsLoadBalancingFlowLabelBothStatic() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_flow_label_both_static');
  }

  // encapsulation_mpls_load_balancing_flow_label_code_one7 - computed: true, optional: false, required: false
  public get encapsulationMplsLoadBalancingFlowLabelCodeOne7() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_flow_label_code_one7');
  }

  // encapsulation_mpls_load_balancing_flow_label_code_one7_disable - computed: true, optional: false, required: false
  public get encapsulationMplsLoadBalancingFlowLabelCodeOne7Disable() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_flow_label_code_one7_disable');
  }

  // encapsulation_mpls_load_balancing_flow_label_receive - computed: true, optional: false, required: false
  public get encapsulationMplsLoadBalancingFlowLabelReceive() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_flow_label_receive');
  }

  // encapsulation_mpls_load_balancing_flow_label_receive_static - computed: true, optional: false, required: false
  public get encapsulationMplsLoadBalancingFlowLabelReceiveStatic() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_flow_label_receive_static');
  }

  // encapsulation_mpls_load_balancing_flow_label_transmit - computed: true, optional: false, required: false
  public get encapsulationMplsLoadBalancingFlowLabelTransmit() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_flow_label_transmit');
  }

  // encapsulation_mpls_load_balancing_flow_label_transmit_static - computed: true, optional: false, required: false
  public get encapsulationMplsLoadBalancingFlowLabelTransmitStatic() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_flow_label_transmit_static');
  }

  // encapsulation_mpls_load_balancing_pw_label - computed: true, optional: false, required: false
  public get encapsulationMplsLoadBalancingPwLabel() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_pw_label');
  }

  // encapsulation_mpls_transport_mode_ethernet - computed: true, optional: false, required: false
  public get encapsulationMplsTransportModeEthernet() {
    return this.getBooleanAttribute('encapsulation_mpls_transport_mode_ethernet');
  }

  // encapsulation_mpls_transport_mode_passthrough - computed: true, optional: false, required: false
  public get encapsulationMplsTransportModePassthrough() {
    return this.getBooleanAttribute('encapsulation_mpls_transport_mode_passthrough');
  }

  // encapsulation_mpls_transport_mode_vlan - computed: true, optional: false, required: false
  public get encapsulationMplsTransportModeVlan() {
    return this.getBooleanAttribute('encapsulation_mpls_transport_mode_vlan');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
