// https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRocksetWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Workspace name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/workspace#name DataRocksetWorkspace#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/workspace rockset_workspace}
*/
export class DataRocksetWorkspace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rockset_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRocksetWorkspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRocksetWorkspace to import
  * @param importFromId The id of the existing DataRocksetWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRocksetWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rockset_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/workspace rockset_workspace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRocksetWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataRocksetWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'rockset_workspace',
      terraformGeneratorMetadata: {
        providerName: 'rockset',
        providerVersion: '0.9.8'
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

  // collection_count - computed: true, optional: false, required: false
  public get collectionCount() {
    return this.getNumberAttribute('collection_count');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
