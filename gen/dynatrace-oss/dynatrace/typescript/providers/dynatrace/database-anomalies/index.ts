// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseAnomaliesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#id DatabaseAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * db_connect_failures block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#db_connect_failures DatabaseAnomalies#db_connect_failures}
  */
  readonly dbConnectFailures?: DatabaseAnomaliesDbConnectFailures;
  /**
  * failure_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#failure_rate DatabaseAnomalies#failure_rate}
  */
  readonly failureRate?: DatabaseAnomaliesFailureRate;
  /**
  * load block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#load DatabaseAnomalies#load}
  */
  readonly load?: DatabaseAnomaliesLoad;
  /**
  * response_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#response_time DatabaseAnomalies#response_time}
  */
  readonly responseTime?: DatabaseAnomaliesResponseTime;
}
export interface DatabaseAnomaliesDbConnectFailures {
  /**
  * Number of failed database connections during any **eval_period** minutes period to trigger an alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#connection_fails_count DatabaseAnomalies#connection_fails_count}
  */
  readonly connectionFailsCount?: number;
  /**
  * The *X* minutes time period during which the **connection_fails_count** is evaluated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#eval_period DatabaseAnomalies#eval_period}
  */
  readonly evalPeriod?: number;
}

export function databaseAnomaliesDbConnectFailuresToTerraform(struct?: DatabaseAnomaliesDbConnectFailuresOutputReference | DatabaseAnomaliesDbConnectFailures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_fails_count: cdktf.numberToTerraform(struct!.connectionFailsCount),
    eval_period: cdktf.numberToTerraform(struct!.evalPeriod),
  }
}


export function databaseAnomaliesDbConnectFailuresToHclTerraform(struct?: DatabaseAnomaliesDbConnectFailuresOutputReference | DatabaseAnomaliesDbConnectFailures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_fails_count: {
      value: cdktf.numberToHclTerraform(struct!.connectionFailsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eval_period: {
      value: cdktf.numberToHclTerraform(struct!.evalPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAnomaliesDbConnectFailuresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesDbConnectFailures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionFailsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionFailsCount = this._connectionFailsCount;
    }
    if (this._evalPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.evalPeriod = this._evalPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAnomaliesDbConnectFailures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionFailsCount = undefined;
      this._evalPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionFailsCount = value.connectionFailsCount;
      this._evalPeriod = value.evalPeriod;
    }
  }

  // connection_fails_count - computed: false, optional: true, required: false
  private _connectionFailsCount?: number; 
  public get connectionFailsCount() {
    return this.getNumberAttribute('connection_fails_count');
  }
  public set connectionFailsCount(value: number) {
    this._connectionFailsCount = value;
  }
  public resetConnectionFailsCount() {
    this._connectionFailsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionFailsCountInput() {
    return this._connectionFailsCount;
  }

  // eval_period - computed: false, optional: true, required: false
  private _evalPeriod?: number; 
  public get evalPeriod() {
    return this.getNumberAttribute('eval_period');
  }
  public set evalPeriod(value: number) {
    this._evalPeriod = value;
  }
  public resetEvalPeriod() {
    this._evalPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evalPeriodInput() {
    return this._evalPeriod;
  }
}
export interface DatabaseAnomaliesFailureRateAuto {
  /**
  * Absolute increase of failing service calls to trigger an alert, %
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#absolute DatabaseAnomalies#absolute}
  */
  readonly absolute: number;
  /**
  * Relative increase of failing service calls to trigger an alert, %
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#relative DatabaseAnomalies#relative}
  */
  readonly relative: number;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#unknowns DatabaseAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function databaseAnomaliesFailureRateAutoToTerraform(struct?: DatabaseAnomaliesFailureRateAutoOutputReference | DatabaseAnomaliesFailureRateAuto): any {
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


export function databaseAnomaliesFailureRateAutoToHclTerraform(struct?: DatabaseAnomaliesFailureRateAutoOutputReference | DatabaseAnomaliesFailureRateAuto): any {
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

export class DatabaseAnomaliesFailureRateAutoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesFailureRateAuto | undefined {
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

  public set internalValue(value: DatabaseAnomaliesFailureRateAuto | undefined) {
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
export interface DatabaseAnomaliesFailureRateThresholds {
  /**
  * Sensitivity of the threshold.  With `low` sensitivity, high statistical confidence is used. Brief violations (for example, due to a surge in load) won't trigger alerts.  With `high` sensitivity, no statistical confidence is used. Each violation triggers alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#sensitivity DatabaseAnomalies#sensitivity}
  */
  readonly sensitivity: string;
  /**
  * Failure rate during any 5-minute period to trigger an alert, %
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#threshold DatabaseAnomalies#threshold}
  */
  readonly threshold: number;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#unknowns DatabaseAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function databaseAnomaliesFailureRateThresholdsToTerraform(struct?: DatabaseAnomaliesFailureRateThresholdsOutputReference | DatabaseAnomaliesFailureRateThresholds): any {
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


export function databaseAnomaliesFailureRateThresholdsToHclTerraform(struct?: DatabaseAnomaliesFailureRateThresholdsOutputReference | DatabaseAnomaliesFailureRateThresholds): any {
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

export class DatabaseAnomaliesFailureRateThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesFailureRateThresholds | undefined {
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

  public set internalValue(value: DatabaseAnomaliesFailureRateThresholds | undefined) {
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
export interface DatabaseAnomaliesFailureRate {
  /**
  * auto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#auto DatabaseAnomalies#auto}
  */
  readonly auto?: DatabaseAnomaliesFailureRateAuto;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#thresholds DatabaseAnomalies#thresholds}
  */
  readonly thresholds?: DatabaseAnomaliesFailureRateThresholds;
}

export function databaseAnomaliesFailureRateToTerraform(struct?: DatabaseAnomaliesFailureRateOutputReference | DatabaseAnomaliesFailureRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: databaseAnomaliesFailureRateAutoToTerraform(struct!.auto),
    thresholds: databaseAnomaliesFailureRateThresholdsToTerraform(struct!.thresholds),
  }
}


export function databaseAnomaliesFailureRateToHclTerraform(struct?: DatabaseAnomaliesFailureRateOutputReference | DatabaseAnomaliesFailureRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: databaseAnomaliesFailureRateAutoToHclTerraform(struct!.auto),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesFailureRateAutoList",
    },
    thresholds: {
      value: databaseAnomaliesFailureRateThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesFailureRateThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAnomaliesFailureRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesFailureRate | undefined {
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

  public set internalValue(value: DatabaseAnomaliesFailureRate | undefined) {
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
  private _auto = new DatabaseAnomaliesFailureRateAutoOutputReference(this, "auto");
  public get auto() {
    return this._auto;
  }
  public putAuto(value: DatabaseAnomaliesFailureRateAuto) {
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
  private _thresholds = new DatabaseAnomaliesFailureRateThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: DatabaseAnomaliesFailureRateThresholds) {
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
export interface DatabaseAnomaliesLoadDrops {
  /**
  * Alert if the service stays in abnormal state for at least *X* minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#minutes DatabaseAnomalies#minutes}
  */
  readonly minutes?: number;
  /**
  * Alert if the observed load is more than *X* % of the expected value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#percent DatabaseAnomalies#percent}
  */
  readonly percent?: number;
}

export function databaseAnomaliesLoadDropsToTerraform(struct?: DatabaseAnomaliesLoadDropsOutputReference | DatabaseAnomaliesLoadDrops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes: cdktf.numberToTerraform(struct!.minutes),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}


export function databaseAnomaliesLoadDropsToHclTerraform(struct?: DatabaseAnomaliesLoadDropsOutputReference | DatabaseAnomaliesLoadDrops): any {
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

export class DatabaseAnomaliesLoadDropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesLoadDrops | undefined {
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

  public set internalValue(value: DatabaseAnomaliesLoadDrops | undefined) {
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
export interface DatabaseAnomaliesLoadSpikes {
  /**
  * Alert if the service stays in abnormal state for at least *X* minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#minutes DatabaseAnomalies#minutes}
  */
  readonly minutes?: number;
  /**
  * Alert if the observed load is more than *X* % of the expected value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#percent DatabaseAnomalies#percent}
  */
  readonly percent?: number;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#unknowns DatabaseAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function databaseAnomaliesLoadSpikesToTerraform(struct?: DatabaseAnomaliesLoadSpikesOutputReference | DatabaseAnomaliesLoadSpikes): any {
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


export function databaseAnomaliesLoadSpikesToHclTerraform(struct?: DatabaseAnomaliesLoadSpikesOutputReference | DatabaseAnomaliesLoadSpikes): any {
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

export class DatabaseAnomaliesLoadSpikesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesLoadSpikes | undefined {
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

  public set internalValue(value: DatabaseAnomaliesLoadSpikes | undefined) {
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
export interface DatabaseAnomaliesLoad {
  /**
  * drops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#drops DatabaseAnomalies#drops}
  */
  readonly drops?: DatabaseAnomaliesLoadDrops;
  /**
  * spikes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#spikes DatabaseAnomalies#spikes}
  */
  readonly spikes?: DatabaseAnomaliesLoadSpikes;
}

export function databaseAnomaliesLoadToTerraform(struct?: DatabaseAnomaliesLoadOutputReference | DatabaseAnomaliesLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drops: databaseAnomaliesLoadDropsToTerraform(struct!.drops),
    spikes: databaseAnomaliesLoadSpikesToTerraform(struct!.spikes),
  }
}


export function databaseAnomaliesLoadToHclTerraform(struct?: DatabaseAnomaliesLoadOutputReference | DatabaseAnomaliesLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drops: {
      value: databaseAnomaliesLoadDropsToHclTerraform(struct!.drops),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesLoadDropsList",
    },
    spikes: {
      value: databaseAnomaliesLoadSpikesToHclTerraform(struct!.spikes),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesLoadSpikesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAnomaliesLoadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesLoad | undefined {
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

  public set internalValue(value: DatabaseAnomaliesLoad | undefined) {
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
  private _drops = new DatabaseAnomaliesLoadDropsOutputReference(this, "drops");
  public get drops() {
    return this._drops;
  }
  public putDrops(value: DatabaseAnomaliesLoadDrops) {
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
  private _spikes = new DatabaseAnomaliesLoadSpikesOutputReference(this, "spikes");
  public get spikes() {
    return this._spikes;
  }
  public putSpikes(value: DatabaseAnomaliesLoadSpikes) {
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
export interface DatabaseAnomaliesResponseTimeAuto {
  /**
  * Minimal service load to detect response time degradation. Response time degradation of services with smaller load won't trigger alerts. Possible values are `FIFTEEN_REQUESTS_PER_MINUTE`, `FIVE_REQUESTS_PER_MINUTE`, `ONE_REQUEST_PER_MINUTE` and `TEN_REQUESTS_PER_MINUTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#load DatabaseAnomalies#load}
  */
  readonly load: string;
  /**
  * Alert if the response time degrades by more than *X* milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#milliseconds DatabaseAnomalies#milliseconds}
  */
  readonly milliseconds: number;
  /**
  * Alert if the response time degrades by more than *X* %
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#percent DatabaseAnomalies#percent}
  */
  readonly percent: number;
  /**
  * Alert if the response time of the slowest 10% degrades by more than *X* milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#slowest_milliseconds DatabaseAnomalies#slowest_milliseconds}
  */
  readonly slowestMilliseconds: number;
  /**
  * Alert if the response time of the slowest 10% degrades by more than *X* milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#slowest_percent DatabaseAnomalies#slowest_percent}
  */
  readonly slowestPercent: number;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#unknowns DatabaseAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function databaseAnomaliesResponseTimeAutoToTerraform(struct?: DatabaseAnomaliesResponseTimeAutoOutputReference | DatabaseAnomaliesResponseTimeAuto): any {
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


export function databaseAnomaliesResponseTimeAutoToHclTerraform(struct?: DatabaseAnomaliesResponseTimeAutoOutputReference | DatabaseAnomaliesResponseTimeAuto): any {
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

export class DatabaseAnomaliesResponseTimeAutoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesResponseTimeAuto | undefined {
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

  public set internalValue(value: DatabaseAnomaliesResponseTimeAuto | undefined) {
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
export interface DatabaseAnomaliesResponseTimeThresholds {
  /**
  * Minimal service load to detect response time degradation. Response time degradation of services with smaller load won't trigger alerts. Possible values are `FIFTEEN_REQUESTS_PER_MINUTE`, `FIVE_REQUESTS_PER_MINUTE`, `ONE_REQUEST_PER_MINUTE` and `TEN_REQUESTS_PER_MINUTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#load DatabaseAnomalies#load}
  */
  readonly load: string;
  /**
  * Response time during any 5-minute period to trigger an alert, in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#milliseconds DatabaseAnomalies#milliseconds}
  */
  readonly milliseconds: number;
  /**
  * Sensitivity of the threshold.  With `low` sensitivity, high statistical confidence is used. Brief violations (for example, due to a surge in load) won't trigger alerts.  With `high` sensitivity, no statistical confidence is used. Each violation triggers an alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#sensitivity DatabaseAnomalies#sensitivity}
  */
  readonly sensitivity: string;
  /**
  * Response time of the 10% slowest during any 5-minute period to trigger an alert, in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#slowest_milliseconds DatabaseAnomalies#slowest_milliseconds}
  */
  readonly slowestMilliseconds: number;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#unknowns DatabaseAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function databaseAnomaliesResponseTimeThresholdsToTerraform(struct?: DatabaseAnomaliesResponseTimeThresholdsOutputReference | DatabaseAnomaliesResponseTimeThresholds): any {
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


export function databaseAnomaliesResponseTimeThresholdsToHclTerraform(struct?: DatabaseAnomaliesResponseTimeThresholdsOutputReference | DatabaseAnomaliesResponseTimeThresholds): any {
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

export class DatabaseAnomaliesResponseTimeThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesResponseTimeThresholds | undefined {
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

  public set internalValue(value: DatabaseAnomaliesResponseTimeThresholds | undefined) {
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
export interface DatabaseAnomaliesResponseTime {
  /**
  * auto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#auto DatabaseAnomalies#auto}
  */
  readonly auto?: DatabaseAnomaliesResponseTimeAuto;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#thresholds DatabaseAnomalies#thresholds}
  */
  readonly thresholds?: DatabaseAnomaliesResponseTimeThresholds;
}

export function databaseAnomaliesResponseTimeToTerraform(struct?: DatabaseAnomaliesResponseTimeOutputReference | DatabaseAnomaliesResponseTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: databaseAnomaliesResponseTimeAutoToTerraform(struct!.auto),
    thresholds: databaseAnomaliesResponseTimeThresholdsToTerraform(struct!.thresholds),
  }
}


export function databaseAnomaliesResponseTimeToHclTerraform(struct?: DatabaseAnomaliesResponseTimeOutputReference | DatabaseAnomaliesResponseTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: databaseAnomaliesResponseTimeAutoToHclTerraform(struct!.auto),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesResponseTimeAutoList",
    },
    thresholds: {
      value: databaseAnomaliesResponseTimeThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesResponseTimeThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAnomaliesResponseTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesResponseTime | undefined {
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

  public set internalValue(value: DatabaseAnomaliesResponseTime | undefined) {
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
  private _auto = new DatabaseAnomaliesResponseTimeAutoOutputReference(this, "auto");
  public get auto() {
    return this._auto;
  }
  public putAuto(value: DatabaseAnomaliesResponseTimeAuto) {
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
  private _thresholds = new DatabaseAnomaliesResponseTimeThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: DatabaseAnomaliesResponseTimeThresholds) {
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
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies dynatrace_database_anomalies}
*/
export class DatabaseAnomalies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_database_anomalies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseAnomalies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseAnomalies to import
  * @param importFromId The id of the existing DatabaseAnomalies that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseAnomalies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_database_anomalies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/database_anomalies dynatrace_database_anomalies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseAnomaliesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DatabaseAnomaliesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_database_anomalies',
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
    this._dbConnectFailures.internalValue = config.dbConnectFailures;
    this._failureRate.internalValue = config.failureRate;
    this._load.internalValue = config.load;
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

  // db_connect_failures - computed: false, optional: true, required: false
  private _dbConnectFailures = new DatabaseAnomaliesDbConnectFailuresOutputReference(this, "db_connect_failures");
  public get dbConnectFailures() {
    return this._dbConnectFailures;
  }
  public putDbConnectFailures(value: DatabaseAnomaliesDbConnectFailures) {
    this._dbConnectFailures.internalValue = value;
  }
  public resetDbConnectFailures() {
    this._dbConnectFailures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbConnectFailuresInput() {
    return this._dbConnectFailures.internalValue;
  }

  // failure_rate - computed: false, optional: true, required: false
  private _failureRate = new DatabaseAnomaliesFailureRateOutputReference(this, "failure_rate");
  public get failureRate() {
    return this._failureRate;
  }
  public putFailureRate(value: DatabaseAnomaliesFailureRate) {
    this._failureRate.internalValue = value;
  }
  public resetFailureRate() {
    this._failureRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureRateInput() {
    return this._failureRate.internalValue;
  }

  // load - computed: false, optional: true, required: false
  private _load = new DatabaseAnomaliesLoadOutputReference(this, "load");
  public get load() {
    return this._load;
  }
  public putLoad(value: DatabaseAnomaliesLoad) {
    this._load.internalValue = value;
  }
  public resetLoad() {
    this._load.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadInput() {
    return this._load.internalValue;
  }

  // response_time - computed: false, optional: true, required: false
  private _responseTime = new DatabaseAnomaliesResponseTimeOutputReference(this, "response_time");
  public get responseTime() {
    return this._responseTime;
  }
  public putResponseTime(value: DatabaseAnomaliesResponseTime) {
    this._responseTime.internalValue = value;
  }
  public resetResponseTime() {
    this._responseTime.internalValue = undefined;
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
      db_connect_failures: databaseAnomaliesDbConnectFailuresToTerraform(this._dbConnectFailures.internalValue),
      failure_rate: databaseAnomaliesFailureRateToTerraform(this._failureRate.internalValue),
      load: databaseAnomaliesLoadToTerraform(this._load.internalValue),
      response_time: databaseAnomaliesResponseTimeToTerraform(this._responseTime.internalValue),
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
      db_connect_failures: {
        value: databaseAnomaliesDbConnectFailuresToHclTerraform(this._dbConnectFailures.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAnomaliesDbConnectFailuresList",
      },
      failure_rate: {
        value: databaseAnomaliesFailureRateToHclTerraform(this._failureRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAnomaliesFailureRateList",
      },
      load: {
        value: databaseAnomaliesLoadToHclTerraform(this._load.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAnomaliesLoadList",
      },
      response_time: {
        value: databaseAnomaliesResponseTimeToHclTerraform(this._responseTime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAnomaliesResponseTimeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
