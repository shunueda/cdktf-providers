// https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of generation for the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#generation Snapshot#generation}
  */
  readonly generation?: number;
  /**
  * Linked storage group and volume information. Only populated if the generation is linked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#linked_storage_group Snapshot#linked_storage_group}
  */
  readonly linkedStorageGroup?: SnapshotLinkedStorageGroup[] | cdktf.IResolvable;
  /**
  * The number of tracks uniquely allocated for this snapshots delta. This is an approximate indication of the number of tracks that will be returned to the SRP if this snapshot is terminated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#non_shared_tracks Snapshot#non_shared_tracks}
  */
  readonly nonSharedTracks?: number;
  /**
  * The number of source volumes in the snapshot generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#num_source_volumes Snapshot#num_source_volumes}
  */
  readonly numSourceVolumes?: number;
  /**
  * Set if this snapshot is persistent.  Only applicable to policy based snapshots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#persistent Snapshot#persistent}
  */
  readonly persistent?: boolean | cdktf.IResolvable;
  /**
  * When the snapshot will expire once it is not linked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#secure_expiry_date Snapshot#secure_expiry_date}
  */
  readonly secureExpiryDate?: string;
  /**
  * Unique Snap ID for Snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#snapid Snapshot#snapid}
  */
  readonly snapid?: number;
  /**
  * When the snapshot will expire once it is not linked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#time_to_live_expiry_date Snapshot#time_to_live_expiry_date}
  */
  readonly timeToLiveExpiryDate?: string;
  /**
  * The number of source tracks that have been overwritten by the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#tracks Snapshot#tracks}
  */
  readonly tracks?: number;
  /**
  * snapshot_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#snapshot_actions Snapshot#snapshot_actions}
  */
  readonly snapshotActions?: SnapshotSnapshotActions;
  /**
  * storage_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#storage_group Snapshot#storage_group}
  */
  readonly storageGroup: SnapshotStorageGroup;
}
export interface SnapshotLinkedStorageGroup {
  /**
  * When the snapshot link is being defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#background_define_in_progress Snapshot#background_define_in_progress}
  */
  readonly backgroundDefineInProgress?: boolean | cdktf.IResolvable;
  /**
  * When the snapshot link has been fully defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#defined Snapshot#defined}
  */
  readonly defined?: boolean | cdktf.IResolvable;
}

export function snapshotLinkedStorageGroupToTerraform(struct?: SnapshotLinkedStorageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_define_in_progress: cdktf.booleanToTerraform(struct!.backgroundDefineInProgress),
    defined: cdktf.booleanToTerraform(struct!.defined),
  }
}


export function snapshotLinkedStorageGroupToHclTerraform(struct?: SnapshotLinkedStorageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_define_in_progress: {
      value: cdktf.booleanToHclTerraform(struct!.backgroundDefineInProgress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    defined: {
      value: cdktf.booleanToHclTerraform(struct!.defined),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapshotLinkedStorageGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnapshotLinkedStorageGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundDefineInProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundDefineInProgress = this._backgroundDefineInProgress;
    }
    if (this._defined !== undefined) {
      hasAnyValues = true;
      internalValueResult.defined = this._defined;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotLinkedStorageGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundDefineInProgress = undefined;
      this._defined = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundDefineInProgress = value.backgroundDefineInProgress;
      this._defined = value.defined;
    }
  }

  // background_define_in_progress - computed: true, optional: true, required: false
  private _backgroundDefineInProgress?: boolean | cdktf.IResolvable; 
  public get backgroundDefineInProgress() {
    return this.getBooleanAttribute('background_define_in_progress');
  }
  public set backgroundDefineInProgress(value: boolean | cdktf.IResolvable) {
    this._backgroundDefineInProgress = value;
  }
  public resetBackgroundDefineInProgress() {
    this._backgroundDefineInProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundDefineInProgressInput() {
    return this._backgroundDefineInProgress;
  }

  // defined - computed: true, optional: true, required: false
  private _defined?: boolean | cdktf.IResolvable; 
  public get defined() {
    return this.getBooleanAttribute('defined');
  }
  public set defined(value: boolean | cdktf.IResolvable) {
    this._defined = value;
  }
  public resetDefined() {
    this._defined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedInput() {
    return this._defined;
  }

  // linked_creation_timestamp - computed: true, optional: false, required: false
  public get linkedCreationTimestamp() {
    return this.getStringAttribute('linked_creation_timestamp');
  }

  // linked_volume_name - computed: true, optional: false, required: false
  public get linkedVolumeName() {
    return this.getStringAttribute('linked_volume_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // percentage_copied - computed: true, optional: false, required: false
  public get percentageCopied() {
    return this.getNumberAttribute('percentage_copied');
  }

  // source_volume_name - computed: true, optional: false, required: false
  public get sourceVolumeName() {
    return this.getStringAttribute('source_volume_name');
  }

  // track_size - computed: true, optional: false, required: false
  public get trackSize() {
    return this.getNumberAttribute('track_size');
  }

  // tracks - computed: true, optional: false, required: false
  public get tracks() {
    return this.getNumberAttribute('tracks');
  }
}

export class SnapshotLinkedStorageGroupList extends cdktf.ComplexList {
  public internalValue? : SnapshotLinkedStorageGroup[] | cdktf.IResolvable

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
  public get(index: number): SnapshotLinkedStorageGroupOutputReference {
    return new SnapshotLinkedStorageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnapshotSourceVolume {
}

export function snapshotSourceVolumeToTerraform(struct?: SnapshotSourceVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function snapshotSourceVolumeToHclTerraform(struct?: SnapshotSourceVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SnapshotSourceVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SnapshotSourceVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotSourceVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // capacity_gb - computed: true, optional: false, required: false
  public get capacityGb() {
    return this.getNumberAttribute('capacity_gb');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class SnapshotSourceVolumeList extends cdktf.ComplexList {

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
  public get(index: number): SnapshotSourceVolumeOutputReference {
    return new SnapshotSourceVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnapshotSnapshotActionsLink {
  /**
  * copy defaults to false. If true Sets the link copy mode to perform background copy to the target volume(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#copy Snapshot#copy}
  */
  readonly copy?: boolean | cdktf.IResolvable;
  /**
  * enable defaults to false. Flag to enable link on the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#enable Snapshot#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * no_compression defaults to false. If true, The target storage group will not have compression turned on when the SRP is compression capable. Option Used in Action Link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#no_compression Snapshot#no_compression}
  */
  readonly noCompression?: boolean | cdktf.IResolvable;
  /**
  * remote defaults to false. If true, The target storage group will not have compression turned on when the SRP is compression capable. Option Used in Action Link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#remote Snapshot#remote}
  */
  readonly remote?: boolean | cdktf.IResolvable;
  /**
  * The target storage group to link the snapshot too
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#target_storage_group Snapshot#target_storage_group}
  */
  readonly targetStorageGroup?: string;
}

export function snapshotSnapshotActionsLinkToTerraform(struct?: SnapshotSnapshotActionsLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy: cdktf.booleanToTerraform(struct!.copy),
    enable: cdktf.booleanToTerraform(struct!.enable),
    no_compression: cdktf.booleanToTerraform(struct!.noCompression),
    remote: cdktf.booleanToTerraform(struct!.remote),
    target_storage_group: cdktf.stringToTerraform(struct!.targetStorageGroup),
  }
}


export function snapshotSnapshotActionsLinkToHclTerraform(struct?: SnapshotSnapshotActionsLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    copy: {
      value: cdktf.booleanToHclTerraform(struct!.copy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_compression: {
      value: cdktf.booleanToHclTerraform(struct!.noCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote: {
      value: cdktf.booleanToHclTerraform(struct!.remote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_storage_group: {
      value: cdktf.stringToHclTerraform(struct!.targetStorageGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapshotSnapshotActionsLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapshotSnapshotActionsLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copy !== undefined) {
      hasAnyValues = true;
      internalValueResult.copy = this._copy;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._noCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCompression = this._noCompression;
    }
    if (this._remote !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote;
    }
    if (this._targetStorageGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetStorageGroup = this._targetStorageGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotSnapshotActionsLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copy = undefined;
      this._enable = undefined;
      this._noCompression = undefined;
      this._remote = undefined;
      this._targetStorageGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copy = value.copy;
      this._enable = value.enable;
      this._noCompression = value.noCompression;
      this._remote = value.remote;
      this._targetStorageGroup = value.targetStorageGroup;
    }
  }

  // copy - computed: true, optional: true, required: false
  private _copy?: boolean | cdktf.IResolvable; 
  public get copy() {
    return this.getBooleanAttribute('copy');
  }
  public set copy(value: boolean | cdktf.IResolvable) {
    this._copy = value;
  }
  public resetCopy() {
    this._copy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyInput() {
    return this._copy;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // no_compression - computed: true, optional: true, required: false
  private _noCompression?: boolean | cdktf.IResolvable; 
  public get noCompression() {
    return this.getBooleanAttribute('no_compression');
  }
  public set noCompression(value: boolean | cdktf.IResolvable) {
    this._noCompression = value;
  }
  public resetNoCompression() {
    this._noCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCompressionInput() {
    return this._noCompression;
  }

  // remote - computed: true, optional: true, required: false
  private _remote?: boolean | cdktf.IResolvable; 
  public get remote() {
    return this.getBooleanAttribute('remote');
  }
  public set remote(value: boolean | cdktf.IResolvable) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }

  // target_storage_group - computed: true, optional: true, required: false
  private _targetStorageGroup?: string; 
  public get targetStorageGroup() {
    return this.getStringAttribute('target_storage_group');
  }
  public set targetStorageGroup(value: string) {
    this._targetStorageGroup = value;
  }
  public resetTargetStorageGroup() {
    this._targetStorageGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetStorageGroupInput() {
    return this._targetStorageGroup;
  }
}
export interface SnapshotSnapshotActionsRestore {
  /**
  * enable defaults to false. Flag to enable restore on the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#enable Snapshot#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * remote defaults to false. If true, The target storage group will not have compression turned on when the SRP is compression capable. Option Used in Action Link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#remote Snapshot#remote}
  */
  readonly remote?: boolean | cdktf.IResolvable;
}

export function snapshotSnapshotActionsRestoreToTerraform(struct?: SnapshotSnapshotActionsRestore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    remote: cdktf.booleanToTerraform(struct!.remote),
  }
}


export function snapshotSnapshotActionsRestoreToHclTerraform(struct?: SnapshotSnapshotActionsRestore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote: {
      value: cdktf.booleanToHclTerraform(struct!.remote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapshotSnapshotActionsRestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapshotSnapshotActionsRestore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._remote !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotSnapshotActionsRestore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._remote = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._remote = value.remote;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // remote - computed: true, optional: true, required: false
  private _remote?: boolean | cdktf.IResolvable; 
  public get remote() {
    return this.getBooleanAttribute('remote');
  }
  public set remote(value: boolean | cdktf.IResolvable) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }
}
export interface SnapshotSnapshotActionsSecure {
  /**
  * enable defaults to false. Flag to enable link on the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#enable Snapshot#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * secure defaults to 1 day. The time that the snapshot generation is to be secure for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#secure Snapshot#secure}
  */
  readonly secure?: number;
  /**
  * time_in_hours or Days defaults to Days. False is days, true is hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#time_in_hours Snapshot#time_in_hours}
  */
  readonly timeInHours?: boolean | cdktf.IResolvable;
}

export function snapshotSnapshotActionsSecureToTerraform(struct?: SnapshotSnapshotActionsSecure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    secure: cdktf.numberToTerraform(struct!.secure),
    time_in_hours: cdktf.booleanToTerraform(struct!.timeInHours),
  }
}


export function snapshotSnapshotActionsSecureToHclTerraform(struct?: SnapshotSnapshotActionsSecure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secure: {
      value: cdktf.numberToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_in_hours: {
      value: cdktf.booleanToHclTerraform(struct!.timeInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapshotSnapshotActionsSecureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapshotSnapshotActionsSecure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    if (this._timeInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInHours = this._timeInHours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotSnapshotActionsSecure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._secure = undefined;
      this._timeInHours = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._secure = value.secure;
      this._timeInHours = value.timeInHours;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // secure - computed: true, optional: true, required: false
  private _secure?: number; 
  public get secure() {
    return this.getNumberAttribute('secure');
  }
  public set secure(value: number) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // time_in_hours - computed: true, optional: true, required: false
  private _timeInHours?: boolean | cdktf.IResolvable; 
  public get timeInHours() {
    return this.getBooleanAttribute('time_in_hours');
  }
  public set timeInHours(value: boolean | cdktf.IResolvable) {
    this._timeInHours = value;
  }
  public resetTimeInHours() {
    this._timeInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInHoursInput() {
    return this._timeInHours;
  }
}
export interface SnapshotSnapshotActionsTimeToLive {
  /**
  * enable defaults to false. Flag to enable link on the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#enable Snapshot#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * time_in_hours or Days defaults to Days. False is days, true is hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#time_in_hours Snapshot#time_in_hours}
  */
  readonly timeInHours?: boolean | cdktf.IResolvable;
  /**
  * time_to_live defaults to 1 day. Gives the total time before expiry for these actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#time_to_live Snapshot#time_to_live}
  */
  readonly timeToLive?: number;
}

export function snapshotSnapshotActionsTimeToLiveToTerraform(struct?: SnapshotSnapshotActionsTimeToLive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    time_in_hours: cdktf.booleanToTerraform(struct!.timeInHours),
    time_to_live: cdktf.numberToTerraform(struct!.timeToLive),
  }
}


export function snapshotSnapshotActionsTimeToLiveToHclTerraform(struct?: SnapshotSnapshotActionsTimeToLive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_in_hours: {
      value: cdktf.booleanToHclTerraform(struct!.timeInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_to_live: {
      value: cdktf.numberToHclTerraform(struct!.timeToLive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapshotSnapshotActionsTimeToLiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapshotSnapshotActionsTimeToLive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._timeInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInHours = this._timeInHours;
    }
    if (this._timeToLive !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLive = this._timeToLive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotSnapshotActionsTimeToLive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._timeInHours = undefined;
      this._timeToLive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._timeInHours = value.timeInHours;
      this._timeToLive = value.timeToLive;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // time_in_hours - computed: true, optional: true, required: false
  private _timeInHours?: boolean | cdktf.IResolvable; 
  public get timeInHours() {
    return this.getBooleanAttribute('time_in_hours');
  }
  public set timeInHours(value: boolean | cdktf.IResolvable) {
    this._timeInHours = value;
  }
  public resetTimeInHours() {
    this._timeInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInHoursInput() {
    return this._timeInHours;
  }

  // time_to_live - computed: true, optional: true, required: false
  private _timeToLive?: number; 
  public get timeToLive() {
    return this.getNumberAttribute('time_to_live');
  }
  public set timeToLive(value: number) {
    this._timeToLive = value;
  }
  public resetTimeToLive() {
    this._timeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInput() {
    return this._timeToLive;
  }
}
export interface SnapshotSnapshotActions {
  /**
  * both_sides defaults to false. Performs the operation on both locally and remotely associated snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#both_sides Snapshot#both_sides}
  */
  readonly bothSides?: boolean | cdktf.IResolvable;
  /**
  * Link a snapshot generation. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#link Snapshot#link}
  */
  readonly link?: SnapshotSnapshotActionsLink;
  /**
  * Name of the snapshot. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#name Snapshot#name}
  */
  readonly name: string;
  /**
  * remote defaults to false. If true, The target storage group will not have compression turned on when the SRP is compression capable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#remote Snapshot#remote}
  */
  readonly remote?: boolean | cdktf.IResolvable;
  /**
  * Restore a snapshot generation. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#restore Snapshot#restore}
  */
  readonly restore?: SnapshotSnapshotActionsRestore;
  /**
  * Set the number of days or hours for a snapshot generation to be secure before it auto-terminates (provided it is not linked). (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#secure Snapshot#secure}
  */
  readonly secure?: SnapshotSnapshotActionsSecure;
  /**
  * Set the number of days or hours for a snapshot generation before it auto-terminates (provided it is not linked). (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#time_to_live Snapshot#time_to_live}
  */
  readonly timeToLive?: SnapshotSnapshotActionsTimeToLive;
}

export function snapshotSnapshotActionsToTerraform(struct?: SnapshotSnapshotActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    both_sides: cdktf.booleanToTerraform(struct!.bothSides),
    link: snapshotSnapshotActionsLinkToTerraform(struct!.link),
    name: cdktf.stringToTerraform(struct!.name),
    remote: cdktf.booleanToTerraform(struct!.remote),
    restore: snapshotSnapshotActionsRestoreToTerraform(struct!.restore),
    secure: snapshotSnapshotActionsSecureToTerraform(struct!.secure),
    time_to_live: snapshotSnapshotActionsTimeToLiveToTerraform(struct!.timeToLive),
  }
}


export function snapshotSnapshotActionsToHclTerraform(struct?: SnapshotSnapshotActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    both_sides: {
      value: cdktf.booleanToHclTerraform(struct!.bothSides),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    link: {
      value: snapshotSnapshotActionsLinkToHclTerraform(struct!.link),
      isBlock: true,
      type: "struct",
      storageClassType: "SnapshotSnapshotActionsLink",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote: {
      value: cdktf.booleanToHclTerraform(struct!.remote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restore: {
      value: snapshotSnapshotActionsRestoreToHclTerraform(struct!.restore),
      isBlock: true,
      type: "struct",
      storageClassType: "SnapshotSnapshotActionsRestore",
    },
    secure: {
      value: snapshotSnapshotActionsSecureToHclTerraform(struct!.secure),
      isBlock: true,
      type: "struct",
      storageClassType: "SnapshotSnapshotActionsSecure",
    },
    time_to_live: {
      value: snapshotSnapshotActionsTimeToLiveToHclTerraform(struct!.timeToLive),
      isBlock: true,
      type: "struct",
      storageClassType: "SnapshotSnapshotActionsTimeToLive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapshotSnapshotActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapshotSnapshotActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bothSides !== undefined) {
      hasAnyValues = true;
      internalValueResult.bothSides = this._bothSides;
    }
    if (this._link?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._remote !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote;
    }
    if (this._restore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restore = this._restore?.internalValue;
    }
    if (this._secure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure?.internalValue;
    }
    if (this._timeToLive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLive = this._timeToLive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotSnapshotActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bothSides = undefined;
      this._link.internalValue = undefined;
      this._name = undefined;
      this._remote = undefined;
      this._restore.internalValue = undefined;
      this._secure.internalValue = undefined;
      this._timeToLive.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bothSides = value.bothSides;
      this._link.internalValue = value.link;
      this._name = value.name;
      this._remote = value.remote;
      this._restore.internalValue = value.restore;
      this._secure.internalValue = value.secure;
      this._timeToLive.internalValue = value.timeToLive;
    }
  }

  // both_sides - computed: true, optional: true, required: false
  private _bothSides?: boolean | cdktf.IResolvable; 
  public get bothSides() {
    return this.getBooleanAttribute('both_sides');
  }
  public set bothSides(value: boolean | cdktf.IResolvable) {
    this._bothSides = value;
  }
  public resetBothSides() {
    this._bothSides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bothSidesInput() {
    return this._bothSides;
  }

  // link - computed: false, optional: true, required: false
  private _link = new SnapshotSnapshotActionsLinkOutputReference(this, "link");
  public get link() {
    return this._link;
  }
  public putLink(value: SnapshotSnapshotActionsLink) {
    this._link.internalValue = value;
  }
  public resetLink() {
    this._link.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link.internalValue;
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

  // remote - computed: true, optional: true, required: false
  private _remote?: boolean | cdktf.IResolvable; 
  public get remote() {
    return this.getBooleanAttribute('remote');
  }
  public set remote(value: boolean | cdktf.IResolvable) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }

  // restore - computed: false, optional: true, required: false
  private _restore = new SnapshotSnapshotActionsRestoreOutputReference(this, "restore");
  public get restore() {
    return this._restore;
  }
  public putRestore(value: SnapshotSnapshotActionsRestore) {
    this._restore.internalValue = value;
  }
  public resetRestore() {
    this._restore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore.internalValue;
  }

  // secure - computed: false, optional: true, required: false
  private _secure = new SnapshotSnapshotActionsSecureOutputReference(this, "secure");
  public get secure() {
    return this._secure;
  }
  public putSecure(value: SnapshotSnapshotActionsSecure) {
    this._secure.internalValue = value;
  }
  public resetSecure() {
    this._secure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure.internalValue;
  }

  // time_to_live - computed: false, optional: true, required: false
  private _timeToLive = new SnapshotSnapshotActionsTimeToLiveOutputReference(this, "time_to_live");
  public get timeToLive() {
    return this._timeToLive;
  }
  public putTimeToLive(value: SnapshotSnapshotActionsTimeToLive) {
    this._timeToLive.internalValue = value;
  }
  public resetTimeToLive() {
    this._timeToLive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInput() {
    return this._timeToLive.internalValue;
  }
}
export interface SnapshotStorageGroup {
  /**
  * Name of the storage group you would like to take a snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#name Snapshot#name}
  */
  readonly name: string;
}

export function snapshotStorageGroupToTerraform(struct?: SnapshotStorageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function snapshotStorageGroupToHclTerraform(struct?: SnapshotStorageGroup | cdktf.IResolvable): any {
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

export class SnapshotStorageGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapshotStorageGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SnapshotStorageGroup | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot powermax_snapshot}
*/
export class Snapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powermax_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snapshot to import
  * @param importFromId The id of the existing Snapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powermax_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshot powermax_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: SnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'powermax_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'powermax',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._generation = config.generation;
    this._linkedStorageGroup.internalValue = config.linkedStorageGroup;
    this._nonSharedTracks = config.nonSharedTracks;
    this._numSourceVolumes = config.numSourceVolumes;
    this._persistent = config.persistent;
    this._secureExpiryDate = config.secureExpiryDate;
    this._snapid = config.snapid;
    this._timeToLiveExpiryDate = config.timeToLiveExpiryDate;
    this._tracks = config.tracks;
    this._snapshotActions.internalValue = config.snapshotActions;
    this._storageGroup.internalValue = config.storageGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // generation - computed: true, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // linked - computed: true, optional: false, required: false
  public get linked() {
    return this.getBooleanAttribute('linked');
  }

  // linked_storage_group - computed: true, optional: true, required: false
  private _linkedStorageGroup = new SnapshotLinkedStorageGroupList(this, "linked_storage_group", false);
  public get linkedStorageGroup() {
    return this._linkedStorageGroup;
  }
  public putLinkedStorageGroup(value: SnapshotLinkedStorageGroup[] | cdktf.IResolvable) {
    this._linkedStorageGroup.internalValue = value;
  }
  public resetLinkedStorageGroup() {
    this._linkedStorageGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedStorageGroupInput() {
    return this._linkedStorageGroup.internalValue;
  }

  // linked_storage_group_names - computed: true, optional: false, required: false
  public get linkedStorageGroupNames() {
    return this.getListAttribute('linked_storage_group_names');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // non_shared_tracks - computed: true, optional: true, required: false
  private _nonSharedTracks?: number; 
  public get nonSharedTracks() {
    return this.getNumberAttribute('non_shared_tracks');
  }
  public set nonSharedTracks(value: number) {
    this._nonSharedTracks = value;
  }
  public resetNonSharedTracks() {
    this._nonSharedTracks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSharedTracksInput() {
    return this._nonSharedTracks;
  }

  // num_source_volumes - computed: true, optional: true, required: false
  private _numSourceVolumes?: number; 
  public get numSourceVolumes() {
    return this.getNumberAttribute('num_source_volumes');
  }
  public set numSourceVolumes(value: number) {
    this._numSourceVolumes = value;
  }
  public resetNumSourceVolumes() {
    this._numSourceVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSourceVolumesInput() {
    return this._numSourceVolumes;
  }

  // num_storage_group_volumes - computed: true, optional: false, required: false
  public get numStorageGroupVolumes() {
    return this.getNumberAttribute('num_storage_group_volumes');
  }

  // persistent - computed: true, optional: true, required: false
  private _persistent?: boolean | cdktf.IResolvable; 
  public get persistent() {
    return this.getBooleanAttribute('persistent');
  }
  public set persistent(value: boolean | cdktf.IResolvable) {
    this._persistent = value;
  }
  public resetPersistent() {
    this._persistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentInput() {
    return this._persistent;
  }

  // restored - computed: true, optional: false, required: false
  public get restored() {
    return this.getBooleanAttribute('restored');
  }

  // secure_expiry_date - computed: true, optional: true, required: false
  private _secureExpiryDate?: string; 
  public get secureExpiryDate() {
    return this.getStringAttribute('secure_expiry_date');
  }
  public set secureExpiryDate(value: string) {
    this._secureExpiryDate = value;
  }
  public resetSecureExpiryDate() {
    this._secureExpiryDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureExpiryDateInput() {
    return this._secureExpiryDate;
  }

  // snapid - computed: true, optional: true, required: false
  private _snapid?: number; 
  public get snapid() {
    return this.getNumberAttribute('snapid');
  }
  public set snapid(value: number) {
    this._snapid = value;
  }
  public resetSnapid() {
    this._snapid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapidInput() {
    return this._snapid;
  }

  // source_volume - computed: true, optional: false, required: false
  private _sourceVolume = new SnapshotSourceVolumeList(this, "source_volume", false);
  public get sourceVolume() {
    return this._sourceVolume;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getListAttribute('state');
  }

  // time_to_live_expiry_date - computed: true, optional: true, required: false
  private _timeToLiveExpiryDate?: string; 
  public get timeToLiveExpiryDate() {
    return this.getStringAttribute('time_to_live_expiry_date');
  }
  public set timeToLiveExpiryDate(value: string) {
    this._timeToLiveExpiryDate = value;
  }
  public resetTimeToLiveExpiryDate() {
    this._timeToLiveExpiryDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveExpiryDateInput() {
    return this._timeToLiveExpiryDate;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // timestamp_utc - computed: true, optional: false, required: false
  public get timestampUtc() {
    return this.getStringAttribute('timestamp_utc');
  }

  // tracks - computed: true, optional: true, required: false
  private _tracks?: number; 
  public get tracks() {
    return this.getNumberAttribute('tracks');
  }
  public set tracks(value: number) {
    this._tracks = value;
  }
  public resetTracks() {
    this._tracks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracksInput() {
    return this._tracks;
  }

  // snapshot_actions - computed: false, optional: true, required: false
  private _snapshotActions = new SnapshotSnapshotActionsOutputReference(this, "snapshot_actions");
  public get snapshotActions() {
    return this._snapshotActions;
  }
  public putSnapshotActions(value: SnapshotSnapshotActions) {
    this._snapshotActions.internalValue = value;
  }
  public resetSnapshotActions() {
    this._snapshotActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotActionsInput() {
    return this._snapshotActions.internalValue;
  }

  // storage_group - computed: false, optional: false, required: true
  private _storageGroup = new SnapshotStorageGroupOutputReference(this, "storage_group");
  public get storageGroup() {
    return this._storageGroup;
  }
  public putStorageGroup(value: SnapshotStorageGroup) {
    this._storageGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageGroupInput() {
    return this._storageGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      generation: cdktf.numberToTerraform(this._generation),
      linked_storage_group: cdktf.listMapper(snapshotLinkedStorageGroupToTerraform, false)(this._linkedStorageGroup.internalValue),
      non_shared_tracks: cdktf.numberToTerraform(this._nonSharedTracks),
      num_source_volumes: cdktf.numberToTerraform(this._numSourceVolumes),
      persistent: cdktf.booleanToTerraform(this._persistent),
      secure_expiry_date: cdktf.stringToTerraform(this._secureExpiryDate),
      snapid: cdktf.numberToTerraform(this._snapid),
      time_to_live_expiry_date: cdktf.stringToTerraform(this._timeToLiveExpiryDate),
      tracks: cdktf.numberToTerraform(this._tracks),
      snapshot_actions: snapshotSnapshotActionsToTerraform(this._snapshotActions.internalValue),
      storage_group: snapshotStorageGroupToTerraform(this._storageGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      generation: {
        value: cdktf.numberToHclTerraform(this._generation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      linked_storage_group: {
        value: cdktf.listMapperHcl(snapshotLinkedStorageGroupToHclTerraform, false)(this._linkedStorageGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnapshotLinkedStorageGroupList",
      },
      non_shared_tracks: {
        value: cdktf.numberToHclTerraform(this._nonSharedTracks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_source_volumes: {
        value: cdktf.numberToHclTerraform(this._numSourceVolumes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistent: {
        value: cdktf.booleanToHclTerraform(this._persistent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secure_expiry_date: {
        value: cdktf.stringToHclTerraform(this._secureExpiryDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapid: {
        value: cdktf.numberToHclTerraform(this._snapid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_to_live_expiry_date: {
        value: cdktf.stringToHclTerraform(this._timeToLiveExpiryDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracks: {
        value: cdktf.numberToHclTerraform(this._tracks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_actions: {
        value: snapshotSnapshotActionsToHclTerraform(this._snapshotActions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnapshotSnapshotActions",
      },
      storage_group: {
        value: snapshotStorageGroupToHclTerraform(this._storageGroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnapshotStorageGroup",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
