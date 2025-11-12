// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceAnomaliesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#id ServiceAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * failure_rates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#failure_rates ServiceAnomalies#failure_rates}
  */
  readonly failureRates?: ServiceAnomaliesFailureRates;
  /**
  * load block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#load ServiceAnomalies#load}
  */
  readonly load?: ServiceAnomaliesLoad;
  /**
  * load_drops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#load_drops ServiceAnomalies#load_drops}
  */
  readonly loadDrops?: ServiceAnomaliesLoadDropsA;
  /**
  * response_times block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#response_times ServiceAnomalies#response_times}
  */
  readonly responseTimes?: ServiceAnomaliesResponseTimes;
}
export interface ServiceAnomaliesFailureRatesAuto {
  /**
  * Absolute increase of failing service calls to trigger an alert, %
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#absolute ServiceAnomalies#absolute}
  */
  readonly absolute: number;
  /**
  * Relative increase of failing service calls to trigger an alert, %
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#relative ServiceAnomalies#relative}
  */
  readonly relative: number;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#unknowns ServiceAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function serviceAnomaliesFailureRatesAutoToTerraform(struct?: ServiceAnomaliesFailureRatesAutoOutputReference | ServiceAnomaliesFailureRatesAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute: cdktf.numberToTerraform(struct!.absolute),
    relative: cdktf.numberToTerraform(struct!.relative),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function serviceAnomaliesFailureRatesAutoToHclTerraform(struct?: ServiceAnomaliesFailureRatesAutoOutputReference | ServiceAnomaliesFailureRatesAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute: {
      value: cdktf.numberToHclTerraform(struct!.absolute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    relative: {
      value: cdktf.numberToHclTerraform(struct!.relative),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesFailureRatesAutoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesFailureRatesAuto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absolute !== undefined) {
      hasAnyValues = true;
      internalValueResult.absolute = this._absolute;
    }
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesFailureRatesAuto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._absolute = undefined;
      this._relative = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._absolute = value.absolute;
      this._relative = value.relative;
      this._unknowns = value.unknowns;
    }
  }

  // absolute - computed: false, optional: false, required: true
  private _absolute?: number; 
  public get absolute() {
    return this.getNumberAttribute('absolute');
  }
  public set absolute(value: number) {
    this._absolute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteInput() {
    return this._absolute;
  }

  // relative - computed: false, optional: false, required: true
  private _relative?: number; 
  public get relative() {
    return this.getNumberAttribute('relative');
  }
  public set relative(value: number) {
    this._relative = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeInput() {
    return this._relative;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface ServiceAnomaliesFailureRatesThresholds {
  /**
  * Sensitivity of the threshold.  With `low` sensitivity, high statistical confidence is used. Brief violations (for example, due to a surge in load) won't trigger alerts.  With `high` sensitivity, no statistical confidence is used. Each violation triggers alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#sensitivity ServiceAnomalies#sensitivity}
  */
  readonly sensitivity: string;
  /**
  * Failure rate during any 5-minute period to trigger an alert, %
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#threshold ServiceAnomalies#threshold}
  */
  readonly threshold: number;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#unknowns ServiceAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function serviceAnomaliesFailureRatesThresholdsToTerraform(struct?: ServiceAnomaliesFailureRatesThresholdsOutputReference | ServiceAnomaliesFailureRatesThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function serviceAnomaliesFailureRatesThresholdsToHclTerraform(struct?: ServiceAnomaliesFailureRatesThresholdsOutputReference | ServiceAnomaliesFailureRatesThresholds): any {
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesFailureRatesThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesFailureRatesThresholds | undefined {
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
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesFailureRatesThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sensitivity = undefined;
      this._threshold = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sensitivity = value.sensitivity;
      this._threshold = value.threshold;
      this._unknowns = value.unknowns;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface ServiceAnomaliesFailureRates {
  /**
  * auto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#auto ServiceAnomalies#auto}
  */
  readonly auto?: ServiceAnomaliesFailureRatesAuto;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#thresholds ServiceAnomalies#thresholds}
  */
  readonly thresholds?: ServiceAnomaliesFailureRatesThresholds;
}

export function serviceAnomaliesFailureRatesToTerraform(struct?: ServiceAnomaliesFailureRatesOutputReference | ServiceAnomaliesFailureRates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: serviceAnomaliesFailureRatesAutoToTerraform(struct!.auto),
    thresholds: serviceAnomaliesFailureRatesThresholdsToTerraform(struct!.thresholds),
  }
}


export function serviceAnomaliesFailureRatesToHclTerraform(struct?: ServiceAnomaliesFailureRatesOutputReference | ServiceAnomaliesFailureRates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: serviceAnomaliesFailureRatesAutoToHclTerraform(struct!.auto),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesFailureRatesAutoList",
    },
    thresholds: {
      value: serviceAnomaliesFailureRatesThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesFailureRatesThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesFailureRatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesFailureRates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto?.internalValue;
    }
    if (this._thresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholds = this._thresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesFailureRates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auto.internalValue = undefined;
      this._thresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auto.internalValue = value.auto;
      this._thresholds.internalValue = value.thresholds;
    }
  }

  // auto - computed: false, optional: true, required: false
  private _auto = new ServiceAnomaliesFailureRatesAutoOutputReference(this, "auto");
  public get auto() {
    return this._auto;
  }
  public putAuto(value: ServiceAnomaliesFailureRatesAuto) {
    this._auto.internalValue = value;
  }
  public resetAuto() {
    this._auto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto.internalValue;
  }

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new ServiceAnomaliesFailureRatesThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: ServiceAnomaliesFailureRatesThresholds) {
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
export interface ServiceAnomaliesLoadDrops {
  /**
  * Alert if the service stays in abnormal state for at least *X* minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#minutes ServiceAnomalies#minutes}
  */
  readonly minutes?: number;
  /**
  * Alert if the observed load is more than *X* % of the expected value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#percent ServiceAnomalies#percent}
  */
  readonly percent?: number;
}

export function serviceAnomaliesLoadDropsToTerraform(struct?: ServiceAnomaliesLoadDropsOutputReference | ServiceAnomaliesLoadDrops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes: cdktf.numberToTerraform(struct!.minutes),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}


export function serviceAnomaliesLoadDropsToHclTerraform(struct?: ServiceAnomaliesLoadDropsOutputReference | ServiceAnomaliesLoadDrops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesLoadDropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesLoadDrops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesLoadDrops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minutes = undefined;
      this._percent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minutes = value.minutes;
      this._percent = value.percent;
    }
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }
}
export interface ServiceAnomaliesLoadSpikes {
  /**
  * Alert if the service stays in abnormal state for at least *X* minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#minutes ServiceAnomalies#minutes}
  */
  readonly minutes?: number;
  /**
  * Alert if the observed load is more than *X* % of the expected value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#percent ServiceAnomalies#percent}
  */
  readonly percent?: number;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#unknowns ServiceAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function serviceAnomaliesLoadSpikesToTerraform(struct?: ServiceAnomaliesLoadSpikesOutputReference | ServiceAnomaliesLoadSpikes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes: cdktf.numberToTerraform(struct!.minutes),
    percent: cdktf.numberToTerraform(struct!.percent),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function serviceAnomaliesLoadSpikesToHclTerraform(struct?: ServiceAnomaliesLoadSpikesOutputReference | ServiceAnomaliesLoadSpikes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesLoadSpikesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesLoadSpikes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesLoadSpikes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minutes = undefined;
      this._percent = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minutes = value.minutes;
      this._percent = value.percent;
      this._unknowns = value.unknowns;
    }
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface ServiceAnomaliesLoad {
  /**
  * drops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#drops ServiceAnomalies#drops}
  */
  readonly drops?: ServiceAnomaliesLoadDrops;
  /**
  * spikes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#spikes ServiceAnomalies#spikes}
  */
  readonly spikes?: ServiceAnomaliesLoadSpikes;
}

export function serviceAnomaliesLoadToTerraform(struct?: ServiceAnomaliesLoadOutputReference | ServiceAnomaliesLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drops: serviceAnomaliesLoadDropsToTerraform(struct!.drops),
    spikes: serviceAnomaliesLoadSpikesToTerraform(struct!.spikes),
  }
}


export function serviceAnomaliesLoadToHclTerraform(struct?: ServiceAnomaliesLoadOutputReference | ServiceAnomaliesLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drops: {
      value: serviceAnomaliesLoadDropsToHclTerraform(struct!.drops),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesLoadDropsList",
    },
    spikes: {
      value: serviceAnomaliesLoadSpikesToHclTerraform(struct!.spikes),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesLoadSpikesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesLoadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesLoad | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drops = this._drops?.internalValue;
    }
    if (this._spikes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spikes = this._spikes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesLoad | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drops.internalValue = undefined;
      this._spikes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drops.internalValue = value.drops;
      this._spikes.internalValue = value.spikes;
    }
  }

  // drops - computed: false, optional: true, required: false
  private _drops = new ServiceAnomaliesLoadDropsOutputReference(this, "drops");
  public get drops() {
    return this._drops;
  }
  public putDrops(value: ServiceAnomaliesLoadDrops) {
    this._drops.internalValue = value;
  }
  public resetDrops() {
    this._drops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropsInput() {
    return this._drops.internalValue;
  }

  // spikes - computed: false, optional: true, required: false
  private _spikes = new ServiceAnomaliesLoadSpikesOutputReference(this, "spikes");
  public get spikes() {
    return this._spikes;
  }
  public putSpikes(value: ServiceAnomaliesLoadSpikes) {
    this._spikes.internalValue = value;
  }
  public resetSpikes() {
    this._spikes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spikesInput() {
    return this._spikes.internalValue;
  }
}
export interface ServiceAnomaliesLoadDropsA {
  /**
  * Alert if the service stays in abnormal state for at least *X* minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#minutes ServiceAnomalies#minutes}
  */
  readonly minutes?: number;
  /**
  * Alert if the observed load is more than *X* % of the expected value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#percent ServiceAnomalies#percent}
  */
  readonly percent?: number;
}

export function serviceAnomaliesLoadDropsAToTerraform(struct?: ServiceAnomaliesLoadDropsAOutputReference | ServiceAnomaliesLoadDropsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes: cdktf.numberToTerraform(struct!.minutes),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}


export function serviceAnomaliesLoadDropsAToHclTerraform(struct?: ServiceAnomaliesLoadDropsAOutputReference | ServiceAnomaliesLoadDropsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesLoadDropsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesLoadDropsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesLoadDropsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minutes = undefined;
      this._percent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minutes = value.minutes;
      this._percent = value.percent;
    }
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }
}
export interface ServiceAnomaliesResponseTimesAuto {
  /**
  * Minimal service load to detect response time degradation. Response time degradation of services with smaller load won't trigger alerts. Possible values are `FIFTEEN_REQUESTS_PER_MINUTE`, `FIVE_REQUESTS_PER_MINUTE`, `ONE_REQUEST_PER_MINUTE` and `TEN_REQUESTS_PER_MINUTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#load ServiceAnomalies#load}
  */
  readonly load: string;
  /**
  * Alert if the response time degrades by more than *X* milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#milliseconds ServiceAnomalies#milliseconds}
  */
  readonly milliseconds: number;
  /**
  * Alert if the response time degrades by more than *X* %
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#percent ServiceAnomalies#percent}
  */
  readonly percent: number;
  /**
  * Alert if the response time of the slowest 10% degrades by more than *X* milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#slowest_milliseconds ServiceAnomalies#slowest_milliseconds}
  */
  readonly slowestMilliseconds: number;
  /**
  * Alert if the response time of the slowest 10% degrades by more than *X* milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#slowest_percent ServiceAnomalies#slowest_percent}
  */
  readonly slowestPercent: number;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#unknowns ServiceAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function serviceAnomaliesResponseTimesAutoToTerraform(struct?: ServiceAnomaliesResponseTimesAutoOutputReference | ServiceAnomaliesResponseTimesAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load: cdktf.stringToTerraform(struct!.load),
    milliseconds: cdktf.numberToTerraform(struct!.milliseconds),
    percent: cdktf.numberToTerraform(struct!.percent),
    slowest_milliseconds: cdktf.numberToTerraform(struct!.slowestMilliseconds),
    slowest_percent: cdktf.numberToTerraform(struct!.slowestPercent),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function serviceAnomaliesResponseTimesAutoToHclTerraform(struct?: ServiceAnomaliesResponseTimesAutoOutputReference | ServiceAnomaliesResponseTimesAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load: {
      value: cdktf.stringToHclTerraform(struct!.load),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.milliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slowest_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.slowestMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slowest_percent: {
      value: cdktf.numberToHclTerraform(struct!.slowestPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesResponseTimesAutoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesResponseTimesAuto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._load !== undefined) {
      hasAnyValues = true;
      internalValueResult.load = this._load;
    }
    if (this._milliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.milliseconds = this._milliseconds;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    if (this._slowestMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowestMilliseconds = this._slowestMilliseconds;
    }
    if (this._slowestPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowestPercent = this._slowestPercent;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesResponseTimesAuto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._load = undefined;
      this._milliseconds = undefined;
      this._percent = undefined;
      this._slowestMilliseconds = undefined;
      this._slowestPercent = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._load = value.load;
      this._milliseconds = value.milliseconds;
      this._percent = value.percent;
      this._slowestMilliseconds = value.slowestMilliseconds;
      this._slowestPercent = value.slowestPercent;
      this._unknowns = value.unknowns;
    }
  }

  // load - computed: false, optional: false, required: true
  private _load?: string; 
  public get load() {
    return this.getStringAttribute('load');
  }
  public set load(value: string) {
    this._load = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadInput() {
    return this._load;
  }

  // milliseconds - computed: false, optional: false, required: true
  private _milliseconds?: number; 
  public get milliseconds() {
    return this.getNumberAttribute('milliseconds');
  }
  public set milliseconds(value: number) {
    this._milliseconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get millisecondsInput() {
    return this._milliseconds;
  }

  // percent - computed: false, optional: false, required: true
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }

  // slowest_milliseconds - computed: false, optional: false, required: true
  private _slowestMilliseconds?: number; 
  public get slowestMilliseconds() {
    return this.getNumberAttribute('slowest_milliseconds');
  }
  public set slowestMilliseconds(value: number) {
    this._slowestMilliseconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slowestMillisecondsInput() {
    return this._slowestMilliseconds;
  }

  // slowest_percent - computed: false, optional: false, required: true
  private _slowestPercent?: number; 
  public get slowestPercent() {
    return this.getNumberAttribute('slowest_percent');
  }
  public set slowestPercent(value: number) {
    this._slowestPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slowestPercentInput() {
    return this._slowestPercent;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface ServiceAnomaliesResponseTimesThresholds {
  /**
  * Minimal service load to detect response time degradation. Response time degradation of services with smaller load won't trigger alerts. Possible values are `FIFTEEN_REQUESTS_PER_MINUTE`, `FIVE_REQUESTS_PER_MINUTE`, `ONE_REQUEST_PER_MINUTE` and `TEN_REQUESTS_PER_MINUTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#load ServiceAnomalies#load}
  */
  readonly load: string;
  /**
  * Response time during any 5-minute period to trigger an alert, in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#milliseconds ServiceAnomalies#milliseconds}
  */
  readonly milliseconds: number;
  /**
  * Sensitivity of the threshold.  With `low` sensitivity, high statistical confidence is used. Brief violations (for example, due to a surge in load) won't trigger alerts.  With `high` sensitivity, no statistical confidence is used. Each violation triggers an alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#sensitivity ServiceAnomalies#sensitivity}
  */
  readonly sensitivity: string;
  /**
  * Response time of the 10% slowest during any 5-minute period to trigger an alert, in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#slowest_milliseconds ServiceAnomalies#slowest_milliseconds}
  */
  readonly slowestMilliseconds: number;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#unknowns ServiceAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function serviceAnomaliesResponseTimesThresholdsToTerraform(struct?: ServiceAnomaliesResponseTimesThresholdsOutputReference | ServiceAnomaliesResponseTimesThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load: cdktf.stringToTerraform(struct!.load),
    milliseconds: cdktf.numberToTerraform(struct!.milliseconds),
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
    slowest_milliseconds: cdktf.numberToTerraform(struct!.slowestMilliseconds),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function serviceAnomaliesResponseTimesThresholdsToHclTerraform(struct?: ServiceAnomaliesResponseTimesThresholdsOutputReference | ServiceAnomaliesResponseTimesThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load: {
      value: cdktf.stringToHclTerraform(struct!.load),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.milliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.sensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slowest_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.slowestMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesResponseTimesThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesResponseTimesThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._load !== undefined) {
      hasAnyValues = true;
      internalValueResult.load = this._load;
    }
    if (this._milliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.milliseconds = this._milliseconds;
    }
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    if (this._slowestMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowestMilliseconds = this._slowestMilliseconds;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesResponseTimesThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._load = undefined;
      this._milliseconds = undefined;
      this._sensitivity = undefined;
      this._slowestMilliseconds = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._load = value.load;
      this._milliseconds = value.milliseconds;
      this._sensitivity = value.sensitivity;
      this._slowestMilliseconds = value.slowestMilliseconds;
      this._unknowns = value.unknowns;
    }
  }

  // load - computed: false, optional: false, required: true
  private _load?: string; 
  public get load() {
    return this.getStringAttribute('load');
  }
  public set load(value: string) {
    this._load = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadInput() {
    return this._load;
  }

  // milliseconds - computed: false, optional: false, required: true
  private _milliseconds?: number; 
  public get milliseconds() {
    return this.getNumberAttribute('milliseconds');
  }
  public set milliseconds(value: number) {
    this._milliseconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get millisecondsInput() {
    return this._milliseconds;
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

  // slowest_milliseconds - computed: false, optional: false, required: true
  private _slowestMilliseconds?: number; 
  public get slowestMilliseconds() {
    return this.getNumberAttribute('slowest_milliseconds');
  }
  public set slowestMilliseconds(value: number) {
    this._slowestMilliseconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slowestMillisecondsInput() {
    return this._slowestMilliseconds;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface ServiceAnomaliesResponseTimes {
  /**
  * auto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#auto ServiceAnomalies#auto}
  */
  readonly auto?: ServiceAnomaliesResponseTimesAuto;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#thresholds ServiceAnomalies#thresholds}
  */
  readonly thresholds?: ServiceAnomaliesResponseTimesThresholds;
}

export function serviceAnomaliesResponseTimesToTerraform(struct?: ServiceAnomaliesResponseTimesOutputReference | ServiceAnomaliesResponseTimes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: serviceAnomaliesResponseTimesAutoToTerraform(struct!.auto),
    thresholds: serviceAnomaliesResponseTimesThresholdsToTerraform(struct!.thresholds),
  }
}


export function serviceAnomaliesResponseTimesToHclTerraform(struct?: ServiceAnomaliesResponseTimesOutputReference | ServiceAnomaliesResponseTimes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: serviceAnomaliesResponseTimesAutoToHclTerraform(struct!.auto),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesResponseTimesAutoList",
    },
    thresholds: {
      value: serviceAnomaliesResponseTimesThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAnomaliesResponseTimesThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAnomaliesResponseTimesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAnomaliesResponseTimes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto?.internalValue;
    }
    if (this._thresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholds = this._thresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAnomaliesResponseTimes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auto.internalValue = undefined;
      this._thresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auto.internalValue = value.auto;
      this._thresholds.internalValue = value.thresholds;
    }
  }

  // auto - computed: false, optional: true, required: false
  private _auto = new ServiceAnomaliesResponseTimesAutoOutputReference(this, "auto");
  public get auto() {
    return this._auto;
  }
  public putAuto(value: ServiceAnomaliesResponseTimesAuto) {
    this._auto.internalValue = value;
  }
  public resetAuto() {
    this._auto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto.internalValue;
  }

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new ServiceAnomaliesResponseTimesThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: ServiceAnomaliesResponseTimesThresholds) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies dynatrace_service_anomalies}
*/
export class ServiceAnomalies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_service_anomalies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceAnomalies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceAnomalies to import
  * @param importFromId The id of the existing ServiceAnomalies that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceAnomalies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_service_anomalies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_anomalies dynatrace_service_anomalies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceAnomaliesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServiceAnomaliesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_service_anomalies',
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
    this._failureRates.internalValue = config.failureRates;
    this._load.internalValue = config.load;
    this._loadDrops.internalValue = config.loadDrops;
    this._responseTimes.internalValue = config.responseTimes;
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

  // failure_rates - computed: false, optional: true, required: false
  private _failureRates = new ServiceAnomaliesFailureRatesOutputReference(this, "failure_rates");
  public get failureRates() {
    return this._failureRates;
  }
  public putFailureRates(value: ServiceAnomaliesFailureRates) {
    this._failureRates.internalValue = value;
  }
  public resetFailureRates() {
    this._failureRates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureRatesInput() {
    return this._failureRates.internalValue;
  }

  // load - computed: false, optional: true, required: false
  private _load = new ServiceAnomaliesLoadOutputReference(this, "load");
  public get load() {
    return this._load;
  }
  public putLoad(value: ServiceAnomaliesLoad) {
    this._load.internalValue = value;
  }
  public resetLoad() {
    this._load.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadInput() {
    return this._load.internalValue;
  }

  // load_drops - computed: false, optional: true, required: false
  private _loadDrops = new ServiceAnomaliesLoadDropsAOutputReference(this, "load_drops");
  public get loadDrops() {
    return this._loadDrops;
  }
  public putLoadDrops(value: ServiceAnomaliesLoadDropsA) {
    this._loadDrops.internalValue = value;
  }
  public resetLoadDrops() {
    this._loadDrops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadDropsInput() {
    return this._loadDrops.internalValue;
  }

  // response_times - computed: false, optional: true, required: false
  private _responseTimes = new ServiceAnomaliesResponseTimesOutputReference(this, "response_times");
  public get responseTimes() {
    return this._responseTimes;
  }
  public putResponseTimes(value: ServiceAnomaliesResponseTimes) {
    this._responseTimes.internalValue = value;
  }
  public resetResponseTimes() {
    this._responseTimes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimesInput() {
    return this._responseTimes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      failure_rates: serviceAnomaliesFailureRatesToTerraform(this._failureRates.internalValue),
      load: serviceAnomaliesLoadToTerraform(this._load.internalValue),
      load_drops: serviceAnomaliesLoadDropsAToTerraform(this._loadDrops.internalValue),
      response_times: serviceAnomaliesResponseTimesToTerraform(this._responseTimes.internalValue),
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
      failure_rates: {
        value: serviceAnomaliesFailureRatesToHclTerraform(this._failureRates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceAnomaliesFailureRatesList",
      },
      load: {
        value: serviceAnomaliesLoadToHclTerraform(this._load.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceAnomaliesLoadList",
      },
      load_drops: {
        value: serviceAnomaliesLoadDropsAToHclTerraform(this._loadDrops.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceAnomaliesLoadDropsAList",
      },
      response_times: {
        value: serviceAnomaliesResponseTimesToHclTerraform(this._responseTimes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceAnomaliesResponseTimesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
