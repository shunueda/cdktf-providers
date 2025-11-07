// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFlexibleengineCbrBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The backup ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_backup#id DataFlexibleengineCbrBackup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The region where the CBR backup is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_backup#region DataFlexibleengineCbrBackup#region}
  */
  readonly region?: string;
}
export interface DataFlexibleengineCbrBackupChildrenExtendInfo {
}

export function dataFlexibleengineCbrBackupChildrenExtendInfoToTerraform(struct?: DataFlexibleengineCbrBackupChildrenExtendInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFlexibleengineCbrBackupChildrenExtendInfoToHclTerraform(struct?: DataFlexibleengineCbrBackupChildrenExtendInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFlexibleengineCbrBackupChildrenExtendInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFlexibleengineCbrBackupChildrenExtendInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFlexibleengineCbrBackupChildrenExtendInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_trigger - computed: true, optional: false, required: false
  public get autoTrigger() {
    return this.getBooleanAttribute('auto_trigger');
  }

  // bootable - computed: true, optional: false, required: false
  public get bootable() {
    return this.getBooleanAttribute('bootable');
  }

  // contain_system_disk - computed: true, optional: false, required: false
  public get containSystemDisk() {
    return this.getBooleanAttribute('contain_system_disk');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // incremental - computed: true, optional: false, required: false
  public get incremental() {
    return this.getBooleanAttribute('incremental');
  }

  // is_system_disk - computed: true, optional: false, required: false
  public get isSystemDisk() {
    return this.getBooleanAttribute('is_system_disk');
  }

  // os_registry_images - computed: true, optional: false, required: false
  public get osRegistryImages() {
    return this.getListAttribute('os_registry_images');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // support_lld - computed: true, optional: false, required: false
  public get supportLld() {
    return this.getBooleanAttribute('support_lld');
  }

  // supported_restore_mode - computed: true, optional: false, required: false
  public get supportedRestoreMode() {
    return this.getStringAttribute('supported_restore_mode');
  }
}

export class DataFlexibleengineCbrBackupChildrenExtendInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataFlexibleengineCbrBackupChildrenExtendInfoOutputReference {
    return new DataFlexibleengineCbrBackupChildrenExtendInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFlexibleengineCbrBackupChildrenReplicationRecordsExtraInfo {
}

export function dataFlexibleengineCbrBackupChildrenReplicationRecordsExtraInfoToTerraform(struct?: DataFlexibleengineCbrBackupChildrenReplicationRecordsExtraInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFlexibleengineCbrBackupChildrenReplicationRecordsExtraInfoToHclTerraform(struct?: DataFlexibleengineCbrBackupChildrenReplicationRecordsExtraInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFlexibleengineCbrBackupChildrenReplicationRecordsExtraInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFlexibleengineCbrBackupChildrenReplicationRecordsExtraInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFlexibleengineCbrBackupChildrenReplicationRecordsExtraInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_trigger - computed: true, optional: false, required: false
  public get autoTrigger() {
    return this.getBooleanAttribute('auto_trigger');
  }

  // destination_vault_id - computed: true, optional: false, required: false
  public get destinationVaultId() {
    return this.getStringAttribute('destination_vault_id');
  }

  // fail_code - computed: true, optional: false, required: false
  public get failCode() {
    return this.getStringAttribute('fail_code');
  }

  // fail_reason - computed: true, optional: false, required: false
  public get failReason() {
    return this.getStringAttribute('fail_reason');
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
  }
}

export class DataFlexibleengineCbrBackupChildrenReplicationRecordsExtraInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataFlexibleengineCbrBackupChildrenReplicationRecordsExtraInfoOutputReference {
    return new DataFlexibleengineCbrBackupChildrenReplicationRecordsExtraInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFlexibleengineCbrBackupChildrenReplicationRecords {
}

export function dataFlexibleengineCbrBackupChildrenReplicationRecordsToTerraform(struct?: DataFlexibleengineCbrBackupChildrenReplicationRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFlexibleengineCbrBackupChildrenReplicationRecordsToHclTerraform(struct?: DataFlexibleengineCbrBackupChildrenReplicationRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFlexibleengineCbrBackupChildrenReplicationRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFlexibleengineCbrBackupChildrenReplicationRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFlexibleengineCbrBackupChildrenReplicationRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // destination_backup_id - computed: true, optional: false, required: false
  public get destinationBackupId() {
    return this.getStringAttribute('destination_backup_id');
  }

  // destination_checkpoint_id - computed: true, optional: false, required: false
  public get destinationCheckpointId() {
    return this.getStringAttribute('destination_checkpoint_id');
  }

  // destination_project_id - computed: true, optional: false, required: false
  public get destinationProjectId() {
    return this.getStringAttribute('destination_project_id');
  }

  // destination_region - computed: true, optional: false, required: false
  public get destinationRegion() {
    return this.getStringAttribute('destination_region');
  }

  // destination_vault_id - computed: true, optional: false, required: false
  public get destinationVaultId() {
    return this.getStringAttribute('destination_vault_id');
  }

  // extra_info - computed: true, optional: false, required: false
  private _extraInfo = new DataFlexibleengineCbrBackupChildrenReplicationRecordsExtraInfoList(this, "extra_info", false);
  public get extraInfo() {
    return this._extraInfo;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source_backup_id - computed: true, optional: false, required: false
  public get sourceBackupId() {
    return this.getStringAttribute('source_backup_id');
  }

  // source_checkpoint_id - computed: true, optional: false, required: false
  public get sourceCheckpointId() {
    return this.getStringAttribute('source_checkpoint_id');
  }

  // source_project_id - computed: true, optional: false, required: false
  public get sourceProjectId() {
    return this.getStringAttribute('source_project_id');
  }

  // source_region - computed: true, optional: false, required: false
  public get sourceRegion() {
    return this.getStringAttribute('source_region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
}

export class DataFlexibleengineCbrBackupChildrenReplicationRecordsList extends cdktf.ComplexList {

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
  public get(index: number): DataFlexibleengineCbrBackupChildrenReplicationRecordsOutputReference {
    return new DataFlexibleengineCbrBackupChildrenReplicationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFlexibleengineCbrBackupChildren {
}

export function dataFlexibleengineCbrBackupChildrenToTerraform(struct?: DataFlexibleengineCbrBackupChildren): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFlexibleengineCbrBackupChildrenToHclTerraform(struct?: DataFlexibleengineCbrBackupChildren): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFlexibleengineCbrBackupChildrenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFlexibleengineCbrBackupChildren | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFlexibleengineCbrBackupChildren | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // checkpoint_id - computed: true, optional: false, required: false
  public get checkpointId() {
    return this.getStringAttribute('checkpoint_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enterprise_project_id - computed: true, optional: false, required: false
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }

  // expired_at - computed: true, optional: false, required: false
  public get expiredAt() {
    return this.getStringAttribute('expired_at');
  }

  // extend_info - computed: true, optional: false, required: false
  private _extendInfo = new DataFlexibleengineCbrBackupChildrenExtendInfoList(this, "extend_info", false);
  public get extendInfo() {
    return this._extendInfo;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // replication_records - computed: true, optional: false, required: false
  private _replicationRecords = new DataFlexibleengineCbrBackupChildrenReplicationRecordsList(this, "replication_records", false);
  public get replicationRecords() {
    return this._replicationRecords;
  }

  // resource_az - computed: true, optional: false, required: false
  public get resourceAz() {
    return this.getStringAttribute('resource_az');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_size - computed: true, optional: false, required: false
  public get resourceSize() {
    return this.getNumberAttribute('resource_size');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
}

export class DataFlexibleengineCbrBackupChildrenList extends cdktf.ComplexList {

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
  public get(index: number): DataFlexibleengineCbrBackupChildrenOutputReference {
    return new DataFlexibleengineCbrBackupChildrenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFlexibleengineCbrBackupExtendInfo {
}

export function dataFlexibleengineCbrBackupExtendInfoToTerraform(struct?: DataFlexibleengineCbrBackupExtendInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFlexibleengineCbrBackupExtendInfoToHclTerraform(struct?: DataFlexibleengineCbrBackupExtendInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFlexibleengineCbrBackupExtendInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFlexibleengineCbrBackupExtendInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFlexibleengineCbrBackupExtendInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_trigger - computed: true, optional: false, required: false
  public get autoTrigger() {
    return this.getBooleanAttribute('auto_trigger');
  }

  // bootable - computed: true, optional: false, required: false
  public get bootable() {
    return this.getBooleanAttribute('bootable');
  }

  // contain_system_disk - computed: true, optional: false, required: false
  public get containSystemDisk() {
    return this.getBooleanAttribute('contain_system_disk');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // incremental - computed: true, optional: false, required: false
  public get incremental() {
    return this.getBooleanAttribute('incremental');
  }

  // is_system_disk - computed: true, optional: false, required: false
  public get isSystemDisk() {
    return this.getBooleanAttribute('is_system_disk');
  }

  // os_registry_images - computed: true, optional: false, required: false
  public get osRegistryImages() {
    return this.getListAttribute('os_registry_images');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // support_lld - computed: true, optional: false, required: false
  public get supportLld() {
    return this.getBooleanAttribute('support_lld');
  }

  // supported_restore_mode - computed: true, optional: false, required: false
  public get supportedRestoreMode() {
    return this.getStringAttribute('supported_restore_mode');
  }
}

export class DataFlexibleengineCbrBackupExtendInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataFlexibleengineCbrBackupExtendInfoOutputReference {
    return new DataFlexibleengineCbrBackupExtendInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFlexibleengineCbrBackupReplicationRecordsExtraInfo {
}

export function dataFlexibleengineCbrBackupReplicationRecordsExtraInfoToTerraform(struct?: DataFlexibleengineCbrBackupReplicationRecordsExtraInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFlexibleengineCbrBackupReplicationRecordsExtraInfoToHclTerraform(struct?: DataFlexibleengineCbrBackupReplicationRecordsExtraInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFlexibleengineCbrBackupReplicationRecordsExtraInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFlexibleengineCbrBackupReplicationRecordsExtraInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFlexibleengineCbrBackupReplicationRecordsExtraInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_trigger - computed: true, optional: false, required: false
  public get autoTrigger() {
    return this.getBooleanAttribute('auto_trigger');
  }

  // destination_vault_id - computed: true, optional: false, required: false
  public get destinationVaultId() {
    return this.getStringAttribute('destination_vault_id');
  }

  // fail_code - computed: true, optional: false, required: false
  public get failCode() {
    return this.getStringAttribute('fail_code');
  }

  // fail_reason - computed: true, optional: false, required: false
  public get failReason() {
    return this.getStringAttribute('fail_reason');
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
  }
}

export class DataFlexibleengineCbrBackupReplicationRecordsExtraInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataFlexibleengineCbrBackupReplicationRecordsExtraInfoOutputReference {
    return new DataFlexibleengineCbrBackupReplicationRecordsExtraInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFlexibleengineCbrBackupReplicationRecords {
}

export function dataFlexibleengineCbrBackupReplicationRecordsToTerraform(struct?: DataFlexibleengineCbrBackupReplicationRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFlexibleengineCbrBackupReplicationRecordsToHclTerraform(struct?: DataFlexibleengineCbrBackupReplicationRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFlexibleengineCbrBackupReplicationRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFlexibleengineCbrBackupReplicationRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFlexibleengineCbrBackupReplicationRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // destination_backup_id - computed: true, optional: false, required: false
  public get destinationBackupId() {
    return this.getStringAttribute('destination_backup_id');
  }

  // destination_checkpoint_id - computed: true, optional: false, required: false
  public get destinationCheckpointId() {
    return this.getStringAttribute('destination_checkpoint_id');
  }

  // destination_project_id - computed: true, optional: false, required: false
  public get destinationProjectId() {
    return this.getStringAttribute('destination_project_id');
  }

  // destination_region - computed: true, optional: false, required: false
  public get destinationRegion() {
    return this.getStringAttribute('destination_region');
  }

  // destination_vault_id - computed: true, optional: false, required: false
  public get destinationVaultId() {
    return this.getStringAttribute('destination_vault_id');
  }

  // extra_info - computed: true, optional: false, required: false
  private _extraInfo = new DataFlexibleengineCbrBackupReplicationRecordsExtraInfoList(this, "extra_info", false);
  public get extraInfo() {
    return this._extraInfo;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source_backup_id - computed: true, optional: false, required: false
  public get sourceBackupId() {
    return this.getStringAttribute('source_backup_id');
  }

  // source_checkpoint_id - computed: true, optional: false, required: false
  public get sourceCheckpointId() {
    return this.getStringAttribute('source_checkpoint_id');
  }

  // source_project_id - computed: true, optional: false, required: false
  public get sourceProjectId() {
    return this.getStringAttribute('source_project_id');
  }

  // source_region - computed: true, optional: false, required: false
  public get sourceRegion() {
    return this.getStringAttribute('source_region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
}

export class DataFlexibleengineCbrBackupReplicationRecordsList extends cdktf.ComplexList {

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
  public get(index: number): DataFlexibleengineCbrBackupReplicationRecordsOutputReference {
    return new DataFlexibleengineCbrBackupReplicationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_backup flexibleengine_cbr_backup}
*/
export class DataFlexibleengineCbrBackup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_cbr_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFlexibleengineCbrBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFlexibleengineCbrBackup to import
  * @param importFromId The id of the existing DataFlexibleengineCbrBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFlexibleengineCbrBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_cbr_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_backup flexibleengine_cbr_backup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFlexibleengineCbrBackupConfig
  */
  public constructor(scope: Construct, id: string, config: DataFlexibleengineCbrBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_cbr_backup',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
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
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checkpoint_id - computed: true, optional: false, required: false
  public get checkpointId() {
    return this.getStringAttribute('checkpoint_id');
  }

  // children - computed: true, optional: false, required: false
  private _children = new DataFlexibleengineCbrBackupChildrenList(this, "children", false);
  public get children() {
    return this._children;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enterprise_project_id - computed: true, optional: false, required: false
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }

  // expired_at - computed: true, optional: false, required: false
  public get expiredAt() {
    return this.getStringAttribute('expired_at');
  }

  // extend_info - computed: true, optional: false, required: false
  private _extendInfo = new DataFlexibleengineCbrBackupExtendInfoList(this, "extend_info", false);
  public get extendInfo() {
    return this._extendInfo;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // replication_records - computed: true, optional: false, required: false
  private _replicationRecords = new DataFlexibleengineCbrBackupReplicationRecordsList(this, "replication_records", false);
  public get replicationRecords() {
    return this._replicationRecords;
  }

  // resource_az - computed: true, optional: false, required: false
  public get resourceAz() {
    return this.getStringAttribute('resource_az');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_size - computed: true, optional: false, required: false
  public get resourceSize() {
    return this.getNumberAttribute('resource_size');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
