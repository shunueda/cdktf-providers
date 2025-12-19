// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#description NetworkMonitor#description}
  */
  readonly description?: string;
  /**
  * If true, the monitor is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#enabled NetworkMonitor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Frequency of the monitor, in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#frequency_min NetworkMonitor#frequency_min}
  */
  readonly frequencyMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#id NetworkMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The locations to which the monitor is assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#locations NetworkMonitor#locations}
  */
  readonly locations: string[];
  /**
  * Name of the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#name NetworkMonitor#name}
  */
  readonly name: string;
  /**
  * Type of the monitor, possible values: `MULTI_PROTOCOL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#type NetworkMonitor#type}
  */
  readonly type: string;
  /**
  * outage_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#outage_handling NetworkMonitor#outage_handling}
  */
  readonly outageHandling?: NetworkMonitorOutageHandling;
  /**
  * performance_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#performance_thresholds NetworkMonitor#performance_thresholds}
  */
  readonly performanceThresholds?: NetworkMonitorPerformanceThresholds;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#steps NetworkMonitor#steps}
  */
  readonly steps: NetworkMonitorSteps[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#tags NetworkMonitor#tags}
  */
  readonly tags?: NetworkMonitorTags[] | cdktf.IResolvable;
}
export interface NetworkMonitorOutageHandling {
  /**
  * Number of consecutive failures for all locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#global_consecutive_outage_count_threshold NetworkMonitor#global_consecutive_outage_count_threshold}
  */
  readonly globalConsecutiveOutageCountThreshold?: number;
  /**
  * Generate a problem and send an alert when the monitor is unavailable at all configured locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#global_outages NetworkMonitor#global_outages}
  */
  readonly globalOutages?: boolean | cdktf.IResolvable;
  /**
  * Number of consecutive failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#local_consecutive_outage_count_threshold NetworkMonitor#local_consecutive_outage_count_threshold}
  */
  readonly localConsecutiveOutageCountThreshold?: number;
  /**
  * Number of failing locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#local_location_outage_count_threshold NetworkMonitor#local_location_outage_count_threshold}
  */
  readonly localLocationOutageCountThreshold?: number;
  /**
  * Generate a problem and send an alert when the monitor is unavailable for one or more consecutive runs at any location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#local_outages NetworkMonitor#local_outages}
  */
  readonly localOutages?: boolean | cdktf.IResolvable;
}

export function networkMonitorOutageHandlingToTerraform(struct?: NetworkMonitorOutageHandlingOutputReference | NetworkMonitorOutageHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_consecutive_outage_count_threshold: cdktf.numberToTerraform(struct!.globalConsecutiveOutageCountThreshold),
    global_outages: cdktf.booleanToTerraform(struct!.globalOutages),
    local_consecutive_outage_count_threshold: cdktf.numberToTerraform(struct!.localConsecutiveOutageCountThreshold),
    local_location_outage_count_threshold: cdktf.numberToTerraform(struct!.localLocationOutageCountThreshold),
    local_outages: cdktf.booleanToTerraform(struct!.localOutages),
  }
}


export function networkMonitorOutageHandlingToHclTerraform(struct?: NetworkMonitorOutageHandlingOutputReference | NetworkMonitorOutageHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_consecutive_outage_count_threshold: {
      value: cdktf.numberToHclTerraform(struct!.globalConsecutiveOutageCountThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    global_outages: {
      value: cdktf.booleanToHclTerraform(struct!.globalOutages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_consecutive_outage_count_threshold: {
      value: cdktf.numberToHclTerraform(struct!.localConsecutiveOutageCountThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_location_outage_count_threshold: {
      value: cdktf.numberToHclTerraform(struct!.localLocationOutageCountThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_outages: {
      value: cdktf.booleanToHclTerraform(struct!.localOutages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkMonitorOutageHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkMonitorOutageHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalConsecutiveOutageCountThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalConsecutiveOutageCountThreshold = this._globalConsecutiveOutageCountThreshold;
    }
    if (this._globalOutages !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalOutages = this._globalOutages;
    }
    if (this._localConsecutiveOutageCountThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.localConsecutiveOutageCountThreshold = this._localConsecutiveOutageCountThreshold;
    }
    if (this._localLocationOutageCountThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.localLocationOutageCountThreshold = this._localLocationOutageCountThreshold;
    }
    if (this._localOutages !== undefined) {
      hasAnyValues = true;
      internalValueResult.localOutages = this._localOutages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkMonitorOutageHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalConsecutiveOutageCountThreshold = undefined;
      this._globalOutages = undefined;
      this._localConsecutiveOutageCountThreshold = undefined;
      this._localLocationOutageCountThreshold = undefined;
      this._localOutages = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalConsecutiveOutageCountThreshold = value.globalConsecutiveOutageCountThreshold;
      this._globalOutages = value.globalOutages;
      this._localConsecutiveOutageCountThreshold = value.localConsecutiveOutageCountThreshold;
      this._localLocationOutageCountThreshold = value.localLocationOutageCountThreshold;
      this._localOutages = value.localOutages;
    }
  }

  // global_consecutive_outage_count_threshold - computed: false, optional: true, required: false
  private _globalConsecutiveOutageCountThreshold?: number; 
  public get globalConsecutiveOutageCountThreshold() {
    return this.getNumberAttribute('global_consecutive_outage_count_threshold');
  }
  public set globalConsecutiveOutageCountThreshold(value: number) {
    this._globalConsecutiveOutageCountThreshold = value;
  }
  public resetGlobalConsecutiveOutageCountThreshold() {
    this._globalConsecutiveOutageCountThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalConsecutiveOutageCountThresholdInput() {
    return this._globalConsecutiveOutageCountThreshold;
  }

  // global_outages - computed: false, optional: true, required: false
  private _globalOutages?: boolean | cdktf.IResolvable; 
  public get globalOutages() {
    return this.getBooleanAttribute('global_outages');
  }
  public set globalOutages(value: boolean | cdktf.IResolvable) {
    this._globalOutages = value;
  }
  public resetGlobalOutages() {
    this._globalOutages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalOutagesInput() {
    return this._globalOutages;
  }

  // local_consecutive_outage_count_threshold - computed: false, optional: true, required: false
  private _localConsecutiveOutageCountThreshold?: number; 
  public get localConsecutiveOutageCountThreshold() {
    return this.getNumberAttribute('local_consecutive_outage_count_threshold');
  }
  public set localConsecutiveOutageCountThreshold(value: number) {
    this._localConsecutiveOutageCountThreshold = value;
  }
  public resetLocalConsecutiveOutageCountThreshold() {
    this._localConsecutiveOutageCountThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localConsecutiveOutageCountThresholdInput() {
    return this._localConsecutiveOutageCountThreshold;
  }

  // local_location_outage_count_threshold - computed: false, optional: true, required: false
  private _localLocationOutageCountThreshold?: number; 
  public get localLocationOutageCountThreshold() {
    return this.getNumberAttribute('local_location_outage_count_threshold');
  }
  public set localLocationOutageCountThreshold(value: number) {
    this._localLocationOutageCountThreshold = value;
  }
  public resetLocalLocationOutageCountThreshold() {
    this._localLocationOutageCountThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLocationOutageCountThresholdInput() {
    return this._localLocationOutageCountThreshold;
  }

  // local_outages - computed: false, optional: true, required: false
  private _localOutages?: boolean | cdktf.IResolvable; 
  public get localOutages() {
    return this.getBooleanAttribute('local_outages');
  }
  public set localOutages(value: boolean | cdktf.IResolvable) {
    this._localOutages = value;
  }
  public resetLocalOutages() {
    this._localOutages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOutagesInput() {
    return this._localOutages;
  }
}
export interface NetworkMonitorPerformanceThresholdsThresholdsThreshold {
  /**
  * Aggregation type, possible values: `AVG`, `MAX`, `MIN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#aggregation NetworkMonitor#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Number of most recent non-violating request executions that closes the problem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#dealerting_samples NetworkMonitor#dealerting_samples}
  */
  readonly dealertingSamples?: number;
  /**
  * Number of request executions in analyzed sliding window (sliding window size)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#samples NetworkMonitor#samples}
  */
  readonly samples?: number;
  /**
  * Specify the step's index to which a threshold applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#step_index NetworkMonitor#step_index}
  */
  readonly stepIndex?: number;
  /**
  * Notify if monitor request takes longer than X milliseconds to execute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#threshold NetworkMonitor#threshold}
  */
  readonly threshold?: number;
  /**
  * Number of violating request executions in analyzed sliding window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#violating_samples NetworkMonitor#violating_samples}
  */
  readonly violatingSamples?: number;
}

export function networkMonitorPerformanceThresholdsThresholdsThresholdToTerraform(struct?: NetworkMonitorPerformanceThresholdsThresholdsThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    dealerting_samples: cdktf.numberToTerraform(struct!.dealertingSamples),
    samples: cdktf.numberToTerraform(struct!.samples),
    step_index: cdktf.numberToTerraform(struct!.stepIndex),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    violating_samples: cdktf.numberToTerraform(struct!.violatingSamples),
  }
}


export function networkMonitorPerformanceThresholdsThresholdsThresholdToHclTerraform(struct?: NetworkMonitorPerformanceThresholdsThresholdsThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dealerting_samples: {
      value: cdktf.numberToHclTerraform(struct!.dealertingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    samples: {
      value: cdktf.numberToHclTerraform(struct!.samples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    step_index: {
      value: cdktf.numberToHclTerraform(struct!.stepIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violating_samples: {
      value: cdktf.numberToHclTerraform(struct!.violatingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkMonitorPerformanceThresholdsThresholdsThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkMonitorPerformanceThresholdsThresholdsThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._dealertingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingSamples = this._dealertingSamples;
    }
    if (this._samples !== undefined) {
      hasAnyValues = true;
      internalValueResult.samples = this._samples;
    }
    if (this._stepIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepIndex = this._stepIndex;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._violatingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingSamples = this._violatingSamples;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkMonitorPerformanceThresholdsThresholdsThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._dealertingSamples = undefined;
      this._samples = undefined;
      this._stepIndex = undefined;
      this._threshold = undefined;
      this._violatingSamples = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._dealertingSamples = value.dealertingSamples;
      this._samples = value.samples;
      this._stepIndex = value.stepIndex;
      this._threshold = value.threshold;
      this._violatingSamples = value.violatingSamples;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // dealerting_samples - computed: false, optional: true, required: false
  private _dealertingSamples?: number; 
  public get dealertingSamples() {
    return this.getNumberAttribute('dealerting_samples');
  }
  public set dealertingSamples(value: number) {
    this._dealertingSamples = value;
  }
  public resetDealertingSamples() {
    this._dealertingSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingSamplesInput() {
    return this._dealertingSamples;
  }

  // samples - computed: false, optional: true, required: false
  private _samples?: number; 
  public get samples() {
    return this.getNumberAttribute('samples');
  }
  public set samples(value: number) {
    this._samples = value;
  }
  public resetSamples() {
    this._samples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplesInput() {
    return this._samples;
  }

  // step_index - computed: false, optional: true, required: false
  private _stepIndex?: number; 
  public get stepIndex() {
    return this.getNumberAttribute('step_index');
  }
  public set stepIndex(value: number) {
    this._stepIndex = value;
  }
  public resetStepIndex() {
    this._stepIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepIndexInput() {
    return this._stepIndex;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // violating_samples - computed: false, optional: true, required: false
  private _violatingSamples?: number; 
  public get violatingSamples() {
    return this.getNumberAttribute('violating_samples');
  }
  public set violatingSamples(value: number) {
    this._violatingSamples = value;
  }
  public resetViolatingSamples() {
    this._violatingSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingSamplesInput() {
    return this._violatingSamples;
  }
}

export class NetworkMonitorPerformanceThresholdsThresholdsThresholdList extends cdktf.ComplexList {
  public internalValue? : NetworkMonitorPerformanceThresholdsThresholdsThreshold[] | cdktf.IResolvable

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
  public get(index: number): NetworkMonitorPerformanceThresholdsThresholdsThresholdOutputReference {
    return new NetworkMonitorPerformanceThresholdsThresholdsThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkMonitorPerformanceThresholdsThresholds {
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#threshold NetworkMonitor#threshold}
  */
  readonly threshold?: NetworkMonitorPerformanceThresholdsThresholdsThreshold[] | cdktf.IResolvable;
}

export function networkMonitorPerformanceThresholdsThresholdsToTerraform(struct?: NetworkMonitorPerformanceThresholdsThresholdsOutputReference | NetworkMonitorPerformanceThresholdsThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.listMapper(networkMonitorPerformanceThresholdsThresholdsThresholdToTerraform, true)(struct!.threshold),
  }
}


export function networkMonitorPerformanceThresholdsThresholdsToHclTerraform(struct?: NetworkMonitorPerformanceThresholdsThresholdsOutputReference | NetworkMonitorPerformanceThresholdsThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.listMapperHcl(networkMonitorPerformanceThresholdsThresholdsThresholdToHclTerraform, true)(struct!.threshold),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkMonitorPerformanceThresholdsThresholdsThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkMonitorPerformanceThresholdsThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkMonitorPerformanceThresholdsThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkMonitorPerformanceThresholdsThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold.internalValue = value.threshold;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold = new NetworkMonitorPerformanceThresholdsThresholdsThresholdList(this, "threshold", true);
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: NetworkMonitorPerformanceThresholdsThresholdsThreshold[] | cdktf.IResolvable) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}
export interface NetworkMonitorPerformanceThresholds {
  /**
  * Performance threshold is enabled (true) or disabled (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#enabled NetworkMonitor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#thresholds NetworkMonitor#thresholds}
  */
  readonly thresholds?: NetworkMonitorPerformanceThresholdsThresholds;
}

export function networkMonitorPerformanceThresholdsToTerraform(struct?: NetworkMonitorPerformanceThresholdsOutputReference | NetworkMonitorPerformanceThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    thresholds: networkMonitorPerformanceThresholdsThresholdsToTerraform(struct!.thresholds),
  }
}


export function networkMonitorPerformanceThresholdsToHclTerraform(struct?: NetworkMonitorPerformanceThresholdsOutputReference | NetworkMonitorPerformanceThresholds): any {
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
      value: networkMonitorPerformanceThresholdsThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkMonitorPerformanceThresholdsThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkMonitorPerformanceThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkMonitorPerformanceThresholds | undefined {
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

  public set internalValue(value: NetworkMonitorPerformanceThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._thresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _thresholds = new NetworkMonitorPerformanceThresholdsThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: NetworkMonitorPerformanceThresholdsThresholds) {
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
export interface NetworkMonitorStepsStepConstraintsConstraint {
  /**
  * Key/value pairs of constraint properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#properties NetworkMonitor#properties}
  */
  readonly properties: { [key: string]: string };
  /**
  * Constraint type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#type NetworkMonitor#type}
  */
  readonly type: string;
}

export function networkMonitorStepsStepConstraintsConstraintToTerraform(struct?: NetworkMonitorStepsStepConstraintsConstraint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function networkMonitorStepsStepConstraintsConstraintToHclTerraform(struct?: NetworkMonitorStepsStepConstraintsConstraint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class NetworkMonitorStepsStepConstraintsConstraintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkMonitorStepsStepConstraintsConstraint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkMonitorStepsStepConstraintsConstraint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._properties = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._properties = value.properties;
      this._type = value.type;
    }
  }

  // properties - computed: false, optional: false, required: true
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
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

export class NetworkMonitorStepsStepConstraintsConstraintList extends cdktf.ComplexList {
  public internalValue? : NetworkMonitorStepsStepConstraintsConstraint[] | cdktf.IResolvable

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
  public get(index: number): NetworkMonitorStepsStepConstraintsConstraintOutputReference {
    return new NetworkMonitorStepsStepConstraintsConstraintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkMonitorStepsStepConstraints {
  /**
  * constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#constraint NetworkMonitor#constraint}
  */
  readonly constraint: NetworkMonitorStepsStepConstraintsConstraint[] | cdktf.IResolvable;
}

export function networkMonitorStepsStepConstraintsToTerraform(struct?: NetworkMonitorStepsStepConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constraint: cdktf.listMapper(networkMonitorStepsStepConstraintsConstraintToTerraform, true)(struct!.constraint),
  }
}


export function networkMonitorStepsStepConstraintsToHclTerraform(struct?: NetworkMonitorStepsStepConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constraint: {
      value: cdktf.listMapperHcl(networkMonitorStepsStepConstraintsConstraintToHclTerraform, true)(struct!.constraint),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkMonitorStepsStepConstraintsConstraintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkMonitorStepsStepConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkMonitorStepsStepConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraint = this._constraint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkMonitorStepsStepConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraint.internalValue = value.constraint;
    }
  }

  // constraint - computed: false, optional: false, required: true
  private _constraint = new NetworkMonitorStepsStepConstraintsConstraintList(this, "constraint", true);
  public get constraint() {
    return this._constraint;
  }
  public putConstraint(value: NetworkMonitorStepsStepConstraintsConstraint[] | cdktf.IResolvable) {
    this._constraint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint.internalValue;
  }
}

export class NetworkMonitorStepsStepConstraintsList extends cdktf.ComplexList {
  public internalValue? : NetworkMonitorStepsStepConstraints[] | cdktf.IResolvable

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
  public get(index: number): NetworkMonitorStepsStepConstraintsOutputReference {
    return new NetworkMonitorStepsStepConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraint {
  /**
  * Key/value pairs of constraint properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#properties NetworkMonitor#properties}
  */
  readonly properties: { [key: string]: string };
  /**
  * Constraint type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#type NetworkMonitor#type}
  */
  readonly type: string;
}

export function networkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraintToTerraform(struct?: NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function networkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraintToHclTerraform(struct?: NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._properties = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._properties = value.properties;
      this._type = value.type;
    }
  }

  // properties - computed: false, optional: false, required: true
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
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

export class NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraintList extends cdktf.ComplexList {
  public internalValue? : NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraint[] | cdktf.IResolvable

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
  public get(index: number): NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraintOutputReference {
    return new NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraints {
  /**
  * constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#constraint NetworkMonitor#constraint}
  */
  readonly constraint: NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraint[] | cdktf.IResolvable;
}

export function networkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsToTerraform(struct?: NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constraint: cdktf.listMapper(networkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraintToTerraform, true)(struct!.constraint),
  }
}


export function networkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsToHclTerraform(struct?: NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constraint: {
      value: cdktf.listMapperHcl(networkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraintToHclTerraform, true)(struct!.constraint),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraint = this._constraint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraint.internalValue = value.constraint;
    }
  }

  // constraint - computed: false, optional: false, required: true
  private _constraint = new NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraintList(this, "constraint", true);
  public get constraint() {
    return this._constraint;
  }
  public putConstraint(value: NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsConstraint[] | cdktf.IResolvable) {
    this._constraint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint.internalValue;
  }
}

export class NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsList extends cdktf.ComplexList {
  public internalValue? : NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraints[] | cdktf.IResolvable

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
  public get(index: number): NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsOutputReference {
    return new NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkMonitorStepsStepRequestConfigurationsRequestConfiguration {
  /**
  * constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#constraints NetworkMonitor#constraints}
  */
  readonly constraints?: NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraints[] | cdktf.IResolvable;
}

export function networkMonitorStepsStepRequestConfigurationsRequestConfigurationToTerraform(struct?: NetworkMonitorStepsStepRequestConfigurationsRequestConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constraints: cdktf.listMapper(networkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsToTerraform, true)(struct!.constraints),
  }
}


export function networkMonitorStepsStepRequestConfigurationsRequestConfigurationToHclTerraform(struct?: NetworkMonitorStepsStepRequestConfigurationsRequestConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constraints: {
      value: cdktf.listMapperHcl(networkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsToHclTerraform, true)(struct!.constraints),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkMonitorStepsStepRequestConfigurationsRequestConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkMonitorStepsStepRequestConfigurationsRequestConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraints.internalValue = value.constraints;
    }
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraintsList(this, "constraints", false);
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationConstraints[] | cdktf.IResolvable) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }
}

export class NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationList extends cdktf.ComplexList {
  public internalValue? : NetworkMonitorStepsStepRequestConfigurationsRequestConfiguration[] | cdktf.IResolvable

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
  public get(index: number): NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationOutputReference {
    return new NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkMonitorStepsStepRequestConfigurations {
  /**
  * request_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#request_configuration NetworkMonitor#request_configuration}
  */
  readonly requestConfiguration: NetworkMonitorStepsStepRequestConfigurationsRequestConfiguration[] | cdktf.IResolvable;
}

export function networkMonitorStepsStepRequestConfigurationsToTerraform(struct?: NetworkMonitorStepsStepRequestConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_configuration: cdktf.listMapper(networkMonitorStepsStepRequestConfigurationsRequestConfigurationToTerraform, true)(struct!.requestConfiguration),
  }
}


export function networkMonitorStepsStepRequestConfigurationsToHclTerraform(struct?: NetworkMonitorStepsStepRequestConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_configuration: {
      value: cdktf.listMapperHcl(networkMonitorStepsStepRequestConfigurationsRequestConfigurationToHclTerraform, true)(struct!.requestConfiguration),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkMonitorStepsStepRequestConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkMonitorStepsStepRequestConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestConfiguration = this._requestConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkMonitorStepsStepRequestConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestConfiguration.internalValue = value.requestConfiguration;
    }
  }

  // request_configuration - computed: false, optional: false, required: true
  private _requestConfiguration = new NetworkMonitorStepsStepRequestConfigurationsRequestConfigurationList(this, "request_configuration", true);
  public get requestConfiguration() {
    return this._requestConfiguration;
  }
  public putRequestConfiguration(value: NetworkMonitorStepsStepRequestConfigurationsRequestConfiguration[] | cdktf.IResolvable) {
    this._requestConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestConfigurationInput() {
    return this._requestConfiguration.internalValue;
  }
}

export class NetworkMonitorStepsStepRequestConfigurationsList extends cdktf.ComplexList {
  public internalValue? : NetworkMonitorStepsStepRequestConfigurations[] | cdktf.IResolvable

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
  public get(index: number): NetworkMonitorStepsStepRequestConfigurationsOutputReference {
    return new NetworkMonitorStepsStepRequestConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkMonitorStepsStep {
  /**
  * Step name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#name NetworkMonitor#name}
  */
  readonly name: string;
  /**
  * Key/value pairs of properties which apply to all requests in the step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#properties NetworkMonitor#properties}
  */
  readonly properties: { [key: string]: string };
  /**
  * Request type, possible values `ICMP`, `TCP`, `DNS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#request_type NetworkMonitor#request_type}
  */
  readonly requestType: string;
  /**
  * Target filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#target_filter NetworkMonitor#target_filter}
  */
  readonly targetFilter?: string;
  /**
  * Target list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#target_list NetworkMonitor#target_list}
  */
  readonly targetList: string[];
  /**
  * constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#constraints NetworkMonitor#constraints}
  */
  readonly constraints: NetworkMonitorStepsStepConstraints[] | cdktf.IResolvable;
  /**
  * request_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#request_configurations NetworkMonitor#request_configurations}
  */
  readonly requestConfigurations?: NetworkMonitorStepsStepRequestConfigurations[] | cdktf.IResolvable;
}

export function networkMonitorStepsStepToTerraform(struct?: NetworkMonitorStepsStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    request_type: cdktf.stringToTerraform(struct!.requestType),
    target_filter: cdktf.stringToTerraform(struct!.targetFilter),
    target_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetList),
    constraints: cdktf.listMapper(networkMonitorStepsStepConstraintsToTerraform, true)(struct!.constraints),
    request_configurations: cdktf.listMapper(networkMonitorStepsStepRequestConfigurationsToTerraform, true)(struct!.requestConfigurations),
  }
}


export function networkMonitorStepsStepToHclTerraform(struct?: NetworkMonitorStepsStep | cdktf.IResolvable): any {
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
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    request_type: {
      value: cdktf.stringToHclTerraform(struct!.requestType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_filter: {
      value: cdktf.stringToHclTerraform(struct!.targetFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    constraints: {
      value: cdktf.listMapperHcl(networkMonitorStepsStepConstraintsToHclTerraform, true)(struct!.constraints),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkMonitorStepsStepConstraintsList",
    },
    request_configurations: {
      value: cdktf.listMapperHcl(networkMonitorStepsStepRequestConfigurationsToHclTerraform, true)(struct!.requestConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkMonitorStepsStepRequestConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkMonitorStepsStepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkMonitorStepsStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._requestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestType = this._requestType;
    }
    if (this._targetFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFilter = this._targetFilter;
    }
    if (this._targetList !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetList = this._targetList;
    }
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._requestConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestConfigurations = this._requestConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkMonitorStepsStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._properties = undefined;
      this._requestType = undefined;
      this._targetFilter = undefined;
      this._targetList = undefined;
      this._constraints.internalValue = undefined;
      this._requestConfigurations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._properties = value.properties;
      this._requestType = value.requestType;
      this._targetFilter = value.targetFilter;
      this._targetList = value.targetList;
      this._constraints.internalValue = value.constraints;
      this._requestConfigurations.internalValue = value.requestConfigurations;
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

  // properties - computed: false, optional: false, required: true
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // request_type - computed: false, optional: false, required: true
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }

  // target_filter - computed: false, optional: true, required: false
  private _targetFilter?: string; 
  public get targetFilter() {
    return this.getStringAttribute('target_filter');
  }
  public set targetFilter(value: string) {
    this._targetFilter = value;
  }
  public resetTargetFilter() {
    this._targetFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFilterInput() {
    return this._targetFilter;
  }

  // target_list - computed: false, optional: false, required: true
  private _targetList?: string[]; 
  public get targetList() {
    return cdktf.Fn.tolist(this.getListAttribute('target_list'));
  }
  public set targetList(value: string[]) {
    this._targetList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetListInput() {
    return this._targetList;
  }

  // constraints - computed: false, optional: false, required: true
  private _constraints = new NetworkMonitorStepsStepConstraintsList(this, "constraints", false);
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: NetworkMonitorStepsStepConstraints[] | cdktf.IResolvable) {
    this._constraints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // request_configurations - computed: false, optional: true, required: false
  private _requestConfigurations = new NetworkMonitorStepsStepRequestConfigurationsList(this, "request_configurations", false);
  public get requestConfigurations() {
    return this._requestConfigurations;
  }
  public putRequestConfigurations(value: NetworkMonitorStepsStepRequestConfigurations[] | cdktf.IResolvable) {
    this._requestConfigurations.internalValue = value;
  }
  public resetRequestConfigurations() {
    this._requestConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestConfigurationsInput() {
    return this._requestConfigurations.internalValue;
  }
}

export class NetworkMonitorStepsStepList extends cdktf.ComplexList {
  public internalValue? : NetworkMonitorStepsStep[] | cdktf.IResolvable

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
  public get(index: number): NetworkMonitorStepsStepOutputReference {
    return new NetworkMonitorStepsStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkMonitorSteps {
  /**
  * step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#step NetworkMonitor#step}
  */
  readonly step: NetworkMonitorStepsStep[] | cdktf.IResolvable;
}

export function networkMonitorStepsToTerraform(struct?: NetworkMonitorSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step: cdktf.listMapper(networkMonitorStepsStepToTerraform, true)(struct!.step),
  }
}


export function networkMonitorStepsToHclTerraform(struct?: NetworkMonitorSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    step: {
      value: cdktf.listMapperHcl(networkMonitorStepsStepToHclTerraform, true)(struct!.step),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkMonitorStepsStepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkMonitorStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkMonitorSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._step?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkMonitorSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._step.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._step.internalValue = value.step;
    }
  }

  // step - computed: false, optional: false, required: true
  private _step = new NetworkMonitorStepsStepList(this, "step", false);
  public get step() {
    return this._step;
  }
  public putStep(value: NetworkMonitorStepsStep[] | cdktf.IResolvable) {
    this._step.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step.internalValue;
  }
}

export class NetworkMonitorStepsList extends cdktf.ComplexList {
  public internalValue? : NetworkMonitorSteps[] | cdktf.IResolvable

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
  public get(index: number): NetworkMonitorStepsOutputReference {
    return new NetworkMonitorStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkMonitorTagsTag {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry.
  * 
  * Custom tags use the CONTEXTLESS value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#context NetworkMonitor#context}
  */
  readonly context?: string;
  /**
  * The key of the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#key NetworkMonitor#key}
  */
  readonly key: string;
  /**
  * The source of the tag, possible values: `AUTO`, `RULE_BASED` or `USER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#source NetworkMonitor#source}
  */
  readonly source?: string;
  /**
  *  The value of the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#value NetworkMonitor#value}
  */
  readonly value?: string;
}

export function networkMonitorTagsTagToTerraform(struct?: NetworkMonitorTagsTag | cdktf.IResolvable): any {
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


export function networkMonitorTagsTagToHclTerraform(struct?: NetworkMonitorTagsTag | cdktf.IResolvable): any {
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

export class NetworkMonitorTagsTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkMonitorTagsTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkMonitorTagsTag | cdktf.IResolvable | undefined) {
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

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
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

export class NetworkMonitorTagsTagList extends cdktf.ComplexList {
  public internalValue? : NetworkMonitorTagsTag[] | cdktf.IResolvable

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
  public get(index: number): NetworkMonitorTagsTagOutputReference {
    return new NetworkMonitorTagsTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkMonitorTags {
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#tag NetworkMonitor#tag}
  */
  readonly tag?: NetworkMonitorTagsTag[] | cdktf.IResolvable;
}

export function networkMonitorTagsToTerraform(struct?: NetworkMonitorTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.listMapper(networkMonitorTagsTagToTerraform, true)(struct!.tag),
  }
}


export function networkMonitorTagsToHclTerraform(struct?: NetworkMonitorTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.listMapperHcl(networkMonitorTagsTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkMonitorTagsTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkMonitorTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkMonitorTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkMonitorTags | cdktf.IResolvable | undefined) {
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
  private _tag = new NetworkMonitorTagsTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: NetworkMonitorTagsTag[] | cdktf.IResolvable) {
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

export class NetworkMonitorTagsList extends cdktf.ComplexList {
  public internalValue? : NetworkMonitorTags[] | cdktf.IResolvable

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
  public get(index: number): NetworkMonitorTagsOutputReference {
    return new NetworkMonitorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor dynatrace_network_monitor}
*/
export class NetworkMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_network_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkMonitor to import
  * @param importFromId The id of the existing NetworkMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_network_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/network_monitor dynatrace_network_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_network_monitor',
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
    this._description = config.description;
    this._enabled = config.enabled;
    this._frequencyMin = config.frequencyMin;
    this._id = config.id;
    this._locations = config.locations;
    this._name = config.name;
    this._type = config.type;
    this._outageHandling.internalValue = config.outageHandling;
    this._performanceThresholds.internalValue = config.performanceThresholds;
    this._steps.internalValue = config.steps;
    this._tags.internalValue = config.tags;
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

  // frequency_min - computed: false, optional: true, required: false
  private _frequencyMin?: number; 
  public get frequencyMin() {
    return this.getNumberAttribute('frequency_min');
  }
  public set frequencyMin(value: number) {
    this._frequencyMin = value;
  }
  public resetFrequencyMin() {
    this._frequencyMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyMinInput() {
    return this._frequencyMin;
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

  // locations - computed: false, optional: false, required: true
  private _locations?: string[]; 
  public get locations() {
    return cdktf.Fn.tolist(this.getListAttribute('locations'));
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
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

  // outage_handling - computed: false, optional: true, required: false
  private _outageHandling = new NetworkMonitorOutageHandlingOutputReference(this, "outage_handling");
  public get outageHandling() {
    return this._outageHandling;
  }
  public putOutageHandling(value: NetworkMonitorOutageHandling) {
    this._outageHandling.internalValue = value;
  }
  public resetOutageHandling() {
    this._outageHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outageHandlingInput() {
    return this._outageHandling.internalValue;
  }

  // performance_thresholds - computed: false, optional: true, required: false
  private _performanceThresholds = new NetworkMonitorPerformanceThresholdsOutputReference(this, "performance_thresholds");
  public get performanceThresholds() {
    return this._performanceThresholds;
  }
  public putPerformanceThresholds(value: NetworkMonitorPerformanceThresholds) {
    this._performanceThresholds.internalValue = value;
  }
  public resetPerformanceThresholds() {
    this._performanceThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceThresholdsInput() {
    return this._performanceThresholds.internalValue;
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new NetworkMonitorStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: NetworkMonitorSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new NetworkMonitorTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetworkMonitorTags[] | cdktf.IResolvable) {
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
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      frequency_min: cdktf.numberToTerraform(this._frequencyMin),
      id: cdktf.stringToTerraform(this._id),
      locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locations),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      outage_handling: networkMonitorOutageHandlingToTerraform(this._outageHandling.internalValue),
      performance_thresholds: networkMonitorPerformanceThresholdsToTerraform(this._performanceThresholds.internalValue),
      steps: cdktf.listMapper(networkMonitorStepsToTerraform, true)(this._steps.internalValue),
      tags: cdktf.listMapper(networkMonitorTagsToTerraform, true)(this._tags.internalValue),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frequency_min: {
        value: cdktf.numberToHclTerraform(this._frequencyMin),
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
      outage_handling: {
        value: networkMonitorOutageHandlingToHclTerraform(this._outageHandling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkMonitorOutageHandlingList",
      },
      performance_thresholds: {
        value: networkMonitorPerformanceThresholdsToHclTerraform(this._performanceThresholds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkMonitorPerformanceThresholdsList",
      },
      steps: {
        value: cdktf.listMapperHcl(networkMonitorStepsToHclTerraform, true)(this._steps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkMonitorStepsList",
      },
      tags: {
        value: cdktf.listMapperHcl(networkMonitorTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkMonitorTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
