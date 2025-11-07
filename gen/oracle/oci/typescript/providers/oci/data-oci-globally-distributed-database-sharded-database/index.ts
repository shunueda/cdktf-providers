// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/globally_distributed_database_sharded_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGloballyDistributedDatabaseShardedDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/globally_distributed_database_sharded_database#metadata DataOciGloballyDistributedDatabaseShardedDatabase#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/globally_distributed_database_sharded_database#sharded_database_id DataOciGloballyDistributedDatabaseShardedDatabase#sharded_database_id}
  */
  readonly shardedDatabaseId: string;
}
export interface DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails {
}

export function dataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsToTerraform(struct?: DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsToHclTerraform(struct?: DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // kms_key_version_id - computed: true, optional: false, required: false
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
}

export class DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference {
    return new DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails {
}

export function dataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsToTerraform(struct?: DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsToHclTerraform(struct?: DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_password - computed: true, optional: false, required: false
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // cloud_autonomous_vm_cluster_id - computed: true, optional: false, required: false
  public get cloudAutonomousVmClusterId() {
    return this.getStringAttribute('cloud_autonomous_vm_cluster_id');
  }

  // compute_count - computed: true, optional: false, required: false
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }

  // container_database_id - computed: true, optional: false, required: false
  public get containerDatabaseId() {
    return this.getStringAttribute('container_database_id');
  }

  // container_database_parent_id - computed: true, optional: false, required: false
  public get containerDatabaseParentId() {
    return this.getStringAttribute('container_database_parent_id');
  }

  // data_storage_size_in_gbs - computed: true, optional: false, required: false
  public get dataStorageSizeInGbs() {
    return this.getNumberAttribute('data_storage_size_in_gbs');
  }

  // encryption_key_details - computed: true, optional: false, required: false
  private _encryptionKeyDetails = new DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList(this, "encryption_key_details", false);
  public get encryptionKeyDetails() {
    return this._encryptionKeyDetails;
  }

  // is_auto_scaling_enabled - computed: true, optional: false, required: false
  public get isAutoScalingEnabled() {
    return this.getBooleanAttribute('is_auto_scaling_enabled');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peer_cloud_autonomous_vm_cluster_id - computed: true, optional: false, required: false
  public get peerCloudAutonomousVmClusterId() {
    return this.getStringAttribute('peer_cloud_autonomous_vm_cluster_id');
  }

  // shard_group - computed: true, optional: false, required: false
  public get shardGroup() {
    return this.getStringAttribute('shard_group');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // supporting_resource_id - computed: true, optional: false, required: false
  public get supportingResourceId() {
    return this.getStringAttribute('supporting_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_ssl_certificate_expires - computed: true, optional: false, required: false
  public get timeSslCertificateExpires() {
    return this.getStringAttribute('time_ssl_certificate_expires');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference {
    return new DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings {
}

export function dataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsToTerraform(struct?: DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsToHclTerraform(struct?: DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_connection_strings - computed: true, optional: false, required: false
  private _allConnectionStrings = new cdktf.StringMap(this, "all_connection_strings");
  public get allConnectionStrings() {
    return this._allConnectionStrings;
  }
}

export class DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference {
    return new DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGloballyDistributedDatabaseShardedDatabaseGsms {
}

export function dataOciGloballyDistributedDatabaseShardedDatabaseGsmsToTerraform(struct?: DataOciGloballyDistributedDatabaseShardedDatabaseGsms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGloballyDistributedDatabaseShardedDatabaseGsmsToHclTerraform(struct?: DataOciGloballyDistributedDatabaseShardedDatabaseGsms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGloballyDistributedDatabaseShardedDatabaseGsms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGloballyDistributedDatabaseShardedDatabaseGsms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_count - computed: true, optional: false, required: false
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }

  // data_storage_size_in_gbs - computed: true, optional: false, required: false
  public get dataStorageSizeInGbs() {
    return this.getNumberAttribute('data_storage_size_in_gbs');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // supporting_resource_id - computed: true, optional: false, required: false
  public get supportingResourceId() {
    return this.getStringAttribute('supporting_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_ssl_certificate_expires - computed: true, optional: false, required: false
  public get timeSslCertificateExpires() {
    return this.getStringAttribute('time_ssl_certificate_expires');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference {
    return new DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations {
}

export function dataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsToTerraform(struct?: DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsToHclTerraform(struct?: DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // selection - computed: true, optional: false, required: false
  public get selection() {
    return this.getStringAttribute('selection');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference {
    return new DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails {
}

export function dataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsToTerraform(struct?: DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsToHclTerraform(struct?: DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // kms_key_version_id - computed: true, optional: false, required: false
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
}

export class DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference {
    return new DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails {
}

export function dataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsToTerraform(struct?: DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsToHclTerraform(struct?: DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_password - computed: true, optional: false, required: false
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // cloud_autonomous_vm_cluster_id - computed: true, optional: false, required: false
  public get cloudAutonomousVmClusterId() {
    return this.getStringAttribute('cloud_autonomous_vm_cluster_id');
  }

  // compute_count - computed: true, optional: false, required: false
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }

  // container_database_id - computed: true, optional: false, required: false
  public get containerDatabaseId() {
    return this.getStringAttribute('container_database_id');
  }

  // container_database_parent_id - computed: true, optional: false, required: false
  public get containerDatabaseParentId() {
    return this.getStringAttribute('container_database_parent_id');
  }

  // data_storage_size_in_gbs - computed: true, optional: false, required: false
  public get dataStorageSizeInGbs() {
    return this.getNumberAttribute('data_storage_size_in_gbs');
  }

  // encryption_key_details - computed: true, optional: false, required: false
  private _encryptionKeyDetails = new DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList(this, "encryption_key_details", false);
  public get encryptionKeyDetails() {
    return this._encryptionKeyDetails;
  }

  // is_auto_scaling_enabled - computed: true, optional: false, required: false
  public get isAutoScalingEnabled() {
    return this.getBooleanAttribute('is_auto_scaling_enabled');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peer_cloud_autonomous_vm_cluster_id - computed: true, optional: false, required: false
  public get peerCloudAutonomousVmClusterId() {
    return this.getStringAttribute('peer_cloud_autonomous_vm_cluster_id');
  }

  // shard_group - computed: true, optional: false, required: false
  public get shardGroup() {
    return this.getStringAttribute('shard_group');
  }

  // shard_space - computed: true, optional: false, required: false
  public get shardSpace() {
    return this.getStringAttribute('shard_space');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // supporting_resource_id - computed: true, optional: false, required: false
  public get supportingResourceId() {
    return this.getStringAttribute('supporting_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_ssl_certificate_expires - computed: true, optional: false, required: false
  public get timeSslCertificateExpires() {
    return this.getStringAttribute('time_ssl_certificate_expires');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference {
    return new DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/globally_distributed_database_sharded_database oci_globally_distributed_database_sharded_database}
*/
export class DataOciGloballyDistributedDatabaseShardedDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_globally_distributed_database_sharded_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciGloballyDistributedDatabaseShardedDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciGloballyDistributedDatabaseShardedDatabase to import
  * @param importFromId The id of the existing DataOciGloballyDistributedDatabaseShardedDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/globally_distributed_database_sharded_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciGloballyDistributedDatabaseShardedDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_globally_distributed_database_sharded_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/globally_distributed_database_sharded_database oci_globally_distributed_database_sharded_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGloballyDistributedDatabaseShardedDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGloballyDistributedDatabaseShardedDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_globally_distributed_database_sharded_database',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata = config.metadata;
    this._shardedDatabaseId = config.shardedDatabaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_signed_certificate - computed: true, optional: false, required: false
  public get caSignedCertificate() {
    return this.getStringAttribute('ca_signed_certificate');
  }

  // catalog_details - computed: true, optional: false, required: false
  private _catalogDetails = new DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList(this, "catalog_details", false);
  public get catalogDetails() {
    return this._catalogDetails;
  }

  // character_set - computed: true, optional: false, required: false
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }

  // chunks - computed: true, optional: false, required: false
  public get chunks() {
    return this.getNumberAttribute('chunks');
  }

  // cluster_certificate_common_name - computed: true, optional: false, required: false
  public get clusterCertificateCommonName() {
    return this.getStringAttribute('cluster_certificate_common_name');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // configure_gsms_trigger - computed: true, optional: false, required: false
  public get configureGsmsTrigger() {
    return this.getNumberAttribute('configure_gsms_trigger');
  }

  // configure_gsms_trigger_is_latest_gsm_image - computed: true, optional: false, required: false
  public get configureGsmsTriggerIsLatestGsmImage() {
    return this.getBooleanAttribute('configure_gsms_trigger_is_latest_gsm_image');
  }

  // configure_gsms_trigger_old_gsm_names - computed: true, optional: false, required: false
  public get configureGsmsTriggerOldGsmNames() {
    return this.getListAttribute('configure_gsms_trigger_old_gsm_names');
  }

  // configure_sharding_trigger - computed: true, optional: false, required: false
  public get configureShardingTrigger() {
    return this.getNumberAttribute('configure_sharding_trigger');
  }

  // connection_strings - computed: true, optional: false, required: false
  private _connectionStrings = new DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList(this, "connection_strings", false);
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // db_deployment_type - computed: true, optional: false, required: false
  public get dbDeploymentType() {
    return this.getStringAttribute('db_deployment_type');
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // db_workload - computed: true, optional: false, required: false
  public get dbWorkload() {
    return this.getStringAttribute('db_workload');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // download_gsm_certificate_signing_request_trigger - computed: true, optional: false, required: false
  public get downloadGsmCertificateSigningRequestTrigger() {
    return this.getNumberAttribute('download_gsm_certificate_signing_request_trigger');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // generate_gsm_certificate_signing_request_trigger - computed: true, optional: false, required: false
  public get generateGsmCertificateSigningRequestTrigger() {
    return this.getNumberAttribute('generate_gsm_certificate_signing_request_trigger');
  }

  // generate_wallet_password - computed: true, optional: false, required: false
  public get generateWalletPassword() {
    return this.getStringAttribute('generate_wallet_password');
  }

  // generate_wallet_trigger - computed: true, optional: false, required: false
  public get generateWalletTrigger() {
    return this.getNumberAttribute('generate_wallet_trigger');
  }

  // get_connection_string_trigger - computed: true, optional: false, required: false
  public get fetchConnectionStringTrigger() {
    return this.getNumberAttribute('get_connection_string_trigger');
  }

  // gsms - computed: true, optional: false, required: false
  private _gsms = new DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList(this, "gsms", false);
  public get gsms() {
    return this._gsms;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // listener_port - computed: true, optional: false, required: false
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }

  // listener_port_tls - computed: true, optional: false, required: false
  public get listenerPortTls() {
    return this.getNumberAttribute('listener_port_tls');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // ncharacter_set - computed: true, optional: false, required: false
  public get ncharacterSet() {
    return this.getStringAttribute('ncharacter_set');
  }

  // ons_port_local - computed: true, optional: false, required: false
  public get onsPortLocal() {
    return this.getNumberAttribute('ons_port_local');
  }

  // ons_port_remote - computed: true, optional: false, required: false
  public get onsPortRemote() {
    return this.getNumberAttribute('ons_port_remote');
  }

  // patch_operations - computed: true, optional: false, required: false
  private _patchOperations = new DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList(this, "patch_operations", false);
  public get patchOperations() {
    return this._patchOperations;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // private_endpoint - computed: true, optional: false, required: false
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // replication_factor - computed: true, optional: false, required: false
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }

  // replication_method - computed: true, optional: false, required: false
  public get replicationMethod() {
    return this.getStringAttribute('replication_method');
  }

  // replication_unit - computed: true, optional: false, required: false
  public get replicationUnit() {
    return this.getNumberAttribute('replication_unit');
  }

  // shard_details - computed: true, optional: false, required: false
  private _shardDetails = new DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList(this, "shard_details", false);
  public get shardDetails() {
    return this._shardDetails;
  }

  // sharded_database_id - computed: false, optional: false, required: true
  private _shardedDatabaseId?: string; 
  public get shardedDatabaseId() {
    return this.getStringAttribute('sharded_database_id');
  }
  public set shardedDatabaseId(value: string) {
    this._shardedDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardedDatabaseIdInput() {
    return this._shardedDatabaseId;
  }

  // sharding_method - computed: true, optional: false, required: false
  public get shardingMethod() {
    return this.getStringAttribute('sharding_method');
  }

  // start_database_trigger - computed: true, optional: false, required: false
  public get startDatabaseTrigger() {
    return this.getNumberAttribute('start_database_trigger');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stop_database_trigger - computed: true, optional: false, required: false
  public get stopDatabaseTrigger() {
    return this.getNumberAttribute('stop_database_trigger');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // upload_signed_certificate_and_generate_wallet_trigger - computed: true, optional: false, required: false
  public get uploadSignedCertificateAndGenerateWalletTrigger() {
    return this.getNumberAttribute('upload_signed_certificate_and_generate_wallet_trigger');
  }

  // validate_network_trigger - computed: true, optional: false, required: false
  public get validateNetworkTrigger() {
    return this.getNumberAttribute('validate_network_trigger');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: cdktf.stringToTerraform(this._metadata),
      sharded_database_id: cdktf.stringToTerraform(this._shardedDatabaseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sharded_database_id: {
        value: cdktf.stringToHclTerraform(this._shardedDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
