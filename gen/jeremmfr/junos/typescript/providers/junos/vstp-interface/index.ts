// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VstpInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Send/Receive untagged RSTP BPDUs on this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_interface#access_trunk VstpInterface#access_trunk}
  */
  readonly accessTrunk?: boolean | cdktf.IResolvable;
  /**
  * Generate an alarm on BPDU expiry (Loop Protect).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_interface#bpdu_timeout_action_alarm VstpInterface#bpdu_timeout_action_alarm}
  */
  readonly bpduTimeoutActionAlarm?: boolean | cdktf.IResolvable;
  /**
  * Block the interface on BPDU expiry (Loop Protect).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_interface#bpdu_timeout_action_block VstpInterface#bpdu_timeout_action_block}
  */
  readonly bpduTimeoutActionBlock?: boolean | cdktf.IResolvable;
  /**
  * Cost of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_interface#cost VstpInterface#cost}
  */
  readonly cost?: number;
  /**
  * Port is an edge port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_interface#edge VstpInterface#edge}
  */
  readonly edge?: boolean | cdktf.IResolvable;
  /**
  * Interface mode (P2P or shared).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_interface#mode VstpInterface#mode}
  */
  readonly mode?: string;
  /**
  * Interface name or `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_interface#name VstpInterface#name}
  */
  readonly name: string;
  /**
  * Do not allow the interface to become root (Root Protect).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_interface#no_root_port VstpInterface#no_root_port}
  */
  readonly noRootPort?: boolean | cdktf.IResolvable;
  /**
  * Interface priority (in increments of 16).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_interface#priority VstpInterface#priority}
  */
  readonly priority?: number;
  /**
  * Routing instance for vstp protocol if not root level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_interface#routing_instance VstpInterface#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Configure interface in VSTP vlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_interface#vlan VstpInterface#vlan}
  */
  readonly vlan?: string;
  /**
  * Configure interface in VSTP vlan-group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_interface#vlan_group VstpInterface#vlan_group}
  */
  readonly vlanGroup?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_interface junos_vstp_interface}
*/
export class VstpInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_vstp_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VstpInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VstpInterface to import
  * @param importFromId The id of the existing VstpInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VstpInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_vstp_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_interface junos_vstp_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VstpInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: VstpInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_vstp_interface',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTrunk = config.accessTrunk;
    this._bpduTimeoutActionAlarm = config.bpduTimeoutActionAlarm;
    this._bpduTimeoutActionBlock = config.bpduTimeoutActionBlock;
    this._cost = config.cost;
    this._edge = config.edge;
    this._mode = config.mode;
    this._name = config.name;
    this._noRootPort = config.noRootPort;
    this._priority = config.priority;
    this._routingInstance = config.routingInstance;
    this._vlan = config.vlan;
    this._vlanGroup = config.vlanGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_trunk - computed: false, optional: true, required: false
  private _accessTrunk?: boolean | cdktf.IResolvable; 
  public get accessTrunk() {
    return this.getBooleanAttribute('access_trunk');
  }
  public set accessTrunk(value: boolean | cdktf.IResolvable) {
    this._accessTrunk = value;
  }
  public resetAccessTrunk() {
    this._accessTrunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTrunkInput() {
    return this._accessTrunk;
  }

  // bpdu_timeout_action_alarm - computed: false, optional: true, required: false
  private _bpduTimeoutActionAlarm?: boolean | cdktf.IResolvable; 
  public get bpduTimeoutActionAlarm() {
    return this.getBooleanAttribute('bpdu_timeout_action_alarm');
  }
  public set bpduTimeoutActionAlarm(value: boolean | cdktf.IResolvable) {
    this._bpduTimeoutActionAlarm = value;
  }
  public resetBpduTimeoutActionAlarm() {
    this._bpduTimeoutActionAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduTimeoutActionAlarmInput() {
    return this._bpduTimeoutActionAlarm;
  }

  // bpdu_timeout_action_block - computed: false, optional: true, required: false
  private _bpduTimeoutActionBlock?: boolean | cdktf.IResolvable; 
  public get bpduTimeoutActionBlock() {
    return this.getBooleanAttribute('bpdu_timeout_action_block');
  }
  public set bpduTimeoutActionBlock(value: boolean | cdktf.IResolvable) {
    this._bpduTimeoutActionBlock = value;
  }
  public resetBpduTimeoutActionBlock() {
    this._bpduTimeoutActionBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduTimeoutActionBlockInput() {
    return this._bpduTimeoutActionBlock;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // edge - computed: false, optional: true, required: false
  private _edge?: boolean | cdktf.IResolvable; 
  public get edge() {
    return this.getBooleanAttribute('edge');
  }
  public set edge(value: boolean | cdktf.IResolvable) {
    this._edge = value;
  }
  public resetEdge() {
    this._edge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeInput() {
    return this._edge;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // no_root_port - computed: false, optional: true, required: false
  private _noRootPort?: boolean | cdktf.IResolvable; 
  public get noRootPort() {
    return this.getBooleanAttribute('no_root_port');
  }
  public set noRootPort(value: boolean | cdktf.IResolvable) {
    this._noRootPort = value;
  }
  public resetNoRootPort() {
    this._noRootPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRootPortInput() {
    return this._noRootPort;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // routing_instance - computed: true, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vlan_group - computed: false, optional: true, required: false
  private _vlanGroup?: string; 
  public get vlanGroup() {
    return this.getStringAttribute('vlan_group');
  }
  public set vlanGroup(value: string) {
    this._vlanGroup = value;
  }
  public resetVlanGroup() {
    this._vlanGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanGroupInput() {
    return this._vlanGroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_trunk: cdktf.booleanToTerraform(this._accessTrunk),
      bpdu_timeout_action_alarm: cdktf.booleanToTerraform(this._bpduTimeoutActionAlarm),
      bpdu_timeout_action_block: cdktf.booleanToTerraform(this._bpduTimeoutActionBlock),
      cost: cdktf.numberToTerraform(this._cost),
      edge: cdktf.booleanToTerraform(this._edge),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      no_root_port: cdktf.booleanToTerraform(this._noRootPort),
      priority: cdktf.numberToTerraform(this._priority),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      vlan: cdktf.stringToTerraform(this._vlan),
      vlan_group: cdktf.stringToTerraform(this._vlanGroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_trunk: {
        value: cdktf.booleanToHclTerraform(this._accessTrunk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bpdu_timeout_action_alarm: {
        value: cdktf.booleanToHclTerraform(this._bpduTimeoutActionAlarm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bpdu_timeout_action_block: {
        value: cdktf.booleanToHclTerraform(this._bpduTimeoutActionBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cost: {
        value: cdktf.numberToHclTerraform(this._cost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      edge: {
        value: cdktf.booleanToHclTerraform(this._edge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      no_root_port: {
        value: cdktf.booleanToHclTerraform(this._noRootPort),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.stringToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_group: {
        value: cdktf.stringToHclTerraform(this._vlanGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
