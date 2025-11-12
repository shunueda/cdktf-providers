// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workflows_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaskrouterWorkspacesWorkflowsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workflows_v1#assignment_callback_url TaskrouterWorkspacesWorkflowsV1#assignment_callback_url}
  */
  readonly assignmentCallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workflows_v1#configuration TaskrouterWorkspacesWorkflowsV1#configuration}
  */
  readonly configuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workflows_v1#fallback_assignment_callback_url TaskrouterWorkspacesWorkflowsV1#fallback_assignment_callback_url}
  */
  readonly fallbackAssignmentCallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workflows_v1#friendly_name TaskrouterWorkspacesWorkflowsV1#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workflows_v1#id TaskrouterWorkspacesWorkflowsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workflows_v1#re_evaluate_tasks TaskrouterWorkspacesWorkflowsV1#re_evaluate_tasks}
  */
  readonly reEvaluateTasks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workflows_v1#task_reservation_timeout TaskrouterWorkspacesWorkflowsV1#task_reservation_timeout}
  */
  readonly taskReservationTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workflows_v1#workspace_sid TaskrouterWorkspacesWorkflowsV1#workspace_sid}
  */
  readonly workspaceSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workflows_v1 twilio_taskrouter_workspaces_workflows_v1}
*/
export class TaskrouterWorkspacesWorkflowsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_taskrouter_workspaces_workflows_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TaskrouterWorkspacesWorkflowsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TaskrouterWorkspacesWorkflowsV1 to import
  * @param importFromId The id of the existing TaskrouterWorkspacesWorkflowsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workflows_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TaskrouterWorkspacesWorkflowsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_taskrouter_workspaces_workflows_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workflows_v1 twilio_taskrouter_workspaces_workflows_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaskrouterWorkspacesWorkflowsV1Config
  */
  public constructor(scope: Construct, id: string, config: TaskrouterWorkspacesWorkflowsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_taskrouter_workspaces_workflows_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46',
        providerVersionConstraint: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignmentCallbackUrl = config.assignmentCallbackUrl;
    this._configuration = config.configuration;
    this._fallbackAssignmentCallbackUrl = config.fallbackAssignmentCallbackUrl;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._reEvaluateTasks = config.reEvaluateTasks;
    this._taskReservationTimeout = config.taskReservationTimeout;
    this._workspaceSid = config.workspaceSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignment_callback_url - computed: true, optional: true, required: false
  private _assignmentCallbackUrl?: string; 
  public get assignmentCallbackUrl() {
    return this.getStringAttribute('assignment_callback_url');
  }
  public set assignmentCallbackUrl(value: string) {
    this._assignmentCallbackUrl = value;
  }
  public resetAssignmentCallbackUrl() {
    this._assignmentCallbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentCallbackUrlInput() {
    return this._assignmentCallbackUrl;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // fallback_assignment_callback_url - computed: true, optional: true, required: false
  private _fallbackAssignmentCallbackUrl?: string; 
  public get fallbackAssignmentCallbackUrl() {
    return this.getStringAttribute('fallback_assignment_callback_url');
  }
  public set fallbackAssignmentCallbackUrl(value: string) {
    this._fallbackAssignmentCallbackUrl = value;
  }
  public resetFallbackAssignmentCallbackUrl() {
    this._fallbackAssignmentCallbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackAssignmentCallbackUrlInput() {
    return this._fallbackAssignmentCallbackUrl;
  }

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // re_evaluate_tasks - computed: true, optional: true, required: false
  private _reEvaluateTasks?: string; 
  public get reEvaluateTasks() {
    return this.getStringAttribute('re_evaluate_tasks');
  }
  public set reEvaluateTasks(value: string) {
    this._reEvaluateTasks = value;
  }
  public resetReEvaluateTasks() {
    this._reEvaluateTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reEvaluateTasksInput() {
    return this._reEvaluateTasks;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // task_reservation_timeout - computed: true, optional: true, required: false
  private _taskReservationTimeout?: number; 
  public get taskReservationTimeout() {
    return this.getNumberAttribute('task_reservation_timeout');
  }
  public set taskReservationTimeout(value: number) {
    this._taskReservationTimeout = value;
  }
  public resetTaskReservationTimeout() {
    this._taskReservationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskReservationTimeoutInput() {
    return this._taskReservationTimeout;
  }

  // workspace_sid - computed: false, optional: false, required: true
  private _workspaceSid?: string; 
  public get workspaceSid() {
    return this.getStringAttribute('workspace_sid');
  }
  public set workspaceSid(value: string) {
    this._workspaceSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceSidInput() {
    return this._workspaceSid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assignment_callback_url: cdktf.stringToTerraform(this._assignmentCallbackUrl),
      configuration: cdktf.stringToTerraform(this._configuration),
      fallback_assignment_callback_url: cdktf.stringToTerraform(this._fallbackAssignmentCallbackUrl),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      re_evaluate_tasks: cdktf.stringToTerraform(this._reEvaluateTasks),
      task_reservation_timeout: cdktf.numberToTerraform(this._taskReservationTimeout),
      workspace_sid: cdktf.stringToTerraform(this._workspaceSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignment_callback_url: {
        value: cdktf.stringToHclTerraform(this._assignmentCallbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktf.stringToHclTerraform(this._configuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_assignment_callback_url: {
        value: cdktf.stringToHclTerraform(this._fallbackAssignmentCallbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      re_evaluate_tasks: {
        value: cdktf.stringToHclTerraform(this._reEvaluateTasks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_reservation_timeout: {
        value: cdktf.numberToHclTerraform(this._taskReservationTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workspace_sid: {
        value: cdktf.stringToHclTerraform(this._workspaceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
