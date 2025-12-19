// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiskAnomaliesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#id DiskAnomaliesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope for the disk anomaly detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#scope DiskAnomaliesV2#scope}
  */
  readonly scope: string;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#disk DiskAnomaliesV2#disk}
  */
  readonly disk: DiskAnomaliesV2Disk;
}
export interface DiskAnomaliesV2DiskDiskLowInodesDetectionCustomThresholds {
  /**
  * Alert if the percentage of available inodes is lower than this threshold in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#free_inodes_percentage DiskAnomaliesV2#free_inodes_percentage}
  */
  readonly freeInodesPercentage: number;
}

export function diskAnomaliesV2DiskDiskLowInodesDetectionCustomThresholdsToTerraform(struct?: DiskAnomaliesV2DiskDiskLowInodesDetectionCustomThresholdsOutputReference | DiskAnomaliesV2DiskDiskLowInodesDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    free_inodes_percentage: cdktf.numberToTerraform(struct!.freeInodesPercentage),
  }
}


export function diskAnomaliesV2DiskDiskLowInodesDetectionCustomThresholdsToHclTerraform(struct?: DiskAnomaliesV2DiskDiskLowInodesDetectionCustomThresholdsOutputReference | DiskAnomaliesV2DiskDiskLowInodesDetectionCustomThresholds): any {
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

export class DiskAnomaliesV2DiskDiskLowInodesDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskAnomaliesV2DiskDiskLowInodesDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freeInodesPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeInodesPercentage = this._freeInodesPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskAnomaliesV2DiskDiskLowInodesDetectionCustomThresholds | undefined) {
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
export interface DiskAnomaliesV2DiskDiskLowInodesDetection {
  /**
  * Detection mode for low inodes number available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#detection_mode DiskAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Detect low inodes number available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#enabled DiskAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#custom_thresholds DiskAnomaliesV2#custom_thresholds}
  */
  readonly customThresholds?: DiskAnomaliesV2DiskDiskLowInodesDetectionCustomThresholds;
}

export function diskAnomaliesV2DiskDiskLowInodesDetectionToTerraform(struct?: DiskAnomaliesV2DiskDiskLowInodesDetectionOutputReference | DiskAnomaliesV2DiskDiskLowInodesDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: diskAnomaliesV2DiskDiskLowInodesDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function diskAnomaliesV2DiskDiskLowInodesDetectionToHclTerraform(struct?: DiskAnomaliesV2DiskDiskLowInodesDetectionOutputReference | DiskAnomaliesV2DiskDiskLowInodesDetection): any {
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
      value: diskAnomaliesV2DiskDiskLowInodesDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "DiskAnomaliesV2DiskDiskLowInodesDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskAnomaliesV2DiskDiskLowInodesDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskAnomaliesV2DiskDiskLowInodesDetection | undefined {
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

  public set internalValue(value: DiskAnomaliesV2DiskDiskLowInodesDetection | undefined) {
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
  private _customThresholds = new DiskAnomaliesV2DiskDiskLowInodesDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: DiskAnomaliesV2DiskDiskLowInodesDetectionCustomThresholds) {
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
export interface DiskAnomaliesV2DiskDiskLowSpaceDetectionCustomThresholds {
  /**
  * Alert if free disk space is lower than this percentage in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#free_space_percentage DiskAnomaliesV2#free_space_percentage}
  */
  readonly freeSpacePercentage: number;
}

export function diskAnomaliesV2DiskDiskLowSpaceDetectionCustomThresholdsToTerraform(struct?: DiskAnomaliesV2DiskDiskLowSpaceDetectionCustomThresholdsOutputReference | DiskAnomaliesV2DiskDiskLowSpaceDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    free_space_percentage: cdktf.numberToTerraform(struct!.freeSpacePercentage),
  }
}


export function diskAnomaliesV2DiskDiskLowSpaceDetectionCustomThresholdsToHclTerraform(struct?: DiskAnomaliesV2DiskDiskLowSpaceDetectionCustomThresholdsOutputReference | DiskAnomaliesV2DiskDiskLowSpaceDetectionCustomThresholds): any {
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

export class DiskAnomaliesV2DiskDiskLowSpaceDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskAnomaliesV2DiskDiskLowSpaceDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freeSpacePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeSpacePercentage = this._freeSpacePercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskAnomaliesV2DiskDiskLowSpaceDetectionCustomThresholds | undefined) {
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
export interface DiskAnomaliesV2DiskDiskLowSpaceDetection {
  /**
  * Detection mode for low disk space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#detection_mode DiskAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Detect low disk space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#enabled DiskAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#custom_thresholds DiskAnomaliesV2#custom_thresholds}
  */
  readonly customThresholds?: DiskAnomaliesV2DiskDiskLowSpaceDetectionCustomThresholds;
}

export function diskAnomaliesV2DiskDiskLowSpaceDetectionToTerraform(struct?: DiskAnomaliesV2DiskDiskLowSpaceDetectionOutputReference | DiskAnomaliesV2DiskDiskLowSpaceDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: diskAnomaliesV2DiskDiskLowSpaceDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function diskAnomaliesV2DiskDiskLowSpaceDetectionToHclTerraform(struct?: DiskAnomaliesV2DiskDiskLowSpaceDetectionOutputReference | DiskAnomaliesV2DiskDiskLowSpaceDetection): any {
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
      value: diskAnomaliesV2DiskDiskLowSpaceDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "DiskAnomaliesV2DiskDiskLowSpaceDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskAnomaliesV2DiskDiskLowSpaceDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskAnomaliesV2DiskDiskLowSpaceDetection | undefined {
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

  public set internalValue(value: DiskAnomaliesV2DiskDiskLowSpaceDetection | undefined) {
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
  private _customThresholds = new DiskAnomaliesV2DiskDiskLowSpaceDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: DiskAnomaliesV2DiskDiskLowSpaceDetectionCustomThresholds) {
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
export interface DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionCustomThresholds {
  /**
  * Alert if disk read time or write time is higher than this threshold in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#write_and_read_time DiskAnomaliesV2#write_and_read_time}
  */
  readonly writeAndReadTime: number;
}

export function diskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionCustomThresholdsToTerraform(struct?: DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionCustomThresholdsOutputReference | DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    write_and_read_time: cdktf.numberToTerraform(struct!.writeAndReadTime),
  }
}


export function diskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionCustomThresholdsToHclTerraform(struct?: DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionCustomThresholdsOutputReference | DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionCustomThresholds): any {
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

export class DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._writeAndReadTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeAndReadTime = this._writeAndReadTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionCustomThresholds | undefined) {
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
export interface DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetection {
  /**
  * Detection mode for slow running disks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#detection_mode DiskAnomaliesV2#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Detect slow-running disks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#enabled DiskAnomaliesV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#custom_thresholds DiskAnomaliesV2#custom_thresholds}
  */
  readonly customThresholds?: DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionCustomThresholds;
}

export function diskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionToTerraform(struct?: DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionOutputReference | DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: diskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function diskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionToHclTerraform(struct?: DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionOutputReference | DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetection): any {
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
      value: diskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetection | undefined {
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

  public set internalValue(value: DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetection | undefined) {
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
  private _customThresholds = new DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionCustomThresholds) {
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
export interface DiskAnomaliesV2Disk {
  /**
  * disk_low_inodes_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#disk_low_inodes_detection DiskAnomaliesV2#disk_low_inodes_detection}
  */
  readonly diskLowInodesDetection: DiskAnomaliesV2DiskDiskLowInodesDetection;
  /**
  * disk_low_space_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#disk_low_space_detection DiskAnomaliesV2#disk_low_space_detection}
  */
  readonly diskLowSpaceDetection: DiskAnomaliesV2DiskDiskLowSpaceDetection;
  /**
  * disk_slow_writes_and_reads_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#disk_slow_writes_and_reads_detection DiskAnomaliesV2#disk_slow_writes_and_reads_detection}
  */
  readonly diskSlowWritesAndReadsDetection: DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetection;
}

export function diskAnomaliesV2DiskToTerraform(struct?: DiskAnomaliesV2DiskOutputReference | DiskAnomaliesV2Disk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_low_inodes_detection: diskAnomaliesV2DiskDiskLowInodesDetectionToTerraform(struct!.diskLowInodesDetection),
    disk_low_space_detection: diskAnomaliesV2DiskDiskLowSpaceDetectionToTerraform(struct!.diskLowSpaceDetection),
    disk_slow_writes_and_reads_detection: diskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionToTerraform(struct!.diskSlowWritesAndReadsDetection),
  }
}


export function diskAnomaliesV2DiskToHclTerraform(struct?: DiskAnomaliesV2DiskOutputReference | DiskAnomaliesV2Disk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_low_inodes_detection: {
      value: diskAnomaliesV2DiskDiskLowInodesDetectionToHclTerraform(struct!.diskLowInodesDetection),
      isBlock: true,
      type: "list",
      storageClassType: "DiskAnomaliesV2DiskDiskLowInodesDetectionList",
    },
    disk_low_space_detection: {
      value: diskAnomaliesV2DiskDiskLowSpaceDetectionToHclTerraform(struct!.diskLowSpaceDetection),
      isBlock: true,
      type: "list",
      storageClassType: "DiskAnomaliesV2DiskDiskLowSpaceDetectionList",
    },
    disk_slow_writes_and_reads_detection: {
      value: diskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionToHclTerraform(struct!.diskSlowWritesAndReadsDetection),
      isBlock: true,
      type: "list",
      storageClassType: "DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskAnomaliesV2DiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskAnomaliesV2Disk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskLowInodesDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskLowInodesDetection = this._diskLowInodesDetection?.internalValue;
    }
    if (this._diskLowSpaceDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskLowSpaceDetection = this._diskLowSpaceDetection?.internalValue;
    }
    if (this._diskSlowWritesAndReadsDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSlowWritesAndReadsDetection = this._diskSlowWritesAndReadsDetection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskAnomaliesV2Disk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskLowInodesDetection.internalValue = undefined;
      this._diskLowSpaceDetection.internalValue = undefined;
      this._diskSlowWritesAndReadsDetection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskLowInodesDetection.internalValue = value.diskLowInodesDetection;
      this._diskLowSpaceDetection.internalValue = value.diskLowSpaceDetection;
      this._diskSlowWritesAndReadsDetection.internalValue = value.diskSlowWritesAndReadsDetection;
    }
  }

  // disk_low_inodes_detection - computed: false, optional: false, required: true
  private _diskLowInodesDetection = new DiskAnomaliesV2DiskDiskLowInodesDetectionOutputReference(this, "disk_low_inodes_detection");
  public get diskLowInodesDetection() {
    return this._diskLowInodesDetection;
  }
  public putDiskLowInodesDetection(value: DiskAnomaliesV2DiskDiskLowInodesDetection) {
    this._diskLowInodesDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskLowInodesDetectionInput() {
    return this._diskLowInodesDetection.internalValue;
  }

  // disk_low_space_detection - computed: false, optional: false, required: true
  private _diskLowSpaceDetection = new DiskAnomaliesV2DiskDiskLowSpaceDetectionOutputReference(this, "disk_low_space_detection");
  public get diskLowSpaceDetection() {
    return this._diskLowSpaceDetection;
  }
  public putDiskLowSpaceDetection(value: DiskAnomaliesV2DiskDiskLowSpaceDetection) {
    this._diskLowSpaceDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskLowSpaceDetectionInput() {
    return this._diskLowSpaceDetection.internalValue;
  }

  // disk_slow_writes_and_reads_detection - computed: false, optional: false, required: true
  private _diskSlowWritesAndReadsDetection = new DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetectionOutputReference(this, "disk_slow_writes_and_reads_detection");
  public get diskSlowWritesAndReadsDetection() {
    return this._diskSlowWritesAndReadsDetection;
  }
  public putDiskSlowWritesAndReadsDetection(value: DiskAnomaliesV2DiskDiskSlowWritesAndReadsDetection) {
    this._diskSlowWritesAndReadsDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSlowWritesAndReadsDetectionInput() {
    return this._diskSlowWritesAndReadsDetection.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2 dynatrace_disk_anomalies_v2}
*/
export class DiskAnomaliesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_disk_anomalies_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiskAnomaliesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiskAnomaliesV2 to import
  * @param importFromId The id of the existing DiskAnomaliesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiskAnomaliesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_disk_anomalies_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/disk_anomalies_v2 dynatrace_disk_anomalies_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiskAnomaliesV2Config
  */
  public constructor(scope: Construct, id: string, config: DiskAnomaliesV2Config) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_disk_anomalies_v2',
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
    this._disk.internalValue = config.disk;
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

  // disk - computed: false, optional: false, required: true
  private _disk = new DiskAnomaliesV2DiskOutputReference(this, "disk");
  public get disk() {
    return this._disk;
  }
  public putDisk(value: DiskAnomaliesV2Disk) {
    this._disk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      scope: cdktf.stringToTerraform(this._scope),
      disk: diskAnomaliesV2DiskToTerraform(this._disk.internalValue),
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
      disk: {
        value: diskAnomaliesV2DiskToHclTerraform(this._disk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiskAnomaliesV2DiskList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
