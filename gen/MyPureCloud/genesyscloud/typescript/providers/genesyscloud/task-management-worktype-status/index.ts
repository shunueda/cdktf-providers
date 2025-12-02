// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/task_management_worktype_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaskManagementWorktypeStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Category of the Status. Changing the category will cause the resource to be dropped and recreated with a new id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/task_management_worktype_status#category TaskManagementWorktypeStatus#category}
  */
  readonly category: string;
  /**
  * This status is the default status for Workitems created from this Worktype. Only one status can be set as the default status at a time. Once set there must always be a default status. The default can not be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/task_management_worktype_status#default TaskManagementWorktypeStatus#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * *DEPRECATED: Deprecated. Use default_destination_status_id in genesyscloud_task_management_worktype_status_transition instead* Default destination status to which this Status will transition to if auto status transition enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/task_management_worktype_status#default_destination_status_id TaskManagementWorktypeStatus#default_destination_status_id}
  */
  readonly defaultDestinationStatusId?: string;
  /**
  * The description of the Status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/task_management_worktype_status#description TaskManagementWorktypeStatus#description}
  */
  readonly description?: string;
  /**
  * *DEPRECATED: Deprecated. Use destination_status_ids in genesyscloud_task_management_worktype_status_transition instead* A list of destination Statuses where a Workitem with this Status can transition to. If the list is empty Workitems with this Status can transition to all other Statuses defined on the Worktype. A Status can have a maximum of 24 destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/task_management_worktype_status#destination_status_ids TaskManagementWorktypeStatus#destination_status_ids}
  */
  readonly destinationStatusIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/task_management_worktype_status#id TaskManagementWorktypeStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/task_management_worktype_status#name TaskManagementWorktypeStatus#name}
  */
  readonly name: string;
  /**
  * *DEPRECATED: Deprecated. Use status_transition_delay_seconds in genesyscloud_task_management_worktype_status_transition instead* Delay in seconds for auto status transition. Required if default_destination_status_id is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/task_management_worktype_status#status_transition_delay_seconds TaskManagementWorktypeStatus#status_transition_delay_seconds}
  */
  readonly statusTransitionDelaySeconds?: number;
  /**
  * *DEPRECATED: Deprecated. Use status_transition_time in genesyscloud_task_management_worktype_status_transition instead* Time is represented as an ISO-8601 string without a timezone. For example: HH:mm:ss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/task_management_worktype_status#status_transition_time TaskManagementWorktypeStatus#status_transition_time}
  */
  readonly statusTransitionTime?: string;
  /**
  * The id of the worktype this status belongs to. Changing this attribute will cause the status to be dropped and recreated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/task_management_worktype_status#worktype_id TaskManagementWorktypeStatus#worktype_id}
  */
  readonly worktypeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/task_management_worktype_status genesyscloud_task_management_worktype_status}
*/
export class TaskManagementWorktypeStatus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_task_management_worktype_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TaskManagementWorktypeStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TaskManagementWorktypeStatus to import
  * @param importFromId The id of the existing TaskManagementWorktypeStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/task_management_worktype_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TaskManagementWorktypeStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_task_management_worktype_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/task_management_worktype_status genesyscloud_task_management_worktype_status} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaskManagementWorktypeStatusConfig
  */
  public constructor(scope: Construct, id: string, config: TaskManagementWorktypeStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_task_management_worktype_status',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._default = config.default;
    this._defaultDestinationStatusId = config.defaultDestinationStatusId;
    this._description = config.description;
    this._destinationStatusIds = config.destinationStatusIds;
    this._id = config.id;
    this._name = config.name;
    this._statusTransitionDelaySeconds = config.statusTransitionDelaySeconds;
    this._statusTransitionTime = config.statusTransitionTime;
    this._worktypeId = config.worktypeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // default_destination_status_id - computed: true, optional: true, required: false
  private _defaultDestinationStatusId?: string; 
  public get defaultDestinationStatusId() {
    return this.getStringAttribute('default_destination_status_id');
  }
  public set defaultDestinationStatusId(value: string) {
    this._defaultDestinationStatusId = value;
  }
  public resetDefaultDestinationStatusId() {
    this._defaultDestinationStatusId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDestinationStatusIdInput() {
    return this._defaultDestinationStatusId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_status_ids - computed: true, optional: true, required: false
  private _destinationStatusIds?: string[]; 
  public get destinationStatusIds() {
    return this.getListAttribute('destination_status_ids');
  }
  public set destinationStatusIds(value: string[]) {
    this._destinationStatusIds = value;
  }
  public resetDestinationStatusIds() {
    this._destinationStatusIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationStatusIdsInput() {
    return this._destinationStatusIds;
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

  // status_transition_delay_seconds - computed: true, optional: true, required: false
  private _statusTransitionDelaySeconds?: number; 
  public get statusTransitionDelaySeconds() {
    return this.getNumberAttribute('status_transition_delay_seconds');
  }
  public set statusTransitionDelaySeconds(value: number) {
    this._statusTransitionDelaySeconds = value;
  }
  public resetStatusTransitionDelaySeconds() {
    this._statusTransitionDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusTransitionDelaySecondsInput() {
    return this._statusTransitionDelaySeconds;
  }

  // status_transition_time - computed: true, optional: true, required: false
  private _statusTransitionTime?: string; 
  public get statusTransitionTime() {
    return this.getStringAttribute('status_transition_time');
  }
  public set statusTransitionTime(value: string) {
    this._statusTransitionTime = value;
  }
  public resetStatusTransitionTime() {
    this._statusTransitionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusTransitionTimeInput() {
    return this._statusTransitionTime;
  }

  // worktype_id - computed: false, optional: false, required: true
  private _worktypeId?: string; 
  public get worktypeId() {
    return this.getStringAttribute('worktype_id');
  }
  public set worktypeId(value: string) {
    this._worktypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get worktypeIdInput() {
    return this._worktypeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      default: cdktf.booleanToTerraform(this._default),
      default_destination_status_id: cdktf.stringToTerraform(this._defaultDestinationStatusId),
      description: cdktf.stringToTerraform(this._description),
      destination_status_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationStatusIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      status_transition_delay_seconds: cdktf.numberToTerraform(this._statusTransitionDelaySeconds),
      status_transition_time: cdktf.stringToTerraform(this._statusTransitionTime),
      worktype_id: cdktf.stringToTerraform(this._worktypeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_destination_status_id: {
        value: cdktf.stringToHclTerraform(this._defaultDestinationStatusId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_status_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationStatusIds),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_transition_delay_seconds: {
        value: cdktf.numberToHclTerraform(this._statusTransitionDelaySeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status_transition_time: {
        value: cdktf.stringToHclTerraform(this._statusTransitionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worktype_id: {
        value: cdktf.stringToHclTerraform(this._worktypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
