// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiskSpecificAnomaliesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The id for the disk anomaly detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#disk_id DiskSpecificAnomaliesV2#disk_id}
  */
  readonly diskId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#id DiskSpecificAnomaliesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Override low disk space detection settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#override_disk_low_space_detection DiskSpecificAnomaliesV2#override_disk_low_space_detection}
  */
  readonly overrideDiskLowSpaceDetection: boolean | cdktf.IResolvable;
  /**
  * Override low inodes detection settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#override_low_inodes_detection DiskSpecificAnomaliesV2#override_low_inodes_detection}
  */
  readonly overrideLowInodesDetection: boolean | cdktf.IResolvable;
  /**
  * Override slow writes and reads detection settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#override_slow_writes_and_reads_detection DiskSpecificAnomaliesV2#override_slow_writes_and_reads_detection}
  */
  readonly overrideSlowWritesAndReadsDetection: boolean | cdktf.IResolvable;
  /**
  * disk_low_inodes_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#disk_low_inodes_detection DiskSpecificAnomaliesV2#disk_low_inodes_detection}
  */
  readonly diskLowInodesDetection?: DiskSpecificAnomaliesV2DiskLowInodesDetection;
  /**
  * disk_low_space_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#disk_low_space_detection DiskSpecificAnomaliesV2#disk_low_space_detection}
  */
  readonly diskLowSpaceDetection?: DiskSpecificAnomaliesV2DiskLowSpaceDetection;
  /**
  * disk_slow_writes_and_reads_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#disk_slow_writes_and_reads_detection DiskSpecificAnomaliesV2#disk_slow_writes_and_reads_detection}
  */
  readonly diskSlowWritesAndReadsDetection?: DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetection;
}
export interface DiskSpecificAnomaliesV2DiskLowInodesDetectionCustomThresholds {
  /**
  * Alert if the percentage of available inodes is lower than this threshold in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#free_inodes_percentage DiskSpecificAnomaliesV2#free_inodes_percentage}
  */
  readonly freeInodesPercentage: number;
}

export function diskSpecificAnomaliesV2DiskLowInodesDetectionCustomThresholdsToTerraform(struct?: DiskSpecificAnomaliesV2DiskLowInodesDetectionCustomThresholdsOutputReference | DiskSpecificAnomaliesV2DiskLowInodesDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    free_inodes_percentage: cdktf.numberToTerraform(struct!.freeInodesPercentage),
  }
}


export function diskSpecificAnomaliesV2DiskLowInodesDetectionCustomThresholdsToHclTerraform(struct?: DiskSpecificAnomaliesV2DiskLowInodesDetectionCustomThresholdsOutputReference | DiskSpecificAnomaliesV2DiskLowInodesDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    free_inodes_percentage: {
      value: cdktf.numberToHclTerraform(struct!.freeInodesPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskSpecificAnomaliesV2DiskLowInodesDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskSpecificAnomaliesV2DiskLowInodesDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freeInodesPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeInodesPercentage = this._freeInodesPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskSpecificAnomaliesV2DiskLowInodesDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._freeInodesPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._freeInodesPercentage = value.freeInodesPercentage;
    }
  }

  // free_inodes_percentage - computed: false, optional: false, required: true
  private _freeInodesPercentage?: number; 
  public get freeInodesPercentage() {
    return this.getNumberAttribute('free_inodes_percentage');
  }
  public set freeInodesPercentage(value: number) {
    this._freeInodesPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get freeInodesPercentageInput() {
    return this._freeInodesPercentage;
  }
}
export interface DiskSpecificAnomaliesV2DiskLowInodesDetection {
  /**
  * Detection mode for low inodes number available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#detection_mode DiskSpecificAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Detect low inodes number available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#enabled DiskSpecificAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#custom_thresholds DiskSpecificAnomaliesV2#custom_thresholds}
  */
  readonly customThresholds?: DiskSpecificAnomaliesV2DiskLowInodesDetectionCustomThresholds;
}

export function diskSpecificAnomaliesV2DiskLowInodesDetectionToTerraform(struct?: DiskSpecificAnomaliesV2DiskLowInodesDetectionOutputReference | DiskSpecificAnomaliesV2DiskLowInodesDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: diskSpecificAnomaliesV2DiskLowInodesDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function diskSpecificAnomaliesV2DiskLowInodesDetectionToHclTerraform(struct?: DiskSpecificAnomaliesV2DiskLowInodesDetectionOutputReference | DiskSpecificAnomaliesV2DiskLowInodesDetection): any {
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
      value: diskSpecificAnomaliesV2DiskLowInodesDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "DiskSpecificAnomaliesV2DiskLowInodesDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskSpecificAnomaliesV2DiskLowInodesDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskSpecificAnomaliesV2DiskLowInodesDetection | undefined {
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

  public set internalValue(value: DiskSpecificAnomaliesV2DiskLowInodesDetection | undefined) {
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
  private _customThresholds = new DiskSpecificAnomaliesV2DiskLowInodesDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: DiskSpecificAnomaliesV2DiskLowInodesDetectionCustomThresholds) {
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
export interface DiskSpecificAnomaliesV2DiskLowSpaceDetectionCustomThresholds {
  /**
  * Alert if free disk space is lower than this percentage in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#free_space_percentage DiskSpecificAnomaliesV2#free_space_percentage}
  */
  readonly freeSpacePercentage: number;
}

export function diskSpecificAnomaliesV2DiskLowSpaceDetectionCustomThresholdsToTerraform(struct?: DiskSpecificAnomaliesV2DiskLowSpaceDetectionCustomThresholdsOutputReference | DiskSpecificAnomaliesV2DiskLowSpaceDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    free_space_percentage: cdktf.numberToTerraform(struct!.freeSpacePercentage),
  }
}


export function diskSpecificAnomaliesV2DiskLowSpaceDetectionCustomThresholdsToHclTerraform(struct?: DiskSpecificAnomaliesV2DiskLowSpaceDetectionCustomThresholdsOutputReference | DiskSpecificAnomaliesV2DiskLowSpaceDetectionCustomThresholds): any {
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

export class DiskSpecificAnomaliesV2DiskLowSpaceDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskSpecificAnomaliesV2DiskLowSpaceDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freeSpacePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeSpacePercentage = this._freeSpacePercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskSpecificAnomaliesV2DiskLowSpaceDetectionCustomThresholds | undefined) {
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
export interface DiskSpecificAnomaliesV2DiskLowSpaceDetection {
  /**
  * Detection mode for low disk space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#detection_mode DiskSpecificAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Detect low disk space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#enabled DiskSpecificAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#custom_thresholds DiskSpecificAnomaliesV2#custom_thresholds}
  */
  readonly customThresholds?: DiskSpecificAnomaliesV2DiskLowSpaceDetectionCustomThresholds;
}

export function diskSpecificAnomaliesV2DiskLowSpaceDetectionToTerraform(struct?: DiskSpecificAnomaliesV2DiskLowSpaceDetectionOutputReference | DiskSpecificAnomaliesV2DiskLowSpaceDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: diskSpecificAnomaliesV2DiskLowSpaceDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function diskSpecificAnomaliesV2DiskLowSpaceDetectionToHclTerraform(struct?: DiskSpecificAnomaliesV2DiskLowSpaceDetectionOutputReference | DiskSpecificAnomaliesV2DiskLowSpaceDetection): any {
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
      value: diskSpecificAnomaliesV2DiskLowSpaceDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "DiskSpecificAnomaliesV2DiskLowSpaceDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskSpecificAnomaliesV2DiskLowSpaceDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskSpecificAnomaliesV2DiskLowSpaceDetection | undefined {
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

  public set internalValue(value: DiskSpecificAnomaliesV2DiskLowSpaceDetection | undefined) {
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
  private _customThresholds = new DiskSpecificAnomaliesV2DiskLowSpaceDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: DiskSpecificAnomaliesV2DiskLowSpaceDetectionCustomThresholds) {
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
export interface DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionCustomThresholds {
  /**
  * Alert if disk read time or write time is higher than this threshold in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#write_and_read_time DiskSpecificAnomaliesV2#write_and_read_time}
  */
  readonly writeAndReadTime: number;
}

export function diskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionCustomThresholdsToTerraform(struct?: DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionCustomThresholdsOutputReference | DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    write_and_read_time: cdktf.numberToTerraform(struct!.writeAndReadTime),
  }
}


export function diskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionCustomThresholdsToHclTerraform(struct?: DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionCustomThresholdsOutputReference | DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    write_and_read_time: {
      value: cdktf.numberToHclTerraform(struct!.writeAndReadTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._writeAndReadTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeAndReadTime = this._writeAndReadTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._writeAndReadTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._writeAndReadTime = value.writeAndReadTime;
    }
  }

  // write_and_read_time - computed: false, optional: false, required: true
  private _writeAndReadTime?: number; 
  public get writeAndReadTime() {
    return this.getNumberAttribute('write_and_read_time');
  }
  public set writeAndReadTime(value: number) {
    this._writeAndReadTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAndReadTimeInput() {
    return this._writeAndReadTime;
  }
}
export interface DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetection {
  /**
  * Detection mode for slow running disks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#detection_mode DiskSpecificAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Detect slow-running disks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#enabled DiskSpecificAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#custom_thresholds DiskSpecificAnomaliesV2#custom_thresholds}
  */
  readonly customThresholds?: DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionCustomThresholds;
}

export function diskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionToTerraform(struct?: DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionOutputReference | DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: diskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function diskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionToHclTerraform(struct?: DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionOutputReference | DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetection): any {
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
      value: diskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetection | undefined {
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

  public set internalValue(value: DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetection | undefined) {
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
  private _customThresholds = new DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionCustomThresholds) {
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
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2 dynatrace_disk_specific_anomalies_v2}
*/
export class DiskSpecificAnomaliesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_disk_specific_anomalies_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiskSpecificAnomaliesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiskSpecificAnomaliesV2 to import
  * @param importFromId The id of the existing DiskSpecificAnomaliesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiskSpecificAnomaliesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_disk_specific_anomalies_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_specific_anomalies_v2 dynatrace_disk_specific_anomalies_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiskSpecificAnomaliesV2Config
  */
  public constructor(scope: Construct, id: string, config: DiskSpecificAnomaliesV2Config) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_disk_specific_anomalies_v2',
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
    this._diskId = config.diskId;
    this._id = config.id;
    this._overrideDiskLowSpaceDetection = config.overrideDiskLowSpaceDetection;
    this._overrideLowInodesDetection = config.overrideLowInodesDetection;
    this._overrideSlowWritesAndReadsDetection = config.overrideSlowWritesAndReadsDetection;
    this._diskLowInodesDetection.internalValue = config.diskLowInodesDetection;
    this._diskLowSpaceDetection.internalValue = config.diskLowSpaceDetection;
    this._diskSlowWritesAndReadsDetection.internalValue = config.diskSlowWritesAndReadsDetection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk_id - computed: false, optional: false, required: true
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
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

  // override_disk_low_space_detection - computed: false, optional: false, required: true
  private _overrideDiskLowSpaceDetection?: boolean | cdktf.IResolvable; 
  public get overrideDiskLowSpaceDetection() {
    return this.getBooleanAttribute('override_disk_low_space_detection');
  }
  public set overrideDiskLowSpaceDetection(value: boolean | cdktf.IResolvable) {
    this._overrideDiskLowSpaceDetection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideDiskLowSpaceDetectionInput() {
    return this._overrideDiskLowSpaceDetection;
  }

  // override_low_inodes_detection - computed: false, optional: false, required: true
  private _overrideLowInodesDetection?: boolean | cdktf.IResolvable; 
  public get overrideLowInodesDetection() {
    return this.getBooleanAttribute('override_low_inodes_detection');
  }
  public set overrideLowInodesDetection(value: boolean | cdktf.IResolvable) {
    this._overrideLowInodesDetection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideLowInodesDetectionInput() {
    return this._overrideLowInodesDetection;
  }

  // override_slow_writes_and_reads_detection - computed: false, optional: false, required: true
  private _overrideSlowWritesAndReadsDetection?: boolean | cdktf.IResolvable; 
  public get overrideSlowWritesAndReadsDetection() {
    return this.getBooleanAttribute('override_slow_writes_and_reads_detection');
  }
  public set overrideSlowWritesAndReadsDetection(value: boolean | cdktf.IResolvable) {
    this._overrideSlowWritesAndReadsDetection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSlowWritesAndReadsDetectionInput() {
    return this._overrideSlowWritesAndReadsDetection;
  }

  // disk_low_inodes_detection - computed: false, optional: true, required: false
  private _diskLowInodesDetection = new DiskSpecificAnomaliesV2DiskLowInodesDetectionOutputReference(this, "disk_low_inodes_detection");
  public get diskLowInodesDetection() {
    return this._diskLowInodesDetection;
  }
  public putDiskLowInodesDetection(value: DiskSpecificAnomaliesV2DiskLowInodesDetection) {
    this._diskLowInodesDetection.internalValue = value;
  }
  public resetDiskLowInodesDetection() {
    this._diskLowInodesDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskLowInodesDetectionInput() {
    return this._diskLowInodesDetection.internalValue;
  }

  // disk_low_space_detection - computed: false, optional: true, required: false
  private _diskLowSpaceDetection = new DiskSpecificAnomaliesV2DiskLowSpaceDetectionOutputReference(this, "disk_low_space_detection");
  public get diskLowSpaceDetection() {
    return this._diskLowSpaceDetection;
  }
  public putDiskLowSpaceDetection(value: DiskSpecificAnomaliesV2DiskLowSpaceDetection) {
    this._diskLowSpaceDetection.internalValue = value;
  }
  public resetDiskLowSpaceDetection() {
    this._diskLowSpaceDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskLowSpaceDetectionInput() {
    return this._diskLowSpaceDetection.internalValue;
  }

  // disk_slow_writes_and_reads_detection - computed: false, optional: true, required: false
  private _diskSlowWritesAndReadsDetection = new DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionOutputReference(this, "disk_slow_writes_and_reads_detection");
  public get diskSlowWritesAndReadsDetection() {
    return this._diskSlowWritesAndReadsDetection;
  }
  public putDiskSlowWritesAndReadsDetection(value: DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetection) {
    this._diskSlowWritesAndReadsDetection.internalValue = value;
  }
  public resetDiskSlowWritesAndReadsDetection() {
    this._diskSlowWritesAndReadsDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSlowWritesAndReadsDetectionInput() {
    return this._diskSlowWritesAndReadsDetection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_id: cdktf.stringToTerraform(this._diskId),
      id: cdktf.stringToTerraform(this._id),
      override_disk_low_space_detection: cdktf.booleanToTerraform(this._overrideDiskLowSpaceDetection),
      override_low_inodes_detection: cdktf.booleanToTerraform(this._overrideLowInodesDetection),
      override_slow_writes_and_reads_detection: cdktf.booleanToTerraform(this._overrideSlowWritesAndReadsDetection),
      disk_low_inodes_detection: diskSpecificAnomaliesV2DiskLowInodesDetectionToTerraform(this._diskLowInodesDetection.internalValue),
      disk_low_space_detection: diskSpecificAnomaliesV2DiskLowSpaceDetectionToTerraform(this._diskLowSpaceDetection.internalValue),
      disk_slow_writes_and_reads_detection: diskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionToTerraform(this._diskSlowWritesAndReadsDetection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disk_id: {
        value: cdktf.stringToHclTerraform(this._diskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_disk_low_space_detection: {
        value: cdktf.booleanToHclTerraform(this._overrideDiskLowSpaceDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      override_low_inodes_detection: {
        value: cdktf.booleanToHclTerraform(this._overrideLowInodesDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      override_slow_writes_and_reads_detection: {
        value: cdktf.booleanToHclTerraform(this._overrideSlowWritesAndReadsDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_low_inodes_detection: {
        value: diskSpecificAnomaliesV2DiskLowInodesDetectionToHclTerraform(this._diskLowInodesDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiskSpecificAnomaliesV2DiskLowInodesDetectionList",
      },
      disk_low_space_detection: {
        value: diskSpecificAnomaliesV2DiskLowSpaceDetectionToHclTerraform(this._diskLowSpaceDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiskSpecificAnomaliesV2DiskLowSpaceDetectionList",
      },
      disk_slow_writes_and_reads_detection: {
        value: diskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionToHclTerraform(this._diskSlowWritesAndReadsDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiskSpecificAnomaliesV2DiskSlowWritesAndReadsDetectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
