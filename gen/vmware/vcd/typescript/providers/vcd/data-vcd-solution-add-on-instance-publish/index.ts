// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/solution_add_on_instance_publish
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdSolutionAddOnInstancePublishConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Solution Add-On Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/solution_add_on_instance_publish#add_on_instance_name DataVcdSolutionAddOnInstancePublish#add_on_instance_name}
  */
  readonly addOnInstanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/solution_add_on_instance_publish#id DataVcdSolutionAddOnInstancePublish#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/solution_add_on_instance_publish vcd_solution_add_on_instance_publish}
*/
export class DataVcdSolutionAddOnInstancePublish extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_solution_add_on_instance_publish";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdSolutionAddOnInstancePublish resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdSolutionAddOnInstancePublish to import
  * @param importFromId The id of the existing DataVcdSolutionAddOnInstancePublish that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/solution_add_on_instance_publish#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdSolutionAddOnInstancePublish to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_solution_add_on_instance_publish", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/solution_add_on_instance_publish vcd_solution_add_on_instance_publish} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdSolutionAddOnInstancePublishConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdSolutionAddOnInstancePublishConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_solution_add_on_instance_publish',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addOnInstanceName = config.addOnInstanceName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_on_instance_id - computed: true, optional: false, required: false
  public get addOnInstanceId() {
    return this.getStringAttribute('add_on_instance_id');
  }

  // add_on_instance_name - computed: false, optional: false, required: true
  private _addOnInstanceName?: string; 
  public get addOnInstanceName() {
    return this.getStringAttribute('add_on_instance_name');
  }
  public set addOnInstanceName(value: string) {
    this._addOnInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnInstanceNameInput() {
    return this._addOnInstanceName;
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

  // org_ids - computed: true, optional: false, required: false
  public get orgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('org_ids'));
  }

  // publish_to_all_tenants - computed: true, optional: false, required: false
  public get publishToAllTenants() {
    return this.getBooleanAttribute('publish_to_all_tenants');
  }

  // rde_state - computed: true, optional: false, required: false
  public get rdeState() {
    return this.getStringAttribute('rde_state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_on_instance_name: cdktf.stringToTerraform(this._addOnInstanceName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_on_instance_name: {
        value: cdktf.stringToHclTerraform(this._addOnInstanceName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
