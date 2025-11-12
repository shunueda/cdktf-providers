// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAppAnomaliesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#id WebAppAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this setting (APPLICATION_METHOD, APPLICATION). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#scope WebAppAnomalies#scope}
  */
  readonly scope?: string;
  /**
  * error_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#error_rate WebAppAnomalies#error_rate}
  */
  readonly errorRate: WebAppAnomaliesErrorRate;
  /**
  * response_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#response_time WebAppAnomalies#response_time}
  */
  readonly responseTime: WebAppAnomaliesResponseTime;
  /**
  * traffic_drops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#traffic_drops WebAppAnomalies#traffic_drops}
  */
  readonly trafficDrops: WebAppAnomaliesTrafficDrops;
  /**
  * traffic_spikes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#traffic_spikes WebAppAnomalies#traffic_spikes}
  */
  readonly trafficSpikes: WebAppAnomaliesTrafficSpikes;
}
export interface WebAppAnomaliesErrorRateErrorRateAutoOverAlertingProtection {
  /**
  * Only alert if there are at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#actions_per_minute WebAppAnomalies#actions_per_minute}
  */
  readonly actionsPerMinute: number;
  /**
  * Only alert if the abnormal state remains for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#minutes_abnormal_state WebAppAnomalies#minutes_abnormal_state}
  */
  readonly minutesAbnormalState: number;
}

export function webAppAnomaliesErrorRateErrorRateAutoOverAlertingProtectionToTerraform(struct?: WebAppAnomaliesErrorRateErrorRateAutoOverAlertingProtectionOutputReference | WebAppAnomaliesErrorRateErrorRateAutoOverAlertingProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions_per_minute: cdktf.numberToTerraform(struct!.actionsPerMinute),
    minutes_abnormal_state: cdktf.numberToTerraform(struct!.minutesAbnormalState),
  }
}


export function webAppAnomaliesErrorRateErrorRateAutoOverAlertingProtectionToHclTerraform(struct?: WebAppAnomaliesErrorRateErrorRateAutoOverAlertingProtectionOutputReference | WebAppAnomaliesErrorRateErrorRateAutoOverAlertingProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions_per_minute: {
      value: cdktf.numberToHclTerraform(struct!.actionsPerMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes_abnormal_state: {
      value: cdktf.numberToHclTerraform(struct!.minutesAbnormalState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAnomaliesErrorRateErrorRateAutoOverAlertingProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAnomaliesErrorRateErrorRateAutoOverAlertingProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionsPerMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionsPerMinute = this._actionsPerMinute;
    }
    if (this._minutesAbnormalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesAbnormalState = this._minutesAbnormalState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAnomaliesErrorRateErrorRateAutoOverAlertingProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionsPerMinute = undefined;
      this._minutesAbnormalState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionsPerMinute = value.actionsPerMinute;
      this._minutesAbnormalState = value.minutesAbnormalState;
    }
  }

  // actions_per_minute - computed: false, optional: false, required: true
  private _actionsPerMinute?: number; 
  public get actionsPerMinute() {
    return this.getNumberAttribute('actions_per_minute');
  }
  public set actionsPerMinute(value: number) {
    this._actionsPerMinute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsPerMinuteInput() {
    return this._actionsPerMinute;
  }

  // minutes_abnormal_state - computed: false, optional: false, required: true
  private _minutesAbnormalState?: number; 
  public get minutesAbnormalState() {
    return this.getNumberAttribute('minutes_abnormal_state');
  }
  public set minutesAbnormalState(value: number) {
    this._minutesAbnormalState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesAbnormalStateInput() {
    return this._minutesAbnormalState;
  }
}
export interface WebAppAnomaliesErrorRateErrorRateAuto {
  /**
  * Absolute threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#absolute_increase WebAppAnomalies#absolute_increase}
  */
  readonly absoluteIncrease: number;
  /**
  * Relative threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#relative_increase WebAppAnomalies#relative_increase}
  */
  readonly relativeIncrease: number;
  /**
  * over_alerting_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#over_alerting_protection WebAppAnomalies#over_alerting_protection}
  */
  readonly overAlertingProtection: WebAppAnomaliesErrorRateErrorRateAutoOverAlertingProtection;
}

export function webAppAnomaliesErrorRateErrorRateAutoToTerraform(struct?: WebAppAnomaliesErrorRateErrorRateAutoOutputReference | WebAppAnomaliesErrorRateErrorRateAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_increase: cdktf.numberToTerraform(struct!.absoluteIncrease),
    relative_increase: cdktf.numberToTerraform(struct!.relativeIncrease),
    over_alerting_protection: webAppAnomaliesErrorRateErrorRateAutoOverAlertingProtectionToTerraform(struct!.overAlertingProtection),
  }
}


export function webAppAnomaliesErrorRateErrorRateAutoToHclTerraform(struct?: WebAppAnomaliesErrorRateErrorRateAutoOutputReference | WebAppAnomaliesErrorRateErrorRateAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute_increase: {
      value: cdktf.numberToHclTerraform(struct!.absoluteIncrease),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    relative_increase: {
      value: cdktf.numberToHclTerraform(struct!.relativeIncrease),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    over_alerting_protection: {
      value: webAppAnomaliesErrorRateErrorRateAutoOverAlertingProtectionToHclTerraform(struct!.overAlertingProtection),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppAnomaliesErrorRateErrorRateAutoOverAlertingProtectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAnomaliesErrorRateErrorRateAutoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAnomaliesErrorRateErrorRateAuto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteIncrease !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteIncrease = this._absoluteIncrease;
    }
    if (this._relativeIncrease !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeIncrease = this._relativeIncrease;
    }
    if (this._overAlertingProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overAlertingProtection = this._overAlertingProtection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAnomaliesErrorRateErrorRateAuto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._absoluteIncrease = undefined;
      this._relativeIncrease = undefined;
      this._overAlertingProtection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._absoluteIncrease = value.absoluteIncrease;
      this._relativeIncrease = value.relativeIncrease;
      this._overAlertingProtection.internalValue = value.overAlertingProtection;
    }
  }

  // absolute_increase - computed: false, optional: false, required: true
  private _absoluteIncrease?: number; 
  public get absoluteIncrease() {
    return this.getNumberAttribute('absolute_increase');
  }
  public set absoluteIncrease(value: number) {
    this._absoluteIncrease = value;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteIncreaseInput() {
    return this._absoluteIncrease;
  }

  // relative_increase - computed: false, optional: false, required: true
  private _relativeIncrease?: number; 
  public get relativeIncrease() {
    return this.getNumberAttribute('relative_increase');
  }
  public set relativeIncrease(value: number) {
    this._relativeIncrease = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeIncreaseInput() {
    return this._relativeIncrease;
  }

  // over_alerting_protection - computed: false, optional: false, required: true
  private _overAlertingProtection = new WebAppAnomaliesErrorRateErrorRateAutoOverAlertingProtectionOutputReference(this, "over_alerting_protection");
  public get overAlertingProtection() {
    return this._overAlertingProtection;
  }
  public putOverAlertingProtection(value: WebAppAnomaliesErrorRateErrorRateAutoOverAlertingProtection) {
    this._overAlertingProtection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overAlertingProtectionInput() {
    return this._overAlertingProtection.internalValue;
  }
}
export interface WebAppAnomaliesErrorRateErrorRateFixed {
  /**
  * To avoid over-alerting for low traffic applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#error_rate_req_per_min WebAppAnomalies#error_rate_req_per_min}
  */
  readonly errorRateReqPerMin: number;
  /**
  * Possible Values: `Low`, `Medium`, `High`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#error_rate_sensitivity WebAppAnomalies#error_rate_sensitivity}
  */
  readonly errorRateSensitivity: string;
  /**
  * Alert if this custom error rate threshold is exceeded during any 5-minute-period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#max_failure_rate_increase WebAppAnomalies#max_failure_rate_increase}
  */
  readonly maxFailureRateIncrease: number;
  /**
  * Amount of minutes the observed traffic has to stay in abnormal state before alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#minutes_abnormal_state WebAppAnomalies#minutes_abnormal_state}
  */
  readonly minutesAbnormalState: number;
}

export function webAppAnomaliesErrorRateErrorRateFixedToTerraform(struct?: WebAppAnomaliesErrorRateErrorRateFixedOutputReference | WebAppAnomaliesErrorRateErrorRateFixed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_rate_req_per_min: cdktf.numberToTerraform(struct!.errorRateReqPerMin),
    error_rate_sensitivity: cdktf.stringToTerraform(struct!.errorRateSensitivity),
    max_failure_rate_increase: cdktf.numberToTerraform(struct!.maxFailureRateIncrease),
    minutes_abnormal_state: cdktf.numberToTerraform(struct!.minutesAbnormalState),
  }
}


export function webAppAnomaliesErrorRateErrorRateFixedToHclTerraform(struct?: WebAppAnomaliesErrorRateErrorRateFixedOutputReference | WebAppAnomaliesErrorRateErrorRateFixed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_rate_req_per_min: {
      value: cdktf.numberToHclTerraform(struct!.errorRateReqPerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_rate_sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.errorRateSensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_failure_rate_increase: {
      value: cdktf.numberToHclTerraform(struct!.maxFailureRateIncrease),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes_abnormal_state: {
      value: cdktf.numberToHclTerraform(struct!.minutesAbnormalState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAnomaliesErrorRateErrorRateFixedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAnomaliesErrorRateErrorRateFixed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorRateReqPerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRateReqPerMin = this._errorRateReqPerMin;
    }
    if (this._errorRateSensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRateSensitivity = this._errorRateSensitivity;
    }
    if (this._maxFailureRateIncrease !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFailureRateIncrease = this._maxFailureRateIncrease;
    }
    if (this._minutesAbnormalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesAbnormalState = this._minutesAbnormalState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAnomaliesErrorRateErrorRateFixed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorRateReqPerMin = undefined;
      this._errorRateSensitivity = undefined;
      this._maxFailureRateIncrease = undefined;
      this._minutesAbnormalState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorRateReqPerMin = value.errorRateReqPerMin;
      this._errorRateSensitivity = value.errorRateSensitivity;
      this._maxFailureRateIncrease = value.maxFailureRateIncrease;
      this._minutesAbnormalState = value.minutesAbnormalState;
    }
  }

  // error_rate_req_per_min - computed: false, optional: false, required: true
  private _errorRateReqPerMin?: number; 
  public get errorRateReqPerMin() {
    return this.getNumberAttribute('error_rate_req_per_min');
  }
  public set errorRateReqPerMin(value: number) {
    this._errorRateReqPerMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRateReqPerMinInput() {
    return this._errorRateReqPerMin;
  }

  // error_rate_sensitivity - computed: false, optional: false, required: true
  private _errorRateSensitivity?: string; 
  public get errorRateSensitivity() {
    return this.getStringAttribute('error_rate_sensitivity');
  }
  public set errorRateSensitivity(value: string) {
    this._errorRateSensitivity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRateSensitivityInput() {
    return this._errorRateSensitivity;
  }

  // max_failure_rate_increase - computed: false, optional: false, required: true
  private _maxFailureRateIncrease?: number; 
  public get maxFailureRateIncrease() {
    return this.getNumberAttribute('max_failure_rate_increase');
  }
  public set maxFailureRateIncrease(value: number) {
    this._maxFailureRateIncrease = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailureRateIncreaseInput() {
    return this._maxFailureRateIncrease;
  }

  // minutes_abnormal_state - computed: false, optional: false, required: true
  private _minutesAbnormalState?: number; 
  public get minutesAbnormalState() {
    return this.getNumberAttribute('minutes_abnormal_state');
  }
  public set minutesAbnormalState(value: number) {
    this._minutesAbnormalState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesAbnormalStateInput() {
    return this._minutesAbnormalState;
  }
}
export interface WebAppAnomaliesErrorRate {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#enabled WebAppAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `Auto`, `Fixed`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#error_rate_detection_mode WebAppAnomalies#error_rate_detection_mode}
  */
  readonly errorRateDetectionMode?: string;
  /**
  * error_rate_auto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#error_rate_auto WebAppAnomalies#error_rate_auto}
  */
  readonly errorRateAuto?: WebAppAnomaliesErrorRateErrorRateAuto;
  /**
  * error_rate_fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#error_rate_fixed WebAppAnomalies#error_rate_fixed}
  */
  readonly errorRateFixed?: WebAppAnomaliesErrorRateErrorRateFixed;
}

export function webAppAnomaliesErrorRateToTerraform(struct?: WebAppAnomaliesErrorRateOutputReference | WebAppAnomaliesErrorRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    error_rate_detection_mode: cdktf.stringToTerraform(struct!.errorRateDetectionMode),
    error_rate_auto: webAppAnomaliesErrorRateErrorRateAutoToTerraform(struct!.errorRateAuto),
    error_rate_fixed: webAppAnomaliesErrorRateErrorRateFixedToTerraform(struct!.errorRateFixed),
  }
}


export function webAppAnomaliesErrorRateToHclTerraform(struct?: WebAppAnomaliesErrorRateOutputReference | WebAppAnomaliesErrorRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    error_rate_detection_mode: {
      value: cdktf.stringToHclTerraform(struct!.errorRateDetectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_rate_auto: {
      value: webAppAnomaliesErrorRateErrorRateAutoToHclTerraform(struct!.errorRateAuto),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppAnomaliesErrorRateErrorRateAutoList",
    },
    error_rate_fixed: {
      value: webAppAnomaliesErrorRateErrorRateFixedToHclTerraform(struct!.errorRateFixed),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppAnomaliesErrorRateErrorRateFixedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAnomaliesErrorRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAnomaliesErrorRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._errorRateDetectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRateDetectionMode = this._errorRateDetectionMode;
    }
    if (this._errorRateAuto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRateAuto = this._errorRateAuto?.internalValue;
    }
    if (this._errorRateFixed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRateFixed = this._errorRateFixed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAnomaliesErrorRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._errorRateDetectionMode = undefined;
      this._errorRateAuto.internalValue = undefined;
      this._errorRateFixed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._errorRateDetectionMode = value.errorRateDetectionMode;
      this._errorRateAuto.internalValue = value.errorRateAuto;
      this._errorRateFixed.internalValue = value.errorRateFixed;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // error_rate_detection_mode - computed: false, optional: true, required: false
  private _errorRateDetectionMode?: string; 
  public get errorRateDetectionMode() {
    return this.getStringAttribute('error_rate_detection_mode');
  }
  public set errorRateDetectionMode(value: string) {
    this._errorRateDetectionMode = value;
  }
  public resetErrorRateDetectionMode() {
    this._errorRateDetectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRateDetectionModeInput() {
    return this._errorRateDetectionMode;
  }

  // error_rate_auto - computed: false, optional: true, required: false
  private _errorRateAuto = new WebAppAnomaliesErrorRateErrorRateAutoOutputReference(this, "error_rate_auto");
  public get errorRateAuto() {
    return this._errorRateAuto;
  }
  public putErrorRateAuto(value: WebAppAnomaliesErrorRateErrorRateAuto) {
    this._errorRateAuto.internalValue = value;
  }
  public resetErrorRateAuto() {
    this._errorRateAuto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRateAutoInput() {
    return this._errorRateAuto.internalValue;
  }

  // error_rate_fixed - computed: false, optional: true, required: false
  private _errorRateFixed = new WebAppAnomaliesErrorRateErrorRateFixedOutputReference(this, "error_rate_fixed");
  public get errorRateFixed() {
    return this._errorRateFixed;
  }
  public putErrorRateFixed(value: WebAppAnomaliesErrorRateErrorRateFixed) {
    this._errorRateFixed.internalValue = value;
  }
  public resetErrorRateFixed() {
    this._errorRateFixed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRateFixedInput() {
    return this._errorRateFixed.internalValue;
  }
}
export interface WebAppAnomaliesResponseTimeResponseTimeAutoOverAlertingProtection {
  /**
  * Only alert if there are at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#actions_per_minute WebAppAnomalies#actions_per_minute}
  */
  readonly actionsPerMinute: number;
  /**
  * Only alert if the abnormal state remains for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#minutes_abnormal_state WebAppAnomalies#minutes_abnormal_state}
  */
  readonly minutesAbnormalState: number;
}

export function webAppAnomaliesResponseTimeResponseTimeAutoOverAlertingProtectionToTerraform(struct?: WebAppAnomaliesResponseTimeResponseTimeAutoOverAlertingProtectionOutputReference | WebAppAnomaliesResponseTimeResponseTimeAutoOverAlertingProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions_per_minute: cdktf.numberToTerraform(struct!.actionsPerMinute),
    minutes_abnormal_state: cdktf.numberToTerraform(struct!.minutesAbnormalState),
  }
}


export function webAppAnomaliesResponseTimeResponseTimeAutoOverAlertingProtectionToHclTerraform(struct?: WebAppAnomaliesResponseTimeResponseTimeAutoOverAlertingProtectionOutputReference | WebAppAnomaliesResponseTimeResponseTimeAutoOverAlertingProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions_per_minute: {
      value: cdktf.numberToHclTerraform(struct!.actionsPerMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes_abnormal_state: {
      value: cdktf.numberToHclTerraform(struct!.minutesAbnormalState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAnomaliesResponseTimeResponseTimeAutoOverAlertingProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAnomaliesResponseTimeResponseTimeAutoOverAlertingProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionsPerMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionsPerMinute = this._actionsPerMinute;
    }
    if (this._minutesAbnormalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesAbnormalState = this._minutesAbnormalState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAnomaliesResponseTimeResponseTimeAutoOverAlertingProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionsPerMinute = undefined;
      this._minutesAbnormalState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionsPerMinute = value.actionsPerMinute;
      this._minutesAbnormalState = value.minutesAbnormalState;
    }
  }

  // actions_per_minute - computed: false, optional: false, required: true
  private _actionsPerMinute?: number; 
  public get actionsPerMinute() {
    return this.getNumberAttribute('actions_per_minute');
  }
  public set actionsPerMinute(value: number) {
    this._actionsPerMinute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsPerMinuteInput() {
    return this._actionsPerMinute;
  }

  // minutes_abnormal_state - computed: false, optional: false, required: true
  private _minutesAbnormalState?: number; 
  public get minutesAbnormalState() {
    return this.getNumberAttribute('minutes_abnormal_state');
  }
  public set minutesAbnormalState(value: number) {
    this._minutesAbnormalState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesAbnormalStateInput() {
    return this._minutesAbnormalState;
  }
}
export interface WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeAll {
  /**
  * Absolute threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#degradation_milliseconds WebAppAnomalies#degradation_milliseconds}
  */
  readonly degradationMilliseconds: number;
  /**
  * Relative threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#degradation_percent WebAppAnomalies#degradation_percent}
  */
  readonly degradationPercent: number;
}

export function webAppAnomaliesResponseTimeResponseTimeAutoResponseTimeAllToTerraform(struct?: WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeAllOutputReference | WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    degradation_milliseconds: cdktf.numberToTerraform(struct!.degradationMilliseconds),
    degradation_percent: cdktf.numberToTerraform(struct!.degradationPercent),
  }
}


export function webAppAnomaliesResponseTimeResponseTimeAutoResponseTimeAllToHclTerraform(struct?: WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeAllOutputReference | WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    degradation_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.degradationMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    degradation_percent: {
      value: cdktf.numberToHclTerraform(struct!.degradationPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._degradationMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.degradationMilliseconds = this._degradationMilliseconds;
    }
    if (this._degradationPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.degradationPercent = this._degradationPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._degradationMilliseconds = undefined;
      this._degradationPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._degradationMilliseconds = value.degradationMilliseconds;
      this._degradationPercent = value.degradationPercent;
    }
  }

  // degradation_milliseconds - computed: false, optional: false, required: true
  private _degradationMilliseconds?: number; 
  public get degradationMilliseconds() {
    return this.getNumberAttribute('degradation_milliseconds');
  }
  public set degradationMilliseconds(value: number) {
    this._degradationMilliseconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get degradationMillisecondsInput() {
    return this._degradationMilliseconds;
  }

  // degradation_percent - computed: false, optional: false, required: true
  private _degradationPercent?: number; 
  public get degradationPercent() {
    return this.getNumberAttribute('degradation_percent');
  }
  public set degradationPercent(value: number) {
    this._degradationPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get degradationPercentInput() {
    return this._degradationPercent;
  }
}
export interface WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeSlowest {
  /**
  * Absolute threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#slowest_degradation_milliseconds WebAppAnomalies#slowest_degradation_milliseconds}
  */
  readonly slowestDegradationMilliseconds: number;
  /**
  * Relative threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#slowest_degradation_percent WebAppAnomalies#slowest_degradation_percent}
  */
  readonly slowestDegradationPercent: number;
}

export function webAppAnomaliesResponseTimeResponseTimeAutoResponseTimeSlowestToTerraform(struct?: WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeSlowestOutputReference | WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeSlowest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slowest_degradation_milliseconds: cdktf.numberToTerraform(struct!.slowestDegradationMilliseconds),
    slowest_degradation_percent: cdktf.numberToTerraform(struct!.slowestDegradationPercent),
  }
}


export function webAppAnomaliesResponseTimeResponseTimeAutoResponseTimeSlowestToHclTerraform(struct?: WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeSlowestOutputReference | WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeSlowest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slowest_degradation_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.slowestDegradationMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slowest_degradation_percent: {
      value: cdktf.numberToHclTerraform(struct!.slowestDegradationPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeSlowestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeSlowest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slowestDegradationMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowestDegradationMilliseconds = this._slowestDegradationMilliseconds;
    }
    if (this._slowestDegradationPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowestDegradationPercent = this._slowestDegradationPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeSlowest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._slowestDegradationMilliseconds = undefined;
      this._slowestDegradationPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._slowestDegradationMilliseconds = value.slowestDegradationMilliseconds;
      this._slowestDegradationPercent = value.slowestDegradationPercent;
    }
  }

  // slowest_degradation_milliseconds - computed: false, optional: false, required: true
  private _slowestDegradationMilliseconds?: number; 
  public get slowestDegradationMilliseconds() {
    return this.getNumberAttribute('slowest_degradation_milliseconds');
  }
  public set slowestDegradationMilliseconds(value: number) {
    this._slowestDegradationMilliseconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slowestDegradationMillisecondsInput() {
    return this._slowestDegradationMilliseconds;
  }

  // slowest_degradation_percent - computed: false, optional: false, required: true
  private _slowestDegradationPercent?: number; 
  public get slowestDegradationPercent() {
    return this.getNumberAttribute('slowest_degradation_percent');
  }
  public set slowestDegradationPercent(value: number) {
    this._slowestDegradationPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slowestDegradationPercentInput() {
    return this._slowestDegradationPercent;
  }
}
export interface WebAppAnomaliesResponseTimeResponseTimeAuto {
  /**
  * over_alerting_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#over_alerting_protection WebAppAnomalies#over_alerting_protection}
  */
  readonly overAlertingProtection: WebAppAnomaliesResponseTimeResponseTimeAutoOverAlertingProtection;
  /**
  * response_time_all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#response_time_all WebAppAnomalies#response_time_all}
  */
  readonly responseTimeAll: WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeAll;
  /**
  * response_time_slowest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#response_time_slowest WebAppAnomalies#response_time_slowest}
  */
  readonly responseTimeSlowest: WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeSlowest;
}

export function webAppAnomaliesResponseTimeResponseTimeAutoToTerraform(struct?: WebAppAnomaliesResponseTimeResponseTimeAutoOutputReference | WebAppAnomaliesResponseTimeResponseTimeAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    over_alerting_protection: webAppAnomaliesResponseTimeResponseTimeAutoOverAlertingProtectionToTerraform(struct!.overAlertingProtection),
    response_time_all: webAppAnomaliesResponseTimeResponseTimeAutoResponseTimeAllToTerraform(struct!.responseTimeAll),
    response_time_slowest: webAppAnomaliesResponseTimeResponseTimeAutoResponseTimeSlowestToTerraform(struct!.responseTimeSlowest),
  }
}


export function webAppAnomaliesResponseTimeResponseTimeAutoToHclTerraform(struct?: WebAppAnomaliesResponseTimeResponseTimeAutoOutputReference | WebAppAnomaliesResponseTimeResponseTimeAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    over_alerting_protection: {
      value: webAppAnomaliesResponseTimeResponseTimeAutoOverAlertingProtectionToHclTerraform(struct!.overAlertingProtection),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppAnomaliesResponseTimeResponseTimeAutoOverAlertingProtectionList",
    },
    response_time_all: {
      value: webAppAnomaliesResponseTimeResponseTimeAutoResponseTimeAllToHclTerraform(struct!.responseTimeAll),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeAllList",
    },
    response_time_slowest: {
      value: webAppAnomaliesResponseTimeResponseTimeAutoResponseTimeSlowestToHclTerraform(struct!.responseTimeSlowest),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeSlowestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAnomaliesResponseTimeResponseTimeAutoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAnomaliesResponseTimeResponseTimeAuto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overAlertingProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overAlertingProtection = this._overAlertingProtection?.internalValue;
    }
    if (this._responseTimeAll?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeAll = this._responseTimeAll?.internalValue;
    }
    if (this._responseTimeSlowest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeSlowest = this._responseTimeSlowest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAnomaliesResponseTimeResponseTimeAuto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overAlertingProtection.internalValue = undefined;
      this._responseTimeAll.internalValue = undefined;
      this._responseTimeSlowest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overAlertingProtection.internalValue = value.overAlertingProtection;
      this._responseTimeAll.internalValue = value.responseTimeAll;
      this._responseTimeSlowest.internalValue = value.responseTimeSlowest;
    }
  }

  // over_alerting_protection - computed: false, optional: false, required: true
  private _overAlertingProtection = new WebAppAnomaliesResponseTimeResponseTimeAutoOverAlertingProtectionOutputReference(this, "over_alerting_protection");
  public get overAlertingProtection() {
    return this._overAlertingProtection;
  }
  public putOverAlertingProtection(value: WebAppAnomaliesResponseTimeResponseTimeAutoOverAlertingProtection) {
    this._overAlertingProtection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overAlertingProtectionInput() {
    return this._overAlertingProtection.internalValue;
  }

  // response_time_all - computed: false, optional: false, required: true
  private _responseTimeAll = new WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeAllOutputReference(this, "response_time_all");
  public get responseTimeAll() {
    return this._responseTimeAll;
  }
  public putResponseTimeAll(value: WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeAll) {
    this._responseTimeAll.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeAllInput() {
    return this._responseTimeAll.internalValue;
  }

  // response_time_slowest - computed: false, optional: false, required: true
  private _responseTimeSlowest = new WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeSlowestOutputReference(this, "response_time_slowest");
  public get responseTimeSlowest() {
    return this._responseTimeSlowest;
  }
  public putResponseTimeSlowest(value: WebAppAnomaliesResponseTimeResponseTimeAutoResponseTimeSlowest) {
    this._responseTimeSlowest.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeSlowestInput() {
    return this._responseTimeSlowest.internalValue;
  }
}
export interface WebAppAnomaliesResponseTimeResponseTimeFixedOverAlertingProtection {
  /**
  * Only alert if there are at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#actions_per_minute WebAppAnomalies#actions_per_minute}
  */
  readonly actionsPerMinute: number;
  /**
  * Only alert if the abnormal state remains for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#minutes_abnormal_state WebAppAnomalies#minutes_abnormal_state}
  */
  readonly minutesAbnormalState: number;
}

export function webAppAnomaliesResponseTimeResponseTimeFixedOverAlertingProtectionToTerraform(struct?: WebAppAnomaliesResponseTimeResponseTimeFixedOverAlertingProtectionOutputReference | WebAppAnomaliesResponseTimeResponseTimeFixedOverAlertingProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions_per_minute: cdktf.numberToTerraform(struct!.actionsPerMinute),
    minutes_abnormal_state: cdktf.numberToTerraform(struct!.minutesAbnormalState),
  }
}


export function webAppAnomaliesResponseTimeResponseTimeFixedOverAlertingProtectionToHclTerraform(struct?: WebAppAnomaliesResponseTimeResponseTimeFixedOverAlertingProtectionOutputReference | WebAppAnomaliesResponseTimeResponseTimeFixedOverAlertingProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions_per_minute: {
      value: cdktf.numberToHclTerraform(struct!.actionsPerMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes_abnormal_state: {
      value: cdktf.numberToHclTerraform(struct!.minutesAbnormalState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAnomaliesResponseTimeResponseTimeFixedOverAlertingProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAnomaliesResponseTimeResponseTimeFixedOverAlertingProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionsPerMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionsPerMinute = this._actionsPerMinute;
    }
    if (this._minutesAbnormalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesAbnormalState = this._minutesAbnormalState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAnomaliesResponseTimeResponseTimeFixedOverAlertingProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionsPerMinute = undefined;
      this._minutesAbnormalState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionsPerMinute = value.actionsPerMinute;
      this._minutesAbnormalState = value.minutesAbnormalState;
    }
  }

  // actions_per_minute - computed: false, optional: false, required: true
  private _actionsPerMinute?: number; 
  public get actionsPerMinute() {
    return this.getNumberAttribute('actions_per_minute');
  }
  public set actionsPerMinute(value: number) {
    this._actionsPerMinute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsPerMinuteInput() {
    return this._actionsPerMinute;
  }

  // minutes_abnormal_state - computed: false, optional: false, required: true
  private _minutesAbnormalState?: number; 
  public get minutesAbnormalState() {
    return this.getNumberAttribute('minutes_abnormal_state');
  }
  public set minutesAbnormalState(value: number) {
    this._minutesAbnormalState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesAbnormalStateInput() {
    return this._minutesAbnormalState;
  }
}
export interface WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeAll {
  /**
  * Alert if the key performance metric degrades beyond this many ms within an observation period of 5 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#degradation_milliseconds WebAppAnomalies#degradation_milliseconds}
  */
  readonly degradationMilliseconds: number;
}

export function webAppAnomaliesResponseTimeResponseTimeFixedResponseTimeAllToTerraform(struct?: WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeAllOutputReference | WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    degradation_milliseconds: cdktf.numberToTerraform(struct!.degradationMilliseconds),
  }
}


export function webAppAnomaliesResponseTimeResponseTimeFixedResponseTimeAllToHclTerraform(struct?: WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeAllOutputReference | WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    degradation_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.degradationMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._degradationMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.degradationMilliseconds = this._degradationMilliseconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._degradationMilliseconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._degradationMilliseconds = value.degradationMilliseconds;
    }
  }

  // degradation_milliseconds - computed: false, optional: false, required: true
  private _degradationMilliseconds?: number; 
  public get degradationMilliseconds() {
    return this.getNumberAttribute('degradation_milliseconds');
  }
  public set degradationMilliseconds(value: number) {
    this._degradationMilliseconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get degradationMillisecondsInput() {
    return this._degradationMilliseconds;
  }
}
export interface WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeSlowest {
  /**
  * Alert if the key performance metric of the slowest 10% degrades beyond this many ms within an observation period of 5 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#slowest_degradation_milliseconds WebAppAnomalies#slowest_degradation_milliseconds}
  */
  readonly slowestDegradationMilliseconds: number;
}

export function webAppAnomaliesResponseTimeResponseTimeFixedResponseTimeSlowestToTerraform(struct?: WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeSlowestOutputReference | WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeSlowest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slowest_degradation_milliseconds: cdktf.numberToTerraform(struct!.slowestDegradationMilliseconds),
  }
}


export function webAppAnomaliesResponseTimeResponseTimeFixedResponseTimeSlowestToHclTerraform(struct?: WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeSlowestOutputReference | WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeSlowest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slowest_degradation_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.slowestDegradationMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeSlowestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeSlowest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slowestDegradationMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowestDegradationMilliseconds = this._slowestDegradationMilliseconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeSlowest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._slowestDegradationMilliseconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._slowestDegradationMilliseconds = value.slowestDegradationMilliseconds;
    }
  }

  // slowest_degradation_milliseconds - computed: false, optional: false, required: true
  private _slowestDegradationMilliseconds?: number; 
  public get slowestDegradationMilliseconds() {
    return this.getNumberAttribute('slowest_degradation_milliseconds');
  }
  public set slowestDegradationMilliseconds(value: number) {
    this._slowestDegradationMilliseconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slowestDegradationMillisecondsInput() {
    return this._slowestDegradationMilliseconds;
  }
}
export interface WebAppAnomaliesResponseTimeResponseTimeFixed {
  /**
  * Possible Values: `Medium`, `High`, `Low`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#sensitivity WebAppAnomalies#sensitivity}
  */
  readonly sensitivity: string;
  /**
  * over_alerting_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#over_alerting_protection WebAppAnomalies#over_alerting_protection}
  */
  readonly overAlertingProtection: WebAppAnomaliesResponseTimeResponseTimeFixedOverAlertingProtection;
  /**
  * response_time_all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#response_time_all WebAppAnomalies#response_time_all}
  */
  readonly responseTimeAll: WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeAll;
  /**
  * response_time_slowest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#response_time_slowest WebAppAnomalies#response_time_slowest}
  */
  readonly responseTimeSlowest: WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeSlowest;
}

export function webAppAnomaliesResponseTimeResponseTimeFixedToTerraform(struct?: WebAppAnomaliesResponseTimeResponseTimeFixedOutputReference | WebAppAnomaliesResponseTimeResponseTimeFixed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
    over_alerting_protection: webAppAnomaliesResponseTimeResponseTimeFixedOverAlertingProtectionToTerraform(struct!.overAlertingProtection),
    response_time_all: webAppAnomaliesResponseTimeResponseTimeFixedResponseTimeAllToTerraform(struct!.responseTimeAll),
    response_time_slowest: webAppAnomaliesResponseTimeResponseTimeFixedResponseTimeSlowestToTerraform(struct!.responseTimeSlowest),
  }
}


export function webAppAnomaliesResponseTimeResponseTimeFixedToHclTerraform(struct?: WebAppAnomaliesResponseTimeResponseTimeFixedOutputReference | WebAppAnomaliesResponseTimeResponseTimeFixed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.sensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    over_alerting_protection: {
      value: webAppAnomaliesResponseTimeResponseTimeFixedOverAlertingProtectionToHclTerraform(struct!.overAlertingProtection),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppAnomaliesResponseTimeResponseTimeFixedOverAlertingProtectionList",
    },
    response_time_all: {
      value: webAppAnomaliesResponseTimeResponseTimeFixedResponseTimeAllToHclTerraform(struct!.responseTimeAll),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeAllList",
    },
    response_time_slowest: {
      value: webAppAnomaliesResponseTimeResponseTimeFixedResponseTimeSlowestToHclTerraform(struct!.responseTimeSlowest),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeSlowestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAnomaliesResponseTimeResponseTimeFixedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAnomaliesResponseTimeResponseTimeFixed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    if (this._overAlertingProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overAlertingProtection = this._overAlertingProtection?.internalValue;
    }
    if (this._responseTimeAll?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeAll = this._responseTimeAll?.internalValue;
    }
    if (this._responseTimeSlowest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeSlowest = this._responseTimeSlowest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAnomaliesResponseTimeResponseTimeFixed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sensitivity = undefined;
      this._overAlertingProtection.internalValue = undefined;
      this._responseTimeAll.internalValue = undefined;
      this._responseTimeSlowest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sensitivity = value.sensitivity;
      this._overAlertingProtection.internalValue = value.overAlertingProtection;
      this._responseTimeAll.internalValue = value.responseTimeAll;
      this._responseTimeSlowest.internalValue = value.responseTimeSlowest;
    }
  }

  // sensitivity - computed: false, optional: false, required: true
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }

  // over_alerting_protection - computed: false, optional: false, required: true
  private _overAlertingProtection = new WebAppAnomaliesResponseTimeResponseTimeFixedOverAlertingProtectionOutputReference(this, "over_alerting_protection");
  public get overAlertingProtection() {
    return this._overAlertingProtection;
  }
  public putOverAlertingProtection(value: WebAppAnomaliesResponseTimeResponseTimeFixedOverAlertingProtection) {
    this._overAlertingProtection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overAlertingProtectionInput() {
    return this._overAlertingProtection.internalValue;
  }

  // response_time_all - computed: false, optional: false, required: true
  private _responseTimeAll = new WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeAllOutputReference(this, "response_time_all");
  public get responseTimeAll() {
    return this._responseTimeAll;
  }
  public putResponseTimeAll(value: WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeAll) {
    this._responseTimeAll.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeAllInput() {
    return this._responseTimeAll.internalValue;
  }

  // response_time_slowest - computed: false, optional: false, required: true
  private _responseTimeSlowest = new WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeSlowestOutputReference(this, "response_time_slowest");
  public get responseTimeSlowest() {
    return this._responseTimeSlowest;
  }
  public putResponseTimeSlowest(value: WebAppAnomaliesResponseTimeResponseTimeFixedResponseTimeSlowest) {
    this._responseTimeSlowest.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeSlowestInput() {
    return this._responseTimeSlowest.internalValue;
  }
}
export interface WebAppAnomaliesResponseTime {
  /**
  * Possible Values: `Auto`, `Fixed`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#detection_mode WebAppAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#enabled WebAppAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * response_time_auto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#response_time_auto WebAppAnomalies#response_time_auto}
  */
  readonly responseTimeAuto?: WebAppAnomaliesResponseTimeResponseTimeAuto;
  /**
  * response_time_fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#response_time_fixed WebAppAnomalies#response_time_fixed}
  */
  readonly responseTimeFixed?: WebAppAnomaliesResponseTimeResponseTimeFixed;
}

export function webAppAnomaliesResponseTimeToTerraform(struct?: WebAppAnomaliesResponseTimeOutputReference | WebAppAnomaliesResponseTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    response_time_auto: webAppAnomaliesResponseTimeResponseTimeAutoToTerraform(struct!.responseTimeAuto),
    response_time_fixed: webAppAnomaliesResponseTimeResponseTimeFixedToTerraform(struct!.responseTimeFixed),
  }
}


export function webAppAnomaliesResponseTimeToHclTerraform(struct?: WebAppAnomaliesResponseTimeOutputReference | WebAppAnomaliesResponseTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection_mode: {
      value: cdktf.stringToHclTerraform(struct!.detectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_time_auto: {
      value: webAppAnomaliesResponseTimeResponseTimeAutoToHclTerraform(struct!.responseTimeAuto),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppAnomaliesResponseTimeResponseTimeAutoList",
    },
    response_time_fixed: {
      value: webAppAnomaliesResponseTimeResponseTimeFixedToHclTerraform(struct!.responseTimeFixed),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppAnomaliesResponseTimeResponseTimeFixedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAnomaliesResponseTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAnomaliesResponseTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._responseTimeAuto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeAuto = this._responseTimeAuto?.internalValue;
    }
    if (this._responseTimeFixed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeFixed = this._responseTimeFixed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAnomaliesResponseTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._responseTimeAuto.internalValue = undefined;
      this._responseTimeFixed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._responseTimeAuto.internalValue = value.responseTimeAuto;
      this._responseTimeFixed.internalValue = value.responseTimeFixed;
    }
  }

  // detection_mode - computed: false, optional: true, required: false
  private _detectionMode?: string; 
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  public resetDetectionMode() {
    this._detectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // response_time_auto - computed: false, optional: true, required: false
  private _responseTimeAuto = new WebAppAnomaliesResponseTimeResponseTimeAutoOutputReference(this, "response_time_auto");
  public get responseTimeAuto() {
    return this._responseTimeAuto;
  }
  public putResponseTimeAuto(value: WebAppAnomaliesResponseTimeResponseTimeAuto) {
    this._responseTimeAuto.internalValue = value;
  }
  public resetResponseTimeAuto() {
    this._responseTimeAuto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeAutoInput() {
    return this._responseTimeAuto.internalValue;
  }

  // response_time_fixed - computed: false, optional: true, required: false
  private _responseTimeFixed = new WebAppAnomaliesResponseTimeResponseTimeFixedOutputReference(this, "response_time_fixed");
  public get responseTimeFixed() {
    return this._responseTimeFixed;
  }
  public putResponseTimeFixed(value: WebAppAnomaliesResponseTimeResponseTimeFixed) {
    this._responseTimeFixed.internalValue = value;
  }
  public resetResponseTimeFixed() {
    this._responseTimeFixed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeFixedInput() {
    return this._responseTimeFixed.internalValue;
  }
}
export interface WebAppAnomaliesTrafficDropsTrafficDrops {
  /**
  * Minutes the observed traffic has to stay in abnormal state before alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#abnormal_state_abnormal_state WebAppAnomalies#abnormal_state_abnormal_state}
  */
  readonly abnormalStateAbnormalState: number;
  /**
  * Alert if the observed traffic is less than this percentage of the expected value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#traffic_drop_percentage WebAppAnomalies#traffic_drop_percentage}
  */
  readonly trafficDropPercentage: number;
}

export function webAppAnomaliesTrafficDropsTrafficDropsToTerraform(struct?: WebAppAnomaliesTrafficDropsTrafficDropsOutputReference | WebAppAnomaliesTrafficDropsTrafficDrops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abnormal_state_abnormal_state: cdktf.numberToTerraform(struct!.abnormalStateAbnormalState),
    traffic_drop_percentage: cdktf.numberToTerraform(struct!.trafficDropPercentage),
  }
}


export function webAppAnomaliesTrafficDropsTrafficDropsToHclTerraform(struct?: WebAppAnomaliesTrafficDropsTrafficDropsOutputReference | WebAppAnomaliesTrafficDropsTrafficDrops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abnormal_state_abnormal_state: {
      value: cdktf.numberToHclTerraform(struct!.abnormalStateAbnormalState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_drop_percentage: {
      value: cdktf.numberToHclTerraform(struct!.trafficDropPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAnomaliesTrafficDropsTrafficDropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAnomaliesTrafficDropsTrafficDrops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abnormalStateAbnormalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.abnormalStateAbnormalState = this._abnormalStateAbnormalState;
    }
    if (this._trafficDropPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficDropPercentage = this._trafficDropPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAnomaliesTrafficDropsTrafficDrops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abnormalStateAbnormalState = undefined;
      this._trafficDropPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abnormalStateAbnormalState = value.abnormalStateAbnormalState;
      this._trafficDropPercentage = value.trafficDropPercentage;
    }
  }

  // abnormal_state_abnormal_state - computed: false, optional: false, required: true
  private _abnormalStateAbnormalState?: number; 
  public get abnormalStateAbnormalState() {
    return this.getNumberAttribute('abnormal_state_abnormal_state');
  }
  public set abnormalStateAbnormalState(value: number) {
    this._abnormalStateAbnormalState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get abnormalStateAbnormalStateInput() {
    return this._abnormalStateAbnormalState;
  }

  // traffic_drop_percentage - computed: false, optional: false, required: true
  private _trafficDropPercentage?: number; 
  public get trafficDropPercentage() {
    return this.getNumberAttribute('traffic_drop_percentage');
  }
  public set trafficDropPercentage(value: number) {
    this._trafficDropPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDropPercentageInput() {
    return this._trafficDropPercentage;
  }
}
export interface WebAppAnomaliesTrafficDrops {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#enabled WebAppAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * traffic_drops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#traffic_drops WebAppAnomalies#traffic_drops}
  */
  readonly trafficDrops?: WebAppAnomaliesTrafficDropsTrafficDrops;
}

export function webAppAnomaliesTrafficDropsToTerraform(struct?: WebAppAnomaliesTrafficDropsOutputReference | WebAppAnomaliesTrafficDrops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    traffic_drops: webAppAnomaliesTrafficDropsTrafficDropsToTerraform(struct!.trafficDrops),
  }
}


export function webAppAnomaliesTrafficDropsToHclTerraform(struct?: WebAppAnomaliesTrafficDropsOutputReference | WebAppAnomaliesTrafficDrops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    traffic_drops: {
      value: webAppAnomaliesTrafficDropsTrafficDropsToHclTerraform(struct!.trafficDrops),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppAnomaliesTrafficDropsTrafficDropsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAnomaliesTrafficDropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAnomaliesTrafficDrops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._trafficDrops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficDrops = this._trafficDrops?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAnomaliesTrafficDrops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._trafficDrops.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._trafficDrops.internalValue = value.trafficDrops;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // traffic_drops - computed: false, optional: true, required: false
  private _trafficDrops = new WebAppAnomaliesTrafficDropsTrafficDropsOutputReference(this, "traffic_drops");
  public get trafficDrops() {
    return this._trafficDrops;
  }
  public putTrafficDrops(value: WebAppAnomaliesTrafficDropsTrafficDrops) {
    this._trafficDrops.internalValue = value;
  }
  public resetTrafficDrops() {
    this._trafficDrops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDropsInput() {
    return this._trafficDrops.internalValue;
  }
}
export interface WebAppAnomaliesTrafficSpikesTrafficSpikes {
  /**
  * Minutes an application has to stay in abnormal state before alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#minutes_abnormal_state WebAppAnomalies#minutes_abnormal_state}
  */
  readonly minutesAbnormalState: number;
  /**
  * Alert if the observed traffic is more than this percentage of the expected value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#traffic_spike_percentage WebAppAnomalies#traffic_spike_percentage}
  */
  readonly trafficSpikePercentage: number;
}

export function webAppAnomaliesTrafficSpikesTrafficSpikesToTerraform(struct?: WebAppAnomaliesTrafficSpikesTrafficSpikesOutputReference | WebAppAnomaliesTrafficSpikesTrafficSpikes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_abnormal_state: cdktf.numberToTerraform(struct!.minutesAbnormalState),
    traffic_spike_percentage: cdktf.numberToTerraform(struct!.trafficSpikePercentage),
  }
}


export function webAppAnomaliesTrafficSpikesTrafficSpikesToHclTerraform(struct?: WebAppAnomaliesTrafficSpikesTrafficSpikesOutputReference | WebAppAnomaliesTrafficSpikesTrafficSpikes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minutes_abnormal_state: {
      value: cdktf.numberToHclTerraform(struct!.minutesAbnormalState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_spike_percentage: {
      value: cdktf.numberToHclTerraform(struct!.trafficSpikePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAnomaliesTrafficSpikesTrafficSpikesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAnomaliesTrafficSpikesTrafficSpikes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutesAbnormalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesAbnormalState = this._minutesAbnormalState;
    }
    if (this._trafficSpikePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficSpikePercentage = this._trafficSpikePercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAnomaliesTrafficSpikesTrafficSpikes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minutesAbnormalState = undefined;
      this._trafficSpikePercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minutesAbnormalState = value.minutesAbnormalState;
      this._trafficSpikePercentage = value.trafficSpikePercentage;
    }
  }

  // minutes_abnormal_state - computed: false, optional: false, required: true
  private _minutesAbnormalState?: number; 
  public get minutesAbnormalState() {
    return this.getNumberAttribute('minutes_abnormal_state');
  }
  public set minutesAbnormalState(value: number) {
    this._minutesAbnormalState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesAbnormalStateInput() {
    return this._minutesAbnormalState;
  }

  // traffic_spike_percentage - computed: false, optional: false, required: true
  private _trafficSpikePercentage?: number; 
  public get trafficSpikePercentage() {
    return this.getNumberAttribute('traffic_spike_percentage');
  }
  public set trafficSpikePercentage(value: number) {
    this._trafficSpikePercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSpikePercentageInput() {
    return this._trafficSpikePercentage;
  }
}
export interface WebAppAnomaliesTrafficSpikes {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#enabled WebAppAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * traffic_spikes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#traffic_spikes WebAppAnomalies#traffic_spikes}
  */
  readonly trafficSpikes?: WebAppAnomaliesTrafficSpikesTrafficSpikes;
}

export function webAppAnomaliesTrafficSpikesToTerraform(struct?: WebAppAnomaliesTrafficSpikesOutputReference | WebAppAnomaliesTrafficSpikes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    traffic_spikes: webAppAnomaliesTrafficSpikesTrafficSpikesToTerraform(struct!.trafficSpikes),
  }
}


export function webAppAnomaliesTrafficSpikesToHclTerraform(struct?: WebAppAnomaliesTrafficSpikesOutputReference | WebAppAnomaliesTrafficSpikes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    traffic_spikes: {
      value: webAppAnomaliesTrafficSpikesTrafficSpikesToHclTerraform(struct!.trafficSpikes),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppAnomaliesTrafficSpikesTrafficSpikesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAnomaliesTrafficSpikesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAnomaliesTrafficSpikes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._trafficSpikes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficSpikes = this._trafficSpikes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAnomaliesTrafficSpikes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._trafficSpikes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._trafficSpikes.internalValue = value.trafficSpikes;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // traffic_spikes - computed: false, optional: true, required: false
  private _trafficSpikes = new WebAppAnomaliesTrafficSpikesTrafficSpikesOutputReference(this, "traffic_spikes");
  public get trafficSpikes() {
    return this._trafficSpikes;
  }
  public putTrafficSpikes(value: WebAppAnomaliesTrafficSpikesTrafficSpikes) {
    this._trafficSpikes.internalValue = value;
  }
  public resetTrafficSpikes() {
    this._trafficSpikes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSpikesInput() {
    return this._trafficSpikes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies dynatrace_web_app_anomalies}
*/
export class WebAppAnomalies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_web_app_anomalies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAppAnomalies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAppAnomalies to import
  * @param importFromId The id of the existing WebAppAnomalies that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAppAnomalies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_web_app_anomalies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_anomalies dynatrace_web_app_anomalies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAppAnomaliesConfig
  */
  public constructor(scope: Construct, id: string, config: WebAppAnomaliesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_web_app_anomalies',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
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
    this._scope = config.scope;
    this._errorRate.internalValue = config.errorRate;
    this._responseTime.internalValue = config.responseTime;
    this._trafficDrops.internalValue = config.trafficDrops;
    this._trafficSpikes.internalValue = config.trafficSpikes;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // error_rate - computed: false, optional: false, required: true
  private _errorRate = new WebAppAnomaliesErrorRateOutputReference(this, "error_rate");
  public get errorRate() {
    return this._errorRate;
  }
  public putErrorRate(value: WebAppAnomaliesErrorRate) {
    this._errorRate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRateInput() {
    return this._errorRate.internalValue;
  }

  // response_time - computed: false, optional: false, required: true
  private _responseTime = new WebAppAnomaliesResponseTimeOutputReference(this, "response_time");
  public get responseTime() {
    return this._responseTime;
  }
  public putResponseTime(value: WebAppAnomaliesResponseTime) {
    this._responseTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeInput() {
    return this._responseTime.internalValue;
  }

  // traffic_drops - computed: false, optional: false, required: true
  private _trafficDrops = new WebAppAnomaliesTrafficDropsOutputReference(this, "traffic_drops");
  public get trafficDrops() {
    return this._trafficDrops;
  }
  public putTrafficDrops(value: WebAppAnomaliesTrafficDrops) {
    this._trafficDrops.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDropsInput() {
    return this._trafficDrops.internalValue;
  }

  // traffic_spikes - computed: false, optional: false, required: true
  private _trafficSpikes = new WebAppAnomaliesTrafficSpikesOutputReference(this, "traffic_spikes");
  public get trafficSpikes() {
    return this._trafficSpikes;
  }
  public putTrafficSpikes(value: WebAppAnomaliesTrafficSpikes) {
    this._trafficSpikes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSpikesInput() {
    return this._trafficSpikes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      scope: cdktf.stringToTerraform(this._scope),
      error_rate: webAppAnomaliesErrorRateToTerraform(this._errorRate.internalValue),
      response_time: webAppAnomaliesResponseTimeToTerraform(this._responseTime.internalValue),
      traffic_drops: webAppAnomaliesTrafficDropsToTerraform(this._trafficDrops.internalValue),
      traffic_spikes: webAppAnomaliesTrafficSpikesToTerraform(this._trafficSpikes.internalValue),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_rate: {
        value: webAppAnomaliesErrorRateToHclTerraform(this._errorRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppAnomaliesErrorRateList",
      },
      response_time: {
        value: webAppAnomaliesResponseTimeToHclTerraform(this._responseTime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppAnomaliesResponseTimeList",
      },
      traffic_drops: {
        value: webAppAnomaliesTrafficDropsToHclTerraform(this._trafficDrops.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppAnomaliesTrafficDropsList",
      },
      traffic_spikes: {
        value: webAppAnomaliesTrafficSpikesToHclTerraform(this._trafficSpikes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppAnomaliesTrafficSpikesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
