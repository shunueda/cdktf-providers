// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/block_storages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformBlockStoragesConfig extends cdktf.TerraformMetaArguments {
  /**
  * block_storage_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/block_storages#block_storage_id DataSamsungcloudplatformBlockStorages#block_storage_id}
  */
  readonly blockStorageId?: string;
  /**
  * The person who created the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/block_storages#created_by DataSamsungcloudplatformBlockStorages#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/block_storages#id DataSamsungcloudplatformBlockStorages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Page start number from which to get the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/block_storages#page DataSamsungcloudplatformBlockStorages#page}
  */
  readonly page?: number;
  /**
  * Size to get list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/block_storages#size DataSamsungcloudplatformBlockStorages#size}
  */
  readonly size?: number;
  /**
  * Virtual server id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/block_storages#virtual_server_id DataSamsungcloudplatformBlockStorages#virtual_server_id}
  */
  readonly virtualServerId?: string;
  /**
  * contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/block_storages#contents DataSamsungcloudplatformBlockStorages#contents}
  */
  readonly contents?: DataSamsungcloudplatformBlockStoragesContents[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformBlockStoragesContentsVirtualServers {
}

export function dataSamsungcloudplatformBlockStoragesContentsVirtualServersToTerraform(struct?: DataSamsungcloudplatformBlockStoragesContentsVirtualServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformBlockStoragesContentsVirtualServersToHclTerraform(struct?: DataSamsungcloudplatformBlockStoragesContentsVirtualServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformBlockStoragesContentsVirtualServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformBlockStoragesContentsVirtualServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformBlockStoragesContentsVirtualServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_state - computed: true, optional: false, required: false
  public get mountState() {
    return this.getStringAttribute('mount_state');
  }

  // virtual_server_id - computed: true, optional: false, required: false
  public get virtualServerId() {
    return this.getStringAttribute('virtual_server_id');
  }
}

export class DataSamsungcloudplatformBlockStoragesContentsVirtualServersList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformBlockStoragesContentsVirtualServersOutputReference {
    return new DataSamsungcloudplatformBlockStoragesContentsVirtualServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformBlockStoragesContents {
}

export function dataSamsungcloudplatformBlockStoragesContentsToTerraform(struct?: DataSamsungcloudplatformBlockStoragesContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformBlockStoragesContentsToHclTerraform(struct?: DataSamsungcloudplatformBlockStoragesContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformBlockStoragesContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformBlockStoragesContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformBlockStoragesContents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // block_id - computed: true, optional: false, required: false
  public get blockId() {
    return this.getStringAttribute('block_id');
  }

  // block_storage_id - computed: true, optional: false, required: false
  public get blockStorageId() {
    return this.getStringAttribute('block_storage_id');
  }

  // block_storage_name - computed: true, optional: false, required: false
  public get blockStorageName() {
    return this.getStringAttribute('block_storage_name');
  }

  // block_storage_size - computed: true, optional: false, required: false
  public get blockStorageSize() {
    return this.getNumberAttribute('block_storage_size');
  }

  // block_storage_state - computed: true, optional: false, required: false
  public get blockStorageState() {
    return this.getStringAttribute('block_storage_state');
  }

  // block_storage_uuid - computed: true, optional: false, required: false
  public get blockStorageUuid() {
    return this.getStringAttribute('block_storage_uuid');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // device_node - computed: true, optional: false, required: false
  public get deviceNode() {
    return this.getStringAttribute('device_node');
  }

  // encrypt_enabled - computed: true, optional: false, required: false
  public get encryptEnabled() {
    return this.getBooleanAttribute('encrypt_enabled');
  }

  // is_boot_disk - computed: true, optional: false, required: false
  public get isBootDisk() {
    return this.getBooleanAttribute('is_boot_disk');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // shared_type - computed: true, optional: false, required: false
  public get sharedType() {
    return this.getStringAttribute('shared_type');
  }

  // virtual_server_id - computed: true, optional: false, required: false
  public get virtualServerId() {
    return this.getStringAttribute('virtual_server_id');
  }

  // virtual_servers - computed: true, optional: false, required: false
  private _virtualServers = new DataSamsungcloudplatformBlockStoragesContentsVirtualServersList(this, "virtual_servers", false);
  public get virtualServers() {
    return this._virtualServers;
  }
}

export class DataSamsungcloudplatformBlockStoragesContentsList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformBlockStoragesContents[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformBlockStoragesContentsOutputReference {
    return new DataSamsungcloudplatformBlockStoragesContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/block_storages samsungcloudplatform_block_storages}
*/
export class DataSamsungcloudplatformBlockStorages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_block_storages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformBlockStorages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformBlockStorages to import
  * @param importFromId The id of the existing DataSamsungcloudplatformBlockStorages that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/block_storages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformBlockStorages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_block_storages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/block_storages samsungcloudplatform_block_storages} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformBlockStoragesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformBlockStoragesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_block_storages',
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
    this._blockStorageId = config.blockStorageId;
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._page = config.page;
    this._size = config.size;
    this._virtualServerId = config.virtualServerId;
    this._contents.internalValue = config.contents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_storage_id - computed: false, optional: true, required: false
  private _blockStorageId?: string; 
  public get blockStorageId() {
    return this.getStringAttribute('block_storage_id');
  }
  public set blockStorageId(value: string) {
    this._blockStorageId = value;
  }
  public resetBlockStorageId() {
    this._blockStorageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageIdInput() {
    return this._blockStorageId;
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

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // virtual_server_id - computed: false, optional: true, required: false
  private _virtualServerId?: string; 
  public get virtualServerId() {
    return this.getStringAttribute('virtual_server_id');
  }
  public set virtualServerId(value: string) {
    this._virtualServerId = value;
  }
  public resetVirtualServerId() {
    this._virtualServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerIdInput() {
    return this._virtualServerId;
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new DataSamsungcloudplatformBlockStoragesContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataSamsungcloudplatformBlockStoragesContents[] | cdktf.IResolvable) {
    this._contents.internalValue = value;
  }
  public resetContents() {
    this._contents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_storage_id: cdktf.stringToTerraform(this._blockStorageId),
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      page: cdktf.numberToTerraform(this._page),
      size: cdktf.numberToTerraform(this._size),
      virtual_server_id: cdktf.stringToTerraform(this._virtualServerId),
      contents: cdktf.listMapper(dataSamsungcloudplatformBlockStoragesContentsToTerraform, true)(this._contents.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_storage_id: {
        value: cdktf.stringToHclTerraform(this._blockStorageId),
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
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_server_id: {
        value: cdktf.stringToHclTerraform(this._virtualServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contents: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformBlockStoragesContentsToHclTerraform, true)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSamsungcloudplatformBlockStoragesContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
