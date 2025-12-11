// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TraceMetricsRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#histogram_buckets_seconds TraceMetricsRule#histogram_buckets_seconds}
  */
  readonly histogramBucketsSeconds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#id TraceMetricsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#metric_labels TraceMetricsRule#metric_labels}
  */
  readonly metricLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#metric_name TraceMetricsRule#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#name TraceMetricsRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#slug TraceMetricsRule#slug}
  */
  readonly slug?: string;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#group_by TraceMetricsRule#group_by}
  */
  readonly groupBy?: TraceMetricsRuleGroupBy[] | cdktf.IResolvable;
  /**
  * trace_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#trace_filter TraceMetricsRule#trace_filter}
  */
  readonly traceFilter: TraceMetricsRuleTraceFilter;
}
export interface TraceMetricsRuleGroupByKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#named_key TraceMetricsRule#named_key}
  */
  readonly namedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#type TraceMetricsRule#type}
  */
  readonly type: string;
}

export function traceMetricsRuleGroupByKeyToTerraform(struct?: TraceMetricsRuleGroupByKeyOutputReference | TraceMetricsRuleGroupByKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    named_key: cdktf.stringToTerraform(struct!.namedKey),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function traceMetricsRuleGroupByKeyToHclTerraform(struct?: TraceMetricsRuleGroupByKeyOutputReference | TraceMetricsRuleGroupByKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    named_key: {
      value: cdktf.stringToHclTerraform(struct!.namedKey),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceMetricsRuleGroupByKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceMetricsRuleGroupByKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedKey = this._namedKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleGroupByKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namedKey = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namedKey = value.namedKey;
      this._type = value.type;
    }
  }

  // named_key - computed: false, optional: true, required: false
  private _namedKey?: string; 
  public get namedKey() {
    return this.getStringAttribute('named_key');
  }
  public set namedKey(value: string) {
    this._namedKey = value;
  }
  public resetNamedKey() {
    this._namedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedKeyInput() {
    return this._namedKey;
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
}
export interface TraceMetricsRuleGroupBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#label TraceMetricsRule#label}
  */
  readonly label: string;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#key TraceMetricsRule#key}
  */
  readonly key: TraceMetricsRuleGroupByKey;
}

export function traceMetricsRuleGroupByToTerraform(struct?: TraceMetricsRuleGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    key: traceMetricsRuleGroupByKeyToTerraform(struct!.key),
  }
}


export function traceMetricsRuleGroupByToHclTerraform(struct?: TraceMetricsRuleGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: traceMetricsRuleGroupByKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "TraceMetricsRuleGroupByKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceMetricsRuleGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TraceMetricsRuleGroupBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._key.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._key.internalValue = value.key;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // key - computed: false, optional: false, required: true
  private _key = new TraceMetricsRuleGroupByKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: TraceMetricsRuleGroupByKey) {
    this._key.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}

export class TraceMetricsRuleGroupByList extends cdktf.ComplexList {
  public internalValue? : TraceMetricsRuleGroupBy[] | cdktf.IResolvable

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
  public get(index: number): TraceMetricsRuleGroupByOutputReference {
    return new TraceMetricsRuleGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TraceMetricsRuleTraceFilterSpanDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#max_secs TraceMetricsRule#max_secs}
  */
  readonly maxSecs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#min_secs TraceMetricsRule#min_secs}
  */
  readonly minSecs?: number;
}

export function traceMetricsRuleTraceFilterSpanDurationToTerraform(struct?: TraceMetricsRuleTraceFilterSpanDurationOutputReference | TraceMetricsRuleTraceFilterSpanDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_secs: cdktf.numberToTerraform(struct!.maxSecs),
    min_secs: cdktf.numberToTerraform(struct!.minSecs),
  }
}


export function traceMetricsRuleTraceFilterSpanDurationToHclTerraform(struct?: TraceMetricsRuleTraceFilterSpanDurationOutputReference | TraceMetricsRuleTraceFilterSpanDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_secs: {
      value: cdktf.numberToHclTerraform(struct!.maxSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_secs: {
      value: cdktf.numberToHclTerraform(struct!.minSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceMetricsRuleTraceFilterSpanDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceMetricsRuleTraceFilterSpanDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSecs = this._maxSecs;
    }
    if (this._minSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSecs = this._minSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleTraceFilterSpanDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSecs = undefined;
      this._minSecs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSecs = value.maxSecs;
      this._minSecs = value.minSecs;
    }
  }

  // max_secs - computed: false, optional: true, required: false
  private _maxSecs?: number; 
  public get maxSecs() {
    return this.getNumberAttribute('max_secs');
  }
  public set maxSecs(value: number) {
    this._maxSecs = value;
  }
  public resetMaxSecs() {
    this._maxSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSecsInput() {
    return this._maxSecs;
  }

  // min_secs - computed: false, optional: true, required: false
  private _minSecs?: number; 
  public get minSecs() {
    return this.getNumberAttribute('min_secs');
  }
  public set minSecs(value: number) {
    this._minSecs = value;
  }
  public resetMinSecs() {
    this._minSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSecsInput() {
    return this._minSecs;
  }
}
export interface TraceMetricsRuleTraceFilterSpanError {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#value TraceMetricsRule#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function traceMetricsRuleTraceFilterSpanErrorToTerraform(struct?: TraceMetricsRuleTraceFilterSpanErrorOutputReference | TraceMetricsRuleTraceFilterSpanError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function traceMetricsRuleTraceFilterSpanErrorToHclTerraform(struct?: TraceMetricsRuleTraceFilterSpanErrorOutputReference | TraceMetricsRuleTraceFilterSpanError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceMetricsRuleTraceFilterSpanErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceMetricsRuleTraceFilterSpanError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleTraceFilterSpanError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TraceMetricsRuleTraceFilterSpanIsRootSpan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#value TraceMetricsRule#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function traceMetricsRuleTraceFilterSpanIsRootSpanToTerraform(struct?: TraceMetricsRuleTraceFilterSpanIsRootSpanOutputReference | TraceMetricsRuleTraceFilterSpanIsRootSpan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function traceMetricsRuleTraceFilterSpanIsRootSpanToHclTerraform(struct?: TraceMetricsRuleTraceFilterSpanIsRootSpanOutputReference | TraceMetricsRuleTraceFilterSpanIsRootSpan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceMetricsRuleTraceFilterSpanIsRootSpanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceMetricsRuleTraceFilterSpanIsRootSpan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleTraceFilterSpanIsRootSpan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TraceMetricsRuleTraceFilterSpanOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#in_values TraceMetricsRule#in_values}
  */
  readonly inValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#match TraceMetricsRule#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#value TraceMetricsRule#value}
  */
  readonly value?: string;
}

export function traceMetricsRuleTraceFilterSpanOperationToTerraform(struct?: TraceMetricsRuleTraceFilterSpanOperationOutputReference | TraceMetricsRuleTraceFilterSpanOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inValues),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function traceMetricsRuleTraceFilterSpanOperationToHclTerraform(struct?: TraceMetricsRuleTraceFilterSpanOperationOutputReference | TraceMetricsRuleTraceFilterSpanOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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

export class TraceMetricsRuleTraceFilterSpanOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceMetricsRuleTraceFilterSpanOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.inValues = this._inValues;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleTraceFilterSpanOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inValues = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inValues = value.inValues;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // in_values - computed: false, optional: true, required: false
  private _inValues?: string[]; 
  public get inValues() {
    return this.getListAttribute('in_values');
  }
  public set inValues(value: string[]) {
    this._inValues = value;
  }
  public resetInValues() {
    this._inValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inValuesInput() {
    return this._inValues;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // value - computed: false, optional: true, required: false
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
export interface TraceMetricsRuleTraceFilterSpanParentOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#in_values TraceMetricsRule#in_values}
  */
  readonly inValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#match TraceMetricsRule#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#value TraceMetricsRule#value}
  */
  readonly value?: string;
}

export function traceMetricsRuleTraceFilterSpanParentOperationToTerraform(struct?: TraceMetricsRuleTraceFilterSpanParentOperationOutputReference | TraceMetricsRuleTraceFilterSpanParentOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inValues),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function traceMetricsRuleTraceFilterSpanParentOperationToHclTerraform(struct?: TraceMetricsRuleTraceFilterSpanParentOperationOutputReference | TraceMetricsRuleTraceFilterSpanParentOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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

export class TraceMetricsRuleTraceFilterSpanParentOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceMetricsRuleTraceFilterSpanParentOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.inValues = this._inValues;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleTraceFilterSpanParentOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inValues = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inValues = value.inValues;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // in_values - computed: false, optional: true, required: false
  private _inValues?: string[]; 
  public get inValues() {
    return this.getListAttribute('in_values');
  }
  public set inValues(value: string[]) {
    this._inValues = value;
  }
  public resetInValues() {
    this._inValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inValuesInput() {
    return this._inValues;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // value - computed: false, optional: true, required: false
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
export interface TraceMetricsRuleTraceFilterSpanParentService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#in_values TraceMetricsRule#in_values}
  */
  readonly inValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#match TraceMetricsRule#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#value TraceMetricsRule#value}
  */
  readonly value?: string;
}

export function traceMetricsRuleTraceFilterSpanParentServiceToTerraform(struct?: TraceMetricsRuleTraceFilterSpanParentServiceOutputReference | TraceMetricsRuleTraceFilterSpanParentService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inValues),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function traceMetricsRuleTraceFilterSpanParentServiceToHclTerraform(struct?: TraceMetricsRuleTraceFilterSpanParentServiceOutputReference | TraceMetricsRuleTraceFilterSpanParentService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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

export class TraceMetricsRuleTraceFilterSpanParentServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceMetricsRuleTraceFilterSpanParentService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.inValues = this._inValues;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleTraceFilterSpanParentService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inValues = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inValues = value.inValues;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // in_values - computed: false, optional: true, required: false
  private _inValues?: string[]; 
  public get inValues() {
    return this.getListAttribute('in_values');
  }
  public set inValues(value: string[]) {
    this._inValues = value;
  }
  public resetInValues() {
    this._inValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inValuesInput() {
    return this._inValues;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // value - computed: false, optional: true, required: false
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
export interface TraceMetricsRuleTraceFilterSpanService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#in_values TraceMetricsRule#in_values}
  */
  readonly inValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#match TraceMetricsRule#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#value TraceMetricsRule#value}
  */
  readonly value?: string;
}

export function traceMetricsRuleTraceFilterSpanServiceToTerraform(struct?: TraceMetricsRuleTraceFilterSpanServiceOutputReference | TraceMetricsRuleTraceFilterSpanService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inValues),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function traceMetricsRuleTraceFilterSpanServiceToHclTerraform(struct?: TraceMetricsRuleTraceFilterSpanServiceOutputReference | TraceMetricsRuleTraceFilterSpanService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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

export class TraceMetricsRuleTraceFilterSpanServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceMetricsRuleTraceFilterSpanService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.inValues = this._inValues;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleTraceFilterSpanService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inValues = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inValues = value.inValues;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // in_values - computed: false, optional: true, required: false
  private _inValues?: string[]; 
  public get inValues() {
    return this.getListAttribute('in_values');
  }
  public set inValues(value: string[]) {
    this._inValues = value;
  }
  public resetInValues() {
    this._inValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inValuesInput() {
    return this._inValues;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // value - computed: false, optional: true, required: false
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
export interface TraceMetricsRuleTraceFilterSpanSpanCount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#max TraceMetricsRule#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#min TraceMetricsRule#min}
  */
  readonly min?: number;
}

export function traceMetricsRuleTraceFilterSpanSpanCountToTerraform(struct?: TraceMetricsRuleTraceFilterSpanSpanCountOutputReference | TraceMetricsRuleTraceFilterSpanSpanCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function traceMetricsRuleTraceFilterSpanSpanCountToHclTerraform(struct?: TraceMetricsRuleTraceFilterSpanSpanCountOutputReference | TraceMetricsRuleTraceFilterSpanSpanCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceMetricsRuleTraceFilterSpanSpanCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceMetricsRuleTraceFilterSpanSpanCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleTraceFilterSpanSpanCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface TraceMetricsRuleTraceFilterSpanTagNumericValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#comparison TraceMetricsRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#value TraceMetricsRule#value}
  */
  readonly value: number;
}

export function traceMetricsRuleTraceFilterSpanTagNumericValueToTerraform(struct?: TraceMetricsRuleTraceFilterSpanTagNumericValueOutputReference | TraceMetricsRuleTraceFilterSpanTagNumericValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function traceMetricsRuleTraceFilterSpanTagNumericValueToHclTerraform(struct?: TraceMetricsRuleTraceFilterSpanTagNumericValueOutputReference | TraceMetricsRuleTraceFilterSpanTagNumericValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktf.stringToHclTerraform(struct!.comparison),
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

export class TraceMetricsRuleTraceFilterSpanTagNumericValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceMetricsRuleTraceFilterSpanTagNumericValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleTraceFilterSpanTagNumericValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparison = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TraceMetricsRuleTraceFilterSpanTagValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#in_values TraceMetricsRule#in_values}
  */
  readonly inValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#match TraceMetricsRule#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#value TraceMetricsRule#value}
  */
  readonly value?: string;
}

export function traceMetricsRuleTraceFilterSpanTagValueToTerraform(struct?: TraceMetricsRuleTraceFilterSpanTagValueOutputReference | TraceMetricsRuleTraceFilterSpanTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inValues),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function traceMetricsRuleTraceFilterSpanTagValueToHclTerraform(struct?: TraceMetricsRuleTraceFilterSpanTagValueOutputReference | TraceMetricsRuleTraceFilterSpanTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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

export class TraceMetricsRuleTraceFilterSpanTagValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceMetricsRuleTraceFilterSpanTagValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.inValues = this._inValues;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleTraceFilterSpanTagValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inValues = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inValues = value.inValues;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // in_values - computed: false, optional: true, required: false
  private _inValues?: string[]; 
  public get inValues() {
    return this.getListAttribute('in_values');
  }
  public set inValues(value: string[]) {
    this._inValues = value;
  }
  public resetInValues() {
    this._inValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inValuesInput() {
    return this._inValues;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // value - computed: false, optional: true, required: false
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
export interface TraceMetricsRuleTraceFilterSpanTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#key TraceMetricsRule#key}
  */
  readonly key?: string;
  /**
  * numeric_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#numeric_value TraceMetricsRule#numeric_value}
  */
  readonly numericValue?: TraceMetricsRuleTraceFilterSpanTagNumericValue;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#value TraceMetricsRule#value}
  */
  readonly value?: TraceMetricsRuleTraceFilterSpanTagValue;
}

export function traceMetricsRuleTraceFilterSpanTagToTerraform(struct?: TraceMetricsRuleTraceFilterSpanTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    numeric_value: traceMetricsRuleTraceFilterSpanTagNumericValueToTerraform(struct!.numericValue),
    value: traceMetricsRuleTraceFilterSpanTagValueToTerraform(struct!.value),
  }
}


export function traceMetricsRuleTraceFilterSpanTagToHclTerraform(struct?: TraceMetricsRuleTraceFilterSpanTag | cdktf.IResolvable): any {
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
    numeric_value: {
      value: traceMetricsRuleTraceFilterSpanTagNumericValueToHclTerraform(struct!.numericValue),
      isBlock: true,
      type: "list",
      storageClassType: "TraceMetricsRuleTraceFilterSpanTagNumericValueList",
    },
    value: {
      value: traceMetricsRuleTraceFilterSpanTagValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "TraceMetricsRuleTraceFilterSpanTagValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceMetricsRuleTraceFilterSpanTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TraceMetricsRuleTraceFilterSpanTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._numericValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericValue = this._numericValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleTraceFilterSpanTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._numericValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._numericValue.internalValue = value.numericValue;
      this._value.internalValue = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
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

  // numeric_value - computed: false, optional: true, required: false
  private _numericValue = new TraceMetricsRuleTraceFilterSpanTagNumericValueOutputReference(this, "numeric_value");
  public get numericValue() {
    return this._numericValue;
  }
  public putNumericValue(value: TraceMetricsRuleTraceFilterSpanTagNumericValue) {
    this._numericValue.internalValue = value;
  }
  public resetNumericValue() {
    this._numericValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericValueInput() {
    return this._numericValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new TraceMetricsRuleTraceFilterSpanTagValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: TraceMetricsRuleTraceFilterSpanTagValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class TraceMetricsRuleTraceFilterSpanTagList extends cdktf.ComplexList {
  public internalValue? : TraceMetricsRuleTraceFilterSpanTag[] | cdktf.IResolvable

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
  public get(index: number): TraceMetricsRuleTraceFilterSpanTagOutputReference {
    return new TraceMetricsRuleTraceFilterSpanTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TraceMetricsRuleTraceFilterSpan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#match_type TraceMetricsRule#match_type}
  */
  readonly matchType?: string;
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#duration TraceMetricsRule#duration}
  */
  readonly duration?: TraceMetricsRuleTraceFilterSpanDuration;
  /**
  * error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#error TraceMetricsRule#error}
  */
  readonly error?: TraceMetricsRuleTraceFilterSpanError;
  /**
  * is_root_span block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#is_root_span TraceMetricsRule#is_root_span}
  */
  readonly isRootSpan?: TraceMetricsRuleTraceFilterSpanIsRootSpan;
  /**
  * operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#operation TraceMetricsRule#operation}
  */
  readonly operation?: TraceMetricsRuleTraceFilterSpanOperation;
  /**
  * parent_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#parent_operation TraceMetricsRule#parent_operation}
  */
  readonly parentOperation?: TraceMetricsRuleTraceFilterSpanParentOperation;
  /**
  * parent_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#parent_service TraceMetricsRule#parent_service}
  */
  readonly parentService?: TraceMetricsRuleTraceFilterSpanParentService;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#service TraceMetricsRule#service}
  */
  readonly service?: TraceMetricsRuleTraceFilterSpanService;
  /**
  * span_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#span_count TraceMetricsRule#span_count}
  */
  readonly spanCount?: TraceMetricsRuleTraceFilterSpanSpanCount;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#tag TraceMetricsRule#tag}
  */
  readonly tag?: TraceMetricsRuleTraceFilterSpanTag[] | cdktf.IResolvable;
}

export function traceMetricsRuleTraceFilterSpanToTerraform(struct?: TraceMetricsRuleTraceFilterSpan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    duration: traceMetricsRuleTraceFilterSpanDurationToTerraform(struct!.duration),
    error: traceMetricsRuleTraceFilterSpanErrorToTerraform(struct!.error),
    is_root_span: traceMetricsRuleTraceFilterSpanIsRootSpanToTerraform(struct!.isRootSpan),
    operation: traceMetricsRuleTraceFilterSpanOperationToTerraform(struct!.operation),
    parent_operation: traceMetricsRuleTraceFilterSpanParentOperationToTerraform(struct!.parentOperation),
    parent_service: traceMetricsRuleTraceFilterSpanParentServiceToTerraform(struct!.parentService),
    service: traceMetricsRuleTraceFilterSpanServiceToTerraform(struct!.service),
    span_count: traceMetricsRuleTraceFilterSpanSpanCountToTerraform(struct!.spanCount),
    tag: cdktf.listMapper(traceMetricsRuleTraceFilterSpanTagToTerraform, true)(struct!.tag),
  }
}


export function traceMetricsRuleTraceFilterSpanToHclTerraform(struct?: TraceMetricsRuleTraceFilterSpan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: traceMetricsRuleTraceFilterSpanDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "TraceMetricsRuleTraceFilterSpanDurationList",
    },
    error: {
      value: traceMetricsRuleTraceFilterSpanErrorToHclTerraform(struct!.error),
      isBlock: true,
      type: "list",
      storageClassType: "TraceMetricsRuleTraceFilterSpanErrorList",
    },
    is_root_span: {
      value: traceMetricsRuleTraceFilterSpanIsRootSpanToHclTerraform(struct!.isRootSpan),
      isBlock: true,
      type: "list",
      storageClassType: "TraceMetricsRuleTraceFilterSpanIsRootSpanList",
    },
    operation: {
      value: traceMetricsRuleTraceFilterSpanOperationToHclTerraform(struct!.operation),
      isBlock: true,
      type: "list",
      storageClassType: "TraceMetricsRuleTraceFilterSpanOperationList",
    },
    parent_operation: {
      value: traceMetricsRuleTraceFilterSpanParentOperationToHclTerraform(struct!.parentOperation),
      isBlock: true,
      type: "list",
      storageClassType: "TraceMetricsRuleTraceFilterSpanParentOperationList",
    },
    parent_service: {
      value: traceMetricsRuleTraceFilterSpanParentServiceToHclTerraform(struct!.parentService),
      isBlock: true,
      type: "list",
      storageClassType: "TraceMetricsRuleTraceFilterSpanParentServiceList",
    },
    service: {
      value: traceMetricsRuleTraceFilterSpanServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "list",
      storageClassType: "TraceMetricsRuleTraceFilterSpanServiceList",
    },
    span_count: {
      value: traceMetricsRuleTraceFilterSpanSpanCountToHclTerraform(struct!.spanCount),
      isBlock: true,
      type: "list",
      storageClassType: "TraceMetricsRuleTraceFilterSpanSpanCountList",
    },
    tag: {
      value: cdktf.listMapperHcl(traceMetricsRuleTraceFilterSpanTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "TraceMetricsRuleTraceFilterSpanTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceMetricsRuleTraceFilterSpanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TraceMetricsRuleTraceFilterSpan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._error?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error?.internalValue;
    }
    if (this._isRootSpan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRootSpan = this._isRootSpan?.internalValue;
    }
    if (this._operation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation?.internalValue;
    }
    if (this._parentOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentOperation = this._parentOperation?.internalValue;
    }
    if (this._parentService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentService = this._parentService?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._spanCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanCount = this._spanCount?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleTraceFilterSpan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
      this._duration.internalValue = undefined;
      this._error.internalValue = undefined;
      this._isRootSpan.internalValue = undefined;
      this._operation.internalValue = undefined;
      this._parentOperation.internalValue = undefined;
      this._parentService.internalValue = undefined;
      this._service.internalValue = undefined;
      this._spanCount.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchType = value.matchType;
      this._duration.internalValue = value.duration;
      this._error.internalValue = value.error;
      this._isRootSpan.internalValue = value.isRootSpan;
      this._operation.internalValue = value.operation;
      this._parentOperation.internalValue = value.parentOperation;
      this._parentService.internalValue = value.parentService;
      this._service.internalValue = value.service;
      this._spanCount.internalValue = value.spanCount;
      this._tag.internalValue = value.tag;
    }
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new TraceMetricsRuleTraceFilterSpanDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: TraceMetricsRuleTraceFilterSpanDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // error - computed: false, optional: true, required: false
  private _error = new TraceMetricsRuleTraceFilterSpanErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: TraceMetricsRuleTraceFilterSpanError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }

  // is_root_span - computed: false, optional: true, required: false
  private _isRootSpan = new TraceMetricsRuleTraceFilterSpanIsRootSpanOutputReference(this, "is_root_span");
  public get isRootSpan() {
    return this._isRootSpan;
  }
  public putIsRootSpan(value: TraceMetricsRuleTraceFilterSpanIsRootSpan) {
    this._isRootSpan.internalValue = value;
  }
  public resetIsRootSpan() {
    this._isRootSpan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRootSpanInput() {
    return this._isRootSpan.internalValue;
  }

  // operation - computed: false, optional: true, required: false
  private _operation = new TraceMetricsRuleTraceFilterSpanOperationOutputReference(this, "operation");
  public get operation() {
    return this._operation;
  }
  public putOperation(value: TraceMetricsRuleTraceFilterSpanOperation) {
    this._operation.internalValue = value;
  }
  public resetOperation() {
    this._operation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation.internalValue;
  }

  // parent_operation - computed: false, optional: true, required: false
  private _parentOperation = new TraceMetricsRuleTraceFilterSpanParentOperationOutputReference(this, "parent_operation");
  public get parentOperation() {
    return this._parentOperation;
  }
  public putParentOperation(value: TraceMetricsRuleTraceFilterSpanParentOperation) {
    this._parentOperation.internalValue = value;
  }
  public resetParentOperation() {
    this._parentOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentOperationInput() {
    return this._parentOperation.internalValue;
  }

  // parent_service - computed: false, optional: true, required: false
  private _parentService = new TraceMetricsRuleTraceFilterSpanParentServiceOutputReference(this, "parent_service");
  public get parentService() {
    return this._parentService;
  }
  public putParentService(value: TraceMetricsRuleTraceFilterSpanParentService) {
    this._parentService.internalValue = value;
  }
  public resetParentService() {
    this._parentService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentServiceInput() {
    return this._parentService.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new TraceMetricsRuleTraceFilterSpanServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: TraceMetricsRuleTraceFilterSpanService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // span_count - computed: false, optional: true, required: false
  private _spanCount = new TraceMetricsRuleTraceFilterSpanSpanCountOutputReference(this, "span_count");
  public get spanCount() {
    return this._spanCount;
  }
  public putSpanCount(value: TraceMetricsRuleTraceFilterSpanSpanCount) {
    this._spanCount.internalValue = value;
  }
  public resetSpanCount() {
    this._spanCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanCountInput() {
    return this._spanCount.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new TraceMetricsRuleTraceFilterSpanTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: TraceMetricsRuleTraceFilterSpanTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

export class TraceMetricsRuleTraceFilterSpanList extends cdktf.ComplexList {
  public internalValue? : TraceMetricsRuleTraceFilterSpan[] | cdktf.IResolvable

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
  public get(index: number): TraceMetricsRuleTraceFilterSpanOutputReference {
    return new TraceMetricsRuleTraceFilterSpanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TraceMetricsRuleTraceFilterTraceDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#max_secs TraceMetricsRule#max_secs}
  */
  readonly maxSecs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#min_secs TraceMetricsRule#min_secs}
  */
  readonly minSecs?: number;
}

export function traceMetricsRuleTraceFilterTraceDurationToTerraform(struct?: TraceMetricsRuleTraceFilterTraceDurationOutputReference | TraceMetricsRuleTraceFilterTraceDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_secs: cdktf.numberToTerraform(struct!.maxSecs),
    min_secs: cdktf.numberToTerraform(struct!.minSecs),
  }
}


export function traceMetricsRuleTraceFilterTraceDurationToHclTerraform(struct?: TraceMetricsRuleTraceFilterTraceDurationOutputReference | TraceMetricsRuleTraceFilterTraceDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_secs: {
      value: cdktf.numberToHclTerraform(struct!.maxSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_secs: {
      value: cdktf.numberToHclTerraform(struct!.minSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceMetricsRuleTraceFilterTraceDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceMetricsRuleTraceFilterTraceDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSecs = this._maxSecs;
    }
    if (this._minSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSecs = this._minSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleTraceFilterTraceDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSecs = undefined;
      this._minSecs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSecs = value.maxSecs;
      this._minSecs = value.minSecs;
    }
  }

  // max_secs - computed: false, optional: true, required: false
  private _maxSecs?: number; 
  public get maxSecs() {
    return this.getNumberAttribute('max_secs');
  }
  public set maxSecs(value: number) {
    this._maxSecs = value;
  }
  public resetMaxSecs() {
    this._maxSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSecsInput() {
    return this._maxSecs;
  }

  // min_secs - computed: false, optional: true, required: false
  private _minSecs?: number; 
  public get minSecs() {
    return this.getNumberAttribute('min_secs');
  }
  public set minSecs(value: number) {
    this._minSecs = value;
  }
  public resetMinSecs() {
    this._minSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSecsInput() {
    return this._minSecs;
  }
}
export interface TraceMetricsRuleTraceFilterTraceError {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#value TraceMetricsRule#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function traceMetricsRuleTraceFilterTraceErrorToTerraform(struct?: TraceMetricsRuleTraceFilterTraceErrorOutputReference | TraceMetricsRuleTraceFilterTraceError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function traceMetricsRuleTraceFilterTraceErrorToHclTerraform(struct?: TraceMetricsRuleTraceFilterTraceErrorOutputReference | TraceMetricsRuleTraceFilterTraceError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceMetricsRuleTraceFilterTraceErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceMetricsRuleTraceFilterTraceError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleTraceFilterTraceError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TraceMetricsRuleTraceFilterTrace {
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#duration TraceMetricsRule#duration}
  */
  readonly duration?: TraceMetricsRuleTraceFilterTraceDuration;
  /**
  * error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#error TraceMetricsRule#error}
  */
  readonly error?: TraceMetricsRuleTraceFilterTraceError;
}

export function traceMetricsRuleTraceFilterTraceToTerraform(struct?: TraceMetricsRuleTraceFilterTraceOutputReference | TraceMetricsRuleTraceFilterTrace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: traceMetricsRuleTraceFilterTraceDurationToTerraform(struct!.duration),
    error: traceMetricsRuleTraceFilterTraceErrorToTerraform(struct!.error),
  }
}


export function traceMetricsRuleTraceFilterTraceToHclTerraform(struct?: TraceMetricsRuleTraceFilterTraceOutputReference | TraceMetricsRuleTraceFilterTrace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: traceMetricsRuleTraceFilterTraceDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "TraceMetricsRuleTraceFilterTraceDurationList",
    },
    error: {
      value: traceMetricsRuleTraceFilterTraceErrorToHclTerraform(struct!.error),
      isBlock: true,
      type: "list",
      storageClassType: "TraceMetricsRuleTraceFilterTraceErrorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceMetricsRuleTraceFilterTraceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceMetricsRuleTraceFilterTrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._error?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleTraceFilterTrace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration.internalValue = undefined;
      this._error.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration.internalValue = value.duration;
      this._error.internalValue = value.error;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new TraceMetricsRuleTraceFilterTraceDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: TraceMetricsRuleTraceFilterTraceDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // error - computed: false, optional: true, required: false
  private _error = new TraceMetricsRuleTraceFilterTraceErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: TraceMetricsRuleTraceFilterTraceError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }
}
export interface TraceMetricsRuleTraceFilter {
  /**
  * span block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#span TraceMetricsRule#span}
  */
  readonly span?: TraceMetricsRuleTraceFilterSpan[] | cdktf.IResolvable;
  /**
  * trace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#trace TraceMetricsRule#trace}
  */
  readonly trace?: TraceMetricsRuleTraceFilterTrace;
}

export function traceMetricsRuleTraceFilterToTerraform(struct?: TraceMetricsRuleTraceFilterOutputReference | TraceMetricsRuleTraceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    span: cdktf.listMapper(traceMetricsRuleTraceFilterSpanToTerraform, true)(struct!.span),
    trace: traceMetricsRuleTraceFilterTraceToTerraform(struct!.trace),
  }
}


export function traceMetricsRuleTraceFilterToHclTerraform(struct?: TraceMetricsRuleTraceFilterOutputReference | TraceMetricsRuleTraceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    span: {
      value: cdktf.listMapperHcl(traceMetricsRuleTraceFilterSpanToHclTerraform, true)(struct!.span),
      isBlock: true,
      type: "list",
      storageClassType: "TraceMetricsRuleTraceFilterSpanList",
    },
    trace: {
      value: traceMetricsRuleTraceFilterTraceToHclTerraform(struct!.trace),
      isBlock: true,
      type: "list",
      storageClassType: "TraceMetricsRuleTraceFilterTraceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceMetricsRuleTraceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceMetricsRuleTraceFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._span?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.span = this._span?.internalValue;
    }
    if (this._trace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trace = this._trace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceMetricsRuleTraceFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._span.internalValue = undefined;
      this._trace.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._span.internalValue = value.span;
      this._trace.internalValue = value.trace;
    }
  }

  // span - computed: false, optional: true, required: false
  private _span = new TraceMetricsRuleTraceFilterSpanList(this, "span", false);
  public get span() {
    return this._span;
  }
  public putSpan(value: TraceMetricsRuleTraceFilterSpan[] | cdktf.IResolvable) {
    this._span.internalValue = value;
  }
  public resetSpan() {
    this._span.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanInput() {
    return this._span.internalValue;
  }

  // trace - computed: false, optional: true, required: false
  private _trace = new TraceMetricsRuleTraceFilterTraceOutputReference(this, "trace");
  public get trace() {
    return this._trace;
  }
  public putTrace(value: TraceMetricsRuleTraceFilterTrace) {
    this._trace.internalValue = value;
  }
  public resetTrace() {
    this._trace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceInput() {
    return this._trace.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule chronosphere_trace_metrics_rule}
*/
export class TraceMetricsRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_trace_metrics_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TraceMetricsRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TraceMetricsRule to import
  * @param importFromId The id of the existing TraceMetricsRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TraceMetricsRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_trace_metrics_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/trace_metrics_rule chronosphere_trace_metrics_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TraceMetricsRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TraceMetricsRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_trace_metrics_rule',
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
    this._histogramBucketsSeconds = config.histogramBucketsSeconds;
    this._id = config.id;
    this._metricLabels = config.metricLabels;
    this._metricName = config.metricName;
    this._name = config.name;
    this._slug = config.slug;
    this._groupBy.internalValue = config.groupBy;
    this._traceFilter.internalValue = config.traceFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // histogram_buckets_seconds - computed: false, optional: true, required: false
  private _histogramBucketsSeconds?: number[]; 
  public get histogramBucketsSeconds() {
    return this.getNumberListAttribute('histogram_buckets_seconds');
  }
  public set histogramBucketsSeconds(value: number[]) {
    this._histogramBucketsSeconds = value;
  }
  public resetHistogramBucketsSeconds() {
    this._histogramBucketsSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramBucketsSecondsInput() {
    return this._histogramBucketsSeconds;
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

  // metric_labels - computed: false, optional: true, required: false
  private _metricLabels?: { [key: string]: string }; 
  public get metricLabels() {
    return this.getStringMapAttribute('metric_labels');
  }
  public set metricLabels(value: { [key: string]: string }) {
    this._metricLabels = value;
  }
  public resetMetricLabels() {
    this._metricLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLabelsInput() {
    return this._metricLabels;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
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

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new TraceMetricsRuleGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: TraceMetricsRuleGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // trace_filter - computed: false, optional: false, required: true
  private _traceFilter = new TraceMetricsRuleTraceFilterOutputReference(this, "trace_filter");
  public get traceFilter() {
    return this._traceFilter;
  }
  public putTraceFilter(value: TraceMetricsRuleTraceFilter) {
    this._traceFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get traceFilterInput() {
    return this._traceFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      histogram_buckets_seconds: cdktf.listMapper(cdktf.numberToTerraform, false)(this._histogramBucketsSeconds),
      id: cdktf.stringToTerraform(this._id),
      metric_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._metricLabels),
      metric_name: cdktf.stringToTerraform(this._metricName),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
      group_by: cdktf.listMapper(traceMetricsRuleGroupByToTerraform, true)(this._groupBy.internalValue),
      trace_filter: traceMetricsRuleTraceFilterToTerraform(this._traceFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      histogram_buckets_seconds: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._histogramBucketsSeconds),
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
      metric_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metricLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      metric_name: {
        value: cdktf.stringToHclTerraform(this._metricName),
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
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_by: {
        value: cdktf.listMapperHcl(traceMetricsRuleGroupByToHclTerraform, true)(this._groupBy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TraceMetricsRuleGroupByList",
      },
      trace_filter: {
        value: traceMetricsRuleTraceFilterToHclTerraform(this._traceFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TraceMetricsRuleTraceFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
