// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightHyperflexVmSnapshotInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#account_moid DataIntersightHyperflexVmSnapshotInfo#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#create_time DataIntersightHyperflexVmSnapshotInfo#create_time}
  */
  readonly createTime?: string;
  /**
  * Combined status code from replication and snapshot status to display in the Intersight UI.
  * * `NONE` - Snapshot replication state is none.
  * * `SUCCESS` - Snapshot completed successfully.
  * * `FAILED` - Snapshot failed replication status code.
  * * `PAUSED` - Snapshot replication paused status code.
  * * `IN_USE` - Snapshot replica in use status code.
  * * `STARTING` - Snapshot replication starting.
  * * `REPLICATING` - Snapshot replication in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#display_status DataIntersightHyperflexVmSnapshotInfo#display_status}
  */
  readonly displayStatus?: string;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#domain_group_moid DataIntersightHyperflexVmSnapshotInfo#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#id DataIntersightHyperflexVmSnapshotInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Virtual Machine and the time stamp of the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#label DataIntersightHyperflexVmSnapshotInfo#label}
  */
  readonly label?: string;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#mod_time DataIntersightHyperflexVmSnapshotInfo#mod_time}
  */
  readonly modTime?: string;
  /**
  * Quiesce Mode for snapshot taken on Hyperflex cluster.
  * * `NONE` - The snapshot quiesce mode is none.
  * * `CRASH` - The snapshot quiesce mode is crash.
  * * `VMTOOLS` - The snapshot quiesce mode is VMTOOLS.
  * * `APP_CONSISTENT` - The snapshot quiesce mode is app consistent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#mode DataIntersightHyperflexVmSnapshotInfo#mode}
  */
  readonly mode?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#moid DataIntersightHyperflexVmSnapshotInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#owners DataIntersightHyperflexVmSnapshotInfo#owners}
  */
  readonly owners?: string[];
  /**
  * Replication status of the least successful target cluster.
  * * `NONE` - Snapshot replication state is none.
  * * `SUCCESS` - Snapshot completed successfully.
  * * `FAILED` - Snapshot failed replication status code.
  * * `PAUSED` - Snapshot replication paused status code.
  * * `IN_USE` - Snapshot replica in use status code.
  * * `STARTING` - Snapshot replication starting.
  * * `REPLICATING` - Snapshot replication in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#replication_status DataIntersightHyperflexVmSnapshotInfo#replication_status}
  */
  readonly replicationStatus?: string;
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#shared_scope DataIntersightHyperflexVmSnapshotInfo#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * Error message from snapshot creation or replcation if any exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#snapshot_error_msg DataIntersightHyperflexVmSnapshotInfo#snapshot_error_msg}
  */
  readonly snapshotErrorMsg?: string;
  /**
  * Snapshot status of the source cluster.
  * * `SUCCESS` - This snapshot status code is success.
  * * `FAILED` - This snapshot status code is failed.
  * * `IN_PROGRESS` - This snapshot status code is in progress.
  * * `DELETING` - This snapshot status code is deleting.
  * * `DELETED` - This snapshot status code is deleted.
  * * `NONE` - This snapshot status code is none.
  * * `INIT` - This snapshot status code is initializing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#snapshot_status DataIntersightHyperflexVmSnapshotInfo#snapshot_status}
  */
  readonly snapshotStatus?: string;
  /**
  * Timestamp the snapshot was created on the source cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#source_timestamp DataIntersightHyperflexVmSnapshotInfo#source_timestamp}
  */
  readonly sourceTimestamp?: number;
  /**
  * Name of the cluster this snapshot resides on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#src_cluster_name DataIntersightHyperflexVmSnapshotInfo#src_cluster_name}
  */
  readonly srcClusterName?: string;
  /**
  * Timestamp the snapshot was finished replicating on the target cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#target_completion_timestamp DataIntersightHyperflexVmSnapshotInfo#target_completion_timestamp}
  */
  readonly targetCompletionTimestamp?: number;
  /**
  * Name of the cluster this snapshot is replicated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#tgt_cluster_name DataIntersightHyperflexVmSnapshotInfo#tgt_cluster_name}
  */
  readonly tgtClusterName?: string;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#ancestors DataIntersightHyperflexVmSnapshotInfo#ancestors}
  */
  readonly ancestors?: DataIntersightHyperflexVmSnapshotInfoAncestors[] | cdktf.IResolvable;
  /**
  * cluster_id_snap_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#cluster_id_snap_map DataIntersightHyperflexVmSnapshotInfo#cluster_id_snap_map}
  */
  readonly clusterIdSnapMap?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMap[] | cdktf.IResolvable;
  /**
  * error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#error DataIntersightHyperflexVmSnapshotInfo#error}
  */
  readonly error?: DataIntersightHyperflexVmSnapshotInfoError;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#parent DataIntersightHyperflexVmSnapshotInfo#parent}
  */
  readonly parent?: DataIntersightHyperflexVmSnapshotInfoParent;
  /**
  * parent_snapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#parent_snapshot DataIntersightHyperflexVmSnapshotInfo#parent_snapshot}
  */
  readonly parentSnapshot?: DataIntersightHyperflexVmSnapshotInfoParentSnapshot;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#permission_resources DataIntersightHyperflexVmSnapshotInfo#permission_resources}
  */
  readonly permissionResources?: DataIntersightHyperflexVmSnapshotInfoPermissionResources[] | cdktf.IResolvable;
  /**
  * src_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#src_cluster DataIntersightHyperflexVmSnapshotInfo#src_cluster}
  */
  readonly srcCluster?: DataIntersightHyperflexVmSnapshotInfoSrcCluster;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#tags DataIntersightHyperflexVmSnapshotInfo#tags}
  */
  readonly tags?: DataIntersightHyperflexVmSnapshotInfoTags[] | cdktf.IResolvable;
  /**
  * tgt_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#tgt_cluster DataIntersightHyperflexVmSnapshotInfo#tgt_cluster}
  */
  readonly tgtCluster?: DataIntersightHyperflexVmSnapshotInfoTgtCluster;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#version_context DataIntersightHyperflexVmSnapshotInfo#version_context}
  */
  readonly versionContext?: DataIntersightHyperflexVmSnapshotInfoVersionContext;
  /**
  * vm_backup_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#vm_backup_info DataIntersightHyperflexVmSnapshotInfo#vm_backup_info}
  */
  readonly vmBackupInfo?: DataIntersightHyperflexVmSnapshotInfoVmBackupInfo;
  /**
  * vm_entity_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#vm_entity_reference DataIntersightHyperflexVmSnapshotInfo#vm_entity_reference}
  */
  readonly vmEntityReference?: DataIntersightHyperflexVmSnapshotInfoVmEntityReference;
  /**
  * vm_snapshot_entity_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#vm_snapshot_entity_reference DataIntersightHyperflexVmSnapshotInfo#vm_snapshot_entity_reference}
  */
  readonly vmSnapshotEntityReference?: DataIntersightHyperflexVmSnapshotInfoVmSnapshotEntityReference;
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsAncestors {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsAncestorsToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsAncestorsToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsAncestors | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsAncestorsOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointClusterEntityReference {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointClusterEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointClusterEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointClusterEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointClusterEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointClusterEntityReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointClusterEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointClusterEntityReference | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointClusterEntityReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointClusterEntityReferenceOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointClusterEntityReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusError {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusErrorToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusErrorToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusError | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusErrorOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReference {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReference | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReferenceOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusRpoStatus {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusRpoStatusToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusRpoStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusRpoStatusToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusRpoStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusRpoStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusRpoStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusRpoStatus | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusRpoStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusRpoStatusOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusRpoStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatus {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatus | undefined) {
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
  private _error = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // pack_entity_reference - computed: true, optional: false, required: false
  private _packEntityReference = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReferenceList(this, "pack_entity_reference", false);
  public get packEntityReference() {
    return this._packEntityReference;
  }

  // pct_complete - computed: true, optional: false, required: false
  public get pctComplete() {
    return this.getNumberAttribute('pct_complete');
  }

  // rpo_status - computed: true, optional: false, required: false
  private _rpoStatus = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusRpoStatusList(this, "rpo_status", false);
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

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfo {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfoToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfoToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfo | undefined) {
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

  // ds_backend_id - computed: true, optional: false, required: false
  public get dsBackendId() {
    return this.getStringAttribute('ds_backend_id');
  }

  // ds_frontend_id - computed: true, optional: false, required: false
  public get dsFrontendId() {
    return this.getStringAttribute('ds_frontend_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfoOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFiles {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFiles | undefined) {
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

  // ds_info - computed: true, optional: false, required: false
  private _dsInfo = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfoList(this, "ds_info", false);
  public get dsInfo() {
    return this._dsInfo;
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // relative_file_path - computed: true, optional: false, required: false
  public get relativeFilePath() {
    return this.getStringAttribute('relative_file_path');
  }
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfo {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfoToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfoToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfo | undefined) {
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

  // ds_backend_id - computed: true, optional: false, required: false
  public get dsBackendId() {
    return this.getStringAttribute('ds_backend_id');
  }

  // ds_frontend_id - computed: true, optional: false, required: false
  public get dsFrontendId() {
    return this.getStringAttribute('ds_frontend_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfoOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePath {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePath | undefined) {
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

  // ds_info - computed: true, optional: false, required: false
  private _dsInfo = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfoList(this, "ds_info", false);
  public get dsInfo() {
    return this._dsInfo;
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // relative_file_path - computed: true, optional: false, required: false
  public get relativeFilePath() {
    return this.getStringAttribute('relative_file_path');
  }
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFiles {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFiles | undefined) {
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

  // file_path - computed: true, optional: false, required: false
  private _filePath = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathList(this, "file_path", false);
  public get filePath() {
    return this._filePath;
  }

  // file_type - computed: true, optional: false, required: false
  public get fileType() {
    return this.getStringAttribute('file_type');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDisk {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDisk | undefined) {
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

  // disk_files - computed: true, optional: false, required: false
  private _diskFiles = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesList(this, "disk_files", false);
  public get diskFiles() {
    return this._diskFiles;
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMap {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMap | undefined) {
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

  // tracked_disk - computed: true, optional: false, required: false
  private _trackedDisk = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskList(this, "tracked_disk", false);
  public get trackedDisk() {
    return this._trackedDisk;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFiles {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFiles | undefined) {
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

  // name_tracked_files - computed: true, optional: false, required: false
  private _nameTrackedFiles = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesList(this, "name_tracked_files", false);
  public get nameTrackedFiles() {
    return this._nameTrackedFiles;
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // uuid_tracked_disks_map - computed: true, optional: false, required: false
  private _uuidTrackedDisksMap = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapList(this, "uuid_tracked_disks_map", false);
  public get uuidTrackedDisksMap() {
    return this._uuidTrackedDisksMap;
  }
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotPointEntityReference {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotPointEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotPointEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotPointEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotPointEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotPointEntityReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotPointEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotPointEntityReference | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotPointEntityReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotPointEntityReferenceOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotPointEntityReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusError {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusErrorToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusErrorToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusError | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusErrorOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatus {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatus | undefined) {
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
  private _error = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusErrorList(this, "error", false);
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

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfo {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfoToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfoToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfo | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfoOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfo {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfo | undefined) {
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
  private _runTimeInfo = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfoList(this, "run_time_info", false);
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

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPoint {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPoint | undefined) {
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

  // cluster_entity_reference - computed: true, optional: false, required: false
  private _clusterEntityReference = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointClusterEntityReferenceList(this, "cluster_entity_reference", false);
  public get clusterEntityReference() {
    return this._clusterEntityReference;
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // replication_status - computed: true, optional: false, required: false
  private _replicationStatus = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointReplicationStatusList(this, "replication_status", false);
  public get replicationStatus() {
    return this._replicationStatus;
  }

  // snapshot_files - computed: true, optional: false, required: false
  private _snapshotFiles = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotFilesList(this, "snapshot_files", false);
  public get snapshotFiles() {
    return this._snapshotFiles;
  }

  // snapshot_point_entity_reference - computed: true, optional: false, required: false
  private _snapshotPointEntityReference = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotPointEntityReferenceList(this, "snapshot_point_entity_reference", false);
  public get snapshotPointEntityReference() {
    return this._snapshotPointEntityReference;
  }

  // snapshot_status - computed: true, optional: false, required: false
  private _snapshotStatus = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointSnapshotStatusList(this, "snapshot_status", false);
  public get snapshotStatus() {
    return this._snapshotStatus;
  }

  // vm_runtime_info - computed: true, optional: false, required: false
  private _vmRuntimeInfo = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointVmRuntimeInfoList(this, "vm_runtime_info", false);
  public get vmRuntimeInfo() {
    return this._vmRuntimeInfo;
  }
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMap {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMap | undefined) {
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

  // snapshot_point - computed: true, optional: false, required: false
  private _snapshotPoint = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapSnapshotPointList(this, "snapshot_point", false);
  public get snapshotPoint() {
    return this._snapshotPoint;
  }
}

export class DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsError {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsErrorToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsErrorToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsError | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsErrorOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsParent {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsParentToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsParentToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsParent | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsParentOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsParentSnapshot {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsParentSnapshotToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsParentSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsParentSnapshotToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsParentSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsParentSnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsParentSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsParentSnapshot | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsParentSnapshotList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsParentSnapshotOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsParentSnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsPermissionResources {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsPermissionResourcesToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsPermissionResourcesToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsPermissionResources | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsPermissionResourcesOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsSrcCluster {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsSrcClusterToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsSrcCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsSrcClusterToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsSrcCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsSrcClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsSrcCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsSrcCluster | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsSrcClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsSrcClusterOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsSrcClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsTagsAncestorDefinitions {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsTagsAncestorDefinitions | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsTagsDefinition {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsTagsDefinitionToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsTagsDefinitionToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsTagsDefinition | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsTagsDefinitionOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsTags {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsTagsToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsTagsToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsTags | undefined) {
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
  private _ancestorDefinitions = new DataIntersightHyperflexVmSnapshotInfoResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightHyperflexVmSnapshotInfoResultsTagsDefinitionList(this, "definition", false);
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIntersightHyperflexVmSnapshotInfoResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsTagsOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsTgtCluster {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsTgtClusterToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsTgtCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsTgtClusterToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsTgtCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsTgtClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsTgtCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsTgtCluster | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsTgtClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsTgtClusterOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsTgtClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsVersionContextInterestedMos {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsVersionContextInterestedMos | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsVersionContextRefMo {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsVersionContextRefMoToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsVersionContextRefMo | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsVersionContextRefMoOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsVersionContext {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsVersionContextToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsVersionContextToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsVersionContext | undefined) {
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
  private _interestedMos = new DataIntersightHyperflexVmSnapshotInfoResultsVersionContextInterestedMosList(this, "interested_mos", false);
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
  private _refMo = new DataIntersightHyperflexVmSnapshotInfoResultsVersionContextRefMoList(this, "ref_mo", false);
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

export class DataIntersightHyperflexVmSnapshotInfoResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsVersionContextOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsVmBackupInfo {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsVmBackupInfoToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsVmBackupInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsVmBackupInfoToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsVmBackupInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsVmBackupInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsVmBackupInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsVmBackupInfo | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsVmBackupInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsVmBackupInfoOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsVmBackupInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsVmEntityReference {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsVmEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsVmEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsVmEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsVmEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsVmEntityReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsVmEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsVmEntityReference | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsVmEntityReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsVmEntityReferenceOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsVmEntityReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResultsVmSnapshotEntityReference {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsVmSnapshotEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsVmSnapshotEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsVmSnapshotEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResultsVmSnapshotEntityReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsVmSnapshotEntityReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResultsVmSnapshotEntityReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResultsVmSnapshotEntityReference | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoResultsVmSnapshotEntityReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsVmSnapshotEntityReferenceOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsVmSnapshotEntityReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoResults {
}

export function dataIntersightHyperflexVmSnapshotInfoResultsToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexVmSnapshotInfoResultsToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexVmSnapshotInfoResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoResults | undefined) {
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
  private _ancestors = new DataIntersightHyperflexVmSnapshotInfoResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // cluster_id_snap_map - computed: true, optional: false, required: false
  private _clusterIdSnapMap = new DataIntersightHyperflexVmSnapshotInfoResultsClusterIdSnapMapList(this, "cluster_id_snap_map", false);
  public get clusterIdSnapMap() {
    return this._clusterIdSnapMap;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_status - computed: true, optional: false, required: false
  public get displayStatus() {
    return this.getStringAttribute('display_status');
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataIntersightHyperflexVmSnapshotInfoResultsErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
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
  private _parent = new DataIntersightHyperflexVmSnapshotInfoResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // parent_snapshot - computed: true, optional: false, required: false
  private _parentSnapshot = new DataIntersightHyperflexVmSnapshotInfoResultsParentSnapshotList(this, "parent_snapshot", false);
  public get parentSnapshot() {
    return this._parentSnapshot;
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightHyperflexVmSnapshotInfoResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }

  // replication_status - computed: true, optional: false, required: false
  public get replicationStatus() {
    return this.getStringAttribute('replication_status');
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // snapshot_error_msg - computed: true, optional: false, required: false
  public get snapshotErrorMsg() {
    return this.getStringAttribute('snapshot_error_msg');
  }

  // snapshot_status - computed: true, optional: false, required: false
  public get snapshotStatus() {
    return this.getStringAttribute('snapshot_status');
  }

  // source_timestamp - computed: true, optional: false, required: false
  public get sourceTimestamp() {
    return this.getNumberAttribute('source_timestamp');
  }

  // src_cluster - computed: true, optional: false, required: false
  private _srcCluster = new DataIntersightHyperflexVmSnapshotInfoResultsSrcClusterList(this, "src_cluster", false);
  public get srcCluster() {
    return this._srcCluster;
  }

  // src_cluster_name - computed: true, optional: false, required: false
  public get srcClusterName() {
    return this.getStringAttribute('src_cluster_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightHyperflexVmSnapshotInfoResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // target_completion_timestamp - computed: true, optional: false, required: false
  public get targetCompletionTimestamp() {
    return this.getNumberAttribute('target_completion_timestamp');
  }

  // tgt_cluster - computed: true, optional: false, required: false
  private _tgtCluster = new DataIntersightHyperflexVmSnapshotInfoResultsTgtClusterList(this, "tgt_cluster", false);
  public get tgtCluster() {
    return this._tgtCluster;
  }

  // tgt_cluster_name - computed: true, optional: false, required: false
  public get tgtClusterName() {
    return this.getStringAttribute('tgt_cluster_name');
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightHyperflexVmSnapshotInfoResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }

  // vm_backup_info - computed: true, optional: false, required: false
  private _vmBackupInfo = new DataIntersightHyperflexVmSnapshotInfoResultsVmBackupInfoList(this, "vm_backup_info", false);
  public get vmBackupInfo() {
    return this._vmBackupInfo;
  }

  // vm_entity_reference - computed: true, optional: false, required: false
  private _vmEntityReference = new DataIntersightHyperflexVmSnapshotInfoResultsVmEntityReferenceList(this, "vm_entity_reference", false);
  public get vmEntityReference() {
    return this._vmEntityReference;
  }

  // vm_snapshot_entity_reference - computed: true, optional: false, required: false
  private _vmSnapshotEntityReference = new DataIntersightHyperflexVmSnapshotInfoResultsVmSnapshotEntityReferenceList(this, "vm_snapshot_entity_reference", false);
  public get vmSnapshotEntityReference() {
    return this._vmSnapshotEntityReference;
  }
}

export class DataIntersightHyperflexVmSnapshotInfoResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoResultsOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#moid DataIntersightHyperflexVmSnapshotInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#selector DataIntersightHyperflexVmSnapshotInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoAncestorsToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoAncestors | cdktf.IResolvable): any {
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


export function dataIntersightHyperflexVmSnapshotInfoAncestorsToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoAncestors | cdktf.IResolvable): any {
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

export class DataIntersightHyperflexVmSnapshotInfoAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoAncestors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoAncestors | cdktf.IResolvable | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexVmSnapshotInfoAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoAncestorsOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointClusterEntityReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#confignum DataIntersightHyperflexVmSnapshotInfo#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#id DataIntersightHyperflexVmSnapshotInfo#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#idtype DataIntersightHyperflexVmSnapshotInfo#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#name DataIntersightHyperflexVmSnapshotInfo#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#type DataIntersightHyperflexVmSnapshotInfo#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointClusterEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointClusterEntityReferenceOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointClusterEntityReference): any {
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


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointClusterEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointClusterEntityReferenceOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointClusterEntityReference): any {
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

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointClusterEntityReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointClusterEntityReference | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointClusterEntityReference | undefined) {
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
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusError {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The error message string for this error stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#message DataIntersightHyperflexVmSnapshotInfo#message}
  */
  readonly message?: string;
  /**
  * The error message ID for this error stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#message_id DataIntersightHyperflexVmSnapshotInfo#message_id}
  */
  readonly messageId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusErrorToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusErrorOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusError): any {
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


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusErrorToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusErrorOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusError): any {
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

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusError | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusError | undefined) {
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
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#confignum DataIntersightHyperflexVmSnapshotInfo#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#id DataIntersightHyperflexVmSnapshotInfo#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#idtype DataIntersightHyperflexVmSnapshotInfo#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#name DataIntersightHyperflexVmSnapshotInfo#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#type DataIntersightHyperflexVmSnapshotInfo#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReferenceOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReference): any {
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


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReferenceOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReference): any {
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

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReference | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReference | undefined) {
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
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusRpoStatus {
  /**
  * Actual end time for the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#actual DataIntersightHyperflexVmSnapshotInfo#actual}
  */
  readonly actual?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Expected end time for the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#expected DataIntersightHyperflexVmSnapshotInfo#expected}
  */
  readonly expected?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * A flag to determine if snapshot delivery is delayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#rpo_exceeded DataIntersightHyperflexVmSnapshotInfo#rpo_exceeded}
  */
  readonly rpoExceeded?: boolean | cdktf.IResolvable;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusRpoStatusToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusRpoStatusOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusRpoStatus): any {
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


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusRpoStatusToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusRpoStatusOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusRpoStatus): any {
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

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusRpoStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusRpoStatus | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusRpoStatus | undefined) {
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
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Number of bytes currently replicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#bytes_replicated DataIntersightHyperflexVmSnapshotInfo#bytes_replicated}
  */
  readonly bytesReplicated?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Replication end time for this snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#end_time DataIntersightHyperflexVmSnapshotInfo#end_time}
  */
  readonly endTime?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Completion percentage for the replication job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#pct_complete DataIntersightHyperflexVmSnapshotInfo#pct_complete}
  */
  readonly pctComplete?: number;
  /**
  * Replication start time for this snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#start_time DataIntersightHyperflexVmSnapshotInfo#start_time}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#status DataIntersightHyperflexVmSnapshotInfo#status}
  */
  readonly status?: string;
  /**
  * error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#error DataIntersightHyperflexVmSnapshotInfo#error}
  */
  readonly error?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusError;
  /**
  * pack_entity_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#pack_entity_reference DataIntersightHyperflexVmSnapshotInfo#pack_entity_reference}
  */
  readonly packEntityReference?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReference;
  /**
  * rpo_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#rpo_status DataIntersightHyperflexVmSnapshotInfo#rpo_status}
  */
  readonly rpoStatus?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusRpoStatus;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatus): any {
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
    error: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusErrorToTerraform(struct!.error),
    pack_entity_reference: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReferenceToTerraform(struct!.packEntityReference),
    rpo_status: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusRpoStatusToTerraform(struct!.rpoStatus),
  }
}


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatus): any {
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
      value: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusErrorToHclTerraform(struct!.error),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusErrorList",
    },
    pack_entity_reference: {
      value: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReferenceToHclTerraform(struct!.packEntityReference),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReferenceList",
    },
    rpo_status: {
      value: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusRpoStatusToHclTerraform(struct!.rpoStatus),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusRpoStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatus | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatus | undefined) {
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
  private _error = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusError) {
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
  private _packEntityReference = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReferenceOutputReference(this, "pack_entity_reference");
  public get packEntityReference() {
    return this._packEntityReference;
  }
  public putPackEntityReference(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusPackEntityReference) {
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
  private _rpoStatus = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusRpoStatusOutputReference(this, "rpo_status");
  public get rpoStatus() {
    return this._rpoStatus;
  }
  public putRpoStatus(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusRpoStatus) {
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
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * This datastore's backend unique id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#ds_backend_id DataIntersightHyperflexVmSnapshotInfo#ds_backend_id}
  */
  readonly dsBackendId?: string;
  /**
  * This datastore's frontend id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#ds_frontend_id DataIntersightHyperflexVmSnapshotInfo#ds_frontend_id}
  */
  readonly dsFrontendId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfoToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfoOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    ds_backend_id: cdktf.stringToTerraform(struct!.dsBackendId),
    ds_frontend_id: cdktf.stringToTerraform(struct!.dsFrontendId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfoToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfoOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfo): any {
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
    ds_backend_id: {
      value: cdktf.stringToHclTerraform(struct!.dsBackendId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ds_frontend_id: {
      value: cdktf.stringToHclTerraform(struct!.dsFrontendId),
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

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfo | undefined {
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
    if (this._dsBackendId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsBackendId = this._dsBackendId;
    }
    if (this._dsFrontendId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsFrontendId = this._dsFrontendId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._dsBackendId = undefined;
      this._dsFrontendId = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._dsBackendId = value.dsBackendId;
      this._dsFrontendId = value.dsFrontendId;
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

  // ds_backend_id - computed: false, optional: true, required: false
  private _dsBackendId?: string; 
  public get dsBackendId() {
    return this.getStringAttribute('ds_backend_id');
  }
  public set dsBackendId(value: string) {
    this._dsBackendId = value;
  }
  public resetDsBackendId() {
    this._dsBackendId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsBackendIdInput() {
    return this._dsBackendId;
  }

  // ds_frontend_id - computed: false, optional: true, required: false
  private _dsFrontendId?: string; 
  public get dsFrontendId() {
    return this.getStringAttribute('ds_frontend_id');
  }
  public set dsFrontendId(value: string) {
    this._dsFrontendId = value;
  }
  public resetDsFrontendId() {
    this._dsFrontendId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsFrontendIdInput() {
    return this._dsFrontendId;
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
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Relative file path within the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#relative_file_path DataIntersightHyperflexVmSnapshotInfo#relative_file_path}
  */
  readonly relativeFilePath?: string;
  /**
  * ds_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#ds_info DataIntersightHyperflexVmSnapshotInfo#ds_info}
  */
  readonly dsInfo?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfo;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    relative_file_path: cdktf.stringToTerraform(struct!.relativeFilePath),
    ds_info: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfoToTerraform(struct!.dsInfo),
  }
}


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFiles | cdktf.IResolvable): any {
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
    relative_file_path: {
      value: cdktf.stringToHclTerraform(struct!.relativeFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ds_info: {
      value: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfoToHclTerraform(struct!.dsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFiles | cdktf.IResolvable | undefined {
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
    if (this._relativeFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeFilePath = this._relativeFilePath;
    }
    if (this._dsInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsInfo = this._dsInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._relativeFilePath = undefined;
      this._dsInfo.internalValue = undefined;
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
      this._relativeFilePath = value.relativeFilePath;
      this._dsInfo.internalValue = value.dsInfo;
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

  // relative_file_path - computed: false, optional: true, required: false
  private _relativeFilePath?: string; 
  public get relativeFilePath() {
    return this.getStringAttribute('relative_file_path');
  }
  public set relativeFilePath(value: string) {
    this._relativeFilePath = value;
  }
  public resetRelativeFilePath() {
    this._relativeFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeFilePathInput() {
    return this._relativeFilePath;
  }

  // ds_info - computed: false, optional: true, required: false
  private _dsInfo = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfoOutputReference(this, "ds_info");
  public get dsInfo() {
    return this._dsInfo;
  }
  public putDsInfo(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesDsInfo) {
    this._dsInfo.internalValue = value;
  }
  public resetDsInfo() {
    this._dsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsInfoInput() {
    return this._dsInfo.internalValue;
  }
}

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFiles[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * This datastore's backend unique id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#ds_backend_id DataIntersightHyperflexVmSnapshotInfo#ds_backend_id}
  */
  readonly dsBackendId?: string;
  /**
  * This datastore's frontend id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#ds_frontend_id DataIntersightHyperflexVmSnapshotInfo#ds_frontend_id}
  */
  readonly dsFrontendId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfoToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfoOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    ds_backend_id: cdktf.stringToTerraform(struct!.dsBackendId),
    ds_frontend_id: cdktf.stringToTerraform(struct!.dsFrontendId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfoToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfoOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfo): any {
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
    ds_backend_id: {
      value: cdktf.stringToHclTerraform(struct!.dsBackendId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ds_frontend_id: {
      value: cdktf.stringToHclTerraform(struct!.dsFrontendId),
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

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfo | undefined {
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
    if (this._dsBackendId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsBackendId = this._dsBackendId;
    }
    if (this._dsFrontendId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsFrontendId = this._dsFrontendId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._dsBackendId = undefined;
      this._dsFrontendId = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._dsBackendId = value.dsBackendId;
      this._dsFrontendId = value.dsFrontendId;
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

  // ds_backend_id - computed: false, optional: true, required: false
  private _dsBackendId?: string; 
  public get dsBackendId() {
    return this.getStringAttribute('ds_backend_id');
  }
  public set dsBackendId(value: string) {
    this._dsBackendId = value;
  }
  public resetDsBackendId() {
    this._dsBackendId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsBackendIdInput() {
    return this._dsBackendId;
  }

  // ds_frontend_id - computed: false, optional: true, required: false
  private _dsFrontendId?: string; 
  public get dsFrontendId() {
    return this.getStringAttribute('ds_frontend_id');
  }
  public set dsFrontendId(value: string) {
    this._dsFrontendId = value;
  }
  public resetDsFrontendId() {
    this._dsFrontendId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsFrontendIdInput() {
    return this._dsFrontendId;
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
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Relative file path within the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#relative_file_path DataIntersightHyperflexVmSnapshotInfo#relative_file_path}
  */
  readonly relativeFilePath?: string;
  /**
  * ds_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#ds_info DataIntersightHyperflexVmSnapshotInfo#ds_info}
  */
  readonly dsInfo?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfo;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    relative_file_path: cdktf.stringToTerraform(struct!.relativeFilePath),
    ds_info: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfoToTerraform(struct!.dsInfo),
  }
}


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePath): any {
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
    relative_file_path: {
      value: cdktf.stringToHclTerraform(struct!.relativeFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ds_info: {
      value: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfoToHclTerraform(struct!.dsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePath | undefined {
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
    if (this._relativeFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeFilePath = this._relativeFilePath;
    }
    if (this._dsInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsInfo = this._dsInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._relativeFilePath = undefined;
      this._dsInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._relativeFilePath = value.relativeFilePath;
      this._dsInfo.internalValue = value.dsInfo;
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

  // relative_file_path - computed: false, optional: true, required: false
  private _relativeFilePath?: string; 
  public get relativeFilePath() {
    return this.getStringAttribute('relative_file_path');
  }
  public set relativeFilePath(value: string) {
    this._relativeFilePath = value;
  }
  public resetRelativeFilePath() {
    this._relativeFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeFilePathInput() {
    return this._relativeFilePath;
  }

  // ds_info - computed: false, optional: true, required: false
  private _dsInfo = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfoOutputReference(this, "ds_info");
  public get dsInfo() {
    return this._dsInfo;
  }
  public putDsInfo(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathDsInfo) {
    this._dsInfo.internalValue = value;
  }
  public resetDsInfo() {
    this._dsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsInfoInput() {
    return this._dsInfo.internalValue;
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * File type for the tracked file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#file_type DataIntersightHyperflexVmSnapshotInfo#file_type}
  */
  readonly fileType?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * file_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#file_path DataIntersightHyperflexVmSnapshotInfo#file_path}
  */
  readonly filePath?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePath;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    file_type: cdktf.stringToTerraform(struct!.fileType),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    file_path: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathToTerraform(struct!.filePath),
  }
}


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFiles | cdktf.IResolvable): any {
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
    file_type: {
      value: cdktf.stringToHclTerraform(struct!.fileType),
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
    file_path: {
      value: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathToHclTerraform(struct!.filePath),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFiles | cdktf.IResolvable | undefined {
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
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._filePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._fileType = undefined;
      this._objectType = undefined;
      this._filePath.internalValue = undefined;
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
      this._fileType = value.fileType;
      this._objectType = value.objectType;
      this._filePath.internalValue = value.filePath;
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

  // file_type - computed: false, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
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

  // file_path - computed: false, optional: true, required: false
  private _filePath = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePathOutputReference(this, "file_path");
  public get filePath() {
    return this._filePath;
  }
  public putFilePath(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesFilePath) {
    this._filePath.internalValue = value;
  }
  public resetFilePath() {
    this._filePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath.internalValue;
  }
}

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFiles[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Disk type for a vm virtual disk.
  * * `NONE` - The disk type for this VM is None.
  * * `NATIVE` - The disk type for this VM is Native.
  * * `NONNATIVE` - The disk type for this VM is Non-Native.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#disk_type DataIntersightHyperflexVmSnapshotInfo#disk_type}
  */
  readonly diskType?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * disk_files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#disk_files DataIntersightHyperflexVmSnapshotInfo#disk_files}
  */
  readonly diskFiles?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFiles[] | cdktf.IResolvable;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    disk_files: cdktf.listMapper(dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesToTerraform, true)(struct!.diskFiles),
  }
}


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDisk): any {
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
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
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
    disk_files: {
      value: cdktf.listMapperHcl(dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesToHclTerraform, true)(struct!.diskFiles),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDisk | undefined {
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
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._diskFiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskFiles = this._diskFiles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._diskType = undefined;
      this._objectType = undefined;
      this._diskFiles.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._diskType = value.diskType;
      this._objectType = value.objectType;
      this._diskFiles.internalValue = value.diskFiles;
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

  // disk_files - computed: false, optional: true, required: false
  private _diskFiles = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFilesList(this, "disk_files", false);
  public get diskFiles() {
    return this._diskFiles;
  }
  public putDiskFiles(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskDiskFiles[] | cdktf.IResolvable) {
    this._diskFiles.internalValue = value;
  }
  public resetDiskFiles() {
    this._diskFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskFilesInput() {
    return this._diskFiles.internalValue;
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Disk unique id for a snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#uuid DataIntersightHyperflexVmSnapshotInfo#uuid}
  */
  readonly uuid?: string;
  /**
  * tracked_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#tracked_disk DataIntersightHyperflexVmSnapshotInfo#tracked_disk}
  */
  readonly trackedDisk?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDisk;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    tracked_disk: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskToTerraform(struct!.trackedDisk),
  }
}


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMap | cdktf.IResolvable): any {
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracked_disk: {
      value: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskToHclTerraform(struct!.trackedDisk),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMap | cdktf.IResolvable | undefined {
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
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._trackedDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackedDisk = this._trackedDisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._uuid = undefined;
      this._trackedDisk.internalValue = undefined;
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
      this._uuid = value.uuid;
      this._trackedDisk.internalValue = value.trackedDisk;
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

  // tracked_disk - computed: false, optional: true, required: false
  private _trackedDisk = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDiskOutputReference(this, "tracked_disk");
  public get trackedDisk() {
    return this._trackedDisk;
  }
  public putTrackedDisk(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapTrackedDisk) {
    this._trackedDisk.internalValue = value;
  }
  public resetTrackedDisk() {
    this._trackedDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackedDiskInput() {
    return this._trackedDisk.internalValue;
  }
}

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMap[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * name_tracked_files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#name_tracked_files DataIntersightHyperflexVmSnapshotInfo#name_tracked_files}
  */
  readonly nameTrackedFiles?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFiles[] | cdktf.IResolvable;
  /**
  * uuid_tracked_disks_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#uuid_tracked_disks_map DataIntersightHyperflexVmSnapshotInfo#uuid_tracked_disks_map}
  */
  readonly uuidTrackedDisksMap?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMap[] | cdktf.IResolvable;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    name_tracked_files: cdktf.listMapper(dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesToTerraform, true)(struct!.nameTrackedFiles),
    uuid_tracked_disks_map: cdktf.listMapper(dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapToTerraform, true)(struct!.uuidTrackedDisksMap),
  }
}


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFiles): any {
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
    name_tracked_files: {
      value: cdktf.listMapperHcl(dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesToHclTerraform, true)(struct!.nameTrackedFiles),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesList",
    },
    uuid_tracked_disks_map: {
      value: cdktf.listMapperHcl(dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapToHclTerraform, true)(struct!.uuidTrackedDisksMap),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFiles | undefined {
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
    if (this._nameTrackedFiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameTrackedFiles = this._nameTrackedFiles?.internalValue;
    }
    if (this._uuidTrackedDisksMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuidTrackedDisksMap = this._uuidTrackedDisksMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._nameTrackedFiles.internalValue = undefined;
      this._uuidTrackedDisksMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._nameTrackedFiles.internalValue = value.nameTrackedFiles;
      this._uuidTrackedDisksMap.internalValue = value.uuidTrackedDisksMap;
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

  // name_tracked_files - computed: false, optional: true, required: false
  private _nameTrackedFiles = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFilesList(this, "name_tracked_files", false);
  public get nameTrackedFiles() {
    return this._nameTrackedFiles;
  }
  public putNameTrackedFiles(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesNameTrackedFiles[] | cdktf.IResolvable) {
    this._nameTrackedFiles.internalValue = value;
  }
  public resetNameTrackedFiles() {
    this._nameTrackedFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameTrackedFilesInput() {
    return this._nameTrackedFiles.internalValue;
  }

  // uuid_tracked_disks_map - computed: false, optional: true, required: false
  private _uuidTrackedDisksMap = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMapList(this, "uuid_tracked_disks_map", false);
  public get uuidTrackedDisksMap() {
    return this._uuidTrackedDisksMap;
  }
  public putUuidTrackedDisksMap(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesUuidTrackedDisksMap[] | cdktf.IResolvable) {
    this._uuidTrackedDisksMap.internalValue = value;
  }
  public resetUuidTrackedDisksMap() {
    this._uuidTrackedDisksMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidTrackedDisksMapInput() {
    return this._uuidTrackedDisksMap.internalValue;
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotPointEntityReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#confignum DataIntersightHyperflexVmSnapshotInfo#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#id DataIntersightHyperflexVmSnapshotInfo#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#idtype DataIntersightHyperflexVmSnapshotInfo#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#name DataIntersightHyperflexVmSnapshotInfo#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#type DataIntersightHyperflexVmSnapshotInfo#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotPointEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotPointEntityReferenceOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotPointEntityReference): any {
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


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotPointEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotPointEntityReferenceOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotPointEntityReference): any {
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

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotPointEntityReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotPointEntityReference | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotPointEntityReference | undefined) {
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
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusError {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The error message string for this error stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#message DataIntersightHyperflexVmSnapshotInfo#message}
  */
  readonly message?: string;
  /**
  * The error message ID for this error stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#message_id DataIntersightHyperflexVmSnapshotInfo#message_id}
  */
  readonly messageId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusErrorToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusErrorOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusError): any {
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


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusErrorToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusErrorOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusError): any {
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

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusError | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusError | undefined) {
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
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Description of this Snapshot Point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#description DataIntersightHyperflexVmSnapshotInfo#description}
  */
  readonly description?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Completion percentage for this snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#pct_complete DataIntersightHyperflexVmSnapshotInfo#pct_complete}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#status DataIntersightHyperflexVmSnapshotInfo#status}
  */
  readonly status?: string;
  /**
  * Timestamp at which the Snapshot is taken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#timestamp DataIntersightHyperflexVmSnapshotInfo#timestamp}
  */
  readonly timestamp?: number;
  /**
  * Space Used by this Snapshot Point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#used_space DataIntersightHyperflexVmSnapshotInfo#used_space}
  */
  readonly usedSpace?: number;
  /**
  * error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#error DataIntersightHyperflexVmSnapshotInfo#error}
  */
  readonly error?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusError;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatus): any {
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
    error: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusErrorToTerraform(struct!.error),
  }
}


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatus): any {
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
      value: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusErrorToHclTerraform(struct!.error),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusErrorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatus | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatus | undefined) {
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
  private _error = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusError) {
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
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * BiosUuid of the Protected Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#bios_uuid DataIntersightHyperflexVmSnapshotInfo#bios_uuid}
  */
  readonly biosUuid?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Connection state of the Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#connection_state DataIntersightHyperflexVmSnapshotInfo#connection_state}
  */
  readonly connectionState?: string;
  /**
  * CPU Usage of Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#cpu_usage DataIntersightHyperflexVmSnapshotInfo#cpu_usage}
  */
  readonly cpuUsage?: number;
  /**
  * Folder which VM belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#folder DataIntersightHyperflexVmSnapshotInfo#folder}
  */
  readonly folder?: string;
  /**
  * Guest operating system family, if known.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#guest_family DataIntersightHyperflexVmSnapshotInfo#guest_family}
  */
  readonly guestFamily?: string;
  /**
  * Guest operating system full name, if known.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#guest_full_name DataIntersightHyperflexVmSnapshotInfo#guest_full_name}
  */
  readonly guestFullName?: string;
  /**
  * Guest operating system identifier (short name), if known.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#guest_id DataIntersightHyperflexVmSnapshotInfo#guest_id}
  */
  readonly guestId?: string;
  /**
  * VMware guest reset, powercycle, or boot action states.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#guest_state DataIntersightHyperflexVmSnapshotInfo#guest_state}
  */
  readonly guestState?: string;
  /**
  * Hostname of Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#host_name DataIntersightHyperflexVmSnapshotInfo#host_name}
  */
  readonly hostName?: string;
  /**
  * InstanceUuid of the Protected Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#instance_uuid DataIntersightHyperflexVmSnapshotInfo#instance_uuid}
  */
  readonly instanceUuid?: string;
  /**
  * CPU Memory in MB of Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#memory_mb DataIntersightHyperflexVmSnapshotInfo#memory_mb}
  */
  readonly memoryMb?: number;
  /**
  * Memory usage of Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#memory_usage DataIntersightHyperflexVmSnapshotInfo#memory_usage}
  */
  readonly memoryUsage?: number;
  /**
  * Virtual Machine unique MOID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#moid DataIntersightHyperflexVmSnapshotInfo#moid}
  */
  readonly moid?: string;
  /**
  * Name of the Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#name DataIntersightHyperflexVmSnapshotInfo#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#networks DataIntersightHyperflexVmSnapshotInfo#networks}
  */
  readonly networks?: string[];
  /**
  * Version of the Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#nr_version DataIntersightHyperflexVmSnapshotInfo#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * Number of CPUs for the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#num_cpu DataIntersightHyperflexVmSnapshotInfo#num_cpu}
  */
  readonly numCpu?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Power state of the Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#power_state DataIntersightHyperflexVmSnapshotInfo#power_state}
  */
  readonly powerState?: string;
  /**
  * Provisioned Size of Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#provisioned_size DataIntersightHyperflexVmSnapshotInfo#provisioned_size}
  */
  readonly provisionedSize?: number;
  /**
  * Resource pool which VM belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#resource_pool DataIntersightHyperflexVmSnapshotInfo#resource_pool}
  */
  readonly resourcePool?: string;
  /**
  * Used Size of Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#used_size DataIntersightHyperflexVmSnapshotInfo#used_size}
  */
  readonly usedSize?: number;
  /**
  * Vmx Path in VC datastore format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#vmx_path DataIntersightHyperflexVmSnapshotInfo#vmx_path}
  */
  readonly vmxPath?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfoToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfoOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfo): any {
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


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfoToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfoOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfo): any {
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

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfo | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfo | undefined) {
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
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * Virtual machine status code.
  * * `VM_ACCESSIBLE` - This virtual machine is accessible.
  * * `VM_INACCESSIBLE` - This virtual machine is not accessible.
  * * `VM_NOT_SUPPORTED` - This virtual machine is not supported.
  * * `NONE` - This virtual machine does not have a status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#status_code DataIntersightHyperflexVmSnapshotInfo#status_code}
  */
  readonly statusCode?: string;
  /**
  * Virtual machine's current UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#uuid DataIntersightHyperflexVmSnapshotInfo#uuid}
  */
  readonly uuid?: string;
  /**
  * run_time_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#run_time_info DataIntersightHyperflexVmSnapshotInfo#run_time_info}
  */
  readonly runTimeInfo?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfo;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfo): any {
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
    run_time_info: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfoToTerraform(struct!.runTimeInfo),
  }
}


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfo): any {
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
      value: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfoToHclTerraform(struct!.runTimeInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfo | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfo | undefined) {
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
  private _runTimeInfo = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfoOutputReference(this, "run_time_info");
  public get runTimeInfo() {
    return this._runTimeInfo;
  }
  public putRunTimeInfo(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoRunTimeInfo) {
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
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * cluster_entity_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#cluster_entity_reference DataIntersightHyperflexVmSnapshotInfo#cluster_entity_reference}
  */
  readonly clusterEntityReference?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointClusterEntityReference;
  /**
  * replication_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#replication_status DataIntersightHyperflexVmSnapshotInfo#replication_status}
  */
  readonly replicationStatus?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatus;
  /**
  * snapshot_files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#snapshot_files DataIntersightHyperflexVmSnapshotInfo#snapshot_files}
  */
  readonly snapshotFiles?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFiles;
  /**
  * snapshot_point_entity_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#snapshot_point_entity_reference DataIntersightHyperflexVmSnapshotInfo#snapshot_point_entity_reference}
  */
  readonly snapshotPointEntityReference?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotPointEntityReference;
  /**
  * snapshot_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#snapshot_status DataIntersightHyperflexVmSnapshotInfo#snapshot_status}
  */
  readonly snapshotStatus?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatus;
  /**
  * vm_runtime_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#vm_runtime_info DataIntersightHyperflexVmSnapshotInfo#vm_runtime_info}
  */
  readonly vmRuntimeInfo?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfo;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    cluster_entity_reference: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointClusterEntityReferenceToTerraform(struct!.clusterEntityReference),
    replication_status: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusToTerraform(struct!.replicationStatus),
    snapshot_files: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesToTerraform(struct!.snapshotFiles),
    snapshot_point_entity_reference: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotPointEntityReferenceToTerraform(struct!.snapshotPointEntityReference),
    snapshot_status: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusToTerraform(struct!.snapshotStatus),
    vm_runtime_info: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoToTerraform(struct!.vmRuntimeInfo),
  }
}


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointOutputReference | DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPoint): any {
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
    cluster_entity_reference: {
      value: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointClusterEntityReferenceToHclTerraform(struct!.clusterEntityReference),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointClusterEntityReferenceList",
    },
    replication_status: {
      value: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusToHclTerraform(struct!.replicationStatus),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusList",
    },
    snapshot_files: {
      value: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesToHclTerraform(struct!.snapshotFiles),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesList",
    },
    snapshot_point_entity_reference: {
      value: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotPointEntityReferenceToHclTerraform(struct!.snapshotPointEntityReference),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotPointEntityReferenceList",
    },
    snapshot_status: {
      value: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusToHclTerraform(struct!.snapshotStatus),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusList",
    },
    vm_runtime_info: {
      value: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoToHclTerraform(struct!.vmRuntimeInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPoint | undefined {
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
    if (this._clusterEntityReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterEntityReference = this._clusterEntityReference?.internalValue;
    }
    if (this._replicationStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationStatus = this._replicationStatus?.internalValue;
    }
    if (this._snapshotFiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotFiles = this._snapshotFiles?.internalValue;
    }
    if (this._snapshotPointEntityReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotPointEntityReference = this._snapshotPointEntityReference?.internalValue;
    }
    if (this._snapshotStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotStatus = this._snapshotStatus?.internalValue;
    }
    if (this._vmRuntimeInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmRuntimeInfo = this._vmRuntimeInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._clusterEntityReference.internalValue = undefined;
      this._replicationStatus.internalValue = undefined;
      this._snapshotFiles.internalValue = undefined;
      this._snapshotPointEntityReference.internalValue = undefined;
      this._snapshotStatus.internalValue = undefined;
      this._vmRuntimeInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._clusterEntityReference.internalValue = value.clusterEntityReference;
      this._replicationStatus.internalValue = value.replicationStatus;
      this._snapshotFiles.internalValue = value.snapshotFiles;
      this._snapshotPointEntityReference.internalValue = value.snapshotPointEntityReference;
      this._snapshotStatus.internalValue = value.snapshotStatus;
      this._vmRuntimeInfo.internalValue = value.vmRuntimeInfo;
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

  // cluster_entity_reference - computed: false, optional: true, required: false
  private _clusterEntityReference = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointClusterEntityReferenceOutputReference(this, "cluster_entity_reference");
  public get clusterEntityReference() {
    return this._clusterEntityReference;
  }
  public putClusterEntityReference(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointClusterEntityReference) {
    this._clusterEntityReference.internalValue = value;
  }
  public resetClusterEntityReference() {
    this._clusterEntityReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterEntityReferenceInput() {
    return this._clusterEntityReference.internalValue;
  }

  // replication_status - computed: false, optional: true, required: false
  private _replicationStatus = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatusOutputReference(this, "replication_status");
  public get replicationStatus() {
    return this._replicationStatus;
  }
  public putReplicationStatus(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointReplicationStatus) {
    this._replicationStatus.internalValue = value;
  }
  public resetReplicationStatus() {
    this._replicationStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationStatusInput() {
    return this._replicationStatus.internalValue;
  }

  // snapshot_files - computed: false, optional: true, required: false
  private _snapshotFiles = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFilesOutputReference(this, "snapshot_files");
  public get snapshotFiles() {
    return this._snapshotFiles;
  }
  public putSnapshotFiles(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotFiles) {
    this._snapshotFiles.internalValue = value;
  }
  public resetSnapshotFiles() {
    this._snapshotFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotFilesInput() {
    return this._snapshotFiles.internalValue;
  }

  // snapshot_point_entity_reference - computed: false, optional: true, required: false
  private _snapshotPointEntityReference = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotPointEntityReferenceOutputReference(this, "snapshot_point_entity_reference");
  public get snapshotPointEntityReference() {
    return this._snapshotPointEntityReference;
  }
  public putSnapshotPointEntityReference(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotPointEntityReference) {
    this._snapshotPointEntityReference.internalValue = value;
  }
  public resetSnapshotPointEntityReference() {
    this._snapshotPointEntityReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPointEntityReferenceInput() {
    return this._snapshotPointEntityReference.internalValue;
  }

  // snapshot_status - computed: false, optional: true, required: false
  private _snapshotStatus = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatusOutputReference(this, "snapshot_status");
  public get snapshotStatus() {
    return this._snapshotStatus;
  }
  public putSnapshotStatus(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointSnapshotStatus) {
    this._snapshotStatus.internalValue = value;
  }
  public resetSnapshotStatus() {
    this._snapshotStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotStatusInput() {
    return this._snapshotStatus.internalValue;
  }

  // vm_runtime_info - computed: false, optional: true, required: false
  private _vmRuntimeInfo = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfoOutputReference(this, "vm_runtime_info");
  public get vmRuntimeInfo() {
    return this._vmRuntimeInfo;
  }
  public putVmRuntimeInfo(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointVmRuntimeInfo) {
    this._vmRuntimeInfo.internalValue = value;
  }
  public resetVmRuntimeInfo() {
    this._vmRuntimeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmRuntimeInfoInput() {
    return this._vmRuntimeInfo.internalValue;
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * ClusterId of the snapshot point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#cluster_id DataIntersightHyperflexVmSnapshotInfo#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * snapshot_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#snapshot_point DataIntersightHyperflexVmSnapshotInfo#snapshot_point}
  */
  readonly snapshotPoint?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPoint;
}

export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    snapshot_point: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointToTerraform(struct!.snapshotPoint),
  }
}


export function dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMap | cdktf.IResolvable): any {
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
    snapshot_point: {
      value: dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointToHclTerraform(struct!.snapshotPoint),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMap | cdktf.IResolvable | undefined {
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
    if (this._snapshotPoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotPoint = this._snapshotPoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._clusterId = undefined;
      this._objectType = undefined;
      this._snapshotPoint.internalValue = undefined;
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
      this._snapshotPoint.internalValue = value.snapshotPoint;
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

  // snapshot_point - computed: false, optional: true, required: false
  private _snapshotPoint = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPointOutputReference(this, "snapshot_point");
  public get snapshotPoint() {
    return this._snapshotPoint;
  }
  public putSnapshotPoint(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapSnapshotPoint) {
    this._snapshotPoint.internalValue = value;
  }
  public resetSnapshotPoint() {
    this._snapshotPoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPointInput() {
    return this._snapshotPoint.internalValue;
  }
}

export class DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMap[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoError {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The error message string for this error stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#message DataIntersightHyperflexVmSnapshotInfo#message}
  */
  readonly message?: string;
  /**
  * The error message ID for this error stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#message_id DataIntersightHyperflexVmSnapshotInfo#message_id}
  */
  readonly messageId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoErrorToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoErrorOutputReference | DataIntersightHyperflexVmSnapshotInfoError): any {
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


export function dataIntersightHyperflexVmSnapshotInfoErrorToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoErrorOutputReference | DataIntersightHyperflexVmSnapshotInfoError): any {
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

export class DataIntersightHyperflexVmSnapshotInfoErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoError | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoError | undefined) {
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
export interface DataIntersightHyperflexVmSnapshotInfoParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#moid DataIntersightHyperflexVmSnapshotInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#selector DataIntersightHyperflexVmSnapshotInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoParentToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoParentOutputReference | DataIntersightHyperflexVmSnapshotInfoParent): any {
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


export function dataIntersightHyperflexVmSnapshotInfoParentToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoParentOutputReference | DataIntersightHyperflexVmSnapshotInfoParent): any {
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

export class DataIntersightHyperflexVmSnapshotInfoParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoParent | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoParent | undefined) {
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
export interface DataIntersightHyperflexVmSnapshotInfoParentSnapshot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#confignum DataIntersightHyperflexVmSnapshotInfo#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#id DataIntersightHyperflexVmSnapshotInfo#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#idtype DataIntersightHyperflexVmSnapshotInfo#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#name DataIntersightHyperflexVmSnapshotInfo#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#type DataIntersightHyperflexVmSnapshotInfo#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoParentSnapshotToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoParentSnapshotOutputReference | DataIntersightHyperflexVmSnapshotInfoParentSnapshot): any {
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


export function dataIntersightHyperflexVmSnapshotInfoParentSnapshotToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoParentSnapshotOutputReference | DataIntersightHyperflexVmSnapshotInfoParentSnapshot): any {
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

export class DataIntersightHyperflexVmSnapshotInfoParentSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoParentSnapshot | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoParentSnapshot | undefined) {
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
export interface DataIntersightHyperflexVmSnapshotInfoPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#moid DataIntersightHyperflexVmSnapshotInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#selector DataIntersightHyperflexVmSnapshotInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoPermissionResourcesToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoPermissionResources | cdktf.IResolvable): any {
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


export function dataIntersightHyperflexVmSnapshotInfoPermissionResourcesToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoPermissionResources | cdktf.IResolvable): any {
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

export class DataIntersightHyperflexVmSnapshotInfoPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoPermissionResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoPermissionResources | cdktf.IResolvable | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexVmSnapshotInfoPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoPermissionResourcesOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoSrcCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#moid DataIntersightHyperflexVmSnapshotInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#selector DataIntersightHyperflexVmSnapshotInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoSrcClusterToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoSrcClusterOutputReference | DataIntersightHyperflexVmSnapshotInfoSrcCluster): any {
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


export function dataIntersightHyperflexVmSnapshotInfoSrcClusterToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoSrcClusterOutputReference | DataIntersightHyperflexVmSnapshotInfoSrcCluster): any {
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

export class DataIntersightHyperflexVmSnapshotInfoSrcClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoSrcCluster | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoSrcCluster | undefined) {
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
export interface DataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#moid DataIntersightHyperflexVmSnapshotInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#selector DataIntersightHyperflexVmSnapshotInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitionsToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitions | cdktf.IResolvable): any {
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


export function dataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitions | cdktf.IResolvable): any {
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

export class DataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitionsOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#moid DataIntersightHyperflexVmSnapshotInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#selector DataIntersightHyperflexVmSnapshotInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoTagsDefinitionToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoTagsDefinitionOutputReference | DataIntersightHyperflexVmSnapshotInfoTagsDefinition): any {
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


export function dataIntersightHyperflexVmSnapshotInfoTagsDefinitionToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoTagsDefinitionOutputReference | DataIntersightHyperflexVmSnapshotInfoTagsDefinition): any {
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

export class DataIntersightHyperflexVmSnapshotInfoTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoTagsDefinition | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoTagsDefinition | undefined) {
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
export interface DataIntersightHyperflexVmSnapshotInfoTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#key DataIntersightHyperflexVmSnapshotInfo#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#propagated DataIntersightHyperflexVmSnapshotInfo#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#type DataIntersightHyperflexVmSnapshotInfo#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#value DataIntersightHyperflexVmSnapshotInfo#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#ancestor_definitions DataIntersightHyperflexVmSnapshotInfo#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#definition DataIntersightHyperflexVmSnapshotInfo#definition}
  */
  readonly definition?: DataIntersightHyperflexVmSnapshotInfoTagsDefinition;
}

export function dataIntersightHyperflexVmSnapshotInfoTagsToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    ancestor_definitions: cdktf.listMapper(dataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightHyperflexVmSnapshotInfoTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightHyperflexVmSnapshotInfoTagsToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoTags | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightHyperflexVmSnapshotInfoTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmSnapshotInfoTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._key = undefined;
      this._propagated = undefined;
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
  private _ancestorDefinitions = new DataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightHyperflexVmSnapshotInfoTagsAncestorDefinitions[] | cdktf.IResolvable) {
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
  private _definition = new DataIntersightHyperflexVmSnapshotInfoTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightHyperflexVmSnapshotInfoTagsDefinition) {
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

export class DataIntersightHyperflexVmSnapshotInfoTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexVmSnapshotInfoTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoTagsOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoTgtCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#moid DataIntersightHyperflexVmSnapshotInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#selector DataIntersightHyperflexVmSnapshotInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoTgtClusterToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoTgtClusterOutputReference | DataIntersightHyperflexVmSnapshotInfoTgtCluster): any {
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


export function dataIntersightHyperflexVmSnapshotInfoTgtClusterToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoTgtClusterOutputReference | DataIntersightHyperflexVmSnapshotInfoTgtCluster): any {
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

export class DataIntersightHyperflexVmSnapshotInfoTgtClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoTgtCluster | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoTgtCluster | undefined) {
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
export interface DataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#moid DataIntersightHyperflexVmSnapshotInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#selector DataIntersightHyperflexVmSnapshotInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMosToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMos | cdktf.IResolvable): any {
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


export function dataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMosToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMos | cdktf.IResolvable): any {
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

export class DataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMos | cdktf.IResolvable | undefined) {
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

export class DataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMosOutputReference {
    return new DataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexVmSnapshotInfoVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#moid DataIntersightHyperflexVmSnapshotInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#selector DataIntersightHyperflexVmSnapshotInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoVersionContextRefMoToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoVersionContextRefMoOutputReference | DataIntersightHyperflexVmSnapshotInfoVersionContextRefMo): any {
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


export function dataIntersightHyperflexVmSnapshotInfoVersionContextRefMoToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoVersionContextRefMoOutputReference | DataIntersightHyperflexVmSnapshotInfoVersionContextRefMo): any {
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

export class DataIntersightHyperflexVmSnapshotInfoVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoVersionContextRefMo | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoVersionContextRefMo | undefined) {
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
export interface DataIntersightHyperflexVmSnapshotInfoVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#marked_for_deletion DataIntersightHyperflexVmSnapshotInfo#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#nr_version DataIntersightHyperflexVmSnapshotInfo#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#timestamp DataIntersightHyperflexVmSnapshotInfo#timestamp}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#version_type DataIntersightHyperflexVmSnapshotInfo#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#interested_mos DataIntersightHyperflexVmSnapshotInfo#interested_mos}
  */
  readonly interestedMos?: DataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#ref_mo DataIntersightHyperflexVmSnapshotInfo#ref_mo}
  */
  readonly refMo?: DataIntersightHyperflexVmSnapshotInfoVersionContextRefMo;
}

export function dataIntersightHyperflexVmSnapshotInfoVersionContextToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoVersionContextOutputReference | DataIntersightHyperflexVmSnapshotInfoVersionContext): any {
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
    interested_mos: cdktf.listMapper(dataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightHyperflexVmSnapshotInfoVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightHyperflexVmSnapshotInfoVersionContextToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoVersionContextOutputReference | DataIntersightHyperflexVmSnapshotInfoVersionContext): any {
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
      value: cdktf.listMapperHcl(dataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightHyperflexVmSnapshotInfoVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexVmSnapshotInfoVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexVmSnapshotInfoVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoVersionContext | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoVersionContext | undefined) {
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
  private _interestedMos = new DataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightHyperflexVmSnapshotInfoVersionContextInterestedMos[] | cdktf.IResolvable) {
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
  private _refMo = new DataIntersightHyperflexVmSnapshotInfoVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightHyperflexVmSnapshotInfoVersionContextRefMo) {
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
export interface DataIntersightHyperflexVmSnapshotInfoVmBackupInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#moid DataIntersightHyperflexVmSnapshotInfo#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#selector DataIntersightHyperflexVmSnapshotInfo#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoVmBackupInfoToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoVmBackupInfoOutputReference | DataIntersightHyperflexVmSnapshotInfoVmBackupInfo): any {
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


export function dataIntersightHyperflexVmSnapshotInfoVmBackupInfoToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoVmBackupInfoOutputReference | DataIntersightHyperflexVmSnapshotInfoVmBackupInfo): any {
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

export class DataIntersightHyperflexVmSnapshotInfoVmBackupInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoVmBackupInfo | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoVmBackupInfo | undefined) {
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
export interface DataIntersightHyperflexVmSnapshotInfoVmEntityReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#confignum DataIntersightHyperflexVmSnapshotInfo#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#id DataIntersightHyperflexVmSnapshotInfo#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#idtype DataIntersightHyperflexVmSnapshotInfo#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#name DataIntersightHyperflexVmSnapshotInfo#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#type DataIntersightHyperflexVmSnapshotInfo#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoVmEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoVmEntityReferenceOutputReference | DataIntersightHyperflexVmSnapshotInfoVmEntityReference): any {
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


export function dataIntersightHyperflexVmSnapshotInfoVmEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoVmEntityReferenceOutputReference | DataIntersightHyperflexVmSnapshotInfoVmEntityReference): any {
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

export class DataIntersightHyperflexVmSnapshotInfoVmEntityReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoVmEntityReference | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoVmEntityReference | undefined) {
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
export interface DataIntersightHyperflexVmSnapshotInfoVmSnapshotEntityReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#additional_properties DataIntersightHyperflexVmSnapshotInfo#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#class_id DataIntersightHyperflexVmSnapshotInfo#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#confignum DataIntersightHyperflexVmSnapshotInfo#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#id DataIntersightHyperflexVmSnapshotInfo#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#idtype DataIntersightHyperflexVmSnapshotInfo#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#name DataIntersightHyperflexVmSnapshotInfo#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#object_type DataIntersightHyperflexVmSnapshotInfo#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#type DataIntersightHyperflexVmSnapshotInfo#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexVmSnapshotInfoVmSnapshotEntityReferenceToTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoVmSnapshotEntityReferenceOutputReference | DataIntersightHyperflexVmSnapshotInfoVmSnapshotEntityReference): any {
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


export function dataIntersightHyperflexVmSnapshotInfoVmSnapshotEntityReferenceToHclTerraform(struct?: DataIntersightHyperflexVmSnapshotInfoVmSnapshotEntityReferenceOutputReference | DataIntersightHyperflexVmSnapshotInfoVmSnapshotEntityReference): any {
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

export class DataIntersightHyperflexVmSnapshotInfoVmSnapshotEntityReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexVmSnapshotInfoVmSnapshotEntityReference | undefined {
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

  public set internalValue(value: DataIntersightHyperflexVmSnapshotInfoVmSnapshotEntityReference | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info intersight_hyperflex_vm_snapshot_info}
*/
export class DataIntersightHyperflexVmSnapshotInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_hyperflex_vm_snapshot_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightHyperflexVmSnapshotInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightHyperflexVmSnapshotInfo to import
  * @param importFromId The id of the existing DataIntersightHyperflexVmSnapshotInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightHyperflexVmSnapshotInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_hyperflex_vm_snapshot_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_vm_snapshot_info intersight_hyperflex_vm_snapshot_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightHyperflexVmSnapshotInfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightHyperflexVmSnapshotInfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_hyperflex_vm_snapshot_info',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.72'
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
    this._classId = config.classId;
    this._createTime = config.createTime;
    this._displayStatus = config.displayStatus;
    this._domainGroupMoid = config.domainGroupMoid;
    this._id = config.id;
    this._label = config.label;
    this._modTime = config.modTime;
    this._mode = config.mode;
    this._moid = config.moid;
    this._objectType = config.objectType;
    this._owners = config.owners;
    this._replicationStatus = config.replicationStatus;
    this._sharedScope = config.sharedScope;
    this._snapshotErrorMsg = config.snapshotErrorMsg;
    this._snapshotStatus = config.snapshotStatus;
    this._sourceTimestamp = config.sourceTimestamp;
    this._srcClusterName = config.srcClusterName;
    this._targetCompletionTimestamp = config.targetCompletionTimestamp;
    this._tgtClusterName = config.tgtClusterName;
    this._ancestors.internalValue = config.ancestors;
    this._clusterIdSnapMap.internalValue = config.clusterIdSnapMap;
    this._error.internalValue = config.error;
    this._parent.internalValue = config.parent;
    this._parentSnapshot.internalValue = config.parentSnapshot;
    this._permissionResources.internalValue = config.permissionResources;
    this._srcCluster.internalValue = config.srcCluster;
    this._tags.internalValue = config.tags;
    this._tgtCluster.internalValue = config.tgtCluster;
    this._versionContext.internalValue = config.versionContext;
    this._vmBackupInfo.internalValue = config.vmBackupInfo;
    this._vmEntityReference.internalValue = config.vmEntityReference;
    this._vmSnapshotEntityReference.internalValue = config.vmSnapshotEntityReference;
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

  // display_status - computed: false, optional: true, required: false
  private _displayStatus?: string; 
  public get displayStatus() {
    return this.getStringAttribute('display_status');
  }
  public set displayStatus(value: string) {
    this._displayStatus = value;
  }
  public resetDisplayStatus() {
    this._displayStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayStatusInput() {
    return this._displayStatus;
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // mode - computed: false, optional: true, required: false
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

  // replication_status - computed: false, optional: true, required: false
  private _replicationStatus?: string; 
  public get replicationStatus() {
    return this.getStringAttribute('replication_status');
  }
  public set replicationStatus(value: string) {
    this._replicationStatus = value;
  }
  public resetReplicationStatus() {
    this._replicationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationStatusInput() {
    return this._replicationStatus;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightHyperflexVmSnapshotInfoResultsList(this, "results", false);
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

  // snapshot_error_msg - computed: false, optional: true, required: false
  private _snapshotErrorMsg?: string; 
  public get snapshotErrorMsg() {
    return this.getStringAttribute('snapshot_error_msg');
  }
  public set snapshotErrorMsg(value: string) {
    this._snapshotErrorMsg = value;
  }
  public resetSnapshotErrorMsg() {
    this._snapshotErrorMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotErrorMsgInput() {
    return this._snapshotErrorMsg;
  }

  // snapshot_status - computed: false, optional: true, required: false
  private _snapshotStatus?: string; 
  public get snapshotStatus() {
    return this.getStringAttribute('snapshot_status');
  }
  public set snapshotStatus(value: string) {
    this._snapshotStatus = value;
  }
  public resetSnapshotStatus() {
    this._snapshotStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotStatusInput() {
    return this._snapshotStatus;
  }

  // source_timestamp - computed: false, optional: true, required: false
  private _sourceTimestamp?: number; 
  public get sourceTimestamp() {
    return this.getNumberAttribute('source_timestamp');
  }
  public set sourceTimestamp(value: number) {
    this._sourceTimestamp = value;
  }
  public resetSourceTimestamp() {
    this._sourceTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTimestampInput() {
    return this._sourceTimestamp;
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

  // target_completion_timestamp - computed: false, optional: true, required: false
  private _targetCompletionTimestamp?: number; 
  public get targetCompletionTimestamp() {
    return this.getNumberAttribute('target_completion_timestamp');
  }
  public set targetCompletionTimestamp(value: number) {
    this._targetCompletionTimestamp = value;
  }
  public resetTargetCompletionTimestamp() {
    this._targetCompletionTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCompletionTimestampInput() {
    return this._targetCompletionTimestamp;
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
  private _ancestors = new DataIntersightHyperflexVmSnapshotInfoAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightHyperflexVmSnapshotInfoAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // cluster_id_snap_map - computed: false, optional: true, required: false
  private _clusterIdSnapMap = new DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapList(this, "cluster_id_snap_map", false);
  public get clusterIdSnapMap() {
    return this._clusterIdSnapMap;
  }
  public putClusterIdSnapMap(value: DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMap[] | cdktf.IResolvable) {
    this._clusterIdSnapMap.internalValue = value;
  }
  public resetClusterIdSnapMap() {
    this._clusterIdSnapMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdSnapMapInput() {
    return this._clusterIdSnapMap.internalValue;
  }

  // error - computed: false, optional: true, required: false
  private _error = new DataIntersightHyperflexVmSnapshotInfoErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: DataIntersightHyperflexVmSnapshotInfoError) {
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
  private _parent = new DataIntersightHyperflexVmSnapshotInfoParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightHyperflexVmSnapshotInfoParent) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // parent_snapshot - computed: false, optional: true, required: false
  private _parentSnapshot = new DataIntersightHyperflexVmSnapshotInfoParentSnapshotOutputReference(this, "parent_snapshot");
  public get parentSnapshot() {
    return this._parentSnapshot;
  }
  public putParentSnapshot(value: DataIntersightHyperflexVmSnapshotInfoParentSnapshot) {
    this._parentSnapshot.internalValue = value;
  }
  public resetParentSnapshot() {
    this._parentSnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentSnapshotInput() {
    return this._parentSnapshot.internalValue;
  }

  // permission_resources - computed: false, optional: true, required: false
  private _permissionResources = new DataIntersightHyperflexVmSnapshotInfoPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightHyperflexVmSnapshotInfoPermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // src_cluster - computed: false, optional: true, required: false
  private _srcCluster = new DataIntersightHyperflexVmSnapshotInfoSrcClusterOutputReference(this, "src_cluster");
  public get srcCluster() {
    return this._srcCluster;
  }
  public putSrcCluster(value: DataIntersightHyperflexVmSnapshotInfoSrcCluster) {
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
  private _tags = new DataIntersightHyperflexVmSnapshotInfoTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightHyperflexVmSnapshotInfoTags[] | cdktf.IResolvable) {
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
  private _tgtCluster = new DataIntersightHyperflexVmSnapshotInfoTgtClusterOutputReference(this, "tgt_cluster");
  public get tgtCluster() {
    return this._tgtCluster;
  }
  public putTgtCluster(value: DataIntersightHyperflexVmSnapshotInfoTgtCluster) {
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
  private _versionContext = new DataIntersightHyperflexVmSnapshotInfoVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightHyperflexVmSnapshotInfoVersionContext) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
  }

  // vm_backup_info - computed: false, optional: true, required: false
  private _vmBackupInfo = new DataIntersightHyperflexVmSnapshotInfoVmBackupInfoOutputReference(this, "vm_backup_info");
  public get vmBackupInfo() {
    return this._vmBackupInfo;
  }
  public putVmBackupInfo(value: DataIntersightHyperflexVmSnapshotInfoVmBackupInfo) {
    this._vmBackupInfo.internalValue = value;
  }
  public resetVmBackupInfo() {
    this._vmBackupInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmBackupInfoInput() {
    return this._vmBackupInfo.internalValue;
  }

  // vm_entity_reference - computed: false, optional: true, required: false
  private _vmEntityReference = new DataIntersightHyperflexVmSnapshotInfoVmEntityReferenceOutputReference(this, "vm_entity_reference");
  public get vmEntityReference() {
    return this._vmEntityReference;
  }
  public putVmEntityReference(value: DataIntersightHyperflexVmSnapshotInfoVmEntityReference) {
    this._vmEntityReference.internalValue = value;
  }
  public resetVmEntityReference() {
    this._vmEntityReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmEntityReferenceInput() {
    return this._vmEntityReference.internalValue;
  }

  // vm_snapshot_entity_reference - computed: false, optional: true, required: false
  private _vmSnapshotEntityReference = new DataIntersightHyperflexVmSnapshotInfoVmSnapshotEntityReferenceOutputReference(this, "vm_snapshot_entity_reference");
  public get vmSnapshotEntityReference() {
    return this._vmSnapshotEntityReference;
  }
  public putVmSnapshotEntityReference(value: DataIntersightHyperflexVmSnapshotInfoVmSnapshotEntityReference) {
    this._vmSnapshotEntityReference.internalValue = value;
  }
  public resetVmSnapshotEntityReference() {
    this._vmSnapshotEntityReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSnapshotEntityReferenceInput() {
    return this._vmSnapshotEntityReference.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      class_id: cdktf.stringToTerraform(this._classId),
      create_time: cdktf.stringToTerraform(this._createTime),
      display_status: cdktf.stringToTerraform(this._displayStatus),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      mod_time: cdktf.stringToTerraform(this._modTime),
      mode: cdktf.stringToTerraform(this._mode),
      moid: cdktf.stringToTerraform(this._moid),
      object_type: cdktf.stringToTerraform(this._objectType),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      replication_status: cdktf.stringToTerraform(this._replicationStatus),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      snapshot_error_msg: cdktf.stringToTerraform(this._snapshotErrorMsg),
      snapshot_status: cdktf.stringToTerraform(this._snapshotStatus),
      source_timestamp: cdktf.numberToTerraform(this._sourceTimestamp),
      src_cluster_name: cdktf.stringToTerraform(this._srcClusterName),
      target_completion_timestamp: cdktf.numberToTerraform(this._targetCompletionTimestamp),
      tgt_cluster_name: cdktf.stringToTerraform(this._tgtClusterName),
      ancestors: cdktf.listMapper(dataIntersightHyperflexVmSnapshotInfoAncestorsToTerraform, true)(this._ancestors.internalValue),
      cluster_id_snap_map: cdktf.listMapper(dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapToTerraform, true)(this._clusterIdSnapMap.internalValue),
      error: dataIntersightHyperflexVmSnapshotInfoErrorToTerraform(this._error.internalValue),
      parent: dataIntersightHyperflexVmSnapshotInfoParentToTerraform(this._parent.internalValue),
      parent_snapshot: dataIntersightHyperflexVmSnapshotInfoParentSnapshotToTerraform(this._parentSnapshot.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightHyperflexVmSnapshotInfoPermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      src_cluster: dataIntersightHyperflexVmSnapshotInfoSrcClusterToTerraform(this._srcCluster.internalValue),
      tags: cdktf.listMapper(dataIntersightHyperflexVmSnapshotInfoTagsToTerraform, true)(this._tags.internalValue),
      tgt_cluster: dataIntersightHyperflexVmSnapshotInfoTgtClusterToTerraform(this._tgtCluster.internalValue),
      version_context: dataIntersightHyperflexVmSnapshotInfoVersionContextToTerraform(this._versionContext.internalValue),
      vm_backup_info: dataIntersightHyperflexVmSnapshotInfoVmBackupInfoToTerraform(this._vmBackupInfo.internalValue),
      vm_entity_reference: dataIntersightHyperflexVmSnapshotInfoVmEntityReferenceToTerraform(this._vmEntityReference.internalValue),
      vm_snapshot_entity_reference: dataIntersightHyperflexVmSnapshotInfoVmSnapshotEntityReferenceToTerraform(this._vmSnapshotEntityReference.internalValue),
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
      display_status: {
        value: cdktf.stringToHclTerraform(this._displayStatus),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mod_time: {
        value: cdktf.stringToHclTerraform(this._modTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      replication_status: {
        value: cdktf.stringToHclTerraform(this._replicationStatus),
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
      snapshot_error_msg: {
        value: cdktf.stringToHclTerraform(this._snapshotErrorMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_status: {
        value: cdktf.stringToHclTerraform(this._snapshotStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_timestamp: {
        value: cdktf.numberToHclTerraform(this._sourceTimestamp),
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
      target_completion_timestamp: {
        value: cdktf.numberToHclTerraform(this._targetCompletionTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tgt_cluster_name: {
        value: cdktf.stringToHclTerraform(this._tgtClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexVmSnapshotInfoAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmSnapshotInfoAncestorsList",
      },
      cluster_id_snap_map: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapToHclTerraform, true)(this._clusterIdSnapMap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmSnapshotInfoClusterIdSnapMapList",
      },
      error: {
        value: dataIntersightHyperflexVmSnapshotInfoErrorToHclTerraform(this._error.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmSnapshotInfoErrorList",
      },
      parent: {
        value: dataIntersightHyperflexVmSnapshotInfoParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmSnapshotInfoParentList",
      },
      parent_snapshot: {
        value: dataIntersightHyperflexVmSnapshotInfoParentSnapshotToHclTerraform(this._parentSnapshot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmSnapshotInfoParentSnapshotList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexVmSnapshotInfoPermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmSnapshotInfoPermissionResourcesList",
      },
      src_cluster: {
        value: dataIntersightHyperflexVmSnapshotInfoSrcClusterToHclTerraform(this._srcCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmSnapshotInfoSrcClusterList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexVmSnapshotInfoTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmSnapshotInfoTagsList",
      },
      tgt_cluster: {
        value: dataIntersightHyperflexVmSnapshotInfoTgtClusterToHclTerraform(this._tgtCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmSnapshotInfoTgtClusterList",
      },
      version_context: {
        value: dataIntersightHyperflexVmSnapshotInfoVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmSnapshotInfoVersionContextList",
      },
      vm_backup_info: {
        value: dataIntersightHyperflexVmSnapshotInfoVmBackupInfoToHclTerraform(this._vmBackupInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmSnapshotInfoVmBackupInfoList",
      },
      vm_entity_reference: {
        value: dataIntersightHyperflexVmSnapshotInfoVmEntityReferenceToHclTerraform(this._vmEntityReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmSnapshotInfoVmEntityReferenceList",
      },
      vm_snapshot_entity_reference: {
        value: dataIntersightHyperflexVmSnapshotInfoVmSnapshotEntityReferenceToHclTerraform(this._vmSnapshotEntityReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexVmSnapshotInfoVmSnapshotEntityReferenceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
