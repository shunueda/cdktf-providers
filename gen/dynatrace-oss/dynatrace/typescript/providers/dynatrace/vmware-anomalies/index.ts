// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmwareAnomaliesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#id VmwareAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * dropped_packets_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#dropped_packets_detection VmwareAnomalies#dropped_packets_detection}
  */
  readonly droppedPacketsDetection: VmwareAnomaliesDroppedPacketsDetection;
  /**
  * esxi_high_cpu_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#esxi_high_cpu_detection VmwareAnomalies#esxi_high_cpu_detection}
  */
  readonly esxiHighCpuDetection: VmwareAnomaliesEsxiHighCpuDetection;
  /**
  * esxi_high_memory_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#esxi_high_memory_detection VmwareAnomalies#esxi_high_memory_detection}
  */
  readonly esxiHighMemoryDetection: VmwareAnomaliesEsxiHighMemoryDetection;
  /**
  * guest_cpu_limit_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#guest_cpu_limit_detection VmwareAnomalies#guest_cpu_limit_detection}
  */
  readonly guestCpuLimitDetection: VmwareAnomaliesGuestCpuLimitDetection;
  /**
  * low_datastore_space_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#low_datastore_space_detection VmwareAnomalies#low_datastore_space_detection}
  */
  readonly lowDatastoreSpaceDetection: VmwareAnomaliesLowDatastoreSpaceDetection;
  /**
  * overloaded_storage_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#overloaded_storage_detection VmwareAnomalies#overloaded_storage_detection}
  */
  readonly overloadedStorageDetection: VmwareAnomaliesOverloadedStorageDetection;
  /**
  * slow_physical_storage_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#slow_physical_storage_detection VmwareAnomalies#slow_physical_storage_detection}
  */
  readonly slowPhysicalStorageDetection: VmwareAnomaliesSlowPhysicalStorageDetection;
  /**
  * undersized_storage_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#undersized_storage_detection VmwareAnomalies#undersized_storage_detection}
  */
  readonly undersizedStorageDetection: VmwareAnomaliesUndersizedStorageDetection;
}
export interface VmwareAnomaliesDroppedPacketsDetectionCustomThresholds {
  /**
  * Receive/transmit dropped packets rate on NIC is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#dropped_packets_per_second VmwareAnomalies#dropped_packets_per_second}
  */
  readonly droppedPacketsPerSecond: number;
}

export function vmwareAnomaliesDroppedPacketsDetectionCustomThresholdsToTerraform(struct?: VmwareAnomaliesDroppedPacketsDetectionCustomThresholdsOutputReference | VmwareAnomaliesDroppedPacketsDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dropped_packets_per_second: cdktf.numberToTerraform(struct!.droppedPacketsPerSecond),
  }
}


export function vmwareAnomaliesDroppedPacketsDetectionCustomThresholdsToHclTerraform(struct?: VmwareAnomaliesDroppedPacketsDetectionCustomThresholdsOutputReference | VmwareAnomaliesDroppedPacketsDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dropped_packets_per_second: {
      value: cdktf.numberToHclTerraform(struct!.droppedPacketsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareAnomaliesDroppedPacketsDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareAnomaliesDroppedPacketsDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._droppedPacketsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.droppedPacketsPerSecond = this._droppedPacketsPerSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareAnomaliesDroppedPacketsDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._droppedPacketsPerSecond = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._droppedPacketsPerSecond = value.droppedPacketsPerSecond;
    }
  }

  // dropped_packets_per_second - computed: false, optional: false, required: true
  private _droppedPacketsPerSecond?: number; 
  public get droppedPacketsPerSecond() {
    return this.getNumberAttribute('dropped_packets_per_second');
  }
  public set droppedPacketsPerSecond(value: number) {
    this._droppedPacketsPerSecond = value;
  }
  // Temporarily expose input value. Use with caution.
  public get droppedPacketsPerSecondInput() {
    return this._droppedPacketsPerSecond;
  }
}
export interface VmwareAnomaliesDroppedPacketsDetection {
  /**
  * Possible Values: `Auto`, `Custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#detection_mode VmwareAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#enabled VmwareAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#custom_thresholds VmwareAnomalies#custom_thresholds}
  */
  readonly customThresholds?: VmwareAnomaliesDroppedPacketsDetectionCustomThresholds;
}

export function vmwareAnomaliesDroppedPacketsDetectionToTerraform(struct?: VmwareAnomaliesDroppedPacketsDetectionOutputReference | VmwareAnomaliesDroppedPacketsDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: vmwareAnomaliesDroppedPacketsDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function vmwareAnomaliesDroppedPacketsDetectionToHclTerraform(struct?: VmwareAnomaliesDroppedPacketsDetectionOutputReference | VmwareAnomaliesDroppedPacketsDetection): any {
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
      value: vmwareAnomaliesDroppedPacketsDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "VmwareAnomaliesDroppedPacketsDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareAnomaliesDroppedPacketsDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareAnomaliesDroppedPacketsDetection | undefined {
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

  public set internalValue(value: VmwareAnomaliesDroppedPacketsDetection | undefined) {
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
  private _customThresholds = new VmwareAnomaliesDroppedPacketsDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: VmwareAnomaliesDroppedPacketsDetectionCustomThresholds) {
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
export interface VmwareAnomaliesEsxiHighCpuDetectionCustomThresholds {
  /**
  * At least one peak occurred when Hypervisor CPU usage was higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#cpu_peak_percentage VmwareAnomalies#cpu_peak_percentage}
  */
  readonly cpuPeakPercentage: number;
  /**
  * CPU usage is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#cpu_usage_percentage VmwareAnomalies#cpu_usage_percentage}
  */
  readonly cpuUsagePercentage: number;
  /**
  * VM CPU ready is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#vm_cpu_ready_percentage VmwareAnomalies#vm_cpu_ready_percentage}
  */
  readonly vmCpuReadyPercentage: number;
}

export function vmwareAnomaliesEsxiHighCpuDetectionCustomThresholdsToTerraform(struct?: VmwareAnomaliesEsxiHighCpuDetectionCustomThresholdsOutputReference | VmwareAnomaliesEsxiHighCpuDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_peak_percentage: cdktf.numberToTerraform(struct!.cpuPeakPercentage),
    cpu_usage_percentage: cdktf.numberToTerraform(struct!.cpuUsagePercentage),
    vm_cpu_ready_percentage: cdktf.numberToTerraform(struct!.vmCpuReadyPercentage),
  }
}


export function vmwareAnomaliesEsxiHighCpuDetectionCustomThresholdsToHclTerraform(struct?: VmwareAnomaliesEsxiHighCpuDetectionCustomThresholdsOutputReference | VmwareAnomaliesEsxiHighCpuDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_peak_percentage: {
      value: cdktf.numberToHclTerraform(struct!.cpuPeakPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_usage_percentage: {
      value: cdktf.numberToHclTerraform(struct!.cpuUsagePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_cpu_ready_percentage: {
      value: cdktf.numberToHclTerraform(struct!.vmCpuReadyPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareAnomaliesEsxiHighCpuDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareAnomaliesEsxiHighCpuDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuPeakPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPeakPercentage = this._cpuPeakPercentage;
    }
    if (this._cpuUsagePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUsagePercentage = this._cpuUsagePercentage;
    }
    if (this._vmCpuReadyPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmCpuReadyPercentage = this._vmCpuReadyPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareAnomaliesEsxiHighCpuDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuPeakPercentage = undefined;
      this._cpuUsagePercentage = undefined;
      this._vmCpuReadyPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuPeakPercentage = value.cpuPeakPercentage;
      this._cpuUsagePercentage = value.cpuUsagePercentage;
      this._vmCpuReadyPercentage = value.vmCpuReadyPercentage;
    }
  }

  // cpu_peak_percentage - computed: false, optional: false, required: true
  private _cpuPeakPercentage?: number; 
  public get cpuPeakPercentage() {
    return this.getNumberAttribute('cpu_peak_percentage');
  }
  public set cpuPeakPercentage(value: number) {
    this._cpuPeakPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPeakPercentageInput() {
    return this._cpuPeakPercentage;
  }

  // cpu_usage_percentage - computed: false, optional: false, required: true
  private _cpuUsagePercentage?: number; 
  public get cpuUsagePercentage() {
    return this.getNumberAttribute('cpu_usage_percentage');
  }
  public set cpuUsagePercentage(value: number) {
    this._cpuUsagePercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsagePercentageInput() {
    return this._cpuUsagePercentage;
  }

  // vm_cpu_ready_percentage - computed: false, optional: false, required: true
  private _vmCpuReadyPercentage?: number; 
  public get vmCpuReadyPercentage() {
    return this.getNumberAttribute('vm_cpu_ready_percentage');
  }
  public set vmCpuReadyPercentage(value: number) {
    this._vmCpuReadyPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmCpuReadyPercentageInput() {
    return this._vmCpuReadyPercentage;
  }
}
export interface VmwareAnomaliesEsxiHighCpuDetection {
  /**
  * Possible Values: `Auto`, `Custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#detection_mode VmwareAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#enabled VmwareAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#custom_thresholds VmwareAnomalies#custom_thresholds}
  */
  readonly customThresholds?: VmwareAnomaliesEsxiHighCpuDetectionCustomThresholds;
}

export function vmwareAnomaliesEsxiHighCpuDetectionToTerraform(struct?: VmwareAnomaliesEsxiHighCpuDetectionOutputReference | VmwareAnomaliesEsxiHighCpuDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: vmwareAnomaliesEsxiHighCpuDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function vmwareAnomaliesEsxiHighCpuDetectionToHclTerraform(struct?: VmwareAnomaliesEsxiHighCpuDetectionOutputReference | VmwareAnomaliesEsxiHighCpuDetection): any {
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
      value: vmwareAnomaliesEsxiHighCpuDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "VmwareAnomaliesEsxiHighCpuDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareAnomaliesEsxiHighCpuDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareAnomaliesEsxiHighCpuDetection | undefined {
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

  public set internalValue(value: VmwareAnomaliesEsxiHighCpuDetection | undefined) {
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
  private _customThresholds = new VmwareAnomaliesEsxiHighCpuDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: VmwareAnomaliesEsxiHighCpuDetectionCustomThresholds) {
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
export interface VmwareAnomaliesEsxiHighMemoryDetectionCustomThresholds {
  /**
  * ESXi host swap IN/OUT or compression/decompression rate is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#compression_decompression_rate VmwareAnomalies#compression_decompression_rate}
  */
  readonly compressionDecompressionRate: number;
}

export function vmwareAnomaliesEsxiHighMemoryDetectionCustomThresholdsToTerraform(struct?: VmwareAnomaliesEsxiHighMemoryDetectionCustomThresholdsOutputReference | VmwareAnomaliesEsxiHighMemoryDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_decompression_rate: cdktf.numberToTerraform(struct!.compressionDecompressionRate),
  }
}


export function vmwareAnomaliesEsxiHighMemoryDetectionCustomThresholdsToHclTerraform(struct?: VmwareAnomaliesEsxiHighMemoryDetectionCustomThresholdsOutputReference | VmwareAnomaliesEsxiHighMemoryDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_decompression_rate: {
      value: cdktf.numberToHclTerraform(struct!.compressionDecompressionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareAnomaliesEsxiHighMemoryDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareAnomaliesEsxiHighMemoryDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionDecompressionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionDecompressionRate = this._compressionDecompressionRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareAnomaliesEsxiHighMemoryDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionDecompressionRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionDecompressionRate = value.compressionDecompressionRate;
    }
  }

  // compression_decompression_rate - computed: false, optional: false, required: true
  private _compressionDecompressionRate?: number; 
  public get compressionDecompressionRate() {
    return this.getNumberAttribute('compression_decompression_rate');
  }
  public set compressionDecompressionRate(value: number) {
    this._compressionDecompressionRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionDecompressionRateInput() {
    return this._compressionDecompressionRate;
  }
}
export interface VmwareAnomaliesEsxiHighMemoryDetection {
  /**
  * Possible Values: `Auto`, `Custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#detection_mode VmwareAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#enabled VmwareAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#custom_thresholds VmwareAnomalies#custom_thresholds}
  */
  readonly customThresholds?: VmwareAnomaliesEsxiHighMemoryDetectionCustomThresholds;
}

export function vmwareAnomaliesEsxiHighMemoryDetectionToTerraform(struct?: VmwareAnomaliesEsxiHighMemoryDetectionOutputReference | VmwareAnomaliesEsxiHighMemoryDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: vmwareAnomaliesEsxiHighMemoryDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function vmwareAnomaliesEsxiHighMemoryDetectionToHclTerraform(struct?: VmwareAnomaliesEsxiHighMemoryDetectionOutputReference | VmwareAnomaliesEsxiHighMemoryDetection): any {
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
      value: vmwareAnomaliesEsxiHighMemoryDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "VmwareAnomaliesEsxiHighMemoryDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareAnomaliesEsxiHighMemoryDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareAnomaliesEsxiHighMemoryDetection | undefined {
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

  public set internalValue(value: VmwareAnomaliesEsxiHighMemoryDetection | undefined) {
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
  private _customThresholds = new VmwareAnomaliesEsxiHighMemoryDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: VmwareAnomaliesEsxiHighMemoryDetectionCustomThresholds) {
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
export interface VmwareAnomaliesGuestCpuLimitDetectionCustomThresholds {
  /**
  * Hypervisor CPU usage is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#host_cpu_usage_percentage VmwareAnomalies#host_cpu_usage_percentage}
  */
  readonly hostCpuUsagePercentage: number;
  /**
  * VM CPU ready is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#vm_cpu_ready_percentage VmwareAnomalies#vm_cpu_ready_percentage}
  */
  readonly vmCpuReadyPercentage: number;
  /**
  * VM CPU usage (VM CPU Usage Mhz / VM CPU limit in Mhz) is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#vm_cpu_usage_percentage VmwareAnomalies#vm_cpu_usage_percentage}
  */
  readonly vmCpuUsagePercentage: number;
}

export function vmwareAnomaliesGuestCpuLimitDetectionCustomThresholdsToTerraform(struct?: VmwareAnomaliesGuestCpuLimitDetectionCustomThresholdsOutputReference | VmwareAnomaliesGuestCpuLimitDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_cpu_usage_percentage: cdktf.numberToTerraform(struct!.hostCpuUsagePercentage),
    vm_cpu_ready_percentage: cdktf.numberToTerraform(struct!.vmCpuReadyPercentage),
    vm_cpu_usage_percentage: cdktf.numberToTerraform(struct!.vmCpuUsagePercentage),
  }
}


export function vmwareAnomaliesGuestCpuLimitDetectionCustomThresholdsToHclTerraform(struct?: VmwareAnomaliesGuestCpuLimitDetectionCustomThresholdsOutputReference | VmwareAnomaliesGuestCpuLimitDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_cpu_usage_percentage: {
      value: cdktf.numberToHclTerraform(struct!.hostCpuUsagePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_cpu_ready_percentage: {
      value: cdktf.numberToHclTerraform(struct!.vmCpuReadyPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_cpu_usage_percentage: {
      value: cdktf.numberToHclTerraform(struct!.vmCpuUsagePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareAnomaliesGuestCpuLimitDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareAnomaliesGuestCpuLimitDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostCpuUsagePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostCpuUsagePercentage = this._hostCpuUsagePercentage;
    }
    if (this._vmCpuReadyPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmCpuReadyPercentage = this._vmCpuReadyPercentage;
    }
    if (this._vmCpuUsagePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmCpuUsagePercentage = this._vmCpuUsagePercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareAnomaliesGuestCpuLimitDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostCpuUsagePercentage = undefined;
      this._vmCpuReadyPercentage = undefined;
      this._vmCpuUsagePercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostCpuUsagePercentage = value.hostCpuUsagePercentage;
      this._vmCpuReadyPercentage = value.vmCpuReadyPercentage;
      this._vmCpuUsagePercentage = value.vmCpuUsagePercentage;
    }
  }

  // host_cpu_usage_percentage - computed: false, optional: false, required: true
  private _hostCpuUsagePercentage?: number; 
  public get hostCpuUsagePercentage() {
    return this.getNumberAttribute('host_cpu_usage_percentage');
  }
  public set hostCpuUsagePercentage(value: number) {
    this._hostCpuUsagePercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostCpuUsagePercentageInput() {
    return this._hostCpuUsagePercentage;
  }

  // vm_cpu_ready_percentage - computed: false, optional: false, required: true
  private _vmCpuReadyPercentage?: number; 
  public get vmCpuReadyPercentage() {
    return this.getNumberAttribute('vm_cpu_ready_percentage');
  }
  public set vmCpuReadyPercentage(value: number) {
    this._vmCpuReadyPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmCpuReadyPercentageInput() {
    return this._vmCpuReadyPercentage;
  }

  // vm_cpu_usage_percentage - computed: false, optional: false, required: true
  private _vmCpuUsagePercentage?: number; 
  public get vmCpuUsagePercentage() {
    return this.getNumberAttribute('vm_cpu_usage_percentage');
  }
  public set vmCpuUsagePercentage(value: number) {
    this._vmCpuUsagePercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmCpuUsagePercentageInput() {
    return this._vmCpuUsagePercentage;
  }
}
export interface VmwareAnomaliesGuestCpuLimitDetection {
  /**
  * Possible Values: `Auto`, `Custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#detection_mode VmwareAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#enabled VmwareAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#custom_thresholds VmwareAnomalies#custom_thresholds}
  */
  readonly customThresholds?: VmwareAnomaliesGuestCpuLimitDetectionCustomThresholds;
}

export function vmwareAnomaliesGuestCpuLimitDetectionToTerraform(struct?: VmwareAnomaliesGuestCpuLimitDetectionOutputReference | VmwareAnomaliesGuestCpuLimitDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: vmwareAnomaliesGuestCpuLimitDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function vmwareAnomaliesGuestCpuLimitDetectionToHclTerraform(struct?: VmwareAnomaliesGuestCpuLimitDetectionOutputReference | VmwareAnomaliesGuestCpuLimitDetection): any {
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
      value: vmwareAnomaliesGuestCpuLimitDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "VmwareAnomaliesGuestCpuLimitDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareAnomaliesGuestCpuLimitDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareAnomaliesGuestCpuLimitDetection | undefined {
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

  public set internalValue(value: VmwareAnomaliesGuestCpuLimitDetection | undefined) {
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
  private _customThresholds = new VmwareAnomaliesGuestCpuLimitDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: VmwareAnomaliesGuestCpuLimitDetectionCustomThresholds) {
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
export interface VmwareAnomaliesLowDatastoreSpaceDetectionCustomThresholds {
  /**
  * Datastore free space is lower than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#free_space_percentage VmwareAnomalies#free_space_percentage}
  */
  readonly freeSpacePercentage: number;
}

export function vmwareAnomaliesLowDatastoreSpaceDetectionCustomThresholdsToTerraform(struct?: VmwareAnomaliesLowDatastoreSpaceDetectionCustomThresholdsOutputReference | VmwareAnomaliesLowDatastoreSpaceDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    free_space_percentage: cdktf.numberToTerraform(struct!.freeSpacePercentage),
  }
}


export function vmwareAnomaliesLowDatastoreSpaceDetectionCustomThresholdsToHclTerraform(struct?: VmwareAnomaliesLowDatastoreSpaceDetectionCustomThresholdsOutputReference | VmwareAnomaliesLowDatastoreSpaceDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    free_space_percentage: {
      value: cdktf.numberToHclTerraform(struct!.freeSpacePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareAnomaliesLowDatastoreSpaceDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareAnomaliesLowDatastoreSpaceDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freeSpacePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeSpacePercentage = this._freeSpacePercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareAnomaliesLowDatastoreSpaceDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._freeSpacePercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._freeSpacePercentage = value.freeSpacePercentage;
    }
  }

  // free_space_percentage - computed: false, optional: false, required: true
  private _freeSpacePercentage?: number; 
  public get freeSpacePercentage() {
    return this.getNumberAttribute('free_space_percentage');
  }
  public set freeSpacePercentage(value: number) {
    this._freeSpacePercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get freeSpacePercentageInput() {
    return this._freeSpacePercentage;
  }
}
export interface VmwareAnomaliesLowDatastoreSpaceDetection {
  /**
  * Possible Values: `Auto`, `Custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#detection_mode VmwareAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#enabled VmwareAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#custom_thresholds VmwareAnomalies#custom_thresholds}
  */
  readonly customThresholds?: VmwareAnomaliesLowDatastoreSpaceDetectionCustomThresholds;
}

export function vmwareAnomaliesLowDatastoreSpaceDetectionToTerraform(struct?: VmwareAnomaliesLowDatastoreSpaceDetectionOutputReference | VmwareAnomaliesLowDatastoreSpaceDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: vmwareAnomaliesLowDatastoreSpaceDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function vmwareAnomaliesLowDatastoreSpaceDetectionToHclTerraform(struct?: VmwareAnomaliesLowDatastoreSpaceDetectionOutputReference | VmwareAnomaliesLowDatastoreSpaceDetection): any {
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
      value: vmwareAnomaliesLowDatastoreSpaceDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "VmwareAnomaliesLowDatastoreSpaceDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareAnomaliesLowDatastoreSpaceDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareAnomaliesLowDatastoreSpaceDetection | undefined {
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

  public set internalValue(value: VmwareAnomaliesLowDatastoreSpaceDetection | undefined) {
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
  private _customThresholds = new VmwareAnomaliesLowDatastoreSpaceDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: VmwareAnomaliesLowDatastoreSpaceDetectionCustomThresholds) {
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
export interface VmwareAnomaliesOverloadedStorageDetectionCustomThresholds {
  /**
  * Number of command aborts is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#command_aborts_number VmwareAnomalies#command_aborts_number}
  */
  readonly commandAbortsNumber: number;
}

export function vmwareAnomaliesOverloadedStorageDetectionCustomThresholdsToTerraform(struct?: VmwareAnomaliesOverloadedStorageDetectionCustomThresholdsOutputReference | VmwareAnomaliesOverloadedStorageDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_aborts_number: cdktf.numberToTerraform(struct!.commandAbortsNumber),
  }
}


export function vmwareAnomaliesOverloadedStorageDetectionCustomThresholdsToHclTerraform(struct?: VmwareAnomaliesOverloadedStorageDetectionCustomThresholdsOutputReference | VmwareAnomaliesOverloadedStorageDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_aborts_number: {
      value: cdktf.numberToHclTerraform(struct!.commandAbortsNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareAnomaliesOverloadedStorageDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareAnomaliesOverloadedStorageDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandAbortsNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandAbortsNumber = this._commandAbortsNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareAnomaliesOverloadedStorageDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commandAbortsNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandAbortsNumber = value.commandAbortsNumber;
    }
  }

  // command_aborts_number - computed: false, optional: false, required: true
  private _commandAbortsNumber?: number; 
  public get commandAbortsNumber() {
    return this.getNumberAttribute('command_aborts_number');
  }
  public set commandAbortsNumber(value: number) {
    this._commandAbortsNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandAbortsNumberInput() {
    return this._commandAbortsNumber;
  }
}
export interface VmwareAnomaliesOverloadedStorageDetection {
  /**
  * Possible Values: `Auto`, `Custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#detection_mode VmwareAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#enabled VmwareAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#custom_thresholds VmwareAnomalies#custom_thresholds}
  */
  readonly customThresholds?: VmwareAnomaliesOverloadedStorageDetectionCustomThresholds;
}

export function vmwareAnomaliesOverloadedStorageDetectionToTerraform(struct?: VmwareAnomaliesOverloadedStorageDetectionOutputReference | VmwareAnomaliesOverloadedStorageDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: vmwareAnomaliesOverloadedStorageDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function vmwareAnomaliesOverloadedStorageDetectionToHclTerraform(struct?: VmwareAnomaliesOverloadedStorageDetectionOutputReference | VmwareAnomaliesOverloadedStorageDetection): any {
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
      value: vmwareAnomaliesOverloadedStorageDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "VmwareAnomaliesOverloadedStorageDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareAnomaliesOverloadedStorageDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareAnomaliesOverloadedStorageDetection | undefined {
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

  public set internalValue(value: VmwareAnomaliesOverloadedStorageDetection | undefined) {
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
  private _customThresholds = new VmwareAnomaliesOverloadedStorageDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: VmwareAnomaliesOverloadedStorageDetectionCustomThresholds) {
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
export interface VmwareAnomaliesSlowPhysicalStorageDetectionCustomThresholds {
  /**
  * Read/write latency is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#avg_read_write_latency VmwareAnomalies#avg_read_write_latency}
  */
  readonly avgReadWriteLatency: number;
  /**
  * Peak value for read/write latency is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#peak_read_write_latency VmwareAnomalies#peak_read_write_latency}
  */
  readonly peakReadWriteLatency: number;
}

export function vmwareAnomaliesSlowPhysicalStorageDetectionCustomThresholdsToTerraform(struct?: VmwareAnomaliesSlowPhysicalStorageDetectionCustomThresholdsOutputReference | VmwareAnomaliesSlowPhysicalStorageDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avg_read_write_latency: cdktf.numberToTerraform(struct!.avgReadWriteLatency),
    peak_read_write_latency: cdktf.numberToTerraform(struct!.peakReadWriteLatency),
  }
}


export function vmwareAnomaliesSlowPhysicalStorageDetectionCustomThresholdsToHclTerraform(struct?: VmwareAnomaliesSlowPhysicalStorageDetectionCustomThresholdsOutputReference | VmwareAnomaliesSlowPhysicalStorageDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avg_read_write_latency: {
      value: cdktf.numberToHclTerraform(struct!.avgReadWriteLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_read_write_latency: {
      value: cdktf.numberToHclTerraform(struct!.peakReadWriteLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareAnomaliesSlowPhysicalStorageDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareAnomaliesSlowPhysicalStorageDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avgReadWriteLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.avgReadWriteLatency = this._avgReadWriteLatency;
    }
    if (this._peakReadWriteLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakReadWriteLatency = this._peakReadWriteLatency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareAnomaliesSlowPhysicalStorageDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._avgReadWriteLatency = undefined;
      this._peakReadWriteLatency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._avgReadWriteLatency = value.avgReadWriteLatency;
      this._peakReadWriteLatency = value.peakReadWriteLatency;
    }
  }

  // avg_read_write_latency - computed: false, optional: false, required: true
  private _avgReadWriteLatency?: number; 
  public get avgReadWriteLatency() {
    return this.getNumberAttribute('avg_read_write_latency');
  }
  public set avgReadWriteLatency(value: number) {
    this._avgReadWriteLatency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get avgReadWriteLatencyInput() {
    return this._avgReadWriteLatency;
  }

  // peak_read_write_latency - computed: false, optional: false, required: true
  private _peakReadWriteLatency?: number; 
  public get peakReadWriteLatency() {
    return this.getNumberAttribute('peak_read_write_latency');
  }
  public set peakReadWriteLatency(value: number) {
    this._peakReadWriteLatency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peakReadWriteLatencyInput() {
    return this._peakReadWriteLatency;
  }
}
export interface VmwareAnomaliesSlowPhysicalStorageDetection {
  /**
  * Possible Values: `Auto`, `Custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#detection_mode VmwareAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#enabled VmwareAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#custom_thresholds VmwareAnomalies#custom_thresholds}
  */
  readonly customThresholds?: VmwareAnomaliesSlowPhysicalStorageDetectionCustomThresholds;
}

export function vmwareAnomaliesSlowPhysicalStorageDetectionToTerraform(struct?: VmwareAnomaliesSlowPhysicalStorageDetectionOutputReference | VmwareAnomaliesSlowPhysicalStorageDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: vmwareAnomaliesSlowPhysicalStorageDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function vmwareAnomaliesSlowPhysicalStorageDetectionToHclTerraform(struct?: VmwareAnomaliesSlowPhysicalStorageDetectionOutputReference | VmwareAnomaliesSlowPhysicalStorageDetection): any {
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
      value: vmwareAnomaliesSlowPhysicalStorageDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "VmwareAnomaliesSlowPhysicalStorageDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareAnomaliesSlowPhysicalStorageDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareAnomaliesSlowPhysicalStorageDetection | undefined {
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

  public set internalValue(value: VmwareAnomaliesSlowPhysicalStorageDetection | undefined) {
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
  private _customThresholds = new VmwareAnomaliesSlowPhysicalStorageDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: VmwareAnomaliesSlowPhysicalStorageDetectionCustomThresholds) {
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
export interface VmwareAnomaliesUndersizedStorageDetectionCustomThresholds {
  /**
  * Average queue command latency is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#average_queue_command_latency VmwareAnomalies#average_queue_command_latency}
  */
  readonly averageQueueCommandLatency: number;
  /**
  * Peak queue command latency is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#peak_queue_command_latency VmwareAnomalies#peak_queue_command_latency}
  */
  readonly peakQueueCommandLatency: number;
}

export function vmwareAnomaliesUndersizedStorageDetectionCustomThresholdsToTerraform(struct?: VmwareAnomaliesUndersizedStorageDetectionCustomThresholdsOutputReference | VmwareAnomaliesUndersizedStorageDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_queue_command_latency: cdktf.numberToTerraform(struct!.averageQueueCommandLatency),
    peak_queue_command_latency: cdktf.numberToTerraform(struct!.peakQueueCommandLatency),
  }
}


export function vmwareAnomaliesUndersizedStorageDetectionCustomThresholdsToHclTerraform(struct?: VmwareAnomaliesUndersizedStorageDetectionCustomThresholdsOutputReference | VmwareAnomaliesUndersizedStorageDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_queue_command_latency: {
      value: cdktf.numberToHclTerraform(struct!.averageQueueCommandLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_queue_command_latency: {
      value: cdktf.numberToHclTerraform(struct!.peakQueueCommandLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareAnomaliesUndersizedStorageDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareAnomaliesUndersizedStorageDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageQueueCommandLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageQueueCommandLatency = this._averageQueueCommandLatency;
    }
    if (this._peakQueueCommandLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakQueueCommandLatency = this._peakQueueCommandLatency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareAnomaliesUndersizedStorageDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._averageQueueCommandLatency = undefined;
      this._peakQueueCommandLatency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._averageQueueCommandLatency = value.averageQueueCommandLatency;
      this._peakQueueCommandLatency = value.peakQueueCommandLatency;
    }
  }

  // average_queue_command_latency - computed: false, optional: false, required: true
  private _averageQueueCommandLatency?: number; 
  public get averageQueueCommandLatency() {
    return this.getNumberAttribute('average_queue_command_latency');
  }
  public set averageQueueCommandLatency(value: number) {
    this._averageQueueCommandLatency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get averageQueueCommandLatencyInput() {
    return this._averageQueueCommandLatency;
  }

  // peak_queue_command_latency - computed: false, optional: false, required: true
  private _peakQueueCommandLatency?: number; 
  public get peakQueueCommandLatency() {
    return this.getNumberAttribute('peak_queue_command_latency');
  }
  public set peakQueueCommandLatency(value: number) {
    this._peakQueueCommandLatency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peakQueueCommandLatencyInput() {
    return this._peakQueueCommandLatency;
  }
}
export interface VmwareAnomaliesUndersizedStorageDetection {
  /**
  * Possible Values: `Auto`, `Custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#detection_mode VmwareAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#enabled VmwareAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#custom_thresholds VmwareAnomalies#custom_thresholds}
  */
  readonly customThresholds?: VmwareAnomaliesUndersizedStorageDetectionCustomThresholds;
}

export function vmwareAnomaliesUndersizedStorageDetectionToTerraform(struct?: VmwareAnomaliesUndersizedStorageDetectionOutputReference | VmwareAnomaliesUndersizedStorageDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: vmwareAnomaliesUndersizedStorageDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function vmwareAnomaliesUndersizedStorageDetectionToHclTerraform(struct?: VmwareAnomaliesUndersizedStorageDetectionOutputReference | VmwareAnomaliesUndersizedStorageDetection): any {
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
      value: vmwareAnomaliesUndersizedStorageDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "VmwareAnomaliesUndersizedStorageDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareAnomaliesUndersizedStorageDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareAnomaliesUndersizedStorageDetection | undefined {
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

  public set internalValue(value: VmwareAnomaliesUndersizedStorageDetection | undefined) {
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
  private _customThresholds = new VmwareAnomaliesUndersizedStorageDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: VmwareAnomaliesUndersizedStorageDetectionCustomThresholds) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies dynatrace_vmware_anomalies}
*/
export class VmwareAnomalies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_vmware_anomalies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmwareAnomalies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmwareAnomalies to import
  * @param importFromId The id of the existing VmwareAnomalies that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmwareAnomalies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_vmware_anomalies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/vmware_anomalies dynatrace_vmware_anomalies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmwareAnomaliesConfig
  */
  public constructor(scope: Construct, id: string, config: VmwareAnomaliesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_vmware_anomalies',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
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
    this._droppedPacketsDetection.internalValue = config.droppedPacketsDetection;
    this._esxiHighCpuDetection.internalValue = config.esxiHighCpuDetection;
    this._esxiHighMemoryDetection.internalValue = config.esxiHighMemoryDetection;
    this._guestCpuLimitDetection.internalValue = config.guestCpuLimitDetection;
    this._lowDatastoreSpaceDetection.internalValue = config.lowDatastoreSpaceDetection;
    this._overloadedStorageDetection.internalValue = config.overloadedStorageDetection;
    this._slowPhysicalStorageDetection.internalValue = config.slowPhysicalStorageDetection;
    this._undersizedStorageDetection.internalValue = config.undersizedStorageDetection;
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

  // dropped_packets_detection - computed: false, optional: false, required: true
  private _droppedPacketsDetection = new VmwareAnomaliesDroppedPacketsDetectionOutputReference(this, "dropped_packets_detection");
  public get droppedPacketsDetection() {
    return this._droppedPacketsDetection;
  }
  public putDroppedPacketsDetection(value: VmwareAnomaliesDroppedPacketsDetection) {
    this._droppedPacketsDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get droppedPacketsDetectionInput() {
    return this._droppedPacketsDetection.internalValue;
  }

  // esxi_high_cpu_detection - computed: false, optional: false, required: true
  private _esxiHighCpuDetection = new VmwareAnomaliesEsxiHighCpuDetectionOutputReference(this, "esxi_high_cpu_detection");
  public get esxiHighCpuDetection() {
    return this._esxiHighCpuDetection;
  }
  public putEsxiHighCpuDetection(value: VmwareAnomaliesEsxiHighCpuDetection) {
    this._esxiHighCpuDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get esxiHighCpuDetectionInput() {
    return this._esxiHighCpuDetection.internalValue;
  }

  // esxi_high_memory_detection - computed: false, optional: false, required: true
  private _esxiHighMemoryDetection = new VmwareAnomaliesEsxiHighMemoryDetectionOutputReference(this, "esxi_high_memory_detection");
  public get esxiHighMemoryDetection() {
    return this._esxiHighMemoryDetection;
  }
  public putEsxiHighMemoryDetection(value: VmwareAnomaliesEsxiHighMemoryDetection) {
    this._esxiHighMemoryDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get esxiHighMemoryDetectionInput() {
    return this._esxiHighMemoryDetection.internalValue;
  }

  // guest_cpu_limit_detection - computed: false, optional: false, required: true
  private _guestCpuLimitDetection = new VmwareAnomaliesGuestCpuLimitDetectionOutputReference(this, "guest_cpu_limit_detection");
  public get guestCpuLimitDetection() {
    return this._guestCpuLimitDetection;
  }
  public putGuestCpuLimitDetection(value: VmwareAnomaliesGuestCpuLimitDetection) {
    this._guestCpuLimitDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guestCpuLimitDetectionInput() {
    return this._guestCpuLimitDetection.internalValue;
  }

  // low_datastore_space_detection - computed: false, optional: false, required: true
  private _lowDatastoreSpaceDetection = new VmwareAnomaliesLowDatastoreSpaceDetectionOutputReference(this, "low_datastore_space_detection");
  public get lowDatastoreSpaceDetection() {
    return this._lowDatastoreSpaceDetection;
  }
  public putLowDatastoreSpaceDetection(value: VmwareAnomaliesLowDatastoreSpaceDetection) {
    this._lowDatastoreSpaceDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowDatastoreSpaceDetectionInput() {
    return this._lowDatastoreSpaceDetection.internalValue;
  }

  // overloaded_storage_detection - computed: false, optional: false, required: true
  private _overloadedStorageDetection = new VmwareAnomaliesOverloadedStorageDetectionOutputReference(this, "overloaded_storage_detection");
  public get overloadedStorageDetection() {
    return this._overloadedStorageDetection;
  }
  public putOverloadedStorageDetection(value: VmwareAnomaliesOverloadedStorageDetection) {
    this._overloadedStorageDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overloadedStorageDetectionInput() {
    return this._overloadedStorageDetection.internalValue;
  }

  // slow_physical_storage_detection - computed: false, optional: false, required: true
  private _slowPhysicalStorageDetection = new VmwareAnomaliesSlowPhysicalStorageDetectionOutputReference(this, "slow_physical_storage_detection");
  public get slowPhysicalStorageDetection() {
    return this._slowPhysicalStorageDetection;
  }
  public putSlowPhysicalStorageDetection(value: VmwareAnomaliesSlowPhysicalStorageDetection) {
    this._slowPhysicalStorageDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slowPhysicalStorageDetectionInput() {
    return this._slowPhysicalStorageDetection.internalValue;
  }

  // undersized_storage_detection - computed: false, optional: false, required: true
  private _undersizedStorageDetection = new VmwareAnomaliesUndersizedStorageDetectionOutputReference(this, "undersized_storage_detection");
  public get undersizedStorageDetection() {
    return this._undersizedStorageDetection;
  }
  public putUndersizedStorageDetection(value: VmwareAnomaliesUndersizedStorageDetection) {
    this._undersizedStorageDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get undersizedStorageDetectionInput() {
    return this._undersizedStorageDetection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      dropped_packets_detection: vmwareAnomaliesDroppedPacketsDetectionToTerraform(this._droppedPacketsDetection.internalValue),
      esxi_high_cpu_detection: vmwareAnomaliesEsxiHighCpuDetectionToTerraform(this._esxiHighCpuDetection.internalValue),
      esxi_high_memory_detection: vmwareAnomaliesEsxiHighMemoryDetectionToTerraform(this._esxiHighMemoryDetection.internalValue),
      guest_cpu_limit_detection: vmwareAnomaliesGuestCpuLimitDetectionToTerraform(this._guestCpuLimitDetection.internalValue),
      low_datastore_space_detection: vmwareAnomaliesLowDatastoreSpaceDetectionToTerraform(this._lowDatastoreSpaceDetection.internalValue),
      overloaded_storage_detection: vmwareAnomaliesOverloadedStorageDetectionToTerraform(this._overloadedStorageDetection.internalValue),
      slow_physical_storage_detection: vmwareAnomaliesSlowPhysicalStorageDetectionToTerraform(this._slowPhysicalStorageDetection.internalValue),
      undersized_storage_detection: vmwareAnomaliesUndersizedStorageDetectionToTerraform(this._undersizedStorageDetection.internalValue),
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
      dropped_packets_detection: {
        value: vmwareAnomaliesDroppedPacketsDetectionToHclTerraform(this._droppedPacketsDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmwareAnomaliesDroppedPacketsDetectionList",
      },
      esxi_high_cpu_detection: {
        value: vmwareAnomaliesEsxiHighCpuDetectionToHclTerraform(this._esxiHighCpuDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmwareAnomaliesEsxiHighCpuDetectionList",
      },
      esxi_high_memory_detection: {
        value: vmwareAnomaliesEsxiHighMemoryDetectionToHclTerraform(this._esxiHighMemoryDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmwareAnomaliesEsxiHighMemoryDetectionList",
      },
      guest_cpu_limit_detection: {
        value: vmwareAnomaliesGuestCpuLimitDetectionToHclTerraform(this._guestCpuLimitDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmwareAnomaliesGuestCpuLimitDetectionList",
      },
      low_datastore_space_detection: {
        value: vmwareAnomaliesLowDatastoreSpaceDetectionToHclTerraform(this._lowDatastoreSpaceDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmwareAnomaliesLowDatastoreSpaceDetectionList",
      },
      overloaded_storage_detection: {
        value: vmwareAnomaliesOverloadedStorageDetectionToHclTerraform(this._overloadedStorageDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmwareAnomaliesOverloadedStorageDetectionList",
      },
      slow_physical_storage_detection: {
        value: vmwareAnomaliesSlowPhysicalStorageDetectionToHclTerraform(this._slowPhysicalStorageDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmwareAnomaliesSlowPhysicalStorageDetectionList",
      },
      undersized_storage_detection: {
        value: vmwareAnomaliesUndersizedStorageDetectionToHclTerraform(this._undersizedStorageDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmwareAnomaliesUndersizedStorageDetectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
