// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_storages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformObsStoragesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_storages#id DataSamsungcloudplatformObsStorages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Is Multi Availability Zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_storages#is_multi_availability_zone DataSamsungcloudplatformObsStorages#is_multi_availability_zone}
  */
  readonly isMultiAvailabilityZone?: boolean | cdktf.IResolvable;
  /**
  * Object Storage Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_storages#object_storage_name DataSamsungcloudplatformObsStorages#object_storage_name}
  */
  readonly objectStorageName?: string;
  /**
  * Page start number from which to get the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_storages#page DataSamsungcloudplatformObsStorages#page}
  */
  readonly page?: number;
  /**
  * Service Zone ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_storages#service_zone_id DataSamsungcloudplatformObsStorages#service_zone_id}
  */
  readonly serviceZoneId: string;
  /**
  * Size to get list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_storages#size DataSamsungcloudplatformObsStorages#size}
  */
  readonly size?: number;
  /**
  * Sort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_storages#sort DataSamsungcloudplatformObsStorages#sort}
  */
  readonly sort?: string[];
}
export interface DataSamsungcloudplatformObsStoragesContents {
}

export function dataSamsungcloudplatformObsStoragesContentsToTerraform(struct?: DataSamsungcloudplatformObsStoragesContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformObsStoragesContentsToHclTerraform(struct?: DataSamsungcloudplatformObsStoragesContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformObsStoragesContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformObsStoragesContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformObsStoragesContents | undefined) {
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

  // is_multi_availability_zone - computed: true, optional: false, required: false
  public get isMultiAvailabilityZone() {
    return this.getBooleanAttribute('is_multi_availability_zone');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // object_storage_description - computed: true, optional: false, required: false
  public get objectStorageDescription() {
    return this.getStringAttribute('object_storage_description');
  }

  // object_storage_id - computed: true, optional: false, required: false
  public get objectStorageId() {
    return this.getStringAttribute('object_storage_id');
  }

  // object_storage_name - computed: true, optional: false, required: false
  public get objectStorageName() {
    return this.getStringAttribute('object_storage_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
}

export class DataSamsungcloudplatformObsStoragesContentsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformObsStoragesContentsOutputReference {
    return new DataSamsungcloudplatformObsStoragesContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_storages samsungcloudplatform_obs_storages}
*/
export class DataSamsungcloudplatformObsStorages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_obs_storages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformObsStorages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformObsStorages to import
  * @param importFromId The id of the existing DataSamsungcloudplatformObsStorages that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_storages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformObsStorages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_obs_storages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_storages samsungcloudplatform_obs_storages} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformObsStoragesConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformObsStoragesConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_obs_storages',
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
    this._id = config.id;
    this._isMultiAvailabilityZone = config.isMultiAvailabilityZone;
    this._objectStorageName = config.objectStorageName;
    this._page = config.page;
    this._serviceZoneId = config.serviceZoneId;
    this._size = config.size;
    this._sort = config.sort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contents - computed: true, optional: false, required: false
  private _contents = new DataSamsungcloudplatformObsStoragesContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
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

  // is_multi_availability_zone - computed: false, optional: true, required: false
  private _isMultiAvailabilityZone?: boolean | cdktf.IResolvable; 
  public get isMultiAvailabilityZone() {
    return this.getBooleanAttribute('is_multi_availability_zone');
  }
  public set isMultiAvailabilityZone(value: boolean | cdktf.IResolvable) {
    this._isMultiAvailabilityZone = value;
  }
  public resetIsMultiAvailabilityZone() {
    this._isMultiAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMultiAvailabilityZoneInput() {
    return this._isMultiAvailabilityZone;
  }

  // object_storage_name - computed: false, optional: true, required: false
  private _objectStorageName?: string; 
  public get objectStorageName() {
    return this.getStringAttribute('object_storage_name');
  }
  public set objectStorageName(value: string) {
    this._objectStorageName = value;
  }
  public resetObjectStorageName() {
    this._objectStorageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageNameInput() {
    return this._objectStorageName;
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

  // service_zone_id - computed: false, optional: false, required: true
  private _serviceZoneId?: string; 
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
  public set serviceZoneId(value: string) {
    this._serviceZoneId = value;
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
      id: cdktf.stringToTerraform(this._id),
      is_multi_availability_zone: cdktf.booleanToTerraform(this._isMultiAvailabilityZone),
      object_storage_name: cdktf.stringToTerraform(this._objectStorageName),
      page: cdktf.numberToTerraform(this._page),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      size: cdktf.numberToTerraform(this._size),
      sort: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sort),
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
      is_multi_availability_zone: {
        value: cdktf.booleanToHclTerraform(this._isMultiAvailabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      object_storage_name: {
        value: cdktf.stringToHclTerraform(this._objectStorageName),
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
