// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_queues_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaskrouterWorkspacesTaskQueuesV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_queues_v1#assignment_activity_sid TaskrouterWorkspacesTaskQueuesV1#assignment_activity_sid}
  */
  readonly assignmentActivitySid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_queues_v1#friendly_name TaskrouterWorkspacesTaskQueuesV1#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_queues_v1#id TaskrouterWorkspacesTaskQueuesV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_queues_v1#max_reserved_workers TaskrouterWorkspacesTaskQueuesV1#max_reserved_workers}
  */
  readonly maxReservedWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_queues_v1#reservation_activity_sid TaskrouterWorkspacesTaskQueuesV1#reservation_activity_sid}
  */
  readonly reservationActivitySid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_queues_v1#target_workers TaskrouterWorkspacesTaskQueuesV1#target_workers}
  */
  readonly targetWorkers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_queues_v1#task_order TaskrouterWorkspacesTaskQueuesV1#task_order}
  */
  readonly taskOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_queues_v1#workspace_sid TaskrouterWorkspacesTaskQueuesV1#workspace_sid}
  */
  readonly workspaceSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_queues_v1 twilio_taskrouter_workspaces_task_queues_v1}
*/
export class TaskrouterWorkspacesTaskQueuesV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_taskrouter_workspaces_task_queues_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TaskrouterWorkspacesTaskQueuesV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TaskrouterWorkspacesTaskQueuesV1 to import
  * @param importFromId The id of the existing TaskrouterWorkspacesTaskQueuesV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_queues_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TaskrouterWorkspacesTaskQueuesV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_taskrouter_workspaces_task_queues_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_queues_v1 twilio_taskrouter_workspaces_task_queues_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaskrouterWorkspacesTaskQueuesV1Config
  */
  public constructor(scope: Construct, id: string, config: TaskrouterWorkspacesTaskQueuesV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_taskrouter_workspaces_task_queues_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignmentActivitySid = config.assignmentActivitySid;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._maxReservedWorkers = config.maxReservedWorkers;
    this._reservationActivitySid = config.reservationActivitySid;
    this._targetWorkers = config.targetWorkers;
    this._taskOrder = config.taskOrder;
    this._workspaceSid = config.workspaceSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignment_activity_sid - computed: true, optional: true, required: false
  private _assignmentActivitySid?: string; 
  public get assignmentActivitySid() {
    return this.getStringAttribute('assignment_activity_sid');
  }
  public set assignmentActivitySid(value: string) {
    this._assignmentActivitySid = value;
  }
  public resetAssignmentActivitySid() {
    this._assignmentActivitySid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentActivitySidInput() {
    return this._assignmentActivitySid;
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

  // max_reserved_workers - computed: true, optional: true, required: false
  private _maxReservedWorkers?: number; 
  public get maxReservedWorkers() {
    return this.getNumberAttribute('max_reserved_workers');
  }
  public set maxReservedWorkers(value: number) {
    this._maxReservedWorkers = value;
  }
  public resetMaxReservedWorkers() {
    this._maxReservedWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReservedWorkersInput() {
    return this._maxReservedWorkers;
  }

  // reservation_activity_sid - computed: true, optional: true, required: false
  private _reservationActivitySid?: string; 
  public get reservationActivitySid() {
    return this.getStringAttribute('reservation_activity_sid');
  }
  public set reservationActivitySid(value: string) {
    this._reservationActivitySid = value;
  }
  public resetReservationActivitySid() {
    this._reservationActivitySid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationActivitySidInput() {
    return this._reservationActivitySid;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // target_workers - computed: true, optional: true, required: false
  private _targetWorkers?: string; 
  public get targetWorkers() {
    return this.getStringAttribute('target_workers');
  }
  public set targetWorkers(value: string) {
    this._targetWorkers = value;
  }
  public resetTargetWorkers() {
    this._targetWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetWorkersInput() {
    return this._targetWorkers;
  }

  // task_order - computed: true, optional: true, required: false
  private _taskOrder?: string; 
  public get taskOrder() {
    return this.getStringAttribute('task_order');
  }
  public set taskOrder(value: string) {
    this._taskOrder = value;
  }
  public resetTaskOrder() {
    this._taskOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskOrderInput() {
    return this._taskOrder;
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
      assignment_activity_sid: cdktf.stringToTerraform(this._assignmentActivitySid),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      max_reserved_workers: cdktf.numberToTerraform(this._maxReservedWorkers),
      reservation_activity_sid: cdktf.stringToTerraform(this._reservationActivitySid),
      target_workers: cdktf.stringToTerraform(this._targetWorkers),
      task_order: cdktf.stringToTerraform(this._taskOrder),
      workspace_sid: cdktf.stringToTerraform(this._workspaceSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignment_activity_sid: {
        value: cdktf.stringToHclTerraform(this._assignmentActivitySid),
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
      max_reserved_workers: {
        value: cdktf.numberToHclTerraform(this._maxReservedWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reservation_activity_sid: {
        value: cdktf.stringToHclTerraform(this._reservationActivitySid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_workers: {
        value: cdktf.stringToHclTerraform(this._targetWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_order: {
        value: cdktf.stringToHclTerraform(this._taskOrder),
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
