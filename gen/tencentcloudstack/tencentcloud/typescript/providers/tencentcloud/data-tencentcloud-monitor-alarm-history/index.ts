// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMonitorAlarmHistoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alarm levels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#alarm_levels DataTencentcloudMonitorAlarmHistory#alarm_levels}
  */
  readonly alarmLevels?: string[];
  /**
  * Filter by alarm object. Fuzzy search with string is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#alarm_object DataTencentcloudMonitorAlarmHistory#alarm_object}
  */
  readonly alarmObject?: string;
  /**
  * Filter by alarm status. Valid values: ALARM (not resolved), OK (resolved), NO_CONF (expired), NO_DATA (insufficient data). If this parameter is left empty, all will be queried by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#alarm_status DataTencentcloudMonitorAlarmHistory#alarm_status}
  */
  readonly alarmStatus?: string[];
  /**
  * Fuzzy search by alarm content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#content DataTencentcloudMonitorAlarmHistory#content}
  */
  readonly content?: string;
  /**
  * End time, which is the current timestamp and the time when the alarm FirstOccurTime first occurs. An alarm record can be searched only if its FirstOccurTime is earlier than the EndTime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#end_time DataTencentcloudMonitorAlarmHistory#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#id DataTencentcloudMonitorAlarmHistory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filter by instance group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#instance_group_ids DataTencentcloudMonitorAlarmHistory#instance_group_ids}
  */
  readonly instanceGroupIds?: number[];
  /**
  * Filter by metric name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#metric_names DataTencentcloudMonitorAlarmHistory#metric_names}
  */
  readonly metricNames?: string[];
  /**
  * Value fixed at monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#module DataTencentcloudMonitorAlarmHistory#module}
  */
  readonly module: string;
  /**
  * Filter by monitor type. Valid values: MT_QCE (Tencent Cloud service monitoring), MT_TAW (application performance monitoring), MT_RUM (frontend performance monitoring), MT_PROBE (cloud automated testing). If this parameter is left empty, all types will be queried by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#monitor_types DataTencentcloudMonitorAlarmHistory#monitor_types}
  */
  readonly monitorTypes?: string[];
  /**
  * Sort by the first occurrence time in descending order by default. Valid values: ASC (ascending), DESC (descending).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#order DataTencentcloudMonitorAlarmHistory#order}
  */
  readonly order?: string;
  /**
  * Search by alarm policy ID list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#policy_ids DataTencentcloudMonitorAlarmHistory#policy_ids}
  */
  readonly policyIds?: string[];
  /**
  * Fuzzy search by policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#policy_name DataTencentcloudMonitorAlarmHistory#policy_name}
  */
  readonly policyName?: string;
  /**
  * Filter by project ID. Valid values: -1 (no project), 0 (default project).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#project_ids DataTencentcloudMonitorAlarmHistory#project_ids}
  */
  readonly projectIds?: number[];
  /**
  * Search by recipient group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#receiver_groups DataTencentcloudMonitorAlarmHistory#receiver_groups}
  */
  readonly receiverGroups?: number[];
  /**
  * Search by recipient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#receiver_uids DataTencentcloudMonitorAlarmHistory#receiver_uids}
  */
  readonly receiverUids?: number[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#result_output_file DataTencentcloudMonitorAlarmHistory#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Start time, which is the timestamp one day ago by default and the time when the alarm FirstOccurTime first occurs. An alarm record can be searched only if its FirstOccurTime is later than the StartTime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#start_time DataTencentcloudMonitorAlarmHistory#start_time}
  */
  readonly startTime?: number;
  /**
  * namespaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#namespaces DataTencentcloudMonitorAlarmHistory#namespaces}
  */
  readonly namespaces?: DataTencentcloudMonitorAlarmHistoryNamespaces[] | cdktf.IResolvable;
}
export interface DataTencentcloudMonitorAlarmHistoryHistoriesInstanceGroup {
}

export function dataTencentcloudMonitorAlarmHistoryHistoriesInstanceGroupToTerraform(struct?: DataTencentcloudMonitorAlarmHistoryHistoriesInstanceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmHistoryHistoriesInstanceGroupToHclTerraform(struct?: DataTencentcloudMonitorAlarmHistoryHistoriesInstanceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmHistoryHistoriesInstanceGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmHistoryHistoriesInstanceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmHistoryHistoriesInstanceGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataTencentcloudMonitorAlarmHistoryHistoriesInstanceGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmHistoryHistoriesInstanceGroupOutputReference {
    return new DataTencentcloudMonitorAlarmHistoryHistoriesInstanceGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmHistoryHistoriesMetricsInfo {
}

export function dataTencentcloudMonitorAlarmHistoryHistoriesMetricsInfoToTerraform(struct?: DataTencentcloudMonitorAlarmHistoryHistoriesMetricsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmHistoryHistoriesMetricsInfoToHclTerraform(struct?: DataTencentcloudMonitorAlarmHistoryHistoriesMetricsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmHistoryHistoriesMetricsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmHistoryHistoriesMetricsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmHistoryHistoriesMetricsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // qce_namespace - computed: true, optional: false, required: false
  public get qceNamespace() {
    return this.getStringAttribute('qce_namespace');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudMonitorAlarmHistoryHistoriesMetricsInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmHistoryHistoriesMetricsInfoOutputReference {
    return new DataTencentcloudMonitorAlarmHistoryHistoriesMetricsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmHistoryHistories {
}

export function dataTencentcloudMonitorAlarmHistoryHistoriesToTerraform(struct?: DataTencentcloudMonitorAlarmHistoryHistories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmHistoryHistoriesToHclTerraform(struct?: DataTencentcloudMonitorAlarmHistoryHistories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmHistoryHistoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmHistoryHistories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmHistoryHistories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_id - computed: true, optional: false, required: false
  public get alarmId() {
    return this.getStringAttribute('alarm_id');
  }

  // alarm_level - computed: true, optional: false, required: false
  public get alarmLevel() {
    return this.getStringAttribute('alarm_level');
  }

  // alarm_object - computed: true, optional: false, required: false
  public get alarmObject() {
    return this.getStringAttribute('alarm_object');
  }

  // alarm_status - computed: true, optional: false, required: false
  public get alarmStatus() {
    return this.getStringAttribute('alarm_status');
  }

  // alarm_type - computed: true, optional: false, required: false
  public get alarmType() {
    return this.getStringAttribute('alarm_type');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return this.getStringAttribute('dimensions');
  }

  // event_id - computed: true, optional: false, required: false
  public get eventId() {
    return this.getNumberAttribute('event_id');
  }

  // first_occur_time - computed: true, optional: false, required: false
  public get firstOccurTime() {
    return this.getNumberAttribute('first_occur_time');
  }

  // instance_group - computed: true, optional: false, required: false
  private _instanceGroup = new DataTencentcloudMonitorAlarmHistoryHistoriesInstanceGroupList(this, "instance_group", false);
  public get instanceGroup() {
    return this._instanceGroup;
  }

  // last_occur_time - computed: true, optional: false, required: false
  public get lastOccurTime() {
    return this.getNumberAttribute('last_occur_time');
  }

  // metrics_info - computed: true, optional: false, required: false
  private _metricsInfo = new DataTencentcloudMonitorAlarmHistoryHistoriesMetricsInfoList(this, "metrics_info", false);
  public get metricsInfo() {
    return this._metricsInfo;
  }

  // monitor_type - computed: true, optional: false, required: false
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // notice_ways - computed: true, optional: false, required: false
  public get noticeWays() {
    return cdktf.Fn.tolist(this.getListAttribute('notice_ways'));
  }

  // origin_id - computed: true, optional: false, required: false
  public get originId() {
    return this.getStringAttribute('origin_id');
  }

  // policy_exists - computed: true, optional: false, required: false
  public get policyExists() {
    return this.getNumberAttribute('policy_exists');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // receiver_groups - computed: true, optional: false, required: false
  public get receiverGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('receiver_groups')));
  }

  // receiver_uids - computed: true, optional: false, required: false
  public get receiverUids() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('receiver_uids')));
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // vpc - computed: true, optional: false, required: false
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
}

export class DataTencentcloudMonitorAlarmHistoryHistoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmHistoryHistoriesOutputReference {
    return new DataTencentcloudMonitorAlarmHistoryHistoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmHistoryNamespaces {
  /**
  * Monitor type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#monitor_type DataTencentcloudMonitorAlarmHistory#monitor_type}
  */
  readonly monitorType: string;
  /**
  * Policy type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#namespace DataTencentcloudMonitorAlarmHistory#namespace}
  */
  readonly namespace: string;
}

export function dataTencentcloudMonitorAlarmHistoryNamespacesToTerraform(struct?: DataTencentcloudMonitorAlarmHistoryNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_type: cdktf.stringToTerraform(struct!.monitorType),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataTencentcloudMonitorAlarmHistoryNamespacesToHclTerraform(struct?: DataTencentcloudMonitorAlarmHistoryNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_type: {
      value: cdktf.stringToHclTerraform(struct!.monitorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudMonitorAlarmHistoryNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMonitorAlarmHistoryNamespaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorType = this._monitorType;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmHistoryNamespaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorType = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorType = value.monitorType;
      this._namespace = value.namespace;
    }
  }

  // monitor_type - computed: false, optional: false, required: true
  private _monitorType?: string; 
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }
  public set monitorType(value: string) {
    this._monitorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTypeInput() {
    return this._monitorType;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class DataTencentcloudMonitorAlarmHistoryNamespacesList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudMonitorAlarmHistoryNamespaces[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudMonitorAlarmHistoryNamespacesOutputReference {
    return new DataTencentcloudMonitorAlarmHistoryNamespacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history tencentcloud_monitor_alarm_history}
*/
export class DataTencentcloudMonitorAlarmHistory extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_alarm_history";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMonitorAlarmHistory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMonitorAlarmHistory to import
  * @param importFromId The id of the existing DataTencentcloudMonitorAlarmHistory that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMonitorAlarmHistory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_alarm_history", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_alarm_history tencentcloud_monitor_alarm_history} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMonitorAlarmHistoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMonitorAlarmHistoryConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_alarm_history',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmLevels = config.alarmLevels;
    this._alarmObject = config.alarmObject;
    this._alarmStatus = config.alarmStatus;
    this._content = config.content;
    this._endTime = config.endTime;
    this._id = config.id;
    this._instanceGroupIds = config.instanceGroupIds;
    this._metricNames = config.metricNames;
    this._module = config.module;
    this._monitorTypes = config.monitorTypes;
    this._order = config.order;
    this._policyIds = config.policyIds;
    this._policyName = config.policyName;
    this._projectIds = config.projectIds;
    this._receiverGroups = config.receiverGroups;
    this._receiverUids = config.receiverUids;
    this._resultOutputFile = config.resultOutputFile;
    this._startTime = config.startTime;
    this._namespaces.internalValue = config.namespaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_levels - computed: false, optional: true, required: false
  private _alarmLevels?: string[]; 
  public get alarmLevels() {
    return cdktf.Fn.tolist(this.getListAttribute('alarm_levels'));
  }
  public set alarmLevels(value: string[]) {
    this._alarmLevels = value;
  }
  public resetAlarmLevels() {
    this._alarmLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmLevelsInput() {
    return this._alarmLevels;
  }

  // alarm_object - computed: false, optional: true, required: false
  private _alarmObject?: string; 
  public get alarmObject() {
    return this.getStringAttribute('alarm_object');
  }
  public set alarmObject(value: string) {
    this._alarmObject = value;
  }
  public resetAlarmObject() {
    this._alarmObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmObjectInput() {
    return this._alarmObject;
  }

  // alarm_status - computed: false, optional: true, required: false
  private _alarmStatus?: string[]; 
  public get alarmStatus() {
    return cdktf.Fn.tolist(this.getListAttribute('alarm_status'));
  }
  public set alarmStatus(value: string[]) {
    this._alarmStatus = value;
  }
  public resetAlarmStatus() {
    this._alarmStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmStatusInput() {
    return this._alarmStatus;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // histories - computed: true, optional: false, required: false
  private _histories = new DataTencentcloudMonitorAlarmHistoryHistoriesList(this, "histories", false);
  public get histories() {
    return this._histories;
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

  // monitor_types - computed: false, optional: true, required: false
  private _monitorTypes?: string[]; 
  public get monitorTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('monitor_types'));
  }
  public set monitorTypes(value: string[]) {
    this._monitorTypes = value;
  }
  public resetMonitorTypes() {
    this._monitorTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTypesInput() {
    return this._monitorTypes;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // policy_ids - computed: false, optional: true, required: false
  private _policyIds?: string[]; 
  public get policyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_ids'));
  }
  public set policyIds(value: string[]) {
    this._policyIds = value;
  }
  public resetPolicyIds() {
    this._policyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdsInput() {
    return this._policyIds;
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
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

  // receiver_groups - computed: false, optional: true, required: false
  private _receiverGroups?: number[]; 
  public get receiverGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('receiver_groups')));
  }
  public set receiverGroups(value: number[]) {
    this._receiverGroups = value;
  }
  public resetReceiverGroups() {
    this._receiverGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverGroupsInput() {
    return this._receiverGroups;
  }

  // receiver_uids - computed: false, optional: true, required: false
  private _receiverUids?: number[]; 
  public get receiverUids() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('receiver_uids')));
  }
  public set receiverUids(value: number[]) {
    this._receiverUids = value;
  }
  public resetReceiverUids() {
    this._receiverUids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverUidsInput() {
    return this._receiverUids;
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

  // namespaces - computed: false, optional: true, required: false
  private _namespaces = new DataTencentcloudMonitorAlarmHistoryNamespacesList(this, "namespaces", false);
  public get namespaces() {
    return this._namespaces;
  }
  public putNamespaces(value: DataTencentcloudMonitorAlarmHistoryNamespaces[] | cdktf.IResolvable) {
    this._namespaces.internalValue = value;
  }
  public resetNamespaces() {
    this._namespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alarmLevels),
      alarm_object: cdktf.stringToTerraform(this._alarmObject),
      alarm_status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alarmStatus),
      content: cdktf.stringToTerraform(this._content),
      end_time: cdktf.numberToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      instance_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._instanceGroupIds),
      metric_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._metricNames),
      module: cdktf.stringToTerraform(this._module),
      monitor_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorTypes),
      order: cdktf.stringToTerraform(this._order),
      policy_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyIds),
      policy_name: cdktf.stringToTerraform(this._policyName),
      project_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._projectIds),
      receiver_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._receiverGroups),
      receiver_uids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._receiverUids),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      start_time: cdktf.numberToTerraform(this._startTime),
      namespaces: cdktf.listMapper(dataTencentcloudMonitorAlarmHistoryNamespacesToTerraform, true)(this._namespaces.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_levels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alarmLevels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alarm_object: {
        value: cdktf.stringToHclTerraform(this._alarmObject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alarm_status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alarmStatus),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      monitor_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitorTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
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
      receiver_groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._receiverGroups),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      receiver_uids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._receiverUids),
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
      namespaces: {
        value: cdktf.listMapperHcl(dataTencentcloudMonitorAlarmHistoryNamespacesToHclTerraform, true)(this._namespaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudMonitorAlarmHistoryNamespacesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
