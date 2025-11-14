// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MeteringComputationScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#compartment_id MeteringComputationSchedule#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#defined_tags MeteringComputationSchedule#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#description MeteringComputationSchedule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#freeform_tags MeteringComputationSchedule#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#id MeteringComputationSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#name MeteringComputationSchedule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#output_file_format MeteringComputationSchedule#output_file_format}
  */
  readonly outputFileFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#saved_report_id MeteringComputationSchedule#saved_report_id}
  */
  readonly savedReportId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#schedule_recurrences MeteringComputationSchedule#schedule_recurrences}
  */
  readonly scheduleRecurrences: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#time_scheduled MeteringComputationSchedule#time_scheduled}
  */
  readonly timeScheduled: string;
  /**
  * query_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#query_properties MeteringComputationSchedule#query_properties}
  */
  readonly queryProperties?: MeteringComputationScheduleQueryProperties;
  /**
  * result_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#result_location MeteringComputationSchedule#result_location}
  */
  readonly resultLocation: MeteringComputationScheduleResultLocation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#timeouts MeteringComputationSchedule#timeouts}
  */
  readonly timeouts?: MeteringComputationScheduleTimeouts;
}
export interface MeteringComputationScheduleQueryPropertiesDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#date_range_type MeteringComputationSchedule#date_range_type}
  */
  readonly dateRangeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#dynamic_date_range_type MeteringComputationSchedule#dynamic_date_range_type}
  */
  readonly dynamicDateRangeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#time_usage_ended MeteringComputationSchedule#time_usage_ended}
  */
  readonly timeUsageEnded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#time_usage_started MeteringComputationSchedule#time_usage_started}
  */
  readonly timeUsageStarted?: string;
}

export function meteringComputationScheduleQueryPropertiesDateRangeToTerraform(struct?: MeteringComputationScheduleQueryPropertiesDateRangeOutputReference | MeteringComputationScheduleQueryPropertiesDateRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_range_type: cdktf.stringToTerraform(struct!.dateRangeType),
    dynamic_date_range_type: cdktf.stringToTerraform(struct!.dynamicDateRangeType),
    time_usage_ended: cdktf.stringToTerraform(struct!.timeUsageEnded),
    time_usage_started: cdktf.stringToTerraform(struct!.timeUsageStarted),
  }
}


export function meteringComputationScheduleQueryPropertiesDateRangeToHclTerraform(struct?: MeteringComputationScheduleQueryPropertiesDateRangeOutputReference | MeteringComputationScheduleQueryPropertiesDateRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date_range_type: {
      value: cdktf.stringToHclTerraform(struct!.dateRangeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_date_range_type: {
      value: cdktf.stringToHclTerraform(struct!.dynamicDateRangeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_usage_ended: {
      value: cdktf.stringToHclTerraform(struct!.timeUsageEnded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_usage_started: {
      value: cdktf.stringToHclTerraform(struct!.timeUsageStarted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeteringComputationScheduleQueryPropertiesDateRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MeteringComputationScheduleQueryPropertiesDateRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateRangeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRangeType = this._dateRangeType;
    }
    if (this._dynamicDateRangeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicDateRangeType = this._dynamicDateRangeType;
    }
    if (this._timeUsageEnded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUsageEnded = this._timeUsageEnded;
    }
    if (this._timeUsageStarted !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUsageStarted = this._timeUsageStarted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationScheduleQueryPropertiesDateRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateRangeType = undefined;
      this._dynamicDateRangeType = undefined;
      this._timeUsageEnded = undefined;
      this._timeUsageStarted = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateRangeType = value.dateRangeType;
      this._dynamicDateRangeType = value.dynamicDateRangeType;
      this._timeUsageEnded = value.timeUsageEnded;
      this._timeUsageStarted = value.timeUsageStarted;
    }
  }

  // date_range_type - computed: false, optional: false, required: true
  private _dateRangeType?: string; 
  public get dateRangeType() {
    return this.getStringAttribute('date_range_type');
  }
  public set dateRangeType(value: string) {
    this._dateRangeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeTypeInput() {
    return this._dateRangeType;
  }

  // dynamic_date_range_type - computed: true, optional: true, required: false
  private _dynamicDateRangeType?: string; 
  public get dynamicDateRangeType() {
    return this.getStringAttribute('dynamic_date_range_type');
  }
  public set dynamicDateRangeType(value: string) {
    this._dynamicDateRangeType = value;
  }
  public resetDynamicDateRangeType() {
    this._dynamicDateRangeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicDateRangeTypeInput() {
    return this._dynamicDateRangeType;
  }

  // time_usage_ended - computed: true, optional: true, required: false
  private _timeUsageEnded?: string; 
  public get timeUsageEnded() {
    return this.getStringAttribute('time_usage_ended');
  }
  public set timeUsageEnded(value: string) {
    this._timeUsageEnded = value;
  }
  public resetTimeUsageEnded() {
    this._timeUsageEnded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUsageEndedInput() {
    return this._timeUsageEnded;
  }

  // time_usage_started - computed: true, optional: true, required: false
  private _timeUsageStarted?: string; 
  public get timeUsageStarted() {
    return this.getStringAttribute('time_usage_started');
  }
  public set timeUsageStarted(value: string) {
    this._timeUsageStarted = value;
  }
  public resetTimeUsageStarted() {
    this._timeUsageStarted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUsageStartedInput() {
    return this._timeUsageStarted;
  }
}
export interface MeteringComputationScheduleQueryPropertiesGroupByTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#key MeteringComputationSchedule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#namespace MeteringComputationSchedule#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#value MeteringComputationSchedule#value}
  */
  readonly value?: string;
}

export function meteringComputationScheduleQueryPropertiesGroupByTagToTerraform(struct?: MeteringComputationScheduleQueryPropertiesGroupByTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function meteringComputationScheduleQueryPropertiesGroupByTagToHclTerraform(struct?: MeteringComputationScheduleQueryPropertiesGroupByTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MeteringComputationScheduleQueryPropertiesGroupByTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationScheduleQueryPropertiesGroupByTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._namespace = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._namespace = value.namespace;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MeteringComputationScheduleQueryPropertiesGroupByTagList extends cdktf.ComplexList {
  public internalValue? : MeteringComputationScheduleQueryPropertiesGroupByTag[] | cdktf.IResolvable

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
  public get(index: number): MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference {
    return new MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MeteringComputationScheduleQueryProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#compartment_depth MeteringComputationSchedule#compartment_depth}
  */
  readonly compartmentDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#filter MeteringComputationSchedule#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#granularity MeteringComputationSchedule#granularity}
  */
  readonly granularity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#group_by MeteringComputationSchedule#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#is_aggregate_by_time MeteringComputationSchedule#is_aggregate_by_time}
  */
  readonly isAggregateByTime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#query_type MeteringComputationSchedule#query_type}
  */
  readonly queryType?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#date_range MeteringComputationSchedule#date_range}
  */
  readonly dateRange: MeteringComputationScheduleQueryPropertiesDateRange;
  /**
  * group_by_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#group_by_tag MeteringComputationSchedule#group_by_tag}
  */
  readonly groupByTag?: MeteringComputationScheduleQueryPropertiesGroupByTag[] | cdktf.IResolvable;
}

export function meteringComputationScheduleQueryPropertiesToTerraform(struct?: MeteringComputationScheduleQueryPropertiesOutputReference | MeteringComputationScheduleQueryProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_depth: cdktf.numberToTerraform(struct!.compartmentDepth),
    filter: cdktf.stringToTerraform(struct!.filter),
    granularity: cdktf.stringToTerraform(struct!.granularity),
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    is_aggregate_by_time: cdktf.booleanToTerraform(struct!.isAggregateByTime),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    date_range: meteringComputationScheduleQueryPropertiesDateRangeToTerraform(struct!.dateRange),
    group_by_tag: cdktf.listMapper(meteringComputationScheduleQueryPropertiesGroupByTagToTerraform, true)(struct!.groupByTag),
  }
}


export function meteringComputationScheduleQueryPropertiesToHclTerraform(struct?: MeteringComputationScheduleQueryPropertiesOutputReference | MeteringComputationScheduleQueryProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_depth: {
      value: cdktf.numberToHclTerraform(struct!.compartmentDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    granularity: {
      value: cdktf.stringToHclTerraform(struct!.granularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_aggregate_by_time: {
      value: cdktf.booleanToHclTerraform(struct!.isAggregateByTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_type: {
      value: cdktf.stringToHclTerraform(struct!.queryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: meteringComputationScheduleQueryPropertiesDateRangeToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "MeteringComputationScheduleQueryPropertiesDateRangeList",
    },
    group_by_tag: {
      value: cdktf.listMapperHcl(meteringComputationScheduleQueryPropertiesGroupByTagToHclTerraform, true)(struct!.groupByTag),
      isBlock: true,
      type: "list",
      storageClassType: "MeteringComputationScheduleQueryPropertiesGroupByTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeteringComputationScheduleQueryPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MeteringComputationScheduleQueryProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentDepth = this._compartmentDepth;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._granularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.granularity = this._granularity;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._isAggregateByTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAggregateByTime = this._isAggregateByTime;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    if (this._groupByTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByTag = this._groupByTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationScheduleQueryProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentDepth = undefined;
      this._filter = undefined;
      this._granularity = undefined;
      this._groupBy = undefined;
      this._isAggregateByTime = undefined;
      this._queryType = undefined;
      this._dateRange.internalValue = undefined;
      this._groupByTag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentDepth = value.compartmentDepth;
      this._filter = value.filter;
      this._granularity = value.granularity;
      this._groupBy = value.groupBy;
      this._isAggregateByTime = value.isAggregateByTime;
      this._queryType = value.queryType;
      this._dateRange.internalValue = value.dateRange;
      this._groupByTag.internalValue = value.groupByTag;
    }
  }

  // compartment_depth - computed: true, optional: true, required: false
  private _compartmentDepth?: number; 
  public get compartmentDepth() {
    return this.getNumberAttribute('compartment_depth');
  }
  public set compartmentDepth(value: number) {
    this._compartmentDepth = value;
  }
  public resetCompartmentDepth() {
    this._compartmentDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentDepthInput() {
    return this._compartmentDepth;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // granularity - computed: false, optional: false, required: true
  private _granularity?: string; 
  public get granularity() {
    return this.getStringAttribute('granularity');
  }
  public set granularity(value: string) {
    this._granularity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
  }

  // group_by - computed: true, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // is_aggregate_by_time - computed: true, optional: true, required: false
  private _isAggregateByTime?: boolean | cdktf.IResolvable; 
  public get isAggregateByTime() {
    return this.getBooleanAttribute('is_aggregate_by_time');
  }
  public set isAggregateByTime(value: boolean | cdktf.IResolvable) {
    this._isAggregateByTime = value;
  }
  public resetIsAggregateByTime() {
    this._isAggregateByTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAggregateByTimeInput() {
    return this._isAggregateByTime;
  }

  // query_type - computed: true, optional: true, required: false
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  public resetQueryType() {
    this._queryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // date_range - computed: false, optional: false, required: true
  private _dateRange = new MeteringComputationScheduleQueryPropertiesDateRangeOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: MeteringComputationScheduleQueryPropertiesDateRange) {
    this._dateRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }

  // group_by_tag - computed: false, optional: true, required: false
  private _groupByTag = new MeteringComputationScheduleQueryPropertiesGroupByTagList(this, "group_by_tag", false);
  public get groupByTag() {
    return this._groupByTag;
  }
  public putGroupByTag(value: MeteringComputationScheduleQueryPropertiesGroupByTag[] | cdktf.IResolvable) {
    this._groupByTag.internalValue = value;
  }
  public resetGroupByTag() {
    this._groupByTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByTagInput() {
    return this._groupByTag.internalValue;
  }
}
export interface MeteringComputationScheduleResultLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#bucket MeteringComputationSchedule#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#location_type MeteringComputationSchedule#location_type}
  */
  readonly locationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#namespace MeteringComputationSchedule#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#region MeteringComputationSchedule#region}
  */
  readonly region: string;
}

export function meteringComputationScheduleResultLocationToTerraform(struct?: MeteringComputationScheduleResultLocationOutputReference | MeteringComputationScheduleResultLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    location_type: cdktf.stringToTerraform(struct!.locationType),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function meteringComputationScheduleResultLocationToHclTerraform(struct?: MeteringComputationScheduleResultLocationOutputReference | MeteringComputationScheduleResultLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_type: {
      value: cdktf.stringToHclTerraform(struct!.locationType),
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeteringComputationScheduleResultLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MeteringComputationScheduleResultLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._locationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationType = this._locationType;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationScheduleResultLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._locationType = undefined;
      this._namespace = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._locationType = value.locationType;
      this._namespace = value.namespace;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // location_type - computed: false, optional: false, required: true
  private _locationType?: string; 
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string) {
    this._locationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MeteringComputationScheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#create MeteringComputationSchedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#delete MeteringComputationSchedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#update MeteringComputationSchedule#update}
  */
  readonly update?: string;
}

export function meteringComputationScheduleTimeoutsToTerraform(struct?: MeteringComputationScheduleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function meteringComputationScheduleTimeoutsToHclTerraform(struct?: MeteringComputationScheduleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeteringComputationScheduleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MeteringComputationScheduleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationScheduleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule oci_metering_computation_schedule}
*/
export class MeteringComputationSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_metering_computation_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MeteringComputationSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MeteringComputationSchedule to import
  * @param importFromId The id of the existing MeteringComputationSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MeteringComputationSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_metering_computation_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/metering_computation_schedule oci_metering_computation_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MeteringComputationScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: MeteringComputationScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_metering_computation_schedule',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._name = config.name;
    this._outputFileFormat = config.outputFileFormat;
    this._savedReportId = config.savedReportId;
    this._scheduleRecurrences = config.scheduleRecurrences;
    this._timeScheduled = config.timeScheduled;
    this._queryProperties.internalValue = config.queryProperties;
    this._resultLocation.internalValue = config.resultLocation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // output_file_format - computed: true, optional: true, required: false
  private _outputFileFormat?: string; 
  public get outputFileFormat() {
    return this.getStringAttribute('output_file_format');
  }
  public set outputFileFormat(value: string) {
    this._outputFileFormat = value;
  }
  public resetOutputFileFormat() {
    this._outputFileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileFormatInput() {
    return this._outputFileFormat;
  }

  // saved_report_id - computed: true, optional: true, required: false
  private _savedReportId?: string; 
  public get savedReportId() {
    return this.getStringAttribute('saved_report_id');
  }
  public set savedReportId(value: string) {
    this._savedReportId = value;
  }
  public resetSavedReportId() {
    this._savedReportId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedReportIdInput() {
    return this._savedReportId;
  }

  // schedule_recurrences - computed: false, optional: false, required: true
  private _scheduleRecurrences?: string; 
  public get scheduleRecurrences() {
    return this.getStringAttribute('schedule_recurrences');
  }
  public set scheduleRecurrences(value: string) {
    this._scheduleRecurrences = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleRecurrencesInput() {
    return this._scheduleRecurrences;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_next_run - computed: true, optional: false, required: false
  public get timeNextRun() {
    return this.getStringAttribute('time_next_run');
  }

  // time_scheduled - computed: false, optional: false, required: true
  private _timeScheduled?: string; 
  public get timeScheduled() {
    return this.getStringAttribute('time_scheduled');
  }
  public set timeScheduled(value: string) {
    this._timeScheduled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeScheduledInput() {
    return this._timeScheduled;
  }

  // query_properties - computed: false, optional: true, required: false
  private _queryProperties = new MeteringComputationScheduleQueryPropertiesOutputReference(this, "query_properties");
  public get queryProperties() {
    return this._queryProperties;
  }
  public putQueryProperties(value: MeteringComputationScheduleQueryProperties) {
    this._queryProperties.internalValue = value;
  }
  public resetQueryProperties() {
    this._queryProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPropertiesInput() {
    return this._queryProperties.internalValue;
  }

  // result_location - computed: false, optional: false, required: true
  private _resultLocation = new MeteringComputationScheduleResultLocationOutputReference(this, "result_location");
  public get resultLocation() {
    return this._resultLocation;
  }
  public putResultLocation(value: MeteringComputationScheduleResultLocation) {
    this._resultLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultLocationInput() {
    return this._resultLocation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MeteringComputationScheduleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MeteringComputationScheduleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      output_file_format: cdktf.stringToTerraform(this._outputFileFormat),
      saved_report_id: cdktf.stringToTerraform(this._savedReportId),
      schedule_recurrences: cdktf.stringToTerraform(this._scheduleRecurrences),
      time_scheduled: cdktf.stringToTerraform(this._timeScheduled),
      query_properties: meteringComputationScheduleQueryPropertiesToTerraform(this._queryProperties.internalValue),
      result_location: meteringComputationScheduleResultLocationToTerraform(this._resultLocation.internalValue),
      timeouts: meteringComputationScheduleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      output_file_format: {
        value: cdktf.stringToHclTerraform(this._outputFileFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saved_report_id: {
        value: cdktf.stringToHclTerraform(this._savedReportId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_recurrences: {
        value: cdktf.stringToHclTerraform(this._scheduleRecurrences),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_scheduled: {
        value: cdktf.stringToHclTerraform(this._timeScheduled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_properties: {
        value: meteringComputationScheduleQueryPropertiesToHclTerraform(this._queryProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MeteringComputationScheduleQueryPropertiesList",
      },
      result_location: {
        value: meteringComputationScheduleResultLocationToHclTerraform(this._resultLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MeteringComputationScheduleResultLocationList",
      },
      timeouts: {
        value: meteringComputationScheduleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MeteringComputationScheduleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
