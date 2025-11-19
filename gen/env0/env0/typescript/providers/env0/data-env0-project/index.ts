// https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEnv0ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * id of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/project#id DataEnv0Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * the name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/project#name DataEnv0Project#name}
  */
  readonly name?: string;
  /**
  * the id of the parent project. Can be used as a filter when there are multiple subprojects with the same name under different parent projects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/project#parent_project_id DataEnv0Project#parent_project_id}
  */
  readonly parentProjectId?: string;
  /**
  * the name of the parent project. Can be used as a filter when there are multiple subprojects with the same name under different parent projects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/project#parent_project_name DataEnv0Project#parent_project_name}
  */
  readonly parentProjectName?: string;
  /**
  * a path of ancestors projects divided by the prefix '|'. Can be used as a filter when there are multiple subprojects with the same name under different parent projects. For example: 'App|Dev|us-east-1' will search for a project with the hierarchy 'App -> Dev -> us-east-1' ('us-east-1' being the parent)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/project#parent_project_path DataEnv0Project#parent_project_path}
  */
  readonly parentProjectPath?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/project env0_project}
*/
export class DataEnv0Project extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEnv0Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEnv0Project to import
  * @param importFromId The id of the existing DataEnv0Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEnv0Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/project env0_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEnv0ProjectConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEnv0ProjectConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'env0_project',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.7',
        providerVersionConstraint: '1.29.7'
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
    this._parentProjectId = config.parentProjectId;
    this._parentProjectName = config.parentProjectName;
    this._parentProjectPath = config.parentProjectPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // hierarchy - computed: true, optional: false, required: false
  public get hierarchy() {
    return this.getStringAttribute('hierarchy');
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_project_id - computed: true, optional: true, required: false
  private _parentProjectId?: string; 
  public get parentProjectId() {
    return this.getStringAttribute('parent_project_id');
  }
  public set parentProjectId(value: string) {
    this._parentProjectId = value;
  }
  public resetParentProjectId() {
    this._parentProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentProjectIdInput() {
    return this._parentProjectId;
  }

  // parent_project_name - computed: false, optional: true, required: false
  private _parentProjectName?: string; 
  public get parentProjectName() {
    return this.getStringAttribute('parent_project_name');
  }
  public set parentProjectName(value: string) {
    this._parentProjectName = value;
  }
  public resetParentProjectName() {
    this._parentProjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentProjectNameInput() {
    return this._parentProjectName;
  }

  // parent_project_path - computed: false, optional: true, required: false
  private _parentProjectPath?: string; 
  public get parentProjectPath() {
    return this.getStringAttribute('parent_project_path');
  }
  public set parentProjectPath(value: string) {
    this._parentProjectPath = value;
  }
  public resetParentProjectPath() {
    this._parentProjectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentProjectPathInput() {
    return this._parentProjectPath;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_project_id: cdktf.stringToTerraform(this._parentProjectId),
      parent_project_name: cdktf.stringToTerraform(this._parentProjectName),
      parent_project_path: cdktf.stringToTerraform(this._parentProjectPath),
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
      parent_project_id: {
        value: cdktf.stringToHclTerraform(this._parentProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_project_name: {
        value: cdktf.stringToHclTerraform(this._parentProjectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_project_path: {
        value: cdktf.stringToHclTerraform(this._parentProjectPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
