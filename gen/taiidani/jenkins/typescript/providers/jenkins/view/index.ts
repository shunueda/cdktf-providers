// https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of projects assigned to the view. For example, the name of a folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/view#assigned_projects View#assigned_projects}
  */
  readonly assignedProjects?: string[];
  /**
  * The folder namespace to store the resource in. If not set will default to global Jenkins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/view#folder View#folder}
  */
  readonly folder?: string;
  /**
  * The name of the resource being created. This maps to the ID property within Jenkins, and cannot be changed once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/view#name View#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/view jenkins_view}
*/
export class View extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jenkins_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a View resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the View to import
  * @param importFromId The id of the existing View that should be imported. Refer to the {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the View to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jenkins_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/view jenkins_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ViewConfig
  */
  public constructor(scope: Construct, id: string, config: ViewConfig) {
    super(scope, id, {
      terraformResourceType: 'jenkins_view',
      terraformGeneratorMetadata: {
        providerName: 'jenkins',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignedProjects = config.assignedProjects;
    this._folder = config.folder;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_projects - computed: false, optional: true, required: false
  private _assignedProjects?: string[]; 
  public get assignedProjects() {
    return this.getListAttribute('assigned_projects');
  }
  public set assignedProjects(value: string[]) {
    this._assignedProjects = value;
  }
  public resetAssignedProjects() {
    this._assignedProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedProjectsInput() {
    return this._assignedProjects;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_projects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assignedProjects),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assigned_projects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assignedProjects),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
