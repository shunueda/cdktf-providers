// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/subgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for the Subgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/subgroup#description Subgroup#description}
  */
  readonly description?: string;
  /**
  * Display Name for the Subgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/subgroup#display_name Subgroup#display_name}
  */
  readonly displayName: string;
  /**
  * Denotes the type of monitors that can be associated. ‘1’ implies that all type of monitors can be associated with this subgroup. Default value is 1. '2' - Web, '3' - Port/Ping, '4' - Server, '5' - Database, '6' - Synthetic Transaction, '7' - Web API, '8' - APM Insight,'9' - Network Devices, '10' - RUM, '11' - AppLogs Monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/subgroup#group_type Subgroup#group_type}
  */
  readonly groupType?: number;
  /**
  * Number of monitors' health that decide the group status. ‘0’ implies that all the monitors are considered for determining the group status. Default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/subgroup#health_threshold_count Subgroup#health_threshold_count}
  */
  readonly healthThresholdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/subgroup#id Subgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitors to be associated with the Subgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/subgroup#monitors Subgroup#monitors}
  */
  readonly monitors?: string[];
  /**
  * Unique ID of the parent group under which subgroup has to be configured. It can be a subgroup or Monitor group. (In case of level 1 subgroup, top_group_id is monitor group id. In other cases it will be subgroup id. You can get the subgroup Ids configured for top_group_id by using business view API).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/subgroup#parent_group_id Subgroup#parent_group_id}
  */
  readonly parentGroupId: string;
  /**
  * Unique ID of the top monitor group for which business view has been configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/subgroup#top_group_id Subgroup#top_group_id}
  */
  readonly topGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/subgroup site24x7_subgroup}
*/
export class Subgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_subgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subgroup to import
  * @param importFromId The id of the existing Subgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/subgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_subgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/subgroup site24x7_subgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubgroupConfig
  */
  public constructor(scope: Construct, id: string, config: SubgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_subgroup',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._groupType = config.groupType;
    this._healthThresholdCount = config.healthThresholdCount;
    this._id = config.id;
    this._monitors = config.monitors;
    this._parentGroupId = config.parentGroupId;
    this._topGroupId = config.topGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // group_type - computed: false, optional: true, required: false
  private _groupType?: number; 
  public get groupType() {
    return this.getNumberAttribute('group_type');
  }
  public set groupType(value: number) {
    this._groupType = value;
  }
  public resetGroupType() {
    this._groupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTypeInput() {
    return this._groupType;
  }

  // health_threshold_count - computed: false, optional: true, required: false
  private _healthThresholdCount?: number; 
  public get healthThresholdCount() {
    return this.getNumberAttribute('health_threshold_count');
  }
  public set healthThresholdCount(value: number) {
    this._healthThresholdCount = value;
  }
  public resetHealthThresholdCount() {
    this._healthThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthThresholdCountInput() {
    return this._healthThresholdCount;
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

  // monitors - computed: false, optional: true, required: false
  private _monitors?: string[]; 
  public get monitors() {
    return cdktf.Fn.tolist(this.getListAttribute('monitors'));
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  public resetMonitors() {
    this._monitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
  }

  // parent_group_id - computed: false, optional: false, required: true
  private _parentGroupId?: string; 
  public get parentGroupId() {
    return this.getStringAttribute('parent_group_id');
  }
  public set parentGroupId(value: string) {
    this._parentGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentGroupIdInput() {
    return this._parentGroupId;
  }

  // top_group_id - computed: false, optional: false, required: true
  private _topGroupId?: string; 
  public get topGroupId() {
    return this.getStringAttribute('top_group_id');
  }
  public set topGroupId(value: string) {
    this._topGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topGroupIdInput() {
    return this._topGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      group_type: cdktf.numberToTerraform(this._groupType),
      health_threshold_count: cdktf.numberToTerraform(this._healthThresholdCount),
      id: cdktf.stringToTerraform(this._id),
      monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitors),
      parent_group_id: cdktf.stringToTerraform(this._parentGroupId),
      top_group_id: cdktf.stringToTerraform(this._topGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_type: {
        value: cdktf.numberToHclTerraform(this._groupType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_threshold_count: {
        value: cdktf.numberToHclTerraform(this._healthThresholdCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      parent_group_id: {
        value: cdktf.stringToHclTerraform(this._parentGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      top_group_id: {
        value: cdktf.stringToHclTerraform(this._topGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
