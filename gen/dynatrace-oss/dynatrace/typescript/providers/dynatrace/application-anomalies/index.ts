// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationAnomaliesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#id ApplicationAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * failure_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#failure_rate ApplicationAnomalies#failure_rate}
  */
  readonly failureRate?: ApplicationAnomaliesFailureRate;
  /**
  * response_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#response_time ApplicationAnomalies#response_time}
  */
  readonly responseTime?: ApplicationAnomaliesResponseTime;
  /**
  * traffic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#traffic ApplicationAnomalies#traffic}
  */
  readonly traffic?: ApplicationAnomaliesTraffic;
}
export interface ApplicationAnomaliesFailureRateAuto {
  /**
  * Absolute increase of failing service calls to trigger an alert, %
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#absolute ApplicationAnomalies#absolute}
  */
  readonly absolute: number;
  /**
  * Relative increase of failing service calls to trigger an alert, %
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#relative ApplicationAnomalies#relative}
  */
  readonly relative: number;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#unknowns ApplicationAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function applicationAnomaliesFailureRateAutoToTerraform(struct?: ApplicationAnomaliesFailureRateAutoOutputReference | ApplicationAnomaliesFailureRateAuto): any {
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


export function applicationAnomaliesFailureRateAutoToHclTerraform(struct?: ApplicationAnomaliesFailureRateAutoOutputReference | ApplicationAnomaliesFailureRateAuto): any {
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

export class ApplicationAnomaliesFailureRateAutoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAnomaliesFailureRateAuto | undefined {
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

  public set internalValue(value: ApplicationAnomaliesFailureRateAuto | undefined) {
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
export interface ApplicationAnomaliesFailureRateThresholds {
  /**
  * Sensitivity of the threshold.  With `low` sensitivity, high statistical confidence is used. Brief violations (for example, due to a surge in load) won't trigger alerts.  With `high` sensitivity, no statistical confidence is used. Each violation triggers alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#sensitivity ApplicationAnomalies#sensitivity}
  */
  readonly sensitivity: string;
  /**
  * Failure rate during any 5-minute period to trigger an alert, %
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#threshold ApplicationAnomalies#threshold}
  */
  readonly threshold: number;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#unknowns ApplicationAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function applicationAnomaliesFailureRateThresholdsToTerraform(struct?: ApplicationAnomaliesFailureRateThresholdsOutputReference | ApplicationAnomaliesFailureRateThresholds): any {
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


export function applicationAnomaliesFailureRateThresholdsToHclTerraform(struct?: ApplicationAnomaliesFailureRateThresholdsOutputReference | ApplicationAnomaliesFailureRateThresholds): any {
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

export class ApplicationAnomaliesFailureRateThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAnomaliesFailureRateThresholds | undefined {
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

  public set internalValue(value: ApplicationAnomaliesFailureRateThresholds | undefined) {
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
export interface ApplicationAnomaliesFailureRate {
  /**
  * auto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#auto ApplicationAnomalies#auto}
  */
  readonly auto?: ApplicationAnomaliesFailureRateAuto;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#thresholds ApplicationAnomalies#thresholds}
  */
  readonly thresholds?: ApplicationAnomaliesFailureRateThresholds;
}

export function applicationAnomaliesFailureRateToTerraform(struct?: ApplicationAnomaliesFailureRateOutputReference | ApplicationAnomaliesFailureRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: applicationAnomaliesFailureRateAutoToTerraform(struct!.auto),
    thresholds: applicationAnomaliesFailureRateThresholdsToTerraform(struct!.thresholds),
  }
}


export function applicationAnomaliesFailureRateToHclTerraform(struct?: ApplicationAnomaliesFailureRateOutputReference | ApplicationAnomaliesFailureRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: applicationAnomaliesFailureRateAutoToHclTerraform(struct!.auto),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAnomaliesFailureRateAutoList",
    },
    thresholds: {
      value: applicationAnomaliesFailureRateThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAnomaliesFailureRateThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAnomaliesFailureRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAnomaliesFailureRate | undefined {
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

  public set internalValue(value: ApplicationAnomaliesFailureRate | undefined) {
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
  private _auto = new ApplicationAnomaliesFailureRateAutoOutputReference(this, "auto");
  public get auto() {
    return this._auto;
  }
  public putAuto(value: ApplicationAnomaliesFailureRateAuto) {
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
  private _thresholds = new ApplicationAnomaliesFailureRateThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: ApplicationAnomaliesFailureRateThresholds) {
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
export interface ApplicationAnomaliesResponseTimeAuto {
  /**
  * Minimal service load to detect response time degradation. Response time degradation of services with smaller load won't trigger alerts. Possible values are `FIFTEEN_REQUESTS_PER_MINUTE`, `FIVE_REQUESTS_PER_MINUTE`, `ONE_REQUEST_PER_MINUTE` and `TEN_REQUESTS_PER_MINUTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#load ApplicationAnomalies#load}
  */
  readonly load: string;
  /**
  * Alert if the response time degrades by more than *X* milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#milliseconds ApplicationAnomalies#milliseconds}
  */
  readonly milliseconds: number;
  /**
  * Alert if the response time degrades by more than *X* %
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#percent ApplicationAnomalies#percent}
  */
  readonly percent: number;
  /**
  * Alert if the response time of the slowest 10% degrades by more than *X* milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#slowest_milliseconds ApplicationAnomalies#slowest_milliseconds}
  */
  readonly slowestMilliseconds: number;
  /**
  * Alert if the response time of the slowest 10% degrades by more than *X* milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#slowest_percent ApplicationAnomalies#slowest_percent}
  */
  readonly slowestPercent: number;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#unknowns ApplicationAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function applicationAnomaliesResponseTimeAutoToTerraform(struct?: ApplicationAnomaliesResponseTimeAutoOutputReference | ApplicationAnomaliesResponseTimeAuto): any {
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


export function applicationAnomaliesResponseTimeAutoToHclTerraform(struct?: ApplicationAnomaliesResponseTimeAutoOutputReference | ApplicationAnomaliesResponseTimeAuto): any {
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

export class ApplicationAnomaliesResponseTimeAutoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAnomaliesResponseTimeAuto | undefined {
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

  public set internalValue(value: ApplicationAnomaliesResponseTimeAuto | undefined) {
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
export interface ApplicationAnomaliesResponseTimeThresholds {
  /**
  * Minimal service load to detect response time degradation. Response time degradation of services with smaller load won't trigger alerts. Possible values are `FIFTEEN_REQUESTS_PER_MINUTE`, `FIVE_REQUESTS_PER_MINUTE`, `ONE_REQUEST_PER_MINUTE` and `TEN_REQUESTS_PER_MINUTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#load ApplicationAnomalies#load}
  */
  readonly load: string;
  /**
  * Response time during any 5-minute period to trigger an alert, in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#milliseconds ApplicationAnomalies#milliseconds}
  */
  readonly milliseconds: number;
  /**
  * Sensitivity of the threshold.  With `low` sensitivity, high statistical confidence is used. Brief violations (for example, due to a surge in load) won't trigger alerts.  With `high` sensitivity, no statistical confidence is used. Each violation triggers an alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#sensitivity ApplicationAnomalies#sensitivity}
  */
  readonly sensitivity: string;
  /**
  * Response time of the 10% slowest during any 5-minute period to trigger an alert, in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#slowest_milliseconds ApplicationAnomalies#slowest_milliseconds}
  */
  readonly slowestMilliseconds: number;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#unknowns ApplicationAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function applicationAnomaliesResponseTimeThresholdsToTerraform(struct?: ApplicationAnomaliesResponseTimeThresholdsOutputReference | ApplicationAnomaliesResponseTimeThresholds): any {
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


export function applicationAnomaliesResponseTimeThresholdsToHclTerraform(struct?: ApplicationAnomaliesResponseTimeThresholdsOutputReference | ApplicationAnomaliesResponseTimeThresholds): any {
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

export class ApplicationAnomaliesResponseTimeThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAnomaliesResponseTimeThresholds | undefined {
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

  public set internalValue(value: ApplicationAnomaliesResponseTimeThresholds | undefined) {
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
export interface ApplicationAnomaliesResponseTime {
  /**
  * auto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#auto ApplicationAnomalies#auto}
  */
  readonly auto?: ApplicationAnomaliesResponseTimeAuto;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#thresholds ApplicationAnomalies#thresholds}
  */
  readonly thresholds?: ApplicationAnomaliesResponseTimeThresholds;
}

export function applicationAnomaliesResponseTimeToTerraform(struct?: ApplicationAnomaliesResponseTimeOutputReference | ApplicationAnomaliesResponseTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: applicationAnomaliesResponseTimeAutoToTerraform(struct!.auto),
    thresholds: applicationAnomaliesResponseTimeThresholdsToTerraform(struct!.thresholds),
  }
}


export function applicationAnomaliesResponseTimeToHclTerraform(struct?: ApplicationAnomaliesResponseTimeOutputReference | ApplicationAnomaliesResponseTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: applicationAnomaliesResponseTimeAutoToHclTerraform(struct!.auto),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAnomaliesResponseTimeAutoList",
    },
    thresholds: {
      value: applicationAnomaliesResponseTimeThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAnomaliesResponseTimeThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAnomaliesResponseTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAnomaliesResponseTime | undefined {
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

  public set internalValue(value: ApplicationAnomaliesResponseTime | undefined) {
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
  private _auto = new ApplicationAnomaliesResponseTimeAutoOutputReference(this, "auto");
  public get auto() {
    return this._auto;
  }
  public putAuto(value: ApplicationAnomaliesResponseTimeAuto) {
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
  private _thresholds = new ApplicationAnomaliesResponseTimeThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: ApplicationAnomaliesResponseTimeThresholds) {
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
export interface ApplicationAnomaliesTrafficDrops {
  /**
  * The detection is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#enabled ApplicationAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Alert if the observed traffic is less than *X* % of the expected value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#percent ApplicationAnomalies#percent}
  */
  readonly percent?: number;
}

export function applicationAnomaliesTrafficDropsToTerraform(struct?: ApplicationAnomaliesTrafficDropsOutputReference | ApplicationAnomaliesTrafficDrops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}


export function applicationAnomaliesTrafficDropsToHclTerraform(struct?: ApplicationAnomaliesTrafficDropsOutputReference | ApplicationAnomaliesTrafficDrops): any {
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

export class ApplicationAnomaliesTrafficDropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAnomaliesTrafficDrops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAnomaliesTrafficDrops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._percent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._percent = value.percent;
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
export interface ApplicationAnomaliesTrafficSpikes {
  /**
  * The detection is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#enabled ApplicationAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Alert if the observed traffic is less than *X* % of the expected value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#percent ApplicationAnomalies#percent}
  */
  readonly percent?: number;
}

export function applicationAnomaliesTrafficSpikesToTerraform(struct?: ApplicationAnomaliesTrafficSpikesOutputReference | ApplicationAnomaliesTrafficSpikes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}


export function applicationAnomaliesTrafficSpikesToHclTerraform(struct?: ApplicationAnomaliesTrafficSpikesOutputReference | ApplicationAnomaliesTrafficSpikes): any {
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

export class ApplicationAnomaliesTrafficSpikesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAnomaliesTrafficSpikes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAnomaliesTrafficSpikes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._percent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._percent = value.percent;
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
export interface ApplicationAnomaliesTraffic {
  /**
  * drops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#drops ApplicationAnomalies#drops}
  */
  readonly drops?: ApplicationAnomaliesTrafficDrops;
  /**
  * spikes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#spikes ApplicationAnomalies#spikes}
  */
  readonly spikes?: ApplicationAnomaliesTrafficSpikes;
}

export function applicationAnomaliesTrafficToTerraform(struct?: ApplicationAnomaliesTrafficOutputReference | ApplicationAnomaliesTraffic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drops: applicationAnomaliesTrafficDropsToTerraform(struct!.drops),
    spikes: applicationAnomaliesTrafficSpikesToTerraform(struct!.spikes),
  }
}


export function applicationAnomaliesTrafficToHclTerraform(struct?: ApplicationAnomaliesTrafficOutputReference | ApplicationAnomaliesTraffic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drops: {
      value: applicationAnomaliesTrafficDropsToHclTerraform(struct!.drops),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAnomaliesTrafficDropsList",
    },
    spikes: {
      value: applicationAnomaliesTrafficSpikesToHclTerraform(struct!.spikes),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAnomaliesTrafficSpikesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAnomaliesTrafficOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAnomaliesTraffic | undefined {
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

  public set internalValue(value: ApplicationAnomaliesTraffic | undefined) {
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
  private _drops = new ApplicationAnomaliesTrafficDropsOutputReference(this, "drops");
  public get drops() {
    return this._drops;
  }
  public putDrops(value: ApplicationAnomaliesTrafficDrops) {
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
  private _spikes = new ApplicationAnomaliesTrafficSpikesOutputReference(this, "spikes");
  public get spikes() {
    return this._spikes;
  }
  public putSpikes(value: ApplicationAnomaliesTrafficSpikes) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies dynatrace_application_anomalies}
*/
export class ApplicationAnomalies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_application_anomalies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationAnomalies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationAnomalies to import
  * @param importFromId The id of the existing ApplicationAnomalies that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationAnomalies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_application_anomalies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_anomalies dynatrace_application_anomalies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationAnomaliesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApplicationAnomaliesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_application_anomalies',
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
    this._failureRate.internalValue = config.failureRate;
    this._responseTime.internalValue = config.responseTime;
    this._traffic.internalValue = config.traffic;
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

  // failure_rate - computed: false, optional: true, required: false
  private _failureRate = new ApplicationAnomaliesFailureRateOutputReference(this, "failure_rate");
  public get failureRate() {
    return this._failureRate;
  }
  public putFailureRate(value: ApplicationAnomaliesFailureRate) {
    this._failureRate.internalValue = value;
  }
  public resetFailureRate() {
    this._failureRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureRateInput() {
    return this._failureRate.internalValue;
  }

  // response_time - computed: false, optional: true, required: false
  private _responseTime = new ApplicationAnomaliesResponseTimeOutputReference(this, "response_time");
  public get responseTime() {
    return this._responseTime;
  }
  public putResponseTime(value: ApplicationAnomaliesResponseTime) {
    this._responseTime.internalValue = value;
  }
  public resetResponseTime() {
    this._responseTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeInput() {
    return this._responseTime.internalValue;
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic = new ApplicationAnomaliesTrafficOutputReference(this, "traffic");
  public get traffic() {
    return this._traffic;
  }
  public putTraffic(value: ApplicationAnomaliesTraffic) {
    this._traffic.internalValue = value;
  }
  public resetTraffic() {
    this._traffic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      failure_rate: applicationAnomaliesFailureRateToTerraform(this._failureRate.internalValue),
      response_time: applicationAnomaliesResponseTimeToTerraform(this._responseTime.internalValue),
      traffic: applicationAnomaliesTrafficToTerraform(this._traffic.internalValue),
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
      failure_rate: {
        value: applicationAnomaliesFailureRateToHclTerraform(this._failureRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationAnomaliesFailureRateList",
      },
      response_time: {
        value: applicationAnomaliesResponseTimeToHclTerraform(this._responseTime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationAnomaliesResponseTimeList",
      },
      traffic: {
        value: applicationAnomaliesTrafficToHclTerraform(this._traffic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationAnomaliesTrafficList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
