// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L2VpnPwClassConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class#delete_mode L2VpnPwClass#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class#device L2VpnPwClass#device}
  */
  readonly device?: string;
  /**
  * Set pseudowire encapsulation to MPLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class#encapsulation_mpls L2VpnPwClass#encapsulation_mpls}
  */
  readonly encapsulationMpls?: boolean | cdktf.IResolvable;
  /**
  * Insert/Discard Flow label on transmit/recceive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class#encapsulation_mpls_load_balancing_flow_label_both L2VpnPwClass#encapsulation_mpls_load_balancing_flow_label_both}
  */
  readonly encapsulationMplsLoadBalancingFlowLabelBoth?: boolean | cdktf.IResolvable;
  /**
  * Set Flow label parameters statically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class#encapsulation_mpls_load_balancing_flow_label_both_static L2VpnPwClass#encapsulation_mpls_load_balancing_flow_label_both_static}
  */
  readonly encapsulationMplsLoadBalancingFlowLabelBothStatic?: boolean | cdktf.IResolvable;
  /**
  * Legacy code value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class#encapsulation_mpls_load_balancing_flow_label_code_one7 L2VpnPwClass#encapsulation_mpls_load_balancing_flow_label_code_one7}
  */
  readonly encapsulationMplsLoadBalancingFlowLabelCodeOne7?: boolean | cdktf.IResolvable;
  /**
  * Disables sending code 17 TLV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class#encapsulation_mpls_load_balancing_flow_label_code_one7_disable L2VpnPwClass#encapsulation_mpls_load_balancing_flow_label_code_one7_disable}
  */
  readonly encapsulationMplsLoadBalancingFlowLabelCodeOne7Disable?: boolean | cdktf.IResolvable;
  /**
  * Discard Flow label on receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class#encapsulation_mpls_load_balancing_flow_label_receive L2VpnPwClass#encapsulation_mpls_load_balancing_flow_label_receive}
  */
  readonly encapsulationMplsLoadBalancingFlowLabelReceive?: boolean | cdktf.IResolvable;
  /**
  * Set Flow label parameters statically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class#encapsulation_mpls_load_balancing_flow_label_receive_static L2VpnPwClass#encapsulation_mpls_load_balancing_flow_label_receive_static}
  */
  readonly encapsulationMplsLoadBalancingFlowLabelReceiveStatic?: boolean | cdktf.IResolvable;
  /**
  * Insert Flow label on transmit 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class#encapsulation_mpls_load_balancing_flow_label_transmit L2VpnPwClass#encapsulation_mpls_load_balancing_flow_label_transmit}
  */
  readonly encapsulationMplsLoadBalancingFlowLabelTransmit?: boolean | cdktf.IResolvable;
  /**
  * Set Flow label parameters statically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class#encapsulation_mpls_load_balancing_flow_label_transmit_static L2VpnPwClass#encapsulation_mpls_load_balancing_flow_label_transmit_static}
  */
  readonly encapsulationMplsLoadBalancingFlowLabelTransmitStatic?: boolean | cdktf.IResolvable;
  /**
  * Enable PW VC label based load balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class#encapsulation_mpls_load_balancing_pw_label L2VpnPwClass#encapsulation_mpls_load_balancing_pw_label}
  */
  readonly encapsulationMplsLoadBalancingPwLabel?: boolean | cdktf.IResolvable;
  /**
  * Ethernet port mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class#encapsulation_mpls_transport_mode_ethernet L2VpnPwClass#encapsulation_mpls_transport_mode_ethernet}
  */
  readonly encapsulationMplsTransportModeEthernet?: boolean | cdktf.IResolvable;
  /**
  * passthrough incoming tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class#encapsulation_mpls_transport_mode_passthrough L2VpnPwClass#encapsulation_mpls_transport_mode_passthrough}
  */
  readonly encapsulationMplsTransportModePassthrough?: boolean | cdktf.IResolvable;
  /**
  * Vlan tagged mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class#encapsulation_mpls_transport_mode_vlan L2VpnPwClass#encapsulation_mpls_transport_mode_vlan}
  */
  readonly encapsulationMplsTransportModeVlan?: boolean | cdktf.IResolvable;
  /**
  * Pseudowire class template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class#name L2VpnPwClass#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class iosxr_l2vpn_pw_class}
*/
export class L2VpnPwClass extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_l2vpn_pw_class";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L2VpnPwClass resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L2VpnPwClass to import
  * @param importFromId The id of the existing L2VpnPwClass that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L2VpnPwClass to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_l2vpn_pw_class", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_pw_class iosxr_l2vpn_pw_class} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L2VpnPwClassConfig
  */
  public constructor(scope: Construct, id: string, config: L2VpnPwClassConfig) {
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
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._encapsulationMpls = config.encapsulationMpls;
    this._encapsulationMplsLoadBalancingFlowLabelBoth = config.encapsulationMplsLoadBalancingFlowLabelBoth;
    this._encapsulationMplsLoadBalancingFlowLabelBothStatic = config.encapsulationMplsLoadBalancingFlowLabelBothStatic;
    this._encapsulationMplsLoadBalancingFlowLabelCodeOne7 = config.encapsulationMplsLoadBalancingFlowLabelCodeOne7;
    this._encapsulationMplsLoadBalancingFlowLabelCodeOne7Disable = config.encapsulationMplsLoadBalancingFlowLabelCodeOne7Disable;
    this._encapsulationMplsLoadBalancingFlowLabelReceive = config.encapsulationMplsLoadBalancingFlowLabelReceive;
    this._encapsulationMplsLoadBalancingFlowLabelReceiveStatic = config.encapsulationMplsLoadBalancingFlowLabelReceiveStatic;
    this._encapsulationMplsLoadBalancingFlowLabelTransmit = config.encapsulationMplsLoadBalancingFlowLabelTransmit;
    this._encapsulationMplsLoadBalancingFlowLabelTransmitStatic = config.encapsulationMplsLoadBalancingFlowLabelTransmitStatic;
    this._encapsulationMplsLoadBalancingPwLabel = config.encapsulationMplsLoadBalancingPwLabel;
    this._encapsulationMplsTransportModeEthernet = config.encapsulationMplsTransportModeEthernet;
    this._encapsulationMplsTransportModePassthrough = config.encapsulationMplsTransportModePassthrough;
    this._encapsulationMplsTransportModeVlan = config.encapsulationMplsTransportModeVlan;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // encapsulation_mpls - computed: false, optional: true, required: false
  private _encapsulationMpls?: boolean | cdktf.IResolvable; 
  public get encapsulationMpls() {
    return this.getBooleanAttribute('encapsulation_mpls');
  }
  public set encapsulationMpls(value: boolean | cdktf.IResolvable) {
    this._encapsulationMpls = value;
  }
  public resetEncapsulationMpls() {
    this._encapsulationMpls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationMplsInput() {
    return this._encapsulationMpls;
  }

  // encapsulation_mpls_load_balancing_flow_label_both - computed: false, optional: true, required: false
  private _encapsulationMplsLoadBalancingFlowLabelBoth?: boolean | cdktf.IResolvable; 
  public get encapsulationMplsLoadBalancingFlowLabelBoth() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_flow_label_both');
  }
  public set encapsulationMplsLoadBalancingFlowLabelBoth(value: boolean | cdktf.IResolvable) {
    this._encapsulationMplsLoadBalancingFlowLabelBoth = value;
  }
  public resetEncapsulationMplsLoadBalancingFlowLabelBoth() {
    this._encapsulationMplsLoadBalancingFlowLabelBoth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationMplsLoadBalancingFlowLabelBothInput() {
    return this._encapsulationMplsLoadBalancingFlowLabelBoth;
  }

  // encapsulation_mpls_load_balancing_flow_label_both_static - computed: false, optional: true, required: false
  private _encapsulationMplsLoadBalancingFlowLabelBothStatic?: boolean | cdktf.IResolvable; 
  public get encapsulationMplsLoadBalancingFlowLabelBothStatic() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_flow_label_both_static');
  }
  public set encapsulationMplsLoadBalancingFlowLabelBothStatic(value: boolean | cdktf.IResolvable) {
    this._encapsulationMplsLoadBalancingFlowLabelBothStatic = value;
  }
  public resetEncapsulationMplsLoadBalancingFlowLabelBothStatic() {
    this._encapsulationMplsLoadBalancingFlowLabelBothStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationMplsLoadBalancingFlowLabelBothStaticInput() {
    return this._encapsulationMplsLoadBalancingFlowLabelBothStatic;
  }

  // encapsulation_mpls_load_balancing_flow_label_code_one7 - computed: false, optional: true, required: false
  private _encapsulationMplsLoadBalancingFlowLabelCodeOne7?: boolean | cdktf.IResolvable; 
  public get encapsulationMplsLoadBalancingFlowLabelCodeOne7() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_flow_label_code_one7');
  }
  public set encapsulationMplsLoadBalancingFlowLabelCodeOne7(value: boolean | cdktf.IResolvable) {
    this._encapsulationMplsLoadBalancingFlowLabelCodeOne7 = value;
  }
  public resetEncapsulationMplsLoadBalancingFlowLabelCodeOne7() {
    this._encapsulationMplsLoadBalancingFlowLabelCodeOne7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationMplsLoadBalancingFlowLabelCodeOne7Input() {
    return this._encapsulationMplsLoadBalancingFlowLabelCodeOne7;
  }

  // encapsulation_mpls_load_balancing_flow_label_code_one7_disable - computed: false, optional: true, required: false
  private _encapsulationMplsLoadBalancingFlowLabelCodeOne7Disable?: boolean | cdktf.IResolvable; 
  public get encapsulationMplsLoadBalancingFlowLabelCodeOne7Disable() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_flow_label_code_one7_disable');
  }
  public set encapsulationMplsLoadBalancingFlowLabelCodeOne7Disable(value: boolean | cdktf.IResolvable) {
    this._encapsulationMplsLoadBalancingFlowLabelCodeOne7Disable = value;
  }
  public resetEncapsulationMplsLoadBalancingFlowLabelCodeOne7Disable() {
    this._encapsulationMplsLoadBalancingFlowLabelCodeOne7Disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationMplsLoadBalancingFlowLabelCodeOne7DisableInput() {
    return this._encapsulationMplsLoadBalancingFlowLabelCodeOne7Disable;
  }

  // encapsulation_mpls_load_balancing_flow_label_receive - computed: false, optional: true, required: false
  private _encapsulationMplsLoadBalancingFlowLabelReceive?: boolean | cdktf.IResolvable; 
  public get encapsulationMplsLoadBalancingFlowLabelReceive() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_flow_label_receive');
  }
  public set encapsulationMplsLoadBalancingFlowLabelReceive(value: boolean | cdktf.IResolvable) {
    this._encapsulationMplsLoadBalancingFlowLabelReceive = value;
  }
  public resetEncapsulationMplsLoadBalancingFlowLabelReceive() {
    this._encapsulationMplsLoadBalancingFlowLabelReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationMplsLoadBalancingFlowLabelReceiveInput() {
    return this._encapsulationMplsLoadBalancingFlowLabelReceive;
  }

  // encapsulation_mpls_load_balancing_flow_label_receive_static - computed: false, optional: true, required: false
  private _encapsulationMplsLoadBalancingFlowLabelReceiveStatic?: boolean | cdktf.IResolvable; 
  public get encapsulationMplsLoadBalancingFlowLabelReceiveStatic() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_flow_label_receive_static');
  }
  public set encapsulationMplsLoadBalancingFlowLabelReceiveStatic(value: boolean | cdktf.IResolvable) {
    this._encapsulationMplsLoadBalancingFlowLabelReceiveStatic = value;
  }
  public resetEncapsulationMplsLoadBalancingFlowLabelReceiveStatic() {
    this._encapsulationMplsLoadBalancingFlowLabelReceiveStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationMplsLoadBalancingFlowLabelReceiveStaticInput() {
    return this._encapsulationMplsLoadBalancingFlowLabelReceiveStatic;
  }

  // encapsulation_mpls_load_balancing_flow_label_transmit - computed: false, optional: true, required: false
  private _encapsulationMplsLoadBalancingFlowLabelTransmit?: boolean | cdktf.IResolvable; 
  public get encapsulationMplsLoadBalancingFlowLabelTransmit() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_flow_label_transmit');
  }
  public set encapsulationMplsLoadBalancingFlowLabelTransmit(value: boolean | cdktf.IResolvable) {
    this._encapsulationMplsLoadBalancingFlowLabelTransmit = value;
  }
  public resetEncapsulationMplsLoadBalancingFlowLabelTransmit() {
    this._encapsulationMplsLoadBalancingFlowLabelTransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationMplsLoadBalancingFlowLabelTransmitInput() {
    return this._encapsulationMplsLoadBalancingFlowLabelTransmit;
  }

  // encapsulation_mpls_load_balancing_flow_label_transmit_static - computed: false, optional: true, required: false
  private _encapsulationMplsLoadBalancingFlowLabelTransmitStatic?: boolean | cdktf.IResolvable; 
  public get encapsulationMplsLoadBalancingFlowLabelTransmitStatic() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_flow_label_transmit_static');
  }
  public set encapsulationMplsLoadBalancingFlowLabelTransmitStatic(value: boolean | cdktf.IResolvable) {
    this._encapsulationMplsLoadBalancingFlowLabelTransmitStatic = value;
  }
  public resetEncapsulationMplsLoadBalancingFlowLabelTransmitStatic() {
    this._encapsulationMplsLoadBalancingFlowLabelTransmitStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationMplsLoadBalancingFlowLabelTransmitStaticInput() {
    return this._encapsulationMplsLoadBalancingFlowLabelTransmitStatic;
  }

  // encapsulation_mpls_load_balancing_pw_label - computed: false, optional: true, required: false
  private _encapsulationMplsLoadBalancingPwLabel?: boolean | cdktf.IResolvable; 
  public get encapsulationMplsLoadBalancingPwLabel() {
    return this.getBooleanAttribute('encapsulation_mpls_load_balancing_pw_label');
  }
  public set encapsulationMplsLoadBalancingPwLabel(value: boolean | cdktf.IResolvable) {
    this._encapsulationMplsLoadBalancingPwLabel = value;
  }
  public resetEncapsulationMplsLoadBalancingPwLabel() {
    this._encapsulationMplsLoadBalancingPwLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationMplsLoadBalancingPwLabelInput() {
    return this._encapsulationMplsLoadBalancingPwLabel;
  }

  // encapsulation_mpls_transport_mode_ethernet - computed: false, optional: true, required: false
  private _encapsulationMplsTransportModeEthernet?: boolean | cdktf.IResolvable; 
  public get encapsulationMplsTransportModeEthernet() {
    return this.getBooleanAttribute('encapsulation_mpls_transport_mode_ethernet');
  }
  public set encapsulationMplsTransportModeEthernet(value: boolean | cdktf.IResolvable) {
    this._encapsulationMplsTransportModeEthernet = value;
  }
  public resetEncapsulationMplsTransportModeEthernet() {
    this._encapsulationMplsTransportModeEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationMplsTransportModeEthernetInput() {
    return this._encapsulationMplsTransportModeEthernet;
  }

  // encapsulation_mpls_transport_mode_passthrough - computed: false, optional: true, required: false
  private _encapsulationMplsTransportModePassthrough?: boolean | cdktf.IResolvable; 
  public get encapsulationMplsTransportModePassthrough() {
    return this.getBooleanAttribute('encapsulation_mpls_transport_mode_passthrough');
  }
  public set encapsulationMplsTransportModePassthrough(value: boolean | cdktf.IResolvable) {
    this._encapsulationMplsTransportModePassthrough = value;
  }
  public resetEncapsulationMplsTransportModePassthrough() {
    this._encapsulationMplsTransportModePassthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationMplsTransportModePassthroughInput() {
    return this._encapsulationMplsTransportModePassthrough;
  }

  // encapsulation_mpls_transport_mode_vlan - computed: false, optional: true, required: false
  private _encapsulationMplsTransportModeVlan?: boolean | cdktf.IResolvable; 
  public get encapsulationMplsTransportModeVlan() {
    return this.getBooleanAttribute('encapsulation_mpls_transport_mode_vlan');
  }
  public set encapsulationMplsTransportModeVlan(value: boolean | cdktf.IResolvable) {
    this._encapsulationMplsTransportModeVlan = value;
  }
  public resetEncapsulationMplsTransportModeVlan() {
    this._encapsulationMplsTransportModeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationMplsTransportModeVlanInput() {
    return this._encapsulationMplsTransportModeVlan;
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
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      encapsulation_mpls: cdktf.booleanToTerraform(this._encapsulationMpls),
      encapsulation_mpls_load_balancing_flow_label_both: cdktf.booleanToTerraform(this._encapsulationMplsLoadBalancingFlowLabelBoth),
      encapsulation_mpls_load_balancing_flow_label_both_static: cdktf.booleanToTerraform(this._encapsulationMplsLoadBalancingFlowLabelBothStatic),
      encapsulation_mpls_load_balancing_flow_label_code_one7: cdktf.booleanToTerraform(this._encapsulationMplsLoadBalancingFlowLabelCodeOne7),
      encapsulation_mpls_load_balancing_flow_label_code_one7_disable: cdktf.booleanToTerraform(this._encapsulationMplsLoadBalancingFlowLabelCodeOne7Disable),
      encapsulation_mpls_load_balancing_flow_label_receive: cdktf.booleanToTerraform(this._encapsulationMplsLoadBalancingFlowLabelReceive),
      encapsulation_mpls_load_balancing_flow_label_receive_static: cdktf.booleanToTerraform(this._encapsulationMplsLoadBalancingFlowLabelReceiveStatic),
      encapsulation_mpls_load_balancing_flow_label_transmit: cdktf.booleanToTerraform(this._encapsulationMplsLoadBalancingFlowLabelTransmit),
      encapsulation_mpls_load_balancing_flow_label_transmit_static: cdktf.booleanToTerraform(this._encapsulationMplsLoadBalancingFlowLabelTransmitStatic),
      encapsulation_mpls_load_balancing_pw_label: cdktf.booleanToTerraform(this._encapsulationMplsLoadBalancingPwLabel),
      encapsulation_mpls_transport_mode_ethernet: cdktf.booleanToTerraform(this._encapsulationMplsTransportModeEthernet),
      encapsulation_mpls_transport_mode_passthrough: cdktf.booleanToTerraform(this._encapsulationMplsTransportModePassthrough),
      encapsulation_mpls_transport_mode_vlan: cdktf.booleanToTerraform(this._encapsulationMplsTransportModeVlan),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      encapsulation_mpls: {
        value: cdktf.booleanToHclTerraform(this._encapsulationMpls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encapsulation_mpls_load_balancing_flow_label_both: {
        value: cdktf.booleanToHclTerraform(this._encapsulationMplsLoadBalancingFlowLabelBoth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encapsulation_mpls_load_balancing_flow_label_both_static: {
        value: cdktf.booleanToHclTerraform(this._encapsulationMplsLoadBalancingFlowLabelBothStatic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encapsulation_mpls_load_balancing_flow_label_code_one7: {
        value: cdktf.booleanToHclTerraform(this._encapsulationMplsLoadBalancingFlowLabelCodeOne7),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encapsulation_mpls_load_balancing_flow_label_code_one7_disable: {
        value: cdktf.booleanToHclTerraform(this._encapsulationMplsLoadBalancingFlowLabelCodeOne7Disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encapsulation_mpls_load_balancing_flow_label_receive: {
        value: cdktf.booleanToHclTerraform(this._encapsulationMplsLoadBalancingFlowLabelReceive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encapsulation_mpls_load_balancing_flow_label_receive_static: {
        value: cdktf.booleanToHclTerraform(this._encapsulationMplsLoadBalancingFlowLabelReceiveStatic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encapsulation_mpls_load_balancing_flow_label_transmit: {
        value: cdktf.booleanToHclTerraform(this._encapsulationMplsLoadBalancingFlowLabelTransmit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encapsulation_mpls_load_balancing_flow_label_transmit_static: {
        value: cdktf.booleanToHclTerraform(this._encapsulationMplsLoadBalancingFlowLabelTransmitStatic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encapsulation_mpls_load_balancing_pw_label: {
        value: cdktf.booleanToHclTerraform(this._encapsulationMplsLoadBalancingPwLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encapsulation_mpls_transport_mode_ethernet: {
        value: cdktf.booleanToHclTerraform(this._encapsulationMplsTransportModeEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encapsulation_mpls_transport_mode_passthrough: {
        value: cdktf.booleanToHclTerraform(this._encapsulationMplsTransportModePassthrough),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encapsulation_mpls_transport_mode_vlan: {
        value: cdktf.booleanToHclTerraform(this._encapsulationMplsTransportModeVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
