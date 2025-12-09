// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/file_storages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformFileStoragesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Block ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/file_storages#block_id DataSamsungcloudplatformFileStorages#block_id}
  */
  readonly blockId?: string;
  /**
  * Created By
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/file_storages#created_by DataSamsungcloudplatformFileStorages#created_by}
  */
  readonly createdBy?: string;
  /**
  * File Storage ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/file_storages#file_storage_id DataSamsungcloudplatformFileStorages#file_storage_id}
  */
  readonly fileStorageId?: string;
  /**
  * File Storage Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/file_storages#file_storage_name DataSamsungcloudplatformFileStorages#file_storage_name}
  */
  readonly fileStorageName?: string;
  /**
  * File Storage Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/file_storages#file_storage_protocol DataSamsungcloudplatformFileStorages#file_storage_protocol}
  */
  readonly fileStorageProtocol?: string;
  /**
  * File Storage State
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/file_storages#file_storage_state DataSamsungcloudplatformFileStorages#file_storage_state}
  */
  readonly fileStorageState?: string;
  /**
  * File Storage States
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/file_storages#file_storage_states DataSamsungcloudplatformFileStorages#file_storage_states}
  */
  readonly fileStorageStates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/file_storages#id DataSamsungcloudplatformFileStorages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Page start number from which to get the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/file_storages#page DataSamsungcloudplatformFileStorages#page}
  */
  readonly page?: number;
  /**
  * Service Zone ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/file_storages#service_zone_id DataSamsungcloudplatformFileStorages#service_zone_id}
  */
  readonly serviceZoneId?: string;
  /**
  * Size to get list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/file_storages#size DataSamsungcloudplatformFileStorages#size}
  */
  readonly size?: number;
  /**
  * Sort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/file_storages#sort DataSamsungcloudplatformFileStorages#sort}
  */
  readonly sort?: string[];
}
export interface DataSamsungcloudplatformFileStoragesContents {
}

export function dataSamsungcloudplatformFileStoragesContentsToTerraform(struct?: DataSamsungcloudplatformFileStoragesContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformFileStoragesContentsToHclTerraform(struct?: DataSamsungcloudplatformFileStoragesContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformFileStoragesContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformFileStoragesContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformFileStoragesContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_id - computed: true, optional: false, required: false
  public get blockId() {
    return this.getStringAttribute('block_id');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // encryption_enabled - computed: true, optional: false, required: false
  public get encryptionEnabled() {
    return this.getBooleanAttribute('encryption_enabled');
  }

  // file_storage_category - computed: true, optional: false, required: false
  public get fileStorageCategory() {
    return this.getStringAttribute('file_storage_category');
  }

  // file_storage_id - computed: true, optional: false, required: false
  public get fileStorageId() {
    return this.getStringAttribute('file_storage_id');
  }

  // file_storage_name - computed: true, optional: false, required: false
  public get fileStorageName() {
    return this.getStringAttribute('file_storage_name');
  }

  // file_storage_protocol - computed: true, optional: false, required: false
  public get fileStorageProtocol() {
    return this.getStringAttribute('file_storage_protocol');
  }

  // file_storage_purpose - computed: true, optional: false, required: false
  public get fileStoragePurpose() {
    return this.getStringAttribute('file_storage_purpose');
  }

  // file_storage_state - computed: true, optional: false, required: false
  public get fileStorageState() {
    return this.getStringAttribute('file_storage_state');
  }

  // linked_object_count - computed: true, optional: false, required: false
  public get linkedObjectCount() {
    return this.getNumberAttribute('linked_object_count');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // product_group_id - computed: true, optional: false, required: false
  public get productGroupId() {
    return this.getStringAttribute('product_group_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // tiering_enabled - computed: true, optional: false, required: false
  public get tieringEnabled() {
    return this.getBooleanAttribute('tiering_enabled');
  }
}

export class DataSamsungcloudplatformFileStoragesContentsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformFileStoragesContentsOutputReference {
    return new DataSamsungcloudplatformFileStoragesContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/file_storages samsungcloudplatform_file_storages}
*/
export class DataSamsungcloudplatformFileStorages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_file_storages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformFileStorages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformFileStorages to import
  * @param importFromId The id of the existing DataSamsungcloudplatformFileStorages that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/file_storages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformFileStorages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_file_storages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/file_storages samsungcloudplatform_file_storages} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformFileStoragesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformFileStoragesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_file_storages',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockId = config.blockId;
    this._createdBy = config.createdBy;
    this._fileStorageId = config.fileStorageId;
    this._fileStorageName = config.fileStorageName;
    this._fileStorageProtocol = config.fileStorageProtocol;
    this._fileStorageState = config.fileStorageState;
    this._fileStorageStates = config.fileStorageStates;
    this._id = config.id;
    this._page = config.page;
    this._serviceZoneId = config.serviceZoneId;
    this._size = config.size;
    this._sort = config.sort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_id - computed: false, optional: true, required: false
  private _blockId?: string; 
  public get blockId() {
    return this.getStringAttribute('block_id');
  }
  public set blockId(value: string) {
    this._blockId = value;
  }
  public resetBlockId() {
    this._blockId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIdInput() {
    return this._blockId;
  }

  // contents - computed: true, optional: false, required: false
  private _contents = new DataSamsungcloudplatformFileStoragesContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // file_storage_id - computed: false, optional: true, required: false
  private _fileStorageId?: string; 
  public get fileStorageId() {
    return this.getStringAttribute('file_storage_id');
  }
  public set fileStorageId(value: string) {
    this._fileStorageId = value;
  }
  public resetFileStorageId() {
    this._fileStorageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileStorageIdInput() {
    return this._fileStorageId;
  }

  // file_storage_name - computed: false, optional: true, required: false
  private _fileStorageName?: string; 
  public get fileStorageName() {
    return this.getStringAttribute('file_storage_name');
  }
  public set fileStorageName(value: string) {
    this._fileStorageName = value;
  }
  public resetFileStorageName() {
    this._fileStorageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileStorageNameInput() {
    return this._fileStorageName;
  }

  // file_storage_protocol - computed: false, optional: true, required: false
  private _fileStorageProtocol?: string; 
  public get fileStorageProtocol() {
    return this.getStringAttribute('file_storage_protocol');
  }
  public set fileStorageProtocol(value: string) {
    this._fileStorageProtocol = value;
  }
  public resetFileStorageProtocol() {
    this._fileStorageProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileStorageProtocolInput() {
    return this._fileStorageProtocol;
  }

  // file_storage_state - computed: false, optional: true, required: false
  private _fileStorageState?: string; 
  public get fileStorageState() {
    return this.getStringAttribute('file_storage_state');
  }
  public set fileStorageState(value: string) {
    this._fileStorageState = value;
  }
  public resetFileStorageState() {
    this._fileStorageState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileStorageStateInput() {
    return this._fileStorageState;
  }

  // file_storage_states - computed: false, optional: true, required: false
  private _fileStorageStates?: string[]; 
  public get fileStorageStates() {
    return this.getListAttribute('file_storage_states');
  }
  public set fileStorageStates(value: string[]) {
    this._fileStorageStates = value;
  }
  public resetFileStorageStates() {
    this._fileStorageStates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileStorageStatesInput() {
    return this._fileStorageStates;
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

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // service_zone_id - computed: false, optional: true, required: false
  private _serviceZoneId?: string; 
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
  public set serviceZoneId(value: string) {
    this._serviceZoneId = value;
  }
  public resetServiceZoneId() {
    this._serviceZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceZoneIdInput() {
    return this._serviceZoneId;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string[]; 
  public get sort() {
    return this.getListAttribute('sort');
  }
  public set sort(value: string[]) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_id: cdktf.stringToTerraform(this._blockId),
      created_by: cdktf.stringToTerraform(this._createdBy),
      file_storage_id: cdktf.stringToTerraform(this._fileStorageId),
      file_storage_name: cdktf.stringToTerraform(this._fileStorageName),
      file_storage_protocol: cdktf.stringToTerraform(this._fileStorageProtocol),
      file_storage_state: cdktf.stringToTerraform(this._fileStorageState),
      file_storage_states: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileStorageStates),
      id: cdktf.stringToTerraform(this._id),
      page: cdktf.numberToTerraform(this._page),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      size: cdktf.numberToTerraform(this._size),
      sort: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_id: {
        value: cdktf.stringToHclTerraform(this._blockId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_storage_id: {
        value: cdktf.stringToHclTerraform(this._fileStorageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_storage_name: {
        value: cdktf.stringToHclTerraform(this._fileStorageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_storage_protocol: {
        value: cdktf.stringToHclTerraform(this._fileStorageProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_storage_state: {
        value: cdktf.stringToHclTerraform(this._fileStorageState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_storage_states: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fileStorageStates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_zone_id: {
        value: cdktf.stringToHclTerraform(this._serviceZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sort: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sort),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
