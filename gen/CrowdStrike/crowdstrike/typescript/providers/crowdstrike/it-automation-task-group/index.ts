// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_task_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ItAutomationTaskGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access control configuration for the task (Public, Shared).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_task_group#access_type ItAutomationTaskGroup#access_type}
  */
  readonly accessType: string;
  /**
  * Assigned user IDs of the group, when access_type is Shared. Required when access_type is 'Shared'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_task_group#assigned_user_ids ItAutomationTaskGroup#assigned_user_ids}
  */
  readonly assignedUserIds?: string[];
  /**
  * Description of the task group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_task_group#description ItAutomationTaskGroup#description}
  */
  readonly description?: string;
  /**
  * Name of the task group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_task_group#name ItAutomationTaskGroup#name}
  */
  readonly name: string;
  /**
  * Assigned task IDs of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_task_group#task_ids ItAutomationTaskGroup#task_ids}
  */
  readonly taskIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_task_group crowdstrike_it_automation_task_group}
*/
export class ItAutomationTaskGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_it_automation_task_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ItAutomationTaskGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ItAutomationTaskGroup to import
  * @param importFromId The id of the existing ItAutomationTaskGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_task_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ItAutomationTaskGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_it_automation_task_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_task_group crowdstrike_it_automation_task_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ItAutomationTaskGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ItAutomationTaskGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_it_automation_task_group',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.46',
        providerVersionConstraint: '0.0.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessType = config.accessType;
    this._assignedUserIds = config.assignedUserIds;
    this._description = config.description;
    this._name = config.name;
    this._taskIds = config.taskIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: false, optional: false, required: true
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // assigned_user_ids - computed: false, optional: true, required: false
  private _assignedUserIds?: string[]; 
  public get assignedUserIds() {
    return cdktf.Fn.tolist(this.getListAttribute('assigned_user_ids'));
  }
  public set assignedUserIds(value: string[]) {
    this._assignedUserIds = value;
  }
  public resetAssignedUserIds() {
    this._assignedUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedUserIdsInput() {
    return this._assignedUserIds;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // task_ids - computed: false, optional: true, required: false
  private _taskIds?: string[]; 
  public get taskIds() {
    return cdktf.Fn.tolist(this.getListAttribute('task_ids'));
  }
  public set taskIds(value: string[]) {
    this._taskIds = value;
  }
  public resetTaskIds() {
    this._taskIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskIdsInput() {
    return this._taskIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_type: cdktf.stringToTerraform(this._accessType),
      assigned_user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assignedUserIds),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      task_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._taskIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_type: {
        value: cdktf.stringToHclTerraform(this._accessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assigned_user_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assignedUserIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      task_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._taskIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
