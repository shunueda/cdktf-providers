// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/images_image_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudImagesImageV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/images_image_v2#most_recent DataOpentelekomcloudImagesImageV2#most_recent}
  */
  readonly mostRecent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/images_image_v2#name DataOpentelekomcloudImagesImageV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/images_image_v2#name_regex DataOpentelekomcloudImagesImageV2#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/images_image_v2#owner DataOpentelekomcloudImagesImageV2#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/images_image_v2#size_max DataOpentelekomcloudImagesImageV2#size_max}
  */
  readonly sizeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/images_image_v2#size_min DataOpentelekomcloudImagesImageV2#size_min}
  */
  readonly sizeMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/images_image_v2#sort_direction DataOpentelekomcloudImagesImageV2#sort_direction}
  */
  readonly sortDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/images_image_v2#sort_key DataOpentelekomcloudImagesImageV2#sort_key}
  */
  readonly sortKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/images_image_v2#tag DataOpentelekomcloudImagesImageV2#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/images_image_v2#visibility DataOpentelekomcloudImagesImageV2#visibility}
  */
  readonly visibility?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/images_image_v2 opentelekomcloud_images_image_v2}
*/
export class DataOpentelekomcloudImagesImageV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_images_image_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpentelekomcloudImagesImageV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpentelekomcloudImagesImageV2 to import
  * @param importFromId The id of the existing DataOpentelekomcloudImagesImageV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/images_image_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpentelekomcloudImagesImageV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_images_image_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/images_image_v2 opentelekomcloud_images_image_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudImagesImageV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudImagesImageV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_images_image_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._mostRecent = config.mostRecent;
    this._name = config.name;
    this._nameRegex = config.nameRegex;
    this._owner = config.owner;
    this._sizeMax = config.sizeMax;
    this._sizeMin = config.sizeMin;
    this._sortDirection = config.sortDirection;
    this._sortKey = config.sortKey;
    this._tag = config.tag;
    this._visibility = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_id - computed: true, optional: false, required: false
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }

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

  // data_origin - computed: true, optional: false, required: false
  public get dataOrigin() {
    return this.getStringAttribute('data_origin');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk_format - computed: true, optional: false, required: false
  public get diskFormat() {
    return this.getStringAttribute('disk_format');
  }

  // file - computed: true, optional: false, required: false
  public get file() {
    return this.getStringAttribute('file');
  }

  // hw_firmware_type - computed: true, optional: false, required: false
  public get hwFirmwareType() {
    return this.getStringAttribute('hw_firmware_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_source_type - computed: true, optional: false, required: false
  public get imageSourceType() {
    return this.getStringAttribute('image_source_type');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // is_registered - computed: true, optional: false, required: false
  public get isRegistered() {
    return this.getStringAttribute('is_registered');
  }

  // login_user - computed: true, optional: false, required: false
  public get loginUser() {
    return this.getStringAttribute('login_user');
  }

  // min_disk - computed: true, optional: false, required: false
  public get minDisk() {
    return this.getNumberAttribute('min_disk');
  }

  // min_ram - computed: true, optional: false, required: false
  public get minRam() {
    return this.getNumberAttribute('min_ram');
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

  // original_image_name - computed: true, optional: false, required: false
  public get originalImageName() {
    return this.getStringAttribute('original_image_name');
  }

  // os_bit - computed: true, optional: false, required: false
  public get osBit() {
    return this.getStringAttribute('os_bit');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
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

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // protected - computed: true, optional: false, required: false
  public get protected() {
    return this.getBooleanAttribute('protected');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // support_disk_intensive - computed: true, optional: false, required: false
  public get supportDiskIntensive() {
    return this.getStringAttribute('support_disk_intensive');
  }

  // support_high_performance - computed: true, optional: false, required: false
  public get supportHighPerformance() {
    return this.getStringAttribute('support_high_performance');
  }

  // support_kvm - computed: true, optional: false, required: false
  public get supportKvm() {
    return this.getStringAttribute('support_kvm');
  }

  // support_kvm_gpu_type - computed: true, optional: false, required: false
  public get supportKvmGpuType() {
    return this.getStringAttribute('support_kvm_gpu_type');
  }

  // support_kvm_infiniband - computed: true, optional: false, required: false
  public get supportKvmInfiniband() {
    return this.getStringAttribute('support_kvm_infiniband');
  }

  // support_large_memory - computed: true, optional: false, required: false
  public get supportLargeMemory() {
    return this.getStringAttribute('support_large_memory');
  }

  // support_xen - computed: true, optional: false, required: false
  public get supportXen() {
    return this.getStringAttribute('support_xen');
  }

  // support_xen_gpu_type - computed: true, optional: false, required: false
  public get supportXenGpuType() {
    return this.getStringAttribute('support_xen_gpu_type');
  }

  // support_xen_hana - computed: true, optional: false, required: false
  public get supportXenHana() {
    return this.getStringAttribute('support_xen_hana');
  }

  // system_cmk_id - computed: true, optional: false, required: false
  public get systemCmkId() {
    return this.getStringAttribute('system_cmk_id');
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

  // virtual_env_type - computed: true, optional: false, required: false
  public get virtualEnvType() {
    return this.getStringAttribute('virtual_env_type');
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
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      name: cdktf.stringToTerraform(this._name),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      owner: cdktf.stringToTerraform(this._owner),
      size_max: cdktf.numberToTerraform(this._sizeMax),
      size_min: cdktf.numberToTerraform(this._sizeMin),
      sort_direction: cdktf.stringToTerraform(this._sortDirection),
      sort_key: cdktf.stringToTerraform(this._sortKey),
      tag: cdktf.stringToTerraform(this._tag),
      visibility: cdktf.stringToTerraform(this._visibility),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
