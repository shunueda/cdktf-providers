// https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the project. => lowercase letters, numbers, underscores, and dashes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * The looker API doesn't provide means to delete a projecthowever, we can rename the project from orig_name to deleteme-orig_name-X1Y2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project#rename_when_delete Project#rename_when_delete}
  */
  readonly renameWhenDelete?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project looker_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "looker_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "looker_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project looker_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'looker_project',
      terraformGeneratorMetadata: {
        providerName: 'looker',
        providerVersion: '0.4.0'
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
    this._renameWhenDelete = config.renameWhenDelete;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rename_when_delete - computed: false, optional: true, required: false
  private _renameWhenDelete?: boolean | cdktf.IResolvable; 
  public get renameWhenDelete() {
    return this.getBooleanAttribute('rename_when_delete');
  }
  public set renameWhenDelete(value: boolean | cdktf.IResolvable) {
    this._renameWhenDelete = value;
  }
  public resetRenameWhenDelete() {
    this._renameWhenDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameWhenDeleteInput() {
    return this._renameWhenDelete;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rename_when_delete: cdktf.booleanToTerraform(this._renameWhenDelete),
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
      rename_when_delete: {
        value: cdktf.booleanToHclTerraform(this._renameWhenDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
