// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_type_behavior
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdRdeTypeBehaviorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of either a RDE Interface Behavior or RDE Type Behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_type_behavior#behavior_id DataVcdRdeTypeBehavior#behavior_id}
  */
  readonly behaviorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_type_behavior#id DataVcdRdeTypeBehavior#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the RDE Type that owns the Behavior to fetch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_type_behavior#rde_type_id DataVcdRdeTypeBehavior#rde_type_id}
  */
  readonly rdeTypeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_type_behavior vcd_rde_type_behavior}
*/
export class DataVcdRdeTypeBehavior extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_rde_type_behavior";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdRdeTypeBehavior resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdRdeTypeBehavior to import
  * @param importFromId The id of the existing DataVcdRdeTypeBehavior that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_type_behavior#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdRdeTypeBehavior to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_rde_type_behavior", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_type_behavior vcd_rde_type_behavior} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdRdeTypeBehaviorConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdRdeTypeBehaviorConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_rde_type_behavior',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._behaviorId = config.behaviorId;
    this._id = config.id;
    this._rdeTypeId = config.rdeTypeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // behavior_id - computed: false, optional: false, required: true
  private _behaviorId?: string; 
  public get behaviorId() {
    return this.getStringAttribute('behavior_id');
  }
  public set behaviorId(value: string) {
    this._behaviorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorIdInput() {
    return this._behaviorId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // execution - computed: true, optional: false, required: false
  private _execution = new cdktf.StringMap(this, "execution");
  public get execution() {
    return this._execution;
  }

  // execution_json - computed: true, optional: false, required: false
  public get executionJson() {
    return this.getStringAttribute('execution_json');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rde_type_id - computed: false, optional: false, required: true
  private _rdeTypeId?: string; 
  public get rdeTypeId() {
    return this.getStringAttribute('rde_type_id');
  }
  public set rdeTypeId(value: string) {
    this._rdeTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdeTypeIdInput() {
    return this._rdeTypeId;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      behavior_id: cdktf.stringToTerraform(this._behaviorId),
      id: cdktf.stringToTerraform(this._id),
      rde_type_id: cdktf.stringToTerraform(this._rdeTypeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      behavior_id: {
        value: cdktf.stringToHclTerraform(this._behaviorId),
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
      rde_type_id: {
        value: cdktf.stringToHclTerraform(this._rdeTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
