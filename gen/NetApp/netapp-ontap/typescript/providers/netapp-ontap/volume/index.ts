// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of aggregates to place volume on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#aggregates Volume#aggregates}
  */
  readonly aggregates: VolumeAggregates[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#analytics Volume#analytics}
  */
  readonly analytics?: VolumeAnalytics;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#autosize Volume#autosize}
  */
  readonly autosize?: VolumeAutosize;
  /**
  * Sets a comment associated with the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#comment Volume#comment}
  */
  readonly comment?: string;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#cx_profile_name Volume#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#efficiency Volume#efficiency}
  */
  readonly efficiency?: VolumeEfficiency;
  /**
  * Whether or not to enable Volume Encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#encryption Volume#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * Language to use for volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#language Volume#language}
  */
  readonly language?: string;
  /**
  * The name of the volume to manage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#name Volume#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#nas Volume#nas}
  */
  readonly nas?: VolumeNas;
  /**
  * Specifies a QoS policy group to be set on volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#qos_policy_group Volume#qos_policy_group}
  */
  readonly qosPolicyGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#snaplock Volume#snaplock}
  */
  readonly snaplock?: VolumeSnaplock;
  /**
  * Whether or not snapshot copy locking is enabled on the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#snapshot_locking_enabled Volume#snapshot_locking_enabled}
  */
  readonly snapshotLockingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the snapshot policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#snapshot_policy Volume#snapshot_policy}
  */
  readonly snapshotPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#space Volume#space}
  */
  readonly space: VolumeSpace;
  /**
  * Space guarantee style for the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#space_guarantee Volume#space_guarantee}
  */
  readonly spaceGuarantee?: string;
  /**
  * Whether the specified volume is online, or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#state Volume#state}
  */
  readonly state?: string;
  /**
  * Name of the svm to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#svm_name Volume#svm_name}
  */
  readonly svmName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#tiering Volume#tiering}
  */
  readonly tiering?: VolumeTiering;
  /**
  * The volume type, either read-write (RW) or data-protection (DP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#type Volume#type}
  */
  readonly type?: string;
}
export interface VolumeAggregates {
  /**
  * Name of the aggregate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#name Volume#name}
  */
  readonly name: string;
}

export function volumeAggregatesToTerraform(struct?: VolumeAggregates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function volumeAggregatesToHclTerraform(struct?: VolumeAggregates | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeAggregatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeAggregates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeAggregates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class VolumeAggregatesList extends cdktf.ComplexList {
  public internalValue? : VolumeAggregates[] | cdktf.IResolvable

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
  public get(index: number): VolumeAggregatesOutputReference {
    return new VolumeAggregatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeAnalytics {
  /**
  * Set file system analytics state of the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#state Volume#state}
  */
  readonly state?: string;
}

export function volumeAnalyticsToTerraform(struct?: VolumeAnalytics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function volumeAnalyticsToHclTerraform(struct?: VolumeAnalytics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeAnalyticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeAnalytics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeAnalytics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface VolumeAutosize {
  /**
  * Used space threshold size, in percentage, for the automatic growth of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#grow_threshold Volume#grow_threshold}
  */
  readonly growThreshold?: number;
  /**
  * Maximum size up to which a volume grows automatically. This size cannot be less than the current volume size, or less than or equal to the minimum size of volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#maximum Volume#maximum}
  */
  readonly maximum?: number;
  /**
  * Minimum size up to which the volume shrinks automatically. This size cannot be greater than or equal to the maximum size of volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#minimum Volume#minimum}
  */
  readonly minimum?: number;
  /**
  * 
  * 											 Autosize mode for the volume.
  * 											 grow - Volume automatically grows when the amount of used space is above the 'grow_threshold' value.
  * 							   				 grow_shrink - Volume grows or shrinks in response to the amount of space used.
  * 											 off - Autosizing of the volume is disabled.
  * 											 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#mode Volume#mode}
  */
  readonly mode?: string;
  /**
  * Used space threshold size, in percentage, for the automatic shrinkage of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#shrink_threshold Volume#shrink_threshold}
  */
  readonly shrinkThreshold?: number;
  /**
  * The unit used to interpret the minimum or maximum size parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#size_unit Volume#size_unit}
  */
  readonly sizeUnit?: string;
}

export function volumeAutosizeToTerraform(struct?: VolumeAutosize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grow_threshold: cdktf.numberToTerraform(struct!.growThreshold),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    mode: cdktf.stringToTerraform(struct!.mode),
    shrink_threshold: cdktf.numberToTerraform(struct!.shrinkThreshold),
    size_unit: cdktf.stringToTerraform(struct!.sizeUnit),
  }
}


export function volumeAutosizeToHclTerraform(struct?: VolumeAutosize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grow_threshold: {
      value: cdktf.numberToHclTerraform(struct!.growThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shrink_threshold: {
      value: cdktf.numberToHclTerraform(struct!.shrinkThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_unit: {
      value: cdktf.stringToHclTerraform(struct!.sizeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeAutosizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeAutosize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._growThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.growThreshold = this._growThreshold;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._shrinkThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.shrinkThreshold = this._shrinkThreshold;
    }
    if (this._sizeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeUnit = this._sizeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeAutosize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._growThreshold = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._mode = undefined;
      this._shrinkThreshold = undefined;
      this._sizeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._growThreshold = value.growThreshold;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._mode = value.mode;
      this._shrinkThreshold = value.shrinkThreshold;
      this._sizeUnit = value.sizeUnit;
    }
  }

  // grow_threshold - computed: true, optional: true, required: false
  private _growThreshold?: number; 
  public get growThreshold() {
    return this.getNumberAttribute('grow_threshold');
  }
  public set growThreshold(value: number) {
    this._growThreshold = value;
  }
  public resetGrowThreshold() {
    this._growThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get growThresholdInput() {
    return this._growThreshold;
  }

  // maximum - computed: true, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: true, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // shrink_threshold - computed: true, optional: true, required: false
  private _shrinkThreshold?: number; 
  public get shrinkThreshold() {
    return this.getNumberAttribute('shrink_threshold');
  }
  public set shrinkThreshold(value: number) {
    this._shrinkThreshold = value;
  }
  public resetShrinkThreshold() {
    this._shrinkThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shrinkThresholdInput() {
    return this._shrinkThreshold;
  }

  // size_unit - computed: true, optional: true, required: false
  private _sizeUnit?: string; 
  public get sizeUnit() {
    return this.getStringAttribute('size_unit');
  }
  public set sizeUnit(value: string) {
    this._sizeUnit = value;
  }
  public resetSizeUnit() {
    this._sizeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeUnitInput() {
    return this._sizeUnit;
  }
}
export interface VolumeEfficiency {
  /**
  * The system can be enabled/disabled compaction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#compaction Volume#compaction}
  */
  readonly compaction?: string;
  /**
  * Whether to enable compression for the volume (HDD and Flash Pool aggregates)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#compression Volume#compression}
  */
  readonly compression?: string;
  /**
  * The system can be enabled/disabled dedupe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#dedupe Volume#dedupe}
  */
  readonly dedupe?: string;
  /**
  * Allows a storage efficiency policy to be set on volume creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#policy_name Volume#policy_name}
  */
  readonly policyName?: string;
}

export function volumeEfficiencyToTerraform(struct?: VolumeEfficiency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compaction: cdktf.stringToTerraform(struct!.compaction),
    compression: cdktf.stringToTerraform(struct!.compression),
    dedupe: cdktf.stringToTerraform(struct!.dedupe),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
  }
}


export function volumeEfficiencyToHclTerraform(struct?: VolumeEfficiency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compaction: {
      value: cdktf.stringToHclTerraform(struct!.compaction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression: {
      value: cdktf.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dedupe: {
      value: cdktf.stringToHclTerraform(struct!.dedupe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeEfficiencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeEfficiency | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.compaction = this._compaction;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._dedupe !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedupe = this._dedupe;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeEfficiency | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compaction = undefined;
      this._compression = undefined;
      this._dedupe = undefined;
      this._policyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compaction = value.compaction;
      this._compression = value.compression;
      this._dedupe = value.dedupe;
      this._policyName = value.policyName;
    }
  }

  // compaction - computed: true, optional: true, required: false
  private _compaction?: string; 
  public get compaction() {
    return this.getStringAttribute('compaction');
  }
  public set compaction(value: string) {
    this._compaction = value;
  }
  public resetCompaction() {
    this._compaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactionInput() {
    return this._compaction;
  }

  // compression - computed: true, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // dedupe - computed: true, optional: true, required: false
  private _dedupe?: string; 
  public get dedupe() {
    return this.getStringAttribute('dedupe');
  }
  public set dedupe(value: string) {
    this._dedupe = value;
  }
  public resetDedupe() {
    this._dedupe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedupeInput() {
    return this._dedupe;
  }

  // policy_name - computed: true, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }
}
export interface VolumeNas {
  /**
  * The name of the export policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#export_policy_name Volume#export_policy_name}
  */
  readonly exportPolicyName?: string;
  /**
  * The UNIX group ID for the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#group_id Volume#group_id}
  */
  readonly groupId?: number;
  /**
  * Junction path of the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#junction_path Volume#junction_path}
  */
  readonly junctionPath?: string;
  /**
  * The security style associated to the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#security_style Volume#security_style}
  */
  readonly securityStyle?: string;
  /**
  * Unix permission bits in octal or symbolic format. For example, 0 is equivalent to ------------, 777 is equivalent to ---rwxrwxrwx,both formats are accepted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#unix_permissions Volume#unix_permissions}
  */
  readonly unixPermissions?: number;
  /**
  * The UNIX user ID for the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#user_id Volume#user_id}
  */
  readonly userId?: number;
}

export function volumeNasToTerraform(struct?: VolumeNas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_policy_name: cdktf.stringToTerraform(struct!.exportPolicyName),
    group_id: cdktf.numberToTerraform(struct!.groupId),
    junction_path: cdktf.stringToTerraform(struct!.junctionPath),
    security_style: cdktf.stringToTerraform(struct!.securityStyle),
    unix_permissions: cdktf.numberToTerraform(struct!.unixPermissions),
    user_id: cdktf.numberToTerraform(struct!.userId),
  }
}


export function volumeNasToHclTerraform(struct?: VolumeNas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.exportPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    junction_path: {
      value: cdktf.stringToHclTerraform(struct!.junctionPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_style: {
      value: cdktf.stringToHclTerraform(struct!.securityStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unix_permissions: {
      value: cdktf.numberToHclTerraform(struct!.unixPermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_id: {
      value: cdktf.numberToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeNasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeNas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicyName = this._exportPolicyName;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._junctionPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.junctionPath = this._junctionPath;
    }
    if (this._securityStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityStyle = this._securityStyle;
    }
    if (this._unixPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixPermissions = this._unixPermissions;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeNas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportPolicyName = undefined;
      this._groupId = undefined;
      this._junctionPath = undefined;
      this._securityStyle = undefined;
      this._unixPermissions = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportPolicyName = value.exportPolicyName;
      this._groupId = value.groupId;
      this._junctionPath = value.junctionPath;
      this._securityStyle = value.securityStyle;
      this._unixPermissions = value.unixPermissions;
      this._userId = value.userId;
    }
  }

  // export_policy_name - computed: true, optional: true, required: false
  private _exportPolicyName?: string; 
  public get exportPolicyName() {
    return this.getStringAttribute('export_policy_name');
  }
  public set exportPolicyName(value: string) {
    this._exportPolicyName = value;
  }
  public resetExportPolicyName() {
    this._exportPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyNameInput() {
    return this._exportPolicyName;
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // junction_path - computed: true, optional: true, required: false
  private _junctionPath?: string; 
  public get junctionPath() {
    return this.getStringAttribute('junction_path');
  }
  public set junctionPath(value: string) {
    this._junctionPath = value;
  }
  public resetJunctionPath() {
    this._junctionPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get junctionPathInput() {
    return this._junctionPath;
  }

  // security_style - computed: true, optional: true, required: false
  private _securityStyle?: string; 
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
  }
  public resetSecurityStyle() {
    this._securityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityStyleInput() {
    return this._securityStyle;
  }

  // unix_permissions - computed: true, optional: true, required: false
  private _unixPermissions?: number; 
  public get unixPermissions() {
    return this.getNumberAttribute('unix_permissions');
  }
  public set unixPermissions(value: number) {
    this._unixPermissions = value;
  }
  public resetUnixPermissions() {
    this._unixPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixPermissionsInput() {
    return this._unixPermissions;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface VolumeSnaplock {
  /**
  * The SnapLock type of the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#type Volume#type}
  */
  readonly type?: string;
}

export function volumeSnaplockToTerraform(struct?: VolumeSnaplock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function volumeSnaplockToHclTerraform(struct?: VolumeSnaplock | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeSnaplockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeSnaplock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSnaplock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: true, optional: true, required: false
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
}
export interface VolumeSpaceLogicalSpace {
  /**
  * Whether to perform logical space accounting on the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#enforcement Volume#enforcement}
  */
  readonly enforcement?: boolean | cdktf.IResolvable;
  /**
  * Whether to report space logically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#reporting Volume#reporting}
  */
  readonly reporting?: boolean | cdktf.IResolvable;
}

export function volumeSpaceLogicalSpaceToTerraform(struct?: VolumeSpaceLogicalSpace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforcement: cdktf.booleanToTerraform(struct!.enforcement),
    reporting: cdktf.booleanToTerraform(struct!.reporting),
  }
}


export function volumeSpaceLogicalSpaceToHclTerraform(struct?: VolumeSpaceLogicalSpace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforcement: {
      value: cdktf.booleanToHclTerraform(struct!.enforcement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reporting: {
      value: cdktf.booleanToHclTerraform(struct!.reporting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeSpaceLogicalSpaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeSpaceLogicalSpace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcement !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcement = this._enforcement;
    }
    if (this._reporting !== undefined) {
      hasAnyValues = true;
      internalValueResult.reporting = this._reporting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSpaceLogicalSpace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforcement = undefined;
      this._reporting = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforcement = value.enforcement;
      this._reporting = value.reporting;
    }
  }

  // enforcement - computed: true, optional: true, required: false
  private _enforcement?: boolean | cdktf.IResolvable; 
  public get enforcement() {
    return this.getBooleanAttribute('enforcement');
  }
  public set enforcement(value: boolean | cdktf.IResolvable) {
    this._enforcement = value;
  }
  public resetEnforcement() {
    this._enforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementInput() {
    return this._enforcement;
  }

  // reporting - computed: true, optional: true, required: false
  private _reporting?: boolean | cdktf.IResolvable; 
  public get reporting() {
    return this.getBooleanAttribute('reporting');
  }
  public set reporting(value: boolean | cdktf.IResolvable) {
    this._reporting = value;
  }
  public resetReporting() {
    this._reporting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingInput() {
    return this._reporting;
  }
}
export interface VolumeSpace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#logical_space Volume#logical_space}
  */
  readonly logicalSpace?: VolumeSpaceLogicalSpace;
  /**
  * Amount of space reserved for snapshot copies of the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#percent_snapshot_space Volume#percent_snapshot_space}
  */
  readonly percentSnapshotSpace?: number;
  /**
  * The size of the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#size Volume#size}
  */
  readonly size: number;
  /**
  * The unit used to interpret the size parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#size_unit Volume#size_unit}
  */
  readonly sizeUnit: string;
}

export function volumeSpaceToTerraform(struct?: VolumeSpace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logical_space: volumeSpaceLogicalSpaceToTerraform(struct!.logicalSpace),
    percent_snapshot_space: cdktf.numberToTerraform(struct!.percentSnapshotSpace),
    size: cdktf.numberToTerraform(struct!.size),
    size_unit: cdktf.stringToTerraform(struct!.sizeUnit),
  }
}


export function volumeSpaceToHclTerraform(struct?: VolumeSpace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logical_space: {
      value: volumeSpaceLogicalSpaceToHclTerraform(struct!.logicalSpace),
      isBlock: true,
      type: "struct",
      storageClassType: "VolumeSpaceLogicalSpace",
    },
    percent_snapshot_space: {
      value: cdktf.numberToHclTerraform(struct!.percentSnapshotSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_unit: {
      value: cdktf.stringToHclTerraform(struct!.sizeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeSpaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeSpace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logicalSpace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalSpace = this._logicalSpace?.internalValue;
    }
    if (this._percentSnapshotSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentSnapshotSpace = this._percentSnapshotSpace;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sizeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeUnit = this._sizeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSpace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logicalSpace.internalValue = undefined;
      this._percentSnapshotSpace = undefined;
      this._size = undefined;
      this._sizeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logicalSpace.internalValue = value.logicalSpace;
      this._percentSnapshotSpace = value.percentSnapshotSpace;
      this._size = value.size;
      this._sizeUnit = value.sizeUnit;
    }
  }

  // logical_space - computed: true, optional: true, required: false
  private _logicalSpace = new VolumeSpaceLogicalSpaceOutputReference(this, "logical_space");
  public get logicalSpace() {
    return this._logicalSpace;
  }
  public putLogicalSpace(value: VolumeSpaceLogicalSpace) {
    this._logicalSpace.internalValue = value;
  }
  public resetLogicalSpace() {
    this._logicalSpace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalSpaceInput() {
    return this._logicalSpace.internalValue;
  }

  // percent_snapshot_space - computed: true, optional: true, required: false
  private _percentSnapshotSpace?: number; 
  public get percentSnapshotSpace() {
    return this.getNumberAttribute('percent_snapshot_space');
  }
  public set percentSnapshotSpace(value: number) {
    this._percentSnapshotSpace = value;
  }
  public resetPercentSnapshotSpace() {
    this._percentSnapshotSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentSnapshotSpaceInput() {
    return this._percentSnapshotSpace;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_unit - computed: false, optional: false, required: true
  private _sizeUnit?: string; 
  public get sizeUnit() {
    return this.getStringAttribute('size_unit');
  }
  public set sizeUnit(value: string) {
    this._sizeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeUnitInput() {
    return this._sizeUnit;
  }
}
export interface VolumeTiering {
  /**
  * Determines how many days must pass before inactive data in a volume using the Auto or Snapshot-Only policy is considered cold and eligible for tiering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#minimum_cooling_days Volume#minimum_cooling_days}
  */
  readonly minimumCoolingDays?: number;
  /**
  * The tiering policy that is to be associated with the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#policy_name Volume#policy_name}
  */
  readonly policyName?: string;
}

export function volumeTieringToTerraform(struct?: VolumeTiering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_cooling_days: cdktf.numberToTerraform(struct!.minimumCoolingDays),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
  }
}


export function volumeTieringToHclTerraform(struct?: VolumeTiering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_cooling_days: {
      value: cdktf.numberToHclTerraform(struct!.minimumCoolingDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeTieringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeTiering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumCoolingDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumCoolingDays = this._minimumCoolingDays;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeTiering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumCoolingDays = undefined;
      this._policyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumCoolingDays = value.minimumCoolingDays;
      this._policyName = value.policyName;
    }
  }

  // minimum_cooling_days - computed: true, optional: true, required: false
  private _minimumCoolingDays?: number; 
  public get minimumCoolingDays() {
    return this.getNumberAttribute('minimum_cooling_days');
  }
  public set minimumCoolingDays(value: number) {
    this._minimumCoolingDays = value;
  }
  public resetMinimumCoolingDays() {
    this._minimumCoolingDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumCoolingDaysInput() {
    return this._minimumCoolingDays;
  }

  // policy_name - computed: true, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume netapp-ontap_volume}
*/
export class Volume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Volume to import
  * @param importFromId The id of the existing Volume that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Volume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/volume netapp-ontap_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeConfig
  */
  public constructor(scope: Construct, id: string, config: VolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_volume',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregates.internalValue = config.aggregates;
    this._analytics.internalValue = config.analytics;
    this._autosize.internalValue = config.autosize;
    this._comment = config.comment;
    this._cxProfileName = config.cxProfileName;
    this._efficiency.internalValue = config.efficiency;
    this._encryption = config.encryption;
    this._language = config.language;
    this._name = config.name;
    this._nas.internalValue = config.nas;
    this._qosPolicyGroup = config.qosPolicyGroup;
    this._snaplock.internalValue = config.snaplock;
    this._snapshotLockingEnabled = config.snapshotLockingEnabled;
    this._snapshotPolicy = config.snapshotPolicy;
    this._space.internalValue = config.space;
    this._spaceGuarantee = config.spaceGuarantee;
    this._state = config.state;
    this._svmName = config.svmName;
    this._tiering.internalValue = config.tiering;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregates - computed: false, optional: false, required: true
  private _aggregates = new VolumeAggregatesList(this, "aggregates", true);
  public get aggregates() {
    return this._aggregates;
  }
  public putAggregates(value: VolumeAggregates[] | cdktf.IResolvable) {
    this._aggregates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatesInput() {
    return this._aggregates.internalValue;
  }

  // analytics - computed: true, optional: true, required: false
  private _analytics = new VolumeAnalyticsOutputReference(this, "analytics");
  public get analytics() {
    return this._analytics;
  }
  public putAnalytics(value: VolumeAnalytics) {
    this._analytics.internalValue = value;
  }
  public resetAnalytics() {
    this._analytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsInput() {
    return this._analytics.internalValue;
  }

  // autosize - computed: true, optional: true, required: false
  private _autosize = new VolumeAutosizeOutputReference(this, "autosize");
  public get autosize() {
    return this._autosize;
  }
  public putAutosize(value: VolumeAutosize) {
    this._autosize.internalValue = value;
  }
  public resetAutosize() {
    this._autosize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autosizeInput() {
    return this._autosize.internalValue;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // efficiency - computed: true, optional: true, required: false
  private _efficiency = new VolumeEfficiencyOutputReference(this, "efficiency");
  public get efficiency() {
    return this._efficiency;
  }
  public putEfficiency(value: VolumeEfficiency) {
    this._efficiency.internalValue = value;
  }
  public resetEfficiency() {
    this._efficiency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efficiencyInput() {
    return this._efficiency.internalValue;
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // language - computed: true, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
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

  // nas - computed: true, optional: true, required: false
  private _nas = new VolumeNasOutputReference(this, "nas");
  public get nas() {
    return this._nas;
  }
  public putNas(value: VolumeNas) {
    this._nas.internalValue = value;
  }
  public resetNas() {
    this._nas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasInput() {
    return this._nas.internalValue;
  }

  // qos_policy_group - computed: true, optional: true, required: false
  private _qosPolicyGroup?: string; 
  public get qosPolicyGroup() {
    return this.getStringAttribute('qos_policy_group');
  }
  public set qosPolicyGroup(value: string) {
    this._qosPolicyGroup = value;
  }
  public resetQosPolicyGroup() {
    this._qosPolicyGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyGroupInput() {
    return this._qosPolicyGroup;
  }

  // snaplock - computed: true, optional: true, required: false
  private _snaplock = new VolumeSnaplockOutputReference(this, "snaplock");
  public get snaplock() {
    return this._snaplock;
  }
  public putSnaplock(value: VolumeSnaplock) {
    this._snaplock.internalValue = value;
  }
  public resetSnaplock() {
    this._snaplock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snaplockInput() {
    return this._snaplock.internalValue;
  }

  // snapshot_locking_enabled - computed: true, optional: true, required: false
  private _snapshotLockingEnabled?: boolean | cdktf.IResolvable; 
  public get snapshotLockingEnabled() {
    return this.getBooleanAttribute('snapshot_locking_enabled');
  }
  public set snapshotLockingEnabled(value: boolean | cdktf.IResolvable) {
    this._snapshotLockingEnabled = value;
  }
  public resetSnapshotLockingEnabled() {
    this._snapshotLockingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotLockingEnabledInput() {
    return this._snapshotLockingEnabled;
  }

  // snapshot_policy - computed: true, optional: true, required: false
  private _snapshotPolicy?: string; 
  public get snapshotPolicy() {
    return this.getStringAttribute('snapshot_policy');
  }
  public set snapshotPolicy(value: string) {
    this._snapshotPolicy = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy;
  }

  // space - computed: false, optional: false, required: true
  private _space = new VolumeSpaceOutputReference(this, "space");
  public get space() {
    return this._space;
  }
  public putSpace(value: VolumeSpace) {
    this._space.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space.internalValue;
  }

  // space_guarantee - computed: true, optional: true, required: false
  private _spaceGuarantee?: string; 
  public get spaceGuarantee() {
    return this.getStringAttribute('space_guarantee');
  }
  public set spaceGuarantee(value: string) {
    this._spaceGuarantee = value;
  }
  public resetSpaceGuarantee() {
    this._spaceGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceGuaranteeInput() {
    return this._spaceGuarantee;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // tiering - computed: true, optional: true, required: false
  private _tiering = new VolumeTieringOutputReference(this, "tiering");
  public get tiering() {
    return this._tiering;
  }
  public putTiering(value: VolumeTiering) {
    this._tiering.internalValue = value;
  }
  public resetTiering() {
    this._tiering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringInput() {
    return this._tiering.internalValue;
  }

  // type - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregates: cdktf.listMapper(volumeAggregatesToTerraform, false)(this._aggregates.internalValue),
      analytics: volumeAnalyticsToTerraform(this._analytics.internalValue),
      autosize: volumeAutosizeToTerraform(this._autosize.internalValue),
      comment: cdktf.stringToTerraform(this._comment),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      efficiency: volumeEfficiencyToTerraform(this._efficiency.internalValue),
      encryption: cdktf.booleanToTerraform(this._encryption),
      language: cdktf.stringToTerraform(this._language),
      name: cdktf.stringToTerraform(this._name),
      nas: volumeNasToTerraform(this._nas.internalValue),
      qos_policy_group: cdktf.stringToTerraform(this._qosPolicyGroup),
      snaplock: volumeSnaplockToTerraform(this._snaplock.internalValue),
      snapshot_locking_enabled: cdktf.booleanToTerraform(this._snapshotLockingEnabled),
      snapshot_policy: cdktf.stringToTerraform(this._snapshotPolicy),
      space: volumeSpaceToTerraform(this._space.internalValue),
      space_guarantee: cdktf.stringToTerraform(this._spaceGuarantee),
      state: cdktf.stringToTerraform(this._state),
      svm_name: cdktf.stringToTerraform(this._svmName),
      tiering: volumeTieringToTerraform(this._tiering.internalValue),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregates: {
        value: cdktf.listMapperHcl(volumeAggregatesToHclTerraform, false)(this._aggregates.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VolumeAggregatesList",
      },
      analytics: {
        value: volumeAnalyticsToHclTerraform(this._analytics.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VolumeAnalytics",
      },
      autosize: {
        value: volumeAutosizeToHclTerraform(this._autosize.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VolumeAutosize",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      efficiency: {
        value: volumeEfficiencyToHclTerraform(this._efficiency.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VolumeEfficiency",
      },
      encryption: {
        value: cdktf.booleanToHclTerraform(this._encryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nas: {
        value: volumeNasToHclTerraform(this._nas.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VolumeNas",
      },
      qos_policy_group: {
        value: cdktf.stringToHclTerraform(this._qosPolicyGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snaplock: {
        value: volumeSnaplockToHclTerraform(this._snaplock.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VolumeSnaplock",
      },
      snapshot_locking_enabled: {
        value: cdktf.booleanToHclTerraform(this._snapshotLockingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snapshot_policy: {
        value: cdktf.stringToHclTerraform(this._snapshotPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space: {
        value: volumeSpaceToHclTerraform(this._space.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VolumeSpace",
      },
      space_guarantee: {
        value: cdktf.stringToHclTerraform(this._spaceGuarantee),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tiering: {
        value: volumeTieringToHclTerraform(this._tiering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VolumeTiering",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
