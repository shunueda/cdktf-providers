// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_export_images
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CvmExportImagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * COS bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_export_images#bucket_name CvmExportImages#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Check whether the image can be exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_export_images#dry_run CvmExportImages#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Format of the exported image file. Valid values: RAW, QCOW2, VHD and VMDK. Default value: RAW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_export_images#export_format CvmExportImages#export_format}
  */
  readonly exportFormat?: string;
  /**
  * Prefix of exported file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_export_images#file_name_prefix CvmExportImages#file_name_prefix}
  */
  readonly fileNamePrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_export_images#id CvmExportImages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_export_images#image_id CvmExportImages#image_id}
  */
  readonly imageId: string;
  /**
  * Whether to export only the system disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_export_images#only_export_root_disk CvmExportImages#only_export_root_disk}
  */
  readonly onlyExportRootDisk?: boolean | cdktf.IResolvable;
  /**
  * Role name (Default: CVM_QcsRole). Before exporting the images, make sure the role exists, and it has write permission to COS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_export_images#role_name CvmExportImages#role_name}
  */
  readonly roleName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_export_images tencentcloud_cvm_export_images}
*/
export class CvmExportImages extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cvm_export_images";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CvmExportImages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CvmExportImages to import
  * @param importFromId The id of the existing CvmExportImages that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_export_images#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CvmExportImages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cvm_export_images", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_export_images tencentcloud_cvm_export_images} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CvmExportImagesConfig
  */
  public constructor(scope: Construct, id: string, config: CvmExportImagesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cvm_export_images',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketName = config.bucketName;
    this._dryRun = config.dryRun;
    this._exportFormat = config.exportFormat;
    this._fileNamePrefix = config.fileNamePrefix;
    this._id = config.id;
    this._imageId = config.imageId;
    this._onlyExportRootDisk = config.onlyExportRootDisk;
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // export_format - computed: false, optional: true, required: false
  private _exportFormat?: string; 
  public get exportFormat() {
    return this.getStringAttribute('export_format');
  }
  public set exportFormat(value: string) {
    this._exportFormat = value;
  }
  public resetExportFormat() {
    this._exportFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportFormatInput() {
    return this._exportFormat;
  }

  // file_name_prefix - computed: false, optional: false, required: true
  private _fileNamePrefix?: string; 
  public get fileNamePrefix() {
    return this.getStringAttribute('file_name_prefix');
  }
  public set fileNamePrefix(value: string) {
    this._fileNamePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNamePrefixInput() {
    return this._fileNamePrefix;
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

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // only_export_root_disk - computed: false, optional: true, required: false
  private _onlyExportRootDisk?: boolean | cdktf.IResolvable; 
  public get onlyExportRootDisk() {
    return this.getBooleanAttribute('only_export_root_disk');
  }
  public set onlyExportRootDisk(value: boolean | cdktf.IResolvable) {
    this._onlyExportRootDisk = value;
  }
  public resetOnlyExportRootDisk() {
    this._onlyExportRootDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyExportRootDiskInput() {
    return this._onlyExportRootDisk;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      export_format: cdktf.stringToTerraform(this._exportFormat),
      file_name_prefix: cdktf.stringToTerraform(this._fileNamePrefix),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      only_export_root_disk: cdktf.booleanToTerraform(this._onlyExportRootDisk),
      role_name: cdktf.stringToTerraform(this._roleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      export_format: {
        value: cdktf.stringToHclTerraform(this._exportFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_name_prefix: {
        value: cdktf.stringToHclTerraform(this._fileNamePrefix),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      only_export_root_disk: {
        value: cdktf.booleanToHclTerraform(this._onlyExportRootDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
