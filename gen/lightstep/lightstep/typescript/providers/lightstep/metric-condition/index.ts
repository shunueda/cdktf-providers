// https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional free-form string to include in alert notifications (max length 4096 bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#custom_data MetricCondition#custom_data}
  */
  readonly customData?: string;
  /**
  * Optional extended description for the alert (supports Markdown).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#description MetricCondition#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#id MetricCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The title of the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#name MetricCondition#name}
  */
  readonly name: string;
  /**
  * The name of the [project](https://docs.lightstep.com/docs/glossary#project) in which to create this alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#project_name MetricCondition#project_name}
  */
  readonly projectName: string;
  /**
  * alerting_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#alerting_rule MetricCondition#alerting_rule}
  */
  readonly alertingRule?: MetricConditionAlertingRule[] | cdktf.IResolvable;
  /**
  * expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#expression MetricCondition#expression}
  */
  readonly expression: MetricConditionExpression;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#label MetricCondition#label}
  */
  readonly label?: MetricConditionLabel[] | cdktf.IResolvable;
  /**
  * metric_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#metric_query MetricCondition#metric_query}
  */
  readonly metricQuery: MetricConditionMetricQuery[] | cdktf.IResolvable;
}
export interface MetricConditionAlertingRule {
  /**
  * The identifier of the destination to receive notifications for this alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#id MetricCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * An optional duration that represents the frequency at which to re-send an alert notification if an alert remains in a triggered state. 
  * By default, notifications will only be sent when the alert status changes.  
  * Values should be expressed as a duration (example: "2d").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#update_interval MetricCondition#update_interval}
  */
  readonly updateInterval?: string;
}

export function metricConditionAlertingRuleToTerraform(struct?: MetricConditionAlertingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    update_interval: cdktf.stringToTerraform(struct!.updateInterval),
  }
}


export function metricConditionAlertingRuleToHclTerraform(struct?: MetricConditionAlertingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_interval: {
      value: cdktf.stringToHclTerraform(struct!.updateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricConditionAlertingRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricConditionAlertingRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._updateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateInterval = this._updateInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricConditionAlertingRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._updateInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._updateInterval = value.updateInterval;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // update_interval - computed: false, optional: true, required: false
  private _updateInterval?: string; 
  public get updateInterval() {
    return this.getStringAttribute('update_interval');
  }
  public set updateInterval(value: string) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }
}

export class MetricConditionAlertingRuleList extends cdktf.ComplexList {
  public internalValue? : MetricConditionAlertingRule[] | cdktf.IResolvable

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
  public get(index: number): MetricConditionAlertingRuleOutputReference {
    return new MetricConditionAlertingRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricConditionExpressionThresholds {
  /**
  * Defines the threshold for the alert to transition to a Critical (more severe) status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#critical MetricCondition#critical}
  */
  readonly critical?: string;
  /**
  * Critical threshold must be breached for this duration before the status changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#critical_duration_ms MetricCondition#critical_duration_ms}
  */
  readonly criticalDurationMs?: number;
  /**
  * Defines the threshold for the alert to transition to a Warning (less severe) status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#warning MetricCondition#warning}
  */
  readonly warning?: string;
  /**
  * Critical threshold must be breached for this duration before the status changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#warning_duration_ms MetricCondition#warning_duration_ms}
  */
  readonly warningDurationMs?: number;
}

export function metricConditionExpressionThresholdsToTerraform(struct?: MetricConditionExpressionThresholdsOutputReference | MetricConditionExpressionThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.stringToTerraform(struct!.critical),
    critical_duration_ms: cdktf.numberToTerraform(struct!.criticalDurationMs),
    warning: cdktf.stringToTerraform(struct!.warning),
    warning_duration_ms: cdktf.numberToTerraform(struct!.warningDurationMs),
  }
}


export function metricConditionExpressionThresholdsToHclTerraform(struct?: MetricConditionExpressionThresholdsOutputReference | MetricConditionExpressionThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cdktf.stringToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    critical_duration_ms: {
      value: cdktf.numberToHclTerraform(struct!.criticalDurationMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning: {
      value: cdktf.stringToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_duration_ms: {
      value: cdktf.numberToHclTerraform(struct!.warningDurationMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricConditionExpressionThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricConditionExpressionThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._criticalDurationMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalDurationMs = this._criticalDurationMs;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    if (this._warningDurationMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningDurationMs = this._warningDurationMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricConditionExpressionThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical = undefined;
      this._criticalDurationMs = undefined;
      this._warning = undefined;
      this._warningDurationMs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical = value.critical;
      this._criticalDurationMs = value.criticalDurationMs;
      this._warning = value.warning;
      this._warningDurationMs = value.warningDurationMs;
    }
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: string; 
  public get critical() {
    return this.getStringAttribute('critical');
  }
  public set critical(value: string) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // critical_duration_ms - computed: false, optional: true, required: false
  private _criticalDurationMs?: number; 
  public get criticalDurationMs() {
    return this.getNumberAttribute('critical_duration_ms');
  }
  public set criticalDurationMs(value: number) {
    this._criticalDurationMs = value;
  }
  public resetCriticalDurationMs() {
    this._criticalDurationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalDurationMsInput() {
    return this._criticalDurationMs;
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: string; 
  public get warning() {
    return this.getStringAttribute('warning');
  }
  public set warning(value: string) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }

  // warning_duration_ms - computed: false, optional: true, required: false
  private _warningDurationMs?: number; 
  public get warningDurationMs() {
    return this.getNumberAttribute('warning_duration_ms');
  }
  public set warningDurationMs(value: number) {
    this._warningDurationMs = value;
  }
  public resetWarningDurationMs() {
    this._warningDurationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningDurationMsInput() {
    return this._warningDurationMs;
  }
}
export interface MetricConditionExpression {
  /**
  * When false, send a single notification whenever any number of group_by values exceeds the alert threshold. When true, send individual notifications for each distinct group_by value that exceeds the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#is_multi MetricCondition#is_multi}
  */
  readonly isMulti?: boolean | cdktf.IResolvable;
  /**
  * If true, a notification is sent when the alert query returns no data. If false, notifications aren't sent in this scenario.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#is_no_data MetricCondition#is_no_data}
  */
  readonly isNoData?: boolean | cdktf.IResolvable;
  /**
  * No data must be seen for this duration before the status changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#no_data_duration_ms MetricCondition#no_data_duration_ms}
  */
  readonly noDataDurationMs?: number;
  /**
  * Required when at least one threshold (Critical, Warning) is defined. Indicates whether the alert triggers when the value is above the threshold or below the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#operand MetricCondition#operand}
  */
  readonly operand?: string;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#thresholds MetricCondition#thresholds}
  */
  readonly thresholds?: MetricConditionExpressionThresholds;
}

export function metricConditionExpressionToTerraform(struct?: MetricConditionExpressionOutputReference | MetricConditionExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_multi: cdktf.booleanToTerraform(struct!.isMulti),
    is_no_data: cdktf.booleanToTerraform(struct!.isNoData),
    no_data_duration_ms: cdktf.numberToTerraform(struct!.noDataDurationMs),
    operand: cdktf.stringToTerraform(struct!.operand),
    thresholds: metricConditionExpressionThresholdsToTerraform(struct!.thresholds),
  }
}


export function metricConditionExpressionToHclTerraform(struct?: MetricConditionExpressionOutputReference | MetricConditionExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_multi: {
      value: cdktf.booleanToHclTerraform(struct!.isMulti),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_no_data: {
      value: cdktf.booleanToHclTerraform(struct!.isNoData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_data_duration_ms: {
      value: cdktf.numberToHclTerraform(struct!.noDataDurationMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operand: {
      value: cdktf.stringToHclTerraform(struct!.operand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thresholds: {
      value: metricConditionExpressionThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "MetricConditionExpressionThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricConditionExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricConditionExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isMulti !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMulti = this._isMulti;
    }
    if (this._isNoData !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNoData = this._isNoData;
    }
    if (this._noDataDurationMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDataDurationMs = this._noDataDurationMs;
    }
    if (this._operand !== undefined) {
      hasAnyValues = true;
      internalValueResult.operand = this._operand;
    }
    if (this._thresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholds = this._thresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricConditionExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isMulti = undefined;
      this._isNoData = undefined;
      this._noDataDurationMs = undefined;
      this._operand = undefined;
      this._thresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isMulti = value.isMulti;
      this._isNoData = value.isNoData;
      this._noDataDurationMs = value.noDataDurationMs;
      this._operand = value.operand;
      this._thresholds.internalValue = value.thresholds;
    }
  }

  // is_multi - computed: false, optional: true, required: false
  private _isMulti?: boolean | cdktf.IResolvable; 
  public get isMulti() {
    return this.getBooleanAttribute('is_multi');
  }
  public set isMulti(value: boolean | cdktf.IResolvable) {
    this._isMulti = value;
  }
  public resetIsMulti() {
    this._isMulti = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMultiInput() {
    return this._isMulti;
  }

  // is_no_data - computed: false, optional: true, required: false
  private _isNoData?: boolean | cdktf.IResolvable; 
  public get isNoData() {
    return this.getBooleanAttribute('is_no_data');
  }
  public set isNoData(value: boolean | cdktf.IResolvable) {
    this._isNoData = value;
  }
  public resetIsNoData() {
    this._isNoData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNoDataInput() {
    return this._isNoData;
  }

  // no_data_duration_ms - computed: false, optional: true, required: false
  private _noDataDurationMs?: number; 
  public get noDataDurationMs() {
    return this.getNumberAttribute('no_data_duration_ms');
  }
  public set noDataDurationMs(value: number) {
    this._noDataDurationMs = value;
  }
  public resetNoDataDurationMs() {
    this._noDataDurationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDataDurationMsInput() {
    return this._noDataDurationMs;
  }

  // operand - computed: false, optional: true, required: false
  private _operand?: string; 
  public get operand() {
    return this.getStringAttribute('operand');
  }
  public set operand(value: string) {
    this._operand = value;
  }
  public resetOperand() {
    this._operand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandInput() {
    return this._operand;
  }

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new MetricConditionExpressionThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: MetricConditionExpressionThresholds) {
    this._thresholds.internalValue = value;
  }
  public resetThresholds() {
    this._thresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsInput() {
    return this._thresholds.internalValue;
  }
}
export interface MetricConditionLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#key MetricCondition#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#value MetricCondition#value}
  */
  readonly value: string;
}

export function metricConditionLabelToTerraform(struct?: MetricConditionLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function metricConditionLabelToHclTerraform(struct?: MetricConditionLabel | cdktf.IResolvable): any {
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

export class MetricConditionLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricConditionLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricConditionLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._value = value.value;
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

export class MetricConditionLabelList extends cdktf.ComplexList {
  public internalValue? : MetricConditionLabel[] | cdktf.IResolvable

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
  public get(index: number): MetricConditionLabelOutputReference {
    return new MetricConditionLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricConditionMetricQueryFinalWindowOperation {
  /**
  * Unit specified in milliseconds, but must be at least 30,000 and a round number of seconds (i.e. evenly divisible by 1,000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#input_window_ms MetricCondition#input_window_ms}
  */
  readonly inputWindowMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#operator MetricCondition#operator}
  */
  readonly operator?: string;
}

export function metricConditionMetricQueryFinalWindowOperationToTerraform(struct?: MetricConditionMetricQueryFinalWindowOperationOutputReference | MetricConditionMetricQueryFinalWindowOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_window_ms: cdktf.numberToTerraform(struct!.inputWindowMs),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function metricConditionMetricQueryFinalWindowOperationToHclTerraform(struct?: MetricConditionMetricQueryFinalWindowOperationOutputReference | MetricConditionMetricQueryFinalWindowOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_window_ms: {
      value: cdktf.numberToHclTerraform(struct!.inputWindowMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricConditionMetricQueryFinalWindowOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricConditionMetricQueryFinalWindowOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputWindowMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputWindowMs = this._inputWindowMs;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricConditionMetricQueryFinalWindowOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputWindowMs = undefined;
      this._operator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputWindowMs = value.inputWindowMs;
      this._operator = value.operator;
    }
  }

  // input_window_ms - computed: false, optional: true, required: false
  private _inputWindowMs?: number; 
  public get inputWindowMs() {
    return this.getNumberAttribute('input_window_ms');
  }
  public set inputWindowMs(value: number) {
    this._inputWindowMs = value;
  }
  public resetInputWindowMs() {
    this._inputWindowMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputWindowMsInput() {
    return this._inputWindowMs;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}
export interface MetricConditionMetricQueryGroupBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#aggregation_method MetricCondition#aggregation_method}
  */
  readonly aggregationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#keys MetricCondition#keys}
  */
  readonly keys?: string[];
}

export function metricConditionMetricQueryGroupByToTerraform(struct?: MetricConditionMetricQueryGroupByOutputReference | MetricConditionMetricQueryGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_method: cdktf.stringToTerraform(struct!.aggregationMethod),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function metricConditionMetricQueryGroupByToHclTerraform(struct?: MetricConditionMetricQueryGroupByOutputReference | MetricConditionMetricQueryGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_method: {
      value: cdktf.stringToHclTerraform(struct!.aggregationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricConditionMetricQueryGroupByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricConditionMetricQueryGroupBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationMethod = this._aggregationMethod;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricConditionMetricQueryGroupBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationMethod = undefined;
      this._keys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationMethod = value.aggregationMethod;
      this._keys = value.keys;
    }
  }

  // aggregation_method - computed: false, optional: true, required: false
  private _aggregationMethod?: string; 
  public get aggregationMethod() {
    return this.getStringAttribute('aggregation_method');
  }
  public set aggregationMethod(value: string) {
    this._aggregationMethod = value;
  }
  public resetAggregationMethod() {
    this._aggregationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationMethodInput() {
    return this._aggregationMethod;
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }
}
export interface MetricConditionMetricQuerySpans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#group_by_keys MetricCondition#group_by_keys}
  */
  readonly groupByKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#latency_percentiles MetricCondition#latency_percentiles}
  */
  readonly latencyPercentiles?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#operator MetricCondition#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#operator_input_window_ms MetricCondition#operator_input_window_ms}
  */
  readonly operatorInputWindowMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#query MetricCondition#query}
  */
  readonly query: string;
}

export function metricConditionMetricQuerySpansToTerraform(struct?: MetricConditionMetricQuerySpansOutputReference | MetricConditionMetricQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_by_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByKeys),
    latency_percentiles: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.latencyPercentiles),
    operator: cdktf.stringToTerraform(struct!.operator),
    operator_input_window_ms: cdktf.numberToTerraform(struct!.operatorInputWindowMs),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function metricConditionMetricQuerySpansToHclTerraform(struct?: MetricConditionMetricQuerySpansOutputReference | MetricConditionMetricQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_by_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupByKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    latency_percentiles: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.latencyPercentiles),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator_input_window_ms: {
      value: cdktf.numberToHclTerraform(struct!.operatorInputWindowMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricConditionMetricQuerySpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricConditionMetricQuerySpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupByKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByKeys = this._groupByKeys;
    }
    if (this._latencyPercentiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyPercentiles = this._latencyPercentiles;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._operatorInputWindowMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorInputWindowMs = this._operatorInputWindowMs;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricConditionMetricQuerySpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupByKeys = undefined;
      this._latencyPercentiles = undefined;
      this._operator = undefined;
      this._operatorInputWindowMs = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupByKeys = value.groupByKeys;
      this._latencyPercentiles = value.latencyPercentiles;
      this._operator = value.operator;
      this._operatorInputWindowMs = value.operatorInputWindowMs;
      this._query = value.query;
    }
  }

  // group_by_keys - computed: false, optional: true, required: false
  private _groupByKeys?: string[]; 
  public get groupByKeys() {
    return this.getListAttribute('group_by_keys');
  }
  public set groupByKeys(value: string[]) {
    this._groupByKeys = value;
  }
  public resetGroupByKeys() {
    this._groupByKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByKeysInput() {
    return this._groupByKeys;
  }

  // latency_percentiles - computed: true, optional: true, required: false
  private _latencyPercentiles?: number[]; 
  public get latencyPercentiles() {
    return this.getNumberListAttribute('latency_percentiles');
  }
  public set latencyPercentiles(value: number[]) {
    this._latencyPercentiles = value;
  }
  public resetLatencyPercentiles() {
    this._latencyPercentiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyPercentilesInput() {
    return this._latencyPercentiles;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // operator_input_window_ms - computed: false, optional: true, required: false
  private _operatorInputWindowMs?: number; 
  public get operatorInputWindowMs() {
    return this.getNumberAttribute('operator_input_window_ms');
  }
  public set operatorInputWindowMs(value: number) {
    this._operatorInputWindowMs = value;
  }
  public resetOperatorInputWindowMs() {
    this._operatorInputWindowMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInputWindowMsInput() {
    return this._operatorInputWindowMs;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface MetricConditionMetricQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#display MetricCondition#display}
  */
  readonly display?: string;
  /**
  * Not-equals filters (operand: neq)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#exclude_filters MetricCondition#exclude_filters}
  */
  readonly excludeFilters?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Non-equality filters (operand: contains, regexp)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#filters MetricCondition#filters}
  */
  readonly filters?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#hidden MetricCondition#hidden}
  */
  readonly hidden: boolean | cdktf.IResolvable;
  /**
  * Equality filters (operand: eq)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#include_filters MetricCondition#include_filters}
  */
  readonly includeFilters?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#metric MetricCondition#metric}
  */
  readonly metric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#query_name MetricCondition#query_name}
  */
  readonly queryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#timeseries_operator MetricCondition#timeseries_operator}
  */
  readonly timeseriesOperator?: string;
  /**
  * Unit specified in milliseconds, but must be at least 30,000 and a round number of seconds (i.e. evenly divisible by 1,000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#timeseries_operator_input_window_ms MetricCondition#timeseries_operator_input_window_ms}
  */
  readonly timeseriesOperatorInputWindowMs?: number;
  /**
  * Deprecated, use the query_string field in lightstep_dashboard or lightstep_alert instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#tql MetricCondition#tql}
  */
  readonly tql?: string;
  /**
  * final_window_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#final_window_operation MetricCondition#final_window_operation}
  */
  readonly finalWindowOperation?: MetricConditionMetricQueryFinalWindowOperation;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#group_by MetricCondition#group_by}
  */
  readonly groupBy?: MetricConditionMetricQueryGroupBy;
  /**
  * spans block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#spans MetricCondition#spans}
  */
  readonly spans?: MetricConditionMetricQuerySpans;
}

export function metricConditionMetricQueryToTerraform(struct?: MetricConditionMetricQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    exclude_filters: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.excludeFilters),
    filters: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.filters),
    hidden: cdktf.booleanToTerraform(struct!.hidden),
    include_filters: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.includeFilters),
    metric: cdktf.stringToTerraform(struct!.metric),
    query_name: cdktf.stringToTerraform(struct!.queryName),
    timeseries_operator: cdktf.stringToTerraform(struct!.timeseriesOperator),
    timeseries_operator_input_window_ms: cdktf.numberToTerraform(struct!.timeseriesOperatorInputWindowMs),
    tql: cdktf.stringToTerraform(struct!.tql),
    final_window_operation: metricConditionMetricQueryFinalWindowOperationToTerraform(struct!.finalWindowOperation),
    group_by: metricConditionMetricQueryGroupByToTerraform(struct!.groupBy),
    spans: metricConditionMetricQuerySpansToTerraform(struct!.spans),
  }
}


export function metricConditionMetricQueryToHclTerraform(struct?: MetricConditionMetricQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_filters: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.excludeFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.filters),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    hidden: {
      value: cdktf.booleanToHclTerraform(struct!.hidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_filters: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.includeFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_name: {
      value: cdktf.stringToHclTerraform(struct!.queryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeseries_operator: {
      value: cdktf.stringToHclTerraform(struct!.timeseriesOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeseries_operator_input_window_ms: {
      value: cdktf.numberToHclTerraform(struct!.timeseriesOperatorInputWindowMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tql: {
      value: cdktf.stringToHclTerraform(struct!.tql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    final_window_operation: {
      value: metricConditionMetricQueryFinalWindowOperationToHclTerraform(struct!.finalWindowOperation),
      isBlock: true,
      type: "list",
      storageClassType: "MetricConditionMetricQueryFinalWindowOperationList",
    },
    group_by: {
      value: metricConditionMetricQueryGroupByToHclTerraform(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "MetricConditionMetricQueryGroupByList",
    },
    spans: {
      value: metricConditionMetricQuerySpansToHclTerraform(struct!.spans),
      isBlock: true,
      type: "list",
      storageClassType: "MetricConditionMetricQuerySpansList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricConditionMetricQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricConditionMetricQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._excludeFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFilters = this._excludeFilters;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._hidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden;
    }
    if (this._includeFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeFilters = this._includeFilters;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._queryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryName = this._queryName;
    }
    if (this._timeseriesOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesOperator = this._timeseriesOperator;
    }
    if (this._timeseriesOperatorInputWindowMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesOperatorInputWindowMs = this._timeseriesOperatorInputWindowMs;
    }
    if (this._tql !== undefined) {
      hasAnyValues = true;
      internalValueResult.tql = this._tql;
    }
    if (this._finalWindowOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalWindowOperation = this._finalWindowOperation?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._spans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spans = this._spans?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricConditionMetricQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._display = undefined;
      this._excludeFilters = undefined;
      this._filters = undefined;
      this._hidden = undefined;
      this._includeFilters = undefined;
      this._metric = undefined;
      this._queryName = undefined;
      this._timeseriesOperator = undefined;
      this._timeseriesOperatorInputWindowMs = undefined;
      this._tql = undefined;
      this._finalWindowOperation.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._spans.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._display = value.display;
      this._excludeFilters = value.excludeFilters;
      this._filters = value.filters;
      this._hidden = value.hidden;
      this._includeFilters = value.includeFilters;
      this._metric = value.metric;
      this._queryName = value.queryName;
      this._timeseriesOperator = value.timeseriesOperator;
      this._timeseriesOperatorInputWindowMs = value.timeseriesOperatorInputWindowMs;
      this._tql = value.tql;
      this._finalWindowOperation.internalValue = value.finalWindowOperation;
      this._groupBy.internalValue = value.groupBy;
      this._spans.internalValue = value.spans;
    }
  }

  // display - computed: false, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // exclude_filters - computed: true, optional: true, required: false
  private _excludeFilters?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get excludeFilters() {
    return this.interpolationForAttribute('exclude_filters');
  }
  public set excludeFilters(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._excludeFilters = value;
  }
  public resetExcludeFilters() {
    this._excludeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFiltersInput() {
    return this._excludeFilters;
  }

  // filters - computed: true, optional: true, required: false
  private _filters?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get filters() {
    return this.interpolationForAttribute('filters');
  }
  public set filters(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // hidden - computed: false, optional: false, required: true
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // include_filters - computed: true, optional: true, required: false
  private _includeFilters?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get includeFilters() {
    return this.interpolationForAttribute('include_filters');
  }
  public set includeFilters(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._includeFilters = value;
  }
  public resetIncludeFilters() {
    this._includeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFiltersInput() {
    return this._includeFilters;
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // query_name - computed: false, optional: false, required: true
  private _queryName?: string; 
  public get queryName() {
    return this.getStringAttribute('query_name');
  }
  public set queryName(value: string) {
    this._queryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryNameInput() {
    return this._queryName;
  }

  // timeseries_operator - computed: true, optional: true, required: false
  private _timeseriesOperator?: string; 
  public get timeseriesOperator() {
    return this.getStringAttribute('timeseries_operator');
  }
  public set timeseriesOperator(value: string) {
    this._timeseriesOperator = value;
  }
  public resetTimeseriesOperator() {
    this._timeseriesOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesOperatorInput() {
    return this._timeseriesOperator;
  }

  // timeseries_operator_input_window_ms - computed: false, optional: true, required: false
  private _timeseriesOperatorInputWindowMs?: number; 
  public get timeseriesOperatorInputWindowMs() {
    return this.getNumberAttribute('timeseries_operator_input_window_ms');
  }
  public set timeseriesOperatorInputWindowMs(value: number) {
    this._timeseriesOperatorInputWindowMs = value;
  }
  public resetTimeseriesOperatorInputWindowMs() {
    this._timeseriesOperatorInputWindowMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesOperatorInputWindowMsInput() {
    return this._timeseriesOperatorInputWindowMs;
  }

  // tql - computed: false, optional: true, required: false
  private _tql?: string; 
  public get tql() {
    return this.getStringAttribute('tql');
  }
  public set tql(value: string) {
    this._tql = value;
  }
  public resetTql() {
    this._tql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tqlInput() {
    return this._tql;
  }

  // final_window_operation - computed: false, optional: true, required: false
  private _finalWindowOperation = new MetricConditionMetricQueryFinalWindowOperationOutputReference(this, "final_window_operation");
  public get finalWindowOperation() {
    return this._finalWindowOperation;
  }
  public putFinalWindowOperation(value: MetricConditionMetricQueryFinalWindowOperation) {
    this._finalWindowOperation.internalValue = value;
  }
  public resetFinalWindowOperation() {
    this._finalWindowOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalWindowOperationInput() {
    return this._finalWindowOperation.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new MetricConditionMetricQueryGroupByOutputReference(this, "group_by");
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: MetricConditionMetricQueryGroupBy) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // spans - computed: false, optional: true, required: false
  private _spans = new MetricConditionMetricQuerySpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
  public putSpans(value: MetricConditionMetricQuerySpans) {
    this._spans.internalValue = value;
  }
  public resetSpans() {
    this._spans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spansInput() {
    return this._spans.internalValue;
  }
}

export class MetricConditionMetricQueryList extends cdktf.ComplexList {
  public internalValue? : MetricConditionMetricQuery[] | cdktf.IResolvable

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
  public get(index: number): MetricConditionMetricQueryOutputReference {
    return new MetricConditionMetricQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition lightstep_metric_condition}
*/
export class MetricCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lightstep_metric_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricCondition to import
  * @param importFromId The id of the existing MetricCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lightstep_metric_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_condition lightstep_metric_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricConditionConfig
  */
  public constructor(scope: Construct, id: string, config: MetricConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'lightstep_metric_condition',
      terraformGeneratorMetadata: {
        providerName: 'lightstep',
        providerVersion: '1.98.2',
        providerVersionConstraint: '1.98.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customData = config.customData;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._projectName = config.projectName;
    this._alertingRule.internalValue = config.alertingRule;
    this._expression.internalValue = config.expression;
    this._label.internalValue = config.label;
    this._metricQuery.internalValue = config.metricQuery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_data - computed: false, optional: true, required: false
  private _customData?: string; 
  public get customData() {
    return this.getStringAttribute('custom_data');
  }
  public set customData(value: string) {
    this._customData = value;
  }
  public resetCustomData() {
    this._customData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData;
  }

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

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // alerting_rule - computed: false, optional: true, required: false
  private _alertingRule = new MetricConditionAlertingRuleList(this, "alerting_rule", true);
  public get alertingRule() {
    return this._alertingRule;
  }
  public putAlertingRule(value: MetricConditionAlertingRule[] | cdktf.IResolvable) {
    this._alertingRule.internalValue = value;
  }
  public resetAlertingRule() {
    this._alertingRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingRuleInput() {
    return this._alertingRule.internalValue;
  }

  // expression - computed: false, optional: false, required: true
  private _expression = new MetricConditionExpressionOutputReference(this, "expression");
  public get expression() {
    return this._expression;
  }
  public putExpression(value: MetricConditionExpression) {
    this._expression.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new MetricConditionLabelList(this, "label", true);
  public get label() {
    return this._label;
  }
  public putLabel(value: MetricConditionLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // metric_query - computed: false, optional: false, required: true
  private _metricQuery = new MetricConditionMetricQueryList(this, "metric_query", false);
  public get metricQuery() {
    return this._metricQuery;
  }
  public putMetricQuery(value: MetricConditionMetricQuery[] | cdktf.IResolvable) {
    this._metricQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricQueryInput() {
    return this._metricQuery.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_data: cdktf.stringToTerraform(this._customData),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_name: cdktf.stringToTerraform(this._projectName),
      alerting_rule: cdktf.listMapper(metricConditionAlertingRuleToTerraform, true)(this._alertingRule.internalValue),
      expression: metricConditionExpressionToTerraform(this._expression.internalValue),
      label: cdktf.listMapper(metricConditionLabelToTerraform, true)(this._label.internalValue),
      metric_query: cdktf.listMapper(metricConditionMetricQueryToTerraform, true)(this._metricQuery.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_data: {
        value: cdktf.stringToHclTerraform(this._customData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alerting_rule: {
        value: cdktf.listMapperHcl(metricConditionAlertingRuleToHclTerraform, true)(this._alertingRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MetricConditionAlertingRuleList",
      },
      expression: {
        value: metricConditionExpressionToHclTerraform(this._expression.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetricConditionExpressionList",
      },
      label: {
        value: cdktf.listMapperHcl(metricConditionLabelToHclTerraform, true)(this._label.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MetricConditionLabelList",
      },
      metric_query: {
        value: cdktf.listMapperHcl(metricConditionMetricQueryToHclTerraform, true)(this._metricQuery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetricConditionMetricQueryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
