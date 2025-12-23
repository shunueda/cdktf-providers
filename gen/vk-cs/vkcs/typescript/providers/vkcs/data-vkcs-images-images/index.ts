// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_images
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVkcsImagesImagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Date filter to select images with created_at matching the specified criteria. Value should be either RFC3339 formatted time or time filter in format `filter:time`, where `filter` is one of [eq, neq, gt, gte, lt, lte] and `time` is RFC3339 formatted time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_images#created_at DataVkcsImagesImages#created_at}
  */
  readonly createdAt?: string;
  /**
  * The flag used to filter images based on whether they are available for virtual machine creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_images#default DataVkcsImagesImages#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * The ID of the owner of images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_images#owner DataVkcsImagesImages#owner}
  */
  readonly owner?: string;
  /**
  * Search for images with specific properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_images#properties DataVkcsImagesImages#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * The region in which to obtain the Images client. If omitted, the `region` argument of the provider is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_images#region DataVkcsImagesImages#region}
  */
  readonly region?: string;
  /**
  * The maximum size (in bytes) of images to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_images#size_max DataVkcsImagesImages#size_max}
  */
  readonly sizeMax?: number;
  /**
  * The minimum size (in bytes) of images to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_images#size_min DataVkcsImagesImages#size_min}
  */
  readonly sizeMin?: number;
  /**
  * Search for images with specific tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_images#tags DataVkcsImagesImages#tags}
  */
  readonly tags?: string[];
  /**
  * Date filter to select images with updated_at matching the specified criteria. Value should be either RFC3339 formatted time or time filter in format `filter:time`, where `filter` is one of [eq, neq, gt, gte, lt, lte] and `time` is RFC3339 formatted time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_images#updated_at DataVkcsImagesImages#updated_at}
  */
  readonly updatedAt?: string;
  /**
  * The visibility of images. Must be one of "public", "private", "community", or "shared".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_images#visibility DataVkcsImagesImages#visibility}
  */
  readonly visibility?: string;
}
export interface DataVkcsImagesImagesImages {
}

export function dataVkcsImagesImagesImagesToTerraform(struct?: DataVkcsImagesImagesImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVkcsImagesImagesImagesToHclTerraform(struct?: DataVkcsImagesImagesImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVkcsImagesImagesImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVkcsImagesImagesImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVkcsImagesImagesImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }
}

export class DataVkcsImagesImagesImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataVkcsImagesImagesImagesOutputReference {
    return new DataVkcsImagesImagesImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_images vkcs_images_images}
*/
export class DataVkcsImagesImages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_images_images";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVkcsImagesImages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVkcsImagesImages to import
  * @param importFromId The id of the existing DataVkcsImagesImages that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_images#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVkcsImagesImages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_images_images", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_images vkcs_images_images} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVkcsImagesImagesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVkcsImagesImagesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vkcs_images_images',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.2',
        providerVersionConstraint: '0.13.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdAt = config.createdAt;
    this._default = config.default;
    this._owner = config.owner;
    this._properties = config.properties;
    this._region = config.region;
    this._sizeMax = config.sizeMax;
    this._sizeMin = config.sizeMin;
    this._tags = config.tags;
    this._updatedAt = config.updatedAt;
    this._visibility = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // images - computed: true, optional: false, required: false
  private _images = new DataVkcsImagesImagesImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // size_max - computed: false, optional: true, required: false
  private _sizeMax?: number; 
  public get sizeMax() {
    return this.getNumberAttribute('size_max');
  }
  public set sizeMax(value: number) {
    this._sizeMax = value;
  }
  public resetSizeMax() {
    this._sizeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeMaxInput() {
    return this._sizeMax;
  }

  // size_min - computed: false, optional: true, required: false
  private _sizeMin?: number; 
  public get sizeMin() {
    return this.getNumberAttribute('size_min');
  }
  public set sizeMin(value: number) {
    this._sizeMin = value;
  }
  public resetSizeMin() {
    this._sizeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeMinInput() {
    return this._sizeMin;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_at: cdktf.stringToTerraform(this._createdAt),
      default: cdktf.booleanToTerraform(this._default),
      owner: cdktf.stringToTerraform(this._owner),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      region: cdktf.stringToTerraform(this._region),
      size_max: cdktf.numberToTerraform(this._sizeMax),
      size_min: cdktf.numberToTerraform(this._sizeMin),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.stringToTerraform(this._updatedAt),
      visibility: cdktf.stringToTerraform(this._visibility),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size_max: {
        value: cdktf.numberToHclTerraform(this._sizeMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size_min: {
        value: cdktf.numberToHclTerraform(this._sizeMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      updated_at: {
        value: cdktf.stringToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
