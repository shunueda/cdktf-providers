// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWorksRemindConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#alert_interval DataWorksRemind#alert_interval}
  */
  readonly alertInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#alert_methods DataWorksRemind#alert_methods}
  */
  readonly alertMethods?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#alert_targets DataWorksRemind#alert_targets}
  */
  readonly alertTargets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#alert_unit DataWorksRemind#alert_unit}
  */
  readonly alertUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#baseline_ids DataWorksRemind#baseline_ids}
  */
  readonly baselineIds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#biz_process_ids DataWorksRemind#biz_process_ids}
  */
  readonly bizProcessIds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#detail DataWorksRemind#detail}
  */
  readonly detail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#dnd_end DataWorksRemind#dnd_end}
  */
  readonly dndEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#id DataWorksRemind#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#max_alert_times DataWorksRemind#max_alert_times}
  */
  readonly maxAlertTimes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#node_ids DataWorksRemind#node_ids}
  */
  readonly nodeIds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#project_id DataWorksRemind#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#remind_name DataWorksRemind#remind_name}
  */
  readonly remindName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#remind_type DataWorksRemind#remind_type}
  */
  readonly remindType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#remind_unit DataWorksRemind#remind_unit}
  */
  readonly remindUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#robot_urls DataWorksRemind#robot_urls}
  */
  readonly robotUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#use_flag DataWorksRemind#use_flag}
  */
  readonly useFlag?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind alibabacloudstack_data_works_remind}
*/
export class DataWorksRemind extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_data_works_remind";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWorksRemind resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWorksRemind to import
  * @param importFromId The id of the existing DataWorksRemind that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWorksRemind to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_data_works_remind", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/data_works_remind alibabacloudstack_data_works_remind} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWorksRemindConfig
  */
  public constructor(scope: Construct, id: string, config: DataWorksRemindConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_data_works_remind',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.16.21',
        providerVersionConstraint: '3.16.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertInterval = config.alertInterval;
    this._alertMethods = config.alertMethods;
    this._alertTargets = config.alertTargets;
    this._alertUnit = config.alertUnit;
    this._baselineIds = config.baselineIds;
    this._bizProcessIds = config.bizProcessIds;
    this._detail = config.detail;
    this._dndEnd = config.dndEnd;
    this._id = config.id;
    this._maxAlertTimes = config.maxAlertTimes;
    this._nodeIds = config.nodeIds;
    this._projectId = config.projectId;
    this._remindName = config.remindName;
    this._remindType = config.remindType;
    this._remindUnit = config.remindUnit;
    this._robotUrls = config.robotUrls;
    this._useFlag = config.useFlag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_interval - computed: false, optional: true, required: false
  private _alertInterval?: number; 
  public get alertInterval() {
    return this.getNumberAttribute('alert_interval');
  }
  public set alertInterval(value: number) {
    this._alertInterval = value;
  }
  public resetAlertInterval() {
    this._alertInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertIntervalInput() {
    return this._alertInterval;
  }

  // alert_methods - computed: false, optional: true, required: false
  private _alertMethods?: string; 
  public get alertMethods() {
    return this.getStringAttribute('alert_methods');
  }
  public set alertMethods(value: string) {
    this._alertMethods = value;
  }
  public resetAlertMethods() {
    this._alertMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertMethodsInput() {
    return this._alertMethods;
  }

  // alert_targets - computed: false, optional: true, required: false
  private _alertTargets?: string; 
  public get alertTargets() {
    return this.getStringAttribute('alert_targets');
  }
  public set alertTargets(value: string) {
    this._alertTargets = value;
  }
  public resetAlertTargets() {
    this._alertTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTargetsInput() {
    return this._alertTargets;
  }

  // alert_unit - computed: false, optional: false, required: true
  private _alertUnit?: string; 
  public get alertUnit() {
    return this.getStringAttribute('alert_unit');
  }
  public set alertUnit(value: string) {
    this._alertUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertUnitInput() {
    return this._alertUnit;
  }

  // baseline_ids - computed: false, optional: true, required: false
  private _baselineIds?: string; 
  public get baselineIds() {
    return this.getStringAttribute('baseline_ids');
  }
  public set baselineIds(value: string) {
    this._baselineIds = value;
  }
  public resetBaselineIds() {
    this._baselineIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineIdsInput() {
    return this._baselineIds;
  }

  // biz_process_ids - computed: false, optional: true, required: false
  private _bizProcessIds?: string; 
  public get bizProcessIds() {
    return this.getStringAttribute('biz_process_ids');
  }
  public set bizProcessIds(value: string) {
    this._bizProcessIds = value;
  }
  public resetBizProcessIds() {
    this._bizProcessIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bizProcessIdsInput() {
    return this._bizProcessIds;
  }

  // detail - computed: false, optional: true, required: false
  private _detail?: string; 
  public get detail() {
    return this.getStringAttribute('detail');
  }
  public set detail(value: string) {
    this._detail = value;
  }
  public resetDetail() {
    this._detail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail;
  }

  // dnd_end - computed: false, optional: true, required: false
  private _dndEnd?: string; 
  public get dndEnd() {
    return this.getStringAttribute('dnd_end');
  }
  public set dndEnd(value: string) {
    this._dndEnd = value;
  }
  public resetDndEnd() {
    this._dndEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dndEndInput() {
    return this._dndEnd;
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

  // max_alert_times - computed: false, optional: true, required: false
  private _maxAlertTimes?: number; 
  public get maxAlertTimes() {
    return this.getNumberAttribute('max_alert_times');
  }
  public set maxAlertTimes(value: number) {
    this._maxAlertTimes = value;
  }
  public resetMaxAlertTimes() {
    this._maxAlertTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAlertTimesInput() {
    return this._maxAlertTimes;
  }

  // node_ids - computed: false, optional: true, required: false
  private _nodeIds?: string; 
  public get nodeIds() {
    return this.getStringAttribute('node_ids');
  }
  public set nodeIds(value: string) {
    this._nodeIds = value;
  }
  public resetNodeIds() {
    this._nodeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdsInput() {
    return this._nodeIds;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // remind_id - computed: true, optional: false, required: false
  public get remindId() {
    return this.getStringAttribute('remind_id');
  }

  // remind_name - computed: false, optional: false, required: true
  private _remindName?: string; 
  public get remindName() {
    return this.getStringAttribute('remind_name');
  }
  public set remindName(value: string) {
    this._remindName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remindNameInput() {
    return this._remindName;
  }

  // remind_type - computed: false, optional: false, required: true
  private _remindType?: string; 
  public get remindType() {
    return this.getStringAttribute('remind_type');
  }
  public set remindType(value: string) {
    this._remindType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remindTypeInput() {
    return this._remindType;
  }

  // remind_unit - computed: false, optional: false, required: true
  private _remindUnit?: string; 
  public get remindUnit() {
    return this.getStringAttribute('remind_unit');
  }
  public set remindUnit(value: string) {
    this._remindUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remindUnitInput() {
    return this._remindUnit;
  }

  // robot_urls - computed: false, optional: true, required: false
  private _robotUrls?: string; 
  public get robotUrls() {
    return this.getStringAttribute('robot_urls');
  }
  public set robotUrls(value: string) {
    this._robotUrls = value;
  }
  public resetRobotUrls() {
    this._robotUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get robotUrlsInput() {
    return this._robotUrls;
  }

  // use_flag - computed: true, optional: true, required: false
  private _useFlag?: boolean | cdktf.IResolvable; 
  public get useFlag() {
    return this.getBooleanAttribute('use_flag');
  }
  public set useFlag(value: boolean | cdktf.IResolvable) {
    this._useFlag = value;
  }
  public resetUseFlag() {
    this._useFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFlagInput() {
    return this._useFlag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_interval: cdktf.numberToTerraform(this._alertInterval),
      alert_methods: cdktf.stringToTerraform(this._alertMethods),
      alert_targets: cdktf.stringToTerraform(this._alertTargets),
      alert_unit: cdktf.stringToTerraform(this._alertUnit),
      baseline_ids: cdktf.stringToTerraform(this._baselineIds),
      biz_process_ids: cdktf.stringToTerraform(this._bizProcessIds),
      detail: cdktf.stringToTerraform(this._detail),
      dnd_end: cdktf.stringToTerraform(this._dndEnd),
      id: cdktf.stringToTerraform(this._id),
      max_alert_times: cdktf.numberToTerraform(this._maxAlertTimes),
      node_ids: cdktf.stringToTerraform(this._nodeIds),
      project_id: cdktf.stringToTerraform(this._projectId),
      remind_name: cdktf.stringToTerraform(this._remindName),
      remind_type: cdktf.stringToTerraform(this._remindType),
      remind_unit: cdktf.stringToTerraform(this._remindUnit),
      robot_urls: cdktf.stringToTerraform(this._robotUrls),
      use_flag: cdktf.booleanToTerraform(this._useFlag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_interval: {
        value: cdktf.numberToHclTerraform(this._alertInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alert_methods: {
        value: cdktf.stringToHclTerraform(this._alertMethods),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_targets: {
        value: cdktf.stringToHclTerraform(this._alertTargets),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_unit: {
        value: cdktf.stringToHclTerraform(this._alertUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      baseline_ids: {
        value: cdktf.stringToHclTerraform(this._baselineIds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      biz_process_ids: {
        value: cdktf.stringToHclTerraform(this._bizProcessIds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detail: {
        value: cdktf.stringToHclTerraform(this._detail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnd_end: {
        value: cdktf.stringToHclTerraform(this._dndEnd),
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
      max_alert_times: {
        value: cdktf.numberToHclTerraform(this._maxAlertTimes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_ids: {
        value: cdktf.stringToHclTerraform(this._nodeIds),
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
      remind_name: {
        value: cdktf.stringToHclTerraform(this._remindName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remind_type: {
        value: cdktf.stringToHclTerraform(this._remindType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remind_unit: {
        value: cdktf.stringToHclTerraform(this._remindUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      robot_urls: {
        value: cdktf.stringToHclTerraform(this._robotUrls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_flag: {
        value: cdktf.booleanToHclTerraform(this._useFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
