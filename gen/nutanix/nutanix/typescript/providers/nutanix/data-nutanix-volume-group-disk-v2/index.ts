// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/volume_group_disk_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixVolumeGroupDiskV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The external identifier of the Volume Disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/volume_group_disk_v2#ext_id DataNutanixVolumeGroupDiskV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/volume_group_disk_v2#id DataNutanixVolumeGroupDiskV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The external identifier of the Volume Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/volume_group_disk_v2#volume_group_ext_id DataNutanixVolumeGroupDiskV2#volume_group_ext_id}
  */
  readonly volumeGroupExtId: string;
}
export interface DataNutanixVolumeGroupDiskV2DiskDataSourceReference {
}

export function dataNutanixVolumeGroupDiskV2DiskDataSourceReferenceToTerraform(struct?: DataNutanixVolumeGroupDiskV2DiskDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVolumeGroupDiskV2DiskDataSourceReferenceToHclTerraform(struct?: DataNutanixVolumeGroupDiskV2DiskDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVolumeGroupDiskV2DiskDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVolumeGroupDiskV2DiskDataSourceReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVolumeGroupDiskV2DiskDataSourceReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uris - computed: true, optional: false, required: false
  private _uris = new cdktf.StringListList(this, "uris", false);
  public get uris() {
    return this._uris;
  }
}

export class DataNutanixVolumeGroupDiskV2DiskDataSourceReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixVolumeGroupDiskV2DiskDataSourceReferenceOutputReference {
    return new DataNutanixVolumeGroupDiskV2DiskDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVolumeGroupDiskV2DiskStorageFeaturesFlashMode {
}

export function dataNutanixVolumeGroupDiskV2DiskStorageFeaturesFlashModeToTerraform(struct?: DataNutanixVolumeGroupDiskV2DiskStorageFeaturesFlashMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVolumeGroupDiskV2DiskStorageFeaturesFlashModeToHclTerraform(struct?: DataNutanixVolumeGroupDiskV2DiskStorageFeaturesFlashMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVolumeGroupDiskV2DiskStorageFeaturesFlashModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVolumeGroupDiskV2DiskStorageFeaturesFlashMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVolumeGroupDiskV2DiskStorageFeaturesFlashMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}

export class DataNutanixVolumeGroupDiskV2DiskStorageFeaturesFlashModeList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixVolumeGroupDiskV2DiskStorageFeaturesFlashModeOutputReference {
    return new DataNutanixVolumeGroupDiskV2DiskStorageFeaturesFlashModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVolumeGroupDiskV2DiskStorageFeatures {
}

export function dataNutanixVolumeGroupDiskV2DiskStorageFeaturesToTerraform(struct?: DataNutanixVolumeGroupDiskV2DiskStorageFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVolumeGroupDiskV2DiskStorageFeaturesToHclTerraform(struct?: DataNutanixVolumeGroupDiskV2DiskStorageFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVolumeGroupDiskV2DiskStorageFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVolumeGroupDiskV2DiskStorageFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVolumeGroupDiskV2DiskStorageFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flash_mode - computed: true, optional: false, required: false
  private _flashMode = new DataNutanixVolumeGroupDiskV2DiskStorageFeaturesFlashModeList(this, "flash_mode", false);
  public get flashMode() {
    return this._flashMode;
  }
}

export class DataNutanixVolumeGroupDiskV2DiskStorageFeaturesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixVolumeGroupDiskV2DiskStorageFeaturesOutputReference {
    return new DataNutanixVolumeGroupDiskV2DiskStorageFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVolumeGroupDiskV2Links {
}

export function dataNutanixVolumeGroupDiskV2LinksToTerraform(struct?: DataNutanixVolumeGroupDiskV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVolumeGroupDiskV2LinksToHclTerraform(struct?: DataNutanixVolumeGroupDiskV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVolumeGroupDiskV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVolumeGroupDiskV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVolumeGroupDiskV2Links | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataNutanixVolumeGroupDiskV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixVolumeGroupDiskV2LinksOutputReference {
    return new DataNutanixVolumeGroupDiskV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/volume_group_disk_v2 nutanix_volume_group_disk_v2}
*/
export class DataNutanixVolumeGroupDiskV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_volume_group_disk_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixVolumeGroupDiskV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixVolumeGroupDiskV2 to import
  * @param importFromId The id of the existing DataNutanixVolumeGroupDiskV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/volume_group_disk_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixVolumeGroupDiskV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_volume_group_disk_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/volume_group_disk_v2 nutanix_volume_group_disk_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixVolumeGroupDiskV2Config
  */
  public constructor(scope: Construct, id: string, config: DataNutanixVolumeGroupDiskV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_volume_group_disk_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extId = config.extId;
    this._id = config.id;
    this._volumeGroupExtId = config.volumeGroupExtId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk_data_source_reference - computed: true, optional: false, required: false
  private _diskDataSourceReference = new DataNutanixVolumeGroupDiskV2DiskDataSourceReferenceList(this, "disk_data_source_reference", false);
  public get diskDataSourceReference() {
    return this._diskDataSourceReference;
  }

  // disk_size_bytes - computed: true, optional: false, required: false
  public get diskSizeBytes() {
    return this.getNumberAttribute('disk_size_bytes');
  }

  // disk_storage_features - computed: true, optional: false, required: false
  private _diskStorageFeatures = new DataNutanixVolumeGroupDiskV2DiskStorageFeaturesList(this, "disk_storage_features", false);
  public get diskStorageFeatures() {
    return this._diskStorageFeatures;
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixVolumeGroupDiskV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // storage_container_id - computed: true, optional: false, required: false
  public get storageContainerId() {
    return this.getStringAttribute('storage_container_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // volume_group_ext_id - computed: false, optional: false, required: true
  private _volumeGroupExtId?: string; 
  public get volumeGroupExtId() {
    return this.getStringAttribute('volume_group_ext_id');
  }
  public set volumeGroupExtId(value: string) {
    this._volumeGroupExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupExtIdInput() {
    return this._volumeGroupExtId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      volume_group_ext_id: cdktf.stringToTerraform(this._volumeGroupExtId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
      volume_group_ext_id: {
        value: cdktf.stringToHclTerraform(this._volumeGroupExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
