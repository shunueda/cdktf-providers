// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_export_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataintegrationWorkspaceExportRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_export_request#export_request_key DataOciDataintegrationWorkspaceExportRequest#export_request_key}
  */
  readonly exportRequestKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_export_request#workspace_id DataOciDataintegrationWorkspaceExportRequest#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DataOciDataintegrationWorkspaceExportRequestExportedItems {
}

export function dataOciDataintegrationWorkspaceExportRequestExportedItemsToTerraform(struct?: DataOciDataintegrationWorkspaceExportRequestExportedItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceExportRequestExportedItemsToHclTerraform(struct?: DataOciDataintegrationWorkspaceExportRequestExportedItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceExportRequestExportedItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceExportRequestExportedItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceExportRequestExportedItems | undefined) {
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_path - computed: true, optional: false, required: false
  public get namePath() {
    return this.getStringAttribute('name_path');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // object_version - computed: true, optional: false, required: false
  public get objectVersion() {
    return this.getStringAttribute('object_version');
  }

  // time_updated_in_millis - computed: true, optional: false, required: false
  public get timeUpdatedInMillis() {
    return this.getStringAttribute('time_updated_in_millis');
  }
}

export class DataOciDataintegrationWorkspaceExportRequestExportedItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceExportRequestExportedItemsOutputReference {
    return new DataOciDataintegrationWorkspaceExportRequestExportedItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_export_request oci_dataintegration_workspace_export_request}
*/
export class DataOciDataintegrationWorkspaceExportRequest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dataintegration_workspace_export_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataintegrationWorkspaceExportRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataintegrationWorkspaceExportRequest to import
  * @param importFromId The id of the existing DataOciDataintegrationWorkspaceExportRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_export_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataintegrationWorkspaceExportRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dataintegration_workspace_export_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_export_request oci_dataintegration_workspace_export_request} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataintegrationWorkspaceExportRequestConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataintegrationWorkspaceExportRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataintegration_workspace_export_request',
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
    this._exportRequestKey = config.exportRequestKey;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // are_references_included - computed: true, optional: false, required: false
  public get areReferencesIncluded() {
    return this.getBooleanAttribute('are_references_included');
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

  // export_request_key - computed: false, optional: false, required: true
  private _exportRequestKey?: string; 
  public get exportRequestKey() {
    return this.getStringAttribute('export_request_key');
  }
  public set exportRequestKey(value: string) {
    this._exportRequestKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRequestKeyInput() {
    return this._exportRequestKey;
  }

  // exported_items - computed: true, optional: false, required: false
  private _exportedItems = new DataOciDataintegrationWorkspaceExportRequestExportedItemsList(this, "exported_items", false);
  public get exportedItems() {
    return this._exportedItems;
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }

  // filters - computed: true, optional: false, required: false
  public get filters() {
    return this.getListAttribute('filters');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_object_overwrite_enabled - computed: true, optional: false, required: false
  public get isObjectOverwriteEnabled() {
    return this.getBooleanAttribute('is_object_overwrite_enabled');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_keys - computed: true, optional: false, required: false
  public get objectKeys() {
    return this.getListAttribute('object_keys');
  }

  // object_storage_region - computed: true, optional: false, required: false
  public get objectStorageRegion() {
    return this.getStringAttribute('object_storage_region');
  }

  // object_storage_tenancy_id - computed: true, optional: false, required: false
  public get objectStorageTenancyId() {
    return this.getStringAttribute('object_storage_tenancy_id');
  }

  // referenced_items - computed: true, optional: false, required: false
  public get referencedItems() {
    return this.getStringAttribute('referenced_items');
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

  // total_exported_object_count - computed: true, optional: false, required: false
  public get totalExportedObjectCount() {
    return this.getNumberAttribute('total_exported_object_count');
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
      export_request_key: cdktf.stringToTerraform(this._exportRequestKey),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      export_request_key: {
        value: cdktf.stringToHclTerraform(this._exportRequestKey),
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
