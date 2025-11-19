// https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/image_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitImageV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Additional filtering options based on image properties. Can be used independently or in conjunction with `name` or `name_regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/image_v2#filter DataStackitImageV2#filter}
  */
  readonly filter?: DataStackitImageV2Filter;
  /**
  * Image ID to fetch directly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/image_v2#image_id DataStackitImageV2#image_id}
  */
  readonly imageId?: string;
  /**
  * Exact image name to match. Optionally applies a `filter` block to further refine results in case multiple images share the same name. The first match is returned, optionally sorted by name in ascending order. Cannot be used together with `name_regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/image_v2#name DataStackitImageV2#name}
  */
  readonly name?: string;
  /**
  * Regular expression to match against image names. Optionally applies a `filter` block to narrow down results when multiple image names match the regex. The first match is returned, optionally sorted by name in ascending order. Cannot be used together with `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/image_v2#name_regex DataStackitImageV2#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * STACKIT project ID to which the image is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/image_v2#project_id DataStackitImageV2#project_id}
  */
  readonly projectId: string;
  /**
  * If set to `true`, images are sorted in ascending lexicographical order by image name (such as `Ubuntu 18.04`, `Ubuntu 20.04`, `Ubuntu 22.04`) before selecting the first match. Defaults to `false` (descending such as `Ubuntu 22.04`, `Ubuntu 20.04`, `Ubuntu 18.04`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/image_v2#sort_ascending DataStackitImageV2#sort_ascending}
  */
  readonly sortAscending?: boolean | cdktf.IResolvable;
}
export interface DataStackitImageV2Checksum {
}

export function dataStackitImageV2ChecksumToTerraform(struct?: DataStackitImageV2Checksum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitImageV2ChecksumToHclTerraform(struct?: DataStackitImageV2Checksum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitImageV2ChecksumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitImageV2Checksum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitImageV2Checksum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }
}
export interface DataStackitImageV2ConfigA {
}

export function dataStackitImageV2ConfigAToTerraform(struct?: DataStackitImageV2ConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitImageV2ConfigAToHclTerraform(struct?: DataStackitImageV2ConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitImageV2ConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitImageV2ConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitImageV2ConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_menu - computed: true, optional: false, required: false
  public get bootMenu() {
    return this.getBooleanAttribute('boot_menu');
  }

  // cdrom_bus - computed: true, optional: false, required: false
  public get cdromBus() {
    return this.getStringAttribute('cdrom_bus');
  }

  // disk_bus - computed: true, optional: false, required: false
  public get diskBus() {
    return this.getStringAttribute('disk_bus');
  }

  // nic_model - computed: true, optional: false, required: false
  public get nicModel() {
    return this.getStringAttribute('nic_model');
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // operating_system_distro - computed: true, optional: false, required: false
  public get operatingSystemDistro() {
    return this.getStringAttribute('operating_system_distro');
  }

  // operating_system_version - computed: true, optional: false, required: false
  public get operatingSystemVersion() {
    return this.getStringAttribute('operating_system_version');
  }

  // rescue_bus - computed: true, optional: false, required: false
  public get rescueBus() {
    return this.getStringAttribute('rescue_bus');
  }

  // rescue_device - computed: true, optional: false, required: false
  public get rescueDevice() {
    return this.getStringAttribute('rescue_device');
  }

  // secure_boot - computed: true, optional: false, required: false
  public get secureBoot() {
    return this.getBooleanAttribute('secure_boot');
  }

  // uefi - computed: true, optional: false, required: false
  public get uefi() {
    return this.getBooleanAttribute('uefi');
  }

  // video_model - computed: true, optional: false, required: false
  public get videoModel() {
    return this.getStringAttribute('video_model');
  }

  // virtio_scsi - computed: true, optional: false, required: false
  public get virtioScsi() {
    return this.getBooleanAttribute('virtio_scsi');
  }
}
export interface DataStackitImageV2Filter {
  /**
  * Filter images by operating system distribution. For example: `ubuntu`, `ubuntu-arm64`, `debian`, `rhel`, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/image_v2#distro DataStackitImageV2#distro}
  */
  readonly distro?: string;
  /**
  * Filter images by operating system type, such as `linux` or `windows`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/image_v2#os DataStackitImageV2#os}
  */
  readonly os?: string;
  /**
  * Filter images with Secure Boot support. Set to `true` to match images that support Secure Boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/image_v2#secure_boot DataStackitImageV2#secure_boot}
  */
  readonly secureBoot?: boolean | cdktf.IResolvable;
  /**
  * Filter images based on UEFI support. Set to `true` to match images that support UEFI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/image_v2#uefi DataStackitImageV2#uefi}
  */
  readonly uefi?: boolean | cdktf.IResolvable;
  /**
  * Filter images by OS distribution version, such as `22.04`, `11`, or `9.1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/image_v2#version DataStackitImageV2#version}
  */
  readonly version?: string;
}

export function dataStackitImageV2FilterToTerraform(struct?: DataStackitImageV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distro: cdktf.stringToTerraform(struct!.distro),
    os: cdktf.stringToTerraform(struct!.os),
    secure_boot: cdktf.booleanToTerraform(struct!.secureBoot),
    uefi: cdktf.booleanToTerraform(struct!.uefi),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataStackitImageV2FilterToHclTerraform(struct?: DataStackitImageV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distro: {
      value: cdktf.stringToHclTerraform(struct!.distro),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.secureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uefi: {
      value: cdktf.booleanToHclTerraform(struct!.uefi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStackitImageV2FilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitImageV2Filter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distro !== undefined) {
      hasAnyValues = true;
      internalValueResult.distro = this._distro;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._secureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureBoot = this._secureBoot;
    }
    if (this._uefi !== undefined) {
      hasAnyValues = true;
      internalValueResult.uefi = this._uefi;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitImageV2Filter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distro = undefined;
      this._os = undefined;
      this._secureBoot = undefined;
      this._uefi = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distro = value.distro;
      this._os = value.os;
      this._secureBoot = value.secureBoot;
      this._uefi = value.uefi;
      this._version = value.version;
    }
  }

  // distro - computed: false, optional: true, required: false
  private _distro?: string; 
  public get distro() {
    return this.getStringAttribute('distro');
  }
  public set distro(value: string) {
    this._distro = value;
  }
  public resetDistro() {
    this._distro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distroInput() {
    return this._distro;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // secure_boot - computed: false, optional: true, required: false
  private _secureBoot?: boolean | cdktf.IResolvable; 
  public get secureBoot() {
    return this.getBooleanAttribute('secure_boot');
  }
  public set secureBoot(value: boolean | cdktf.IResolvable) {
    this._secureBoot = value;
  }
  public resetSecureBoot() {
    this._secureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureBootInput() {
    return this._secureBoot;
  }

  // uefi - computed: false, optional: true, required: false
  private _uefi?: boolean | cdktf.IResolvable; 
  public get uefi() {
    return this.getBooleanAttribute('uefi');
  }
  public set uefi(value: boolean | cdktf.IResolvable) {
    this._uefi = value;
  }
  public resetUefi() {
    this._uefi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uefiInput() {
    return this._uefi;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/image_v2 stackit_image_v2}
*/
export class DataStackitImageV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_image_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitImageV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitImageV2 to import
  * @param importFromId The id of the existing DataStackitImageV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/image_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitImageV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_image_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/image_v2 stackit_image_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitImageV2Config
  */
  public constructor(scope: Construct, id: string, config: DataStackitImageV2Config) {
    super(scope, id, {
      terraformResourceType: 'stackit_image_v2',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
    this._imageId = config.imageId;
    this._name = config.name;
    this._nameRegex = config.nameRegex;
    this._projectId = config.projectId;
    this._sortAscending = config.sortAscending;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum - computed: true, optional: false, required: false
  private _checksum = new DataStackitImageV2ChecksumOutputReference(this, "checksum");
  public get checksum() {
    return this._checksum;
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataStackitImageV2ConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // disk_format - computed: true, optional: false, required: false
  public get diskFormat() {
    return this.getStringAttribute('disk_format');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataStackitImageV2FilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataStackitImageV2Filter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // min_disk_size - computed: true, optional: false, required: false
  public get minDiskSize() {
    return this.getNumberAttribute('min_disk_size');
  }

  // min_ram - computed: true, optional: false, required: false
  public get minRam() {
    return this.getNumberAttribute('min_ram');
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // protected - computed: true, optional: false, required: false
  public get protected() {
    return this.getBooleanAttribute('protected');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // sort_ascending - computed: false, optional: true, required: false
  private _sortAscending?: boolean | cdktf.IResolvable; 
  public get sortAscending() {
    return this.getBooleanAttribute('sort_ascending');
  }
  public set sortAscending(value: boolean | cdktf.IResolvable) {
    this._sortAscending = value;
  }
  public resetSortAscending() {
    this._sortAscending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortAscendingInput() {
    return this._sortAscending;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataStackitImageV2FilterToTerraform(this._filter.internalValue),
      image_id: cdktf.stringToTerraform(this._imageId),
      name: cdktf.stringToTerraform(this._name),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      project_id: cdktf.stringToTerraform(this._projectId),
      sort_ascending: cdktf.booleanToTerraform(this._sortAscending),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataStackitImageV2FilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataStackitImageV2Filter",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_ascending: {
        value: cdktf.booleanToHclTerraform(this._sortAscending),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
