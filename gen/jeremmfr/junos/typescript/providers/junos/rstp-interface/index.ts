// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RstpInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Send/Receive untagged RSTP BPDUs on this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp_interface#access_trunk RstpInterface#access_trunk}
  */
  readonly accessTrunk?: boolean | cdktf.IResolvable;
  /**
  * Generate an alarm on BPDU expiry (Loop Protect).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp_interface#bpdu_timeout_action_alarm RstpInterface#bpdu_timeout_action_alarm}
  */
  readonly bpduTimeoutActionAlarm?: boolean | cdktf.IResolvable;
  /**
  * Block the interface on BPDU expiry (Loop Protect).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp_interface#bpdu_timeout_action_block RstpInterface#bpdu_timeout_action_block}
  */
  readonly bpduTimeoutActionBlock?: boolean | cdktf.IResolvable;
  /**
  * Cost of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp_interface#cost RstpInterface#cost}
  */
  readonly cost?: number;
  /**
  * Port is an edge port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp_interface#edge RstpInterface#edge}
  */
  readonly edge?: boolean | cdktf.IResolvable;
  /**
  * Interface mode (P2P or shared).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp_interface#mode RstpInterface#mode}
  */
  readonly mode?: string;
  /**
  * Interface name or `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp_interface#name RstpInterface#name}
  */
  readonly name: string;
  /**
  * Do not allow the interface to become root (Root Protect).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp_interface#no_root_port RstpInterface#no_root_port}
  */
  readonly noRootPort?: boolean | cdktf.IResolvable;
  /**
  * Interface priority (in increments of 16).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp_interface#priority RstpInterface#priority}
  */
  readonly priority?: number;
  /**
  * Routing instance for rstp protocol if not root level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp_interface#routing_instance RstpInterface#routing_instance}
  */
  readonly routingInstance?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp_interface junos_rstp_interface}
*/
export class RstpInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_rstp_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RstpInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RstpInterface to import
  * @param importFromId The id of the existing RstpInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RstpInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_rstp_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp_interface junos_rstp_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RstpInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: RstpInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_rstp_interface',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
