// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeGroupV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#attachment_type VolumeGroupV2#attachment_type}
  */
  readonly attachmentType?: string;
  /**
  * The UUID of the cluster that will host the Volume Group. This is a mandatory field for creating a Volume Group on Prism Central.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#cluster_reference VolumeGroupV2#cluster_reference}
  */
  readonly clusterReference: string;
  /**
  * Service/user who created this Volume Group. This is an optional field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#created_by VolumeGroupV2#created_by}
  */
  readonly createdBy?: string;
  /**
  * Volume Group description. This is an optional field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#description VolumeGroupV2#description}
  */
  readonly description?: string;
  /**
  * The authentication type enabled for the Volume Group. This is an optional field. If omitted, authentication is not configured for the Volume Group. If this is set to CHAP, the target/client secret must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#enabled_authentications VolumeGroupV2#enabled_authentications}
  */
  readonly enabledAuthentications?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#id VolumeGroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#is_hidden VolumeGroupV2#is_hidden}
  */
  readonly isHidden?: boolean | cdktf.IResolvable;
  /**
  * Volume Group name. This is an Required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#name VolumeGroupV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#protocol VolumeGroupV2#protocol}
  */
  readonly protocol?: string;
  /**
  * Indicates whether the Volume Group can be shared across multiple iSCSI initiators. The mode cannot be changed from SHARED to NOT_SHARED on a Volume Group with multiple attachments. Similarly, a Volume Group cannot be associated with more than one attachment as long as it is in exclusive mode. This is an optional field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#sharing_status VolumeGroupV2#sharing_status}
  */
  readonly sharingStatus?: string;
  /**
  * Indicates whether to enable Volume Group load balancing for VM attachments. This cannot be enabled if there are iSCSI client attachments already associated with the Volume Group, and vice-versa. This is an optional field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#should_load_balance_vm_attachments VolumeGroupV2#should_load_balance_vm_attachments}
  */
  readonly shouldLoadBalanceVmAttachments?: boolean | cdktf.IResolvable;
  /**
  * Name of the external client target that will be visible and accessible to the client. This is an optional field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#target_name VolumeGroupV2#target_name}
  */
  readonly targetName?: string;
  /**
  * The specifications contain the target prefix for external clients as the value. This is an optional field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#target_prefix VolumeGroupV2#target_prefix}
  */
  readonly targetPrefix?: string;
  /**
  * Expected usage type for the Volume Group. This is an indicative hint on how the caller will consume the Volume Group. This is an optional field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#usage_type VolumeGroupV2#usage_type}
  */
  readonly usageType?: string;
  /**
  * disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#disks VolumeGroupV2#disks}
  */
  readonly disks?: VolumeGroupV2Disks[] | cdktf.IResolvable;
  /**
  * iscsi_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#iscsi_features VolumeGroupV2#iscsi_features}
  */
  readonly iscsiFeatures?: VolumeGroupV2IscsiFeatures[] | cdktf.IResolvable;
  /**
  * storage_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#storage_features VolumeGroupV2#storage_features}
  */
  readonly storageFeatures?: VolumeGroupV2StorageFeatures[] | cdktf.IResolvable;
}
export interface VolumeGroupV2DisksDiskDataSourceReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#entity_type VolumeGroupV2#entity_type}
  */
  readonly entityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#ext_id VolumeGroupV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#name VolumeGroupV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#uris VolumeGroupV2#uris}
  */
  readonly uris?: string[];
}

export function volumeGroupV2DisksDiskDataSourceReferenceToTerraform(struct?: VolumeGroupV2DisksDiskDataSourceReference | cdktf.IResolvable): any {
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


export function volumeGroupV2DisksDiskDataSourceReferenceToHclTerraform(struct?: VolumeGroupV2DisksDiskDataSourceReference | cdktf.IResolvable): any {
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

export class VolumeGroupV2DisksDiskDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeGroupV2DisksDiskDataSourceReference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VolumeGroupV2DisksDiskDataSourceReference | cdktf.IResolvable | undefined) {
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

export class VolumeGroupV2DisksDiskDataSourceReferenceList extends cdktf.ComplexList {
  public internalValue? : VolumeGroupV2DisksDiskDataSourceReference[] | cdktf.IResolvable

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
  public get(index: number): VolumeGroupV2DisksDiskDataSourceReferenceOutputReference {
    return new VolumeGroupV2DisksDiskDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeGroupV2DisksDiskStorageFeaturesFlashMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#is_enabled VolumeGroupV2#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function volumeGroupV2DisksDiskStorageFeaturesFlashModeToTerraform(struct?: VolumeGroupV2DisksDiskStorageFeaturesFlashMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function volumeGroupV2DisksDiskStorageFeaturesFlashModeToHclTerraform(struct?: VolumeGroupV2DisksDiskStorageFeaturesFlashMode | cdktf.IResolvable): any {
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

export class VolumeGroupV2DisksDiskStorageFeaturesFlashModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeGroupV2DisksDiskStorageFeaturesFlashMode | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VolumeGroupV2DisksDiskStorageFeaturesFlashMode | cdktf.IResolvable | undefined) {
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

export class VolumeGroupV2DisksDiskStorageFeaturesFlashModeList extends cdktf.ComplexList {
  public internalValue? : VolumeGroupV2DisksDiskStorageFeaturesFlashMode[] | cdktf.IResolvable

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
  public get(index: number): VolumeGroupV2DisksDiskStorageFeaturesFlashModeOutputReference {
    return new VolumeGroupV2DisksDiskStorageFeaturesFlashModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeGroupV2DisksDiskStorageFeatures {
  /**
  * flash_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#flash_mode VolumeGroupV2#flash_mode}
  */
  readonly flashMode?: VolumeGroupV2DisksDiskStorageFeaturesFlashMode[] | cdktf.IResolvable;
}

export function volumeGroupV2DisksDiskStorageFeaturesToTerraform(struct?: VolumeGroupV2DisksDiskStorageFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flash_mode: cdktf.listMapper(volumeGroupV2DisksDiskStorageFeaturesFlashModeToTerraform, true)(struct!.flashMode),
  }
}


export function volumeGroupV2DisksDiskStorageFeaturesToHclTerraform(struct?: VolumeGroupV2DisksDiskStorageFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flash_mode: {
      value: cdktf.listMapperHcl(volumeGroupV2DisksDiskStorageFeaturesFlashModeToHclTerraform, true)(struct!.flashMode),
      isBlock: true,
      type: "list",
      storageClassType: "VolumeGroupV2DisksDiskStorageFeaturesFlashModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeGroupV2DisksDiskStorageFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeGroupV2DisksDiskStorageFeatures | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VolumeGroupV2DisksDiskStorageFeatures | cdktf.IResolvable | undefined) {
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
  private _flashMode = new VolumeGroupV2DisksDiskStorageFeaturesFlashModeList(this, "flash_mode", false);
  public get flashMode() {
    return this._flashMode;
  }
  public putFlashMode(value: VolumeGroupV2DisksDiskStorageFeaturesFlashMode[] | cdktf.IResolvable) {
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

export class VolumeGroupV2DisksDiskStorageFeaturesList extends cdktf.ComplexList {
  public internalValue? : VolumeGroupV2DisksDiskStorageFeatures[] | cdktf.IResolvable

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
  public get(index: number): VolumeGroupV2DisksDiskStorageFeaturesOutputReference {
    return new VolumeGroupV2DisksDiskStorageFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeGroupV2Disks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#description VolumeGroupV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#disk_size_bytes VolumeGroupV2#disk_size_bytes}
  */
  readonly diskSizeBytes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#index VolumeGroupV2#index}
  */
  readonly index?: number;
  /**
  * disk_data_source_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#disk_data_source_reference VolumeGroupV2#disk_data_source_reference}
  */
  readonly diskDataSourceReference: VolumeGroupV2DisksDiskDataSourceReference[] | cdktf.IResolvable;
  /**
  * disk_storage_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#disk_storage_features VolumeGroupV2#disk_storage_features}
  */
  readonly diskStorageFeatures?: VolumeGroupV2DisksDiskStorageFeatures[] | cdktf.IResolvable;
}

export function volumeGroupV2DisksToTerraform(struct?: VolumeGroupV2Disks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disk_size_bytes: cdktf.numberToTerraform(struct!.diskSizeBytes),
    index: cdktf.numberToTerraform(struct!.index),
    disk_data_source_reference: cdktf.listMapper(volumeGroupV2DisksDiskDataSourceReferenceToTerraform, true)(struct!.diskDataSourceReference),
    disk_storage_features: cdktf.listMapper(volumeGroupV2DisksDiskStorageFeaturesToTerraform, true)(struct!.diskStorageFeatures),
  }
}


export function volumeGroupV2DisksToHclTerraform(struct?: VolumeGroupV2Disks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_data_source_reference: {
      value: cdktf.listMapperHcl(volumeGroupV2DisksDiskDataSourceReferenceToHclTerraform, true)(struct!.diskDataSourceReference),
      isBlock: true,
      type: "list",
      storageClassType: "VolumeGroupV2DisksDiskDataSourceReferenceList",
    },
    disk_storage_features: {
      value: cdktf.listMapperHcl(volumeGroupV2DisksDiskStorageFeaturesToHclTerraform, true)(struct!.diskStorageFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "VolumeGroupV2DisksDiskStorageFeaturesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeGroupV2DisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeGroupV2Disks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._diskSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeBytes = this._diskSizeBytes;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._diskDataSourceReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskDataSourceReference = this._diskDataSourceReference?.internalValue;
    }
    if (this._diskStorageFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskStorageFeatures = this._diskStorageFeatures?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeGroupV2Disks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._diskSizeBytes = undefined;
      this._index = undefined;
      this._diskDataSourceReference.internalValue = undefined;
      this._diskStorageFeatures.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._diskSizeBytes = value.diskSizeBytes;
      this._index = value.index;
      this._diskDataSourceReference.internalValue = value.diskDataSourceReference;
      this._diskStorageFeatures.internalValue = value.diskStorageFeatures;
    }
  }

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

  // disk_data_source_reference - computed: false, optional: false, required: true
  private _diskDataSourceReference = new VolumeGroupV2DisksDiskDataSourceReferenceList(this, "disk_data_source_reference", false);
  public get diskDataSourceReference() {
    return this._diskDataSourceReference;
  }
  public putDiskDataSourceReference(value: VolumeGroupV2DisksDiskDataSourceReference[] | cdktf.IResolvable) {
    this._diskDataSourceReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskDataSourceReferenceInput() {
    return this._diskDataSourceReference.internalValue;
  }

  // disk_storage_features - computed: false, optional: true, required: false
  private _diskStorageFeatures = new VolumeGroupV2DisksDiskStorageFeaturesList(this, "disk_storage_features", false);
  public get diskStorageFeatures() {
    return this._diskStorageFeatures;
  }
  public putDiskStorageFeatures(value: VolumeGroupV2DisksDiskStorageFeatures[] | cdktf.IResolvable) {
    this._diskStorageFeatures.internalValue = value;
  }
  public resetDiskStorageFeatures() {
    this._diskStorageFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskStorageFeaturesInput() {
    return this._diskStorageFeatures.internalValue;
  }
}

export class VolumeGroupV2DisksList extends cdktf.ComplexList {
  public internalValue? : VolumeGroupV2Disks[] | cdktf.IResolvable

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
  public get(index: number): VolumeGroupV2DisksOutputReference {
    return new VolumeGroupV2DisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeGroupV2IscsiFeatures {
  /**
  * The authentication type enabled for the Volume Group. This is an optional field. If omitted, authentication is not configured for the Volume Group. If this is set to CHAP, the target/client secret must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#enabled_authentications VolumeGroupV2#enabled_authentications}
  */
  readonly enabledAuthentications?: string;
  /**
  * Target secret in case of a CHAP authentication. This field must only be provided in case the authentication type is not set to CHAP. This is an optional field and it cannot be retrieved once configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#target_secret VolumeGroupV2#target_secret}
  */
  readonly targetSecret?: string;
}

export function volumeGroupV2IscsiFeaturesToTerraform(struct?: VolumeGroupV2IscsiFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_authentications: cdktf.stringToTerraform(struct!.enabledAuthentications),
    target_secret: cdktf.stringToTerraform(struct!.targetSecret),
  }
}


export function volumeGroupV2IscsiFeaturesToHclTerraform(struct?: VolumeGroupV2IscsiFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_authentications: {
      value: cdktf.stringToHclTerraform(struct!.enabledAuthentications),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_secret: {
      value: cdktf.stringToHclTerraform(struct!.targetSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeGroupV2IscsiFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeGroupV2IscsiFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledAuthentications !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledAuthentications = this._enabledAuthentications;
    }
    if (this._targetSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSecret = this._targetSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeGroupV2IscsiFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabledAuthentications = undefined;
      this._targetSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabledAuthentications = value.enabledAuthentications;
      this._targetSecret = value.targetSecret;
    }
  }

  // enabled_authentications - computed: true, optional: true, required: false
  private _enabledAuthentications?: string; 
  public get enabledAuthentications() {
    return this.getStringAttribute('enabled_authentications');
  }
  public set enabledAuthentications(value: string) {
    this._enabledAuthentications = value;
  }
  public resetEnabledAuthentications() {
    this._enabledAuthentications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledAuthenticationsInput() {
    return this._enabledAuthentications;
  }

  // target_secret - computed: true, optional: true, required: false
  private _targetSecret?: string; 
  public get targetSecret() {
    return this.getStringAttribute('target_secret');
  }
  public set targetSecret(value: string) {
    this._targetSecret = value;
  }
  public resetTargetSecret() {
    this._targetSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSecretInput() {
    return this._targetSecret;
  }
}

export class VolumeGroupV2IscsiFeaturesList extends cdktf.ComplexList {
  public internalValue? : VolumeGroupV2IscsiFeatures[] | cdktf.IResolvable

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
  public get(index: number): VolumeGroupV2IscsiFeaturesOutputReference {
    return new VolumeGroupV2IscsiFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeGroupV2StorageFeaturesFlashMode {
  /**
  * Indicates whether the flash mode is enabled for the Volume Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#is_enabled VolumeGroupV2#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function volumeGroupV2StorageFeaturesFlashModeToTerraform(struct?: VolumeGroupV2StorageFeaturesFlashMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function volumeGroupV2StorageFeaturesFlashModeToHclTerraform(struct?: VolumeGroupV2StorageFeaturesFlashMode | cdktf.IResolvable): any {
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

export class VolumeGroupV2StorageFeaturesFlashModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeGroupV2StorageFeaturesFlashMode | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VolumeGroupV2StorageFeaturesFlashMode | cdktf.IResolvable | undefined) {
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

export class VolumeGroupV2StorageFeaturesFlashModeList extends cdktf.ComplexList {
  public internalValue? : VolumeGroupV2StorageFeaturesFlashMode[] | cdktf.IResolvable

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
  public get(index: number): VolumeGroupV2StorageFeaturesFlashModeOutputReference {
    return new VolumeGroupV2StorageFeaturesFlashModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeGroupV2StorageFeatures {
  /**
  * flash_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#flash_mode VolumeGroupV2#flash_mode}
  */
  readonly flashMode?: VolumeGroupV2StorageFeaturesFlashMode[] | cdktf.IResolvable;
}

export function volumeGroupV2StorageFeaturesToTerraform(struct?: VolumeGroupV2StorageFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flash_mode: cdktf.listMapper(volumeGroupV2StorageFeaturesFlashModeToTerraform, true)(struct!.flashMode),
  }
}


export function volumeGroupV2StorageFeaturesToHclTerraform(struct?: VolumeGroupV2StorageFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flash_mode: {
      value: cdktf.listMapperHcl(volumeGroupV2StorageFeaturesFlashModeToHclTerraform, true)(struct!.flashMode),
      isBlock: true,
      type: "list",
      storageClassType: "VolumeGroupV2StorageFeaturesFlashModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeGroupV2StorageFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeGroupV2StorageFeatures | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VolumeGroupV2StorageFeatures | cdktf.IResolvable | undefined) {
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
  private _flashMode = new VolumeGroupV2StorageFeaturesFlashModeList(this, "flash_mode", false);
  public get flashMode() {
    return this._flashMode;
  }
  public putFlashMode(value: VolumeGroupV2StorageFeaturesFlashMode[] | cdktf.IResolvable) {
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

export class VolumeGroupV2StorageFeaturesList extends cdktf.ComplexList {
  public internalValue? : VolumeGroupV2StorageFeatures[] | cdktf.IResolvable

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
  public get(index: number): VolumeGroupV2StorageFeaturesOutputReference {
    return new VolumeGroupV2StorageFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2 nutanix_volume_group_v2}
*/
export class VolumeGroupV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_volume_group_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VolumeGroupV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VolumeGroupV2 to import
  * @param importFromId The id of the existing VolumeGroupV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VolumeGroupV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_volume_group_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_v2 nutanix_volume_group_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeGroupV2Config
  */
  public constructor(scope: Construct, id: string, config: VolumeGroupV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_volume_group_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachmentType = config.attachmentType;
    this._clusterReference = config.clusterReference;
    this._createdBy = config.createdBy;
    this._description = config.description;
    this._enabledAuthentications = config.enabledAuthentications;
    this._id = config.id;
    this._isHidden = config.isHidden;
    this._name = config.name;
    this._protocol = config.protocol;
    this._sharingStatus = config.sharingStatus;
    this._shouldLoadBalanceVmAttachments = config.shouldLoadBalanceVmAttachments;
    this._targetName = config.targetName;
    this._targetPrefix = config.targetPrefix;
    this._usageType = config.usageType;
    this._disks.internalValue = config.disks;
    this._iscsiFeatures.internalValue = config.iscsiFeatures;
    this._storageFeatures.internalValue = config.storageFeatures;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_type - computed: true, optional: true, required: false
  private _attachmentType?: string; 
  public get attachmentType() {
    return this.getStringAttribute('attachment_type');
  }
  public set attachmentType(value: string) {
    this._attachmentType = value;
  }
  public resetAttachmentType() {
    this._attachmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentTypeInput() {
    return this._attachmentType;
  }

  // cluster_reference - computed: false, optional: false, required: true
  private _clusterReference?: string; 
  public get clusterReference() {
    return this.getStringAttribute('cluster_reference');
  }
  public set clusterReference(value: string) {
    this._clusterReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterReferenceInput() {
    return this._clusterReference;
  }

  // created_by - computed: true, optional: true, required: false
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

  // enabled_authentications - computed: false, optional: true, required: false
  private _enabledAuthentications?: string; 
  public get enabledAuthentications() {
    return this.getStringAttribute('enabled_authentications');
  }
  public set enabledAuthentications(value: string) {
    this._enabledAuthentications = value;
  }
  public resetEnabledAuthentications() {
    this._enabledAuthentications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledAuthenticationsInput() {
    return this._enabledAuthentications;
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

  // is_hidden - computed: true, optional: true, required: false
  private _isHidden?: boolean | cdktf.IResolvable; 
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }
  public set isHidden(value: boolean | cdktf.IResolvable) {
    this._isHidden = value;
  }
  public resetIsHidden() {
    this._isHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHiddenInput() {
    return this._isHidden;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // sharing_status - computed: true, optional: true, required: false
  private _sharingStatus?: string; 
  public get sharingStatus() {
    return this.getStringAttribute('sharing_status');
  }
  public set sharingStatus(value: string) {
    this._sharingStatus = value;
  }
  public resetSharingStatus() {
    this._sharingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingStatusInput() {
    return this._sharingStatus;
  }

  // should_load_balance_vm_attachments - computed: true, optional: true, required: false
  private _shouldLoadBalanceVmAttachments?: boolean | cdktf.IResolvable; 
  public get shouldLoadBalanceVmAttachments() {
    return this.getBooleanAttribute('should_load_balance_vm_attachments');
  }
  public set shouldLoadBalanceVmAttachments(value: boolean | cdktf.IResolvable) {
    this._shouldLoadBalanceVmAttachments = value;
  }
  public resetShouldLoadBalanceVmAttachments() {
    this._shouldLoadBalanceVmAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldLoadBalanceVmAttachmentsInput() {
    return this._shouldLoadBalanceVmAttachments;
  }

  // target_name - computed: true, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // target_prefix - computed: true, optional: true, required: false
  private _targetPrefix?: string; 
  public get targetPrefix() {
    return this.getStringAttribute('target_prefix');
  }
  public set targetPrefix(value: string) {
    this._targetPrefix = value;
  }
  public resetTargetPrefix() {
    this._targetPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPrefixInput() {
    return this._targetPrefix;
  }

  // usage_type - computed: true, optional: true, required: false
  private _usageType?: string; 
  public get usageType() {
    return this.getStringAttribute('usage_type');
  }
  public set usageType(value: string) {
    this._usageType = value;
  }
  public resetUsageType() {
    this._usageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageTypeInput() {
    return this._usageType;
  }

  // disks - computed: false, optional: true, required: false
  private _disks = new VolumeGroupV2DisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }
  public putDisks(value: VolumeGroupV2Disks[] | cdktf.IResolvable) {
    this._disks.internalValue = value;
  }
  public resetDisks() {
    this._disks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks.internalValue;
  }

  // iscsi_features - computed: false, optional: true, required: false
  private _iscsiFeatures = new VolumeGroupV2IscsiFeaturesList(this, "iscsi_features", false);
  public get iscsiFeatures() {
    return this._iscsiFeatures;
  }
  public putIscsiFeatures(value: VolumeGroupV2IscsiFeatures[] | cdktf.IResolvable) {
    this._iscsiFeatures.internalValue = value;
  }
  public resetIscsiFeatures() {
    this._iscsiFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiFeaturesInput() {
    return this._iscsiFeatures.internalValue;
  }

  // storage_features - computed: false, optional: true, required: false
  private _storageFeatures = new VolumeGroupV2StorageFeaturesList(this, "storage_features", false);
  public get storageFeatures() {
    return this._storageFeatures;
  }
  public putStorageFeatures(value: VolumeGroupV2StorageFeatures[] | cdktf.IResolvable) {
    this._storageFeatures.internalValue = value;
  }
  public resetStorageFeatures() {
    this._storageFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageFeaturesInput() {
    return this._storageFeatures.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attachment_type: cdktf.stringToTerraform(this._attachmentType),
      cluster_reference: cdktf.stringToTerraform(this._clusterReference),
      created_by: cdktf.stringToTerraform(this._createdBy),
      description: cdktf.stringToTerraform(this._description),
      enabled_authentications: cdktf.stringToTerraform(this._enabledAuthentications),
      id: cdktf.stringToTerraform(this._id),
      is_hidden: cdktf.booleanToTerraform(this._isHidden),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      sharing_status: cdktf.stringToTerraform(this._sharingStatus),
      should_load_balance_vm_attachments: cdktf.booleanToTerraform(this._shouldLoadBalanceVmAttachments),
      target_name: cdktf.stringToTerraform(this._targetName),
      target_prefix: cdktf.stringToTerraform(this._targetPrefix),
      usage_type: cdktf.stringToTerraform(this._usageType),
      disks: cdktf.listMapper(volumeGroupV2DisksToTerraform, true)(this._disks.internalValue),
      iscsi_features: cdktf.listMapper(volumeGroupV2IscsiFeaturesToTerraform, true)(this._iscsiFeatures.internalValue),
      storage_features: cdktf.listMapper(volumeGroupV2StorageFeaturesToTerraform, true)(this._storageFeatures.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attachment_type: {
        value: cdktf.stringToHclTerraform(this._attachmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_reference: {
        value: cdktf.stringToHclTerraform(this._clusterReference),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled_authentications: {
        value: cdktf.stringToHclTerraform(this._enabledAuthentications),
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
      is_hidden: {
        value: cdktf.booleanToHclTerraform(this._isHidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sharing_status: {
        value: cdktf.stringToHclTerraform(this._sharingStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_load_balance_vm_attachments: {
        value: cdktf.booleanToHclTerraform(this._shouldLoadBalanceVmAttachments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_prefix: {
        value: cdktf.stringToHclTerraform(this._targetPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_type: {
        value: cdktf.stringToHclTerraform(this._usageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disks: {
        value: cdktf.listMapperHcl(volumeGroupV2DisksToHclTerraform, true)(this._disks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VolumeGroupV2DisksList",
      },
      iscsi_features: {
        value: cdktf.listMapperHcl(volumeGroupV2IscsiFeaturesToHclTerraform, true)(this._iscsiFeatures.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VolumeGroupV2IscsiFeaturesList",
      },
      storage_features: {
        value: cdktf.listMapperHcl(volumeGroupV2StorageFeaturesToHclTerraform, true)(this._storageFeatures.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VolumeGroupV2StorageFeaturesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
