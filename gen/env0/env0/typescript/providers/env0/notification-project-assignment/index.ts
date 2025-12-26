// https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/notification_project_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationProjectAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * a list of notification events (allowed values: environmentDeployStarted, environmentDestroyStarted, deploySucceeded, destroySucceeded, deployFailed, destroyFailed, deploymentWaitingForUser, deploymentCancelled, environmentDeployResumed, environmentDestroyResumed, environmentMarkedForAutoDestroy, driftDetected, driftUndetected, driftFailed, budgetExceeded)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/notification_project_assignment#event_names NotificationProjectAssignment#event_names}
  */
  readonly eventNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/notification_project_assignment#id NotificationProjectAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * id of the notification endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/notification_project_assignment#notification_endpoint_id NotificationProjectAssignment#notification_endpoint_id}
  */
  readonly notificationEndpointId: string;
  /**
  * id of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/notification_project_assignment#project_id NotificationProjectAssignment#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/notification_project_assignment env0_notification_project_assignment}
*/
export class NotificationProjectAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_notification_project_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationProjectAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationProjectAssignment to import
  * @param importFromId The id of the existing NotificationProjectAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/notification_project_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationProjectAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_notification_project_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/notification_project_assignment env0_notification_project_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationProjectAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationProjectAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_notification_project_assignment',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.8',
        providerVersionConstraint: '1.29.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eventNames = config.eventNames;
    this._id = config.id;
    this._notificationEndpointId = config.notificationEndpointId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_names - computed: false, optional: false, required: true
  private _eventNames?: string[]; 
  public get eventNames() {
    return this.getListAttribute('event_names');
  }
  public set eventNames(value: string[]) {
    this._eventNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNamesInput() {
    return this._eventNames;
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

  // notification_endpoint_id - computed: false, optional: false, required: true
  private _notificationEndpointId?: string; 
  public get notificationEndpointId() {
    return this.getStringAttribute('notification_endpoint_id');
  }
  public set notificationEndpointId(value: string) {
    this._notificationEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEndpointIdInput() {
    return this._notificationEndpointId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventNames),
      id: cdktf.stringToTerraform(this._id),
      notification_endpoint_id: cdktf.stringToTerraform(this._notificationEndpointId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      event_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._notificationEndpointId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
