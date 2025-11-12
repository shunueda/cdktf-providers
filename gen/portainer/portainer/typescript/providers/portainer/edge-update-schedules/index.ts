// https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_update_schedules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeUpdateSchedulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_update_schedules#agent_image EdgeUpdateSchedules#agent_image}
  */
  readonly agentImage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_update_schedules#group_ids EdgeUpdateSchedules#group_ids}
  */
  readonly groupIds: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_update_schedules#id EdgeUpdateSchedules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_update_schedules#name EdgeUpdateSchedules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_update_schedules#registry_id EdgeUpdateSchedules#registry_id}
  */
  readonly registryId: number;
  /**
  * Time in RFC3339 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_update_schedules#scheduled_time EdgeUpdateSchedules#scheduled_time}
  */
  readonly scheduledTime: string;
  /**
  * 0 = update, 1 = rollback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_update_schedules#type EdgeUpdateSchedules#type}
  */
  readonly type: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_update_schedules#updater_image EdgeUpdateSchedules#updater_image}
  */
  readonly updaterImage: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_update_schedules portainer_edge_update_schedules}
*/
export class EdgeUpdateSchedules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_edge_update_schedules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeUpdateSchedules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeUpdateSchedules to import
  * @param importFromId The id of the existing EdgeUpdateSchedules that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_update_schedules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeUpdateSchedules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_edge_update_schedules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_update_schedules portainer_edge_update_schedules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeUpdateSchedulesConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeUpdateSchedulesConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_edge_update_schedules',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.16.1',
        providerVersionConstraint: '1.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentImage = config.agentImage;
    this._groupIds = config.groupIds;
    this._id = config.id;
    this._name = config.name;
    this._registryId = config.registryId;
    this._scheduledTime = config.scheduledTime;
    this._type = config.type;
    this._updaterImage = config.updaterImage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_image - computed: false, optional: false, required: true
  private _agentImage?: string; 
  public get agentImage() {
    return this.getStringAttribute('agent_image');
  }
  public set agentImage(value: string) {
    this._agentImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentImageInput() {
    return this._agentImage;
  }

  // group_ids - computed: false, optional: false, required: true
  private _groupIds?: number[]; 
  public get groupIds() {
    return this.getNumberListAttribute('group_ids');
  }
  public set groupIds(value: number[]) {
    this._groupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // registry_id - computed: false, optional: false, required: true
  private _registryId?: number; 
  public get registryId() {
    return this.getNumberAttribute('registry_id');
  }
  public set registryId(value: number) {
    this._registryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // scheduled_time - computed: false, optional: false, required: true
  private _scheduledTime?: string; 
  public get scheduledTime() {
    return this.getStringAttribute('scheduled_time');
  }
  public set scheduledTime(value: string) {
    this._scheduledTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTimeInput() {
    return this._scheduledTime;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updater_image - computed: false, optional: false, required: true
  private _updaterImage?: string; 
  public get updaterImage() {
    return this.getStringAttribute('updater_image');
  }
  public set updaterImage(value: string) {
    this._updaterImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updaterImageInput() {
    return this._updaterImage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_image: cdktf.stringToTerraform(this._agentImage),
      group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._groupIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      registry_id: cdktf.numberToTerraform(this._registryId),
      scheduled_time: cdktf.stringToTerraform(this._scheduledTime),
      type: cdktf.numberToTerraform(this._type),
      updater_image: cdktf.stringToTerraform(this._updaterImage),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_image: {
        value: cdktf.stringToHclTerraform(this._agentImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._groupIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
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
      registry_id: {
        value: cdktf.numberToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scheduled_time: {
        value: cdktf.stringToHclTerraform(this._scheduledTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      updater_image: {
        value: cdktf.stringToHclTerraform(this._updaterImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
