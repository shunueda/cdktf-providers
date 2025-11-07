// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_import_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataintegrationWorkspaceImportRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_import_request#import_request_key DataOciDataintegrationWorkspaceImportRequest#import_request_key}
  */
  readonly importRequestKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_import_request#workspace_id DataOciDataintegrationWorkspaceImportRequest#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DataOciDataintegrationWorkspaceImportRequestImportConflictResolution {
}

export function dataOciDataintegrationWorkspaceImportRequestImportConflictResolutionToTerraform(struct?: DataOciDataintegrationWorkspaceImportRequestImportConflictResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceImportRequestImportConflictResolutionToHclTerraform(struct?: DataOciDataintegrationWorkspaceImportRequestImportConflictResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceImportRequestImportConflictResolution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceImportRequestImportConflictResolution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duplicate_prefix - computed: true, optional: false, required: false
  public get duplicatePrefix() {
    return this.getStringAttribute('duplicate_prefix');
  }

  // duplicate_suffix - computed: true, optional: false, required: false
  public get duplicateSuffix() {
    return this.getStringAttribute('duplicate_suffix');
  }

  // import_conflict_resolution_type - computed: true, optional: false, required: false
  public get importConflictResolutionType() {
    return this.getStringAttribute('import_conflict_resolution_type');
  }
}

export class DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference {
    return new DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceImportRequestImportedObjects {
}

export function dataOciDataintegrationWorkspaceImportRequestImportedObjectsToTerraform(struct?: DataOciDataintegrationWorkspaceImportRequestImportedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceImportRequestImportedObjectsToHclTerraform(struct?: DataOciDataintegrationWorkspaceImportRequestImportedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceImportRequestImportedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceImportRequestImportedObjects | undefined) {
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

export class DataOciDataintegrationWorkspaceImportRequestImportedObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference {
    return new DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_import_request oci_dataintegration_workspace_import_request}
*/
export class DataOciDataintegrationWorkspaceImportRequest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dataintegration_workspace_import_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataintegrationWorkspaceImportRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataintegrationWorkspaceImportRequest to import
  * @param importFromId The id of the existing DataOciDataintegrationWorkspaceImportRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_import_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataintegrationWorkspaceImportRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dataintegration_workspace_import_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_import_request oci_dataintegration_workspace_import_request} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataintegrationWorkspaceImportRequestConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataintegrationWorkspaceImportRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataintegration_workspace_import_request',
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
    this._importRequestKey = config.importRequestKey;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // are_data_asset_references_included - computed: true, optional: false, required: false
  public get areDataAssetReferencesIncluded() {
    return this.getBooleanAttribute('are_data_asset_references_included');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
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

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_conflict_resolution - computed: true, optional: false, required: false
  private _importConflictResolution = new DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList(this, "import_conflict_resolution", false);
  public get importConflictResolution() {
    return this._importConflictResolution;
  }

  // import_request_key - computed: false, optional: false, required: true
  private _importRequestKey?: string; 
  public get importRequestKey() {
    return this.getStringAttribute('import_request_key');
  }
  public set importRequestKey(value: string) {
    this._importRequestKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importRequestKeyInput() {
    return this._importRequestKey;
  }

  // imported_objects - computed: true, optional: false, required: false
  private _importedObjects = new DataOciDataintegrationWorkspaceImportRequestImportedObjectsList(this, "imported_objects", false);
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

  // object_key_for_import - computed: true, optional: false, required: false
  public get objectKeyForImport() {
    return this.getStringAttribute('object_key_for_import');
  }

  // object_storage_region - computed: true, optional: false, required: false
  public get objectStorageRegion() {
    return this.getStringAttribute('object_storage_region');
  }

  // object_storage_tenancy_id - computed: true, optional: false, required: false
  public get objectStorageTenancyId() {
    return this.getStringAttribute('object_storage_tenancy_id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      import_request_key: cdktf.stringToTerraform(this._importRequestKey),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      import_request_key: {
        value: cdktf.stringToHclTerraform(this._importRequestKey),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
