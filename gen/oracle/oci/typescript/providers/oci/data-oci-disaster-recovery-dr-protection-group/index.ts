// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_dr_protection_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDisasterRecoveryDrProtectionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_dr_protection_group#dr_protection_group_id DataOciDisasterRecoveryDrProtectionGroup#dr_protection_group_id}
  */
  readonly drProtectionGroupId: string;
}
export interface DataOciDisasterRecoveryDrProtectionGroupAssociation {
}

export function dataOciDisasterRecoveryDrProtectionGroupAssociationToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupAssociationToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupAssociation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupAssociation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // peer_id - computed: true, optional: false, required: false
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }

  // peer_region - computed: true, optional: false, required: false
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupAssociationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupLogLocation {
}

export function dataOciDisasterRecoveryDrProtectionGroupLogLocationToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupLogLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupLogLocationToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupLogLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupLogLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupLogLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupLogLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_backend_set_name - computed: true, optional: false, required: false
  public get destinationBackendSetName() {
    return this.getStringAttribute('destination_backend_set_name');
  }

  // is_backend_set_for_non_movable - computed: true, optional: false, required: false
  public get isBackendSetForNonMovable() {
    return this.getBooleanAttribute('is_backend_set_for_non_movable');
  }

  // source_backend_set_name - computed: true, optional: false, required: false
  public get sourceBackendSetName() {
    return this.getStringAttribute('source_backend_set_name');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersBackupConfig {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersBackupConfigToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersBackupConfigToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_schedule - computed: true, optional: false, required: false
  public get backupSchedule() {
    return this.getStringAttribute('backup_schedule');
  }

  // exclude_namespaces - computed: true, optional: false, required: false
  public get excludeNamespaces() {
    return this.getListAttribute('exclude_namespaces');
  }

  // image_replication_vault_secret_id - computed: true, optional: false, required: false
  public get imageReplicationVaultSecretId() {
    return this.getStringAttribute('image_replication_vault_secret_id');
  }

  // max_number_of_backups_retained - computed: true, optional: false, required: false
  public get maxNumberOfBackupsRetained() {
    return this.getNumberAttribute('max_number_of_backups_retained');
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // replicate_images - computed: true, optional: false, required: false
  public get replicateImages() {
    return this.getStringAttribute('replicate_images');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersBackupConfigOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersBackupLocation {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersBackupLocationToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBackupLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersBackupLocationToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBackupLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBackupLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersBackupLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersBackupLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBackupLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersBackupLocationOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersBackupLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachments {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachmentsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachmentsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_volume_id - computed: true, optional: false, required: false
  public get blockVolumeId() {
    return this.getStringAttribute('block_volume_id');
  }

  // volume_attachment_reference_instance_id - computed: true, optional: false, required: false
  public get volumeAttachmentReferenceInstanceId() {
    return this.getStringAttribute('volume_attachment_reference_instance_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachmentsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMounts {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMountsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMountsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_point - computed: true, optional: false, required: false
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMountsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMountsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperations {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attachments - computed: true, optional: false, required: false
  private _attachments = new DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachmentsList(this, "attachments", false);
  public get attachments() {
    return this._attachments;
  }

  // mounts - computed: true, optional: false, required: false
  private _mounts = new DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMountsList(this, "mounts", false);
  public get mounts() {
    return this._mounts;
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // volume_attachment_reference_instance_id - computed: true, optional: false, required: false
  public get volumeAttachmentReferenceInstanceId() {
    return this.getStringAttribute('volume_attachment_reference_instance_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_point - computed: true, optional: false, required: false
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attachment_details - computed: true, optional: false, required: false
  private _attachmentDetails = new DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList(this, "attachment_details", false);
  public get attachmentDetails() {
    return this._attachmentDetails;
  }

  // block_volume_id - computed: true, optional: false, required: false
  public get blockVolumeId() {
    return this.getStringAttribute('block_volume_id');
  }

  // mount_details - computed: true, optional: false, required: false
  private _mountDetails = new DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList(this, "mount_details", false);
  public get mountDetails() {
    return this._mountDetails;
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersCommonDestinationKey {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersCommonDestinationKeyToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersCommonDestinationKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersCommonDestinationKeyToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersCommonDestinationKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersCommonDestinationKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersCommonDestinationKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersCommonDestinationKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key_id - computed: true, optional: false, required: false
  public get encryptionKeyId() {
    return this.getStringAttribute('encryption_key_id');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersCommonDestinationKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersCommonDestinationKeyOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersCommonDestinationKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetails {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetailsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetailsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password_vault_secret_id - computed: true, optional: false, required: false
  public get passwordVaultSecretId() {
    return this.getStringAttribute('password_vault_secret_id');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetailsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetails {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetailsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetailsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password_vault_secret_id - computed: true, optional: false, required: false
  public get passwordVaultSecretId() {
    return this.getStringAttribute('password_vault_secret_id');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetailsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKey {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKeyToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKeyToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key_id - computed: true, optional: false, required: false
  public get encryptionKeyId() {
    return this.getStringAttribute('encryption_key_id');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKeyOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_mount_target_id - computed: true, optional: false, required: false
  public get destinationMountTargetId() {
    return this.getStringAttribute('destination_mount_target_id');
  }

  // export_id - computed: true, optional: false, required: false
  public get exportId() {
    return this.getStringAttribute('export_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_target_id - computed: true, optional: false, required: false
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_target_id - computed: true, optional: false, required: false
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_path - computed: true, optional: false, required: false
  public get exportPath() {
    return this.getStringAttribute('export_path');
  }

  // mount_details - computed: true, optional: false, required: false
  private _mountDetails = new DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList(this, "mount_details", false);
  public get mountDetails() {
    return this._mountDetails;
  }

  // mount_point - computed: true, optional: false, required: false
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }

  // mount_target_id - computed: true, optional: false, required: false
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }

  // unmount_details - computed: true, optional: false, required: false
  private _unmountDetails = new DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList(this, "unmount_details", false);
  public get unmountDetails() {
    return this._unmountDetails;
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersLoadBalancerMappings {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersLoadBalancerMappingsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersLoadBalancerMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersLoadBalancerMappingsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersLoadBalancerMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersLoadBalancerMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersLoadBalancerMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersLoadBalancerMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_load_balancer_id - computed: true, optional: false, required: false
  public get destinationLoadBalancerId() {
    return this.getStringAttribute('destination_load_balancer_id');
  }

  // source_load_balancer_id - computed: true, optional: false, required: false
  public get sourceLoadBalancerId() {
    return this.getStringAttribute('source_load_balancer_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersLoadBalancerMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersLoadBalancerMappingsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersLoadBalancerMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigs {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappings {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappingsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappingsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_network_load_balancer_id - computed: true, optional: false, required: false
  public get destinationNetworkLoadBalancerId() {
    return this.getStringAttribute('destination_network_load_balancer_id');
  }

  // source_network_load_balancer_id - computed: true, optional: false, required: false
  public get sourceNetworkLoadBalancerId() {
    return this.getStringAttribute('source_network_load_balancer_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappingsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKey {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKeyToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKeyToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key_id - computed: true, optional: false, required: false
  public get encryptionKeyId() {
    return this.getStringAttribute('encryption_key_id');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKeyOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappings {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_encryption_key - computed: true, optional: false, required: false
  private _destinationEncryptionKey = new DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKeyList(this, "destination_encryption_key", false);
  public get destinationEncryptionKey() {
    return this._destinationEncryptionKey;
  }

  // source_volume_id - computed: true, optional: false, required: false
  public get sourceVolumeId() {
    return this.getStringAttribute('source_volume_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersVaultMappings {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersVaultMappingsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersVaultMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersVaultMappingsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersVaultMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersVaultMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersVaultMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersVaultMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_vault_id - computed: true, optional: false, required: false
  public get destinationVaultId() {
    return this.getStringAttribute('destination_vault_id');
  }

  // source_vault_id - computed: true, optional: false, required: false
  public get sourceVaultId() {
    return this.getStringAttribute('source_vault_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersVaultMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersVaultMappingsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersVaultMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigs {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_nsg_id_list - computed: true, optional: false, required: false
  public get destinationNsgIdList() {
    return this.getListAttribute('destination_nsg_id_list');
  }

  // destination_subnet_id - computed: true, optional: false, required: false
  public get destinationSubnetId() {
    return this.getStringAttribute('destination_subnet_id');
  }

  // source_vnic_id - computed: true, optional: false, required: false
  public get sourceVnicId() {
    return this.getStringAttribute('source_vnic_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_nsg_id_list - computed: true, optional: false, required: false
  public get destinationNsgIdList() {
    return this.getListAttribute('destination_nsg_id_list');
  }

  // destination_primary_private_ip_address - computed: true, optional: false, required: false
  public get destinationPrimaryPrivateIpAddress() {
    return this.getStringAttribute('destination_primary_private_ip_address');
  }

  // destination_primary_private_ip_hostname_label - computed: true, optional: false, required: false
  public get destinationPrimaryPrivateIpHostnameLabel() {
    return this.getStringAttribute('destination_primary_private_ip_hostname_label');
  }

  // destination_reserved_public_ip_id - computed: true, optional: false, required: false
  public get destinationReservedPublicIpId() {
    return this.getStringAttribute('destination_reserved_public_ip_id');
  }

  // destination_subnet_id - computed: true, optional: false, required: false
  public get destinationSubnetId() {
    return this.getStringAttribute('destination_subnet_id');
  }

  // source_vnic_id - computed: true, optional: false, required: false
  public get sourceVnicId() {
    return this.getStringAttribute('source_vnic_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupMembers {
}

export function dataOciDisasterRecoveryDrProtectionGroupMembersToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupMembersToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autonomous_database_standby_type_for_dr_drills - computed: true, optional: false, required: false
  public get autonomousDatabaseStandbyTypeForDrDrills() {
    return this.getStringAttribute('autonomous_database_standby_type_for_dr_drills');
  }

  // backend_set_mappings - computed: true, optional: false, required: false
  private _backendSetMappings = new DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList(this, "backend_set_mappings", false);
  public get backendSetMappings() {
    return this._backendSetMappings;
  }

  // backup_config - computed: true, optional: false, required: false
  private _backupConfig = new DataOciDisasterRecoveryDrProtectionGroupMembersBackupConfigList(this, "backup_config", false);
  public get backupConfig() {
    return this._backupConfig;
  }

  // backup_location - computed: true, optional: false, required: false
  private _backupLocation = new DataOciDisasterRecoveryDrProtectionGroupMembersBackupLocationList(this, "backup_location", false);
  public get backupLocation() {
    return this._backupLocation;
  }

  // block_volume_attach_and_mount_operations - computed: true, optional: false, required: false
  private _blockVolumeAttachAndMountOperations = new DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsList(this, "block_volume_attach_and_mount_operations", false);
  public get blockVolumeAttachAndMountOperations() {
    return this._blockVolumeAttachAndMountOperations;
  }

  // block_volume_operations - computed: true, optional: false, required: false
  private _blockVolumeOperations = new DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList(this, "block_volume_operations", false);
  public get blockVolumeOperations() {
    return this._blockVolumeOperations;
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // common_destination_key - computed: true, optional: false, required: false
  private _commonDestinationKey = new DataOciDisasterRecoveryDrProtectionGroupMembersCommonDestinationKeyList(this, "common_destination_key", false);
  public get commonDestinationKey() {
    return this._commonDestinationKey;
  }

  // connection_string_type - computed: true, optional: false, required: false
  public get connectionStringType() {
    return this.getStringAttribute('connection_string_type');
  }

  // db_system_admin_user_details - computed: true, optional: false, required: false
  private _dbSystemAdminUserDetails = new DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetailsList(this, "db_system_admin_user_details", false);
  public get dbSystemAdminUserDetails() {
    return this._dbSystemAdminUserDetails;
  }

  // db_system_replication_user_details - computed: true, optional: false, required: false
  private _dbSystemReplicationUserDetails = new DataOciDisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetailsList(this, "db_system_replication_user_details", false);
  public get dbSystemReplicationUserDetails() {
    return this._dbSystemReplicationUserDetails;
  }

  // destination_availability_domain - computed: true, optional: false, required: false
  public get destinationAvailabilityDomain() {
    return this.getStringAttribute('destination_availability_domain');
  }

  // destination_backup_policy_id - computed: true, optional: false, required: false
  public get destinationBackupPolicyId() {
    return this.getStringAttribute('destination_backup_policy_id');
  }

  // destination_capacity_reservation_id - computed: true, optional: false, required: false
  public get destinationCapacityReservationId() {
    return this.getStringAttribute('destination_capacity_reservation_id');
  }

  // destination_compartment_id - computed: true, optional: false, required: false
  public get destinationCompartmentId() {
    return this.getStringAttribute('destination_compartment_id');
  }

  // destination_dedicated_vm_host_id - computed: true, optional: false, required: false
  public get destinationDedicatedVmHostId() {
    return this.getStringAttribute('destination_dedicated_vm_host_id');
  }

  // destination_encryption_key - computed: true, optional: false, required: false
  private _destinationEncryptionKey = new DataOciDisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKeyList(this, "destination_encryption_key", false);
  public get destinationEncryptionKey() {
    return this._destinationEncryptionKey;
  }

  // destination_load_balancer_id - computed: true, optional: false, required: false
  public get destinationLoadBalancerId() {
    return this.getStringAttribute('destination_load_balancer_id');
  }

  // destination_network_load_balancer_id - computed: true, optional: false, required: false
  public get destinationNetworkLoadBalancerId() {
    return this.getStringAttribute('destination_network_load_balancer_id');
  }

  // destination_snapshot_policy_id - computed: true, optional: false, required: false
  public get destinationSnapshotPolicyId() {
    return this.getStringAttribute('destination_snapshot_policy_id');
  }

  // export_mappings - computed: true, optional: false, required: false
  private _exportMappings = new DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList(this, "export_mappings", false);
  public get exportMappings() {
    return this._exportMappings;
  }

  // file_system_operations - computed: true, optional: false, required: false
  private _fileSystemOperations = new DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList(this, "file_system_operations", false);
  public get fileSystemOperations() {
    return this._fileSystemOperations;
  }

  // gtid_reconciliation_timeout - computed: true, optional: false, required: false
  public get gtidReconciliationTimeout() {
    return this.getNumberAttribute('gtid_reconciliation_timeout');
  }

  // is_continue_on_gtid_reconciliation_timeout - computed: true, optional: false, required: false
  public get isContinueOnGtidReconciliationTimeout() {
    return this.getBooleanAttribute('is_continue_on_gtid_reconciliation_timeout');
  }

  // is_movable - computed: true, optional: false, required: false
  public get isMovable() {
    return this.getBooleanAttribute('is_movable');
  }

  // is_retain_fault_domain - computed: true, optional: false, required: false
  public get isRetainFaultDomain() {
    return this.getBooleanAttribute('is_retain_fault_domain');
  }

  // is_start_stop_enabled - computed: true, optional: false, required: false
  public get isStartStopEnabled() {
    return this.getBooleanAttribute('is_start_stop_enabled');
  }

  // jump_host_id - computed: true, optional: false, required: false
  public get jumpHostId() {
    return this.getStringAttribute('jump_host_id');
  }

  // load_balancer_mappings - computed: true, optional: false, required: false
  private _loadBalancerMappings = new DataOciDisasterRecoveryDrProtectionGroupMembersLoadBalancerMappingsList(this, "load_balancer_mappings", false);
  public get loadBalancerMappings() {
    return this._loadBalancerMappings;
  }

  // managed_node_pool_configs - computed: true, optional: false, required: false
  private _managedNodePoolConfigs = new DataOciDisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigsList(this, "managed_node_pool_configs", false);
  public get managedNodePoolConfigs() {
    return this._managedNodePoolConfigs;
  }

  // member_id - computed: true, optional: false, required: false
  public get memberId() {
    return this.getStringAttribute('member_id');
  }

  // member_type - computed: true, optional: false, required: false
  public get memberType() {
    return this.getStringAttribute('member_type');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // network_load_balancer_mappings - computed: true, optional: false, required: false
  private _networkLoadBalancerMappings = new DataOciDisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappingsList(this, "network_load_balancer_mappings", false);
  public get networkLoadBalancerMappings() {
    return this._networkLoadBalancerMappings;
  }

  // password_vault_secret_id - computed: true, optional: false, required: false
  public get passwordVaultSecretId() {
    return this.getStringAttribute('password_vault_secret_id');
  }

  // peer_cluster_id - computed: true, optional: false, required: false
  public get peerClusterId() {
    return this.getStringAttribute('peer_cluster_id');
  }

  // peer_db_system_id - computed: true, optional: false, required: false
  public get peerDbSystemId() {
    return this.getStringAttribute('peer_db_system_id');
  }

  // source_volume_to_destination_encryption_key_mappings - computed: true, optional: false, required: false
  private _sourceVolumeToDestinationEncryptionKeyMappings = new DataOciDisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsList(this, "source_volume_to_destination_encryption_key_mappings", false);
  public get sourceVolumeToDestinationEncryptionKeyMappings() {
    return this._sourceVolumeToDestinationEncryptionKeyMappings;
  }

  // vault_mappings - computed: true, optional: false, required: false
  private _vaultMappings = new DataOciDisasterRecoveryDrProtectionGroupMembersVaultMappingsList(this, "vault_mappings", false);
  public get vaultMappings() {
    return this._vaultMappings;
  }

  // virtual_node_pool_configs - computed: true, optional: false, required: false
  private _virtualNodePoolConfigs = new DataOciDisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigsList(this, "virtual_node_pool_configs", false);
  public get virtualNodePoolConfigs() {
    return this._virtualNodePoolConfigs;
  }

  // vnic_mapping - computed: true, optional: false, required: false
  private _vnicMapping = new DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList(this, "vnic_mapping", false);
  public get vnicMapping() {
    return this._vnicMapping;
  }

  // vnic_mappings - computed: true, optional: false, required: false
  private _vnicMappings = new DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList(this, "vnic_mappings", false);
  public get vnicMappings() {
    return this._vnicMappings;
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_dr_protection_group oci_disaster_recovery_dr_protection_group}
*/
export class DataOciDisasterRecoveryDrProtectionGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_disaster_recovery_dr_protection_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDisasterRecoveryDrProtectionGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDisasterRecoveryDrProtectionGroup to import
  * @param importFromId The id of the existing DataOciDisasterRecoveryDrProtectionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_dr_protection_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDisasterRecoveryDrProtectionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_disaster_recovery_dr_protection_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_dr_protection_group oci_disaster_recovery_dr_protection_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDisasterRecoveryDrProtectionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDisasterRecoveryDrProtectionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_disaster_recovery_dr_protection_group',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._drProtectionGroupId = config.drProtectionGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association - computed: true, optional: false, required: false
  private _association = new DataOciDisasterRecoveryDrProtectionGroupAssociationList(this, "association", false);
  public get association() {
    return this._association;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // disassociate_trigger - computed: true, optional: false, required: false
  public get disassociateTrigger() {
    return this.getNumberAttribute('disassociate_trigger');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dr_protection_group_id - computed: false, optional: false, required: true
  private _drProtectionGroupId?: string; 
  public get drProtectionGroupId() {
    return this.getStringAttribute('dr_protection_group_id');
  }
  public set drProtectionGroupId(value: string) {
    this._drProtectionGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drProtectionGroupIdInput() {
    return this._drProtectionGroupId;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // life_cycle_details - computed: true, optional: false, required: false
  public get lifeCycleDetails() {
    return this.getStringAttribute('life_cycle_details');
  }

  // lifecycle_sub_state - computed: true, optional: false, required: false
  public get lifecycleSubState() {
    return this.getStringAttribute('lifecycle_sub_state');
  }

  // log_location - computed: true, optional: false, required: false
  private _logLocation = new DataOciDisasterRecoveryDrProtectionGroupLogLocationList(this, "log_location", false);
  public get logLocation() {
    return this._logLocation;
  }

  // members - computed: true, optional: false, required: false
  private _members = new DataOciDisasterRecoveryDrProtectionGroupMembersList(this, "members", false);
  public get members() {
    return this._members;
  }

  // peer_id - computed: true, optional: false, required: false
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }

  // peer_region - computed: true, optional: false, required: false
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dr_protection_group_id: cdktf.stringToTerraform(this._drProtectionGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dr_protection_group_id: {
        value: cdktf.stringToHclTerraform(this._drProtectionGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
