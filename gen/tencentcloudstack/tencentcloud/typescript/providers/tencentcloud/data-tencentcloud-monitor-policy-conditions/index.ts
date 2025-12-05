// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/monitor_policy_conditions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMonitorPolicyConditionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/monitor_policy_conditions#id DataTencentcloudMonitorPolicyConditions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the policy name, support partial matching, eg:`Cloud Virtual Machine`,`Virtual`,`Cloud Load Banlancer-Private CLB Listener`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/monitor_policy_conditions#name DataTencentcloudMonitorPolicyConditions#name}
  */
  readonly name?: string;
  /**
  * Used to store results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/monitor_policy_conditions#result_output_file DataTencentcloudMonitorPolicyConditions#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudMonitorPolicyConditionsListEventMetrics {
}

export function dataTencentcloudMonitorPolicyConditionsListEventMetricsToTerraform(struct?: DataTencentcloudMonitorPolicyConditionsListEventMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorPolicyConditionsListEventMetricsToHclTerraform(struct?: DataTencentcloudMonitorPolicyConditionsListEventMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorPolicyConditionsListEventMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorPolicyConditionsListEventMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorPolicyConditionsListEventMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_id - computed: true, optional: false, required: false
  public get eventId() {
    return this.getNumberAttribute('event_id');
  }

  // event_show_name - computed: true, optional: false, required: false
  public get eventShowName() {
    return this.getStringAttribute('event_show_name');
  }

  // need_recovered - computed: true, optional: false, required: false
  public get needRecovered() {
    return this.getBooleanAttribute('need_recovered');
  }
}

export class DataTencentcloudMonitorPolicyConditionsListEventMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorPolicyConditionsListEventMetricsOutputReference {
    return new DataTencentcloudMonitorPolicyConditionsListEventMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorPolicyConditionsListMetrics {
}

export function dataTencentcloudMonitorPolicyConditionsListMetricsToTerraform(struct?: DataTencentcloudMonitorPolicyConditionsListMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorPolicyConditionsListMetricsToHclTerraform(struct?: DataTencentcloudMonitorPolicyConditionsListMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorPolicyConditionsListMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorPolicyConditionsListMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorPolicyConditionsListMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // calc_type_keys - computed: true, optional: false, required: false
  public get calcTypeKeys() {
    return this.getNumberListAttribute('calc_type_keys');
  }

  // calc_type_need - computed: true, optional: false, required: false
  public get calcTypeNeed() {
    return this.getBooleanAttribute('calc_type_need');
  }

  // calc_value_default - computed: true, optional: false, required: false
  public get calcValueDefault() {
    return this.getStringAttribute('calc_value_default');
  }

  // calc_value_fixed - computed: true, optional: false, required: false
  public get calcValueFixed() {
    return this.getStringAttribute('calc_value_fixed');
  }

  // calc_value_max - computed: true, optional: false, required: false
  public get calcValueMax() {
    return this.getStringAttribute('calc_value_max');
  }

  // calc_value_min - computed: true, optional: false, required: false
  public get calcValueMin() {
    return this.getStringAttribute('calc_value_min');
  }

  // calc_value_need - computed: true, optional: false, required: false
  public get calcValueNeed() {
    return this.getBooleanAttribute('calc_value_need');
  }

  // continue_time_default - computed: true, optional: false, required: false
  public get continueTimeDefault() {
    return this.getNumberAttribute('continue_time_default');
  }

  // continue_time_keys - computed: true, optional: false, required: false
  public get continueTimeKeys() {
    return this.getNumberListAttribute('continue_time_keys');
  }

  // continue_time_need - computed: true, optional: false, required: false
  public get continueTimeNeed() {
    return this.getBooleanAttribute('continue_time_need');
  }

  // metric_id - computed: true, optional: false, required: false
  public get metricId() {
    return this.getNumberAttribute('metric_id');
  }

  // metric_show_name - computed: true, optional: false, required: false
  public get metricShowName() {
    return this.getStringAttribute('metric_show_name');
  }

  // metric_unit - computed: true, optional: false, required: false
  public get metricUnit() {
    return this.getStringAttribute('metric_unit');
  }

  // period_default - computed: true, optional: false, required: false
  public get periodDefault() {
    return this.getNumberAttribute('period_default');
  }

  // period_keys - computed: true, optional: false, required: false
  public get periodKeys() {
    return this.getNumberListAttribute('period_keys');
  }

  // period_need - computed: true, optional: false, required: false
  public get periodNeed() {
    return this.getBooleanAttribute('period_need');
  }

  // period_num_default - computed: true, optional: false, required: false
  public get periodNumDefault() {
    return this.getNumberAttribute('period_num_default');
  }

  // period_num_keys - computed: true, optional: false, required: false
  public get periodNumKeys() {
    return this.getNumberListAttribute('period_num_keys');
  }

  // period_num_need - computed: true, optional: false, required: false
  public get periodNumNeed() {
    return this.getBooleanAttribute('period_num_need');
  }

  // stat_type_p10 - computed: true, optional: false, required: false
  public get statTypeP10() {
    return this.getStringAttribute('stat_type_p10');
  }

  // stat_type_p1800 - computed: true, optional: false, required: false
  public get statTypeP1800() {
    return this.getStringAttribute('stat_type_p1800');
  }

  // stat_type_p300 - computed: true, optional: false, required: false
  public get statTypeP300() {
    return this.getStringAttribute('stat_type_p300');
  }

  // stat_type_p3600 - computed: true, optional: false, required: false
  public get statTypeP3600() {
    return this.getStringAttribute('stat_type_p3600');
  }

  // stat_type_p5 - computed: true, optional: false, required: false
  public get statTypeP5() {
    return this.getStringAttribute('stat_type_p5');
  }

  // stat_type_p60 - computed: true, optional: false, required: false
  public get statTypeP60() {
    return this.getStringAttribute('stat_type_p60');
  }

  // stat_type_p600 - computed: true, optional: false, required: false
  public get statTypeP600() {
    return this.getStringAttribute('stat_type_p600');
  }

  // stat_type_p86400 - computed: true, optional: false, required: false
  public get statTypeP86400() {
    return this.getStringAttribute('stat_type_p86400');
  }
}

export class DataTencentcloudMonitorPolicyConditionsListMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorPolicyConditionsListMetricsOutputReference {
    return new DataTencentcloudMonitorPolicyConditionsListMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorPolicyConditionsListStruct {
}

export function dataTencentcloudMonitorPolicyConditionsListStructToTerraform(struct?: DataTencentcloudMonitorPolicyConditionsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorPolicyConditionsListStructToHclTerraform(struct?: DataTencentcloudMonitorPolicyConditionsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorPolicyConditionsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorPolicyConditionsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorPolicyConditionsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_metrics - computed: true, optional: false, required: false
  private _eventMetrics = new DataTencentcloudMonitorPolicyConditionsListEventMetricsList(this, "event_metrics", false);
  public get eventMetrics() {
    return this._eventMetrics;
  }

  // is_support_multi_region - computed: true, optional: false, required: false
  public get isSupportMultiRegion() {
    return this.getBooleanAttribute('is_support_multi_region');
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataTencentcloudMonitorPolicyConditionsListMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_view_name - computed: true, optional: false, required: false
  public get policyViewName() {
    return this.getStringAttribute('policy_view_name');
  }

  // support_regions - computed: true, optional: false, required: false
  public get supportRegions() {
    return this.getListAttribute('support_regions');
  }
}

export class DataTencentcloudMonitorPolicyConditionsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorPolicyConditionsListStructOutputReference {
    return new DataTencentcloudMonitorPolicyConditionsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/monitor_policy_conditions tencentcloud_monitor_policy_conditions}
*/
export class DataTencentcloudMonitorPolicyConditions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_policy_conditions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMonitorPolicyConditions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMonitorPolicyConditions to import
  * @param importFromId The id of the existing DataTencentcloudMonitorPolicyConditions that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/monitor_policy_conditions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMonitorPolicyConditions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_policy_conditions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/monitor_policy_conditions tencentcloud_monitor_policy_conditions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMonitorPolicyConditionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMonitorPolicyConditionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_policy_conditions',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // list - computed: true, optional: false, required: false
  private _list = new DataTencentcloudMonitorPolicyConditionsListStructList(this, "list", false);
  public get list() {
    return this._list;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
