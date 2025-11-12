// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostAnomaliesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#id HostAnomaliesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this setting (HOST HOST_GROUP environment)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#scope HostAnomaliesV2#scope}
  */
  readonly scope: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#host HostAnomaliesV2#host}
  */
  readonly host: HostAnomaliesV2Host;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#network HostAnomaliesV2#network}
  */
  readonly network: HostAnomaliesV2Network;
}
export interface HostAnomaliesV2HostConnectionLostDetection {
  /**
  * Detect host or monitoring connection lost problems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#enabled HostAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Graceful host shutdowns. Possible values: `DONT_ALERT_ON_GRACEFUL_SHUTDOWN`, `ALERT_ON_GRACEFUL_SHUTDOWN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#on_graceful_shutdowns HostAnomaliesV2#on_graceful_shutdowns}
  */
  readonly onGracefulShutdowns?: string;
}

export function hostAnomaliesV2HostConnectionLostDetectionToTerraform(struct?: HostAnomaliesV2HostConnectionLostDetectionOutputReference | HostAnomaliesV2HostConnectionLostDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    on_graceful_shutdowns: cdktf.stringToTerraform(struct!.onGracefulShutdowns),
  }
}


export function hostAnomaliesV2HostConnectionLostDetectionToHclTerraform(struct?: HostAnomaliesV2HostConnectionLostDetectionOutputReference | HostAnomaliesV2HostConnectionLostDetection): any {
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
    on_graceful_shutdowns: {
      value: cdktf.stringToHclTerraform(struct!.onGracefulShutdowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2HostConnectionLostDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostConnectionLostDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._onGracefulShutdowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.onGracefulShutdowns = this._onGracefulShutdowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostConnectionLostDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._onGracefulShutdowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._onGracefulShutdowns = value.onGracefulShutdowns;
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

  // on_graceful_shutdowns - computed: false, optional: true, required: false
  private _onGracefulShutdowns?: string; 
  public get onGracefulShutdowns() {
    return this.getStringAttribute('on_graceful_shutdowns');
  }
  public set onGracefulShutdowns(value: string) {
    this._onGracefulShutdowns = value;
  }
  public resetOnGracefulShutdowns() {
    this._onGracefulShutdowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onGracefulShutdownsInput() {
    return this._onGracefulShutdowns;
  }
}
export interface HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsEventThresholds {
  /**
  * The number of **10-second samples** that form the sliding evaluation window for dealerting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_evaluation_window HostAnomaliesV2#dealerting_evaluation_window}
  */
  readonly dealertingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must be lower the threshold to close an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_samples HostAnomaliesV2#dealerting_samples}
  */
  readonly dealertingSamples: number;
  /**
  * The number of **10-second samples** that form the sliding evaluation window to detect violating samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_evaluation_window HostAnomaliesV2#violating_evaluation_window}
  */
  readonly violatingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must exceed the threshold to trigger an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_samples HostAnomaliesV2#violating_samples}
  */
  readonly violatingSamples: number;
}

export function hostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsEventThresholdsToTerraform(struct?: HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dealerting_evaluation_window: cdktf.numberToTerraform(struct!.dealertingEvaluationWindow),
    dealerting_samples: cdktf.numberToTerraform(struct!.dealertingSamples),
    violating_evaluation_window: cdktf.numberToTerraform(struct!.violatingEvaluationWindow),
    violating_samples: cdktf.numberToTerraform(struct!.violatingSamples),
  }
}


export function hostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsEventThresholdsToHclTerraform(struct?: HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dealerting_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.dealertingEvaluationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dealerting_samples: {
      value: cdktf.numberToHclTerraform(struct!.dealertingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violating_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.violatingEvaluationWindow),
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

export class HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsEventThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsEventThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dealertingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingEvaluationWindow = this._dealertingEvaluationWindow;
    }
    if (this._dealertingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingSamples = this._dealertingSamples;
    }
    if (this._violatingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingEvaluationWindow = this._violatingEvaluationWindow;
    }
    if (this._violatingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingSamples = this._violatingSamples;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsEventThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dealertingEvaluationWindow = undefined;
      this._dealertingSamples = undefined;
      this._violatingEvaluationWindow = undefined;
      this._violatingSamples = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dealertingEvaluationWindow = value.dealertingEvaluationWindow;
      this._dealertingSamples = value.dealertingSamples;
      this._violatingEvaluationWindow = value.violatingEvaluationWindow;
      this._violatingSamples = value.violatingSamples;
    }
  }

  // dealerting_evaluation_window - computed: false, optional: false, required: true
  private _dealertingEvaluationWindow?: number; 
  public get dealertingEvaluationWindow() {
    return this.getNumberAttribute('dealerting_evaluation_window');
  }
  public set dealertingEvaluationWindow(value: number) {
    this._dealertingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingEvaluationWindowInput() {
    return this._dealertingEvaluationWindow;
  }

  // dealerting_samples - computed: false, optional: false, required: true
  private _dealertingSamples?: number; 
  public get dealertingSamples() {
    return this.getNumberAttribute('dealerting_samples');
  }
  public set dealertingSamples(value: number) {
    this._dealertingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingSamplesInput() {
    return this._dealertingSamples;
  }

  // violating_evaluation_window - computed: false, optional: false, required: true
  private _violatingEvaluationWindow?: number; 
  public get violatingEvaluationWindow() {
    return this.getNumberAttribute('violating_evaluation_window');
  }
  public set violatingEvaluationWindow(value: number) {
    this._violatingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingEvaluationWindowInput() {
    return this._violatingEvaluationWindow;
  }

  // violating_samples - computed: false, optional: false, required: true
  private _violatingSamples?: number; 
  public get violatingSamples() {
    return this.getNumberAttribute('violating_samples');
  }
  public set violatingSamples(value: number) {
    this._violatingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingSamplesInput() {
    return this._violatingSamples;
  }
}
export interface HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholds {
  /**
  * Alert if the CPU usage is higher than this threshold for the defined amount of samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#cpu_saturation HostAnomaliesV2#cpu_saturation}
  */
  readonly cpuSaturation: number;
  /**
  * event_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#event_thresholds HostAnomaliesV2#event_thresholds}
  */
  readonly eventThresholds: HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsEventThresholds;
}

export function hostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsToTerraform(struct?: HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsOutputReference | HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_saturation: cdktf.numberToTerraform(struct!.cpuSaturation),
    event_thresholds: hostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsEventThresholdsToTerraform(struct!.eventThresholds),
  }
}


export function hostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsToHclTerraform(struct?: HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsOutputReference | HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_saturation: {
      value: cdktf.numberToHclTerraform(struct!.cpuSaturation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_thresholds: {
      value: hostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsEventThresholdsToHclTerraform(struct!.eventThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsEventThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuSaturation !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuSaturation = this._cpuSaturation;
    }
    if (this._eventThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventThresholds = this._eventThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuSaturation = undefined;
      this._eventThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuSaturation = value.cpuSaturation;
      this._eventThresholds.internalValue = value.eventThresholds;
    }
  }

  // cpu_saturation - computed: false, optional: false, required: true
  private _cpuSaturation?: number; 
  public get cpuSaturation() {
    return this.getNumberAttribute('cpu_saturation');
  }
  public set cpuSaturation(value: number) {
    this._cpuSaturation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSaturationInput() {
    return this._cpuSaturation;
  }

  // event_thresholds - computed: false, optional: false, required: true
  private _eventThresholds = new HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsEventThresholdsOutputReference(this, "event_thresholds");
  public get eventThresholds() {
    return this._eventThresholds;
  }
  public putEventThresholds(value: HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsEventThresholds) {
    this._eventThresholds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventThresholdsInput() {
    return this._eventThresholds.internalValue;
  }
}
export interface HostAnomaliesV2HostHighCpuSaturationDetection {
  /**
  * Detection mode for CPU saturation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#detection_mode HostAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Detect CPU saturation on host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#enabled HostAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#custom_thresholds HostAnomaliesV2#custom_thresholds}
  */
  readonly customThresholds?: HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholds;
}

export function hostAnomaliesV2HostHighCpuSaturationDetectionToTerraform(struct?: HostAnomaliesV2HostHighCpuSaturationDetectionOutputReference | HostAnomaliesV2HostHighCpuSaturationDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: hostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function hostAnomaliesV2HostHighCpuSaturationDetectionToHclTerraform(struct?: HostAnomaliesV2HostHighCpuSaturationDetectionOutputReference | HostAnomaliesV2HostHighCpuSaturationDetection): any {
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
    custom_thresholds: {
      value: hostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2HostHighCpuSaturationDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostHighCpuSaturationDetection | undefined {
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
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostHighCpuSaturationDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: HostAnomaliesV2HostHighCpuSaturationDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface HostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsEventThresholds {
  /**
  * The number of **10-second samples** that form the sliding evaluation window for dealerting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_evaluation_window HostAnomaliesV2#dealerting_evaluation_window}
  */
  readonly dealertingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must be lower the threshold to close an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_samples HostAnomaliesV2#dealerting_samples}
  */
  readonly dealertingSamples: number;
  /**
  * The number of **10-second samples** that form the sliding evaluation window to detect violating samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_evaluation_window HostAnomaliesV2#violating_evaluation_window}
  */
  readonly violatingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must exceed the threshold to trigger an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_samples HostAnomaliesV2#violating_samples}
  */
  readonly violatingSamples: number;
}

export function hostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsEventThresholdsToTerraform(struct?: HostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dealerting_evaluation_window: cdktf.numberToTerraform(struct!.dealertingEvaluationWindow),
    dealerting_samples: cdktf.numberToTerraform(struct!.dealertingSamples),
    violating_evaluation_window: cdktf.numberToTerraform(struct!.violatingEvaluationWindow),
    violating_samples: cdktf.numberToTerraform(struct!.violatingSamples),
  }
}


export function hostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsEventThresholdsToHclTerraform(struct?: HostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dealerting_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.dealertingEvaluationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dealerting_samples: {
      value: cdktf.numberToHclTerraform(struct!.dealertingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violating_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.violatingEvaluationWindow),
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

export class HostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsEventThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsEventThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dealertingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingEvaluationWindow = this._dealertingEvaluationWindow;
    }
    if (this._dealertingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingSamples = this._dealertingSamples;
    }
    if (this._violatingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingEvaluationWindow = this._violatingEvaluationWindow;
    }
    if (this._violatingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingSamples = this._violatingSamples;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsEventThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dealertingEvaluationWindow = undefined;
      this._dealertingSamples = undefined;
      this._violatingEvaluationWindow = undefined;
      this._violatingSamples = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dealertingEvaluationWindow = value.dealertingEvaluationWindow;
      this._dealertingSamples = value.dealertingSamples;
      this._violatingEvaluationWindow = value.violatingEvaluationWindow;
      this._violatingSamples = value.violatingSamples;
    }
  }

  // dealerting_evaluation_window - computed: false, optional: false, required: true
  private _dealertingEvaluationWindow?: number; 
  public get dealertingEvaluationWindow() {
    return this.getNumberAttribute('dealerting_evaluation_window');
  }
  public set dealertingEvaluationWindow(value: number) {
    this._dealertingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingEvaluationWindowInput() {
    return this._dealertingEvaluationWindow;
  }

  // dealerting_samples - computed: false, optional: false, required: true
  private _dealertingSamples?: number; 
  public get dealertingSamples() {
    return this.getNumberAttribute('dealerting_samples');
  }
  public set dealertingSamples(value: number) {
    this._dealertingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingSamplesInput() {
    return this._dealertingSamples;
  }

  // violating_evaluation_window - computed: false, optional: false, required: true
  private _violatingEvaluationWindow?: number; 
  public get violatingEvaluationWindow() {
    return this.getNumberAttribute('violating_evaluation_window');
  }
  public set violatingEvaluationWindow(value: number) {
    this._violatingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingEvaluationWindowInput() {
    return this._violatingEvaluationWindow;
  }

  // violating_samples - computed: false, optional: false, required: true
  private _violatingSamples?: number; 
  public get violatingSamples() {
    return this.getNumberAttribute('violating_samples');
  }
  public set violatingSamples(value: number) {
    this._violatingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingSamplesInput() {
    return this._violatingSamples;
  }
}
export interface HostAnomaliesV2HostHighGcActivityDetectionCustomThresholds {
  /**
  * Alert if the GC suspension is higher than this threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#gc_suspension_percentage HostAnomaliesV2#gc_suspension_percentage}
  */
  readonly gcSuspensionPercentage: number;
  /**
  * Alert if GC time is higher than this threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#gc_time_percentage HostAnomaliesV2#gc_time_percentage}
  */
  readonly gcTimePercentage: number;
  /**
  * event_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#event_thresholds HostAnomaliesV2#event_thresholds}
  */
  readonly eventThresholds: HostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsEventThresholds;
}

export function hostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsToTerraform(struct?: HostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsOutputReference | HostAnomaliesV2HostHighGcActivityDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gc_suspension_percentage: cdktf.numberToTerraform(struct!.gcSuspensionPercentage),
    gc_time_percentage: cdktf.numberToTerraform(struct!.gcTimePercentage),
    event_thresholds: hostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsEventThresholdsToTerraform(struct!.eventThresholds),
  }
}


export function hostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsToHclTerraform(struct?: HostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsOutputReference | HostAnomaliesV2HostHighGcActivityDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gc_suspension_percentage: {
      value: cdktf.numberToHclTerraform(struct!.gcSuspensionPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gc_time_percentage: {
      value: cdktf.numberToHclTerraform(struct!.gcTimePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_thresholds: {
      value: hostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsEventThresholdsToHclTerraform(struct!.eventThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsEventThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostHighGcActivityDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcSuspensionPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcSuspensionPercentage = this._gcSuspensionPercentage;
    }
    if (this._gcTimePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcTimePercentage = this._gcTimePercentage;
    }
    if (this._eventThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventThresholds = this._eventThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostHighGcActivityDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcSuspensionPercentage = undefined;
      this._gcTimePercentage = undefined;
      this._eventThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcSuspensionPercentage = value.gcSuspensionPercentage;
      this._gcTimePercentage = value.gcTimePercentage;
      this._eventThresholds.internalValue = value.eventThresholds;
    }
  }

  // gc_suspension_percentage - computed: false, optional: false, required: true
  private _gcSuspensionPercentage?: number; 
  public get gcSuspensionPercentage() {
    return this.getNumberAttribute('gc_suspension_percentage');
  }
  public set gcSuspensionPercentage(value: number) {
    this._gcSuspensionPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcSuspensionPercentageInput() {
    return this._gcSuspensionPercentage;
  }

  // gc_time_percentage - computed: false, optional: false, required: true
  private _gcTimePercentage?: number; 
  public get gcTimePercentage() {
    return this.getNumberAttribute('gc_time_percentage');
  }
  public set gcTimePercentage(value: number) {
    this._gcTimePercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcTimePercentageInput() {
    return this._gcTimePercentage;
  }

  // event_thresholds - computed: false, optional: false, required: true
  private _eventThresholds = new HostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsEventThresholdsOutputReference(this, "event_thresholds");
  public get eventThresholds() {
    return this._eventThresholds;
  }
  public putEventThresholds(value: HostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsEventThresholds) {
    this._eventThresholds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventThresholdsInput() {
    return this._eventThresholds.internalValue;
  }
}
export interface HostAnomaliesV2HostHighGcActivityDetection {
  /**
  * Detection mode for high GC activity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#detection_mode HostAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * You may also configure high GC activity alerting for .NET processes on [extensions events page](/#settings/anomalydetection/extensionevents).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#enabled HostAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#custom_thresholds HostAnomaliesV2#custom_thresholds}
  */
  readonly customThresholds?: HostAnomaliesV2HostHighGcActivityDetectionCustomThresholds;
}

export function hostAnomaliesV2HostHighGcActivityDetectionToTerraform(struct?: HostAnomaliesV2HostHighGcActivityDetectionOutputReference | HostAnomaliesV2HostHighGcActivityDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: hostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function hostAnomaliesV2HostHighGcActivityDetectionToHclTerraform(struct?: HostAnomaliesV2HostHighGcActivityDetectionOutputReference | HostAnomaliesV2HostHighGcActivityDetection): any {
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
    custom_thresholds: {
      value: hostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2HostHighGcActivityDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostHighGcActivityDetection | undefined {
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
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostHighGcActivityDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new HostAnomaliesV2HostHighGcActivityDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: HostAnomaliesV2HostHighGcActivityDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface HostAnomaliesV2HostHighMemoryDetectionCustomThresholdsEventThresholds {
  /**
  * The number of **10-second samples** that form the sliding evaluation window for dealerting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_evaluation_window HostAnomaliesV2#dealerting_evaluation_window}
  */
  readonly dealertingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must be lower the threshold to close an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_samples HostAnomaliesV2#dealerting_samples}
  */
  readonly dealertingSamples: number;
  /**
  * The number of **10-second samples** that form the sliding evaluation window to detect violating samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_evaluation_window HostAnomaliesV2#violating_evaluation_window}
  */
  readonly violatingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must exceed the threshold to trigger an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_samples HostAnomaliesV2#violating_samples}
  */
  readonly violatingSamples: number;
}

export function hostAnomaliesV2HostHighMemoryDetectionCustomThresholdsEventThresholdsToTerraform(struct?: HostAnomaliesV2HostHighMemoryDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2HostHighMemoryDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dealerting_evaluation_window: cdktf.numberToTerraform(struct!.dealertingEvaluationWindow),
    dealerting_samples: cdktf.numberToTerraform(struct!.dealertingSamples),
    violating_evaluation_window: cdktf.numberToTerraform(struct!.violatingEvaluationWindow),
    violating_samples: cdktf.numberToTerraform(struct!.violatingSamples),
  }
}


export function hostAnomaliesV2HostHighMemoryDetectionCustomThresholdsEventThresholdsToHclTerraform(struct?: HostAnomaliesV2HostHighMemoryDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2HostHighMemoryDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dealerting_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.dealertingEvaluationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dealerting_samples: {
      value: cdktf.numberToHclTerraform(struct!.dealertingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violating_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.violatingEvaluationWindow),
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

export class HostAnomaliesV2HostHighMemoryDetectionCustomThresholdsEventThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostHighMemoryDetectionCustomThresholdsEventThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dealertingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingEvaluationWindow = this._dealertingEvaluationWindow;
    }
    if (this._dealertingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingSamples = this._dealertingSamples;
    }
    if (this._violatingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingEvaluationWindow = this._violatingEvaluationWindow;
    }
    if (this._violatingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingSamples = this._violatingSamples;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostHighMemoryDetectionCustomThresholdsEventThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dealertingEvaluationWindow = undefined;
      this._dealertingSamples = undefined;
      this._violatingEvaluationWindow = undefined;
      this._violatingSamples = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dealertingEvaluationWindow = value.dealertingEvaluationWindow;
      this._dealertingSamples = value.dealertingSamples;
      this._violatingEvaluationWindow = value.violatingEvaluationWindow;
      this._violatingSamples = value.violatingSamples;
    }
  }

  // dealerting_evaluation_window - computed: false, optional: false, required: true
  private _dealertingEvaluationWindow?: number; 
  public get dealertingEvaluationWindow() {
    return this.getNumberAttribute('dealerting_evaluation_window');
  }
  public set dealertingEvaluationWindow(value: number) {
    this._dealertingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingEvaluationWindowInput() {
    return this._dealertingEvaluationWindow;
  }

  // dealerting_samples - computed: false, optional: false, required: true
  private _dealertingSamples?: number; 
  public get dealertingSamples() {
    return this.getNumberAttribute('dealerting_samples');
  }
  public set dealertingSamples(value: number) {
    this._dealertingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingSamplesInput() {
    return this._dealertingSamples;
  }

  // violating_evaluation_window - computed: false, optional: false, required: true
  private _violatingEvaluationWindow?: number; 
  public get violatingEvaluationWindow() {
    return this.getNumberAttribute('violating_evaluation_window');
  }
  public set violatingEvaluationWindow(value: number) {
    this._violatingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingEvaluationWindowInput() {
    return this._violatingEvaluationWindow;
  }

  // violating_samples - computed: false, optional: false, required: true
  private _violatingSamples?: number; 
  public get violatingSamples() {
    return this.getNumberAttribute('violating_samples');
  }
  public set violatingSamples(value: number) {
    this._violatingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingSamplesInput() {
    return this._violatingSamples;
  }
}
export interface HostAnomaliesV2HostHighMemoryDetectionCustomThresholds {
  /**
  * Alert if the memory page fault rate on Unix systems is higher than this threshold for the defined amount of samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#page_faults_per_second_non_windows HostAnomaliesV2#page_faults_per_second_non_windows}
  */
  readonly pageFaultsPerSecondNonWindows: number;
  /**
  * Alert if the memory page fault rate on Windows is higher than this threshold for the defined amount of samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#page_faults_per_second_windows HostAnomaliesV2#page_faults_per_second_windows}
  */
  readonly pageFaultsPerSecondWindows: number;
  /**
  * Alert if the memory usage on Unix systems is higher than this threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#used_memory_percentage_non_windows HostAnomaliesV2#used_memory_percentage_non_windows}
  */
  readonly usedMemoryPercentageNonWindows: number;
  /**
  * Alert if the memory usage on Windows is higher than this threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#used_memory_percentage_windows HostAnomaliesV2#used_memory_percentage_windows}
  */
  readonly usedMemoryPercentageWindows: number;
  /**
  * event_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#event_thresholds HostAnomaliesV2#event_thresholds}
  */
  readonly eventThresholds: HostAnomaliesV2HostHighMemoryDetectionCustomThresholdsEventThresholds;
}

export function hostAnomaliesV2HostHighMemoryDetectionCustomThresholdsToTerraform(struct?: HostAnomaliesV2HostHighMemoryDetectionCustomThresholdsOutputReference | HostAnomaliesV2HostHighMemoryDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    page_faults_per_second_non_windows: cdktf.numberToTerraform(struct!.pageFaultsPerSecondNonWindows),
    page_faults_per_second_windows: cdktf.numberToTerraform(struct!.pageFaultsPerSecondWindows),
    used_memory_percentage_non_windows: cdktf.numberToTerraform(struct!.usedMemoryPercentageNonWindows),
    used_memory_percentage_windows: cdktf.numberToTerraform(struct!.usedMemoryPercentageWindows),
    event_thresholds: hostAnomaliesV2HostHighMemoryDetectionCustomThresholdsEventThresholdsToTerraform(struct!.eventThresholds),
  }
}


export function hostAnomaliesV2HostHighMemoryDetectionCustomThresholdsToHclTerraform(struct?: HostAnomaliesV2HostHighMemoryDetectionCustomThresholdsOutputReference | HostAnomaliesV2HostHighMemoryDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    page_faults_per_second_non_windows: {
      value: cdktf.numberToHclTerraform(struct!.pageFaultsPerSecondNonWindows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    page_faults_per_second_windows: {
      value: cdktf.numberToHclTerraform(struct!.pageFaultsPerSecondWindows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    used_memory_percentage_non_windows: {
      value: cdktf.numberToHclTerraform(struct!.usedMemoryPercentageNonWindows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    used_memory_percentage_windows: {
      value: cdktf.numberToHclTerraform(struct!.usedMemoryPercentageWindows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_thresholds: {
      value: hostAnomaliesV2HostHighMemoryDetectionCustomThresholdsEventThresholdsToHclTerraform(struct!.eventThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostHighMemoryDetectionCustomThresholdsEventThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2HostHighMemoryDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostHighMemoryDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pageFaultsPerSecondNonWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageFaultsPerSecondNonWindows = this._pageFaultsPerSecondNonWindows;
    }
    if (this._pageFaultsPerSecondWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageFaultsPerSecondWindows = this._pageFaultsPerSecondWindows;
    }
    if (this._usedMemoryPercentageNonWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedMemoryPercentageNonWindows = this._usedMemoryPercentageNonWindows;
    }
    if (this._usedMemoryPercentageWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedMemoryPercentageWindows = this._usedMemoryPercentageWindows;
    }
    if (this._eventThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventThresholds = this._eventThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostHighMemoryDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pageFaultsPerSecondNonWindows = undefined;
      this._pageFaultsPerSecondWindows = undefined;
      this._usedMemoryPercentageNonWindows = undefined;
      this._usedMemoryPercentageWindows = undefined;
      this._eventThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pageFaultsPerSecondNonWindows = value.pageFaultsPerSecondNonWindows;
      this._pageFaultsPerSecondWindows = value.pageFaultsPerSecondWindows;
      this._usedMemoryPercentageNonWindows = value.usedMemoryPercentageNonWindows;
      this._usedMemoryPercentageWindows = value.usedMemoryPercentageWindows;
      this._eventThresholds.internalValue = value.eventThresholds;
    }
  }

  // page_faults_per_second_non_windows - computed: false, optional: false, required: true
  private _pageFaultsPerSecondNonWindows?: number; 
  public get pageFaultsPerSecondNonWindows() {
    return this.getNumberAttribute('page_faults_per_second_non_windows');
  }
  public set pageFaultsPerSecondNonWindows(value: number) {
    this._pageFaultsPerSecondNonWindows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageFaultsPerSecondNonWindowsInput() {
    return this._pageFaultsPerSecondNonWindows;
  }

  // page_faults_per_second_windows - computed: false, optional: false, required: true
  private _pageFaultsPerSecondWindows?: number; 
  public get pageFaultsPerSecondWindows() {
    return this.getNumberAttribute('page_faults_per_second_windows');
  }
  public set pageFaultsPerSecondWindows(value: number) {
    this._pageFaultsPerSecondWindows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageFaultsPerSecondWindowsInput() {
    return this._pageFaultsPerSecondWindows;
  }

  // used_memory_percentage_non_windows - computed: false, optional: false, required: true
  private _usedMemoryPercentageNonWindows?: number; 
  public get usedMemoryPercentageNonWindows() {
    return this.getNumberAttribute('used_memory_percentage_non_windows');
  }
  public set usedMemoryPercentageNonWindows(value: number) {
    this._usedMemoryPercentageNonWindows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usedMemoryPercentageNonWindowsInput() {
    return this._usedMemoryPercentageNonWindows;
  }

  // used_memory_percentage_windows - computed: false, optional: false, required: true
  private _usedMemoryPercentageWindows?: number; 
  public get usedMemoryPercentageWindows() {
    return this.getNumberAttribute('used_memory_percentage_windows');
  }
  public set usedMemoryPercentageWindows(value: number) {
    this._usedMemoryPercentageWindows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usedMemoryPercentageWindowsInput() {
    return this._usedMemoryPercentageWindows;
  }

  // event_thresholds - computed: false, optional: false, required: true
  private _eventThresholds = new HostAnomaliesV2HostHighMemoryDetectionCustomThresholdsEventThresholdsOutputReference(this, "event_thresholds");
  public get eventThresholds() {
    return this._eventThresholds;
  }
  public putEventThresholds(value: HostAnomaliesV2HostHighMemoryDetectionCustomThresholdsEventThresholds) {
    this._eventThresholds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventThresholdsInput() {
    return this._eventThresholds.internalValue;
  }
}
export interface HostAnomaliesV2HostHighMemoryDetection {
  /**
  * Detection mode for high memory usage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#detection_mode HostAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Detect high memory usage on host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#enabled HostAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#custom_thresholds HostAnomaliesV2#custom_thresholds}
  */
  readonly customThresholds?: HostAnomaliesV2HostHighMemoryDetectionCustomThresholds;
}

export function hostAnomaliesV2HostHighMemoryDetectionToTerraform(struct?: HostAnomaliesV2HostHighMemoryDetectionOutputReference | HostAnomaliesV2HostHighMemoryDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: hostAnomaliesV2HostHighMemoryDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function hostAnomaliesV2HostHighMemoryDetectionToHclTerraform(struct?: HostAnomaliesV2HostHighMemoryDetectionOutputReference | HostAnomaliesV2HostHighMemoryDetection): any {
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
    custom_thresholds: {
      value: hostAnomaliesV2HostHighMemoryDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostHighMemoryDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2HostHighMemoryDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostHighMemoryDetection | undefined {
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
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostHighMemoryDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new HostAnomaliesV2HostHighMemoryDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: HostAnomaliesV2HostHighMemoryDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsEventThresholds {
  /**
  * The number of **10-second samples** that form the sliding evaluation window for dealerting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_evaluation_window HostAnomaliesV2#dealerting_evaluation_window}
  */
  readonly dealertingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must be lower the threshold to close an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_samples HostAnomaliesV2#dealerting_samples}
  */
  readonly dealertingSamples: number;
  /**
  * The number of **10-second samples** that form the sliding evaluation window to detect violating samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_evaluation_window HostAnomaliesV2#violating_evaluation_window}
  */
  readonly violatingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must exceed the threshold to trigger an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_samples HostAnomaliesV2#violating_samples}
  */
  readonly violatingSamples: number;
}

export function hostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsEventThresholdsToTerraform(struct?: HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dealerting_evaluation_window: cdktf.numberToTerraform(struct!.dealertingEvaluationWindow),
    dealerting_samples: cdktf.numberToTerraform(struct!.dealertingSamples),
    violating_evaluation_window: cdktf.numberToTerraform(struct!.violatingEvaluationWindow),
    violating_samples: cdktf.numberToTerraform(struct!.violatingSamples),
  }
}


export function hostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsEventThresholdsToHclTerraform(struct?: HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dealerting_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.dealertingEvaluationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dealerting_samples: {
      value: cdktf.numberToHclTerraform(struct!.dealertingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violating_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.violatingEvaluationWindow),
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

export class HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsEventThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsEventThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dealertingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingEvaluationWindow = this._dealertingEvaluationWindow;
    }
    if (this._dealertingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingSamples = this._dealertingSamples;
    }
    if (this._violatingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingEvaluationWindow = this._violatingEvaluationWindow;
    }
    if (this._violatingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingSamples = this._violatingSamples;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsEventThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dealertingEvaluationWindow = undefined;
      this._dealertingSamples = undefined;
      this._violatingEvaluationWindow = undefined;
      this._violatingSamples = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dealertingEvaluationWindow = value.dealertingEvaluationWindow;
      this._dealertingSamples = value.dealertingSamples;
      this._violatingEvaluationWindow = value.violatingEvaluationWindow;
      this._violatingSamples = value.violatingSamples;
    }
  }

  // dealerting_evaluation_window - computed: false, optional: false, required: true
  private _dealertingEvaluationWindow?: number; 
  public get dealertingEvaluationWindow() {
    return this.getNumberAttribute('dealerting_evaluation_window');
  }
  public set dealertingEvaluationWindow(value: number) {
    this._dealertingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingEvaluationWindowInput() {
    return this._dealertingEvaluationWindow;
  }

  // dealerting_samples - computed: false, optional: false, required: true
  private _dealertingSamples?: number; 
  public get dealertingSamples() {
    return this.getNumberAttribute('dealerting_samples');
  }
  public set dealertingSamples(value: number) {
    this._dealertingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingSamplesInput() {
    return this._dealertingSamples;
  }

  // violating_evaluation_window - computed: false, optional: false, required: true
  private _violatingEvaluationWindow?: number; 
  public get violatingEvaluationWindow() {
    return this.getNumberAttribute('violating_evaluation_window');
  }
  public set violatingEvaluationWindow(value: number) {
    this._violatingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingEvaluationWindowInput() {
    return this._violatingEvaluationWindow;
  }

  // violating_samples - computed: false, optional: false, required: true
  private _violatingSamples?: number; 
  public get violatingSamples() {
    return this.getNumberAttribute('violating_samples');
  }
  public set violatingSamples(value: number) {
    this._violatingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingSamplesInput() {
    return this._violatingSamples;
  }
}
export interface HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholds {
  /**
  * Alert if the System Load / Logical cpu core is higher than this threshold for the defined amount of samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#system_load HostAnomaliesV2#system_load}
  */
  readonly systemLoad: number;
  /**
  * event_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#event_thresholds HostAnomaliesV2#event_thresholds}
  */
  readonly eventThresholds: HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsEventThresholds;
}

export function hostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsToTerraform(struct?: HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsOutputReference | HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    system_load: cdktf.numberToTerraform(struct!.systemLoad),
    event_thresholds: hostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsEventThresholdsToTerraform(struct!.eventThresholds),
  }
}


export function hostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsToHclTerraform(struct?: HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsOutputReference | HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    system_load: {
      value: cdktf.numberToHclTerraform(struct!.systemLoad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_thresholds: {
      value: hostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsEventThresholdsToHclTerraform(struct!.eventThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsEventThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemLoad = this._systemLoad;
    }
    if (this._eventThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventThresholds = this._eventThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._systemLoad = undefined;
      this._eventThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._systemLoad = value.systemLoad;
      this._eventThresholds.internalValue = value.eventThresholds;
    }
  }

  // system_load - computed: false, optional: false, required: true
  private _systemLoad?: number; 
  public get systemLoad() {
    return this.getNumberAttribute('system_load');
  }
  public set systemLoad(value: number) {
    this._systemLoad = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemLoadInput() {
    return this._systemLoad;
  }

  // event_thresholds - computed: false, optional: false, required: true
  private _eventThresholds = new HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsEventThresholdsOutputReference(this, "event_thresholds");
  public get eventThresholds() {
    return this._eventThresholds;
  }
  public putEventThresholds(value: HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsEventThresholds) {
    this._eventThresholds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventThresholdsInput() {
    return this._eventThresholds.internalValue;
  }
}
export interface HostAnomaliesV2HostHighSystemLoadDetection {
  /**
  * Possible Values: `Auto`, `Custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#detection_mode HostAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#enabled HostAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#custom_thresholds HostAnomaliesV2#custom_thresholds}
  */
  readonly customThresholds?: HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholds;
}

export function hostAnomaliesV2HostHighSystemLoadDetectionToTerraform(struct?: HostAnomaliesV2HostHighSystemLoadDetectionOutputReference | HostAnomaliesV2HostHighSystemLoadDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: hostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function hostAnomaliesV2HostHighSystemLoadDetectionToHclTerraform(struct?: HostAnomaliesV2HostHighSystemLoadDetectionOutputReference | HostAnomaliesV2HostHighSystemLoadDetection): any {
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
    custom_thresholds: {
      value: hostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2HostHighSystemLoadDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostHighSystemLoadDetection | undefined {
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
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostHighSystemLoadDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: HostAnomaliesV2HostHighSystemLoadDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsEventThresholds {
  /**
  * The number of **10-second samples** that form the sliding evaluation window for dealerting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_evaluation_window HostAnomaliesV2#dealerting_evaluation_window}
  */
  readonly dealertingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must be lower the threshold to close an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_samples HostAnomaliesV2#dealerting_samples}
  */
  readonly dealertingSamples: number;
  /**
  * The number of **10-second samples** that form the sliding evaluation window to detect violating samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_evaluation_window HostAnomaliesV2#violating_evaluation_window}
  */
  readonly violatingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must exceed the threshold to trigger an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_samples HostAnomaliesV2#violating_samples}
  */
  readonly violatingSamples: number;
}

export function hostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsEventThresholdsToTerraform(struct?: HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dealerting_evaluation_window: cdktf.numberToTerraform(struct!.dealertingEvaluationWindow),
    dealerting_samples: cdktf.numberToTerraform(struct!.dealertingSamples),
    violating_evaluation_window: cdktf.numberToTerraform(struct!.violatingEvaluationWindow),
    violating_samples: cdktf.numberToTerraform(struct!.violatingSamples),
  }
}


export function hostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsEventThresholdsToHclTerraform(struct?: HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dealerting_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.dealertingEvaluationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dealerting_samples: {
      value: cdktf.numberToHclTerraform(struct!.dealertingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violating_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.violatingEvaluationWindow),
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

export class HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsEventThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsEventThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dealertingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingEvaluationWindow = this._dealertingEvaluationWindow;
    }
    if (this._dealertingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingSamples = this._dealertingSamples;
    }
    if (this._violatingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingEvaluationWindow = this._violatingEvaluationWindow;
    }
    if (this._violatingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingSamples = this._violatingSamples;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsEventThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dealertingEvaluationWindow = undefined;
      this._dealertingSamples = undefined;
      this._violatingEvaluationWindow = undefined;
      this._violatingSamples = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dealertingEvaluationWindow = value.dealertingEvaluationWindow;
      this._dealertingSamples = value.dealertingSamples;
      this._violatingEvaluationWindow = value.violatingEvaluationWindow;
      this._violatingSamples = value.violatingSamples;
    }
  }

  // dealerting_evaluation_window - computed: false, optional: false, required: true
  private _dealertingEvaluationWindow?: number; 
  public get dealertingEvaluationWindow() {
    return this.getNumberAttribute('dealerting_evaluation_window');
  }
  public set dealertingEvaluationWindow(value: number) {
    this._dealertingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingEvaluationWindowInput() {
    return this._dealertingEvaluationWindow;
  }

  // dealerting_samples - computed: false, optional: false, required: true
  private _dealertingSamples?: number; 
  public get dealertingSamples() {
    return this.getNumberAttribute('dealerting_samples');
  }
  public set dealertingSamples(value: number) {
    this._dealertingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingSamplesInput() {
    return this._dealertingSamples;
  }

  // violating_evaluation_window - computed: false, optional: false, required: true
  private _violatingEvaluationWindow?: number; 
  public get violatingEvaluationWindow() {
    return this.getNumberAttribute('violating_evaluation_window');
  }
  public set violatingEvaluationWindow(value: number) {
    this._violatingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingEvaluationWindowInput() {
    return this._violatingEvaluationWindow;
  }

  // violating_samples - computed: false, optional: false, required: true
  private _violatingSamples?: number; 
  public get violatingSamples() {
    return this.getNumberAttribute('violating_samples');
  }
  public set violatingSamples(value: number) {
    this._violatingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingSamplesInput() {
    return this._violatingSamples;
  }
}
export interface HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholds {
  /**
  * Alert if the number of Java out-of-memory exceptions is at least this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#out_of_memory_exceptions_number HostAnomaliesV2#out_of_memory_exceptions_number}
  */
  readonly outOfMemoryExceptionsNumber: number;
  /**
  * event_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#event_thresholds HostAnomaliesV2#event_thresholds}
  */
  readonly eventThresholds: HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsEventThresholds;
}

export function hostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsToTerraform(struct?: HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsOutputReference | HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    out_of_memory_exceptions_number: cdktf.numberToTerraform(struct!.outOfMemoryExceptionsNumber),
    event_thresholds: hostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsEventThresholdsToTerraform(struct!.eventThresholds),
  }
}


export function hostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsToHclTerraform(struct?: HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsOutputReference | HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    out_of_memory_exceptions_number: {
      value: cdktf.numberToHclTerraform(struct!.outOfMemoryExceptionsNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_thresholds: {
      value: hostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsEventThresholdsToHclTerraform(struct!.eventThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsEventThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outOfMemoryExceptionsNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfMemoryExceptionsNumber = this._outOfMemoryExceptionsNumber;
    }
    if (this._eventThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventThresholds = this._eventThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outOfMemoryExceptionsNumber = undefined;
      this._eventThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outOfMemoryExceptionsNumber = value.outOfMemoryExceptionsNumber;
      this._eventThresholds.internalValue = value.eventThresholds;
    }
  }

  // out_of_memory_exceptions_number - computed: false, optional: false, required: true
  private _outOfMemoryExceptionsNumber?: number; 
  public get outOfMemoryExceptionsNumber() {
    return this.getNumberAttribute('out_of_memory_exceptions_number');
  }
  public set outOfMemoryExceptionsNumber(value: number) {
    this._outOfMemoryExceptionsNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfMemoryExceptionsNumberInput() {
    return this._outOfMemoryExceptionsNumber;
  }

  // event_thresholds - computed: false, optional: false, required: true
  private _eventThresholds = new HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsEventThresholdsOutputReference(this, "event_thresholds");
  public get eventThresholds() {
    return this._eventThresholds;
  }
  public putEventThresholds(value: HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsEventThresholds) {
    this._eventThresholds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventThresholdsInput() {
    return this._eventThresholds.internalValue;
  }
}
export interface HostAnomaliesV2HostOutOfMemoryDetection {
  /**
  * Detection mode for Java out of memory problem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#detection_mode HostAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Detect Java out of memory problem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#enabled HostAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#custom_thresholds HostAnomaliesV2#custom_thresholds}
  */
  readonly customThresholds?: HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholds;
}

export function hostAnomaliesV2HostOutOfMemoryDetectionToTerraform(struct?: HostAnomaliesV2HostOutOfMemoryDetectionOutputReference | HostAnomaliesV2HostOutOfMemoryDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: hostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function hostAnomaliesV2HostOutOfMemoryDetectionToHclTerraform(struct?: HostAnomaliesV2HostOutOfMemoryDetectionOutputReference | HostAnomaliesV2HostOutOfMemoryDetection): any {
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
    custom_thresholds: {
      value: hostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2HostOutOfMemoryDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostOutOfMemoryDetection | undefined {
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
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostOutOfMemoryDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: HostAnomaliesV2HostOutOfMemoryDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsEventThresholds {
  /**
  * The number of **10-second samples** that form the sliding evaluation window for dealerting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_evaluation_window HostAnomaliesV2#dealerting_evaluation_window}
  */
  readonly dealertingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must be lower the threshold to close an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_samples HostAnomaliesV2#dealerting_samples}
  */
  readonly dealertingSamples: number;
  /**
  * The number of **10-second samples** that form the sliding evaluation window to detect violating samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_evaluation_window HostAnomaliesV2#violating_evaluation_window}
  */
  readonly violatingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must exceed the threshold to trigger an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_samples HostAnomaliesV2#violating_samples}
  */
  readonly violatingSamples: number;
}

export function hostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsEventThresholdsToTerraform(struct?: HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dealerting_evaluation_window: cdktf.numberToTerraform(struct!.dealertingEvaluationWindow),
    dealerting_samples: cdktf.numberToTerraform(struct!.dealertingSamples),
    violating_evaluation_window: cdktf.numberToTerraform(struct!.violatingEvaluationWindow),
    violating_samples: cdktf.numberToTerraform(struct!.violatingSamples),
  }
}


export function hostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsEventThresholdsToHclTerraform(struct?: HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dealerting_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.dealertingEvaluationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dealerting_samples: {
      value: cdktf.numberToHclTerraform(struct!.dealertingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violating_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.violatingEvaluationWindow),
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

export class HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsEventThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsEventThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dealertingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingEvaluationWindow = this._dealertingEvaluationWindow;
    }
    if (this._dealertingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingSamples = this._dealertingSamples;
    }
    if (this._violatingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingEvaluationWindow = this._violatingEvaluationWindow;
    }
    if (this._violatingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingSamples = this._violatingSamples;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsEventThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dealertingEvaluationWindow = undefined;
      this._dealertingSamples = undefined;
      this._violatingEvaluationWindow = undefined;
      this._violatingSamples = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dealertingEvaluationWindow = value.dealertingEvaluationWindow;
      this._dealertingSamples = value.dealertingSamples;
      this._violatingEvaluationWindow = value.violatingEvaluationWindow;
      this._violatingSamples = value.violatingSamples;
    }
  }

  // dealerting_evaluation_window - computed: false, optional: false, required: true
  private _dealertingEvaluationWindow?: number; 
  public get dealertingEvaluationWindow() {
    return this.getNumberAttribute('dealerting_evaluation_window');
  }
  public set dealertingEvaluationWindow(value: number) {
    this._dealertingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingEvaluationWindowInput() {
    return this._dealertingEvaluationWindow;
  }

  // dealerting_samples - computed: false, optional: false, required: true
  private _dealertingSamples?: number; 
  public get dealertingSamples() {
    return this.getNumberAttribute('dealerting_samples');
  }
  public set dealertingSamples(value: number) {
    this._dealertingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingSamplesInput() {
    return this._dealertingSamples;
  }

  // violating_evaluation_window - computed: false, optional: false, required: true
  private _violatingEvaluationWindow?: number; 
  public get violatingEvaluationWindow() {
    return this.getNumberAttribute('violating_evaluation_window');
  }
  public set violatingEvaluationWindow(value: number) {
    this._violatingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingEvaluationWindowInput() {
    return this._violatingEvaluationWindow;
  }

  // violating_samples - computed: false, optional: false, required: true
  private _violatingSamples?: number; 
  public get violatingSamples() {
    return this.getNumberAttribute('violating_samples');
  }
  public set violatingSamples(value: number) {
    this._violatingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingSamplesInput() {
    return this._violatingSamples;
  }
}
export interface HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholds {
  /**
  * Alert if the number of Java out-of-threads exceptions is at least this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#out_of_threads_exceptions_number HostAnomaliesV2#out_of_threads_exceptions_number}
  */
  readonly outOfThreadsExceptionsNumber: number;
  /**
  * event_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#event_thresholds HostAnomaliesV2#event_thresholds}
  */
  readonly eventThresholds: HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsEventThresholds;
}

export function hostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsToTerraform(struct?: HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsOutputReference | HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    out_of_threads_exceptions_number: cdktf.numberToTerraform(struct!.outOfThreadsExceptionsNumber),
    event_thresholds: hostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsEventThresholdsToTerraform(struct!.eventThresholds),
  }
}


export function hostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsToHclTerraform(struct?: HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsOutputReference | HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    out_of_threads_exceptions_number: {
      value: cdktf.numberToHclTerraform(struct!.outOfThreadsExceptionsNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_thresholds: {
      value: hostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsEventThresholdsToHclTerraform(struct!.eventThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsEventThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outOfThreadsExceptionsNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfThreadsExceptionsNumber = this._outOfThreadsExceptionsNumber;
    }
    if (this._eventThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventThresholds = this._eventThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outOfThreadsExceptionsNumber = undefined;
      this._eventThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outOfThreadsExceptionsNumber = value.outOfThreadsExceptionsNumber;
      this._eventThresholds.internalValue = value.eventThresholds;
    }
  }

  // out_of_threads_exceptions_number - computed: false, optional: false, required: true
  private _outOfThreadsExceptionsNumber?: number; 
  public get outOfThreadsExceptionsNumber() {
    return this.getNumberAttribute('out_of_threads_exceptions_number');
  }
  public set outOfThreadsExceptionsNumber(value: number) {
    this._outOfThreadsExceptionsNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfThreadsExceptionsNumberInput() {
    return this._outOfThreadsExceptionsNumber;
  }

  // event_thresholds - computed: false, optional: false, required: true
  private _eventThresholds = new HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsEventThresholdsOutputReference(this, "event_thresholds");
  public get eventThresholds() {
    return this._eventThresholds;
  }
  public putEventThresholds(value: HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsEventThresholds) {
    this._eventThresholds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventThresholdsInput() {
    return this._eventThresholds.internalValue;
  }
}
export interface HostAnomaliesV2HostOutOfThreadsDetection {
  /**
  * Detection mode for Java out of threads problem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#detection_mode HostAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Detect Java out of threads problem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#enabled HostAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#custom_thresholds HostAnomaliesV2#custom_thresholds}
  */
  readonly customThresholds?: HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholds;
}

export function hostAnomaliesV2HostOutOfThreadsDetectionToTerraform(struct?: HostAnomaliesV2HostOutOfThreadsDetectionOutputReference | HostAnomaliesV2HostOutOfThreadsDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: hostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function hostAnomaliesV2HostOutOfThreadsDetectionToHclTerraform(struct?: HostAnomaliesV2HostOutOfThreadsDetectionOutputReference | HostAnomaliesV2HostOutOfThreadsDetection): any {
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
    custom_thresholds: {
      value: hostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2HostOutOfThreadsDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2HostOutOfThreadsDetection | undefined {
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
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2HostOutOfThreadsDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: HostAnomaliesV2HostOutOfThreadsDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface HostAnomaliesV2Host {
  /**
  * connection_lost_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#connection_lost_detection HostAnomaliesV2#connection_lost_detection}
  */
  readonly connectionLostDetection: HostAnomaliesV2HostConnectionLostDetection;
  /**
  * high_cpu_saturation_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#high_cpu_saturation_detection HostAnomaliesV2#high_cpu_saturation_detection}
  */
  readonly highCpuSaturationDetection: HostAnomaliesV2HostHighCpuSaturationDetection;
  /**
  * high_gc_activity_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#high_gc_activity_detection HostAnomaliesV2#high_gc_activity_detection}
  */
  readonly highGcActivityDetection: HostAnomaliesV2HostHighGcActivityDetection;
  /**
  * high_memory_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#high_memory_detection HostAnomaliesV2#high_memory_detection}
  */
  readonly highMemoryDetection: HostAnomaliesV2HostHighMemoryDetection;
  /**
  * high_system_load_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#high_system_load_detection HostAnomaliesV2#high_system_load_detection}
  */
  readonly highSystemLoadDetection: HostAnomaliesV2HostHighSystemLoadDetection;
  /**
  * out_of_memory_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#out_of_memory_detection HostAnomaliesV2#out_of_memory_detection}
  */
  readonly outOfMemoryDetection: HostAnomaliesV2HostOutOfMemoryDetection;
  /**
  * out_of_threads_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#out_of_threads_detection HostAnomaliesV2#out_of_threads_detection}
  */
  readonly outOfThreadsDetection: HostAnomaliesV2HostOutOfThreadsDetection;
}

export function hostAnomaliesV2HostToTerraform(struct?: HostAnomaliesV2HostOutputReference | HostAnomaliesV2Host): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_lost_detection: hostAnomaliesV2HostConnectionLostDetectionToTerraform(struct!.connectionLostDetection),
    high_cpu_saturation_detection: hostAnomaliesV2HostHighCpuSaturationDetectionToTerraform(struct!.highCpuSaturationDetection),
    high_gc_activity_detection: hostAnomaliesV2HostHighGcActivityDetectionToTerraform(struct!.highGcActivityDetection),
    high_memory_detection: hostAnomaliesV2HostHighMemoryDetectionToTerraform(struct!.highMemoryDetection),
    high_system_load_detection: hostAnomaliesV2HostHighSystemLoadDetectionToTerraform(struct!.highSystemLoadDetection),
    out_of_memory_detection: hostAnomaliesV2HostOutOfMemoryDetectionToTerraform(struct!.outOfMemoryDetection),
    out_of_threads_detection: hostAnomaliesV2HostOutOfThreadsDetectionToTerraform(struct!.outOfThreadsDetection),
  }
}


export function hostAnomaliesV2HostToHclTerraform(struct?: HostAnomaliesV2HostOutputReference | HostAnomaliesV2Host): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_lost_detection: {
      value: hostAnomaliesV2HostConnectionLostDetectionToHclTerraform(struct!.connectionLostDetection),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostConnectionLostDetectionList",
    },
    high_cpu_saturation_detection: {
      value: hostAnomaliesV2HostHighCpuSaturationDetectionToHclTerraform(struct!.highCpuSaturationDetection),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostHighCpuSaturationDetectionList",
    },
    high_gc_activity_detection: {
      value: hostAnomaliesV2HostHighGcActivityDetectionToHclTerraform(struct!.highGcActivityDetection),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostHighGcActivityDetectionList",
    },
    high_memory_detection: {
      value: hostAnomaliesV2HostHighMemoryDetectionToHclTerraform(struct!.highMemoryDetection),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostHighMemoryDetectionList",
    },
    high_system_load_detection: {
      value: hostAnomaliesV2HostHighSystemLoadDetectionToHclTerraform(struct!.highSystemLoadDetection),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostHighSystemLoadDetectionList",
    },
    out_of_memory_detection: {
      value: hostAnomaliesV2HostOutOfMemoryDetectionToHclTerraform(struct!.outOfMemoryDetection),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostOutOfMemoryDetectionList",
    },
    out_of_threads_detection: {
      value: hostAnomaliesV2HostOutOfThreadsDetectionToHclTerraform(struct!.outOfThreadsDetection),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2HostOutOfThreadsDetectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2HostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2Host | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionLostDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLostDetection = this._connectionLostDetection?.internalValue;
    }
    if (this._highCpuSaturationDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.highCpuSaturationDetection = this._highCpuSaturationDetection?.internalValue;
    }
    if (this._highGcActivityDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.highGcActivityDetection = this._highGcActivityDetection?.internalValue;
    }
    if (this._highMemoryDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.highMemoryDetection = this._highMemoryDetection?.internalValue;
    }
    if (this._highSystemLoadDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.highSystemLoadDetection = this._highSystemLoadDetection?.internalValue;
    }
    if (this._outOfMemoryDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfMemoryDetection = this._outOfMemoryDetection?.internalValue;
    }
    if (this._outOfThreadsDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfThreadsDetection = this._outOfThreadsDetection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2Host | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionLostDetection.internalValue = undefined;
      this._highCpuSaturationDetection.internalValue = undefined;
      this._highGcActivityDetection.internalValue = undefined;
      this._highMemoryDetection.internalValue = undefined;
      this._highSystemLoadDetection.internalValue = undefined;
      this._outOfMemoryDetection.internalValue = undefined;
      this._outOfThreadsDetection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionLostDetection.internalValue = value.connectionLostDetection;
      this._highCpuSaturationDetection.internalValue = value.highCpuSaturationDetection;
      this._highGcActivityDetection.internalValue = value.highGcActivityDetection;
      this._highMemoryDetection.internalValue = value.highMemoryDetection;
      this._highSystemLoadDetection.internalValue = value.highSystemLoadDetection;
      this._outOfMemoryDetection.internalValue = value.outOfMemoryDetection;
      this._outOfThreadsDetection.internalValue = value.outOfThreadsDetection;
    }
  }

  // connection_lost_detection - computed: false, optional: false, required: true
  private _connectionLostDetection = new HostAnomaliesV2HostConnectionLostDetectionOutputReference(this, "connection_lost_detection");
  public get connectionLostDetection() {
    return this._connectionLostDetection;
  }
  public putConnectionLostDetection(value: HostAnomaliesV2HostConnectionLostDetection) {
    this._connectionLostDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLostDetectionInput() {
    return this._connectionLostDetection.internalValue;
  }

  // high_cpu_saturation_detection - computed: false, optional: false, required: true
  private _highCpuSaturationDetection = new HostAnomaliesV2HostHighCpuSaturationDetectionOutputReference(this, "high_cpu_saturation_detection");
  public get highCpuSaturationDetection() {
    return this._highCpuSaturationDetection;
  }
  public putHighCpuSaturationDetection(value: HostAnomaliesV2HostHighCpuSaturationDetection) {
    this._highCpuSaturationDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highCpuSaturationDetectionInput() {
    return this._highCpuSaturationDetection.internalValue;
  }

  // high_gc_activity_detection - computed: false, optional: false, required: true
  private _highGcActivityDetection = new HostAnomaliesV2HostHighGcActivityDetectionOutputReference(this, "high_gc_activity_detection");
  public get highGcActivityDetection() {
    return this._highGcActivityDetection;
  }
  public putHighGcActivityDetection(value: HostAnomaliesV2HostHighGcActivityDetection) {
    this._highGcActivityDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highGcActivityDetectionInput() {
    return this._highGcActivityDetection.internalValue;
  }

  // high_memory_detection - computed: false, optional: false, required: true
  private _highMemoryDetection = new HostAnomaliesV2HostHighMemoryDetectionOutputReference(this, "high_memory_detection");
  public get highMemoryDetection() {
    return this._highMemoryDetection;
  }
  public putHighMemoryDetection(value: HostAnomaliesV2HostHighMemoryDetection) {
    this._highMemoryDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highMemoryDetectionInput() {
    return this._highMemoryDetection.internalValue;
  }

  // high_system_load_detection - computed: false, optional: false, required: true
  private _highSystemLoadDetection = new HostAnomaliesV2HostHighSystemLoadDetectionOutputReference(this, "high_system_load_detection");
  public get highSystemLoadDetection() {
    return this._highSystemLoadDetection;
  }
  public putHighSystemLoadDetection(value: HostAnomaliesV2HostHighSystemLoadDetection) {
    this._highSystemLoadDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highSystemLoadDetectionInput() {
    return this._highSystemLoadDetection.internalValue;
  }

  // out_of_memory_detection - computed: false, optional: false, required: true
  private _outOfMemoryDetection = new HostAnomaliesV2HostOutOfMemoryDetectionOutputReference(this, "out_of_memory_detection");
  public get outOfMemoryDetection() {
    return this._outOfMemoryDetection;
  }
  public putOutOfMemoryDetection(value: HostAnomaliesV2HostOutOfMemoryDetection) {
    this._outOfMemoryDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfMemoryDetectionInput() {
    return this._outOfMemoryDetection.internalValue;
  }

  // out_of_threads_detection - computed: false, optional: false, required: true
  private _outOfThreadsDetection = new HostAnomaliesV2HostOutOfThreadsDetectionOutputReference(this, "out_of_threads_detection");
  public get outOfThreadsDetection() {
    return this._outOfThreadsDetection;
  }
  public putOutOfThreadsDetection(value: HostAnomaliesV2HostOutOfThreadsDetection) {
    this._outOfThreadsDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfThreadsDetectionInput() {
    return this._outOfThreadsDetection.internalValue;
  }
}
export interface HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsEventThresholds {
  /**
  * The number of **10-second samples** that form the sliding evaluation window for dealerting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_evaluation_window HostAnomaliesV2#dealerting_evaluation_window}
  */
  readonly dealertingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must be lower the threshold to close an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_samples HostAnomaliesV2#dealerting_samples}
  */
  readonly dealertingSamples: number;
  /**
  * The number of **10-second samples** that form the sliding evaluation window to detect violating samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_evaluation_window HostAnomaliesV2#violating_evaluation_window}
  */
  readonly violatingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must exceed the threshold to trigger an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_samples HostAnomaliesV2#violating_samples}
  */
  readonly violatingSamples: number;
}

export function hostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsEventThresholdsToTerraform(struct?: HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dealerting_evaluation_window: cdktf.numberToTerraform(struct!.dealertingEvaluationWindow),
    dealerting_samples: cdktf.numberToTerraform(struct!.dealertingSamples),
    violating_evaluation_window: cdktf.numberToTerraform(struct!.violatingEvaluationWindow),
    violating_samples: cdktf.numberToTerraform(struct!.violatingSamples),
  }
}


export function hostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsEventThresholdsToHclTerraform(struct?: HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dealerting_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.dealertingEvaluationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dealerting_samples: {
      value: cdktf.numberToHclTerraform(struct!.dealertingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violating_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.violatingEvaluationWindow),
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

export class HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsEventThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsEventThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dealertingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingEvaluationWindow = this._dealertingEvaluationWindow;
    }
    if (this._dealertingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingSamples = this._dealertingSamples;
    }
    if (this._violatingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingEvaluationWindow = this._violatingEvaluationWindow;
    }
    if (this._violatingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingSamples = this._violatingSamples;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsEventThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dealertingEvaluationWindow = undefined;
      this._dealertingSamples = undefined;
      this._violatingEvaluationWindow = undefined;
      this._violatingSamples = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dealertingEvaluationWindow = value.dealertingEvaluationWindow;
      this._dealertingSamples = value.dealertingSamples;
      this._violatingEvaluationWindow = value.violatingEvaluationWindow;
      this._violatingSamples = value.violatingSamples;
    }
  }

  // dealerting_evaluation_window - computed: false, optional: false, required: true
  private _dealertingEvaluationWindow?: number; 
  public get dealertingEvaluationWindow() {
    return this.getNumberAttribute('dealerting_evaluation_window');
  }
  public set dealertingEvaluationWindow(value: number) {
    this._dealertingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingEvaluationWindowInput() {
    return this._dealertingEvaluationWindow;
  }

  // dealerting_samples - computed: false, optional: false, required: true
  private _dealertingSamples?: number; 
  public get dealertingSamples() {
    return this.getNumberAttribute('dealerting_samples');
  }
  public set dealertingSamples(value: number) {
    this._dealertingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingSamplesInput() {
    return this._dealertingSamples;
  }

  // violating_evaluation_window - computed: false, optional: false, required: true
  private _violatingEvaluationWindow?: number; 
  public get violatingEvaluationWindow() {
    return this.getNumberAttribute('violating_evaluation_window');
  }
  public set violatingEvaluationWindow(value: number) {
    this._violatingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingEvaluationWindowInput() {
    return this._violatingEvaluationWindow;
  }

  // violating_samples - computed: false, optional: false, required: true
  private _violatingSamples?: number; 
  public get violatingSamples() {
    return this.getNumberAttribute('violating_samples');
  }
  public set violatingSamples(value: number) {
    this._violatingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingSamplesInput() {
    return this._violatingSamples;
  }
}
export interface HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholds {
  /**
  * Alert if sent/received traffic utilization is higher than this threshold for the defined amount of samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#errors_percentage HostAnomaliesV2#errors_percentage}
  */
  readonly errorsPercentage: number;
  /**
  * event_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#event_thresholds HostAnomaliesV2#event_thresholds}
  */
  readonly eventThresholds: HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsEventThresholds;
}

export function hostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsToTerraform(struct?: HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsOutputReference | HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    errors_percentage: cdktf.numberToTerraform(struct!.errorsPercentage),
    event_thresholds: hostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsEventThresholdsToTerraform(struct!.eventThresholds),
  }
}


export function hostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsToHclTerraform(struct?: HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsOutputReference | HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    errors_percentage: {
      value: cdktf.numberToHclTerraform(struct!.errorsPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_thresholds: {
      value: hostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsEventThresholdsToHclTerraform(struct!.eventThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsEventThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorsPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorsPercentage = this._errorsPercentage;
    }
    if (this._eventThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventThresholds = this._eventThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorsPercentage = undefined;
      this._eventThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorsPercentage = value.errorsPercentage;
      this._eventThresholds.internalValue = value.eventThresholds;
    }
  }

  // errors_percentage - computed: false, optional: false, required: true
  private _errorsPercentage?: number; 
  public get errorsPercentage() {
    return this.getNumberAttribute('errors_percentage');
  }
  public set errorsPercentage(value: number) {
    this._errorsPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorsPercentageInput() {
    return this._errorsPercentage;
  }

  // event_thresholds - computed: false, optional: false, required: true
  private _eventThresholds = new HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsEventThresholdsOutputReference(this, "event_thresholds");
  public get eventThresholds() {
    return this._eventThresholds;
  }
  public putEventThresholds(value: HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsEventThresholds) {
    this._eventThresholds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventThresholdsInput() {
    return this._eventThresholds.internalValue;
  }
}
export interface HostAnomaliesV2NetworkHighNetworkDetection {
  /**
  * Detection mode for high network utilization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#detection_mode HostAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Detect high network utilization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#enabled HostAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#custom_thresholds HostAnomaliesV2#custom_thresholds}
  */
  readonly customThresholds?: HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholds;
}

export function hostAnomaliesV2NetworkHighNetworkDetectionToTerraform(struct?: HostAnomaliesV2NetworkHighNetworkDetectionOutputReference | HostAnomaliesV2NetworkHighNetworkDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: hostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function hostAnomaliesV2NetworkHighNetworkDetectionToHclTerraform(struct?: HostAnomaliesV2NetworkHighNetworkDetectionOutputReference | HostAnomaliesV2NetworkHighNetworkDetection): any {
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
    custom_thresholds: {
      value: hostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2NetworkHighNetworkDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2NetworkHighNetworkDetection | undefined {
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
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2NetworkHighNetworkDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: HostAnomaliesV2NetworkHighNetworkDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsEventThresholds {
  /**
  * The number of **10-second samples** that form the sliding evaluation window for dealerting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_evaluation_window HostAnomaliesV2#dealerting_evaluation_window}
  */
  readonly dealertingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must be lower the threshold to close an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_samples HostAnomaliesV2#dealerting_samples}
  */
  readonly dealertingSamples: number;
  /**
  * The number of **10-second samples** that form the sliding evaluation window to detect violating samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_evaluation_window HostAnomaliesV2#violating_evaluation_window}
  */
  readonly violatingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must exceed the threshold to trigger an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_samples HostAnomaliesV2#violating_samples}
  */
  readonly violatingSamples: number;
}

export function hostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsEventThresholdsToTerraform(struct?: HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dealerting_evaluation_window: cdktf.numberToTerraform(struct!.dealertingEvaluationWindow),
    dealerting_samples: cdktf.numberToTerraform(struct!.dealertingSamples),
    violating_evaluation_window: cdktf.numberToTerraform(struct!.violatingEvaluationWindow),
    violating_samples: cdktf.numberToTerraform(struct!.violatingSamples),
  }
}


export function hostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsEventThresholdsToHclTerraform(struct?: HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dealerting_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.dealertingEvaluationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dealerting_samples: {
      value: cdktf.numberToHclTerraform(struct!.dealertingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violating_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.violatingEvaluationWindow),
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

export class HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsEventThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsEventThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dealertingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingEvaluationWindow = this._dealertingEvaluationWindow;
    }
    if (this._dealertingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingSamples = this._dealertingSamples;
    }
    if (this._violatingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingEvaluationWindow = this._violatingEvaluationWindow;
    }
    if (this._violatingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingSamples = this._violatingSamples;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsEventThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dealertingEvaluationWindow = undefined;
      this._dealertingSamples = undefined;
      this._violatingEvaluationWindow = undefined;
      this._violatingSamples = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dealertingEvaluationWindow = value.dealertingEvaluationWindow;
      this._dealertingSamples = value.dealertingSamples;
      this._violatingEvaluationWindow = value.violatingEvaluationWindow;
      this._violatingSamples = value.violatingSamples;
    }
  }

  // dealerting_evaluation_window - computed: false, optional: false, required: true
  private _dealertingEvaluationWindow?: number; 
  public get dealertingEvaluationWindow() {
    return this.getNumberAttribute('dealerting_evaluation_window');
  }
  public set dealertingEvaluationWindow(value: number) {
    this._dealertingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingEvaluationWindowInput() {
    return this._dealertingEvaluationWindow;
  }

  // dealerting_samples - computed: false, optional: false, required: true
  private _dealertingSamples?: number; 
  public get dealertingSamples() {
    return this.getNumberAttribute('dealerting_samples');
  }
  public set dealertingSamples(value: number) {
    this._dealertingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingSamplesInput() {
    return this._dealertingSamples;
  }

  // violating_evaluation_window - computed: false, optional: false, required: true
  private _violatingEvaluationWindow?: number; 
  public get violatingEvaluationWindow() {
    return this.getNumberAttribute('violating_evaluation_window');
  }
  public set violatingEvaluationWindow(value: number) {
    this._violatingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingEvaluationWindowInput() {
    return this._violatingEvaluationWindow;
  }

  // violating_samples - computed: false, optional: false, required: true
  private _violatingSamples?: number; 
  public get violatingSamples() {
    return this.getNumberAttribute('violating_samples');
  }
  public set violatingSamples(value: number) {
    this._violatingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingSamplesInput() {
    return this._violatingSamples;
  }
}
export interface HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholds {
  /**
  * Receive/transmit dropped packet percentage threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dropped_packets_percentage HostAnomaliesV2#dropped_packets_percentage}
  */
  readonly droppedPacketsPercentage: number;
  /**
  * Total packets rate threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#total_packets_rate HostAnomaliesV2#total_packets_rate}
  */
  readonly totalPacketsRate: number;
  /**
  * event_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#event_thresholds HostAnomaliesV2#event_thresholds}
  */
  readonly eventThresholds: HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsEventThresholds;
}

export function hostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsToTerraform(struct?: HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsOutputReference | HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dropped_packets_percentage: cdktf.numberToTerraform(struct!.droppedPacketsPercentage),
    total_packets_rate: cdktf.numberToTerraform(struct!.totalPacketsRate),
    event_thresholds: hostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsEventThresholdsToTerraform(struct!.eventThresholds),
  }
}


export function hostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsToHclTerraform(struct?: HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsOutputReference | HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dropped_packets_percentage: {
      value: cdktf.numberToHclTerraform(struct!.droppedPacketsPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_packets_rate: {
      value: cdktf.numberToHclTerraform(struct!.totalPacketsRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_thresholds: {
      value: hostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsEventThresholdsToHclTerraform(struct!.eventThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsEventThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._droppedPacketsPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.droppedPacketsPercentage = this._droppedPacketsPercentage;
    }
    if (this._totalPacketsRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPacketsRate = this._totalPacketsRate;
    }
    if (this._eventThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventThresholds = this._eventThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._droppedPacketsPercentage = undefined;
      this._totalPacketsRate = undefined;
      this._eventThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._droppedPacketsPercentage = value.droppedPacketsPercentage;
      this._totalPacketsRate = value.totalPacketsRate;
      this._eventThresholds.internalValue = value.eventThresholds;
    }
  }

  // dropped_packets_percentage - computed: false, optional: false, required: true
  private _droppedPacketsPercentage?: number; 
  public get droppedPacketsPercentage() {
    return this.getNumberAttribute('dropped_packets_percentage');
  }
  public set droppedPacketsPercentage(value: number) {
    this._droppedPacketsPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get droppedPacketsPercentageInput() {
    return this._droppedPacketsPercentage;
  }

  // total_packets_rate - computed: false, optional: false, required: true
  private _totalPacketsRate?: number; 
  public get totalPacketsRate() {
    return this.getNumberAttribute('total_packets_rate');
  }
  public set totalPacketsRate(value: number) {
    this._totalPacketsRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPacketsRateInput() {
    return this._totalPacketsRate;
  }

  // event_thresholds - computed: false, optional: false, required: true
  private _eventThresholds = new HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsEventThresholdsOutputReference(this, "event_thresholds");
  public get eventThresholds() {
    return this._eventThresholds;
  }
  public putEventThresholds(value: HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsEventThresholds) {
    this._eventThresholds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventThresholdsInput() {
    return this._eventThresholds.internalValue;
  }
}
export interface HostAnomaliesV2NetworkNetworkDroppedPacketsDetection {
  /**
  * Detection mode for high number of dropped packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#detection_mode HostAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Detect high number of dropped packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#enabled HostAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#custom_thresholds HostAnomaliesV2#custom_thresholds}
  */
  readonly customThresholds?: HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholds;
}

export function hostAnomaliesV2NetworkNetworkDroppedPacketsDetectionToTerraform(struct?: HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionOutputReference | HostAnomaliesV2NetworkNetworkDroppedPacketsDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: hostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function hostAnomaliesV2NetworkNetworkDroppedPacketsDetectionToHclTerraform(struct?: HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionOutputReference | HostAnomaliesV2NetworkNetworkDroppedPacketsDetection): any {
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
    custom_thresholds: {
      value: hostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2NetworkNetworkDroppedPacketsDetection | undefined {
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
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2NetworkNetworkDroppedPacketsDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsEventThresholds {
  /**
  * The number of **10-second samples** that form the sliding evaluation window for dealerting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_evaluation_window HostAnomaliesV2#dealerting_evaluation_window}
  */
  readonly dealertingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must be lower the threshold to close an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_samples HostAnomaliesV2#dealerting_samples}
  */
  readonly dealertingSamples: number;
  /**
  * The number of **10-second samples** that form the sliding evaluation window to detect violating samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_evaluation_window HostAnomaliesV2#violating_evaluation_window}
  */
  readonly violatingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must exceed the threshold to trigger an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_samples HostAnomaliesV2#violating_samples}
  */
  readonly violatingSamples: number;
}

export function hostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsEventThresholdsToTerraform(struct?: HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dealerting_evaluation_window: cdktf.numberToTerraform(struct!.dealertingEvaluationWindow),
    dealerting_samples: cdktf.numberToTerraform(struct!.dealertingSamples),
    violating_evaluation_window: cdktf.numberToTerraform(struct!.violatingEvaluationWindow),
    violating_samples: cdktf.numberToTerraform(struct!.violatingSamples),
  }
}


export function hostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsEventThresholdsToHclTerraform(struct?: HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dealerting_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.dealertingEvaluationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dealerting_samples: {
      value: cdktf.numberToHclTerraform(struct!.dealertingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violating_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.violatingEvaluationWindow),
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

export class HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsEventThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsEventThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dealertingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingEvaluationWindow = this._dealertingEvaluationWindow;
    }
    if (this._dealertingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingSamples = this._dealertingSamples;
    }
    if (this._violatingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingEvaluationWindow = this._violatingEvaluationWindow;
    }
    if (this._violatingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingSamples = this._violatingSamples;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsEventThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dealertingEvaluationWindow = undefined;
      this._dealertingSamples = undefined;
      this._violatingEvaluationWindow = undefined;
      this._violatingSamples = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dealertingEvaluationWindow = value.dealertingEvaluationWindow;
      this._dealertingSamples = value.dealertingSamples;
      this._violatingEvaluationWindow = value.violatingEvaluationWindow;
      this._violatingSamples = value.violatingSamples;
    }
  }

  // dealerting_evaluation_window - computed: false, optional: false, required: true
  private _dealertingEvaluationWindow?: number; 
  public get dealertingEvaluationWindow() {
    return this.getNumberAttribute('dealerting_evaluation_window');
  }
  public set dealertingEvaluationWindow(value: number) {
    this._dealertingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingEvaluationWindowInput() {
    return this._dealertingEvaluationWindow;
  }

  // dealerting_samples - computed: false, optional: false, required: true
  private _dealertingSamples?: number; 
  public get dealertingSamples() {
    return this.getNumberAttribute('dealerting_samples');
  }
  public set dealertingSamples(value: number) {
    this._dealertingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingSamplesInput() {
    return this._dealertingSamples;
  }

  // violating_evaluation_window - computed: false, optional: false, required: true
  private _violatingEvaluationWindow?: number; 
  public get violatingEvaluationWindow() {
    return this.getNumberAttribute('violating_evaluation_window');
  }
  public set violatingEvaluationWindow(value: number) {
    this._violatingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingEvaluationWindowInput() {
    return this._violatingEvaluationWindow;
  }

  // violating_samples - computed: false, optional: false, required: true
  private _violatingSamples?: number; 
  public get violatingSamples() {
    return this.getNumberAttribute('violating_samples');
  }
  public set violatingSamples(value: number) {
    this._violatingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingSamplesInput() {
    return this._violatingSamples;
  }
}
export interface HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholds {
  /**
  * Receive/transmit error packet percentage threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#errors_percentage HostAnomaliesV2#errors_percentage}
  */
  readonly errorsPercentage: number;
  /**
  * Total packets rate threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#total_packets_rate HostAnomaliesV2#total_packets_rate}
  */
  readonly totalPacketsRate: number;
  /**
  * event_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#event_thresholds HostAnomaliesV2#event_thresholds}
  */
  readonly eventThresholds: HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsEventThresholds;
}

export function hostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsToTerraform(struct?: HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsOutputReference | HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    errors_percentage: cdktf.numberToTerraform(struct!.errorsPercentage),
    total_packets_rate: cdktf.numberToTerraform(struct!.totalPacketsRate),
    event_thresholds: hostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsEventThresholdsToTerraform(struct!.eventThresholds),
  }
}


export function hostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsToHclTerraform(struct?: HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsOutputReference | HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    errors_percentage: {
      value: cdktf.numberToHclTerraform(struct!.errorsPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_packets_rate: {
      value: cdktf.numberToHclTerraform(struct!.totalPacketsRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_thresholds: {
      value: hostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsEventThresholdsToHclTerraform(struct!.eventThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsEventThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorsPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorsPercentage = this._errorsPercentage;
    }
    if (this._totalPacketsRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPacketsRate = this._totalPacketsRate;
    }
    if (this._eventThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventThresholds = this._eventThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorsPercentage = undefined;
      this._totalPacketsRate = undefined;
      this._eventThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorsPercentage = value.errorsPercentage;
      this._totalPacketsRate = value.totalPacketsRate;
      this._eventThresholds.internalValue = value.eventThresholds;
    }
  }

  // errors_percentage - computed: false, optional: false, required: true
  private _errorsPercentage?: number; 
  public get errorsPercentage() {
    return this.getNumberAttribute('errors_percentage');
  }
  public set errorsPercentage(value: number) {
    this._errorsPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorsPercentageInput() {
    return this._errorsPercentage;
  }

  // total_packets_rate - computed: false, optional: false, required: true
  private _totalPacketsRate?: number; 
  public get totalPacketsRate() {
    return this.getNumberAttribute('total_packets_rate');
  }
  public set totalPacketsRate(value: number) {
    this._totalPacketsRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPacketsRateInput() {
    return this._totalPacketsRate;
  }

  // event_thresholds - computed: false, optional: false, required: true
  private _eventThresholds = new HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsEventThresholdsOutputReference(this, "event_thresholds");
  public get eventThresholds() {
    return this._eventThresholds;
  }
  public putEventThresholds(value: HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsEventThresholds) {
    this._eventThresholds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventThresholdsInput() {
    return this._eventThresholds.internalValue;
  }
}
export interface HostAnomaliesV2NetworkNetworkErrorsDetection {
  /**
  * Detection mode for high number of network errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#detection_mode HostAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Detect high number of network errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#enabled HostAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#custom_thresholds HostAnomaliesV2#custom_thresholds}
  */
  readonly customThresholds?: HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholds;
}

export function hostAnomaliesV2NetworkNetworkErrorsDetectionToTerraform(struct?: HostAnomaliesV2NetworkNetworkErrorsDetectionOutputReference | HostAnomaliesV2NetworkNetworkErrorsDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: hostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function hostAnomaliesV2NetworkNetworkErrorsDetectionToHclTerraform(struct?: HostAnomaliesV2NetworkNetworkErrorsDetectionOutputReference | HostAnomaliesV2NetworkNetworkErrorsDetection): any {
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
    custom_thresholds: {
      value: hostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2NetworkNetworkErrorsDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2NetworkNetworkErrorsDetection | undefined {
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
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2NetworkNetworkErrorsDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: HostAnomaliesV2NetworkNetworkErrorsDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsEventThresholds {
  /**
  * The number of **10-second samples** that form the sliding evaluation window for dealerting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_evaluation_window HostAnomaliesV2#dealerting_evaluation_window}
  */
  readonly dealertingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must be lower the threshold to close an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_samples HostAnomaliesV2#dealerting_samples}
  */
  readonly dealertingSamples: number;
  /**
  * The number of **10-second samples** that form the sliding evaluation window to detect violating samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_evaluation_window HostAnomaliesV2#violating_evaluation_window}
  */
  readonly violatingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must exceed the threshold to trigger an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_samples HostAnomaliesV2#violating_samples}
  */
  readonly violatingSamples: number;
}

export function hostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsEventThresholdsToTerraform(struct?: HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dealerting_evaluation_window: cdktf.numberToTerraform(struct!.dealertingEvaluationWindow),
    dealerting_samples: cdktf.numberToTerraform(struct!.dealertingSamples),
    violating_evaluation_window: cdktf.numberToTerraform(struct!.violatingEvaluationWindow),
    violating_samples: cdktf.numberToTerraform(struct!.violatingSamples),
  }
}


export function hostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsEventThresholdsToHclTerraform(struct?: HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dealerting_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.dealertingEvaluationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dealerting_samples: {
      value: cdktf.numberToHclTerraform(struct!.dealertingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violating_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.violatingEvaluationWindow),
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

export class HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsEventThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsEventThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dealertingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingEvaluationWindow = this._dealertingEvaluationWindow;
    }
    if (this._dealertingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingSamples = this._dealertingSamples;
    }
    if (this._violatingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingEvaluationWindow = this._violatingEvaluationWindow;
    }
    if (this._violatingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingSamples = this._violatingSamples;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsEventThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dealertingEvaluationWindow = undefined;
      this._dealertingSamples = undefined;
      this._violatingEvaluationWindow = undefined;
      this._violatingSamples = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dealertingEvaluationWindow = value.dealertingEvaluationWindow;
      this._dealertingSamples = value.dealertingSamples;
      this._violatingEvaluationWindow = value.violatingEvaluationWindow;
      this._violatingSamples = value.violatingSamples;
    }
  }

  // dealerting_evaluation_window - computed: false, optional: false, required: true
  private _dealertingEvaluationWindow?: number; 
  public get dealertingEvaluationWindow() {
    return this.getNumberAttribute('dealerting_evaluation_window');
  }
  public set dealertingEvaluationWindow(value: number) {
    this._dealertingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingEvaluationWindowInput() {
    return this._dealertingEvaluationWindow;
  }

  // dealerting_samples - computed: false, optional: false, required: true
  private _dealertingSamples?: number; 
  public get dealertingSamples() {
    return this.getNumberAttribute('dealerting_samples');
  }
  public set dealertingSamples(value: number) {
    this._dealertingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingSamplesInput() {
    return this._dealertingSamples;
  }

  // violating_evaluation_window - computed: false, optional: false, required: true
  private _violatingEvaluationWindow?: number; 
  public get violatingEvaluationWindow() {
    return this.getNumberAttribute('violating_evaluation_window');
  }
  public set violatingEvaluationWindow(value: number) {
    this._violatingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingEvaluationWindowInput() {
    return this._violatingEvaluationWindow;
  }

  // violating_samples - computed: false, optional: false, required: true
  private _violatingSamples?: number; 
  public get violatingSamples() {
    return this.getNumberAttribute('violating_samples');
  }
  public set violatingSamples(value: number) {
    this._violatingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingSamplesInput() {
    return this._violatingSamples;
  }
}
export interface HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholds {
  /**
  * Retransmission rate threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#retransmission_rate_percentage HostAnomaliesV2#retransmission_rate_percentage}
  */
  readonly retransmissionRatePercentage: number;
  /**
  * Number of retransmitted packets threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#retransmitted_packets_number_per_minute HostAnomaliesV2#retransmitted_packets_number_per_minute}
  */
  readonly retransmittedPacketsNumberPerMinute: number;
  /**
  * event_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#event_thresholds HostAnomaliesV2#event_thresholds}
  */
  readonly eventThresholds: HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsEventThresholds;
}

export function hostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsToTerraform(struct?: HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsOutputReference | HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retransmission_rate_percentage: cdktf.numberToTerraform(struct!.retransmissionRatePercentage),
    retransmitted_packets_number_per_minute: cdktf.numberToTerraform(struct!.retransmittedPacketsNumberPerMinute),
    event_thresholds: hostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsEventThresholdsToTerraform(struct!.eventThresholds),
  }
}


export function hostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsToHclTerraform(struct?: HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsOutputReference | HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retransmission_rate_percentage: {
      value: cdktf.numberToHclTerraform(struct!.retransmissionRatePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmitted_packets_number_per_minute: {
      value: cdktf.numberToHclTerraform(struct!.retransmittedPacketsNumberPerMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_thresholds: {
      value: hostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsEventThresholdsToHclTerraform(struct!.eventThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsEventThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retransmissionRatePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmissionRatePercentage = this._retransmissionRatePercentage;
    }
    if (this._retransmittedPacketsNumberPerMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmittedPacketsNumberPerMinute = this._retransmittedPacketsNumberPerMinute;
    }
    if (this._eventThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventThresholds = this._eventThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retransmissionRatePercentage = undefined;
      this._retransmittedPacketsNumberPerMinute = undefined;
      this._eventThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retransmissionRatePercentage = value.retransmissionRatePercentage;
      this._retransmittedPacketsNumberPerMinute = value.retransmittedPacketsNumberPerMinute;
      this._eventThresholds.internalValue = value.eventThresholds;
    }
  }

  // retransmission_rate_percentage - computed: false, optional: false, required: true
  private _retransmissionRatePercentage?: number; 
  public get retransmissionRatePercentage() {
    return this.getNumberAttribute('retransmission_rate_percentage');
  }
  public set retransmissionRatePercentage(value: number) {
    this._retransmissionRatePercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmissionRatePercentageInput() {
    return this._retransmissionRatePercentage;
  }

  // retransmitted_packets_number_per_minute - computed: false, optional: false, required: true
  private _retransmittedPacketsNumberPerMinute?: number; 
  public get retransmittedPacketsNumberPerMinute() {
    return this.getNumberAttribute('retransmitted_packets_number_per_minute');
  }
  public set retransmittedPacketsNumberPerMinute(value: number) {
    this._retransmittedPacketsNumberPerMinute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmittedPacketsNumberPerMinuteInput() {
    return this._retransmittedPacketsNumberPerMinute;
  }

  // event_thresholds - computed: false, optional: false, required: true
  private _eventThresholds = new HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsEventThresholdsOutputReference(this, "event_thresholds");
  public get eventThresholds() {
    return this._eventThresholds;
  }
  public putEventThresholds(value: HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsEventThresholds) {
    this._eventThresholds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventThresholdsInput() {
    return this._eventThresholds.internalValue;
  }
}
export interface HostAnomaliesV2NetworkNetworkHighRetransmissionDetection {
  /**
  * Detection mode for high retransmission rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#detection_mode HostAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Detect high retransmission rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#enabled HostAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#custom_thresholds HostAnomaliesV2#custom_thresholds}
  */
  readonly customThresholds?: HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholds;
}

export function hostAnomaliesV2NetworkNetworkHighRetransmissionDetectionToTerraform(struct?: HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionOutputReference | HostAnomaliesV2NetworkNetworkHighRetransmissionDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: hostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function hostAnomaliesV2NetworkNetworkHighRetransmissionDetectionToHclTerraform(struct?: HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionOutputReference | HostAnomaliesV2NetworkNetworkHighRetransmissionDetection): any {
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
    custom_thresholds: {
      value: hostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2NetworkNetworkHighRetransmissionDetection | undefined {
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
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2NetworkNetworkHighRetransmissionDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsEventThresholds {
  /**
  * The number of **10-second samples** that form the sliding evaluation window for dealerting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_evaluation_window HostAnomaliesV2#dealerting_evaluation_window}
  */
  readonly dealertingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must be lower the threshold to close an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#dealerting_samples HostAnomaliesV2#dealerting_samples}
  */
  readonly dealertingSamples: number;
  /**
  * The number of **10-second samples** that form the sliding evaluation window to detect violating samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_evaluation_window HostAnomaliesV2#violating_evaluation_window}
  */
  readonly violatingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must exceed the threshold to trigger an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#violating_samples HostAnomaliesV2#violating_samples}
  */
  readonly violatingSamples: number;
}

export function hostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsEventThresholdsToTerraform(struct?: HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dealerting_evaluation_window: cdktf.numberToTerraform(struct!.dealertingEvaluationWindow),
    dealerting_samples: cdktf.numberToTerraform(struct!.dealertingSamples),
    violating_evaluation_window: cdktf.numberToTerraform(struct!.violatingEvaluationWindow),
    violating_samples: cdktf.numberToTerraform(struct!.violatingSamples),
  }
}


export function hostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsEventThresholdsToHclTerraform(struct?: HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsEventThresholdsOutputReference | HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dealerting_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.dealertingEvaluationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dealerting_samples: {
      value: cdktf.numberToHclTerraform(struct!.dealertingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violating_evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.violatingEvaluationWindow),
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

export class HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsEventThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsEventThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dealertingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingEvaluationWindow = this._dealertingEvaluationWindow;
    }
    if (this._dealertingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingSamples = this._dealertingSamples;
    }
    if (this._violatingEvaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingEvaluationWindow = this._violatingEvaluationWindow;
    }
    if (this._violatingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingSamples = this._violatingSamples;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsEventThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dealertingEvaluationWindow = undefined;
      this._dealertingSamples = undefined;
      this._violatingEvaluationWindow = undefined;
      this._violatingSamples = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dealertingEvaluationWindow = value.dealertingEvaluationWindow;
      this._dealertingSamples = value.dealertingSamples;
      this._violatingEvaluationWindow = value.violatingEvaluationWindow;
      this._violatingSamples = value.violatingSamples;
    }
  }

  // dealerting_evaluation_window - computed: false, optional: false, required: true
  private _dealertingEvaluationWindow?: number; 
  public get dealertingEvaluationWindow() {
    return this.getNumberAttribute('dealerting_evaluation_window');
  }
  public set dealertingEvaluationWindow(value: number) {
    this._dealertingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingEvaluationWindowInput() {
    return this._dealertingEvaluationWindow;
  }

  // dealerting_samples - computed: false, optional: false, required: true
  private _dealertingSamples?: number; 
  public get dealertingSamples() {
    return this.getNumberAttribute('dealerting_samples');
  }
  public set dealertingSamples(value: number) {
    this._dealertingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingSamplesInput() {
    return this._dealertingSamples;
  }

  // violating_evaluation_window - computed: false, optional: false, required: true
  private _violatingEvaluationWindow?: number; 
  public get violatingEvaluationWindow() {
    return this.getNumberAttribute('violating_evaluation_window');
  }
  public set violatingEvaluationWindow(value: number) {
    this._violatingEvaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingEvaluationWindowInput() {
    return this._violatingEvaluationWindow;
  }

  // violating_samples - computed: false, optional: false, required: true
  private _violatingSamples?: number; 
  public get violatingSamples() {
    return this.getNumberAttribute('violating_samples');
  }
  public set violatingSamples(value: number) {
    this._violatingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingSamplesInput() {
    return this._violatingSamples;
  }
}
export interface HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholds {
  /**
  * Number of failed connections threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#failed_connections_number_per_minute HostAnomaliesV2#failed_connections_number_per_minute}
  */
  readonly failedConnectionsNumberPerMinute: number;
  /**
  * New connection failure threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#new_connection_failures_percentage HostAnomaliesV2#new_connection_failures_percentage}
  */
  readonly newConnectionFailuresPercentage: number;
  /**
  * event_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#event_thresholds HostAnomaliesV2#event_thresholds}
  */
  readonly eventThresholds: HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsEventThresholds;
}

export function hostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsToTerraform(struct?: HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsOutputReference | HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed_connections_number_per_minute: cdktf.numberToTerraform(struct!.failedConnectionsNumberPerMinute),
    new_connection_failures_percentage: cdktf.numberToTerraform(struct!.newConnectionFailuresPercentage),
    event_thresholds: hostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsEventThresholdsToTerraform(struct!.eventThresholds),
  }
}


export function hostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsToHclTerraform(struct?: HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsOutputReference | HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failed_connections_number_per_minute: {
      value: cdktf.numberToHclTerraform(struct!.failedConnectionsNumberPerMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_connection_failures_percentage: {
      value: cdktf.numberToHclTerraform(struct!.newConnectionFailuresPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_thresholds: {
      value: hostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsEventThresholdsToHclTerraform(struct!.eventThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsEventThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failedConnectionsNumberPerMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedConnectionsNumberPerMinute = this._failedConnectionsNumberPerMinute;
    }
    if (this._newConnectionFailuresPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.newConnectionFailuresPercentage = this._newConnectionFailuresPercentage;
    }
    if (this._eventThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventThresholds = this._eventThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failedConnectionsNumberPerMinute = undefined;
      this._newConnectionFailuresPercentage = undefined;
      this._eventThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failedConnectionsNumberPerMinute = value.failedConnectionsNumberPerMinute;
      this._newConnectionFailuresPercentage = value.newConnectionFailuresPercentage;
      this._eventThresholds.internalValue = value.eventThresholds;
    }
  }

  // failed_connections_number_per_minute - computed: false, optional: false, required: true
  private _failedConnectionsNumberPerMinute?: number; 
  public get failedConnectionsNumberPerMinute() {
    return this.getNumberAttribute('failed_connections_number_per_minute');
  }
  public set failedConnectionsNumberPerMinute(value: number) {
    this._failedConnectionsNumberPerMinute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failedConnectionsNumberPerMinuteInput() {
    return this._failedConnectionsNumberPerMinute;
  }

  // new_connection_failures_percentage - computed: false, optional: false, required: true
  private _newConnectionFailuresPercentage?: number; 
  public get newConnectionFailuresPercentage() {
    return this.getNumberAttribute('new_connection_failures_percentage');
  }
  public set newConnectionFailuresPercentage(value: number) {
    this._newConnectionFailuresPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newConnectionFailuresPercentageInput() {
    return this._newConnectionFailuresPercentage;
  }

  // event_thresholds - computed: false, optional: false, required: true
  private _eventThresholds = new HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsEventThresholdsOutputReference(this, "event_thresholds");
  public get eventThresholds() {
    return this._eventThresholds;
  }
  public putEventThresholds(value: HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsEventThresholds) {
    this._eventThresholds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventThresholdsInput() {
    return this._eventThresholds.internalValue;
  }
}
export interface HostAnomaliesV2NetworkNetworkTcpProblemsDetection {
  /**
  * Detection mode for TCP connectivity problems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#detection_mode HostAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Detect TCP connectivity problems for process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#enabled HostAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#custom_thresholds HostAnomaliesV2#custom_thresholds}
  */
  readonly customThresholds?: HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholds;
}

export function hostAnomaliesV2NetworkNetworkTcpProblemsDetectionToTerraform(struct?: HostAnomaliesV2NetworkNetworkTcpProblemsDetectionOutputReference | HostAnomaliesV2NetworkNetworkTcpProblemsDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: hostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function hostAnomaliesV2NetworkNetworkTcpProblemsDetectionToHclTerraform(struct?: HostAnomaliesV2NetworkNetworkTcpProblemsDetectionOutputReference | HostAnomaliesV2NetworkNetworkTcpProblemsDetection): any {
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
    custom_thresholds: {
      value: hostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2NetworkNetworkTcpProblemsDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2NetworkNetworkTcpProblemsDetection | undefined {
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
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2NetworkNetworkTcpProblemsDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: HostAnomaliesV2NetworkNetworkTcpProblemsDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface HostAnomaliesV2Network {
  /**
  * high_network_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#high_network_detection HostAnomaliesV2#high_network_detection}
  */
  readonly highNetworkDetection: HostAnomaliesV2NetworkHighNetworkDetection;
  /**
  * network_dropped_packets_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#network_dropped_packets_detection HostAnomaliesV2#network_dropped_packets_detection}
  */
  readonly networkDroppedPacketsDetection: HostAnomaliesV2NetworkNetworkDroppedPacketsDetection;
  /**
  * network_errors_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#network_errors_detection HostAnomaliesV2#network_errors_detection}
  */
  readonly networkErrorsDetection: HostAnomaliesV2NetworkNetworkErrorsDetection;
  /**
  * network_high_retransmission_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#network_high_retransmission_detection HostAnomaliesV2#network_high_retransmission_detection}
  */
  readonly networkHighRetransmissionDetection: HostAnomaliesV2NetworkNetworkHighRetransmissionDetection;
  /**
  * network_tcp_problems_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#network_tcp_problems_detection HostAnomaliesV2#network_tcp_problems_detection}
  */
  readonly networkTcpProblemsDetection: HostAnomaliesV2NetworkNetworkTcpProblemsDetection;
}

export function hostAnomaliesV2NetworkToTerraform(struct?: HostAnomaliesV2NetworkOutputReference | HostAnomaliesV2Network): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_network_detection: hostAnomaliesV2NetworkHighNetworkDetectionToTerraform(struct!.highNetworkDetection),
    network_dropped_packets_detection: hostAnomaliesV2NetworkNetworkDroppedPacketsDetectionToTerraform(struct!.networkDroppedPacketsDetection),
    network_errors_detection: hostAnomaliesV2NetworkNetworkErrorsDetectionToTerraform(struct!.networkErrorsDetection),
    network_high_retransmission_detection: hostAnomaliesV2NetworkNetworkHighRetransmissionDetectionToTerraform(struct!.networkHighRetransmissionDetection),
    network_tcp_problems_detection: hostAnomaliesV2NetworkNetworkTcpProblemsDetectionToTerraform(struct!.networkTcpProblemsDetection),
  }
}


export function hostAnomaliesV2NetworkToHclTerraform(struct?: HostAnomaliesV2NetworkOutputReference | HostAnomaliesV2Network): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_network_detection: {
      value: hostAnomaliesV2NetworkHighNetworkDetectionToHclTerraform(struct!.highNetworkDetection),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2NetworkHighNetworkDetectionList",
    },
    network_dropped_packets_detection: {
      value: hostAnomaliesV2NetworkNetworkDroppedPacketsDetectionToHclTerraform(struct!.networkDroppedPacketsDetection),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionList",
    },
    network_errors_detection: {
      value: hostAnomaliesV2NetworkNetworkErrorsDetectionToHclTerraform(struct!.networkErrorsDetection),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2NetworkNetworkErrorsDetectionList",
    },
    network_high_retransmission_detection: {
      value: hostAnomaliesV2NetworkNetworkHighRetransmissionDetectionToHclTerraform(struct!.networkHighRetransmissionDetection),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionList",
    },
    network_tcp_problems_detection: {
      value: hostAnomaliesV2NetworkNetworkTcpProblemsDetectionToHclTerraform(struct!.networkTcpProblemsDetection),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesV2NetworkNetworkTcpProblemsDetectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesV2NetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesV2Network | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highNetworkDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.highNetworkDetection = this._highNetworkDetection?.internalValue;
    }
    if (this._networkDroppedPacketsDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDroppedPacketsDetection = this._networkDroppedPacketsDetection?.internalValue;
    }
    if (this._networkErrorsDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkErrorsDetection = this._networkErrorsDetection?.internalValue;
    }
    if (this._networkHighRetransmissionDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkHighRetransmissionDetection = this._networkHighRetransmissionDetection?.internalValue;
    }
    if (this._networkTcpProblemsDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTcpProblemsDetection = this._networkTcpProblemsDetection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesV2Network | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highNetworkDetection.internalValue = undefined;
      this._networkDroppedPacketsDetection.internalValue = undefined;
      this._networkErrorsDetection.internalValue = undefined;
      this._networkHighRetransmissionDetection.internalValue = undefined;
      this._networkTcpProblemsDetection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highNetworkDetection.internalValue = value.highNetworkDetection;
      this._networkDroppedPacketsDetection.internalValue = value.networkDroppedPacketsDetection;
      this._networkErrorsDetection.internalValue = value.networkErrorsDetection;
      this._networkHighRetransmissionDetection.internalValue = value.networkHighRetransmissionDetection;
      this._networkTcpProblemsDetection.internalValue = value.networkTcpProblemsDetection;
    }
  }

  // high_network_detection - computed: false, optional: false, required: true
  private _highNetworkDetection = new HostAnomaliesV2NetworkHighNetworkDetectionOutputReference(this, "high_network_detection");
  public get highNetworkDetection() {
    return this._highNetworkDetection;
  }
  public putHighNetworkDetection(value: HostAnomaliesV2NetworkHighNetworkDetection) {
    this._highNetworkDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highNetworkDetectionInput() {
    return this._highNetworkDetection.internalValue;
  }

  // network_dropped_packets_detection - computed: false, optional: false, required: true
  private _networkDroppedPacketsDetection = new HostAnomaliesV2NetworkNetworkDroppedPacketsDetectionOutputReference(this, "network_dropped_packets_detection");
  public get networkDroppedPacketsDetection() {
    return this._networkDroppedPacketsDetection;
  }
  public putNetworkDroppedPacketsDetection(value: HostAnomaliesV2NetworkNetworkDroppedPacketsDetection) {
    this._networkDroppedPacketsDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDroppedPacketsDetectionInput() {
    return this._networkDroppedPacketsDetection.internalValue;
  }

  // network_errors_detection - computed: false, optional: false, required: true
  private _networkErrorsDetection = new HostAnomaliesV2NetworkNetworkErrorsDetectionOutputReference(this, "network_errors_detection");
  public get networkErrorsDetection() {
    return this._networkErrorsDetection;
  }
  public putNetworkErrorsDetection(value: HostAnomaliesV2NetworkNetworkErrorsDetection) {
    this._networkErrorsDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkErrorsDetectionInput() {
    return this._networkErrorsDetection.internalValue;
  }

  // network_high_retransmission_detection - computed: false, optional: false, required: true
  private _networkHighRetransmissionDetection = new HostAnomaliesV2NetworkNetworkHighRetransmissionDetectionOutputReference(this, "network_high_retransmission_detection");
  public get networkHighRetransmissionDetection() {
    return this._networkHighRetransmissionDetection;
  }
  public putNetworkHighRetransmissionDetection(value: HostAnomaliesV2NetworkNetworkHighRetransmissionDetection) {
    this._networkHighRetransmissionDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkHighRetransmissionDetectionInput() {
    return this._networkHighRetransmissionDetection.internalValue;
  }

  // network_tcp_problems_detection - computed: false, optional: false, required: true
  private _networkTcpProblemsDetection = new HostAnomaliesV2NetworkNetworkTcpProblemsDetectionOutputReference(this, "network_tcp_problems_detection");
  public get networkTcpProblemsDetection() {
    return this._networkTcpProblemsDetection;
  }
  public putNetworkTcpProblemsDetection(value: HostAnomaliesV2NetworkNetworkTcpProblemsDetection) {
    this._networkTcpProblemsDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTcpProblemsDetectionInput() {
    return this._networkTcpProblemsDetection.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2 dynatrace_host_anomalies_v2}
*/
export class HostAnomaliesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_host_anomalies_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostAnomaliesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostAnomaliesV2 to import
  * @param importFromId The id of the existing HostAnomaliesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostAnomaliesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_host_anomalies_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_anomalies_v2 dynatrace_host_anomalies_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostAnomaliesV2Config
  */
  public constructor(scope: Construct, id: string, config: HostAnomaliesV2Config) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_host_anomalies_v2',
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
    this._host.internalValue = config.host;
    this._network.internalValue = config.network;
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

  // host - computed: false, optional: false, required: true
  private _host = new HostAnomaliesV2HostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: HostAnomaliesV2Host) {
    this._host.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // network - computed: false, optional: false, required: true
  private _network = new HostAnomaliesV2NetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: HostAnomaliesV2Network) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      scope: cdktf.stringToTerraform(this._scope),
      host: hostAnomaliesV2HostToTerraform(this._host.internalValue),
      network: hostAnomaliesV2NetworkToTerraform(this._network.internalValue),
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
      host: {
        value: hostAnomaliesV2HostToHclTerraform(this._host.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HostAnomaliesV2HostList",
      },
      network: {
        value: hostAnomaliesV2NetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HostAnomaliesV2NetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
