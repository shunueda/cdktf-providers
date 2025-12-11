// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#annotations Monitor#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#bucket_id Monitor#bucket_id}
  */
  readonly bucketId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#collection_id Monitor#collection_id}
  */
  readonly collectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#id Monitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#interval Monitor#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#labels Monitor#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#notification_policy_id Monitor#notification_policy_id}
  */
  readonly notificationPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#slug Monitor#slug}
  */
  readonly slug?: string;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#query Monitor#query}
  */
  readonly query: MonitorQuery;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#schedule Monitor#schedule}
  */
  readonly schedule?: MonitorSchedule;
  /**
  * series_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#series_conditions Monitor#series_conditions}
  */
  readonly seriesConditions: MonitorSeriesConditions;
  /**
  * signal_grouping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#signal_grouping Monitor#signal_grouping}
  */
  readonly signalGrouping?: MonitorSignalGrouping;
}
export interface MonitorQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#graphite_expr Monitor#graphite_expr}
  */
  readonly graphiteExpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#logging_expr Monitor#logging_expr}
  */
  readonly loggingExpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#prometheus_expr Monitor#prometheus_expr}
  */
  readonly prometheusExpr?: string;
}

export function monitorQueryToTerraform(struct?: MonitorQueryOutputReference | MonitorQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    graphite_expr: cdktf.stringToTerraform(struct!.graphiteExpr),
    logging_expr: cdktf.stringToTerraform(struct!.loggingExpr),
    prometheus_expr: cdktf.stringToTerraform(struct!.prometheusExpr),
  }
}


export function monitorQueryToHclTerraform(struct?: MonitorQueryOutputReference | MonitorQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    graphite_expr: {
      value: cdktf.stringToHclTerraform(struct!.graphiteExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_expr: {
      value: cdktf.stringToHclTerraform(struct!.loggingExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheus_expr: {
      value: cdktf.stringToHclTerraform(struct!.prometheusExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._graphiteExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphiteExpr = this._graphiteExpr;
    }
    if (this._loggingExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingExpr = this._loggingExpr;
    }
    if (this._prometheusExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusExpr = this._prometheusExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._graphiteExpr = undefined;
      this._loggingExpr = undefined;
      this._prometheusExpr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._graphiteExpr = value.graphiteExpr;
      this._loggingExpr = value.loggingExpr;
      this._prometheusExpr = value.prometheusExpr;
    }
  }

  // graphite_expr - computed: false, optional: true, required: false
  private _graphiteExpr?: string; 
  public get graphiteExpr() {
    return this.getStringAttribute('graphite_expr');
  }
  public set graphiteExpr(value: string) {
    this._graphiteExpr = value;
  }
  public resetGraphiteExpr() {
    this._graphiteExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphiteExprInput() {
    return this._graphiteExpr;
  }

  // logging_expr - computed: false, optional: true, required: false
  private _loggingExpr?: string; 
  public get loggingExpr() {
    return this.getStringAttribute('logging_expr');
  }
  public set loggingExpr(value: string) {
    this._loggingExpr = value;
  }
  public resetLoggingExpr() {
    this._loggingExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingExprInput() {
    return this._loggingExpr;
  }

  // prometheus_expr - computed: false, optional: true, required: false
  private _prometheusExpr?: string; 
  public get prometheusExpr() {
    return this.getStringAttribute('prometheus_expr');
  }
  public set prometheusExpr(value: string) {
    this._prometheusExpr = value;
  }
  public resetPrometheusExpr() {
    this._prometheusExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusExprInput() {
    return this._prometheusExpr;
  }
}
export interface MonitorScheduleRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#day Monitor#day}
  */
  readonly day: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#end Monitor#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#start Monitor#start}
  */
  readonly start: string;
}

export function monitorScheduleRangeToTerraform(struct?: MonitorScheduleRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function monitorScheduleRangeToHclTerraform(struct?: MonitorScheduleRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorScheduleRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorScheduleRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorScheduleRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class MonitorScheduleRangeList extends cdktf.ComplexList {
  public internalValue? : MonitorScheduleRange[] | cdktf.IResolvable

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
  public get(index: number): MonitorScheduleRangeOutputReference {
    return new MonitorScheduleRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#timezone Monitor#timezone}
  */
  readonly timezone: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#range Monitor#range}
  */
  readonly range?: MonitorScheduleRange[] | cdktf.IResolvable;
}

export function monitorScheduleToTerraform(struct?: MonitorScheduleOutputReference | MonitorSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timezone: cdktf.stringToTerraform(struct!.timezone),
    range: cdktf.listMapper(monitorScheduleRangeToTerraform, true)(struct!.range),
  }
}


export function monitorScheduleToHclTerraform(struct?: MonitorScheduleOutputReference | MonitorSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.listMapperHcl(monitorScheduleRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "set",
      storageClassType: "MonitorScheduleRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timezone = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timezone = value.timezone;
      this._range.internalValue = value.range;
    }
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // range - computed: false, optional: true, required: false
  private _range = new MonitorScheduleRangeList(this, "range", true);
  public get range() {
    return this._range;
  }
  public putRange(value: MonitorScheduleRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface MonitorSeriesConditionsCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#op Monitor#op}
  */
  readonly op: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#resolve_sustain Monitor#resolve_sustain}
  */
  readonly resolveSustain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#severity Monitor#severity}
  */
  readonly severity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#sustain Monitor#sustain}
  */
  readonly sustain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#value Monitor#value}
  */
  readonly value?: number;
}

export function monitorSeriesConditionsConditionToTerraform(struct?: MonitorSeriesConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    resolve_sustain: cdktf.stringToTerraform(struct!.resolveSustain),
    severity: cdktf.stringToTerraform(struct!.severity),
    sustain: cdktf.stringToTerraform(struct!.sustain),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function monitorSeriesConditionsConditionToHclTerraform(struct?: MonitorSeriesConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolve_sustain: {
      value: cdktf.stringToHclTerraform(struct!.resolveSustain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sustain: {
      value: cdktf.stringToHclTerraform(struct!.sustain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorSeriesConditionsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorSeriesConditionsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._resolveSustain !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveSustain = this._resolveSustain;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._sustain !== undefined) {
      hasAnyValues = true;
      internalValueResult.sustain = this._sustain;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorSeriesConditionsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._resolveSustain = undefined;
      this._severity = undefined;
      this._sustain = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._resolveSustain = value.resolveSustain;
      this._severity = value.severity;
      this._sustain = value.sustain;
      this._value = value.value;
    }
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // resolve_sustain - computed: false, optional: true, required: false
  private _resolveSustain?: string; 
  public get resolveSustain() {
    return this.getStringAttribute('resolve_sustain');
  }
  public set resolveSustain(value: string) {
    this._resolveSustain = value;
  }
  public resetResolveSustain() {
    this._resolveSustain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveSustainInput() {
    return this._resolveSustain;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // sustain - computed: false, optional: true, required: false
  private _sustain?: string; 
  public get sustain() {
    return this.getStringAttribute('sustain');
  }
  public set sustain(value: string) {
    this._sustain = value;
  }
  public resetSustain() {
    this._sustain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sustainInput() {
    return this._sustain;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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

export class MonitorSeriesConditionsConditionList extends cdktf.ComplexList {
  public internalValue? : MonitorSeriesConditionsCondition[] | cdktf.IResolvable

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
  public get(index: number): MonitorSeriesConditionsConditionOutputReference {
    return new MonitorSeriesConditionsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorSeriesConditionsOverrideCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#op Monitor#op}
  */
  readonly op: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#resolve_sustain Monitor#resolve_sustain}
  */
  readonly resolveSustain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#severity Monitor#severity}
  */
  readonly severity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#sustain Monitor#sustain}
  */
  readonly sustain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#value Monitor#value}
  */
  readonly value?: number;
}

export function monitorSeriesConditionsOverrideConditionToTerraform(struct?: MonitorSeriesConditionsOverrideCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    resolve_sustain: cdktf.stringToTerraform(struct!.resolveSustain),
    severity: cdktf.stringToTerraform(struct!.severity),
    sustain: cdktf.stringToTerraform(struct!.sustain),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function monitorSeriesConditionsOverrideConditionToHclTerraform(struct?: MonitorSeriesConditionsOverrideCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolve_sustain: {
      value: cdktf.stringToHclTerraform(struct!.resolveSustain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sustain: {
      value: cdktf.stringToHclTerraform(struct!.sustain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorSeriesConditionsOverrideConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorSeriesConditionsOverrideCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._resolveSustain !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveSustain = this._resolveSustain;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._sustain !== undefined) {
      hasAnyValues = true;
      internalValueResult.sustain = this._sustain;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorSeriesConditionsOverrideCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._resolveSustain = undefined;
      this._severity = undefined;
      this._sustain = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._resolveSustain = value.resolveSustain;
      this._severity = value.severity;
      this._sustain = value.sustain;
      this._value = value.value;
    }
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // resolve_sustain - computed: false, optional: true, required: false
  private _resolveSustain?: string; 
  public get resolveSustain() {
    return this.getStringAttribute('resolve_sustain');
  }
  public set resolveSustain(value: string) {
    this._resolveSustain = value;
  }
  public resetResolveSustain() {
    this._resolveSustain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveSustainInput() {
    return this._resolveSustain;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // sustain - computed: false, optional: true, required: false
  private _sustain?: string; 
  public get sustain() {
    return this.getStringAttribute('sustain');
  }
  public set sustain(value: string) {
    this._sustain = value;
  }
  public resetSustain() {
    this._sustain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sustainInput() {
    return this._sustain;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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

export class MonitorSeriesConditionsOverrideConditionList extends cdktf.ComplexList {
  public internalValue? : MonitorSeriesConditionsOverrideCondition[] | cdktf.IResolvable

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
  public get(index: number): MonitorSeriesConditionsOverrideConditionOutputReference {
    return new MonitorSeriesConditionsOverrideConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorSeriesConditionsOverrideLabelMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#type Monitor#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#value Monitor#value}
  */
  readonly value: string;
}

export function monitorSeriesConditionsOverrideLabelMatcherToTerraform(struct?: MonitorSeriesConditionsOverrideLabelMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function monitorSeriesConditionsOverrideLabelMatcherToHclTerraform(struct?: MonitorSeriesConditionsOverrideLabelMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class MonitorSeriesConditionsOverrideLabelMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorSeriesConditionsOverrideLabelMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorSeriesConditionsOverrideLabelMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MonitorSeriesConditionsOverrideLabelMatcherList extends cdktf.ComplexList {
  public internalValue? : MonitorSeriesConditionsOverrideLabelMatcher[] | cdktf.IResolvable

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
  public get(index: number): MonitorSeriesConditionsOverrideLabelMatcherOutputReference {
    return new MonitorSeriesConditionsOverrideLabelMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorSeriesConditionsOverride {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#condition Monitor#condition}
  */
  readonly condition: MonitorSeriesConditionsOverrideCondition[] | cdktf.IResolvable;
  /**
  * label_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#label_matcher Monitor#label_matcher}
  */
  readonly labelMatcher: MonitorSeriesConditionsOverrideLabelMatcher[] | cdktf.IResolvable;
}

export function monitorSeriesConditionsOverrideToTerraform(struct?: MonitorSeriesConditionsOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(monitorSeriesConditionsOverrideConditionToTerraform, true)(struct!.condition),
    label_matcher: cdktf.listMapper(monitorSeriesConditionsOverrideLabelMatcherToTerraform, true)(struct!.labelMatcher),
  }
}


export function monitorSeriesConditionsOverrideToHclTerraform(struct?: MonitorSeriesConditionsOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(monitorSeriesConditionsOverrideConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "set",
      storageClassType: "MonitorSeriesConditionsOverrideConditionList",
    },
    label_matcher: {
      value: cdktf.listMapperHcl(monitorSeriesConditionsOverrideLabelMatcherToHclTerraform, true)(struct!.labelMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorSeriesConditionsOverrideLabelMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorSeriesConditionsOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorSeriesConditionsOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._labelMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelMatcher = this._labelMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorSeriesConditionsOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._labelMatcher.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._labelMatcher.internalValue = value.labelMatcher;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new MonitorSeriesConditionsOverrideConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: MonitorSeriesConditionsOverrideCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // label_matcher - computed: false, optional: false, required: true
  private _labelMatcher = new MonitorSeriesConditionsOverrideLabelMatcherList(this, "label_matcher", false);
  public get labelMatcher() {
    return this._labelMatcher;
  }
  public putLabelMatcher(value: MonitorSeriesConditionsOverrideLabelMatcher[] | cdktf.IResolvable) {
    this._labelMatcher.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatcherInput() {
    return this._labelMatcher.internalValue;
  }
}

export class MonitorSeriesConditionsOverrideList extends cdktf.ComplexList {
  public internalValue? : MonitorSeriesConditionsOverride[] | cdktf.IResolvable

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
  public get(index: number): MonitorSeriesConditionsOverrideOutputReference {
    return new MonitorSeriesConditionsOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorSeriesConditions {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#condition Monitor#condition}
  */
  readonly condition: MonitorSeriesConditionsCondition[] | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#override Monitor#override}
  */
  readonly override?: MonitorSeriesConditionsOverride[] | cdktf.IResolvable;
}

export function monitorSeriesConditionsToTerraform(struct?: MonitorSeriesConditionsOutputReference | MonitorSeriesConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(monitorSeriesConditionsConditionToTerraform, true)(struct!.condition),
    override: cdktf.listMapper(monitorSeriesConditionsOverrideToTerraform, true)(struct!.override),
  }
}


export function monitorSeriesConditionsToHclTerraform(struct?: MonitorSeriesConditionsOutputReference | MonitorSeriesConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(monitorSeriesConditionsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "set",
      storageClassType: "MonitorSeriesConditionsConditionList",
    },
    override: {
      value: cdktf.listMapperHcl(monitorSeriesConditionsOverrideToHclTerraform, true)(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorSeriesConditionsOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorSeriesConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorSeriesConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorSeriesConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition.internalValue = undefined;
      this._override.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition.internalValue = value.condition;
      this._override.internalValue = value.override;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new MonitorSeriesConditionsConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: MonitorSeriesConditionsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // override - computed: false, optional: true, required: false
  private _override = new MonitorSeriesConditionsOverrideList(this, "override", false);
  public get override() {
    return this._override;
  }
  public putOverride(value: MonitorSeriesConditionsOverride[] | cdktf.IResolvable) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }
}
export interface MonitorSignalGrouping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#label_names Monitor#label_names}
  */
  readonly labelNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#signal_per_series Monitor#signal_per_series}
  */
  readonly signalPerSeries?: boolean | cdktf.IResolvable;
}

export function monitorSignalGroupingToTerraform(struct?: MonitorSignalGroupingOutputReference | MonitorSignalGrouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labelNames),
    signal_per_series: cdktf.booleanToTerraform(struct!.signalPerSeries),
  }
}


export function monitorSignalGroupingToHclTerraform(struct?: MonitorSignalGroupingOutputReference | MonitorSignalGrouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labelNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    signal_per_series: {
      value: cdktf.booleanToHclTerraform(struct!.signalPerSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorSignalGroupingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorSignalGrouping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelNames = this._labelNames;
    }
    if (this._signalPerSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.signalPerSeries = this._signalPerSeries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorSignalGrouping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labelNames = undefined;
      this._signalPerSeries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labelNames = value.labelNames;
      this._signalPerSeries = value.signalPerSeries;
    }
  }

  // label_names - computed: false, optional: true, required: false
  private _labelNames?: string[]; 
  public get labelNames() {
    return this.getListAttribute('label_names');
  }
  public set labelNames(value: string[]) {
    this._labelNames = value;
  }
  public resetLabelNames() {
    this._labelNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNamesInput() {
    return this._labelNames;
  }

  // signal_per_series - computed: false, optional: true, required: false
  private _signalPerSeries?: boolean | cdktf.IResolvable; 
  public get signalPerSeries() {
    return this.getBooleanAttribute('signal_per_series');
  }
  public set signalPerSeries(value: boolean | cdktf.IResolvable) {
    this._signalPerSeries = value;
  }
  public resetSignalPerSeries() {
    this._signalPerSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalPerSeriesInput() {
    return this._signalPerSeries;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor chronosphere_monitor}
*/
export class Monitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Monitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Monitor to import
  * @param importFromId The id of the existing Monitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Monitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/monitor chronosphere_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_monitor',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.18.0',
        providerVersionConstraint: '1.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._bucketId = config.bucketId;
    this._collectionId = config.collectionId;
    this._id = config.id;
    this._interval = config.interval;
    this._labels = config.labels;
    this._name = config.name;
    this._notificationPolicyId = config.notificationPolicyId;
    this._slug = config.slug;
    this._query.internalValue = config.query;
    this._schedule.internalValue = config.schedule;
    this._seriesConditions.internalValue = config.seriesConditions;
    this._signalGrouping.internalValue = config.signalGrouping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // bucket_id - computed: false, optional: true, required: false
  private _bucketId?: string; 
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }
  public resetBucketId() {
    this._bucketId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
  }

  // collection_id - computed: false, optional: true, required: false
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  public resetCollectionId() {
    this._collectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // notification_policy_id - computed: false, optional: true, required: false
  private _notificationPolicyId?: string; 
  public get notificationPolicyId() {
    return this.getStringAttribute('notification_policy_id');
  }
  public set notificationPolicyId(value: string) {
    this._notificationPolicyId = value;
  }
  public resetNotificationPolicyId() {
    this._notificationPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPolicyIdInput() {
    return this._notificationPolicyId;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // query - computed: false, optional: false, required: true
  private _query = new MonitorQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: MonitorQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new MonitorScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: MonitorSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // series_conditions - computed: false, optional: false, required: true
  private _seriesConditions = new MonitorSeriesConditionsOutputReference(this, "series_conditions");
  public get seriesConditions() {
    return this._seriesConditions;
  }
  public putSeriesConditions(value: MonitorSeriesConditions) {
    this._seriesConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesConditionsInput() {
    return this._seriesConditions.internalValue;
  }

  // signal_grouping - computed: false, optional: true, required: false
  private _signalGrouping = new MonitorSignalGroupingOutputReference(this, "signal_grouping");
  public get signalGrouping() {
    return this._signalGrouping;
  }
  public putSignalGrouping(value: MonitorSignalGrouping) {
    this._signalGrouping.internalValue = value;
  }
  public resetSignalGrouping() {
    this._signalGrouping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalGroupingInput() {
    return this._signalGrouping.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      bucket_id: cdktf.stringToTerraform(this._bucketId),
      collection_id: cdktf.stringToTerraform(this._collectionId),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      notification_policy_id: cdktf.stringToTerraform(this._notificationPolicyId),
      slug: cdktf.stringToTerraform(this._slug),
      query: monitorQueryToTerraform(this._query.internalValue),
      schedule: monitorScheduleToTerraform(this._schedule.internalValue),
      series_conditions: monitorSeriesConditionsToTerraform(this._seriesConditions.internalValue),
      signal_grouping: monitorSignalGroupingToTerraform(this._signalGrouping.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      bucket_id: {
        value: cdktf.stringToHclTerraform(this._bucketId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collection_id: {
        value: cdktf.stringToHclTerraform(this._collectionId),
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
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_policy_id: {
        value: cdktf.stringToHclTerraform(this._notificationPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: monitorQueryToHclTerraform(this._query.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorQueryList",
      },
      schedule: {
        value: monitorScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorScheduleList",
      },
      series_conditions: {
        value: monitorSeriesConditionsToHclTerraform(this._seriesConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorSeriesConditionsList",
      },
      signal_grouping: {
        value: monitorSignalGroupingToHclTerraform(this._signalGrouping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorSignalGroupingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
