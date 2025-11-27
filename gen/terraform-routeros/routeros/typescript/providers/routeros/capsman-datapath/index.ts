// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CapsmanDatapathConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath#___path___ CapsmanDatapath#___path___}
  */
  readonly path?: string;
  /**
  * ARP mode. See [docs](https://wiki.mikrotik.com/wiki/Manual:IP/ARP#ARP_Modes) for info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath#arp CapsmanDatapath#arp}
  */
  readonly arp?: string;
  /**
  * Bridge to which particular interface should be automatically added as port. Required only when local-forwarding is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath#bridge CapsmanDatapath#bridge}
  */
  readonly bridge?: string;
  /**
  * Bridge port cost to use when adding as bridge port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath#bridge_cost CapsmanDatapath#bridge_cost}
  */
  readonly bridgeCost?: number;
  /**
  * Bridge horizon to use when adding as bridge port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath#bridge_horizon CapsmanDatapath#bridge_horizon}
  */
  readonly bridgeHorizon?: number;
  /**
  * Controls if client-to-client forwarding between wireless clients connected to interface should be allowed, in local forwarding mode this function is performed by CAP, otherwise it is performed by CAPsMAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath#client_to_client_forwarding CapsmanDatapath#client_to_client_forwarding}
  */
  readonly clientToClientForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath#comment CapsmanDatapath#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath#id CapsmanDatapath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interface list name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath#interface_list CapsmanDatapath#interface_list}
  */
  readonly interfaceList?: string;
  /**
  * Layer2 MTU size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath#l2mtu CapsmanDatapath#l2mtu}
  */
  readonly l2Mtu?: number;
  /**
  * Controls forwarding mode. If disabled, all L2 and L3 data will be forwarded to CAPsMAN, and further forwarding decisions will be made only then. See [docs](https://wiki.mikrotik.com/wiki/Manual:CAPsMAN#Local_Forwarding_Mode) for info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath#local_forwarding CapsmanDatapath#local_forwarding}
  */
  readonly localForwarding?: boolean | cdktf.IResolvable;
  /**
  * MTU size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath#mtu CapsmanDatapath#mtu}
  */
  readonly mtu?: number;
  /**
  * Changing the name of this resource will force it to be recreated.
  * 	> The links of other configuration properties to this resource may be lost!
  * 	> Changing the name of the resource outside of a Terraform will result in a loss of control integrity for that resource!
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath#name CapsmanDatapath#name}
  */
  readonly name: string;
  /**
  * OpenFlow switch to add interface to, as port when enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath#openflow_switch CapsmanDatapath#openflow_switch}
  */
  readonly openflowSwitch?: string;
  /**
  * VLAN ID to assign to interface if vlan-mode enables use of VLAN tagging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath#vlan_id CapsmanDatapath#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * VLAN tagging mode specifies if VLAN tag should be assigned to interface (causes all received data to get tagged with VLAN tag and allows interface to only send out data tagged with given tag)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath#vlan_mode CapsmanDatapath#vlan_mode}
  */
  readonly vlanMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath routeros_capsman_datapath}
*/
export class CapsmanDatapath extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_capsman_datapath";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CapsmanDatapath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CapsmanDatapath to import
  * @param importFromId The id of the existing CapsmanDatapath that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CapsmanDatapath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_capsman_datapath", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/capsman_datapath routeros_capsman_datapath} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CapsmanDatapathConfig
  */
  public constructor(scope: Construct, id: string, config: CapsmanDatapathConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_capsman_datapath',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.93.0',
        providerVersionConstraint: '1.93.0'
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
    this._arp = config.arp;
    this._bridge = config.bridge;
    this._bridgeCost = config.bridgeCost;
    this._bridgeHorizon = config.bridgeHorizon;
    this._clientToClientForwarding = config.clientToClientForwarding;
    this._comment = config.comment;
    this._id = config.id;
    this._interfaceList = config.interfaceList;
    this._l2Mtu = config.l2Mtu;
    this._localForwarding = config.localForwarding;
    this._mtu = config.mtu;
    this._name = config.name;
    this._openflowSwitch = config.openflowSwitch;
    this._vlanId = config.vlanId;
    this._vlanMode = config.vlanMode;
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

  // arp - computed: false, optional: true, required: false
  private _arp?: string; 
  public get arp() {
    return this.getStringAttribute('arp');
  }
  public set arp(value: string) {
    this._arp = value;
  }
  public resetArp() {
    this._arp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInput() {
    return this._arp;
  }

  // bridge - computed: false, optional: true, required: false
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  public resetBridge() {
    this._bridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // bridge_cost - computed: false, optional: true, required: false
  private _bridgeCost?: number; 
  public get bridgeCost() {
    return this.getNumberAttribute('bridge_cost');
  }
  public set bridgeCost(value: number) {
    this._bridgeCost = value;
  }
  public resetBridgeCost() {
    this._bridgeCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeCostInput() {
    return this._bridgeCost;
  }

  // bridge_horizon - computed: false, optional: true, required: false
  private _bridgeHorizon?: number; 
  public get bridgeHorizon() {
    return this.getNumberAttribute('bridge_horizon');
  }
  public set bridgeHorizon(value: number) {
    this._bridgeHorizon = value;
  }
  public resetBridgeHorizon() {
    this._bridgeHorizon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeHorizonInput() {
    return this._bridgeHorizon;
  }

  // client_to_client_forwarding - computed: false, optional: true, required: false
  private _clientToClientForwarding?: boolean | cdktf.IResolvable; 
  public get clientToClientForwarding() {
    return this.getBooleanAttribute('client_to_client_forwarding');
  }
  public set clientToClientForwarding(value: boolean | cdktf.IResolvable) {
    this._clientToClientForwarding = value;
  }
  public resetClientToClientForwarding() {
    this._clientToClientForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientToClientForwardingInput() {
    return this._clientToClientForwarding;
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

  // interface_list - computed: false, optional: true, required: false
  private _interfaceList?: string; 
  public get interfaceList() {
    return this.getStringAttribute('interface_list');
  }
  public set interfaceList(value: string) {
    this._interfaceList = value;
  }
  public resetInterfaceList() {
    this._interfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList;
  }

  // l2mtu - computed: false, optional: true, required: false
  private _l2Mtu?: number; 
  public get l2Mtu() {
    return this.getNumberAttribute('l2mtu');
  }
  public set l2Mtu(value: number) {
    this._l2Mtu = value;
  }
  public resetL2Mtu() {
    this._l2Mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2MtuInput() {
    return this._l2Mtu;
  }

  // local_forwarding - computed: false, optional: true, required: false
  private _localForwarding?: boolean | cdktf.IResolvable; 
  public get localForwarding() {
    return this.getBooleanAttribute('local_forwarding');
  }
  public set localForwarding(value: boolean | cdktf.IResolvable) {
    this._localForwarding = value;
  }
  public resetLocalForwarding() {
    this._localForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localForwardingInput() {
    return this._localForwarding;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // openflow_switch - computed: false, optional: true, required: false
  private _openflowSwitch?: string; 
  public get openflowSwitch() {
    return this.getStringAttribute('openflow_switch');
  }
  public set openflowSwitch(value: string) {
    this._openflowSwitch = value;
  }
  public resetOpenflowSwitch() {
    this._openflowSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openflowSwitchInput() {
    return this._openflowSwitch;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_mode - computed: false, optional: true, required: false
  private _vlanMode?: string; 
  public get vlanMode() {
    return this.getStringAttribute('vlan_mode');
  }
  public set vlanMode(value: string) {
    this._vlanMode = value;
  }
  public resetVlanMode() {
    this._vlanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanModeInput() {
    return this._vlanMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      arp: cdktf.stringToTerraform(this._arp),
      bridge: cdktf.stringToTerraform(this._bridge),
      bridge_cost: cdktf.numberToTerraform(this._bridgeCost),
      bridge_horizon: cdktf.numberToTerraform(this._bridgeHorizon),
      client_to_client_forwarding: cdktf.booleanToTerraform(this._clientToClientForwarding),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      interface_list: cdktf.stringToTerraform(this._interfaceList),
      l2mtu: cdktf.numberToTerraform(this._l2Mtu),
      local_forwarding: cdktf.booleanToTerraform(this._localForwarding),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      openflow_switch: cdktf.stringToTerraform(this._openflowSwitch),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vlan_mode: cdktf.stringToTerraform(this._vlanMode),
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
      arp: {
        value: cdktf.stringToHclTerraform(this._arp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridge: {
        value: cdktf.stringToHclTerraform(this._bridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridge_cost: {
        value: cdktf.numberToHclTerraform(this._bridgeCost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bridge_horizon: {
        value: cdktf.numberToHclTerraform(this._bridgeHorizon),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_to_client_forwarding: {
        value: cdktf.booleanToHclTerraform(this._clientToClientForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      interface_list: {
        value: cdktf.stringToHclTerraform(this._interfaceList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2mtu: {
        value: cdktf.numberToHclTerraform(this._l2Mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_forwarding: {
        value: cdktf.booleanToHclTerraform(this._localForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      openflow_switch: {
        value: cdktf.stringToHclTerraform(this._openflowSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_mode: {
        value: cdktf.stringToHclTerraform(this._vlanMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
