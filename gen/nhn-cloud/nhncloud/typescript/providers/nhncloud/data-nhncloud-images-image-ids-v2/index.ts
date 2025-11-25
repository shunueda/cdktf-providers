// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNhncloudImagesImageIdsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2#id DataNhncloudImagesImageIdsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2#member_status DataNhncloudImagesImageIdsV2#member_status}
  */
  readonly memberStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2#name DataNhncloudImagesImageIdsV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2#name_regex DataNhncloudImagesImageIdsV2#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2#owner DataNhncloudImagesImageIdsV2#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2#properties DataNhncloudImagesImageIdsV2#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2#region DataNhncloudImagesImageIdsV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2#size_max DataNhncloudImagesImageIdsV2#size_max}
  */
  readonly sizeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2#size_min DataNhncloudImagesImageIdsV2#size_min}
  */
  readonly sizeMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2#sort DataNhncloudImagesImageIdsV2#sort}
  */
  readonly sort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2#sort_direction DataNhncloudImagesImageIdsV2#sort_direction}
  */
  readonly sortDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2#sort_key DataNhncloudImagesImageIdsV2#sort_key}
  */
  readonly sortKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2#tag DataNhncloudImagesImageIdsV2#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2#tags DataNhncloudImagesImageIdsV2#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2#visibility DataNhncloudImagesImageIdsV2#visibility}
  */
  readonly visibility?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2 nhncloud_images_image_ids_v2}
*/
export class DataNhncloudImagesImageIdsV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_images_image_ids_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNhncloudImagesImageIdsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNhncloudImagesImageIdsV2 to import
  * @param importFromId The id of the existing DataNhncloudImagesImageIdsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNhncloudImagesImageIdsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_images_image_ids_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/images_image_ids_v2 nhncloud_images_image_ids_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNhncloudImagesImageIdsV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataNhncloudImagesImageIdsV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_images_image_ids_v2',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.7',
        providerVersionConstraint: '1.0.7'
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
    this._memberStatus = config.memberStatus;
    this._name = config.name;
    this._nameRegex = config.nameRegex;
    this._owner = config.owner;
    this._properties = config.properties;
    this._region = config.region;
    this._sizeMax = config.sizeMax;
    this._sizeMin = config.sizeMin;
    this._sort = config.sort;
    this._sortDirection = config.sortDirection;
    this._sortKey = config.sortKey;
    this._tag = config.tag;
    this._tags = config.tags;
    this._visibility = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
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

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
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

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // sort_direction - computed: false, optional: true, required: false
  private _sortDirection?: string; 
  public get sortDirection() {
    return this.getStringAttribute('sort_direction');
  }
  public set sortDirection(value: string) {
    this._sortDirection = value;
  }
  public resetSortDirection() {
    this._sortDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDirectionInput() {
    return this._sortDirection;
  }

  // sort_key - computed: false, optional: true, required: false
  private _sortKey?: string; 
  public get sortKey() {
    return this.getStringAttribute('sort_key');
  }
  public set sortKey(value: string) {
    this._sortKey = value;
  }
  public resetSortKey() {
    this._sortKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortKeyInput() {
    return this._sortKey;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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
      id: cdktf.stringToTerraform(this._id),
      member_status: cdktf.stringToTerraform(this._memberStatus),
      name: cdktf.stringToTerraform(this._name),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      owner: cdktf.stringToTerraform(this._owner),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      region: cdktf.stringToTerraform(this._region),
      size_max: cdktf.numberToTerraform(this._sizeMax),
      size_min: cdktf.numberToTerraform(this._sizeMin),
      sort: cdktf.stringToTerraform(this._sort),
      sort_direction: cdktf.stringToTerraform(this._sortDirection),
      sort_key: cdktf.stringToTerraform(this._sortKey),
      tag: cdktf.stringToTerraform(this._tag),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      visibility: cdktf.stringToTerraform(this._visibility),
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
      member_status: {
        value: cdktf.stringToHclTerraform(this._memberStatus),
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
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
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
      sort: {
        value: cdktf.stringToHclTerraform(this._sort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_direction: {
        value: cdktf.stringToHclTerraform(this._sortDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_key: {
        value: cdktf.stringToHclTerraform(this._sortKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
