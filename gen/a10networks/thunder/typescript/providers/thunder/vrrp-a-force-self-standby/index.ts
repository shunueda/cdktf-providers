// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_force_self_standby
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrrpAForceSelfStandbyConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': enable vrrp-a force-self-standby; 'disable': disable vrrp-a force-self-standby;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_force_self_standby#action VrrpAForceSelfStandby#action}
  */
  readonly action?: string;
  /**
  * force all partitions in standby state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_force_self_standby#all_partitions VrrpAForceSelfStandby#all_partitions}
  */
  readonly allPartitions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_force_self_standby#id VrrpAForceSelfStandby#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * skip single device check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_force_self_standby#skip_check VrrpAForceSelfStandby#skip_check}
  */
  readonly skipCheck?: number;
  /**
  * Specify one VRRP-A vrid to force into standby state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_force_self_standby#vrid VrrpAForceSelfStandby#vrid}
  */
  readonly vrid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_force_self_standby thunder_vrrp_a_force_self_standby}
*/
export class VrrpAForceSelfStandby extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_force_self_standby";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrrpAForceSelfStandby resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrrpAForceSelfStandby to import
  * @param importFromId The id of the existing VrrpAForceSelfStandby that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_force_self_standby#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrrpAForceSelfStandby to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_force_self_standby", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_force_self_standby thunder_vrrp_a_force_self_standby} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrrpAForceSelfStandbyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VrrpAForceSelfStandbyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_force_self_standby',
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
    this._allPartitions = config.allPartitions;
    this._id = config.id;
    this._skipCheck = config.skipCheck;
    this._vrid = config.vrid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // all_partitions - computed: false, optional: true, required: false
  private _allPartitions?: number; 
  public get allPartitions() {
    return this.getNumberAttribute('all_partitions');
  }
  public set allPartitions(value: number) {
    this._allPartitions = value;
  }
  public resetAllPartitions() {
    this._allPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPartitionsInput() {
    return this._allPartitions;
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

  // skip_check - computed: false, optional: true, required: false
  private _skipCheck?: number; 
  public get skipCheck() {
    return this.getNumberAttribute('skip_check');
  }
  public set skipCheck(value: number) {
    this._skipCheck = value;
  }
  public resetSkipCheck() {
    this._skipCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCheckInput() {
    return this._skipCheck;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      all_partitions: cdktf.numberToTerraform(this._allPartitions),
      id: cdktf.stringToTerraform(this._id),
      skip_check: cdktf.numberToTerraform(this._skipCheck),
      vrid: cdktf.numberToTerraform(this._vrid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      all_partitions: {
        value: cdktf.numberToHclTerraform(this._allPartitions),
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
      skip_check: {
        value: cdktf.numberToHclTerraform(this._skipCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrid: {
        value: cdktf.numberToHclTerraform(this._vrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
