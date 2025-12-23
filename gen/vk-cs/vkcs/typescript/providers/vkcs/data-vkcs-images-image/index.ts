// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVkcsImagesImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Search for an image that is available for virtual machine creation._new_since_v0.4.2_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_image#default DataVkcsImagesImage#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * The UUID of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_image#id DataVkcsImagesImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Status for adding a new member (tenant) to an image member list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_image#member_status DataVkcsImagesImage#member_status}
  */
  readonly memberStatus?: string;
  /**
  * If more than one result is returned, use the most recent image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_image#most_recent DataVkcsImagesImage#most_recent}
  */
  readonly mostRecent?: boolean | cdktf.IResolvable;
  /**
  * The name of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_image#name DataVkcsImagesImage#name}
  */
  readonly name?: string;
  /**
  * The owner (UUID) of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_image#owner DataVkcsImagesImage#owner}
  */
  readonly owner?: string;
  /**
  * A map of key/value pairs to match an image with. All specified properties must be matched. Unlike other options filtering by `properties` does by client on the result of search query. Filtering is applied if server response contains at least 2 images. In case there is only one image the `properties` ignores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_image#properties DataVkcsImagesImage#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * The region in which to obtain the Image client. An Image client is needed to create an Image that can be used with a compute instance. If omitted, the `region` argument of the provider is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_image#region DataVkcsImagesImage#region}
  */
  readonly region?: string;
  /**
  * The maximum size (in bytes) of the image to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_image#size_max DataVkcsImagesImage#size_max}
  */
  readonly sizeMax?: number;
  /**
  * The minimum size (in bytes) of the image to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_image#size_min DataVkcsImagesImage#size_min}
  */
  readonly sizeMin?: number;
  /**
  * Search for images with a specific tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_image#tag DataVkcsImagesImage#tag}
  */
  readonly tag?: string;
  /**
  * The visibility of the image. Must be one of "public", "private", "community", or "shared".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_image#visibility DataVkcsImagesImage#visibility}
  */
  readonly visibility?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_image vkcs_images_image}
*/
export class DataVkcsImagesImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_images_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVkcsImagesImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVkcsImagesImage to import
  * @param importFromId The id of the existing DataVkcsImagesImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVkcsImagesImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_images_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/images_image vkcs_images_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVkcsImagesImageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVkcsImagesImageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vkcs_images_image',
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
    this._default = config.default;
    this._id = config.id;
    this._memberStatus = config.memberStatus;
    this._mostRecent = config.mostRecent;
    this._name = config.name;
    this._owner = config.owner;
    this._properties = config.properties;
    this._region = config.region;
    this._sizeMax = config.sizeMax;
    this._sizeMin = config.sizeMin;
    this._tag = config.tag;
    this._visibility = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // container_format - computed: true, optional: false, required: false
  public get containerFormat() {
    return this.getStringAttribute('container_format');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // disk_format - computed: true, optional: false, required: false
  public get diskFormat() {
    return this.getStringAttribute('disk_format');
  }

  // file - computed: true, optional: false, required: false
  public get file() {
    return this.getStringAttribute('file');
  }

  // id - computed: false, optional: true, required: false
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

  // member_status - computed: false, optional: true, required: false
  private _memberStatus?: string; 
  public get memberStatus() {
    return this.getStringAttribute('member_status');
  }
  public set memberStatus(value: string) {
    this._memberStatus = value;
  }
  public resetMemberStatus() {
    this._memberStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberStatusInput() {
    return this._memberStatus;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // min_disk_gb - computed: true, optional: false, required: false
  public get minDiskGb() {
    return this.getNumberAttribute('min_disk_gb');
  }

  // min_ram_mb - computed: true, optional: false, required: false
  public get minRamMb() {
    return this.getNumberAttribute('min_ram_mb');
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean | cdktf.IResolvable; 
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent');
  }
  public set mostRecent(value: boolean | cdktf.IResolvable) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent;
  }

  // name - computed: false, optional: true, required: false
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

  // protected - computed: true, optional: false, required: false
  public get protected() {
    return this.getBooleanAttribute('protected');
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

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // size_bytes - computed: true, optional: false, required: false
  public get sizeBytes() {
    return this.getNumberAttribute('size_bytes');
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

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
      default: cdktf.booleanToTerraform(this._default),
      id: cdktf.stringToTerraform(this._id),
      member_status: cdktf.stringToTerraform(this._memberStatus),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      region: cdktf.stringToTerraform(this._region),
      size_max: cdktf.numberToTerraform(this._sizeMax),
      size_min: cdktf.numberToTerraform(this._sizeMin),
      tag: cdktf.stringToTerraform(this._tag),
      visibility: cdktf.stringToTerraform(this._visibility),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_status: {
        value: cdktf.stringToHclTerraform(this._memberStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      most_recent: {
        value: cdktf.booleanToHclTerraform(this._mostRecent),
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
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
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
