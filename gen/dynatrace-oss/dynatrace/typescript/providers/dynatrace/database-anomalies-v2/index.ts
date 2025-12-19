// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseAnomaliesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#id DatabaseAnomaliesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope for the database anomaly detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#scope DatabaseAnomaliesV2#scope}
  */
  readonly scope: string;
  /**
  * database_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#database_connections DatabaseAnomaliesV2#database_connections}
  */
  readonly databaseConnections: DatabaseAnomaliesV2DatabaseConnections;
  /**
  * failure_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#failure_rate DatabaseAnomaliesV2#failure_rate}
  */
  readonly failureRate: DatabaseAnomaliesV2FailureRate;
  /**
  * load_drops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#load_drops DatabaseAnomaliesV2#load_drops}
  */
  readonly loadDrops: DatabaseAnomaliesV2LoadDrops;
  /**
  * load_spikes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#load_spikes DatabaseAnomaliesV2#load_spikes}
  */
  readonly loadSpikes: DatabaseAnomaliesV2LoadSpikes;
  /**
  * response_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#response_time DatabaseAnomaliesV2#response_time}
  */
  readonly responseTime: DatabaseAnomaliesV2ResponseTime;
}
export interface DatabaseAnomaliesV2DatabaseConnections {
  /**
  * Detect failed database connects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#enabled DatabaseAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#max_failed_connects DatabaseAnomaliesV2#max_failed_connects}
  */
  readonly maxFailedConnects?: number;
  /**
  * Time span
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#time_period DatabaseAnomaliesV2#time_period}
  */
  readonly timePeriod?: number;
}

export function databaseAnomaliesV2DatabaseConnectionsToTerraform(struct?: DatabaseAnomaliesV2DatabaseConnectionsOutputReference | DatabaseAnomaliesV2DatabaseConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_failed_connects: cdktf.numberToTerraform(struct!.maxFailedConnects),
    time_period: cdktf.numberToTerraform(struct!.timePeriod),
  }
}


export function databaseAnomaliesV2DatabaseConnectionsToHclTerraform(struct?: DatabaseAnomaliesV2DatabaseConnectionsOutputReference | DatabaseAnomaliesV2DatabaseConnections): any {
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
    max_failed_connects: {
      value: cdktf.numberToHclTerraform(struct!.maxFailedConnects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_period: {
      value: cdktf.numberToHclTerraform(struct!.timePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAnomaliesV2DatabaseConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesV2DatabaseConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxFailedConnects !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFailedConnects = this._maxFailedConnects;
    }
    if (this._timePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePeriod = this._timePeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAnomaliesV2DatabaseConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._maxFailedConnects = undefined;
      this._timePeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._maxFailedConnects = value.maxFailedConnects;
      this._timePeriod = value.timePeriod;
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

  // max_failed_connects - computed: false, optional: true, required: false
  private _maxFailedConnects?: number; 
  public get maxFailedConnects() {
    return this.getNumberAttribute('max_failed_connects');
  }
  public set maxFailedConnects(value: number) {
    this._maxFailedConnects = value;
  }
  public resetMaxFailedConnects() {
    this._maxFailedConnects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailedConnectsInput() {
    return this._maxFailedConnects;
  }

  // time_period - computed: false, optional: true, required: false
  private _timePeriod?: number; 
  public get timePeriod() {
    return this.getNumberAttribute('time_period');
  }
  public set timePeriod(value: number) {
    this._timePeriod = value;
  }
  public resetTimePeriod() {
    this._timePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInput() {
    return this._timePeriod;
  }
}
export interface DatabaseAnomaliesV2FailureRateAutoDetectionOverAlertingProtection {
  /**
  * Only alert if the abnormal state remains for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#minutes_abnormal_state DatabaseAnomaliesV2#minutes_abnormal_state}
  */
  readonly minutesAbnormalState: number;
  /**
  * Only alert if there are at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#requests_per_minute DatabaseAnomaliesV2#requests_per_minute}
  */
  readonly requestsPerMinute: number;
}

export function databaseAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionToTerraform(struct?: DatabaseAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionOutputReference | DatabaseAnomaliesV2FailureRateAutoDetectionOverAlertingProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_abnormal_state: cdktf.numberToTerraform(struct!.minutesAbnormalState),
    requests_per_minute: cdktf.numberToTerraform(struct!.requestsPerMinute),
  }
}


export function databaseAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionToHclTerraform(struct?: DatabaseAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionOutputReference | DatabaseAnomaliesV2FailureRateAutoDetectionOverAlertingProtection): any {
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

export class DatabaseAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesV2FailureRateAutoDetectionOverAlertingProtection | undefined {
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

  public set internalValue(value: DatabaseAnomaliesV2FailureRateAutoDetectionOverAlertingProtection | undefined) {
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
export interface DatabaseAnomaliesV2FailureRateAutoDetection {
  /**
  * Absolute threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#absolute_increase DatabaseAnomaliesV2#absolute_increase}
  */
  readonly absoluteIncrease: number;
  /**
  * Relative threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#relative_increase DatabaseAnomaliesV2#relative_increase}
  */
  readonly relativeIncrease: number;
  /**
  * over_alerting_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#over_alerting_protection DatabaseAnomaliesV2#over_alerting_protection}
  */
  readonly overAlertingProtection: DatabaseAnomaliesV2FailureRateAutoDetectionOverAlertingProtection;
}

export function databaseAnomaliesV2FailureRateAutoDetectionToTerraform(struct?: DatabaseAnomaliesV2FailureRateAutoDetectionOutputReference | DatabaseAnomaliesV2FailureRateAutoDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_increase: cdktf.numberToTerraform(struct!.absoluteIncrease),
    relative_increase: cdktf.numberToTerraform(struct!.relativeIncrease),
    over_alerting_protection: databaseAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionToTerraform(struct!.overAlertingProtection),
  }
}


export function databaseAnomaliesV2FailureRateAutoDetectionToHclTerraform(struct?: DatabaseAnomaliesV2FailureRateAutoDetectionOutputReference | DatabaseAnomaliesV2FailureRateAutoDetection): any {
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
      value: databaseAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionToHclTerraform(struct!.overAlertingProtection),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAnomaliesV2FailureRateAutoDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesV2FailureRateAutoDetection | undefined {
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

  public set internalValue(value: DatabaseAnomaliesV2FailureRateAutoDetection | undefined) {
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
  private _overAlertingProtection = new DatabaseAnomaliesV2FailureRateAutoDetectionOverAlertingProtectionOutputReference(this, "over_alerting_protection");
  public get overAlertingProtection() {
    return this._overAlertingProtection;
  }
  public putOverAlertingProtection(value: DatabaseAnomaliesV2FailureRateAutoDetectionOverAlertingProtection) {
    this._overAlertingProtection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overAlertingProtectionInput() {
    return this._overAlertingProtection.internalValue;
  }
}
export interface DatabaseAnomaliesV2FailureRateFixedDetectionOverAlertingProtection {
  /**
  * Only alert if the abnormal state remains for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#minutes_abnormal_state DatabaseAnomaliesV2#minutes_abnormal_state}
  */
  readonly minutesAbnormalState: number;
  /**
  * Only alert if there are at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#requests_per_minute DatabaseAnomaliesV2#requests_per_minute}
  */
  readonly requestsPerMinute: number;
}

export function databaseAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionToTerraform(struct?: DatabaseAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionOutputReference | DatabaseAnomaliesV2FailureRateFixedDetectionOverAlertingProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_abnormal_state: cdktf.numberToTerraform(struct!.minutesAbnormalState),
    requests_per_minute: cdktf.numberToTerraform(struct!.requestsPerMinute),
  }
}


export function databaseAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionToHclTerraform(struct?: DatabaseAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionOutputReference | DatabaseAnomaliesV2FailureRateFixedDetectionOverAlertingProtection): any {
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

export class DatabaseAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesV2FailureRateFixedDetectionOverAlertingProtection | undefined {
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

  public set internalValue(value: DatabaseAnomaliesV2FailureRateFixedDetectionOverAlertingProtection | undefined) {
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
export interface DatabaseAnomaliesV2FailureRateFixedDetection {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#sensitivity DatabaseAnomaliesV2#sensitivity}
  */
  readonly sensitivity: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#threshold DatabaseAnomaliesV2#threshold}
  */
  readonly threshold: number;
  /**
  * over_alerting_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#over_alerting_protection DatabaseAnomaliesV2#over_alerting_protection}
  */
  readonly overAlertingProtection: DatabaseAnomaliesV2FailureRateFixedDetectionOverAlertingProtection;
}

export function databaseAnomaliesV2FailureRateFixedDetectionToTerraform(struct?: DatabaseAnomaliesV2FailureRateFixedDetectionOutputReference | DatabaseAnomaliesV2FailureRateFixedDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    over_alerting_protection: databaseAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionToTerraform(struct!.overAlertingProtection),
  }
}


export function databaseAnomaliesV2FailureRateFixedDetectionToHclTerraform(struct?: DatabaseAnomaliesV2FailureRateFixedDetectionOutputReference | DatabaseAnomaliesV2FailureRateFixedDetection): any {
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
      value: databaseAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionToHclTerraform(struct!.overAlertingProtection),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAnomaliesV2FailureRateFixedDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesV2FailureRateFixedDetection | undefined {
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

  public set internalValue(value: DatabaseAnomaliesV2FailureRateFixedDetection | undefined) {
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
  private _overAlertingProtection = new DatabaseAnomaliesV2FailureRateFixedDetectionOverAlertingProtectionOutputReference(this, "over_alerting_protection");
  public get overAlertingProtection() {
    return this._overAlertingProtection;
  }
  public putOverAlertingProtection(value: DatabaseAnomaliesV2FailureRateFixedDetectionOverAlertingProtection) {
    this._overAlertingProtection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overAlertingProtectionInput() {
    return this._overAlertingProtection.internalValue;
  }
}
export interface DatabaseAnomaliesV2FailureRate {
  /**
  * Detection mode for increases in failure rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#detection_mode DatabaseAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Detect increases in failure rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#enabled DatabaseAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * auto_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#auto_detection DatabaseAnomaliesV2#auto_detection}
  */
  readonly autoDetection?: DatabaseAnomaliesV2FailureRateAutoDetection;
  /**
  * fixed_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#fixed_detection DatabaseAnomaliesV2#fixed_detection}
  */
  readonly fixedDetection?: DatabaseAnomaliesV2FailureRateFixedDetection;
}

export function databaseAnomaliesV2FailureRateToTerraform(struct?: DatabaseAnomaliesV2FailureRateOutputReference | DatabaseAnomaliesV2FailureRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    auto_detection: databaseAnomaliesV2FailureRateAutoDetectionToTerraform(struct!.autoDetection),
    fixed_detection: databaseAnomaliesV2FailureRateFixedDetectionToTerraform(struct!.fixedDetection),
  }
}


export function databaseAnomaliesV2FailureRateToHclTerraform(struct?: DatabaseAnomaliesV2FailureRateOutputReference | DatabaseAnomaliesV2FailureRate): any {
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
      value: databaseAnomaliesV2FailureRateAutoDetectionToHclTerraform(struct!.autoDetection),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesV2FailureRateAutoDetectionList",
    },
    fixed_detection: {
      value: databaseAnomaliesV2FailureRateFixedDetectionToHclTerraform(struct!.fixedDetection),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesV2FailureRateFixedDetectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAnomaliesV2FailureRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesV2FailureRate | undefined {
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

  public set internalValue(value: DatabaseAnomaliesV2FailureRate | undefined) {
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
  private _autoDetection = new DatabaseAnomaliesV2FailureRateAutoDetectionOutputReference(this, "auto_detection");
  public get autoDetection() {
    return this._autoDetection;
  }
  public putAutoDetection(value: DatabaseAnomaliesV2FailureRateAutoDetection) {
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
  private _fixedDetection = new DatabaseAnomaliesV2FailureRateFixedDetectionOutputReference(this, "fixed_detection");
  public get fixedDetection() {
    return this._fixedDetection;
  }
  public putFixedDetection(value: DatabaseAnomaliesV2FailureRateFixedDetection) {
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
export interface DatabaseAnomaliesV2LoadDrops {
  /**
  * Detect service load drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#enabled DatabaseAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#load_drop_percent DatabaseAnomaliesV2#load_drop_percent}
  */
  readonly loadDropPercent?: number;
  /**
  * Time span
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#minutes_abnormal_state DatabaseAnomaliesV2#minutes_abnormal_state}
  */
  readonly minutesAbnormalState?: number;
}

export function databaseAnomaliesV2LoadDropsToTerraform(struct?: DatabaseAnomaliesV2LoadDropsOutputReference | DatabaseAnomaliesV2LoadDrops): any {
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


export function databaseAnomaliesV2LoadDropsToHclTerraform(struct?: DatabaseAnomaliesV2LoadDropsOutputReference | DatabaseAnomaliesV2LoadDrops): any {
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

export class DatabaseAnomaliesV2LoadDropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesV2LoadDrops | undefined {
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

  public set internalValue(value: DatabaseAnomaliesV2LoadDrops | undefined) {
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
export interface DatabaseAnomaliesV2LoadSpikes {
  /**
  * Detect service load spikes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#enabled DatabaseAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#load_spike_percent DatabaseAnomaliesV2#load_spike_percent}
  */
  readonly loadSpikePercent?: number;
  /**
  * Time span
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#minutes_abnormal_state DatabaseAnomaliesV2#minutes_abnormal_state}
  */
  readonly minutesAbnormalState?: number;
}

export function databaseAnomaliesV2LoadSpikesToTerraform(struct?: DatabaseAnomaliesV2LoadSpikesOutputReference | DatabaseAnomaliesV2LoadSpikes): any {
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


export function databaseAnomaliesV2LoadSpikesToHclTerraform(struct?: DatabaseAnomaliesV2LoadSpikesOutputReference | DatabaseAnomaliesV2LoadSpikes): any {
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

export class DatabaseAnomaliesV2LoadSpikesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesV2LoadSpikes | undefined {
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

  public set internalValue(value: DatabaseAnomaliesV2LoadSpikes | undefined) {
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
export interface DatabaseAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtection {
  /**
  * Only alert if the abnormal state remains for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#minutes_abnormal_state DatabaseAnomaliesV2#minutes_abnormal_state}
  */
  readonly minutesAbnormalState: number;
  /**
  * Only alert if there are at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#requests_per_minute DatabaseAnomaliesV2#requests_per_minute}
  */
  readonly requestsPerMinute: number;
}

export function databaseAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionToTerraform(struct?: DatabaseAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionOutputReference | DatabaseAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_abnormal_state: cdktf.numberToTerraform(struct!.minutesAbnormalState),
    requests_per_minute: cdktf.numberToTerraform(struct!.requestsPerMinute),
  }
}


export function databaseAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionToHclTerraform(struct?: DatabaseAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionOutputReference | DatabaseAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtection): any {
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

export class DatabaseAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtection | undefined {
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

  public set internalValue(value: DatabaseAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtection | undefined) {
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
export interface DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeAll {
  /**
  * Absolute threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#degradation_milliseconds DatabaseAnomaliesV2#degradation_milliseconds}
  */
  readonly degradationMilliseconds: number;
  /**
  * Relative threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#degradation_percent DatabaseAnomaliesV2#degradation_percent}
  */
  readonly degradationPercent: number;
}

export function databaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllToTerraform(struct?: DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllOutputReference | DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    degradation_milliseconds: cdktf.numberToTerraform(struct!.degradationMilliseconds),
    degradation_percent: cdktf.numberToTerraform(struct!.degradationPercent),
  }
}


export function databaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllToHclTerraform(struct?: DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllOutputReference | DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeAll): any {
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

export class DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeAll | undefined {
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

  public set internalValue(value: DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeAll | undefined) {
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
export interface DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowest {
  /**
  * Absolute threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#slowest_degradation_milliseconds DatabaseAnomaliesV2#slowest_degradation_milliseconds}
  */
  readonly slowestDegradationMilliseconds: number;
  /**
  * Relative threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#slowest_degradation_percent DatabaseAnomaliesV2#slowest_degradation_percent}
  */
  readonly slowestDegradationPercent: number;
}

export function databaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestToTerraform(struct?: DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestOutputReference | DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slowest_degradation_milliseconds: cdktf.numberToTerraform(struct!.slowestDegradationMilliseconds),
    slowest_degradation_percent: cdktf.numberToTerraform(struct!.slowestDegradationPercent),
  }
}


export function databaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestToHclTerraform(struct?: DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestOutputReference | DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowest): any {
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

export class DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowest | undefined {
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

  public set internalValue(value: DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowest | undefined) {
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
export interface DatabaseAnomaliesV2ResponseTimeAutoDetection {
  /**
  * over_alerting_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#over_alerting_protection DatabaseAnomaliesV2#over_alerting_protection}
  */
  readonly overAlertingProtection: DatabaseAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtection;
  /**
  * response_time_all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#response_time_all DatabaseAnomaliesV2#response_time_all}
  */
  readonly responseTimeAll: DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeAll;
  /**
  * response_time_slowest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#response_time_slowest DatabaseAnomaliesV2#response_time_slowest}
  */
  readonly responseTimeSlowest: DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowest;
}

export function databaseAnomaliesV2ResponseTimeAutoDetectionToTerraform(struct?: DatabaseAnomaliesV2ResponseTimeAutoDetectionOutputReference | DatabaseAnomaliesV2ResponseTimeAutoDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    over_alerting_protection: databaseAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionToTerraform(struct!.overAlertingProtection),
    response_time_all: databaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllToTerraform(struct!.responseTimeAll),
    response_time_slowest: databaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestToTerraform(struct!.responseTimeSlowest),
  }
}


export function databaseAnomaliesV2ResponseTimeAutoDetectionToHclTerraform(struct?: DatabaseAnomaliesV2ResponseTimeAutoDetectionOutputReference | DatabaseAnomaliesV2ResponseTimeAutoDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    over_alerting_protection: {
      value: databaseAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionToHclTerraform(struct!.overAlertingProtection),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionList",
    },
    response_time_all: {
      value: databaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllToHclTerraform(struct!.responseTimeAll),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllList",
    },
    response_time_slowest: {
      value: databaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestToHclTerraform(struct!.responseTimeSlowest),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAnomaliesV2ResponseTimeAutoDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesV2ResponseTimeAutoDetection | undefined {
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

  public set internalValue(value: DatabaseAnomaliesV2ResponseTimeAutoDetection | undefined) {
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
  private _overAlertingProtection = new DatabaseAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtectionOutputReference(this, "over_alerting_protection");
  public get overAlertingProtection() {
    return this._overAlertingProtection;
  }
  public putOverAlertingProtection(value: DatabaseAnomaliesV2ResponseTimeAutoDetectionOverAlertingProtection) {
    this._overAlertingProtection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overAlertingProtectionInput() {
    return this._overAlertingProtection.internalValue;
  }

  // response_time_all - computed: false, optional: false, required: true
  private _responseTimeAll = new DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeAllOutputReference(this, "response_time_all");
  public get responseTimeAll() {
    return this._responseTimeAll;
  }
  public putResponseTimeAll(value: DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeAll) {
    this._responseTimeAll.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeAllInput() {
    return this._responseTimeAll.internalValue;
  }

  // response_time_slowest - computed: false, optional: false, required: true
  private _responseTimeSlowest = new DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowestOutputReference(this, "response_time_slowest");
  public get responseTimeSlowest() {
    return this._responseTimeSlowest;
  }
  public putResponseTimeSlowest(value: DatabaseAnomaliesV2ResponseTimeAutoDetectionResponseTimeSlowest) {
    this._responseTimeSlowest.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeSlowestInput() {
    return this._responseTimeSlowest.internalValue;
  }
}
export interface DatabaseAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtection {
  /**
  * Only alert if the abnormal state remains for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#minutes_abnormal_state DatabaseAnomaliesV2#minutes_abnormal_state}
  */
  readonly minutesAbnormalState: number;
  /**
  * Only alert if there are at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#requests_per_minute DatabaseAnomaliesV2#requests_per_minute}
  */
  readonly requestsPerMinute: number;
}

export function databaseAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionToTerraform(struct?: DatabaseAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionOutputReference | DatabaseAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_abnormal_state: cdktf.numberToTerraform(struct!.minutesAbnormalState),
    requests_per_minute: cdktf.numberToTerraform(struct!.requestsPerMinute),
  }
}


export function databaseAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionToHclTerraform(struct?: DatabaseAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionOutputReference | DatabaseAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtection): any {
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

export class DatabaseAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtection | undefined {
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

  public set internalValue(value: DatabaseAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtection | undefined) {
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
export interface DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeAll {
  /**
  * Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#degradation_milliseconds DatabaseAnomaliesV2#degradation_milliseconds}
  */
  readonly degradationMilliseconds: number;
}

export function databaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllToTerraform(struct?: DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllOutputReference | DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    degradation_milliseconds: cdktf.numberToTerraform(struct!.degradationMilliseconds),
  }
}


export function databaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllToHclTerraform(struct?: DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllOutputReference | DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeAll): any {
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

export class DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._degradationMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.degradationMilliseconds = this._degradationMilliseconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeAll | undefined) {
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
export interface DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowest {
  /**
  * Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#slowest_degradation_milliseconds DatabaseAnomaliesV2#slowest_degradation_milliseconds}
  */
  readonly slowestDegradationMilliseconds: number;
}

export function databaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestToTerraform(struct?: DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestOutputReference | DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slowest_degradation_milliseconds: cdktf.numberToTerraform(struct!.slowestDegradationMilliseconds),
  }
}


export function databaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestToHclTerraform(struct?: DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestOutputReference | DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowest): any {
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

export class DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slowestDegradationMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowestDegradationMilliseconds = this._slowestDegradationMilliseconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowest | undefined) {
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
export interface DatabaseAnomaliesV2ResponseTimeFixedDetection {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#sensitivity DatabaseAnomaliesV2#sensitivity}
  */
  readonly sensitivity: string;
  /**
  * over_alerting_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#over_alerting_protection DatabaseAnomaliesV2#over_alerting_protection}
  */
  readonly overAlertingProtection: DatabaseAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtection;
  /**
  * response_time_all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#response_time_all DatabaseAnomaliesV2#response_time_all}
  */
  readonly responseTimeAll: DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeAll;
  /**
  * response_time_slowest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#response_time_slowest DatabaseAnomaliesV2#response_time_slowest}
  */
  readonly responseTimeSlowest: DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowest;
}

export function databaseAnomaliesV2ResponseTimeFixedDetectionToTerraform(struct?: DatabaseAnomaliesV2ResponseTimeFixedDetectionOutputReference | DatabaseAnomaliesV2ResponseTimeFixedDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
    over_alerting_protection: databaseAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionToTerraform(struct!.overAlertingProtection),
    response_time_all: databaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllToTerraform(struct!.responseTimeAll),
    response_time_slowest: databaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestToTerraform(struct!.responseTimeSlowest),
  }
}


export function databaseAnomaliesV2ResponseTimeFixedDetectionToHclTerraform(struct?: DatabaseAnomaliesV2ResponseTimeFixedDetectionOutputReference | DatabaseAnomaliesV2ResponseTimeFixedDetection): any {
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
      value: databaseAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionToHclTerraform(struct!.overAlertingProtection),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionList",
    },
    response_time_all: {
      value: databaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllToHclTerraform(struct!.responseTimeAll),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllList",
    },
    response_time_slowest: {
      value: databaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestToHclTerraform(struct!.responseTimeSlowest),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAnomaliesV2ResponseTimeFixedDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesV2ResponseTimeFixedDetection | undefined {
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

  public set internalValue(value: DatabaseAnomaliesV2ResponseTimeFixedDetection | undefined) {
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
  private _overAlertingProtection = new DatabaseAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtectionOutputReference(this, "over_alerting_protection");
  public get overAlertingProtection() {
    return this._overAlertingProtection;
  }
  public putOverAlertingProtection(value: DatabaseAnomaliesV2ResponseTimeFixedDetectionOverAlertingProtection) {
    this._overAlertingProtection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overAlertingProtectionInput() {
    return this._overAlertingProtection.internalValue;
  }

  // response_time_all - computed: false, optional: false, required: true
  private _responseTimeAll = new DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeAllOutputReference(this, "response_time_all");
  public get responseTimeAll() {
    return this._responseTimeAll;
  }
  public putResponseTimeAll(value: DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeAll) {
    this._responseTimeAll.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeAllInput() {
    return this._responseTimeAll.internalValue;
  }

  // response_time_slowest - computed: false, optional: false, required: true
  private _responseTimeSlowest = new DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowestOutputReference(this, "response_time_slowest");
  public get responseTimeSlowest() {
    return this._responseTimeSlowest;
  }
  public putResponseTimeSlowest(value: DatabaseAnomaliesV2ResponseTimeFixedDetectionResponseTimeSlowest) {
    this._responseTimeSlowest.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeSlowestInput() {
    return this._responseTimeSlowest.internalValue;
  }
}
export interface DatabaseAnomaliesV2ResponseTime {
  /**
  * Detection mode for response time degradations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#detection_mode DatabaseAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Detect response time degradations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#enabled DatabaseAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * auto_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#auto_detection DatabaseAnomaliesV2#auto_detection}
  */
  readonly autoDetection?: DatabaseAnomaliesV2ResponseTimeAutoDetection;
  /**
  * fixed_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#fixed_detection DatabaseAnomaliesV2#fixed_detection}
  */
  readonly fixedDetection?: DatabaseAnomaliesV2ResponseTimeFixedDetection;
}

export function databaseAnomaliesV2ResponseTimeToTerraform(struct?: DatabaseAnomaliesV2ResponseTimeOutputReference | DatabaseAnomaliesV2ResponseTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    auto_detection: databaseAnomaliesV2ResponseTimeAutoDetectionToTerraform(struct!.autoDetection),
    fixed_detection: databaseAnomaliesV2ResponseTimeFixedDetectionToTerraform(struct!.fixedDetection),
  }
}


export function databaseAnomaliesV2ResponseTimeToHclTerraform(struct?: DatabaseAnomaliesV2ResponseTimeOutputReference | DatabaseAnomaliesV2ResponseTime): any {
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
      value: databaseAnomaliesV2ResponseTimeAutoDetectionToHclTerraform(struct!.autoDetection),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesV2ResponseTimeAutoDetectionList",
    },
    fixed_detection: {
      value: databaseAnomaliesV2ResponseTimeFixedDetectionToHclTerraform(struct!.fixedDetection),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAnomaliesV2ResponseTimeFixedDetectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAnomaliesV2ResponseTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAnomaliesV2ResponseTime | undefined {
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

  public set internalValue(value: DatabaseAnomaliesV2ResponseTime | undefined) {
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
  private _autoDetection = new DatabaseAnomaliesV2ResponseTimeAutoDetectionOutputReference(this, "auto_detection");
  public get autoDetection() {
    return this._autoDetection;
  }
  public putAutoDetection(value: DatabaseAnomaliesV2ResponseTimeAutoDetection) {
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
  private _fixedDetection = new DatabaseAnomaliesV2ResponseTimeFixedDetectionOutputReference(this, "fixed_detection");
  public get fixedDetection() {
    return this._fixedDetection;
  }
  public putFixedDetection(value: DatabaseAnomaliesV2ResponseTimeFixedDetection) {
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
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2 dynatrace_database_anomalies_v2}
*/
export class DatabaseAnomaliesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_database_anomalies_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseAnomaliesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseAnomaliesV2 to import
  * @param importFromId The id of the existing DatabaseAnomaliesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseAnomaliesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_database_anomalies_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/database_anomalies_v2 dynatrace_database_anomalies_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseAnomaliesV2Config
  */
  public constructor(scope: Construct, id: string, config: DatabaseAnomaliesV2Config) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_database_anomalies_v2',
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
    this._databaseConnections.internalValue = config.databaseConnections;
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

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // database_connections - computed: false, optional: false, required: true
  private _databaseConnections = new DatabaseAnomaliesV2DatabaseConnectionsOutputReference(this, "database_connections");
  public get databaseConnections() {
    return this._databaseConnections;
  }
  public putDatabaseConnections(value: DatabaseAnomaliesV2DatabaseConnections) {
    this._databaseConnections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseConnectionsInput() {
    return this._databaseConnections.internalValue;
  }

  // failure_rate - computed: false, optional: false, required: true
  private _failureRate = new DatabaseAnomaliesV2FailureRateOutputReference(this, "failure_rate");
  public get failureRate() {
    return this._failureRate;
  }
  public putFailureRate(value: DatabaseAnomaliesV2FailureRate) {
    this._failureRate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureRateInput() {
    return this._failureRate.internalValue;
  }

  // load_drops - computed: false, optional: false, required: true
  private _loadDrops = new DatabaseAnomaliesV2LoadDropsOutputReference(this, "load_drops");
  public get loadDrops() {
    return this._loadDrops;
  }
  public putLoadDrops(value: DatabaseAnomaliesV2LoadDrops) {
    this._loadDrops.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadDropsInput() {
    return this._loadDrops.internalValue;
  }

  // load_spikes - computed: false, optional: false, required: true
  private _loadSpikes = new DatabaseAnomaliesV2LoadSpikesOutputReference(this, "load_spikes");
  public get loadSpikes() {
    return this._loadSpikes;
  }
  public putLoadSpikes(value: DatabaseAnomaliesV2LoadSpikes) {
    this._loadSpikes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadSpikesInput() {
    return this._loadSpikes.internalValue;
  }

  // response_time - computed: false, optional: false, required: true
  private _responseTime = new DatabaseAnomaliesV2ResponseTimeOutputReference(this, "response_time");
  public get responseTime() {
    return this._responseTime;
  }
  public putResponseTime(value: DatabaseAnomaliesV2ResponseTime) {
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
      database_connections: databaseAnomaliesV2DatabaseConnectionsToTerraform(this._databaseConnections.internalValue),
      failure_rate: databaseAnomaliesV2FailureRateToTerraform(this._failureRate.internalValue),
      load_drops: databaseAnomaliesV2LoadDropsToTerraform(this._loadDrops.internalValue),
      load_spikes: databaseAnomaliesV2LoadSpikesToTerraform(this._loadSpikes.internalValue),
      response_time: databaseAnomaliesV2ResponseTimeToTerraform(this._responseTime.internalValue),
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
      database_connections: {
        value: databaseAnomaliesV2DatabaseConnectionsToHclTerraform(this._databaseConnections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAnomaliesV2DatabaseConnectionsList",
      },
      failure_rate: {
        value: databaseAnomaliesV2FailureRateToHclTerraform(this._failureRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAnomaliesV2FailureRateList",
      },
      load_drops: {
        value: databaseAnomaliesV2LoadDropsToHclTerraform(this._loadDrops.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAnomaliesV2LoadDropsList",
      },
      load_spikes: {
        value: databaseAnomaliesV2LoadSpikesToHclTerraform(this._loadSpikes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAnomaliesV2LoadSpikesList",
      },
      response_time: {
        value: databaseAnomaliesV2ResponseTimeToHclTerraform(this._responseTime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAnomaliesV2ResponseTimeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
