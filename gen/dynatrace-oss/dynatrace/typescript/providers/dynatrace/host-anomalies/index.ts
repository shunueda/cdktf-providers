// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostAnomaliesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#id HostAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#connections HostAnomalies#connections}
  */
  readonly connections?: HostAnomaliesConnections;
  /**
  * cpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#cpu HostAnomalies#cpu}
  */
  readonly cpu?: HostAnomaliesCpu;
  /**
  * disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#disks HostAnomalies#disks}
  */
  readonly disks?: HostAnomaliesDisks;
  /**
  * gc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#gc HostAnomalies#gc}
  */
  readonly gc?: HostAnomaliesGc;
  /**
  * java block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#java HostAnomalies#java}
  */
  readonly java?: HostAnomaliesJava;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#memory HostAnomalies#memory}
  */
  readonly memory?: HostAnomaliesMemory;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#network HostAnomalies#network}
  */
  readonly network?: HostAnomaliesNetwork;
}
export interface HostAnomaliesConnections {
  /**
  * The detection is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#enabled HostAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Alert (`true`) on graceful host shutdowns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#enabled_on_graceful_shutdowns HostAnomalies#enabled_on_graceful_shutdowns}
  */
  readonly enabledOnGracefulShutdowns: boolean | cdktf.IResolvable;
}

export function hostAnomaliesConnectionsToTerraform(struct?: HostAnomaliesConnectionsOutputReference | HostAnomaliesConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    enabled_on_graceful_shutdowns: cdktf.booleanToTerraform(struct!.enabledOnGracefulShutdowns),
  }
}


export function hostAnomaliesConnectionsToHclTerraform(struct?: HostAnomaliesConnectionsOutputReference | HostAnomaliesConnections): any {
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
    enabled_on_graceful_shutdowns: {
      value: cdktf.booleanToHclTerraform(struct!.enabledOnGracefulShutdowns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._enabledOnGracefulShutdowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledOnGracefulShutdowns = this._enabledOnGracefulShutdowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._enabledOnGracefulShutdowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._enabledOnGracefulShutdowns = value.enabledOnGracefulShutdowns;
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

  // enabled_on_graceful_shutdowns - computed: false, optional: false, required: true
  private _enabledOnGracefulShutdowns?: boolean | cdktf.IResolvable; 
  public get enabledOnGracefulShutdowns() {
    return this.getBooleanAttribute('enabled_on_graceful_shutdowns');
  }
  public set enabledOnGracefulShutdowns(value: boolean | cdktf.IResolvable) {
    this._enabledOnGracefulShutdowns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledOnGracefulShutdownsInput() {
    return this._enabledOnGracefulShutdowns;
  }
}
export interface HostAnomaliesCpuThresholds {
  /**
  * Alert if CPU usage is higher than *X*% in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#saturation HostAnomalies#saturation}
  */
  readonly saturation: number;
}

export function hostAnomaliesCpuThresholdsToTerraform(struct?: HostAnomaliesCpuThresholdsOutputReference | HostAnomaliesCpuThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    saturation: cdktf.numberToTerraform(struct!.saturation),
  }
}


export function hostAnomaliesCpuThresholdsToHclTerraform(struct?: HostAnomaliesCpuThresholdsOutputReference | HostAnomaliesCpuThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    saturation: {
      value: cdktf.numberToHclTerraform(struct!.saturation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesCpuThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesCpuThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._saturation !== undefined) {
      hasAnyValues = true;
      internalValueResult.saturation = this._saturation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesCpuThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._saturation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._saturation = value.saturation;
    }
  }

  // saturation - computed: false, optional: false, required: true
  private _saturation?: number; 
  public get saturation() {
    return this.getNumberAttribute('saturation');
  }
  public set saturation(value: number) {
    this._saturation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saturationInput() {
    return this._saturation;
  }
}
export interface HostAnomaliesCpu {
  /**
  * The detection is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#enabled HostAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#thresholds HostAnomalies#thresholds}
  */
  readonly thresholds?: HostAnomaliesCpuThresholds;
}

export function hostAnomaliesCpuToTerraform(struct?: HostAnomaliesCpuOutputReference | HostAnomaliesCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    thresholds: hostAnomaliesCpuThresholdsToTerraform(struct!.thresholds),
  }
}


export function hostAnomaliesCpuToHclTerraform(struct?: HostAnomaliesCpuOutputReference | HostAnomaliesCpu): any {
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
      value: hostAnomaliesCpuThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesCpuThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesCpu | undefined {
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

  public set internalValue(value: HostAnomaliesCpu | undefined) {
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

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new HostAnomaliesCpuThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: HostAnomaliesCpuThresholds) {
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
export interface HostAnomaliesDisksInodesThresholds {
  /**
  * Alert if percentage of available inodes is lower than *X*% in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#percentage HostAnomalies#percentage}
  */
  readonly percentage: number;
}

export function hostAnomaliesDisksInodesThresholdsToTerraform(struct?: HostAnomaliesDisksInodesThresholdsOutputReference | HostAnomaliesDisksInodesThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function hostAnomaliesDisksInodesThresholdsToHclTerraform(struct?: HostAnomaliesDisksInodesThresholdsOutputReference | HostAnomaliesDisksInodesThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesDisksInodesThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesDisksInodesThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesDisksInodesThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentage = value.percentage;
    }
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface HostAnomaliesDisksInodes {
  /**
  * The detection is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#enabled HostAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#thresholds HostAnomalies#thresholds}
  */
  readonly thresholds?: HostAnomaliesDisksInodesThresholds;
}

export function hostAnomaliesDisksInodesToTerraform(struct?: HostAnomaliesDisksInodesOutputReference | HostAnomaliesDisksInodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    thresholds: hostAnomaliesDisksInodesThresholdsToTerraform(struct!.thresholds),
  }
}


export function hostAnomaliesDisksInodesToHclTerraform(struct?: HostAnomaliesDisksInodesOutputReference | HostAnomaliesDisksInodes): any {
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
      value: hostAnomaliesDisksInodesThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesDisksInodesThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesDisksInodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesDisksInodes | undefined {
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

  public set internalValue(value: HostAnomaliesDisksInodes | undefined) {
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

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new HostAnomaliesDisksInodesThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: HostAnomaliesDisksInodesThresholds) {
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
export interface HostAnomaliesDisksSpaceThresholds {
  /**
  * Alert if free disk space is lower than *X*% in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#percentage HostAnomalies#percentage}
  */
  readonly percentage: number;
}

export function hostAnomaliesDisksSpaceThresholdsToTerraform(struct?: HostAnomaliesDisksSpaceThresholdsOutputReference | HostAnomaliesDisksSpaceThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function hostAnomaliesDisksSpaceThresholdsToHclTerraform(struct?: HostAnomaliesDisksSpaceThresholdsOutputReference | HostAnomaliesDisksSpaceThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesDisksSpaceThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesDisksSpaceThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesDisksSpaceThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentage = value.percentage;
    }
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface HostAnomaliesDisksSpace {
  /**
  * The detection is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#enabled HostAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#thresholds HostAnomalies#thresholds}
  */
  readonly thresholds?: HostAnomaliesDisksSpaceThresholds;
}

export function hostAnomaliesDisksSpaceToTerraform(struct?: HostAnomaliesDisksSpaceOutputReference | HostAnomaliesDisksSpace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    thresholds: hostAnomaliesDisksSpaceThresholdsToTerraform(struct!.thresholds),
  }
}


export function hostAnomaliesDisksSpaceToHclTerraform(struct?: HostAnomaliesDisksSpaceOutputReference | HostAnomaliesDisksSpace): any {
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
      value: hostAnomaliesDisksSpaceThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesDisksSpaceThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesDisksSpaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesDisksSpace | undefined {
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

  public set internalValue(value: HostAnomaliesDisksSpace | undefined) {
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

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new HostAnomaliesDisksSpaceThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: HostAnomaliesDisksSpaceThresholds) {
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
export interface HostAnomaliesDisksSpeedThresholds {
  /**
  * Alert if disk read/write time is higher than *X* milliseconds in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#write_and_read_time HostAnomalies#write_and_read_time}
  */
  readonly writeAndReadTime: number;
}

export function hostAnomaliesDisksSpeedThresholdsToTerraform(struct?: HostAnomaliesDisksSpeedThresholdsOutputReference | HostAnomaliesDisksSpeedThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    write_and_read_time: cdktf.numberToTerraform(struct!.writeAndReadTime),
  }
}


export function hostAnomaliesDisksSpeedThresholdsToHclTerraform(struct?: HostAnomaliesDisksSpeedThresholdsOutputReference | HostAnomaliesDisksSpeedThresholds): any {
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

export class HostAnomaliesDisksSpeedThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesDisksSpeedThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._writeAndReadTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeAndReadTime = this._writeAndReadTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesDisksSpeedThresholds | undefined) {
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
export interface HostAnomaliesDisksSpeed {
  /**
  * The detection is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#enabled HostAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#thresholds HostAnomalies#thresholds}
  */
  readonly thresholds?: HostAnomaliesDisksSpeedThresholds;
}

export function hostAnomaliesDisksSpeedToTerraform(struct?: HostAnomaliesDisksSpeedOutputReference | HostAnomaliesDisksSpeed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    thresholds: hostAnomaliesDisksSpeedThresholdsToTerraform(struct!.thresholds),
  }
}


export function hostAnomaliesDisksSpeedToHclTerraform(struct?: HostAnomaliesDisksSpeedOutputReference | HostAnomaliesDisksSpeed): any {
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
      value: hostAnomaliesDisksSpeedThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesDisksSpeedThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesDisksSpeedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesDisksSpeed | undefined {
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

  public set internalValue(value: HostAnomaliesDisksSpeed | undefined) {
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

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new HostAnomaliesDisksSpeedThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: HostAnomaliesDisksSpeedThresholds) {
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
export interface HostAnomaliesDisks {
  /**
  * inodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#inodes HostAnomalies#inodes}
  */
  readonly inodes?: HostAnomaliesDisksInodes;
  /**
  * space block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#space HostAnomalies#space}
  */
  readonly space?: HostAnomaliesDisksSpace;
  /**
  * speed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#speed HostAnomalies#speed}
  */
  readonly speed?: HostAnomaliesDisksSpeed;
}

export function hostAnomaliesDisksToTerraform(struct?: HostAnomaliesDisksOutputReference | HostAnomaliesDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inodes: hostAnomaliesDisksInodesToTerraform(struct!.inodes),
    space: hostAnomaliesDisksSpaceToTerraform(struct!.space),
    speed: hostAnomaliesDisksSpeedToTerraform(struct!.speed),
  }
}


export function hostAnomaliesDisksToHclTerraform(struct?: HostAnomaliesDisksOutputReference | HostAnomaliesDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inodes: {
      value: hostAnomaliesDisksInodesToHclTerraform(struct!.inodes),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesDisksInodesList",
    },
    space: {
      value: hostAnomaliesDisksSpaceToHclTerraform(struct!.space),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesDisksSpaceList",
    },
    speed: {
      value: hostAnomaliesDisksSpeedToHclTerraform(struct!.speed),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesDisksSpeedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesDisksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inodes = this._inodes?.internalValue;
    }
    if (this._space?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.space = this._space?.internalValue;
    }
    if (this._speed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inodes.internalValue = undefined;
      this._space.internalValue = undefined;
      this._speed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inodes.internalValue = value.inodes;
      this._space.internalValue = value.space;
      this._speed.internalValue = value.speed;
    }
  }

  // inodes - computed: false, optional: true, required: false
  private _inodes = new HostAnomaliesDisksInodesOutputReference(this, "inodes");
  public get inodes() {
    return this._inodes;
  }
  public putInodes(value: HostAnomaliesDisksInodes) {
    this._inodes.internalValue = value;
  }
  public resetInodes() {
    this._inodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inodesInput() {
    return this._inodes.internalValue;
  }

  // space - computed: false, optional: true, required: false
  private _space = new HostAnomaliesDisksSpaceOutputReference(this, "space");
  public get space() {
    return this._space;
  }
  public putSpace(value: HostAnomaliesDisksSpace) {
    this._space.internalValue = value;
  }
  public resetSpace() {
    this._space.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space.internalValue;
  }

  // speed - computed: false, optional: true, required: false
  private _speed = new HostAnomaliesDisksSpeedOutputReference(this, "speed");
  public get speed() {
    return this._speed;
  }
  public putSpeed(value: HostAnomaliesDisksSpeed) {
    this._speed.internalValue = value;
  }
  public resetSpeed() {
    this._speed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed.internalValue;
  }
}
export interface HostAnomaliesGcThresholds {
  /**
  * GC suspension is higher than *X*% in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#suspension_percentage HostAnomalies#suspension_percentage}
  */
  readonly suspensionPercentage: number;
  /**
  * GC time is higher than *X*% in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#time_percentage HostAnomalies#time_percentage}
  */
  readonly timePercentage: number;
}

export function hostAnomaliesGcThresholdsToTerraform(struct?: HostAnomaliesGcThresholdsOutputReference | HostAnomaliesGcThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suspension_percentage: cdktf.numberToTerraform(struct!.suspensionPercentage),
    time_percentage: cdktf.numberToTerraform(struct!.timePercentage),
  }
}


export function hostAnomaliesGcThresholdsToHclTerraform(struct?: HostAnomaliesGcThresholdsOutputReference | HostAnomaliesGcThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    suspension_percentage: {
      value: cdktf.numberToHclTerraform(struct!.suspensionPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_percentage: {
      value: cdktf.numberToHclTerraform(struct!.timePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesGcThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesGcThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suspensionPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspensionPercentage = this._suspensionPercentage;
    }
    if (this._timePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePercentage = this._timePercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesGcThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._suspensionPercentage = undefined;
      this._timePercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._suspensionPercentage = value.suspensionPercentage;
      this._timePercentage = value.timePercentage;
    }
  }

  // suspension_percentage - computed: false, optional: false, required: true
  private _suspensionPercentage?: number; 
  public get suspensionPercentage() {
    return this.getNumberAttribute('suspension_percentage');
  }
  public set suspensionPercentage(value: number) {
    this._suspensionPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suspensionPercentageInput() {
    return this._suspensionPercentage;
  }

  // time_percentage - computed: false, optional: false, required: true
  private _timePercentage?: number; 
  public get timePercentage() {
    return this.getNumberAttribute('time_percentage');
  }
  public set timePercentage(value: number) {
    this._timePercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timePercentageInput() {
    return this._timePercentage;
  }
}
export interface HostAnomaliesGc {
  /**
  * The detection is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#enabled HostAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#thresholds HostAnomalies#thresholds}
  */
  readonly thresholds?: HostAnomaliesGcThresholds;
}

export function hostAnomaliesGcToTerraform(struct?: HostAnomaliesGcOutputReference | HostAnomaliesGc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    thresholds: hostAnomaliesGcThresholdsToTerraform(struct!.thresholds),
  }
}


export function hostAnomaliesGcToHclTerraform(struct?: HostAnomaliesGcOutputReference | HostAnomaliesGc): any {
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
      value: hostAnomaliesGcThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesGcThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesGcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesGc | undefined {
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

  public set internalValue(value: HostAnomaliesGc | undefined) {
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

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new HostAnomaliesGcThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: HostAnomaliesGcThresholds) {
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
export interface HostAnomaliesJavaOutOfMemoryThresholds {
  /**
  * Alert if the number of Java out of memory exceptions is *X* per minute or higher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#exception_count HostAnomalies#exception_count}
  */
  readonly exceptionCount: number;
}

export function hostAnomaliesJavaOutOfMemoryThresholdsToTerraform(struct?: HostAnomaliesJavaOutOfMemoryThresholdsOutputReference | HostAnomaliesJavaOutOfMemoryThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exception_count: cdktf.numberToTerraform(struct!.exceptionCount),
  }
}


export function hostAnomaliesJavaOutOfMemoryThresholdsToHclTerraform(struct?: HostAnomaliesJavaOutOfMemoryThresholdsOutputReference | HostAnomaliesJavaOutOfMemoryThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exception_count: {
      value: cdktf.numberToHclTerraform(struct!.exceptionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesJavaOutOfMemoryThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesJavaOutOfMemoryThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceptionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionCount = this._exceptionCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesJavaOutOfMemoryThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exceptionCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exceptionCount = value.exceptionCount;
    }
  }

  // exception_count - computed: false, optional: false, required: true
  private _exceptionCount?: number; 
  public get exceptionCount() {
    return this.getNumberAttribute('exception_count');
  }
  public set exceptionCount(value: number) {
    this._exceptionCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionCountInput() {
    return this._exceptionCount;
  }
}
export interface HostAnomaliesJavaOutOfMemory {
  /**
  * The detection is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#enabled HostAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#thresholds HostAnomalies#thresholds}
  */
  readonly thresholds?: HostAnomaliesJavaOutOfMemoryThresholds;
}

export function hostAnomaliesJavaOutOfMemoryToTerraform(struct?: HostAnomaliesJavaOutOfMemoryOutputReference | HostAnomaliesJavaOutOfMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    thresholds: hostAnomaliesJavaOutOfMemoryThresholdsToTerraform(struct!.thresholds),
  }
}


export function hostAnomaliesJavaOutOfMemoryToHclTerraform(struct?: HostAnomaliesJavaOutOfMemoryOutputReference | HostAnomaliesJavaOutOfMemory): any {
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
      value: hostAnomaliesJavaOutOfMemoryThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesJavaOutOfMemoryThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesJavaOutOfMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesJavaOutOfMemory | undefined {
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

  public set internalValue(value: HostAnomaliesJavaOutOfMemory | undefined) {
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

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new HostAnomaliesJavaOutOfMemoryThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: HostAnomaliesJavaOutOfMemoryThresholds) {
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
export interface HostAnomaliesJavaOutOfThreadsThresholds {
  /**
  * Alert if the number of Java out of threads exceptions is *X* per minute or higher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#exception_count HostAnomalies#exception_count}
  */
  readonly exceptionCount: number;
}

export function hostAnomaliesJavaOutOfThreadsThresholdsToTerraform(struct?: HostAnomaliesJavaOutOfThreadsThresholdsOutputReference | HostAnomaliesJavaOutOfThreadsThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exception_count: cdktf.numberToTerraform(struct!.exceptionCount),
  }
}


export function hostAnomaliesJavaOutOfThreadsThresholdsToHclTerraform(struct?: HostAnomaliesJavaOutOfThreadsThresholdsOutputReference | HostAnomaliesJavaOutOfThreadsThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exception_count: {
      value: cdktf.numberToHclTerraform(struct!.exceptionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesJavaOutOfThreadsThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesJavaOutOfThreadsThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceptionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionCount = this._exceptionCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesJavaOutOfThreadsThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exceptionCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exceptionCount = value.exceptionCount;
    }
  }

  // exception_count - computed: false, optional: false, required: true
  private _exceptionCount?: number; 
  public get exceptionCount() {
    return this.getNumberAttribute('exception_count');
  }
  public set exceptionCount(value: number) {
    this._exceptionCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionCountInput() {
    return this._exceptionCount;
  }
}
export interface HostAnomaliesJavaOutOfThreads {
  /**
  * The detection is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#enabled HostAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#thresholds HostAnomalies#thresholds}
  */
  readonly thresholds?: HostAnomaliesJavaOutOfThreadsThresholds;
}

export function hostAnomaliesJavaOutOfThreadsToTerraform(struct?: HostAnomaliesJavaOutOfThreadsOutputReference | HostAnomaliesJavaOutOfThreads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    thresholds: hostAnomaliesJavaOutOfThreadsThresholdsToTerraform(struct!.thresholds),
  }
}


export function hostAnomaliesJavaOutOfThreadsToHclTerraform(struct?: HostAnomaliesJavaOutOfThreadsOutputReference | HostAnomaliesJavaOutOfThreads): any {
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
      value: hostAnomaliesJavaOutOfThreadsThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesJavaOutOfThreadsThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesJavaOutOfThreadsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesJavaOutOfThreads | undefined {
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

  public set internalValue(value: HostAnomaliesJavaOutOfThreads | undefined) {
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

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new HostAnomaliesJavaOutOfThreadsThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: HostAnomaliesJavaOutOfThreadsThresholds) {
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
export interface HostAnomaliesJava {
  /**
  * out_of_memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#out_of_memory HostAnomalies#out_of_memory}
  */
  readonly outOfMemory?: HostAnomaliesJavaOutOfMemory;
  /**
  * out_of_threads block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#out_of_threads HostAnomalies#out_of_threads}
  */
  readonly outOfThreads?: HostAnomaliesJavaOutOfThreads;
}

export function hostAnomaliesJavaToTerraform(struct?: HostAnomaliesJavaOutputReference | HostAnomaliesJava): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    out_of_memory: hostAnomaliesJavaOutOfMemoryToTerraform(struct!.outOfMemory),
    out_of_threads: hostAnomaliesJavaOutOfThreadsToTerraform(struct!.outOfThreads),
  }
}


export function hostAnomaliesJavaToHclTerraform(struct?: HostAnomaliesJavaOutputReference | HostAnomaliesJava): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    out_of_memory: {
      value: hostAnomaliesJavaOutOfMemoryToHclTerraform(struct!.outOfMemory),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesJavaOutOfMemoryList",
    },
    out_of_threads: {
      value: hostAnomaliesJavaOutOfThreadsToHclTerraform(struct!.outOfThreads),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesJavaOutOfThreadsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesJavaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesJava | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outOfMemory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfMemory = this._outOfMemory?.internalValue;
    }
    if (this._outOfThreads?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfThreads = this._outOfThreads?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesJava | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outOfMemory.internalValue = undefined;
      this._outOfThreads.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outOfMemory.internalValue = value.outOfMemory;
      this._outOfThreads.internalValue = value.outOfThreads;
    }
  }

  // out_of_memory - computed: false, optional: true, required: false
  private _outOfMemory = new HostAnomaliesJavaOutOfMemoryOutputReference(this, "out_of_memory");
  public get outOfMemory() {
    return this._outOfMemory;
  }
  public putOutOfMemory(value: HostAnomaliesJavaOutOfMemory) {
    this._outOfMemory.internalValue = value;
  }
  public resetOutOfMemory() {
    this._outOfMemory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfMemoryInput() {
    return this._outOfMemory.internalValue;
  }

  // out_of_threads - computed: false, optional: true, required: false
  private _outOfThreads = new HostAnomaliesJavaOutOfThreadsOutputReference(this, "out_of_threads");
  public get outOfThreads() {
    return this._outOfThreads;
  }
  public putOutOfThreads(value: HostAnomaliesJavaOutOfThreads) {
    this._outOfThreads.internalValue = value;
  }
  public resetOutOfThreads() {
    this._outOfThreads.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfThreadsInput() {
    return this._outOfThreads.internalValue;
  }
}
export interface HostAnomaliesMemoryThresholdsLinux {
  /**
  * Memory page fault rate is higher than *X* faults per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#page_faults HostAnomalies#page_faults}
  */
  readonly pageFaults: number;
  /**
  * Memory usage is higher than *X*%
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#usage HostAnomalies#usage}
  */
  readonly usage: number;
}

export function hostAnomaliesMemoryThresholdsLinuxToTerraform(struct?: HostAnomaliesMemoryThresholdsLinuxOutputReference | HostAnomaliesMemoryThresholdsLinux): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    page_faults: cdktf.numberToTerraform(struct!.pageFaults),
    usage: cdktf.numberToTerraform(struct!.usage),
  }
}


export function hostAnomaliesMemoryThresholdsLinuxToHclTerraform(struct?: HostAnomaliesMemoryThresholdsLinuxOutputReference | HostAnomaliesMemoryThresholdsLinux): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    page_faults: {
      value: cdktf.numberToHclTerraform(struct!.pageFaults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    usage: {
      value: cdktf.numberToHclTerraform(struct!.usage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesMemoryThresholdsLinuxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesMemoryThresholdsLinux | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pageFaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageFaults = this._pageFaults;
    }
    if (this._usage !== undefined) {
      hasAnyValues = true;
      internalValueResult.usage = this._usage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesMemoryThresholdsLinux | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pageFaults = undefined;
      this._usage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pageFaults = value.pageFaults;
      this._usage = value.usage;
    }
  }

  // page_faults - computed: false, optional: false, required: true
  private _pageFaults?: number; 
  public get pageFaults() {
    return this.getNumberAttribute('page_faults');
  }
  public set pageFaults(value: number) {
    this._pageFaults = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageFaultsInput() {
    return this._pageFaults;
  }

  // usage - computed: false, optional: false, required: true
  private _usage?: number; 
  public get usage() {
    return this.getNumberAttribute('usage');
  }
  public set usage(value: number) {
    this._usage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }
}
export interface HostAnomaliesMemoryThresholdsWindows {
  /**
  * Memory page fault rate is higher than *X* faults per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#page_faults HostAnomalies#page_faults}
  */
  readonly pageFaults: number;
  /**
  * Memory usage is higher than *X*%
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#usage HostAnomalies#usage}
  */
  readonly usage: number;
}

export function hostAnomaliesMemoryThresholdsWindowsToTerraform(struct?: HostAnomaliesMemoryThresholdsWindowsOutputReference | HostAnomaliesMemoryThresholdsWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    page_faults: cdktf.numberToTerraform(struct!.pageFaults),
    usage: cdktf.numberToTerraform(struct!.usage),
  }
}


export function hostAnomaliesMemoryThresholdsWindowsToHclTerraform(struct?: HostAnomaliesMemoryThresholdsWindowsOutputReference | HostAnomaliesMemoryThresholdsWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    page_faults: {
      value: cdktf.numberToHclTerraform(struct!.pageFaults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    usage: {
      value: cdktf.numberToHclTerraform(struct!.usage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesMemoryThresholdsWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesMemoryThresholdsWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pageFaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageFaults = this._pageFaults;
    }
    if (this._usage !== undefined) {
      hasAnyValues = true;
      internalValueResult.usage = this._usage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesMemoryThresholdsWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pageFaults = undefined;
      this._usage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pageFaults = value.pageFaults;
      this._usage = value.usage;
    }
  }

  // page_faults - computed: false, optional: false, required: true
  private _pageFaults?: number; 
  public get pageFaults() {
    return this.getNumberAttribute('page_faults');
  }
  public set pageFaults(value: number) {
    this._pageFaults = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageFaultsInput() {
    return this._pageFaults;
  }

  // usage - computed: false, optional: false, required: true
  private _usage?: number; 
  public get usage() {
    return this.getNumberAttribute('usage');
  }
  public set usage(value: number) {
    this._usage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }
}
export interface HostAnomaliesMemoryThresholds {
  /**
  * linux block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#linux HostAnomalies#linux}
  */
  readonly linux: HostAnomaliesMemoryThresholdsLinux;
  /**
  * windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#windows HostAnomalies#windows}
  */
  readonly windows: HostAnomaliesMemoryThresholdsWindows;
}

export function hostAnomaliesMemoryThresholdsToTerraform(struct?: HostAnomaliesMemoryThresholdsOutputReference | HostAnomaliesMemoryThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linux: hostAnomaliesMemoryThresholdsLinuxToTerraform(struct!.linux),
    windows: hostAnomaliesMemoryThresholdsWindowsToTerraform(struct!.windows),
  }
}


export function hostAnomaliesMemoryThresholdsToHclTerraform(struct?: HostAnomaliesMemoryThresholdsOutputReference | HostAnomaliesMemoryThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    linux: {
      value: hostAnomaliesMemoryThresholdsLinuxToHclTerraform(struct!.linux),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesMemoryThresholdsLinuxList",
    },
    windows: {
      value: hostAnomaliesMemoryThresholdsWindowsToHclTerraform(struct!.windows),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesMemoryThresholdsWindowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesMemoryThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesMemoryThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linux?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linux = this._linux?.internalValue;
    }
    if (this._windows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windows = this._windows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesMemoryThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linux.internalValue = undefined;
      this._windows.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linux.internalValue = value.linux;
      this._windows.internalValue = value.windows;
    }
  }

  // linux - computed: false, optional: false, required: true
  private _linux = new HostAnomaliesMemoryThresholdsLinuxOutputReference(this, "linux");
  public get linux() {
    return this._linux;
  }
  public putLinux(value: HostAnomaliesMemoryThresholdsLinux) {
    this._linux.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxInput() {
    return this._linux.internalValue;
  }

  // windows - computed: false, optional: false, required: true
  private _windows = new HostAnomaliesMemoryThresholdsWindowsOutputReference(this, "windows");
  public get windows() {
    return this._windows;
  }
  public putWindows(value: HostAnomaliesMemoryThresholdsWindows) {
    this._windows.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsInput() {
    return this._windows.internalValue;
  }
}
export interface HostAnomaliesMemory {
  /**
  * The detection is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#enabled HostAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#thresholds HostAnomalies#thresholds}
  */
  readonly thresholds?: HostAnomaliesMemoryThresholds;
}

export function hostAnomaliesMemoryToTerraform(struct?: HostAnomaliesMemoryOutputReference | HostAnomaliesMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    thresholds: hostAnomaliesMemoryThresholdsToTerraform(struct!.thresholds),
  }
}


export function hostAnomaliesMemoryToHclTerraform(struct?: HostAnomaliesMemoryOutputReference | HostAnomaliesMemory): any {
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
      value: hostAnomaliesMemoryThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesMemoryThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesMemory | undefined {
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

  public set internalValue(value: HostAnomaliesMemory | undefined) {
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

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new HostAnomaliesMemoryThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: HostAnomaliesMemoryThresholds) {
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
export interface HostAnomaliesNetworkConnectivityThresholds {
  /**
  * Number of failed connections is higher than *X* connections per minute in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#failed_connections HostAnomalies#failed_connections}
  */
  readonly failedConnections: number;
  /**
  * Percentage of new connection failures is higher than *X*% in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#new_connection_failures HostAnomalies#new_connection_failures}
  */
  readonly newConnectionFailures: number;
}

export function hostAnomaliesNetworkConnectivityThresholdsToTerraform(struct?: HostAnomaliesNetworkConnectivityThresholdsOutputReference | HostAnomaliesNetworkConnectivityThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed_connections: cdktf.numberToTerraform(struct!.failedConnections),
    new_connection_failures: cdktf.numberToTerraform(struct!.newConnectionFailures),
  }
}


export function hostAnomaliesNetworkConnectivityThresholdsToHclTerraform(struct?: HostAnomaliesNetworkConnectivityThresholdsOutputReference | HostAnomaliesNetworkConnectivityThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failed_connections: {
      value: cdktf.numberToHclTerraform(struct!.failedConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_connection_failures: {
      value: cdktf.numberToHclTerraform(struct!.newConnectionFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesNetworkConnectivityThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesNetworkConnectivityThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failedConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedConnections = this._failedConnections;
    }
    if (this._newConnectionFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.newConnectionFailures = this._newConnectionFailures;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesNetworkConnectivityThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failedConnections = undefined;
      this._newConnectionFailures = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failedConnections = value.failedConnections;
      this._newConnectionFailures = value.newConnectionFailures;
    }
  }

  // failed_connections - computed: false, optional: false, required: true
  private _failedConnections?: number; 
  public get failedConnections() {
    return this.getNumberAttribute('failed_connections');
  }
  public set failedConnections(value: number) {
    this._failedConnections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failedConnectionsInput() {
    return this._failedConnections;
  }

  // new_connection_failures - computed: false, optional: false, required: true
  private _newConnectionFailures?: number; 
  public get newConnectionFailures() {
    return this.getNumberAttribute('new_connection_failures');
  }
  public set newConnectionFailures(value: number) {
    this._newConnectionFailures = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newConnectionFailuresInput() {
    return this._newConnectionFailures;
  }
}
export interface HostAnomaliesNetworkConnectivity {
  /**
  * The detection is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#enabled HostAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#thresholds HostAnomalies#thresholds}
  */
  readonly thresholds?: HostAnomaliesNetworkConnectivityThresholds;
}

export function hostAnomaliesNetworkConnectivityToTerraform(struct?: HostAnomaliesNetworkConnectivityOutputReference | HostAnomaliesNetworkConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    thresholds: hostAnomaliesNetworkConnectivityThresholdsToTerraform(struct!.thresholds),
  }
}


export function hostAnomaliesNetworkConnectivityToHclTerraform(struct?: HostAnomaliesNetworkConnectivityOutputReference | HostAnomaliesNetworkConnectivity): any {
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
      value: hostAnomaliesNetworkConnectivityThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesNetworkConnectivityThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesNetworkConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesNetworkConnectivity | undefined {
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

  public set internalValue(value: HostAnomaliesNetworkConnectivity | undefined) {
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

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new HostAnomaliesNetworkConnectivityThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: HostAnomaliesNetworkConnectivityThresholds) {
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
export interface HostAnomaliesNetworkDroppedPacketsThresholds {
  /**
  * Receive/transmit dropped packet percentage is higher than *X*% in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#dropped_packets HostAnomalies#dropped_packets}
  */
  readonly droppedPackets: number;
  /**
  * Total receive/transmit packets rate is higher than *X* packets per second in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#total_packets_rate HostAnomalies#total_packets_rate}
  */
  readonly totalPacketsRate: number;
}

export function hostAnomaliesNetworkDroppedPacketsThresholdsToTerraform(struct?: HostAnomaliesNetworkDroppedPacketsThresholdsOutputReference | HostAnomaliesNetworkDroppedPacketsThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dropped_packets: cdktf.numberToTerraform(struct!.droppedPackets),
    total_packets_rate: cdktf.numberToTerraform(struct!.totalPacketsRate),
  }
}


export function hostAnomaliesNetworkDroppedPacketsThresholdsToHclTerraform(struct?: HostAnomaliesNetworkDroppedPacketsThresholdsOutputReference | HostAnomaliesNetworkDroppedPacketsThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dropped_packets: {
      value: cdktf.numberToHclTerraform(struct!.droppedPackets),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesNetworkDroppedPacketsThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesNetworkDroppedPacketsThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._droppedPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.droppedPackets = this._droppedPackets;
    }
    if (this._totalPacketsRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPacketsRate = this._totalPacketsRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesNetworkDroppedPacketsThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._droppedPackets = undefined;
      this._totalPacketsRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._droppedPackets = value.droppedPackets;
      this._totalPacketsRate = value.totalPacketsRate;
    }
  }

  // dropped_packets - computed: false, optional: false, required: true
  private _droppedPackets?: number; 
  public get droppedPackets() {
    return this.getNumberAttribute('dropped_packets');
  }
  public set droppedPackets(value: number) {
    this._droppedPackets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get droppedPacketsInput() {
    return this._droppedPackets;
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
}
export interface HostAnomaliesNetworkDroppedPackets {
  /**
  * The detection is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#enabled HostAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#thresholds HostAnomalies#thresholds}
  */
  readonly thresholds?: HostAnomaliesNetworkDroppedPacketsThresholds;
}

export function hostAnomaliesNetworkDroppedPacketsToTerraform(struct?: HostAnomaliesNetworkDroppedPacketsOutputReference | HostAnomaliesNetworkDroppedPackets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    thresholds: hostAnomaliesNetworkDroppedPacketsThresholdsToTerraform(struct!.thresholds),
  }
}


export function hostAnomaliesNetworkDroppedPacketsToHclTerraform(struct?: HostAnomaliesNetworkDroppedPacketsOutputReference | HostAnomaliesNetworkDroppedPackets): any {
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
      value: hostAnomaliesNetworkDroppedPacketsThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesNetworkDroppedPacketsThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesNetworkDroppedPacketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesNetworkDroppedPackets | undefined {
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

  public set internalValue(value: HostAnomaliesNetworkDroppedPackets | undefined) {
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

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new HostAnomaliesNetworkDroppedPacketsThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: HostAnomaliesNetworkDroppedPacketsThresholds) {
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
export interface HostAnomaliesNetworkErrorsThresholds {
  /**
  * Receive/transmit error packet percentage is higher than *X*% in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#errors_percentage HostAnomalies#errors_percentage}
  */
  readonly errorsPercentage: number;
  /**
  * Total receive/transmit packets rate is higher than *X* packets per second in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#total_packets_rate HostAnomalies#total_packets_rate}
  */
  readonly totalPacketsRate: number;
}

export function hostAnomaliesNetworkErrorsThresholdsToTerraform(struct?: HostAnomaliesNetworkErrorsThresholdsOutputReference | HostAnomaliesNetworkErrorsThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    errors_percentage: cdktf.numberToTerraform(struct!.errorsPercentage),
    total_packets_rate: cdktf.numberToTerraform(struct!.totalPacketsRate),
  }
}


export function hostAnomaliesNetworkErrorsThresholdsToHclTerraform(struct?: HostAnomaliesNetworkErrorsThresholdsOutputReference | HostAnomaliesNetworkErrorsThresholds): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesNetworkErrorsThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesNetworkErrorsThresholds | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesNetworkErrorsThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorsPercentage = undefined;
      this._totalPacketsRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorsPercentage = value.errorsPercentage;
      this._totalPacketsRate = value.totalPacketsRate;
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
}
export interface HostAnomaliesNetworkErrors {
  /**
  * The detection is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#enabled HostAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#thresholds HostAnomalies#thresholds}
  */
  readonly thresholds?: HostAnomaliesNetworkErrorsThresholds;
}

export function hostAnomaliesNetworkErrorsToTerraform(struct?: HostAnomaliesNetworkErrorsOutputReference | HostAnomaliesNetworkErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    thresholds: hostAnomaliesNetworkErrorsThresholdsToTerraform(struct!.thresholds),
  }
}


export function hostAnomaliesNetworkErrorsToHclTerraform(struct?: HostAnomaliesNetworkErrorsOutputReference | HostAnomaliesNetworkErrors): any {
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
      value: hostAnomaliesNetworkErrorsThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesNetworkErrorsThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesNetworkErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesNetworkErrors | undefined {
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

  public set internalValue(value: HostAnomaliesNetworkErrors | undefined) {
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

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new HostAnomaliesNetworkErrorsThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: HostAnomaliesNetworkErrorsThresholds) {
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
export interface HostAnomaliesNetworkRetransmissionThresholds {
  /**
  * Retransmission rate is higher than *X*% in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#retransmission_rate HostAnomalies#retransmission_rate}
  */
  readonly retransmissionRate: number;
  /**
  * Number of retransmitted packets is higher than *X* packets per minute in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#retransmitted_packets HostAnomalies#retransmitted_packets}
  */
  readonly retransmittedPackets: number;
}

export function hostAnomaliesNetworkRetransmissionThresholdsToTerraform(struct?: HostAnomaliesNetworkRetransmissionThresholdsOutputReference | HostAnomaliesNetworkRetransmissionThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retransmission_rate: cdktf.numberToTerraform(struct!.retransmissionRate),
    retransmitted_packets: cdktf.numberToTerraform(struct!.retransmittedPackets),
  }
}


export function hostAnomaliesNetworkRetransmissionThresholdsToHclTerraform(struct?: HostAnomaliesNetworkRetransmissionThresholdsOutputReference | HostAnomaliesNetworkRetransmissionThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retransmission_rate: {
      value: cdktf.numberToHclTerraform(struct!.retransmissionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmitted_packets: {
      value: cdktf.numberToHclTerraform(struct!.retransmittedPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesNetworkRetransmissionThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesNetworkRetransmissionThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retransmissionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmissionRate = this._retransmissionRate;
    }
    if (this._retransmittedPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmittedPackets = this._retransmittedPackets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesNetworkRetransmissionThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retransmissionRate = undefined;
      this._retransmittedPackets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retransmissionRate = value.retransmissionRate;
      this._retransmittedPackets = value.retransmittedPackets;
    }
  }

  // retransmission_rate - computed: false, optional: false, required: true
  private _retransmissionRate?: number; 
  public get retransmissionRate() {
    return this.getNumberAttribute('retransmission_rate');
  }
  public set retransmissionRate(value: number) {
    this._retransmissionRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmissionRateInput() {
    return this._retransmissionRate;
  }

  // retransmitted_packets - computed: false, optional: false, required: true
  private _retransmittedPackets?: number; 
  public get retransmittedPackets() {
    return this.getNumberAttribute('retransmitted_packets');
  }
  public set retransmittedPackets(value: number) {
    this._retransmittedPackets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmittedPacketsInput() {
    return this._retransmittedPackets;
  }
}
export interface HostAnomaliesNetworkRetransmission {
  /**
  * The detection is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#enabled HostAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#thresholds HostAnomalies#thresholds}
  */
  readonly thresholds?: HostAnomaliesNetworkRetransmissionThresholds;
}

export function hostAnomaliesNetworkRetransmissionToTerraform(struct?: HostAnomaliesNetworkRetransmissionOutputReference | HostAnomaliesNetworkRetransmission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    thresholds: hostAnomaliesNetworkRetransmissionThresholdsToTerraform(struct!.thresholds),
  }
}


export function hostAnomaliesNetworkRetransmissionToHclTerraform(struct?: HostAnomaliesNetworkRetransmissionOutputReference | HostAnomaliesNetworkRetransmission): any {
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
      value: hostAnomaliesNetworkRetransmissionThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesNetworkRetransmissionThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesNetworkRetransmissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesNetworkRetransmission | undefined {
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

  public set internalValue(value: HostAnomaliesNetworkRetransmission | undefined) {
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

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new HostAnomaliesNetworkRetransmissionThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: HostAnomaliesNetworkRetransmissionThresholds) {
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
export interface HostAnomaliesNetworkUtilizationThresholds {
  /**
  * Alert if sent/received traffic utilization is higher than *X*% in 3 out of 5 samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#utilization HostAnomalies#utilization}
  */
  readonly utilization: number;
}

export function hostAnomaliesNetworkUtilizationThresholdsToTerraform(struct?: HostAnomaliesNetworkUtilizationThresholdsOutputReference | HostAnomaliesNetworkUtilizationThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    utilization: cdktf.numberToTerraform(struct!.utilization),
  }
}


export function hostAnomaliesNetworkUtilizationThresholdsToHclTerraform(struct?: HostAnomaliesNetworkUtilizationThresholdsOutputReference | HostAnomaliesNetworkUtilizationThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    utilization: {
      value: cdktf.numberToHclTerraform(struct!.utilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesNetworkUtilizationThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesNetworkUtilizationThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._utilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.utilization = this._utilization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesNetworkUtilizationThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._utilization = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._utilization = value.utilization;
    }
  }

  // utilization - computed: false, optional: false, required: true
  private _utilization?: number; 
  public get utilization() {
    return this.getNumberAttribute('utilization');
  }
  public set utilization(value: number) {
    this._utilization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationInput() {
    return this._utilization;
  }
}
export interface HostAnomaliesNetworkUtilization {
  /**
  * The detection is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#enabled HostAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#thresholds HostAnomalies#thresholds}
  */
  readonly thresholds?: HostAnomaliesNetworkUtilizationThresholds;
}

export function hostAnomaliesNetworkUtilizationToTerraform(struct?: HostAnomaliesNetworkUtilizationOutputReference | HostAnomaliesNetworkUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    thresholds: hostAnomaliesNetworkUtilizationThresholdsToTerraform(struct!.thresholds),
  }
}


export function hostAnomaliesNetworkUtilizationToHclTerraform(struct?: HostAnomaliesNetworkUtilizationOutputReference | HostAnomaliesNetworkUtilization): any {
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
      value: hostAnomaliesNetworkUtilizationThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesNetworkUtilizationThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesNetworkUtilizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesNetworkUtilization | undefined {
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

  public set internalValue(value: HostAnomaliesNetworkUtilization | undefined) {
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

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new HostAnomaliesNetworkUtilizationThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: HostAnomaliesNetworkUtilizationThresholds) {
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
export interface HostAnomaliesNetwork {
  /**
  * connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#connectivity HostAnomalies#connectivity}
  */
  readonly connectivity?: HostAnomaliesNetworkConnectivity;
  /**
  * dropped_packets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#dropped_packets HostAnomalies#dropped_packets}
  */
  readonly droppedPackets?: HostAnomaliesNetworkDroppedPackets;
  /**
  * errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#errors HostAnomalies#errors}
  */
  readonly errors?: HostAnomaliesNetworkErrors;
  /**
  * retransmission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#retransmission HostAnomalies#retransmission}
  */
  readonly retransmission?: HostAnomaliesNetworkRetransmission;
  /**
  * utilization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#utilization HostAnomalies#utilization}
  */
  readonly utilization?: HostAnomaliesNetworkUtilization;
}

export function hostAnomaliesNetworkToTerraform(struct?: HostAnomaliesNetworkOutputReference | HostAnomaliesNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connectivity: hostAnomaliesNetworkConnectivityToTerraform(struct!.connectivity),
    dropped_packets: hostAnomaliesNetworkDroppedPacketsToTerraform(struct!.droppedPackets),
    errors: hostAnomaliesNetworkErrorsToTerraform(struct!.errors),
    retransmission: hostAnomaliesNetworkRetransmissionToTerraform(struct!.retransmission),
    utilization: hostAnomaliesNetworkUtilizationToTerraform(struct!.utilization),
  }
}


export function hostAnomaliesNetworkToHclTerraform(struct?: HostAnomaliesNetworkOutputReference | HostAnomaliesNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connectivity: {
      value: hostAnomaliesNetworkConnectivityToHclTerraform(struct!.connectivity),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesNetworkConnectivityList",
    },
    dropped_packets: {
      value: hostAnomaliesNetworkDroppedPacketsToHclTerraform(struct!.droppedPackets),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesNetworkDroppedPacketsList",
    },
    errors: {
      value: hostAnomaliesNetworkErrorsToHclTerraform(struct!.errors),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesNetworkErrorsList",
    },
    retransmission: {
      value: hostAnomaliesNetworkRetransmissionToHclTerraform(struct!.retransmission),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesNetworkRetransmissionList",
    },
    utilization: {
      value: hostAnomaliesNetworkUtilizationToHclTerraform(struct!.utilization),
      isBlock: true,
      type: "list",
      storageClassType: "HostAnomaliesNetworkUtilizationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAnomaliesNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAnomaliesNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivity = this._connectivity?.internalValue;
    }
    if (this._droppedPackets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.droppedPackets = this._droppedPackets?.internalValue;
    }
    if (this._errors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errors = this._errors?.internalValue;
    }
    if (this._retransmission?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmission = this._retransmission?.internalValue;
    }
    if (this._utilization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.utilization = this._utilization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAnomaliesNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectivity.internalValue = undefined;
      this._droppedPackets.internalValue = undefined;
      this._errors.internalValue = undefined;
      this._retransmission.internalValue = undefined;
      this._utilization.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectivity.internalValue = value.connectivity;
      this._droppedPackets.internalValue = value.droppedPackets;
      this._errors.internalValue = value.errors;
      this._retransmission.internalValue = value.retransmission;
      this._utilization.internalValue = value.utilization;
    }
  }

  // connectivity - computed: false, optional: true, required: false
  private _connectivity = new HostAnomaliesNetworkConnectivityOutputReference(this, "connectivity");
  public get connectivity() {
    return this._connectivity;
  }
  public putConnectivity(value: HostAnomaliesNetworkConnectivity) {
    this._connectivity.internalValue = value;
  }
  public resetConnectivity() {
    this._connectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInput() {
    return this._connectivity.internalValue;
  }

  // dropped_packets - computed: false, optional: true, required: false
  private _droppedPackets = new HostAnomaliesNetworkDroppedPacketsOutputReference(this, "dropped_packets");
  public get droppedPackets() {
    return this._droppedPackets;
  }
  public putDroppedPackets(value: HostAnomaliesNetworkDroppedPackets) {
    this._droppedPackets.internalValue = value;
  }
  public resetDroppedPackets() {
    this._droppedPackets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get droppedPacketsInput() {
    return this._droppedPackets.internalValue;
  }

  // errors - computed: false, optional: true, required: false
  private _errors = new HostAnomaliesNetworkErrorsOutputReference(this, "errors");
  public get errors() {
    return this._errors;
  }
  public putErrors(value: HostAnomaliesNetworkErrors) {
    this._errors.internalValue = value;
  }
  public resetErrors() {
    this._errors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorsInput() {
    return this._errors.internalValue;
  }

  // retransmission - computed: false, optional: true, required: false
  private _retransmission = new HostAnomaliesNetworkRetransmissionOutputReference(this, "retransmission");
  public get retransmission() {
    return this._retransmission;
  }
  public putRetransmission(value: HostAnomaliesNetworkRetransmission) {
    this._retransmission.internalValue = value;
  }
  public resetRetransmission() {
    this._retransmission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmissionInput() {
    return this._retransmission.internalValue;
  }

  // utilization - computed: false, optional: true, required: false
  private _utilization = new HostAnomaliesNetworkUtilizationOutputReference(this, "utilization");
  public get utilization() {
    return this._utilization;
  }
  public putUtilization(value: HostAnomaliesNetworkUtilization) {
    this._utilization.internalValue = value;
  }
  public resetUtilization() {
    this._utilization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationInput() {
    return this._utilization.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies dynatrace_host_anomalies}
*/
export class HostAnomalies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_host_anomalies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostAnomalies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostAnomalies to import
  * @param importFromId The id of the existing HostAnomalies that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostAnomalies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_host_anomalies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_anomalies dynatrace_host_anomalies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostAnomaliesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HostAnomaliesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_host_anomalies',
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
    this._connections.internalValue = config.connections;
    this._cpu.internalValue = config.cpu;
    this._disks.internalValue = config.disks;
    this._gc.internalValue = config.gc;
    this._java.internalValue = config.java;
    this._memory.internalValue = config.memory;
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

  // connections - computed: false, optional: true, required: false
  private _connections = new HostAnomaliesConnectionsOutputReference(this, "connections");
  public get connections() {
    return this._connections;
  }
  public putConnections(value: HostAnomaliesConnections) {
    this._connections.internalValue = value;
  }
  public resetConnections() {
    this._connections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new HostAnomaliesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: HostAnomaliesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // disks - computed: false, optional: true, required: false
  private _disks = new HostAnomaliesDisksOutputReference(this, "disks");
  public get disks() {
    return this._disks;
  }
  public putDisks(value: HostAnomaliesDisks) {
    this._disks.internalValue = value;
  }
  public resetDisks() {
    this._disks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks.internalValue;
  }

  // gc - computed: false, optional: true, required: false
  private _gc = new HostAnomaliesGcOutputReference(this, "gc");
  public get gc() {
    return this._gc;
  }
  public putGc(value: HostAnomaliesGc) {
    this._gc.internalValue = value;
  }
  public resetGc() {
    this._gc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcInput() {
    return this._gc.internalValue;
  }

  // java - computed: false, optional: true, required: false
  private _java = new HostAnomaliesJavaOutputReference(this, "java");
  public get java() {
    return this._java;
  }
  public putJava(value: HostAnomaliesJava) {
    this._java.internalValue = value;
  }
  public resetJava() {
    this._java.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaInput() {
    return this._java.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new HostAnomaliesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: HostAnomaliesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new HostAnomaliesNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: HostAnomaliesNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
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
      connections: hostAnomaliesConnectionsToTerraform(this._connections.internalValue),
      cpu: hostAnomaliesCpuToTerraform(this._cpu.internalValue),
      disks: hostAnomaliesDisksToTerraform(this._disks.internalValue),
      gc: hostAnomaliesGcToTerraform(this._gc.internalValue),
      java: hostAnomaliesJavaToTerraform(this._java.internalValue),
      memory: hostAnomaliesMemoryToTerraform(this._memory.internalValue),
      network: hostAnomaliesNetworkToTerraform(this._network.internalValue),
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
      connections: {
        value: hostAnomaliesConnectionsToHclTerraform(this._connections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HostAnomaliesConnectionsList",
      },
      cpu: {
        value: hostAnomaliesCpuToHclTerraform(this._cpu.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HostAnomaliesCpuList",
      },
      disks: {
        value: hostAnomaliesDisksToHclTerraform(this._disks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HostAnomaliesDisksList",
      },
      gc: {
        value: hostAnomaliesGcToHclTerraform(this._gc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HostAnomaliesGcList",
      },
      java: {
        value: hostAnomaliesJavaToHclTerraform(this._java.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HostAnomaliesJavaList",
      },
      memory: {
        value: hostAnomaliesMemoryToHclTerraform(this._memory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HostAnomaliesMemoryList",
      },
      network: {
        value: hostAnomaliesNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HostAnomaliesNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
