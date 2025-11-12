// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaskrouterWorkspacesTasksV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1#assignment_status TaskrouterWorkspacesTasksV1#assignment_status}
  */
  readonly assignmentStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1#attributes TaskrouterWorkspacesTasksV1#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1#id TaskrouterWorkspacesTasksV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1#if_match TaskrouterWorkspacesTasksV1#if_match}
  */
  readonly ifMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1#ignore_capacity TaskrouterWorkspacesTasksV1#ignore_capacity}
  */
  readonly ignoreCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1#priority TaskrouterWorkspacesTasksV1#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1#reason TaskrouterWorkspacesTasksV1#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1#routing_target TaskrouterWorkspacesTasksV1#routing_target}
  */
  readonly routingTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1#task_channel TaskrouterWorkspacesTasksV1#task_channel}
  */
  readonly taskChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1#task_queue_sid TaskrouterWorkspacesTasksV1#task_queue_sid}
  */
  readonly taskQueueSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1#timeout TaskrouterWorkspacesTasksV1#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1#virtual_start_time TaskrouterWorkspacesTasksV1#virtual_start_time}
  */
  readonly virtualStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1#workflow_sid TaskrouterWorkspacesTasksV1#workflow_sid}
  */
  readonly workflowSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1#workspace_sid TaskrouterWorkspacesTasksV1#workspace_sid}
  */
  readonly workspaceSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1 twilio_taskrouter_workspaces_tasks_v1}
*/
export class TaskrouterWorkspacesTasksV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_taskrouter_workspaces_tasks_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TaskrouterWorkspacesTasksV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TaskrouterWorkspacesTasksV1 to import
  * @param importFromId The id of the existing TaskrouterWorkspacesTasksV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TaskrouterWorkspacesTasksV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_taskrouter_workspaces_tasks_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_tasks_v1 twilio_taskrouter_workspaces_tasks_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaskrouterWorkspacesTasksV1Config
  */
  public constructor(scope: Construct, id: string, config: TaskrouterWorkspacesTasksV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_taskrouter_workspaces_tasks_v1',
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
    this._assignmentStatus = config.assignmentStatus;
    this._attributes = config.attributes;
    this._id = config.id;
    this._ifMatch = config.ifMatch;
    this._ignoreCapacity = config.ignoreCapacity;
    this._priority = config.priority;
    this._reason = config.reason;
    this._routingTarget = config.routingTarget;
    this._taskChannel = config.taskChannel;
    this._taskQueueSid = config.taskQueueSid;
    this._timeout = config.timeout;
    this._virtualStartTime = config.virtualStartTime;
    this._workflowSid = config.workflowSid;
    this._workspaceSid = config.workspaceSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignment_status - computed: true, optional: true, required: false
  private _assignmentStatus?: string; 
  public get assignmentStatus() {
    return this.getStringAttribute('assignment_status');
  }
  public set assignmentStatus(value: string) {
    this._assignmentStatus = value;
  }
  public resetAssignmentStatus() {
    this._assignmentStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentStatusInput() {
    return this._assignmentStatus;
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
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

  // if_match - computed: true, optional: true, required: false
  private _ifMatch?: string; 
  public get ifMatch() {
    return this.getStringAttribute('if_match');
  }
  public set ifMatch(value: string) {
    this._ifMatch = value;
  }
  public resetIfMatch() {
    this._ifMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifMatchInput() {
    return this._ifMatch;
  }

  // ignore_capacity - computed: true, optional: true, required: false
  private _ignoreCapacity?: string; 
  public get ignoreCapacity() {
    return this.getStringAttribute('ignore_capacity');
  }
  public set ignoreCapacity(value: string) {
    this._ignoreCapacity = value;
  }
  public resetIgnoreCapacity() {
    this._ignoreCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCapacityInput() {
    return this._ignoreCapacity;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // routing_target - computed: true, optional: true, required: false
  private _routingTarget?: string; 
  public get routingTarget() {
    return this.getStringAttribute('routing_target');
  }
  public set routingTarget(value: string) {
    this._routingTarget = value;
  }
  public resetRoutingTarget() {
    this._routingTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTargetInput() {
    return this._routingTarget;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // task_channel - computed: true, optional: true, required: false
  private _taskChannel?: string; 
  public get taskChannel() {
    return this.getStringAttribute('task_channel');
  }
  public set taskChannel(value: string) {
    this._taskChannel = value;
  }
  public resetTaskChannel() {
    this._taskChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskChannelInput() {
    return this._taskChannel;
  }

  // task_queue_sid - computed: true, optional: true, required: false
  private _taskQueueSid?: string; 
  public get taskQueueSid() {
    return this.getStringAttribute('task_queue_sid');
  }
  public set taskQueueSid(value: string) {
    this._taskQueueSid = value;
  }
  public resetTaskQueueSid() {
    this._taskQueueSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskQueueSidInput() {
    return this._taskQueueSid;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // virtual_start_time - computed: true, optional: true, required: false
  private _virtualStartTime?: string; 
  public get virtualStartTime() {
    return this.getStringAttribute('virtual_start_time');
  }
  public set virtualStartTime(value: string) {
    this._virtualStartTime = value;
  }
  public resetVirtualStartTime() {
    this._virtualStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualStartTimeInput() {
    return this._virtualStartTime;
  }

  // workflow_sid - computed: true, optional: true, required: false
  private _workflowSid?: string; 
  public get workflowSid() {
    return this.getStringAttribute('workflow_sid');
  }
  public set workflowSid(value: string) {
    this._workflowSid = value;
  }
  public resetWorkflowSid() {
    this._workflowSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowSidInput() {
    return this._workflowSid;
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
      assignment_status: cdktf.stringToTerraform(this._assignmentStatus),
      attributes: cdktf.stringToTerraform(this._attributes),
      id: cdktf.stringToTerraform(this._id),
      if_match: cdktf.stringToTerraform(this._ifMatch),
      ignore_capacity: cdktf.stringToTerraform(this._ignoreCapacity),
      priority: cdktf.numberToTerraform(this._priority),
      reason: cdktf.stringToTerraform(this._reason),
      routing_target: cdktf.stringToTerraform(this._routingTarget),
      task_channel: cdktf.stringToTerraform(this._taskChannel),
      task_queue_sid: cdktf.stringToTerraform(this._taskQueueSid),
      timeout: cdktf.numberToTerraform(this._timeout),
      virtual_start_time: cdktf.stringToTerraform(this._virtualStartTime),
      workflow_sid: cdktf.stringToTerraform(this._workflowSid),
      workspace_sid: cdktf.stringToTerraform(this._workspaceSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignment_status: {
        value: cdktf.stringToHclTerraform(this._assignmentStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
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
      if_match: {
        value: cdktf.stringToHclTerraform(this._ifMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_capacity: {
        value: cdktf.stringToHclTerraform(this._ignoreCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_target: {
        value: cdktf.stringToHclTerraform(this._routingTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_channel: {
        value: cdktf.stringToHclTerraform(this._taskChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_queue_sid: {
        value: cdktf.stringToHclTerraform(this._taskQueueSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_start_time: {
        value: cdktf.stringToHclTerraform(this._virtualStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow_sid: {
        value: cdktf.stringToHclTerraform(this._workflowSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
