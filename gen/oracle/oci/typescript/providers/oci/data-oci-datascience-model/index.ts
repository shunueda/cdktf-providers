// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatascienceModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_model#model_id DataOciDatascienceModel#model_id}
  */
  readonly modelId: string;
}
export interface DataOciDatascienceModelBackupOperationDetails {
}

export function dataOciDatascienceModelBackupOperationDetailsToTerraform(struct?: DataOciDatascienceModelBackupOperationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceModelBackupOperationDetailsToHclTerraform(struct?: DataOciDatascienceModelBackupOperationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceModelBackupOperationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceModelBackupOperationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceModelBackupOperationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_state - computed: true, optional: false, required: false
  public get backupState() {
    return this.getStringAttribute('backup_state');
  }

  // backup_state_details - computed: true, optional: false, required: false
  public get backupStateDetails() {
    return this.getStringAttribute('backup_state_details');
  }

  // time_last_backup - computed: true, optional: false, required: false
  public get timeLastBackup() {
    return this.getStringAttribute('time_last_backup');
  }
}

export class DataOciDatascienceModelBackupOperationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceModelBackupOperationDetailsOutputReference {
    return new DataOciDatascienceModelBackupOperationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceModelBackupSetting {
}

export function dataOciDatascienceModelBackupSettingToTerraform(struct?: DataOciDatascienceModelBackupSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceModelBackupSettingToHclTerraform(struct?: DataOciDatascienceModelBackupSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceModelBackupSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceModelBackupSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceModelBackupSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_region - computed: true, optional: false, required: false
  public get backupRegion() {
    return this.getStringAttribute('backup_region');
  }

  // customer_notification_type - computed: true, optional: false, required: false
  public get customerNotificationType() {
    return this.getStringAttribute('customer_notification_type');
  }

  // is_backup_enabled - computed: true, optional: false, required: false
  public get isBackupEnabled() {
    return this.getBooleanAttribute('is_backup_enabled');
  }
}

export class DataOciDatascienceModelBackupSettingList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceModelBackupSettingOutputReference {
    return new DataOciDatascienceModelBackupSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceModelCustomMetadataListStruct {
}

export function dataOciDatascienceModelCustomMetadataListStructToTerraform(struct?: DataOciDatascienceModelCustomMetadataListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceModelCustomMetadataListStructToHclTerraform(struct?: DataOciDatascienceModelCustomMetadataListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceModelCustomMetadataListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceModelCustomMetadataListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceModelCustomMetadataListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // has_artifact - computed: true, optional: false, required: false
  public get hasArtifact() {
    return this.getBooleanAttribute('has_artifact');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // keywords - computed: true, optional: false, required: false
  public get keywords() {
    return this.getListAttribute('keywords');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciDatascienceModelCustomMetadataListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceModelCustomMetadataListStructOutputReference {
    return new DataOciDatascienceModelCustomMetadataListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceModelDefinedMetadataListStruct {
}

export function dataOciDatascienceModelDefinedMetadataListStructToTerraform(struct?: DataOciDatascienceModelDefinedMetadataListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceModelDefinedMetadataListStructToHclTerraform(struct?: DataOciDatascienceModelDefinedMetadataListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceModelDefinedMetadataListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceModelDefinedMetadataListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceModelDefinedMetadataListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // has_artifact - computed: true, optional: false, required: false
  public get hasArtifact() {
    return this.getBooleanAttribute('has_artifact');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // keywords - computed: true, optional: false, required: false
  public get keywords() {
    return this.getListAttribute('keywords');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciDatascienceModelDefinedMetadataListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceModelDefinedMetadataListStructOutputReference {
    return new DataOciDatascienceModelDefinedMetadataListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceModelRetentionOperationDetails {
}

export function dataOciDatascienceModelRetentionOperationDetailsToTerraform(struct?: DataOciDatascienceModelRetentionOperationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceModelRetentionOperationDetailsToHclTerraform(struct?: DataOciDatascienceModelRetentionOperationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceModelRetentionOperationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceModelRetentionOperationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceModelRetentionOperationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_state - computed: true, optional: false, required: false
  public get archiveState() {
    return this.getStringAttribute('archive_state');
  }

  // archive_state_details - computed: true, optional: false, required: false
  public get archiveStateDetails() {
    return this.getStringAttribute('archive_state_details');
  }

  // delete_state - computed: true, optional: false, required: false
  public get deleteState() {
    return this.getStringAttribute('delete_state');
  }

  // delete_state_details - computed: true, optional: false, required: false
  public get deleteStateDetails() {
    return this.getStringAttribute('delete_state_details');
  }

  // time_archival_scheduled - computed: true, optional: false, required: false
  public get timeArchivalScheduled() {
    return this.getStringAttribute('time_archival_scheduled');
  }

  // time_deletion_scheduled - computed: true, optional: false, required: false
  public get timeDeletionScheduled() {
    return this.getStringAttribute('time_deletion_scheduled');
  }
}

export class DataOciDatascienceModelRetentionOperationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceModelRetentionOperationDetailsOutputReference {
    return new DataOciDatascienceModelRetentionOperationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceModelRetentionSetting {
}

export function dataOciDatascienceModelRetentionSettingToTerraform(struct?: DataOciDatascienceModelRetentionSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceModelRetentionSettingToHclTerraform(struct?: DataOciDatascienceModelRetentionSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceModelRetentionSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceModelRetentionSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceModelRetentionSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_after_days - computed: true, optional: false, required: false
  public get archiveAfterDays() {
    return this.getNumberAttribute('archive_after_days');
  }

  // customer_notification_type - computed: true, optional: false, required: false
  public get customerNotificationType() {
    return this.getStringAttribute('customer_notification_type');
  }

  // delete_after_days - computed: true, optional: false, required: false
  public get deleteAfterDays() {
    return this.getNumberAttribute('delete_after_days');
  }
}

export class DataOciDatascienceModelRetentionSettingList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceModelRetentionSettingOutputReference {
    return new DataOciDatascienceModelRetentionSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_model oci_datascience_model}
*/
export class DataOciDatascienceModel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatascienceModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatascienceModel to import
  * @param importFromId The id of the existing DataOciDatascienceModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatascienceModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_model oci_datascience_model} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatascienceModelConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatascienceModelConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_model',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._modelId = config.modelId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_content_disposition - computed: true, optional: false, required: false
  public get artifactContentDisposition() {
    return this.getStringAttribute('artifact_content_disposition');
  }

  // artifact_content_length - computed: true, optional: false, required: false
  public get artifactContentLength() {
    return this.getStringAttribute('artifact_content_length');
  }

  // artifact_content_md5 - computed: true, optional: false, required: false
  public get artifactContentMd5() {
    return this.getStringAttribute('artifact_content_md5');
  }

  // artifact_last_modified - computed: true, optional: false, required: false
  public get artifactLastModified() {
    return this.getStringAttribute('artifact_last_modified');
  }

  // backup_operation_details - computed: true, optional: false, required: false
  private _backupOperationDetails = new DataOciDatascienceModelBackupOperationDetailsList(this, "backup_operation_details", false);
  public get backupOperationDetails() {
    return this._backupOperationDetails;
  }

  // backup_setting - computed: true, optional: false, required: false
  private _backupSetting = new DataOciDatascienceModelBackupSettingList(this, "backup_setting", false);
  public get backupSetting() {
    return this._backupSetting;
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // custom_metadata_list - computed: true, optional: false, required: false
  private _customMetadataList = new DataOciDatascienceModelCustomMetadataListStructList(this, "custom_metadata_list", false);
  public get customMetadataList() {
    return this._customMetadataList;
  }

  // defined_metadata_list - computed: true, optional: false, required: false
  private _definedMetadataList = new DataOciDatascienceModelDefinedMetadataListStructList(this, "defined_metadata_list", false);
  public get definedMetadataList() {
    return this._definedMetadataList;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // empty_model - computed: true, optional: false, required: false
  public get emptyModel() {
    return this.getBooleanAttribute('empty_model');
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

  // input_schema - computed: true, optional: false, required: false
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }

  // is_model_by_reference - computed: true, optional: false, required: false
  public get isModelByReference() {
    return this.getBooleanAttribute('is_model_by_reference');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // model_artifact - computed: true, optional: false, required: false
  public get modelArtifact() {
    return this.getStringAttribute('model_artifact');
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // model_version_set_id - computed: true, optional: false, required: false
  public get modelVersionSetId() {
    return this.getStringAttribute('model_version_set_id');
  }

  // model_version_set_name - computed: true, optional: false, required: false
  public get modelVersionSetName() {
    return this.getStringAttribute('model_version_set_name');
  }

  // output_schema - computed: true, optional: false, required: false
  public get outputSchema() {
    return this.getStringAttribute('output_schema');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // retention_operation_details - computed: true, optional: false, required: false
  private _retentionOperationDetails = new DataOciDatascienceModelRetentionOperationDetailsList(this, "retention_operation_details", false);
  public get retentionOperationDetails() {
    return this._retentionOperationDetails;
  }

  // retention_setting - computed: true, optional: false, required: false
  private _retentionSetting = new DataOciDatascienceModelRetentionSettingList(this, "retention_setting", false);
  public get retentionSetting() {
    return this._retentionSetting;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // version_label - computed: true, optional: false, required: false
  public get versionLabel() {
    return this.getStringAttribute('version_label');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      model_id: cdktf.stringToTerraform(this._modelId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      model_id: {
        value: cdktf.stringToHclTerraform(this._modelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
