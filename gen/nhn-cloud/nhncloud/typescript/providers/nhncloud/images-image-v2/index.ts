// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagesImageV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#container_format ImagesImageV2#container_format}
  */
  readonly containerFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#decompress ImagesImageV2#decompress}
  */
  readonly decompress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#disk_format ImagesImageV2#disk_format}
  */
  readonly diskFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#hidden ImagesImageV2#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#id ImagesImageV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#image_cache_path ImagesImageV2#image_cache_path}
  */
  readonly imageCachePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#image_id ImagesImageV2#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#image_source_password ImagesImageV2#image_source_password}
  */
  readonly imageSourcePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#image_source_url ImagesImageV2#image_source_url}
  */
  readonly imageSourceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#image_source_username ImagesImageV2#image_source_username}
  */
  readonly imageSourceUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#local_file_path ImagesImageV2#local_file_path}
  */
  readonly localFilePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#min_disk_gb ImagesImageV2#min_disk_gb}
  */
  readonly minDiskGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#min_ram_mb ImagesImageV2#min_ram_mb}
  */
  readonly minRamMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#name ImagesImageV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#properties ImagesImageV2#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#protected ImagesImageV2#protected}
  */
  readonly protected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#region ImagesImageV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#tags ImagesImageV2#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#verify_checksum ImagesImageV2#verify_checksum}
  */
  readonly verifyChecksum?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#visibility ImagesImageV2#visibility}
  */
  readonly visibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#web_download ImagesImageV2#web_download}
  */
  readonly webDownload?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#timeouts ImagesImageV2#timeouts}
  */
  readonly timeouts?: ImagesImageV2Timeouts;
}
export interface ImagesImageV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#create ImagesImageV2#create}
  */
  readonly create?: string;
}

export function imagesImageV2TimeoutsToTerraform(struct?: ImagesImageV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function imagesImageV2TimeoutsToHclTerraform(struct?: ImagesImageV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagesImageV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImagesImageV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagesImageV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2 nhncloud_images_image_v2}
*/
export class ImagesImageV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_images_image_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImagesImageV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImagesImageV2 to import
  * @param importFromId The id of the existing ImagesImageV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImagesImageV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_images_image_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/images_image_v2 nhncloud_images_image_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagesImageV2Config
  */
  public constructor(scope: Construct, id: string, config: ImagesImageV2Config) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_images_image_v2',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._containerFormat = config.containerFormat;
    this._decompress = config.decompress;
    this._diskFormat = config.diskFormat;
    this._hidden = config.hidden;
    this._id = config.id;
    this._imageCachePath = config.imageCachePath;
    this._imageId = config.imageId;
    this._imageSourcePassword = config.imageSourcePassword;
    this._imageSourceUrl = config.imageSourceUrl;
    this._imageSourceUsername = config.imageSourceUsername;
    this._localFilePath = config.localFilePath;
    this._minDiskGb = config.minDiskGb;
    this._minRamMb = config.minRamMb;
    this._name = config.name;
    this._properties = config.properties;
    this._protected = config.protected;
    this._region = config.region;
    this._tags = config.tags;
    this._verifyChecksum = config.verifyChecksum;
    this._visibility = config.visibility;
    this._webDownload = config.webDownload;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // container_format - computed: false, optional: false, required: true
  private _containerFormat?: string; 
  public get containerFormat() {
    return this.getStringAttribute('container_format');
  }
  public set containerFormat(value: string) {
    this._containerFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerFormatInput() {
    return this._containerFormat;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // decompress - computed: false, optional: true, required: false
  private _decompress?: boolean | cdktf.IResolvable; 
  public get decompress() {
    return this.getBooleanAttribute('decompress');
  }
  public set decompress(value: boolean | cdktf.IResolvable) {
    this._decompress = value;
  }
  public resetDecompress() {
    this._decompress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressInput() {
    return this._decompress;
  }

  // disk_format - computed: false, optional: false, required: true
  private _diskFormat?: string; 
  public get diskFormat() {
    return this.getStringAttribute('disk_format');
  }
  public set diskFormat(value: string) {
    this._diskFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskFormatInput() {
    return this._diskFormat;
  }

  // file - computed: true, optional: false, required: false
  public get file() {
    return this.getStringAttribute('file');
  }

  // hidden - computed: false, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
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

  // image_cache_path - computed: false, optional: true, required: false
  private _imageCachePath?: string; 
  public get imageCachePath() {
    return this.getStringAttribute('image_cache_path');
  }
  public set imageCachePath(value: string) {
    this._imageCachePath = value;
  }
  public resetImageCachePath() {
    this._imageCachePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageCachePathInput() {
    return this._imageCachePath;
  }

  // image_id - computed: true, optional: true, required: false
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

  // image_source_password - computed: false, optional: true, required: false
  private _imageSourcePassword?: string; 
  public get imageSourcePassword() {
    return this.getStringAttribute('image_source_password');
  }
  public set imageSourcePassword(value: string) {
    this._imageSourcePassword = value;
  }
  public resetImageSourcePassword() {
    this._imageSourcePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSourcePasswordInput() {
    return this._imageSourcePassword;
  }

  // image_source_url - computed: false, optional: true, required: false
  private _imageSourceUrl?: string; 
  public get imageSourceUrl() {
    return this.getStringAttribute('image_source_url');
  }
  public set imageSourceUrl(value: string) {
    this._imageSourceUrl = value;
  }
  public resetImageSourceUrl() {
    this._imageSourceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSourceUrlInput() {
    return this._imageSourceUrl;
  }

  // image_source_username - computed: false, optional: true, required: false
  private _imageSourceUsername?: string; 
  public get imageSourceUsername() {
    return this.getStringAttribute('image_source_username');
  }
  public set imageSourceUsername(value: string) {
    this._imageSourceUsername = value;
  }
  public resetImageSourceUsername() {
    this._imageSourceUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSourceUsernameInput() {
    return this._imageSourceUsername;
  }

  // local_file_path - computed: false, optional: true, required: false
  private _localFilePath?: string; 
  public get localFilePath() {
    return this.getStringAttribute('local_file_path');
  }
  public set localFilePath(value: string) {
    this._localFilePath = value;
  }
  public resetLocalFilePath() {
    this._localFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localFilePathInput() {
    return this._localFilePath;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // min_disk_gb - computed: false, optional: true, required: false
  private _minDiskGb?: number; 
  public get minDiskGb() {
    return this.getNumberAttribute('min_disk_gb');
  }
  public set minDiskGb(value: number) {
    this._minDiskGb = value;
  }
  public resetMinDiskGb() {
    this._minDiskGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDiskGbInput() {
    return this._minDiskGb;
  }

  // min_ram_mb - computed: false, optional: true, required: false
  private _minRamMb?: number; 
  public get minRamMb() {
    return this.getNumberAttribute('min_ram_mb');
  }
  public set minRamMb(value: number) {
    this._minRamMb = value;
  }
  public resetMinRamMb() {
    this._minRamMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRamMbInput() {
    return this._minRamMb;
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // properties - computed: true, optional: true, required: false
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

  // protected - computed: false, optional: true, required: false
  private _protected?: boolean | cdktf.IResolvable; 
  public get protected() {
    return this.getBooleanAttribute('protected');
  }
  public set protected(value: boolean | cdktf.IResolvable) {
    this._protected = value;
  }
  public resetProtected() {
    this._protected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedInput() {
    return this._protected;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // update_at - computed: true, optional: false, required: false
  public get updateAt() {
    return this.getStringAttribute('update_at');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // verify_checksum - computed: false, optional: true, required: false
  private _verifyChecksum?: boolean | cdktf.IResolvable; 
  public get verifyChecksum() {
    return this.getBooleanAttribute('verify_checksum');
  }
  public set verifyChecksum(value: boolean | cdktf.IResolvable) {
    this._verifyChecksum = value;
  }
  public resetVerifyChecksum() {
    this._verifyChecksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyChecksumInput() {
    return this._verifyChecksum;
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

  // web_download - computed: false, optional: true, required: false
  private _webDownload?: boolean | cdktf.IResolvable; 
  public get webDownload() {
    return this.getBooleanAttribute('web_download');
  }
  public set webDownload(value: boolean | cdktf.IResolvable) {
    this._webDownload = value;
  }
  public resetWebDownload() {
    this._webDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webDownloadInput() {
    return this._webDownload;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ImagesImageV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ImagesImageV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_format: cdktf.stringToTerraform(this._containerFormat),
      decompress: cdktf.booleanToTerraform(this._decompress),
      disk_format: cdktf.stringToTerraform(this._diskFormat),
      hidden: cdktf.booleanToTerraform(this._hidden),
      id: cdktf.stringToTerraform(this._id),
      image_cache_path: cdktf.stringToTerraform(this._imageCachePath),
      image_id: cdktf.stringToTerraform(this._imageId),
      image_source_password: cdktf.stringToTerraform(this._imageSourcePassword),
      image_source_url: cdktf.stringToTerraform(this._imageSourceUrl),
      image_source_username: cdktf.stringToTerraform(this._imageSourceUsername),
      local_file_path: cdktf.stringToTerraform(this._localFilePath),
      min_disk_gb: cdktf.numberToTerraform(this._minDiskGb),
      min_ram_mb: cdktf.numberToTerraform(this._minRamMb),
      name: cdktf.stringToTerraform(this._name),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      protected: cdktf.booleanToTerraform(this._protected),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      verify_checksum: cdktf.booleanToTerraform(this._verifyChecksum),
      visibility: cdktf.stringToTerraform(this._visibility),
      web_download: cdktf.booleanToTerraform(this._webDownload),
      timeouts: imagesImageV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_format: {
        value: cdktf.stringToHclTerraform(this._containerFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decompress: {
        value: cdktf.booleanToHclTerraform(this._decompress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_format: {
        value: cdktf.stringToHclTerraform(this._diskFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hidden: {
        value: cdktf.booleanToHclTerraform(this._hidden),
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
      image_cache_path: {
        value: cdktf.stringToHclTerraform(this._imageCachePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_source_password: {
        value: cdktf.stringToHclTerraform(this._imageSourcePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_source_url: {
        value: cdktf.stringToHclTerraform(this._imageSourceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_source_username: {
        value: cdktf.stringToHclTerraform(this._imageSourceUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_file_path: {
        value: cdktf.stringToHclTerraform(this._localFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_disk_gb: {
        value: cdktf.numberToHclTerraform(this._minDiskGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_ram_mb: {
        value: cdktf.numberToHclTerraform(this._minRamMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      protected: {
        value: cdktf.booleanToHclTerraform(this._protected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      verify_checksum: {
        value: cdktf.booleanToHclTerraform(this._verifyChecksum),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_download: {
        value: cdktf.booleanToHclTerraform(this._webDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: imagesImageV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImagesImageV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
