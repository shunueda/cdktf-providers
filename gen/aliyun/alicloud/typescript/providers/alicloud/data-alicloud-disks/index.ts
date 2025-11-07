// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudDisksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#additional_attributes DataAlicloudDisks#additional_attributes}
  */
  readonly additionalAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#auto_snapshot_policy_id DataAlicloudDisks#auto_snapshot_policy_id}
  */
  readonly autoSnapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#availability_zone DataAlicloudDisks#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#category DataAlicloudDisks#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#delete_auto_snapshot DataAlicloudDisks#delete_auto_snapshot}
  */
  readonly deleteAutoSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#delete_with_instance DataAlicloudDisks#delete_with_instance}
  */
  readonly deleteWithInstance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#disk_name DataAlicloudDisks#disk_name}
  */
  readonly diskName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#disk_type DataAlicloudDisks#disk_type}
  */
  readonly diskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#dry_run DataAlicloudDisks#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#enable_auto_snapshot DataAlicloudDisks#enable_auto_snapshot}
  */
  readonly enableAutoSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#enable_automated_snapshot_policy DataAlicloudDisks#enable_automated_snapshot_policy}
  */
  readonly enableAutomatedSnapshotPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#enable_shared DataAlicloudDisks#enable_shared}
  */
  readonly enableShared?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#encrypted DataAlicloudDisks#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#id DataAlicloudDisks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#ids DataAlicloudDisks#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#instance_id DataAlicloudDisks#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#kms_key_id DataAlicloudDisks#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#name_regex DataAlicloudDisks#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#output_file DataAlicloudDisks#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#page_number DataAlicloudDisks#page_number}
  */
  readonly pageNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#page_size DataAlicloudDisks#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#payment_type DataAlicloudDisks#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#portable DataAlicloudDisks#portable}
  */
  readonly portable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#resource_group_id DataAlicloudDisks#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#snapshot_id DataAlicloudDisks#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#status DataAlicloudDisks#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#tags DataAlicloudDisks#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#type DataAlicloudDisks#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#zone_id DataAlicloudDisks#zone_id}
  */
  readonly zoneId?: string;
  /**
  * operation_locks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#operation_locks DataAlicloudDisks#operation_locks}
  */
  readonly operationLocks?: DataAlicloudDisksOperationLocks[] | cdktf.IResolvable;
}
export interface DataAlicloudDisksDisksMountInstances {
}

export function dataAlicloudDisksDisksMountInstancesToTerraform(struct?: DataAlicloudDisksDisksMountInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudDisksDisksMountInstancesToHclTerraform(struct?: DataAlicloudDisksDisksMountInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudDisksDisksMountInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudDisksDisksMountInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudDisksDisksMountInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attached_time - computed: true, optional: false, required: false
  public get attachedTime() {
    return this.getStringAttribute('attached_time');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
}

export class DataAlicloudDisksDisksMountInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudDisksDisksMountInstancesOutputReference {
    return new DataAlicloudDisksDisksMountInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudDisksDisksOperationLocks {
}

export function dataAlicloudDisksDisksOperationLocksToTerraform(struct?: DataAlicloudDisksDisksOperationLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudDisksDisksOperationLocksToHclTerraform(struct?: DataAlicloudDisksDisksOperationLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudDisksDisksOperationLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudDisksDisksOperationLocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudDisksDisksOperationLocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lock_reason - computed: true, optional: false, required: false
  public get lockReason() {
    return this.getStringAttribute('lock_reason');
  }
}

export class DataAlicloudDisksDisksOperationLocksList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudDisksDisksOperationLocksOutputReference {
    return new DataAlicloudDisksDisksOperationLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudDisksDisks {
}

export function dataAlicloudDisksDisksToTerraform(struct?: DataAlicloudDisksDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudDisksDisksToHclTerraform(struct?: DataAlicloudDisksDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudDisksDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudDisksDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudDisksDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attached_time - computed: true, optional: false, required: false
  public get attachedTime() {
    return this.getStringAttribute('attached_time');
  }

  // auto_snapshot_policy_id - computed: true, optional: false, required: false
  public get autoSnapshotPolicyId() {
    return this.getStringAttribute('auto_snapshot_policy_id');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // delete_auto_snapshot - computed: true, optional: false, required: false
  public get deleteAutoSnapshot() {
    return this.getBooleanAttribute('delete_auto_snapshot');
  }

  // delete_with_instance - computed: true, optional: false, required: false
  public get deleteWithInstance() {
    return this.getBooleanAttribute('delete_with_instance');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // detached_time - computed: true, optional: false, required: false
  public get detachedTime() {
    return this.getStringAttribute('detached_time');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // disk_name - computed: true, optional: false, required: false
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // enable_auto_snapshot - computed: true, optional: false, required: false
  public get enableAutoSnapshot() {
    return this.getBooleanAttribute('enable_auto_snapshot');
  }

  // enable_automated_snapshot_policy - computed: true, optional: false, required: false
  public get enableAutomatedSnapshotPolicy() {
    return this.getBooleanAttribute('enable_automated_snapshot_policy');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // iops_read - computed: true, optional: false, required: false
  public get iopsRead() {
    return this.getNumberAttribute('iops_read');
  }

  // iops_write - computed: true, optional: false, required: false
  public get iopsWrite() {
    return this.getNumberAttribute('iops_write');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // mount_instance_num - computed: true, optional: false, required: false
  public get mountInstanceNum() {
    return this.getNumberAttribute('mount_instance_num');
  }

  // mount_instances - computed: true, optional: false, required: false
  private _mountInstances = new DataAlicloudDisksDisksMountInstancesList(this, "mount_instances", false);
  public get mountInstances() {
    return this._mountInstances;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operation_locks - computed: true, optional: false, required: false
  private _operationLocks = new DataAlicloudDisksDisksOperationLocksList(this, "operation_locks", false);
  public get operationLocks() {
    return this._operationLocks;
  }

  // payment_type - computed: true, optional: false, required: false
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }

  // performance_level - computed: true, optional: false, required: false
  public get performanceLevel() {
    return this.getStringAttribute('performance_level');
  }

  // portable - computed: true, optional: false, required: false
  public get portable() {
    return this.getBooleanAttribute('portable');
  }

  // product_code - computed: true, optional: false, required: false
  public get productCode() {
    return this.getStringAttribute('product_code');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataAlicloudDisksDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudDisksDisksOutputReference {
    return new DataAlicloudDisksDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudDisksOperationLocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#lock_reason DataAlicloudDisks#lock_reason}
  */
  readonly lockReason?: string;
}

export function dataAlicloudDisksOperationLocksToTerraform(struct?: DataAlicloudDisksOperationLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lock_reason: cdktf.stringToTerraform(struct!.lockReason),
  }
}


export function dataAlicloudDisksOperationLocksToHclTerraform(struct?: DataAlicloudDisksOperationLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lock_reason: {
      value: cdktf.stringToHclTerraform(struct!.lockReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAlicloudDisksOperationLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudDisksOperationLocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockReason = this._lockReason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudDisksOperationLocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lockReason = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lockReason = value.lockReason;
    }
  }

  // lock_reason - computed: false, optional: true, required: false
  private _lockReason?: string; 
  public get lockReason() {
    return this.getStringAttribute('lock_reason');
  }
  public set lockReason(value: string) {
    this._lockReason = value;
  }
  public resetLockReason() {
    this._lockReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockReasonInput() {
    return this._lockReason;
  }
}

export class DataAlicloudDisksOperationLocksList extends cdktf.ComplexList {
  public internalValue? : DataAlicloudDisksOperationLocks[] | cdktf.IResolvable

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
  public get(index: number): DataAlicloudDisksOperationLocksOutputReference {
    return new DataAlicloudDisksOperationLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks alicloud_disks}
*/
export class DataAlicloudDisks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_disks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudDisks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudDisks to import
  * @param importFromId The id of the existing DataAlicloudDisks that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudDisks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_disks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/disks alicloud_disks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudDisksConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudDisksConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_disks',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalAttributes = config.additionalAttributes;
    this._autoSnapshotPolicyId = config.autoSnapshotPolicyId;
    this._availabilityZone = config.availabilityZone;
    this._category = config.category;
    this._deleteAutoSnapshot = config.deleteAutoSnapshot;
    this._deleteWithInstance = config.deleteWithInstance;
    this._diskName = config.diskName;
    this._diskType = config.diskType;
    this._dryRun = config.dryRun;
    this._enableAutoSnapshot = config.enableAutoSnapshot;
    this._enableAutomatedSnapshotPolicy = config.enableAutomatedSnapshotPolicy;
    this._enableShared = config.enableShared;
    this._encrypted = config.encrypted;
    this._id = config.id;
    this._ids = config.ids;
    this._instanceId = config.instanceId;
    this._kmsKeyId = config.kmsKeyId;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._pageNumber = config.pageNumber;
    this._pageSize = config.pageSize;
    this._paymentType = config.paymentType;
    this._portable = config.portable;
    this._resourceGroupId = config.resourceGroupId;
    this._snapshotId = config.snapshotId;
    this._status = config.status;
    this._tags = config.tags;
    this._type = config.type;
    this._zoneId = config.zoneId;
    this._operationLocks.internalValue = config.operationLocks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_attributes - computed: false, optional: true, required: false
  private _additionalAttributes?: string[]; 
  public get additionalAttributes() {
    return this.getListAttribute('additional_attributes');
  }
  public set additionalAttributes(value: string[]) {
    this._additionalAttributes = value;
  }
  public resetAdditionalAttributes() {
    this._additionalAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAttributesInput() {
    return this._additionalAttributes;
  }

  // auto_snapshot_policy_id - computed: false, optional: true, required: false
  private _autoSnapshotPolicyId?: string; 
  public get autoSnapshotPolicyId() {
    return this.getStringAttribute('auto_snapshot_policy_id');
  }
  public set autoSnapshotPolicyId(value: string) {
    this._autoSnapshotPolicyId = value;
  }
  public resetAutoSnapshotPolicyId() {
    this._autoSnapshotPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSnapshotPolicyIdInput() {
    return this._autoSnapshotPolicyId;
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // delete_auto_snapshot - computed: false, optional: true, required: false
  private _deleteAutoSnapshot?: boolean | cdktf.IResolvable; 
  public get deleteAutoSnapshot() {
    return this.getBooleanAttribute('delete_auto_snapshot');
  }
  public set deleteAutoSnapshot(value: boolean | cdktf.IResolvable) {
    this._deleteAutoSnapshot = value;
  }
  public resetDeleteAutoSnapshot() {
    this._deleteAutoSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAutoSnapshotInput() {
    return this._deleteAutoSnapshot;
  }

  // delete_with_instance - computed: false, optional: true, required: false
  private _deleteWithInstance?: boolean | cdktf.IResolvable; 
  public get deleteWithInstance() {
    return this.getBooleanAttribute('delete_with_instance');
  }
  public set deleteWithInstance(value: boolean | cdktf.IResolvable) {
    this._deleteWithInstance = value;
  }
  public resetDeleteWithInstance() {
    this._deleteWithInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteWithInstanceInput() {
    return this._deleteWithInstance;
  }

  // disk_name - computed: false, optional: true, required: false
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  public resetDiskName() {
    this._diskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // disks - computed: true, optional: false, required: false
  private _disks = new DataAlicloudDisksDisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // enable_auto_snapshot - computed: false, optional: true, required: false
  private _enableAutoSnapshot?: boolean | cdktf.IResolvable; 
  public get enableAutoSnapshot() {
    return this.getBooleanAttribute('enable_auto_snapshot');
  }
  public set enableAutoSnapshot(value: boolean | cdktf.IResolvable) {
    this._enableAutoSnapshot = value;
  }
  public resetEnableAutoSnapshot() {
    this._enableAutoSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoSnapshotInput() {
    return this._enableAutoSnapshot;
  }

  // enable_automated_snapshot_policy - computed: false, optional: true, required: false
  private _enableAutomatedSnapshotPolicy?: boolean | cdktf.IResolvable; 
  public get enableAutomatedSnapshotPolicy() {
    return this.getBooleanAttribute('enable_automated_snapshot_policy');
  }
  public set enableAutomatedSnapshotPolicy(value: boolean | cdktf.IResolvable) {
    this._enableAutomatedSnapshotPolicy = value;
  }
  public resetEnableAutomatedSnapshotPolicy() {
    this._enableAutomatedSnapshotPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomatedSnapshotPolicyInput() {
    return this._enableAutomatedSnapshotPolicy;
  }

  // enable_shared - computed: false, optional: true, required: false
  private _enableShared?: boolean | cdktf.IResolvable; 
  public get enableShared() {
    return this.getBooleanAttribute('enable_shared');
  }
  public set enableShared(value: boolean | cdktf.IResolvable) {
    this._enableShared = value;
  }
  public resetEnableShared() {
    this._enableShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSharedInput() {
    return this._enableShared;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // page_number - computed: false, optional: true, required: false
  private _pageNumber?: number; 
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }
  public set pageNumber(value: number) {
    this._pageNumber = value;
  }
  public resetPageNumber() {
    this._pageNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNumberInput() {
    return this._pageNumber;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // payment_type - computed: false, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // portable - computed: false, optional: true, required: false
  private _portable?: boolean | cdktf.IResolvable; 
  public get portable() {
    return this.getBooleanAttribute('portable');
  }
  public set portable(value: boolean | cdktf.IResolvable) {
    this._portable = value;
  }
  public resetPortable() {
    this._portable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portableInput() {
    return this._portable;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // type - computed: false, optional: true, required: false
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

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // operation_locks - computed: false, optional: true, required: false
  private _operationLocks = new DataAlicloudDisksOperationLocksList(this, "operation_locks", false);
  public get operationLocks() {
    return this._operationLocks;
  }
  public putOperationLocks(value: DataAlicloudDisksOperationLocks[] | cdktf.IResolvable) {
    this._operationLocks.internalValue = value;
  }
  public resetOperationLocks() {
    this._operationLocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationLocksInput() {
    return this._operationLocks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalAttributes),
      auto_snapshot_policy_id: cdktf.stringToTerraform(this._autoSnapshotPolicyId),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      category: cdktf.stringToTerraform(this._category),
      delete_auto_snapshot: cdktf.booleanToTerraform(this._deleteAutoSnapshot),
      delete_with_instance: cdktf.booleanToTerraform(this._deleteWithInstance),
      disk_name: cdktf.stringToTerraform(this._diskName),
      disk_type: cdktf.stringToTerraform(this._diskType),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      enable_auto_snapshot: cdktf.booleanToTerraform(this._enableAutoSnapshot),
      enable_automated_snapshot_policy: cdktf.booleanToTerraform(this._enableAutomatedSnapshotPolicy),
      enable_shared: cdktf.booleanToTerraform(this._enableShared),
      encrypted: cdktf.stringToTerraform(this._encrypted),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      page_number: cdktf.numberToTerraform(this._pageNumber),
      page_size: cdktf.numberToTerraform(this._pageSize),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      portable: cdktf.booleanToTerraform(this._portable),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      operation_locks: cdktf.listMapper(dataAlicloudDisksOperationLocksToTerraform, true)(this._operationLocks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalAttributes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auto_snapshot_policy_id: {
        value: cdktf.stringToHclTerraform(this._autoSnapshotPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_auto_snapshot: {
        value: cdktf.booleanToHclTerraform(this._deleteAutoSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_with_instance: {
        value: cdktf.booleanToHclTerraform(this._deleteWithInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_name: {
        value: cdktf.stringToHclTerraform(this._diskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_type: {
        value: cdktf.stringToHclTerraform(this._diskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_auto_snapshot: {
        value: cdktf.booleanToHclTerraform(this._enableAutoSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_automated_snapshot_policy: {
        value: cdktf.booleanToHclTerraform(this._enableAutomatedSnapshotPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_shared: {
        value: cdktf.booleanToHclTerraform(this._enableShared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypted: {
        value: cdktf.stringToHclTerraform(this._encrypted),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_number: {
        value: cdktf.numberToHclTerraform(this._pageNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portable: {
        value: cdktf.booleanToHclTerraform(this._portable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation_locks: {
        value: cdktf.listMapperHcl(dataAlicloudDisksOperationLocksToHclTerraform, true)(this._operationLocks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAlicloudDisksOperationLocksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
