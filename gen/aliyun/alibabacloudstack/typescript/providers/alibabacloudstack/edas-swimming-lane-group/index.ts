// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/edas_swimming_lane_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdasSwimmingLaneGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/edas_swimming_lane_group#apps EdasSwimmingLaneGroup#apps}
  */
  readonly apps: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/edas_swimming_lane_group#entry_app_id EdasSwimmingLaneGroup#entry_app_id}
  */
  readonly entryAppId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/edas_swimming_lane_group#id EdasSwimmingLaneGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/edas_swimming_lane_group#logical_region_id EdasSwimmingLaneGroup#logical_region_id}
  */
  readonly logicalRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/edas_swimming_lane_group#name EdasSwimmingLaneGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/edas_swimming_lane_group#strategy_type EdasSwimmingLaneGroup#strategy_type}
  */
  readonly strategyType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/edas_swimming_lane_group alibabacloudstack_edas_swimming_lane_group}
*/
export class EdasSwimmingLaneGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_edas_swimming_lane_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdasSwimmingLaneGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdasSwimmingLaneGroup to import
  * @param importFromId The id of the existing EdasSwimmingLaneGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/edas_swimming_lane_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdasSwimmingLaneGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_edas_swimming_lane_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/edas_swimming_lane_group alibabacloudstack_edas_swimming_lane_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdasSwimmingLaneGroupConfig
  */
  public constructor(scope: Construct, id: string, config: EdasSwimmingLaneGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_edas_swimming_lane_group',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apps = config.apps;
    this._entryAppId = config.entryAppId;
    this._id = config.id;
    this._logicalRegionId = config.logicalRegionId;
    this._name = config.name;
    this._strategyType = config.strategyType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apps - computed: false, optional: false, required: true
  private _apps?: string[]; 
  public get apps() {
    return cdktf.Fn.tolist(this.getListAttribute('apps'));
  }
  public set apps(value: string[]) {
    this._apps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps;
  }

  // entry_app_id - computed: false, optional: false, required: true
  private _entryAppId?: string; 
  public get entryAppId() {
    return this.getStringAttribute('entry_app_id');
  }
  public set entryAppId(value: string) {
    this._entryAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryAppIdInput() {
    return this._entryAppId;
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
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

  // logical_region_id - computed: true, optional: true, required: false
  private _logicalRegionId?: string; 
  public get logicalRegionId() {
    return this.getStringAttribute('logical_region_id');
  }
  public set logicalRegionId(value: string) {
    this._logicalRegionId = value;
  }
  public resetLogicalRegionId() {
    this._logicalRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalRegionIdInput() {
    return this._logicalRegionId;
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

  // strategy_type - computed: false, optional: true, required: false
  private _strategyType?: string; 
  public get strategyType() {
    return this.getStringAttribute('strategy_type');
  }
  public set strategyType(value: string) {
    this._strategyType = value;
  }
  public resetStrategyType() {
    this._strategyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyTypeInput() {
    return this._strategyType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apps),
      entry_app_id: cdktf.stringToTerraform(this._entryAppId),
      id: cdktf.stringToTerraform(this._id),
      logical_region_id: cdktf.stringToTerraform(this._logicalRegionId),
      name: cdktf.stringToTerraform(this._name),
      strategy_type: cdktf.stringToTerraform(this._strategyType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      entry_app_id: {
        value: cdktf.stringToHclTerraform(this._entryAppId),
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
      logical_region_id: {
        value: cdktf.stringToHclTerraform(this._logicalRegionId),
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
      strategy_type: {
        value: cdktf.stringToHclTerraform(this._strategyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
