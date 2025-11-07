// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageProfileVsphereConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the vSphere Datastore for placing disk and VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#datastore_id StorageProfileVsphere#datastore_id}
  */
  readonly datastoreId?: string;
  /**
  * Indicates if a storage profile acts as a default storage profile for a disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#default_item StorageProfileVsphere#default_item}
  */
  readonly defaultItem: boolean | cdktf.IResolvable;
  /**
  * A human-friendly description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#description StorageProfileVsphere#description}
  */
  readonly description?: string;
  /**
  * Type of mode for the disk. Omitting this value will set it to dependent. example: dependent / independent-persistent / independent-nonpersistent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#disk_mode StorageProfileVsphere#disk_mode}
  */
  readonly diskMode?: string;
  /**
  * Disk types are specified as standard or first class, empty value is considered as standard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#disk_type StorageProfileVsphere#disk_type}
  */
  readonly diskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#id StorageProfileVsphere#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The upper bound for the I/O operations per second allocated for each virtual disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#limit_iops StorageProfileVsphere#limit_iops}
  */
  readonly limitIops?: string;
  /**
  * A human-friendly name used as an identifier in APIs that support this option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#name StorageProfileVsphere#name}
  */
  readonly name: string;
  /**
  * Type of provisioning policy for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#provisioning_type StorageProfileVsphere#provisioning_type}
  */
  readonly provisioningType?: string;
  /**
  * The Id of the region that is associated with the storage profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#region_id StorageProfileVsphere#region_id}
  */
  readonly regionId: string;
  /**
  * A specific number of shares assigned to each virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#shares StorageProfileVsphere#shares}
  */
  readonly shares?: string;
  /**
  * Indicates whether this storage profile supports encryption or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#shares_level StorageProfileVsphere#shares_level}
  */
  readonly sharesLevel?: string;
  /**
  * Id of the vSphere Storage Policy to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#storage_policy_id StorageProfileVsphere#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * Indicates whether this storage profile supports encryption or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#supports_encryption StorageProfileVsphere#supports_encryption}
  */
  readonly supportsEncryption?: boolean | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#tags StorageProfileVsphere#tags}
  */
  readonly tags?: StorageProfileVsphereTags[] | cdktf.IResolvable;
}
export interface StorageProfileVsphereLinks {
}

export function storageProfileVsphereLinksToTerraform(struct?: StorageProfileVsphereLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function storageProfileVsphereLinksToHclTerraform(struct?: StorageProfileVsphereLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StorageProfileVsphereLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageProfileVsphereLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageProfileVsphereLinks | undefined) {
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

  // hrefs - computed: true, optional: false, required: false
  public get hrefs() {
    return cdktf.Fn.tolist(this.getListAttribute('hrefs'));
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class StorageProfileVsphereLinksList extends cdktf.ComplexList {

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
  public get(index: number): StorageProfileVsphereLinksOutputReference {
    return new StorageProfileVsphereLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageProfileVsphereTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#key StorageProfileVsphere#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#value StorageProfileVsphere#value}
  */
  readonly value: string;
}

export function storageProfileVsphereTagsToTerraform(struct?: StorageProfileVsphereTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function storageProfileVsphereTagsToHclTerraform(struct?: StorageProfileVsphereTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageProfileVsphereTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageProfileVsphereTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageProfileVsphereTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class StorageProfileVsphereTagsList extends cdktf.ComplexList {
  public internalValue? : StorageProfileVsphereTags[] | cdktf.IResolvable

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
  public get(index: number): StorageProfileVsphereTagsOutputReference {
    return new StorageProfileVsphereTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere vra_storage_profile_vsphere}
*/
export class StorageProfileVsphere extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_storage_profile_vsphere";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageProfileVsphere resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageProfileVsphere to import
  * @param importFromId The id of the existing StorageProfileVsphere that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageProfileVsphere to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_storage_profile_vsphere", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile_vsphere vra_storage_profile_vsphere} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageProfileVsphereConfig
  */
  public constructor(scope: Construct, id: string, config: StorageProfileVsphereConfig) {
    super(scope, id, {
      terraformResourceType: 'vra_storage_profile_vsphere',
      terraformGeneratorMetadata: {
        providerName: 'vra',
        providerVersion: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datastoreId = config.datastoreId;
    this._defaultItem = config.defaultItem;
    this._description = config.description;
    this._diskMode = config.diskMode;
    this._diskType = config.diskType;
    this._id = config.id;
    this._limitIops = config.limitIops;
    this._name = config.name;
    this._provisioningType = config.provisioningType;
    this._regionId = config.regionId;
    this._shares = config.shares;
    this._sharesLevel = config.sharesLevel;
    this._storagePolicyId = config.storagePolicyId;
    this._supportsEncryption = config.supportsEncryption;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_account_id - computed: true, optional: false, required: false
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // datastore_id - computed: false, optional: true, required: false
  private _datastoreId?: string; 
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }
  public set datastoreId(value: string) {
    this._datastoreId = value;
  }
  public resetDatastoreId() {
    this._datastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreIdInput() {
    return this._datastoreId;
  }

  // default_item - computed: false, optional: false, required: true
  private _defaultItem?: boolean | cdktf.IResolvable; 
  public get defaultItem() {
    return this.getBooleanAttribute('default_item');
  }
  public set defaultItem(value: boolean | cdktf.IResolvable) {
    this._defaultItem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultItemInput() {
    return this._defaultItem;
  }

  // description - computed: false, optional: true, required: false
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

  // disk_mode - computed: true, optional: true, required: false
  private _diskMode?: string; 
  public get diskMode() {
    return this.getStringAttribute('disk_mode');
  }
  public set diskMode(value: string) {
    this._diskMode = value;
  }
  public resetDiskMode() {
    this._diskMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskModeInput() {
    return this._diskMode;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // external_region_id - computed: true, optional: false, required: false
  public get externalRegionId() {
    return this.getStringAttribute('external_region_id');
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

  // limit_iops - computed: false, optional: true, required: false
  private _limitIops?: string; 
  public get limitIops() {
    return this.getStringAttribute('limit_iops');
  }
  public set limitIops(value: string) {
    this._limitIops = value;
  }
  public resetLimitIops() {
    this._limitIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitIopsInput() {
    return this._limitIops;
  }

  // links - computed: true, optional: false, required: false
  private _links = new StorageProfileVsphereLinksList(this, "links", true);
  public get links() {
    return this._links;
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

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // provisioning_type - computed: false, optional: true, required: false
  private _provisioningType?: string; 
  public get provisioningType() {
    return this.getStringAttribute('provisioning_type');
  }
  public set provisioningType(value: string) {
    this._provisioningType = value;
  }
  public resetProvisioningType() {
    this._provisioningType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningTypeInput() {
    return this._provisioningType;
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // shares - computed: false, optional: true, required: false
  private _shares?: string; 
  public get shares() {
    return this.getStringAttribute('shares');
  }
  public set shares(value: string) {
    this._shares = value;
  }
  public resetShares() {
    this._shares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharesInput() {
    return this._shares;
  }

  // shares_level - computed: false, optional: true, required: false
  private _sharesLevel?: string; 
  public get sharesLevel() {
    return this.getStringAttribute('shares_level');
  }
  public set sharesLevel(value: string) {
    this._sharesLevel = value;
  }
  public resetSharesLevel() {
    this._sharesLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharesLevelInput() {
    return this._sharesLevel;
  }

  // storage_policy_id - computed: false, optional: true, required: false
  private _storagePolicyId?: string; 
  public get storagePolicyId() {
    return this.getStringAttribute('storage_policy_id');
  }
  public set storagePolicyId(value: string) {
    this._storagePolicyId = value;
  }
  public resetStoragePolicyId() {
    this._storagePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyIdInput() {
    return this._storagePolicyId;
  }

  // supports_encryption - computed: false, optional: true, required: false
  private _supportsEncryption?: boolean | cdktf.IResolvable; 
  public get supportsEncryption() {
    return this.getBooleanAttribute('supports_encryption');
  }
  public set supportsEncryption(value: boolean | cdktf.IResolvable) {
    this._supportsEncryption = value;
  }
  public resetSupportsEncryption() {
    this._supportsEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsEncryptionInput() {
    return this._supportsEncryption;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new StorageProfileVsphereTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: StorageProfileVsphereTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datastore_id: cdktf.stringToTerraform(this._datastoreId),
      default_item: cdktf.booleanToTerraform(this._defaultItem),
      description: cdktf.stringToTerraform(this._description),
      disk_mode: cdktf.stringToTerraform(this._diskMode),
      disk_type: cdktf.stringToTerraform(this._diskType),
      id: cdktf.stringToTerraform(this._id),
      limit_iops: cdktf.stringToTerraform(this._limitIops),
      name: cdktf.stringToTerraform(this._name),
      provisioning_type: cdktf.stringToTerraform(this._provisioningType),
      region_id: cdktf.stringToTerraform(this._regionId),
      shares: cdktf.stringToTerraform(this._shares),
      shares_level: cdktf.stringToTerraform(this._sharesLevel),
      storage_policy_id: cdktf.stringToTerraform(this._storagePolicyId),
      supports_encryption: cdktf.booleanToTerraform(this._supportsEncryption),
      tags: cdktf.listMapper(storageProfileVsphereTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datastore_id: {
        value: cdktf.stringToHclTerraform(this._datastoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_item: {
        value: cdktf.booleanToHclTerraform(this._defaultItem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_mode: {
        value: cdktf.stringToHclTerraform(this._diskMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_type: {
        value: cdktf.stringToHclTerraform(this._diskType),
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
      limit_iops: {
        value: cdktf.stringToHclTerraform(this._limitIops),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioning_type: {
        value: cdktf.stringToHclTerraform(this._provisioningType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shares: {
        value: cdktf.stringToHclTerraform(this._shares),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shares_level: {
        value: cdktf.stringToHclTerraform(this._sharesLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_policy_id: {
        value: cdktf.stringToHclTerraform(this._storagePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supports_encryption: {
        value: cdktf.booleanToHclTerraform(this._supportsEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(storageProfileVsphereTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StorageProfileVsphereTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
