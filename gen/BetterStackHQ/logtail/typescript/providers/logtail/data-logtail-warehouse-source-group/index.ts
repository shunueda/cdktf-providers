// https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/data-sources/warehouse_source_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogtailWarehouseSourceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the warehouse source group. Can contain letters, numbers, spaces, and special characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/data-sources/warehouse_source_group#name DataLogtailWarehouseSourceGroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/data-sources/warehouse_source_group logtail_warehouse_source_group}
*/
export class DataLogtailWarehouseSourceGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logtail_warehouse_source_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogtailWarehouseSourceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogtailWarehouseSourceGroup to import
  * @param importFromId The id of the existing DataLogtailWarehouseSourceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/data-sources/warehouse_source_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogtailWarehouseSourceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logtail_warehouse_source_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/data-sources/warehouse_source_group logtail_warehouse_source_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogtailWarehouseSourceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataLogtailWarehouseSourceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'logtail_warehouse_source_group',
      terraformGeneratorMetadata: {
        providerName: 'logtail',
        providerVersion: '0.7.1',
        providerVersionConstraint: '0.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // sort_index - computed: true, optional: false, required: false
  public get sortIndex() {
    return this.getNumberAttribute('sort_index');
  }

  // team_name - computed: true, optional: false, required: false
  public get teamName() {
    return this.getStringAttribute('team_name');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
