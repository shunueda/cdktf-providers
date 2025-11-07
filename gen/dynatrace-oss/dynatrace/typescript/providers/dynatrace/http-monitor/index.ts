// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HttpMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The monitor is enabled (`true`) or disabled (`false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#enabled HttpMonitor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The frequency of the monitor, in minutes.
  * 
  * You can use one of the following values: `5`, `10`, `15`, `30`, and `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#frequency HttpMonitor#frequency}
  */
  readonly frequency: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#id HttpMonitor#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#locations HttpMonitor#locations}
  */
  readonly locations?: string[];
  /**
  * A set of manually assigned applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#manually_assigned_apps HttpMonitor#manually_assigned_apps}
  */
  readonly manuallyAssignedApps?: string[];
  /**
  * The name of the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#name HttpMonitor#name}
  */
  readonly name: string;
  /**
  * No script block - handle requests via `dynatrace_http_monitor_script` resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#no_script HttpMonitor#no_script}
  */
  readonly noScript?: boolean | cdktf.IResolvable;
  /**
  * anomaly_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#anomaly_detection HttpMonitor#anomaly_detection}
  */
  readonly anomalyDetection?: HttpMonitorAnomalyDetection[] | cdktf.IResolvable;
  /**
  * script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#script HttpMonitor#script}
  */
  readonly script?: HttpMonitorScript;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#tags HttpMonitor#tags}
  */
  readonly tags?: HttpMonitorTags[] | cdktf.IResolvable;
}
export interface HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThreshold {
  /**
  * Specify the event to which an ACTION threshold applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#event_index HttpMonitor#event_index}
  */
  readonly eventIndex?: number;
  /**
  * Specify the request to which an ACTION threshold applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#request_index HttpMonitor#request_index}
  */
  readonly requestIndex?: number;
  /**
  * The type of the threshold: `TOTAL` (total loading time) or `ACTION` (action loading time)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#type HttpMonitor#type}
  */
  readonly type?: string;
  /**
  * Notify if monitor takes longer than *X* milliseconds to load
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#value_ms HttpMonitor#value_ms}
  */
  readonly valueMs: number;
}

export function httpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdToTerraform(struct?: HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThreshold | cdktf.IResolvable): any {
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


export function httpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdToHclTerraform(struct?: HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThreshold | cdktf.IResolvable): any {
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

export class HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThreshold | cdktf.IResolvable | undefined) {
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

export class HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdList extends cdktf.ComplexList {
  public internalValue? : HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThreshold[] | cdktf.IResolvable

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
  public get(index: number): HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdOutputReference {
    return new HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholds {
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#threshold HttpMonitor#threshold}
  */
  readonly threshold: HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThreshold[] | cdktf.IResolvable;
}

export function httpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsToTerraform(struct?: HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.listMapper(httpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdToTerraform, true)(struct!.threshold),
  }
}


export function httpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsToHclTerraform(struct?: HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.listMapperHcl(httpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdToHclTerraform, true)(struct!.threshold),
      isBlock: true,
      type: "set",
      storageClassType: "HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholds | cdktf.IResolvable | undefined) {
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
  private _threshold = new HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThresholdList(this, "threshold", true);
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsThreshold[] | cdktf.IResolvable) {
    this._threshold.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}

export class HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsList extends cdktf.ComplexList {
  public internalValue? : HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholds[] | cdktf.IResolvable

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
  public get(index: number): HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsOutputReference {
    return new HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpMonitorAnomalyDetectionLoadingTimeThresholds {
  /**
  * Performance threshold is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#enabled HttpMonitor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#thresholds HttpMonitor#thresholds}
  */
  readonly thresholds?: HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholds[] | cdktf.IResolvable;
}

export function httpMonitorAnomalyDetectionLoadingTimeThresholdsToTerraform(struct?: HttpMonitorAnomalyDetectionLoadingTimeThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    thresholds: cdktf.listMapper(httpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsToTerraform, true)(struct!.thresholds),
  }
}


export function httpMonitorAnomalyDetectionLoadingTimeThresholdsToHclTerraform(struct?: HttpMonitorAnomalyDetectionLoadingTimeThresholds | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsToHclTerraform, true)(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorAnomalyDetectionLoadingTimeThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpMonitorAnomalyDetectionLoadingTimeThresholds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpMonitorAnomalyDetectionLoadingTimeThresholds | cdktf.IResolvable | undefined) {
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
  private _thresholds = new HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholdsList(this, "thresholds", false);
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: HttpMonitorAnomalyDetectionLoadingTimeThresholdsThresholds[] | cdktf.IResolvable) {
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

export class HttpMonitorAnomalyDetectionLoadingTimeThresholdsList extends cdktf.ComplexList {
  public internalValue? : HttpMonitorAnomalyDetectionLoadingTimeThresholds[] | cdktf.IResolvable

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
  public get(index: number): HttpMonitorAnomalyDetectionLoadingTimeThresholdsOutputReference {
    return new HttpMonitorAnomalyDetectionLoadingTimeThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicy {
  /**
  * The number of consecutive fails to trigger an alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#consecutive_runs HttpMonitor#consecutive_runs}
  */
  readonly consecutiveRuns: number;
}

export function httpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyToTerraform(struct?: HttpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive_runs: cdktf.numberToTerraform(struct!.consecutiveRuns),
  }
}


export function httpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyToHclTerraform(struct?: HttpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicy | cdktf.IResolvable): any {
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

export class HttpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicy | cdktf.IResolvable | undefined) {
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

export class HttpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyList extends cdktf.ComplexList {
  public internalValue? : HttpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicy[] | cdktf.IResolvable

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
  public get(index: number): HttpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyOutputReference {
    return new HttpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicy {
  /**
  * The number of affected locations to trigger an alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#affected_locations HttpMonitor#affected_locations}
  */
  readonly affectedLocations: number;
  /**
  * The number of consecutive fails to trigger an alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#consecutive_runs HttpMonitor#consecutive_runs}
  */
  readonly consecutiveRuns: number;
}

export function httpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyToTerraform(struct?: HttpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affected_locations: cdktf.numberToTerraform(struct!.affectedLocations),
    consecutive_runs: cdktf.numberToTerraform(struct!.consecutiveRuns),
  }
}


export function httpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyToHclTerraform(struct?: HttpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicy | cdktf.IResolvable): any {
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

export class HttpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicy | cdktf.IResolvable | undefined) {
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

export class HttpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyList extends cdktf.ComplexList {
  public internalValue? : HttpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicy[] | cdktf.IResolvable

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
  public get(index: number): HttpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyOutputReference {
    return new HttpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpMonitorAnomalyDetectionOutageHandling {
  /**
  * (Field has overlap with `dynatrace_browser_monitor_outage` and `dynatrace_http_monitor_outage`) When enabled (`true`), generate a problem and send an alert when the monitor is unavailable at all configured locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#global_outage HttpMonitor#global_outage}
  */
  readonly globalOutage?: boolean | cdktf.IResolvable;
  /**
  * (Field has overlap with `dynatrace_browser_monitor_outage` and `dynatrace_http_monitor_outage`) When enabled (`true`), generate a problem and send an alert when the monitor is unavailable for one or more consecutive runs at any location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#local_outage HttpMonitor#local_outage}
  */
  readonly localOutage?: boolean | cdktf.IResolvable;
  /**
  * (Field has overlap with `dynatrace_browser_monitor_outage` and `dynatrace_http_monitor_outage`) Schedule retry if browser monitor execution results in a fail. For HTTP monitors this property is ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#retry_on_error HttpMonitor#retry_on_error}
  */
  readonly retryOnError?: boolean | cdktf.IResolvable;
  /**
  * global_outage_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#global_outage_policy HttpMonitor#global_outage_policy}
  */
  readonly globalOutagePolicy?: HttpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicy[] | cdktf.IResolvable;
  /**
  * local_outage_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#local_outage_policy HttpMonitor#local_outage_policy}
  */
  readonly localOutagePolicy?: HttpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicy[] | cdktf.IResolvable;
}

export function httpMonitorAnomalyDetectionOutageHandlingToTerraform(struct?: HttpMonitorAnomalyDetectionOutageHandling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_outage: cdktf.booleanToTerraform(struct!.globalOutage),
    local_outage: cdktf.booleanToTerraform(struct!.localOutage),
    retry_on_error: cdktf.booleanToTerraform(struct!.retryOnError),
    global_outage_policy: cdktf.listMapper(httpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyToTerraform, true)(struct!.globalOutagePolicy),
    local_outage_policy: cdktf.listMapper(httpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyToTerraform, true)(struct!.localOutagePolicy),
  }
}


export function httpMonitorAnomalyDetectionOutageHandlingToHclTerraform(struct?: HttpMonitorAnomalyDetectionOutageHandling | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyToHclTerraform, true)(struct!.globalOutagePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "HttpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyList",
    },
    local_outage_policy: {
      value: cdktf.listMapperHcl(httpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyToHclTerraform, true)(struct!.localOutagePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "HttpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorAnomalyDetectionOutageHandlingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpMonitorAnomalyDetectionOutageHandling | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpMonitorAnomalyDetectionOutageHandling | cdktf.IResolvable | undefined) {
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
  private _globalOutagePolicy = new HttpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicyList(this, "global_outage_policy", false);
  public get globalOutagePolicy() {
    return this._globalOutagePolicy;
  }
  public putGlobalOutagePolicy(value: HttpMonitorAnomalyDetectionOutageHandlingGlobalOutagePolicy[] | cdktf.IResolvable) {
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
  private _localOutagePolicy = new HttpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicyList(this, "local_outage_policy", false);
  public get localOutagePolicy() {
    return this._localOutagePolicy;
  }
  public putLocalOutagePolicy(value: HttpMonitorAnomalyDetectionOutageHandlingLocalOutagePolicy[] | cdktf.IResolvable) {
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

export class HttpMonitorAnomalyDetectionOutageHandlingList extends cdktf.ComplexList {
  public internalValue? : HttpMonitorAnomalyDetectionOutageHandling[] | cdktf.IResolvable

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
  public get(index: number): HttpMonitorAnomalyDetectionOutageHandlingOutputReference {
    return new HttpMonitorAnomalyDetectionOutageHandlingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpMonitorAnomalyDetection {
  /**
  * loading_time_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#loading_time_thresholds HttpMonitor#loading_time_thresholds}
  */
  readonly loadingTimeThresholds?: HttpMonitorAnomalyDetectionLoadingTimeThresholds[] | cdktf.IResolvable;
  /**
  * outage_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#outage_handling HttpMonitor#outage_handling}
  */
  readonly outageHandling?: HttpMonitorAnomalyDetectionOutageHandling[] | cdktf.IResolvable;
}

export function httpMonitorAnomalyDetectionToTerraform(struct?: HttpMonitorAnomalyDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    loading_time_thresholds: cdktf.listMapper(httpMonitorAnomalyDetectionLoadingTimeThresholdsToTerraform, true)(struct!.loadingTimeThresholds),
    outage_handling: cdktf.listMapper(httpMonitorAnomalyDetectionOutageHandlingToTerraform, true)(struct!.outageHandling),
  }
}


export function httpMonitorAnomalyDetectionToHclTerraform(struct?: HttpMonitorAnomalyDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    loading_time_thresholds: {
      value: cdktf.listMapperHcl(httpMonitorAnomalyDetectionLoadingTimeThresholdsToHclTerraform, true)(struct!.loadingTimeThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HttpMonitorAnomalyDetectionLoadingTimeThresholdsList",
    },
    outage_handling: {
      value: cdktf.listMapperHcl(httpMonitorAnomalyDetectionOutageHandlingToHclTerraform, true)(struct!.outageHandling),
      isBlock: true,
      type: "list",
      storageClassType: "HttpMonitorAnomalyDetectionOutageHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorAnomalyDetectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpMonitorAnomalyDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: HttpMonitorAnomalyDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loadingTimeThresholds.internalValue = undefined;
      this._outageHandling.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loadingTimeThresholds.internalValue = value.loadingTimeThresholds;
      this._outageHandling.internalValue = value.outageHandling;
    }
  }

  // loading_time_thresholds - computed: false, optional: true, required: false
  private _loadingTimeThresholds = new HttpMonitorAnomalyDetectionLoadingTimeThresholdsList(this, "loading_time_thresholds", false);
  public get loadingTimeThresholds() {
    return this._loadingTimeThresholds;
  }
  public putLoadingTimeThresholds(value: HttpMonitorAnomalyDetectionLoadingTimeThresholds[] | cdktf.IResolvable) {
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
  private _outageHandling = new HttpMonitorAnomalyDetectionOutageHandlingList(this, "outage_handling", false);
  public get outageHandling() {
    return this._outageHandling;
  }
  public putOutageHandling(value: HttpMonitorAnomalyDetectionOutageHandling[] | cdktf.IResolvable) {
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

export class HttpMonitorAnomalyDetectionList extends cdktf.ComplexList {
  public internalValue? : HttpMonitorAnomalyDetection[] | cdktf.IResolvable

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
  public get(index: number): HttpMonitorAnomalyDetectionOutputReference {
    return new HttpMonitorAnomalyDetectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpMonitorScriptRequestAuthentication {
  /**
  * The ID of the credentials within the Dynatrace Credentials Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#credentials HttpMonitor#credentials}
  */
  readonly credentials: string;
  /**
  * The KDC IP. Valid and required only if the type of authentication is `KERBEROS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#kdc_ip HttpMonitor#kdc_ip}
  */
  readonly kdcIp?: string;
  /**
  * The Realm Name. Valid and required only if the type of authentication is `KERBEROS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#realm_name HttpMonitor#realm_name}
  */
  readonly realmName?: string;
  /**
  * The type of authentication. Possible values are `BASIC_AUTHENTICATION`, `NTLM` and `KERBEROS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#type HttpMonitor#type}
  */
  readonly type: string;
}

export function httpMonitorScriptRequestAuthenticationToTerraform(struct?: HttpMonitorScriptRequestAuthenticationOutputReference | HttpMonitorScriptRequestAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
    kdc_ip: cdktf.stringToTerraform(struct!.kdcIp),
    realm_name: cdktf.stringToTerraform(struct!.realmName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httpMonitorScriptRequestAuthenticationToHclTerraform(struct?: HttpMonitorScriptRequestAuthenticationOutputReference | HttpMonitorScriptRequestAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kdc_ip: {
      value: cdktf.stringToHclTerraform(struct!.kdcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm_name: {
      value: cdktf.stringToHclTerraform(struct!.realmName),
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

export class HttpMonitorScriptRequestAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpMonitorScriptRequestAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._kdcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdcIp = this._kdcIp;
    }
    if (this._realmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.realmName = this._realmName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpMonitorScriptRequestAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentials = undefined;
      this._kdcIp = undefined;
      this._realmName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentials = value.credentials;
      this._kdcIp = value.kdcIp;
      this._realmName = value.realmName;
      this._type = value.type;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // kdc_ip - computed: false, optional: true, required: false
  private _kdcIp?: string; 
  public get kdcIp() {
    return this.getStringAttribute('kdc_ip');
  }
  public set kdcIp(value: string) {
    this._kdcIp = value;
  }
  public resetKdcIp() {
    this._kdcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcIpInput() {
    return this._kdcIp;
  }

  // realm_name - computed: false, optional: true, required: false
  private _realmName?: string; 
  public get realmName() {
    return this.getStringAttribute('realm_name');
  }
  public set realmName(value: string) {
    this._realmName = value;
  }
  public resetRealmName() {
    this._realmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmNameInput() {
    return this._realmName;
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
export interface HttpMonitorScriptRequestConfigurationHeadersHeader {
  /**
  * The key of the header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#name HttpMonitor#name}
  */
  readonly name: string;
  /**
  * The value of the header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#value HttpMonitor#value}
  */
  readonly value: string;
}

export function httpMonitorScriptRequestConfigurationHeadersHeaderToTerraform(struct?: HttpMonitorScriptRequestConfigurationHeadersHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function httpMonitorScriptRequestConfigurationHeadersHeaderToHclTerraform(struct?: HttpMonitorScriptRequestConfigurationHeadersHeader | cdktf.IResolvable): any {
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

export class HttpMonitorScriptRequestConfigurationHeadersHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpMonitorScriptRequestConfigurationHeadersHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpMonitorScriptRequestConfigurationHeadersHeader | cdktf.IResolvable | undefined) {
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

export class HttpMonitorScriptRequestConfigurationHeadersHeaderList extends cdktf.ComplexList {
  public internalValue? : HttpMonitorScriptRequestConfigurationHeadersHeader[] | cdktf.IResolvable

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
  public get(index: number): HttpMonitorScriptRequestConfigurationHeadersHeaderOutputReference {
    return new HttpMonitorScriptRequestConfigurationHeadersHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpMonitorScriptRequestConfigurationHeaders {
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#header HttpMonitor#header}
  */
  readonly header: HttpMonitorScriptRequestConfigurationHeadersHeader[] | cdktf.IResolvable;
}

export function httpMonitorScriptRequestConfigurationHeadersToTerraform(struct?: HttpMonitorScriptRequestConfigurationHeadersOutputReference | HttpMonitorScriptRequestConfigurationHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.listMapper(httpMonitorScriptRequestConfigurationHeadersHeaderToTerraform, true)(struct!.header),
  }
}


export function httpMonitorScriptRequestConfigurationHeadersToHclTerraform(struct?: HttpMonitorScriptRequestConfigurationHeadersOutputReference | HttpMonitorScriptRequestConfigurationHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.listMapperHcl(httpMonitorScriptRequestConfigurationHeadersHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "set",
      storageClassType: "HttpMonitorScriptRequestConfigurationHeadersHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorScriptRequestConfigurationHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpMonitorScriptRequestConfigurationHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpMonitorScriptRequestConfigurationHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._header.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._header.internalValue = value.header;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header = new HttpMonitorScriptRequestConfigurationHeadersHeaderList(this, "header", true);
  public get header() {
    return this._header;
  }
  public putHeader(value: HttpMonitorScriptRequestConfigurationHeadersHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}
export interface HttpMonitorScriptRequestConfiguration {
  /**
  * If set to `false`, then the monitor fails with invalid SSL certificates.
  * 
  * If not set, the `false` option is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#accept_any_certificate HttpMonitor#accept_any_certificate}
  */
  readonly acceptAnyCertificate?: boolean | cdktf.IResolvable;
  /**
  * The client certificate, if applicable - eg. CREDENTIALS_VAULT-XXXXXXXXXXXXXXXX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#client_certificate HttpMonitor#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * If set to `false`, redirects are reported as successful requests with response code 3xx.
  * 
  * If not set, the `false` option is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#follow_redirects HttpMonitor#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Option not to store and display request and response bodies and header values in execution details, `true` or `false`. If not set, `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#sensitive_data HttpMonitor#sensitive_data}
  */
  readonly sensitiveData?: boolean | cdktf.IResolvable;
  /**
  * The User agent of the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#user_agent HttpMonitor#user_agent}
  */
  readonly userAgent?: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#headers HttpMonitor#headers}
  */
  readonly headers?: HttpMonitorScriptRequestConfigurationHeaders;
}

export function httpMonitorScriptRequestConfigurationToTerraform(struct?: HttpMonitorScriptRequestConfigurationOutputReference | HttpMonitorScriptRequestConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_any_certificate: cdktf.booleanToTerraform(struct!.acceptAnyCertificate),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    sensitive_data: cdktf.booleanToTerraform(struct!.sensitiveData),
    user_agent: cdktf.stringToTerraform(struct!.userAgent),
    headers: httpMonitorScriptRequestConfigurationHeadersToTerraform(struct!.headers),
  }
}


export function httpMonitorScriptRequestConfigurationToHclTerraform(struct?: HttpMonitorScriptRequestConfigurationOutputReference | HttpMonitorScriptRequestConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_any_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.acceptAnyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensitive_data: {
      value: cdktf.booleanToHclTerraform(struct!.sensitiveData),
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
    headers: {
      value: httpMonitorScriptRequestConfigurationHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpMonitorScriptRequestConfigurationHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorScriptRequestConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpMonitorScriptRequestConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptAnyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptAnyCertificate = this._acceptAnyCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._sensitiveData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveData = this._sensitiveData;
    }
    if (this._userAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgent = this._userAgent;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpMonitorScriptRequestConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptAnyCertificate = undefined;
      this._clientCertificate = undefined;
      this._followRedirects = undefined;
      this._sensitiveData = undefined;
      this._userAgent = undefined;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptAnyCertificate = value.acceptAnyCertificate;
      this._clientCertificate = value.clientCertificate;
      this._followRedirects = value.followRedirects;
      this._sensitiveData = value.sensitiveData;
      this._userAgent = value.userAgent;
      this._headers.internalValue = value.headers;
    }
  }

  // accept_any_certificate - computed: false, optional: true, required: false
  private _acceptAnyCertificate?: boolean | cdktf.IResolvable; 
  public get acceptAnyCertificate() {
    return this.getBooleanAttribute('accept_any_certificate');
  }
  public set acceptAnyCertificate(value: boolean | cdktf.IResolvable) {
    this._acceptAnyCertificate = value;
  }
  public resetAcceptAnyCertificate() {
    this._acceptAnyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptAnyCertificateInput() {
    return this._acceptAnyCertificate;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // sensitive_data - computed: false, optional: true, required: false
  private _sensitiveData?: boolean | cdktf.IResolvable; 
  public get sensitiveData() {
    return this.getBooleanAttribute('sensitive_data');
  }
  public set sensitiveData(value: boolean | cdktf.IResolvable) {
    this._sensitiveData = value;
  }
  public resetSensitiveData() {
    this._sensitiveData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataInput() {
    return this._sensitiveData;
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

  // headers - computed: false, optional: true, required: false
  private _headers = new HttpMonitorScriptRequestConfigurationHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpMonitorScriptRequestConfigurationHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface HttpMonitorScriptRequestValidationRule {
  /**
  *  The validation condition. `true` means validation succeeds if the specified content/element is found. `false` means validation fails if the specified content/element is found. Always specify `false` for `certificateExpiryDateConstraint` to fail the monitor if SSL certificate expiry is within the specified number of days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#pass_if_found HttpMonitor#pass_if_found}
  */
  readonly passIfFound?: boolean | cdktf.IResolvable;
  /**
  * The type of the rule. Possible values are `patternConstraint`, `regexConstraint`, `httpStatusesList` and `certificateExpiryDateConstraint`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#type HttpMonitor#type}
  */
  readonly type: string;
  /**
  * The content to look for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#value HttpMonitor#value}
  */
  readonly value: string;
}

export function httpMonitorScriptRequestValidationRuleToTerraform(struct?: HttpMonitorScriptRequestValidationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass_if_found: cdktf.booleanToTerraform(struct!.passIfFound),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function httpMonitorScriptRequestValidationRuleToHclTerraform(struct?: HttpMonitorScriptRequestValidationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass_if_found: {
      value: cdktf.booleanToHclTerraform(struct!.passIfFound),
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

export class HttpMonitorScriptRequestValidationRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpMonitorScriptRequestValidationRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passIfFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.passIfFound = this._passIfFound;
    }
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

  public set internalValue(value: HttpMonitorScriptRequestValidationRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passIfFound = undefined;
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
      this._passIfFound = value.passIfFound;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // pass_if_found - computed: false, optional: true, required: false
  private _passIfFound?: boolean | cdktf.IResolvable; 
  public get passIfFound() {
    return this.getBooleanAttribute('pass_if_found');
  }
  public set passIfFound(value: boolean | cdktf.IResolvable) {
    this._passIfFound = value;
  }
  public resetPassIfFound() {
    this._passIfFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passIfFoundInput() {
    return this._passIfFound;
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

export class HttpMonitorScriptRequestValidationRuleList extends cdktf.ComplexList {
  public internalValue? : HttpMonitorScriptRequestValidationRule[] | cdktf.IResolvable

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
  public get(index: number): HttpMonitorScriptRequestValidationRuleOutputReference {
    return new HttpMonitorScriptRequestValidationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpMonitorScriptRequestValidation {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#rule HttpMonitor#rule}
  */
  readonly rule: HttpMonitorScriptRequestValidationRule[] | cdktf.IResolvable;
}

export function httpMonitorScriptRequestValidationToTerraform(struct?: HttpMonitorScriptRequestValidationOutputReference | HttpMonitorScriptRequestValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(httpMonitorScriptRequestValidationRuleToTerraform, true)(struct!.rule),
  }
}


export function httpMonitorScriptRequestValidationToHclTerraform(struct?: HttpMonitorScriptRequestValidationOutputReference | HttpMonitorScriptRequestValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(httpMonitorScriptRequestValidationRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "HttpMonitorScriptRequestValidationRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorScriptRequestValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpMonitorScriptRequestValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpMonitorScriptRequestValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new HttpMonitorScriptRequestValidationRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: HttpMonitorScriptRequestValidationRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface HttpMonitorScriptRequest {
  /**
  * The body of the HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#body HttpMonitor#body}
  */
  readonly body?: string;
  /**
  * A short description of the event to appear in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#description HttpMonitor#description}
  */
  readonly description?: string;
  /**
  * The HTTP method of the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#method HttpMonitor#method}
  */
  readonly method: string;
  /**
  * Javascript code to execute after sending the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#post_processing HttpMonitor#post_processing}
  */
  readonly postProcessing?: string;
  /**
  * Javascript code to execute before sending the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#pre_processing HttpMonitor#pre_processing}
  */
  readonly preProcessing?: string;
  /**
  * Adapt request timeout option - the maximum time this request is allowed to consume. Keep in mind the maximum timeout of the complete monitor is 60 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#request_timeout HttpMonitor#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * The URL to check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#url HttpMonitor#url}
  */
  readonly url: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#authentication HttpMonitor#authentication}
  */
  readonly authentication?: HttpMonitorScriptRequestAuthentication;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#configuration HttpMonitor#configuration}
  */
  readonly configuration?: HttpMonitorScriptRequestConfiguration;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#validation HttpMonitor#validation}
  */
  readonly validation?: HttpMonitorScriptRequestValidation;
}

export function httpMonitorScriptRequestToTerraform(struct?: HttpMonitorScriptRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    description: cdktf.stringToTerraform(struct!.description),
    method: cdktf.stringToTerraform(struct!.method),
    post_processing: cdktf.stringToTerraform(struct!.postProcessing),
    pre_processing: cdktf.stringToTerraform(struct!.preProcessing),
    request_timeout: cdktf.numberToTerraform(struct!.requestTimeout),
    url: cdktf.stringToTerraform(struct!.url),
    authentication: httpMonitorScriptRequestAuthenticationToTerraform(struct!.authentication),
    configuration: httpMonitorScriptRequestConfigurationToTerraform(struct!.configuration),
    validation: httpMonitorScriptRequestValidationToTerraform(struct!.validation),
  }
}


export function httpMonitorScriptRequestToHclTerraform(struct?: HttpMonitorScriptRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_processing: {
      value: cdktf.stringToHclTerraform(struct!.postProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_processing: {
      value: cdktf.stringToHclTerraform(struct!.preProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: httpMonitorScriptRequestAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "HttpMonitorScriptRequestAuthenticationList",
    },
    configuration: {
      value: httpMonitorScriptRequestConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "HttpMonitorScriptRequestConfigurationList",
    },
    validation: {
      value: httpMonitorScriptRequestValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "HttpMonitorScriptRequestValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorScriptRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpMonitorScriptRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._postProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.postProcessing = this._postProcessing;
    }
    if (this._preProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.preProcessing = this._preProcessing;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpMonitorScriptRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._description = undefined;
      this._method = undefined;
      this._postProcessing = undefined;
      this._preProcessing = undefined;
      this._requestTimeout = undefined;
      this._url = undefined;
      this._authentication.internalValue = undefined;
      this._configuration.internalValue = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._description = value.description;
      this._method = value.method;
      this._postProcessing = value.postProcessing;
      this._preProcessing = value.preProcessing;
      this._requestTimeout = value.requestTimeout;
      this._url = value.url;
      this._authentication.internalValue = value.authentication;
      this._configuration.internalValue = value.configuration;
      this._validation.internalValue = value.validation;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
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

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // post_processing - computed: false, optional: true, required: false
  private _postProcessing?: string; 
  public get postProcessing() {
    return this.getStringAttribute('post_processing');
  }
  public set postProcessing(value: string) {
    this._postProcessing = value;
  }
  public resetPostProcessing() {
    this._postProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postProcessingInput() {
    return this._postProcessing;
  }

  // pre_processing - computed: false, optional: true, required: false
  private _preProcessing?: string; 
  public get preProcessing() {
    return this.getStringAttribute('pre_processing');
  }
  public set preProcessing(value: string) {
    this._preProcessing = value;
  }
  public resetPreProcessing() {
    this._preProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preProcessingInput() {
    return this._preProcessing;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
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
  private _authentication = new HttpMonitorScriptRequestAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: HttpMonitorScriptRequestAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new HttpMonitorScriptRequestConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: HttpMonitorScriptRequestConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new HttpMonitorScriptRequestValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: HttpMonitorScriptRequestValidation) {
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

export class HttpMonitorScriptRequestList extends cdktf.ComplexList {
  public internalValue? : HttpMonitorScriptRequest[] | cdktf.IResolvable

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
  public get(index: number): HttpMonitorScriptRequestOutputReference {
    return new HttpMonitorScriptRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpMonitorScript {
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#request HttpMonitor#request}
  */
  readonly request: HttpMonitorScriptRequest[] | cdktf.IResolvable;
}

export function httpMonitorScriptToTerraform(struct?: HttpMonitorScriptOutputReference | HttpMonitorScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request: cdktf.listMapper(httpMonitorScriptRequestToTerraform, true)(struct!.request),
  }
}


export function httpMonitorScriptToHclTerraform(struct?: HttpMonitorScriptOutputReference | HttpMonitorScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request: {
      value: cdktf.listMapperHcl(httpMonitorScriptRequestToHclTerraform, true)(struct!.request),
      isBlock: true,
      type: "list",
      storageClassType: "HttpMonitorScriptRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpMonitorScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpMonitorScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._request.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._request.internalValue = value.request;
    }
  }

  // request - computed: false, optional: false, required: true
  private _request = new HttpMonitorScriptRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
  public putRequest(value: HttpMonitorScriptRequest[] | cdktf.IResolvable) {
    this._request.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }
}
export interface HttpMonitorTagsTag {
  /**
  * The origin of the tag. Supported values are `AWS`, `AWS_GENERIC`, `AZURE`, `CLOUD_FOUNDRY`, `CONTEXTLESS`, `ENVIRONMENT`, `GOOGLE_CLOUD` and `KUBERNETES`.
  * 
  * Custom tags use the `CONTEXTLESS` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#context HttpMonitor#context}
  */
  readonly context: string;
  /**
  * The key of the tag.
  * 
  * Custom tags have the tag value here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#key HttpMonitor#key}
  */
  readonly key: string;
  /**
  * The source of the tag. Supported values are `USER`, `RULE_BASED` and `AUTO`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#source HttpMonitor#source}
  */
  readonly source?: string;
  /**
  *  The value of the tag.
  * 
  * Not applicable to custom tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#value HttpMonitor#value}
  */
  readonly value?: string;
}

export function httpMonitorTagsTagToTerraform(struct?: HttpMonitorTagsTag | cdktf.IResolvable): any {
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


export function httpMonitorTagsTagToHclTerraform(struct?: HttpMonitorTagsTag | cdktf.IResolvable): any {
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

export class HttpMonitorTagsTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpMonitorTagsTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpMonitorTagsTag | cdktf.IResolvable | undefined) {
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

export class HttpMonitorTagsTagList extends cdktf.ComplexList {
  public internalValue? : HttpMonitorTagsTag[] | cdktf.IResolvable

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
  public get(index: number): HttpMonitorTagsTagOutputReference {
    return new HttpMonitorTagsTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpMonitorTags {
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#tag HttpMonitor#tag}
  */
  readonly tag?: HttpMonitorTagsTag[] | cdktf.IResolvable;
}

export function httpMonitorTagsToTerraform(struct?: HttpMonitorTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.listMapper(httpMonitorTagsTagToTerraform, true)(struct!.tag),
  }
}


export function httpMonitorTagsToHclTerraform(struct?: HttpMonitorTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.listMapperHcl(httpMonitorTagsTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "set",
      storageClassType: "HttpMonitorTagsTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpMonitorTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpMonitorTags | cdktf.IResolvable | undefined) {
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
  private _tag = new HttpMonitorTagsTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: HttpMonitorTagsTag[] | cdktf.IResolvable) {
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

export class HttpMonitorTagsList extends cdktf.ComplexList {
  public internalValue? : HttpMonitorTags[] | cdktf.IResolvable

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
  public get(index: number): HttpMonitorTagsOutputReference {
    return new HttpMonitorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor dynatrace_http_monitor}
*/
export class HttpMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_http_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HttpMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HttpMonitor to import
  * @param importFromId The id of the existing HttpMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HttpMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_http_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor dynatrace_http_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HttpMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: HttpMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_http_monitor',
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
    this._enabled = config.enabled;
    this._frequency = config.frequency;
    this._id = config.id;
    this._locations = config.locations;
    this._manuallyAssignedApps = config.manuallyAssignedApps;
    this._name = config.name;
    this._noScript = config.noScript;
    this._anomalyDetection.internalValue = config.anomalyDetection;
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

  // no_script - computed: false, optional: true, required: false
  private _noScript?: boolean | cdktf.IResolvable; 
  public get noScript() {
    return this.getBooleanAttribute('no_script');
  }
  public set noScript(value: boolean | cdktf.IResolvable) {
    this._noScript = value;
  }
  public resetNoScript() {
    this._noScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noScriptInput() {
    return this._noScript;
  }

  // anomaly_detection - computed: false, optional: true, required: false
  private _anomalyDetection = new HttpMonitorAnomalyDetectionList(this, "anomaly_detection", false);
  public get anomalyDetection() {
    return this._anomalyDetection;
  }
  public putAnomalyDetection(value: HttpMonitorAnomalyDetection[] | cdktf.IResolvable) {
    this._anomalyDetection.internalValue = value;
  }
  public resetAnomalyDetection() {
    this._anomalyDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyDetectionInput() {
    return this._anomalyDetection.internalValue;
  }

  // script - computed: false, optional: true, required: false
  private _script = new HttpMonitorScriptOutputReference(this, "script");
  public get script() {
    return this._script;
  }
  public putScript(value: HttpMonitorScript) {
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
  private _tags = new HttpMonitorTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: HttpMonitorTags[] | cdktf.IResolvable) {
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
      no_script: cdktf.booleanToTerraform(this._noScript),
      anomaly_detection: cdktf.listMapper(httpMonitorAnomalyDetectionToTerraform, true)(this._anomalyDetection.internalValue),
      script: httpMonitorScriptToTerraform(this._script.internalValue),
      tags: cdktf.listMapper(httpMonitorTagsToTerraform, true)(this._tags.internalValue),
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
      no_script: {
        value: cdktf.booleanToHclTerraform(this._noScript),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      anomaly_detection: {
        value: cdktf.listMapperHcl(httpMonitorAnomalyDetectionToHclTerraform, true)(this._anomalyDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HttpMonitorAnomalyDetectionList",
      },
      script: {
        value: httpMonitorScriptToHclTerraform(this._script.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HttpMonitorScriptList",
      },
      tags: {
        value: cdktf.listMapperHcl(httpMonitorTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HttpMonitorTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
