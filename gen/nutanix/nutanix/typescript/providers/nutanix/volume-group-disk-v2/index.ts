// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_disk_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeGroupDiskV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Volume Disk description. This is an optional field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_disk_v2#description VolumeGroupDiskV2#description}
  */
  readonly description?: string;
  /**
  * Size of the disk in bytes. This field is mandatory during Volume Group creation if a new disk is being created on the storage container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_disk_v2#disk_size_bytes VolumeGroupDiskV2#disk_size_bytes}
  */
  readonly diskSizeBytes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_disk_v2#id VolumeGroupDiskV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Index of the disk in a Volume Group. This field is optional and immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_disk_v2#index VolumeGroupDiskV2#index}
  */
  readonly index?: number;
  /**
  * The external identifier of the volume group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_disk_v2#volume_group_ext_id VolumeGroupDiskV2#volume_group_ext_id}
  */
  readonly volumeGroupExtId: string;
  /**
  * disk_data_source_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_disk_v2#disk_data_source_reference VolumeGroupDiskV2#disk_data_source_reference}
  */
  readonly diskDataSourceReference: VolumeGroupDiskV2DiskDataSourceReference[] | cdktf.IResolvable;
  /**
  * disk_storage_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_disk_v2#disk_storage_features VolumeGroupDiskV2#disk_storage_features}
  */
  readonly diskStorageFeatures?: VolumeGroupDiskV2DiskStorageFeatures[] | cdktf.IResolvable;
}
export interface VolumeGroupDiskV2DiskDataSourceReference {
  /**
  * The Entity Type of the Data Source Reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_disk_v2#entity_type VolumeGroupDiskV2#entity_type}
  */
  readonly entityType?: string;
  /**
  * The external identifier of the Data Source Reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_disk_v2#ext_id VolumeGroupDiskV2#ext_id}
  */
  readonly extId: string;
  /**
  * The name of the Data Source Reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_disk_v2#name VolumeGroupDiskV2#name}
  */
  readonly name?: string;
  /**
  * The uri list of the Data Source Reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_disk_v2#uris VolumeGroupDiskV2#uris}
  */
  readonly uris?: string[];
}

export function volumeGroupDiskV2DiskDataSourceReferenceToTerraform(struct?: VolumeGroupDiskV2DiskDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    ext_id: cdktf.stringToTerraform(struct!.extId),
    name: cdktf.stringToTerraform(struct!.name),
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function volumeGroupDiskV2DiskDataSourceReferenceToHclTerraform(struct?: VolumeGroupDiskV2DiskDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeGroupDiskV2DiskDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeGroupDiskV2DiskDataSourceReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeGroupDiskV2DiskDataSourceReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityType = undefined;
      this._extId = undefined;
      this._name = undefined;
      this._uris = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityType = value.entityType;
      this._extId = value.extId;
      this._name = value.name;
      this._uris = value.uris;
    }
  }

  // entity_type - computed: true, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // uris - computed: true, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}

export class VolumeGroupDiskV2DiskDataSourceReferenceList extends cdktf.ComplexList {
  public internalValue? : VolumeGroupDiskV2DiskDataSourceReference[] | cdktf.IResolvable

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
  public get(index: number): VolumeGroupDiskV2DiskDataSourceReferenceOutputReference {
    return new VolumeGroupDiskV2DiskDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeGroupDiskV2DiskStorageFeaturesFlashMode {
  /**
  * The flash mode is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_disk_v2#is_enabled VolumeGroupDiskV2#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function volumeGroupDiskV2DiskStorageFeaturesFlashModeToTerraform(struct?: VolumeGroupDiskV2DiskStorageFeaturesFlashMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function volumeGroupDiskV2DiskStorageFeaturesFlashModeToHclTerraform(struct?: VolumeGroupDiskV2DiskStorageFeaturesFlashMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeGroupDiskV2DiskStorageFeaturesFlashModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeGroupDiskV2DiskStorageFeaturesFlashMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeGroupDiskV2DiskStorageFeaturesFlashMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}

export class VolumeGroupDiskV2DiskStorageFeaturesFlashModeList extends cdktf.ComplexList {
  public internalValue? : VolumeGroupDiskV2DiskStorageFeaturesFlashMode[] | cdktf.IResolvable

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
  public get(index: number): VolumeGroupDiskV2DiskStorageFeaturesFlashModeOutputReference {
    return new VolumeGroupDiskV2DiskStorageFeaturesFlashModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeGroupDiskV2DiskStorageFeatures {
  /**
  * flash_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_disk_v2#flash_mode VolumeGroupDiskV2#flash_mode}
  */
  readonly flashMode?: VolumeGroupDiskV2DiskStorageFeaturesFlashMode[] | cdktf.IResolvable;
}

export function volumeGroupDiskV2DiskStorageFeaturesToTerraform(struct?: VolumeGroupDiskV2DiskStorageFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flash_mode: cdktf.listMapper(volumeGroupDiskV2DiskStorageFeaturesFlashModeToTerraform, true)(struct!.flashMode),
  }
}


export function volumeGroupDiskV2DiskStorageFeaturesToHclTerraform(struct?: VolumeGroupDiskV2DiskStorageFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flash_mode: {
      value: cdktf.listMapperHcl(volumeGroupDiskV2DiskStorageFeaturesFlashModeToHclTerraform, true)(struct!.flashMode),
      isBlock: true,
      type: "list",
      storageClassType: "VolumeGroupDiskV2DiskStorageFeaturesFlashModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeGroupDiskV2DiskStorageFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeGroupDiskV2DiskStorageFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flashMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flashMode = this._flashMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeGroupDiskV2DiskStorageFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flashMode.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flashMode.internalValue = value.flashMode;
    }
  }

  // flash_mode - computed: false, optional: true, required: false
  private _flashMode = new VolumeGroupDiskV2DiskStorageFeaturesFlashModeList(this, "flash_mode", false);
  public get flashMode() {
    return this._flashMode;
  }
  public putFlashMode(value: VolumeGroupDiskV2DiskStorageFeaturesFlashMode[] | cdktf.IResolvable) {
    this._flashMode.internalValue = value;
  }
  public resetFlashMode() {
    this._flashMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flashModeInput() {
    return this._flashMode.internalValue;
  }
}

export class VolumeGroupDiskV2DiskStorageFeaturesList extends cdktf.ComplexList {
  public internalValue? : VolumeGroupDiskV2DiskStorageFeatures[] | cdktf.IResolvable

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
  public get(index: number): VolumeGroupDiskV2DiskStorageFeaturesOutputReference {
    return new VolumeGroupDiskV2DiskStorageFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_disk_v2 nutanix_volume_group_disk_v2}
*/
export class VolumeGroupDiskV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_volume_group_disk_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VolumeGroupDiskV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VolumeGroupDiskV2 to import
  * @param importFromId The id of the existing VolumeGroupDiskV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_disk_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VolumeGroupDiskV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_volume_group_disk_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_disk_v2 nutanix_volume_group_disk_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeGroupDiskV2Config
  */
  public constructor(scope: Construct, id: string, config: VolumeGroupDiskV2Config) {
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
    this._description = config.description;
    this._diskSizeBytes = config.diskSizeBytes;
    this._id = config.id;
    this._index = config.index;
    this._volumeGroupExtId = config.volumeGroupExtId;
    this._diskDataSourceReference.internalValue = config.diskDataSourceReference;
    this._diskStorageFeatures.internalValue = config.diskStorageFeatures;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disk_size_bytes - computed: false, optional: false, required: true
  private _diskSizeBytes?: number; 
  public get diskSizeBytes() {
    return this.getNumberAttribute('disk_size_bytes');
  }
  public set diskSizeBytes(value: number) {
    this._diskSizeBytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeBytesInput() {
    return this._diskSizeBytes;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
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

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

  // disk_data_source_reference - computed: false, optional: false, required: true
  private _diskDataSourceReference = new VolumeGroupDiskV2DiskDataSourceReferenceList(this, "disk_data_source_reference", false);
  public get diskDataSourceReference() {
    return this._diskDataSourceReference;
  }
  public putDiskDataSourceReference(value: VolumeGroupDiskV2DiskDataSourceReference[] | cdktf.IResolvable) {
    this._diskDataSourceReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskDataSourceReferenceInput() {
    return this._diskDataSourceReference.internalValue;
  }

  // disk_storage_features - computed: false, optional: true, required: false
  private _diskStorageFeatures = new VolumeGroupDiskV2DiskStorageFeaturesList(this, "disk_storage_features", false);
  public get diskStorageFeatures() {
    return this._diskStorageFeatures;
  }
  public putDiskStorageFeatures(value: VolumeGroupDiskV2DiskStorageFeatures[] | cdktf.IResolvable) {
    this._diskStorageFeatures.internalValue = value;
  }
  public resetDiskStorageFeatures() {
    this._diskStorageFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskStorageFeaturesInput() {
    return this._diskStorageFeatures.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      disk_size_bytes: cdktf.numberToTerraform(this._diskSizeBytes),
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.numberToTerraform(this._index),
      volume_group_ext_id: cdktf.stringToTerraform(this._volumeGroupExtId),
      disk_data_source_reference: cdktf.listMapper(volumeGroupDiskV2DiskDataSourceReferenceToTerraform, true)(this._diskDataSourceReference.internalValue),
      disk_storage_features: cdktf.listMapper(volumeGroupDiskV2DiskStorageFeaturesToTerraform, true)(this._diskStorageFeatures.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size_bytes: {
        value: cdktf.numberToHclTerraform(this._diskSizeBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index: {
        value: cdktf.numberToHclTerraform(this._index),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      volume_group_ext_id: {
        value: cdktf.stringToHclTerraform(this._volumeGroupExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_data_source_reference: {
        value: cdktf.listMapperHcl(volumeGroupDiskV2DiskDataSourceReferenceToHclTerraform, true)(this._diskDataSourceReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VolumeGroupDiskV2DiskDataSourceReferenceList",
      },
      disk_storage_features: {
        value: cdktf.listMapperHcl(volumeGroupDiskV2DiskStorageFeaturesToHclTerraform, true)(this._diskStorageFeatures.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VolumeGroupDiskV2DiskStorageFeaturesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
