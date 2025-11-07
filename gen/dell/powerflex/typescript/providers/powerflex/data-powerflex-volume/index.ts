// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#filter DataPowerflexVolume#filter}
  */
  readonly filter?: DataPowerflexVolumeFilter;
}
export interface DataPowerflexVolumeVolumesLinks {
}

export function dataPowerflexVolumeVolumesLinksToTerraform(struct?: DataPowerflexVolumeVolumesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexVolumeVolumesLinksToHclTerraform(struct?: DataPowerflexVolumeVolumesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexVolumeVolumesLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexVolumeVolumesLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexVolumeVolumesLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataPowerflexVolumeVolumesLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexVolumeVolumesLinksOutputReference {
    return new DataPowerflexVolumeVolumesLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexVolumeVolumesMappedSdcInfo {
}

export function dataPowerflexVolumeVolumesMappedSdcInfoToTerraform(struct?: DataPowerflexVolumeVolumesMappedSdcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexVolumeVolumesMappedSdcInfoToHclTerraform(struct?: DataPowerflexVolumeVolumesMappedSdcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexVolumeVolumesMappedSdcInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexVolumeVolumesMappedSdcInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexVolumeVolumesMappedSdcInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_mode - computed: true, optional: false, required: false
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }

  // is_direct_buffer_mapping - computed: true, optional: false, required: false
  public get isDirectBufferMapping() {
    return this.getBooleanAttribute('is_direct_buffer_mapping');
  }

  // limit_bw_in_mbps - computed: true, optional: false, required: false
  public get limitBwInMbps() {
    return this.getNumberAttribute('limit_bw_in_mbps');
  }

  // limit_iops - computed: true, optional: false, required: false
  public get limitIops() {
    return this.getNumberAttribute('limit_iops');
  }

  // sdc_id - computed: true, optional: false, required: false
  public get sdcId() {
    return this.getStringAttribute('sdc_id');
  }

  // sdc_ip - computed: true, optional: false, required: false
  public get sdcIp() {
    return this.getStringAttribute('sdc_ip');
  }

  // sdc_name - computed: true, optional: false, required: false
  public get sdcName() {
    return this.getStringAttribute('sdc_name');
  }
}

export class DataPowerflexVolumeVolumesMappedSdcInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexVolumeVolumesMappedSdcInfoOutputReference {
    return new DataPowerflexVolumeVolumesMappedSdcInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexVolumeVolumes {
}

export function dataPowerflexVolumeVolumesToTerraform(struct?: DataPowerflexVolumeVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexVolumeVolumesToHclTerraform(struct?: DataPowerflexVolumeVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexVolumeVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexVolumeVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexVolumeVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_mode_limit - computed: true, optional: false, required: false
  public get accessModeLimit() {
    return this.getStringAttribute('access_mode_limit');
  }

  // ancestor_volume_id - computed: true, optional: false, required: false
  public get ancestorVolumeId() {
    return this.getStringAttribute('ancestor_volume_id');
  }

  // compression_method - computed: true, optional: false, required: false
  public get compressionMethod() {
    return this.getStringAttribute('compression_method');
  }

  // consistency_group_id - computed: true, optional: false, required: false
  public get consistencyGroupId() {
    return this.getStringAttribute('consistency_group_id');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // data_layout - computed: true, optional: false, required: false
  public get dataLayout() {
    return this.getStringAttribute('data_layout');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataPowerflexVolumeVolumesLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // locked_auto_snapshot - computed: true, optional: false, required: false
  public get lockedAutoSnapshot() {
    return this.getBooleanAttribute('locked_auto_snapshot');
  }

  // locked_auto_snapshot_marked_for_removal - computed: true, optional: false, required: false
  public get lockedAutoSnapshotMarkedForRemoval() {
    return this.getBooleanAttribute('locked_auto_snapshot_marked_for_removal');
  }

  // managed_by - computed: true, optional: false, required: false
  public get managedBy() {
    return this.getStringAttribute('managed_by');
  }

  // mapped_sdc_info - computed: true, optional: false, required: false
  private _mappedSdcInfo = new DataPowerflexVolumeVolumesMappedSdcInfoList(this, "mapped_sdc_info", false);
  public get mappedSdcInfo() {
    return this._mappedSdcInfo;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // not_genuine_snapshot - computed: true, optional: false, required: false
  public get notGenuineSnapshot() {
    return this.getBooleanAttribute('not_genuine_snapshot');
  }

  // original_expiry_time - computed: true, optional: false, required: false
  public get originalExpiryTime() {
    return this.getNumberAttribute('original_expiry_time');
  }

  // replication_journal_volume - computed: true, optional: false, required: false
  public get replicationJournalVolume() {
    return this.getBooleanAttribute('replication_journal_volume');
  }

  // replication_time_stamp - computed: true, optional: false, required: false
  public get replicationTimeStamp() {
    return this.getNumberAttribute('replication_time_stamp');
  }

  // secure_snapshot_exp_time - computed: true, optional: false, required: false
  public get secureSnapshotExpTime() {
    return this.getNumberAttribute('secure_snapshot_exp_time');
  }

  // size_in_kb - computed: true, optional: false, required: false
  public get sizeInKb() {
    return this.getNumberAttribute('size_in_kb');
  }

  // storage_pool_id - computed: true, optional: false, required: false
  public get storagePoolId() {
    return this.getStringAttribute('storage_pool_id');
  }

  // time_stamp_is_accurate - computed: true, optional: false, required: false
  public get timeStampIsAccurate() {
    return this.getBooleanAttribute('time_stamp_is_accurate');
  }

  // use_rm_cache - computed: true, optional: false, required: false
  public get useRmCache() {
    return this.getBooleanAttribute('use_rm_cache');
  }

  // volume_replication_state - computed: true, optional: false, required: false
  public get volumeReplicationState() {
    return this.getStringAttribute('volume_replication_state');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }

  // vtree_id - computed: true, optional: false, required: false
  public get vtreeId() {
    return this.getStringAttribute('vtree_id');
  }
}

export class DataPowerflexVolumeVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexVolumeVolumesOutputReference {
    return new DataPowerflexVolumeVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexVolumeFilter {
  /**
  * List of access_mode_limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#access_mode_limit DataPowerflexVolume#access_mode_limit}
  */
  readonly accessModeLimit?: string[];
  /**
  * List of ancestor_volume_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#ancestor_volume_id DataPowerflexVolume#ancestor_volume_id}
  */
  readonly ancestorVolumeId?: string[];
  /**
  * List of compression_method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#compression_method DataPowerflexVolume#compression_method}
  */
  readonly compressionMethod?: string[];
  /**
  * List of consistency_group_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#consistency_group_id DataPowerflexVolume#consistency_group_id}
  */
  readonly consistencyGroupId?: string[];
  /**
  * List of creation_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#creation_time DataPowerflexVolume#creation_time}
  */
  readonly creationTime?: number[];
  /**
  * List of data_layout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#data_layout DataPowerflexVolume#data_layout}
  */
  readonly dataLayout?: string[];
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#id DataPowerflexVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * Value for locked_auto_snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#locked_auto_snapshot DataPowerflexVolume#locked_auto_snapshot}
  */
  readonly lockedAutoSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Value for locked_auto_snapshot_marked_for_removal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#locked_auto_snapshot_marked_for_removal DataPowerflexVolume#locked_auto_snapshot_marked_for_removal}
  */
  readonly lockedAutoSnapshotMarkedForRemoval?: boolean | cdktf.IResolvable;
  /**
  * List of managed_by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#managed_by DataPowerflexVolume#managed_by}
  */
  readonly managedBy?: string[];
  /**
  * List of name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#name DataPowerflexVolume#name}
  */
  readonly name?: string[];
  /**
  * Value for not_genuine_snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#not_genuine_snapshot DataPowerflexVolume#not_genuine_snapshot}
  */
  readonly notGenuineSnapshot?: boolean | cdktf.IResolvable;
  /**
  * List of original_expiry_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#original_expiry_time DataPowerflexVolume#original_expiry_time}
  */
  readonly originalExpiryTime?: number[];
  /**
  * Value for replication_journal_volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#replication_journal_volume DataPowerflexVolume#replication_journal_volume}
  */
  readonly replicationJournalVolume?: boolean | cdktf.IResolvable;
  /**
  * List of replication_time_stamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#replication_time_stamp DataPowerflexVolume#replication_time_stamp}
  */
  readonly replicationTimeStamp?: number[];
  /**
  * List of secure_snapshot_exp_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#secure_snapshot_exp_time DataPowerflexVolume#secure_snapshot_exp_time}
  */
  readonly secureSnapshotExpTime?: number[];
  /**
  * List of size_in_kb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#size_in_kb DataPowerflexVolume#size_in_kb}
  */
  readonly sizeInKb?: number[];
  /**
  * List of storage_pool_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#storage_pool_id DataPowerflexVolume#storage_pool_id}
  */
  readonly storagePoolId?: string[];
  /**
  * Value for time_stamp_is_accurate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#time_stamp_is_accurate DataPowerflexVolume#time_stamp_is_accurate}
  */
  readonly timeStampIsAccurate?: boolean | cdktf.IResolvable;
  /**
  * Value for use_rm_cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#use_rm_cache DataPowerflexVolume#use_rm_cache}
  */
  readonly useRmCache?: boolean | cdktf.IResolvable;
  /**
  * List of volume_replication_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#volume_replication_state DataPowerflexVolume#volume_replication_state}
  */
  readonly volumeReplicationState?: string[];
  /**
  * List of volume_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#volume_type DataPowerflexVolume#volume_type}
  */
  readonly volumeType?: string[];
  /**
  * List of vtree_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#vtree_id DataPowerflexVolume#vtree_id}
  */
  readonly vtreeId?: string[];
}

export function dataPowerflexVolumeFilterToTerraform(struct?: DataPowerflexVolumeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode_limit: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModeLimit),
    ancestor_volume_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ancestorVolumeId),
    compression_method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.compressionMethod),
    consistency_group_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.consistencyGroupId),
    creation_time: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.creationTime),
    data_layout: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataLayout),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    locked_auto_snapshot: cdktf.booleanToTerraform(struct!.lockedAutoSnapshot),
    locked_auto_snapshot_marked_for_removal: cdktf.booleanToTerraform(struct!.lockedAutoSnapshotMarkedForRemoval),
    managed_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedBy),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    not_genuine_snapshot: cdktf.booleanToTerraform(struct!.notGenuineSnapshot),
    original_expiry_time: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.originalExpiryTime),
    replication_journal_volume: cdktf.booleanToTerraform(struct!.replicationJournalVolume),
    replication_time_stamp: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.replicationTimeStamp),
    secure_snapshot_exp_time: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.secureSnapshotExpTime),
    size_in_kb: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.sizeInKb),
    storage_pool_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storagePoolId),
    time_stamp_is_accurate: cdktf.booleanToTerraform(struct!.timeStampIsAccurate),
    use_rm_cache: cdktf.booleanToTerraform(struct!.useRmCache),
    volume_replication_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumeReplicationState),
    volume_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumeType),
    vtree_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vtreeId),
  }
}


export function dataPowerflexVolumeFilterToHclTerraform(struct?: DataPowerflexVolumeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode_limit: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModeLimit),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ancestor_volume_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ancestorVolumeId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    compression_method: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.compressionMethod),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    consistency_group_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.consistencyGroupId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    creation_time: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.creationTime),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    data_layout: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataLayout),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    locked_auto_snapshot: {
      value: cdktf.booleanToHclTerraform(struct!.lockedAutoSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    locked_auto_snapshot_marked_for_removal: {
      value: cdktf.booleanToHclTerraform(struct!.lockedAutoSnapshotMarkedForRemoval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    managed_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedBy),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    not_genuine_snapshot: {
      value: cdktf.booleanToHclTerraform(struct!.notGenuineSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    original_expiry_time: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.originalExpiryTime),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    replication_journal_volume: {
      value: cdktf.booleanToHclTerraform(struct!.replicationJournalVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replication_time_stamp: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.replicationTimeStamp),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    secure_snapshot_exp_time: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.secureSnapshotExpTime),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    size_in_kb: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.sizeInKb),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    storage_pool_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storagePoolId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    time_stamp_is_accurate: {
      value: cdktf.booleanToHclTerraform(struct!.timeStampIsAccurate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_rm_cache: {
      value: cdktf.booleanToHclTerraform(struct!.useRmCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_replication_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumeReplicationState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    volume_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumeType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vtree_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vtreeId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexVolumeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexVolumeFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModeLimit = this._accessModeLimit;
    }
    if (this._ancestorVolumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestorVolumeId = this._ancestorVolumeId;
    }
    if (this._compressionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMethod = this._compressionMethod;
    }
    if (this._consistencyGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistencyGroupId = this._consistencyGroupId;
    }
    if (this._creationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationTime = this._creationTime;
    }
    if (this._dataLayout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLayout = this._dataLayout;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._lockedAutoSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockedAutoSnapshot = this._lockedAutoSnapshot;
    }
    if (this._lockedAutoSnapshotMarkedForRemoval !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockedAutoSnapshotMarkedForRemoval = this._lockedAutoSnapshotMarkedForRemoval;
    }
    if (this._managedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedBy = this._managedBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notGenuineSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.notGenuineSnapshot = this._notGenuineSnapshot;
    }
    if (this._originalExpiryTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalExpiryTime = this._originalExpiryTime;
    }
    if (this._replicationJournalVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationJournalVolume = this._replicationJournalVolume;
    }
    if (this._replicationTimeStamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationTimeStamp = this._replicationTimeStamp;
    }
    if (this._secureSnapshotExpTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureSnapshotExpTime = this._secureSnapshotExpTime;
    }
    if (this._sizeInKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInKb = this._sizeInKb;
    }
    if (this._storagePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePoolId = this._storagePoolId;
    }
    if (this._timeStampIsAccurate !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStampIsAccurate = this._timeStampIsAccurate;
    }
    if (this._useRmCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRmCache = this._useRmCache;
    }
    if (this._volumeReplicationState !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeReplicationState = this._volumeReplicationState;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    if (this._vtreeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtreeId = this._vtreeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexVolumeFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModeLimit = undefined;
      this._ancestorVolumeId = undefined;
      this._compressionMethod = undefined;
      this._consistencyGroupId = undefined;
      this._creationTime = undefined;
      this._dataLayout = undefined;
      this._id = undefined;
      this._lockedAutoSnapshot = undefined;
      this._lockedAutoSnapshotMarkedForRemoval = undefined;
      this._managedBy = undefined;
      this._name = undefined;
      this._notGenuineSnapshot = undefined;
      this._originalExpiryTime = undefined;
      this._replicationJournalVolume = undefined;
      this._replicationTimeStamp = undefined;
      this._secureSnapshotExpTime = undefined;
      this._sizeInKb = undefined;
      this._storagePoolId = undefined;
      this._timeStampIsAccurate = undefined;
      this._useRmCache = undefined;
      this._volumeReplicationState = undefined;
      this._volumeType = undefined;
      this._vtreeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModeLimit = value.accessModeLimit;
      this._ancestorVolumeId = value.ancestorVolumeId;
      this._compressionMethod = value.compressionMethod;
      this._consistencyGroupId = value.consistencyGroupId;
      this._creationTime = value.creationTime;
      this._dataLayout = value.dataLayout;
      this._id = value.id;
      this._lockedAutoSnapshot = value.lockedAutoSnapshot;
      this._lockedAutoSnapshotMarkedForRemoval = value.lockedAutoSnapshotMarkedForRemoval;
      this._managedBy = value.managedBy;
      this._name = value.name;
      this._notGenuineSnapshot = value.notGenuineSnapshot;
      this._originalExpiryTime = value.originalExpiryTime;
      this._replicationJournalVolume = value.replicationJournalVolume;
      this._replicationTimeStamp = value.replicationTimeStamp;
      this._secureSnapshotExpTime = value.secureSnapshotExpTime;
      this._sizeInKb = value.sizeInKb;
      this._storagePoolId = value.storagePoolId;
      this._timeStampIsAccurate = value.timeStampIsAccurate;
      this._useRmCache = value.useRmCache;
      this._volumeReplicationState = value.volumeReplicationState;
      this._volumeType = value.volumeType;
      this._vtreeId = value.vtreeId;
    }
  }

  // access_mode_limit - computed: false, optional: true, required: false
  private _accessModeLimit?: string[]; 
  public get accessModeLimit() {
    return cdktf.Fn.tolist(this.getListAttribute('access_mode_limit'));
  }
  public set accessModeLimit(value: string[]) {
    this._accessModeLimit = value;
  }
  public resetAccessModeLimit() {
    this._accessModeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeLimitInput() {
    return this._accessModeLimit;
  }

  // ancestor_volume_id - computed: false, optional: true, required: false
  private _ancestorVolumeId?: string[]; 
  public get ancestorVolumeId() {
    return cdktf.Fn.tolist(this.getListAttribute('ancestor_volume_id'));
  }
  public set ancestorVolumeId(value: string[]) {
    this._ancestorVolumeId = value;
  }
  public resetAncestorVolumeId() {
    this._ancestorVolumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorVolumeIdInput() {
    return this._ancestorVolumeId;
  }

  // compression_method - computed: false, optional: true, required: false
  private _compressionMethod?: string[]; 
  public get compressionMethod() {
    return cdktf.Fn.tolist(this.getListAttribute('compression_method'));
  }
  public set compressionMethod(value: string[]) {
    this._compressionMethod = value;
  }
  public resetCompressionMethod() {
    this._compressionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMethodInput() {
    return this._compressionMethod;
  }

  // consistency_group_id - computed: false, optional: true, required: false
  private _consistencyGroupId?: string[]; 
  public get consistencyGroupId() {
    return cdktf.Fn.tolist(this.getListAttribute('consistency_group_id'));
  }
  public set consistencyGroupId(value: string[]) {
    this._consistencyGroupId = value;
  }
  public resetConsistencyGroupId() {
    this._consistencyGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyGroupIdInput() {
    return this._consistencyGroupId;
  }

  // creation_time - computed: false, optional: true, required: false
  private _creationTime?: number[]; 
  public get creationTime() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('creation_time')));
  }
  public set creationTime(value: number[]) {
    this._creationTime = value;
  }
  public resetCreationTime() {
    this._creationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimeInput() {
    return this._creationTime;
  }

  // data_layout - computed: false, optional: true, required: false
  private _dataLayout?: string[]; 
  public get dataLayout() {
    return cdktf.Fn.tolist(this.getListAttribute('data_layout'));
  }
  public set dataLayout(value: string[]) {
    this._dataLayout = value;
  }
  public resetDataLayout() {
    this._dataLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLayoutInput() {
    return this._dataLayout;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // locked_auto_snapshot - computed: false, optional: true, required: false
  private _lockedAutoSnapshot?: boolean | cdktf.IResolvable; 
  public get lockedAutoSnapshot() {
    return this.getBooleanAttribute('locked_auto_snapshot');
  }
  public set lockedAutoSnapshot(value: boolean | cdktf.IResolvable) {
    this._lockedAutoSnapshot = value;
  }
  public resetLockedAutoSnapshot() {
    this._lockedAutoSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedAutoSnapshotInput() {
    return this._lockedAutoSnapshot;
  }

  // locked_auto_snapshot_marked_for_removal - computed: false, optional: true, required: false
  private _lockedAutoSnapshotMarkedForRemoval?: boolean | cdktf.IResolvable; 
  public get lockedAutoSnapshotMarkedForRemoval() {
    return this.getBooleanAttribute('locked_auto_snapshot_marked_for_removal');
  }
  public set lockedAutoSnapshotMarkedForRemoval(value: boolean | cdktf.IResolvable) {
    this._lockedAutoSnapshotMarkedForRemoval = value;
  }
  public resetLockedAutoSnapshotMarkedForRemoval() {
    this._lockedAutoSnapshotMarkedForRemoval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedAutoSnapshotMarkedForRemovalInput() {
    return this._lockedAutoSnapshotMarkedForRemoval;
  }

  // managed_by - computed: false, optional: true, required: false
  private _managedBy?: string[]; 
  public get managedBy() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_by'));
  }
  public set managedBy(value: string[]) {
    this._managedBy = value;
  }
  public resetManagedBy() {
    this._managedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedByInput() {
    return this._managedBy;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return cdktf.Fn.tolist(this.getListAttribute('name'));
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // not_genuine_snapshot - computed: false, optional: true, required: false
  private _notGenuineSnapshot?: boolean | cdktf.IResolvable; 
  public get notGenuineSnapshot() {
    return this.getBooleanAttribute('not_genuine_snapshot');
  }
  public set notGenuineSnapshot(value: boolean | cdktf.IResolvable) {
    this._notGenuineSnapshot = value;
  }
  public resetNotGenuineSnapshot() {
    this._notGenuineSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notGenuineSnapshotInput() {
    return this._notGenuineSnapshot;
  }

  // original_expiry_time - computed: false, optional: true, required: false
  private _originalExpiryTime?: number[]; 
  public get originalExpiryTime() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('original_expiry_time')));
  }
  public set originalExpiryTime(value: number[]) {
    this._originalExpiryTime = value;
  }
  public resetOriginalExpiryTime() {
    this._originalExpiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalExpiryTimeInput() {
    return this._originalExpiryTime;
  }

  // replication_journal_volume - computed: false, optional: true, required: false
  private _replicationJournalVolume?: boolean | cdktf.IResolvable; 
  public get replicationJournalVolume() {
    return this.getBooleanAttribute('replication_journal_volume');
  }
  public set replicationJournalVolume(value: boolean | cdktf.IResolvable) {
    this._replicationJournalVolume = value;
  }
  public resetReplicationJournalVolume() {
    this._replicationJournalVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationJournalVolumeInput() {
    return this._replicationJournalVolume;
  }

  // replication_time_stamp - computed: false, optional: true, required: false
  private _replicationTimeStamp?: number[]; 
  public get replicationTimeStamp() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('replication_time_stamp')));
  }
  public set replicationTimeStamp(value: number[]) {
    this._replicationTimeStamp = value;
  }
  public resetReplicationTimeStamp() {
    this._replicationTimeStamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTimeStampInput() {
    return this._replicationTimeStamp;
  }

  // secure_snapshot_exp_time - computed: false, optional: true, required: false
  private _secureSnapshotExpTime?: number[]; 
  public get secureSnapshotExpTime() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('secure_snapshot_exp_time')));
  }
  public set secureSnapshotExpTime(value: number[]) {
    this._secureSnapshotExpTime = value;
  }
  public resetSecureSnapshotExpTime() {
    this._secureSnapshotExpTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureSnapshotExpTimeInput() {
    return this._secureSnapshotExpTime;
  }

  // size_in_kb - computed: false, optional: true, required: false
  private _sizeInKb?: number[]; 
  public get sizeInKb() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('size_in_kb')));
  }
  public set sizeInKb(value: number[]) {
    this._sizeInKb = value;
  }
  public resetSizeInKb() {
    this._sizeInKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInKbInput() {
    return this._sizeInKb;
  }

  // storage_pool_id - computed: false, optional: true, required: false
  private _storagePoolId?: string[]; 
  public get storagePoolId() {
    return cdktf.Fn.tolist(this.getListAttribute('storage_pool_id'));
  }
  public set storagePoolId(value: string[]) {
    this._storagePoolId = value;
  }
  public resetStoragePoolId() {
    this._storagePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolIdInput() {
    return this._storagePoolId;
  }

  // time_stamp_is_accurate - computed: false, optional: true, required: false
  private _timeStampIsAccurate?: boolean | cdktf.IResolvable; 
  public get timeStampIsAccurate() {
    return this.getBooleanAttribute('time_stamp_is_accurate');
  }
  public set timeStampIsAccurate(value: boolean | cdktf.IResolvable) {
    this._timeStampIsAccurate = value;
  }
  public resetTimeStampIsAccurate() {
    this._timeStampIsAccurate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStampIsAccurateInput() {
    return this._timeStampIsAccurate;
  }

  // use_rm_cache - computed: false, optional: true, required: false
  private _useRmCache?: boolean | cdktf.IResolvable; 
  public get useRmCache() {
    return this.getBooleanAttribute('use_rm_cache');
  }
  public set useRmCache(value: boolean | cdktf.IResolvable) {
    this._useRmCache = value;
  }
  public resetUseRmCache() {
    this._useRmCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRmCacheInput() {
    return this._useRmCache;
  }

  // volume_replication_state - computed: false, optional: true, required: false
  private _volumeReplicationState?: string[]; 
  public get volumeReplicationState() {
    return cdktf.Fn.tolist(this.getListAttribute('volume_replication_state'));
  }
  public set volumeReplicationState(value: string[]) {
    this._volumeReplicationState = value;
  }
  public resetVolumeReplicationState() {
    this._volumeReplicationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeReplicationStateInput() {
    return this._volumeReplicationState;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string[]; 
  public get volumeType() {
    return cdktf.Fn.tolist(this.getListAttribute('volume_type'));
  }
  public set volumeType(value: string[]) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // vtree_id - computed: false, optional: true, required: false
  private _vtreeId?: string[]; 
  public get vtreeId() {
    return cdktf.Fn.tolist(this.getListAttribute('vtree_id'));
  }
  public set vtreeId(value: string[]) {
    this._vtreeId = value;
  }
  public resetVtreeId() {
    this._vtreeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtreeIdInput() {
    return this._vtreeId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume powerflex_volume}
*/
export class DataPowerflexVolume extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexVolume to import
  * @param importFromId The id of the existing DataPowerflexVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/volume powerflex_volume} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexVolumeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexVolumeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_volume',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataPowerflexVolumeVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexVolumeFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexVolumeFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerflexVolumeFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexVolumeFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexVolumeFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
