// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_delay_cycle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementCmeDelayCycleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time to wait in seconds after each poll cycle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_delay_cycle#delay_cycle ManagementCmeDelayCycle#delay_cycle}
  */
  readonly delayCycle: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_delay_cycle#id ManagementCmeDelayCycle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_delay_cycle checkpoint_management_cme_delay_cycle}
*/
export class ManagementCmeDelayCycle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_cme_delay_cycle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementCmeDelayCycle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementCmeDelayCycle to import
  * @param importFromId The id of the existing ManagementCmeDelayCycle that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_delay_cycle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementCmeDelayCycle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_cme_delay_cycle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_cme_delay_cycle checkpoint_management_cme_delay_cycle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementCmeDelayCycleConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementCmeDelayCycleConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_cme_delay_cycle',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delayCycle = config.delayCycle;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delay_cycle - computed: false, optional: false, required: true
  private _delayCycle?: number; 
  public get delayCycle() {
    return this.getNumberAttribute('delay_cycle');
  }
  public set delayCycle(value: number) {
    this._delayCycle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delayCycleInput() {
    return this._delayCycle;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delay_cycle: cdktf.numberToTerraform(this._delayCycle),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delay_cycle: {
        value: cdktf.numberToHclTerraform(this._delayCycle),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
