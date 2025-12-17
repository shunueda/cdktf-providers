// https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * 24/7 coverage of the schedule. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/schedule#all_time_coverage Schedule#all_time_coverage}
  */
  readonly allTimeCoverage?: boolean | cdktf.IResolvable;
  /**
  * The description of the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/schedule#description Schedule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/schedule#id Schedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/schedule#name Schedule#name}
  */
  readonly name: string;
  /**
  * The owning teams for this schedules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/schedule#owner_group_ids Schedule#owner_group_ids}
  */
  readonly ownerGroupIds?: string[];
  /**
  * ID of user assigned as owner of the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/schedule#owner_user_id Schedule#owner_user_id}
  */
  readonly ownerUserId?: number;
  /**
  * Map must contain two fields, `id` and `name`. Synced slack channel of the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/schedule#slack_channel Schedule#slack_channel}
  */
  readonly slackChannel?: { [key: string]: string };
  /**
  * Map must contain two fields, `id` and `name`. Synced slack group of the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/schedule#slack_user_group Schedule#slack_user_group}
  */
  readonly slackUserGroup?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/schedule rootly_schedule}
*/
export class Schedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Schedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Schedule to import
  * @param importFromId The id of the existing Schedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Schedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/schedule rootly_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: ScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_schedule',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.1.0',
        providerVersionConstraint: '5.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allTimeCoverage = config.allTimeCoverage;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._ownerGroupIds = config.ownerGroupIds;
    this._ownerUserId = config.ownerUserId;
    this._slackChannel = config.slackChannel;
    this._slackUserGroup = config.slackUserGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_time_coverage - computed: true, optional: true, required: false
  private _allTimeCoverage?: boolean | cdktf.IResolvable; 
  public get allTimeCoverage() {
    return this.getBooleanAttribute('all_time_coverage');
  }
  public set allTimeCoverage(value: boolean | cdktf.IResolvable) {
    this._allTimeCoverage = value;
  }
  public resetAllTimeCoverage() {
    this._allTimeCoverage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allTimeCoverageInput() {
    return this._allTimeCoverage;
  }

  // description - computed: true, optional: true, required: false
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

  // owner_group_ids - computed: false, optional: true, required: false
  private _ownerGroupIds?: string[]; 
  public get ownerGroupIds() {
    return this.getListAttribute('owner_group_ids');
  }
  public set ownerGroupIds(value: string[]) {
    this._ownerGroupIds = value;
  }
  public resetOwnerGroupIds() {
    this._ownerGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerGroupIdsInput() {
    return this._ownerGroupIds;
  }

  // owner_user_id - computed: true, optional: true, required: false
  private _ownerUserId?: number; 
  public get ownerUserId() {
    return this.getNumberAttribute('owner_user_id');
  }
  public set ownerUserId(value: number) {
    this._ownerUserId = value;
  }
  public resetOwnerUserId() {
    this._ownerUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserIdInput() {
    return this._ownerUserId;
  }

  // slack_channel - computed: false, optional: true, required: false
  private _slackChannel?: { [key: string]: string }; 
  public get slackChannel() {
    return this.getStringMapAttribute('slack_channel');
  }
  public set slackChannel(value: { [key: string]: string }) {
    this._slackChannel = value;
  }
  public resetSlackChannel() {
    this._slackChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackChannelInput() {
    return this._slackChannel;
  }

  // slack_user_group - computed: false, optional: true, required: false
  private _slackUserGroup?: { [key: string]: string }; 
  public get slackUserGroup() {
    return this.getStringMapAttribute('slack_user_group');
  }
  public set slackUserGroup(value: { [key: string]: string }) {
    this._slackUserGroup = value;
  }
  public resetSlackUserGroup() {
    this._slackUserGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackUserGroupInput() {
    return this._slackUserGroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_time_coverage: cdktf.booleanToTerraform(this._allTimeCoverage),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owner_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ownerGroupIds),
      owner_user_id: cdktf.numberToTerraform(this._ownerUserId),
      slack_channel: cdktf.hashMapper(cdktf.stringToTerraform)(this._slackChannel),
      slack_user_group: cdktf.hashMapper(cdktf.stringToTerraform)(this._slackUserGroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_time_coverage: {
        value: cdktf.booleanToHclTerraform(this._allTimeCoverage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ownerGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      owner_user_id: {
        value: cdktf.numberToHclTerraform(this._ownerUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slack_channel: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._slackChannel),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      slack_user_group: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._slackUserGroup),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
