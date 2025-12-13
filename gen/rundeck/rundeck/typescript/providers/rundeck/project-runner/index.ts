// https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project_runner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectRunnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the runner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project_runner#description ProjectRunner#description}
  */
  readonly description: string;
  /**
  * Installation type of the runner (linux, windows, kubernetes, docker).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project_runner#installation_type ProjectRunner#installation_type}
  */
  readonly installationType?: string;
  /**
  * Name of the runner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project_runner#name ProjectRunner#name}
  */
  readonly name: string;
  /**
  * Name of the project where the runner will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project_runner#project_name ProjectRunner#project_name}
  */
  readonly projectName: string;
  /**
  * Enable remote node dispatch for the runner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project_runner#remote_node_dispatch ProjectRunner#remote_node_dispatch}
  */
  readonly remoteNodeDispatch?: boolean | cdktf.IResolvable;
  /**
  * Replica type of the runner (manual or ephemeral).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project_runner#replica_type ProjectRunner#replica_type}
  */
  readonly replicaType?: string;
  /**
  * Enable the runner to act as a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project_runner#runner_as_node_enabled ProjectRunner#runner_as_node_enabled}
  */
  readonly runnerAsNodeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Node filter string for the runner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project_runner#runner_node_filter ProjectRunner#runner_node_filter}
  */
  readonly runnerNodeFilter?: string;
  /**
  * Comma separated tags for the runner. Rundeck normalizes tags to lowercase and sorts them alphabetically. The provider handles this automatically to prevent plan drift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project_runner#tag_names ProjectRunner#tag_names}
  */
  readonly tagNames?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project_runner rundeck_project_runner}
*/
export class ProjectRunner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rundeck_project_runner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectRunner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectRunner to import
  * @param importFromId The id of the existing ProjectRunner that should be imported. Refer to the {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project_runner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectRunner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rundeck_project_runner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project_runner rundeck_project_runner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectRunnerConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectRunnerConfig) {
    super(scope, id, {
      terraformResourceType: 'rundeck_project_runner',
      terraformGeneratorMetadata: {
        providerName: 'rundeck',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._installationType = config.installationType;
    this._name = config.name;
    this._projectName = config.projectName;
    this._remoteNodeDispatch = config.remoteNodeDispatch;
    this._replicaType = config.replicaType;
    this._runnerAsNodeEnabled = config.runnerAsNodeEnabled;
    this._runnerNodeFilter = config.runnerNodeFilter;
    this._tagNames = config.tagNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // installation_type - computed: true, optional: true, required: false
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

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // remote_node_dispatch - computed: true, optional: true, required: false
  private _remoteNodeDispatch?: boolean | cdktf.IResolvable; 
  public get remoteNodeDispatch() {
    return this.getBooleanAttribute('remote_node_dispatch');
  }
  public set remoteNodeDispatch(value: boolean | cdktf.IResolvable) {
    this._remoteNodeDispatch = value;
  }
  public resetRemoteNodeDispatch() {
    this._remoteNodeDispatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNodeDispatchInput() {
    return this._remoteNodeDispatch;
  }

  // replica_type - computed: true, optional: true, required: false
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

  // runner_as_node_enabled - computed: true, optional: true, required: false
  private _runnerAsNodeEnabled?: boolean | cdktf.IResolvable; 
  public get runnerAsNodeEnabled() {
    return this.getBooleanAttribute('runner_as_node_enabled');
  }
  public set runnerAsNodeEnabled(value: boolean | cdktf.IResolvable) {
    this._runnerAsNodeEnabled = value;
  }
  public resetRunnerAsNodeEnabled() {
    this._runnerAsNodeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerAsNodeEnabledInput() {
    return this._runnerAsNodeEnabled;
  }

  // runner_id - computed: true, optional: false, required: false
  public get runnerId() {
    return this.getStringAttribute('runner_id');
  }

  // runner_node_filter - computed: false, optional: true, required: false
  private _runnerNodeFilter?: string; 
  public get runnerNodeFilter() {
    return this.getStringAttribute('runner_node_filter');
  }
  public set runnerNodeFilter(value: string) {
    this._runnerNodeFilter = value;
  }
  public resetRunnerNodeFilter() {
    this._runnerNodeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerNodeFilterInput() {
    return this._runnerNodeFilter;
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
      description: cdktf.stringToTerraform(this._description),
      installation_type: cdktf.stringToTerraform(this._installationType),
      name: cdktf.stringToTerraform(this._name),
      project_name: cdktf.stringToTerraform(this._projectName),
      remote_node_dispatch: cdktf.booleanToTerraform(this._remoteNodeDispatch),
      replica_type: cdktf.stringToTerraform(this._replicaType),
      runner_as_node_enabled: cdktf.booleanToTerraform(this._runnerAsNodeEnabled),
      runner_node_filter: cdktf.stringToTerraform(this._runnerNodeFilter),
      tag_names: cdktf.stringToTerraform(this._tagNames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_node_dispatch: {
        value: cdktf.booleanToHclTerraform(this._remoteNodeDispatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replica_type: {
        value: cdktf.stringToHclTerraform(this._replicaType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runner_as_node_enabled: {
        value: cdktf.booleanToHclTerraform(this._runnerAsNodeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      runner_node_filter: {
        value: cdktf.stringToHclTerraform(this._runnerNodeFilter),
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
