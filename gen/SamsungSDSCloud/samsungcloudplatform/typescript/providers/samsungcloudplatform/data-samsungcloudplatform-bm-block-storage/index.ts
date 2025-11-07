// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/bm_block_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformBmBlockStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/bm_block_storage#id DataSamsungcloudplatformBmBlockStorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * baremetal_block_storage_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/bm_block_storage#storage_id DataSamsungcloudplatformBmBlockStorage#storage_id}
  */
  readonly storageId: string;
}
export interface DataSamsungcloudplatformBmBlockStorageOriginBareMetalBlockStorage {
}

export function dataSamsungcloudplatformBmBlockStorageOriginBareMetalBlockStorageToTerraform(struct?: DataSamsungcloudplatformBmBlockStorageOriginBareMetalBlockStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformBmBlockStorageOriginBareMetalBlockStorageToHclTerraform(struct?: DataSamsungcloudplatformBmBlockStorageOriginBareMetalBlockStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformBmBlockStorageOriginBareMetalBlockStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformBmBlockStorageOriginBareMetalBlockStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformBmBlockStorageOriginBareMetalBlockStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bare_metal_block_storage_id - computed: true, optional: false, required: false
  public get bareMetalBlockStorageId() {
    return this.getStringAttribute('bare_metal_block_storage_id');
  }

  // bare_metal_block_storage_name - computed: true, optional: false, required: false
  public get bareMetalBlockStorageName() {
    return this.getStringAttribute('bare_metal_block_storage_name');
  }

  // block_id - computed: true, optional: false, required: false
  public get blockId() {
    return this.getStringAttribute('block_id');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
}

export class DataSamsungcloudplatformBmBlockStorageOriginBareMetalBlockStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformBmBlockStorageOriginBareMetalBlockStorageOutputReference {
    return new DataSamsungcloudplatformBmBlockStorageOriginBareMetalBlockStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformBmBlockStorageServers {
}

export function dataSamsungcloudplatformBmBlockStorageServersToTerraform(struct?: DataSamsungcloudplatformBmBlockStorageServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformBmBlockStorageServersToHclTerraform(struct?: DataSamsungcloudplatformBmBlockStorageServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformBmBlockStorageServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformBmBlockStorageServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformBmBlockStorageServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // server_id - computed: true, optional: false, required: false
  public get serverId() {
    return this.getStringAttribute('server_id');
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
}

export class DataSamsungcloudplatformBmBlockStorageServersList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformBmBlockStorageServersOutputReference {
    return new DataSamsungcloudplatformBmBlockStorageServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/bm_block_storage samsungcloudplatform_bm_block_storage}
*/
export class DataSamsungcloudplatformBmBlockStorage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_bm_block_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformBmBlockStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformBmBlockStorage to import
  * @param importFromId The id of the existing DataSamsungcloudplatformBmBlockStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/bm_block_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformBmBlockStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_bm_block_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/bm_block_storage samsungcloudplatform_bm_block_storage} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformBmBlockStorageConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformBmBlockStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_bm_block_storage',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
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
    this._storageId = config.storageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_bare_metal_block_storage_id - computed: true, optional: false, required: false
  public get backupBareMetalBlockStorageId() {
    return this.getStringAttribute('backup_bare_metal_block_storage_id');
  }

  // bare_metal_block_storage_name - computed: true, optional: false, required: false
  public get bareMetalBlockStorageName() {
    return this.getStringAttribute('bare_metal_block_storage_name');
  }

  // bare_metal_block_storage_purpose - computed: true, optional: false, required: false
  public get bareMetalBlockStoragePurpose() {
    return this.getStringAttribute('bare_metal_block_storage_purpose');
  }

  // bare_metal_block_storage_size - computed: true, optional: false, required: false
  public get bareMetalBlockStorageSize() {
    return this.getNumberAttribute('bare_metal_block_storage_size');
  }

  // bare_metal_block_storage_state - computed: true, optional: false, required: false
  public get bareMetalBlockStorageState() {
    return this.getStringAttribute('bare_metal_block_storage_state');
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

  // dr_bare_metal_block_storage_id - computed: true, optional: false, required: false
  public get drBareMetalBlockStorageId() {
    return this.getStringAttribute('dr_bare_metal_block_storage_id');
  }

  // encryption_enabled - computed: true, optional: false, required: false
  public get encryptionEnabled() {
    return this.getBooleanAttribute('encryption_enabled');
  }

  // error_check - computed: true, optional: false, required: false
  public get errorCheck() {
    return this.getBooleanAttribute('error_check');
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

  // iscsi_target_ip - computed: true, optional: false, required: false
  public get iscsiTargetIp() {
    return this.getListAttribute('iscsi_target_ip');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // origin_bare_metal_block_storage - computed: true, optional: false, required: false
  private _originBareMetalBlockStorage = new DataSamsungcloudplatformBmBlockStorageOriginBareMetalBlockStorageList(this, "origin_bare_metal_block_storage", false);
  public get originBareMetalBlockStorage() {
    return this._originBareMetalBlockStorage;
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // servers - computed: true, optional: false, required: false
  private _servers = new DataSamsungcloudplatformBmBlockStorageServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // storage_id - computed: false, optional: false, required: true
  private _storageId?: string; 
  public get storageId() {
    return this.getStringAttribute('storage_id');
  }
  public set storageId(value: string) {
    this._storageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageIdInput() {
    return this._storageId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      storage_id: cdktf.stringToTerraform(this._storageId),
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
      storage_id: {
        value: cdktf.stringToHclTerraform(this._storageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
