// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetSwitchConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch#___path___ InterfaceEthernetSwitch#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch#___skip___ InterfaceEthernetSwitch#___skip___}
  */
  readonly skip?: string;
  /**
  * All switch chips have a special port that is called switchX-cpu, this is the CPU port for a switch chip, it is meant to forward traffic from a switch chip to the CPU, such a port is required for management traffic and for routing features. By default the switch chip ensures that this special CPU port is not congested and sends out Pause Frames when link capacity is exceeded to make sure the port is not oversaturated, this feature is called CPU Flow Control. Without this feature packets that might be crucial for routing or management purposes might get dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch#cpu_flow_control InterfaceEthernetSwitch#cpu_flow_control}
  */
  readonly cpuFlowControl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch#id InterfaceEthernetSwitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Layer 3 Hardware Offloading (L3HW, otherwise known as IP switching or HW routing) allows to offload some router features onto the switch chip. This allows reaching wire speeds when routing packets, which simply would not be possible with the CPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch#l3_hw_offloading InterfaceEthernetSwitch#l3_hw_offloading}
  */
  readonly l3HwOffloading?: boolean | cdktf.IResolvable;
  /**
  * Selects a single mirroring egress target port, only available on 88E6393X, 88E6191X and 88E6190 switch chips. Mirrored packets from `mirror-egress` (see the property in port menu) will be sent to the selected port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch#mirror_egress_target InterfaceEthernetSwitch#mirror_egress_target}
  */
  readonly mirrorEgressTarget?: string;
  /**
  * Selects a single mirroring source port. Ingress and egress traffic will be sent to the mirror-target port. Note that mirror-target port has to belong to the same switch (see which port belongs to which switch in /interface ethernet menu).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch#mirror_source InterfaceEthernetSwitch#mirror_source}
  */
  readonly mirrorSource?: string;
  /**
  * Selects a single mirroring target port. Mirrored packets from mirror-source and mirror (see the property in rule and host table) will be sent to the selected port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch#mirror_target InterfaceEthernetSwitch#mirror_target}
  */
  readonly mirrorTarget?: string;
  /**
  * Name of the switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch#name InterfaceEthernetSwitch#name}
  */
  readonly name: string;
  /**
  * Allows enabling QoS for the given switch chip (if the latter supports QoS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch#qos_hw_offloading InterfaceEthernetSwitch#qos_hw_offloading}
  */
  readonly qosHwOffloading?: boolean | cdktf.IResolvable;
  /**
  * Enables Remote Switch Port Analyzer (RSPAN) feature on mirror-target. Traffic marked for ingress or egress mirroring is carried over a specified remote analyzer VLAN - `rspan-egress-vlan-id` and `rspan-ingress-vlan-id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch#rspan InterfaceEthernetSwitch#rspan}
  */
  readonly rspan?: boolean | cdktf.IResolvable;
  /**
  * RSPAN egress VLAN Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch#rspan_egress_vlan_id InterfaceEthernetSwitch#rspan_egress_vlan_id}
  */
  readonly rspanEgressVlanId?: number;
  /**
  * RSPAN ingress VLAN Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch#rspan_ingress_vlan_id InterfaceEthernetSwitch#rspan_ingress_vlan_id}
  */
  readonly rspanIngressVlanId?: number;
  /**
  * Switch-chip id. Default .id = *0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch#switch_id InterfaceEthernetSwitch#switch_id}
  */
  readonly switchId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch routeros_interface_ethernet_switch}
*/
export class InterfaceEthernetSwitch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_ethernet_switch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernetSwitch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernetSwitch to import
  * @param importFromId The id of the existing InterfaceEthernetSwitch that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernetSwitch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_ethernet_switch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch routeros_interface_ethernet_switch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetSwitchConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetSwitchConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_ethernet_switch',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.96.0',
        providerVersionConstraint: '1.96.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._skip = config.skip;
    this._cpuFlowControl = config.cpuFlowControl;
    this._id = config.id;
    this._l3HwOffloading = config.l3HwOffloading;
    this._mirrorEgressTarget = config.mirrorEgressTarget;
    this._mirrorSource = config.mirrorSource;
    this._mirrorTarget = config.mirrorTarget;
    this._name = config.name;
    this._qosHwOffloading = config.qosHwOffloading;
    this._rspan = config.rspan;
    this._rspanEgressVlanId = config.rspanEgressVlanId;
    this._rspanIngressVlanId = config.rspanIngressVlanId;
    this._switchId = config.switchId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // cpu_flow_control - computed: false, optional: true, required: false
  private _cpuFlowControl?: boolean | cdktf.IResolvable; 
  public get cpuFlowControl() {
    return this.getBooleanAttribute('cpu_flow_control');
  }
  public set cpuFlowControl(value: boolean | cdktf.IResolvable) {
    this._cpuFlowControl = value;
  }
  public resetCpuFlowControl() {
    this._cpuFlowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuFlowControlInput() {
    return this._cpuFlowControl;
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

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // l3_hw_offloading - computed: false, optional: true, required: false
  private _l3HwOffloading?: boolean | cdktf.IResolvable; 
  public get l3HwOffloading() {
    return this.getBooleanAttribute('l3_hw_offloading');
  }
  public set l3HwOffloading(value: boolean | cdktf.IResolvable) {
    this._l3HwOffloading = value;
  }
  public resetL3HwOffloading() {
    this._l3HwOffloading = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3HwOffloadingInput() {
    return this._l3HwOffloading;
  }

  // mirror_egress_target - computed: false, optional: true, required: false
  private _mirrorEgressTarget?: string; 
  public get mirrorEgressTarget() {
    return this.getStringAttribute('mirror_egress_target');
  }
  public set mirrorEgressTarget(value: string) {
    this._mirrorEgressTarget = value;
  }
  public resetMirrorEgressTarget() {
    this._mirrorEgressTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorEgressTargetInput() {
    return this._mirrorEgressTarget;
  }

  // mirror_source - computed: false, optional: true, required: false
  private _mirrorSource?: string; 
  public get mirrorSource() {
    return this.getStringAttribute('mirror_source');
  }
  public set mirrorSource(value: string) {
    this._mirrorSource = value;
  }
  public resetMirrorSource() {
    this._mirrorSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorSourceInput() {
    return this._mirrorSource;
  }

  // mirror_target - computed: false, optional: true, required: false
  private _mirrorTarget?: string; 
  public get mirrorTarget() {
    return this.getStringAttribute('mirror_target');
  }
  public set mirrorTarget(value: string) {
    this._mirrorTarget = value;
  }
  public resetMirrorTarget() {
    this._mirrorTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorTargetInput() {
    return this._mirrorTarget;
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

  // qos_hw_offloading - computed: false, optional: true, required: false
  private _qosHwOffloading?: boolean | cdktf.IResolvable; 
  public get qosHwOffloading() {
    return this.getBooleanAttribute('qos_hw_offloading');
  }
  public set qosHwOffloading(value: boolean | cdktf.IResolvable) {
    this._qosHwOffloading = value;
  }
  public resetQosHwOffloading() {
    this._qosHwOffloading = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosHwOffloadingInput() {
    return this._qosHwOffloading;
  }

  // rspan - computed: false, optional: true, required: false
  private _rspan?: boolean | cdktf.IResolvable; 
  public get rspan() {
    return this.getBooleanAttribute('rspan');
  }
  public set rspan(value: boolean | cdktf.IResolvable) {
    this._rspan = value;
  }
  public resetRspan() {
    this._rspan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspanInput() {
    return this._rspan;
  }

  // rspan_egress_vlan_id - computed: false, optional: true, required: false
  private _rspanEgressVlanId?: number; 
  public get rspanEgressVlanId() {
    return this.getNumberAttribute('rspan_egress_vlan_id');
  }
  public set rspanEgressVlanId(value: number) {
    this._rspanEgressVlanId = value;
  }
  public resetRspanEgressVlanId() {
    this._rspanEgressVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspanEgressVlanIdInput() {
    return this._rspanEgressVlanId;
  }

  // rspan_ingress_vlan_id - computed: false, optional: true, required: false
  private _rspanIngressVlanId?: number; 
  public get rspanIngressVlanId() {
    return this.getNumberAttribute('rspan_ingress_vlan_id');
  }
  public set rspanIngressVlanId(value: number) {
    this._rspanIngressVlanId = value;
  }
  public resetRspanIngressVlanId() {
    this._rspanIngressVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspanIngressVlanIdInput() {
    return this._rspanIngressVlanId;
  }

  // switch_id - computed: false, optional: true, required: false
  private _switchId?: string; 
  public get switchId() {
    return this.getStringAttribute('switch_id');
  }
  public set switchId(value: string) {
    this._switchId = value;
  }
  public resetSwitchId() {
    this._switchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIdInput() {
    return this._switchId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      cpu_flow_control: cdktf.booleanToTerraform(this._cpuFlowControl),
      id: cdktf.stringToTerraform(this._id),
      l3_hw_offloading: cdktf.booleanToTerraform(this._l3HwOffloading),
      mirror_egress_target: cdktf.stringToTerraform(this._mirrorEgressTarget),
      mirror_source: cdktf.stringToTerraform(this._mirrorSource),
      mirror_target: cdktf.stringToTerraform(this._mirrorTarget),
      name: cdktf.stringToTerraform(this._name),
      qos_hw_offloading: cdktf.booleanToTerraform(this._qosHwOffloading),
      rspan: cdktf.booleanToTerraform(this._rspan),
      rspan_egress_vlan_id: cdktf.numberToTerraform(this._rspanEgressVlanId),
      rspan_ingress_vlan_id: cdktf.numberToTerraform(this._rspanIngressVlanId),
      switch_id: cdktf.stringToTerraform(this._switchId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_flow_control: {
        value: cdktf.booleanToHclTerraform(this._cpuFlowControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3_hw_offloading: {
        value: cdktf.booleanToHclTerraform(this._l3HwOffloading),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mirror_egress_target: {
        value: cdktf.stringToHclTerraform(this._mirrorEgressTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirror_source: {
        value: cdktf.stringToHclTerraform(this._mirrorSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirror_target: {
        value: cdktf.stringToHclTerraform(this._mirrorTarget),
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
      qos_hw_offloading: {
        value: cdktf.booleanToHclTerraform(this._qosHwOffloading),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rspan: {
        value: cdktf.booleanToHclTerraform(this._rspan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rspan_egress_vlan_id: {
        value: cdktf.numberToHclTerraform(this._rspanEgressVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rspan_ingress_vlan_id: {
        value: cdktf.numberToHclTerraform(this._rspanIngressVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switch_id: {
        value: cdktf.stringToHclTerraform(this._switchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
