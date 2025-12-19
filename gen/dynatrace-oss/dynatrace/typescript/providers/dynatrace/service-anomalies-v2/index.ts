// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceAnomaliesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#id ServiceAnomaliesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this setting (SERVICE_METHOD, SERVICE, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#scope ServiceAnomaliesV2#scope}
  */
  readonly scope?: string;
  /**
  * failure_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#failure_rate ServiceAnomaliesV2#failure_rate}
  */
  readonly failureRate: ServiceAnomaliesV2FailureRate;
  /**
  * load_drops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#load_drops ServiceAnomaliesV2#load_drops}
  */
  readonly loadDrops: ServiceAnomaliesV2LoadDrops;
  /**
  * load_spikes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#load_spikes ServiceAnomaliesV2#load_spikes}
  */
  readonly loadSpikes: ServiceAnomaliesV2LoadSpikes;
  /**
  * response_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#response_time ServiceAnomaliesV2#response_time}
  */
  readonly responseTime: ServiceAnomaliesV2ResponseTime;
}
export interface ServiceAnomaliesV2FailureRateAutoDetectionOverAlertingProtection {
  /**
  * Only alert if the abnormal state remains for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#minutes_abnormal_state ServiceAnomaliesV2#minutes_abnormal_state}
  */
  readonly minutesAbnormalState: number;
  /**
  * Only alert if there are at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#requests_per_minute ServiceAnomaliesV2#requests_per_minute}
  */
  readonly requestsPerMinute: number;
}

export function serviceAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionToTerraform(struct?: ServiceAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionOutputReference | ServiceAnomaliesV2FailureRateAutoDetectionOverAlertingProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_abnormal_state: cdktf.numberToTerraform(struct!.minutesAbnormalState),
    requests_per_minute: cdktf.numberToTerraform(struct!.requestsPerMinute),
  }
}


export function serviceAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionToHclTerraform(struct?: ServiceAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionOutputReference | ServiceAnomaliesV2FailureRateAutoDetectionOverAlertingProtection): any {
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
    requests_per_minute: {
      value: cdktf.numberToHclTerraform(struct!.requestsPerMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesV2FailureRateAutoDetectionOverAlertingProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutesAbnormalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesAbnormalState = this._minutesAbnormalState;
    }
    if (this._requestsPerMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsPerMinute = this._requestsPerMinute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesV2FailureRateAutoDetectionOverAlertingProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minutesAbnormalState = undefined;
      this._requestsPerMinute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minutesAbnormalState = value.minutesAbnormalState;
      this._requestsPerMinute = value.requestsPerMinute;
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

  // requests_per_minute - computed: false, optional: false, required: true
  private _requestsPerMinute?: number; 
  public get requestsPerMinute() {
    return this.getNumberAttribute('requests_per_minute');
  }
  public set requestsPerMinute(value: number) {
    this._requestsPerMinute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsPerMinuteInput() {
    return this._requestsPerMinute;
  }
}
export interface ServiceAnomaliesV2FailureRateAutoDetection {
  /**
  * Absolute threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#absolute_increase ServiceAnomaliesV2#absolute_increase}
  */
  readonly absoluteIncrease: number;
  /**
  * Relative threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#relative_increase ServiceAnomaliesV2#relative_increase}
  */
  readonly relativeIncrease: number;
  /**
  * over_alerting_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#over_alerting_protection ServiceAnomaliesV2#over_alerting_protection}
  */
  readonly overAlertingProtection: ServiceAnomaliesV2FailureRateAutoDetectionOverAlertingProtection;
}

export function serviceAnomaliesV2FailureRateAutoDetectionToTerraform(struct?: ServiceAnomaliesV2FailureRateAutoDetectionOutputReference | ServiceAnomaliesV2FailureRateAutoDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_increase: cdktf.numberToTerraform(struct!.absoluteIncrease),
    relative_increase: cdktf.numberToTerraform(struct!.relativeIncrease),
    over_alerting_protection: serviceAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionToTerraform(struct!.overAlertingProtection),
  }
}


export function serviceAnomaliesV2FailureRateAutoDetectionToHclTerraform(struct?: ServiceAnomaliesV2FailureRateAutoDetectionOutputReference | ServiceAnomaliesV2FailureRateAutoDetection): any {
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
      value: serviceAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionToHclTerraform(struct!.overAlertingProtection),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesV2FailureRateAutoDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesV2FailureRateAutoDetection | undefined {
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

  public set internalValue(value: ServiceAnomaliesV2FailureRateAutoDetection | undefined) {
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
  private _overAlertingProtection = new ServiceAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionOutputReference(this, "over_alerting_protection");
  public get overAlertingProtection() {
    return this._overAlertingProtection;
  }
  public putOverAlertingProtection(value: ServiceAnomaliesV2FailureRateAutoDetectionOverAlertingProtection) {
    this._overAlertingProtection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overAlertingProtectionInput() {
    return this._overAlertingProtection.internalValue;
  }
}
export interface ServiceAnomaliesV2FailureRateFixedDetectionOverAlertingProtection {
  /**
  * Only alert if the abnormal state remains for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#minutes_abnormal_state ServiceAnomaliesV2#minutes_abnormal_state}
  */
  readonly minutesAbnormalState: number;
  /**
  * Only alert if there are at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#requests_per_minute ServiceAnomaliesV2#requests_per_minute}
  */
  readonly requestsPerMinute: number;
}

export function serviceAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionToTerraform(struct?: ServiceAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionOutputReference | ServiceAnomaliesV2FailureRateFixedDetectionOverAlertingProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_abnormal_state: cdktf.numberToTerraform(struct!.minutesAbnormalState),
    requests_per_minute: cdktf.numberToTerraform(struct!.requestsPerMinute),
  }
}


export function serviceAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionToHclTerraform(struct?: ServiceAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionOutputReference | ServiceAnomaliesV2FailureRateFixedDetectionOverAlertingProtection): any {
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
    requests_per_minute: {
      value: cdktf.numberToHclTerraform(struct!.requestsPerMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesV2FailureRateFixedDetectionOverAlertingProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutesAbnormalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesAbnormalState = this._minutesAbnormalState;
    }
    if (this._requestsPerMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsPerMinute = this._requestsPerMinute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesV2FailureRateFixedDetectionOverAlertingProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minutesAbnormalState = undefined;
      this._requestsPerMinute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minutesAbnormalState = value.minutesAbnormalState;
      this._requestsPerMinute = value.requestsPerMinute;
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

  // requests_per_minute - computed: false, optional: false, required: true
  private _requestsPerMinute?: number; 
  public get requestsPerMinute() {
    return this.getNumberAttribute('requests_per_minute');
  }
  public set requestsPerMinute(value: number) {
    this._requestsPerMinute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsPerMinuteInput() {
    return this._requestsPerMinute;
  }
}
export interface ServiceAnomaliesV2FailureRateFixedDetection {
  /**
  * Possible Values: `High`, `Low`, `Medium`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#sensitivity ServiceAnomaliesV2#sensitivity}
  */
  readonly sensitivity: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#threshold ServiceAnomaliesV2#threshold}
  */
  readonly threshold: number;
  /**
  * over_alerting_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#over_alerting_protection ServiceAnomaliesV2#over_alerting_protection}
  */
  readonly overAlertingProtection: ServiceAnomaliesV2FailureRateFixedDetectionOverAlertingProtection;
}

export function serviceAnomaliesV2FailureRateFixedDetectionToTerraform(struct?: ServiceAnomaliesV2FailureRateFixedDetectionOutputReference | ServiceAnomaliesV2FailureRateFixedDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    over_alerting_protection: serviceAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionToTerraform(struct!.overAlertingProtection),
  }
}


export function serviceAnomaliesV2FailureRateFixedDetectionToHclTerraform(struct?: ServiceAnomaliesV2FailureRateFixedDetectionOutputReference | ServiceAnomaliesV2FailureRateFixedDetection): any {
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
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    over_alerting_protection: {
      value: serviceAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionToHclTerraform(struct!.overAlertingProtection),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesV2FailureRateFixedDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesV2FailureRateFixedDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._overAlertingProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overAlertingProtection = this._overAlertingProtection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesV2FailureRateFixedDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sensitivity = undefined;
      this._threshold = undefined;
      this._overAlertingProtection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sensitivity = value.sensitivity;
      this._threshold = value.threshold;
      this._overAlertingProtection.internalValue = value.overAlertingProtection;
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

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // over_alerting_protection - computed: false, optional: false, required: true
  private _overAlertingProtection = new ServiceAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionOutputReference(this, "over_alerting_protection");
  public get overAlertingProtection() {
    return this._overAlertingProtection;
  }
  public putOverAlertingProtection(value: ServiceAnomaliesV2FailureRateFixedDetectionOverAlertingProtection) {
    this._overAlertingProtection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overAlertingProtectionInput() {
    return this._overAlertingProtection.internalValue;
  }
}
export interface ServiceAnomaliesV2FailureRate {
  /**
  * Possible Values: `Auto`, `Fixed`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#detection_mode ServiceAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#enabled ServiceAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * auto_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#auto_detection ServiceAnomaliesV2#auto_detection}
  */
  readonly autoDetection?: ServiceAnomaliesV2FailureRateAutoDetection;
  /**
  * fixed_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#fixed_detection ServiceAnomaliesV2#fixed_detection}
  */
  readonly fixedDetection?: ServiceAnomaliesV2FailureRateFixedDetection;
}

export function serviceAnomaliesV2FailureRateToTerraform(struct?: ServiceAnomaliesV2FailureRateOutputReference | ServiceAnomaliesV2FailureRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    auto_detection: serviceAnomaliesV2FailureRateAutoDetectionToTerraform(struct!.autoDetection),
    fixed_detection: serviceAnomaliesV2FailureRateFixedDetectionToTerraform(struct!.fixedDetection),
  }
}


export function serviceAnomaliesV2FailureRateToHclTerraform(struct?: ServiceAnomaliesV2FailureRateOutputReference | ServiceAnomaliesV2FailureRate): any {
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
    auto_detection: {
      value: serviceAnomaliesV2FailureRateAutoDetectionToHclTerraform(struct!.autoDetection),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesV2FailureRateAutoDetectionList",
    },
    fixed_detection: {
      value: serviceAnomaliesV2FailureRateFixedDetectionToHclTerraform(struct!.fixedDetection),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesV2FailureRateFixedDetectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesV2FailureRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesV2FailureRate | undefined {
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
    if (this._autoDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDetection = this._autoDetection?.internalValue;
    }
    if (this._fixedDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedDetection = this._fixedDetection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesV2FailureRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._autoDetection.internalValue = undefined;
      this._fixedDetection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._autoDetection.internalValue = value.autoDetection;
      this._fixedDetection.internalValue = value.fixedDetection;
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

  // auto_detection - computed: false, optional: true, required: false
  private _autoDetection = new ServiceAnomaliesV2FailureRateAutoDetectionOutputReference(this, "auto_detection");
  public get autoDetection() {
    return this._autoDetection;
  }
  public putAutoDetection(value: ServiceAnomaliesV2FailureRateAutoDetection) {
    this._autoDetection.internalValue = value;
  }
  public resetAutoDetection() {
    this._autoDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectionInput() {
    return this._autoDetection.internalValue;
  }

  // fixed_detection - computed: false, optional: true, required: false
  private _fixedDetection = new ServiceAnomaliesV2FailureRateFixedDetectionOutputReference(this, "fixed_detection");
  public get fixedDetection() {
    return this._fixedDetection;
  }
  public putFixedDetection(value: ServiceAnomaliesV2FailureRateFixedDetection) {
    this._fixedDetection.internalValue = value;
  }
  public resetFixedDetection() {
    this._fixedDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDetectionInput() {
    return this._fixedDetection.internalValue;
  }
}
export interface ServiceAnomaliesV2LoadDrops {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#enabled ServiceAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#load_drop_percent ServiceAnomaliesV2#load_drop_percent}
  */
  readonly loadDropPercent?: number;
  /**
  * Time span
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#minutes_abnormal_state ServiceAnomaliesV2#minutes_abnormal_state}
  */
  readonly minutesAbnormalState?: number;
}

export function serviceAnomaliesV2LoadDropsToTerraform(struct?: ServiceAnomaliesV2LoadDropsOutputReference | ServiceAnomaliesV2LoadDrops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    load_drop_percent: cdktf.numberToTerraform(struct!.loadDropPercent),
    minutes_abnormal_state: cdktf.numberToTerraform(struct!.minutesAbnormalState),
  }
}


export function serviceAnomaliesV2LoadDropsToHclTerraform(struct?: ServiceAnomaliesV2LoadDropsOutputReference | ServiceAnomaliesV2LoadDrops): any {
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
    load_drop_percent: {
      value: cdktf.numberToHclTerraform(struct!.loadDropPercent),
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

export class ServiceAnomaliesV2LoadDropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesV2LoadDrops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._loadDropPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadDropPercent = this._loadDropPercent;
    }
    if (this._minutesAbnormalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesAbnormalState = this._minutesAbnormalState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesV2LoadDrops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._loadDropPercent = undefined;
      this._minutesAbnormalState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._loadDropPercent = value.loadDropPercent;
      this._minutesAbnormalState = value.minutesAbnormalState;
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

  // load_drop_percent - computed: false, optional: true, required: false
  private _loadDropPercent?: number; 
  public get loadDropPercent() {
    return this.getNumberAttribute('load_drop_percent');
  }
  public set loadDropPercent(value: number) {
    this._loadDropPercent = value;
  }
  public resetLoadDropPercent() {
    this._loadDropPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadDropPercentInput() {
    return this._loadDropPercent;
  }

  // minutes_abnormal_state - computed: false, optional: true, required: false
  private _minutesAbnormalState?: number; 
  public get minutesAbnormalState() {
    return this.getNumberAttribute('minutes_abnormal_state');
  }
  public set minutesAbnormalState(value: number) {
    this._minutesAbnormalState = value;
  }
  public resetMinutesAbnormalState() {
    this._minutesAbnormalState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesAbnormalStateInput() {
    return this._minutesAbnormalState;
  }
}
export interface ServiceAnomaliesV2LoadSpikes {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#enabled ServiceAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#load_spike_percent ServiceAnomaliesV2#load_spike_percent}
  */
  readonly loadSpikePercent?: number;
  /**
  * Time span
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#minutes_abnormal_state ServiceAnomaliesV2#minutes_abnormal_state}
  */
  readonly minutesAbnormalState?: number;
}

export function serviceAnomaliesV2LoadSpikesToTerraform(struct?: ServiceAnomaliesV2LoadSpikesOutputReference | ServiceAnomaliesV2LoadSpikes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    load_spike_percent: cdktf.numberToTerraform(struct!.loadSpikePercent),
    minutes_abnormal_state: cdktf.numberToTerraform(struct!.minutesAbnormalState),
  }
}


export function serviceAnomaliesV2LoadSpikesToHclTerraform(struct?: ServiceAnomaliesV2LoadSpikesOutputReference | ServiceAnomaliesV2LoadSpikes): any {
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
    load_spike_percent: {
      value: cdktf.numberToHclTerraform(struct!.loadSpikePercent),
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

export class ServiceAnomaliesV2LoadSpikesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesV2LoadSpikes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._loadSpikePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadSpikePercent = this._loadSpikePercent;
    }
    if (this._minutesAbnormalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesAbnormalState = this._minutesAbnormalState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesV2LoadSpikes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._loadSpikePercent = undefined;
      this._minutesAbnormalState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._loadSpikePercent = value.loadSpikePercent;
      this._minutesAbnormalState = value.minutesAbnormalState;
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

  // load_spike_percent - computed: false, optional: true, required: false
  private _loadSpikePercent?: number; 
  public get loadSpikePercent() {
    return this.getNumberAttribute('load_spike_percent');
  }
  public set loadSpikePercent(value: number) {
    this._loadSpikePercent = value;
  }
  public resetLoadSpikePercent() {
    this._loadSpikePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadSpikePercentInput() {
    return this._loadSpikePercent;
  }

  // minutes_abnormal_state - computed: false, optional: true, required: false
  private _minutesAbnormalState?: number; 
  public get minutesAbnormalState() {
    return this.getNumberAttribute('minutes_abnormal_state');
  }
  public set minutesAbnormalState(value: number) {
    this._minutesAbnormalState = value;
  }
  public resetMinutesAbnormalState() {
    this._minutesAbnormalState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesAbnormalStateInput() {
    return this._minutesAbnormalState;
  }
}
export interface ServiceAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtection {
  /**
  * Only alert if the abnormal state remains for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#minutes_abnormal_state ServiceAnomaliesV2#minutes_abnormal_state}
  */
  readonly minutesAbnormalState: number;
  /**
  * Only alert if there are at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#requests_per_minute ServiceAnomaliesV2#requests_per_minute}
  */
  readonly requestsPerMinute: number;
}

export function serviceAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionToTerraform(struct?: ServiceAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionOutputReference | ServiceAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_abnormal_state: cdktf.numberToTerraform(struct!.minutesAbnormalState),
    requests_per_minute: cdktf.numberToTerraform(struct!.requestsPerMinute),
  }
}


export function serviceAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionToHclTerraform(struct?: ServiceAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionOutputReference | ServiceAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtection): any {
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
    requests_per_minute: {
      value: cdktf.numberToHclTerraform(struct!.requestsPerMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutesAbnormalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesAbnormalState = this._minutesAbnormalState;
    }
    if (this._requestsPerMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsPerMinute = this._requestsPerMinute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minutesAbnormalState = undefined;
      this._requestsPerMinute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minutesAbnormalState = value.minutesAbnormalState;
      this._requestsPerMinute = value.requestsPerMinute;
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

  // requests_per_minute - computed: false, optional: false, required: true
  private _requestsPerMinute?: number; 
  public get requestsPerMinute() {
    return this.getNumberAttribute('requests_per_minute');
  }
  public set requestsPerMinute(value: number) {
    this._requestsPerMinute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsPerMinuteInput() {
    return this._requestsPerMinute;
  }
}
export interface ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeAll {
  /**
  * Absolute threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#degradation_milliseconds ServiceAnomaliesV2#degradation_milliseconds}
  */
  readonly degradationMilliseconds: number;
  /**
  * Relative threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#degradation_percent ServiceAnomaliesV2#degradation_percent}
  */
  readonly degradationPercent: number;
}

export function serviceAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllToTerraform(struct?: ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllOutputReference | ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    degradation_milliseconds: cdktf.numberToTerraform(struct!.degradationMilliseconds),
    degradation_percent: cdktf.numberToTerraform(struct!.degradationPercent),
  }
}


export function serviceAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllToHclTerraform(struct?: ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllOutputReference | ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeAll): any {
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

export class ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeAll | undefined {
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

  public set internalValue(value: ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeAll | undefined) {
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
export interface ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowest {
  /**
  * Absolute threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#slowest_degradation_milliseconds ServiceAnomaliesV2#slowest_degradation_milliseconds}
  */
  readonly slowestDegradationMilliseconds: number;
  /**
  * Relative threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#slowest_degradation_percent ServiceAnomaliesV2#slowest_degradation_percent}
  */
  readonly slowestDegradationPercent: number;
}

export function serviceAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestToTerraform(struct?: ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestOutputReference | ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slowest_degradation_milliseconds: cdktf.numberToTerraform(struct!.slowestDegradationMilliseconds),
    slowest_degradation_percent: cdktf.numberToTerraform(struct!.slowestDegradationPercent),
  }
}


export function serviceAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestToHclTerraform(struct?: ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestOutputReference | ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowest): any {
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

export class ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowest | undefined {
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

  public set internalValue(value: ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowest | undefined) {
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
export interface ServiceAnomaliesV2ResponseTimeAutoDetection {
  /**
  * over_alerting_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#over_alerting_protection ServiceAnomaliesV2#over_alerting_protection}
  */
  readonly overAlertingProtection: ServiceAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtection;
  /**
  * response_time_all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#response_time_all ServiceAnomaliesV2#response_time_all}
  */
  readonly responseTimeAll: ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeAll;
  /**
  * response_time_slowest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#response_time_slowest ServiceAnomaliesV2#response_time_slowest}
  */
  readonly responseTimeSlowest: ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowest;
}

export function serviceAnomaliesV2ResponseTimeAutoDetectionToTerraform(struct?: ServiceAnomaliesV2ResponseTimeAutoDetectionOutputReference | ServiceAnomaliesV2ResponseTimeAutoDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    over_alerting_protection: serviceAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionToTerraform(struct!.overAlertingProtection),
    response_time_all: serviceAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllToTerraform(struct!.responseTimeAll),
    response_time_slowest: serviceAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestToTerraform(struct!.responseTimeSlowest),
  }
}


export function serviceAnomaliesV2ResponseTimeAutoDetectionToHclTerraform(struct?: ServiceAnomaliesV2ResponseTimeAutoDetectionOutputReference | ServiceAnomaliesV2ResponseTimeAutoDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    over_alerting_protection: {
      value: serviceAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionToHclTerraform(struct!.overAlertingProtection),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionList",
    },
    response_time_all: {
      value: serviceAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllToHclTerraform(struct!.responseTimeAll),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllList",
    },
    response_time_slowest: {
      value: serviceAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestToHclTerraform(struct!.responseTimeSlowest),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesV2ResponseTimeAutoDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesV2ResponseTimeAutoDetection | undefined {
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

  public set internalValue(value: ServiceAnomaliesV2ResponseTimeAutoDetection | undefined) {
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
  private _overAlertingProtection = new ServiceAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionOutputReference(this, "over_alerting_protection");
  public get overAlertingProtection() {
    return this._overAlertingProtection;
  }
  public putOverAlertingProtection(value: ServiceAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtection) {
    this._overAlertingProtection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overAlertingProtectionInput() {
    return this._overAlertingProtection.internalValue;
  }

  // response_time_all - computed: false, optional: false, required: true
  private _responseTimeAll = new ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllOutputReference(this, "response_time_all");
  public get responseTimeAll() {
    return this._responseTimeAll;
  }
  public putResponseTimeAll(value: ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeAll) {
    this._responseTimeAll.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeAllInput() {
    return this._responseTimeAll.internalValue;
  }

  // response_time_slowest - computed: false, optional: false, required: true
  private _responseTimeSlowest = new ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestOutputReference(this, "response_time_slowest");
  public get responseTimeSlowest() {
    return this._responseTimeSlowest;
  }
  public putResponseTimeSlowest(value: ServiceAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowest) {
    this._responseTimeSlowest.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeSlowestInput() {
    return this._responseTimeSlowest.internalValue;
  }
}
export interface ServiceAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtection {
  /**
  * Only alert if the abnormal state remains for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#minutes_abnormal_state ServiceAnomaliesV2#minutes_abnormal_state}
  */
  readonly minutesAbnormalState: number;
  /**
  * Only alert if there are at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#requests_per_minute ServiceAnomaliesV2#requests_per_minute}
  */
  readonly requestsPerMinute: number;
}

export function serviceAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionToTerraform(struct?: ServiceAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionOutputReference | ServiceAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_abnormal_state: cdktf.numberToTerraform(struct!.minutesAbnormalState),
    requests_per_minute: cdktf.numberToTerraform(struct!.requestsPerMinute),
  }
}


export function serviceAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionToHclTerraform(struct?: ServiceAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionOutputReference | ServiceAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtection): any {
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
    requests_per_minute: {
      value: cdktf.numberToHclTerraform(struct!.requestsPerMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutesAbnormalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesAbnormalState = this._minutesAbnormalState;
    }
    if (this._requestsPerMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsPerMinute = this._requestsPerMinute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minutesAbnormalState = undefined;
      this._requestsPerMinute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minutesAbnormalState = value.minutesAbnormalState;
      this._requestsPerMinute = value.requestsPerMinute;
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

  // requests_per_minute - computed: false, optional: false, required: true
  private _requestsPerMinute?: number; 
  public get requestsPerMinute() {
    return this.getNumberAttribute('requests_per_minute');
  }
  public set requestsPerMinute(value: number) {
    this._requestsPerMinute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsPerMinuteInput() {
    return this._requestsPerMinute;
  }
}
export interface ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeAll {
  /**
  * Alert if the response time degrades beyond this many ms within an observation period of 5 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#degradation_milliseconds ServiceAnomaliesV2#degradation_milliseconds}
  */
  readonly degradationMilliseconds: number;
}

export function serviceAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllToTerraform(struct?: ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllOutputReference | ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    degradation_milliseconds: cdktf.numberToTerraform(struct!.degradationMilliseconds),
  }
}


export function serviceAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllToHclTerraform(struct?: ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllOutputReference | ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeAll): any {
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

export class ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._degradationMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.degradationMilliseconds = this._degradationMilliseconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeAll | undefined) {
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
export interface ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowest {
  /**
  * Alert if the response time of the slowest 10% degrades beyond this many ms within an observation period of 5 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#slowest_degradation_milliseconds ServiceAnomaliesV2#slowest_degradation_milliseconds}
  */
  readonly slowestDegradationMilliseconds: number;
}

export function serviceAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestToTerraform(struct?: ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestOutputReference | ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slowest_degradation_milliseconds: cdktf.numberToTerraform(struct!.slowestDegradationMilliseconds),
  }
}


export function serviceAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestToHclTerraform(struct?: ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestOutputReference | ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowest): any {
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

export class ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slowestDegradationMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowestDegradationMilliseconds = this._slowestDegradationMilliseconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowest | undefined) {
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
export interface ServiceAnomaliesV2ResponseTimeFixedDetection {
  /**
  * Possible Values: `High`, `Low`, `Medium`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#sensitivity ServiceAnomaliesV2#sensitivity}
  */
  readonly sensitivity: string;
  /**
  * over_alerting_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#over_alerting_protection ServiceAnomaliesV2#over_alerting_protection}
  */
  readonly overAlertingProtection: ServiceAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtection;
  /**
  * response_time_all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#response_time_all ServiceAnomaliesV2#response_time_all}
  */
  readonly responseTimeAll: ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeAll;
  /**
  * response_time_slowest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#response_time_slowest ServiceAnomaliesV2#response_time_slowest}
  */
  readonly responseTimeSlowest: ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowest;
}

export function serviceAnomaliesV2ResponseTimeFixedDetectionToTerraform(struct?: ServiceAnomaliesV2ResponseTimeFixedDetectionOutputReference | ServiceAnomaliesV2ResponseTimeFixedDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
    over_alerting_protection: serviceAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionToTerraform(struct!.overAlertingProtection),
    response_time_all: serviceAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllToTerraform(struct!.responseTimeAll),
    response_time_slowest: serviceAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestToTerraform(struct!.responseTimeSlowest),
  }
}


export function serviceAnomaliesV2ResponseTimeFixedDetectionToHclTerraform(struct?: ServiceAnomaliesV2ResponseTimeFixedDetectionOutputReference | ServiceAnomaliesV2ResponseTimeFixedDetection): any {
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
      value: serviceAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionToHclTerraform(struct!.overAlertingProtection),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionList",
    },
    response_time_all: {
      value: serviceAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllToHclTerraform(struct!.responseTimeAll),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllList",
    },
    response_time_slowest: {
      value: serviceAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestToHclTerraform(struct!.responseTimeSlowest),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesV2ResponseTimeFixedDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesV2ResponseTimeFixedDetection | undefined {
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

  public set internalValue(value: ServiceAnomaliesV2ResponseTimeFixedDetection | undefined) {
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
  private _overAlertingProtection = new ServiceAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionOutputReference(this, "over_alerting_protection");
  public get overAlertingProtection() {
    return this._overAlertingProtection;
  }
  public putOverAlertingProtection(value: ServiceAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtection) {
    this._overAlertingProtection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overAlertingProtectionInput() {
    return this._overAlertingProtection.internalValue;
  }

  // response_time_all - computed: false, optional: false, required: true
  private _responseTimeAll = new ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllOutputReference(this, "response_time_all");
  public get responseTimeAll() {
    return this._responseTimeAll;
  }
  public putResponseTimeAll(value: ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeAll) {
    this._responseTimeAll.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeAllInput() {
    return this._responseTimeAll.internalValue;
  }

  // response_time_slowest - computed: false, optional: false, required: true
  private _responseTimeSlowest = new ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestOutputReference(this, "response_time_slowest");
  public get responseTimeSlowest() {
    return this._responseTimeSlowest;
  }
  public putResponseTimeSlowest(value: ServiceAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowest) {
    this._responseTimeSlowest.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeSlowestInput() {
    return this._responseTimeSlowest.internalValue;
  }
}
export interface ServiceAnomaliesV2ResponseTime {
  /**
  * Possible Values: `Auto`, `Fixed`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#detection_mode ServiceAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#enabled ServiceAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * auto_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#auto_detection ServiceAnomaliesV2#auto_detection}
  */
  readonly autoDetection?: ServiceAnomaliesV2ResponseTimeAutoDetection;
  /**
  * fixed_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#fixed_detection ServiceAnomaliesV2#fixed_detection}
  */
  readonly fixedDetection?: ServiceAnomaliesV2ResponseTimeFixedDetection;
}

export function serviceAnomaliesV2ResponseTimeToTerraform(struct?: ServiceAnomaliesV2ResponseTimeOutputReference | ServiceAnomaliesV2ResponseTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    auto_detection: serviceAnomaliesV2ResponseTimeAutoDetectionToTerraform(struct!.autoDetection),
    fixed_detection: serviceAnomaliesV2ResponseTimeFixedDetectionToTerraform(struct!.fixedDetection),
  }
}


export function serviceAnomaliesV2ResponseTimeToHclTerraform(struct?: ServiceAnomaliesV2ResponseTimeOutputReference | ServiceAnomaliesV2ResponseTime): any {
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
    auto_detection: {
      value: serviceAnomaliesV2ResponseTimeAutoDetectionToHclTerraform(struct!.autoDetection),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesV2ResponseTimeAutoDetectionList",
    },
    fixed_detection: {
      value: serviceAnomaliesV2ResponseTimeFixedDetectionToHclTerraform(struct!.fixedDetection),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesV2ResponseTimeFixedDetectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesV2ResponseTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesV2ResponseTime | undefined {
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
    if (this._autoDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDetection = this._autoDetection?.internalValue;
    }
    if (this._fixedDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedDetection = this._fixedDetection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesV2ResponseTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._autoDetection.internalValue = undefined;
      this._fixedDetection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._autoDetection.internalValue = value.autoDetection;
      this._fixedDetection.internalValue = value.fixedDetection;
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

  // auto_detection - computed: false, optional: true, required: false
  private _autoDetection = new ServiceAnomaliesV2ResponseTimeAutoDetectionOutputReference(this, "auto_detection");
  public get autoDetection() {
    return this._autoDetection;
  }
  public putAutoDetection(value: ServiceAnomaliesV2ResponseTimeAutoDetection) {
    this._autoDetection.internalValue = value;
  }
  public resetAutoDetection() {
    this._autoDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectionInput() {
    return this._autoDetection.internalValue;
  }

  // fixed_detection - computed: false, optional: true, required: false
  private _fixedDetection = new ServiceAnomaliesV2ResponseTimeFixedDetectionOutputReference(this, "fixed_detection");
  public get fixedDetection() {
    return this._fixedDetection;
  }
  public putFixedDetection(value: ServiceAnomaliesV2ResponseTimeFixedDetection) {
    this._fixedDetection.internalValue = value;
  }
  public resetFixedDetection() {
    this._fixedDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDetectionInput() {
    return this._fixedDetection.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2 dynatrace_service_anomalies_v2}
*/
export class ServiceAnomaliesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_service_anomalies_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceAnomaliesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceAnomaliesV2 to import
  * @param importFromId The id of the existing ServiceAnomaliesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceAnomaliesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_service_anomalies_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_anomalies_v2 dynatrace_service_anomalies_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceAnomaliesV2Config
  */
  public constructor(scope: Construct, id: string, config: ServiceAnomaliesV2Config) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_service_anomalies_v2',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
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
    this._failureRate.internalValue = config.failureRate;
    this._loadDrops.internalValue = config.loadDrops;
    this._loadSpikes.internalValue = config.loadSpikes;
    this._responseTime.internalValue = config.responseTime;
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

  // failure_rate - computed: false, optional: false, required: true
  private _failureRate = new ServiceAnomaliesV2FailureRateOutputReference(this, "failure_rate");
  public get failureRate() {
    return this._failureRate;
  }
  public putFailureRate(value: ServiceAnomaliesV2FailureRate) {
    this._failureRate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureRateInput() {
    return this._failureRate.internalValue;
  }

  // load_drops - computed: false, optional: false, required: true
  private _loadDrops = new ServiceAnomaliesV2LoadDropsOutputReference(this, "load_drops");
  public get loadDrops() {
    return this._loadDrops;
  }
  public putLoadDrops(value: ServiceAnomaliesV2LoadDrops) {
    this._loadDrops.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadDropsInput() {
    return this._loadDrops.internalValue;
  }

  // load_spikes - computed: false, optional: false, required: true
  private _loadSpikes = new ServiceAnomaliesV2LoadSpikesOutputReference(this, "load_spikes");
  public get loadSpikes() {
    return this._loadSpikes;
  }
  public putLoadSpikes(value: ServiceAnomaliesV2LoadSpikes) {
    this._loadSpikes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadSpikesInput() {
    return this._loadSpikes.internalValue;
  }

  // response_time - computed: false, optional: false, required: true
  private _responseTime = new ServiceAnomaliesV2ResponseTimeOutputReference(this, "response_time");
  public get responseTime() {
    return this._responseTime;
  }
  public putResponseTime(value: ServiceAnomaliesV2ResponseTime) {
    this._responseTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeInput() {
    return this._responseTime.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      scope: cdktf.stringToTerraform(this._scope),
      failure_rate: serviceAnomaliesV2FailureRateToTerraform(this._failureRate.internalValue),
      load_drops: serviceAnomaliesV2LoadDropsToTerraform(this._loadDrops.internalValue),
      load_spikes: serviceAnomaliesV2LoadSpikesToTerraform(this._loadSpikes.internalValue),
      response_time: serviceAnomaliesV2ResponseTimeToTerraform(this._responseTime.internalValue),
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
      failure_rate: {
        value: serviceAnomaliesV2FailureRateToHclTerraform(this._failureRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceAnomaliesV2FailureRateList",
      },
      load_drops: {
        value: serviceAnomaliesV2LoadDropsToHclTerraform(this._loadDrops.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceAnomaliesV2LoadDropsList",
      },
      load_spikes: {
        value: serviceAnomaliesV2LoadSpikesToHclTerraform(this._loadSpikes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceAnomaliesV2LoadSpikesList",
      },
      response_time: {
        value: serviceAnomaliesV2ResponseTimeToHclTerraform(this._responseTime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceAnomaliesV2ResponseTimeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
