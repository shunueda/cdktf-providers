// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs_vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetSwitchCrsVlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs_vlan#___path___ InterfaceEthernetSwitchCrsVlan#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs_vlan#comment InterfaceEthernetSwitchCrsVlan#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs_vlan#disabled InterfaceEthernetSwitchCrsVlan#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables forced VLAN flooding per VLAN. If the feature is enabled, the result of the destination MAC lookup in the UFDB or MFDB is ignored,and the packet is forced to flood in the VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs_vlan#flood InterfaceEthernetSwitchCrsVlan#flood}
  */
  readonly flood?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs_vlan#id InterfaceEthernetSwitchCrsVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable the ingress mirror per VLAN to support the VLAN-based mirror function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs_vlan#ingress_mirror InterfaceEthernetSwitchCrsVlan#ingress_mirror}
  */
  readonly ingressMirror?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables source MAC learning for VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs_vlan#learn InterfaceEthernetSwitchCrsVlan#learn}
  */
  readonly learn?: boolean | cdktf.IResolvable;
  /**
  * Member ports of the VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs_vlan#ports InterfaceEthernetSwitchCrsVlan#ports}
  */
  readonly ports?: string;
  /**
  * Defined QoS group from QoS group menu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs_vlan#qos_group InterfaceEthernetSwitchCrsVlan#qos_group}
  */
  readonly qosGroup?: string;
  /**
  * FDB lookup mode for lookup in UFDB and MFDB.
  *     -  Shared VLAN Learning (svl) - learning/lookup is based on MAC addresses - not on VLAN IDs.
  *     -  Independent VLAN Learning (ivl) - learning/lookup is based on both MAC addresses and VLAN IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs_vlan#svl InterfaceEthernetSwitchCrsVlan#svl}
  */
  readonly svl?: boolean | cdktf.IResolvable;
  /**
  * VLAN ID of the VLAN member entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs_vlan#vlan_id InterfaceEthernetSwitchCrsVlan#vlan_id}
  */
  readonly vlanId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs_vlan routeros_interface_ethernet_switch_crs_vlan}
*/
export class InterfaceEthernetSwitchCrsVlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_ethernet_switch_crs_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernetSwitchCrsVlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernetSwitchCrsVlan to import
  * @param importFromId The id of the existing InterfaceEthernetSwitchCrsVlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs_vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernetSwitchCrsVlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_ethernet_switch_crs_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs_vlan routeros_interface_ethernet_switch_crs_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetSwitchCrsVlanConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetSwitchCrsVlanConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_ethernet_switch_crs_vlan',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
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
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._flood = config.flood;
    this._id = config.id;
    this._ingressMirror = config.ingressMirror;
    this._learn = config.learn;
    this._ports = config.ports;
    this._qosGroup = config.qosGroup;
    this._svl = config.svl;
    this._vlanId = config.vlanId;
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

  // comment - computed: false, optional: true, required: false
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // flood - computed: false, optional: true, required: false
  private _flood?: boolean | cdktf.IResolvable; 
  public get flood() {
    return this.getBooleanAttribute('flood');
  }
  public set flood(value: boolean | cdktf.IResolvable) {
    this._flood = value;
  }
  public resetFlood() {
    this._flood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodInput() {
    return this._flood;
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

  // ingress_mirror - computed: false, optional: true, required: false
  private _ingressMirror?: boolean | cdktf.IResolvable; 
  public get ingressMirror() {
    return this.getBooleanAttribute('ingress_mirror');
  }
  public set ingressMirror(value: boolean | cdktf.IResolvable) {
    this._ingressMirror = value;
  }
  public resetIngressMirror() {
    this._ingressMirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressMirrorInput() {
    return this._ingressMirror;
  }

  // learn - computed: false, optional: true, required: false
  private _learn?: boolean | cdktf.IResolvable; 
  public get learn() {
    return this.getBooleanAttribute('learn');
  }
  public set learn(value: boolean | cdktf.IResolvable) {
    this._learn = value;
  }
  public resetLearn() {
    this._learn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnInput() {
    return this._learn;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string; 
  public get ports() {
    return this.getStringAttribute('ports');
  }
  public set ports(value: string) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // qos_group - computed: false, optional: true, required: false
  private _qosGroup?: string; 
  public get qosGroup() {
    return this.getStringAttribute('qos_group');
  }
  public set qosGroup(value: string) {
    this._qosGroup = value;
  }
  public resetQosGroup() {
    this._qosGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosGroupInput() {
    return this._qosGroup;
  }

  // svl - computed: false, optional: true, required: false
  private _svl?: boolean | cdktf.IResolvable; 
  public get svl() {
    return this.getBooleanAttribute('svl');
  }
  public set svl(value: boolean | cdktf.IResolvable) {
    this._svl = value;
  }
  public resetSvl() {
    this._svl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svlInput() {
    return this._svl;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      flood: cdktf.booleanToTerraform(this._flood),
      id: cdktf.stringToTerraform(this._id),
      ingress_mirror: cdktf.booleanToTerraform(this._ingressMirror),
      learn: cdktf.booleanToTerraform(this._learn),
      ports: cdktf.stringToTerraform(this._ports),
      qos_group: cdktf.stringToTerraform(this._qosGroup),
      svl: cdktf.booleanToTerraform(this._svl),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
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
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      flood: {
        value: cdktf.booleanToHclTerraform(this._flood),
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
      ingress_mirror: {
        value: cdktf.booleanToHclTerraform(this._ingressMirror),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      learn: {
        value: cdktf.booleanToHclTerraform(this._learn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ports: {
        value: cdktf.stringToHclTerraform(this._ports),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_group: {
        value: cdktf.stringToHclTerraform(this._qosGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svl: {
        value: cdktf.booleanToHclTerraform(this._svl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
