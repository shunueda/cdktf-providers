// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_workflows
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudWedataWorkflowsConfig extends cdktf.TerraformMetaArguments {
  /**
  * bundleId item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_workflows#bundle_id DataTencentcloudWedataWorkflows#bundle_id}
  */
  readonly bundleId?: string;
  /**
  * Creation time range yyyy-MM-dd HH:MM:ss. two times must be filled in the array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_workflows#create_time DataTencentcloudWedataWorkflows#create_time}
  */
  readonly createTime?: string[];
  /**
  * Creator ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_workflows#create_user_uin DataTencentcloudWedataWorkflows#create_user_uin}
  */
  readonly createUserUin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_workflows#id DataTencentcloudWedataWorkflows#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Search keywords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_workflows#keyword DataTencentcloudWedataWorkflows#keyword}
  */
  readonly keyword?: string;
  /**
  * Modification time interval yyyy-MM-dd HH:MM:ss. fill in two times in the array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_workflows#modify_time DataTencentcloudWedataWorkflows#modify_time}
  */
  readonly modifyTime?: string[];
  /**
  * Owner ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_workflows#owner_uin DataTencentcloudWedataWorkflows#owner_uin}
  */
  readonly ownerUin?: string;
  /**
  * Workflow folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_workflows#parent_folder_path DataTencentcloudWedataWorkflows#parent_folder_path}
  */
  readonly parentFolderPath?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_workflows#project_id DataTencentcloudWedataWorkflows#project_id}
  */
  readonly projectId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_workflows#result_output_file DataTencentcloudWedataWorkflows#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Workflow type. valid values: cycle and manual.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_workflows#workflow_type DataTencentcloudWedataWorkflows#workflow_type}
  */
  readonly workflowType?: string;
}
export interface DataTencentcloudWedataWorkflowsData {
}

export function dataTencentcloudWedataWorkflowsDataToTerraform(struct?: DataTencentcloudWedataWorkflowsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataWorkflowsDataToHclTerraform(struct?: DataTencentcloudWedataWorkflowsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataWorkflowsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataWorkflowsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataWorkflowsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // create_user_uin - computed: true, optional: false, required: false
  public get createUserUin() {
    return this.getStringAttribute('create_user_uin');
  }

  // modify_time - computed: true, optional: false, required: false
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }

  // owner_uin - computed: true, optional: false, required: false
  public get ownerUin() {
    return this.getStringAttribute('owner_uin');
  }

  // update_user_uin - computed: true, optional: false, required: false
  public get updateUserUin() {
    return this.getStringAttribute('update_user_uin');
  }

  // workflow_desc - computed: true, optional: false, required: false
  public get workflowDesc() {
    return this.getStringAttribute('workflow_desc');
  }

  // workflow_id - computed: true, optional: false, required: false
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }

  // workflow_name - computed: true, optional: false, required: false
  public get workflowName() {
    return this.getStringAttribute('workflow_name');
  }

  // workflow_type - computed: true, optional: false, required: false
  public get workflowType() {
    return this.getStringAttribute('workflow_type');
  }
}

export class DataTencentcloudWedataWorkflowsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataWorkflowsDataOutputReference {
    return new DataTencentcloudWedataWorkflowsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_workflows tencentcloud_wedata_workflows}
*/
export class DataTencentcloudWedataWorkflows extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_workflows";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudWedataWorkflows resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudWedataWorkflows to import
  * @param importFromId The id of the existing DataTencentcloudWedataWorkflows that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_workflows#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudWedataWorkflows to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_workflows", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_workflows tencentcloud_wedata_workflows} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudWedataWorkflowsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudWedataWorkflowsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_workflows',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bundleId = config.bundleId;
    this._createTime = config.createTime;
    this._createUserUin = config.createUserUin;
    this._id = config.id;
    this._keyword = config.keyword;
    this._modifyTime = config.modifyTime;
    this._ownerUin = config.ownerUin;
    this._parentFolderPath = config.parentFolderPath;
    this._projectId = config.projectId;
    this._resultOutputFile = config.resultOutputFile;
    this._workflowType = config.workflowType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string[]; 
  public get createTime() {
    return cdktf.Fn.tolist(this.getListAttribute('create_time'));
  }
  public set createTime(value: string[]) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
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
  private _data = new DataTencentcloudWedataWorkflowsDataList(this, "data", false);
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

  // keyword - computed: false, optional: true, required: false
  private _keyword?: string; 
  public get keyword() {
    return this.getStringAttribute('keyword');
  }
  public set keyword(value: string) {
    this._keyword = value;
  }
  public resetKeyword() {
    this._keyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // modify_time - computed: false, optional: true, required: false
  private _modifyTime?: string[]; 
  public get modifyTime() {
    return cdktf.Fn.tolist(this.getListAttribute('modify_time'));
  }
  public set modifyTime(value: string[]) {
    this._modifyTime = value;
  }
  public resetModifyTime() {
    this._modifyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTimeInput() {
    return this._modifyTime;
  }

  // owner_uin - computed: false, optional: true, required: false
  private _ownerUin?: string; 
  public get ownerUin() {
    return this.getStringAttribute('owner_uin');
  }
  public set ownerUin(value: string) {
    this._ownerUin = value;
  }
  public resetOwnerUin() {
    this._ownerUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUinInput() {
    return this._ownerUin;
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

  // workflow_type - computed: false, optional: true, required: false
  private _workflowType?: string; 
  public get workflowType() {
    return this.getStringAttribute('workflow_type');
  }
  public set workflowType(value: string) {
    this._workflowType = value;
  }
  public resetWorkflowType() {
    this._workflowType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowTypeInput() {
    return this._workflowType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bundle_id: cdktf.stringToTerraform(this._bundleId),
      create_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._createTime),
      create_user_uin: cdktf.stringToTerraform(this._createUserUin),
      id: cdktf.stringToTerraform(this._id),
      keyword: cdktf.stringToTerraform(this._keyword),
      modify_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._modifyTime),
      owner_uin: cdktf.stringToTerraform(this._ownerUin),
      parent_folder_path: cdktf.stringToTerraform(this._parentFolderPath),
      project_id: cdktf.stringToTerraform(this._projectId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      workflow_type: cdktf.stringToTerraform(this._workflowType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundle_id: {
        value: cdktf.stringToHclTerraform(this._bundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._createTime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      keyword: {
        value: cdktf.stringToHclTerraform(this._keyword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._modifyTime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      owner_uin: {
        value: cdktf.stringToHclTerraform(this._ownerUin),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow_type: {
        value: cdktf.stringToHclTerraform(this._workflowType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
