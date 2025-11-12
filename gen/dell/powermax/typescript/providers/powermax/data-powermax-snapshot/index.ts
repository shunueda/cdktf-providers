// https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowermaxSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot#timeouts DataPowermaxSnapshot#timeouts}
  */
  readonly timeouts?: DataPowermaxSnapshotTimeouts;
  /**
  * storage_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot#storage_group DataPowermaxSnapshot#storage_group}
  */
  readonly storageGroup: DataPowermaxSnapshotStorageGroup;
}
export interface DataPowermaxSnapshotSnapshotsLinkedStorageGroup {
  /**
  * When the snapshot link is being defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot#background_define_in_progress DataPowermaxSnapshot#background_define_in_progress}
  */
  readonly backgroundDefineInProgress?: boolean | cdktf.IResolvable;
  /**
  * When the snapshot link has been fully defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot#defined DataPowermaxSnapshot#defined}
  */
  readonly defined?: boolean | cdktf.IResolvable;
}

export function dataPowermaxSnapshotSnapshotsLinkedStorageGroupToTerraform(struct?: DataPowermaxSnapshotSnapshotsLinkedStorageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_define_in_progress: cdktf.booleanToTerraform(struct!.backgroundDefineInProgress),
    defined: cdktf.booleanToTerraform(struct!.defined),
  }
}


export function dataPowermaxSnapshotSnapshotsLinkedStorageGroupToHclTerraform(struct?: DataPowermaxSnapshotSnapshotsLinkedStorageGroup | cdktf.IResolvable): any {
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

export class DataPowermaxSnapshotSnapshotsLinkedStorageGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowermaxSnapshotSnapshotsLinkedStorageGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowermaxSnapshotSnapshotsLinkedStorageGroup | cdktf.IResolvable | undefined) {
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

export class DataPowermaxSnapshotSnapshotsLinkedStorageGroupList extends cdktf.ComplexList {
  public internalValue? : DataPowermaxSnapshotSnapshotsLinkedStorageGroup[] | cdktf.IResolvable

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
  public get(index: number): DataPowermaxSnapshotSnapshotsLinkedStorageGroupOutputReference {
    return new DataPowermaxSnapshotSnapshotsLinkedStorageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowermaxSnapshotSnapshotsSourceVolume {
}

export function dataPowermaxSnapshotSnapshotsSourceVolumeToTerraform(struct?: DataPowermaxSnapshotSnapshotsSourceVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowermaxSnapshotSnapshotsSourceVolumeToHclTerraform(struct?: DataPowermaxSnapshotSnapshotsSourceVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowermaxSnapshotSnapshotsSourceVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowermaxSnapshotSnapshotsSourceVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxSnapshotSnapshotsSourceVolume | undefined) {
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

export class DataPowermaxSnapshotSnapshotsSourceVolumeList extends cdktf.ComplexList {

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
  public get(index: number): DataPowermaxSnapshotSnapshotsSourceVolumeOutputReference {
    return new DataPowermaxSnapshotSnapshotsSourceVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowermaxSnapshotSnapshots {
  /**
  * Number of generation for the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot#generation DataPowermaxSnapshot#generation}
  */
  readonly generation?: number;
  /**
  * Linked storage group and volume information. Only populated if the generation is linked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot#linked_storage_group DataPowermaxSnapshot#linked_storage_group}
  */
  readonly linkedStorageGroup?: DataPowermaxSnapshotSnapshotsLinkedStorageGroup[] | cdktf.IResolvable;
  /**
  * The number of tracks uniquely allocated for this snapshots delta. This is an approximate indication of the number of tracks that will be returned to the SRP if this snapshot is terminated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot#non_shared_tracks DataPowermaxSnapshot#non_shared_tracks}
  */
  readonly nonSharedTracks?: number;
  /**
  * The number of source volumes in the snapshot generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot#num_source_volumes DataPowermaxSnapshot#num_source_volumes}
  */
  readonly numSourceVolumes?: number;
  /**
  * Set if this snapshot is persistent.  Only applicable to policy based snapshots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot#persistent DataPowermaxSnapshot#persistent}
  */
  readonly persistent?: boolean | cdktf.IResolvable;
  /**
  * When the snapshot will expire once it is not linked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot#secure_expiry_date DataPowermaxSnapshot#secure_expiry_date}
  */
  readonly secureExpiryDate?: string;
  /**
  * Unique Snap ID for Snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot#snapid DataPowermaxSnapshot#snapid}
  */
  readonly snapid?: number;
  /**
  * When the snapshot will expire once it is not linked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot#time_to_live_expiry_date DataPowermaxSnapshot#time_to_live_expiry_date}
  */
  readonly timeToLiveExpiryDate?: string;
  /**
  * The number of source tracks that have been overwritten by the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot#tracks DataPowermaxSnapshot#tracks}
  */
  readonly tracks?: number;
}

export function dataPowermaxSnapshotSnapshotsToTerraform(struct?: DataPowermaxSnapshotSnapshots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation: cdktf.numberToTerraform(struct!.generation),
    linked_storage_group: cdktf.listMapper(dataPowermaxSnapshotSnapshotsLinkedStorageGroupToTerraform, false)(struct!.linkedStorageGroup),
    non_shared_tracks: cdktf.numberToTerraform(struct!.nonSharedTracks),
    num_source_volumes: cdktf.numberToTerraform(struct!.numSourceVolumes),
    persistent: cdktf.booleanToTerraform(struct!.persistent),
    secure_expiry_date: cdktf.stringToTerraform(struct!.secureExpiryDate),
    snapid: cdktf.numberToTerraform(struct!.snapid),
    time_to_live_expiry_date: cdktf.stringToTerraform(struct!.timeToLiveExpiryDate),
    tracks: cdktf.numberToTerraform(struct!.tracks),
  }
}


export function dataPowermaxSnapshotSnapshotsToHclTerraform(struct?: DataPowermaxSnapshotSnapshots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation: {
      value: cdktf.numberToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    linked_storage_group: {
      value: cdktf.listMapperHcl(dataPowermaxSnapshotSnapshotsLinkedStorageGroupToHclTerraform, false)(struct!.linkedStorageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowermaxSnapshotSnapshotsLinkedStorageGroupList",
    },
    non_shared_tracks: {
      value: cdktf.numberToHclTerraform(struct!.nonSharedTracks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_source_volumes: {
      value: cdktf.numberToHclTerraform(struct!.numSourceVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persistent: {
      value: cdktf.booleanToHclTerraform(struct!.persistent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secure_expiry_date: {
      value: cdktf.stringToHclTerraform(struct!.secureExpiryDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapid: {
      value: cdktf.numberToHclTerraform(struct!.snapid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_to_live_expiry_date: {
      value: cdktf.stringToHclTerraform(struct!.timeToLiveExpiryDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracks: {
      value: cdktf.numberToHclTerraform(struct!.tracks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowermaxSnapshotSnapshotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowermaxSnapshotSnapshots | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._linkedStorageGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedStorageGroup = this._linkedStorageGroup?.internalValue;
    }
    if (this._nonSharedTracks !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonSharedTracks = this._nonSharedTracks;
    }
    if (this._numSourceVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSourceVolumes = this._numSourceVolumes;
    }
    if (this._persistent !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistent = this._persistent;
    }
    if (this._secureExpiryDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureExpiryDate = this._secureExpiryDate;
    }
    if (this._snapid !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapid = this._snapid;
    }
    if (this._timeToLiveExpiryDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLiveExpiryDate = this._timeToLiveExpiryDate;
    }
    if (this._tracks !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracks = this._tracks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxSnapshotSnapshots | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generation = undefined;
      this._linkedStorageGroup.internalValue = undefined;
      this._nonSharedTracks = undefined;
      this._numSourceVolumes = undefined;
      this._persistent = undefined;
      this._secureExpiryDate = undefined;
      this._snapid = undefined;
      this._timeToLiveExpiryDate = undefined;
      this._tracks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generation = value.generation;
      this._linkedStorageGroup.internalValue = value.linkedStorageGroup;
      this._nonSharedTracks = value.nonSharedTracks;
      this._numSourceVolumes = value.numSourceVolumes;
      this._persistent = value.persistent;
      this._secureExpiryDate = value.secureExpiryDate;
      this._snapid = value.snapid;
      this._timeToLiveExpiryDate = value.timeToLiveExpiryDate;
      this._tracks = value.tracks;
    }
  }

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

  // linked - computed: true, optional: false, required: false
  public get linked() {
    return this.getBooleanAttribute('linked');
  }

  // linked_storage_group - computed: true, optional: true, required: false
  private _linkedStorageGroup = new DataPowermaxSnapshotSnapshotsLinkedStorageGroupList(this, "linked_storage_group", false);
  public get linkedStorageGroup() {
    return this._linkedStorageGroup;
  }
  public putLinkedStorageGroup(value: DataPowermaxSnapshotSnapshotsLinkedStorageGroup[] | cdktf.IResolvable) {
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
  private _sourceVolume = new DataPowermaxSnapshotSnapshotsSourceVolumeList(this, "source_volume", false);
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
}

export class DataPowermaxSnapshotSnapshotsList extends cdktf.ComplexList {
  public internalValue? : DataPowermaxSnapshotSnapshots[] | cdktf.IResolvable

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
  public get(index: number): DataPowermaxSnapshotSnapshotsOutputReference {
    return new DataPowermaxSnapshotSnapshotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowermaxSnapshotTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot#read DataPowermaxSnapshot#read}
  */
  readonly read?: string;
}

export function dataPowermaxSnapshotTimeoutsToTerraform(struct?: DataPowermaxSnapshotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataPowermaxSnapshotTimeoutsToHclTerraform(struct?: DataPowermaxSnapshotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowermaxSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxSnapshotTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxSnapshotTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}
export interface DataPowermaxSnapshotStorageGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot#name DataPowermaxSnapshot#name}
  */
  readonly name: string;
}

export function dataPowermaxSnapshotStorageGroupToTerraform(struct?: DataPowermaxSnapshotStorageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPowermaxSnapshotStorageGroupToHclTerraform(struct?: DataPowermaxSnapshotStorageGroup | cdktf.IResolvable): any {
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

export class DataPowermaxSnapshotStorageGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxSnapshotStorageGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowermaxSnapshotStorageGroup | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot powermax_snapshot}
*/
export class DataPowermaxSnapshot extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powermax_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowermaxSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowermaxSnapshot to import
  * @param importFromId The id of the existing DataPowermaxSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowermaxSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powermax_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/snapshot powermax_snapshot} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowermaxSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: DataPowermaxSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'powermax_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'powermax',
        providerVersion: '1.0.3',
        providerVersionConstraint: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._timeouts.internalValue = config.timeouts;
    this._storageGroup.internalValue = config.storageGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // snapshots - computed: true, optional: false, required: false
  private _snapshots = new DataPowermaxSnapshotSnapshotsList(this, "snapshots", false);
  public get snapshots() {
    return this._snapshots;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataPowermaxSnapshotTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataPowermaxSnapshotTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // storage_group - computed: false, optional: false, required: true
  private _storageGroup = new DataPowermaxSnapshotStorageGroupOutputReference(this, "storage_group");
  public get storageGroup() {
    return this._storageGroup;
  }
  public putStorageGroup(value: DataPowermaxSnapshotStorageGroup) {
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
      timeouts: dataPowermaxSnapshotTimeoutsToTerraform(this._timeouts.internalValue),
      storage_group: dataPowermaxSnapshotStorageGroupToTerraform(this._storageGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      timeouts: {
        value: dataPowermaxSnapshotTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowermaxSnapshotTimeouts",
      },
      storage_group: {
        value: dataPowermaxSnapshotStorageGroupToHclTerraform(this._storageGroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowermaxSnapshotStorageGroup",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
