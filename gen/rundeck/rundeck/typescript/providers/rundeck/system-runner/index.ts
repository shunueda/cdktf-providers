// https://registry.terraform.io/providers/rundeck/rundeck/0.5.5/docs/resources/system_runner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemRunnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Map of assigned projects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.5/docs/resources/system_runner#assigned_projects SystemRunner#assigned_projects}
  */
  readonly assignedProjects?: { [key: string]: string };
  /**
  * Description of the runner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.5/docs/resources/system_runner#description SystemRunner#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.5/docs/resources/system_runner#id SystemRunner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Installation type of the runner (linux, windows, kubernetes, docker)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.5/docs/resources/system_runner#installation_type SystemRunner#installation_type}
  */
  readonly installationType?: string;
  /**
  * Name of the runner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.5/docs/resources/system_runner#name SystemRunner#name}
  */
  readonly name: string;
  /**
  * Map of projects where runner acts as node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.5/docs/resources/system_runner#project_runner_as_node SystemRunner#project_runner_as_node}
  */
  readonly projectRunnerAsNode?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Replica type of the runner (manual or ephemeral)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.5/docs/resources/system_runner#replica_type SystemRunner#replica_type}
  */
  readonly replicaType?: string;
  /**
  * Comma separated tags for the runner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.5/docs/resources/system_runner#tag_names SystemRunner#tag_names}
  */
  readonly tagNames?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.5/docs/resources/system_runner rundeck_system_runner}
*/
export class SystemRunner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rundeck_system_runner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemRunner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemRunner to import
  * @param importFromId The id of the existing SystemRunner that should be imported. Refer to the {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.5/docs/resources/system_runner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemRunner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rundeck_system_runner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.5/docs/resources/system_runner rundeck_system_runner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemRunnerConfig
  */
  public constructor(scope: Construct, id: string, config: SystemRunnerConfig) {
    super(scope, id, {
      terraformResourceType: 'rundeck_system_runner',
      terraformGeneratorMetadata: {
        providerName: 'rundeck',
        providerVersion: '0.5.5',
        providerVersionConstraint: '0.5.5'
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
    this._description = config.description;
    this._id = config.id;
    this._installationType = config.installationType;
    this._name = config.name;
    this._projectRunnerAsNode = config.projectRunnerAsNode;
    this._replicaType = config.replicaType;
    this._tagNames = config.tagNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_projects - computed: false, optional: true, required: false
  private _assignedProjects?: { [key: string]: string }; 
  public get assignedProjects() {
    return this.getStringMapAttribute('assigned_projects');
  }
  public set assignedProjects(value: { [key: string]: string }) {
    this._assignedProjects = value;
  }
  public resetAssignedProjects() {
    this._assignedProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedProjectsInput() {
    return this._assignedProjects;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // download_token - computed: true, optional: false, required: false
  public get downloadToken() {
    return this.getStringAttribute('download_token');
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

  // installation_type - computed: false, optional: true, required: false
  private _installationType?: string; 
  public get installationType() {
    return this.getStringAttribute('installation_type');
  }
  public set installationType(value: string) {
    this._installationType = value;
  }
  public resetInstallationType() {
    this._installationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationTypeInput() {
    return this._installationType;
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

  // project_runner_as_node - computed: false, optional: true, required: false
  private _projectRunnerAsNode?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get projectRunnerAsNode() {
    return this.getBooleanMapAttribute('project_runner_as_node');
  }
  public set projectRunnerAsNode(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._projectRunnerAsNode = value;
  }
  public resetProjectRunnerAsNode() {
    this._projectRunnerAsNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectRunnerAsNodeInput() {
    return this._projectRunnerAsNode;
  }

  // replica_type - computed: false, optional: true, required: false
  private _replicaType?: string; 
  public get replicaType() {
    return this.getStringAttribute('replica_type');
  }
  public set replicaType(value: string) {
    this._replicaType = value;
  }
  public resetReplicaType() {
    this._replicaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaTypeInput() {
    return this._replicaType;
  }

  // runner_id - computed: true, optional: false, required: false
  public get runnerId() {
    return this.getStringAttribute('runner_id');
  }

  // tag_names - computed: false, optional: true, required: false
  private _tagNames?: string; 
  public get tagNames() {
    return this.getStringAttribute('tag_names');
  }
  public set tagNames(value: string) {
    this._tagNames = value;
  }
  public resetTagNames() {
    this._tagNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNamesInput() {
    return this._tagNames;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_projects: cdktf.hashMapper(cdktf.stringToTerraform)(this._assignedProjects),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      installation_type: cdktf.stringToTerraform(this._installationType),
      name: cdktf.stringToTerraform(this._name),
      project_runner_as_node: cdktf.hashMapper(cdktf.booleanToTerraform)(this._projectRunnerAsNode),
      replica_type: cdktf.stringToTerraform(this._replicaType),
      tag_names: cdktf.stringToTerraform(this._tagNames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assigned_projects: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._assignedProjects),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      installation_type: {
        value: cdktf.stringToHclTerraform(this._installationType),
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
      project_runner_as_node: {
        value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(this._projectRunnerAsNode),
        isBlock: false,
        type: "map",
        storageClassType: "booleanMap",
      },
      replica_type: {
        value: cdktf.stringToHclTerraform(this._replicaType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_names: {
        value: cdktf.stringToHclTerraform(this._tagNames),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
