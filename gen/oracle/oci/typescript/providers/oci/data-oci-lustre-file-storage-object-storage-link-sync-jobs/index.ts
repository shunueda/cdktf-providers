// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_jobs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLustreFileStorageObjectStorageLinkSyncJobsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_jobs#id DataOciLustreFileStorageObjectStorageLinkSyncJobs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_jobs#object_storage_link_id DataOciLustreFileStorageObjectStorageLinkSyncJobs#object_storage_link_id}
  */
  readonly objectStorageLinkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_jobs#state DataOciLustreFileStorageObjectStorageLinkSyncJobs#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_jobs#filter DataOciLustreFileStorageObjectStorageLinkSyncJobs#filter}
  */
  readonly filter?: DataOciLustreFileStorageObjectStorageLinkSyncJobsFilter[] | cdktf.IResolvable;
}
export interface DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionItems {
}

export function dataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionItemsToTerraform(struct?: DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionItemsToHclTerraform(struct?: DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bytes_transferred - computed: true, optional: false, required: false
  public get bytesTransferred() {
    return this.getStringAttribute('bytes_transferred');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
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

  // is_overwrite - computed: true, optional: false, required: false
  public get isOverwrite() {
    return this.getBooleanAttribute('is_overwrite');
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lustre_file_system_path - computed: true, optional: false, required: false
  public get lustreFileSystemPath() {
    return this.getStringAttribute('lustre_file_system_path');
  }

  // object_storage_path - computed: true, optional: false, required: false
  public get objectStoragePath() {
    return this.getStringAttribute('object_storage_path');
  }

  // objects_transferred - computed: true, optional: false, required: false
  public get objectsTransferred() {
    return this.getStringAttribute('objects_transferred');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // skipped_error_count - computed: true, optional: false, required: false
  public get skippedErrorCount() {
    return this.getStringAttribute('skipped_error_count');
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

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // total_objects_scanned - computed: true, optional: false, required: false
  public get totalObjectsScanned() {
    return this.getStringAttribute('total_objects_scanned');
  }
}

export class DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionItemsOutputReference {
    return new DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollection {
}

export function dataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionToTerraform(struct?: DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionToHclTerraform(struct?: DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionOutputReference {
    return new DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLustreFileStorageObjectStorageLinkSyncJobsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_jobs#name DataOciLustreFileStorageObjectStorageLinkSyncJobs#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_jobs#regex DataOciLustreFileStorageObjectStorageLinkSyncJobs#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_jobs#values DataOciLustreFileStorageObjectStorageLinkSyncJobs#values}
  */
  readonly values: string[];
}

export function dataOciLustreFileStorageObjectStorageLinkSyncJobsFilterToTerraform(struct?: DataOciLustreFileStorageObjectStorageLinkSyncJobsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciLustreFileStorageObjectStorageLinkSyncJobsFilterToHclTerraform(struct?: DataOciLustreFileStorageObjectStorageLinkSyncJobsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciLustreFileStorageObjectStorageLinkSyncJobsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLustreFileStorageObjectStorageLinkSyncJobsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLustreFileStorageObjectStorageLinkSyncJobsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciLustreFileStorageObjectStorageLinkSyncJobsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciLustreFileStorageObjectStorageLinkSyncJobsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciLustreFileStorageObjectStorageLinkSyncJobsFilterOutputReference {
    return new DataOciLustreFileStorageObjectStorageLinkSyncJobsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_jobs oci_lustre_file_storage_object_storage_link_sync_jobs}
*/
export class DataOciLustreFileStorageObjectStorageLinkSyncJobs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_lustre_file_storage_object_storage_link_sync_jobs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciLustreFileStorageObjectStorageLinkSyncJobs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciLustreFileStorageObjectStorageLinkSyncJobs to import
  * @param importFromId The id of the existing DataOciLustreFileStorageObjectStorageLinkSyncJobs that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_jobs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciLustreFileStorageObjectStorageLinkSyncJobs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_lustre_file_storage_object_storage_link_sync_jobs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_jobs oci_lustre_file_storage_object_storage_link_sync_jobs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLustreFileStorageObjectStorageLinkSyncJobsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLustreFileStorageObjectStorageLinkSyncJobsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_lustre_file_storage_object_storage_link_sync_jobs',
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
    this._id = config.id;
    this._objectStorageLinkId = config.objectStorageLinkId;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // object_storage_link_id - computed: false, optional: false, required: true
  private _objectStorageLinkId?: string; 
  public get objectStorageLinkId() {
    return this.getStringAttribute('object_storage_link_id');
  }
  public set objectStorageLinkId(value: string) {
    this._objectStorageLinkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageLinkIdInput() {
    return this._objectStorageLinkId;
  }

  // state - computed: false, optional: true, required: false
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

  // sync_job_collection - computed: true, optional: false, required: false
  private _syncJobCollection = new DataOciLustreFileStorageObjectStorageLinkSyncJobsSyncJobCollectionList(this, "sync_job_collection", false);
  public get syncJobCollection() {
    return this._syncJobCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciLustreFileStorageObjectStorageLinkSyncJobsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciLustreFileStorageObjectStorageLinkSyncJobsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      object_storage_link_id: cdktf.stringToTerraform(this._objectStorageLinkId),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciLustreFileStorageObjectStorageLinkSyncJobsFilterToTerraform, true)(this._filter.internalValue),
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
      object_storage_link_id: {
        value: cdktf.stringToHclTerraform(this._objectStorageLinkId),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciLustreFileStorageObjectStorageLinkSyncJobsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciLustreFileStorageObjectStorageLinkSyncJobsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
