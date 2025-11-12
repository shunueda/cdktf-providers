// https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * If change requests are required for this environment, the environment must be enabled for this to have effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project_environment#change_requests_enabled ProjectEnvironment#change_requests_enabled}
  */
  readonly changeRequestsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Environment identifier, equivalen	t to the environment name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project_environment#environment_name ProjectEnvironment#environment_name}
  */
  readonly environmentName: string;
  /**
  * Project identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project_environment#project_id ProjectEnvironment#project_id}
  */
  readonly projectId: string;
  /**
  * Number of approvals required for change requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project_environment#required_approvals ProjectEnvironment#required_approvals}
  */
  readonly requiredApprovals?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project_environment unleash_project_environment}
*/
export class ProjectEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unleash_project_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectEnvironment to import
  * @param importFromId The id of the existing ProjectEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unleash_project_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project_environment unleash_project_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'unleash_project_environment',
      terraformGeneratorMetadata: {
        providerName: 'unleash',
        providerVersion: '3.1.11',
        providerVersionConstraint: '3.1.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._changeRequestsEnabled = config.changeRequestsEnabled;
    this._environmentName = config.environmentName;
    this._projectId = config.projectId;
    this._requiredApprovals = config.requiredApprovals;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_requests_enabled - computed: true, optional: true, required: false
  private _changeRequestsEnabled?: boolean | cdktf.IResolvable; 
  public get changeRequestsEnabled() {
    return this.getBooleanAttribute('change_requests_enabled');
  }
  public set changeRequestsEnabled(value: boolean | cdktf.IResolvable) {
    this._changeRequestsEnabled = value;
  }
  public resetChangeRequestsEnabled() {
    this._changeRequestsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeRequestsEnabledInput() {
    return this._changeRequestsEnabled;
  }

  // environment_name - computed: false, optional: false, required: true
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
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

  // required_approvals - computed: true, optional: true, required: false
  private _requiredApprovals?: number; 
  public get requiredApprovals() {
    return this.getNumberAttribute('required_approvals');
  }
  public set requiredApprovals(value: number) {
    this._requiredApprovals = value;
  }
  public resetRequiredApprovals() {
    this._requiredApprovals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredApprovalsInput() {
    return this._requiredApprovals;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      change_requests_enabled: cdktf.booleanToTerraform(this._changeRequestsEnabled),
      environment_name: cdktf.stringToTerraform(this._environmentName),
      project_id: cdktf.stringToTerraform(this._projectId),
      required_approvals: cdktf.numberToTerraform(this._requiredApprovals),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      change_requests_enabled: {
        value: cdktf.booleanToHclTerraform(this._changeRequestsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
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
      required_approvals: {
        value: cdktf.numberToHclTerraform(this._requiredApprovals),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
