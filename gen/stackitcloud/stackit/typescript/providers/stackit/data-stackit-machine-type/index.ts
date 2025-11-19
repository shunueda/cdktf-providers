// https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/machine_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitMachineTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Expr-lang filter for filtering machine types.
  * 
  * Examples:
  * - vcpus == 2
  * - ram >= 2048
  * - extraSpecs.cpu == "intel-icelake-generic"
  * - extraSpecs.cpu == "intel-icelake-generic" && vcpus == 2
  * 
  * Syntax reference: https://expr-lang.org/docs/language-definition
  * 
  * You can also list available machine-types using the [STACKIT CLI](https://github.com/stackitcloud/stackit-cli):
  * 
  * ```bash
  * stackit server machine-type list
  * ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/machine_type#filter DataStackitMachineType#filter}
  */
  readonly filter: string;
  /**
  * STACKIT Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/machine_type#project_id DataStackitMachineType#project_id}
  */
  readonly projectId: string;
  /**
  * Sort machine types by name ascending (`true`) or descending (`false`). Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/machine_type#sort_ascending DataStackitMachineType#sort_ascending}
  */
  readonly sortAscending?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/machine_type stackit_machine_type}
*/
export class DataStackitMachineType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_machine_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitMachineType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitMachineType to import
  * @param importFromId The id of the existing DataStackitMachineType that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/machine_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitMachineType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_machine_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/machine_type stackit_machine_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitMachineTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitMachineTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_machine_type',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._projectId = config.projectId;
    this._sortAscending = config.sortAscending;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk - computed: true, optional: false, required: false
  public get disk() {
    return this.getNumberAttribute('disk');
  }

  // extra_specs - computed: true, optional: false, required: false
  private _extraSpecs = new cdktf.StringMap(this, "extra_specs");
  public get extraSpecs() {
    return this._extraSpecs;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getNumberAttribute('ram');
  }

  // sort_ascending - computed: false, optional: true, required: false
  private _sortAscending?: boolean | cdktf.IResolvable; 
  public get sortAscending() {
    return this.getBooleanAttribute('sort_ascending');
  }
  public set sortAscending(value: boolean | cdktf.IResolvable) {
    this._sortAscending = value;
  }
  public resetSortAscending() {
    this._sortAscending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortAscendingInput() {
    return this._sortAscending;
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      project_id: cdktf.stringToTerraform(this._projectId),
      sort_ascending: cdktf.booleanToTerraform(this._sortAscending),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_ascending: {
        value: cdktf.booleanToHclTerraform(this._sortAscending),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
