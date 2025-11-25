// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_resource_files
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudWedataResourceFilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Create time range. specifies the termination time in yyyy-MM-dd HH:MM:ss format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_resource_files#create_time_end DataTencentcloudWedataResourceFiles#create_time_end}
  */
  readonly createTimeEnd?: string;
  /**
  * Create time range. specifies the start time in yyyy-MM-dd HH:MM:ss format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_resource_files#create_time_start DataTencentcloudWedataResourceFiles#create_time_start}
  */
  readonly createTimeStart?: string;
  /**
  * Creator ID. obtain through the DescribeCurrentUserInfo API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_resource_files#create_user_uin DataTencentcloudWedataResourceFiles#create_user_uin}
  */
  readonly createUserUin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_resource_files#id DataTencentcloudWedataResourceFiles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Update time range. specifies the end time in yyyy-MM-dd HH:MM:ss format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_resource_files#modify_time_end DataTencentcloudWedataResourceFiles#modify_time_end}
  */
  readonly modifyTimeEnd?: string;
  /**
  * Update time range. specifies the start time in yyyy-MM-dd HH:MM:ss format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_resource_files#modify_time_start DataTencentcloudWedataResourceFiles#modify_time_start}
  */
  readonly modifyTimeStart?: string;
  /**
  * Specifies the path of the file's parent folder (for example /a/b/c, querying resource files under the folder c).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_resource_files#parent_folder_path DataTencentcloudWedataResourceFiles#parent_folder_path}
  */
  readonly parentFolderPath?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_resource_files#project_id DataTencentcloudWedataResourceFiles#project_id}
  */
  readonly projectId: string;
  /**
  * Resource file name (fuzzy search keyword).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_resource_files#resource_name DataTencentcloudWedataResourceFiles#resource_name}
  */
  readonly resourceName?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_resource_files#result_output_file DataTencentcloudWedataResourceFiles#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudWedataResourceFilesData {
}

export function dataTencentcloudWedataResourceFilesDataToTerraform(struct?: DataTencentcloudWedataResourceFilesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataResourceFilesDataToHclTerraform(struct?: DataTencentcloudWedataResourceFilesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataResourceFilesDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataResourceFilesData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataResourceFilesData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_extension_type - computed: true, optional: false, required: false
  public get fileExtensionType() {
    return this.getStringAttribute('file_extension_type');
  }

  // local_path - computed: true, optional: false, required: false
  public get localPath() {
    return this.getStringAttribute('local_path');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
}

export class DataTencentcloudWedataResourceFilesDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataResourceFilesDataOutputReference {
    return new DataTencentcloudWedataResourceFilesDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_resource_files tencentcloud_wedata_resource_files}
*/
export class DataTencentcloudWedataResourceFiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_resource_files";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudWedataResourceFiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudWedataResourceFiles to import
  * @param importFromId The id of the existing DataTencentcloudWedataResourceFiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_resource_files#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudWedataResourceFiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_resource_files", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_resource_files tencentcloud_wedata_resource_files} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudWedataResourceFilesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudWedataResourceFilesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_resource_files',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createTimeEnd = config.createTimeEnd;
    this._createTimeStart = config.createTimeStart;
    this._createUserUin = config.createUserUin;
    this._id = config.id;
    this._modifyTimeEnd = config.modifyTimeEnd;
    this._modifyTimeStart = config.modifyTimeStart;
    this._parentFolderPath = config.parentFolderPath;
    this._projectId = config.projectId;
    this._resourceName = config.resourceName;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time_end - computed: false, optional: true, required: false
  private _createTimeEnd?: string; 
  public get createTimeEnd() {
    return this.getStringAttribute('create_time_end');
  }
  public set createTimeEnd(value: string) {
    this._createTimeEnd = value;
  }
  public resetCreateTimeEnd() {
    this._createTimeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeEndInput() {
    return this._createTimeEnd;
  }

  // create_time_start - computed: false, optional: true, required: false
  private _createTimeStart?: string; 
  public get createTimeStart() {
    return this.getStringAttribute('create_time_start');
  }
  public set createTimeStart(value: string) {
    this._createTimeStart = value;
  }
  public resetCreateTimeStart() {
    this._createTimeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeStartInput() {
    return this._createTimeStart;
  }

  // create_user_uin - computed: false, optional: true, required: false
  private _createUserUin?: string; 
  public get createUserUin() {
    return this.getStringAttribute('create_user_uin');
  }
  public set createUserUin(value: string) {
    this._createUserUin = value;
  }
  public resetCreateUserUin() {
    this._createUserUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createUserUinInput() {
    return this._createUserUin;
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataTencentcloudWedataResourceFilesDataList(this, "data", false);
  public get data() {
    return this._data;
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

  // modify_time_end - computed: false, optional: true, required: false
  private _modifyTimeEnd?: string; 
  public get modifyTimeEnd() {
    return this.getStringAttribute('modify_time_end');
  }
  public set modifyTimeEnd(value: string) {
    this._modifyTimeEnd = value;
  }
  public resetModifyTimeEnd() {
    this._modifyTimeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTimeEndInput() {
    return this._modifyTimeEnd;
  }

  // modify_time_start - computed: false, optional: true, required: false
  private _modifyTimeStart?: string; 
  public get modifyTimeStart() {
    return this.getStringAttribute('modify_time_start');
  }
  public set modifyTimeStart(value: string) {
    this._modifyTimeStart = value;
  }
  public resetModifyTimeStart() {
    this._modifyTimeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTimeStartInput() {
    return this._modifyTimeStart;
  }

  // parent_folder_path - computed: false, optional: true, required: false
  private _parentFolderPath?: string; 
  public get parentFolderPath() {
    return this.getStringAttribute('parent_folder_path');
  }
  public set parentFolderPath(value: string) {
    this._parentFolderPath = value;
  }
  public resetParentFolderPath() {
    this._parentFolderPath = undefined;
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

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_time_end: cdktf.stringToTerraform(this._createTimeEnd),
      create_time_start: cdktf.stringToTerraform(this._createTimeStart),
      create_user_uin: cdktf.stringToTerraform(this._createUserUin),
      id: cdktf.stringToTerraform(this._id),
      modify_time_end: cdktf.stringToTerraform(this._modifyTimeEnd),
      modify_time_start: cdktf.stringToTerraform(this._modifyTimeStart),
      parent_folder_path: cdktf.stringToTerraform(this._parentFolderPath),
      project_id: cdktf.stringToTerraform(this._projectId),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_time_end: {
        value: cdktf.stringToHclTerraform(this._createTimeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time_start: {
        value: cdktf.stringToHclTerraform(this._createTimeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_user_uin: {
        value: cdktf.stringToHclTerraform(this._createUserUin),
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
      modify_time_end: {
        value: cdktf.stringToHclTerraform(this._modifyTimeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_time_start: {
        value: cdktf.stringToHclTerraform(this._modifyTimeStart),
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
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
