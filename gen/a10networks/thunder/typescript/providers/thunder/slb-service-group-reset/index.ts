// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_reset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbServiceGroupResetAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Reset auto stateless state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_reset#auto_switch SlbServiceGroupResetA#auto_switch}
  */
  readonly autoSwitch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_reset#id SlbServiceGroupResetA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Service_group_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_reset#service_group_name SlbServiceGroupResetA#service_group_name}
  */
  readonly serviceGroupName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_reset thunder_slb_service_group_reset}
*/
export class SlbServiceGroupResetA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_service_group_reset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbServiceGroupResetA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbServiceGroupResetA to import
  * @param importFromId The id of the existing SlbServiceGroupResetA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_reset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbServiceGroupResetA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_service_group_reset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_service_group_reset thunder_slb_service_group_reset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbServiceGroupResetAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbServiceGroupResetAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_service_group_reset',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSwitch = config.autoSwitch;
    this._id = config.id;
    this._serviceGroupName = config.serviceGroupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_switch - computed: false, optional: true, required: false
  private _autoSwitch?: number; 
  public get autoSwitch() {
    return this.getNumberAttribute('auto_switch');
  }
  public set autoSwitch(value: number) {
    this._autoSwitch = value;
  }
  public resetAutoSwitch() {
    this._autoSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSwitchInput() {
    return this._autoSwitch;
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

  // service_group_name - computed: false, optional: false, required: true
  private _serviceGroupName?: string; 
  public get serviceGroupName() {
    return this.getStringAttribute('service_group_name');
  }
  public set serviceGroupName(value: string) {
    this._serviceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupNameInput() {
    return this._serviceGroupName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_switch: cdktf.numberToTerraform(this._autoSwitch),
      id: cdktf.stringToTerraform(this._id),
      service_group_name: cdktf.stringToTerraform(this._serviceGroupName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_switch: {
        value: cdktf.numberToHclTerraform(this._autoSwitch),
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
      service_group_name: {
        value: cdktf.stringToHclTerraform(this._serviceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
