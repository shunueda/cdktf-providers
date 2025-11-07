// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if this storage profile is a default profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile#default_item StorageProfile#default_item}
  */
  readonly defaultItem: boolean | cdktf.IResolvable;
  /**
  * A human-friendly description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile#description StorageProfile#description}
  */
  readonly description?: string;
  /**
  * Map of storage properties that are to be applied on disk while provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile#disk_properties StorageProfile#disk_properties}
  */
  readonly diskProperties?: { [key: string]: string };
  /**
  * Map of storage placements to know where the disk is provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile#disk_target_properties StorageProfile#disk_target_properties}
  */
  readonly diskTargetProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile#id StorageProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A human-friendly name for storage profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile#name StorageProfile#name}
  */
  readonly name: string;
  /**
  * The id of the region that is associated with the storage profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile#region_id StorageProfile#region_id}
  */
  readonly regionId: string;
  /**
  * Indicates whether this storage profile supports encryption or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile#supports_encryption StorageProfile#supports_encryption}
  */
  readonly supportsEncryption?: boolean | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile#tags StorageProfile#tags}
  */
  readonly tags?: StorageProfileTags[] | cdktf.IResolvable;
}
export interface StorageProfileLinks {
}

export function storageProfileLinksToTerraform(struct?: StorageProfileLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function storageProfileLinksToHclTerraform(struct?: StorageProfileLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StorageProfileLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageProfileLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageProfileLinks | undefined) {
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

export class StorageProfileLinksList extends cdktf.ComplexList {

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
  public get(index: number): StorageProfileLinksOutputReference {
    return new StorageProfileLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageProfileTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile#key StorageProfile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile#value StorageProfile#value}
  */
  readonly value: string;
}

export function storageProfileTagsToTerraform(struct?: StorageProfileTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function storageProfileTagsToHclTerraform(struct?: StorageProfileTags | cdktf.IResolvable): any {
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

export class StorageProfileTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageProfileTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageProfileTags | cdktf.IResolvable | undefined) {
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

export class StorageProfileTagsList extends cdktf.ComplexList {
  public internalValue? : StorageProfileTags[] | cdktf.IResolvable

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
  public get(index: number): StorageProfileTagsOutputReference {
    return new StorageProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile vra_storage_profile}
*/
export class StorageProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_storage_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageProfile to import
  * @param importFromId The id of the existing StorageProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_storage_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/storage_profile vra_storage_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageProfileConfig
  */
  public constructor(scope: Construct, id: string, config: StorageProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'vra_storage_profile',
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
    this._defaultItem = config.defaultItem;
    this._description = config.description;
    this._diskProperties = config.diskProperties;
    this._diskTargetProperties = config.diskTargetProperties;
    this._id = config.id;
    this._name = config.name;
    this._regionId = config.regionId;
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

  // disk_properties - computed: false, optional: true, required: false
  private _diskProperties?: { [key: string]: string }; 
  public get diskProperties() {
    return this.getStringMapAttribute('disk_properties');
  }
  public set diskProperties(value: { [key: string]: string }) {
    this._diskProperties = value;
  }
  public resetDiskProperties() {
    this._diskProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPropertiesInput() {
    return this._diskProperties;
  }

  // disk_target_properties - computed: false, optional: true, required: false
  private _diskTargetProperties?: { [key: string]: string }; 
  public get diskTargetProperties() {
    return this.getStringMapAttribute('disk_target_properties');
  }
  public set diskTargetProperties(value: { [key: string]: string }) {
    this._diskTargetProperties = value;
  }
  public resetDiskTargetProperties() {
    this._diskTargetProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTargetPropertiesInput() {
    return this._diskTargetProperties;
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

  // links - computed: true, optional: false, required: false
  private _links = new StorageProfileLinksList(this, "links", true);
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

  // supports_encryption - computed: true, optional: true, required: false
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
  private _tags = new StorageProfileTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: StorageProfileTags[] | cdktf.IResolvable) {
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
      default_item: cdktf.booleanToTerraform(this._defaultItem),
      description: cdktf.stringToTerraform(this._description),
      disk_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._diskProperties),
      disk_target_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._diskTargetProperties),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region_id: cdktf.stringToTerraform(this._regionId),
      supports_encryption: cdktf.booleanToTerraform(this._supportsEncryption),
      tags: cdktf.listMapper(storageProfileTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      disk_properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._diskProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      disk_target_properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._diskTargetProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
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
        value: cdktf.listMapperHcl(storageProfileTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StorageProfileTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
