// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightHyperflexVmBackupInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#account_moid DataIntersightHyperflexVmBackupInfo#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Description of the backup status of this VmBackupInfo.
  * * `InitializingProtection` - Protection has started, but not completed.
  * * `Protected` - Protection has completed successfully.
  * * `ExceedsInterval` - Protection has not completed successfully in over two times the backup interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#backup_status DataIntersightHyperflexVmBackupInfo#backup_status}
  */
  readonly backupStatus?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#create_time DataIntersightHyperflexVmBackupInfo#create_time}
  */
  readonly createTime?: string;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#domain_group_moid DataIntersightHyperflexVmBackupInfo#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#id DataIntersightHyperflexVmBackupInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Retention count from backup policy for local snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#local_snapshot_retention_count DataIntersightHyperflexVmBackupInfo#local_snapshot_retention_count}
  */
  readonly localSnapshotRetentionCount?: number;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#mod_time DataIntersightHyperflexVmBackupInfo#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#moid DataIntersightHyperflexVmBackupInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#owners DataIntersightHyperflexVmBackupInfo#owners}
  */
  readonly owners?: string[];
  /**
  * The power state of the Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#power_on DataIntersightHyperflexVmBackupInfo#power_on}
  */
  readonly powerOn?: boolean | cdktf.IResolvable;
  /**
  * Description of the protection status of this VmBackupInfo.
  * * `PREPARE_FAILOVER_STARTED` - The protection status is prepare failover started.
  * * `PREPARE_FAILOVER_FAILED` - The protection status is prepare failover failed.
  * * `PREPARE_FAILOVER_COMPLETED` - The protection status is prepaire failover completed.
  * * `FAILOVER_STARTED` - The protection status is failover started.
  * * `FAILOVER_FAILED` - The protection status is failover failed.
  * * `FAILOVER_COMPLETED` - The protection status is failover completed.
  * * `PREPARE_REVERSEPROTECT_STARTED` - The protection status is prepare reverse protect started.
  * * `PREPARE_REVERSEPROTECT_FAILED` - The protection status is prepare reverse protect failed.
  * * `PREPARE_REVERSEPROTECT_COMPLETED` - The protection status is prepair reverse protect completed.
  * * `REVERSEPROTECT_STARTED` - The protection status is reverse protect started.
  * * `REVERSEPROTECT_FAILED` - The protection status is reverse protect failed.
  * * `ACTIVE` - The protection status is active.
  * * `CREATION_IN_PROGRESS` - The protection status is failover in progress.
  * * `CREATION_FAILED` - The protection status is creation failed.
  * * `LOCAL_RESTORE_STARTED` - The protection status is local restore started.
  * * `LOCAL_RESTORE_FAILED` - The protection status is local restore failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#protection_status DataIntersightHyperflexVmBackupInfo#protection_status}
  */
  readonly protectionStatus?: string;
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#shared_scope DataIntersightHyperflexVmBackupInfo#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * Retention count from backup policy for remote snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#snapshot_retention_count DataIntersightHyperflexVmBackupInfo#snapshot_retention_count}
  */
  readonly snapshotRetentionCount?: number;
  /**
  * Name for the source cluster this Virtual Machine is residing on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#src_cluster_name DataIntersightHyperflexVmBackupInfo#src_cluster_name}
  */
  readonly srcClusterName?: string;
  /**
  * Name for the target cluster this Virtual Machine is residing on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#tgt_cluster_name DataIntersightHyperflexVmBackupInfo#tgt_cluster_name}
  */
  readonly tgtClusterName?: string;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#ancestors DataIntersightHyperflexVmBackupInfo#ancestors}
  */
  readonly ancestors?: DataIntersightHyperflexVmBackupInfoAncestors[] | cdktf.IResolvable;
  /**
  * cluster_entity_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#cluster_entity_reference DataIntersightHyperflexVmBackupInfo#cluster_entity_reference}
  */
  readonly clusterEntityReference?: DataIntersightHyperflexVmBackupInfoClusterEntityReference;
  /**
  * cluster_id_protection_info_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#cluster_id_protection_info_map DataIntersightHyperflexVmBackupInfo#cluster_id_protection_info_map}
  */
  readonly clusterIdProtectionInfoMap?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMap[] | cdktf.IResolvable;
  /**
  * error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#error DataIntersightHyperflexVmBackupInfo#error}
  */
  readonly error?: DataIntersightHyperflexVmBackupInfoError;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#parent DataIntersightHyperflexVmBackupInfo#parent}
  */
  readonly parent?: DataIntersightHyperflexVmBackupInfoParent;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#permission_resources DataIntersightHyperflexVmBackupInfo#permission_resources}
  */
  readonly permissionResources?: DataIntersightHyperflexVmBackupInfoPermissionResources[] | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#schedule DataIntersightHyperflexVmBackupInfo#schedule}
  */
  readonly schedule?: DataIntersightHyperflexVmBackupInfoSchedule[] | cdktf.IResolvable;
  /**
  * src_backup_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#src_backup_cluster DataIntersightHyperflexVmBackupInfo#src_backup_cluster}
  */
  readonly srcBackupCluster?: DataIntersightHyperflexVmBackupInfoSrcBackupCluster;
  /**
  * src_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#src_cluster DataIntersightHyperflexVmBackupInfo#src_cluster}
  */
  readonly srcCluster?: DataIntersightHyperflexVmBackupInfoSrcCluster;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#tags DataIntersightHyperflexVmBackupInfo#tags}
  */
  readonly tags?: DataIntersightHyperflexVmBackupInfoTags[] | cdktf.IResolvable;
  /**
  * tgt_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#tgt_cluster DataIntersightHyperflexVmBackupInfo#tgt_cluster}
  */
  readonly tgtCluster?: DataIntersightHyperflexVmBackupInfoTgtCluster;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#version_context DataIntersightHyperflexVmBackupInfo#version_context}
  */
  readonly versionContext?: DataIntersightHyperflexVmBackupInfoVersionContext;
  /**
  * vm_entity_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#vm_entity_reference DataIntersightHyperflexVmBackupInfo#vm_entity_reference}
  */
  readonly vmEntityReference?: DataIntersightHyperflexVmBackupInfoVmEntityReference;
  /**
  * vm_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#vm_info DataIntersightHyperflexVmBackupInfo#vm_info}
  */
  readonly vmInfo?: DataIntersightHyperflexVmBackupInfoVmInfo;
}
export interface DataIntersightHyperflexVmBackupInfoResultsAncestors {
}

export function dataIntersightHyperflexVmBackupInfoResultsAncestorsToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsAncestorsToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsAncestors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsAncestorsOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterEntityReference {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterEntityReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterEntityReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // confignum - computed: true, optional: false, required: false
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idtype - computed: true, optional: false, required: false
  public get idtype() {
    return this.getStringAttribute('idtype');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterEntityReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterEntityReferenceOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterEntityReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusError {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusErrorToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusErrorToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // message_id - computed: true, optional: false, required: false
  public get messageId() {
    return this.getNumberAttribute('message_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusErrorOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReference {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // confignum - computed: true, optional: false, required: false
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idtype - computed: true, optional: false, required: false
  public get idtype() {
    return this.getStringAttribute('idtype');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReferenceOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatus {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatusToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatusToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actual - computed: true, optional: false, required: false
  public get actual() {
    return this.getNumberAttribute('actual');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // expected - computed: true, optional: false, required: false
  public get expected() {
    return this.getNumberAttribute('expected');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // rpo_exceeded - computed: true, optional: false, required: false
  public get rpoExceeded() {
    return this.getBooleanAttribute('rpo_exceeded');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatusOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatus {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // bytes_replicated - computed: true, optional: false, required: false
  public get bytesReplicated() {
    return this.getNumberAttribute('bytes_replicated');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // pack_entity_reference - computed: true, optional: false, required: false
  private _packEntityReference = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReferenceList(this, "pack_entity_reference", false);
  public get packEntityReference() {
    return this._packEntityReference;
  }

  // pct_complete - computed: true, optional: false, required: false
  public get pctComplete() {
    return this.getNumberAttribute('pct_complete');
  }

  // rpo_status - computed: true, optional: false, required: false
  private _rpoStatus = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatusList(this, "rpo_status", false);
  public get rpoStatus() {
    return this._rpoStatus;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusError {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusErrorToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusErrorToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // message_id - computed: true, optional: false, required: false
  public get messageId() {
    return this.getNumberAttribute('message_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusErrorOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatus {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // pct_complete - computed: true, optional: false, required: false
  public get pctComplete() {
    return this.getNumberAttribute('pct_complete');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }

  // used_space - computed: true, optional: false, required: false
  public get usedSpace() {
    return this.getNumberAttribute('used_space');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReference {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // confignum - computed: true, optional: false, required: false
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idtype - computed: true, optional: false, required: false
  public get idtype() {
    return this.getStringAttribute('idtype');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReferenceOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfo {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // replication_status - computed: true, optional: false, required: false
  private _replicationStatus = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusList(this, "replication_status", false);
  public get replicationStatus() {
    return this._replicationStatus;
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }

  // snapshot_status - computed: true, optional: false, required: false
  private _snapshotStatus = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusList(this, "snapshot_status", false);
  public get snapshotStatus() {
    return this._snapshotStatus;
  }

  // vm_snapshot_entity_reference - computed: true, optional: false, required: false
  private _vmSnapshotEntityReference = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReferenceList(this, "vm_snapshot_entity_reference", false);
  public get vmSnapshotEntityReference() {
    return this._vmSnapshotEntityReference;
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusError {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusErrorToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusErrorToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // message_id - computed: true, optional: false, required: false
  public get messageId() {
    return this.getNumberAttribute('message_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusErrorOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReference {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // confignum - computed: true, optional: false, required: false
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idtype - computed: true, optional: false, required: false
  public get idtype() {
    return this.getStringAttribute('idtype');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReferenceOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatus {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatusToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatusToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actual - computed: true, optional: false, required: false
  public get actual() {
    return this.getNumberAttribute('actual');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // expected - computed: true, optional: false, required: false
  public get expected() {
    return this.getNumberAttribute('expected');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // rpo_exceeded - computed: true, optional: false, required: false
  public get rpoExceeded() {
    return this.getBooleanAttribute('rpo_exceeded');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatusOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatus {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // bytes_replicated - computed: true, optional: false, required: false
  public get bytesReplicated() {
    return this.getNumberAttribute('bytes_replicated');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // pack_entity_reference - computed: true, optional: false, required: false
  private _packEntityReference = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReferenceList(this, "pack_entity_reference", false);
  public get packEntityReference() {
    return this._packEntityReference;
  }

  // pct_complete - computed: true, optional: false, required: false
  public get pctComplete() {
    return this.getNumberAttribute('pct_complete');
  }

  // rpo_status - computed: true, optional: false, required: false
  private _rpoStatus = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatusList(this, "rpo_status", false);
  public get rpoStatus() {
    return this._rpoStatus;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusError {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusErrorToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusErrorToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // message_id - computed: true, optional: false, required: false
  public get messageId() {
    return this.getNumberAttribute('message_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusErrorOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatus {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // pct_complete - computed: true, optional: false, required: false
  public get pctComplete() {
    return this.getNumberAttribute('pct_complete');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }

  // used_space - computed: true, optional: false, required: false
  public get usedSpace() {
    return this.getNumberAttribute('used_space');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReference {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // confignum - computed: true, optional: false, required: false
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idtype - computed: true, optional: false, required: false
  public get idtype() {
    return this.getStringAttribute('idtype');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReferenceOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfo {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // replication_status - computed: true, optional: false, required: false
  private _replicationStatus = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusList(this, "replication_status", false);
  public get replicationStatus() {
    return this._replicationStatus;
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }

  // snapshot_status - computed: true, optional: false, required: false
  private _snapshotStatus = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusList(this, "snapshot_status", false);
  public get snapshotStatus() {
    return this._snapshotStatus;
  }

  // vm_snapshot_entity_reference - computed: true, optional: false, required: false
  private _vmSnapshotEntityReference = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReferenceList(this, "vm_snapshot_entity_reference", false);
  public get vmSnapshotEntityReference() {
    return this._vmSnapshotEntityReference;
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmSpaceUsage {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmSpaceUsageToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmSpaceUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmSpaceUsageToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmSpaceUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmSpaceUsageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmSpaceUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmSpaceUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // space_usage - computed: true, optional: false, required: false
  public get spaceUsage() {
    return this.getNumberAttribute('space_usage');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmSpaceUsageList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmSpaceUsageOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmSpaceUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfo {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // vm_current_protection_info - computed: true, optional: false, required: false
  private _vmCurrentProtectionInfo = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoList(this, "vm_current_protection_info", false);
  public get vmCurrentProtectionInfo() {
    return this._vmCurrentProtectionInfo;
  }

  // vm_last_successful_protection_info - computed: true, optional: false, required: false
  private _vmLastSuccessfulProtectionInfo = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoList(this, "vm_last_successful_protection_info", false);
  public get vmLastSuccessfulProtectionInfo() {
    return this._vmLastSuccessfulProtectionInfo;
  }

  // vm_space_usage - computed: true, optional: false, required: false
  private _vmSpaceUsage = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoVmSpaceUsageList(this, "vm_space_usage", false);
  public get vmSpaceUsage() {
    return this._vmSpaceUsage;
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMap {
}

export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // protection_info - computed: true, optional: false, required: false
  private _protectionInfo = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapProtectionInfoList(this, "protection_info", false);
  public get protectionInfo() {
    return this._protectionInfo;
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsError {
}

export function dataIntersightHyperflexVmBackupInfoResultsErrorToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsErrorToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // message_id - computed: true, optional: false, required: false
  public get messageId() {
    return this.getNumberAttribute('message_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsErrorOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsParent {
}

export function dataIntersightHyperflexVmBackupInfoResultsParentToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsParentToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsParentOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsPermissionResources {
}

export function dataIntersightHyperflexVmBackupInfoResultsPermissionResourcesToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsPermissionResourcesToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsPermissionResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsPermissionResourcesOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsScheduleSchedule {
}

export function dataIntersightHyperflexVmBackupInfoResultsScheduleScheduleToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsScheduleSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsScheduleScheduleToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsScheduleSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsScheduleScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsScheduleSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsScheduleSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // backup_interval - computed: true, optional: false, required: false
  public get backupInterval() {
    return this.getNumberAttribute('backup_interval');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsScheduleScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsScheduleScheduleOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsScheduleScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsScheduleTargetClusterEntityReference {
}

export function dataIntersightHyperflexVmBackupInfoResultsScheduleTargetClusterEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsScheduleTargetClusterEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsScheduleTargetClusterEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsScheduleTargetClusterEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsScheduleTargetClusterEntityReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsScheduleTargetClusterEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsScheduleTargetClusterEntityReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // confignum - computed: true, optional: false, required: false
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idtype - computed: true, optional: false, required: false
  public get idtype() {
    return this.getStringAttribute('idtype');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsScheduleTargetClusterEntityReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsScheduleTargetClusterEntityReferenceOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsScheduleTargetClusterEntityReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsSchedule {
}

export function dataIntersightHyperflexVmBackupInfoResultsScheduleToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsScheduleToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataIntersightHyperflexVmBackupInfoResultsScheduleScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }

  // target_cluster_entity_reference - computed: true, optional: false, required: false
  private _targetClusterEntityReference = new DataIntersightHyperflexVmBackupInfoResultsScheduleTargetClusterEntityReferenceList(this, "target_cluster_entity_reference", false);
  public get targetClusterEntityReference() {
    return this._targetClusterEntityReference;
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsScheduleOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsSrcBackupCluster {
}

export function dataIntersightHyperflexVmBackupInfoResultsSrcBackupClusterToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsSrcBackupCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsSrcBackupClusterToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsSrcBackupCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsSrcBackupClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsSrcBackupCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsSrcBackupCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsSrcBackupClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsSrcBackupClusterOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsSrcBackupClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsSrcCluster {
}

export function dataIntersightHyperflexVmBackupInfoResultsSrcClusterToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsSrcCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsSrcClusterToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsSrcCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsSrcClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsSrcCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsSrcCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsSrcClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsSrcClusterOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsSrcClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsTagsAncestorDefinitions {
}

export function dataIntersightHyperflexVmBackupInfoResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsTagsAncestorDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsTagsDefinition {
}

export function dataIntersightHyperflexVmBackupInfoResultsTagsDefinitionToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsTagsDefinitionToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsTagsDefinitionOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsTags {
}

export function dataIntersightHyperflexVmBackupInfoResultsTagsToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsTagsToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestor_definitions - computed: true, optional: false, required: false
  private _ancestorDefinitions = new DataIntersightHyperflexVmBackupInfoResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightHyperflexVmBackupInfoResultsTagsDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // propagated - computed: true, optional: false, required: false
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }

  // sys_tag - computed: true, optional: false, required: false
  public get sysTag() {
    return this.getBooleanAttribute('sys_tag');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsTagsOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsTgtCluster {
}

export function dataIntersightHyperflexVmBackupInfoResultsTgtClusterToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsTgtCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsTgtClusterToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsTgtCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsTgtClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsTgtCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsTgtCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsTgtClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsTgtClusterOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsTgtClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsVersionContextInterestedMos {
}

export function dataIntersightHyperflexVmBackupInfoResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsVersionContextInterestedMos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsVersionContextRefMo {
}

export function dataIntersightHyperflexVmBackupInfoResultsVersionContextRefMoToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsVersionContextRefMoOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsVersionContext {
}

export function dataIntersightHyperflexVmBackupInfoResultsVersionContextToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsVersionContextToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // interested_mos - computed: true, optional: false, required: false
  private _interestedMos = new DataIntersightHyperflexVmBackupInfoResultsVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }

  // marked_for_deletion - computed: true, optional: false, required: false
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ref_mo - computed: true, optional: false, required: false
  private _refMo = new DataIntersightHyperflexVmBackupInfoResultsVersionContextRefMoList(this, "ref_mo", false);
  public get refMo() {
    return this._refMo;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // version_type - computed: true, optional: false, required: false
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsVersionContextOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsVmEntityReference {
}

export function dataIntersightHyperflexVmBackupInfoResultsVmEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsVmEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsVmEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsVmEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsVmEntityReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsVmEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsVmEntityReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // confignum - computed: true, optional: false, required: false
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idtype - computed: true, optional: false, required: false
  public get idtype() {
    return this.getStringAttribute('idtype');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsVmEntityReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsVmEntityReferenceOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsVmEntityReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsVmInfoRunTimeInfo {
}

export function dataIntersightHyperflexVmBackupInfoResultsVmInfoRunTimeInfoToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsVmInfoRunTimeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsVmInfoRunTimeInfoToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsVmInfoRunTimeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsVmInfoRunTimeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsVmInfoRunTimeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsVmInfoRunTimeInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // bios_uuid - computed: true, optional: false, required: false
  public get biosUuid() {
    return this.getStringAttribute('bios_uuid');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // connection_state - computed: true, optional: false, required: false
  public get connectionState() {
    return this.getStringAttribute('connection_state');
  }

  // cpu_usage - computed: true, optional: false, required: false
  public get cpuUsage() {
    return this.getNumberAttribute('cpu_usage');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // guest_family - computed: true, optional: false, required: false
  public get guestFamily() {
    return this.getStringAttribute('guest_family');
  }

  // guest_full_name - computed: true, optional: false, required: false
  public get guestFullName() {
    return this.getStringAttribute('guest_full_name');
  }

  // guest_id - computed: true, optional: false, required: false
  public get guestId() {
    return this.getStringAttribute('guest_id');
  }

  // guest_state - computed: true, optional: false, required: false
  public get guestState() {
    return this.getStringAttribute('guest_state');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // memory_mb - computed: true, optional: false, required: false
  public get memoryMb() {
    return this.getNumberAttribute('memory_mb');
  }

  // memory_usage - computed: true, optional: false, required: false
  public get memoryUsage() {
    return this.getNumberAttribute('memory_usage');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // networks - computed: true, optional: false, required: false
  public get networks() {
    return this.getListAttribute('networks');
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // num_cpu - computed: true, optional: false, required: false
  public get numCpu() {
    return this.getNumberAttribute('num_cpu');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // power_state - computed: true, optional: false, required: false
  public get powerState() {
    return this.getStringAttribute('power_state');
  }

  // provisioned_size - computed: true, optional: false, required: false
  public get provisionedSize() {
    return this.getNumberAttribute('provisioned_size');
  }

  // resource_pool - computed: true, optional: false, required: false
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }

  // used_size - computed: true, optional: false, required: false
  public get usedSize() {
    return this.getNumberAttribute('used_size');
  }

  // vmx_path - computed: true, optional: false, required: false
  public get vmxPath() {
    return this.getStringAttribute('vmx_path');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsVmInfoRunTimeInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsVmInfoRunTimeInfoOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsVmInfoRunTimeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResultsVmInfo {
}

export function dataIntersightHyperflexVmBackupInfoResultsVmInfoToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsVmInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsVmInfoToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResultsVmInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsVmInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResultsVmInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResultsVmInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // run_time_info - computed: true, optional: false, required: false
  private _runTimeInfo = new DataIntersightHyperflexVmBackupInfoResultsVmInfoRunTimeInfoList(this, "run_time_info", false);
  public get runTimeInfo() {
    return this._runTimeInfo;
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsVmInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsVmInfoOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsVmInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoResults {
}

export function dataIntersightHyperflexVmBackupInfoResultsToTerraform(struct?: DataIntersightHyperflexVmBackupInfoResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmBackupInfoResultsToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmBackupInfoResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_moid - computed: true, optional: false, required: false
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestors - computed: true, optional: false, required: false
  private _ancestors = new DataIntersightHyperflexVmBackupInfoResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // backup_status - computed: true, optional: false, required: false
  public get backupStatus() {
    return this.getStringAttribute('backup_status');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // cluster_entity_reference - computed: true, optional: false, required: false
  private _clusterEntityReference = new DataIntersightHyperflexVmBackupInfoResultsClusterEntityReferenceList(this, "cluster_entity_reference", false);
  public get clusterEntityReference() {
    return this._clusterEntityReference;
  }

  // cluster_id_protection_info_map - computed: true, optional: false, required: false
  private _clusterIdProtectionInfoMap = new DataIntersightHyperflexVmBackupInfoResultsClusterIdProtectionInfoMapList(this, "cluster_id_protection_info_map", false);
  public get clusterIdProtectionInfoMap() {
    return this._clusterIdProtectionInfoMap;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataIntersightHyperflexVmBackupInfoResultsErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // local_snapshot_retention_count - computed: true, optional: false, required: false
  public get localSnapshotRetentionCount() {
    return this.getNumberAttribute('local_snapshot_retention_count');
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataIntersightHyperflexVmBackupInfoResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightHyperflexVmBackupInfoResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }

  // power_on - computed: true, optional: false, required: false
  public get powerOn() {
    return this.getBooleanAttribute('power_on');
  }

  // protection_status - computed: true, optional: false, required: false
  public get protectionStatus() {
    return this.getStringAttribute('protection_status');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataIntersightHyperflexVmBackupInfoResultsScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // snapshot_retention_count - computed: true, optional: false, required: false
  public get snapshotRetentionCount() {
    return this.getNumberAttribute('snapshot_retention_count');
  }

  // src_backup_cluster - computed: true, optional: false, required: false
  private _srcBackupCluster = new DataIntersightHyperflexVmBackupInfoResultsSrcBackupClusterList(this, "src_backup_cluster", false);
  public get srcBackupCluster() {
    return this._srcBackupCluster;
  }

  // src_cluster - computed: true, optional: false, required: false
  private _srcCluster = new DataIntersightHyperflexVmBackupInfoResultsSrcClusterList(this, "src_cluster", false);
  public get srcCluster() {
    return this._srcCluster;
  }

  // src_cluster_name - computed: true, optional: false, required: false
  public get srcClusterName() {
    return this.getStringAttribute('src_cluster_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightHyperflexVmBackupInfoResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tgt_cluster - computed: true, optional: false, required: false
  private _tgtCluster = new DataIntersightHyperflexVmBackupInfoResultsTgtClusterList(this, "tgt_cluster", false);
  public get tgtCluster() {
    return this._tgtCluster;
  }

  // tgt_cluster_name - computed: true, optional: false, required: false
  public get tgtClusterName() {
    return this.getStringAttribute('tgt_cluster_name');
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightHyperflexVmBackupInfoResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }

  // vm_entity_reference - computed: true, optional: false, required: false
  private _vmEntityReference = new DataIntersightHyperflexVmBackupInfoResultsVmEntityReferenceList(this, "vm_entity_reference", false);
  public get vmEntityReference() {
    return this._vmEntityReference;
  }

  // vm_info - computed: true, optional: false, required: false
  private _vmInfo = new DataIntersightHyperflexVmBackupInfoResultsVmInfoList(this, "vm_info", false);
  public get vmInfo() {
    return this._vmInfo;
  }
}

export class DataIntersightHyperflexVmBackupInfoResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoResultsOutputReference {
    return new DataIntersightHyperflexVmBackupInfoResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#moid DataIntersightHyperflexVmBackupInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#selector DataIntersightHyperflexVmBackupInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmBackupInfoAncestorsToTerraform(struct?: DataIntersightHyperflexVmBackupInfoAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexVmBackupInfoAncestorsToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoAncestors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoAncestors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexVmBackupInfoAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexVmBackupInfoAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoAncestorsOutputReference {
    return new DataIntersightHyperflexVmBackupInfoAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoClusterEntityReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#confignum DataIntersightHyperflexVmBackupInfo#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#id DataIntersightHyperflexVmBackupInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of entity id for this reference.
  * * `VCMOID` - The entity reference ID type is VC MOID.
  * * `VMBIOSUUID` - The entity reference ID type is VM Bios UUID.
  * * `VMDSPATH` - The entity reference ID type is VM Datastore Path.
  * * `VMINSTANCEUUID` - The entity reference ID type is VM Instance UUID.
  * * `VMNAME` - The entity reference ID type is VM Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#idtype DataIntersightHyperflexVmBackupInfo#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#name DataIntersightHyperflexVmBackupInfo#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Type of the entity for this entity reference.
  * * `DISK` - This entity type is a disk.
  * * `PNODE` - This entity type is a P node.
  * * `NODE` - This entity type is a node.
  * * `CLUSTER` - This entity type is a cluster.
  * * `DATASTORE` - This entity is a datastore.
  * * `VIRTNODE` - This entity is a HyperFlex virtual node.
  * * `VIRTCLUSTER` - This entity type is a virtual cluster.
  * * `VIRTDATASTORE` - This entity type is a virtual data store.
  * * `VIRTMACHINE` - This entity type is a virtual machine.
  * * `PDISK` - This entity type is a P disk.
  * * `PDATASTORE` - This entity type is a P Datastore.
  * * `VIRTMACHINESNAPSHOT` - This entity is a virtual machine snapshot.
  * * `FOLDER` - This entity type is a folder.
  * * `RESOURCEPOOL` - This entity type is a resource pool.
  * * `FILE` - This entity type is a file.
  * * `VIRTDATACENTER` - This entity type is a virtual data center.
  * * `REPLICATION_APPLIANCE` - This entity type is a replication appliance.
  * * `REPLICATION_JOB` - This entity type is a replication job.
  * * `IP_POOL` - This entity type is an IP Pool.
  * * `REPLICATION_INFO` - This entity type is a replication information.
  * * `DP_VM_SNAPSHOT` - This entity type is a DP VM Snapshot.
  * * `DP_VMGROUP_SNAPSHOT` - This entity type is a DP VM Group Snapshot.
  * * `DP_VM_CONFIG` - This entity type is a DP VM Configuration.
  * * `DP_VM` - This entity type is a DP VM.
  * * `DP_VMGROUP` - This entity type is a DP VM Group.
  * * `DP_VM_SNAPSHOT_POINT` - This entity type is a DP VM Snapshot Point.
  * * `CLUSTER_PAIR` - This entity is a cluster pair.
  * * `HX_TASK` - This entity type is a HyperFlex task.
  * * `ZONE` - This entity type is a zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#type DataIntersightHyperflexVmBackupInfo#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexVmBackupInfoClusterEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterEntityReferenceOutputReference | DataIntersightHyperflexVmBackupInfoClusterEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    confignum: cdktf.numberToTerraform(struct!.confignum),
    id: cdktf.stringToTerraform(struct!.id),
    idtype: cdktf.stringToTerraform(struct!.idtype),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterEntityReferenceOutputReference | DataIntersightHyperflexVmBackupInfoClusterEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confignum: {
      value: cdktf.numberToHclTerraform(struct!.confignum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idtype: {
      value: cdktf.stringToHclTerraform(struct!.idtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataIntersightHyperflexVmBackupInfoClusterEntityReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._confignum !== undefined) {
      hasAnyValues = true;
      internalValueResult.confignum = this._confignum;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.idtype = this._idtype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterEntityReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._confignum = undefined;
      this._id = undefined;
      this._idtype = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._confignum = value.confignum;
      this._id = value.id;
      this._idtype = value.idtype;
      this._name = value.name;
      this._objectType = value.objectType;
      this._type = value.type;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // confignum - computed: false, optional: true, required: false
  private _confignum?: number; 
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }
  public set confignum(value: number) {
    this._confignum = value;
  }
  public resetConfignum() {
    this._confignum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confignumInput() {
    return this._confignum;
  }

  // id - computed: false, optional: true, required: false
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

  // idtype - computed: false, optional: true, required: false
  private _idtype?: string; 
  public get idtype() {
    return this.getStringAttribute('idtype');
  }
  public set idtype(value: string) {
    this._idtype = value;
  }
  public resetIdtype() {
    this._idtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idtypeInput() {
    return this._idtype;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
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
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusError {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The error message string for this error stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#message DataIntersightHyperflexVmBackupInfo#message}
  */
  readonly message?: string;
  /**
  * The error message ID for this error stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#message_id DataIntersightHyperflexVmBackupInfo#message_id}
  */
  readonly messageId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusErrorToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusErrorOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    message: cdktf.stringToTerraform(struct!.message),
    message_id: cdktf.numberToTerraform(struct!.messageId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusErrorToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusErrorOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_id: {
      value: cdktf.numberToHclTerraform(struct!.messageId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._messageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageId = this._messageId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._message = undefined;
      this._messageId = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._message = value.message;
      this._messageId = value.messageId;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // message_id - computed: false, optional: true, required: false
  private _messageId?: number; 
  public get messageId() {
    return this.getNumberAttribute('message_id');
  }
  public set messageId(value: number) {
    this._messageId = value;
  }
  public resetMessageId() {
    this._messageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdInput() {
    return this._messageId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#confignum DataIntersightHyperflexVmBackupInfo#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#id DataIntersightHyperflexVmBackupInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of entity id for this reference.
  * * `VCMOID` - The entity reference ID type is VC MOID.
  * * `VMBIOSUUID` - The entity reference ID type is VM Bios UUID.
  * * `VMDSPATH` - The entity reference ID type is VM Datastore Path.
  * * `VMINSTANCEUUID` - The entity reference ID type is VM Instance UUID.
  * * `VMNAME` - The entity reference ID type is VM Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#idtype DataIntersightHyperflexVmBackupInfo#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#name DataIntersightHyperflexVmBackupInfo#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Type of the entity for this entity reference.
  * * `DISK` - This entity type is a disk.
  * * `PNODE` - This entity type is a P node.
  * * `NODE` - This entity type is a node.
  * * `CLUSTER` - This entity type is a cluster.
  * * `DATASTORE` - This entity is a datastore.
  * * `VIRTNODE` - This entity is a HyperFlex virtual node.
  * * `VIRTCLUSTER` - This entity type is a virtual cluster.
  * * `VIRTDATASTORE` - This entity type is a virtual data store.
  * * `VIRTMACHINE` - This entity type is a virtual machine.
  * * `PDISK` - This entity type is a P disk.
  * * `PDATASTORE` - This entity type is a P Datastore.
  * * `VIRTMACHINESNAPSHOT` - This entity is a virtual machine snapshot.
  * * `FOLDER` - This entity type is a folder.
  * * `RESOURCEPOOL` - This entity type is a resource pool.
  * * `FILE` - This entity type is a file.
  * * `VIRTDATACENTER` - This entity type is a virtual data center.
  * * `REPLICATION_APPLIANCE` - This entity type is a replication appliance.
  * * `REPLICATION_JOB` - This entity type is a replication job.
  * * `IP_POOL` - This entity type is an IP Pool.
  * * `REPLICATION_INFO` - This entity type is a replication information.
  * * `DP_VM_SNAPSHOT` - This entity type is a DP VM Snapshot.
  * * `DP_VMGROUP_SNAPSHOT` - This entity type is a DP VM Group Snapshot.
  * * `DP_VM_CONFIG` - This entity type is a DP VM Configuration.
  * * `DP_VM` - This entity type is a DP VM.
  * * `DP_VMGROUP` - This entity type is a DP VM Group.
  * * `DP_VM_SNAPSHOT_POINT` - This entity type is a DP VM Snapshot Point.
  * * `CLUSTER_PAIR` - This entity is a cluster pair.
  * * `HX_TASK` - This entity type is a HyperFlex task.
  * * `ZONE` - This entity type is a zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#type DataIntersightHyperflexVmBackupInfo#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReferenceOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    confignum: cdktf.numberToTerraform(struct!.confignum),
    id: cdktf.stringToTerraform(struct!.id),
    idtype: cdktf.stringToTerraform(struct!.idtype),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReferenceOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confignum: {
      value: cdktf.numberToHclTerraform(struct!.confignum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idtype: {
      value: cdktf.stringToHclTerraform(struct!.idtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._confignum !== undefined) {
      hasAnyValues = true;
      internalValueResult.confignum = this._confignum;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.idtype = this._idtype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._confignum = undefined;
      this._id = undefined;
      this._idtype = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._confignum = value.confignum;
      this._id = value.id;
      this._idtype = value.idtype;
      this._name = value.name;
      this._objectType = value.objectType;
      this._type = value.type;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // confignum - computed: false, optional: true, required: false
  private _confignum?: number; 
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }
  public set confignum(value: number) {
    this._confignum = value;
  }
  public resetConfignum() {
    this._confignum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confignumInput() {
    return this._confignum;
  }

  // id - computed: false, optional: true, required: false
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

  // idtype - computed: false, optional: true, required: false
  private _idtype?: string; 
  public get idtype() {
    return this.getStringAttribute('idtype');
  }
  public set idtype(value: string) {
    this._idtype = value;
  }
  public resetIdtype() {
    this._idtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idtypeInput() {
    return this._idtype;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
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
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatus {
  /**
  * Actual end time for the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#actual DataIntersightHyperflexVmBackupInfo#actual}
  */
  readonly actual?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Expected end time for the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#expected DataIntersightHyperflexVmBackupInfo#expected}
  */
  readonly expected?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * A flag to determine if snapshot delivery is delayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#rpo_exceeded DataIntersightHyperflexVmBackupInfo#rpo_exceeded}
  */
  readonly rpoExceeded?: boolean | cdktf.IResolvable;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatusToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatusOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actual: cdktf.numberToTerraform(struct!.actual),
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    expected: cdktf.numberToTerraform(struct!.expected),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    rpo_exceeded: cdktf.booleanToTerraform(struct!.rpoExceeded),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatusToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatusOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actual: {
      value: cdktf.numberToHclTerraform(struct!.actual),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expected: {
      value: cdktf.numberToHclTerraform(struct!.expected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rpo_exceeded: {
      value: cdktf.booleanToHclTerraform(struct!.rpoExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actual !== undefined) {
      hasAnyValues = true;
      internalValueResult.actual = this._actual;
    }
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._expected !== undefined) {
      hasAnyValues = true;
      internalValueResult.expected = this._expected;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._rpoExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpoExceeded = this._rpoExceeded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actual = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._expected = undefined;
      this._objectType = undefined;
      this._rpoExceeded = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actual = value.actual;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._expected = value.expected;
      this._objectType = value.objectType;
      this._rpoExceeded = value.rpoExceeded;
    }
  }

  // actual - computed: false, optional: true, required: false
  private _actual?: number; 
  public get actual() {
    return this.getNumberAttribute('actual');
  }
  public set actual(value: number) {
    this._actual = value;
  }
  public resetActual() {
    this._actual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actualInput() {
    return this._actual;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // expected - computed: false, optional: true, required: false
  private _expected?: number; 
  public get expected() {
    return this.getNumberAttribute('expected');
  }
  public set expected(value: number) {
    this._expected = value;
  }
  public resetExpected() {
    this._expected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedInput() {
    return this._expected;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // rpo_exceeded - computed: false, optional: true, required: false
  private _rpoExceeded?: boolean | cdktf.IResolvable; 
  public get rpoExceeded() {
    return this.getBooleanAttribute('rpo_exceeded');
  }
  public set rpoExceeded(value: boolean | cdktf.IResolvable) {
    this._rpoExceeded = value;
  }
  public resetRpoExceeded() {
    this._rpoExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoExceededInput() {
    return this._rpoExceeded;
  }
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Number of bytes currently replicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#bytes_replicated DataIntersightHyperflexVmBackupInfo#bytes_replicated}
  */
  readonly bytesReplicated?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Replication end time for this snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#end_time DataIntersightHyperflexVmBackupInfo#end_time}
  */
  readonly endTime?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Completion percentage for the replication job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#pct_complete DataIntersightHyperflexVmBackupInfo#pct_complete}
  */
  readonly pctComplete?: number;
  /**
  * Replication start time for this snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#start_time DataIntersightHyperflexVmBackupInfo#start_time}
  */
  readonly startTime?: number;
  /**
  * Current replication state for a particular snapshot.
  * * `NONE` - Snapshot replication state is none.
  * * `SUCCESS` - Snapshot completed successfully.
  * * `FAILED` - Snapshot failed replication status code.
  * * `PAUSED` - Snapshot replication paused status code.
  * * `IN_USE` - Snapshot replica in use status code.
  * * `STARTING` - Snapshot replication starting.
  * * `REPLICATING` - Snapshot replication in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#status DataIntersightHyperflexVmBackupInfo#status}
  */
  readonly status?: string;
  /**
  * error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#error DataIntersightHyperflexVmBackupInfo#error}
  */
  readonly error?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusError;
  /**
  * pack_entity_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#pack_entity_reference DataIntersightHyperflexVmBackupInfo#pack_entity_reference}
  */
  readonly packEntityReference?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReference;
  /**
  * rpo_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#rpo_status DataIntersightHyperflexVmBackupInfo#rpo_status}
  */
  readonly rpoStatus?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatus;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    bytes_replicated: cdktf.numberToTerraform(struct!.bytesReplicated),
    class_id: cdktf.stringToTerraform(struct!.classId),
    end_time: cdktf.numberToTerraform(struct!.endTime),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    pct_complete: cdktf.numberToTerraform(struct!.pctComplete),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
    error: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusErrorToTerraform(struct!.error),
    pack_entity_reference: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReferenceToTerraform(struct!.packEntityReference),
    rpo_status: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatusToTerraform(struct!.rpoStatus),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bytes_replicated: {
      value: cdktf.numberToHclTerraform(struct!.bytesReplicated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pct_complete: {
      value: cdktf.numberToHclTerraform(struct!.pctComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusErrorToHclTerraform(struct!.error),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusErrorList",
    },
    pack_entity_reference: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReferenceToHclTerraform(struct!.packEntityReference),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReferenceList",
    },
    rpo_status: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatusToHclTerraform(struct!.rpoStatus),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._bytesReplicated !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesReplicated = this._bytesReplicated;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._pctComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.pctComplete = this._pctComplete;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._error?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error?.internalValue;
    }
    if (this._packEntityReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packEntityReference = this._packEntityReference?.internalValue;
    }
    if (this._rpoStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpoStatus = this._rpoStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._bytesReplicated = undefined;
      this._classId = undefined;
      this._endTime = undefined;
      this._objectType = undefined;
      this._pctComplete = undefined;
      this._startTime = undefined;
      this._status = undefined;
      this._error.internalValue = undefined;
      this._packEntityReference.internalValue = undefined;
      this._rpoStatus.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._bytesReplicated = value.bytesReplicated;
      this._classId = value.classId;
      this._endTime = value.endTime;
      this._objectType = value.objectType;
      this._pctComplete = value.pctComplete;
      this._startTime = value.startTime;
      this._status = value.status;
      this._error.internalValue = value.error;
      this._packEntityReference.internalValue = value.packEntityReference;
      this._rpoStatus.internalValue = value.rpoStatus;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // bytes_replicated - computed: false, optional: true, required: false
  private _bytesReplicated?: number; 
  public get bytesReplicated() {
    return this.getNumberAttribute('bytes_replicated');
  }
  public set bytesReplicated(value: number) {
    this._bytesReplicated = value;
  }
  public resetBytesReplicated() {
    this._bytesReplicated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesReplicatedInput() {
    return this._bytesReplicated;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // pct_complete - computed: false, optional: true, required: false
  private _pctComplete?: number; 
  public get pctComplete() {
    return this.getNumberAttribute('pct_complete');
  }
  public set pctComplete(value: number) {
    this._pctComplete = value;
  }
  public resetPctComplete() {
    this._pctComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pctCompleteInput() {
    return this._pctComplete;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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

  // error - computed: false, optional: true, required: false
  private _error = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }

  // pack_entity_reference - computed: false, optional: true, required: false
  private _packEntityReference = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReferenceOutputReference(this, "pack_entity_reference");
  public get packEntityReference() {
    return this._packEntityReference;
  }
  public putPackEntityReference(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusPackEntityReference) {
    this._packEntityReference.internalValue = value;
  }
  public resetPackEntityReference() {
    this._packEntityReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packEntityReferenceInput() {
    return this._packEntityReference.internalValue;
  }

  // rpo_status - computed: false, optional: true, required: false
  private _rpoStatus = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatusOutputReference(this, "rpo_status");
  public get rpoStatus() {
    return this._rpoStatus;
  }
  public putRpoStatus(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusRpoStatus) {
    this._rpoStatus.internalValue = value;
  }
  public resetRpoStatus() {
    this._rpoStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoStatusInput() {
    return this._rpoStatus.internalValue;
  }
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusError {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The error message string for this error stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#message DataIntersightHyperflexVmBackupInfo#message}
  */
  readonly message?: string;
  /**
  * The error message ID for this error stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#message_id DataIntersightHyperflexVmBackupInfo#message_id}
  */
  readonly messageId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusErrorToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusErrorOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    message: cdktf.stringToTerraform(struct!.message),
    message_id: cdktf.numberToTerraform(struct!.messageId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusErrorToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusErrorOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_id: {
      value: cdktf.numberToHclTerraform(struct!.messageId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._messageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageId = this._messageId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._message = undefined;
      this._messageId = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._message = value.message;
      this._messageId = value.messageId;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // message_id - computed: false, optional: true, required: false
  private _messageId?: number; 
  public get messageId() {
    return this.getNumberAttribute('message_id');
  }
  public set messageId(value: number) {
    this._messageId = value;
  }
  public resetMessageId() {
    this._messageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdInput() {
    return this._messageId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Description of this Snapshot Point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#description DataIntersightHyperflexVmBackupInfo#description}
  */
  readonly description?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Completion percentage for this snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#pct_complete DataIntersightHyperflexVmBackupInfo#pct_complete}
  */
  readonly pctComplete?: number;
  /**
  * Current snapshot state for this snapshot.
  * * `SUCCESS` - This snapshot status code is success.
  * * `FAILED` - This snapshot status code is failed.
  * * `IN_PROGRESS` - This snapshot status code is in progress.
  * * `DELETING` - This snapshot status code is deleting.
  * * `DELETED` - This snapshot status code is deleted.
  * * `NONE` - This snapshot status code is none.
  * * `INIT` - This snapshot status code is initializing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#status DataIntersightHyperflexVmBackupInfo#status}
  */
  readonly status?: string;
  /**
  * Timestamp at which the Snapshot is taken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#timestamp DataIntersightHyperflexVmBackupInfo#timestamp}
  */
  readonly timestamp?: number;
  /**
  * Space Used by this Snapshot Point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#used_space DataIntersightHyperflexVmBackupInfo#used_space}
  */
  readonly usedSpace?: number;
  /**
  * error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#error DataIntersightHyperflexVmBackupInfo#error}
  */
  readonly error?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusError;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    description: cdktf.stringToTerraform(struct!.description),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    pct_complete: cdktf.numberToTerraform(struct!.pctComplete),
    status: cdktf.stringToTerraform(struct!.status),
    timestamp: cdktf.numberToTerraform(struct!.timestamp),
    used_space: cdktf.numberToTerraform(struct!.usedSpace),
    error: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusErrorToTerraform(struct!.error),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pct_complete: {
      value: cdktf.numberToHclTerraform(struct!.pctComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.numberToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    used_space: {
      value: cdktf.numberToHclTerraform(struct!.usedSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusErrorToHclTerraform(struct!.error),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusErrorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._pctComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.pctComplete = this._pctComplete;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._usedSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedSpace = this._usedSpace;
    }
    if (this._error?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._description = undefined;
      this._objectType = undefined;
      this._pctComplete = undefined;
      this._status = undefined;
      this._timestamp = undefined;
      this._usedSpace = undefined;
      this._error.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._description = value.description;
      this._objectType = value.objectType;
      this._pctComplete = value.pctComplete;
      this._status = value.status;
      this._timestamp = value.timestamp;
      this._usedSpace = value.usedSpace;
      this._error.internalValue = value.error;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // pct_complete - computed: false, optional: true, required: false
  private _pctComplete?: number; 
  public get pctComplete() {
    return this.getNumberAttribute('pct_complete');
  }
  public set pctComplete(value: number) {
    this._pctComplete = value;
  }
  public resetPctComplete() {
    this._pctComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pctCompleteInput() {
    return this._pctComplete;
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

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: number; 
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }
  public set timestamp(value: number) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // used_space - computed: false, optional: true, required: false
  private _usedSpace?: number; 
  public get usedSpace() {
    return this.getNumberAttribute('used_space');
  }
  public set usedSpace(value: number) {
    this._usedSpace = value;
  }
  public resetUsedSpace() {
    this._usedSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedSpaceInput() {
    return this._usedSpace;
  }

  // error - computed: false, optional: true, required: false
  private _error = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#confignum DataIntersightHyperflexVmBackupInfo#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#id DataIntersightHyperflexVmBackupInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of entity id for this reference.
  * * `VCMOID` - The entity reference ID type is VC MOID.
  * * `VMBIOSUUID` - The entity reference ID type is VM Bios UUID.
  * * `VMDSPATH` - The entity reference ID type is VM Datastore Path.
  * * `VMINSTANCEUUID` - The entity reference ID type is VM Instance UUID.
  * * `VMNAME` - The entity reference ID type is VM Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#idtype DataIntersightHyperflexVmBackupInfo#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#name DataIntersightHyperflexVmBackupInfo#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Type of the entity for this entity reference.
  * * `DISK` - This entity type is a disk.
  * * `PNODE` - This entity type is a P node.
  * * `NODE` - This entity type is a node.
  * * `CLUSTER` - This entity type is a cluster.
  * * `DATASTORE` - This entity is a datastore.
  * * `VIRTNODE` - This entity is a HyperFlex virtual node.
  * * `VIRTCLUSTER` - This entity type is a virtual cluster.
  * * `VIRTDATASTORE` - This entity type is a virtual data store.
  * * `VIRTMACHINE` - This entity type is a virtual machine.
  * * `PDISK` - This entity type is a P disk.
  * * `PDATASTORE` - This entity type is a P Datastore.
  * * `VIRTMACHINESNAPSHOT` - This entity is a virtual machine snapshot.
  * * `FOLDER` - This entity type is a folder.
  * * `RESOURCEPOOL` - This entity type is a resource pool.
  * * `FILE` - This entity type is a file.
  * * `VIRTDATACENTER` - This entity type is a virtual data center.
  * * `REPLICATION_APPLIANCE` - This entity type is a replication appliance.
  * * `REPLICATION_JOB` - This entity type is a replication job.
  * * `IP_POOL` - This entity type is an IP Pool.
  * * `REPLICATION_INFO` - This entity type is a replication information.
  * * `DP_VM_SNAPSHOT` - This entity type is a DP VM Snapshot.
  * * `DP_VMGROUP_SNAPSHOT` - This entity type is a DP VM Group Snapshot.
  * * `DP_VM_CONFIG` - This entity type is a DP VM Configuration.
  * * `DP_VM` - This entity type is a DP VM.
  * * `DP_VMGROUP` - This entity type is a DP VM Group.
  * * `DP_VM_SNAPSHOT_POINT` - This entity type is a DP VM Snapshot Point.
  * * `CLUSTER_PAIR` - This entity is a cluster pair.
  * * `HX_TASK` - This entity type is a HyperFlex task.
  * * `ZONE` - This entity type is a zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#type DataIntersightHyperflexVmBackupInfo#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReferenceOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    confignum: cdktf.numberToTerraform(struct!.confignum),
    id: cdktf.stringToTerraform(struct!.id),
    idtype: cdktf.stringToTerraform(struct!.idtype),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReferenceOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confignum: {
      value: cdktf.numberToHclTerraform(struct!.confignum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idtype: {
      value: cdktf.stringToHclTerraform(struct!.idtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._confignum !== undefined) {
      hasAnyValues = true;
      internalValueResult.confignum = this._confignum;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.idtype = this._idtype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._confignum = undefined;
      this._id = undefined;
      this._idtype = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._confignum = value.confignum;
      this._id = value.id;
      this._idtype = value.idtype;
      this._name = value.name;
      this._objectType = value.objectType;
      this._type = value.type;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // confignum - computed: false, optional: true, required: false
  private _confignum?: number; 
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }
  public set confignum(value: number) {
    this._confignum = value;
  }
  public resetConfignum() {
    this._confignum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confignumInput() {
    return this._confignum;
  }

  // id - computed: false, optional: true, required: false
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

  // idtype - computed: false, optional: true, required: false
  private _idtype?: string; 
  public get idtype() {
    return this.getStringAttribute('idtype');
  }
  public set idtype(value: string) {
    this._idtype = value;
  }
  public resetIdtype() {
    this._idtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idtypeInput() {
    return this._idtype;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
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
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Cluster site for this snapshot.
  * * `PRIMARY` - The cluster site for this backup is primary.
  * * `SECONDARY` - The cluster site for this backup is secondary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#site DataIntersightHyperflexVmBackupInfo#site}
  */
  readonly site?: string;
  /**
  * replication_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#replication_status DataIntersightHyperflexVmBackupInfo#replication_status}
  */
  readonly replicationStatus?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatus;
  /**
  * snapshot_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#snapshot_status DataIntersightHyperflexVmBackupInfo#snapshot_status}
  */
  readonly snapshotStatus?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatus;
  /**
  * vm_snapshot_entity_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#vm_snapshot_entity_reference DataIntersightHyperflexVmBackupInfo#vm_snapshot_entity_reference}
  */
  readonly vmSnapshotEntityReference?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReference;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    site: cdktf.stringToTerraform(struct!.site),
    replication_status: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusToTerraform(struct!.replicationStatus),
    snapshot_status: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusToTerraform(struct!.snapshotStatus),
    vm_snapshot_entity_reference: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReferenceToTerraform(struct!.vmSnapshotEntityReference),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site: {
      value: cdktf.stringToHclTerraform(struct!.site),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_status: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusToHclTerraform(struct!.replicationStatus),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusList",
    },
    snapshot_status: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusToHclTerraform(struct!.snapshotStatus),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusList",
    },
    vm_snapshot_entity_reference: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReferenceToHclTerraform(struct!.vmSnapshotEntityReference),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._site !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site;
    }
    if (this._replicationStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationStatus = this._replicationStatus?.internalValue;
    }
    if (this._snapshotStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotStatus = this._snapshotStatus?.internalValue;
    }
    if (this._vmSnapshotEntityReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSnapshotEntityReference = this._vmSnapshotEntityReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._site = undefined;
      this._replicationStatus.internalValue = undefined;
      this._snapshotStatus.internalValue = undefined;
      this._vmSnapshotEntityReference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._site = value.site;
      this._replicationStatus.internalValue = value.replicationStatus;
      this._snapshotStatus.internalValue = value.snapshotStatus;
      this._vmSnapshotEntityReference.internalValue = value.vmSnapshotEntityReference;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // site - computed: false, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // replication_status - computed: false, optional: true, required: false
  private _replicationStatus = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatusOutputReference(this, "replication_status");
  public get replicationStatus() {
    return this._replicationStatus;
  }
  public putReplicationStatus(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoReplicationStatus) {
    this._replicationStatus.internalValue = value;
  }
  public resetReplicationStatus() {
    this._replicationStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationStatusInput() {
    return this._replicationStatus.internalValue;
  }

  // snapshot_status - computed: false, optional: true, required: false
  private _snapshotStatus = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatusOutputReference(this, "snapshot_status");
  public get snapshotStatus() {
    return this._snapshotStatus;
  }
  public putSnapshotStatus(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoSnapshotStatus) {
    this._snapshotStatus.internalValue = value;
  }
  public resetSnapshotStatus() {
    this._snapshotStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotStatusInput() {
    return this._snapshotStatus.internalValue;
  }

  // vm_snapshot_entity_reference - computed: false, optional: true, required: false
  private _vmSnapshotEntityReference = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReferenceOutputReference(this, "vm_snapshot_entity_reference");
  public get vmSnapshotEntityReference() {
    return this._vmSnapshotEntityReference;
  }
  public putVmSnapshotEntityReference(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoVmSnapshotEntityReference) {
    this._vmSnapshotEntityReference.internalValue = value;
  }
  public resetVmSnapshotEntityReference() {
    this._vmSnapshotEntityReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSnapshotEntityReferenceInput() {
    return this._vmSnapshotEntityReference.internalValue;
  }
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusError {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The error message string for this error stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#message DataIntersightHyperflexVmBackupInfo#message}
  */
  readonly message?: string;
  /**
  * The error message ID for this error stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#message_id DataIntersightHyperflexVmBackupInfo#message_id}
  */
  readonly messageId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusErrorToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusErrorOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    message: cdktf.stringToTerraform(struct!.message),
    message_id: cdktf.numberToTerraform(struct!.messageId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusErrorToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusErrorOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_id: {
      value: cdktf.numberToHclTerraform(struct!.messageId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._messageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageId = this._messageId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._message = undefined;
      this._messageId = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._message = value.message;
      this._messageId = value.messageId;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // message_id - computed: false, optional: true, required: false
  private _messageId?: number; 
  public get messageId() {
    return this.getNumberAttribute('message_id');
  }
  public set messageId(value: number) {
    this._messageId = value;
  }
  public resetMessageId() {
    this._messageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdInput() {
    return this._messageId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#confignum DataIntersightHyperflexVmBackupInfo#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#id DataIntersightHyperflexVmBackupInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of entity id for this reference.
  * * `VCMOID` - The entity reference ID type is VC MOID.
  * * `VMBIOSUUID` - The entity reference ID type is VM Bios UUID.
  * * `VMDSPATH` - The entity reference ID type is VM Datastore Path.
  * * `VMINSTANCEUUID` - The entity reference ID type is VM Instance UUID.
  * * `VMNAME` - The entity reference ID type is VM Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#idtype DataIntersightHyperflexVmBackupInfo#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#name DataIntersightHyperflexVmBackupInfo#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Type of the entity for this entity reference.
  * * `DISK` - This entity type is a disk.
  * * `PNODE` - This entity type is a P node.
  * * `NODE` - This entity type is a node.
  * * `CLUSTER` - This entity type is a cluster.
  * * `DATASTORE` - This entity is a datastore.
  * * `VIRTNODE` - This entity is a HyperFlex virtual node.
  * * `VIRTCLUSTER` - This entity type is a virtual cluster.
  * * `VIRTDATASTORE` - This entity type is a virtual data store.
  * * `VIRTMACHINE` - This entity type is a virtual machine.
  * * `PDISK` - This entity type is a P disk.
  * * `PDATASTORE` - This entity type is a P Datastore.
  * * `VIRTMACHINESNAPSHOT` - This entity is a virtual machine snapshot.
  * * `FOLDER` - This entity type is a folder.
  * * `RESOURCEPOOL` - This entity type is a resource pool.
  * * `FILE` - This entity type is a file.
  * * `VIRTDATACENTER` - This entity type is a virtual data center.
  * * `REPLICATION_APPLIANCE` - This entity type is a replication appliance.
  * * `REPLICATION_JOB` - This entity type is a replication job.
  * * `IP_POOL` - This entity type is an IP Pool.
  * * `REPLICATION_INFO` - This entity type is a replication information.
  * * `DP_VM_SNAPSHOT` - This entity type is a DP VM Snapshot.
  * * `DP_VMGROUP_SNAPSHOT` - This entity type is a DP VM Group Snapshot.
  * * `DP_VM_CONFIG` - This entity type is a DP VM Configuration.
  * * `DP_VM` - This entity type is a DP VM.
  * * `DP_VMGROUP` - This entity type is a DP VM Group.
  * * `DP_VM_SNAPSHOT_POINT` - This entity type is a DP VM Snapshot Point.
  * * `CLUSTER_PAIR` - This entity is a cluster pair.
  * * `HX_TASK` - This entity type is a HyperFlex task.
  * * `ZONE` - This entity type is a zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#type DataIntersightHyperflexVmBackupInfo#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReferenceOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    confignum: cdktf.numberToTerraform(struct!.confignum),
    id: cdktf.stringToTerraform(struct!.id),
    idtype: cdktf.stringToTerraform(struct!.idtype),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReferenceOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confignum: {
      value: cdktf.numberToHclTerraform(struct!.confignum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idtype: {
      value: cdktf.stringToHclTerraform(struct!.idtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._confignum !== undefined) {
      hasAnyValues = true;
      internalValueResult.confignum = this._confignum;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.idtype = this._idtype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._confignum = undefined;
      this._id = undefined;
      this._idtype = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._confignum = value.confignum;
      this._id = value.id;
      this._idtype = value.idtype;
      this._name = value.name;
      this._objectType = value.objectType;
      this._type = value.type;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // confignum - computed: false, optional: true, required: false
  private _confignum?: number; 
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }
  public set confignum(value: number) {
    this._confignum = value;
  }
  public resetConfignum() {
    this._confignum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confignumInput() {
    return this._confignum;
  }

  // id - computed: false, optional: true, required: false
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

  // idtype - computed: false, optional: true, required: false
  private _idtype?: string; 
  public get idtype() {
    return this.getStringAttribute('idtype');
  }
  public set idtype(value: string) {
    this._idtype = value;
  }
  public resetIdtype() {
    this._idtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idtypeInput() {
    return this._idtype;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
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
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatus {
  /**
  * Actual end time for the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#actual DataIntersightHyperflexVmBackupInfo#actual}
  */
  readonly actual?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Expected end time for the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#expected DataIntersightHyperflexVmBackupInfo#expected}
  */
  readonly expected?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * A flag to determine if snapshot delivery is delayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#rpo_exceeded DataIntersightHyperflexVmBackupInfo#rpo_exceeded}
  */
  readonly rpoExceeded?: boolean | cdktf.IResolvable;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatusToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatusOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actual: cdktf.numberToTerraform(struct!.actual),
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    expected: cdktf.numberToTerraform(struct!.expected),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    rpo_exceeded: cdktf.booleanToTerraform(struct!.rpoExceeded),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatusToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatusOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actual: {
      value: cdktf.numberToHclTerraform(struct!.actual),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expected: {
      value: cdktf.numberToHclTerraform(struct!.expected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rpo_exceeded: {
      value: cdktf.booleanToHclTerraform(struct!.rpoExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actual !== undefined) {
      hasAnyValues = true;
      internalValueResult.actual = this._actual;
    }
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._expected !== undefined) {
      hasAnyValues = true;
      internalValueResult.expected = this._expected;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._rpoExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpoExceeded = this._rpoExceeded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actual = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._expected = undefined;
      this._objectType = undefined;
      this._rpoExceeded = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actual = value.actual;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._expected = value.expected;
      this._objectType = value.objectType;
      this._rpoExceeded = value.rpoExceeded;
    }
  }

  // actual - computed: false, optional: true, required: false
  private _actual?: number; 
  public get actual() {
    return this.getNumberAttribute('actual');
  }
  public set actual(value: number) {
    this._actual = value;
  }
  public resetActual() {
    this._actual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actualInput() {
    return this._actual;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // expected - computed: false, optional: true, required: false
  private _expected?: number; 
  public get expected() {
    return this.getNumberAttribute('expected');
  }
  public set expected(value: number) {
    this._expected = value;
  }
  public resetExpected() {
    this._expected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedInput() {
    return this._expected;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // rpo_exceeded - computed: false, optional: true, required: false
  private _rpoExceeded?: boolean | cdktf.IResolvable; 
  public get rpoExceeded() {
    return this.getBooleanAttribute('rpo_exceeded');
  }
  public set rpoExceeded(value: boolean | cdktf.IResolvable) {
    this._rpoExceeded = value;
  }
  public resetRpoExceeded() {
    this._rpoExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoExceededInput() {
    return this._rpoExceeded;
  }
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Number of bytes currently replicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#bytes_replicated DataIntersightHyperflexVmBackupInfo#bytes_replicated}
  */
  readonly bytesReplicated?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Replication end time for this snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#end_time DataIntersightHyperflexVmBackupInfo#end_time}
  */
  readonly endTime?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Completion percentage for the replication job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#pct_complete DataIntersightHyperflexVmBackupInfo#pct_complete}
  */
  readonly pctComplete?: number;
  /**
  * Replication start time for this snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#start_time DataIntersightHyperflexVmBackupInfo#start_time}
  */
  readonly startTime?: number;
  /**
  * Current replication state for a particular snapshot.
  * * `NONE` - Snapshot replication state is none.
  * * `SUCCESS` - Snapshot completed successfully.
  * * `FAILED` - Snapshot failed replication status code.
  * * `PAUSED` - Snapshot replication paused status code.
  * * `IN_USE` - Snapshot replica in use status code.
  * * `STARTING` - Snapshot replication starting.
  * * `REPLICATING` - Snapshot replication in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#status DataIntersightHyperflexVmBackupInfo#status}
  */
  readonly status?: string;
  /**
  * error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#error DataIntersightHyperflexVmBackupInfo#error}
  */
  readonly error?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusError;
  /**
  * pack_entity_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#pack_entity_reference DataIntersightHyperflexVmBackupInfo#pack_entity_reference}
  */
  readonly packEntityReference?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReference;
  /**
  * rpo_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#rpo_status DataIntersightHyperflexVmBackupInfo#rpo_status}
  */
  readonly rpoStatus?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatus;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    bytes_replicated: cdktf.numberToTerraform(struct!.bytesReplicated),
    class_id: cdktf.stringToTerraform(struct!.classId),
    end_time: cdktf.numberToTerraform(struct!.endTime),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    pct_complete: cdktf.numberToTerraform(struct!.pctComplete),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
    error: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusErrorToTerraform(struct!.error),
    pack_entity_reference: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReferenceToTerraform(struct!.packEntityReference),
    rpo_status: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatusToTerraform(struct!.rpoStatus),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bytes_replicated: {
      value: cdktf.numberToHclTerraform(struct!.bytesReplicated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pct_complete: {
      value: cdktf.numberToHclTerraform(struct!.pctComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusErrorToHclTerraform(struct!.error),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusErrorList",
    },
    pack_entity_reference: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReferenceToHclTerraform(struct!.packEntityReference),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReferenceList",
    },
    rpo_status: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatusToHclTerraform(struct!.rpoStatus),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._bytesReplicated !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesReplicated = this._bytesReplicated;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._pctComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.pctComplete = this._pctComplete;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._error?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error?.internalValue;
    }
    if (this._packEntityReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packEntityReference = this._packEntityReference?.internalValue;
    }
    if (this._rpoStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpoStatus = this._rpoStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._bytesReplicated = undefined;
      this._classId = undefined;
      this._endTime = undefined;
      this._objectType = undefined;
      this._pctComplete = undefined;
      this._startTime = undefined;
      this._status = undefined;
      this._error.internalValue = undefined;
      this._packEntityReference.internalValue = undefined;
      this._rpoStatus.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._bytesReplicated = value.bytesReplicated;
      this._classId = value.classId;
      this._endTime = value.endTime;
      this._objectType = value.objectType;
      this._pctComplete = value.pctComplete;
      this._startTime = value.startTime;
      this._status = value.status;
      this._error.internalValue = value.error;
      this._packEntityReference.internalValue = value.packEntityReference;
      this._rpoStatus.internalValue = value.rpoStatus;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // bytes_replicated - computed: false, optional: true, required: false
  private _bytesReplicated?: number; 
  public get bytesReplicated() {
    return this.getNumberAttribute('bytes_replicated');
  }
  public set bytesReplicated(value: number) {
    this._bytesReplicated = value;
  }
  public resetBytesReplicated() {
    this._bytesReplicated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesReplicatedInput() {
    return this._bytesReplicated;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // pct_complete - computed: false, optional: true, required: false
  private _pctComplete?: number; 
  public get pctComplete() {
    return this.getNumberAttribute('pct_complete');
  }
  public set pctComplete(value: number) {
    this._pctComplete = value;
  }
  public resetPctComplete() {
    this._pctComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pctCompleteInput() {
    return this._pctComplete;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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

  // error - computed: false, optional: true, required: false
  private _error = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }

  // pack_entity_reference - computed: false, optional: true, required: false
  private _packEntityReference = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReferenceOutputReference(this, "pack_entity_reference");
  public get packEntityReference() {
    return this._packEntityReference;
  }
  public putPackEntityReference(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusPackEntityReference) {
    this._packEntityReference.internalValue = value;
  }
  public resetPackEntityReference() {
    this._packEntityReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packEntityReferenceInput() {
    return this._packEntityReference.internalValue;
  }

  // rpo_status - computed: false, optional: true, required: false
  private _rpoStatus = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatusOutputReference(this, "rpo_status");
  public get rpoStatus() {
    return this._rpoStatus;
  }
  public putRpoStatus(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusRpoStatus) {
    this._rpoStatus.internalValue = value;
  }
  public resetRpoStatus() {
    this._rpoStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoStatusInput() {
    return this._rpoStatus.internalValue;
  }
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusError {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The error message string for this error stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#message DataIntersightHyperflexVmBackupInfo#message}
  */
  readonly message?: string;
  /**
  * The error message ID for this error stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#message_id DataIntersightHyperflexVmBackupInfo#message_id}
  */
  readonly messageId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusErrorToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusErrorOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    message: cdktf.stringToTerraform(struct!.message),
    message_id: cdktf.numberToTerraform(struct!.messageId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusErrorToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusErrorOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_id: {
      value: cdktf.numberToHclTerraform(struct!.messageId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._messageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageId = this._messageId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._message = undefined;
      this._messageId = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._message = value.message;
      this._messageId = value.messageId;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // message_id - computed: false, optional: true, required: false
  private _messageId?: number; 
  public get messageId() {
    return this.getNumberAttribute('message_id');
  }
  public set messageId(value: number) {
    this._messageId = value;
  }
  public resetMessageId() {
    this._messageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdInput() {
    return this._messageId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Description of this Snapshot Point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#description DataIntersightHyperflexVmBackupInfo#description}
  */
  readonly description?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Completion percentage for this snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#pct_complete DataIntersightHyperflexVmBackupInfo#pct_complete}
  */
  readonly pctComplete?: number;
  /**
  * Current snapshot state for this snapshot.
  * * `SUCCESS` - This snapshot status code is success.
  * * `FAILED` - This snapshot status code is failed.
  * * `IN_PROGRESS` - This snapshot status code is in progress.
  * * `DELETING` - This snapshot status code is deleting.
  * * `DELETED` - This snapshot status code is deleted.
  * * `NONE` - This snapshot status code is none.
  * * `INIT` - This snapshot status code is initializing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#status DataIntersightHyperflexVmBackupInfo#status}
  */
  readonly status?: string;
  /**
  * Timestamp at which the Snapshot is taken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#timestamp DataIntersightHyperflexVmBackupInfo#timestamp}
  */
  readonly timestamp?: number;
  /**
  * Space Used by this Snapshot Point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#used_space DataIntersightHyperflexVmBackupInfo#used_space}
  */
  readonly usedSpace?: number;
  /**
  * error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#error DataIntersightHyperflexVmBackupInfo#error}
  */
  readonly error?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusError;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    description: cdktf.stringToTerraform(struct!.description),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    pct_complete: cdktf.numberToTerraform(struct!.pctComplete),
    status: cdktf.stringToTerraform(struct!.status),
    timestamp: cdktf.numberToTerraform(struct!.timestamp),
    used_space: cdktf.numberToTerraform(struct!.usedSpace),
    error: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusErrorToTerraform(struct!.error),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pct_complete: {
      value: cdktf.numberToHclTerraform(struct!.pctComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.numberToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    used_space: {
      value: cdktf.numberToHclTerraform(struct!.usedSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusErrorToHclTerraform(struct!.error),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusErrorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._pctComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.pctComplete = this._pctComplete;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._usedSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedSpace = this._usedSpace;
    }
    if (this._error?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._description = undefined;
      this._objectType = undefined;
      this._pctComplete = undefined;
      this._status = undefined;
      this._timestamp = undefined;
      this._usedSpace = undefined;
      this._error.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._description = value.description;
      this._objectType = value.objectType;
      this._pctComplete = value.pctComplete;
      this._status = value.status;
      this._timestamp = value.timestamp;
      this._usedSpace = value.usedSpace;
      this._error.internalValue = value.error;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // pct_complete - computed: false, optional: true, required: false
  private _pctComplete?: number; 
  public get pctComplete() {
    return this.getNumberAttribute('pct_complete');
  }
  public set pctComplete(value: number) {
    this._pctComplete = value;
  }
  public resetPctComplete() {
    this._pctComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pctCompleteInput() {
    return this._pctComplete;
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

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: number; 
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }
  public set timestamp(value: number) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // used_space - computed: false, optional: true, required: false
  private _usedSpace?: number; 
  public get usedSpace() {
    return this.getNumberAttribute('used_space');
  }
  public set usedSpace(value: number) {
    this._usedSpace = value;
  }
  public resetUsedSpace() {
    this._usedSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedSpaceInput() {
    return this._usedSpace;
  }

  // error - computed: false, optional: true, required: false
  private _error = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#confignum DataIntersightHyperflexVmBackupInfo#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#id DataIntersightHyperflexVmBackupInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of entity id for this reference.
  * * `VCMOID` - The entity reference ID type is VC MOID.
  * * `VMBIOSUUID` - The entity reference ID type is VM Bios UUID.
  * * `VMDSPATH` - The entity reference ID type is VM Datastore Path.
  * * `VMINSTANCEUUID` - The entity reference ID type is VM Instance UUID.
  * * `VMNAME` - The entity reference ID type is VM Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#idtype DataIntersightHyperflexVmBackupInfo#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#name DataIntersightHyperflexVmBackupInfo#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Type of the entity for this entity reference.
  * * `DISK` - This entity type is a disk.
  * * `PNODE` - This entity type is a P node.
  * * `NODE` - This entity type is a node.
  * * `CLUSTER` - This entity type is a cluster.
  * * `DATASTORE` - This entity is a datastore.
  * * `VIRTNODE` - This entity is a HyperFlex virtual node.
  * * `VIRTCLUSTER` - This entity type is a virtual cluster.
  * * `VIRTDATASTORE` - This entity type is a virtual data store.
  * * `VIRTMACHINE` - This entity type is a virtual machine.
  * * `PDISK` - This entity type is a P disk.
  * * `PDATASTORE` - This entity type is a P Datastore.
  * * `VIRTMACHINESNAPSHOT` - This entity is a virtual machine snapshot.
  * * `FOLDER` - This entity type is a folder.
  * * `RESOURCEPOOL` - This entity type is a resource pool.
  * * `FILE` - This entity type is a file.
  * * `VIRTDATACENTER` - This entity type is a virtual data center.
  * * `REPLICATION_APPLIANCE` - This entity type is a replication appliance.
  * * `REPLICATION_JOB` - This entity type is a replication job.
  * * `IP_POOL` - This entity type is an IP Pool.
  * * `REPLICATION_INFO` - This entity type is a replication information.
  * * `DP_VM_SNAPSHOT` - This entity type is a DP VM Snapshot.
  * * `DP_VMGROUP_SNAPSHOT` - This entity type is a DP VM Group Snapshot.
  * * `DP_VM_CONFIG` - This entity type is a DP VM Configuration.
  * * `DP_VM` - This entity type is a DP VM.
  * * `DP_VMGROUP` - This entity type is a DP VM Group.
  * * `DP_VM_SNAPSHOT_POINT` - This entity type is a DP VM Snapshot Point.
  * * `CLUSTER_PAIR` - This entity is a cluster pair.
  * * `HX_TASK` - This entity type is a HyperFlex task.
  * * `ZONE` - This entity type is a zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#type DataIntersightHyperflexVmBackupInfo#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReferenceOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    confignum: cdktf.numberToTerraform(struct!.confignum),
    id: cdktf.stringToTerraform(struct!.id),
    idtype: cdktf.stringToTerraform(struct!.idtype),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReferenceOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confignum: {
      value: cdktf.numberToHclTerraform(struct!.confignum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idtype: {
      value: cdktf.stringToHclTerraform(struct!.idtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._confignum !== undefined) {
      hasAnyValues = true;
      internalValueResult.confignum = this._confignum;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.idtype = this._idtype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._confignum = undefined;
      this._id = undefined;
      this._idtype = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._confignum = value.confignum;
      this._id = value.id;
      this._idtype = value.idtype;
      this._name = value.name;
      this._objectType = value.objectType;
      this._type = value.type;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // confignum - computed: false, optional: true, required: false
  private _confignum?: number; 
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }
  public set confignum(value: number) {
    this._confignum = value;
  }
  public resetConfignum() {
    this._confignum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confignumInput() {
    return this._confignum;
  }

  // id - computed: false, optional: true, required: false
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

  // idtype - computed: false, optional: true, required: false
  private _idtype?: string; 
  public get idtype() {
    return this.getStringAttribute('idtype');
  }
  public set idtype(value: string) {
    this._idtype = value;
  }
  public resetIdtype() {
    this._idtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idtypeInput() {
    return this._idtype;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
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
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Cluster site for this snapshot.
  * * `PRIMARY` - The cluster site for this backup is primary.
  * * `SECONDARY` - The cluster site for this backup is secondary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#site DataIntersightHyperflexVmBackupInfo#site}
  */
  readonly site?: string;
  /**
  * replication_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#replication_status DataIntersightHyperflexVmBackupInfo#replication_status}
  */
  readonly replicationStatus?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatus;
  /**
  * snapshot_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#snapshot_status DataIntersightHyperflexVmBackupInfo#snapshot_status}
  */
  readonly snapshotStatus?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatus;
  /**
  * vm_snapshot_entity_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#vm_snapshot_entity_reference DataIntersightHyperflexVmBackupInfo#vm_snapshot_entity_reference}
  */
  readonly vmSnapshotEntityReference?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReference;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    site: cdktf.stringToTerraform(struct!.site),
    replication_status: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusToTerraform(struct!.replicationStatus),
    snapshot_status: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusToTerraform(struct!.snapshotStatus),
    vm_snapshot_entity_reference: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReferenceToTerraform(struct!.vmSnapshotEntityReference),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site: {
      value: cdktf.stringToHclTerraform(struct!.site),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_status: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusToHclTerraform(struct!.replicationStatus),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusList",
    },
    snapshot_status: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusToHclTerraform(struct!.snapshotStatus),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusList",
    },
    vm_snapshot_entity_reference: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReferenceToHclTerraform(struct!.vmSnapshotEntityReference),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._site !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site;
    }
    if (this._replicationStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationStatus = this._replicationStatus?.internalValue;
    }
    if (this._snapshotStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotStatus = this._snapshotStatus?.internalValue;
    }
    if (this._vmSnapshotEntityReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSnapshotEntityReference = this._vmSnapshotEntityReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._site = undefined;
      this._replicationStatus.internalValue = undefined;
      this._snapshotStatus.internalValue = undefined;
      this._vmSnapshotEntityReference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._site = value.site;
      this._replicationStatus.internalValue = value.replicationStatus;
      this._snapshotStatus.internalValue = value.snapshotStatus;
      this._vmSnapshotEntityReference.internalValue = value.vmSnapshotEntityReference;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // site - computed: false, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // replication_status - computed: false, optional: true, required: false
  private _replicationStatus = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatusOutputReference(this, "replication_status");
  public get replicationStatus() {
    return this._replicationStatus;
  }
  public putReplicationStatus(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoReplicationStatus) {
    this._replicationStatus.internalValue = value;
  }
  public resetReplicationStatus() {
    this._replicationStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationStatusInput() {
    return this._replicationStatus.internalValue;
  }

  // snapshot_status - computed: false, optional: true, required: false
  private _snapshotStatus = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatusOutputReference(this, "snapshot_status");
  public get snapshotStatus() {
    return this._snapshotStatus;
  }
  public putSnapshotStatus(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoSnapshotStatus) {
    this._snapshotStatus.internalValue = value;
  }
  public resetSnapshotStatus() {
    this._snapshotStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotStatusInput() {
    return this._snapshotStatus.internalValue;
  }

  // vm_snapshot_entity_reference - computed: false, optional: true, required: false
  private _vmSnapshotEntityReference = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReferenceOutputReference(this, "vm_snapshot_entity_reference");
  public get vmSnapshotEntityReference() {
    return this._vmSnapshotEntityReference;
  }
  public putVmSnapshotEntityReference(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoVmSnapshotEntityReference) {
    this._vmSnapshotEntityReference.internalValue = value;
  }
  public resetVmSnapshotEntityReference() {
    this._vmSnapshotEntityReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSnapshotEntityReferenceInput() {
    return this._vmSnapshotEntityReference.internalValue;
  }
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmSpaceUsage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Space usage of the Virtual Machine from StDataServiceManager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#space_usage DataIntersightHyperflexVmBackupInfo#space_usage}
  */
  readonly spaceUsage?: number;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmSpaceUsageToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmSpaceUsageOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmSpaceUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    space_usage: cdktf.numberToTerraform(struct!.spaceUsage),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmSpaceUsageToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmSpaceUsageOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmSpaceUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space_usage: {
      value: cdktf.numberToHclTerraform(struct!.spaceUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmSpaceUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmSpaceUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._spaceUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceUsage = this._spaceUsage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmSpaceUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._spaceUsage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._spaceUsage = value.spaceUsage;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // space_usage - computed: false, optional: true, required: false
  private _spaceUsage?: number; 
  public get spaceUsage() {
    return this.getNumberAttribute('space_usage');
  }
  public set spaceUsage(value: number) {
    this._spaceUsage = value;
  }
  public resetSpaceUsage() {
    this._spaceUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceUsageInput() {
    return this._spaceUsage;
  }
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * vm_current_protection_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#vm_current_protection_info DataIntersightHyperflexVmBackupInfo#vm_current_protection_info}
  */
  readonly vmCurrentProtectionInfo?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfo;
  /**
  * vm_last_successful_protection_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#vm_last_successful_protection_info DataIntersightHyperflexVmBackupInfo#vm_last_successful_protection_info}
  */
  readonly vmLastSuccessfulProtectionInfo?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfo;
  /**
  * vm_space_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#vm_space_usage DataIntersightHyperflexVmBackupInfo#vm_space_usage}
  */
  readonly vmSpaceUsage?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmSpaceUsage;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    vm_current_protection_info: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoToTerraform(struct!.vmCurrentProtectionInfo),
    vm_last_successful_protection_info: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoToTerraform(struct!.vmLastSuccessfulProtectionInfo),
    vm_space_usage: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmSpaceUsageToTerraform(struct!.vmSpaceUsage),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoOutputReference | DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_current_protection_info: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoToHclTerraform(struct!.vmCurrentProtectionInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoList",
    },
    vm_last_successful_protection_info: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoToHclTerraform(struct!.vmLastSuccessfulProtectionInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoList",
    },
    vm_space_usage: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmSpaceUsageToHclTerraform(struct!.vmSpaceUsage),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmSpaceUsageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._vmCurrentProtectionInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmCurrentProtectionInfo = this._vmCurrentProtectionInfo?.internalValue;
    }
    if (this._vmLastSuccessfulProtectionInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmLastSuccessfulProtectionInfo = this._vmLastSuccessfulProtectionInfo?.internalValue;
    }
    if (this._vmSpaceUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSpaceUsage = this._vmSpaceUsage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._vmCurrentProtectionInfo.internalValue = undefined;
      this._vmLastSuccessfulProtectionInfo.internalValue = undefined;
      this._vmSpaceUsage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._vmCurrentProtectionInfo.internalValue = value.vmCurrentProtectionInfo;
      this._vmLastSuccessfulProtectionInfo.internalValue = value.vmLastSuccessfulProtectionInfo;
      this._vmSpaceUsage.internalValue = value.vmSpaceUsage;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // vm_current_protection_info - computed: false, optional: true, required: false
  private _vmCurrentProtectionInfo = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfoOutputReference(this, "vm_current_protection_info");
  public get vmCurrentProtectionInfo() {
    return this._vmCurrentProtectionInfo;
  }
  public putVmCurrentProtectionInfo(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmCurrentProtectionInfo) {
    this._vmCurrentProtectionInfo.internalValue = value;
  }
  public resetVmCurrentProtectionInfo() {
    this._vmCurrentProtectionInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmCurrentProtectionInfoInput() {
    return this._vmCurrentProtectionInfo.internalValue;
  }

  // vm_last_successful_protection_info - computed: false, optional: true, required: false
  private _vmLastSuccessfulProtectionInfo = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfoOutputReference(this, "vm_last_successful_protection_info");
  public get vmLastSuccessfulProtectionInfo() {
    return this._vmLastSuccessfulProtectionInfo;
  }
  public putVmLastSuccessfulProtectionInfo(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmLastSuccessfulProtectionInfo) {
    this._vmLastSuccessfulProtectionInfo.internalValue = value;
  }
  public resetVmLastSuccessfulProtectionInfo() {
    this._vmLastSuccessfulProtectionInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmLastSuccessfulProtectionInfoInput() {
    return this._vmLastSuccessfulProtectionInfo.internalValue;
  }

  // vm_space_usage - computed: false, optional: true, required: false
  private _vmSpaceUsage = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmSpaceUsageOutputReference(this, "vm_space_usage");
  public get vmSpaceUsage() {
    return this._vmSpaceUsage;
  }
  public putVmSpaceUsage(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoVmSpaceUsage) {
    this._vmSpaceUsage.internalValue = value;
  }
  public resetVmSpaceUsage() {
    this._vmSpaceUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSpaceUsageInput() {
    return this._vmSpaceUsage.internalValue;
  }
}
export interface DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Cluster Id we are using to map to ProtectionInfo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#cluster_id DataIntersightHyperflexVmBackupInfo#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * protection_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#protection_info DataIntersightHyperflexVmBackupInfo#protection_info}
  */
  readonly protectionInfo?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfo;
}

export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapToTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    protection_info: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoToTerraform(struct!.protectionInfo),
  }
}


export function dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_info: {
      value: dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoToHclTerraform(struct!.protectionInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._protectionInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionInfo = this._protectionInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._clusterId = undefined;
      this._objectType = undefined;
      this._protectionInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._clusterId = value.clusterId;
      this._objectType = value.objectType;
      this._protectionInfo.internalValue = value.protectionInfo;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // protection_info - computed: false, optional: true, required: false
  private _protectionInfo = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfoOutputReference(this, "protection_info");
  public get protectionInfo() {
    return this._protectionInfo;
  }
  public putProtectionInfo(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapProtectionInfo) {
    this._protectionInfo.internalValue = value;
  }
  public resetProtectionInfo() {
    this._protectionInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionInfoInput() {
    return this._protectionInfo.internalValue;
  }
}

export class DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMap[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapOutputReference {
    return new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoError {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The error message string for this error stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#message DataIntersightHyperflexVmBackupInfo#message}
  */
  readonly message?: string;
  /**
  * The error message ID for this error stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#message_id DataIntersightHyperflexVmBackupInfo#message_id}
  */
  readonly messageId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightHyperflexVmBackupInfoErrorToTerraform(struct?: DataIntersightHyperflexVmBackupInfoErrorOutputReference | DataIntersightHyperflexVmBackupInfoError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    message: cdktf.stringToTerraform(struct!.message),
    message_id: cdktf.numberToTerraform(struct!.messageId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightHyperflexVmBackupInfoErrorToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoErrorOutputReference | DataIntersightHyperflexVmBackupInfoError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_id: {
      value: cdktf.numberToHclTerraform(struct!.messageId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._messageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageId = this._messageId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._message = undefined;
      this._messageId = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._message = value.message;
      this._messageId = value.messageId;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // message_id - computed: false, optional: true, required: false
  private _messageId?: number; 
  public get messageId() {
    return this.getNumberAttribute('message_id');
  }
  public set messageId(value: number) {
    this._messageId = value;
  }
  public resetMessageId() {
    this._messageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdInput() {
    return this._messageId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightHyperflexVmBackupInfoParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#moid DataIntersightHyperflexVmBackupInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#selector DataIntersightHyperflexVmBackupInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmBackupInfoParentToTerraform(struct?: DataIntersightHyperflexVmBackupInfoParentOutputReference | DataIntersightHyperflexVmBackupInfoParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexVmBackupInfoParentToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoParentOutputReference | DataIntersightHyperflexVmBackupInfoParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexVmBackupInfoPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#moid DataIntersightHyperflexVmBackupInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#selector DataIntersightHyperflexVmBackupInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmBackupInfoPermissionResourcesToTerraform(struct?: DataIntersightHyperflexVmBackupInfoPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexVmBackupInfoPermissionResourcesToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoPermissionResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoPermissionResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexVmBackupInfoPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexVmBackupInfoPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoPermissionResourcesOutputReference {
    return new DataIntersightHyperflexVmBackupInfoPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoScheduleSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Time interval between two copies in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#backup_interval DataIntersightHyperflexVmBackupInfo#backup_interval}
  */
  readonly backupInterval?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightHyperflexVmBackupInfoScheduleScheduleToTerraform(struct?: DataIntersightHyperflexVmBackupInfoScheduleScheduleOutputReference | DataIntersightHyperflexVmBackupInfoScheduleSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    backup_interval: cdktf.numberToTerraform(struct!.backupInterval),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightHyperflexVmBackupInfoScheduleScheduleToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoScheduleScheduleOutputReference | DataIntersightHyperflexVmBackupInfoScheduleSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_interval: {
      value: cdktf.numberToHclTerraform(struct!.backupInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoScheduleScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoScheduleSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._backupInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupInterval = this._backupInterval;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoScheduleSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._backupInterval = undefined;
      this._classId = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._backupInterval = value.backupInterval;
      this._classId = value.classId;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // backup_interval - computed: false, optional: true, required: false
  private _backupInterval?: number; 
  public get backupInterval() {
    return this.getNumberAttribute('backup_interval');
  }
  public set backupInterval(value: number) {
    this._backupInterval = value;
  }
  public resetBackupInterval() {
    this._backupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIntervalInput() {
    return this._backupInterval;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightHyperflexVmBackupInfoScheduleTargetClusterEntityReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#confignum DataIntersightHyperflexVmBackupInfo#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#id DataIntersightHyperflexVmBackupInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of entity id for this reference.
  * * `VCMOID` - The entity reference ID type is VC MOID.
  * * `VMBIOSUUID` - The entity reference ID type is VM Bios UUID.
  * * `VMDSPATH` - The entity reference ID type is VM Datastore Path.
  * * `VMINSTANCEUUID` - The entity reference ID type is VM Instance UUID.
  * * `VMNAME` - The entity reference ID type is VM Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#idtype DataIntersightHyperflexVmBackupInfo#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#name DataIntersightHyperflexVmBackupInfo#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Type of the entity for this entity reference.
  * * `DISK` - This entity type is a disk.
  * * `PNODE` - This entity type is a P node.
  * * `NODE` - This entity type is a node.
  * * `CLUSTER` - This entity type is a cluster.
  * * `DATASTORE` - This entity is a datastore.
  * * `VIRTNODE` - This entity is a HyperFlex virtual node.
  * * `VIRTCLUSTER` - This entity type is a virtual cluster.
  * * `VIRTDATASTORE` - This entity type is a virtual data store.
  * * `VIRTMACHINE` - This entity type is a virtual machine.
  * * `PDISK` - This entity type is a P disk.
  * * `PDATASTORE` - This entity type is a P Datastore.
  * * `VIRTMACHINESNAPSHOT` - This entity is a virtual machine snapshot.
  * * `FOLDER` - This entity type is a folder.
  * * `RESOURCEPOOL` - This entity type is a resource pool.
  * * `FILE` - This entity type is a file.
  * * `VIRTDATACENTER` - This entity type is a virtual data center.
  * * `REPLICATION_APPLIANCE` - This entity type is a replication appliance.
  * * `REPLICATION_JOB` - This entity type is a replication job.
  * * `IP_POOL` - This entity type is an IP Pool.
  * * `REPLICATION_INFO` - This entity type is a replication information.
  * * `DP_VM_SNAPSHOT` - This entity type is a DP VM Snapshot.
  * * `DP_VMGROUP_SNAPSHOT` - This entity type is a DP VM Group Snapshot.
  * * `DP_VM_CONFIG` - This entity type is a DP VM Configuration.
  * * `DP_VM` - This entity type is a DP VM.
  * * `DP_VMGROUP` - This entity type is a DP VM Group.
  * * `DP_VM_SNAPSHOT_POINT` - This entity type is a DP VM Snapshot Point.
  * * `CLUSTER_PAIR` - This entity is a cluster pair.
  * * `HX_TASK` - This entity type is a HyperFlex task.
  * * `ZONE` - This entity type is a zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#type DataIntersightHyperflexVmBackupInfo#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexVmBackupInfoScheduleTargetClusterEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmBackupInfoScheduleTargetClusterEntityReferenceOutputReference | DataIntersightHyperflexVmBackupInfoScheduleTargetClusterEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    confignum: cdktf.numberToTerraform(struct!.confignum),
    id: cdktf.stringToTerraform(struct!.id),
    idtype: cdktf.stringToTerraform(struct!.idtype),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataIntersightHyperflexVmBackupInfoScheduleTargetClusterEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoScheduleTargetClusterEntityReferenceOutputReference | DataIntersightHyperflexVmBackupInfoScheduleTargetClusterEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confignum: {
      value: cdktf.numberToHclTerraform(struct!.confignum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idtype: {
      value: cdktf.stringToHclTerraform(struct!.idtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataIntersightHyperflexVmBackupInfoScheduleTargetClusterEntityReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoScheduleTargetClusterEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._confignum !== undefined) {
      hasAnyValues = true;
      internalValueResult.confignum = this._confignum;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.idtype = this._idtype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoScheduleTargetClusterEntityReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._confignum = undefined;
      this._id = undefined;
      this._idtype = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._confignum = value.confignum;
      this._id = value.id;
      this._idtype = value.idtype;
      this._name = value.name;
      this._objectType = value.objectType;
      this._type = value.type;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // confignum - computed: false, optional: true, required: false
  private _confignum?: number; 
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }
  public set confignum(value: number) {
    this._confignum = value;
  }
  public resetConfignum() {
    this._confignum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confignumInput() {
    return this._confignum;
  }

  // id - computed: false, optional: true, required: false
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

  // idtype - computed: false, optional: true, required: false
  private _idtype?: string; 
  public get idtype() {
    return this.getStringAttribute('idtype');
  }
  public set idtype(value: string) {
    this._idtype = value;
  }
  public resetIdtype() {
    this._idtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idtypeInput() {
    return this._idtype;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
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
}
export interface DataIntersightHyperflexVmBackupInfoSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#schedule DataIntersightHyperflexVmBackupInfo#schedule}
  */
  readonly schedule?: DataIntersightHyperflexVmBackupInfoScheduleSchedule;
  /**
  * target_cluster_entity_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#target_cluster_entity_reference DataIntersightHyperflexVmBackupInfo#target_cluster_entity_reference}
  */
  readonly targetClusterEntityReference?: DataIntersightHyperflexVmBackupInfoScheduleTargetClusterEntityReference;
}

export function dataIntersightHyperflexVmBackupInfoScheduleToTerraform(struct?: DataIntersightHyperflexVmBackupInfoSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    schedule: dataIntersightHyperflexVmBackupInfoScheduleScheduleToTerraform(struct!.schedule),
    target_cluster_entity_reference: dataIntersightHyperflexVmBackupInfoScheduleTargetClusterEntityReferenceToTerraform(struct!.targetClusterEntityReference),
  }
}


export function dataIntersightHyperflexVmBackupInfoScheduleToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: dataIntersightHyperflexVmBackupInfoScheduleScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoScheduleScheduleList",
    },
    target_cluster_entity_reference: {
      value: dataIntersightHyperflexVmBackupInfoScheduleTargetClusterEntityReferenceToHclTerraform(struct!.targetClusterEntityReference),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoScheduleTargetClusterEntityReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._targetClusterEntityReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetClusterEntityReference = this._targetClusterEntityReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._schedule.internalValue = undefined;
      this._targetClusterEntityReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._schedule.internalValue = value.schedule;
      this._targetClusterEntityReference.internalValue = value.targetClusterEntityReference;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new DataIntersightHyperflexVmBackupInfoScheduleScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataIntersightHyperflexVmBackupInfoScheduleSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // target_cluster_entity_reference - computed: false, optional: true, required: false
  private _targetClusterEntityReference = new DataIntersightHyperflexVmBackupInfoScheduleTargetClusterEntityReferenceOutputReference(this, "target_cluster_entity_reference");
  public get targetClusterEntityReference() {
    return this._targetClusterEntityReference;
  }
  public putTargetClusterEntityReference(value: DataIntersightHyperflexVmBackupInfoScheduleTargetClusterEntityReference) {
    this._targetClusterEntityReference.internalValue = value;
  }
  public resetTargetClusterEntityReference() {
    this._targetClusterEntityReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetClusterEntityReferenceInput() {
    return this._targetClusterEntityReference.internalValue;
  }
}

export class DataIntersightHyperflexVmBackupInfoScheduleList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexVmBackupInfoSchedule[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoScheduleOutputReference {
    return new DataIntersightHyperflexVmBackupInfoScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoSrcBackupCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#moid DataIntersightHyperflexVmBackupInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#selector DataIntersightHyperflexVmBackupInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmBackupInfoSrcBackupClusterToTerraform(struct?: DataIntersightHyperflexVmBackupInfoSrcBackupClusterOutputReference | DataIntersightHyperflexVmBackupInfoSrcBackupCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexVmBackupInfoSrcBackupClusterToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoSrcBackupClusterOutputReference | DataIntersightHyperflexVmBackupInfoSrcBackupCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoSrcBackupClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoSrcBackupCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoSrcBackupCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexVmBackupInfoSrcCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#moid DataIntersightHyperflexVmBackupInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#selector DataIntersightHyperflexVmBackupInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmBackupInfoSrcClusterToTerraform(struct?: DataIntersightHyperflexVmBackupInfoSrcClusterOutputReference | DataIntersightHyperflexVmBackupInfoSrcCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexVmBackupInfoSrcClusterToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoSrcClusterOutputReference | DataIntersightHyperflexVmBackupInfoSrcCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoSrcClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoSrcCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoSrcCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexVmBackupInfoTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#moid DataIntersightHyperflexVmBackupInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#selector DataIntersightHyperflexVmBackupInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmBackupInfoTagsAncestorDefinitionsToTerraform(struct?: DataIntersightHyperflexVmBackupInfoTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexVmBackupInfoTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoTagsAncestorDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexVmBackupInfoTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexVmBackupInfoTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoTagsAncestorDefinitionsOutputReference {
    return new DataIntersightHyperflexVmBackupInfoTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#moid DataIntersightHyperflexVmBackupInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#selector DataIntersightHyperflexVmBackupInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmBackupInfoTagsDefinitionToTerraform(struct?: DataIntersightHyperflexVmBackupInfoTagsDefinitionOutputReference | DataIntersightHyperflexVmBackupInfoTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexVmBackupInfoTagsDefinitionToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoTagsDefinitionOutputReference | DataIntersightHyperflexVmBackupInfoTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexVmBackupInfoTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#key DataIntersightHyperflexVmBackupInfo#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#propagated DataIntersightHyperflexVmBackupInfo#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the tag is user-defined or owned by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#sys_tag DataIntersightHyperflexVmBackupInfo#sys_tag}
  */
  readonly sysTag?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#type DataIntersightHyperflexVmBackupInfo#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#value DataIntersightHyperflexVmBackupInfo#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#ancestor_definitions DataIntersightHyperflexVmBackupInfo#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightHyperflexVmBackupInfoTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#definition DataIntersightHyperflexVmBackupInfo#definition}
  */
  readonly definition?: DataIntersightHyperflexVmBackupInfoTagsDefinition;
}

export function dataIntersightHyperflexVmBackupInfoTagsToTerraform(struct?: DataIntersightHyperflexVmBackupInfoTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    sys_tag: cdktf.booleanToTerraform(struct!.sysTag),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    ancestor_definitions: cdktf.listMapper(dataIntersightHyperflexVmBackupInfoTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightHyperflexVmBackupInfoTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightHyperflexVmBackupInfoTagsToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagated: {
      value: cdktf.booleanToHclTerraform(struct!.propagated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sys_tag: {
      value: cdktf.booleanToHclTerraform(struct!.sysTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ancestor_definitions: {
      value: cdktf.listMapperHcl(dataIntersightHyperflexVmBackupInfoTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightHyperflexVmBackupInfoTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propagated !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagated = this._propagated;
    }
    if (this._sysTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysTag = this._sysTag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._ancestorDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestorDefinitions = this._ancestorDefinitions?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._key = undefined;
      this._propagated = undefined;
      this._sysTag = undefined;
      this._type = undefined;
      this._value = undefined;
      this._ancestorDefinitions.internalValue = undefined;
      this._definition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._key = value.key;
      this._propagated = value.propagated;
      this._sysTag = value.sysTag;
      this._type = value.type;
      this._value = value.value;
      this._ancestorDefinitions.internalValue = value.ancestorDefinitions;
      this._definition.internalValue = value.definition;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // propagated - computed: false, optional: true, required: false
  private _propagated?: boolean | cdktf.IResolvable; 
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }
  public set propagated(value: boolean | cdktf.IResolvable) {
    this._propagated = value;
  }
  public resetPropagated() {
    this._propagated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedInput() {
    return this._propagated;
  }

  // sys_tag - computed: false, optional: true, required: false
  private _sysTag?: boolean | cdktf.IResolvable; 
  public get sysTag() {
    return this.getBooleanAttribute('sys_tag');
  }
  public set sysTag(value: boolean | cdktf.IResolvable) {
    this._sysTag = value;
  }
  public resetSysTag() {
    this._sysTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysTagInput() {
    return this._sysTag;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // ancestor_definitions - computed: false, optional: true, required: false
  private _ancestorDefinitions = new DataIntersightHyperflexVmBackupInfoTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightHyperflexVmBackupInfoTagsAncestorDefinitions[] | cdktf.IResolvable) {
    this._ancestorDefinitions.internalValue = value;
  }
  public resetAncestorDefinitions() {
    this._ancestorDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorDefinitionsInput() {
    return this._ancestorDefinitions.internalValue;
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new DataIntersightHyperflexVmBackupInfoTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightHyperflexVmBackupInfoTagsDefinition) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }
}

export class DataIntersightHyperflexVmBackupInfoTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexVmBackupInfoTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoTagsOutputReference {
    return new DataIntersightHyperflexVmBackupInfoTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoTgtCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#moid DataIntersightHyperflexVmBackupInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#selector DataIntersightHyperflexVmBackupInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmBackupInfoTgtClusterToTerraform(struct?: DataIntersightHyperflexVmBackupInfoTgtClusterOutputReference | DataIntersightHyperflexVmBackupInfoTgtCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexVmBackupInfoTgtClusterToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoTgtClusterOutputReference | DataIntersightHyperflexVmBackupInfoTgtCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoTgtClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoTgtCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoTgtCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexVmBackupInfoVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#moid DataIntersightHyperflexVmBackupInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#selector DataIntersightHyperflexVmBackupInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmBackupInfoVersionContextInterestedMosToTerraform(struct?: DataIntersightHyperflexVmBackupInfoVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexVmBackupInfoVersionContextInterestedMosToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmBackupInfoVersionContextInterestedMos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoVersionContextInterestedMos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexVmBackupInfoVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexVmBackupInfoVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexVmBackupInfoVersionContextInterestedMosOutputReference {
    return new DataIntersightHyperflexVmBackupInfoVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmBackupInfoVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#moid DataIntersightHyperflexVmBackupInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#selector DataIntersightHyperflexVmBackupInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmBackupInfoVersionContextRefMoToTerraform(struct?: DataIntersightHyperflexVmBackupInfoVersionContextRefMoOutputReference | DataIntersightHyperflexVmBackupInfoVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexVmBackupInfoVersionContextRefMoToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoVersionContextRefMoOutputReference | DataIntersightHyperflexVmBackupInfoVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexVmBackupInfoVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#marked_for_deletion DataIntersightHyperflexVmBackupInfo#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#nr_version DataIntersightHyperflexVmBackupInfo#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#timestamp DataIntersightHyperflexVmBackupInfo#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Specifies type of version. Currently the only supported value is "Configured"
  * that is used to keep track of snapshots of policies and profiles that are intended
  * to be configured to target endpoints.
  * * `Modified` - Version created every time an object is modified.
  * * `Configured` - Version created every time an object is configured to the service profile.
  * * `Deployed` - Version created for objects related to a service profile when it is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#version_type DataIntersightHyperflexVmBackupInfo#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#interested_mos DataIntersightHyperflexVmBackupInfo#interested_mos}
  */
  readonly interestedMos?: DataIntersightHyperflexVmBackupInfoVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#ref_mo DataIntersightHyperflexVmBackupInfo#ref_mo}
  */
  readonly refMo?: DataIntersightHyperflexVmBackupInfoVersionContextRefMo;
}

export function dataIntersightHyperflexVmBackupInfoVersionContextToTerraform(struct?: DataIntersightHyperflexVmBackupInfoVersionContextOutputReference | DataIntersightHyperflexVmBackupInfoVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    marked_for_deletion: cdktf.booleanToTerraform(struct!.markedForDeletion),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    version_type: cdktf.stringToTerraform(struct!.versionType),
    interested_mos: cdktf.listMapper(dataIntersightHyperflexVmBackupInfoVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightHyperflexVmBackupInfoVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightHyperflexVmBackupInfoVersionContextToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoVersionContextOutputReference | DataIntersightHyperflexVmBackupInfoVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marked_for_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.markedForDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nr_version: {
      value: cdktf.stringToHclTerraform(struct!.nrVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_type: {
      value: cdktf.stringToHclTerraform(struct!.versionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interested_mos: {
      value: cdktf.listMapperHcl(dataIntersightHyperflexVmBackupInfoVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightHyperflexVmBackupInfoVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._markedForDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.markedForDeletion = this._markedForDeletion;
    }
    if (this._nrVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrVersion = this._nrVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    if (this._interestedMos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interestedMos = this._interestedMos?.internalValue;
    }
    if (this._refMo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refMo = this._refMo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._markedForDeletion = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._timestamp = undefined;
      this._versionType = undefined;
      this._interestedMos.internalValue = undefined;
      this._refMo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._markedForDeletion = value.markedForDeletion;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._timestamp = value.timestamp;
      this._versionType = value.versionType;
      this._interestedMos.internalValue = value.interestedMos;
      this._refMo.internalValue = value.refMo;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // marked_for_deletion - computed: false, optional: true, required: false
  private _markedForDeletion?: boolean | cdktf.IResolvable; 
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }
  public set markedForDeletion(value: boolean | cdktf.IResolvable) {
    this._markedForDeletion = value;
  }
  public resetMarkedForDeletion() {
    this._markedForDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markedForDeletionInput() {
    return this._markedForDeletion;
  }

  // nr_version - computed: false, optional: true, required: false
  private _nrVersion?: string; 
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }
  public set nrVersion(value: string) {
    this._nrVersion = value;
  }
  public resetNrVersion() {
    this._nrVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrVersionInput() {
    return this._nrVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // version_type - computed: false, optional: true, required: false
  private _versionType?: string; 
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
  public set versionType(value: string) {
    this._versionType = value;
  }
  public resetVersionType() {
    this._versionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTypeInput() {
    return this._versionType;
  }

  // interested_mos - computed: false, optional: true, required: false
  private _interestedMos = new DataIntersightHyperflexVmBackupInfoVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightHyperflexVmBackupInfoVersionContextInterestedMos[] | cdktf.IResolvable) {
    this._interestedMos.internalValue = value;
  }
  public resetInterestedMos() {
    this._interestedMos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interestedMosInput() {
    return this._interestedMos.internalValue;
  }

  // ref_mo - computed: false, optional: true, required: false
  private _refMo = new DataIntersightHyperflexVmBackupInfoVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightHyperflexVmBackupInfoVersionContextRefMo) {
    this._refMo.internalValue = value;
  }
  public resetRefMo() {
    this._refMo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refMoInput() {
    return this._refMo.internalValue;
  }
}
export interface DataIntersightHyperflexVmBackupInfoVmEntityReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#confignum DataIntersightHyperflexVmBackupInfo#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#id DataIntersightHyperflexVmBackupInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of entity id for this reference.
  * * `VCMOID` - The entity reference ID type is VC MOID.
  * * `VMBIOSUUID` - The entity reference ID type is VM Bios UUID.
  * * `VMDSPATH` - The entity reference ID type is VM Datastore Path.
  * * `VMINSTANCEUUID` - The entity reference ID type is VM Instance UUID.
  * * `VMNAME` - The entity reference ID type is VM Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#idtype DataIntersightHyperflexVmBackupInfo#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#name DataIntersightHyperflexVmBackupInfo#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Type of the entity for this entity reference.
  * * `DISK` - This entity type is a disk.
  * * `PNODE` - This entity type is a P node.
  * * `NODE` - This entity type is a node.
  * * `CLUSTER` - This entity type is a cluster.
  * * `DATASTORE` - This entity is a datastore.
  * * `VIRTNODE` - This entity is a HyperFlex virtual node.
  * * `VIRTCLUSTER` - This entity type is a virtual cluster.
  * * `VIRTDATASTORE` - This entity type is a virtual data store.
  * * `VIRTMACHINE` - This entity type is a virtual machine.
  * * `PDISK` - This entity type is a P disk.
  * * `PDATASTORE` - This entity type is a P Datastore.
  * * `VIRTMACHINESNAPSHOT` - This entity is a virtual machine snapshot.
  * * `FOLDER` - This entity type is a folder.
  * * `RESOURCEPOOL` - This entity type is a resource pool.
  * * `FILE` - This entity type is a file.
  * * `VIRTDATACENTER` - This entity type is a virtual data center.
  * * `REPLICATION_APPLIANCE` - This entity type is a replication appliance.
  * * `REPLICATION_JOB` - This entity type is a replication job.
  * * `IP_POOL` - This entity type is an IP Pool.
  * * `REPLICATION_INFO` - This entity type is a replication information.
  * * `DP_VM_SNAPSHOT` - This entity type is a DP VM Snapshot.
  * * `DP_VMGROUP_SNAPSHOT` - This entity type is a DP VM Group Snapshot.
  * * `DP_VM_CONFIG` - This entity type is a DP VM Configuration.
  * * `DP_VM` - This entity type is a DP VM.
  * * `DP_VMGROUP` - This entity type is a DP VM Group.
  * * `DP_VM_SNAPSHOT_POINT` - This entity type is a DP VM Snapshot Point.
  * * `CLUSTER_PAIR` - This entity is a cluster pair.
  * * `HX_TASK` - This entity type is a HyperFlex task.
  * * `ZONE` - This entity type is a zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#type DataIntersightHyperflexVmBackupInfo#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexVmBackupInfoVmEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmBackupInfoVmEntityReferenceOutputReference | DataIntersightHyperflexVmBackupInfoVmEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    confignum: cdktf.numberToTerraform(struct!.confignum),
    id: cdktf.stringToTerraform(struct!.id),
    idtype: cdktf.stringToTerraform(struct!.idtype),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataIntersightHyperflexVmBackupInfoVmEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoVmEntityReferenceOutputReference | DataIntersightHyperflexVmBackupInfoVmEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confignum: {
      value: cdktf.numberToHclTerraform(struct!.confignum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idtype: {
      value: cdktf.stringToHclTerraform(struct!.idtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataIntersightHyperflexVmBackupInfoVmEntityReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoVmEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._confignum !== undefined) {
      hasAnyValues = true;
      internalValueResult.confignum = this._confignum;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.idtype = this._idtype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoVmEntityReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._confignum = undefined;
      this._id = undefined;
      this._idtype = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._confignum = value.confignum;
      this._id = value.id;
      this._idtype = value.idtype;
      this._name = value.name;
      this._objectType = value.objectType;
      this._type = value.type;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // confignum - computed: false, optional: true, required: false
  private _confignum?: number; 
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }
  public set confignum(value: number) {
    this._confignum = value;
  }
  public resetConfignum() {
    this._confignum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confignumInput() {
    return this._confignum;
  }

  // id - computed: false, optional: true, required: false
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

  // idtype - computed: false, optional: true, required: false
  private _idtype?: string; 
  public get idtype() {
    return this.getStringAttribute('idtype');
  }
  public set idtype(value: string) {
    this._idtype = value;
  }
  public resetIdtype() {
    this._idtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idtypeInput() {
    return this._idtype;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
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
}
export interface DataIntersightHyperflexVmBackupInfoVmInfoRunTimeInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * BiosUuid of the Protected Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#bios_uuid DataIntersightHyperflexVmBackupInfo#bios_uuid}
  */
  readonly biosUuid?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Connection state of the Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#connection_state DataIntersightHyperflexVmBackupInfo#connection_state}
  */
  readonly connectionState?: string;
  /**
  * CPU Usage of Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#cpu_usage DataIntersightHyperflexVmBackupInfo#cpu_usage}
  */
  readonly cpuUsage?: number;
  /**
  * Folder which VM belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#folder DataIntersightHyperflexVmBackupInfo#folder}
  */
  readonly folder?: string;
  /**
  * Guest operating system family, if known.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#guest_family DataIntersightHyperflexVmBackupInfo#guest_family}
  */
  readonly guestFamily?: string;
  /**
  * Guest operating system full name, if known.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#guest_full_name DataIntersightHyperflexVmBackupInfo#guest_full_name}
  */
  readonly guestFullName?: string;
  /**
  * Guest operating system identifier (short name), if known.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#guest_id DataIntersightHyperflexVmBackupInfo#guest_id}
  */
  readonly guestId?: string;
  /**
  * VMware guest reset, powercycle, or boot action states.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#guest_state DataIntersightHyperflexVmBackupInfo#guest_state}
  */
  readonly guestState?: string;
  /**
  * Hostname of Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#host_name DataIntersightHyperflexVmBackupInfo#host_name}
  */
  readonly hostName?: string;
  /**
  * InstanceUuid of the Protected Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#instance_uuid DataIntersightHyperflexVmBackupInfo#instance_uuid}
  */
  readonly instanceUuid?: string;
  /**
  * CPU Memory in MB of Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#memory_mb DataIntersightHyperflexVmBackupInfo#memory_mb}
  */
  readonly memoryMb?: number;
  /**
  * Memory usage of Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#memory_usage DataIntersightHyperflexVmBackupInfo#memory_usage}
  */
  readonly memoryUsage?: number;
  /**
  * Virtual Machine unique MOID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#moid DataIntersightHyperflexVmBackupInfo#moid}
  */
  readonly moid?: string;
  /**
  * Name of the Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#name DataIntersightHyperflexVmBackupInfo#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#networks DataIntersightHyperflexVmBackupInfo#networks}
  */
  readonly networks?: string[];
  /**
  * Version of the Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#nr_version DataIntersightHyperflexVmBackupInfo#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * Number of CPUs for the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#num_cpu DataIntersightHyperflexVmBackupInfo#num_cpu}
  */
  readonly numCpu?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Power state of the Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#power_state DataIntersightHyperflexVmBackupInfo#power_state}
  */
  readonly powerState?: string;
  /**
  * Provisioned Size of Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#provisioned_size DataIntersightHyperflexVmBackupInfo#provisioned_size}
  */
  readonly provisionedSize?: number;
  /**
  * Resource pool which VM belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#resource_pool DataIntersightHyperflexVmBackupInfo#resource_pool}
  */
  readonly resourcePool?: string;
  /**
  * Used Size of Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#used_size DataIntersightHyperflexVmBackupInfo#used_size}
  */
  readonly usedSize?: number;
  /**
  * Vmx Path in VC datastore format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#vmx_path DataIntersightHyperflexVmBackupInfo#vmx_path}
  */
  readonly vmxPath?: string;
}

export function dataIntersightHyperflexVmBackupInfoVmInfoRunTimeInfoToTerraform(struct?: DataIntersightHyperflexVmBackupInfoVmInfoRunTimeInfoOutputReference | DataIntersightHyperflexVmBackupInfoVmInfoRunTimeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    bios_uuid: cdktf.stringToTerraform(struct!.biosUuid),
    class_id: cdktf.stringToTerraform(struct!.classId),
    connection_state: cdktf.stringToTerraform(struct!.connectionState),
    cpu_usage: cdktf.numberToTerraform(struct!.cpuUsage),
    folder: cdktf.stringToTerraform(struct!.folder),
    guest_family: cdktf.stringToTerraform(struct!.guestFamily),
    guest_full_name: cdktf.stringToTerraform(struct!.guestFullName),
    guest_id: cdktf.stringToTerraform(struct!.guestId),
    guest_state: cdktf.stringToTerraform(struct!.guestState),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    instance_uuid: cdktf.stringToTerraform(struct!.instanceUuid),
    memory_mb: cdktf.numberToTerraform(struct!.memoryMb),
    memory_usage: cdktf.numberToTerraform(struct!.memoryUsage),
    moid: cdktf.stringToTerraform(struct!.moid),
    name: cdktf.stringToTerraform(struct!.name),
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    num_cpu: cdktf.numberToTerraform(struct!.numCpu),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    power_state: cdktf.stringToTerraform(struct!.powerState),
    provisioned_size: cdktf.numberToTerraform(struct!.provisionedSize),
    resource_pool: cdktf.stringToTerraform(struct!.resourcePool),
    used_size: cdktf.numberToTerraform(struct!.usedSize),
    vmx_path: cdktf.stringToTerraform(struct!.vmxPath),
  }
}


export function dataIntersightHyperflexVmBackupInfoVmInfoRunTimeInfoToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoVmInfoRunTimeInfoOutputReference | DataIntersightHyperflexVmBackupInfoVmInfoRunTimeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bios_uuid: {
      value: cdktf.stringToHclTerraform(struct!.biosUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_state: {
      value: cdktf.stringToHclTerraform(struct!.connectionState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_usage: {
      value: cdktf.numberToHclTerraform(struct!.cpuUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guest_family: {
      value: cdktf.stringToHclTerraform(struct!.guestFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guest_full_name: {
      value: cdktf.stringToHclTerraform(struct!.guestFullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guest_id: {
      value: cdktf.stringToHclTerraform(struct!.guestId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guest_state: {
      value: cdktf.stringToHclTerraform(struct!.guestState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_uuid: {
      value: cdktf.stringToHclTerraform(struct!.instanceUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_mb: {
      value: cdktf.numberToHclTerraform(struct!.memoryMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_usage: {
      value: cdktf.numberToHclTerraform(struct!.memoryUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    nr_version: {
      value: cdktf.stringToHclTerraform(struct!.nrVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_cpu: {
      value: cdktf.numberToHclTerraform(struct!.numCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_state: {
      value: cdktf.stringToHclTerraform(struct!.powerState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioned_size: {
      value: cdktf.numberToHclTerraform(struct!.provisionedSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_pool: {
      value: cdktf.stringToHclTerraform(struct!.resourcePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    used_size: {
      value: cdktf.numberToHclTerraform(struct!.usedSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vmx_path: {
      value: cdktf.stringToHclTerraform(struct!.vmxPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoVmInfoRunTimeInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoVmInfoRunTimeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._biosUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.biosUuid = this._biosUuid;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._connectionState !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionState = this._connectionState;
    }
    if (this._cpuUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUsage = this._cpuUsage;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._guestFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestFamily = this._guestFamily;
    }
    if (this._guestFullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestFullName = this._guestFullName;
    }
    if (this._guestId !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestId = this._guestId;
    }
    if (this._guestState !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestState = this._guestState;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._instanceUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUuid = this._instanceUuid;
    }
    if (this._memoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMb = this._memoryMb;
    }
    if (this._memoryUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryUsage = this._memoryUsage;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    if (this._nrVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrVersion = this._nrVersion;
    }
    if (this._numCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCpu = this._numCpu;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._powerState !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerState = this._powerState;
    }
    if (this._provisionedSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedSize = this._provisionedSize;
    }
    if (this._resourcePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePool = this._resourcePool;
    }
    if (this._usedSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedSize = this._usedSize;
    }
    if (this._vmxPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmxPath = this._vmxPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoVmInfoRunTimeInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._biosUuid = undefined;
      this._classId = undefined;
      this._connectionState = undefined;
      this._cpuUsage = undefined;
      this._folder = undefined;
      this._guestFamily = undefined;
      this._guestFullName = undefined;
      this._guestId = undefined;
      this._guestState = undefined;
      this._hostName = undefined;
      this._instanceUuid = undefined;
      this._memoryMb = undefined;
      this._memoryUsage = undefined;
      this._moid = undefined;
      this._name = undefined;
      this._networks = undefined;
      this._nrVersion = undefined;
      this._numCpu = undefined;
      this._objectType = undefined;
      this._powerState = undefined;
      this._provisionedSize = undefined;
      this._resourcePool = undefined;
      this._usedSize = undefined;
      this._vmxPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._biosUuid = value.biosUuid;
      this._classId = value.classId;
      this._connectionState = value.connectionState;
      this._cpuUsage = value.cpuUsage;
      this._folder = value.folder;
      this._guestFamily = value.guestFamily;
      this._guestFullName = value.guestFullName;
      this._guestId = value.guestId;
      this._guestState = value.guestState;
      this._hostName = value.hostName;
      this._instanceUuid = value.instanceUuid;
      this._memoryMb = value.memoryMb;
      this._memoryUsage = value.memoryUsage;
      this._moid = value.moid;
      this._name = value.name;
      this._networks = value.networks;
      this._nrVersion = value.nrVersion;
      this._numCpu = value.numCpu;
      this._objectType = value.objectType;
      this._powerState = value.powerState;
      this._provisionedSize = value.provisionedSize;
      this._resourcePool = value.resourcePool;
      this._usedSize = value.usedSize;
      this._vmxPath = value.vmxPath;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // bios_uuid - computed: false, optional: true, required: false
  private _biosUuid?: string; 
  public get biosUuid() {
    return this.getStringAttribute('bios_uuid');
  }
  public set biosUuid(value: string) {
    this._biosUuid = value;
  }
  public resetBiosUuid() {
    this._biosUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biosUuidInput() {
    return this._biosUuid;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // connection_state - computed: false, optional: true, required: false
  private _connectionState?: string; 
  public get connectionState() {
    return this.getStringAttribute('connection_state');
  }
  public set connectionState(value: string) {
    this._connectionState = value;
  }
  public resetConnectionState() {
    this._connectionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStateInput() {
    return this._connectionState;
  }

  // cpu_usage - computed: false, optional: true, required: false
  private _cpuUsage?: number; 
  public get cpuUsage() {
    return this.getNumberAttribute('cpu_usage');
  }
  public set cpuUsage(value: number) {
    this._cpuUsage = value;
  }
  public resetCpuUsage() {
    this._cpuUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsageInput() {
    return this._cpuUsage;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // guest_family - computed: false, optional: true, required: false
  private _guestFamily?: string; 
  public get guestFamily() {
    return this.getStringAttribute('guest_family');
  }
  public set guestFamily(value: string) {
    this._guestFamily = value;
  }
  public resetGuestFamily() {
    this._guestFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestFamilyInput() {
    return this._guestFamily;
  }

  // guest_full_name - computed: false, optional: true, required: false
  private _guestFullName?: string; 
  public get guestFullName() {
    return this.getStringAttribute('guest_full_name');
  }
  public set guestFullName(value: string) {
    this._guestFullName = value;
  }
  public resetGuestFullName() {
    this._guestFullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestFullNameInput() {
    return this._guestFullName;
  }

  // guest_id - computed: false, optional: true, required: false
  private _guestId?: string; 
  public get guestId() {
    return this.getStringAttribute('guest_id');
  }
  public set guestId(value: string) {
    this._guestId = value;
  }
  public resetGuestId() {
    this._guestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestIdInput() {
    return this._guestId;
  }

  // guest_state - computed: false, optional: true, required: false
  private _guestState?: string; 
  public get guestState() {
    return this.getStringAttribute('guest_state');
  }
  public set guestState(value: string) {
    this._guestState = value;
  }
  public resetGuestState() {
    this._guestState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestStateInput() {
    return this._guestState;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // instance_uuid - computed: false, optional: true, required: false
  private _instanceUuid?: string; 
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }
  public set instanceUuid(value: string) {
    this._instanceUuid = value;
  }
  public resetInstanceUuid() {
    this._instanceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUuidInput() {
    return this._instanceUuid;
  }

  // memory_mb - computed: false, optional: true, required: false
  private _memoryMb?: number; 
  public get memoryMb() {
    return this.getNumberAttribute('memory_mb');
  }
  public set memoryMb(value: number) {
    this._memoryMb = value;
  }
  public resetMemoryMb() {
    this._memoryMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMbInput() {
    return this._memoryMb;
  }

  // memory_usage - computed: false, optional: true, required: false
  private _memoryUsage?: number; 
  public get memoryUsage() {
    return this.getNumberAttribute('memory_usage');
  }
  public set memoryUsage(value: number) {
    this._memoryUsage = value;
  }
  public resetMemoryUsage() {
    this._memoryUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUsageInput() {
    return this._memoryUsage;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // nr_version - computed: false, optional: true, required: false
  private _nrVersion?: string; 
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }
  public set nrVersion(value: string) {
    this._nrVersion = value;
  }
  public resetNrVersion() {
    this._nrVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrVersionInput() {
    return this._nrVersion;
  }

  // num_cpu - computed: false, optional: true, required: false
  private _numCpu?: number; 
  public get numCpu() {
    return this.getNumberAttribute('num_cpu');
  }
  public set numCpu(value: number) {
    this._numCpu = value;
  }
  public resetNumCpu() {
    this._numCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCpuInput() {
    return this._numCpu;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // power_state - computed: false, optional: true, required: false
  private _powerState?: string; 
  public get powerState() {
    return this.getStringAttribute('power_state');
  }
  public set powerState(value: string) {
    this._powerState = value;
  }
  public resetPowerState() {
    this._powerState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerStateInput() {
    return this._powerState;
  }

  // provisioned_size - computed: false, optional: true, required: false
  private _provisionedSize?: number; 
  public get provisionedSize() {
    return this.getNumberAttribute('provisioned_size');
  }
  public set provisionedSize(value: number) {
    this._provisionedSize = value;
  }
  public resetProvisionedSize() {
    this._provisionedSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedSizeInput() {
    return this._provisionedSize;
  }

  // resource_pool - computed: false, optional: true, required: false
  private _resourcePool?: string; 
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }
  public set resourcePool(value: string) {
    this._resourcePool = value;
  }
  public resetResourcePool() {
    this._resourcePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolInput() {
    return this._resourcePool;
  }

  // used_size - computed: false, optional: true, required: false
  private _usedSize?: number; 
  public get usedSize() {
    return this.getNumberAttribute('used_size');
  }
  public set usedSize(value: number) {
    this._usedSize = value;
  }
  public resetUsedSize() {
    this._usedSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedSizeInput() {
    return this._usedSize;
  }

  // vmx_path - computed: false, optional: true, required: false
  private _vmxPath?: string; 
  public get vmxPath() {
    return this.getStringAttribute('vmx_path');
  }
  public set vmxPath(value: string) {
    this._vmxPath = value;
  }
  public resetVmxPath() {
    this._vmxPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmxPathInput() {
    return this._vmxPath;
  }
}
export interface DataIntersightHyperflexVmBackupInfoVmInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#additional_properties DataIntersightHyperflexVmBackupInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#class_id DataIntersightHyperflexVmBackupInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#object_type DataIntersightHyperflexVmBackupInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Virtual machine status code.
  * * `VM_ACCESSIBLE` - This virtual machine is accessible.
  * * `VM_INACCESSIBLE` - This virtual machine is not accessible.
  * * `VM_NOT_SUPPORTED` - This virtual machine is not supported.
  * * `NONE` - This virtual machine does not have a status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#status_code DataIntersightHyperflexVmBackupInfo#status_code}
  */
  readonly statusCode?: string;
  /**
  * Virtual machine's current UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#uuid DataIntersightHyperflexVmBackupInfo#uuid}
  */
  readonly uuid?: string;
  /**
  * run_time_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#run_time_info DataIntersightHyperflexVmBackupInfo#run_time_info}
  */
  readonly runTimeInfo?: DataIntersightHyperflexVmBackupInfoVmInfoRunTimeInfo;
}

export function dataIntersightHyperflexVmBackupInfoVmInfoToTerraform(struct?: DataIntersightHyperflexVmBackupInfoVmInfoOutputReference | DataIntersightHyperflexVmBackupInfoVmInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    run_time_info: dataIntersightHyperflexVmBackupInfoVmInfoRunTimeInfoToTerraform(struct!.runTimeInfo),
  }
}


export function dataIntersightHyperflexVmBackupInfoVmInfoToHclTerraform(struct?: DataIntersightHyperflexVmBackupInfoVmInfoOutputReference | DataIntersightHyperflexVmBackupInfoVmInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_time_info: {
      value: dataIntersightHyperflexVmBackupInfoVmInfoRunTimeInfoToHclTerraform(struct!.runTimeInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmBackupInfoVmInfoRunTimeInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmBackupInfoVmInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmBackupInfoVmInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._runTimeInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runTimeInfo = this._runTimeInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmBackupInfoVmInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._statusCode = undefined;
      this._uuid = undefined;
      this._runTimeInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._statusCode = value.statusCode;
      this._uuid = value.uuid;
      this._runTimeInfo.internalValue = value.runTimeInfo;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // run_time_info - computed: false, optional: true, required: false
  private _runTimeInfo = new DataIntersightHyperflexVmBackupInfoVmInfoRunTimeInfoOutputReference(this, "run_time_info");
  public get runTimeInfo() {
    return this._runTimeInfo;
  }
  public putRunTimeInfo(value: DataIntersightHyperflexVmBackupInfoVmInfoRunTimeInfo) {
    this._runTimeInfo.internalValue = value;
  }
  public resetRunTimeInfo() {
    this._runTimeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runTimeInfoInput() {
    return this._runTimeInfo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info intersight_hyperflex_vm_backup_info}
*/
export class DataIntersightHyperflexVmBackupInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_hyperflex_vm_backup_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightHyperflexVmBackupInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightHyperflexVmBackupInfo to import
  * @param importFromId The id of the existing DataIntersightHyperflexVmBackupInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightHyperflexVmBackupInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_hyperflex_vm_backup_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hyperflex_vm_backup_info intersight_hyperflex_vm_backup_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightHyperflexVmBackupInfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightHyperflexVmBackupInfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_hyperflex_vm_backup_info',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.73',
        providerVersionConstraint: '1.0.73'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountMoid = config.accountMoid;
    this._additionalProperties = config.additionalProperties;
    this._backupStatus = config.backupStatus;
    this._classId = config.classId;
    this._createTime = config.createTime;
    this._domainGroupMoid = config.domainGroupMoid;
    this._id = config.id;
    this._localSnapshotRetentionCount = config.localSnapshotRetentionCount;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._objectType = config.objectType;
    this._owners = config.owners;
    this._powerOn = config.powerOn;
    this._protectionStatus = config.protectionStatus;
    this._sharedScope = config.sharedScope;
    this._snapshotRetentionCount = config.snapshotRetentionCount;
    this._srcClusterName = config.srcClusterName;
    this._tgtClusterName = config.tgtClusterName;
    this._ancestors.internalValue = config.ancestors;
    this._clusterEntityReference.internalValue = config.clusterEntityReference;
    this._clusterIdProtectionInfoMap.internalValue = config.clusterIdProtectionInfoMap;
    this._error.internalValue = config.error;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._schedule.internalValue = config.schedule;
    this._srcBackupCluster.internalValue = config.srcBackupCluster;
    this._srcCluster.internalValue = config.srcCluster;
    this._tags.internalValue = config.tags;
    this._tgtCluster.internalValue = config.tgtCluster;
    this._versionContext.internalValue = config.versionContext;
    this._vmEntityReference.internalValue = config.vmEntityReference;
    this._vmInfo.internalValue = config.vmInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_moid - computed: false, optional: true, required: false
  private _accountMoid?: string; 
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }
  public set accountMoid(value: string) {
    this._accountMoid = value;
  }
  public resetAccountMoid() {
    this._accountMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountMoidInput() {
    return this._accountMoid;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // backup_status - computed: false, optional: true, required: false
  private _backupStatus?: string; 
  public get backupStatus() {
    return this.getStringAttribute('backup_status');
  }
  public set backupStatus(value: string) {
    this._backupStatus = value;
  }
  public resetBackupStatus() {
    this._backupStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStatusInput() {
    return this._backupStatus;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // domain_group_moid - computed: false, optional: true, required: false
  private _domainGroupMoid?: string; 
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }
  public set domainGroupMoid(value: string) {
    this._domainGroupMoid = value;
  }
  public resetDomainGroupMoid() {
    this._domainGroupMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupMoidInput() {
    return this._domainGroupMoid;
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

  // local_snapshot_retention_count - computed: false, optional: true, required: false
  private _localSnapshotRetentionCount?: number; 
  public get localSnapshotRetentionCount() {
    return this.getNumberAttribute('local_snapshot_retention_count');
  }
  public set localSnapshotRetentionCount(value: number) {
    this._localSnapshotRetentionCount = value;
  }
  public resetLocalSnapshotRetentionCount() {
    this._localSnapshotRetentionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSnapshotRetentionCountInput() {
    return this._localSnapshotRetentionCount;
  }

  // mod_time - computed: false, optional: true, required: false
  private _modTime?: string; 
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }
  public set modTime(value: string) {
    this._modTime = value;
  }
  public resetModTime() {
    this._modTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modTimeInput() {
    return this._modTime;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // power_on - computed: false, optional: true, required: false
  private _powerOn?: boolean | cdktf.IResolvable; 
  public get powerOn() {
    return this.getBooleanAttribute('power_on');
  }
  public set powerOn(value: boolean | cdktf.IResolvable) {
    this._powerOn = value;
  }
  public resetPowerOn() {
    this._powerOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerOnInput() {
    return this._powerOn;
  }

  // protection_status - computed: false, optional: true, required: false
  private _protectionStatus?: string; 
  public get protectionStatus() {
    return this.getStringAttribute('protection_status');
  }
  public set protectionStatus(value: string) {
    this._protectionStatus = value;
  }
  public resetProtectionStatus() {
    this._protectionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionStatusInput() {
    return this._protectionStatus;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightHyperflexVmBackupInfoResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // shared_scope - computed: false, optional: true, required: false
  private _sharedScope?: string; 
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }
  public set sharedScope(value: string) {
    this._sharedScope = value;
  }
  public resetSharedScope() {
    this._sharedScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedScopeInput() {
    return this._sharedScope;
  }

  // snapshot_retention_count - computed: false, optional: true, required: false
  private _snapshotRetentionCount?: number; 
  public get snapshotRetentionCount() {
    return this.getNumberAttribute('snapshot_retention_count');
  }
  public set snapshotRetentionCount(value: number) {
    this._snapshotRetentionCount = value;
  }
  public resetSnapshotRetentionCount() {
    this._snapshotRetentionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRetentionCountInput() {
    return this._snapshotRetentionCount;
  }

  // src_cluster_name - computed: false, optional: true, required: false
  private _srcClusterName?: string; 
  public get srcClusterName() {
    return this.getStringAttribute('src_cluster_name');
  }
  public set srcClusterName(value: string) {
    this._srcClusterName = value;
  }
  public resetSrcClusterName() {
    this._srcClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcClusterNameInput() {
    return this._srcClusterName;
  }

  // tgt_cluster_name - computed: false, optional: true, required: false
  private _tgtClusterName?: string; 
  public get tgtClusterName() {
    return this.getStringAttribute('tgt_cluster_name');
  }
  public set tgtClusterName(value: string) {
    this._tgtClusterName = value;
  }
  public resetTgtClusterName() {
    this._tgtClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtClusterNameInput() {
    return this._tgtClusterName;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataIntersightHyperflexVmBackupInfoAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightHyperflexVmBackupInfoAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // cluster_entity_reference - computed: false, optional: true, required: false
  private _clusterEntityReference = new DataIntersightHyperflexVmBackupInfoClusterEntityReferenceOutputReference(this, "cluster_entity_reference");
  public get clusterEntityReference() {
    return this._clusterEntityReference;
  }
  public putClusterEntityReference(value: DataIntersightHyperflexVmBackupInfoClusterEntityReference) {
    this._clusterEntityReference.internalValue = value;
  }
  public resetClusterEntityReference() {
    this._clusterEntityReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterEntityReferenceInput() {
    return this._clusterEntityReference.internalValue;
  }

  // cluster_id_protection_info_map - computed: false, optional: true, required: false
  private _clusterIdProtectionInfoMap = new DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapList(this, "cluster_id_protection_info_map", false);
  public get clusterIdProtectionInfoMap() {
    return this._clusterIdProtectionInfoMap;
  }
  public putClusterIdProtectionInfoMap(value: DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMap[] | cdktf.IResolvable) {
    this._clusterIdProtectionInfoMap.internalValue = value;
  }
  public resetClusterIdProtectionInfoMap() {
    this._clusterIdProtectionInfoMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdProtectionInfoMapInput() {
    return this._clusterIdProtectionInfoMap.internalValue;
  }

  // error - computed: false, optional: true, required: false
  private _error = new DataIntersightHyperflexVmBackupInfoErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: DataIntersightHyperflexVmBackupInfoError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightHyperflexVmBackupInfoParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightHyperflexVmBackupInfoParent) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // permission_resources - computed: false, optional: true, required: false
  private _permissionResources = new DataIntersightHyperflexVmBackupInfoPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightHyperflexVmBackupInfoPermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new DataIntersightHyperflexVmBackupInfoScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataIntersightHyperflexVmBackupInfoSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // src_backup_cluster - computed: false, optional: true, required: false
  private _srcBackupCluster = new DataIntersightHyperflexVmBackupInfoSrcBackupClusterOutputReference(this, "src_backup_cluster");
  public get srcBackupCluster() {
    return this._srcBackupCluster;
  }
  public putSrcBackupCluster(value: DataIntersightHyperflexVmBackupInfoSrcBackupCluster) {
    this._srcBackupCluster.internalValue = value;
  }
  public resetSrcBackupCluster() {
    this._srcBackupCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBackupClusterInput() {
    return this._srcBackupCluster.internalValue;
  }

  // src_cluster - computed: false, optional: true, required: false
  private _srcCluster = new DataIntersightHyperflexVmBackupInfoSrcClusterOutputReference(this, "src_cluster");
  public get srcCluster() {
    return this._srcCluster;
  }
  public putSrcCluster(value: DataIntersightHyperflexVmBackupInfoSrcCluster) {
    this._srcCluster.internalValue = value;
  }
  public resetSrcCluster() {
    this._srcCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcClusterInput() {
    return this._srcCluster.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataIntersightHyperflexVmBackupInfoTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightHyperflexVmBackupInfoTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tgt_cluster - computed: false, optional: true, required: false
  private _tgtCluster = new DataIntersightHyperflexVmBackupInfoTgtClusterOutputReference(this, "tgt_cluster");
  public get tgtCluster() {
    return this._tgtCluster;
  }
  public putTgtCluster(value: DataIntersightHyperflexVmBackupInfoTgtCluster) {
    this._tgtCluster.internalValue = value;
  }
  public resetTgtCluster() {
    this._tgtCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtClusterInput() {
    return this._tgtCluster.internalValue;
  }

  // version_context - computed: false, optional: true, required: false
  private _versionContext = new DataIntersightHyperflexVmBackupInfoVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightHyperflexVmBackupInfoVersionContext) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
  }

  // vm_entity_reference - computed: false, optional: true, required: false
  private _vmEntityReference = new DataIntersightHyperflexVmBackupInfoVmEntityReferenceOutputReference(this, "vm_entity_reference");
  public get vmEntityReference() {
    return this._vmEntityReference;
  }
  public putVmEntityReference(value: DataIntersightHyperflexVmBackupInfoVmEntityReference) {
    this._vmEntityReference.internalValue = value;
  }
  public resetVmEntityReference() {
    this._vmEntityReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmEntityReferenceInput() {
    return this._vmEntityReference.internalValue;
  }

  // vm_info - computed: false, optional: true, required: false
  private _vmInfo = new DataIntersightHyperflexVmBackupInfoVmInfoOutputReference(this, "vm_info");
  public get vmInfo() {
    return this._vmInfo;
  }
  public putVmInfo(value: DataIntersightHyperflexVmBackupInfoVmInfo) {
    this._vmInfo.internalValue = value;
  }
  public resetVmInfo() {
    this._vmInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInfoInput() {
    return this._vmInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      backup_status: cdktf.stringToTerraform(this._backupStatus),
      class_id: cdktf.stringToTerraform(this._classId),
      create_time: cdktf.stringToTerraform(this._createTime),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      id: cdktf.stringToTerraform(this._id),
      local_snapshot_retention_count: cdktf.numberToTerraform(this._localSnapshotRetentionCount),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      object_type: cdktf.stringToTerraform(this._objectType),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      power_on: cdktf.booleanToTerraform(this._powerOn),
      protection_status: cdktf.stringToTerraform(this._protectionStatus),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      snapshot_retention_count: cdktf.numberToTerraform(this._snapshotRetentionCount),
      src_cluster_name: cdktf.stringToTerraform(this._srcClusterName),
      tgt_cluster_name: cdktf.stringToTerraform(this._tgtClusterName),
      ancestors: cdktf.listMapper(dataIntersightHyperflexVmBackupInfoAncestorsToTerraform, true)(this._ancestors.internalValue),
      cluster_entity_reference: dataIntersightHyperflexVmBackupInfoClusterEntityReferenceToTerraform(this._clusterEntityReference.internalValue),
      cluster_id_protection_info_map: cdktf.listMapper(dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapToTerraform, true)(this._clusterIdProtectionInfoMap.internalValue),
      error: dataIntersightHyperflexVmBackupInfoErrorToTerraform(this._error.internalValue),
      parent: dataIntersightHyperflexVmBackupInfoParentToTerraform(this._parent.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightHyperflexVmBackupInfoPermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      schedule: cdktf.listMapper(dataIntersightHyperflexVmBackupInfoScheduleToTerraform, true)(this._schedule.internalValue),
      src_backup_cluster: dataIntersightHyperflexVmBackupInfoSrcBackupClusterToTerraform(this._srcBackupCluster.internalValue),
      src_cluster: dataIntersightHyperflexVmBackupInfoSrcClusterToTerraform(this._srcCluster.internalValue),
      tags: cdktf.listMapper(dataIntersightHyperflexVmBackupInfoTagsToTerraform, true)(this._tags.internalValue),
      tgt_cluster: dataIntersightHyperflexVmBackupInfoTgtClusterToTerraform(this._tgtCluster.internalValue),
      version_context: dataIntersightHyperflexVmBackupInfoVersionContextToTerraform(this._versionContext.internalValue),
      vm_entity_reference: dataIntersightHyperflexVmBackupInfoVmEntityReferenceToTerraform(this._vmEntityReference.internalValue),
      vm_info: dataIntersightHyperflexVmBackupInfoVmInfoToTerraform(this._vmInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_moid: {
        value: cdktf.stringToHclTerraform(this._accountMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_properties: {
        value: cdktf.stringToHclTerraform(this._additionalProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_status: {
        value: cdktf.stringToHclTerraform(this._backupStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_group_moid: {
        value: cdktf.stringToHclTerraform(this._domainGroupMoid),
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
      local_snapshot_retention_count: {
        value: cdktf.numberToHclTerraform(this._localSnapshotRetentionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mod_time: {
        value: cdktf.stringToHclTerraform(this._modTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      moid: {
        value: cdktf.stringToHclTerraform(this._moid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      power_on: {
        value: cdktf.booleanToHclTerraform(this._powerOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protection_status: {
        value: cdktf.stringToHclTerraform(this._protectionStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_scope: {
        value: cdktf.stringToHclTerraform(this._sharedScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_retention_count: {
        value: cdktf.numberToHclTerraform(this._snapshotRetentionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_cluster_name: {
        value: cdktf.stringToHclTerraform(this._srcClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgt_cluster_name: {
        value: cdktf.stringToHclTerraform(this._tgtClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexVmBackupInfoAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmBackupInfoAncestorsList",
      },
      cluster_entity_reference: {
        value: dataIntersightHyperflexVmBackupInfoClusterEntityReferenceToHclTerraform(this._clusterEntityReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmBackupInfoClusterEntityReferenceList",
      },
      cluster_id_protection_info_map: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapToHclTerraform, true)(this._clusterIdProtectionInfoMap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmBackupInfoClusterIdProtectionInfoMapList",
      },
      error: {
        value: dataIntersightHyperflexVmBackupInfoErrorToHclTerraform(this._error.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmBackupInfoErrorList",
      },
      parent: {
        value: dataIntersightHyperflexVmBackupInfoParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmBackupInfoParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexVmBackupInfoPermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmBackupInfoPermissionResourcesList",
      },
      schedule: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexVmBackupInfoScheduleToHclTerraform, true)(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmBackupInfoScheduleList",
      },
      src_backup_cluster: {
        value: dataIntersightHyperflexVmBackupInfoSrcBackupClusterToHclTerraform(this._srcBackupCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmBackupInfoSrcBackupClusterList",
      },
      src_cluster: {
        value: dataIntersightHyperflexVmBackupInfoSrcClusterToHclTerraform(this._srcCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmBackupInfoSrcClusterList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexVmBackupInfoTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmBackupInfoTagsList",
      },
      tgt_cluster: {
        value: dataIntersightHyperflexVmBackupInfoTgtClusterToHclTerraform(this._tgtCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmBackupInfoTgtClusterList",
      },
      version_context: {
        value: dataIntersightHyperflexVmBackupInfoVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmBackupInfoVersionContextList",
      },
      vm_entity_reference: {
        value: dataIntersightHyperflexVmBackupInfoVmEntityReferenceToHclTerraform(this._vmEntityReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmBackupInfoVmEntityReferenceList",
      },
      vm_info: {
        value: dataIntersightHyperflexVmBackupInfoVmInfoToHclTerraform(this._vmInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmBackupInfoVmInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
