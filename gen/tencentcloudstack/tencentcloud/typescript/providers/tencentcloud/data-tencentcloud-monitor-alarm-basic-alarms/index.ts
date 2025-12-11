// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/monitor_alarm_basic_alarms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMonitorAlarmBasicAlarmsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter based on alarm status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/monitor_alarm_basic_alarms#alarm_status DataTencentcloudMonitorAlarmBasicAlarms#alarm_status}
  */
  readonly alarmStatus?: number[];
  /**
  * End time, default to current timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/monitor_alarm_basic_alarms#end_time DataTencentcloudMonitorAlarmBasicAlarms#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/monitor_alarm_basic_alarms#id DataTencentcloudMonitorAlarmBasicAlarms#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filter based on instance group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/monitor_alarm_basic_alarms#instance_group_ids DataTencentcloudMonitorAlarmBasicAlarms#instance_group_ids}
  */
  readonly instanceGroupIds?: number[];
  /**
  * Filter by indicator name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/monitor_alarm_basic_alarms#metric_names DataTencentcloudMonitorAlarmBasicAlarms#metric_names}
  */
  readonly metricNames?: string[];
  /**
  * Interface module name, current value monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/monitor_alarm_basic_alarms#module DataTencentcloudMonitorAlarmBasicAlarms#module}
  */
  readonly module: string;
  /**
  * Filter based on alarm objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/monitor_alarm_basic_alarms#obj_like DataTencentcloudMonitorAlarmBasicAlarms#obj_like}
  */
  readonly objLike?: string;
  /**
  * Sort by occurrence time, taking ASC or DESC values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/monitor_alarm_basic_alarms#occur_time_order DataTencentcloudMonitorAlarmBasicAlarms#occur_time_order}
  */
  readonly occurTimeOrder?: string;
  /**
  * Filter based on project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/monitor_alarm_basic_alarms#project_ids DataTencentcloudMonitorAlarmBasicAlarms#project_ids}
  */
  readonly projectIds?: number[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/monitor_alarm_basic_alarms#result_output_file DataTencentcloudMonitorAlarmBasicAlarms#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Start time, default to one day is timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/monitor_alarm_basic_alarms#start_time DataTencentcloudMonitorAlarmBasicAlarms#start_time}
  */
  readonly startTime?: number;
  /**
  * Filter based on policy type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/monitor_alarm_basic_alarms#view_names DataTencentcloudMonitorAlarmBasicAlarms#view_names}
  */
  readonly viewNames?: string[];
}
export interface DataTencentcloudMonitorAlarmBasicAlarmsAlarmsInstanceGroup {
}

export function dataTencentcloudMonitorAlarmBasicAlarmsAlarmsInstanceGroupToTerraform(struct?: DataTencentcloudMonitorAlarmBasicAlarmsAlarmsInstanceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmBasicAlarmsAlarmsInstanceGroupToHclTerraform(struct?: DataTencentcloudMonitorAlarmBasicAlarmsAlarmsInstanceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmBasicAlarmsAlarmsInstanceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMonitorAlarmBasicAlarmsAlarmsInstanceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmBasicAlarmsAlarmsInstanceGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_group_id - computed: true, optional: false, required: false
  public get instanceGroupId() {
    return this.getNumberAttribute('instance_group_id');
  }

  // instance_group_name - computed: true, optional: false, required: false
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }
}

export class DataTencentcloudMonitorAlarmBasicAlarmsAlarmsInstanceGroupList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMonitorAlarmBasicAlarmsAlarmsInstanceGroupOutputReference {
    return new DataTencentcloudMonitorAlarmBasicAlarmsAlarmsInstanceGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmBasicAlarmsAlarms {
}

export function dataTencentcloudMonitorAlarmBasicAlarmsAlarmsToTerraform(struct?: DataTencentcloudMonitorAlarmBasicAlarmsAlarms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmBasicAlarmsAlarmsToHclTerraform(struct?: DataTencentcloudMonitorAlarmBasicAlarmsAlarms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmBasicAlarmsAlarmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMonitorAlarmBasicAlarmsAlarms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmBasicAlarmsAlarms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_status - computed: true, optional: false, required: false
  public get alarmStatus() {
    return this.getStringAttribute('alarm_status');
  }

  // alarm_type - computed: true, optional: false, required: false
  public get alarmType() {
    return this.getNumberAttribute('alarm_type');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return this.getStringAttribute('dimensions');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // first_occur_time - computed: true, optional: false, required: false
  public get firstOccurTime() {
    return this.getStringAttribute('first_occur_time');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // instance_group - computed: true, optional: false, required: false
  private _instanceGroup = new DataTencentcloudMonitorAlarmBasicAlarmsAlarmsInstanceGroupList(this, "instance_group", false);
  public get instanceGroup() {
    return this._instanceGroup;
  }

  // last_occur_time - computed: true, optional: false, required: false
  public get lastOccurTime() {
    return this.getStringAttribute('last_occur_time');
  }

  // metric_id - computed: true, optional: false, required: false
  public get metricId() {
    return this.getNumberAttribute('metric_id');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // notify_way - computed: true, optional: false, required: false
  public get notifyWay() {
    return cdktf.Fn.tolist(this.getListAttribute('notify_way'));
  }

  // obj_id - computed: true, optional: false, required: false
  public get objId() {
    return this.getStringAttribute('obj_id');
  }

  // obj_name - computed: true, optional: false, required: false
  public get objName() {
    return this.getStringAttribute('obj_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // view_name - computed: true, optional: false, required: false
  public get viewName() {
    return this.getStringAttribute('view_name');
  }

  // vpc - computed: true, optional: false, required: false
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
}

export class DataTencentcloudMonitorAlarmBasicAlarmsAlarmsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMonitorAlarmBasicAlarmsAlarmsOutputReference {
    return new DataTencentcloudMonitorAlarmBasicAlarmsAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/monitor_alarm_basic_alarms tencentcloud_monitor_alarm_basic_alarms}
*/
export class DataTencentcloudMonitorAlarmBasicAlarms extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_alarm_basic_alarms";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMonitorAlarmBasicAlarms resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMonitorAlarmBasicAlarms to import
  * @param importFromId The id of the existing DataTencentcloudMonitorAlarmBasicAlarms that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/monitor_alarm_basic_alarms#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMonitorAlarmBasicAlarms to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_alarm_basic_alarms", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/monitor_alarm_basic_alarms tencentcloud_monitor_alarm_basic_alarms} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMonitorAlarmBasicAlarmsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMonitorAlarmBasicAlarmsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_alarm_basic_alarms',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmStatus = config.alarmStatus;
    this._endTime = config.endTime;
    this._id = config.id;
    this._instanceGroupIds = config.instanceGroupIds;
    this._metricNames = config.metricNames;
    this._module = config.module;
    this._objLike = config.objLike;
    this._occurTimeOrder = config.occurTimeOrder;
    this._projectIds = config.projectIds;
    this._resultOutputFile = config.resultOutputFile;
    this._startTime = config.startTime;
    this._viewNames = config.viewNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_status - computed: false, optional: true, required: false
  private _alarmStatus?: number[]; 
  public get alarmStatus() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('alarm_status')));
  }
  public set alarmStatus(value: number[]) {
    this._alarmStatus = value;
  }
  public resetAlarmStatus() {
    this._alarmStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmStatusInput() {
    return this._alarmStatus;
  }

  // alarms - computed: true, optional: false, required: false
  private _alarms = new DataTencentcloudMonitorAlarmBasicAlarmsAlarmsList(this, "alarms", false);
  public get alarms() {
    return this._alarms;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // instance_group_ids - computed: false, optional: true, required: false
  private _instanceGroupIds?: number[]; 
  public get instanceGroupIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('instance_group_ids')));
  }
  public set instanceGroupIds(value: number[]) {
    this._instanceGroupIds = value;
  }
  public resetInstanceGroupIds() {
    this._instanceGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupIdsInput() {
    return this._instanceGroupIds;
  }

  // metric_names - computed: false, optional: true, required: false
  private _metricNames?: string[]; 
  public get metricNames() {
    return cdktf.Fn.tolist(this.getListAttribute('metric_names'));
  }
  public set metricNames(value: string[]) {
    this._metricNames = value;
  }
  public resetMetricNames() {
    this._metricNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamesInput() {
    return this._metricNames;
  }

  // module - computed: false, optional: false, required: true
  private _module?: string; 
  public get module() {
    return this.getStringAttribute('module');
  }
  public set module(value: string) {
    this._module = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module;
  }

  // obj_like - computed: false, optional: true, required: false
  private _objLike?: string; 
  public get objLike() {
    return this.getStringAttribute('obj_like');
  }
  public set objLike(value: string) {
    this._objLike = value;
  }
  public resetObjLike() {
    this._objLike = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objLikeInput() {
    return this._objLike;
  }

  // occur_time_order - computed: false, optional: true, required: false
  private _occurTimeOrder?: string; 
  public get occurTimeOrder() {
    return this.getStringAttribute('occur_time_order');
  }
  public set occurTimeOrder(value: string) {
    this._occurTimeOrder = value;
  }
  public resetOccurTimeOrder() {
    this._occurTimeOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get occurTimeOrderInput() {
    return this._occurTimeOrder;
  }

  // project_ids - computed: false, optional: true, required: false
  private _projectIds?: number[]; 
  public get projectIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('project_ids')));
  }
  public set projectIds(value: number[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // view_names - computed: false, optional: true, required: false
  private _viewNames?: string[]; 
  public get viewNames() {
    return cdktf.Fn.tolist(this.getListAttribute('view_names'));
  }
  public set viewNames(value: string[]) {
    this._viewNames = value;
  }
  public resetViewNames() {
    this._viewNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewNamesInput() {
    return this._viewNames;
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getStringAttribute('warning');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_status: cdktf.listMapper(cdktf.numberToTerraform, false)(this._alarmStatus),
      end_time: cdktf.numberToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      instance_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._instanceGroupIds),
      metric_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._metricNames),
      module: cdktf.stringToTerraform(this._module),
      obj_like: cdktf.stringToTerraform(this._objLike),
      occur_time_order: cdktf.stringToTerraform(this._occurTimeOrder),
      project_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._projectIds),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      start_time: cdktf.numberToTerraform(this._startTime),
      view_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._viewNames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_status: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._alarmStatus),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
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
      instance_group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._instanceGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      metric_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._metricNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      module: {
        value: cdktf.stringToHclTerraform(this._module),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obj_like: {
        value: cdktf.stringToHclTerraform(this._objLike),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      occur_time_order: {
        value: cdktf.stringToHclTerraform(this._occurTimeOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._projectIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      view_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._viewNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
