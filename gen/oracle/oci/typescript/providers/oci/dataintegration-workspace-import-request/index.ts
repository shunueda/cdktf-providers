// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataintegrationWorkspaceImportRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request#are_data_asset_references_included DataintegrationWorkspaceImportRequest#are_data_asset_references_included}
  */
  readonly areDataAssetReferencesIncluded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request#bucket DataintegrationWorkspaceImportRequest#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request#file_name DataintegrationWorkspaceImportRequest#file_name}
  */
  readonly fileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request#id DataintegrationWorkspaceImportRequest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request#object_key_for_import DataintegrationWorkspaceImportRequest#object_key_for_import}
  */
  readonly objectKeyForImport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request#object_storage_region DataintegrationWorkspaceImportRequest#object_storage_region}
  */
  readonly objectStorageRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request#object_storage_tenancy_id DataintegrationWorkspaceImportRequest#object_storage_tenancy_id}
  */
  readonly objectStorageTenancyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request#workspace_id DataintegrationWorkspaceImportRequest#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * import_conflict_resolution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request#import_conflict_resolution DataintegrationWorkspaceImportRequest#import_conflict_resolution}
  */
  readonly importConflictResolution?: DataintegrationWorkspaceImportRequestImportConflictResolution;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request#timeouts DataintegrationWorkspaceImportRequest#timeouts}
  */
  readonly timeouts?: DataintegrationWorkspaceImportRequestTimeouts;
}
export interface DataintegrationWorkspaceImportRequestImportedObjects {
}

export function dataintegrationWorkspaceImportRequestImportedObjectsToTerraform(struct?: DataintegrationWorkspaceImportRequestImportedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceImportRequestImportedObjectsToHclTerraform(struct?: DataintegrationWorkspaceImportRequestImportedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceImportRequestImportedObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceImportRequestImportedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceImportRequestImportedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregator_key - computed: true, optional: false, required: false
  public get aggregatorKey() {
    return this.getStringAttribute('aggregator_key');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_path - computed: true, optional: false, required: false
  public get namePath() {
    return this.getStringAttribute('name_path');
  }

  // new_key - computed: true, optional: false, required: false
  public get newKey() {
    return this.getStringAttribute('new_key');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // object_version - computed: true, optional: false, required: false
  public get objectVersion() {
    return this.getStringAttribute('object_version');
  }

  // old_key - computed: true, optional: false, required: false
  public get oldKey() {
    return this.getStringAttribute('old_key');
  }

  // resolution_action - computed: true, optional: false, required: false
  public get resolutionAction() {
    return this.getStringAttribute('resolution_action');
  }

  // time_updated_in_millis - computed: true, optional: false, required: false
  public get timeUpdatedInMillis() {
    return this.getStringAttribute('time_updated_in_millis');
  }
}

export class DataintegrationWorkspaceImportRequestImportedObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceImportRequestImportedObjectsOutputReference {
    return new DataintegrationWorkspaceImportRequestImportedObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceImportRequestImportConflictResolution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request#duplicate_prefix DataintegrationWorkspaceImportRequest#duplicate_prefix}
  */
  readonly duplicatePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request#duplicate_suffix DataintegrationWorkspaceImportRequest#duplicate_suffix}
  */
  readonly duplicateSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request#import_conflict_resolution_type DataintegrationWorkspaceImportRequest#import_conflict_resolution_type}
  */
  readonly importConflictResolutionType: string;
}

export function dataintegrationWorkspaceImportRequestImportConflictResolutionToTerraform(struct?: DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference | DataintegrationWorkspaceImportRequestImportConflictResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duplicate_prefix: cdktf.stringToTerraform(struct!.duplicatePrefix),
    duplicate_suffix: cdktf.stringToTerraform(struct!.duplicateSuffix),
    import_conflict_resolution_type: cdktf.stringToTerraform(struct!.importConflictResolutionType),
  }
}


export function dataintegrationWorkspaceImportRequestImportConflictResolutionToHclTerraform(struct?: DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference | DataintegrationWorkspaceImportRequestImportConflictResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duplicate_prefix: {
      value: cdktf.stringToHclTerraform(struct!.duplicatePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duplicate_suffix: {
      value: cdktf.stringToHclTerraform(struct!.duplicateSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_conflict_resolution_type: {
      value: cdktf.stringToHclTerraform(struct!.importConflictResolutionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceImportRequestImportConflictResolution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duplicatePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplicatePrefix = this._duplicatePrefix;
    }
    if (this._duplicateSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplicateSuffix = this._duplicateSuffix;
    }
    if (this._importConflictResolutionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.importConflictResolutionType = this._importConflictResolutionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceImportRequestImportConflictResolution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duplicatePrefix = undefined;
      this._duplicateSuffix = undefined;
      this._importConflictResolutionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duplicatePrefix = value.duplicatePrefix;
      this._duplicateSuffix = value.duplicateSuffix;
      this._importConflictResolutionType = value.importConflictResolutionType;
    }
  }

  // duplicate_prefix - computed: true, optional: true, required: false
  private _duplicatePrefix?: string; 
  public get duplicatePrefix() {
    return this.getStringAttribute('duplicate_prefix');
  }
  public set duplicatePrefix(value: string) {
    this._duplicatePrefix = value;
  }
  public resetDuplicatePrefix() {
    this._duplicatePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicatePrefixInput() {
    return this._duplicatePrefix;
  }

  // duplicate_suffix - computed: true, optional: true, required: false
  private _duplicateSuffix?: string; 
  public get duplicateSuffix() {
    return this.getStringAttribute('duplicate_suffix');
  }
  public set duplicateSuffix(value: string) {
    this._duplicateSuffix = value;
  }
  public resetDuplicateSuffix() {
    this._duplicateSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateSuffixInput() {
    return this._duplicateSuffix;
  }

  // import_conflict_resolution_type - computed: false, optional: false, required: true
  private _importConflictResolutionType?: string; 
  public get importConflictResolutionType() {
    return this.getStringAttribute('import_conflict_resolution_type');
  }
  public set importConflictResolutionType(value: string) {
    this._importConflictResolutionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importConflictResolutionTypeInput() {
    return this._importConflictResolutionType;
  }
}
export interface DataintegrationWorkspaceImportRequestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request#create DataintegrationWorkspaceImportRequest#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request#delete DataintegrationWorkspaceImportRequest#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request#update DataintegrationWorkspaceImportRequest#update}
  */
  readonly update?: string;
}

export function dataintegrationWorkspaceImportRequestTimeoutsToTerraform(struct?: DataintegrationWorkspaceImportRequestTimeouts | cdktf.IResolvable): any {
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


export function dataintegrationWorkspaceImportRequestTimeoutsToHclTerraform(struct?: DataintegrationWorkspaceImportRequestTimeouts | cdktf.IResolvable): any {
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

export class DataintegrationWorkspaceImportRequestTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataintegrationWorkspaceImportRequestTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataintegrationWorkspaceImportRequestTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request oci_dataintegration_workspace_import_request}
*/
export class DataintegrationWorkspaceImportRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dataintegration_workspace_import_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataintegrationWorkspaceImportRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataintegrationWorkspaceImportRequest to import
  * @param importFromId The id of the existing DataintegrationWorkspaceImportRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataintegrationWorkspaceImportRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dataintegration_workspace_import_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataintegration_workspace_import_request oci_dataintegration_workspace_import_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataintegrationWorkspaceImportRequestConfig
  */
  public constructor(scope: Construct, id: string, config: DataintegrationWorkspaceImportRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataintegration_workspace_import_request',
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
    this._areDataAssetReferencesIncluded = config.areDataAssetReferencesIncluded;
    this._bucket = config.bucket;
    this._fileName = config.fileName;
    this._id = config.id;
    this._objectKeyForImport = config.objectKeyForImport;
    this._objectStorageRegion = config.objectStorageRegion;
    this._objectStorageTenancyId = config.objectStorageTenancyId;
    this._workspaceId = config.workspaceId;
    this._importConflictResolution.internalValue = config.importConflictResolution;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // are_data_asset_references_included - computed: true, optional: true, required: false
  private _areDataAssetReferencesIncluded?: boolean | cdktf.IResolvable; 
  public get areDataAssetReferencesIncluded() {
    return this.getBooleanAttribute('are_data_asset_references_included');
  }
  public set areDataAssetReferencesIncluded(value: boolean | cdktf.IResolvable) {
    this._areDataAssetReferencesIncluded = value;
  }
  public resetAreDataAssetReferencesIncluded() {
    this._areDataAssetReferencesIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areDataAssetReferencesIncludedInput() {
    return this._areDataAssetReferencesIncluded;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // error_messages - computed: true, optional: false, required: false
  private _errorMessages = new cdktf.StringMap(this, "error_messages");
  public get errorMessages() {
    return this._errorMessages;
  }

  // file_name - computed: false, optional: false, required: true
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
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

  // imported_objects - computed: true, optional: false, required: false
  private _importedObjects = new DataintegrationWorkspaceImportRequestImportedObjectsList(this, "imported_objects", false);
  public get importedObjects() {
    return this._importedObjects;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_key_for_import - computed: true, optional: true, required: false
  private _objectKeyForImport?: string; 
  public get objectKeyForImport() {
    return this.getStringAttribute('object_key_for_import');
  }
  public set objectKeyForImport(value: string) {
    this._objectKeyForImport = value;
  }
  public resetObjectKeyForImport() {
    this._objectKeyForImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectKeyForImportInput() {
    return this._objectKeyForImport;
  }

  // object_storage_region - computed: true, optional: true, required: false
  private _objectStorageRegion?: string; 
  public get objectStorageRegion() {
    return this.getStringAttribute('object_storage_region');
  }
  public set objectStorageRegion(value: string) {
    this._objectStorageRegion = value;
  }
  public resetObjectStorageRegion() {
    this._objectStorageRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageRegionInput() {
    return this._objectStorageRegion;
  }

  // object_storage_tenancy_id - computed: true, optional: true, required: false
  private _objectStorageTenancyId?: string; 
  public get objectStorageTenancyId() {
    return this.getStringAttribute('object_storage_tenancy_id');
  }
  public set objectStorageTenancyId(value: string) {
    this._objectStorageTenancyId = value;
  }
  public resetObjectStorageTenancyId() {
    this._objectStorageTenancyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageTenancyIdInput() {
    return this._objectStorageTenancyId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_ended_in_millis - computed: true, optional: false, required: false
  public get timeEndedInMillis() {
    return this.getStringAttribute('time_ended_in_millis');
  }

  // time_started_in_millis - computed: true, optional: false, required: false
  public get timeStartedInMillis() {
    return this.getStringAttribute('time_started_in_millis');
  }

  // total_imported_object_count - computed: true, optional: false, required: false
  public get totalImportedObjectCount() {
    return this.getNumberAttribute('total_imported_object_count');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // import_conflict_resolution - computed: false, optional: true, required: false
  private _importConflictResolution = new DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference(this, "import_conflict_resolution");
  public get importConflictResolution() {
    return this._importConflictResolution;
  }
  public putImportConflictResolution(value: DataintegrationWorkspaceImportRequestImportConflictResolution) {
    this._importConflictResolution.internalValue = value;
  }
  public resetImportConflictResolution() {
    this._importConflictResolution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importConflictResolutionInput() {
    return this._importConflictResolution.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataintegrationWorkspaceImportRequestTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataintegrationWorkspaceImportRequestTimeouts) {
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
      are_data_asset_references_included: cdktf.booleanToTerraform(this._areDataAssetReferencesIncluded),
      bucket: cdktf.stringToTerraform(this._bucket),
      file_name: cdktf.stringToTerraform(this._fileName),
      id: cdktf.stringToTerraform(this._id),
      object_key_for_import: cdktf.stringToTerraform(this._objectKeyForImport),
      object_storage_region: cdktf.stringToTerraform(this._objectStorageRegion),
      object_storage_tenancy_id: cdktf.stringToTerraform(this._objectStorageTenancyId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      import_conflict_resolution: dataintegrationWorkspaceImportRequestImportConflictResolutionToTerraform(this._importConflictResolution.internalValue),
      timeouts: dataintegrationWorkspaceImportRequestTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      are_data_asset_references_included: {
        value: cdktf.booleanToHclTerraform(this._areDataAssetReferencesIncluded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_name: {
        value: cdktf.stringToHclTerraform(this._fileName),
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
      object_key_for_import: {
        value: cdktf.stringToHclTerraform(this._objectKeyForImport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_storage_region: {
        value: cdktf.stringToHclTerraform(this._objectStorageRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_storage_tenancy_id: {
        value: cdktf.stringToHclTerraform(this._objectStorageTenancyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_conflict_resolution: {
        value: dataintegrationWorkspaceImportRequestImportConflictResolutionToHclTerraform(this._importConflictResolution.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataintegrationWorkspaceImportRequestImportConflictResolutionList",
      },
      timeouts: {
        value: dataintegrationWorkspaceImportRequestTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataintegrationWorkspaceImportRequestTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
