// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatascienceModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#artifact_content_disposition DatascienceModel#artifact_content_disposition}
  */
  readonly artifactContentDisposition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#artifact_content_length DatascienceModel#artifact_content_length}
  */
  readonly artifactContentLength: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#compartment_id DatascienceModel#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#defined_tags DatascienceModel#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#description DatascienceModel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#display_name DatascienceModel#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#freeform_tags DatascienceModel#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#id DatascienceModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#input_schema DatascienceModel#input_schema}
  */
  readonly inputSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#model_artifact DatascienceModel#model_artifact}
  */
  readonly modelArtifact: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#model_version_set_id DatascienceModel#model_version_set_id}
  */
  readonly modelVersionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#model_version_set_name DatascienceModel#model_version_set_name}
  */
  readonly modelVersionSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#output_schema DatascienceModel#output_schema}
  */
  readonly outputSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#project_id DatascienceModel#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#state DatascienceModel#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#version_label DatascienceModel#version_label}
  */
  readonly versionLabel?: string;
  /**
  * backup_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#backup_setting DatascienceModel#backup_setting}
  */
  readonly backupSetting?: DatascienceModelBackupSetting;
  /**
  * custom_metadata_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#custom_metadata_list DatascienceModel#custom_metadata_list}
  */
  readonly customMetadataList?: DatascienceModelCustomMetadataListStruct[] | cdktf.IResolvable;
  /**
  * defined_metadata_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#defined_metadata_list DatascienceModel#defined_metadata_list}
  */
  readonly definedMetadataList?: DatascienceModelDefinedMetadataListStruct[] | cdktf.IResolvable;
  /**
  * retention_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#retention_setting DatascienceModel#retention_setting}
  */
  readonly retentionSetting?: DatascienceModelRetentionSetting;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#timeouts DatascienceModel#timeouts}
  */
  readonly timeouts?: DatascienceModelTimeouts;
}
export interface DatascienceModelBackupOperationDetails {
}

export function datascienceModelBackupOperationDetailsToTerraform(struct?: DatascienceModelBackupOperationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datascienceModelBackupOperationDetailsToHclTerraform(struct?: DatascienceModelBackupOperationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatascienceModelBackupOperationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceModelBackupOperationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelBackupOperationDetails | undefined) {
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

export class DatascienceModelBackupOperationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatascienceModelBackupOperationDetailsOutputReference {
    return new DatascienceModelBackupOperationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceModelRetentionOperationDetails {
}

export function datascienceModelRetentionOperationDetailsToTerraform(struct?: DatascienceModelRetentionOperationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datascienceModelRetentionOperationDetailsToHclTerraform(struct?: DatascienceModelRetentionOperationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatascienceModelRetentionOperationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceModelRetentionOperationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelRetentionOperationDetails | undefined) {
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

export class DatascienceModelRetentionOperationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatascienceModelRetentionOperationDetailsOutputReference {
    return new DatascienceModelRetentionOperationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceModelBackupSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#backup_region DatascienceModel#backup_region}
  */
  readonly backupRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#customer_notification_type DatascienceModel#customer_notification_type}
  */
  readonly customerNotificationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#is_backup_enabled DatascienceModel#is_backup_enabled}
  */
  readonly isBackupEnabled: boolean | cdktf.IResolvable;
}

export function datascienceModelBackupSettingToTerraform(struct?: DatascienceModelBackupSettingOutputReference | DatascienceModelBackupSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_region: cdktf.stringToTerraform(struct!.backupRegion),
    customer_notification_type: cdktf.stringToTerraform(struct!.customerNotificationType),
    is_backup_enabled: cdktf.booleanToTerraform(struct!.isBackupEnabled),
  }
}


export function datascienceModelBackupSettingToHclTerraform(struct?: DatascienceModelBackupSettingOutputReference | DatascienceModelBackupSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_region: {
      value: cdktf.stringToHclTerraform(struct!.backupRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_notification_type: {
      value: cdktf.stringToHclTerraform(struct!.customerNotificationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_backup_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isBackupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelBackupSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelBackupSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRegion = this._backupRegion;
    }
    if (this._customerNotificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerNotificationType = this._customerNotificationType;
    }
    if (this._isBackupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBackupEnabled = this._isBackupEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelBackupSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupRegion = undefined;
      this._customerNotificationType = undefined;
      this._isBackupEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupRegion = value.backupRegion;
      this._customerNotificationType = value.customerNotificationType;
      this._isBackupEnabled = value.isBackupEnabled;
    }
  }

  // backup_region - computed: false, optional: false, required: true
  private _backupRegion?: string; 
  public get backupRegion() {
    return this.getStringAttribute('backup_region');
  }
  public set backupRegion(value: string) {
    this._backupRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRegionInput() {
    return this._backupRegion;
  }

  // customer_notification_type - computed: true, optional: true, required: false
  private _customerNotificationType?: string; 
  public get customerNotificationType() {
    return this.getStringAttribute('customer_notification_type');
  }
  public set customerNotificationType(value: string) {
    this._customerNotificationType = value;
  }
  public resetCustomerNotificationType() {
    this._customerNotificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerNotificationTypeInput() {
    return this._customerNotificationType;
  }

  // is_backup_enabled - computed: false, optional: false, required: true
  private _isBackupEnabled?: boolean | cdktf.IResolvable; 
  public get isBackupEnabled() {
    return this.getBooleanAttribute('is_backup_enabled');
  }
  public set isBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._isBackupEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isBackupEnabledInput() {
    return this._isBackupEnabled;
  }
}
export interface DatascienceModelCustomMetadataListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#category DatascienceModel#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#description DatascienceModel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#has_artifact DatascienceModel#has_artifact}
  */
  readonly hasArtifact?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#key DatascienceModel#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#keywords DatascienceModel#keywords}
  */
  readonly keywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#value DatascienceModel#value}
  */
  readonly value?: string;
}

export function datascienceModelCustomMetadataListStructToTerraform(struct?: DatascienceModelCustomMetadataListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    description: cdktf.stringToTerraform(struct!.description),
    has_artifact: cdktf.booleanToTerraform(struct!.hasArtifact),
    key: cdktf.stringToTerraform(struct!.key),
    keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keywords),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function datascienceModelCustomMetadataListStructToHclTerraform(struct?: DatascienceModelCustomMetadataListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
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
    has_artifact: {
      value: cdktf.booleanToHclTerraform(struct!.hasArtifact),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywords: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keywords),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelCustomMetadataListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceModelCustomMetadataListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hasArtifact !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasArtifact = this._hasArtifact;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywords = this._keywords;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelCustomMetadataListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._description = undefined;
      this._hasArtifact = undefined;
      this._key = undefined;
      this._keywords = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._description = value.description;
      this._hasArtifact = value.hasArtifact;
      this._key = value.key;
      this._keywords = value.keywords;
      this._value = value.value;
    }
  }

  // category - computed: true, optional: true, required: false
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

  // description - computed: true, optional: true, required: false
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

  // has_artifact - computed: true, optional: true, required: false
  private _hasArtifact?: boolean | cdktf.IResolvable; 
  public get hasArtifact() {
    return this.getBooleanAttribute('has_artifact');
  }
  public set hasArtifact(value: boolean | cdktf.IResolvable) {
    this._hasArtifact = value;
  }
  public resetHasArtifact() {
    this._hasArtifact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasArtifactInput() {
    return this._hasArtifact;
  }

  // key - computed: true, optional: true, required: false
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

  // keywords - computed: true, optional: true, required: false
  private _keywords?: string[]; 
  public get keywords() {
    return this.getListAttribute('keywords');
  }
  public set keywords(value: string[]) {
    this._keywords = value;
  }
  public resetKeywords() {
    this._keywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordsInput() {
    return this._keywords;
  }

  // value - computed: true, optional: true, required: false
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
}

export class DatascienceModelCustomMetadataListStructList extends cdktf.ComplexList {
  public internalValue? : DatascienceModelCustomMetadataListStruct[] | cdktf.IResolvable

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
  public get(index: number): DatascienceModelCustomMetadataListStructOutputReference {
    return new DatascienceModelCustomMetadataListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceModelDefinedMetadataListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#category DatascienceModel#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#description DatascienceModel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#has_artifact DatascienceModel#has_artifact}
  */
  readonly hasArtifact?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#key DatascienceModel#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#keywords DatascienceModel#keywords}
  */
  readonly keywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#value DatascienceModel#value}
  */
  readonly value?: string;
}

export function datascienceModelDefinedMetadataListStructToTerraform(struct?: DatascienceModelDefinedMetadataListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    description: cdktf.stringToTerraform(struct!.description),
    has_artifact: cdktf.booleanToTerraform(struct!.hasArtifact),
    key: cdktf.stringToTerraform(struct!.key),
    keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keywords),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function datascienceModelDefinedMetadataListStructToHclTerraform(struct?: DatascienceModelDefinedMetadataListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
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
    has_artifact: {
      value: cdktf.booleanToHclTerraform(struct!.hasArtifact),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywords: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keywords),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDefinedMetadataListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceModelDefinedMetadataListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hasArtifact !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasArtifact = this._hasArtifact;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywords = this._keywords;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDefinedMetadataListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._description = undefined;
      this._hasArtifact = undefined;
      this._key = undefined;
      this._keywords = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._description = value.description;
      this._hasArtifact = value.hasArtifact;
      this._key = value.key;
      this._keywords = value.keywords;
      this._value = value.value;
    }
  }

  // category - computed: true, optional: true, required: false
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

  // description - computed: true, optional: true, required: false
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

  // has_artifact - computed: true, optional: true, required: false
  private _hasArtifact?: boolean | cdktf.IResolvable; 
  public get hasArtifact() {
    return this.getBooleanAttribute('has_artifact');
  }
  public set hasArtifact(value: boolean | cdktf.IResolvable) {
    this._hasArtifact = value;
  }
  public resetHasArtifact() {
    this._hasArtifact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasArtifactInput() {
    return this._hasArtifact;
  }

  // key - computed: true, optional: true, required: false
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

  // keywords - computed: true, optional: true, required: false
  private _keywords?: string[]; 
  public get keywords() {
    return this.getListAttribute('keywords');
  }
  public set keywords(value: string[]) {
    this._keywords = value;
  }
  public resetKeywords() {
    this._keywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordsInput() {
    return this._keywords;
  }

  // value - computed: true, optional: true, required: false
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
}

export class DatascienceModelDefinedMetadataListStructList extends cdktf.ComplexList {
  public internalValue? : DatascienceModelDefinedMetadataListStruct[] | cdktf.IResolvable

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
  public get(index: number): DatascienceModelDefinedMetadataListStructOutputReference {
    return new DatascienceModelDefinedMetadataListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceModelRetentionSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#archive_after_days DatascienceModel#archive_after_days}
  */
  readonly archiveAfterDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#customer_notification_type DatascienceModel#customer_notification_type}
  */
  readonly customerNotificationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#delete_after_days DatascienceModel#delete_after_days}
  */
  readonly deleteAfterDays?: number;
}

export function datascienceModelRetentionSettingToTerraform(struct?: DatascienceModelRetentionSettingOutputReference | DatascienceModelRetentionSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_after_days: cdktf.numberToTerraform(struct!.archiveAfterDays),
    customer_notification_type: cdktf.stringToTerraform(struct!.customerNotificationType),
    delete_after_days: cdktf.numberToTerraform(struct!.deleteAfterDays),
  }
}


export function datascienceModelRetentionSettingToHclTerraform(struct?: DatascienceModelRetentionSettingOutputReference | DatascienceModelRetentionSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_after_days: {
      value: cdktf.numberToHclTerraform(struct!.archiveAfterDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    customer_notification_type: {
      value: cdktf.stringToHclTerraform(struct!.customerNotificationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_after_days: {
      value: cdktf.numberToHclTerraform(struct!.deleteAfterDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelRetentionSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelRetentionSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveAfterDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveAfterDays = this._archiveAfterDays;
    }
    if (this._customerNotificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerNotificationType = this._customerNotificationType;
    }
    if (this._deleteAfterDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAfterDays = this._deleteAfterDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelRetentionSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveAfterDays = undefined;
      this._customerNotificationType = undefined;
      this._deleteAfterDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveAfterDays = value.archiveAfterDays;
      this._customerNotificationType = value.customerNotificationType;
      this._deleteAfterDays = value.deleteAfterDays;
    }
  }

  // archive_after_days - computed: false, optional: false, required: true
  private _archiveAfterDays?: number; 
  public get archiveAfterDays() {
    return this.getNumberAttribute('archive_after_days');
  }
  public set archiveAfterDays(value: number) {
    this._archiveAfterDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveAfterDaysInput() {
    return this._archiveAfterDays;
  }

  // customer_notification_type - computed: true, optional: true, required: false
  private _customerNotificationType?: string; 
  public get customerNotificationType() {
    return this.getStringAttribute('customer_notification_type');
  }
  public set customerNotificationType(value: string) {
    this._customerNotificationType = value;
  }
  public resetCustomerNotificationType() {
    this._customerNotificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerNotificationTypeInput() {
    return this._customerNotificationType;
  }

  // delete_after_days - computed: true, optional: true, required: false
  private _deleteAfterDays?: number; 
  public get deleteAfterDays() {
    return this.getNumberAttribute('delete_after_days');
  }
  public set deleteAfterDays(value: number) {
    this._deleteAfterDays = value;
  }
  public resetDeleteAfterDays() {
    this._deleteAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterDaysInput() {
    return this._deleteAfterDays;
  }
}
export interface DatascienceModelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#create DatascienceModel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#delete DatascienceModel#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#update DatascienceModel#update}
  */
  readonly update?: string;
}

export function datascienceModelTimeoutsToTerraform(struct?: DatascienceModelTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function datascienceModelTimeoutsToHclTerraform(struct?: DatascienceModelTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatascienceModelTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model oci_datascience_model}
*/
export class DatascienceModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatascienceModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatascienceModel to import
  * @param importFromId The id of the existing DatascienceModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatascienceModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/datascience_model oci_datascience_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatascienceModelConfig
  */
  public constructor(scope: Construct, id: string, config: DatascienceModelConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_model',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._artifactContentDisposition = config.artifactContentDisposition;
    this._artifactContentLength = config.artifactContentLength;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._inputSchema = config.inputSchema;
    this._modelArtifact = config.modelArtifact;
    this._modelVersionSetId = config.modelVersionSetId;
    this._modelVersionSetName = config.modelVersionSetName;
    this._outputSchema = config.outputSchema;
    this._projectId = config.projectId;
    this._state = config.state;
    this._versionLabel = config.versionLabel;
    this._backupSetting.internalValue = config.backupSetting;
    this._customMetadataList.internalValue = config.customMetadataList;
    this._definedMetadataList.internalValue = config.definedMetadataList;
    this._retentionSetting.internalValue = config.retentionSetting;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_content_disposition - computed: true, optional: true, required: false
  private _artifactContentDisposition?: string; 
  public get artifactContentDisposition() {
    return this.getStringAttribute('artifact_content_disposition');
  }
  public set artifactContentDisposition(value: string) {
    this._artifactContentDisposition = value;
  }
  public resetArtifactContentDisposition() {
    this._artifactContentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactContentDispositionInput() {
    return this._artifactContentDisposition;
  }

  // artifact_content_length - computed: false, optional: false, required: true
  private _artifactContentLength?: string; 
  public get artifactContentLength() {
    return this.getStringAttribute('artifact_content_length');
  }
  public set artifactContentLength(value: string) {
    this._artifactContentLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactContentLengthInput() {
    return this._artifactContentLength;
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
  private _backupOperationDetails = new DatascienceModelBackupOperationDetailsList(this, "backup_operation_details", false);
  public get backupOperationDetails() {
    return this._backupOperationDetails;
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // empty_model - computed: true, optional: false, required: false
  public get emptyModel() {
    return this.getBooleanAttribute('empty_model');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // input_schema - computed: true, optional: true, required: false
  private _inputSchema?: string; 
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }
  public set inputSchema(value: string) {
    this._inputSchema = value;
  }
  public resetInputSchema() {
    this._inputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema;
  }

  // is_model_by_reference - computed: true, optional: false, required: false
  public get isModelByReference() {
    return this.getBooleanAttribute('is_model_by_reference');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // model_artifact - computed: false, optional: false, required: true
  private _modelArtifact?: string; 
  public get modelArtifact() {
    return this.getStringAttribute('model_artifact');
  }
  public set modelArtifact(value: string) {
    this._modelArtifact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelArtifactInput() {
    return this._modelArtifact;
  }

  // model_version_set_id - computed: true, optional: true, required: false
  private _modelVersionSetId?: string; 
  public get modelVersionSetId() {
    return this.getStringAttribute('model_version_set_id');
  }
  public set modelVersionSetId(value: string) {
    this._modelVersionSetId = value;
  }
  public resetModelVersionSetId() {
    this._modelVersionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelVersionSetIdInput() {
    return this._modelVersionSetId;
  }

  // model_version_set_name - computed: true, optional: true, required: false
  private _modelVersionSetName?: string; 
  public get modelVersionSetName() {
    return this.getStringAttribute('model_version_set_name');
  }
  public set modelVersionSetName(value: string) {
    this._modelVersionSetName = value;
  }
  public resetModelVersionSetName() {
    this._modelVersionSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelVersionSetNameInput() {
    return this._modelVersionSetName;
  }

  // output_schema - computed: true, optional: true, required: false
  private _outputSchema?: string; 
  public get outputSchema() {
    return this.getStringAttribute('output_schema');
  }
  public set outputSchema(value: string) {
    this._outputSchema = value;
  }
  public resetOutputSchema() {
    this._outputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaInput() {
    return this._outputSchema;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // retention_operation_details - computed: true, optional: false, required: false
  private _retentionOperationDetails = new DatascienceModelRetentionOperationDetailsList(this, "retention_operation_details", false);
  public get retentionOperationDetails() {
    return this._retentionOperationDetails;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // version_label - computed: true, optional: true, required: false
  private _versionLabel?: string; 
  public get versionLabel() {
    return this.getStringAttribute('version_label');
  }
  public set versionLabel(value: string) {
    this._versionLabel = value;
  }
  public resetVersionLabel() {
    this._versionLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionLabelInput() {
    return this._versionLabel;
  }

  // backup_setting - computed: false, optional: true, required: false
  private _backupSetting = new DatascienceModelBackupSettingOutputReference(this, "backup_setting");
  public get backupSetting() {
    return this._backupSetting;
  }
  public putBackupSetting(value: DatascienceModelBackupSetting) {
    this._backupSetting.internalValue = value;
  }
  public resetBackupSetting() {
    this._backupSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSettingInput() {
    return this._backupSetting.internalValue;
  }

  // custom_metadata_list - computed: false, optional: true, required: false
  private _customMetadataList = new DatascienceModelCustomMetadataListStructList(this, "custom_metadata_list", false);
  public get customMetadataList() {
    return this._customMetadataList;
  }
  public putCustomMetadataList(value: DatascienceModelCustomMetadataListStruct[] | cdktf.IResolvable) {
    this._customMetadataList.internalValue = value;
  }
  public resetCustomMetadataList() {
    this._customMetadataList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetadataListInput() {
    return this._customMetadataList.internalValue;
  }

  // defined_metadata_list - computed: false, optional: true, required: false
  private _definedMetadataList = new DatascienceModelDefinedMetadataListStructList(this, "defined_metadata_list", false);
  public get definedMetadataList() {
    return this._definedMetadataList;
  }
  public putDefinedMetadataList(value: DatascienceModelDefinedMetadataListStruct[] | cdktf.IResolvable) {
    this._definedMetadataList.internalValue = value;
  }
  public resetDefinedMetadataList() {
    this._definedMetadataList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedMetadataListInput() {
    return this._definedMetadataList.internalValue;
  }

  // retention_setting - computed: false, optional: true, required: false
  private _retentionSetting = new DatascienceModelRetentionSettingOutputReference(this, "retention_setting");
  public get retentionSetting() {
    return this._retentionSetting;
  }
  public putRetentionSetting(value: DatascienceModelRetentionSetting) {
    this._retentionSetting.internalValue = value;
  }
  public resetRetentionSetting() {
    this._retentionSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionSettingInput() {
    return this._retentionSetting.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatascienceModelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatascienceModelTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_content_disposition: cdktf.stringToTerraform(this._artifactContentDisposition),
      artifact_content_length: cdktf.stringToTerraform(this._artifactContentLength),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      input_schema: cdktf.stringToTerraform(this._inputSchema),
      model_artifact: cdktf.stringToTerraform(this._modelArtifact),
      model_version_set_id: cdktf.stringToTerraform(this._modelVersionSetId),
      model_version_set_name: cdktf.stringToTerraform(this._modelVersionSetName),
      output_schema: cdktf.stringToTerraform(this._outputSchema),
      project_id: cdktf.stringToTerraform(this._projectId),
      state: cdktf.stringToTerraform(this._state),
      version_label: cdktf.stringToTerraform(this._versionLabel),
      backup_setting: datascienceModelBackupSettingToTerraform(this._backupSetting.internalValue),
      custom_metadata_list: cdktf.listMapper(datascienceModelCustomMetadataListStructToTerraform, true)(this._customMetadataList.internalValue),
      defined_metadata_list: cdktf.listMapper(datascienceModelDefinedMetadataListStructToTerraform, true)(this._definedMetadataList.internalValue),
      retention_setting: datascienceModelRetentionSettingToTerraform(this._retentionSetting.internalValue),
      timeouts: datascienceModelTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_content_disposition: {
        value: cdktf.stringToHclTerraform(this._artifactContentDisposition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifact_content_length: {
        value: cdktf.stringToHclTerraform(this._artifactContentLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_schema: {
        value: cdktf.stringToHclTerraform(this._inputSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_artifact: {
        value: cdktf.stringToHclTerraform(this._modelArtifact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_version_set_id: {
        value: cdktf.stringToHclTerraform(this._modelVersionSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_version_set_name: {
        value: cdktf.stringToHclTerraform(this._modelVersionSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_schema: {
        value: cdktf.stringToHclTerraform(this._outputSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_label: {
        value: cdktf.stringToHclTerraform(this._versionLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_setting: {
        value: datascienceModelBackupSettingToHclTerraform(this._backupSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceModelBackupSettingList",
      },
      custom_metadata_list: {
        value: cdktf.listMapperHcl(datascienceModelCustomMetadataListStructToHclTerraform, true)(this._customMetadataList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceModelCustomMetadataListStructList",
      },
      defined_metadata_list: {
        value: cdktf.listMapperHcl(datascienceModelDefinedMetadataListStructToHclTerraform, true)(this._definedMetadataList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceModelDefinedMetadataListStructList",
      },
      retention_setting: {
        value: datascienceModelRetentionSettingToHclTerraform(this._retentionSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceModelRetentionSettingList",
      },
      timeouts: {
        value: datascienceModelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatascienceModelTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
