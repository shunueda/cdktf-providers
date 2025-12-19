// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BrowserMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The monitor is enabled (`true`) or disabled (`false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#enabled BrowserMonitor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The frequency of the monitor, in minutes.
  * 
  * You can use one of the following values: `5`, `10`, `15`, `30`, and `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#frequency BrowserMonitor#frequency}
  */
  readonly frequency: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#id BrowserMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of locations from which the monitor is executed.
  * 
  * To specify a location, use its entity ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locations BrowserMonitor#locations}
  */
  readonly locations?: string[];
  /**
  * A set of manually assigned applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#manually_assigned_apps BrowserMonitor#manually_assigned_apps}
  */
  readonly manuallyAssignedApps?: string[];
  /**
  * The name of the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#name BrowserMonitor#name}
  */
  readonly name: string;
  /**
  * anomaly_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#anomaly_detection BrowserMonitor#anomaly_detection}
  */
  readonly anomalyDetection?: BrowserMonitorAnomalyDetection;
  /**
  * key_performance_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#key_performance_metrics BrowserMonitor#key_performance_metrics}
  */
  readonly keyPerformanceMetrics: BrowserMonitorKeyPerformanceMetrics;
  /**
  * script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#script BrowserMonitor#script}
  */
  readonly script?: BrowserMonitorScript;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#tags BrowserMonitor#tags}
  */
  readonly tags?: BrowserMonitorTags[] | cdktf.IResolvable;
}
export interface BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThreshold {
  /**
  * Specify the event to which an ACTION threshold applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#event_index BrowserMonitor#event_index}
  */
  readonly eventIndex?: number;
  /**
  * Specify the request to which an ACTION threshold applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#request_index BrowserMonitor#request_index}
  */
  readonly requestIndex?: number;
  /**
  * The type of the threshold: `TOTAL` (total loading time) or `ACTION` (action loading time)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type?: string;
  /**
  * Notify if monitor takes longer than *X* milliseconds to load
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value_ms BrowserMonitor#value_ms}
  */
  readonly valueMs: number;
}

export function browserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdToTerraform(struct?: BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_index: cdktf.numberToTerraform(struct!.eventIndex),
    request_index: cdktf.numberToTerraform(struct!.requestIndex),
    type: cdktf.stringToTerraform(struct!.type),
    value_ms: cdktf.numberToTerraform(struct!.valueMs),
  }
}


export function browserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdToHclTerraform(struct?: BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_index: {
      value: cdktf.numberToHclTerraform(struct!.eventIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_index: {
      value: cdktf.numberToHclTerraform(struct!.requestIndex),
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
    value_ms: {
      value: cdktf.numberToHclTerraform(struct!.valueMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventIndex = this._eventIndex;
    }
    if (this._requestIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestIndex = this._requestIndex;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valueMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueMs = this._valueMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventIndex = undefined;
      this._requestIndex = undefined;
      this._type = undefined;
      this._valueMs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventIndex = value.eventIndex;
      this._requestIndex = value.requestIndex;
      this._type = value.type;
      this._valueMs = value.valueMs;
    }
  }

  // event_index - computed: false, optional: true, required: false
  private _eventIndex?: number; 
  public get eventIndex() {
    return this.getNumberAttribute('event_index');
  }
  public set eventIndex(value: number) {
    this._eventIndex = value;
  }
  public resetEventIndex() {
    this._eventIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIndexInput() {
    return this._eventIndex;
  }

  // request_index - computed: false, optional: true, required: false
  private _requestIndex?: number; 
  public get requestIndex() {
    return this.getNumberAttribute('request_index');
  }
  public set requestIndex(value: number) {
    this._requestIndex = value;
  }
  public resetRequestIndex() {
    this._requestIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIndexInput() {
    return this._requestIndex;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value_ms - computed: false, optional: false, required: true
  private _valueMs?: number; 
  public get valueMs() {
    return this.getNumberAttribute('value_ms');
  }
  public set valueMs(value: number) {
    this._valueMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueMsInput() {
    return this._valueMs;
  }
}

export class BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThreshold[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdOutputReference {
    return new BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholds {
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#threshold BrowserMonitor#threshold}
  */
  readonly threshold: BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThreshold[] | cdktf.IResolvable;
}

export function browserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsToTerraform(struct?: BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.listMapper(browserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdToTerraform, true)(struct!.threshold),
  }
}


export function browserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsToHclTerraform(struct?: BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.listMapperHcl(browserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdToHclTerraform, true)(struct!.threshold),
      isBlock: true,
      type: "set",
      storageClassType: "BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold.internalValue = value.threshold;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold = new BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdList(this, "threshold", true);
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThreshold[] | cdktf.IResolvable) {
    this._threshold.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}

export class BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholds[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsOutputReference {
    return new BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorAnomalyDetectionLoadingTimeThresholds {
  /**
  * Performance threshold is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#enabled BrowserMonitor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#thresholds BrowserMonitor#thresholds}
  */
  readonly thresholds?: BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholds[] | cdktf.IResolvable;
}

export function browserMonitorAnomalyDetectionLoadingTimeThresholdsToTerraform(struct?: BrowserMonitorAnomalyDetectionLoadingTimeThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    thresholds: cdktf.listMapper(browserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsToTerraform, true)(struct!.thresholds),
  }
}


export function browserMonitorAnomalyDetectionLoadingTimeThresholdsToHclTerraform(struct?: BrowserMonitorAnomalyDetectionLoadingTimeThresholds | cdktf.IResolvable): any {
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
    thresholds: {
      value: cdktf.listMapperHcl(browserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsToHclTerraform, true)(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorAnomalyDetectionLoadingTimeThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorAnomalyDetectionLoadingTimeThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._thresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholds = this._thresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorAnomalyDetectionLoadingTimeThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._thresholds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._thresholds.internalValue = value.thresholds;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsList(this, "thresholds", false);
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: BrowserMonitorAnomalyDetectionLoadingTimeThresholdsThresholds[] | cdktf.IResolvable) {
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

export class BrowserMonitorAnomalyDetectionLoadingTimeThresholdsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorAnomalyDetectionLoadingTimeThresholds[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorAnomalyDetectionLoadingTimeThresholdsOutputReference {
    return new BrowserMonitorAnomalyDetectionLoadingTimeThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicy {
  /**
  * The number of consecutive fails to trigger an alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#consecutive_runs BrowserMonitor#consecutive_runs}
  */
  readonly consecutiveRuns: number;
}

export function browserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyToTerraform(struct?: BrowserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive_runs: cdktf.numberToTerraform(struct!.consecutiveRuns),
  }
}


export function browserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyToHclTerraform(struct?: BrowserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive_runs: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutiveRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveRuns = this._consecutiveRuns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutiveRuns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutiveRuns = value.consecutiveRuns;
    }
  }

  // consecutive_runs - computed: false, optional: false, required: true
  private _consecutiveRuns?: number; 
  public get consecutiveRuns() {
    return this.getNumberAttribute('consecutive_runs');
  }
  public set consecutiveRuns(value: number) {
    this._consecutiveRuns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveRunsInput() {
    return this._consecutiveRuns;
  }
}

export class BrowserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicy[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyOutputReference {
    return new BrowserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicy {
  /**
  * The number of affected locations to trigger an alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#affected_locations BrowserMonitor#affected_locations}
  */
  readonly affectedLocations: number;
  /**
  * The number of consecutive fails to trigger an alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#consecutive_runs BrowserMonitor#consecutive_runs}
  */
  readonly consecutiveRuns: number;
}

export function browserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyToTerraform(struct?: BrowserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affected_locations: cdktf.numberToTerraform(struct!.affectedLocations),
    consecutive_runs: cdktf.numberToTerraform(struct!.consecutiveRuns),
  }
}


export function browserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyToHclTerraform(struct?: BrowserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affected_locations: {
      value: cdktf.numberToHclTerraform(struct!.affectedLocations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_runs: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affectedLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.affectedLocations = this._affectedLocations;
    }
    if (this._consecutiveRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveRuns = this._consecutiveRuns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affectedLocations = undefined;
      this._consecutiveRuns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affectedLocations = value.affectedLocations;
      this._consecutiveRuns = value.consecutiveRuns;
    }
  }

  // affected_locations - computed: false, optional: false, required: true
  private _affectedLocations?: number; 
  public get affectedLocations() {
    return this.getNumberAttribute('affected_locations');
  }
  public set affectedLocations(value: number) {
    this._affectedLocations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get affectedLocationsInput() {
    return this._affectedLocations;
  }

  // consecutive_runs - computed: false, optional: false, required: true
  private _consecutiveRuns?: number; 
  public get consecutiveRuns() {
    return this.getNumberAttribute('consecutive_runs');
  }
  public set consecutiveRuns(value: number) {
    this._consecutiveRuns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveRunsInput() {
    return this._consecutiveRuns;
  }
}

export class BrowserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicy[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyOutputReference {
    return new BrowserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorAnomalyDetectionOutageHandling {
  /**
  * (Field has overlap with `dynatrace_browser_monitor_outage` and `dynatrace_http_monitor_outage`) When enabled (`true`), generate a problem and send an alert when the monitor is unavailable at all configured locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#global_outage BrowserMonitor#global_outage}
  */
  readonly globalOutage?: boolean | cdktf.IResolvable;
  /**
  * (Field has overlap with `dynatrace_browser_monitor_outage` and `dynatrace_http_monitor_outage`) When enabled (`true`), generate a problem and send an alert when the monitor is unavailable for one or more consecutive runs at any location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#local_outage BrowserMonitor#local_outage}
  */
  readonly localOutage?: boolean | cdktf.IResolvable;
  /**
  * (Field has overlap with `dynatrace_browser_monitor_outage` and `dynatrace_http_monitor_outage`) Schedule retry if browser monitor execution results in a fail. For HTTP monitors this property is ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#retry_on_error BrowserMonitor#retry_on_error}
  */
  readonly retryOnError?: boolean | cdktf.IResolvable;
  /**
  * global_outage_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#global_outage_policy BrowserMonitor#global_outage_policy}
  */
  readonly globalOutagePolicy?: BrowserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicy[] | cdktf.IResolvable;
  /**
  * local_outage_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#local_outage_policy BrowserMonitor#local_outage_policy}
  */
  readonly localOutagePolicy?: BrowserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicy[] | cdktf.IResolvable;
}

export function browserMonitorAnomalyDetectionOutageHandlingToTerraform(struct?: BrowserMonitorAnomalyDetectionOutageHandling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_outage: cdktf.booleanToTerraform(struct!.globalOutage),
    local_outage: cdktf.booleanToTerraform(struct!.localOutage),
    retry_on_error: cdktf.booleanToTerraform(struct!.retryOnError),
    global_outage_policy: cdktf.listMapper(browserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyToTerraform, true)(struct!.globalOutagePolicy),
    local_outage_policy: cdktf.listMapper(browserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyToTerraform, true)(struct!.localOutagePolicy),
  }
}


export function browserMonitorAnomalyDetectionOutageHandlingToHclTerraform(struct?: BrowserMonitorAnomalyDetectionOutageHandling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_outage: {
      value: cdktf.booleanToHclTerraform(struct!.globalOutage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_outage: {
      value: cdktf.booleanToHclTerraform(struct!.localOutage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_on_error: {
      value: cdktf.booleanToHclTerraform(struct!.retryOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    global_outage_policy: {
      value: cdktf.listMapperHcl(browserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyToHclTerraform, true)(struct!.globalOutagePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyList",
    },
    local_outage_policy: {
      value: cdktf.listMapperHcl(browserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyToHclTerraform, true)(struct!.localOutagePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorAnomalyDetectionOutageHandlingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorAnomalyDetectionOutageHandling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalOutage !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalOutage = this._globalOutage;
    }
    if (this._localOutage !== undefined) {
      hasAnyValues = true;
      internalValueResult.localOutage = this._localOutage;
    }
    if (this._retryOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOnError = this._retryOnError;
    }
    if (this._globalOutagePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalOutagePolicy = this._globalOutagePolicy?.internalValue;
    }
    if (this._localOutagePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localOutagePolicy = this._localOutagePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorAnomalyDetectionOutageHandling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._globalOutage = undefined;
      this._localOutage = undefined;
      this._retryOnError = undefined;
      this._globalOutagePolicy.internalValue = undefined;
      this._localOutagePolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._globalOutage = value.globalOutage;
      this._localOutage = value.localOutage;
      this._retryOnError = value.retryOnError;
      this._globalOutagePolicy.internalValue = value.globalOutagePolicy;
      this._localOutagePolicy.internalValue = value.localOutagePolicy;
    }
  }

  // global_outage - computed: false, optional: true, required: false
  private _globalOutage?: boolean | cdktf.IResolvable; 
  public get globalOutage() {
    return this.getBooleanAttribute('global_outage');
  }
  public set globalOutage(value: boolean | cdktf.IResolvable) {
    this._globalOutage = value;
  }
  public resetGlobalOutage() {
    this._globalOutage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalOutageInput() {
    return this._globalOutage;
  }

  // local_outage - computed: false, optional: true, required: false
  private _localOutage?: boolean | cdktf.IResolvable; 
  public get localOutage() {
    return this.getBooleanAttribute('local_outage');
  }
  public set localOutage(value: boolean | cdktf.IResolvable) {
    this._localOutage = value;
  }
  public resetLocalOutage() {
    this._localOutage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOutageInput() {
    return this._localOutage;
  }

  // retry_on_error - computed: false, optional: true, required: false
  private _retryOnError?: boolean | cdktf.IResolvable; 
  public get retryOnError() {
    return this.getBooleanAttribute('retry_on_error');
  }
  public set retryOnError(value: boolean | cdktf.IResolvable) {
    this._retryOnError = value;
  }
  public resetRetryOnError() {
    this._retryOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnErrorInput() {
    return this._retryOnError;
  }

  // global_outage_policy - computed: false, optional: true, required: false
  private _globalOutagePolicy = new BrowserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyList(this, "global_outage_policy", false);
  public get globalOutagePolicy() {
    return this._globalOutagePolicy;
  }
  public putGlobalOutagePolicy(value: BrowserMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicy[] | cdktf.IResolvable) {
    this._globalOutagePolicy.internalValue = value;
  }
  public resetGlobalOutagePolicy() {
    this._globalOutagePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalOutagePolicyInput() {
    return this._globalOutagePolicy.internalValue;
  }

  // local_outage_policy - computed: false, optional: true, required: false
  private _localOutagePolicy = new BrowserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyList(this, "local_outage_policy", false);
  public get localOutagePolicy() {
    return this._localOutagePolicy;
  }
  public putLocalOutagePolicy(value: BrowserMonitorAnomalyDetectionOutageHandlingLocalOutagePolicy[] | cdktf.IResolvable) {
    this._localOutagePolicy.internalValue = value;
  }
  public resetLocalOutagePolicy() {
    this._localOutagePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOutagePolicyInput() {
    return this._localOutagePolicy.internalValue;
  }
}

export class BrowserMonitorAnomalyDetectionOutageHandlingList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorAnomalyDetectionOutageHandling[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorAnomalyDetectionOutageHandlingOutputReference {
    return new BrowserMonitorAnomalyDetectionOutageHandlingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorAnomalyDetection {
  /**
  * loading_time_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#loading_time_thresholds BrowserMonitor#loading_time_thresholds}
  */
  readonly loadingTimeThresholds?: BrowserMonitorAnomalyDetectionLoadingTimeThresholds[] | cdktf.IResolvable;
  /**
  * outage_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#outage_handling BrowserMonitor#outage_handling}
  */
  readonly outageHandling?: BrowserMonitorAnomalyDetectionOutageHandling[] | cdktf.IResolvable;
}

export function browserMonitorAnomalyDetectionToTerraform(struct?: BrowserMonitorAnomalyDetectionOutputReference | BrowserMonitorAnomalyDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    loading_time_thresholds: cdktf.listMapper(browserMonitorAnomalyDetectionLoadingTimeThresholdsToTerraform, true)(struct!.loadingTimeThresholds),
    outage_handling: cdktf.listMapper(browserMonitorAnomalyDetectionOutageHandlingToTerraform, true)(struct!.outageHandling),
  }
}


export function browserMonitorAnomalyDetectionToHclTerraform(struct?: BrowserMonitorAnomalyDetectionOutputReference | BrowserMonitorAnomalyDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    loading_time_thresholds: {
      value: cdktf.listMapperHcl(browserMonitorAnomalyDetectionLoadingTimeThresholdsToHclTerraform, true)(struct!.loadingTimeThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorAnomalyDetectionLoadingTimeThresholdsList",
    },
    outage_handling: {
      value: cdktf.listMapperHcl(browserMonitorAnomalyDetectionOutageHandlingToHclTerraform, true)(struct!.outageHandling),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorAnomalyDetectionOutageHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorAnomalyDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorAnomalyDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadingTimeThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadingTimeThresholds = this._loadingTimeThresholds?.internalValue;
    }
    if (this._outageHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outageHandling = this._outageHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorAnomalyDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loadingTimeThresholds.internalValue = undefined;
      this._outageHandling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loadingTimeThresholds.internalValue = value.loadingTimeThresholds;
      this._outageHandling.internalValue = value.outageHandling;
    }
  }

  // loading_time_thresholds - computed: false, optional: true, required: false
  private _loadingTimeThresholds = new BrowserMonitorAnomalyDetectionLoadingTimeThresholdsList(this, "loading_time_thresholds", false);
  public get loadingTimeThresholds() {
    return this._loadingTimeThresholds;
  }
  public putLoadingTimeThresholds(value: BrowserMonitorAnomalyDetectionLoadingTimeThresholds[] | cdktf.IResolvable) {
    this._loadingTimeThresholds.internalValue = value;
  }
  public resetLoadingTimeThresholds() {
    this._loadingTimeThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadingTimeThresholdsInput() {
    return this._loadingTimeThresholds.internalValue;
  }

  // outage_handling - computed: false, optional: true, required: false
  private _outageHandling = new BrowserMonitorAnomalyDetectionOutageHandlingList(this, "outage_handling", false);
  public get outageHandling() {
    return this._outageHandling;
  }
  public putOutageHandling(value: BrowserMonitorAnomalyDetectionOutageHandling[] | cdktf.IResolvable) {
    this._outageHandling.internalValue = value;
  }
  public resetOutageHandling() {
    this._outageHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outageHandlingInput() {
    return this._outageHandling.internalValue;
  }
}
export interface BrowserMonitorKeyPerformanceMetrics {
  /**
  * Defines the key performance metric for load actions. Supported values are `VISUALLY_COMPLETE`, `SPEED_INDEX`, `USER_ACTION_DURATION`, `TIME_TO_FIRST_BYTE`, `HTML_DOWNLOADED`, `DOM_INTERACTIVE`, `LOAD_EVENT_START` and `LOAD_EVENT_END`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#load_action_kpm BrowserMonitor#load_action_kpm}
  */
  readonly loadActionKpm: string;
  /**
  * Defines the key performance metric for XHR actions. Supported values are `VISUALLY_COMPLETE`, `USER_ACTION_DURATION`, `TIME_TO_FIRST_BYTE` and `RESPONSE_END`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#xhr_action_kpm BrowserMonitor#xhr_action_kpm}
  */
  readonly xhrActionKpm: string;
}

export function browserMonitorKeyPerformanceMetricsToTerraform(struct?: BrowserMonitorKeyPerformanceMetricsOutputReference | BrowserMonitorKeyPerformanceMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_action_kpm: cdktf.stringToTerraform(struct!.loadActionKpm),
    xhr_action_kpm: cdktf.stringToTerraform(struct!.xhrActionKpm),
  }
}


export function browserMonitorKeyPerformanceMetricsToHclTerraform(struct?: BrowserMonitorKeyPerformanceMetricsOutputReference | BrowserMonitorKeyPerformanceMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_action_kpm: {
      value: cdktf.stringToHclTerraform(struct!.loadActionKpm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xhr_action_kpm: {
      value: cdktf.stringToHclTerraform(struct!.xhrActionKpm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorKeyPerformanceMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorKeyPerformanceMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadActionKpm !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadActionKpm = this._loadActionKpm;
    }
    if (this._xhrActionKpm !== undefined) {
      hasAnyValues = true;
      internalValueResult.xhrActionKpm = this._xhrActionKpm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorKeyPerformanceMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loadActionKpm = undefined;
      this._xhrActionKpm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loadActionKpm = value.loadActionKpm;
      this._xhrActionKpm = value.xhrActionKpm;
    }
  }

  // load_action_kpm - computed: false, optional: false, required: true
  private _loadActionKpm?: string; 
  public get loadActionKpm() {
    return this.getStringAttribute('load_action_kpm');
  }
  public set loadActionKpm(value: string) {
    this._loadActionKpm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadActionKpmInput() {
    return this._loadActionKpm;
  }

  // xhr_action_kpm - computed: false, optional: false, required: true
  private _xhrActionKpm?: string; 
  public get xhrActionKpm() {
    return this.getStringAttribute('xhr_action_kpm');
  }
  public set xhrActionKpm(value: string) {
    this._xhrActionKpm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xhrActionKpmInput() {
    return this._xhrActionKpm;
  }
}
export interface BrowserMonitorScriptConfigurationBandwidth {
  /**
  * The download speed of the network, in bytes per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#download BrowserMonitor#download}
  */
  readonly download?: number;
  /**
  * The latency of the network, in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#latency BrowserMonitor#latency}
  */
  readonly latency?: number;
  /**
  * The type of the preconfigured network—when editing in the browser, press `Crtl+Spacebar` to see the list of available networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#network_type BrowserMonitor#network_type}
  */
  readonly networkType?: string;
  /**
  * The upload speed of the network, in bytes per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#upload BrowserMonitor#upload}
  */
  readonly upload?: number;
}

export function browserMonitorScriptConfigurationBandwidthToTerraform(struct?: BrowserMonitorScriptConfigurationBandwidthOutputReference | BrowserMonitorScriptConfigurationBandwidth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    download: cdktf.numberToTerraform(struct!.download),
    latency: cdktf.numberToTerraform(struct!.latency),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    upload: cdktf.numberToTerraform(struct!.upload),
  }
}


export function browserMonitorScriptConfigurationBandwidthToHclTerraform(struct?: BrowserMonitorScriptConfigurationBandwidthOutputReference | BrowserMonitorScriptConfigurationBandwidth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    download: {
      value: cdktf.numberToHclTerraform(struct!.download),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency: {
      value: cdktf.numberToHclTerraform(struct!.latency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload: {
      value: cdktf.numberToHclTerraform(struct!.upload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptConfigurationBandwidthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptConfigurationBandwidth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._download !== undefined) {
      hasAnyValues = true;
      internalValueResult.download = this._download;
    }
    if (this._latency !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._upload !== undefined) {
      hasAnyValues = true;
      internalValueResult.upload = this._upload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptConfigurationBandwidth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._download = undefined;
      this._latency = undefined;
      this._networkType = undefined;
      this._upload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._download = value.download;
      this._latency = value.latency;
      this._networkType = value.networkType;
      this._upload = value.upload;
    }
  }

  // download - computed: false, optional: true, required: false
  private _download?: number; 
  public get download() {
    return this.getNumberAttribute('download');
  }
  public set download(value: number) {
    this._download = value;
  }
  public resetDownload() {
    this._download = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadInput() {
    return this._download;
  }

  // latency - computed: false, optional: true, required: false
  private _latency?: number; 
  public get latency() {
    return this.getNumberAttribute('latency');
  }
  public set latency(value: number) {
    this._latency = value;
  }
  public resetLatency() {
    this._latency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // upload - computed: false, optional: true, required: false
  private _upload?: number; 
  public get upload() {
    return this.getNumberAttribute('upload');
  }
  public set upload(value: number) {
    this._upload = value;
  }
  public resetUpload() {
    this._upload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadInput() {
    return this._upload;
  }
}
export interface BrowserMonitorScriptConfigurationCookiesCookie {
  /**
  * The domain of the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#domain BrowserMonitor#domain}
  */
  readonly domain: string;
  /**
  * The name of the cookie. The following cookie names are now allowed: `dtCookie`, `dtLatC`, `dtPC`, `rxVisitor`, `rxlatency`, `rxpc`, `rxsession` and `rxvt`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#name BrowserMonitor#name}
  */
  readonly name: string;
  /**
  * The path of the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#path BrowserMonitor#path}
  */
  readonly path?: string;
  /**
  * The value of the cookie. The following symbols are not allowed: `;`, `,`, `\` and `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptConfigurationCookiesCookieToTerraform(struct?: BrowserMonitorScriptConfigurationCookiesCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptConfigurationCookiesCookieToHclTerraform(struct?: BrowserMonitorScriptConfigurationCookiesCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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

export class BrowserMonitorScriptConfigurationCookiesCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptConfigurationCookiesCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptConfigurationCookiesCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._name = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._name = value.name;
      this._path = value.path;
      this._value = value.value;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

export class BrowserMonitorScriptConfigurationCookiesCookieList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptConfigurationCookiesCookie[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptConfigurationCookiesCookieOutputReference {
    return new BrowserMonitorScriptConfigurationCookiesCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptConfigurationCookies {
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#cookie BrowserMonitor#cookie}
  */
  readonly cookie: BrowserMonitorScriptConfigurationCookiesCookie[] | cdktf.IResolvable;
}

export function browserMonitorScriptConfigurationCookiesToTerraform(struct?: BrowserMonitorScriptConfigurationCookiesOutputReference | BrowserMonitorScriptConfigurationCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: cdktf.listMapper(browserMonitorScriptConfigurationCookiesCookieToTerraform, true)(struct!.cookie),
  }
}


export function browserMonitorScriptConfigurationCookiesToHclTerraform(struct?: BrowserMonitorScriptConfigurationCookiesOutputReference | BrowserMonitorScriptConfigurationCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: cdktf.listMapperHcl(browserMonitorScriptConfigurationCookiesCookieToHclTerraform, true)(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptConfigurationCookiesCookieList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptConfigurationCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptConfigurationCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptConfigurationCookies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookie.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookie.internalValue = value.cookie;
    }
  }

  // cookie - computed: false, optional: false, required: true
  private _cookie = new BrowserMonitorScriptConfigurationCookiesCookieList(this, "cookie", false);
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: BrowserMonitorScriptConfigurationCookiesCookie[] | cdktf.IResolvable) {
    this._cookie.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }
}
export interface BrowserMonitorScriptConfigurationDevice {
  /**
  * The height of the screen in pixels.
  * The maximum allowed width is `1080`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#height BrowserMonitor#height}
  */
  readonly height?: number;
  /**
  * The flag of the mobile device.
  * Set to `true` for mobile devices or `false` for a desktop or laptop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#mobile BrowserMonitor#mobile}
  */
  readonly mobile?: boolean | cdktf.IResolvable;
  /**
  * The name of the preconfigured device—when editing in the browser, press `Crtl+Spacebar` to see the list of available devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#name BrowserMonitor#name}
  */
  readonly name?: string;
  /**
  * The orientation of the device. Possible values are `portrait` or `landscape`. Desktop and laptop devices are not allowed to use the `portrait` orientation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#orientation BrowserMonitor#orientation}
  */
  readonly orientation?: string;
  /**
  * The pixel ratio of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#scale_factor BrowserMonitor#scale_factor}
  */
  readonly scaleFactor?: number;
  /**
  * The flag of the touchscreen.
  * Set to `true` if the device uses touchscreen. In that case, use can set interaction event as `tap`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#touch_enabled BrowserMonitor#touch_enabled}
  */
  readonly touchEnabled?: boolean | cdktf.IResolvable;
  /**
  * The width of the screen in pixels.
  * The maximum allowed width is `1920`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#width BrowserMonitor#width}
  */
  readonly width?: number;
}

export function browserMonitorScriptConfigurationDeviceToTerraform(struct?: BrowserMonitorScriptConfigurationDeviceOutputReference | BrowserMonitorScriptConfigurationDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.numberToTerraform(struct!.height),
    mobile: cdktf.booleanToTerraform(struct!.mobile),
    name: cdktf.stringToTerraform(struct!.name),
    orientation: cdktf.stringToTerraform(struct!.orientation),
    scale_factor: cdktf.numberToTerraform(struct!.scaleFactor),
    touch_enabled: cdktf.booleanToTerraform(struct!.touchEnabled),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function browserMonitorScriptConfigurationDeviceToHclTerraform(struct?: BrowserMonitorScriptConfigurationDeviceOutputReference | BrowserMonitorScriptConfigurationDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mobile: {
      value: cdktf.booleanToHclTerraform(struct!.mobile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    orientation: {
      value: cdktf.stringToHclTerraform(struct!.orientation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_factor: {
      value: cdktf.numberToHclTerraform(struct!.scaleFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    touch_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.touchEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptConfigurationDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptConfigurationDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._mobile !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobile = this._mobile;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orientation !== undefined) {
      hasAnyValues = true;
      internalValueResult.orientation = this._orientation;
    }
    if (this._scaleFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleFactor = this._scaleFactor;
    }
    if (this._touchEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.touchEnabled = this._touchEnabled;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptConfigurationDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._mobile = undefined;
      this._name = undefined;
      this._orientation = undefined;
      this._scaleFactor = undefined;
      this._touchEnabled = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._mobile = value.mobile;
      this._name = value.name;
      this._orientation = value.orientation;
      this._scaleFactor = value.scaleFactor;
      this._touchEnabled = value.touchEnabled;
      this._width = value.width;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // mobile - computed: false, optional: true, required: false
  private _mobile?: boolean | cdktf.IResolvable; 
  public get mobile() {
    return this.getBooleanAttribute('mobile');
  }
  public set mobile(value: boolean | cdktf.IResolvable) {
    this._mobile = value;
  }
  public resetMobile() {
    this._mobile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileInput() {
    return this._mobile;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // orientation - computed: false, optional: true, required: false
  private _orientation?: string; 
  public get orientation() {
    return this.getStringAttribute('orientation');
  }
  public set orientation(value: string) {
    this._orientation = value;
  }
  public resetOrientation() {
    this._orientation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orientationInput() {
    return this._orientation;
  }

  // scale_factor - computed: false, optional: true, required: false
  private _scaleFactor?: number; 
  public get scaleFactor() {
    return this.getNumberAttribute('scale_factor');
  }
  public set scaleFactor(value: number) {
    this._scaleFactor = value;
  }
  public resetScaleFactor() {
    this._scaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleFactorInput() {
    return this._scaleFactor;
  }

  // touch_enabled - computed: false, optional: true, required: false
  private _touchEnabled?: boolean | cdktf.IResolvable; 
  public get touchEnabled() {
    return this.getBooleanAttribute('touch_enabled');
  }
  public set touchEnabled(value: boolean | cdktf.IResolvable) {
    this._touchEnabled = value;
  }
  public resetTouchEnabled() {
    this._touchEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get touchEnabledInput() {
    return this._touchEnabled;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}
export interface BrowserMonitorScriptConfigurationHeadersHeader {
  /**
  * The key of the header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#name BrowserMonitor#name}
  */
  readonly name: string;
  /**
  * The value of the header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptConfigurationHeadersHeaderToTerraform(struct?: BrowserMonitorScriptConfigurationHeadersHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptConfigurationHeadersHeaderToHclTerraform(struct?: BrowserMonitorScriptConfigurationHeadersHeader | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptConfigurationHeadersHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptConfigurationHeadersHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptConfigurationHeadersHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class BrowserMonitorScriptConfigurationHeadersHeaderList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptConfigurationHeadersHeader[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptConfigurationHeadersHeaderOutputReference {
    return new BrowserMonitorScriptConfigurationHeadersHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptConfigurationHeaders {
  /**
  * Restrict applying headers to a set of URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#restrictions BrowserMonitor#restrictions}
  */
  readonly restrictions?: string[];
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#header BrowserMonitor#header}
  */
  readonly header: BrowserMonitorScriptConfigurationHeadersHeader[] | cdktf.IResolvable;
}

export function browserMonitorScriptConfigurationHeadersToTerraform(struct?: BrowserMonitorScriptConfigurationHeadersOutputReference | BrowserMonitorScriptConfigurationHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictions),
    header: cdktf.listMapper(browserMonitorScriptConfigurationHeadersHeaderToTerraform, true)(struct!.header),
  }
}


export function browserMonitorScriptConfigurationHeadersToHclTerraform(struct?: BrowserMonitorScriptConfigurationHeadersOutputReference | BrowserMonitorScriptConfigurationHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restrictions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    header: {
      value: cdktf.listMapperHcl(browserMonitorScriptConfigurationHeadersHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "set",
      storageClassType: "BrowserMonitorScriptConfigurationHeadersHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptConfigurationHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptConfigurationHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictions = this._restrictions;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptConfigurationHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restrictions = undefined;
      this._header.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restrictions = value.restrictions;
      this._header.internalValue = value.header;
    }
  }

  // restrictions - computed: false, optional: true, required: false
  private _restrictions?: string[]; 
  public get restrictions() {
    return cdktf.Fn.tolist(this.getListAttribute('restrictions'));
  }
  public set restrictions(value: string[]) {
    this._restrictions = value;
  }
  public resetRestrictions() {
    this._restrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions;
  }

  // header - computed: false, optional: false, required: true
  private _header = new BrowserMonitorScriptConfigurationHeadersHeaderList(this, "header", true);
  public get header() {
    return this._header;
  }
  public putHeader(value: BrowserMonitorScriptConfigurationHeadersHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}
export interface BrowserMonitorScriptConfigurationIgnoredErrorCodes {
  /**
  * Only apply to document request matching this regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#matching_document_requests BrowserMonitor#matching_document_requests}
  */
  readonly matchingDocumentRequests?: string;
  /**
  * You can use exact number, range or status class mask. Multiple values can be separated by comma, i.e. 404, 405-410, 5xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#status_codes BrowserMonitor#status_codes}
  */
  readonly statusCodes: string;
}

export function browserMonitorScriptConfigurationIgnoredErrorCodesToTerraform(struct?: BrowserMonitorScriptConfigurationIgnoredErrorCodesOutputReference | BrowserMonitorScriptConfigurationIgnoredErrorCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matching_document_requests: cdktf.stringToTerraform(struct!.matchingDocumentRequests),
    status_codes: cdktf.stringToTerraform(struct!.statusCodes),
  }
}


export function browserMonitorScriptConfigurationIgnoredErrorCodesToHclTerraform(struct?: BrowserMonitorScriptConfigurationIgnoredErrorCodesOutputReference | BrowserMonitorScriptConfigurationIgnoredErrorCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matching_document_requests: {
      value: cdktf.stringToHclTerraform(struct!.matchingDocumentRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_codes: {
      value: cdktf.stringToHclTerraform(struct!.statusCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptConfigurationIgnoredErrorCodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptConfigurationIgnoredErrorCodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchingDocumentRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingDocumentRequests = this._matchingDocumentRequests;
    }
    if (this._statusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodes = this._statusCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptConfigurationIgnoredErrorCodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchingDocumentRequests = undefined;
      this._statusCodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchingDocumentRequests = value.matchingDocumentRequests;
      this._statusCodes = value.statusCodes;
    }
  }

  // matching_document_requests - computed: false, optional: true, required: false
  private _matchingDocumentRequests?: string; 
  public get matchingDocumentRequests() {
    return this.getStringAttribute('matching_document_requests');
  }
  public set matchingDocumentRequests(value: string) {
    this._matchingDocumentRequests = value;
  }
  public resetMatchingDocumentRequests() {
    this._matchingDocumentRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingDocumentRequestsInput() {
    return this._matchingDocumentRequests;
  }

  // status_codes - computed: false, optional: false, required: true
  private _statusCodes?: string; 
  public get statusCodes() {
    return this.getStringAttribute('status_codes');
  }
  public set statusCodes(value: string) {
    this._statusCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodesInput() {
    return this._statusCodes;
  }
}
export interface BrowserMonitorScriptConfigurationJavascriptSetttingsTimeoutSettings {
  /**
  * Track up to n cascading setTimeout calls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#action_limit BrowserMonitor#action_limit}
  */
  readonly actionLimit: number;
  /**
  * Limit cascading timeouts cumulatively to n ms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#total_timeout BrowserMonitor#total_timeout}
  */
  readonly totalTimeout: number;
}

export function browserMonitorScriptConfigurationJavascriptSetttingsTimeoutSettingsToTerraform(struct?: BrowserMonitorScriptConfigurationJavascriptSetttingsTimeoutSettingsOutputReference | BrowserMonitorScriptConfigurationJavascriptSetttingsTimeoutSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_limit: cdktf.numberToTerraform(struct!.actionLimit),
    total_timeout: cdktf.numberToTerraform(struct!.totalTimeout),
  }
}


export function browserMonitorScriptConfigurationJavascriptSetttingsTimeoutSettingsToHclTerraform(struct?: BrowserMonitorScriptConfigurationJavascriptSetttingsTimeoutSettingsOutputReference | BrowserMonitorScriptConfigurationJavascriptSetttingsTimeoutSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_limit: {
      value: cdktf.numberToHclTerraform(struct!.actionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_timeout: {
      value: cdktf.numberToHclTerraform(struct!.totalTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptConfigurationJavascriptSetttingsTimeoutSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptConfigurationJavascriptSetttingsTimeoutSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionLimit = this._actionLimit;
    }
    if (this._totalTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTimeout = this._totalTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptConfigurationJavascriptSetttingsTimeoutSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionLimit = undefined;
      this._totalTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionLimit = value.actionLimit;
      this._totalTimeout = value.totalTimeout;
    }
  }

  // action_limit - computed: false, optional: false, required: true
  private _actionLimit?: number; 
  public get actionLimit() {
    return this.getNumberAttribute('action_limit');
  }
  public set actionLimit(value: number) {
    this._actionLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionLimitInput() {
    return this._actionLimit;
  }

  // total_timeout - computed: false, optional: false, required: true
  private _totalTimeout?: number; 
  public get totalTimeout() {
    return this.getNumberAttribute('total_timeout');
  }
  public set totalTimeout(value: number) {
    this._totalTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTimeoutInput() {
    return this._totalTimeout;
  }
}
export interface BrowserMonitorScriptConfigurationJavascriptSetttingsVisuallyCompleteOptions {
  /**
  * Query CSS selectors to specify mutation nodes (elements that change) to ignore in Visually complete and Speed index calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#excluded_elements BrowserMonitor#excluded_elements}
  */
  readonly excludedElements?: string[];
  /**
  * Parameters for Visually complete and Speed index calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#excluded_urls BrowserMonitor#excluded_urls}
  */
  readonly excludedUrls?: string[];
  /**
  * Use this setting to define the minimum visible area per element (in pixels) for an element to be counted towards Visually complete and Speed index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#image_size_threshold BrowserMonitor#image_size_threshold}
  */
  readonly imageSizeThreshold: number;
  /**
  * The time the Visually complete module waits for inactivity and no further mutations on the page after the load action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#inactivity_timeout BrowserMonitor#inactivity_timeout}
  */
  readonly inactivityTimeout: number;
  /**
  * The time the Visually complete module waits after an XHR or custom action closes to start the calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#mutation_timeout BrowserMonitor#mutation_timeout}
  */
  readonly mutationTimeout: number;
}

export function browserMonitorScriptConfigurationJavascriptSetttingsVisuallyCompleteOptionsToTerraform(struct?: BrowserMonitorScriptConfigurationJavascriptSetttingsVisuallyCompleteOptionsOutputReference | BrowserMonitorScriptConfigurationJavascriptSetttingsVisuallyCompleteOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedElements),
    excluded_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedUrls),
    image_size_threshold: cdktf.numberToTerraform(struct!.imageSizeThreshold),
    inactivity_timeout: cdktf.numberToTerraform(struct!.inactivityTimeout),
    mutation_timeout: cdktf.numberToTerraform(struct!.mutationTimeout),
  }
}


export function browserMonitorScriptConfigurationJavascriptSetttingsVisuallyCompleteOptionsToHclTerraform(struct?: BrowserMonitorScriptConfigurationJavascriptSetttingsVisuallyCompleteOptionsOutputReference | BrowserMonitorScriptConfigurationJavascriptSetttingsVisuallyCompleteOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedElements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image_size_threshold: {
      value: cdktf.numberToHclTerraform(struct!.imageSizeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inactivity_timeout: {
      value: cdktf.numberToHclTerraform(struct!.inactivityTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mutation_timeout: {
      value: cdktf.numberToHclTerraform(struct!.mutationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptConfigurationJavascriptSetttingsVisuallyCompleteOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptConfigurationJavascriptSetttingsVisuallyCompleteOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedElements = this._excludedElements;
    }
    if (this._excludedUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedUrls = this._excludedUrls;
    }
    if (this._imageSizeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSizeThreshold = this._imageSizeThreshold;
    }
    if (this._inactivityTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityTimeout = this._inactivityTimeout;
    }
    if (this._mutationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutationTimeout = this._mutationTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptConfigurationJavascriptSetttingsVisuallyCompleteOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedElements = undefined;
      this._excludedUrls = undefined;
      this._imageSizeThreshold = undefined;
      this._inactivityTimeout = undefined;
      this._mutationTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedElements = value.excludedElements;
      this._excludedUrls = value.excludedUrls;
      this._imageSizeThreshold = value.imageSizeThreshold;
      this._inactivityTimeout = value.inactivityTimeout;
      this._mutationTimeout = value.mutationTimeout;
    }
  }

  // excluded_elements - computed: false, optional: true, required: false
  private _excludedElements?: string[]; 
  public get excludedElements() {
    return this.getListAttribute('excluded_elements');
  }
  public set excludedElements(value: string[]) {
    this._excludedElements = value;
  }
  public resetExcludedElements() {
    this._excludedElements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedElementsInput() {
    return this._excludedElements;
  }

  // excluded_urls - computed: false, optional: true, required: false
  private _excludedUrls?: string[]; 
  public get excludedUrls() {
    return this.getListAttribute('excluded_urls');
  }
  public set excludedUrls(value: string[]) {
    this._excludedUrls = value;
  }
  public resetExcludedUrls() {
    this._excludedUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedUrlsInput() {
    return this._excludedUrls;
  }

  // image_size_threshold - computed: false, optional: false, required: true
  private _imageSizeThreshold?: number; 
  public get imageSizeThreshold() {
    return this.getNumberAttribute('image_size_threshold');
  }
  public set imageSizeThreshold(value: number) {
    this._imageSizeThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSizeThresholdInput() {
    return this._imageSizeThreshold;
  }

  // inactivity_timeout - computed: false, optional: false, required: true
  private _inactivityTimeout?: number; 
  public get inactivityTimeout() {
    return this.getNumberAttribute('inactivity_timeout');
  }
  public set inactivityTimeout(value: number) {
    this._inactivityTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTimeoutInput() {
    return this._inactivityTimeout;
  }

  // mutation_timeout - computed: false, optional: false, required: true
  private _mutationTimeout?: number; 
  public get mutationTimeout() {
    return this.getNumberAttribute('mutation_timeout');
  }
  public set mutationTimeout(value: number) {
    this._mutationTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mutationTimeoutInput() {
    return this._mutationTimeout;
  }
}
export interface BrowserMonitorScriptConfigurationJavascriptSetttings {
  /**
  * Additional Javascript Agent Properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#custom_properties BrowserMonitor#custom_properties}
  */
  readonly customProperties?: string;
  /**
  * Capture fetch() requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#fetch_requests BrowserMonitor#fetch_requests}
  */
  readonly fetchRequests?: boolean | cdktf.IResolvable;
  /**
  * JavaScript error report
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#javascript_errors BrowserMonitor#javascript_errors}
  */
  readonly javascriptErrors?: boolean | cdktf.IResolvable;
  /**
  * Timed action support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#timed_actions BrowserMonitor#timed_actions}
  */
  readonly timedActions?: boolean | cdktf.IResolvable;
  /**
  * Capture XMLHttpRequests (XHR)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#xml_http_requests BrowserMonitor#xml_http_requests}
  */
  readonly xmlHttpRequests?: boolean | cdktf.IResolvable;
  /**
  * timeout_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#timeout_settings BrowserMonitor#timeout_settings}
  */
  readonly timeoutSettings?: BrowserMonitorScriptConfigurationJavascriptSetttingsTimeoutSettings;
  /**
  * visually_complete_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#visually_complete_options BrowserMonitor#visually_complete_options}
  */
  readonly visuallyCompleteOptions?: BrowserMonitorScriptConfigurationJavascriptSetttingsVisuallyCompleteOptions;
}

export function browserMonitorScriptConfigurationJavascriptSetttingsToTerraform(struct?: BrowserMonitorScriptConfigurationJavascriptSetttingsOutputReference | BrowserMonitorScriptConfigurationJavascriptSetttings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_properties: cdktf.stringToTerraform(struct!.customProperties),
    fetch_requests: cdktf.booleanToTerraform(struct!.fetchRequests),
    javascript_errors: cdktf.booleanToTerraform(struct!.javascriptErrors),
    timed_actions: cdktf.booleanToTerraform(struct!.timedActions),
    xml_http_requests: cdktf.booleanToTerraform(struct!.xmlHttpRequests),
    timeout_settings: browserMonitorScriptConfigurationJavascriptSetttingsTimeoutSettingsToTerraform(struct!.timeoutSettings),
    visually_complete_options: browserMonitorScriptConfigurationJavascriptSetttingsVisuallyCompleteOptionsToTerraform(struct!.visuallyCompleteOptions),
  }
}


export function browserMonitorScriptConfigurationJavascriptSetttingsToHclTerraform(struct?: BrowserMonitorScriptConfigurationJavascriptSetttingsOutputReference | BrowserMonitorScriptConfigurationJavascriptSetttings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_properties: {
      value: cdktf.stringToHclTerraform(struct!.customProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fetch_requests: {
      value: cdktf.booleanToHclTerraform(struct!.fetchRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    javascript_errors: {
      value: cdktf.booleanToHclTerraform(struct!.javascriptErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timed_actions: {
      value: cdktf.booleanToHclTerraform(struct!.timedActions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xml_http_requests: {
      value: cdktf.booleanToHclTerraform(struct!.xmlHttpRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_settings: {
      value: browserMonitorScriptConfigurationJavascriptSetttingsTimeoutSettingsToHclTerraform(struct!.timeoutSettings),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptConfigurationJavascriptSetttingsTimeoutSettingsList",
    },
    visually_complete_options: {
      value: browserMonitorScriptConfigurationJavascriptSetttingsVisuallyCompleteOptionsToHclTerraform(struct!.visuallyCompleteOptions),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptConfigurationJavascriptSetttingsVisuallyCompleteOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptConfigurationJavascriptSetttingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptConfigurationJavascriptSetttings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperties = this._customProperties;
    }
    if (this._fetchRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchRequests = this._fetchRequests;
    }
    if (this._javascriptErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptErrors = this._javascriptErrors;
    }
    if (this._timedActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.timedActions = this._timedActions;
    }
    if (this._xmlHttpRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmlHttpRequests = this._xmlHttpRequests;
    }
    if (this._timeoutSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSettings = this._timeoutSettings?.internalValue;
    }
    if (this._visuallyCompleteOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visuallyCompleteOptions = this._visuallyCompleteOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptConfigurationJavascriptSetttings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customProperties = undefined;
      this._fetchRequests = undefined;
      this._javascriptErrors = undefined;
      this._timedActions = undefined;
      this._xmlHttpRequests = undefined;
      this._timeoutSettings.internalValue = undefined;
      this._visuallyCompleteOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customProperties = value.customProperties;
      this._fetchRequests = value.fetchRequests;
      this._javascriptErrors = value.javascriptErrors;
      this._timedActions = value.timedActions;
      this._xmlHttpRequests = value.xmlHttpRequests;
      this._timeoutSettings.internalValue = value.timeoutSettings;
      this._visuallyCompleteOptions.internalValue = value.visuallyCompleteOptions;
    }
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties?: string; 
  public get customProperties() {
    return this.getStringAttribute('custom_properties');
  }
  public set customProperties(value: string) {
    this._customProperties = value;
  }
  public resetCustomProperties() {
    this._customProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties;
  }

  // fetch_requests - computed: false, optional: true, required: false
  private _fetchRequests?: boolean | cdktf.IResolvable; 
  public get fetchRequests() {
    return this.getBooleanAttribute('fetch_requests');
  }
  public set fetchRequests(value: boolean | cdktf.IResolvable) {
    this._fetchRequests = value;
  }
  public resetFetchRequests() {
    this._fetchRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchRequestsInput() {
    return this._fetchRequests;
  }

  // javascript_errors - computed: false, optional: true, required: false
  private _javascriptErrors?: boolean | cdktf.IResolvable; 
  public get javascriptErrors() {
    return this.getBooleanAttribute('javascript_errors');
  }
  public set javascriptErrors(value: boolean | cdktf.IResolvable) {
    this._javascriptErrors = value;
  }
  public resetJavascriptErrors() {
    this._javascriptErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptErrorsInput() {
    return this._javascriptErrors;
  }

  // timed_actions - computed: false, optional: true, required: false
  private _timedActions?: boolean | cdktf.IResolvable; 
  public get timedActions() {
    return this.getBooleanAttribute('timed_actions');
  }
  public set timedActions(value: boolean | cdktf.IResolvable) {
    this._timedActions = value;
  }
  public resetTimedActions() {
    this._timedActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedActionsInput() {
    return this._timedActions;
  }

  // xml_http_requests - computed: false, optional: true, required: false
  private _xmlHttpRequests?: boolean | cdktf.IResolvable; 
  public get xmlHttpRequests() {
    return this.getBooleanAttribute('xml_http_requests');
  }
  public set xmlHttpRequests(value: boolean | cdktf.IResolvable) {
    this._xmlHttpRequests = value;
  }
  public resetXmlHttpRequests() {
    this._xmlHttpRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlHttpRequestsInput() {
    return this._xmlHttpRequests;
  }

  // timeout_settings - computed: false, optional: true, required: false
  private _timeoutSettings = new BrowserMonitorScriptConfigurationJavascriptSetttingsTimeoutSettingsOutputReference(this, "timeout_settings");
  public get timeoutSettings() {
    return this._timeoutSettings;
  }
  public putTimeoutSettings(value: BrowserMonitorScriptConfigurationJavascriptSetttingsTimeoutSettings) {
    this._timeoutSettings.internalValue = value;
  }
  public resetTimeoutSettings() {
    this._timeoutSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSettingsInput() {
    return this._timeoutSettings.internalValue;
  }

  // visually_complete_options - computed: false, optional: true, required: false
  private _visuallyCompleteOptions = new BrowserMonitorScriptConfigurationJavascriptSetttingsVisuallyCompleteOptionsOutputReference(this, "visually_complete_options");
  public get visuallyCompleteOptions() {
    return this._visuallyCompleteOptions;
  }
  public putVisuallyCompleteOptions(value: BrowserMonitorScriptConfigurationJavascriptSetttingsVisuallyCompleteOptions) {
    this._visuallyCompleteOptions.internalValue = value;
  }
  public resetVisuallyCompleteOptions() {
    this._visuallyCompleteOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visuallyCompleteOptionsInput() {
    return this._visuallyCompleteOptions.internalValue;
  }
}
export interface BrowserMonitorScriptConfiguration {
  /**
  * Block these URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#block BrowserMonitor#block}
  */
  readonly block?: string[];
  /**
  * Bypass Content Security Policy of monitored pages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#bypass_csp BrowserMonitor#bypass_csp}
  */
  readonly bypassCsp?: boolean | cdktf.IResolvable;
  /**
  * No documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#disable_web_security BrowserMonitor#disable_web_security}
  */
  readonly disableWebSecurity?: boolean | cdktf.IResolvable;
  /**
  * Capture performance metrics for pages loaded in frames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#monitor_frames BrowserMonitor#monitor_frames}
  */
  readonly monitorFrames?: boolean | cdktf.IResolvable;
  /**
  * The user agent of the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#user_agent BrowserMonitor#user_agent}
  */
  readonly userAgent?: string;
  /**
  * bandwidth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#bandwidth BrowserMonitor#bandwidth}
  */
  readonly bandwidth?: BrowserMonitorScriptConfigurationBandwidth;
  /**
  * cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#cookies BrowserMonitor#cookies}
  */
  readonly cookies?: BrowserMonitorScriptConfigurationCookies;
  /**
  * device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#device BrowserMonitor#device}
  */
  readonly device?: BrowserMonitorScriptConfigurationDevice;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#headers BrowserMonitor#headers}
  */
  readonly headers?: BrowserMonitorScriptConfigurationHeaders;
  /**
  * ignored_error_codes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#ignored_error_codes BrowserMonitor#ignored_error_codes}
  */
  readonly ignoredErrorCodes?: BrowserMonitorScriptConfigurationIgnoredErrorCodes;
  /**
  * javascript_setttings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#javascript_setttings BrowserMonitor#javascript_setttings}
  */
  readonly javascriptSetttings?: BrowserMonitorScriptConfigurationJavascriptSetttings;
}

export function browserMonitorScriptConfigurationToTerraform(struct?: BrowserMonitorScriptConfigurationOutputReference | BrowserMonitorScriptConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.block),
    bypass_csp: cdktf.booleanToTerraform(struct!.bypassCsp),
    disable_web_security: cdktf.booleanToTerraform(struct!.disableWebSecurity),
    monitor_frames: cdktf.booleanToTerraform(struct!.monitorFrames),
    user_agent: cdktf.stringToTerraform(struct!.userAgent),
    bandwidth: browserMonitorScriptConfigurationBandwidthToTerraform(struct!.bandwidth),
    cookies: browserMonitorScriptConfigurationCookiesToTerraform(struct!.cookies),
    device: browserMonitorScriptConfigurationDeviceToTerraform(struct!.device),
    headers: browserMonitorScriptConfigurationHeadersToTerraform(struct!.headers),
    ignored_error_codes: browserMonitorScriptConfigurationIgnoredErrorCodesToTerraform(struct!.ignoredErrorCodes),
    javascript_setttings: browserMonitorScriptConfigurationJavascriptSetttingsToTerraform(struct!.javascriptSetttings),
  }
}


export function browserMonitorScriptConfigurationToHclTerraform(struct?: BrowserMonitorScriptConfigurationOutputReference | BrowserMonitorScriptConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.block),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bypass_csp: {
      value: cdktf.booleanToHclTerraform(struct!.bypassCsp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_web_security: {
      value: cdktf.booleanToHclTerraform(struct!.disableWebSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitor_frames: {
      value: cdktf.booleanToHclTerraform(struct!.monitorFrames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_agent: {
      value: cdktf.stringToHclTerraform(struct!.userAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: browserMonitorScriptConfigurationBandwidthToHclTerraform(struct!.bandwidth),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptConfigurationBandwidthList",
    },
    cookies: {
      value: browserMonitorScriptConfigurationCookiesToHclTerraform(struct!.cookies),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptConfigurationCookiesList",
    },
    device: {
      value: browserMonitorScriptConfigurationDeviceToHclTerraform(struct!.device),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptConfigurationDeviceList",
    },
    headers: {
      value: browserMonitorScriptConfigurationHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptConfigurationHeadersList",
    },
    ignored_error_codes: {
      value: browserMonitorScriptConfigurationIgnoredErrorCodesToHclTerraform(struct!.ignoredErrorCodes),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptConfigurationIgnoredErrorCodesList",
    },
    javascript_setttings: {
      value: browserMonitorScriptConfigurationJavascriptSetttingsToHclTerraform(struct!.javascriptSetttings),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptConfigurationJavascriptSetttingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._bypassCsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassCsp = this._bypassCsp;
    }
    if (this._disableWebSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWebSecurity = this._disableWebSecurity;
    }
    if (this._monitorFrames !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorFrames = this._monitorFrames;
    }
    if (this._userAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgent = this._userAgent;
    }
    if (this._bandwidth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth?.internalValue;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    if (this._device?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._ignoredErrorCodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredErrorCodes = this._ignoredErrorCodes?.internalValue;
    }
    if (this._javascriptSetttings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptSetttings = this._javascriptSetttings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._block = undefined;
      this._bypassCsp = undefined;
      this._disableWebSecurity = undefined;
      this._monitorFrames = undefined;
      this._userAgent = undefined;
      this._bandwidth.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._device.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._ignoredErrorCodes.internalValue = undefined;
      this._javascriptSetttings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._block = value.block;
      this._bypassCsp = value.bypassCsp;
      this._disableWebSecurity = value.disableWebSecurity;
      this._monitorFrames = value.monitorFrames;
      this._userAgent = value.userAgent;
      this._bandwidth.internalValue = value.bandwidth;
      this._cookies.internalValue = value.cookies;
      this._device.internalValue = value.device;
      this._headers.internalValue = value.headers;
      this._ignoredErrorCodes.internalValue = value.ignoredErrorCodes;
      this._javascriptSetttings.internalValue = value.javascriptSetttings;
    }
  }

  // block - computed: false, optional: true, required: false
  private _block?: string[]; 
  public get block() {
    return cdktf.Fn.tolist(this.getListAttribute('block'));
  }
  public set block(value: string[]) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // bypass_csp - computed: false, optional: true, required: false
  private _bypassCsp?: boolean | cdktf.IResolvable; 
  public get bypassCsp() {
    return this.getBooleanAttribute('bypass_csp');
  }
  public set bypassCsp(value: boolean | cdktf.IResolvable) {
    this._bypassCsp = value;
  }
  public resetBypassCsp() {
    this._bypassCsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCspInput() {
    return this._bypassCsp;
  }

  // disable_web_security - computed: false, optional: true, required: false
  private _disableWebSecurity?: boolean | cdktf.IResolvable; 
  public get disableWebSecurity() {
    return this.getBooleanAttribute('disable_web_security');
  }
  public set disableWebSecurity(value: boolean | cdktf.IResolvable) {
    this._disableWebSecurity = value;
  }
  public resetDisableWebSecurity() {
    this._disableWebSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWebSecurityInput() {
    return this._disableWebSecurity;
  }

  // monitor_frames - computed: false, optional: true, required: false
  private _monitorFrames?: boolean | cdktf.IResolvable; 
  public get monitorFrames() {
    return this.getBooleanAttribute('monitor_frames');
  }
  public set monitorFrames(value: boolean | cdktf.IResolvable) {
    this._monitorFrames = value;
  }
  public resetMonitorFrames() {
    this._monitorFrames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorFramesInput() {
    return this._monitorFrames;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth = new BrowserMonitorScriptConfigurationBandwidthOutputReference(this, "bandwidth");
  public get bandwidth() {
    return this._bandwidth;
  }
  public putBandwidth(value: BrowserMonitorScriptConfigurationBandwidth) {
    this._bandwidth.internalValue = value;
  }
  public resetBandwidth() {
    this._bandwidth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth.internalValue;
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new BrowserMonitorScriptConfigurationCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: BrowserMonitorScriptConfigurationCookies) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // device - computed: false, optional: true, required: false
  private _device = new BrowserMonitorScriptConfigurationDeviceOutputReference(this, "device");
  public get device() {
    return this._device;
  }
  public putDevice(value: BrowserMonitorScriptConfigurationDevice) {
    this._device.internalValue = value;
  }
  public resetDevice() {
    this._device.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new BrowserMonitorScriptConfigurationHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: BrowserMonitorScriptConfigurationHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // ignored_error_codes - computed: false, optional: true, required: false
  private _ignoredErrorCodes = new BrowserMonitorScriptConfigurationIgnoredErrorCodesOutputReference(this, "ignored_error_codes");
  public get ignoredErrorCodes() {
    return this._ignoredErrorCodes;
  }
  public putIgnoredErrorCodes(value: BrowserMonitorScriptConfigurationIgnoredErrorCodes) {
    this._ignoredErrorCodes.internalValue = value;
  }
  public resetIgnoredErrorCodes() {
    this._ignoredErrorCodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredErrorCodesInput() {
    return this._ignoredErrorCodes.internalValue;
  }

  // javascript_setttings - computed: false, optional: true, required: false
  private _javascriptSetttings = new BrowserMonitorScriptConfigurationJavascriptSetttingsOutputReference(this, "javascript_setttings");
  public get javascriptSetttings() {
    return this._javascriptSetttings;
  }
  public putJavascriptSetttings(value: BrowserMonitorScriptConfigurationJavascriptSetttings) {
    this._javascriptSetttings.internalValue = value;
  }
  public resetJavascriptSetttings() {
    this._javascriptSetttings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptSetttingsInput() {
    return this._javascriptSetttings.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventClickTargetLocatorsLocator {
  /**
  * Defines where to look for an element. `css` (CSS Selector) or `dom` (Javascript code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * The name of the element to be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventClickTargetLocatorsLocatorToTerraform(struct?: BrowserMonitorScriptEventsEventClickTargetLocatorsLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventClickTargetLocatorsLocatorToHclTerraform(struct?: BrowserMonitorScriptEventsEventClickTargetLocatorsLocator | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptEventsEventClickTargetLocatorsLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventClickTargetLocatorsLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventClickTargetLocatorsLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class BrowserMonitorScriptEventsEventClickTargetLocatorsLocatorList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventClickTargetLocatorsLocator[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventClickTargetLocatorsLocatorOutputReference {
    return new BrowserMonitorScriptEventsEventClickTargetLocatorsLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventClickTargetLocators {
  /**
  * locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locator BrowserMonitor#locator}
  */
  readonly locator: BrowserMonitorScriptEventsEventClickTargetLocatorsLocator[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventClickTargetLocatorsToTerraform(struct?: BrowserMonitorScriptEventsEventClickTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator: cdktf.listMapper(browserMonitorScriptEventsEventClickTargetLocatorsLocatorToTerraform, true)(struct!.locator),
  }
}


export function browserMonitorScriptEventsEventClickTargetLocatorsToHclTerraform(struct?: BrowserMonitorScriptEventsEventClickTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventClickTargetLocatorsLocatorToHclTerraform, true)(struct!.locator),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventClickTargetLocatorsLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventClickTargetLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventClickTargetLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventClickTargetLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locator.internalValue = value.locator;
    }
  }

  // locator - computed: false, optional: false, required: true
  private _locator = new BrowserMonitorScriptEventsEventClickTargetLocatorsLocatorList(this, "locator", false);
  public get locator() {
    return this._locator;
  }
  public putLocator(value: BrowserMonitorScriptEventsEventClickTargetLocatorsLocator[] | cdktf.IResolvable) {
    this._locator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventClickTargetLocatorsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventClickTargetLocators[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventClickTargetLocatorsOutputReference {
    return new BrowserMonitorScriptEventsEventClickTargetLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventClickTarget {
  /**
  * The tab of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#window BrowserMonitor#window}
  */
  readonly window?: string;
  /**
  * locators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locators BrowserMonitor#locators}
  */
  readonly locators?: BrowserMonitorScriptEventsEventClickTargetLocators[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventClickTargetToTerraform(struct?: BrowserMonitorScriptEventsEventClickTargetOutputReference | BrowserMonitorScriptEventsEventClickTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window: cdktf.stringToTerraform(struct!.window),
    locators: cdktf.listMapper(browserMonitorScriptEventsEventClickTargetLocatorsToTerraform, true)(struct!.locators),
  }
}


export function browserMonitorScriptEventsEventClickTargetToHclTerraform(struct?: BrowserMonitorScriptEventsEventClickTargetOutputReference | BrowserMonitorScriptEventsEventClickTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locators: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventClickTargetLocatorsToHclTerraform, true)(struct!.locators),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventClickTargetLocatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventClickTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventClickTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._locators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locators = this._locators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventClickTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._window = undefined;
      this._locators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._window = value.window;
      this._locators.internalValue = value.locators;
    }
  }

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new BrowserMonitorScriptEventsEventClickTargetLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: BrowserMonitorScriptEventsEventClickTargetLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocator {
  /**
  * Defines where to look for an element. `css` (CSS Selector) or `dom` (Javascript code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * The name of the element to be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocatorToTerraform(struct?: BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocatorToHclTerraform(struct?: BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocator | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocatorList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocator[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocatorOutputReference {
    return new BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventClickValidateValidationTargetLocators {
  /**
  * locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locator BrowserMonitor#locator}
  */
  readonly locator: BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocator[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventClickValidateValidationTargetLocatorsToTerraform(struct?: BrowserMonitorScriptEventsEventClickValidateValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator: cdktf.listMapper(browserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocatorToTerraform, true)(struct!.locator),
  }
}


export function browserMonitorScriptEventsEventClickValidateValidationTargetLocatorsToHclTerraform(struct?: BrowserMonitorScriptEventsEventClickValidateValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocatorToHclTerraform, true)(struct!.locator),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventClickValidateValidationTargetLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventClickValidateValidationTargetLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locator.internalValue = value.locator;
    }
  }

  // locator - computed: false, optional: false, required: true
  private _locator = new BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocatorList(this, "locator", false);
  public get locator() {
    return this._locator;
  }
  public putLocator(value: BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsLocator[] | cdktf.IResolvable) {
    this._locator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventClickValidateValidationTargetLocators[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsOutputReference {
    return new BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventClickValidateValidationTarget {
  /**
  * The tab of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#window BrowserMonitor#window}
  */
  readonly window?: string;
  /**
  * locators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locators BrowserMonitor#locators}
  */
  readonly locators?: BrowserMonitorScriptEventsEventClickValidateValidationTargetLocators[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventClickValidateValidationTargetToTerraform(struct?: BrowserMonitorScriptEventsEventClickValidateValidationTargetOutputReference | BrowserMonitorScriptEventsEventClickValidateValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window: cdktf.stringToTerraform(struct!.window),
    locators: cdktf.listMapper(browserMonitorScriptEventsEventClickValidateValidationTargetLocatorsToTerraform, true)(struct!.locators),
  }
}


export function browserMonitorScriptEventsEventClickValidateValidationTargetToHclTerraform(struct?: BrowserMonitorScriptEventsEventClickValidateValidationTargetOutputReference | BrowserMonitorScriptEventsEventClickValidateValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locators: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventClickValidateValidationTargetLocatorsToHclTerraform, true)(struct!.locators),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventClickValidateValidationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventClickValidateValidationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._locators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locators = this._locators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventClickValidateValidationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._window = undefined;
      this._locators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._window = value.window;
      this._locators.internalValue = value.locators;
    }
  }

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new BrowserMonitorScriptEventsEventClickValidateValidationTargetLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: BrowserMonitorScriptEventsEventClickValidateValidationTargetLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventClickValidateValidation {
  /**
  * The condition of the validation. `false` means the validation succeeds if the specified content/element is found. `true` means the validation fails if the specified content/element is found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#fail_if_found BrowserMonitor#fail_if_found}
  */
  readonly failIfFound?: boolean | cdktf.IResolvable;
  /**
  * The content to look for on the page.
  * Regular expressions are allowed. In that case set `isRegex` as `true`. Required for `content_match`, optional for `element_match`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#match BrowserMonitor#match}
  */
  readonly match?: string;
  /**
  * Defines whether `match` is plain text (`false`) or a regular expression (`true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#regex BrowserMonitor#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * The goal of the validation. `content_match` (check page for the specific content. Not allowed for validation inside of wait condition), `element_match` (check page for the specific element).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#target BrowserMonitor#target}
  */
  readonly target?: BrowserMonitorScriptEventsEventClickValidateValidationTarget;
}

export function browserMonitorScriptEventsEventClickValidateValidationToTerraform(struct?: BrowserMonitorScriptEventsEventClickValidateValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_if_found: cdktf.booleanToTerraform(struct!.failIfFound),
    match: cdktf.stringToTerraform(struct!.match),
    regex: cdktf.booleanToTerraform(struct!.regex),
    type: cdktf.stringToTerraform(struct!.type),
    target: browserMonitorScriptEventsEventClickValidateValidationTargetToTerraform(struct!.target),
  }
}


export function browserMonitorScriptEventsEventClickValidateValidationToHclTerraform(struct?: BrowserMonitorScriptEventsEventClickValidateValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_if_found: {
      value: cdktf.booleanToHclTerraform(struct!.failIfFound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: browserMonitorScriptEventsEventClickValidateValidationTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventClickValidateValidationTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventClickValidateValidationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventClickValidateValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failIfFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfFound = this._failIfFound;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventClickValidateValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failIfFound = undefined;
      this._match = undefined;
      this._regex = undefined;
      this._type = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failIfFound = value.failIfFound;
      this._match = value.match;
      this._regex = value.regex;
      this._type = value.type;
      this._target.internalValue = value.target;
    }
  }

  // fail_if_found - computed: false, optional: true, required: false
  private _failIfFound?: boolean | cdktf.IResolvable; 
  public get failIfFound() {
    return this.getBooleanAttribute('fail_if_found');
  }
  public set failIfFound(value: boolean | cdktf.IResolvable) {
    this._failIfFound = value;
  }
  public resetFailIfFound() {
    this._failIfFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfFoundInput() {
    return this._failIfFound;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

  // target - computed: false, optional: true, required: false
  private _target = new BrowserMonitorScriptEventsEventClickValidateValidationTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BrowserMonitorScriptEventsEventClickValidateValidationTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventClickValidateValidationList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventClickValidateValidation[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventClickValidateValidationOutputReference {
    return new BrowserMonitorScriptEventsEventClickValidateValidationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventClickValidate {
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#validation BrowserMonitor#validation}
  */
  readonly validation: BrowserMonitorScriptEventsEventClickValidateValidation[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventClickValidateToTerraform(struct?: BrowserMonitorScriptEventsEventClickValidateOutputReference | BrowserMonitorScriptEventsEventClickValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    validation: cdktf.listMapper(browserMonitorScriptEventsEventClickValidateValidationToTerraform, true)(struct!.validation),
  }
}


export function browserMonitorScriptEventsEventClickValidateToHclTerraform(struct?: BrowserMonitorScriptEventsEventClickValidateOutputReference | BrowserMonitorScriptEventsEventClickValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    validation: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventClickValidateValidationToHclTerraform, true)(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventClickValidateValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventClickValidateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventClickValidate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventClickValidate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._validation.internalValue = value.validation;
    }
  }

  // validation - computed: false, optional: false, required: true
  private _validation = new BrowserMonitorScriptEventsEventClickValidateValidationList(this, "validation", false);
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BrowserMonitorScriptEventsEventClickValidateValidation[] | cdktf.IResolvable) {
    this._validation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocator {
  /**
  * Defines where to look for an element. `css` (CSS Selector) or `dom` (Javascript code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * The name of the element to be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocatorToTerraform(struct?: BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocatorToHclTerraform(struct?: BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocator | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocatorList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocatorOutputReference {
    return new BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventClickWaitValidationTargetLocators {
  /**
  * locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locator BrowserMonitor#locator}
  */
  readonly locator: BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventClickWaitValidationTargetLocatorsToTerraform(struct?: BrowserMonitorScriptEventsEventClickWaitValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator: cdktf.listMapper(browserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocatorToTerraform, true)(struct!.locator),
  }
}


export function browserMonitorScriptEventsEventClickWaitValidationTargetLocatorsToHclTerraform(struct?: BrowserMonitorScriptEventsEventClickWaitValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocatorToHclTerraform, true)(struct!.locator),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventClickWaitValidationTargetLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventClickWaitValidationTargetLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locator.internalValue = value.locator;
    }
  }

  // locator - computed: false, optional: false, required: true
  private _locator = new BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocatorList(this, "locator", false);
  public get locator() {
    return this._locator;
  }
  public putLocator(value: BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable) {
    this._locator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventClickWaitValidationTargetLocators[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsOutputReference {
    return new BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventClickWaitValidationTarget {
  /**
  * The tab of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#window BrowserMonitor#window}
  */
  readonly window?: string;
  /**
  * locators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locators BrowserMonitor#locators}
  */
  readonly locators?: BrowserMonitorScriptEventsEventClickWaitValidationTargetLocators[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventClickWaitValidationTargetToTerraform(struct?: BrowserMonitorScriptEventsEventClickWaitValidationTargetOutputReference | BrowserMonitorScriptEventsEventClickWaitValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window: cdktf.stringToTerraform(struct!.window),
    locators: cdktf.listMapper(browserMonitorScriptEventsEventClickWaitValidationTargetLocatorsToTerraform, true)(struct!.locators),
  }
}


export function browserMonitorScriptEventsEventClickWaitValidationTargetToHclTerraform(struct?: BrowserMonitorScriptEventsEventClickWaitValidationTargetOutputReference | BrowserMonitorScriptEventsEventClickWaitValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locators: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventClickWaitValidationTargetLocatorsToHclTerraform, true)(struct!.locators),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventClickWaitValidationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventClickWaitValidationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._locators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locators = this._locators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventClickWaitValidationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._window = undefined;
      this._locators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._window = value.window;
      this._locators.internalValue = value.locators;
    }
  }

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new BrowserMonitorScriptEventsEventClickWaitValidationTargetLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: BrowserMonitorScriptEventsEventClickWaitValidationTargetLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventClickWaitValidation {
  /**
  * The condition of the validation. `false` means the validation succeeds if the specified content/element is found. `true` means the validation fails if the specified content/element is found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#fail_if_found BrowserMonitor#fail_if_found}
  */
  readonly failIfFound?: boolean | cdktf.IResolvable;
  /**
  * The content to look for on the page.
  * Regular expressions are allowed. In that case set `isRegex` as `true`. Required for `content_match`, optional for `element_match`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#match BrowserMonitor#match}
  */
  readonly match?: string;
  /**
  * Defines whether `match` is plain text (`false`) or a regular expression (`true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#regex BrowserMonitor#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * The goal of the validation. `content_match` (check page for the specific content. Not allowed for validation inside of wait condition), `element_match` (check page for the specific element).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#target BrowserMonitor#target}
  */
  readonly target?: BrowserMonitorScriptEventsEventClickWaitValidationTarget;
}

export function browserMonitorScriptEventsEventClickWaitValidationToTerraform(struct?: BrowserMonitorScriptEventsEventClickWaitValidationOutputReference | BrowserMonitorScriptEventsEventClickWaitValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_if_found: cdktf.booleanToTerraform(struct!.failIfFound),
    match: cdktf.stringToTerraform(struct!.match),
    regex: cdktf.booleanToTerraform(struct!.regex),
    type: cdktf.stringToTerraform(struct!.type),
    target: browserMonitorScriptEventsEventClickWaitValidationTargetToTerraform(struct!.target),
  }
}


export function browserMonitorScriptEventsEventClickWaitValidationToHclTerraform(struct?: BrowserMonitorScriptEventsEventClickWaitValidationOutputReference | BrowserMonitorScriptEventsEventClickWaitValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_if_found: {
      value: cdktf.booleanToHclTerraform(struct!.failIfFound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: browserMonitorScriptEventsEventClickWaitValidationTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventClickWaitValidationTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventClickWaitValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventClickWaitValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failIfFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfFound = this._failIfFound;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventClickWaitValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failIfFound = undefined;
      this._match = undefined;
      this._regex = undefined;
      this._type = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failIfFound = value.failIfFound;
      this._match = value.match;
      this._regex = value.regex;
      this._type = value.type;
      this._target.internalValue = value.target;
    }
  }

  // fail_if_found - computed: false, optional: true, required: false
  private _failIfFound?: boolean | cdktf.IResolvable; 
  public get failIfFound() {
    return this.getBooleanAttribute('fail_if_found');
  }
  public set failIfFound(value: boolean | cdktf.IResolvable) {
    this._failIfFound = value;
  }
  public resetFailIfFound() {
    this._failIfFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfFoundInput() {
    return this._failIfFound;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

  // target - computed: false, optional: true, required: false
  private _target = new BrowserMonitorScriptEventsEventClickWaitValidationTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BrowserMonitorScriptEventsEventClickWaitValidationTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventClickWait {
  /**
  * The time to wait, in millisencods. The maximum allowed value is `60000`. Required for the type `time`, not applicable otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#milliseconds BrowserMonitor#milliseconds}
  */
  readonly milliseconds?: number;
  /**
  * he maximum amount of time to wait for a certain element to appear, in milliseconds—if exceeded, the action is marked as failed.
  * The maximum allowed value is 60000. Required for the type `validation`, not applicable otherwise..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#timeout BrowserMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * The time to wait before the next event is triggered. Possible values are `page_complete` (wait for the page to load completely), `network` (wait for background network activity to complete), `next_action` (wait for the next action), `time` (wait for a specified periodof time) and `validation` (wait for a specific element to appear)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#wait_for BrowserMonitor#wait_for}
  */
  readonly waitFor: string;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#validation BrowserMonitor#validation}
  */
  readonly validation?: BrowserMonitorScriptEventsEventClickWaitValidation;
}

export function browserMonitorScriptEventsEventClickWaitToTerraform(struct?: BrowserMonitorScriptEventsEventClickWaitOutputReference | BrowserMonitorScriptEventsEventClickWait): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    milliseconds: cdktf.numberToTerraform(struct!.milliseconds),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    wait_for: cdktf.stringToTerraform(struct!.waitFor),
    validation: browserMonitorScriptEventsEventClickWaitValidationToTerraform(struct!.validation),
  }
}


export function browserMonitorScriptEventsEventClickWaitToHclTerraform(struct?: BrowserMonitorScriptEventsEventClickWaitOutputReference | BrowserMonitorScriptEventsEventClickWait): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.milliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_for: {
      value: cdktf.stringToHclTerraform(struct!.waitFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: browserMonitorScriptEventsEventClickWaitValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventClickWaitValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventClickWaitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventClickWait | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._milliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.milliseconds = this._milliseconds;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._waitFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitFor = this._waitFor;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventClickWait | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._milliseconds = undefined;
      this._timeout = undefined;
      this._waitFor = undefined;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._milliseconds = value.milliseconds;
      this._timeout = value.timeout;
      this._waitFor = value.waitFor;
      this._validation.internalValue = value.validation;
    }
  }

  // milliseconds - computed: false, optional: true, required: false
  private _milliseconds?: number; 
  public get milliseconds() {
    return this.getNumberAttribute('milliseconds');
  }
  public set milliseconds(value: number) {
    this._milliseconds = value;
  }
  public resetMilliseconds() {
    this._milliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get millisecondsInput() {
    return this._milliseconds;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // wait_for - computed: false, optional: false, required: true
  private _waitFor?: string; 
  public get waitFor() {
    return this.getStringAttribute('wait_for');
  }
  public set waitFor(value: string) {
    this._waitFor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInput() {
    return this._waitFor;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new BrowserMonitorScriptEventsEventClickWaitValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BrowserMonitorScriptEventsEventClickWaitValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventClick {
  /**
  * the mouse button to be used for the click
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#button BrowserMonitor#button}
  */
  readonly button: number;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#target BrowserMonitor#target}
  */
  readonly target?: BrowserMonitorScriptEventsEventClickTarget;
  /**
  * validate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#validate BrowserMonitor#validate}
  */
  readonly validate?: BrowserMonitorScriptEventsEventClickValidate;
  /**
  * wait block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#wait BrowserMonitor#wait}
  */
  readonly wait?: BrowserMonitorScriptEventsEventClickWait;
}

export function browserMonitorScriptEventsEventClickToTerraform(struct?: BrowserMonitorScriptEventsEventClickOutputReference | BrowserMonitorScriptEventsEventClick): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    button: cdktf.numberToTerraform(struct!.button),
    target: browserMonitorScriptEventsEventClickTargetToTerraform(struct!.target),
    validate: browserMonitorScriptEventsEventClickValidateToTerraform(struct!.validate),
    wait: browserMonitorScriptEventsEventClickWaitToTerraform(struct!.wait),
  }
}


export function browserMonitorScriptEventsEventClickToHclTerraform(struct?: BrowserMonitorScriptEventsEventClickOutputReference | BrowserMonitorScriptEventsEventClick): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    button: {
      value: cdktf.numberToHclTerraform(struct!.button),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: browserMonitorScriptEventsEventClickTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventClickTargetList",
    },
    validate: {
      value: browserMonitorScriptEventsEventClickValidateToHclTerraform(struct!.validate),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventClickValidateList",
    },
    wait: {
      value: browserMonitorScriptEventsEventClickWaitToHclTerraform(struct!.wait),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventClickWaitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventClickOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventClick | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._button !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._validate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate?.internalValue;
    }
    if (this._wait?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventClick | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._button = undefined;
      this._target.internalValue = undefined;
      this._validate.internalValue = undefined;
      this._wait.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._button = value.button;
      this._target.internalValue = value.target;
      this._validate.internalValue = value.validate;
      this._wait.internalValue = value.wait;
    }
  }

  // button - computed: false, optional: false, required: true
  private _button?: number; 
  public get button() {
    return this.getNumberAttribute('button');
  }
  public set button(value: number) {
    this._button = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button;
  }

  // target - computed: false, optional: true, required: false
  private _target = new BrowserMonitorScriptEventsEventClickTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BrowserMonitorScriptEventsEventClickTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // validate - computed: false, optional: true, required: false
  private _validate = new BrowserMonitorScriptEventsEventClickValidateOutputReference(this, "validate");
  public get validate() {
    return this._validate;
  }
  public putValidate(value: BrowserMonitorScriptEventsEventClickValidate) {
    this._validate.internalValue = value;
  }
  public resetValidate() {
    this._validate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate.internalValue;
  }

  // wait - computed: false, optional: true, required: false
  private _wait = new BrowserMonitorScriptEventsEventClickWaitOutputReference(this, "wait");
  public get wait() {
    return this._wait;
  }
  public putWait(value: BrowserMonitorScriptEventsEventClickWait) {
    this._wait.internalValue = value;
  }
  public resetWait() {
    this._wait.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventCookieCookiesCookie {
  /**
  * The domain of the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#domain BrowserMonitor#domain}
  */
  readonly domain: string;
  /**
  * The name of the cookie. The following cookie names are now allowed: `dtCookie`, `dtLatC`, `dtPC`, `rxVisitor`, `rxlatency`, `rxpc`, `rxsession` and `rxvt`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#name BrowserMonitor#name}
  */
  readonly name: string;
  /**
  * The path of the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#path BrowserMonitor#path}
  */
  readonly path?: string;
  /**
  * The value of the cookie. The following symbols are not allowed: `;`, `,`, `\` and `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventCookieCookiesCookieToTerraform(struct?: BrowserMonitorScriptEventsEventCookieCookiesCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventCookieCookiesCookieToHclTerraform(struct?: BrowserMonitorScriptEventsEventCookieCookiesCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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

export class BrowserMonitorScriptEventsEventCookieCookiesCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventCookieCookiesCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventCookieCookiesCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._name = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._name = value.name;
      this._path = value.path;
      this._value = value.value;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

export class BrowserMonitorScriptEventsEventCookieCookiesCookieList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventCookieCookiesCookie[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventCookieCookiesCookieOutputReference {
    return new BrowserMonitorScriptEventsEventCookieCookiesCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventCookieCookies {
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#cookie BrowserMonitor#cookie}
  */
  readonly cookie: BrowserMonitorScriptEventsEventCookieCookiesCookie[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventCookieCookiesToTerraform(struct?: BrowserMonitorScriptEventsEventCookieCookiesOutputReference | BrowserMonitorScriptEventsEventCookieCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: cdktf.listMapper(browserMonitorScriptEventsEventCookieCookiesCookieToTerraform, true)(struct!.cookie),
  }
}


export function browserMonitorScriptEventsEventCookieCookiesToHclTerraform(struct?: BrowserMonitorScriptEventsEventCookieCookiesOutputReference | BrowserMonitorScriptEventsEventCookieCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventCookieCookiesCookieToHclTerraform, true)(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventCookieCookiesCookieList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventCookieCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventCookieCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventCookieCookies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookie.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookie.internalValue = value.cookie;
    }
  }

  // cookie - computed: false, optional: false, required: true
  private _cookie = new BrowserMonitorScriptEventsEventCookieCookiesCookieList(this, "cookie", false);
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: BrowserMonitorScriptEventsEventCookieCookiesCookie[] | cdktf.IResolvable) {
    this._cookie.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventCookie {
  /**
  * cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#cookies BrowserMonitor#cookies}
  */
  readonly cookies: BrowserMonitorScriptEventsEventCookieCookies;
}

export function browserMonitorScriptEventsEventCookieToTerraform(struct?: BrowserMonitorScriptEventsEventCookieOutputReference | BrowserMonitorScriptEventsEventCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookies: browserMonitorScriptEventsEventCookieCookiesToTerraform(struct!.cookies),
  }
}


export function browserMonitorScriptEventsEventCookieToHclTerraform(struct?: BrowserMonitorScriptEventsEventCookieOutputReference | BrowserMonitorScriptEventsEventCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookies: {
      value: browserMonitorScriptEventsEventCookieCookiesToHclTerraform(struct!.cookies),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventCookieCookiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookies.internalValue = value.cookies;
    }
  }

  // cookies - computed: false, optional: false, required: true
  private _cookies = new BrowserMonitorScriptEventsEventCookieCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: BrowserMonitorScriptEventsEventCookieCookies) {
    this._cookies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventJavascriptTargetLocatorsLocator {
  /**
  * Defines where to look for an element. `css` (CSS Selector) or `dom` (Javascript code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * The name of the element to be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventJavascriptTargetLocatorsLocatorToTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptTargetLocatorsLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventJavascriptTargetLocatorsLocatorToHclTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptTargetLocatorsLocator | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptEventsEventJavascriptTargetLocatorsLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventJavascriptTargetLocatorsLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventJavascriptTargetLocatorsLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class BrowserMonitorScriptEventsEventJavascriptTargetLocatorsLocatorList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventJavascriptTargetLocatorsLocator[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventJavascriptTargetLocatorsLocatorOutputReference {
    return new BrowserMonitorScriptEventsEventJavascriptTargetLocatorsLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventJavascriptTargetLocators {
  /**
  * locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locator BrowserMonitor#locator}
  */
  readonly locator: BrowserMonitorScriptEventsEventJavascriptTargetLocatorsLocator[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventJavascriptTargetLocatorsToTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator: cdktf.listMapper(browserMonitorScriptEventsEventJavascriptTargetLocatorsLocatorToTerraform, true)(struct!.locator),
  }
}


export function browserMonitorScriptEventsEventJavascriptTargetLocatorsToHclTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventJavascriptTargetLocatorsLocatorToHclTerraform, true)(struct!.locator),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventJavascriptTargetLocatorsLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventJavascriptTargetLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventJavascriptTargetLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventJavascriptTargetLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locator.internalValue = value.locator;
    }
  }

  // locator - computed: false, optional: false, required: true
  private _locator = new BrowserMonitorScriptEventsEventJavascriptTargetLocatorsLocatorList(this, "locator", false);
  public get locator() {
    return this._locator;
  }
  public putLocator(value: BrowserMonitorScriptEventsEventJavascriptTargetLocatorsLocator[] | cdktf.IResolvable) {
    this._locator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventJavascriptTargetLocatorsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventJavascriptTargetLocators[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventJavascriptTargetLocatorsOutputReference {
    return new BrowserMonitorScriptEventsEventJavascriptTargetLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventJavascriptTarget {
  /**
  * The tab of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#window BrowserMonitor#window}
  */
  readonly window?: string;
  /**
  * locators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locators BrowserMonitor#locators}
  */
  readonly locators?: BrowserMonitorScriptEventsEventJavascriptTargetLocators[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventJavascriptTargetToTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptTargetOutputReference | BrowserMonitorScriptEventsEventJavascriptTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window: cdktf.stringToTerraform(struct!.window),
    locators: cdktf.listMapper(browserMonitorScriptEventsEventJavascriptTargetLocatorsToTerraform, true)(struct!.locators),
  }
}


export function browserMonitorScriptEventsEventJavascriptTargetToHclTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptTargetOutputReference | BrowserMonitorScriptEventsEventJavascriptTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locators: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventJavascriptTargetLocatorsToHclTerraform, true)(struct!.locators),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventJavascriptTargetLocatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventJavascriptTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventJavascriptTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._locators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locators = this._locators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventJavascriptTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._window = undefined;
      this._locators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._window = value.window;
      this._locators.internalValue = value.locators;
    }
  }

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new BrowserMonitorScriptEventsEventJavascriptTargetLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: BrowserMonitorScriptEventsEventJavascriptTargetLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocator {
  /**
  * Defines where to look for an element. `css` (CSS Selector) or `dom` (Javascript code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * The name of the element to be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocatorToTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocatorToHclTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocator | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocatorList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocatorOutputReference {
    return new BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocators {
  /**
  * locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locator BrowserMonitor#locator}
  */
  readonly locator: BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsToTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator: cdktf.listMapper(browserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocatorToTerraform, true)(struct!.locator),
  }
}


export function browserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsToHclTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocatorToHclTerraform, true)(struct!.locator),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locator.internalValue = value.locator;
    }
  }

  // locator - computed: false, optional: false, required: true
  private _locator = new BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocatorList(this, "locator", false);
  public get locator() {
    return this._locator;
  }
  public putLocator(value: BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable) {
    this._locator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocators[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsOutputReference {
    return new BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventJavascriptWaitValidationTarget {
  /**
  * The tab of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#window BrowserMonitor#window}
  */
  readonly window?: string;
  /**
  * locators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locators BrowserMonitor#locators}
  */
  readonly locators?: BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocators[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventJavascriptWaitValidationTargetToTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetOutputReference | BrowserMonitorScriptEventsEventJavascriptWaitValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window: cdktf.stringToTerraform(struct!.window),
    locators: cdktf.listMapper(browserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsToTerraform, true)(struct!.locators),
  }
}


export function browserMonitorScriptEventsEventJavascriptWaitValidationTargetToHclTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetOutputReference | BrowserMonitorScriptEventsEventJavascriptWaitValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locators: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsToHclTerraform, true)(struct!.locators),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventJavascriptWaitValidationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._locators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locators = this._locators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventJavascriptWaitValidationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._window = undefined;
      this._locators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._window = value.window;
      this._locators.internalValue = value.locators;
    }
  }

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventJavascriptWaitValidation {
  /**
  * The condition of the validation. `false` means the validation succeeds if the specified content/element is found. `true` means the validation fails if the specified content/element is found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#fail_if_found BrowserMonitor#fail_if_found}
  */
  readonly failIfFound?: boolean | cdktf.IResolvable;
  /**
  * The content to look for on the page.
  * Regular expressions are allowed. In that case set `isRegex` as `true`. Required for `content_match`, optional for `element_match`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#match BrowserMonitor#match}
  */
  readonly match?: string;
  /**
  * Defines whether `match` is plain text (`false`) or a regular expression (`true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#regex BrowserMonitor#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * The goal of the validation. `content_match` (check page for the specific content. Not allowed for validation inside of wait condition), `element_match` (check page for the specific element).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#target BrowserMonitor#target}
  */
  readonly target?: BrowserMonitorScriptEventsEventJavascriptWaitValidationTarget;
}

export function browserMonitorScriptEventsEventJavascriptWaitValidationToTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptWaitValidationOutputReference | BrowserMonitorScriptEventsEventJavascriptWaitValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_if_found: cdktf.booleanToTerraform(struct!.failIfFound),
    match: cdktf.stringToTerraform(struct!.match),
    regex: cdktf.booleanToTerraform(struct!.regex),
    type: cdktf.stringToTerraform(struct!.type),
    target: browserMonitorScriptEventsEventJavascriptWaitValidationTargetToTerraform(struct!.target),
  }
}


export function browserMonitorScriptEventsEventJavascriptWaitValidationToHclTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptWaitValidationOutputReference | BrowserMonitorScriptEventsEventJavascriptWaitValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_if_found: {
      value: cdktf.booleanToHclTerraform(struct!.failIfFound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: browserMonitorScriptEventsEventJavascriptWaitValidationTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventJavascriptWaitValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventJavascriptWaitValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failIfFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfFound = this._failIfFound;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventJavascriptWaitValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failIfFound = undefined;
      this._match = undefined;
      this._regex = undefined;
      this._type = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failIfFound = value.failIfFound;
      this._match = value.match;
      this._regex = value.regex;
      this._type = value.type;
      this._target.internalValue = value.target;
    }
  }

  // fail_if_found - computed: false, optional: true, required: false
  private _failIfFound?: boolean | cdktf.IResolvable; 
  public get failIfFound() {
    return this.getBooleanAttribute('fail_if_found');
  }
  public set failIfFound(value: boolean | cdktf.IResolvable) {
    this._failIfFound = value;
  }
  public resetFailIfFound() {
    this._failIfFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfFoundInput() {
    return this._failIfFound;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

  // target - computed: false, optional: true, required: false
  private _target = new BrowserMonitorScriptEventsEventJavascriptWaitValidationTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BrowserMonitorScriptEventsEventJavascriptWaitValidationTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventJavascriptWait {
  /**
  * The time to wait, in millisencods. The maximum allowed value is `60000`. Required for the type `time`, not applicable otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#milliseconds BrowserMonitor#milliseconds}
  */
  readonly milliseconds?: number;
  /**
  * he maximum amount of time to wait for a certain element to appear, in milliseconds—if exceeded, the action is marked as failed.
  * The maximum allowed value is 60000. Required for the type `validation`, not applicable otherwise..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#timeout BrowserMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * The time to wait before the next event is triggered. Possible values are `page_complete` (wait for the page to load completely), `network` (wait for background network activity to complete), `next_action` (wait for the next action), `time` (wait for a specified periodof time) and `validation` (wait for a specific element to appear)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#wait_for BrowserMonitor#wait_for}
  */
  readonly waitFor: string;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#validation BrowserMonitor#validation}
  */
  readonly validation?: BrowserMonitorScriptEventsEventJavascriptWaitValidation;
}

export function browserMonitorScriptEventsEventJavascriptWaitToTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptWaitOutputReference | BrowserMonitorScriptEventsEventJavascriptWait): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    milliseconds: cdktf.numberToTerraform(struct!.milliseconds),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    wait_for: cdktf.stringToTerraform(struct!.waitFor),
    validation: browserMonitorScriptEventsEventJavascriptWaitValidationToTerraform(struct!.validation),
  }
}


export function browserMonitorScriptEventsEventJavascriptWaitToHclTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptWaitOutputReference | BrowserMonitorScriptEventsEventJavascriptWait): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.milliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_for: {
      value: cdktf.stringToHclTerraform(struct!.waitFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: browserMonitorScriptEventsEventJavascriptWaitValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventJavascriptWaitValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventJavascriptWaitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventJavascriptWait | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._milliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.milliseconds = this._milliseconds;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._waitFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitFor = this._waitFor;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventJavascriptWait | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._milliseconds = undefined;
      this._timeout = undefined;
      this._waitFor = undefined;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._milliseconds = value.milliseconds;
      this._timeout = value.timeout;
      this._waitFor = value.waitFor;
      this._validation.internalValue = value.validation;
    }
  }

  // milliseconds - computed: false, optional: true, required: false
  private _milliseconds?: number; 
  public get milliseconds() {
    return this.getNumberAttribute('milliseconds');
  }
  public set milliseconds(value: number) {
    this._milliseconds = value;
  }
  public resetMilliseconds() {
    this._milliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get millisecondsInput() {
    return this._milliseconds;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // wait_for - computed: false, optional: false, required: true
  private _waitFor?: string; 
  public get waitFor() {
    return this.getStringAttribute('wait_for');
  }
  public set waitFor(value: string) {
    this._waitFor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInput() {
    return this._waitFor;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new BrowserMonitorScriptEventsEventJavascriptWaitValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BrowserMonitorScriptEventsEventJavascriptWaitValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventJavascript {
  /**
  * The JavaScript code to be executed in this event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#code BrowserMonitor#code}
  */
  readonly code: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#target BrowserMonitor#target}
  */
  readonly target?: BrowserMonitorScriptEventsEventJavascriptTarget;
  /**
  * wait block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#wait BrowserMonitor#wait}
  */
  readonly wait?: BrowserMonitorScriptEventsEventJavascriptWait;
}

export function browserMonitorScriptEventsEventJavascriptToTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptOutputReference | BrowserMonitorScriptEventsEventJavascript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    target: browserMonitorScriptEventsEventJavascriptTargetToTerraform(struct!.target),
    wait: browserMonitorScriptEventsEventJavascriptWaitToTerraform(struct!.wait),
  }
}


export function browserMonitorScriptEventsEventJavascriptToHclTerraform(struct?: BrowserMonitorScriptEventsEventJavascriptOutputReference | BrowserMonitorScriptEventsEventJavascript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: browserMonitorScriptEventsEventJavascriptTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventJavascriptTargetList",
    },
    wait: {
      value: browserMonitorScriptEventsEventJavascriptWaitToHclTerraform(struct!.wait),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventJavascriptWaitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventJavascriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventJavascript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._wait?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventJavascript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._code = undefined;
      this._target.internalValue = undefined;
      this._wait.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._code = value.code;
      this._target.internalValue = value.target;
      this._wait.internalValue = value.wait;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // target - computed: false, optional: true, required: false
  private _target = new BrowserMonitorScriptEventsEventJavascriptTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BrowserMonitorScriptEventsEventJavascriptTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // wait - computed: false, optional: true, required: false
  private _wait = new BrowserMonitorScriptEventsEventJavascriptWaitOutputReference(this, "wait");
  public get wait() {
    return this._wait;
  }
  public putWait(value: BrowserMonitorScriptEventsEventJavascriptWait) {
    this._wait.internalValue = value;
  }
  public resetWait() {
    this._wait.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventKeystrokesCredential {
  /**
  * Either `username` or `password`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#field BrowserMonitor#field}
  */
  readonly field: string;
  /**
  * The ID of the credential within the Credentials Vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#vault_id BrowserMonitor#vault_id}
  */
  readonly vaultId: string;
}

export function browserMonitorScriptEventsEventKeystrokesCredentialToTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesCredentialOutputReference | BrowserMonitorScriptEventsEventKeystrokesCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
  }
}


export function browserMonitorScriptEventsEventKeystrokesCredentialToHclTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesCredentialOutputReference | BrowserMonitorScriptEventsEventKeystrokesCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventKeystrokesCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventKeystrokesCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventKeystrokesCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field = undefined;
      this._vaultId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field = value.field;
      this._vaultId = value.vaultId;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }
}
export interface BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsLocator {
  /**
  * Defines where to look for an element. `css` (CSS Selector) or `dom` (Javascript code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * The name of the element to be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventKeystrokesTargetLocatorsLocatorToTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventKeystrokesTargetLocatorsLocatorToHclTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsLocator | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsLocatorList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsLocator[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsLocatorOutputReference {
    return new BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventKeystrokesTargetLocators {
  /**
  * locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locator BrowserMonitor#locator}
  */
  readonly locator: BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsLocator[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventKeystrokesTargetLocatorsToTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator: cdktf.listMapper(browserMonitorScriptEventsEventKeystrokesTargetLocatorsLocatorToTerraform, true)(struct!.locator),
  }
}


export function browserMonitorScriptEventsEventKeystrokesTargetLocatorsToHclTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventKeystrokesTargetLocatorsLocatorToHclTerraform, true)(struct!.locator),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventKeystrokesTargetLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventKeystrokesTargetLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locator.internalValue = value.locator;
    }
  }

  // locator - computed: false, optional: false, required: true
  private _locator = new BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsLocatorList(this, "locator", false);
  public get locator() {
    return this._locator;
  }
  public putLocator(value: BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsLocator[] | cdktf.IResolvable) {
    this._locator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventKeystrokesTargetLocators[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsOutputReference {
    return new BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventKeystrokesTarget {
  /**
  * The tab of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#window BrowserMonitor#window}
  */
  readonly window?: string;
  /**
  * locators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locators BrowserMonitor#locators}
  */
  readonly locators?: BrowserMonitorScriptEventsEventKeystrokesTargetLocators[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventKeystrokesTargetToTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesTargetOutputReference | BrowserMonitorScriptEventsEventKeystrokesTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window: cdktf.stringToTerraform(struct!.window),
    locators: cdktf.listMapper(browserMonitorScriptEventsEventKeystrokesTargetLocatorsToTerraform, true)(struct!.locators),
  }
}


export function browserMonitorScriptEventsEventKeystrokesTargetToHclTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesTargetOutputReference | BrowserMonitorScriptEventsEventKeystrokesTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locators: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventKeystrokesTargetLocatorsToHclTerraform, true)(struct!.locators),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventKeystrokesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventKeystrokesTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._locators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locators = this._locators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventKeystrokesTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._window = undefined;
      this._locators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._window = value.window;
      this._locators.internalValue = value.locators;
    }
  }

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new BrowserMonitorScriptEventsEventKeystrokesTargetLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: BrowserMonitorScriptEventsEventKeystrokesTargetLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocator {
  /**
  * Defines where to look for an element. `css` (CSS Selector) or `dom` (Javascript code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * The name of the element to be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocatorToTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocatorToHclTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocator | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocatorList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocator[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocatorOutputReference {
    return new BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocators {
  /**
  * locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locator BrowserMonitor#locator}
  */
  readonly locator: BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocator[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsToTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator: cdktf.listMapper(browserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocatorToTerraform, true)(struct!.locator),
  }
}


export function browserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsToHclTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocatorToHclTerraform, true)(struct!.locator),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locator.internalValue = value.locator;
    }
  }

  // locator - computed: false, optional: false, required: true
  private _locator = new BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocatorList(this, "locator", false);
  public get locator() {
    return this._locator;
  }
  public putLocator(value: BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsLocator[] | cdktf.IResolvable) {
    this._locator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocators[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsOutputReference {
    return new BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventKeystrokesValidateValidationTarget {
  /**
  * The tab of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#window BrowserMonitor#window}
  */
  readonly window?: string;
  /**
  * locators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locators BrowserMonitor#locators}
  */
  readonly locators?: BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocators[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventKeystrokesValidateValidationTargetToTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetOutputReference | BrowserMonitorScriptEventsEventKeystrokesValidateValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window: cdktf.stringToTerraform(struct!.window),
    locators: cdktf.listMapper(browserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsToTerraform, true)(struct!.locators),
  }
}


export function browserMonitorScriptEventsEventKeystrokesValidateValidationTargetToHclTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetOutputReference | BrowserMonitorScriptEventsEventKeystrokesValidateValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locators: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsToHclTerraform, true)(struct!.locators),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventKeystrokesValidateValidationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._locators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locators = this._locators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventKeystrokesValidateValidationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._window = undefined;
      this._locators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._window = value.window;
      this._locators.internalValue = value.locators;
    }
  }

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventKeystrokesValidateValidation {
  /**
  * The condition of the validation. `false` means the validation succeeds if the specified content/element is found. `true` means the validation fails if the specified content/element is found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#fail_if_found BrowserMonitor#fail_if_found}
  */
  readonly failIfFound?: boolean | cdktf.IResolvable;
  /**
  * The content to look for on the page.
  * Regular expressions are allowed. In that case set `isRegex` as `true`. Required for `content_match`, optional for `element_match`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#match BrowserMonitor#match}
  */
  readonly match?: string;
  /**
  * Defines whether `match` is plain text (`false`) or a regular expression (`true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#regex BrowserMonitor#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * The goal of the validation. `content_match` (check page for the specific content. Not allowed for validation inside of wait condition), `element_match` (check page for the specific element).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#target BrowserMonitor#target}
  */
  readonly target?: BrowserMonitorScriptEventsEventKeystrokesValidateValidationTarget;
}

export function browserMonitorScriptEventsEventKeystrokesValidateValidationToTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesValidateValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_if_found: cdktf.booleanToTerraform(struct!.failIfFound),
    match: cdktf.stringToTerraform(struct!.match),
    regex: cdktf.booleanToTerraform(struct!.regex),
    type: cdktf.stringToTerraform(struct!.type),
    target: browserMonitorScriptEventsEventKeystrokesValidateValidationTargetToTerraform(struct!.target),
  }
}


export function browserMonitorScriptEventsEventKeystrokesValidateValidationToHclTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesValidateValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_if_found: {
      value: cdktf.booleanToHclTerraform(struct!.failIfFound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: browserMonitorScriptEventsEventKeystrokesValidateValidationTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventKeystrokesValidateValidationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventKeystrokesValidateValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failIfFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfFound = this._failIfFound;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventKeystrokesValidateValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failIfFound = undefined;
      this._match = undefined;
      this._regex = undefined;
      this._type = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failIfFound = value.failIfFound;
      this._match = value.match;
      this._regex = value.regex;
      this._type = value.type;
      this._target.internalValue = value.target;
    }
  }

  // fail_if_found - computed: false, optional: true, required: false
  private _failIfFound?: boolean | cdktf.IResolvable; 
  public get failIfFound() {
    return this.getBooleanAttribute('fail_if_found');
  }
  public set failIfFound(value: boolean | cdktf.IResolvable) {
    this._failIfFound = value;
  }
  public resetFailIfFound() {
    this._failIfFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfFoundInput() {
    return this._failIfFound;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

  // target - computed: false, optional: true, required: false
  private _target = new BrowserMonitorScriptEventsEventKeystrokesValidateValidationTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BrowserMonitorScriptEventsEventKeystrokesValidateValidationTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventKeystrokesValidateValidationList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventKeystrokesValidateValidation[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventKeystrokesValidateValidationOutputReference {
    return new BrowserMonitorScriptEventsEventKeystrokesValidateValidationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventKeystrokesValidate {
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#validation BrowserMonitor#validation}
  */
  readonly validation: BrowserMonitorScriptEventsEventKeystrokesValidateValidation[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventKeystrokesValidateToTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesValidateOutputReference | BrowserMonitorScriptEventsEventKeystrokesValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    validation: cdktf.listMapper(browserMonitorScriptEventsEventKeystrokesValidateValidationToTerraform, true)(struct!.validation),
  }
}


export function browserMonitorScriptEventsEventKeystrokesValidateToHclTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesValidateOutputReference | BrowserMonitorScriptEventsEventKeystrokesValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    validation: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventKeystrokesValidateValidationToHclTerraform, true)(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventKeystrokesValidateValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventKeystrokesValidateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventKeystrokesValidate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventKeystrokesValidate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._validation.internalValue = value.validation;
    }
  }

  // validation - computed: false, optional: false, required: true
  private _validation = new BrowserMonitorScriptEventsEventKeystrokesValidateValidationList(this, "validation", false);
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BrowserMonitorScriptEventsEventKeystrokesValidateValidation[] | cdktf.IResolvable) {
    this._validation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocator {
  /**
  * Defines where to look for an element. `css` (CSS Selector) or `dom` (Javascript code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * The name of the element to be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocatorToTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocatorToHclTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocator | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocatorList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocatorOutputReference {
    return new BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocators {
  /**
  * locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locator BrowserMonitor#locator}
  */
  readonly locator: BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsToTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator: cdktf.listMapper(browserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocatorToTerraform, true)(struct!.locator),
  }
}


export function browserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsToHclTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocatorToHclTerraform, true)(struct!.locator),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locator.internalValue = value.locator;
    }
  }

  // locator - computed: false, optional: false, required: true
  private _locator = new BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocatorList(this, "locator", false);
  public get locator() {
    return this._locator;
  }
  public putLocator(value: BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable) {
    this._locator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocators[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsOutputReference {
    return new BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventKeystrokesWaitValidationTarget {
  /**
  * The tab of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#window BrowserMonitor#window}
  */
  readonly window?: string;
  /**
  * locators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locators BrowserMonitor#locators}
  */
  readonly locators?: BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocators[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventKeystrokesWaitValidationTargetToTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetOutputReference | BrowserMonitorScriptEventsEventKeystrokesWaitValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window: cdktf.stringToTerraform(struct!.window),
    locators: cdktf.listMapper(browserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsToTerraform, true)(struct!.locators),
  }
}


export function browserMonitorScriptEventsEventKeystrokesWaitValidationTargetToHclTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetOutputReference | BrowserMonitorScriptEventsEventKeystrokesWaitValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locators: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsToHclTerraform, true)(struct!.locators),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventKeystrokesWaitValidationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._locators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locators = this._locators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventKeystrokesWaitValidationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._window = undefined;
      this._locators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._window = value.window;
      this._locators.internalValue = value.locators;
    }
  }

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventKeystrokesWaitValidation {
  /**
  * The condition of the validation. `false` means the validation succeeds if the specified content/element is found. `true` means the validation fails if the specified content/element is found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#fail_if_found BrowserMonitor#fail_if_found}
  */
  readonly failIfFound?: boolean | cdktf.IResolvable;
  /**
  * The content to look for on the page.
  * Regular expressions are allowed. In that case set `isRegex` as `true`. Required for `content_match`, optional for `element_match`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#match BrowserMonitor#match}
  */
  readonly match?: string;
  /**
  * Defines whether `match` is plain text (`false`) or a regular expression (`true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#regex BrowserMonitor#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * The goal of the validation. `content_match` (check page for the specific content. Not allowed for validation inside of wait condition), `element_match` (check page for the specific element).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#target BrowserMonitor#target}
  */
  readonly target?: BrowserMonitorScriptEventsEventKeystrokesWaitValidationTarget;
}

export function browserMonitorScriptEventsEventKeystrokesWaitValidationToTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesWaitValidationOutputReference | BrowserMonitorScriptEventsEventKeystrokesWaitValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_if_found: cdktf.booleanToTerraform(struct!.failIfFound),
    match: cdktf.stringToTerraform(struct!.match),
    regex: cdktf.booleanToTerraform(struct!.regex),
    type: cdktf.stringToTerraform(struct!.type),
    target: browserMonitorScriptEventsEventKeystrokesWaitValidationTargetToTerraform(struct!.target),
  }
}


export function browserMonitorScriptEventsEventKeystrokesWaitValidationToHclTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesWaitValidationOutputReference | BrowserMonitorScriptEventsEventKeystrokesWaitValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_if_found: {
      value: cdktf.booleanToHclTerraform(struct!.failIfFound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: browserMonitorScriptEventsEventKeystrokesWaitValidationTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventKeystrokesWaitValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventKeystrokesWaitValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failIfFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfFound = this._failIfFound;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventKeystrokesWaitValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failIfFound = undefined;
      this._match = undefined;
      this._regex = undefined;
      this._type = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failIfFound = value.failIfFound;
      this._match = value.match;
      this._regex = value.regex;
      this._type = value.type;
      this._target.internalValue = value.target;
    }
  }

  // fail_if_found - computed: false, optional: true, required: false
  private _failIfFound?: boolean | cdktf.IResolvable; 
  public get failIfFound() {
    return this.getBooleanAttribute('fail_if_found');
  }
  public set failIfFound(value: boolean | cdktf.IResolvable) {
    this._failIfFound = value;
  }
  public resetFailIfFound() {
    this._failIfFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfFoundInput() {
    return this._failIfFound;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

  // target - computed: false, optional: true, required: false
  private _target = new BrowserMonitorScriptEventsEventKeystrokesWaitValidationTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BrowserMonitorScriptEventsEventKeystrokesWaitValidationTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventKeystrokesWait {
  /**
  * The time to wait, in millisencods. The maximum allowed value is `60000`. Required for the type `time`, not applicable otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#milliseconds BrowserMonitor#milliseconds}
  */
  readonly milliseconds?: number;
  /**
  * he maximum amount of time to wait for a certain element to appear, in milliseconds—if exceeded, the action is marked as failed.
  * The maximum allowed value is 60000. Required for the type `validation`, not applicable otherwise..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#timeout BrowserMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * The time to wait before the next event is triggered. Possible values are `page_complete` (wait for the page to load completely), `network` (wait for background network activity to complete), `next_action` (wait for the next action), `time` (wait for a specified periodof time) and `validation` (wait for a specific element to appear)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#wait_for BrowserMonitor#wait_for}
  */
  readonly waitFor: string;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#validation BrowserMonitor#validation}
  */
  readonly validation?: BrowserMonitorScriptEventsEventKeystrokesWaitValidation;
}

export function browserMonitorScriptEventsEventKeystrokesWaitToTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesWaitOutputReference | BrowserMonitorScriptEventsEventKeystrokesWait): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    milliseconds: cdktf.numberToTerraform(struct!.milliseconds),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    wait_for: cdktf.stringToTerraform(struct!.waitFor),
    validation: browserMonitorScriptEventsEventKeystrokesWaitValidationToTerraform(struct!.validation),
  }
}


export function browserMonitorScriptEventsEventKeystrokesWaitToHclTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesWaitOutputReference | BrowserMonitorScriptEventsEventKeystrokesWait): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.milliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_for: {
      value: cdktf.stringToHclTerraform(struct!.waitFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: browserMonitorScriptEventsEventKeystrokesWaitValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventKeystrokesWaitValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventKeystrokesWaitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventKeystrokesWait | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._milliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.milliseconds = this._milliseconds;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._waitFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitFor = this._waitFor;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventKeystrokesWait | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._milliseconds = undefined;
      this._timeout = undefined;
      this._waitFor = undefined;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._milliseconds = value.milliseconds;
      this._timeout = value.timeout;
      this._waitFor = value.waitFor;
      this._validation.internalValue = value.validation;
    }
  }

  // milliseconds - computed: false, optional: true, required: false
  private _milliseconds?: number; 
  public get milliseconds() {
    return this.getNumberAttribute('milliseconds');
  }
  public set milliseconds(value: number) {
    this._milliseconds = value;
  }
  public resetMilliseconds() {
    this._milliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get millisecondsInput() {
    return this._milliseconds;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // wait_for - computed: false, optional: false, required: true
  private _waitFor?: string; 
  public get waitFor() {
    return this.getStringAttribute('wait_for');
  }
  public set waitFor(value: string) {
    this._waitFor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInput() {
    return this._waitFor;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new BrowserMonitorScriptEventsEventKeystrokesWaitValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BrowserMonitorScriptEventsEventKeystrokesWaitValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventKeystrokes {
  /**
  * Indicates whether the `textValue` is encrypted (`true`) or not (`false`). Must not be specified if `credentials` from the vault are being used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#masked BrowserMonitor#masked}
  */
  readonly masked?: boolean | cdktf.IResolvable;
  /**
  * Defines whether to blur the text field when it loses focus.
  * Set to `true` to trigger the blur the `textValue`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#simulate_blur_event BrowserMonitor#simulate_blur_event}
  */
  readonly simulateBlurEvent?: boolean | cdktf.IResolvable;
  /**
  * Simulates pressing the 'Return' key after simulating other keystrokes. For example, to submit a form or trigger a login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#simulate_return_key BrowserMonitor#simulate_return_key}
  */
  readonly simulateReturnKey?: boolean | cdktf.IResolvable;
  /**
  * The text to enter. Must not be specified if `credentials` from the vault are being used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#text BrowserMonitor#text}
  */
  readonly text?: string;
  /**
  * credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#credential BrowserMonitor#credential}
  */
  readonly credential?: BrowserMonitorScriptEventsEventKeystrokesCredential;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#target BrowserMonitor#target}
  */
  readonly target?: BrowserMonitorScriptEventsEventKeystrokesTarget;
  /**
  * validate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#validate BrowserMonitor#validate}
  */
  readonly validate?: BrowserMonitorScriptEventsEventKeystrokesValidate;
  /**
  * wait block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#wait BrowserMonitor#wait}
  */
  readonly wait?: BrowserMonitorScriptEventsEventKeystrokesWait;
}

export function browserMonitorScriptEventsEventKeystrokesToTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesOutputReference | BrowserMonitorScriptEventsEventKeystrokes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    masked: cdktf.booleanToTerraform(struct!.masked),
    simulate_blur_event: cdktf.booleanToTerraform(struct!.simulateBlurEvent),
    simulate_return_key: cdktf.booleanToTerraform(struct!.simulateReturnKey),
    text: cdktf.stringToTerraform(struct!.text),
    credential: browserMonitorScriptEventsEventKeystrokesCredentialToTerraform(struct!.credential),
    target: browserMonitorScriptEventsEventKeystrokesTargetToTerraform(struct!.target),
    validate: browserMonitorScriptEventsEventKeystrokesValidateToTerraform(struct!.validate),
    wait: browserMonitorScriptEventsEventKeystrokesWaitToTerraform(struct!.wait),
  }
}


export function browserMonitorScriptEventsEventKeystrokesToHclTerraform(struct?: BrowserMonitorScriptEventsEventKeystrokesOutputReference | BrowserMonitorScriptEventsEventKeystrokes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    masked: {
      value: cdktf.booleanToHclTerraform(struct!.masked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    simulate_blur_event: {
      value: cdktf.booleanToHclTerraform(struct!.simulateBlurEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    simulate_return_key: {
      value: cdktf.booleanToHclTerraform(struct!.simulateReturnKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential: {
      value: browserMonitorScriptEventsEventKeystrokesCredentialToHclTerraform(struct!.credential),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventKeystrokesCredentialList",
    },
    target: {
      value: browserMonitorScriptEventsEventKeystrokesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventKeystrokesTargetList",
    },
    validate: {
      value: browserMonitorScriptEventsEventKeystrokesValidateToHclTerraform(struct!.validate),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventKeystrokesValidateList",
    },
    wait: {
      value: browserMonitorScriptEventsEventKeystrokesWaitToHclTerraform(struct!.wait),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventKeystrokesWaitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventKeystrokesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventKeystrokes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masked !== undefined) {
      hasAnyValues = true;
      internalValueResult.masked = this._masked;
    }
    if (this._simulateBlurEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.simulateBlurEvent = this._simulateBlurEvent;
    }
    if (this._simulateReturnKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.simulateReturnKey = this._simulateReturnKey;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._credential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._validate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate?.internalValue;
    }
    if (this._wait?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventKeystrokes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._masked = undefined;
      this._simulateBlurEvent = undefined;
      this._simulateReturnKey = undefined;
      this._text = undefined;
      this._credential.internalValue = undefined;
      this._target.internalValue = undefined;
      this._validate.internalValue = undefined;
      this._wait.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._masked = value.masked;
      this._simulateBlurEvent = value.simulateBlurEvent;
      this._simulateReturnKey = value.simulateReturnKey;
      this._text = value.text;
      this._credential.internalValue = value.credential;
      this._target.internalValue = value.target;
      this._validate.internalValue = value.validate;
      this._wait.internalValue = value.wait;
    }
  }

  // masked - computed: false, optional: true, required: false
  private _masked?: boolean | cdktf.IResolvable; 
  public get masked() {
    return this.getBooleanAttribute('masked');
  }
  public set masked(value: boolean | cdktf.IResolvable) {
    this._masked = value;
  }
  public resetMasked() {
    this._masked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskedInput() {
    return this._masked;
  }

  // simulate_blur_event - computed: false, optional: true, required: false
  private _simulateBlurEvent?: boolean | cdktf.IResolvable; 
  public get simulateBlurEvent() {
    return this.getBooleanAttribute('simulate_blur_event');
  }
  public set simulateBlurEvent(value: boolean | cdktf.IResolvable) {
    this._simulateBlurEvent = value;
  }
  public resetSimulateBlurEvent() {
    this._simulateBlurEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simulateBlurEventInput() {
    return this._simulateBlurEvent;
  }

  // simulate_return_key - computed: false, optional: true, required: false
  private _simulateReturnKey?: boolean | cdktf.IResolvable; 
  public get simulateReturnKey() {
    return this.getBooleanAttribute('simulate_return_key');
  }
  public set simulateReturnKey(value: boolean | cdktf.IResolvable) {
    this._simulateReturnKey = value;
  }
  public resetSimulateReturnKey() {
    this._simulateReturnKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simulateReturnKeyInput() {
    return this._simulateReturnKey;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // credential - computed: false, optional: true, required: false
  private _credential = new BrowserMonitorScriptEventsEventKeystrokesCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: BrowserMonitorScriptEventsEventKeystrokesCredential) {
    this._credential.internalValue = value;
  }
  public resetCredential() {
    this._credential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new BrowserMonitorScriptEventsEventKeystrokesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BrowserMonitorScriptEventsEventKeystrokesTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // validate - computed: false, optional: true, required: false
  private _validate = new BrowserMonitorScriptEventsEventKeystrokesValidateOutputReference(this, "validate");
  public get validate() {
    return this._validate;
  }
  public putValidate(value: BrowserMonitorScriptEventsEventKeystrokesValidate) {
    this._validate.internalValue = value;
  }
  public resetValidate() {
    this._validate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate.internalValue;
  }

  // wait - computed: false, optional: true, required: false
  private _wait = new BrowserMonitorScriptEventsEventKeystrokesWaitOutputReference(this, "wait");
  public get wait() {
    return this._wait;
  }
  public putWait(value: BrowserMonitorScriptEventsEventKeystrokesWait) {
    this._wait.internalValue = value;
  }
  public resetWait() {
    this._wait.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventNavigateAuthentication {
  /**
  * List of allowed servers, optional with Kerberos authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#auth_server_allowlist BrowserMonitor#auth_server_allowlist}
  */
  readonly authServerAllowlist?: string;
  /**
  * A reference to the entry within the credential vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#creds BrowserMonitor#creds}
  */
  readonly creds: string;
  /**
  * User's domain name, required with Kerberos authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#domain BrowserMonitor#domain}
  */
  readonly domain?: string;
  /**
  * The type of authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
}

export function browserMonitorScriptEventsEventNavigateAuthenticationToTerraform(struct?: BrowserMonitorScriptEventsEventNavigateAuthenticationOutputReference | BrowserMonitorScriptEventsEventNavigateAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_server_allowlist: cdktf.stringToTerraform(struct!.authServerAllowlist),
    creds: cdktf.stringToTerraform(struct!.creds),
    domain: cdktf.stringToTerraform(struct!.domain),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function browserMonitorScriptEventsEventNavigateAuthenticationToHclTerraform(struct?: BrowserMonitorScriptEventsEventNavigateAuthenticationOutputReference | BrowserMonitorScriptEventsEventNavigateAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_server_allowlist: {
      value: cdktf.stringToHclTerraform(struct!.authServerAllowlist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    creds: {
      value: cdktf.stringToHclTerraform(struct!.creds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class BrowserMonitorScriptEventsEventNavigateAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventNavigateAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authServerAllowlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.authServerAllowlist = this._authServerAllowlist;
    }
    if (this._creds !== undefined) {
      hasAnyValues = true;
      internalValueResult.creds = this._creds;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventNavigateAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authServerAllowlist = undefined;
      this._creds = undefined;
      this._domain = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authServerAllowlist = value.authServerAllowlist;
      this._creds = value.creds;
      this._domain = value.domain;
      this._type = value.type;
    }
  }

  // auth_server_allowlist - computed: false, optional: true, required: false
  private _authServerAllowlist?: string; 
  public get authServerAllowlist() {
    return this.getStringAttribute('auth_server_allowlist');
  }
  public set authServerAllowlist(value: string) {
    this._authServerAllowlist = value;
  }
  public resetAuthServerAllowlist() {
    this._authServerAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServerAllowlistInput() {
    return this._authServerAllowlist;
  }

  // creds - computed: false, optional: false, required: true
  private _creds?: string; 
  public get creds() {
    return this.getStringAttribute('creds');
  }
  public set creds(value: string) {
    this._creds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credsInput() {
    return this._creds;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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
export interface BrowserMonitorScriptEventsEventNavigateTargetLocatorsLocator {
  /**
  * Defines where to look for an element. `css` (CSS Selector) or `dom` (Javascript code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * The name of the element to be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventNavigateTargetLocatorsLocatorToTerraform(struct?: BrowserMonitorScriptEventsEventNavigateTargetLocatorsLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventNavigateTargetLocatorsLocatorToHclTerraform(struct?: BrowserMonitorScriptEventsEventNavigateTargetLocatorsLocator | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptEventsEventNavigateTargetLocatorsLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventNavigateTargetLocatorsLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventNavigateTargetLocatorsLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class BrowserMonitorScriptEventsEventNavigateTargetLocatorsLocatorList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventNavigateTargetLocatorsLocator[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventNavigateTargetLocatorsLocatorOutputReference {
    return new BrowserMonitorScriptEventsEventNavigateTargetLocatorsLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventNavigateTargetLocators {
  /**
  * locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locator BrowserMonitor#locator}
  */
  readonly locator: BrowserMonitorScriptEventsEventNavigateTargetLocatorsLocator[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventNavigateTargetLocatorsToTerraform(struct?: BrowserMonitorScriptEventsEventNavigateTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator: cdktf.listMapper(browserMonitorScriptEventsEventNavigateTargetLocatorsLocatorToTerraform, true)(struct!.locator),
  }
}


export function browserMonitorScriptEventsEventNavigateTargetLocatorsToHclTerraform(struct?: BrowserMonitorScriptEventsEventNavigateTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventNavigateTargetLocatorsLocatorToHclTerraform, true)(struct!.locator),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventNavigateTargetLocatorsLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventNavigateTargetLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventNavigateTargetLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventNavigateTargetLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locator.internalValue = value.locator;
    }
  }

  // locator - computed: false, optional: false, required: true
  private _locator = new BrowserMonitorScriptEventsEventNavigateTargetLocatorsLocatorList(this, "locator", false);
  public get locator() {
    return this._locator;
  }
  public putLocator(value: BrowserMonitorScriptEventsEventNavigateTargetLocatorsLocator[] | cdktf.IResolvable) {
    this._locator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventNavigateTargetLocatorsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventNavigateTargetLocators[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventNavigateTargetLocatorsOutputReference {
    return new BrowserMonitorScriptEventsEventNavigateTargetLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventNavigateTarget {
  /**
  * The tab of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#window BrowserMonitor#window}
  */
  readonly window?: string;
  /**
  * locators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locators BrowserMonitor#locators}
  */
  readonly locators?: BrowserMonitorScriptEventsEventNavigateTargetLocators[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventNavigateTargetToTerraform(struct?: BrowserMonitorScriptEventsEventNavigateTargetOutputReference | BrowserMonitorScriptEventsEventNavigateTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window: cdktf.stringToTerraform(struct!.window),
    locators: cdktf.listMapper(browserMonitorScriptEventsEventNavigateTargetLocatorsToTerraform, true)(struct!.locators),
  }
}


export function browserMonitorScriptEventsEventNavigateTargetToHclTerraform(struct?: BrowserMonitorScriptEventsEventNavigateTargetOutputReference | BrowserMonitorScriptEventsEventNavigateTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locators: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventNavigateTargetLocatorsToHclTerraform, true)(struct!.locators),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventNavigateTargetLocatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventNavigateTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventNavigateTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._locators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locators = this._locators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventNavigateTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._window = undefined;
      this._locators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._window = value.window;
      this._locators.internalValue = value.locators;
    }
  }

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new BrowserMonitorScriptEventsEventNavigateTargetLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: BrowserMonitorScriptEventsEventNavigateTargetLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocator {
  /**
  * Defines where to look for an element. `css` (CSS Selector) or `dom` (Javascript code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * The name of the element to be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocatorToTerraform(struct?: BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocatorToHclTerraform(struct?: BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocator | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocatorList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocator[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocatorOutputReference {
    return new BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocators {
  /**
  * locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locator BrowserMonitor#locator}
  */
  readonly locator: BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocator[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsToTerraform(struct?: BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator: cdktf.listMapper(browserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocatorToTerraform, true)(struct!.locator),
  }
}


export function browserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsToHclTerraform(struct?: BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocatorToHclTerraform, true)(struct!.locator),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locator.internalValue = value.locator;
    }
  }

  // locator - computed: false, optional: false, required: true
  private _locator = new BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocatorList(this, "locator", false);
  public get locator() {
    return this._locator;
  }
  public putLocator(value: BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsLocator[] | cdktf.IResolvable) {
    this._locator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocators[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsOutputReference {
    return new BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventNavigateValidateValidationTarget {
  /**
  * The tab of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#window BrowserMonitor#window}
  */
  readonly window?: string;
  /**
  * locators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locators BrowserMonitor#locators}
  */
  readonly locators?: BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocators[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventNavigateValidateValidationTargetToTerraform(struct?: BrowserMonitorScriptEventsEventNavigateValidateValidationTargetOutputReference | BrowserMonitorScriptEventsEventNavigateValidateValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window: cdktf.stringToTerraform(struct!.window),
    locators: cdktf.listMapper(browserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsToTerraform, true)(struct!.locators),
  }
}


export function browserMonitorScriptEventsEventNavigateValidateValidationTargetToHclTerraform(struct?: BrowserMonitorScriptEventsEventNavigateValidateValidationTargetOutputReference | BrowserMonitorScriptEventsEventNavigateValidateValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locators: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsToHclTerraform, true)(struct!.locators),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventNavigateValidateValidationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventNavigateValidateValidationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._locators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locators = this._locators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventNavigateValidateValidationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._window = undefined;
      this._locators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._window = value.window;
      this._locators.internalValue = value.locators;
    }
  }

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: BrowserMonitorScriptEventsEventNavigateValidateValidationTargetLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventNavigateValidateValidation {
  /**
  * The condition of the validation. `false` means the validation succeeds if the specified content/element is found. `true` means the validation fails if the specified content/element is found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#fail_if_found BrowserMonitor#fail_if_found}
  */
  readonly failIfFound?: boolean | cdktf.IResolvable;
  /**
  * The content to look for on the page.
  * Regular expressions are allowed. In that case set `isRegex` as `true`. Required for `content_match`, optional for `element_match`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#match BrowserMonitor#match}
  */
  readonly match?: string;
  /**
  * Defines whether `match` is plain text (`false`) or a regular expression (`true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#regex BrowserMonitor#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * The goal of the validation. `content_match` (check page for the specific content. Not allowed for validation inside of wait condition), `element_match` (check page for the specific element).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#target BrowserMonitor#target}
  */
  readonly target?: BrowserMonitorScriptEventsEventNavigateValidateValidationTarget;
}

export function browserMonitorScriptEventsEventNavigateValidateValidationToTerraform(struct?: BrowserMonitorScriptEventsEventNavigateValidateValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_if_found: cdktf.booleanToTerraform(struct!.failIfFound),
    match: cdktf.stringToTerraform(struct!.match),
    regex: cdktf.booleanToTerraform(struct!.regex),
    type: cdktf.stringToTerraform(struct!.type),
    target: browserMonitorScriptEventsEventNavigateValidateValidationTargetToTerraform(struct!.target),
  }
}


export function browserMonitorScriptEventsEventNavigateValidateValidationToHclTerraform(struct?: BrowserMonitorScriptEventsEventNavigateValidateValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_if_found: {
      value: cdktf.booleanToHclTerraform(struct!.failIfFound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: browserMonitorScriptEventsEventNavigateValidateValidationTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventNavigateValidateValidationTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventNavigateValidateValidationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventNavigateValidateValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failIfFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfFound = this._failIfFound;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventNavigateValidateValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failIfFound = undefined;
      this._match = undefined;
      this._regex = undefined;
      this._type = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failIfFound = value.failIfFound;
      this._match = value.match;
      this._regex = value.regex;
      this._type = value.type;
      this._target.internalValue = value.target;
    }
  }

  // fail_if_found - computed: false, optional: true, required: false
  private _failIfFound?: boolean | cdktf.IResolvable; 
  public get failIfFound() {
    return this.getBooleanAttribute('fail_if_found');
  }
  public set failIfFound(value: boolean | cdktf.IResolvable) {
    this._failIfFound = value;
  }
  public resetFailIfFound() {
    this._failIfFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfFoundInput() {
    return this._failIfFound;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

  // target - computed: false, optional: true, required: false
  private _target = new BrowserMonitorScriptEventsEventNavigateValidateValidationTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BrowserMonitorScriptEventsEventNavigateValidateValidationTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventNavigateValidateValidationList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventNavigateValidateValidation[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventNavigateValidateValidationOutputReference {
    return new BrowserMonitorScriptEventsEventNavigateValidateValidationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventNavigateValidate {
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#validation BrowserMonitor#validation}
  */
  readonly validation: BrowserMonitorScriptEventsEventNavigateValidateValidation[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventNavigateValidateToTerraform(struct?: BrowserMonitorScriptEventsEventNavigateValidateOutputReference | BrowserMonitorScriptEventsEventNavigateValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    validation: cdktf.listMapper(browserMonitorScriptEventsEventNavigateValidateValidationToTerraform, true)(struct!.validation),
  }
}


export function browserMonitorScriptEventsEventNavigateValidateToHclTerraform(struct?: BrowserMonitorScriptEventsEventNavigateValidateOutputReference | BrowserMonitorScriptEventsEventNavigateValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    validation: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventNavigateValidateValidationToHclTerraform, true)(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventNavigateValidateValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventNavigateValidateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventNavigateValidate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventNavigateValidate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._validation.internalValue = value.validation;
    }
  }

  // validation - computed: false, optional: false, required: true
  private _validation = new BrowserMonitorScriptEventsEventNavigateValidateValidationList(this, "validation", false);
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BrowserMonitorScriptEventsEventNavigateValidateValidation[] | cdktf.IResolvable) {
    this._validation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocator {
  /**
  * Defines where to look for an element. `css` (CSS Selector) or `dom` (Javascript code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * The name of the element to be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocatorToTerraform(struct?: BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocatorToHclTerraform(struct?: BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocator | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocatorList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocatorOutputReference {
    return new BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocators {
  /**
  * locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locator BrowserMonitor#locator}
  */
  readonly locator: BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsToTerraform(struct?: BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator: cdktf.listMapper(browserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocatorToTerraform, true)(struct!.locator),
  }
}


export function browserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsToHclTerraform(struct?: BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocatorToHclTerraform, true)(struct!.locator),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locator.internalValue = value.locator;
    }
  }

  // locator - computed: false, optional: false, required: true
  private _locator = new BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocatorList(this, "locator", false);
  public get locator() {
    return this._locator;
  }
  public putLocator(value: BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable) {
    this._locator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocators[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsOutputReference {
    return new BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventNavigateWaitValidationTarget {
  /**
  * The tab of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#window BrowserMonitor#window}
  */
  readonly window?: string;
  /**
  * locators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locators BrowserMonitor#locators}
  */
  readonly locators?: BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocators[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventNavigateWaitValidationTargetToTerraform(struct?: BrowserMonitorScriptEventsEventNavigateWaitValidationTargetOutputReference | BrowserMonitorScriptEventsEventNavigateWaitValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window: cdktf.stringToTerraform(struct!.window),
    locators: cdktf.listMapper(browserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsToTerraform, true)(struct!.locators),
  }
}


export function browserMonitorScriptEventsEventNavigateWaitValidationTargetToHclTerraform(struct?: BrowserMonitorScriptEventsEventNavigateWaitValidationTargetOutputReference | BrowserMonitorScriptEventsEventNavigateWaitValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locators: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsToHclTerraform, true)(struct!.locators),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventNavigateWaitValidationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventNavigateWaitValidationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._locators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locators = this._locators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventNavigateWaitValidationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._window = undefined;
      this._locators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._window = value.window;
      this._locators.internalValue = value.locators;
    }
  }

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: BrowserMonitorScriptEventsEventNavigateWaitValidationTargetLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventNavigateWaitValidation {
  /**
  * The condition of the validation. `false` means the validation succeeds if the specified content/element is found. `true` means the validation fails if the specified content/element is found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#fail_if_found BrowserMonitor#fail_if_found}
  */
  readonly failIfFound?: boolean | cdktf.IResolvable;
  /**
  * The content to look for on the page.
  * Regular expressions are allowed. In that case set `isRegex` as `true`. Required for `content_match`, optional for `element_match`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#match BrowserMonitor#match}
  */
  readonly match?: string;
  /**
  * Defines whether `match` is plain text (`false`) or a regular expression (`true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#regex BrowserMonitor#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * The goal of the validation. `content_match` (check page for the specific content. Not allowed for validation inside of wait condition), `element_match` (check page for the specific element).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#target BrowserMonitor#target}
  */
  readonly target?: BrowserMonitorScriptEventsEventNavigateWaitValidationTarget;
}

export function browserMonitorScriptEventsEventNavigateWaitValidationToTerraform(struct?: BrowserMonitorScriptEventsEventNavigateWaitValidationOutputReference | BrowserMonitorScriptEventsEventNavigateWaitValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_if_found: cdktf.booleanToTerraform(struct!.failIfFound),
    match: cdktf.stringToTerraform(struct!.match),
    regex: cdktf.booleanToTerraform(struct!.regex),
    type: cdktf.stringToTerraform(struct!.type),
    target: browserMonitorScriptEventsEventNavigateWaitValidationTargetToTerraform(struct!.target),
  }
}


export function browserMonitorScriptEventsEventNavigateWaitValidationToHclTerraform(struct?: BrowserMonitorScriptEventsEventNavigateWaitValidationOutputReference | BrowserMonitorScriptEventsEventNavigateWaitValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_if_found: {
      value: cdktf.booleanToHclTerraform(struct!.failIfFound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: browserMonitorScriptEventsEventNavigateWaitValidationTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventNavigateWaitValidationTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventNavigateWaitValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventNavigateWaitValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failIfFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfFound = this._failIfFound;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventNavigateWaitValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failIfFound = undefined;
      this._match = undefined;
      this._regex = undefined;
      this._type = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failIfFound = value.failIfFound;
      this._match = value.match;
      this._regex = value.regex;
      this._type = value.type;
      this._target.internalValue = value.target;
    }
  }

  // fail_if_found - computed: false, optional: true, required: false
  private _failIfFound?: boolean | cdktf.IResolvable; 
  public get failIfFound() {
    return this.getBooleanAttribute('fail_if_found');
  }
  public set failIfFound(value: boolean | cdktf.IResolvable) {
    this._failIfFound = value;
  }
  public resetFailIfFound() {
    this._failIfFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfFoundInput() {
    return this._failIfFound;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

  // target - computed: false, optional: true, required: false
  private _target = new BrowserMonitorScriptEventsEventNavigateWaitValidationTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BrowserMonitorScriptEventsEventNavigateWaitValidationTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventNavigateWait {
  /**
  * The time to wait, in millisencods. The maximum allowed value is `60000`. Required for the type `time`, not applicable otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#milliseconds BrowserMonitor#milliseconds}
  */
  readonly milliseconds?: number;
  /**
  * he maximum amount of time to wait for a certain element to appear, in milliseconds—if exceeded, the action is marked as failed.
  * The maximum allowed value is 60000. Required for the type `validation`, not applicable otherwise..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#timeout BrowserMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * The time to wait before the next event is triggered. Possible values are `page_complete` (wait for the page to load completely), `network` (wait for background network activity to complete), `next_action` (wait for the next action), `time` (wait for a specified periodof time) and `validation` (wait for a specific element to appear)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#wait_for BrowserMonitor#wait_for}
  */
  readonly waitFor: string;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#validation BrowserMonitor#validation}
  */
  readonly validation?: BrowserMonitorScriptEventsEventNavigateWaitValidation;
}

export function browserMonitorScriptEventsEventNavigateWaitToTerraform(struct?: BrowserMonitorScriptEventsEventNavigateWaitOutputReference | BrowserMonitorScriptEventsEventNavigateWait): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    milliseconds: cdktf.numberToTerraform(struct!.milliseconds),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    wait_for: cdktf.stringToTerraform(struct!.waitFor),
    validation: browserMonitorScriptEventsEventNavigateWaitValidationToTerraform(struct!.validation),
  }
}


export function browserMonitorScriptEventsEventNavigateWaitToHclTerraform(struct?: BrowserMonitorScriptEventsEventNavigateWaitOutputReference | BrowserMonitorScriptEventsEventNavigateWait): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.milliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_for: {
      value: cdktf.stringToHclTerraform(struct!.waitFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: browserMonitorScriptEventsEventNavigateWaitValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventNavigateWaitValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventNavigateWaitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventNavigateWait | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._milliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.milliseconds = this._milliseconds;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._waitFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitFor = this._waitFor;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventNavigateWait | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._milliseconds = undefined;
      this._timeout = undefined;
      this._waitFor = undefined;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._milliseconds = value.milliseconds;
      this._timeout = value.timeout;
      this._waitFor = value.waitFor;
      this._validation.internalValue = value.validation;
    }
  }

  // milliseconds - computed: false, optional: true, required: false
  private _milliseconds?: number; 
  public get milliseconds() {
    return this.getNumberAttribute('milliseconds');
  }
  public set milliseconds(value: number) {
    this._milliseconds = value;
  }
  public resetMilliseconds() {
    this._milliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get millisecondsInput() {
    return this._milliseconds;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // wait_for - computed: false, optional: false, required: true
  private _waitFor?: string; 
  public get waitFor() {
    return this.getStringAttribute('wait_for');
  }
  public set waitFor(value: string) {
    this._waitFor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInput() {
    return this._waitFor;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new BrowserMonitorScriptEventsEventNavigateWaitValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BrowserMonitorScriptEventsEventNavigateWaitValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventNavigate {
  /**
  * The URL to navigate to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#url BrowserMonitor#url}
  */
  readonly url: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#authentication BrowserMonitor#authentication}
  */
  readonly authentication?: BrowserMonitorScriptEventsEventNavigateAuthentication;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#target BrowserMonitor#target}
  */
  readonly target?: BrowserMonitorScriptEventsEventNavigateTarget;
  /**
  * validate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#validate BrowserMonitor#validate}
  */
  readonly validate?: BrowserMonitorScriptEventsEventNavigateValidate;
  /**
  * wait block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#wait BrowserMonitor#wait}
  */
  readonly wait?: BrowserMonitorScriptEventsEventNavigateWait;
}

export function browserMonitorScriptEventsEventNavigateToTerraform(struct?: BrowserMonitorScriptEventsEventNavigateOutputReference | BrowserMonitorScriptEventsEventNavigate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    authentication: browserMonitorScriptEventsEventNavigateAuthenticationToTerraform(struct!.authentication),
    target: browserMonitorScriptEventsEventNavigateTargetToTerraform(struct!.target),
    validate: browserMonitorScriptEventsEventNavigateValidateToTerraform(struct!.validate),
    wait: browserMonitorScriptEventsEventNavigateWaitToTerraform(struct!.wait),
  }
}


export function browserMonitorScriptEventsEventNavigateToHclTerraform(struct?: BrowserMonitorScriptEventsEventNavigateOutputReference | BrowserMonitorScriptEventsEventNavigate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: browserMonitorScriptEventsEventNavigateAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventNavigateAuthenticationList",
    },
    target: {
      value: browserMonitorScriptEventsEventNavigateTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventNavigateTargetList",
    },
    validate: {
      value: browserMonitorScriptEventsEventNavigateValidateToHclTerraform(struct!.validate),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventNavigateValidateList",
    },
    wait: {
      value: browserMonitorScriptEventsEventNavigateWaitToHclTerraform(struct!.wait),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventNavigateWaitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventNavigateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventNavigate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._validate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate?.internalValue;
    }
    if (this._wait?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventNavigate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
      this._authentication.internalValue = undefined;
      this._target.internalValue = undefined;
      this._validate.internalValue = undefined;
      this._wait.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
      this._authentication.internalValue = value.authentication;
      this._target.internalValue = value.target;
      this._validate.internalValue = value.validate;
      this._wait.internalValue = value.wait;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new BrowserMonitorScriptEventsEventNavigateAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: BrowserMonitorScriptEventsEventNavigateAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new BrowserMonitorScriptEventsEventNavigateTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BrowserMonitorScriptEventsEventNavigateTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // validate - computed: false, optional: true, required: false
  private _validate = new BrowserMonitorScriptEventsEventNavigateValidateOutputReference(this, "validate");
  public get validate() {
    return this._validate;
  }
  public putValidate(value: BrowserMonitorScriptEventsEventNavigateValidate) {
    this._validate.internalValue = value;
  }
  public resetValidate() {
    this._validate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate.internalValue;
  }

  // wait - computed: false, optional: true, required: false
  private _wait = new BrowserMonitorScriptEventsEventNavigateWaitOutputReference(this, "wait");
  public get wait() {
    return this._wait;
  }
  public putWait(value: BrowserMonitorScriptEventsEventNavigateWait) {
    this._wait.internalValue = value;
  }
  public resetWait() {
    this._wait.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventSelectSelectionsOption {
  /**
  * The index of the option to be selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#index BrowserMonitor#index}
  */
  readonly index: number;
  /**
  * The value of the option to be selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventSelectSelectionsOptionToTerraform(struct?: BrowserMonitorScriptEventsEventSelectSelectionsOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventSelectSelectionsOptionToHclTerraform(struct?: BrowserMonitorScriptEventsEventSelectSelectionsOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class BrowserMonitorScriptEventsEventSelectSelectionsOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventSelectSelectionsOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventSelectSelectionsOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._value = value.value;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

export class BrowserMonitorScriptEventsEventSelectSelectionsOptionList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventSelectSelectionsOption[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventSelectSelectionsOptionOutputReference {
    return new BrowserMonitorScriptEventsEventSelectSelectionsOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventSelectSelections {
  /**
  * option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#option BrowserMonitor#option}
  */
  readonly option: BrowserMonitorScriptEventsEventSelectSelectionsOption[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventSelectSelectionsToTerraform(struct?: BrowserMonitorScriptEventsEventSelectSelectionsOutputReference | BrowserMonitorScriptEventsEventSelectSelections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option: cdktf.listMapper(browserMonitorScriptEventsEventSelectSelectionsOptionToTerraform, true)(struct!.option),
  }
}


export function browserMonitorScriptEventsEventSelectSelectionsToHclTerraform(struct?: BrowserMonitorScriptEventsEventSelectSelectionsOutputReference | BrowserMonitorScriptEventsEventSelectSelections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    option: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventSelectSelectionsOptionToHclTerraform, true)(struct!.option),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventSelectSelectionsOptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventSelectSelectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventSelectSelections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._option?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventSelectSelections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._option.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._option.internalValue = value.option;
    }
  }

  // option - computed: false, optional: false, required: true
  private _option = new BrowserMonitorScriptEventsEventSelectSelectionsOptionList(this, "option", false);
  public get option() {
    return this._option;
  }
  public putOption(value: BrowserMonitorScriptEventsEventSelectSelectionsOption[] | cdktf.IResolvable) {
    this._option.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventSelectTargetLocatorsLocator {
  /**
  * Defines where to look for an element. `css` (CSS Selector) or `dom` (Javascript code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * The name of the element to be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventSelectTargetLocatorsLocatorToTerraform(struct?: BrowserMonitorScriptEventsEventSelectTargetLocatorsLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventSelectTargetLocatorsLocatorToHclTerraform(struct?: BrowserMonitorScriptEventsEventSelectTargetLocatorsLocator | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptEventsEventSelectTargetLocatorsLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventSelectTargetLocatorsLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventSelectTargetLocatorsLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class BrowserMonitorScriptEventsEventSelectTargetLocatorsLocatorList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventSelectTargetLocatorsLocator[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventSelectTargetLocatorsLocatorOutputReference {
    return new BrowserMonitorScriptEventsEventSelectTargetLocatorsLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventSelectTargetLocators {
  /**
  * locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locator BrowserMonitor#locator}
  */
  readonly locator: BrowserMonitorScriptEventsEventSelectTargetLocatorsLocator[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventSelectTargetLocatorsToTerraform(struct?: BrowserMonitorScriptEventsEventSelectTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator: cdktf.listMapper(browserMonitorScriptEventsEventSelectTargetLocatorsLocatorToTerraform, true)(struct!.locator),
  }
}


export function browserMonitorScriptEventsEventSelectTargetLocatorsToHclTerraform(struct?: BrowserMonitorScriptEventsEventSelectTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventSelectTargetLocatorsLocatorToHclTerraform, true)(struct!.locator),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventSelectTargetLocatorsLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventSelectTargetLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventSelectTargetLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventSelectTargetLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locator.internalValue = value.locator;
    }
  }

  // locator - computed: false, optional: false, required: true
  private _locator = new BrowserMonitorScriptEventsEventSelectTargetLocatorsLocatorList(this, "locator", false);
  public get locator() {
    return this._locator;
  }
  public putLocator(value: BrowserMonitorScriptEventsEventSelectTargetLocatorsLocator[] | cdktf.IResolvable) {
    this._locator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventSelectTargetLocatorsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventSelectTargetLocators[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventSelectTargetLocatorsOutputReference {
    return new BrowserMonitorScriptEventsEventSelectTargetLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventSelectTarget {
  /**
  * The tab of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#window BrowserMonitor#window}
  */
  readonly window?: string;
  /**
  * locators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locators BrowserMonitor#locators}
  */
  readonly locators?: BrowserMonitorScriptEventsEventSelectTargetLocators[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventSelectTargetToTerraform(struct?: BrowserMonitorScriptEventsEventSelectTargetOutputReference | BrowserMonitorScriptEventsEventSelectTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window: cdktf.stringToTerraform(struct!.window),
    locators: cdktf.listMapper(browserMonitorScriptEventsEventSelectTargetLocatorsToTerraform, true)(struct!.locators),
  }
}


export function browserMonitorScriptEventsEventSelectTargetToHclTerraform(struct?: BrowserMonitorScriptEventsEventSelectTargetOutputReference | BrowserMonitorScriptEventsEventSelectTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locators: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventSelectTargetLocatorsToHclTerraform, true)(struct!.locators),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventSelectTargetLocatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventSelectTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventSelectTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._locators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locators = this._locators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventSelectTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._window = undefined;
      this._locators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._window = value.window;
      this._locators.internalValue = value.locators;
    }
  }

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new BrowserMonitorScriptEventsEventSelectTargetLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: BrowserMonitorScriptEventsEventSelectTargetLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocator {
  /**
  * Defines where to look for an element. `css` (CSS Selector) or `dom` (Javascript code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * The name of the element to be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocatorToTerraform(struct?: BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocatorToHclTerraform(struct?: BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocator | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocatorList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocator[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocatorOutputReference {
    return new BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocators {
  /**
  * locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locator BrowserMonitor#locator}
  */
  readonly locator: BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocator[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsToTerraform(struct?: BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator: cdktf.listMapper(browserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocatorToTerraform, true)(struct!.locator),
  }
}


export function browserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsToHclTerraform(struct?: BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocatorToHclTerraform, true)(struct!.locator),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locator.internalValue = value.locator;
    }
  }

  // locator - computed: false, optional: false, required: true
  private _locator = new BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocatorList(this, "locator", false);
  public get locator() {
    return this._locator;
  }
  public putLocator(value: BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsLocator[] | cdktf.IResolvable) {
    this._locator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocators[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsOutputReference {
    return new BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventSelectValidateValidationTarget {
  /**
  * The tab of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#window BrowserMonitor#window}
  */
  readonly window?: string;
  /**
  * locators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locators BrowserMonitor#locators}
  */
  readonly locators?: BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocators[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventSelectValidateValidationTargetToTerraform(struct?: BrowserMonitorScriptEventsEventSelectValidateValidationTargetOutputReference | BrowserMonitorScriptEventsEventSelectValidateValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window: cdktf.stringToTerraform(struct!.window),
    locators: cdktf.listMapper(browserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsToTerraform, true)(struct!.locators),
  }
}


export function browserMonitorScriptEventsEventSelectValidateValidationTargetToHclTerraform(struct?: BrowserMonitorScriptEventsEventSelectValidateValidationTargetOutputReference | BrowserMonitorScriptEventsEventSelectValidateValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locators: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsToHclTerraform, true)(struct!.locators),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventSelectValidateValidationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventSelectValidateValidationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._locators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locators = this._locators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventSelectValidateValidationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._window = undefined;
      this._locators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._window = value.window;
      this._locators.internalValue = value.locators;
    }
  }

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: BrowserMonitorScriptEventsEventSelectValidateValidationTargetLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventSelectValidateValidation {
  /**
  * The condition of the validation. `false` means the validation succeeds if the specified content/element is found. `true` means the validation fails if the specified content/element is found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#fail_if_found BrowserMonitor#fail_if_found}
  */
  readonly failIfFound?: boolean | cdktf.IResolvable;
  /**
  * The content to look for on the page.
  * Regular expressions are allowed. In that case set `isRegex` as `true`. Required for `content_match`, optional for `element_match`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#match BrowserMonitor#match}
  */
  readonly match?: string;
  /**
  * Defines whether `match` is plain text (`false`) or a regular expression (`true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#regex BrowserMonitor#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * The goal of the validation. `content_match` (check page for the specific content. Not allowed for validation inside of wait condition), `element_match` (check page for the specific element).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#target BrowserMonitor#target}
  */
  readonly target?: BrowserMonitorScriptEventsEventSelectValidateValidationTarget;
}

export function browserMonitorScriptEventsEventSelectValidateValidationToTerraform(struct?: BrowserMonitorScriptEventsEventSelectValidateValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_if_found: cdktf.booleanToTerraform(struct!.failIfFound),
    match: cdktf.stringToTerraform(struct!.match),
    regex: cdktf.booleanToTerraform(struct!.regex),
    type: cdktf.stringToTerraform(struct!.type),
    target: browserMonitorScriptEventsEventSelectValidateValidationTargetToTerraform(struct!.target),
  }
}


export function browserMonitorScriptEventsEventSelectValidateValidationToHclTerraform(struct?: BrowserMonitorScriptEventsEventSelectValidateValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_if_found: {
      value: cdktf.booleanToHclTerraform(struct!.failIfFound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: browserMonitorScriptEventsEventSelectValidateValidationTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventSelectValidateValidationTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventSelectValidateValidationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventSelectValidateValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failIfFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfFound = this._failIfFound;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventSelectValidateValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failIfFound = undefined;
      this._match = undefined;
      this._regex = undefined;
      this._type = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failIfFound = value.failIfFound;
      this._match = value.match;
      this._regex = value.regex;
      this._type = value.type;
      this._target.internalValue = value.target;
    }
  }

  // fail_if_found - computed: false, optional: true, required: false
  private _failIfFound?: boolean | cdktf.IResolvable; 
  public get failIfFound() {
    return this.getBooleanAttribute('fail_if_found');
  }
  public set failIfFound(value: boolean | cdktf.IResolvable) {
    this._failIfFound = value;
  }
  public resetFailIfFound() {
    this._failIfFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfFoundInput() {
    return this._failIfFound;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

  // target - computed: false, optional: true, required: false
  private _target = new BrowserMonitorScriptEventsEventSelectValidateValidationTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BrowserMonitorScriptEventsEventSelectValidateValidationTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventSelectValidateValidationList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventSelectValidateValidation[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventSelectValidateValidationOutputReference {
    return new BrowserMonitorScriptEventsEventSelectValidateValidationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventSelectValidate {
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#validation BrowserMonitor#validation}
  */
  readonly validation: BrowserMonitorScriptEventsEventSelectValidateValidation[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventSelectValidateToTerraform(struct?: BrowserMonitorScriptEventsEventSelectValidateOutputReference | BrowserMonitorScriptEventsEventSelectValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    validation: cdktf.listMapper(browserMonitorScriptEventsEventSelectValidateValidationToTerraform, true)(struct!.validation),
  }
}


export function browserMonitorScriptEventsEventSelectValidateToHclTerraform(struct?: BrowserMonitorScriptEventsEventSelectValidateOutputReference | BrowserMonitorScriptEventsEventSelectValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    validation: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventSelectValidateValidationToHclTerraform, true)(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventSelectValidateValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventSelectValidateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventSelectValidate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventSelectValidate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._validation.internalValue = value.validation;
    }
  }

  // validation - computed: false, optional: false, required: true
  private _validation = new BrowserMonitorScriptEventsEventSelectValidateValidationList(this, "validation", false);
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BrowserMonitorScriptEventsEventSelectValidateValidation[] | cdktf.IResolvable) {
    this._validation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocator {
  /**
  * Defines where to look for an element. `css` (CSS Selector) or `dom` (Javascript code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * The name of the element to be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocatorToTerraform(struct?: BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocatorToHclTerraform(struct?: BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocator | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocatorList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocatorOutputReference {
    return new BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocators {
  /**
  * locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locator BrowserMonitor#locator}
  */
  readonly locator: BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsToTerraform(struct?: BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator: cdktf.listMapper(browserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocatorToTerraform, true)(struct!.locator),
  }
}


export function browserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsToHclTerraform(struct?: BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocatorToHclTerraform, true)(struct!.locator),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locator.internalValue = value.locator;
    }
  }

  // locator - computed: false, optional: false, required: true
  private _locator = new BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocatorList(this, "locator", false);
  public get locator() {
    return this._locator;
  }
  public putLocator(value: BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable) {
    this._locator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocators[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsOutputReference {
    return new BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventSelectWaitValidationTarget {
  /**
  * The tab of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#window BrowserMonitor#window}
  */
  readonly window?: string;
  /**
  * locators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locators BrowserMonitor#locators}
  */
  readonly locators?: BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocators[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventSelectWaitValidationTargetToTerraform(struct?: BrowserMonitorScriptEventsEventSelectWaitValidationTargetOutputReference | BrowserMonitorScriptEventsEventSelectWaitValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window: cdktf.stringToTerraform(struct!.window),
    locators: cdktf.listMapper(browserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsToTerraform, true)(struct!.locators),
  }
}


export function browserMonitorScriptEventsEventSelectWaitValidationTargetToHclTerraform(struct?: BrowserMonitorScriptEventsEventSelectWaitValidationTargetOutputReference | BrowserMonitorScriptEventsEventSelectWaitValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locators: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsToHclTerraform, true)(struct!.locators),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventSelectWaitValidationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventSelectWaitValidationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._locators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locators = this._locators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventSelectWaitValidationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._window = undefined;
      this._locators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._window = value.window;
      this._locators.internalValue = value.locators;
    }
  }

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: BrowserMonitorScriptEventsEventSelectWaitValidationTargetLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventSelectWaitValidation {
  /**
  * The condition of the validation. `false` means the validation succeeds if the specified content/element is found. `true` means the validation fails if the specified content/element is found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#fail_if_found BrowserMonitor#fail_if_found}
  */
  readonly failIfFound?: boolean | cdktf.IResolvable;
  /**
  * The content to look for on the page.
  * Regular expressions are allowed. In that case set `isRegex` as `true`. Required for `content_match`, optional for `element_match`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#match BrowserMonitor#match}
  */
  readonly match?: string;
  /**
  * Defines whether `match` is plain text (`false`) or a regular expression (`true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#regex BrowserMonitor#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * The goal of the validation. `content_match` (check page for the specific content. Not allowed for validation inside of wait condition), `element_match` (check page for the specific element).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#target BrowserMonitor#target}
  */
  readonly target?: BrowserMonitorScriptEventsEventSelectWaitValidationTarget;
}

export function browserMonitorScriptEventsEventSelectWaitValidationToTerraform(struct?: BrowserMonitorScriptEventsEventSelectWaitValidationOutputReference | BrowserMonitorScriptEventsEventSelectWaitValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_if_found: cdktf.booleanToTerraform(struct!.failIfFound),
    match: cdktf.stringToTerraform(struct!.match),
    regex: cdktf.booleanToTerraform(struct!.regex),
    type: cdktf.stringToTerraform(struct!.type),
    target: browserMonitorScriptEventsEventSelectWaitValidationTargetToTerraform(struct!.target),
  }
}


export function browserMonitorScriptEventsEventSelectWaitValidationToHclTerraform(struct?: BrowserMonitorScriptEventsEventSelectWaitValidationOutputReference | BrowserMonitorScriptEventsEventSelectWaitValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_if_found: {
      value: cdktf.booleanToHclTerraform(struct!.failIfFound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: browserMonitorScriptEventsEventSelectWaitValidationTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventSelectWaitValidationTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventSelectWaitValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventSelectWaitValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failIfFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfFound = this._failIfFound;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventSelectWaitValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failIfFound = undefined;
      this._match = undefined;
      this._regex = undefined;
      this._type = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failIfFound = value.failIfFound;
      this._match = value.match;
      this._regex = value.regex;
      this._type = value.type;
      this._target.internalValue = value.target;
    }
  }

  // fail_if_found - computed: false, optional: true, required: false
  private _failIfFound?: boolean | cdktf.IResolvable; 
  public get failIfFound() {
    return this.getBooleanAttribute('fail_if_found');
  }
  public set failIfFound(value: boolean | cdktf.IResolvable) {
    this._failIfFound = value;
  }
  public resetFailIfFound() {
    this._failIfFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfFoundInput() {
    return this._failIfFound;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

  // target - computed: false, optional: true, required: false
  private _target = new BrowserMonitorScriptEventsEventSelectWaitValidationTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BrowserMonitorScriptEventsEventSelectWaitValidationTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventSelectWait {
  /**
  * The time to wait, in millisencods. The maximum allowed value is `60000`. Required for the type `time`, not applicable otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#milliseconds BrowserMonitor#milliseconds}
  */
  readonly milliseconds?: number;
  /**
  * he maximum amount of time to wait for a certain element to appear, in milliseconds—if exceeded, the action is marked as failed.
  * The maximum allowed value is 60000. Required for the type `validation`, not applicable otherwise..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#timeout BrowserMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * The time to wait before the next event is triggered. Possible values are `page_complete` (wait for the page to load completely), `network` (wait for background network activity to complete), `next_action` (wait for the next action), `time` (wait for a specified periodof time) and `validation` (wait for a specific element to appear)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#wait_for BrowserMonitor#wait_for}
  */
  readonly waitFor: string;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#validation BrowserMonitor#validation}
  */
  readonly validation?: BrowserMonitorScriptEventsEventSelectWaitValidation;
}

export function browserMonitorScriptEventsEventSelectWaitToTerraform(struct?: BrowserMonitorScriptEventsEventSelectWaitOutputReference | BrowserMonitorScriptEventsEventSelectWait): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    milliseconds: cdktf.numberToTerraform(struct!.milliseconds),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    wait_for: cdktf.stringToTerraform(struct!.waitFor),
    validation: browserMonitorScriptEventsEventSelectWaitValidationToTerraform(struct!.validation),
  }
}


export function browserMonitorScriptEventsEventSelectWaitToHclTerraform(struct?: BrowserMonitorScriptEventsEventSelectWaitOutputReference | BrowserMonitorScriptEventsEventSelectWait): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.milliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_for: {
      value: cdktf.stringToHclTerraform(struct!.waitFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: browserMonitorScriptEventsEventSelectWaitValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventSelectWaitValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventSelectWaitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventSelectWait | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._milliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.milliseconds = this._milliseconds;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._waitFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitFor = this._waitFor;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventSelectWait | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._milliseconds = undefined;
      this._timeout = undefined;
      this._waitFor = undefined;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._milliseconds = value.milliseconds;
      this._timeout = value.timeout;
      this._waitFor = value.waitFor;
      this._validation.internalValue = value.validation;
    }
  }

  // milliseconds - computed: false, optional: true, required: false
  private _milliseconds?: number; 
  public get milliseconds() {
    return this.getNumberAttribute('milliseconds');
  }
  public set milliseconds(value: number) {
    this._milliseconds = value;
  }
  public resetMilliseconds() {
    this._milliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get millisecondsInput() {
    return this._milliseconds;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // wait_for - computed: false, optional: false, required: true
  private _waitFor?: string; 
  public get waitFor() {
    return this.getStringAttribute('wait_for');
  }
  public set waitFor(value: string) {
    this._waitFor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInput() {
    return this._waitFor;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new BrowserMonitorScriptEventsEventSelectWaitValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BrowserMonitorScriptEventsEventSelectWaitValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventSelect {
  /**
  * selections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#selections BrowserMonitor#selections}
  */
  readonly selections: BrowserMonitorScriptEventsEventSelectSelections;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#target BrowserMonitor#target}
  */
  readonly target?: BrowserMonitorScriptEventsEventSelectTarget;
  /**
  * validate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#validate BrowserMonitor#validate}
  */
  readonly validate?: BrowserMonitorScriptEventsEventSelectValidate;
  /**
  * wait block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#wait BrowserMonitor#wait}
  */
  readonly wait?: BrowserMonitorScriptEventsEventSelectWait;
}

export function browserMonitorScriptEventsEventSelectToTerraform(struct?: BrowserMonitorScriptEventsEventSelectOutputReference | BrowserMonitorScriptEventsEventSelect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selections: browserMonitorScriptEventsEventSelectSelectionsToTerraform(struct!.selections),
    target: browserMonitorScriptEventsEventSelectTargetToTerraform(struct!.target),
    validate: browserMonitorScriptEventsEventSelectValidateToTerraform(struct!.validate),
    wait: browserMonitorScriptEventsEventSelectWaitToTerraform(struct!.wait),
  }
}


export function browserMonitorScriptEventsEventSelectToHclTerraform(struct?: BrowserMonitorScriptEventsEventSelectOutputReference | BrowserMonitorScriptEventsEventSelect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selections: {
      value: browserMonitorScriptEventsEventSelectSelectionsToHclTerraform(struct!.selections),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventSelectSelectionsList",
    },
    target: {
      value: browserMonitorScriptEventsEventSelectTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventSelectTargetList",
    },
    validate: {
      value: browserMonitorScriptEventsEventSelectValidateToHclTerraform(struct!.validate),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventSelectValidateList",
    },
    wait: {
      value: browserMonitorScriptEventsEventSelectWaitToHclTerraform(struct!.wait),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventSelectWaitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventSelectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventSelect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selections = this._selections?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._validate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate?.internalValue;
    }
    if (this._wait?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventSelect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selections.internalValue = undefined;
      this._target.internalValue = undefined;
      this._validate.internalValue = undefined;
      this._wait.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selections.internalValue = value.selections;
      this._target.internalValue = value.target;
      this._validate.internalValue = value.validate;
      this._wait.internalValue = value.wait;
    }
  }

  // selections - computed: false, optional: false, required: true
  private _selections = new BrowserMonitorScriptEventsEventSelectSelectionsOutputReference(this, "selections");
  public get selections() {
    return this._selections;
  }
  public putSelections(value: BrowserMonitorScriptEventsEventSelectSelections) {
    this._selections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionsInput() {
    return this._selections.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new BrowserMonitorScriptEventsEventSelectTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BrowserMonitorScriptEventsEventSelectTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // validate - computed: false, optional: true, required: false
  private _validate = new BrowserMonitorScriptEventsEventSelectValidateOutputReference(this, "validate");
  public get validate() {
    return this._validate;
  }
  public putValidate(value: BrowserMonitorScriptEventsEventSelectValidate) {
    this._validate.internalValue = value;
  }
  public resetValidate() {
    this._validate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate.internalValue;
  }

  // wait - computed: false, optional: true, required: false
  private _wait = new BrowserMonitorScriptEventsEventSelectWaitOutputReference(this, "wait");
  public get wait() {
    return this._wait;
  }
  public putWait(value: BrowserMonitorScriptEventsEventSelectWait) {
    this._wait.internalValue = value;
  }
  public resetWait() {
    this._wait.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventTapTargetLocatorsLocator {
  /**
  * Defines where to look for an element. `css` (CSS Selector) or `dom` (Javascript code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * The name of the element to be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventTapTargetLocatorsLocatorToTerraform(struct?: BrowserMonitorScriptEventsEventTapTargetLocatorsLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventTapTargetLocatorsLocatorToHclTerraform(struct?: BrowserMonitorScriptEventsEventTapTargetLocatorsLocator | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptEventsEventTapTargetLocatorsLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventTapTargetLocatorsLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventTapTargetLocatorsLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class BrowserMonitorScriptEventsEventTapTargetLocatorsLocatorList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventTapTargetLocatorsLocator[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventTapTargetLocatorsLocatorOutputReference {
    return new BrowserMonitorScriptEventsEventTapTargetLocatorsLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventTapTargetLocators {
  /**
  * locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locator BrowserMonitor#locator}
  */
  readonly locator: BrowserMonitorScriptEventsEventTapTargetLocatorsLocator[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventTapTargetLocatorsToTerraform(struct?: BrowserMonitorScriptEventsEventTapTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator: cdktf.listMapper(browserMonitorScriptEventsEventTapTargetLocatorsLocatorToTerraform, true)(struct!.locator),
  }
}


export function browserMonitorScriptEventsEventTapTargetLocatorsToHclTerraform(struct?: BrowserMonitorScriptEventsEventTapTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventTapTargetLocatorsLocatorToHclTerraform, true)(struct!.locator),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventTapTargetLocatorsLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventTapTargetLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventTapTargetLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventTapTargetLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locator.internalValue = value.locator;
    }
  }

  // locator - computed: false, optional: false, required: true
  private _locator = new BrowserMonitorScriptEventsEventTapTargetLocatorsLocatorList(this, "locator", false);
  public get locator() {
    return this._locator;
  }
  public putLocator(value: BrowserMonitorScriptEventsEventTapTargetLocatorsLocator[] | cdktf.IResolvable) {
    this._locator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventTapTargetLocatorsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventTapTargetLocators[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventTapTargetLocatorsOutputReference {
    return new BrowserMonitorScriptEventsEventTapTargetLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventTapTarget {
  /**
  * The tab of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#window BrowserMonitor#window}
  */
  readonly window?: string;
  /**
  * locators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locators BrowserMonitor#locators}
  */
  readonly locators?: BrowserMonitorScriptEventsEventTapTargetLocators[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventTapTargetToTerraform(struct?: BrowserMonitorScriptEventsEventTapTargetOutputReference | BrowserMonitorScriptEventsEventTapTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window: cdktf.stringToTerraform(struct!.window),
    locators: cdktf.listMapper(browserMonitorScriptEventsEventTapTargetLocatorsToTerraform, true)(struct!.locators),
  }
}


export function browserMonitorScriptEventsEventTapTargetToHclTerraform(struct?: BrowserMonitorScriptEventsEventTapTargetOutputReference | BrowserMonitorScriptEventsEventTapTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locators: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventTapTargetLocatorsToHclTerraform, true)(struct!.locators),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventTapTargetLocatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventTapTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventTapTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._locators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locators = this._locators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventTapTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._window = undefined;
      this._locators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._window = value.window;
      this._locators.internalValue = value.locators;
    }
  }

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new BrowserMonitorScriptEventsEventTapTargetLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: BrowserMonitorScriptEventsEventTapTargetLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocator {
  /**
  * Defines where to look for an element. `css` (CSS Selector) or `dom` (Javascript code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * The name of the element to be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocatorToTerraform(struct?: BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocatorToHclTerraform(struct?: BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocator | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocatorList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocator[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocatorOutputReference {
    return new BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventTapValidateValidationTargetLocators {
  /**
  * locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locator BrowserMonitor#locator}
  */
  readonly locator: BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocator[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventTapValidateValidationTargetLocatorsToTerraform(struct?: BrowserMonitorScriptEventsEventTapValidateValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator: cdktf.listMapper(browserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocatorToTerraform, true)(struct!.locator),
  }
}


export function browserMonitorScriptEventsEventTapValidateValidationTargetLocatorsToHclTerraform(struct?: BrowserMonitorScriptEventsEventTapValidateValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocatorToHclTerraform, true)(struct!.locator),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventTapValidateValidationTargetLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventTapValidateValidationTargetLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locator.internalValue = value.locator;
    }
  }

  // locator - computed: false, optional: false, required: true
  private _locator = new BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocatorList(this, "locator", false);
  public get locator() {
    return this._locator;
  }
  public putLocator(value: BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsLocator[] | cdktf.IResolvable) {
    this._locator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventTapValidateValidationTargetLocators[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsOutputReference {
    return new BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventTapValidateValidationTarget {
  /**
  * The tab of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#window BrowserMonitor#window}
  */
  readonly window?: string;
  /**
  * locators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locators BrowserMonitor#locators}
  */
  readonly locators?: BrowserMonitorScriptEventsEventTapValidateValidationTargetLocators[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventTapValidateValidationTargetToTerraform(struct?: BrowserMonitorScriptEventsEventTapValidateValidationTargetOutputReference | BrowserMonitorScriptEventsEventTapValidateValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window: cdktf.stringToTerraform(struct!.window),
    locators: cdktf.listMapper(browserMonitorScriptEventsEventTapValidateValidationTargetLocatorsToTerraform, true)(struct!.locators),
  }
}


export function browserMonitorScriptEventsEventTapValidateValidationTargetToHclTerraform(struct?: BrowserMonitorScriptEventsEventTapValidateValidationTargetOutputReference | BrowserMonitorScriptEventsEventTapValidateValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locators: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventTapValidateValidationTargetLocatorsToHclTerraform, true)(struct!.locators),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventTapValidateValidationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventTapValidateValidationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._locators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locators = this._locators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventTapValidateValidationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._window = undefined;
      this._locators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._window = value.window;
      this._locators.internalValue = value.locators;
    }
  }

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new BrowserMonitorScriptEventsEventTapValidateValidationTargetLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: BrowserMonitorScriptEventsEventTapValidateValidationTargetLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventTapValidateValidation {
  /**
  * The condition of the validation. `false` means the validation succeeds if the specified content/element is found. `true` means the validation fails if the specified content/element is found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#fail_if_found BrowserMonitor#fail_if_found}
  */
  readonly failIfFound?: boolean | cdktf.IResolvable;
  /**
  * The content to look for on the page.
  * Regular expressions are allowed. In that case set `isRegex` as `true`. Required for `content_match`, optional for `element_match`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#match BrowserMonitor#match}
  */
  readonly match?: string;
  /**
  * Defines whether `match` is plain text (`false`) or a regular expression (`true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#regex BrowserMonitor#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * The goal of the validation. `content_match` (check page for the specific content. Not allowed for validation inside of wait condition), `element_match` (check page for the specific element).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#target BrowserMonitor#target}
  */
  readonly target?: BrowserMonitorScriptEventsEventTapValidateValidationTarget;
}

export function browserMonitorScriptEventsEventTapValidateValidationToTerraform(struct?: BrowserMonitorScriptEventsEventTapValidateValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_if_found: cdktf.booleanToTerraform(struct!.failIfFound),
    match: cdktf.stringToTerraform(struct!.match),
    regex: cdktf.booleanToTerraform(struct!.regex),
    type: cdktf.stringToTerraform(struct!.type),
    target: browserMonitorScriptEventsEventTapValidateValidationTargetToTerraform(struct!.target),
  }
}


export function browserMonitorScriptEventsEventTapValidateValidationToHclTerraform(struct?: BrowserMonitorScriptEventsEventTapValidateValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_if_found: {
      value: cdktf.booleanToHclTerraform(struct!.failIfFound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: browserMonitorScriptEventsEventTapValidateValidationTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventTapValidateValidationTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventTapValidateValidationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventTapValidateValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failIfFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfFound = this._failIfFound;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventTapValidateValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failIfFound = undefined;
      this._match = undefined;
      this._regex = undefined;
      this._type = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failIfFound = value.failIfFound;
      this._match = value.match;
      this._regex = value.regex;
      this._type = value.type;
      this._target.internalValue = value.target;
    }
  }

  // fail_if_found - computed: false, optional: true, required: false
  private _failIfFound?: boolean | cdktf.IResolvable; 
  public get failIfFound() {
    return this.getBooleanAttribute('fail_if_found');
  }
  public set failIfFound(value: boolean | cdktf.IResolvable) {
    this._failIfFound = value;
  }
  public resetFailIfFound() {
    this._failIfFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfFoundInput() {
    return this._failIfFound;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

  // target - computed: false, optional: true, required: false
  private _target = new BrowserMonitorScriptEventsEventTapValidateValidationTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BrowserMonitorScriptEventsEventTapValidateValidationTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventTapValidateValidationList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventTapValidateValidation[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventTapValidateValidationOutputReference {
    return new BrowserMonitorScriptEventsEventTapValidateValidationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventTapValidate {
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#validation BrowserMonitor#validation}
  */
  readonly validation: BrowserMonitorScriptEventsEventTapValidateValidation[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventTapValidateToTerraform(struct?: BrowserMonitorScriptEventsEventTapValidateOutputReference | BrowserMonitorScriptEventsEventTapValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    validation: cdktf.listMapper(browserMonitorScriptEventsEventTapValidateValidationToTerraform, true)(struct!.validation),
  }
}


export function browserMonitorScriptEventsEventTapValidateToHclTerraform(struct?: BrowserMonitorScriptEventsEventTapValidateOutputReference | BrowserMonitorScriptEventsEventTapValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    validation: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventTapValidateValidationToHclTerraform, true)(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventTapValidateValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventTapValidateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventTapValidate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventTapValidate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._validation.internalValue = value.validation;
    }
  }

  // validation - computed: false, optional: false, required: true
  private _validation = new BrowserMonitorScriptEventsEventTapValidateValidationList(this, "validation", false);
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BrowserMonitorScriptEventsEventTapValidateValidation[] | cdktf.IResolvable) {
    this._validation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocator {
  /**
  * Defines where to look for an element. `css` (CSS Selector) or `dom` (Javascript code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * The name of the element to be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value: string;
}

export function browserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocatorToTerraform(struct?: BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocatorToHclTerraform(struct?: BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocator | cdktf.IResolvable): any {
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

export class BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocatorList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocatorOutputReference {
    return new BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventTapWaitValidationTargetLocators {
  /**
  * locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locator BrowserMonitor#locator}
  */
  readonly locator: BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventTapWaitValidationTargetLocatorsToTerraform(struct?: BrowserMonitorScriptEventsEventTapWaitValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator: cdktf.listMapper(browserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocatorToTerraform, true)(struct!.locator),
  }
}


export function browserMonitorScriptEventsEventTapWaitValidationTargetLocatorsToHclTerraform(struct?: BrowserMonitorScriptEventsEventTapWaitValidationTargetLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocatorToHclTerraform, true)(struct!.locator),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEventTapWaitValidationTargetLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventTapWaitValidationTargetLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locator.internalValue = value.locator;
    }
  }

  // locator - computed: false, optional: false, required: true
  private _locator = new BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocatorList(this, "locator", false);
  public get locator() {
    return this._locator;
  }
  public putLocator(value: BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsLocator[] | cdktf.IResolvable) {
    this._locator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEventTapWaitValidationTargetLocators[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsOutputReference {
    return new BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEventsEventTapWaitValidationTarget {
  /**
  * The tab of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#window BrowserMonitor#window}
  */
  readonly window?: string;
  /**
  * locators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#locators BrowserMonitor#locators}
  */
  readonly locators?: BrowserMonitorScriptEventsEventTapWaitValidationTargetLocators[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsEventTapWaitValidationTargetToTerraform(struct?: BrowserMonitorScriptEventsEventTapWaitValidationTargetOutputReference | BrowserMonitorScriptEventsEventTapWaitValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window: cdktf.stringToTerraform(struct!.window),
    locators: cdktf.listMapper(browserMonitorScriptEventsEventTapWaitValidationTargetLocatorsToTerraform, true)(struct!.locators),
  }
}


export function browserMonitorScriptEventsEventTapWaitValidationTargetToHclTerraform(struct?: BrowserMonitorScriptEventsEventTapWaitValidationTargetOutputReference | BrowserMonitorScriptEventsEventTapWaitValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locators: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventTapWaitValidationTargetLocatorsToHclTerraform, true)(struct!.locators),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventTapWaitValidationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventTapWaitValidationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._locators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locators = this._locators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventTapWaitValidationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._window = undefined;
      this._locators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._window = value.window;
      this._locators.internalValue = value.locators;
    }
  }

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new BrowserMonitorScriptEventsEventTapWaitValidationTargetLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: BrowserMonitorScriptEventsEventTapWaitValidationTargetLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventTapWaitValidation {
  /**
  * The condition of the validation. `false` means the validation succeeds if the specified content/element is found. `true` means the validation fails if the specified content/element is found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#fail_if_found BrowserMonitor#fail_if_found}
  */
  readonly failIfFound?: boolean | cdktf.IResolvable;
  /**
  * The content to look for on the page.
  * Regular expressions are allowed. In that case set `isRegex` as `true`. Required for `content_match`, optional for `element_match`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#match BrowserMonitor#match}
  */
  readonly match?: string;
  /**
  * Defines whether `match` is plain text (`false`) or a regular expression (`true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#regex BrowserMonitor#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * The goal of the validation. `content_match` (check page for the specific content. Not allowed for validation inside of wait condition), `element_match` (check page for the specific element).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#target BrowserMonitor#target}
  */
  readonly target?: BrowserMonitorScriptEventsEventTapWaitValidationTarget;
}

export function browserMonitorScriptEventsEventTapWaitValidationToTerraform(struct?: BrowserMonitorScriptEventsEventTapWaitValidationOutputReference | BrowserMonitorScriptEventsEventTapWaitValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_if_found: cdktf.booleanToTerraform(struct!.failIfFound),
    match: cdktf.stringToTerraform(struct!.match),
    regex: cdktf.booleanToTerraform(struct!.regex),
    type: cdktf.stringToTerraform(struct!.type),
    target: browserMonitorScriptEventsEventTapWaitValidationTargetToTerraform(struct!.target),
  }
}


export function browserMonitorScriptEventsEventTapWaitValidationToHclTerraform(struct?: BrowserMonitorScriptEventsEventTapWaitValidationOutputReference | BrowserMonitorScriptEventsEventTapWaitValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_if_found: {
      value: cdktf.booleanToHclTerraform(struct!.failIfFound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: browserMonitorScriptEventsEventTapWaitValidationTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventTapWaitValidationTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventTapWaitValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventTapWaitValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failIfFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfFound = this._failIfFound;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventTapWaitValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failIfFound = undefined;
      this._match = undefined;
      this._regex = undefined;
      this._type = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failIfFound = value.failIfFound;
      this._match = value.match;
      this._regex = value.regex;
      this._type = value.type;
      this._target.internalValue = value.target;
    }
  }

  // fail_if_found - computed: false, optional: true, required: false
  private _failIfFound?: boolean | cdktf.IResolvable; 
  public get failIfFound() {
    return this.getBooleanAttribute('fail_if_found');
  }
  public set failIfFound(value: boolean | cdktf.IResolvable) {
    this._failIfFound = value;
  }
  public resetFailIfFound() {
    this._failIfFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfFoundInput() {
    return this._failIfFound;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

  // target - computed: false, optional: true, required: false
  private _target = new BrowserMonitorScriptEventsEventTapWaitValidationTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BrowserMonitorScriptEventsEventTapWaitValidationTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventTapWait {
  /**
  * The time to wait, in millisencods. The maximum allowed value is `60000`. Required for the type `time`, not applicable otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#milliseconds BrowserMonitor#milliseconds}
  */
  readonly milliseconds?: number;
  /**
  * he maximum amount of time to wait for a certain element to appear, in milliseconds—if exceeded, the action is marked as failed.
  * The maximum allowed value is 60000. Required for the type `validation`, not applicable otherwise..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#timeout BrowserMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * The time to wait before the next event is triggered. Possible values are `page_complete` (wait for the page to load completely), `network` (wait for background network activity to complete), `next_action` (wait for the next action), `time` (wait for a specified periodof time) and `validation` (wait for a specific element to appear)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#wait_for BrowserMonitor#wait_for}
  */
  readonly waitFor: string;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#validation BrowserMonitor#validation}
  */
  readonly validation?: BrowserMonitorScriptEventsEventTapWaitValidation;
}

export function browserMonitorScriptEventsEventTapWaitToTerraform(struct?: BrowserMonitorScriptEventsEventTapWaitOutputReference | BrowserMonitorScriptEventsEventTapWait): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    milliseconds: cdktf.numberToTerraform(struct!.milliseconds),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    wait_for: cdktf.stringToTerraform(struct!.waitFor),
    validation: browserMonitorScriptEventsEventTapWaitValidationToTerraform(struct!.validation),
  }
}


export function browserMonitorScriptEventsEventTapWaitToHclTerraform(struct?: BrowserMonitorScriptEventsEventTapWaitOutputReference | BrowserMonitorScriptEventsEventTapWait): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.milliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_for: {
      value: cdktf.stringToHclTerraform(struct!.waitFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: browserMonitorScriptEventsEventTapWaitValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventTapWaitValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventTapWaitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventTapWait | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._milliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.milliseconds = this._milliseconds;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._waitFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitFor = this._waitFor;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventTapWait | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._milliseconds = undefined;
      this._timeout = undefined;
      this._waitFor = undefined;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._milliseconds = value.milliseconds;
      this._timeout = value.timeout;
      this._waitFor = value.waitFor;
      this._validation.internalValue = value.validation;
    }
  }

  // milliseconds - computed: false, optional: true, required: false
  private _milliseconds?: number; 
  public get milliseconds() {
    return this.getNumberAttribute('milliseconds');
  }
  public set milliseconds(value: number) {
    this._milliseconds = value;
  }
  public resetMilliseconds() {
    this._milliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get millisecondsInput() {
    return this._milliseconds;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // wait_for - computed: false, optional: false, required: true
  private _waitFor?: string; 
  public get waitFor() {
    return this.getStringAttribute('wait_for');
  }
  public set waitFor(value: string) {
    this._waitFor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInput() {
    return this._waitFor;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new BrowserMonitorScriptEventsEventTapWaitValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BrowserMonitorScriptEventsEventTapWaitValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEventTap {
  /**
  * the mouse button to be used for the click
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#button BrowserMonitor#button}
  */
  readonly button: number;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#target BrowserMonitor#target}
  */
  readonly target?: BrowserMonitorScriptEventsEventTapTarget;
  /**
  * validate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#validate BrowserMonitor#validate}
  */
  readonly validate?: BrowserMonitorScriptEventsEventTapValidate;
  /**
  * wait block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#wait BrowserMonitor#wait}
  */
  readonly wait?: BrowserMonitorScriptEventsEventTapWait;
}

export function browserMonitorScriptEventsEventTapToTerraform(struct?: BrowserMonitorScriptEventsEventTapOutputReference | BrowserMonitorScriptEventsEventTap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    button: cdktf.numberToTerraform(struct!.button),
    target: browserMonitorScriptEventsEventTapTargetToTerraform(struct!.target),
    validate: browserMonitorScriptEventsEventTapValidateToTerraform(struct!.validate),
    wait: browserMonitorScriptEventsEventTapWaitToTerraform(struct!.wait),
  }
}


export function browserMonitorScriptEventsEventTapToHclTerraform(struct?: BrowserMonitorScriptEventsEventTapOutputReference | BrowserMonitorScriptEventsEventTap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    button: {
      value: cdktf.numberToHclTerraform(struct!.button),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: browserMonitorScriptEventsEventTapTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventTapTargetList",
    },
    validate: {
      value: browserMonitorScriptEventsEventTapValidateToHclTerraform(struct!.validate),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventTapValidateList",
    },
    wait: {
      value: browserMonitorScriptEventsEventTapWaitToHclTerraform(struct!.wait),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventTapWaitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventTapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEventsEventTap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._button !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._validate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate?.internalValue;
    }
    if (this._wait?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEventTap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._button = undefined;
      this._target.internalValue = undefined;
      this._validate.internalValue = undefined;
      this._wait.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._button = value.button;
      this._target.internalValue = value.target;
      this._validate.internalValue = value.validate;
      this._wait.internalValue = value.wait;
    }
  }

  // button - computed: false, optional: false, required: true
  private _button?: number; 
  public get button() {
    return this.getNumberAttribute('button');
  }
  public set button(value: number) {
    this._button = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button;
  }

  // target - computed: false, optional: true, required: false
  private _target = new BrowserMonitorScriptEventsEventTapTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BrowserMonitorScriptEventsEventTapTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // validate - computed: false, optional: true, required: false
  private _validate = new BrowserMonitorScriptEventsEventTapValidateOutputReference(this, "validate");
  public get validate() {
    return this._validate;
  }
  public putValidate(value: BrowserMonitorScriptEventsEventTapValidate) {
    this._validate.internalValue = value;
  }
  public resetValidate() {
    this._validate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate.internalValue;
  }

  // wait - computed: false, optional: true, required: false
  private _wait = new BrowserMonitorScriptEventsEventTapWaitOutputReference(this, "wait");
  public get wait() {
    return this._wait;
  }
  public putWait(value: BrowserMonitorScriptEventsEventTapWait) {
    this._wait.internalValue = value;
  }
  public resetWait() {
    this._wait.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait.internalValue;
  }
}
export interface BrowserMonitorScriptEventsEvent {
  /**
  * A short description of the event to appear in the UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#description BrowserMonitor#description}
  */
  readonly description: string;
  /**
  * click block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#click BrowserMonitor#click}
  */
  readonly click?: BrowserMonitorScriptEventsEventClick;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#cookie BrowserMonitor#cookie}
  */
  readonly cookie?: BrowserMonitorScriptEventsEventCookie;
  /**
  * javascript block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#javascript BrowserMonitor#javascript}
  */
  readonly javascript?: BrowserMonitorScriptEventsEventJavascript;
  /**
  * keystrokes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#keystrokes BrowserMonitor#keystrokes}
  */
  readonly keystrokes?: BrowserMonitorScriptEventsEventKeystrokes;
  /**
  * navigate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#navigate BrowserMonitor#navigate}
  */
  readonly navigate?: BrowserMonitorScriptEventsEventNavigate;
  /**
  * select block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#select BrowserMonitor#select}
  */
  readonly select?: BrowserMonitorScriptEventsEventSelect;
  /**
  * tap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#tap BrowserMonitor#tap}
  */
  readonly tap?: BrowserMonitorScriptEventsEventTap;
}

export function browserMonitorScriptEventsEventToTerraform(struct?: BrowserMonitorScriptEventsEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    click: browserMonitorScriptEventsEventClickToTerraform(struct!.click),
    cookie: browserMonitorScriptEventsEventCookieToTerraform(struct!.cookie),
    javascript: browserMonitorScriptEventsEventJavascriptToTerraform(struct!.javascript),
    keystrokes: browserMonitorScriptEventsEventKeystrokesToTerraform(struct!.keystrokes),
    navigate: browserMonitorScriptEventsEventNavigateToTerraform(struct!.navigate),
    select: browserMonitorScriptEventsEventSelectToTerraform(struct!.select),
    tap: browserMonitorScriptEventsEventTapToTerraform(struct!.tap),
  }
}


export function browserMonitorScriptEventsEventToHclTerraform(struct?: BrowserMonitorScriptEventsEvent | cdktf.IResolvable): any {
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
    click: {
      value: browserMonitorScriptEventsEventClickToHclTerraform(struct!.click),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventClickList",
    },
    cookie: {
      value: browserMonitorScriptEventsEventCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventCookieList",
    },
    javascript: {
      value: browserMonitorScriptEventsEventJavascriptToHclTerraform(struct!.javascript),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventJavascriptList",
    },
    keystrokes: {
      value: browserMonitorScriptEventsEventKeystrokesToHclTerraform(struct!.keystrokes),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventKeystrokesList",
    },
    navigate: {
      value: browserMonitorScriptEventsEventNavigateToHclTerraform(struct!.navigate),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventNavigateList",
    },
    select: {
      value: browserMonitorScriptEventsEventSelectToHclTerraform(struct!.select),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventSelectList",
    },
    tap: {
      value: browserMonitorScriptEventsEventTapToHclTerraform(struct!.tap),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventTapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsEventOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorScriptEventsEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._click?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.click = this._click?.internalValue;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._javascript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascript = this._javascript?.internalValue;
    }
    if (this._keystrokes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystrokes = this._keystrokes?.internalValue;
    }
    if (this._navigate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.navigate = this._navigate?.internalValue;
    }
    if (this._select?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.select = this._select?.internalValue;
    }
    if (this._tap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tap = this._tap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEventsEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._click.internalValue = undefined;
      this._cookie.internalValue = undefined;
      this._javascript.internalValue = undefined;
      this._keystrokes.internalValue = undefined;
      this._navigate.internalValue = undefined;
      this._select.internalValue = undefined;
      this._tap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._click.internalValue = value.click;
      this._cookie.internalValue = value.cookie;
      this._javascript.internalValue = value.javascript;
      this._keystrokes.internalValue = value.keystrokes;
      this._navigate.internalValue = value.navigate;
      this._select.internalValue = value.select;
      this._tap.internalValue = value.tap;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // click - computed: false, optional: true, required: false
  private _click = new BrowserMonitorScriptEventsEventClickOutputReference(this, "click");
  public get click() {
    return this._click;
  }
  public putClick(value: BrowserMonitorScriptEventsEventClick) {
    this._click.internalValue = value;
  }
  public resetClick() {
    this._click.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickInput() {
    return this._click.internalValue;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new BrowserMonitorScriptEventsEventCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: BrowserMonitorScriptEventsEventCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // javascript - computed: false, optional: true, required: false
  private _javascript = new BrowserMonitorScriptEventsEventJavascriptOutputReference(this, "javascript");
  public get javascript() {
    return this._javascript;
  }
  public putJavascript(value: BrowserMonitorScriptEventsEventJavascript) {
    this._javascript.internalValue = value;
  }
  public resetJavascript() {
    this._javascript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptInput() {
    return this._javascript.internalValue;
  }

  // keystrokes - computed: false, optional: true, required: false
  private _keystrokes = new BrowserMonitorScriptEventsEventKeystrokesOutputReference(this, "keystrokes");
  public get keystrokes() {
    return this._keystrokes;
  }
  public putKeystrokes(value: BrowserMonitorScriptEventsEventKeystrokes) {
    this._keystrokes.internalValue = value;
  }
  public resetKeystrokes() {
    this._keystrokes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystrokesInput() {
    return this._keystrokes.internalValue;
  }

  // navigate - computed: false, optional: true, required: false
  private _navigate = new BrowserMonitorScriptEventsEventNavigateOutputReference(this, "navigate");
  public get navigate() {
    return this._navigate;
  }
  public putNavigate(value: BrowserMonitorScriptEventsEventNavigate) {
    this._navigate.internalValue = value;
  }
  public resetNavigate() {
    this._navigate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get navigateInput() {
    return this._navigate.internalValue;
  }

  // select - computed: false, optional: true, required: false
  private _select = new BrowserMonitorScriptEventsEventSelectOutputReference(this, "select");
  public get select() {
    return this._select;
  }
  public putSelect(value: BrowserMonitorScriptEventsEventSelect) {
    this._select.internalValue = value;
  }
  public resetSelect() {
    this._select.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select.internalValue;
  }

  // tap - computed: false, optional: true, required: false
  private _tap = new BrowserMonitorScriptEventsEventTapOutputReference(this, "tap");
  public get tap() {
    return this._tap;
  }
  public putTap(value: BrowserMonitorScriptEventsEventTap) {
    this._tap.internalValue = value;
  }
  public resetTap() {
    this._tap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tapInput() {
    return this._tap.internalValue;
  }
}

export class BrowserMonitorScriptEventsEventList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorScriptEventsEvent[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorScriptEventsEventOutputReference {
    return new BrowserMonitorScriptEventsEventOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorScriptEvents {
  /**
  * event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#event BrowserMonitor#event}
  */
  readonly event?: BrowserMonitorScriptEventsEvent[] | cdktf.IResolvable;
}

export function browserMonitorScriptEventsToTerraform(struct?: BrowserMonitorScriptEventsOutputReference | BrowserMonitorScriptEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: cdktf.listMapper(browserMonitorScriptEventsEventToTerraform, true)(struct!.event),
  }
}


export function browserMonitorScriptEventsToHclTerraform(struct?: BrowserMonitorScriptEventsOutputReference | BrowserMonitorScriptEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event: {
      value: cdktf.listMapperHcl(browserMonitorScriptEventsEventToHclTerraform, true)(struct!.event),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsEventList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScriptEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScriptEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._event.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._event.internalValue = value.event;
    }
  }

  // event - computed: false, optional: true, required: false
  private _event = new BrowserMonitorScriptEventsEventList(this, "event", false);
  public get event() {
    return this._event;
  }
  public putEvent(value: BrowserMonitorScriptEventsEvent[] | cdktf.IResolvable) {
    this._event.internalValue = value;
  }
  public resetEvent() {
    this._event.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event.internalValue;
  }
}
export interface BrowserMonitorScript {
  /**
  * The type of monitor. Possible values are `clickpath` for clickpath monitors and `availability` for single-URL browser monitors. These monitors are only allowed to have one event of the `navigate` type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#type BrowserMonitor#type}
  */
  readonly type: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#configuration BrowserMonitor#configuration}
  */
  readonly configuration?: BrowserMonitorScriptConfiguration;
  /**
  * events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#events BrowserMonitor#events}
  */
  readonly events?: BrowserMonitorScriptEvents;
}

export function browserMonitorScriptToTerraform(struct?: BrowserMonitorScriptOutputReference | BrowserMonitorScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    configuration: browserMonitorScriptConfigurationToTerraform(struct!.configuration),
    events: browserMonitorScriptEventsToTerraform(struct!.events),
  }
}


export function browserMonitorScriptToHclTerraform(struct?: BrowserMonitorScriptOutputReference | BrowserMonitorScript): any {
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
    configuration: {
      value: browserMonitorScriptConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptConfigurationList",
    },
    events: {
      value: browserMonitorScriptEventsToHclTerraform(struct!.events),
      isBlock: true,
      type: "list",
      storageClassType: "BrowserMonitorScriptEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._events?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._configuration.internalValue = undefined;
      this._events.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._configuration.internalValue = value.configuration;
      this._events.internalValue = value.events;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new BrowserMonitorScriptConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: BrowserMonitorScriptConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // events - computed: false, optional: true, required: false
  private _events = new BrowserMonitorScriptEventsOutputReference(this, "events");
  public get events() {
    return this._events;
  }
  public putEvents(value: BrowserMonitorScriptEvents) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }
}
export interface BrowserMonitorTagsTag {
  /**
  * The origin of the tag. Supported values are `AWS`, `AWS_GENERIC`, `AZURE`, `CLOUD_FOUNDRY`, `CONTEXTLESS`, `ENVIRONMENT`, `GOOGLE_CLOUD` and `KUBERNETES`.
  * 
  * Custom tags use the `CONTEXTLESS` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#context BrowserMonitor#context}
  */
  readonly context: string;
  /**
  * The key of the tag.
  * 
  * Custom tags have the tag value here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#key BrowserMonitor#key}
  */
  readonly key: string;
  /**
  * The source of the tag. Supported values are `USER`, `RULE_BASED` and `AUTO`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#source BrowserMonitor#source}
  */
  readonly source?: string;
  /**
  *  The value of the tag.
  * 
  * Not applicable to custom tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#value BrowserMonitor#value}
  */
  readonly value?: string;
}

export function browserMonitorTagsTagToTerraform(struct?: BrowserMonitorTagsTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function browserMonitorTagsTagToHclTerraform(struct?: BrowserMonitorTagsTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
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

export class BrowserMonitorTagsTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorTagsTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorTagsTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._key = undefined;
      this._source = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._key = value.key;
      this._source = value.source;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BrowserMonitorTagsTagList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorTagsTag[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorTagsTagOutputReference {
    return new BrowserMonitorTagsTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorTags {
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#tag BrowserMonitor#tag}
  */
  readonly tag?: BrowserMonitorTagsTag[] | cdktf.IResolvable;
}

export function browserMonitorTagsToTerraform(struct?: BrowserMonitorTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.listMapper(browserMonitorTagsTagToTerraform, true)(struct!.tag),
  }
}


export function browserMonitorTagsToHclTerraform(struct?: BrowserMonitorTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.listMapperHcl(browserMonitorTagsTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "set",
      storageClassType: "BrowserMonitorTagsTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tag.internalValue = value.tag;
    }
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new BrowserMonitorTagsTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: BrowserMonitorTagsTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

export class BrowserMonitorTagsList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorTags[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorTagsOutputReference {
    return new BrowserMonitorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor dynatrace_browser_monitor}
*/
export class BrowserMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_browser_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BrowserMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BrowserMonitor to import
  * @param importFromId The id of the existing BrowserMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BrowserMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_browser_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/browser_monitor dynatrace_browser_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BrowserMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: BrowserMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_browser_monitor',
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
    this._enabled = config.enabled;
    this._frequency = config.frequency;
    this._id = config.id;
    this._locations = config.locations;
    this._manuallyAssignedApps = config.manuallyAssignedApps;
    this._name = config.name;
    this._anomalyDetection.internalValue = config.anomalyDetection;
    this._keyPerformanceMetrics.internalValue = config.keyPerformanceMetrics;
    this._script.internalValue = config.script;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // locations - computed: false, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return cdktf.Fn.tolist(this.getListAttribute('locations'));
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }

  // manually_assigned_apps - computed: false, optional: true, required: false
  private _manuallyAssignedApps?: string[]; 
  public get manuallyAssignedApps() {
    return cdktf.Fn.tolist(this.getListAttribute('manually_assigned_apps'));
  }
  public set manuallyAssignedApps(value: string[]) {
    this._manuallyAssignedApps = value;
  }
  public resetManuallyAssignedApps() {
    this._manuallyAssignedApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manuallyAssignedAppsInput() {
    return this._manuallyAssignedApps;
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

  // anomaly_detection - computed: false, optional: true, required: false
  private _anomalyDetection = new BrowserMonitorAnomalyDetectionOutputReference(this, "anomaly_detection");
  public get anomalyDetection() {
    return this._anomalyDetection;
  }
  public putAnomalyDetection(value: BrowserMonitorAnomalyDetection) {
    this._anomalyDetection.internalValue = value;
  }
  public resetAnomalyDetection() {
    this._anomalyDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyDetectionInput() {
    return this._anomalyDetection.internalValue;
  }

  // key_performance_metrics - computed: false, optional: false, required: true
  private _keyPerformanceMetrics = new BrowserMonitorKeyPerformanceMetricsOutputReference(this, "key_performance_metrics");
  public get keyPerformanceMetrics() {
    return this._keyPerformanceMetrics;
  }
  public putKeyPerformanceMetrics(value: BrowserMonitorKeyPerformanceMetrics) {
    this._keyPerformanceMetrics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPerformanceMetricsInput() {
    return this._keyPerformanceMetrics.internalValue;
  }

  // script - computed: false, optional: true, required: false
  private _script = new BrowserMonitorScriptOutputReference(this, "script");
  public get script() {
    return this._script;
  }
  public putScript(value: BrowserMonitorScript) {
    this._script.internalValue = value;
  }
  public resetScript() {
    this._script.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new BrowserMonitorTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BrowserMonitorTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      frequency: cdktf.numberToTerraform(this._frequency),
      id: cdktf.stringToTerraform(this._id),
      locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locations),
      manually_assigned_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._manuallyAssignedApps),
      name: cdktf.stringToTerraform(this._name),
      anomaly_detection: browserMonitorAnomalyDetectionToTerraform(this._anomalyDetection.internalValue),
      key_performance_metrics: browserMonitorKeyPerformanceMetricsToTerraform(this._keyPerformanceMetrics.internalValue),
      script: browserMonitorScriptToTerraform(this._script.internalValue),
      tags: cdktf.listMapper(browserMonitorTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frequency: {
        value: cdktf.numberToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._locations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      manually_assigned_apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._manuallyAssignedApps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anomaly_detection: {
        value: browserMonitorAnomalyDetectionToHclTerraform(this._anomalyDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BrowserMonitorAnomalyDetectionList",
      },
      key_performance_metrics: {
        value: browserMonitorKeyPerformanceMetricsToHclTerraform(this._keyPerformanceMetrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BrowserMonitorKeyPerformanceMetricsList",
      },
      script: {
        value: browserMonitorScriptToHclTerraform(this._script.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BrowserMonitorScriptList",
      },
      tags: {
        value: cdktf.listMapperHcl(browserMonitorTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BrowserMonitorTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
