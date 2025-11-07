// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_spanning_tree_mode_rstp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSpanningTreeModeRstpConfig extends cdktf.TerraformMetaArguments {
  /**
  * enable spanning tree RSTP mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_spanning_tree_mode_rstp#action NetworkSpanningTreeModeRstp#action}
  */
  readonly action?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_spanning_tree_mode_rstp#id NetworkSpanningTreeModeRstp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * set bridge priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_spanning_tree_mode_rstp#priority NetworkSpanningTreeModeRstp#priority}
  */
  readonly priority?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_spanning_tree_mode_rstp#uuid NetworkSpanningTreeModeRstp#uuid}
  */
  readonly uuid?: string;
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_spanning_tree_mode_rstp#vlan_start NetworkSpanningTreeModeRstp#vlan_start}
  */
  readonly vlanStart?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_spanning_tree_mode_rstp thunder_network_spanning_tree_mode_rstp}
*/
export class NetworkSpanningTreeModeRstp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_spanning_tree_mode_rstp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkSpanningTreeModeRstp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSpanningTreeModeRstp to import
  * @param importFromId The id of the existing NetworkSpanningTreeModeRstp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_spanning_tree_mode_rstp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSpanningTreeModeRstp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_spanning_tree_mode_rstp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_spanning_tree_mode_rstp thunder_network_spanning_tree_mode_rstp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSpanningTreeModeRstpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkSpanningTreeModeRstpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_spanning_tree_mode_rstp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._id = config.id;
    this._priority = config.priority;
    this._uuid = config.uuid;
    this._vlanStart = config.vlanStart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: number; 
  public get action() {
    return this.getNumberAttribute('action');
  }
  public set action(value: number) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vlan_start - computed: false, optional: true, required: false
  private _vlanStart?: number; 
  public get vlanStart() {
    return this.getNumberAttribute('vlan_start');
  }
  public set vlanStart(value: number) {
    this._vlanStart = value;
  }
  public resetVlanStart() {
    this._vlanStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanStartInput() {
    return this._vlanStart;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.numberToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      uuid: cdktf.stringToTerraform(this._uuid),
      vlan_start: cdktf.numberToTerraform(this._vlanStart),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.numberToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_start: {
        value: cdktf.numberToHclTerraform(this._vlanStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
