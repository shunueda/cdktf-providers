// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workers_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaskrouterWorkspacesWorkersV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workers_v1#activity_sid TaskrouterWorkspacesWorkersV1#activity_sid}
  */
  readonly activitySid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workers_v1#attributes TaskrouterWorkspacesWorkersV1#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workers_v1#friendly_name TaskrouterWorkspacesWorkersV1#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workers_v1#id TaskrouterWorkspacesWorkersV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workers_v1#if_match TaskrouterWorkspacesWorkersV1#if_match}
  */
  readonly ifMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workers_v1#reject_pending_reservations TaskrouterWorkspacesWorkersV1#reject_pending_reservations}
  */
  readonly rejectPendingReservations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workers_v1#workspace_sid TaskrouterWorkspacesWorkersV1#workspace_sid}
  */
  readonly workspaceSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workers_v1 twilio_taskrouter_workspaces_workers_v1}
*/
export class TaskrouterWorkspacesWorkersV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_taskrouter_workspaces_workers_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TaskrouterWorkspacesWorkersV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TaskrouterWorkspacesWorkersV1 to import
  * @param importFromId The id of the existing TaskrouterWorkspacesWorkersV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workers_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TaskrouterWorkspacesWorkersV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_taskrouter_workspaces_workers_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_workers_v1 twilio_taskrouter_workspaces_workers_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaskrouterWorkspacesWorkersV1Config
  */
  public constructor(scope: Construct, id: string, config: TaskrouterWorkspacesWorkersV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_taskrouter_workspaces_workers_v1',
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
    this._activitySid = config.activitySid;
    this._attributes = config.attributes;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._ifMatch = config.ifMatch;
    this._rejectPendingReservations = config.rejectPendingReservations;
    this._workspaceSid = config.workspaceSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activity_sid - computed: true, optional: true, required: false
  private _activitySid?: string; 
  public get activitySid() {
    return this.getStringAttribute('activity_sid');
  }
  public set activitySid(value: string) {
    this._activitySid = value;
  }
  public resetActivitySid() {
    this._activitySid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activitySidInput() {
    return this._activitySid;
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

  // reject_pending_reservations - computed: true, optional: true, required: false
  private _rejectPendingReservations?: boolean | cdktf.IResolvable; 
  public get rejectPendingReservations() {
    return this.getBooleanAttribute('reject_pending_reservations');
  }
  public set rejectPendingReservations(value: boolean | cdktf.IResolvable) {
    this._rejectPendingReservations = value;
  }
  public resetRejectPendingReservations() {
    this._rejectPendingReservations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectPendingReservationsInput() {
    return this._rejectPendingReservations;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
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
      activity_sid: cdktf.stringToTerraform(this._activitySid),
      attributes: cdktf.stringToTerraform(this._attributes),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      if_match: cdktf.stringToTerraform(this._ifMatch),
      reject_pending_reservations: cdktf.booleanToTerraform(this._rejectPendingReservations),
      workspace_sid: cdktf.stringToTerraform(this._workspaceSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activity_sid: {
        value: cdktf.stringToHclTerraform(this._activitySid),
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
      if_match: {
        value: cdktf.stringToHclTerraform(this._ifMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reject_pending_reservations: {
        value: cdktf.booleanToHclTerraform(this._rejectPendingReservations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
