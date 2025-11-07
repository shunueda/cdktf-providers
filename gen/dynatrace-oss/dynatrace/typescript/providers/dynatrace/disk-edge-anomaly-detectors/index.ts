// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiskEdgeAnomalyDetectorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disk will be included in this policy if **any** of the filters match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#disk_name_filters DiskEdgeAnomalyDetectors#disk_name_filters}
  */
  readonly diskNameFilters?: string[];
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#enabled DiskEdgeAnomalyDetectors#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#id DiskEdgeAnomalyDetectors#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#insert_after DiskEdgeAnomalyDetectors#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Select the operating systems on which policy should be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#operating_system DiskEdgeAnomalyDetectors#operating_system}
  */
  readonly operatingSystem?: string[];
  /**
  * Policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#policy_name DiskEdgeAnomalyDetectors#policy_name}
  */
  readonly policyName: string;
  /**
  * The scope of this setting (HOST, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#scope DiskEdgeAnomalyDetectors#scope}
  */
  readonly scope?: string;
  /**
  * alerts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#alerts DiskEdgeAnomalyDetectors#alerts}
  */
  readonly alerts?: DiskEdgeAnomalyDetectorsAlerts;
  /**
  * event_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#event_properties DiskEdgeAnomalyDetectors#event_properties}
  */
  readonly eventProperties?: DiskEdgeAnomalyDetectorsEventProperties;
  /**
  * host_metadata_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#host_metadata_conditions DiskEdgeAnomalyDetectors#host_metadata_conditions}
  */
  readonly hostMetadataConditions?: DiskEdgeAnomalyDetectorsHostMetadataConditions;
}
export interface DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholds {
  /**
  * The number of **10-second samples** that form the sliding evaluation window for dealerting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#dealerting_evaluation_window DiskEdgeAnomalyDetectors#dealerting_evaluation_window}
  */
  readonly dealertingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must be lower than the threshold to close an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#dealerting_samples DiskEdgeAnomalyDetectors#dealerting_samples}
  */
  readonly dealertingSamples: number;
  /**
  * The number of **10-second samples** that form the sliding evaluation window to detect violating samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#violating_evaluation_window DiskEdgeAnomalyDetectors#violating_evaluation_window}
  */
  readonly violatingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must exceed the threshold to trigger an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#violating_samples DiskEdgeAnomalyDetectors#violating_samples}
  */
  readonly violatingSamples: number;
}

export function diskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsToTerraform(struct?: DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsOutputReference | DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholds): any {
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


export function diskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsToHclTerraform(struct?: DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsOutputReference | DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholds): any {
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

export class DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholds | undefined {
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

  public set internalValue(value: DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholds | undefined) {
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
export interface DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsImmediately {
  /**
  * The number of **10-second samples** that form the sliding evaluation window for dealerting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#dealerting_evaluation_window DiskEdgeAnomalyDetectors#dealerting_evaluation_window}
  */
  readonly dealertingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must be lower than the threshold to close an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#dealerting_samples DiskEdgeAnomalyDetectors#dealerting_samples}
  */
  readonly dealertingSamples: number;
  /**
  * The number of **10-second samples** that form the sliding evaluation window to detect violating samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#violating_evaluation_window DiskEdgeAnomalyDetectors#violating_evaluation_window}
  */
  readonly violatingEvaluationWindow: number;
  /**
  * The number of **10-second samples** within the evaluation window that must exceed the threshold to trigger an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#violating_samples DiskEdgeAnomalyDetectors#violating_samples}
  */
  readonly violatingSamples: number;
}

export function diskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsImmediatelyToTerraform(struct?: DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsImmediatelyOutputReference | DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsImmediately): any {
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


export function diskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsImmediatelyToHclTerraform(struct?: DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsImmediatelyOutputReference | DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsImmediately): any {
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

export class DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsImmediatelyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsImmediately | undefined {
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

  public set internalValue(value: DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsImmediately | undefined) {
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
export interface DiskEdgeAnomalyDetectorsAlertsAlert {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#threshold_mebibytes DiskEdgeAnomalyDetectors#threshold_mebibytes}
  */
  readonly thresholdMebibytes?: number;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#threshold_milliseconds DiskEdgeAnomalyDetectors#threshold_milliseconds}
  */
  readonly thresholdMilliseconds?: number;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#threshold_number DiskEdgeAnomalyDetectors#threshold_number}
  */
  readonly thresholdNumber?: number;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#threshold_percent DiskEdgeAnomalyDetectors#threshold_percent}
  */
  readonly thresholdPercent?: number;
  /**
  * Possible Values: `AVAILABLE_DISK_SPACE_MEBIBYTES_BELOW`, `AVAILABLE_DISK_SPACE_PERCENT_BELOW`, `AVAILABLE_INODES_NUMBER_BELOW`, `AVAILABLE_INODES_PERCENT_BELOW`, `READ_ONLY_FILE_SYSTEM`, `READ_TIME_EXCEEDING`, `WRITE_TIME_EXCEEDING`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#trigger DiskEdgeAnomalyDetectors#trigger}
  */
  readonly trigger: string;
  /**
  * sample_count_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#sample_count_thresholds DiskEdgeAnomalyDetectors#sample_count_thresholds}
  */
  readonly sampleCountThresholds?: DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholds;
  /**
  * sample_count_thresholds_immediately block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#sample_count_thresholds_immediately DiskEdgeAnomalyDetectors#sample_count_thresholds_immediately}
  */
  readonly sampleCountThresholdsImmediately?: DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsImmediately;
}

export function diskEdgeAnomalyDetectorsAlertsAlertToTerraform(struct?: DiskEdgeAnomalyDetectorsAlertsAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold_mebibytes: cdktf.numberToTerraform(struct!.thresholdMebibytes),
    threshold_milliseconds: cdktf.numberToTerraform(struct!.thresholdMilliseconds),
    threshold_number: cdktf.numberToTerraform(struct!.thresholdNumber),
    threshold_percent: cdktf.numberToTerraform(struct!.thresholdPercent),
    trigger: cdktf.stringToTerraform(struct!.trigger),
    sample_count_thresholds: diskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsToTerraform(struct!.sampleCountThresholds),
    sample_count_thresholds_immediately: diskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsImmediatelyToTerraform(struct!.sampleCountThresholdsImmediately),
  }
}


export function diskEdgeAnomalyDetectorsAlertsAlertToHclTerraform(struct?: DiskEdgeAnomalyDetectorsAlertsAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold_mebibytes: {
      value: cdktf.numberToHclTerraform(struct!.thresholdMebibytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.thresholdMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_number: {
      value: cdktf.numberToHclTerraform(struct!.thresholdNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.thresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trigger: {
      value: cdktf.stringToHclTerraform(struct!.trigger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_count_thresholds: {
      value: diskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsToHclTerraform(struct!.sampleCountThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsList",
    },
    sample_count_thresholds_immediately: {
      value: diskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsImmediatelyToHclTerraform(struct!.sampleCountThresholdsImmediately),
      isBlock: true,
      type: "list",
      storageClassType: "DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsImmediatelyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskEdgeAnomalyDetectorsAlertsAlertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiskEdgeAnomalyDetectorsAlertsAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._thresholdMebibytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdMebibytes = this._thresholdMebibytes;
    }
    if (this._thresholdMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdMilliseconds = this._thresholdMilliseconds;
    }
    if (this._thresholdNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdNumber = this._thresholdNumber;
    }
    if (this._thresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdPercent = this._thresholdPercent;
    }
    if (this._trigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger;
    }
    if (this._sampleCountThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleCountThresholds = this._sampleCountThresholds?.internalValue;
    }
    if (this._sampleCountThresholdsImmediately?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleCountThresholdsImmediately = this._sampleCountThresholdsImmediately?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskEdgeAnomalyDetectorsAlertsAlert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._thresholdMebibytes = undefined;
      this._thresholdMilliseconds = undefined;
      this._thresholdNumber = undefined;
      this._thresholdPercent = undefined;
      this._trigger = undefined;
      this._sampleCountThresholds.internalValue = undefined;
      this._sampleCountThresholdsImmediately.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._thresholdMebibytes = value.thresholdMebibytes;
      this._thresholdMilliseconds = value.thresholdMilliseconds;
      this._thresholdNumber = value.thresholdNumber;
      this._thresholdPercent = value.thresholdPercent;
      this._trigger = value.trigger;
      this._sampleCountThresholds.internalValue = value.sampleCountThresholds;
      this._sampleCountThresholdsImmediately.internalValue = value.sampleCountThresholdsImmediately;
    }
  }

  // threshold_mebibytes - computed: false, optional: true, required: false
  private _thresholdMebibytes?: number; 
  public get thresholdMebibytes() {
    return this.getNumberAttribute('threshold_mebibytes');
  }
  public set thresholdMebibytes(value: number) {
    this._thresholdMebibytes = value;
  }
  public resetThresholdMebibytes() {
    this._thresholdMebibytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdMebibytesInput() {
    return this._thresholdMebibytes;
  }

  // threshold_milliseconds - computed: false, optional: true, required: false
  private _thresholdMilliseconds?: number; 
  public get thresholdMilliseconds() {
    return this.getNumberAttribute('threshold_milliseconds');
  }
  public set thresholdMilliseconds(value: number) {
    this._thresholdMilliseconds = value;
  }
  public resetThresholdMilliseconds() {
    this._thresholdMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdMillisecondsInput() {
    return this._thresholdMilliseconds;
  }

  // threshold_number - computed: false, optional: true, required: false
  private _thresholdNumber?: number; 
  public get thresholdNumber() {
    return this.getNumberAttribute('threshold_number');
  }
  public set thresholdNumber(value: number) {
    this._thresholdNumber = value;
  }
  public resetThresholdNumber() {
    this._thresholdNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdNumberInput() {
    return this._thresholdNumber;
  }

  // threshold_percent - computed: false, optional: true, required: false
  private _thresholdPercent?: number; 
  public get thresholdPercent() {
    return this.getNumberAttribute('threshold_percent');
  }
  public set thresholdPercent(value: number) {
    this._thresholdPercent = value;
  }
  public resetThresholdPercent() {
    this._thresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdPercentInput() {
    return this._thresholdPercent;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // sample_count_thresholds - computed: false, optional: true, required: false
  private _sampleCountThresholds = new DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsOutputReference(this, "sample_count_thresholds");
  public get sampleCountThresholds() {
    return this._sampleCountThresholds;
  }
  public putSampleCountThresholds(value: DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholds) {
    this._sampleCountThresholds.internalValue = value;
  }
  public resetSampleCountThresholds() {
    this._sampleCountThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleCountThresholdsInput() {
    return this._sampleCountThresholds.internalValue;
  }

  // sample_count_thresholds_immediately - computed: false, optional: true, required: false
  private _sampleCountThresholdsImmediately = new DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsImmediatelyOutputReference(this, "sample_count_thresholds_immediately");
  public get sampleCountThresholdsImmediately() {
    return this._sampleCountThresholdsImmediately;
  }
  public putSampleCountThresholdsImmediately(value: DiskEdgeAnomalyDetectorsAlertsAlertSampleCountThresholdsImmediately) {
    this._sampleCountThresholdsImmediately.internalValue = value;
  }
  public resetSampleCountThresholdsImmediately() {
    this._sampleCountThresholdsImmediately.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleCountThresholdsImmediatelyInput() {
    return this._sampleCountThresholdsImmediately.internalValue;
  }
}

export class DiskEdgeAnomalyDetectorsAlertsAlertList extends cdktf.ComplexList {
  public internalValue? : DiskEdgeAnomalyDetectorsAlertsAlert[] | cdktf.IResolvable

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
  public get(index: number): DiskEdgeAnomalyDetectorsAlertsAlertOutputReference {
    return new DiskEdgeAnomalyDetectorsAlertsAlertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiskEdgeAnomalyDetectorsAlerts {
  /**
  * alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#alert DiskEdgeAnomalyDetectors#alert}
  */
  readonly alert: DiskEdgeAnomalyDetectorsAlertsAlert[] | cdktf.IResolvable;
}

export function diskEdgeAnomalyDetectorsAlertsToTerraform(struct?: DiskEdgeAnomalyDetectorsAlertsOutputReference | DiskEdgeAnomalyDetectorsAlerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: cdktf.listMapper(diskEdgeAnomalyDetectorsAlertsAlertToTerraform, true)(struct!.alert),
  }
}


export function diskEdgeAnomalyDetectorsAlertsToHclTerraform(struct?: DiskEdgeAnomalyDetectorsAlertsOutputReference | DiskEdgeAnomalyDetectorsAlerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: cdktf.listMapperHcl(diskEdgeAnomalyDetectorsAlertsAlertToHclTerraform, true)(struct!.alert),
      isBlock: true,
      type: "set",
      storageClassType: "DiskEdgeAnomalyDetectorsAlertsAlertList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskEdgeAnomalyDetectorsAlertsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskEdgeAnomalyDetectorsAlerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskEdgeAnomalyDetectorsAlerts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alert.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alert.internalValue = value.alert;
    }
  }

  // alert - computed: false, optional: false, required: true
  private _alert = new DiskEdgeAnomalyDetectorsAlertsAlertList(this, "alert", true);
  public get alert() {
    return this._alert;
  }
  public putAlert(value: DiskEdgeAnomalyDetectorsAlertsAlert[] | cdktf.IResolvable) {
    this._alert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }
}
export interface DiskEdgeAnomalyDetectorsEventPropertiesEventPropertie {
  /**
  * Type 'dt.' for key hints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#metadata_key DiskEdgeAnomalyDetectors#metadata_key}
  */
  readonly metadataKey: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#metadata_value DiskEdgeAnomalyDetectors#metadata_value}
  */
  readonly metadataValue: string;
}

export function diskEdgeAnomalyDetectorsEventPropertiesEventPropertieToTerraform(struct?: DiskEdgeAnomalyDetectorsEventPropertiesEventPropertie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata_key: cdktf.stringToTerraform(struct!.metadataKey),
    metadata_value: cdktf.stringToTerraform(struct!.metadataValue),
  }
}


export function diskEdgeAnomalyDetectorsEventPropertiesEventPropertieToHclTerraform(struct?: DiskEdgeAnomalyDetectorsEventPropertiesEventPropertie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata_key: {
      value: cdktf.stringToHclTerraform(struct!.metadataKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_value: {
      value: cdktf.stringToHclTerraform(struct!.metadataValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskEdgeAnomalyDetectorsEventPropertiesEventPropertieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiskEdgeAnomalyDetectorsEventPropertiesEventPropertie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataKey = this._metadataKey;
    }
    if (this._metadataValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataValue = this._metadataValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskEdgeAnomalyDetectorsEventPropertiesEventPropertie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataKey = undefined;
      this._metadataValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataKey = value.metadataKey;
      this._metadataValue = value.metadataValue;
    }
  }

  // metadata_key - computed: false, optional: false, required: true
  private _metadataKey?: string; 
  public get metadataKey() {
    return this.getStringAttribute('metadata_key');
  }
  public set metadataKey(value: string) {
    this._metadataKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKeyInput() {
    return this._metadataKey;
  }

  // metadata_value - computed: false, optional: false, required: true
  private _metadataValue?: string; 
  public get metadataValue() {
    return this.getStringAttribute('metadata_value');
  }
  public set metadataValue(value: string) {
    this._metadataValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataValueInput() {
    return this._metadataValue;
  }
}

export class DiskEdgeAnomalyDetectorsEventPropertiesEventPropertieList extends cdktf.ComplexList {
  public internalValue? : DiskEdgeAnomalyDetectorsEventPropertiesEventPropertie[] | cdktf.IResolvable

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
  public get(index: number): DiskEdgeAnomalyDetectorsEventPropertiesEventPropertieOutputReference {
    return new DiskEdgeAnomalyDetectorsEventPropertiesEventPropertieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiskEdgeAnomalyDetectorsEventProperties {
  /**
  * event_propertie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#event_propertie DiskEdgeAnomalyDetectors#event_propertie}
  */
  readonly eventPropertie: DiskEdgeAnomalyDetectorsEventPropertiesEventPropertie[] | cdktf.IResolvable;
}

export function diskEdgeAnomalyDetectorsEventPropertiesToTerraform(struct?: DiskEdgeAnomalyDetectorsEventPropertiesOutputReference | DiskEdgeAnomalyDetectorsEventProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_propertie: cdktf.listMapper(diskEdgeAnomalyDetectorsEventPropertiesEventPropertieToTerraform, true)(struct!.eventPropertie),
  }
}


export function diskEdgeAnomalyDetectorsEventPropertiesToHclTerraform(struct?: DiskEdgeAnomalyDetectorsEventPropertiesOutputReference | DiskEdgeAnomalyDetectorsEventProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_propertie: {
      value: cdktf.listMapperHcl(diskEdgeAnomalyDetectorsEventPropertiesEventPropertieToHclTerraform, true)(struct!.eventPropertie),
      isBlock: true,
      type: "set",
      storageClassType: "DiskEdgeAnomalyDetectorsEventPropertiesEventPropertieList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskEdgeAnomalyDetectorsEventPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskEdgeAnomalyDetectorsEventProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventPropertie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventPropertie = this._eventPropertie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskEdgeAnomalyDetectorsEventProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventPropertie.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventPropertie.internalValue = value.eventPropertie;
    }
  }

  // event_propertie - computed: false, optional: false, required: true
  private _eventPropertie = new DiskEdgeAnomalyDetectorsEventPropertiesEventPropertieList(this, "event_propertie", true);
  public get eventPropertie() {
    return this._eventPropertie;
  }
  public putEventPropertie(value: DiskEdgeAnomalyDetectorsEventPropertiesEventPropertie[] | cdktf.IResolvable) {
    this._eventPropertie.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPropertieInput() {
    return this._eventPropertie.internalValue;
  }
}
export interface DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionHostMetadataCondition {
  /**
  * When enabled, the condition requires a metadata key to exist and match the constraints; when disabled, the key is optional but must still match the constrains if it is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#key_must_exist DiskEdgeAnomalyDetectors#key_must_exist}
  */
  readonly keyMustExist?: boolean | cdktf.IResolvable;
  /**
  * This string has to match a required format.
  * 
  * - `$contains(production)` – Matches if `production` appears anywhere in the host metadata value.
  * - `$eq(production)` – Matches if `production` matches the host metadata value exactly.
  * - `$prefix(production)` – Matches if `production` matches the prefix of the host metadata value.
  * - `$suffix(production)` – Matches if `production` matches the suffix of the host metadata value.
  * 
  * Available logic operations:
  * - `$not($eq(production))` – Matches if the host metadata value is different from `production`.
  * - `$and($prefix(production),$suffix(main))` – Matches if host metadata value starts with `production` and ends with `main`.
  * - `$or($prefix(production),$suffix(main))` – Matches if host metadata value starts with `production` or ends with `main`.
  * 
  * Brackets **(** and **)** that are part of the matched property **must be escaped with a tilde (~)**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#metadata_condition DiskEdgeAnomalyDetectors#metadata_condition}
  */
  readonly metadataCondition: string;
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#metadata_key DiskEdgeAnomalyDetectors#metadata_key}
  */
  readonly metadataKey: string;
}

export function diskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionHostMetadataConditionToTerraform(struct?: DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionHostMetadataConditionOutputReference | DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionHostMetadataCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_must_exist: cdktf.booleanToTerraform(struct!.keyMustExist),
    metadata_condition: cdktf.stringToTerraform(struct!.metadataCondition),
    metadata_key: cdktf.stringToTerraform(struct!.metadataKey),
  }
}


export function diskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionHostMetadataConditionToHclTerraform(struct?: DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionHostMetadataConditionOutputReference | DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionHostMetadataCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_must_exist: {
      value: cdktf.booleanToHclTerraform(struct!.keyMustExist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metadata_condition: {
      value: cdktf.stringToHclTerraform(struct!.metadataCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_key: {
      value: cdktf.stringToHclTerraform(struct!.metadataKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionHostMetadataConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionHostMetadataCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyMustExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyMustExist = this._keyMustExist;
    }
    if (this._metadataCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataCondition = this._metadataCondition;
    }
    if (this._metadataKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataKey = this._metadataKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionHostMetadataCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyMustExist = undefined;
      this._metadataCondition = undefined;
      this._metadataKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyMustExist = value.keyMustExist;
      this._metadataCondition = value.metadataCondition;
      this._metadataKey = value.metadataKey;
    }
  }

  // key_must_exist - computed: false, optional: true, required: false
  private _keyMustExist?: boolean | cdktf.IResolvable; 
  public get keyMustExist() {
    return this.getBooleanAttribute('key_must_exist');
  }
  public set keyMustExist(value: boolean | cdktf.IResolvable) {
    this._keyMustExist = value;
  }
  public resetKeyMustExist() {
    this._keyMustExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyMustExistInput() {
    return this._keyMustExist;
  }

  // metadata_condition - computed: false, optional: false, required: true
  private _metadataCondition?: string; 
  public get metadataCondition() {
    return this.getStringAttribute('metadata_condition');
  }
  public set metadataCondition(value: string) {
    this._metadataCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataConditionInput() {
    return this._metadataCondition;
  }

  // metadata_key - computed: false, optional: false, required: true
  private _metadataKey?: string; 
  public get metadataKey() {
    return this.getStringAttribute('metadata_key');
  }
  public set metadataKey(value: string) {
    this._metadataKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKeyInput() {
    return this._metadataKey;
  }
}
export interface DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataCondition {
  /**
  * host_metadata_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#host_metadata_condition DiskEdgeAnomalyDetectors#host_metadata_condition}
  */
  readonly hostMetadataCondition: DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionHostMetadataCondition;
}

export function diskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionToTerraform(struct?: DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_metadata_condition: diskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionHostMetadataConditionToTerraform(struct!.hostMetadataCondition),
  }
}


export function diskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionToHclTerraform(struct?: DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_metadata_condition: {
      value: diskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionHostMetadataConditionToHclTerraform(struct!.hostMetadataCondition),
      isBlock: true,
      type: "list",
      storageClassType: "DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionHostMetadataConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostMetadataCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMetadataCondition = this._hostMetadataCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostMetadataCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostMetadataCondition.internalValue = value.hostMetadataCondition;
    }
  }

  // host_metadata_condition - computed: false, optional: false, required: true
  private _hostMetadataCondition = new DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionHostMetadataConditionOutputReference(this, "host_metadata_condition");
  public get hostMetadataCondition() {
    return this._hostMetadataCondition;
  }
  public putHostMetadataCondition(value: DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionHostMetadataCondition) {
    this._hostMetadataCondition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMetadataConditionInput() {
    return this._hostMetadataCondition.internalValue;
  }
}

export class DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionList extends cdktf.ComplexList {
  public internalValue? : DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataCondition[] | cdktf.IResolvable

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
  public get(index: number): DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionOutputReference {
    return new DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiskEdgeAnomalyDetectorsHostMetadataConditions {
  /**
  * host_metadata_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#host_metadata_condition DiskEdgeAnomalyDetectors#host_metadata_condition}
  */
  readonly hostMetadataCondition: DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataCondition[] | cdktf.IResolvable;
}

export function diskEdgeAnomalyDetectorsHostMetadataConditionsToTerraform(struct?: DiskEdgeAnomalyDetectorsHostMetadataConditionsOutputReference | DiskEdgeAnomalyDetectorsHostMetadataConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_metadata_condition: cdktf.listMapper(diskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionToTerraform, true)(struct!.hostMetadataCondition),
  }
}


export function diskEdgeAnomalyDetectorsHostMetadataConditionsToHclTerraform(struct?: DiskEdgeAnomalyDetectorsHostMetadataConditionsOutputReference | DiskEdgeAnomalyDetectorsHostMetadataConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_metadata_condition: {
      value: cdktf.listMapperHcl(diskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionToHclTerraform, true)(struct!.hostMetadataCondition),
      isBlock: true,
      type: "set",
      storageClassType: "DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskEdgeAnomalyDetectorsHostMetadataConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskEdgeAnomalyDetectorsHostMetadataConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostMetadataCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMetadataCondition = this._hostMetadataCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskEdgeAnomalyDetectorsHostMetadataConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostMetadataCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostMetadataCondition.internalValue = value.hostMetadataCondition;
    }
  }

  // host_metadata_condition - computed: false, optional: false, required: true
  private _hostMetadataCondition = new DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataConditionList(this, "host_metadata_condition", true);
  public get hostMetadataCondition() {
    return this._hostMetadataCondition;
  }
  public putHostMetadataCondition(value: DiskEdgeAnomalyDetectorsHostMetadataConditionsHostMetadataCondition[] | cdktf.IResolvable) {
    this._hostMetadataCondition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMetadataConditionInput() {
    return this._hostMetadataCondition.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors dynatrace_disk_edge_anomaly_detectors}
*/
export class DiskEdgeAnomalyDetectors extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_disk_edge_anomaly_detectors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiskEdgeAnomalyDetectors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiskEdgeAnomalyDetectors to import
  * @param importFromId The id of the existing DiskEdgeAnomalyDetectors that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiskEdgeAnomalyDetectors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_disk_edge_anomaly_detectors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_edge_anomaly_detectors dynatrace_disk_edge_anomaly_detectors} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiskEdgeAnomalyDetectorsConfig
  */
  public constructor(scope: Construct, id: string, config: DiskEdgeAnomalyDetectorsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_disk_edge_anomaly_detectors',
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
    this._diskNameFilters = config.diskNameFilters;
    this._enabled = config.enabled;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._operatingSystem = config.operatingSystem;
    this._policyName = config.policyName;
    this._scope = config.scope;
    this._alerts.internalValue = config.alerts;
    this._eventProperties.internalValue = config.eventProperties;
    this._hostMetadataConditions.internalValue = config.hostMetadataConditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk_name_filters - computed: false, optional: true, required: false
  private _diskNameFilters?: string[]; 
  public get diskNameFilters() {
    return cdktf.Fn.tolist(this.getListAttribute('disk_name_filters'));
  }
  public set diskNameFilters(value: string[]) {
    this._diskNameFilters = value;
  }
  public resetDiskNameFilters() {
    this._diskNameFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameFiltersInput() {
    return this._diskNameFilters;
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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
  }

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string[]; 
  public get operatingSystem() {
    return cdktf.Fn.tolist(this.getListAttribute('operating_system'));
  }
  public set operatingSystem(value: string[]) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
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

  // alerts - computed: false, optional: true, required: false
  private _alerts = new DiskEdgeAnomalyDetectorsAlertsOutputReference(this, "alerts");
  public get alerts() {
    return this._alerts;
  }
  public putAlerts(value: DiskEdgeAnomalyDetectorsAlerts) {
    this._alerts.internalValue = value;
  }
  public resetAlerts() {
    this._alerts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsInput() {
    return this._alerts.internalValue;
  }

  // event_properties - computed: false, optional: true, required: false
  private _eventProperties = new DiskEdgeAnomalyDetectorsEventPropertiesOutputReference(this, "event_properties");
  public get eventProperties() {
    return this._eventProperties;
  }
  public putEventProperties(value: DiskEdgeAnomalyDetectorsEventProperties) {
    this._eventProperties.internalValue = value;
  }
  public resetEventProperties() {
    this._eventProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPropertiesInput() {
    return this._eventProperties.internalValue;
  }

  // host_metadata_conditions - computed: false, optional: true, required: false
  private _hostMetadataConditions = new DiskEdgeAnomalyDetectorsHostMetadataConditionsOutputReference(this, "host_metadata_conditions");
  public get hostMetadataConditions() {
    return this._hostMetadataConditions;
  }
  public putHostMetadataConditions(value: DiskEdgeAnomalyDetectorsHostMetadataConditions) {
    this._hostMetadataConditions.internalValue = value;
  }
  public resetHostMetadataConditions() {
    this._hostMetadataConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMetadataConditionsInput() {
    return this._hostMetadataConditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_name_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._diskNameFilters),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      operating_system: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operatingSystem),
      policy_name: cdktf.stringToTerraform(this._policyName),
      scope: cdktf.stringToTerraform(this._scope),
      alerts: diskEdgeAnomalyDetectorsAlertsToTerraform(this._alerts.internalValue),
      event_properties: diskEdgeAnomalyDetectorsEventPropertiesToTerraform(this._eventProperties.internalValue),
      host_metadata_conditions: diskEdgeAnomalyDetectorsHostMetadataConditionsToTerraform(this._hostMetadataConditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disk_name_filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._diskNameFilters),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operating_system: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._operatingSystem),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
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
      alerts: {
        value: diskEdgeAnomalyDetectorsAlertsToHclTerraform(this._alerts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiskEdgeAnomalyDetectorsAlertsList",
      },
      event_properties: {
        value: diskEdgeAnomalyDetectorsEventPropertiesToHclTerraform(this._eventProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiskEdgeAnomalyDetectorsEventPropertiesList",
      },
      host_metadata_conditions: {
        value: diskEdgeAnomalyDetectorsHostMetadataConditionsToHclTerraform(this._hostMetadataConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiskEdgeAnomalyDetectorsHostMetadataConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
