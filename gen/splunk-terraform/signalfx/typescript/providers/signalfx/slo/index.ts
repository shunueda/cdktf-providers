// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SloConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the SLO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#description Slo#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#id Slo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the SLO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Type of the SLO. Currently only RequestBased SLO is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#type Slo#type}
  */
  readonly type: string;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#input Slo#input}
  */
  readonly input: SloInput;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#target Slo#target}
  */
  readonly target: SloTarget;
}
export interface SloInput {
  /**
  * Label used in `program_text` that refers to the data block which contains the stream of successful events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#good_events_label Slo#good_events_label}
  */
  readonly goodEventsLabel?: string;
  /**
  * Signalflow program text for the SLO. More info at "https://dev.splunk.com/observability/docs/signalflow". We require this Signalflow program text to contain at least 2 data blocks - one for the total stream and one for the good stream, whose labels are specified by goodEventsLabel and totalEventsLabel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#program_text Slo#program_text}
  */
  readonly programText: string;
  /**
  * Label used in `program_text` that refers to the data block which contains the stream of total events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#total_events_label Slo#total_events_label}
  */
  readonly totalEventsLabel?: string;
}

export function sloInputToTerraform(struct?: SloInputOutputReference | SloInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    good_events_label: cdktf.stringToTerraform(struct!.goodEventsLabel),
    program_text: cdktf.stringToTerraform(struct!.programText),
    total_events_label: cdktf.stringToTerraform(struct!.totalEventsLabel),
  }
}


export function sloInputToHclTerraform(struct?: SloInputOutputReference | SloInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    good_events_label: {
      value: cdktf.stringToHclTerraform(struct!.goodEventsLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    program_text: {
      value: cdktf.stringToHclTerraform(struct!.programText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_events_label: {
      value: cdktf.stringToHclTerraform(struct!.totalEventsLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._goodEventsLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodEventsLabel = this._goodEventsLabel;
    }
    if (this._programText !== undefined) {
      hasAnyValues = true;
      internalValueResult.programText = this._programText;
    }
    if (this._totalEventsLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEventsLabel = this._totalEventsLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._goodEventsLabel = undefined;
      this._programText = undefined;
      this._totalEventsLabel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._goodEventsLabel = value.goodEventsLabel;
      this._programText = value.programText;
      this._totalEventsLabel = value.totalEventsLabel;
    }
  }

  // good_events_label - computed: false, optional: true, required: false
  private _goodEventsLabel?: string; 
  public get goodEventsLabel() {
    return this.getStringAttribute('good_events_label');
  }
  public set goodEventsLabel(value: string) {
    this._goodEventsLabel = value;
  }
  public resetGoodEventsLabel() {
    this._goodEventsLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodEventsLabelInput() {
    return this._goodEventsLabel;
  }

  // program_text - computed: false, optional: false, required: true
  private _programText?: string; 
  public get programText() {
    return this.getStringAttribute('program_text');
  }
  public set programText(value: string) {
    this._programText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programTextInput() {
    return this._programText;
  }

  // total_events_label - computed: false, optional: true, required: false
  private _totalEventsLabel?: string; 
  public get totalEventsLabel() {
    return this.getStringAttribute('total_events_label');
  }
  public set totalEventsLabel(value: string) {
    this._totalEventsLabel = value;
  }
  public resetTotalEventsLabel() {
    this._totalEventsLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEventsLabelInput() {
    return this._totalEventsLabel;
  }
}
export interface SloTargetAlertRuleRuleParameters {
  /**
  * Burn rate threshold 1 used in burn rate alert calculation. This value must be between 0 and 100/(100-SLO target). Note: BURN_RATE alert rules use the burn_rate_threshold_1 parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#burn_rate_threshold_1 Slo#burn_rate_threshold_1}
  */
  readonly burnRateThreshold1?: number;
  /**
  * Burn rate threshold 2 used in burn rate alert calculation. This value must be between 0 and 100/(100-SLO target). Note: BURN_RATE alert rules use the burn_rate_threshold_2 parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#burn_rate_threshold_2 Slo#burn_rate_threshold_2}
  */
  readonly burnRateThreshold2?: number;
  /**
  * Duration that indicates how long the alert condition is met before the alert is triggered. The value must be positive and smaller than the compliance period of the SLO target. Note: BREACH and ERROR_BUDGET_LEFT alert rules use the fire_lasting parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#fire_lasting Slo#fire_lasting}
  */
  readonly fireLasting?: string;
  /**
  * Long window 1 used in burn rate alert calculation. This value must be longer than short_window_1` and shorter than 90 days. Note: BURN_RATE alert rules use the long_window_1 parameter. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#long_window_1 Slo#long_window_1}
  */
  readonly longWindow1?: string;
  /**
  * Long window 2 used in burn rate alert calculation. This value must be longer than short_window_2` and shorter than 90 days. Note: BURN_RATE alert rules use the long_window_2 parameter. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#long_window_2 Slo#long_window_2}
  */
  readonly longWindow2?: string;
  /**
  * Error budget must be equal to or smaller than this percentage for the alert to be triggered. Note: ERROR_BUDGET_LEFT alert rules use the percent_error_budget_left parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#percent_error_budget_left Slo#percent_error_budget_left}
  */
  readonly percentErrorBudgetLeft?: number;
  /**
  * Percentage of the fire_lasting duration that the alert condition is met before the alert is triggered. Note: BREACH and ERROR_BUDGET_LEFT alert rules use the percent_of_lasting parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#percent_of_lasting Slo#percent_of_lasting}
  */
  readonly percentOfLasting?: number;
  /**
  * Short window 1 used in burn rate alert calculation. This value must be longer than 1/30 of long_window_1. Note: BURN_RATE alert rules use the short_window_1 parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#short_window_1 Slo#short_window_1}
  */
  readonly shortWindow1?: string;
  /**
  * Short window 2 used in burn rate alert calculation. This value must be longer than 1/30 of long_window_2. Note: BURN_RATE alert rules use the short_window_2 parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#short_window_2 Slo#short_window_2}
  */
  readonly shortWindow2?: string;
}

export function sloTargetAlertRuleRuleParametersToTerraform(struct?: SloTargetAlertRuleRuleParametersOutputReference | SloTargetAlertRuleRuleParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burn_rate_threshold_1: cdktf.numberToTerraform(struct!.burnRateThreshold1),
    burn_rate_threshold_2: cdktf.numberToTerraform(struct!.burnRateThreshold2),
    fire_lasting: cdktf.stringToTerraform(struct!.fireLasting),
    long_window_1: cdktf.stringToTerraform(struct!.longWindow1),
    long_window_2: cdktf.stringToTerraform(struct!.longWindow2),
    percent_error_budget_left: cdktf.numberToTerraform(struct!.percentErrorBudgetLeft),
    percent_of_lasting: cdktf.numberToTerraform(struct!.percentOfLasting),
    short_window_1: cdktf.stringToTerraform(struct!.shortWindow1),
    short_window_2: cdktf.stringToTerraform(struct!.shortWindow2),
  }
}


export function sloTargetAlertRuleRuleParametersToHclTerraform(struct?: SloTargetAlertRuleRuleParametersOutputReference | SloTargetAlertRuleRuleParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burn_rate_threshold_1: {
      value: cdktf.numberToHclTerraform(struct!.burnRateThreshold1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burn_rate_threshold_2: {
      value: cdktf.numberToHclTerraform(struct!.burnRateThreshold2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fire_lasting: {
      value: cdktf.stringToHclTerraform(struct!.fireLasting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    long_window_1: {
      value: cdktf.stringToHclTerraform(struct!.longWindow1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    long_window_2: {
      value: cdktf.stringToHclTerraform(struct!.longWindow2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent_error_budget_left: {
      value: cdktf.numberToHclTerraform(struct!.percentErrorBudgetLeft),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent_of_lasting: {
      value: cdktf.numberToHclTerraform(struct!.percentOfLasting),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    short_window_1: {
      value: cdktf.stringToHclTerraform(struct!.shortWindow1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    short_window_2: {
      value: cdktf.stringToHclTerraform(struct!.shortWindow2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloTargetAlertRuleRuleParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloTargetAlertRuleRuleParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burnRateThreshold1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.burnRateThreshold1 = this._burnRateThreshold1;
    }
    if (this._burnRateThreshold2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.burnRateThreshold2 = this._burnRateThreshold2;
    }
    if (this._fireLasting !== undefined) {
      hasAnyValues = true;
      internalValueResult.fireLasting = this._fireLasting;
    }
    if (this._longWindow1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.longWindow1 = this._longWindow1;
    }
    if (this._longWindow2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.longWindow2 = this._longWindow2;
    }
    if (this._percentErrorBudgetLeft !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentErrorBudgetLeft = this._percentErrorBudgetLeft;
    }
    if (this._percentOfLasting !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfLasting = this._percentOfLasting;
    }
    if (this._shortWindow1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortWindow1 = this._shortWindow1;
    }
    if (this._shortWindow2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortWindow2 = this._shortWindow2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloTargetAlertRuleRuleParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._burnRateThreshold1 = undefined;
      this._burnRateThreshold2 = undefined;
      this._fireLasting = undefined;
      this._longWindow1 = undefined;
      this._longWindow2 = undefined;
      this._percentErrorBudgetLeft = undefined;
      this._percentOfLasting = undefined;
      this._shortWindow1 = undefined;
      this._shortWindow2 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._burnRateThreshold1 = value.burnRateThreshold1;
      this._burnRateThreshold2 = value.burnRateThreshold2;
      this._fireLasting = value.fireLasting;
      this._longWindow1 = value.longWindow1;
      this._longWindow2 = value.longWindow2;
      this._percentErrorBudgetLeft = value.percentErrorBudgetLeft;
      this._percentOfLasting = value.percentOfLasting;
      this._shortWindow1 = value.shortWindow1;
      this._shortWindow2 = value.shortWindow2;
    }
  }

  // burn_rate_threshold_1 - computed: true, optional: true, required: false
  private _burnRateThreshold1?: number; 
  public get burnRateThreshold1() {
    return this.getNumberAttribute('burn_rate_threshold_1');
  }
  public set burnRateThreshold1(value: number) {
    this._burnRateThreshold1 = value;
  }
  public resetBurnRateThreshold1() {
    this._burnRateThreshold1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burnRateThreshold1Input() {
    return this._burnRateThreshold1;
  }

  // burn_rate_threshold_2 - computed: true, optional: true, required: false
  private _burnRateThreshold2?: number; 
  public get burnRateThreshold2() {
    return this.getNumberAttribute('burn_rate_threshold_2');
  }
  public set burnRateThreshold2(value: number) {
    this._burnRateThreshold2 = value;
  }
  public resetBurnRateThreshold2() {
    this._burnRateThreshold2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burnRateThreshold2Input() {
    return this._burnRateThreshold2;
  }

  // fire_lasting - computed: true, optional: true, required: false
  private _fireLasting?: string; 
  public get fireLasting() {
    return this.getStringAttribute('fire_lasting');
  }
  public set fireLasting(value: string) {
    this._fireLasting = value;
  }
  public resetFireLasting() {
    this._fireLasting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fireLastingInput() {
    return this._fireLasting;
  }

  // long_window_1 - computed: true, optional: true, required: false
  private _longWindow1?: string; 
  public get longWindow1() {
    return this.getStringAttribute('long_window_1');
  }
  public set longWindow1(value: string) {
    this._longWindow1 = value;
  }
  public resetLongWindow1() {
    this._longWindow1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longWindow1Input() {
    return this._longWindow1;
  }

  // long_window_2 - computed: true, optional: true, required: false
  private _longWindow2?: string; 
  public get longWindow2() {
    return this.getStringAttribute('long_window_2');
  }
  public set longWindow2(value: string) {
    this._longWindow2 = value;
  }
  public resetLongWindow2() {
    this._longWindow2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longWindow2Input() {
    return this._longWindow2;
  }

  // percent_error_budget_left - computed: true, optional: true, required: false
  private _percentErrorBudgetLeft?: number; 
  public get percentErrorBudgetLeft() {
    return this.getNumberAttribute('percent_error_budget_left');
  }
  public set percentErrorBudgetLeft(value: number) {
    this._percentErrorBudgetLeft = value;
  }
  public resetPercentErrorBudgetLeft() {
    this._percentErrorBudgetLeft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentErrorBudgetLeftInput() {
    return this._percentErrorBudgetLeft;
  }

  // percent_of_lasting - computed: true, optional: true, required: false
  private _percentOfLasting?: number; 
  public get percentOfLasting() {
    return this.getNumberAttribute('percent_of_lasting');
  }
  public set percentOfLasting(value: number) {
    this._percentOfLasting = value;
  }
  public resetPercentOfLasting() {
    this._percentOfLasting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfLastingInput() {
    return this._percentOfLasting;
  }

  // short_window_1 - computed: true, optional: true, required: false
  private _shortWindow1?: string; 
  public get shortWindow1() {
    return this.getStringAttribute('short_window_1');
  }
  public set shortWindow1(value: string) {
    this._shortWindow1 = value;
  }
  public resetShortWindow1() {
    this._shortWindow1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortWindow1Input() {
    return this._shortWindow1;
  }

  // short_window_2 - computed: true, optional: true, required: false
  private _shortWindow2?: string; 
  public get shortWindow2() {
    return this.getStringAttribute('short_window_2');
  }
  public set shortWindow2(value: string) {
    this._shortWindow2 = value;
  }
  public resetShortWindow2() {
    this._shortWindow2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortWindow2Input() {
    return this._shortWindow2;
  }
}
export interface SloTargetAlertRuleRuleReminderNotification {
  /**
  * The interval at which you want to receive the notifications, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#interval_ms Slo#interval_ms}
  */
  readonly intervalMs: number;
  /**
  * The duration during which repeat notifications are sent, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#timeout_ms Slo#timeout_ms}
  */
  readonly timeoutMs?: number;
  /**
  * Type of reminder notification. Currently, the only supported value is TIMEOUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#type Slo#type}
  */
  readonly type: string;
}

export function sloTargetAlertRuleRuleReminderNotificationToTerraform(struct?: SloTargetAlertRuleRuleReminderNotificationOutputReference | SloTargetAlertRuleRuleReminderNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval_ms: cdktf.numberToTerraform(struct!.intervalMs),
    timeout_ms: cdktf.numberToTerraform(struct!.timeoutMs),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function sloTargetAlertRuleRuleReminderNotificationToHclTerraform(struct?: SloTargetAlertRuleRuleReminderNotificationOutputReference | SloTargetAlertRuleRuleReminderNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval_ms: {
      value: cdktf.numberToHclTerraform(struct!.intervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SloTargetAlertRuleRuleReminderNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloTargetAlertRuleRuleReminderNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalMs = this._intervalMs;
    }
    if (this._timeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMs = this._timeoutMs;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloTargetAlertRuleRuleReminderNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intervalMs = undefined;
      this._timeoutMs = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intervalMs = value.intervalMs;
      this._timeoutMs = value.timeoutMs;
      this._type = value.type;
    }
  }

  // interval_ms - computed: false, optional: false, required: true
  private _intervalMs?: number; 
  public get intervalMs() {
    return this.getNumberAttribute('interval_ms');
  }
  public set intervalMs(value: number) {
    this._intervalMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMsInput() {
    return this._intervalMs;
  }

  // timeout_ms - computed: false, optional: true, required: false
  private _timeoutMs?: number; 
  public get timeoutMs() {
    return this.getNumberAttribute('timeout_ms');
  }
  public set timeoutMs(value: number) {
    this._timeoutMs = value;
  }
  public resetTimeoutMs() {
    this._timeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMsInput() {
    return this._timeoutMs;
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
export interface SloTargetAlertRuleRule {
  /**
  * Description of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#description Slo#description}
  */
  readonly description?: string;
  /**
  * (default: false) When true, notifications and events will not be generated for the detect label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#disabled Slo#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * List of strings specifying where notifications will be sent when an incident occurs. See https://developers.signalfx.com/v2/docs/detector-model#notifications-models for more info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#notifications Slo#notifications}
  */
  readonly notifications?: string[];
  /**
  * Custom notification message body when an alert is triggered. See https://developers.signalfx.com/v2/reference#detector-model for more info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#parameterized_body Slo#parameterized_body}
  */
  readonly parameterizedBody?: string;
  /**
  * Custom notification message subject when an alert is triggered. See https://developers.signalfx.com/v2/reference#detector-model for more info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#parameterized_subject Slo#parameterized_subject}
  */
  readonly parameterizedSubject?: string;
  /**
  * URL of page to consult when an alert is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#runbook_url Slo#runbook_url}
  */
  readonly runbookUrl?: string;
  /**
  * The severity of the rule, must be one of: Critical, Warning, Major, Minor, Info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#severity Slo#severity}
  */
  readonly severity: string;
  /**
  * Plain text suggested first course of action, such as a command to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#tip Slo#tip}
  */
  readonly tip?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#parameters Slo#parameters}
  */
  readonly parameters?: SloTargetAlertRuleRuleParameters;
  /**
  * reminder_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#reminder_notification Slo#reminder_notification}
  */
  readonly reminderNotification?: SloTargetAlertRuleRuleReminderNotification;
}

export function sloTargetAlertRuleRuleToTerraform(struct?: SloTargetAlertRuleRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    notifications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifications),
    parameterized_body: cdktf.stringToTerraform(struct!.parameterizedBody),
    parameterized_subject: cdktf.stringToTerraform(struct!.parameterizedSubject),
    runbook_url: cdktf.stringToTerraform(struct!.runbookUrl),
    severity: cdktf.stringToTerraform(struct!.severity),
    tip: cdktf.stringToTerraform(struct!.tip),
    parameters: sloTargetAlertRuleRuleParametersToTerraform(struct!.parameters),
    reminder_notification: sloTargetAlertRuleRuleReminderNotificationToTerraform(struct!.reminderNotification),
  }
}


export function sloTargetAlertRuleRuleToHclTerraform(struct?: SloTargetAlertRuleRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notifications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    parameterized_body: {
      value: cdktf.stringToHclTerraform(struct!.parameterizedBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameterized_subject: {
      value: cdktf.stringToHclTerraform(struct!.parameterizedSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runbook_url: {
      value: cdktf.stringToHclTerraform(struct!.runbookUrl),
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
    tip: {
      value: cdktf.stringToHclTerraform(struct!.tip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: sloTargetAlertRuleRuleParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "SloTargetAlertRuleRuleParametersList",
    },
    reminder_notification: {
      value: sloTargetAlertRuleRuleReminderNotificationToHclTerraform(struct!.reminderNotification),
      isBlock: true,
      type: "list",
      storageClassType: "SloTargetAlertRuleRuleReminderNotificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloTargetAlertRuleRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloTargetAlertRuleRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._notifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifications = this._notifications;
    }
    if (this._parameterizedBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterizedBody = this._parameterizedBody;
    }
    if (this._parameterizedSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterizedSubject = this._parameterizedSubject;
    }
    if (this._runbookUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookUrl = this._runbookUrl;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._tip !== undefined) {
      hasAnyValues = true;
      internalValueResult.tip = this._tip;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._reminderNotification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reminderNotification = this._reminderNotification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloTargetAlertRuleRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._notifications = undefined;
      this._parameterizedBody = undefined;
      this._parameterizedSubject = undefined;
      this._runbookUrl = undefined;
      this._severity = undefined;
      this._tip = undefined;
      this._parameters.internalValue = undefined;
      this._reminderNotification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._disabled = value.disabled;
      this._notifications = value.notifications;
      this._parameterizedBody = value.parameterizedBody;
      this._parameterizedSubject = value.parameterizedSubject;
      this._runbookUrl = value.runbookUrl;
      this._severity = value.severity;
      this._tip = value.tip;
      this._parameters.internalValue = value.parameters;
      this._reminderNotification.internalValue = value.reminderNotification;
    }
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications?: string[]; 
  public get notifications() {
    return this.getListAttribute('notifications');
  }
  public set notifications(value: string[]) {
    this._notifications = value;
  }
  public resetNotifications() {
    this._notifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications;
  }

  // parameterized_body - computed: false, optional: true, required: false
  private _parameterizedBody?: string; 
  public get parameterizedBody() {
    return this.getStringAttribute('parameterized_body');
  }
  public set parameterizedBody(value: string) {
    this._parameterizedBody = value;
  }
  public resetParameterizedBody() {
    this._parameterizedBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterizedBodyInput() {
    return this._parameterizedBody;
  }

  // parameterized_subject - computed: false, optional: true, required: false
  private _parameterizedSubject?: string; 
  public get parameterizedSubject() {
    return this.getStringAttribute('parameterized_subject');
  }
  public set parameterizedSubject(value: string) {
    this._parameterizedSubject = value;
  }
  public resetParameterizedSubject() {
    this._parameterizedSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterizedSubjectInput() {
    return this._parameterizedSubject;
  }

  // runbook_url - computed: false, optional: true, required: false
  private _runbookUrl?: string; 
  public get runbookUrl() {
    return this.getStringAttribute('runbook_url');
  }
  public set runbookUrl(value: string) {
    this._runbookUrl = value;
  }
  public resetRunbookUrl() {
    this._runbookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookUrlInput() {
    return this._runbookUrl;
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

  // tip - computed: false, optional: true, required: false
  private _tip?: string; 
  public get tip() {
    return this.getStringAttribute('tip');
  }
  public set tip(value: string) {
    this._tip = value;
  }
  public resetTip() {
    this._tip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tipInput() {
    return this._tip;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new SloTargetAlertRuleRuleParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SloTargetAlertRuleRuleParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // reminder_notification - computed: false, optional: true, required: false
  private _reminderNotification = new SloTargetAlertRuleRuleReminderNotificationOutputReference(this, "reminder_notification");
  public get reminderNotification() {
    return this._reminderNotification;
  }
  public putReminderNotification(value: SloTargetAlertRuleRuleReminderNotification) {
    this._reminderNotification.internalValue = value;
  }
  public resetReminderNotification() {
    this._reminderNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reminderNotificationInput() {
    return this._reminderNotification.internalValue;
  }
}

export class SloTargetAlertRuleRuleList extends cdktf.ComplexList {
  public internalValue? : SloTargetAlertRuleRule[] | cdktf.IResolvable

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
  public get(index: number): SloTargetAlertRuleRuleOutputReference {
    return new SloTargetAlertRuleRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloTargetAlertRule {
  /**
  * SLO alert rule type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#type Slo#type}
  */
  readonly type: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#rule Slo#rule}
  */
  readonly rule: SloTargetAlertRuleRule[] | cdktf.IResolvable;
}

export function sloTargetAlertRuleToTerraform(struct?: SloTargetAlertRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    rule: cdktf.listMapper(sloTargetAlertRuleRuleToTerraform, true)(struct!.rule),
  }
}


export function sloTargetAlertRuleToHclTerraform(struct?: SloTargetAlertRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.listMapperHcl(sloTargetAlertRuleRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "SloTargetAlertRuleRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloTargetAlertRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloTargetAlertRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloTargetAlertRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._rule.internalValue = value.rule;
    }
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

  // rule - computed: false, optional: false, required: true
  private _rule = new SloTargetAlertRuleRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: SloTargetAlertRuleRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class SloTargetAlertRuleList extends cdktf.ComplexList {
  public internalValue? : SloTargetAlertRule[] | cdktf.IResolvable

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
  public get(index: number): SloTargetAlertRuleOutputReference {
    return new SloTargetAlertRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloTarget {
  /**
  * (Required for `RollingWindow` type) Compliance period of this SLO. This value must be within the range of 1d (1 days) to 30d (30 days), inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#compliance_period Slo#compliance_period}
  */
  readonly compliancePeriod?: string;
  /**
  * (Optional for `CalendarWindow` type)  It can be used to change the cycle start time. For example, you can specify sunday as the start of the week (instead of the default monday)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#cycle_start Slo#cycle_start}
  */
  readonly cycleStart?: string;
  /**
  * (Required for `CalendarWindow` type) The cycle type of the calendar window, e.g. week, month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#cycle_type Slo#cycle_type}
  */
  readonly cycleType?: string;
  /**
  * Target value in the form of a percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#slo Slo#slo}
  */
  readonly slo: number;
  /**
  * SLO target type can be the following type: `RollingWindow`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#type Slo#type}
  */
  readonly type: string;
  /**
  * alert_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#alert_rule Slo#alert_rule}
  */
  readonly alertRule: SloTargetAlertRule[] | cdktf.IResolvable;
}

export function sloTargetToTerraform(struct?: SloTargetOutputReference | SloTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compliance_period: cdktf.stringToTerraform(struct!.compliancePeriod),
    cycle_start: cdktf.stringToTerraform(struct!.cycleStart),
    cycle_type: cdktf.stringToTerraform(struct!.cycleType),
    slo: cdktf.numberToTerraform(struct!.slo),
    type: cdktf.stringToTerraform(struct!.type),
    alert_rule: cdktf.listMapper(sloTargetAlertRuleToTerraform, true)(struct!.alertRule),
  }
}


export function sloTargetToHclTerraform(struct?: SloTargetOutputReference | SloTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compliance_period: {
      value: cdktf.stringToHclTerraform(struct!.compliancePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cycle_start: {
      value: cdktf.stringToHclTerraform(struct!.cycleStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cycle_type: {
      value: cdktf.stringToHclTerraform(struct!.cycleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo: {
      value: cdktf.numberToHclTerraform(struct!.slo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_rule: {
      value: cdktf.listMapperHcl(sloTargetAlertRuleToHclTerraform, true)(struct!.alertRule),
      isBlock: true,
      type: "list",
      storageClassType: "SloTargetAlertRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compliancePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.compliancePeriod = this._compliancePeriod;
    }
    if (this._cycleStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.cycleStart = this._cycleStart;
    }
    if (this._cycleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cycleType = this._cycleType;
    }
    if (this._slo !== undefined) {
      hasAnyValues = true;
      internalValueResult.slo = this._slo;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._alertRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertRule = this._alertRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compliancePeriod = undefined;
      this._cycleStart = undefined;
      this._cycleType = undefined;
      this._slo = undefined;
      this._type = undefined;
      this._alertRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compliancePeriod = value.compliancePeriod;
      this._cycleStart = value.cycleStart;
      this._cycleType = value.cycleType;
      this._slo = value.slo;
      this._type = value.type;
      this._alertRule.internalValue = value.alertRule;
    }
  }

  // compliance_period - computed: false, optional: true, required: false
  private _compliancePeriod?: string; 
  public get compliancePeriod() {
    return this.getStringAttribute('compliance_period');
  }
  public set compliancePeriod(value: string) {
    this._compliancePeriod = value;
  }
  public resetCompliancePeriod() {
    this._compliancePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compliancePeriodInput() {
    return this._compliancePeriod;
  }

  // cycle_start - computed: true, optional: true, required: false
  private _cycleStart?: string; 
  public get cycleStart() {
    return this.getStringAttribute('cycle_start');
  }
  public set cycleStart(value: string) {
    this._cycleStart = value;
  }
  public resetCycleStart() {
    this._cycleStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleStartInput() {
    return this._cycleStart;
  }

  // cycle_type - computed: false, optional: true, required: false
  private _cycleType?: string; 
  public get cycleType() {
    return this.getStringAttribute('cycle_type');
  }
  public set cycleType(value: string) {
    this._cycleType = value;
  }
  public resetCycleType() {
    this._cycleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleTypeInput() {
    return this._cycleType;
  }

  // slo - computed: false, optional: false, required: true
  private _slo?: number; 
  public get slo() {
    return this.getNumberAttribute('slo');
  }
  public set slo(value: number) {
    this._slo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloInput() {
    return this._slo;
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

  // alert_rule - computed: false, optional: false, required: true
  private _alertRule = new SloTargetAlertRuleList(this, "alert_rule", false);
  public get alertRule() {
    return this._alertRule;
  }
  public putAlertRule(value: SloTargetAlertRule[] | cdktf.IResolvable) {
    this._alertRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleInput() {
    return this._alertRule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo signalfx_slo}
*/
export class Slo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_slo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Slo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Slo to import
  * @param importFromId The id of the existing Slo that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Slo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_slo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/slo signalfx_slo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SloConfig
  */
  public constructor(scope: Construct, id: string, config: SloConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_slo',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.23.0',
        providerVersionConstraint: '9.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._input.internalValue = config.input;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // input - computed: false, optional: false, required: true
  private _input = new SloInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: SloInput) {
    this._input.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new SloTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: SloTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      input: sloInputToTerraform(this._input.internalValue),
      target: sloTargetToTerraform(this._target.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input: {
        value: sloInputToHclTerraform(this._input.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SloInputList",
      },
      target: {
        value: sloTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SloTargetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
