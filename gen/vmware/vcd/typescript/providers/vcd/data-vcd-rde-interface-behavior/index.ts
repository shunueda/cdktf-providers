// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_interface_behavior
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdRdeInterfaceBehaviorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_interface_behavior#id DataVcdRdeInterfaceBehavior#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Behavior to fetch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_interface_behavior#name DataVcdRdeInterfaceBehavior#name}
  */
  readonly name: string;
  /**
  * The ID of the RDE Interface that owns the Behavior to fetch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_interface_behavior#rde_interface_id DataVcdRdeInterfaceBehavior#rde_interface_id}
  */
  readonly rdeInterfaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_interface_behavior vcd_rde_interface_behavior}
*/
export class DataVcdRdeInterfaceBehavior extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_rde_interface_behavior";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdRdeInterfaceBehavior resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdRdeInterfaceBehavior to import
  * @param importFromId The id of the existing DataVcdRdeInterfaceBehavior that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_interface_behavior#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdRdeInterfaceBehavior to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_rde_interface_behavior", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_interface_behavior vcd_rde_interface_behavior} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdRdeInterfaceBehaviorConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdRdeInterfaceBehaviorConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_rde_interface_behavior',
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
    this._id = config.id;
    this._name = config.name;
    this._rdeInterfaceId = config.rdeInterfaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rde_interface_id - computed: false, optional: false, required: true
  private _rdeInterfaceId?: string; 
  public get rdeInterfaceId() {
    return this.getStringAttribute('rde_interface_id');
  }
  public set rdeInterfaceId(value: string) {
    this._rdeInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdeInterfaceIdInput() {
    return this._rdeInterfaceId;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rde_interface_id: cdktf.stringToTerraform(this._rdeInterfaceId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rde_interface_id: {
        value: cdktf.stringToHclTerraform(this._rdeInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
