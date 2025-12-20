// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_resource_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataResourceFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * cos bucket name, which can be obtained from the GetResourceCosPath interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_resource_file#bucket_name WedataResourceFile#bucket_name}
  */
  readonly bucketName: string;
  /**
  * bundle client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_resource_file#bundle_id WedataResourceFile#bundle_id}
  */
  readonly bundleId?: string;
  /**
  * bundle client information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_resource_file#bundle_info WedataResourceFile#bundle_info}
  */
  readonly bundleInfo?: string;
  /**
  * The cos bucket area corresponding to the BucketName bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_resource_file#cos_region WedataResourceFile#cos_region}
  */
  readonly cosRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_resource_file#id WedataResourceFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path to upload resource files in the project, example value: /wedata/qxxxm/, root directory, please use/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_resource_file#parent_folder_path WedataResourceFile#parent_folder_path}
  */
  readonly parentFolderPath: string;
  /**
  * Project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_resource_file#project_id WedataResourceFile#project_id}
  */
  readonly projectId: string;
  /**
  * - You can only choose one of the two methods of uploading a file and manually filling. If both are provided, the order of values is file> manual filling value
  * -the manual filling value must be the existing cos path, /datastudio/resource/is a fixed prefix, projectId is the project ID, and a specific value needs to be passed in, parentFolderPath is the parent folder path, name is the file name, and examples of manual filling value values are: /datastudio/resource/projectId/parentFolderPath/name 
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_resource_file#resource_file WedataResourceFile#resource_file}
  */
  readonly resourceFile: string;
  /**
  * The resource file name should be consistent with the uploaded file name as much as possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_resource_file#resource_name WedataResourceFile#resource_name}
  */
  readonly resourceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_resource_file tencentcloud_wedata_resource_file}
*/
export class WedataResourceFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_resource_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataResourceFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataResourceFile to import
  * @param importFromId The id of the existing WedataResourceFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_resource_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataResourceFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_resource_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_resource_file tencentcloud_wedata_resource_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataResourceFileConfig
  */
  public constructor(scope: Construct, id: string, config: WedataResourceFileConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_resource_file',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._bundleId = config.bundleId;
    this._bundleInfo = config.bundleInfo;
    this._cosRegion = config.cosRegion;
    this._id = config.id;
    this._parentFolderPath = config.parentFolderPath;
    this._projectId = config.projectId;
    this._resourceFile = config.resourceFile;
    this._resourceName = config.resourceName;
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

  // bundle_id - computed: false, optional: true, required: false
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  public resetBundleId() {
    this._bundleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // bundle_info - computed: false, optional: true, required: false
  private _bundleInfo?: string; 
  public get bundleInfo() {
    return this.getStringAttribute('bundle_info');
  }
  public set bundleInfo(value: string) {
    this._bundleInfo = value;
  }
  public resetBundleInfo() {
    this._bundleInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleInfoInput() {
    return this._bundleInfo;
  }

  // cos_region - computed: false, optional: false, required: true
  private _cosRegion?: string; 
  public get cosRegion() {
    return this.getStringAttribute('cos_region');
  }
  public set cosRegion(value: string) {
    this._cosRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cosRegionInput() {
    return this._cosRegion;
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

  // parent_folder_path - computed: false, optional: false, required: true
  private _parentFolderPath?: string; 
  public get parentFolderPath() {
    return this.getStringAttribute('parent_folder_path');
  }
  public set parentFolderPath(value: string) {
    this._parentFolderPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentFolderPathInput() {
    return this._parentFolderPath;
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

  // resource_file - computed: false, optional: false, required: true
  private _resourceFile?: string; 
  public get resourceFile() {
    return this.getStringAttribute('resource_file');
  }
  public set resourceFile(value: string) {
    this._resourceFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFileInput() {
    return this._resourceFile;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      bundle_id: cdktf.stringToTerraform(this._bundleId),
      bundle_info: cdktf.stringToTerraform(this._bundleInfo),
      cos_region: cdktf.stringToTerraform(this._cosRegion),
      id: cdktf.stringToTerraform(this._id),
      parent_folder_path: cdktf.stringToTerraform(this._parentFolderPath),
      project_id: cdktf.stringToTerraform(this._projectId),
      resource_file: cdktf.stringToTerraform(this._resourceFile),
      resource_name: cdktf.stringToTerraform(this._resourceName),
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
      bundle_id: {
        value: cdktf.stringToHclTerraform(this._bundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bundle_info: {
        value: cdktf.stringToHclTerraform(this._bundleInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_region: {
        value: cdktf.stringToHclTerraform(this._cosRegion),
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
      parent_folder_path: {
        value: cdktf.stringToHclTerraform(this._parentFolderPath),
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
      resource_file: {
        value: cdktf.stringToHclTerraform(this._resourceFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
