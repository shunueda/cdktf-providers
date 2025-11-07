// https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional free-form string to include in alert notifications (max length 4096 bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#custom_data Alert#custom_data}
  */
  readonly customData?: string;
  /**
  * Optional extended description for the alert (supports Markdown).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#description Alert#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#id Alert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The title of the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#name Alert#name}
  */
  readonly name: string;
  /**
  * The name of the [project](https://docs.lightstep.com/docs/glossary#project) in which to create this alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#project_name Alert#project_name}
  */
  readonly projectName: string;
  /**
  * alerting_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#alerting_rule Alert#alerting_rule}
  */
  readonly alertingRule?: AlertAlertingRule[] | cdktf.IResolvable;
  /**
  * composite_alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#composite_alert Alert#composite_alert}
  */
  readonly compositeAlert?: AlertCompositeAlert;
  /**
  * expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#expression Alert#expression}
  */
  readonly expression?: AlertExpression;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#label Alert#label}
  */
  readonly label?: AlertLabel[] | cdktf.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#query Alert#query}
  */
  readonly query?: AlertQuery[] | cdktf.IResolvable;
}
export interface AlertAlertingRule {
  /**
  * The identifier of the destination to receive notifications for this alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#id Alert#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#update_interval Alert#update_interval}
  */
  readonly updateInterval?: string;
}

export function alertAlertingRuleToTerraform(struct?: AlertAlertingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    update_interval: cdktf.stringToTerraform(struct!.updateInterval),
  }
}


export function alertAlertingRuleToHclTerraform(struct?: AlertAlertingRule | cdktf.IResolvable): any {
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

export class AlertAlertingRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertAlertingRule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlertAlertingRule | cdktf.IResolvable | undefined) {
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

export class AlertAlertingRuleList extends cdktf.ComplexList {
  public internalValue? : AlertAlertingRule[] | cdktf.IResolvable

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
  public get(index: number): AlertAlertingRuleOutputReference {
    return new AlertAlertingRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertCompositeAlertAlertExpressionThresholds {
  /**
  * Defines the threshold for the alert to transition to a Critical (more severe) status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#critical Alert#critical}
  */
  readonly critical?: string;
  /**
  * Critical threshold must be breached for this duration before the status changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#critical_duration_ms Alert#critical_duration_ms}
  */
  readonly criticalDurationMs?: number;
  /**
  * Defines the threshold for the alert to transition to a Warning (less severe) status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#warning Alert#warning}
  */
  readonly warning?: string;
  /**
  * Critical threshold must be breached for this duration before the status changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#warning_duration_ms Alert#warning_duration_ms}
  */
  readonly warningDurationMs?: number;
}

export function alertCompositeAlertAlertExpressionThresholdsToTerraform(struct?: AlertCompositeAlertAlertExpressionThresholdsOutputReference | AlertCompositeAlertAlertExpressionThresholds): any {
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


export function alertCompositeAlertAlertExpressionThresholdsToHclTerraform(struct?: AlertCompositeAlertAlertExpressionThresholdsOutputReference | AlertCompositeAlertAlertExpressionThresholds): any {
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

export class AlertCompositeAlertAlertExpressionThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertCompositeAlertAlertExpressionThresholds | undefined {
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

  public set internalValue(value: AlertCompositeAlertAlertExpressionThresholds | undefined) {
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
export interface AlertCompositeAlertAlertExpression {
  /**
  * If true, a notification is sent when the alert query returns no data. If false, notifications aren't sent in this scenario.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#is_no_data Alert#is_no_data}
  */
  readonly isNoData?: boolean | cdktf.IResolvable;
  /**
  * No data must be seen for this duration before the status changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#no_data_duration_ms Alert#no_data_duration_ms}
  */
  readonly noDataDurationMs?: number;
  /**
  * Required when at least one threshold (Critical, Warning) is defined. Indicates whether the alert triggers when the value is above the threshold or below the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#operand Alert#operand}
  */
  readonly operand?: string;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#thresholds Alert#thresholds}
  */
  readonly thresholds?: AlertCompositeAlertAlertExpressionThresholds;
}

export function alertCompositeAlertAlertExpressionToTerraform(struct?: AlertCompositeAlertAlertExpressionOutputReference | AlertCompositeAlertAlertExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_no_data: cdktf.booleanToTerraform(struct!.isNoData),
    no_data_duration_ms: cdktf.numberToTerraform(struct!.noDataDurationMs),
    operand: cdktf.stringToTerraform(struct!.operand),
    thresholds: alertCompositeAlertAlertExpressionThresholdsToTerraform(struct!.thresholds),
  }
}


export function alertCompositeAlertAlertExpressionToHclTerraform(struct?: AlertCompositeAlertAlertExpressionOutputReference | AlertCompositeAlertAlertExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: alertCompositeAlertAlertExpressionThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "AlertCompositeAlertAlertExpressionThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertCompositeAlertAlertExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertCompositeAlertAlertExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: AlertCompositeAlertAlertExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isNoData = undefined;
      this._noDataDurationMs = undefined;
      this._operand = undefined;
      this._thresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isNoData = value.isNoData;
      this._noDataDurationMs = value.noDataDurationMs;
      this._operand = value.operand;
      this._thresholds.internalValue = value.thresholds;
    }
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
  private _thresholds = new AlertCompositeAlertAlertExpressionThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: AlertCompositeAlertAlertExpressionThresholds) {
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
export interface AlertCompositeAlertAlertQueryDisplayTypeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#comparison_window_ms Alert#comparison_window_ms}
  */
  readonly comparisonWindowMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#display_type Alert#display_type}
  */
  readonly displayType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#is_donut Alert#is_donut}
  */
  readonly isDonut?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#max Alert#max}
  */
  readonly max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#min Alert#min}
  */
  readonly min?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#sort_by Alert#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#sort_direction Alert#sort_direction}
  */
  readonly sortDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#y_axis_log_base Alert#y_axis_log_base}
  */
  readonly yAxisLogBase?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#y_axis_max Alert#y_axis_max}
  */
  readonly yAxisMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#y_axis_min Alert#y_axis_min}
  */
  readonly yAxisMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#y_axis_scale Alert#y_axis_scale}
  */
  readonly yAxisScale?: string;
}

export function alertCompositeAlertAlertQueryDisplayTypeOptionsToTerraform(struct?: AlertCompositeAlertAlertQueryDisplayTypeOptionsOutputReference | AlertCompositeAlertAlertQueryDisplayTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_window_ms: cdktf.numberToTerraform(struct!.comparisonWindowMs),
    display_type: cdktf.stringToTerraform(struct!.displayType),
    is_donut: cdktf.booleanToTerraform(struct!.isDonut),
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
    sort_by: cdktf.stringToTerraform(struct!.sortBy),
    sort_direction: cdktf.stringToTerraform(struct!.sortDirection),
    y_axis_log_base: cdktf.numberToTerraform(struct!.yAxisLogBase),
    y_axis_max: cdktf.numberToTerraform(struct!.yAxisMax),
    y_axis_min: cdktf.numberToTerraform(struct!.yAxisMin),
    y_axis_scale: cdktf.stringToTerraform(struct!.yAxisScale),
  }
}


export function alertCompositeAlertAlertQueryDisplayTypeOptionsToHclTerraform(struct?: AlertCompositeAlertAlertQueryDisplayTypeOptionsOutputReference | AlertCompositeAlertAlertQueryDisplayTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_window_ms: {
      value: cdktf.numberToHclTerraform(struct!.comparisonWindowMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    display_type: {
      value: cdktf.stringToHclTerraform(struct!.displayType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_donut: {
      value: cdktf.booleanToHclTerraform(struct!.isDonut),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_by: {
      value: cdktf.stringToHclTerraform(struct!.sortBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_direction: {
      value: cdktf.stringToHclTerraform(struct!.sortDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_axis_log_base: {
      value: cdktf.numberToHclTerraform(struct!.yAxisLogBase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_max: {
      value: cdktf.numberToHclTerraform(struct!.yAxisMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_min: {
      value: cdktf.numberToHclTerraform(struct!.yAxisMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_scale: {
      value: cdktf.stringToHclTerraform(struct!.yAxisScale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertCompositeAlertAlertQueryDisplayTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertCompositeAlertAlertQueryDisplayTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonWindowMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonWindowMs = this._comparisonWindowMs;
    }
    if (this._displayType !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayType = this._displayType;
    }
    if (this._isDonut !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDonut = this._isDonut;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._sortBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortBy = this._sortBy;
    }
    if (this._sortDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortDirection = this._sortDirection;
    }
    if (this._yAxisLogBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLogBase = this._yAxisLogBase;
    }
    if (this._yAxisMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisMax = this._yAxisMax;
    }
    if (this._yAxisMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisMin = this._yAxisMin;
    }
    if (this._yAxisScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisScale = this._yAxisScale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertCompositeAlertAlertQueryDisplayTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonWindowMs = undefined;
      this._displayType = undefined;
      this._isDonut = undefined;
      this._max = undefined;
      this._min = undefined;
      this._sortBy = undefined;
      this._sortDirection = undefined;
      this._yAxisLogBase = undefined;
      this._yAxisMax = undefined;
      this._yAxisMin = undefined;
      this._yAxisScale = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonWindowMs = value.comparisonWindowMs;
      this._displayType = value.displayType;
      this._isDonut = value.isDonut;
      this._max = value.max;
      this._min = value.min;
      this._sortBy = value.sortBy;
      this._sortDirection = value.sortDirection;
      this._yAxisLogBase = value.yAxisLogBase;
      this._yAxisMax = value.yAxisMax;
      this._yAxisMin = value.yAxisMin;
      this._yAxisScale = value.yAxisScale;
    }
  }

  // comparison_window_ms - computed: false, optional: true, required: false
  private _comparisonWindowMs?: number; 
  public get comparisonWindowMs() {
    return this.getNumberAttribute('comparison_window_ms');
  }
  public set comparisonWindowMs(value: number) {
    this._comparisonWindowMs = value;
  }
  public resetComparisonWindowMs() {
    this._comparisonWindowMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonWindowMsInput() {
    return this._comparisonWindowMs;
  }

  // display_type - computed: false, optional: true, required: false
  private _displayType?: string; 
  public get displayType() {
    return this.getStringAttribute('display_type');
  }
  public set displayType(value: string) {
    this._displayType = value;
  }
  public resetDisplayType() {
    this._displayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayTypeInput() {
    return this._displayType;
  }

  // is_donut - computed: false, optional: true, required: false
  private _isDonut?: boolean | cdktf.IResolvable; 
  public get isDonut() {
    return this.getBooleanAttribute('is_donut');
  }
  public set isDonut(value: boolean | cdktf.IResolvable) {
    this._isDonut = value;
  }
  public resetIsDonut() {
    this._isDonut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDonutInput() {
    return this._isDonut;
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
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
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // sort_direction - computed: false, optional: true, required: false
  private _sortDirection?: string; 
  public get sortDirection() {
    return this.getStringAttribute('sort_direction');
  }
  public set sortDirection(value: string) {
    this._sortDirection = value;
  }
  public resetSortDirection() {
    this._sortDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDirectionInput() {
    return this._sortDirection;
  }

  // y_axis_log_base - computed: false, optional: true, required: false
  private _yAxisLogBase?: number; 
  public get yAxisLogBase() {
    return this.getNumberAttribute('y_axis_log_base');
  }
  public set yAxisLogBase(value: number) {
    this._yAxisLogBase = value;
  }
  public resetYAxisLogBase() {
    this._yAxisLogBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLogBaseInput() {
    return this._yAxisLogBase;
  }

  // y_axis_max - computed: false, optional: true, required: false
  private _yAxisMax?: number; 
  public get yAxisMax() {
    return this.getNumberAttribute('y_axis_max');
  }
  public set yAxisMax(value: number) {
    this._yAxisMax = value;
  }
  public resetYAxisMax() {
    this._yAxisMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisMaxInput() {
    return this._yAxisMax;
  }

  // y_axis_min - computed: false, optional: true, required: false
  private _yAxisMin?: number; 
  public get yAxisMin() {
    return this.getNumberAttribute('y_axis_min');
  }
  public set yAxisMin(value: number) {
    this._yAxisMin = value;
  }
  public resetYAxisMin() {
    this._yAxisMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisMinInput() {
    return this._yAxisMin;
  }

  // y_axis_scale - computed: false, optional: true, required: false
  private _yAxisScale?: string; 
  public get yAxisScale() {
    return this.getStringAttribute('y_axis_scale');
  }
  public set yAxisScale(value: string) {
    this._yAxisScale = value;
  }
  public resetYAxisScale() {
    this._yAxisScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisScaleInput() {
    return this._yAxisScale;
  }
}
export interface AlertCompositeAlertAlertQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#display Alert#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#hidden Alert#hidden}
  */
  readonly hidden: boolean | cdktf.IResolvable;
  /**
  * An optional map of sub-query names in the query_string to a boolean string to hide/show that query. If specified, the map must have an entry for all named sub-queries in the query_string. A value of "true" indicates the query should be hidden. Example: `hidden_queries = {  "a" = "true",  "b" = "false" }`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#hidden_queries Alert#hidden_queries}
  */
  readonly hiddenQueries?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#query_name Alert#query_name}
  */
  readonly queryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#query_string Alert#query_string}
  */
  readonly queryString: string;
  /**
  * display_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#display_type_options Alert#display_type_options}
  */
  readonly displayTypeOptions?: AlertCompositeAlertAlertQueryDisplayTypeOptions;
}

export function alertCompositeAlertAlertQueryToTerraform(struct?: AlertCompositeAlertAlertQueryOutputReference | AlertCompositeAlertAlertQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    hidden: cdktf.booleanToTerraform(struct!.hidden),
    hidden_queries: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hiddenQueries),
    query_name: cdktf.stringToTerraform(struct!.queryName),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    display_type_options: alertCompositeAlertAlertQueryDisplayTypeOptionsToTerraform(struct!.displayTypeOptions),
  }
}


export function alertCompositeAlertAlertQueryToHclTerraform(struct?: AlertCompositeAlertAlertQueryOutputReference | AlertCompositeAlertAlertQuery): any {
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
    hidden: {
      value: cdktf.booleanToHclTerraform(struct!.hidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hidden_queries: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.hiddenQueries),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    query_name: {
      value: cdktf.stringToHclTerraform(struct!.queryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktf.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_type_options: {
      value: alertCompositeAlertAlertQueryDisplayTypeOptionsToHclTerraform(struct!.displayTypeOptions),
      isBlock: true,
      type: "set",
      storageClassType: "AlertCompositeAlertAlertQueryDisplayTypeOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertCompositeAlertAlertQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertCompositeAlertAlertQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._hidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden;
    }
    if (this._hiddenQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiddenQueries = this._hiddenQueries;
    }
    if (this._queryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryName = this._queryName;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._displayTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayTypeOptions = this._displayTypeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertCompositeAlertAlertQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._display = undefined;
      this._hidden = undefined;
      this._hiddenQueries = undefined;
      this._queryName = undefined;
      this._queryString = undefined;
      this._displayTypeOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._display = value.display;
      this._hidden = value.hidden;
      this._hiddenQueries = value.hiddenQueries;
      this._queryName = value.queryName;
      this._queryString = value.queryString;
      this._displayTypeOptions.internalValue = value.displayTypeOptions;
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

  // hidden_queries - computed: false, optional: true, required: false
  private _hiddenQueries?: { [key: string]: string }; 
  public get hiddenQueries() {
    return this.getStringMapAttribute('hidden_queries');
  }
  public set hiddenQueries(value: { [key: string]: string }) {
    this._hiddenQueries = value;
  }
  public resetHiddenQueries() {
    this._hiddenQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenQueriesInput() {
    return this._hiddenQueries;
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

  // query_string - computed: false, optional: false, required: true
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // display_type_options - computed: false, optional: true, required: false
  private _displayTypeOptions = new AlertCompositeAlertAlertQueryDisplayTypeOptionsOutputReference(this, "display_type_options");
  public get displayTypeOptions() {
    return this._displayTypeOptions;
  }
  public putDisplayTypeOptions(value: AlertCompositeAlertAlertQueryDisplayTypeOptions) {
    this._displayTypeOptions.internalValue = value;
  }
  public resetDisplayTypeOptions() {
    this._displayTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayTypeOptionsInput() {
    return this._displayTypeOptions.internalValue;
  }
}
export interface AlertCompositeAlertAlert {
  /**
  * The identifier for this sub alert. Must be a single uppercase letter (examples: "A", "B", "C")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#name Alert#name}
  */
  readonly name: string;
  /**
  * Optional free-form title for this sub alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#title Alert#title}
  */
  readonly title?: string;
  /**
  * expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#expression Alert#expression}
  */
  readonly expression: AlertCompositeAlertAlertExpression;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#query Alert#query}
  */
  readonly query: AlertCompositeAlertAlertQuery;
}

export function alertCompositeAlertAlertToTerraform(struct?: AlertCompositeAlertAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    title: cdktf.stringToTerraform(struct!.title),
    expression: alertCompositeAlertAlertExpressionToTerraform(struct!.expression),
    query: alertCompositeAlertAlertQueryToTerraform(struct!.query),
  }
}


export function alertCompositeAlertAlertToHclTerraform(struct?: AlertCompositeAlertAlert | cdktf.IResolvable): any {
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
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: alertCompositeAlertAlertExpressionToHclTerraform(struct!.expression),
      isBlock: true,
      type: "list",
      storageClassType: "AlertCompositeAlertAlertExpressionList",
    },
    query: {
      value: alertCompositeAlertAlertQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "AlertCompositeAlertAlertQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertCompositeAlertAlertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertCompositeAlertAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._expression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertCompositeAlertAlert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._title = undefined;
      this._expression.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._title = value.title;
      this._expression.internalValue = value.expression;
      this._query.internalValue = value.query;
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

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // expression - computed: false, optional: false, required: true
  private _expression = new AlertCompositeAlertAlertExpressionOutputReference(this, "expression");
  public get expression() {
    return this._expression;
  }
  public putExpression(value: AlertCompositeAlertAlertExpression) {
    this._expression.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression.internalValue;
  }

  // query - computed: false, optional: false, required: true
  private _query = new AlertCompositeAlertAlertQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: AlertCompositeAlertAlertQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}

export class AlertCompositeAlertAlertList extends cdktf.ComplexList {
  public internalValue? : AlertCompositeAlertAlert[] | cdktf.IResolvable

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
  public get(index: number): AlertCompositeAlertAlertOutputReference {
    return new AlertCompositeAlertAlertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertCompositeAlert {
  /**
  * alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#alert Alert#alert}
  */
  readonly alert: AlertCompositeAlertAlert[] | cdktf.IResolvable;
}

export function alertCompositeAlertToTerraform(struct?: AlertCompositeAlertOutputReference | AlertCompositeAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: cdktf.listMapper(alertCompositeAlertAlertToTerraform, true)(struct!.alert),
  }
}


export function alertCompositeAlertToHclTerraform(struct?: AlertCompositeAlertOutputReference | AlertCompositeAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: cdktf.listMapperHcl(alertCompositeAlertAlertToHclTerraform, true)(struct!.alert),
      isBlock: true,
      type: "set",
      storageClassType: "AlertCompositeAlertAlertList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertCompositeAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertCompositeAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertCompositeAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alert.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alert.internalValue = value.alert;
    }
  }

  // alert - computed: false, optional: false, required: true
  private _alert = new AlertCompositeAlertAlertList(this, "alert", true);
  public get alert() {
    return this._alert;
  }
  public putAlert(value: AlertCompositeAlertAlert[] | cdktf.IResolvable) {
    this._alert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }
}
export interface AlertExpressionThresholds {
  /**
  * Defines the threshold for the alert to transition to a Critical (more severe) status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#critical Alert#critical}
  */
  readonly critical?: string;
  /**
  * Critical threshold must be breached for this duration before the status changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#critical_duration_ms Alert#critical_duration_ms}
  */
  readonly criticalDurationMs?: number;
  /**
  * Defines the threshold for the alert to transition to a Warning (less severe) status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#warning Alert#warning}
  */
  readonly warning?: string;
  /**
  * Critical threshold must be breached for this duration before the status changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#warning_duration_ms Alert#warning_duration_ms}
  */
  readonly warningDurationMs?: number;
}

export function alertExpressionThresholdsToTerraform(struct?: AlertExpressionThresholdsOutputReference | AlertExpressionThresholds): any {
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


export function alertExpressionThresholdsToHclTerraform(struct?: AlertExpressionThresholdsOutputReference | AlertExpressionThresholds): any {
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

export class AlertExpressionThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertExpressionThresholds | undefined {
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

  public set internalValue(value: AlertExpressionThresholds | undefined) {
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
export interface AlertExpression {
  /**
  * When false, send a single notification whenever any number of group_by values exceeds the alert threshold. When true, send individual notifications for each distinct group_by value that exceeds the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#is_multi Alert#is_multi}
  */
  readonly isMulti?: boolean | cdktf.IResolvable;
  /**
  * If true, a notification is sent when the alert query returns no data. If false, notifications aren't sent in this scenario.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#is_no_data Alert#is_no_data}
  */
  readonly isNoData?: boolean | cdktf.IResolvable;
  /**
  * No data must be seen for this duration before the status changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#no_data_duration_ms Alert#no_data_duration_ms}
  */
  readonly noDataDurationMs?: number;
  /**
  * Required when at least one threshold (Critical, Warning) is defined. Indicates whether the alert triggers when the value is above the threshold or below the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#operand Alert#operand}
  */
  readonly operand?: string;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#thresholds Alert#thresholds}
  */
  readonly thresholds?: AlertExpressionThresholds;
}

export function alertExpressionToTerraform(struct?: AlertExpressionOutputReference | AlertExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_multi: cdktf.booleanToTerraform(struct!.isMulti),
    is_no_data: cdktf.booleanToTerraform(struct!.isNoData),
    no_data_duration_ms: cdktf.numberToTerraform(struct!.noDataDurationMs),
    operand: cdktf.stringToTerraform(struct!.operand),
    thresholds: alertExpressionThresholdsToTerraform(struct!.thresholds),
  }
}


export function alertExpressionToHclTerraform(struct?: AlertExpressionOutputReference | AlertExpression): any {
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
      value: alertExpressionThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "AlertExpressionThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertExpression | undefined {
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

  public set internalValue(value: AlertExpression | undefined) {
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
  private _thresholds = new AlertExpressionThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: AlertExpressionThresholds) {
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
export interface AlertLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#key Alert#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#value Alert#value}
  */
  readonly value: string;
}

export function alertLabelToTerraform(struct?: AlertLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertLabelToHclTerraform(struct?: AlertLabel | cdktf.IResolvable): any {
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

export class AlertLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertLabel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlertLabel | cdktf.IResolvable | undefined) {
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

export class AlertLabelList extends cdktf.ComplexList {
  public internalValue? : AlertLabel[] | cdktf.IResolvable

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
  public get(index: number): AlertLabelOutputReference {
    return new AlertLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertQueryDisplayTypeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#comparison_window_ms Alert#comparison_window_ms}
  */
  readonly comparisonWindowMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#display_type Alert#display_type}
  */
  readonly displayType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#is_donut Alert#is_donut}
  */
  readonly isDonut?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#max Alert#max}
  */
  readonly max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#min Alert#min}
  */
  readonly min?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#sort_by Alert#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#sort_direction Alert#sort_direction}
  */
  readonly sortDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#y_axis_log_base Alert#y_axis_log_base}
  */
  readonly yAxisLogBase?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#y_axis_max Alert#y_axis_max}
  */
  readonly yAxisMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#y_axis_min Alert#y_axis_min}
  */
  readonly yAxisMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#y_axis_scale Alert#y_axis_scale}
  */
  readonly yAxisScale?: string;
}

export function alertQueryDisplayTypeOptionsToTerraform(struct?: AlertQueryDisplayTypeOptionsOutputReference | AlertQueryDisplayTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_window_ms: cdktf.numberToTerraform(struct!.comparisonWindowMs),
    display_type: cdktf.stringToTerraform(struct!.displayType),
    is_donut: cdktf.booleanToTerraform(struct!.isDonut),
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
    sort_by: cdktf.stringToTerraform(struct!.sortBy),
    sort_direction: cdktf.stringToTerraform(struct!.sortDirection),
    y_axis_log_base: cdktf.numberToTerraform(struct!.yAxisLogBase),
    y_axis_max: cdktf.numberToTerraform(struct!.yAxisMax),
    y_axis_min: cdktf.numberToTerraform(struct!.yAxisMin),
    y_axis_scale: cdktf.stringToTerraform(struct!.yAxisScale),
  }
}


export function alertQueryDisplayTypeOptionsToHclTerraform(struct?: AlertQueryDisplayTypeOptionsOutputReference | AlertQueryDisplayTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_window_ms: {
      value: cdktf.numberToHclTerraform(struct!.comparisonWindowMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    display_type: {
      value: cdktf.stringToHclTerraform(struct!.displayType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_donut: {
      value: cdktf.booleanToHclTerraform(struct!.isDonut),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_by: {
      value: cdktf.stringToHclTerraform(struct!.sortBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_direction: {
      value: cdktf.stringToHclTerraform(struct!.sortDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_axis_log_base: {
      value: cdktf.numberToHclTerraform(struct!.yAxisLogBase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_max: {
      value: cdktf.numberToHclTerraform(struct!.yAxisMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_min: {
      value: cdktf.numberToHclTerraform(struct!.yAxisMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_scale: {
      value: cdktf.stringToHclTerraform(struct!.yAxisScale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertQueryDisplayTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertQueryDisplayTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonWindowMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonWindowMs = this._comparisonWindowMs;
    }
    if (this._displayType !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayType = this._displayType;
    }
    if (this._isDonut !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDonut = this._isDonut;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._sortBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortBy = this._sortBy;
    }
    if (this._sortDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortDirection = this._sortDirection;
    }
    if (this._yAxisLogBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLogBase = this._yAxisLogBase;
    }
    if (this._yAxisMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisMax = this._yAxisMax;
    }
    if (this._yAxisMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisMin = this._yAxisMin;
    }
    if (this._yAxisScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisScale = this._yAxisScale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertQueryDisplayTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonWindowMs = undefined;
      this._displayType = undefined;
      this._isDonut = undefined;
      this._max = undefined;
      this._min = undefined;
      this._sortBy = undefined;
      this._sortDirection = undefined;
      this._yAxisLogBase = undefined;
      this._yAxisMax = undefined;
      this._yAxisMin = undefined;
      this._yAxisScale = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonWindowMs = value.comparisonWindowMs;
      this._displayType = value.displayType;
      this._isDonut = value.isDonut;
      this._max = value.max;
      this._min = value.min;
      this._sortBy = value.sortBy;
      this._sortDirection = value.sortDirection;
      this._yAxisLogBase = value.yAxisLogBase;
      this._yAxisMax = value.yAxisMax;
      this._yAxisMin = value.yAxisMin;
      this._yAxisScale = value.yAxisScale;
    }
  }

  // comparison_window_ms - computed: false, optional: true, required: false
  private _comparisonWindowMs?: number; 
  public get comparisonWindowMs() {
    return this.getNumberAttribute('comparison_window_ms');
  }
  public set comparisonWindowMs(value: number) {
    this._comparisonWindowMs = value;
  }
  public resetComparisonWindowMs() {
    this._comparisonWindowMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonWindowMsInput() {
    return this._comparisonWindowMs;
  }

  // display_type - computed: false, optional: true, required: false
  private _displayType?: string; 
  public get displayType() {
    return this.getStringAttribute('display_type');
  }
  public set displayType(value: string) {
    this._displayType = value;
  }
  public resetDisplayType() {
    this._displayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayTypeInput() {
    return this._displayType;
  }

  // is_donut - computed: false, optional: true, required: false
  private _isDonut?: boolean | cdktf.IResolvable; 
  public get isDonut() {
    return this.getBooleanAttribute('is_donut');
  }
  public set isDonut(value: boolean | cdktf.IResolvable) {
    this._isDonut = value;
  }
  public resetIsDonut() {
    this._isDonut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDonutInput() {
    return this._isDonut;
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
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
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // sort_direction - computed: false, optional: true, required: false
  private _sortDirection?: string; 
  public get sortDirection() {
    return this.getStringAttribute('sort_direction');
  }
  public set sortDirection(value: string) {
    this._sortDirection = value;
  }
  public resetSortDirection() {
    this._sortDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDirectionInput() {
    return this._sortDirection;
  }

  // y_axis_log_base - computed: false, optional: true, required: false
  private _yAxisLogBase?: number; 
  public get yAxisLogBase() {
    return this.getNumberAttribute('y_axis_log_base');
  }
  public set yAxisLogBase(value: number) {
    this._yAxisLogBase = value;
  }
  public resetYAxisLogBase() {
    this._yAxisLogBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLogBaseInput() {
    return this._yAxisLogBase;
  }

  // y_axis_max - computed: false, optional: true, required: false
  private _yAxisMax?: number; 
  public get yAxisMax() {
    return this.getNumberAttribute('y_axis_max');
  }
  public set yAxisMax(value: number) {
    this._yAxisMax = value;
  }
  public resetYAxisMax() {
    this._yAxisMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisMaxInput() {
    return this._yAxisMax;
  }

  // y_axis_min - computed: false, optional: true, required: false
  private _yAxisMin?: number; 
  public get yAxisMin() {
    return this.getNumberAttribute('y_axis_min');
  }
  public set yAxisMin(value: number) {
    this._yAxisMin = value;
  }
  public resetYAxisMin() {
    this._yAxisMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisMinInput() {
    return this._yAxisMin;
  }

  // y_axis_scale - computed: false, optional: true, required: false
  private _yAxisScale?: string; 
  public get yAxisScale() {
    return this.getStringAttribute('y_axis_scale');
  }
  public set yAxisScale(value: string) {
    this._yAxisScale = value;
  }
  public resetYAxisScale() {
    this._yAxisScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisScaleInput() {
    return this._yAxisScale;
  }
}
export interface AlertQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#display Alert#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#hidden Alert#hidden}
  */
  readonly hidden: boolean | cdktf.IResolvable;
  /**
  * An optional map of sub-query names in the query_string to a boolean string to hide/show that query. If specified, the map must have an entry for all named sub-queries in the query_string. A value of "true" indicates the query should be hidden. Example: `hidden_queries = {  "a" = "true",  "b" = "false" }`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#hidden_queries Alert#hidden_queries}
  */
  readonly hiddenQueries?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#query_name Alert#query_name}
  */
  readonly queryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#query_string Alert#query_string}
  */
  readonly queryString: string;
  /**
  * display_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#display_type_options Alert#display_type_options}
  */
  readonly displayTypeOptions?: AlertQueryDisplayTypeOptions;
}

export function alertQueryToTerraform(struct?: AlertQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    hidden: cdktf.booleanToTerraform(struct!.hidden),
    hidden_queries: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hiddenQueries),
    query_name: cdktf.stringToTerraform(struct!.queryName),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    display_type_options: alertQueryDisplayTypeOptionsToTerraform(struct!.displayTypeOptions),
  }
}


export function alertQueryToHclTerraform(struct?: AlertQuery | cdktf.IResolvable): any {
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
    hidden: {
      value: cdktf.booleanToHclTerraform(struct!.hidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hidden_queries: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.hiddenQueries),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    query_name: {
      value: cdktf.stringToHclTerraform(struct!.queryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktf.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_type_options: {
      value: alertQueryDisplayTypeOptionsToHclTerraform(struct!.displayTypeOptions),
      isBlock: true,
      type: "set",
      storageClassType: "AlertQueryDisplayTypeOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._hidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden;
    }
    if (this._hiddenQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiddenQueries = this._hiddenQueries;
    }
    if (this._queryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryName = this._queryName;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._displayTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayTypeOptions = this._displayTypeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._display = undefined;
      this._hidden = undefined;
      this._hiddenQueries = undefined;
      this._queryName = undefined;
      this._queryString = undefined;
      this._displayTypeOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._display = value.display;
      this._hidden = value.hidden;
      this._hiddenQueries = value.hiddenQueries;
      this._queryName = value.queryName;
      this._queryString = value.queryString;
      this._displayTypeOptions.internalValue = value.displayTypeOptions;
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

  // hidden_queries - computed: false, optional: true, required: false
  private _hiddenQueries?: { [key: string]: string }; 
  public get hiddenQueries() {
    return this.getStringMapAttribute('hidden_queries');
  }
  public set hiddenQueries(value: { [key: string]: string }) {
    this._hiddenQueries = value;
  }
  public resetHiddenQueries() {
    this._hiddenQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenQueriesInput() {
    return this._hiddenQueries;
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

  // query_string - computed: false, optional: false, required: true
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // display_type_options - computed: false, optional: true, required: false
  private _displayTypeOptions = new AlertQueryDisplayTypeOptionsOutputReference(this, "display_type_options");
  public get displayTypeOptions() {
    return this._displayTypeOptions;
  }
  public putDisplayTypeOptions(value: AlertQueryDisplayTypeOptions) {
    this._displayTypeOptions.internalValue = value;
  }
  public resetDisplayTypeOptions() {
    this._displayTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayTypeOptionsInput() {
    return this._displayTypeOptions.internalValue;
  }
}

export class AlertQueryList extends cdktf.ComplexList {
  public internalValue? : AlertQuery[] | cdktf.IResolvable

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
  public get(index: number): AlertQueryOutputReference {
    return new AlertQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert lightstep_alert}
*/
export class Alert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lightstep_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Alert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Alert to import
  * @param importFromId The id of the existing Alert that should be imported. Refer to the {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Alert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lightstep_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alert lightstep_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertConfig
  */
  public constructor(scope: Construct, id: string, config: AlertConfig) {
    super(scope, id, {
      terraformResourceType: 'lightstep_alert',
      terraformGeneratorMetadata: {
        providerName: 'lightstep',
        providerVersion: '1.98.2'
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
    this._compositeAlert.internalValue = config.compositeAlert;
    this._expression.internalValue = config.expression;
    this._label.internalValue = config.label;
    this._query.internalValue = config.query;
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
  private _alertingRule = new AlertAlertingRuleList(this, "alerting_rule", true);
  public get alertingRule() {
    return this._alertingRule;
  }
  public putAlertingRule(value: AlertAlertingRule[] | cdktf.IResolvable) {
    this._alertingRule.internalValue = value;
  }
  public resetAlertingRule() {
    this._alertingRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingRuleInput() {
    return this._alertingRule.internalValue;
  }

  // composite_alert - computed: false, optional: true, required: false
  private _compositeAlert = new AlertCompositeAlertOutputReference(this, "composite_alert");
  public get compositeAlert() {
    return this._compositeAlert;
  }
  public putCompositeAlert(value: AlertCompositeAlert) {
    this._compositeAlert.internalValue = value;
  }
  public resetCompositeAlert() {
    this._compositeAlert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeAlertInput() {
    return this._compositeAlert.internalValue;
  }

  // expression - computed: false, optional: true, required: false
  private _expression = new AlertExpressionOutputReference(this, "expression");
  public get expression() {
    return this._expression;
  }
  public putExpression(value: AlertExpression) {
    this._expression.internalValue = value;
  }
  public resetExpression() {
    this._expression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new AlertLabelList(this, "label", true);
  public get label() {
    return this._label;
  }
  public putLabel(value: AlertLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new AlertQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: AlertQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
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
      alerting_rule: cdktf.listMapper(alertAlertingRuleToTerraform, true)(this._alertingRule.internalValue),
      composite_alert: alertCompositeAlertToTerraform(this._compositeAlert.internalValue),
      expression: alertExpressionToTerraform(this._expression.internalValue),
      label: cdktf.listMapper(alertLabelToTerraform, true)(this._label.internalValue),
      query: cdktf.listMapper(alertQueryToTerraform, true)(this._query.internalValue),
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
        value: cdktf.listMapperHcl(alertAlertingRuleToHclTerraform, true)(this._alertingRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertAlertingRuleList",
      },
      composite_alert: {
        value: alertCompositeAlertToHclTerraform(this._compositeAlert.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertCompositeAlertList",
      },
      expression: {
        value: alertExpressionToHclTerraform(this._expression.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertExpressionList",
      },
      label: {
        value: cdktf.listMapperHcl(alertLabelToHclTerraform, true)(this._label.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertLabelList",
      },
      query: {
        value: cdktf.listMapperHcl(alertQueryToHclTerraform, true)(this._query.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertQueryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
