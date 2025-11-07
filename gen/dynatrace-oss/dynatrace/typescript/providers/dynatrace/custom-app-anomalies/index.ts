// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomAppAnomaliesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#id CustomAppAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this setting (DEVICE_APPLICATION_METHOD CUSTOM_APPLICATION environment)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#scope CustomAppAnomalies#scope}
  */
  readonly scope?: string;
  /**
  * error_rate_increase block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#error_rate_increase CustomAppAnomalies#error_rate_increase}
  */
  readonly errorRateIncrease: CustomAppAnomaliesErrorRateIncrease;
  /**
  * slow_user_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#slow_user_actions CustomAppAnomalies#slow_user_actions}
  */
  readonly slowUserActions: CustomAppAnomaliesSlowUserActions;
  /**
  * unexpected_high_load block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#unexpected_high_load CustomAppAnomalies#unexpected_high_load}
  */
  readonly unexpectedHighLoad: CustomAppAnomaliesUnexpectedHighLoad;
  /**
  * unexpected_low_load block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#unexpected_low_load CustomAppAnomalies#unexpected_low_load}
  */
  readonly unexpectedLowLoad: CustomAppAnomaliesUnexpectedLowLoad;
}
export interface CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseAuto {
  /**
  * Absolute threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#threshold_absolute CustomAppAnomalies#threshold_absolute}
  */
  readonly thresholdAbsolute: number;
  /**
  * Relative threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#threshold_relative CustomAppAnomalies#threshold_relative}
  */
  readonly thresholdRelative: number;
}

export function customAppAnomaliesErrorRateIncreaseErrorRateIncreaseAutoToTerraform(struct?: CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseAutoOutputReference | CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold_absolute: cdktf.numberToTerraform(struct!.thresholdAbsolute),
    threshold_relative: cdktf.numberToTerraform(struct!.thresholdRelative),
  }
}


export function customAppAnomaliesErrorRateIncreaseErrorRateIncreaseAutoToHclTerraform(struct?: CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseAutoOutputReference | CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold_absolute: {
      value: cdktf.numberToHclTerraform(struct!.thresholdAbsolute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_relative: {
      value: cdktf.numberToHclTerraform(struct!.thresholdRelative),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseAutoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseAuto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._thresholdAbsolute !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdAbsolute = this._thresholdAbsolute;
    }
    if (this._thresholdRelative !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdRelative = this._thresholdRelative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseAuto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._thresholdAbsolute = undefined;
      this._thresholdRelative = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._thresholdAbsolute = value.thresholdAbsolute;
      this._thresholdRelative = value.thresholdRelative;
    }
  }

  // threshold_absolute - computed: false, optional: false, required: true
  private _thresholdAbsolute?: number; 
  public get thresholdAbsolute() {
    return this.getNumberAttribute('threshold_absolute');
  }
  public set thresholdAbsolute(value: number) {
    this._thresholdAbsolute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdAbsoluteInput() {
    return this._thresholdAbsolute;
  }

  // threshold_relative - computed: false, optional: false, required: true
  private _thresholdRelative?: number; 
  public get thresholdRelative() {
    return this.getNumberAttribute('threshold_relative');
  }
  public set thresholdRelative(value: number) {
    this._thresholdRelative = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdRelativeInput() {
    return this._thresholdRelative;
  }
}
export interface CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseFixed {
  /**
  * Possible Values: `Low`, `Medium`, `High`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#sensitivity CustomAppAnomalies#sensitivity}
  */
  readonly sensitivity: string;
  /**
  * Absolute threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#threshold_absolute CustomAppAnomalies#threshold_absolute}
  */
  readonly thresholdAbsolute: number;
}

export function customAppAnomaliesErrorRateIncreaseErrorRateIncreaseFixedToTerraform(struct?: CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseFixedOutputReference | CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseFixed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
    threshold_absolute: cdktf.numberToTerraform(struct!.thresholdAbsolute),
  }
}


export function customAppAnomaliesErrorRateIncreaseErrorRateIncreaseFixedToHclTerraform(struct?: CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseFixedOutputReference | CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseFixed): any {
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
    threshold_absolute: {
      value: cdktf.numberToHclTerraform(struct!.thresholdAbsolute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseFixedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseFixed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    if (this._thresholdAbsolute !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdAbsolute = this._thresholdAbsolute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseFixed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sensitivity = undefined;
      this._thresholdAbsolute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sensitivity = value.sensitivity;
      this._thresholdAbsolute = value.thresholdAbsolute;
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

  // threshold_absolute - computed: false, optional: false, required: true
  private _thresholdAbsolute?: number; 
  public get thresholdAbsolute() {
    return this.getNumberAttribute('threshold_absolute');
  }
  public set thresholdAbsolute(value: number) {
    this._thresholdAbsolute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdAbsoluteInput() {
    return this._thresholdAbsolute;
  }
}
export interface CustomAppAnomaliesErrorRateIncrease {
  /**
  * Possible Values: `Auto`, `Fixed`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#detection_mode CustomAppAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#enabled CustomAppAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * error_rate_increase_auto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#error_rate_increase_auto CustomAppAnomalies#error_rate_increase_auto}
  */
  readonly errorRateIncreaseAuto?: CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseAuto;
  /**
  * error_rate_increase_fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#error_rate_increase_fixed CustomAppAnomalies#error_rate_increase_fixed}
  */
  readonly errorRateIncreaseFixed?: CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseFixed;
}

export function customAppAnomaliesErrorRateIncreaseToTerraform(struct?: CustomAppAnomaliesErrorRateIncreaseOutputReference | CustomAppAnomaliesErrorRateIncrease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    error_rate_increase_auto: customAppAnomaliesErrorRateIncreaseErrorRateIncreaseAutoToTerraform(struct!.errorRateIncreaseAuto),
    error_rate_increase_fixed: customAppAnomaliesErrorRateIncreaseErrorRateIncreaseFixedToTerraform(struct!.errorRateIncreaseFixed),
  }
}


export function customAppAnomaliesErrorRateIncreaseToHclTerraform(struct?: CustomAppAnomaliesErrorRateIncreaseOutputReference | CustomAppAnomaliesErrorRateIncrease): any {
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
    error_rate_increase_auto: {
      value: customAppAnomaliesErrorRateIncreaseErrorRateIncreaseAutoToHclTerraform(struct!.errorRateIncreaseAuto),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseAutoList",
    },
    error_rate_increase_fixed: {
      value: customAppAnomaliesErrorRateIncreaseErrorRateIncreaseFixedToHclTerraform(struct!.errorRateIncreaseFixed),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseFixedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAppAnomaliesErrorRateIncreaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAppAnomaliesErrorRateIncrease | undefined {
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
    if (this._errorRateIncreaseAuto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRateIncreaseAuto = this._errorRateIncreaseAuto?.internalValue;
    }
    if (this._errorRateIncreaseFixed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRateIncreaseFixed = this._errorRateIncreaseFixed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAppAnomaliesErrorRateIncrease | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._errorRateIncreaseAuto.internalValue = undefined;
      this._errorRateIncreaseFixed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._errorRateIncreaseAuto.internalValue = value.errorRateIncreaseAuto;
      this._errorRateIncreaseFixed.internalValue = value.errorRateIncreaseFixed;
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

  // error_rate_increase_auto - computed: false, optional: true, required: false
  private _errorRateIncreaseAuto = new CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseAutoOutputReference(this, "error_rate_increase_auto");
  public get errorRateIncreaseAuto() {
    return this._errorRateIncreaseAuto;
  }
  public putErrorRateIncreaseAuto(value: CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseAuto) {
    this._errorRateIncreaseAuto.internalValue = value;
  }
  public resetErrorRateIncreaseAuto() {
    this._errorRateIncreaseAuto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRateIncreaseAutoInput() {
    return this._errorRateIncreaseAuto.internalValue;
  }

  // error_rate_increase_fixed - computed: false, optional: true, required: false
  private _errorRateIncreaseFixed = new CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseFixedOutputReference(this, "error_rate_increase_fixed");
  public get errorRateIncreaseFixed() {
    return this._errorRateIncreaseFixed;
  }
  public putErrorRateIncreaseFixed(value: CustomAppAnomaliesErrorRateIncreaseErrorRateIncreaseFixed) {
    this._errorRateIncreaseFixed.internalValue = value;
  }
  public resetErrorRateIncreaseFixed() {
    this._errorRateIncreaseFixed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRateIncreaseFixedInput() {
    return this._errorRateIncreaseFixed.internalValue;
  }
}
export interface CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationAvoidOveralerting {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#min_action_rate CustomAppAnomalies#min_action_rate}
  */
  readonly minActionRate: number;
}

export function customAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationAvoidOveralertingToTerraform(struct?: CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationAvoidOveralertingOutputReference | CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationAvoidOveralerting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_action_rate: cdktf.numberToTerraform(struct!.minActionRate),
  }
}


export function customAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationAvoidOveralertingToHclTerraform(struct?: CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationAvoidOveralertingOutputReference | CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationAvoidOveralerting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_action_rate: {
      value: cdktf.numberToHclTerraform(struct!.minActionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationAvoidOveralertingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationAvoidOveralerting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minActionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.minActionRate = this._minActionRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationAvoidOveralerting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minActionRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minActionRate = value.minActionRate;
    }
  }

  // min_action_rate - computed: false, optional: false, required: true
  private _minActionRate?: number; 
  public get minActionRate() {
    return this.getNumberAttribute('min_action_rate');
  }
  public set minActionRate(value: number) {
    this._minActionRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minActionRateInput() {
    return this._minActionRate;
  }
}
export interface CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdAll {
  /**
  * Absolute threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#duration_threshold CustomAppAnomalies#duration_threshold}
  */
  readonly durationThreshold: number;
  /**
  * Relative threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#slowdown_percentage CustomAppAnomalies#slowdown_percentage}
  */
  readonly slowdownPercentage: number;
}

export function customAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdAllToTerraform(struct?: CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdAllOutputReference | CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_threshold: cdktf.numberToTerraform(struct!.durationThreshold),
    slowdown_percentage: cdktf.numberToTerraform(struct!.slowdownPercentage),
  }
}


export function customAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdAllToHclTerraform(struct?: CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdAllOutputReference | CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_threshold: {
      value: cdktf.numberToHclTerraform(struct!.durationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slowdown_percentage: {
      value: cdktf.numberToHclTerraform(struct!.slowdownPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationThreshold = this._durationThreshold;
    }
    if (this._slowdownPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowdownPercentage = this._slowdownPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationThreshold = undefined;
      this._slowdownPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationThreshold = value.durationThreshold;
      this._slowdownPercentage = value.slowdownPercentage;
    }
  }

  // duration_threshold - computed: false, optional: false, required: true
  private _durationThreshold?: number; 
  public get durationThreshold() {
    return this.getNumberAttribute('duration_threshold');
  }
  public set durationThreshold(value: number) {
    this._durationThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationThresholdInput() {
    return this._durationThreshold;
  }

  // slowdown_percentage - computed: false, optional: false, required: true
  private _slowdownPercentage?: number; 
  public get slowdownPercentage() {
    return this.getNumberAttribute('slowdown_percentage');
  }
  public set slowdownPercentage(value: number) {
    this._slowdownPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slowdownPercentageInput() {
    return this._slowdownPercentage;
  }
}
export interface CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdSlowest {
  /**
  * Absolute threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#duration_threshold CustomAppAnomalies#duration_threshold}
  */
  readonly durationThreshold: number;
  /**
  * Relative threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#slowdown_percentage CustomAppAnomalies#slowdown_percentage}
  */
  readonly slowdownPercentage: number;
}

export function customAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdSlowestToTerraform(struct?: CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdSlowestOutputReference | CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdSlowest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_threshold: cdktf.numberToTerraform(struct!.durationThreshold),
    slowdown_percentage: cdktf.numberToTerraform(struct!.slowdownPercentage),
  }
}


export function customAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdSlowestToHclTerraform(struct?: CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdSlowestOutputReference | CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdSlowest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_threshold: {
      value: cdktf.numberToHclTerraform(struct!.durationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slowdown_percentage: {
      value: cdktf.numberToHclTerraform(struct!.slowdownPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdSlowestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdSlowest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationThreshold = this._durationThreshold;
    }
    if (this._slowdownPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowdownPercentage = this._slowdownPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdSlowest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationThreshold = undefined;
      this._slowdownPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationThreshold = value.durationThreshold;
      this._slowdownPercentage = value.slowdownPercentage;
    }
  }

  // duration_threshold - computed: false, optional: false, required: true
  private _durationThreshold?: number; 
  public get durationThreshold() {
    return this.getNumberAttribute('duration_threshold');
  }
  public set durationThreshold(value: number) {
    this._durationThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationThresholdInput() {
    return this._durationThreshold;
  }

  // slowdown_percentage - computed: false, optional: false, required: true
  private _slowdownPercentage?: number; 
  public get slowdownPercentage() {
    return this.getNumberAttribute('slowdown_percentage');
  }
  public set slowdownPercentage(value: number) {
    this._slowdownPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slowdownPercentageInput() {
    return this._slowdownPercentage;
  }
}
export interface CustomAppAnomaliesSlowUserActionsSlowUserActionsAuto {
  /**
  * duration_avoid_overalerting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#duration_avoid_overalerting CustomAppAnomalies#duration_avoid_overalerting}
  */
  readonly durationAvoidOveralerting: CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationAvoidOveralerting;
  /**
  * duration_threshold_all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#duration_threshold_all CustomAppAnomalies#duration_threshold_all}
  */
  readonly durationThresholdAll: CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdAll;
  /**
  * duration_threshold_slowest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#duration_threshold_slowest CustomAppAnomalies#duration_threshold_slowest}
  */
  readonly durationThresholdSlowest: CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdSlowest;
}

export function customAppAnomaliesSlowUserActionsSlowUserActionsAutoToTerraform(struct?: CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoOutputReference | CustomAppAnomaliesSlowUserActionsSlowUserActionsAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_avoid_overalerting: customAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationAvoidOveralertingToTerraform(struct!.durationAvoidOveralerting),
    duration_threshold_all: customAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdAllToTerraform(struct!.durationThresholdAll),
    duration_threshold_slowest: customAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdSlowestToTerraform(struct!.durationThresholdSlowest),
  }
}


export function customAppAnomaliesSlowUserActionsSlowUserActionsAutoToHclTerraform(struct?: CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoOutputReference | CustomAppAnomaliesSlowUserActionsSlowUserActionsAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_avoid_overalerting: {
      value: customAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationAvoidOveralertingToHclTerraform(struct!.durationAvoidOveralerting),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationAvoidOveralertingList",
    },
    duration_threshold_all: {
      value: customAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdAllToHclTerraform(struct!.durationThresholdAll),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdAllList",
    },
    duration_threshold_slowest: {
      value: customAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdSlowestToHclTerraform(struct!.durationThresholdSlowest),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdSlowestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAppAnomaliesSlowUserActionsSlowUserActionsAuto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationAvoidOveralerting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationAvoidOveralerting = this._durationAvoidOveralerting?.internalValue;
    }
    if (this._durationThresholdAll?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationThresholdAll = this._durationThresholdAll?.internalValue;
    }
    if (this._durationThresholdSlowest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationThresholdSlowest = this._durationThresholdSlowest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAppAnomaliesSlowUserActionsSlowUserActionsAuto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationAvoidOveralerting.internalValue = undefined;
      this._durationThresholdAll.internalValue = undefined;
      this._durationThresholdSlowest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationAvoidOveralerting.internalValue = value.durationAvoidOveralerting;
      this._durationThresholdAll.internalValue = value.durationThresholdAll;
      this._durationThresholdSlowest.internalValue = value.durationThresholdSlowest;
    }
  }

  // duration_avoid_overalerting - computed: false, optional: false, required: true
  private _durationAvoidOveralerting = new CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationAvoidOveralertingOutputReference(this, "duration_avoid_overalerting");
  public get durationAvoidOveralerting() {
    return this._durationAvoidOveralerting;
  }
  public putDurationAvoidOveralerting(value: CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationAvoidOveralerting) {
    this._durationAvoidOveralerting.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationAvoidOveralertingInput() {
    return this._durationAvoidOveralerting.internalValue;
  }

  // duration_threshold_all - computed: false, optional: false, required: true
  private _durationThresholdAll = new CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdAllOutputReference(this, "duration_threshold_all");
  public get durationThresholdAll() {
    return this._durationThresholdAll;
  }
  public putDurationThresholdAll(value: CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdAll) {
    this._durationThresholdAll.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationThresholdAllInput() {
    return this._durationThresholdAll.internalValue;
  }

  // duration_threshold_slowest - computed: false, optional: false, required: true
  private _durationThresholdSlowest = new CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdSlowestOutputReference(this, "duration_threshold_slowest");
  public get durationThresholdSlowest() {
    return this._durationThresholdSlowest;
  }
  public putDurationThresholdSlowest(value: CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoDurationThresholdSlowest) {
    this._durationThresholdSlowest.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationThresholdSlowestInput() {
    return this._durationThresholdSlowest.internalValue;
  }
}
export interface CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationAvoidOveralerting {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#min_action_rate CustomAppAnomalies#min_action_rate}
  */
  readonly minActionRate: number;
}

export function customAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationAvoidOveralertingToTerraform(struct?: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationAvoidOveralertingOutputReference | CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationAvoidOveralerting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_action_rate: cdktf.numberToTerraform(struct!.minActionRate),
  }
}


export function customAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationAvoidOveralertingToHclTerraform(struct?: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationAvoidOveralertingOutputReference | CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationAvoidOveralerting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_action_rate: {
      value: cdktf.numberToHclTerraform(struct!.minActionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationAvoidOveralertingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationAvoidOveralerting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minActionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.minActionRate = this._minActionRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationAvoidOveralerting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minActionRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minActionRate = value.minActionRate;
    }
  }

  // min_action_rate - computed: false, optional: false, required: true
  private _minActionRate?: number; 
  public get minActionRate() {
    return this.getNumberAttribute('min_action_rate');
  }
  public set minActionRate(value: number) {
    this._minActionRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minActionRateInput() {
    return this._minActionRate;
  }
}
export interface CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdAllFixed {
  /**
  * Absolute threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#duration_threshold CustomAppAnomalies#duration_threshold}
  */
  readonly durationThreshold: number;
}

export function customAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdAllFixedToTerraform(struct?: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdAllFixedOutputReference | CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdAllFixed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_threshold: cdktf.numberToTerraform(struct!.durationThreshold),
  }
}


export function customAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdAllFixedToHclTerraform(struct?: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdAllFixedOutputReference | CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdAllFixed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_threshold: {
      value: cdktf.numberToHclTerraform(struct!.durationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdAllFixedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdAllFixed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationThreshold = this._durationThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdAllFixed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationThreshold = value.durationThreshold;
    }
  }

  // duration_threshold - computed: false, optional: false, required: true
  private _durationThreshold?: number; 
  public get durationThreshold() {
    return this.getNumberAttribute('duration_threshold');
  }
  public set durationThreshold(value: number) {
    this._durationThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationThresholdInput() {
    return this._durationThreshold;
  }
}
export interface CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdSlowest {
  /**
  * Absolute threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#duration_threshold CustomAppAnomalies#duration_threshold}
  */
  readonly durationThreshold: number;
}

export function customAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdSlowestToTerraform(struct?: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdSlowestOutputReference | CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdSlowest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_threshold: cdktf.numberToTerraform(struct!.durationThreshold),
  }
}


export function customAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdSlowestToHclTerraform(struct?: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdSlowestOutputReference | CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdSlowest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_threshold: {
      value: cdktf.numberToHclTerraform(struct!.durationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdSlowestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdSlowest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationThreshold = this._durationThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdSlowest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationThreshold = value.durationThreshold;
    }
  }

  // duration_threshold - computed: false, optional: false, required: true
  private _durationThreshold?: number; 
  public get durationThreshold() {
    return this.getNumberAttribute('duration_threshold');
  }
  public set durationThreshold(value: number) {
    this._durationThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationThresholdInput() {
    return this._durationThreshold;
  }
}
export interface CustomAppAnomaliesSlowUserActionsSlowUserActionsFixed {
  /**
  * Possible Values: `Medium`, `High`, `Low`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#sensitivity CustomAppAnomalies#sensitivity}
  */
  readonly sensitivity: string;
  /**
  * duration_avoid_overalerting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#duration_avoid_overalerting CustomAppAnomalies#duration_avoid_overalerting}
  */
  readonly durationAvoidOveralerting: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationAvoidOveralerting;
  /**
  * duration_threshold_all_fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#duration_threshold_all_fixed CustomAppAnomalies#duration_threshold_all_fixed}
  */
  readonly durationThresholdAllFixed: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdAllFixed;
  /**
  * duration_threshold_slowest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#duration_threshold_slowest CustomAppAnomalies#duration_threshold_slowest}
  */
  readonly durationThresholdSlowest: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdSlowest;
}

export function customAppAnomaliesSlowUserActionsSlowUserActionsFixedToTerraform(struct?: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedOutputReference | CustomAppAnomaliesSlowUserActionsSlowUserActionsFixed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
    duration_avoid_overalerting: customAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationAvoidOveralertingToTerraform(struct!.durationAvoidOveralerting),
    duration_threshold_all_fixed: customAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdAllFixedToTerraform(struct!.durationThresholdAllFixed),
    duration_threshold_slowest: customAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdSlowestToTerraform(struct!.durationThresholdSlowest),
  }
}


export function customAppAnomaliesSlowUserActionsSlowUserActionsFixedToHclTerraform(struct?: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedOutputReference | CustomAppAnomaliesSlowUserActionsSlowUserActionsFixed): any {
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
    duration_avoid_overalerting: {
      value: customAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationAvoidOveralertingToHclTerraform(struct!.durationAvoidOveralerting),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationAvoidOveralertingList",
    },
    duration_threshold_all_fixed: {
      value: customAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdAllFixedToHclTerraform(struct!.durationThresholdAllFixed),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdAllFixedList",
    },
    duration_threshold_slowest: {
      value: customAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdSlowestToHclTerraform(struct!.durationThresholdSlowest),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdSlowestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAppAnomaliesSlowUserActionsSlowUserActionsFixed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    if (this._durationAvoidOveralerting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationAvoidOveralerting = this._durationAvoidOveralerting?.internalValue;
    }
    if (this._durationThresholdAllFixed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationThresholdAllFixed = this._durationThresholdAllFixed?.internalValue;
    }
    if (this._durationThresholdSlowest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationThresholdSlowest = this._durationThresholdSlowest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sensitivity = undefined;
      this._durationAvoidOveralerting.internalValue = undefined;
      this._durationThresholdAllFixed.internalValue = undefined;
      this._durationThresholdSlowest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sensitivity = value.sensitivity;
      this._durationAvoidOveralerting.internalValue = value.durationAvoidOveralerting;
      this._durationThresholdAllFixed.internalValue = value.durationThresholdAllFixed;
      this._durationThresholdSlowest.internalValue = value.durationThresholdSlowest;
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

  // duration_avoid_overalerting - computed: false, optional: false, required: true
  private _durationAvoidOveralerting = new CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationAvoidOveralertingOutputReference(this, "duration_avoid_overalerting");
  public get durationAvoidOveralerting() {
    return this._durationAvoidOveralerting;
  }
  public putDurationAvoidOveralerting(value: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationAvoidOveralerting) {
    this._durationAvoidOveralerting.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationAvoidOveralertingInput() {
    return this._durationAvoidOveralerting.internalValue;
  }

  // duration_threshold_all_fixed - computed: false, optional: false, required: true
  private _durationThresholdAllFixed = new CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdAllFixedOutputReference(this, "duration_threshold_all_fixed");
  public get durationThresholdAllFixed() {
    return this._durationThresholdAllFixed;
  }
  public putDurationThresholdAllFixed(value: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdAllFixed) {
    this._durationThresholdAllFixed.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationThresholdAllFixedInput() {
    return this._durationThresholdAllFixed.internalValue;
  }

  // duration_threshold_slowest - computed: false, optional: false, required: true
  private _durationThresholdSlowest = new CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdSlowestOutputReference(this, "duration_threshold_slowest");
  public get durationThresholdSlowest() {
    return this._durationThresholdSlowest;
  }
  public putDurationThresholdSlowest(value: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedDurationThresholdSlowest) {
    this._durationThresholdSlowest.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationThresholdSlowestInput() {
    return this._durationThresholdSlowest.internalValue;
  }
}
export interface CustomAppAnomaliesSlowUserActions {
  /**
  * Possible Values: `Auto`, `Fixed`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#detection_mode CustomAppAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#enabled CustomAppAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * slow_user_actions_auto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#slow_user_actions_auto CustomAppAnomalies#slow_user_actions_auto}
  */
  readonly slowUserActionsAuto?: CustomAppAnomaliesSlowUserActionsSlowUserActionsAuto;
  /**
  * slow_user_actions_fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#slow_user_actions_fixed CustomAppAnomalies#slow_user_actions_fixed}
  */
  readonly slowUserActionsFixed?: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixed;
}

export function customAppAnomaliesSlowUserActionsToTerraform(struct?: CustomAppAnomaliesSlowUserActionsOutputReference | CustomAppAnomaliesSlowUserActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    slow_user_actions_auto: customAppAnomaliesSlowUserActionsSlowUserActionsAutoToTerraform(struct!.slowUserActionsAuto),
    slow_user_actions_fixed: customAppAnomaliesSlowUserActionsSlowUserActionsFixedToTerraform(struct!.slowUserActionsFixed),
  }
}


export function customAppAnomaliesSlowUserActionsToHclTerraform(struct?: CustomAppAnomaliesSlowUserActionsOutputReference | CustomAppAnomaliesSlowUserActions): any {
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
    slow_user_actions_auto: {
      value: customAppAnomaliesSlowUserActionsSlowUserActionsAutoToHclTerraform(struct!.slowUserActionsAuto),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoList",
    },
    slow_user_actions_fixed: {
      value: customAppAnomaliesSlowUserActionsSlowUserActionsFixedToHclTerraform(struct!.slowUserActionsFixed),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAppAnomaliesSlowUserActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAppAnomaliesSlowUserActions | undefined {
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
    if (this._slowUserActionsAuto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowUserActionsAuto = this._slowUserActionsAuto?.internalValue;
    }
    if (this._slowUserActionsFixed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowUserActionsFixed = this._slowUserActionsFixed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAppAnomaliesSlowUserActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._slowUserActionsAuto.internalValue = undefined;
      this._slowUserActionsFixed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._slowUserActionsAuto.internalValue = value.slowUserActionsAuto;
      this._slowUserActionsFixed.internalValue = value.slowUserActionsFixed;
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

  // slow_user_actions_auto - computed: false, optional: true, required: false
  private _slowUserActionsAuto = new CustomAppAnomaliesSlowUserActionsSlowUserActionsAutoOutputReference(this, "slow_user_actions_auto");
  public get slowUserActionsAuto() {
    return this._slowUserActionsAuto;
  }
  public putSlowUserActionsAuto(value: CustomAppAnomaliesSlowUserActionsSlowUserActionsAuto) {
    this._slowUserActionsAuto.internalValue = value;
  }
  public resetSlowUserActionsAuto() {
    this._slowUserActionsAuto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowUserActionsAutoInput() {
    return this._slowUserActionsAuto.internalValue;
  }

  // slow_user_actions_fixed - computed: false, optional: true, required: false
  private _slowUserActionsFixed = new CustomAppAnomaliesSlowUserActionsSlowUserActionsFixedOutputReference(this, "slow_user_actions_fixed");
  public get slowUserActionsFixed() {
    return this._slowUserActionsFixed;
  }
  public putSlowUserActionsFixed(value: CustomAppAnomaliesSlowUserActionsSlowUserActionsFixed) {
    this._slowUserActionsFixed.internalValue = value;
  }
  public resetSlowUserActionsFixed() {
    this._slowUserActionsFixed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowUserActionsFixedInput() {
    return this._slowUserActionsFixed.internalValue;
  }
}
export interface CustomAppAnomaliesUnexpectedHighLoad {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#enabled CustomAppAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Dynatrace learns your typical application traffic over an observation period of one week. Depending on this expected value Dynatrace detects abnormal traffic spikes within your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#threshold_percentage CustomAppAnomalies#threshold_percentage}
  */
  readonly thresholdPercentage?: number;
}

export function customAppAnomaliesUnexpectedHighLoadToTerraform(struct?: CustomAppAnomaliesUnexpectedHighLoadOutputReference | CustomAppAnomaliesUnexpectedHighLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    threshold_percentage: cdktf.numberToTerraform(struct!.thresholdPercentage),
  }
}


export function customAppAnomaliesUnexpectedHighLoadToHclTerraform(struct?: CustomAppAnomaliesUnexpectedHighLoadOutputReference | CustomAppAnomaliesUnexpectedHighLoad): any {
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
    threshold_percentage: {
      value: cdktf.numberToHclTerraform(struct!.thresholdPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAppAnomaliesUnexpectedHighLoadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAppAnomaliesUnexpectedHighLoad | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._thresholdPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdPercentage = this._thresholdPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAppAnomaliesUnexpectedHighLoad | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._thresholdPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._thresholdPercentage = value.thresholdPercentage;
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

  // threshold_percentage - computed: false, optional: true, required: false
  private _thresholdPercentage?: number; 
  public get thresholdPercentage() {
    return this.getNumberAttribute('threshold_percentage');
  }
  public set thresholdPercentage(value: number) {
    this._thresholdPercentage = value;
  }
  public resetThresholdPercentage() {
    this._thresholdPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdPercentageInput() {
    return this._thresholdPercentage;
  }
}
export interface CustomAppAnomaliesUnexpectedLowLoad {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#enabled CustomAppAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Dynatrace learns your typical application traffic over an observation period of one week. Depending on this expected value Dynatrace detects abnormal traffic drops within your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#threshold_percentage CustomAppAnomalies#threshold_percentage}
  */
  readonly thresholdPercentage?: number;
}

export function customAppAnomaliesUnexpectedLowLoadToTerraform(struct?: CustomAppAnomaliesUnexpectedLowLoadOutputReference | CustomAppAnomaliesUnexpectedLowLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    threshold_percentage: cdktf.numberToTerraform(struct!.thresholdPercentage),
  }
}


export function customAppAnomaliesUnexpectedLowLoadToHclTerraform(struct?: CustomAppAnomaliesUnexpectedLowLoadOutputReference | CustomAppAnomaliesUnexpectedLowLoad): any {
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
    threshold_percentage: {
      value: cdktf.numberToHclTerraform(struct!.thresholdPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAppAnomaliesUnexpectedLowLoadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAppAnomaliesUnexpectedLowLoad | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._thresholdPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdPercentage = this._thresholdPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAppAnomaliesUnexpectedLowLoad | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._thresholdPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._thresholdPercentage = value.thresholdPercentage;
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

  // threshold_percentage - computed: false, optional: true, required: false
  private _thresholdPercentage?: number; 
  public get thresholdPercentage() {
    return this.getNumberAttribute('threshold_percentage');
  }
  public set thresholdPercentage(value: number) {
    this._thresholdPercentage = value;
  }
  public resetThresholdPercentage() {
    this._thresholdPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdPercentageInput() {
    return this._thresholdPercentage;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies dynatrace_custom_app_anomalies}
*/
export class CustomAppAnomalies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_custom_app_anomalies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomAppAnomalies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomAppAnomalies to import
  * @param importFromId The id of the existing CustomAppAnomalies that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomAppAnomalies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_custom_app_anomalies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_anomalies dynatrace_custom_app_anomalies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomAppAnomaliesConfig
  */
  public constructor(scope: Construct, id: string, config: CustomAppAnomaliesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_custom_app_anomalies',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
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
    this._errorRateIncrease.internalValue = config.errorRateIncrease;
    this._slowUserActions.internalValue = config.slowUserActions;
    this._unexpectedHighLoad.internalValue = config.unexpectedHighLoad;
    this._unexpectedLowLoad.internalValue = config.unexpectedLowLoad;
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

  // error_rate_increase - computed: false, optional: false, required: true
  private _errorRateIncrease = new CustomAppAnomaliesErrorRateIncreaseOutputReference(this, "error_rate_increase");
  public get errorRateIncrease() {
    return this._errorRateIncrease;
  }
  public putErrorRateIncrease(value: CustomAppAnomaliesErrorRateIncrease) {
    this._errorRateIncrease.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRateIncreaseInput() {
    return this._errorRateIncrease.internalValue;
  }

  // slow_user_actions - computed: false, optional: false, required: true
  private _slowUserActions = new CustomAppAnomaliesSlowUserActionsOutputReference(this, "slow_user_actions");
  public get slowUserActions() {
    return this._slowUserActions;
  }
  public putSlowUserActions(value: CustomAppAnomaliesSlowUserActions) {
    this._slowUserActions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slowUserActionsInput() {
    return this._slowUserActions.internalValue;
  }

  // unexpected_high_load - computed: false, optional: false, required: true
  private _unexpectedHighLoad = new CustomAppAnomaliesUnexpectedHighLoadOutputReference(this, "unexpected_high_load");
  public get unexpectedHighLoad() {
    return this._unexpectedHighLoad;
  }
  public putUnexpectedHighLoad(value: CustomAppAnomaliesUnexpectedHighLoad) {
    this._unexpectedHighLoad.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unexpectedHighLoadInput() {
    return this._unexpectedHighLoad.internalValue;
  }

  // unexpected_low_load - computed: false, optional: false, required: true
  private _unexpectedLowLoad = new CustomAppAnomaliesUnexpectedLowLoadOutputReference(this, "unexpected_low_load");
  public get unexpectedLowLoad() {
    return this._unexpectedLowLoad;
  }
  public putUnexpectedLowLoad(value: CustomAppAnomaliesUnexpectedLowLoad) {
    this._unexpectedLowLoad.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unexpectedLowLoadInput() {
    return this._unexpectedLowLoad.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      scope: cdktf.stringToTerraform(this._scope),
      error_rate_increase: customAppAnomaliesErrorRateIncreaseToTerraform(this._errorRateIncrease.internalValue),
      slow_user_actions: customAppAnomaliesSlowUserActionsToTerraform(this._slowUserActions.internalValue),
      unexpected_high_load: customAppAnomaliesUnexpectedHighLoadToTerraform(this._unexpectedHighLoad.internalValue),
      unexpected_low_load: customAppAnomaliesUnexpectedLowLoadToTerraform(this._unexpectedLowLoad.internalValue),
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
      error_rate_increase: {
        value: customAppAnomaliesErrorRateIncreaseToHclTerraform(this._errorRateIncrease.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomAppAnomaliesErrorRateIncreaseList",
      },
      slow_user_actions: {
        value: customAppAnomaliesSlowUserActionsToHclTerraform(this._slowUserActions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomAppAnomaliesSlowUserActionsList",
      },
      unexpected_high_load: {
        value: customAppAnomaliesUnexpectedHighLoadToHclTerraform(this._unexpectedHighLoad.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomAppAnomaliesUnexpectedHighLoadList",
      },
      unexpected_low_load: {
        value: customAppAnomaliesUnexpectedLowLoadToHclTerraform(this._unexpectedLowLoad.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomAppAnomaliesUnexpectedLowLoadList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
