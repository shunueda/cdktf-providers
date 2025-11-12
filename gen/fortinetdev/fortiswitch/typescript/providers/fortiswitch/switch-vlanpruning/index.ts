// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlanpruning
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchVlanpruningConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlanpruning#id SwitchVlanpruning#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlanpruning#join_timer SwitchVlanpruning#join_timer}
  */
  readonly joinTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlanpruning#leave_timer SwitchVlanpruning#leave_timer}
  */
  readonly leaveTimer?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlanpruning fortiswitch_switch_vlanpruning}
*/
export class SwitchVlanpruning extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switch_vlanpruning";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchVlanpruning resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchVlanpruning to import
  * @param importFromId The id of the existing SwitchVlanpruning that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlanpruning#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchVlanpruning to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switch_vlanpruning", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlanpruning fortiswitch_switch_vlanpruning} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchVlanpruningConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchVlanpruningConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switch_vlanpruning',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._joinTimer = config.joinTimer;
    this._leaveTimer = config.leaveTimer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // join_timer - computed: true, optional: true, required: false
  private _joinTimer?: number; 
  public get joinTimer() {
    return this.getNumberAttribute('join_timer');
  }
  public set joinTimer(value: number) {
    this._joinTimer = value;
  }
  public resetJoinTimer() {
    this._joinTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinTimerInput() {
    return this._joinTimer;
  }

  // leave_timer - computed: true, optional: true, required: false
  private _leaveTimer?: number; 
  public get leaveTimer() {
    return this.getNumberAttribute('leave_timer');
  }
  public set leaveTimer(value: number) {
    this._leaveTimer = value;
  }
  public resetLeaveTimer() {
    this._leaveTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaveTimerInput() {
    return this._leaveTimer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      join_timer: cdktf.numberToTerraform(this._joinTimer),
      leave_timer: cdktf.numberToTerraform(this._leaveTimer),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      join_timer: {
        value: cdktf.numberToHclTerraform(this._joinTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      leave_timer: {
        value: cdktf.numberToHclTerraform(this._leaveTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
