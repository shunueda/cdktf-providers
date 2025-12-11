// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_ops_workflows
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudWedataOpsWorkflowsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Creation time, format yyyy-MM-dd HH:mm:ss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_ops_workflows#create_time DataTencentcloudWedataOpsWorkflows#create_time}
  */
  readonly createTime?: string;
  /**
  * Creator ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_ops_workflows#create_user_uin DataTencentcloudWedataOpsWorkflows#create_user_uin}
  */
  readonly createUserUin?: string;
  /**
  * File ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_ops_workflows#folder_id DataTencentcloudWedataOpsWorkflows#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_ops_workflows#id DataTencentcloudWedataOpsWorkflows#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Workflow keyword filter, supports fuzzy matching by workflow ID/name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_ops_workflows#key_word DataTencentcloudWedataOpsWorkflows#key_word}
  */
  readonly keyWord?: string;
  /**
  * Update time, format yyyy-MM-dd HH:mm:ss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_ops_workflows#modify_time DataTencentcloudWedataOpsWorkflows#modify_time}
  */
  readonly modifyTime?: string;
  /**
  * Responsible person ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_ops_workflows#owner_uin DataTencentcloudWedataOpsWorkflows#owner_uin}
  */
  readonly ownerUin?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_ops_workflows#project_id DataTencentcloudWedataOpsWorkflows#project_id}
  */
  readonly projectId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_ops_workflows#result_output_file DataTencentcloudWedataOpsWorkflows#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Sorting field, optional values: `CreateTime`, `TaskCount`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_ops_workflows#sort_item DataTencentcloudWedataOpsWorkflows#sort_item}
  */
  readonly sortItem?: string;
  /**
  * Sorting order, `DESC` or `ASC`, uppercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_ops_workflows#sort_type DataTencentcloudWedataOpsWorkflows#sort_type}
  */
  readonly sortType?: string;
  /**
  * Workflow status filter: `ALL_RUNNING`: All scheduled, `ALL_FREEZED`: All paused, `ALL_STOPPTED`: All offline, `PART_RUNNING`: Partially scheduled, `ALL_NO_RUNNING`: All unscheduled, `ALL_INVALID`: All invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_ops_workflows#status DataTencentcloudWedataOpsWorkflows#status}
  */
  readonly status?: string;
  /**
  * Workflow type filter, supported values: `Cycle` or `Manual`. By default, only `Cycle` is queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_ops_workflows#workflow_type DataTencentcloudWedataOpsWorkflows#workflow_type}
  */
  readonly workflowType?: string;
}
export interface DataTencentcloudWedataOpsWorkflowsData {
}

export function dataTencentcloudWedataOpsWorkflowsDataToTerraform(struct?: DataTencentcloudWedataOpsWorkflowsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataOpsWorkflowsDataToHclTerraform(struct?: DataTencentcloudWedataOpsWorkflowsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataOpsWorkflowsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataOpsWorkflowsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataOpsWorkflowsData | undefined) {
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

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // folder_name - computed: true, optional: false, required: false
  public get folderName() {
    return this.getStringAttribute('folder_name');
  }

  // owner_uin - computed: true, optional: false, required: false
  public get ownerUin() {
    return this.getStringAttribute('owner_uin');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // task_count - computed: true, optional: false, required: false
  public get taskCount() {
    return this.getNumberAttribute('task_count');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
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

export class DataTencentcloudWedataOpsWorkflowsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataOpsWorkflowsDataOutputReference {
    return new DataTencentcloudWedataOpsWorkflowsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_ops_workflows tencentcloud_wedata_ops_workflows}
*/
export class DataTencentcloudWedataOpsWorkflows extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_ops_workflows";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudWedataOpsWorkflows resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudWedataOpsWorkflows to import
  * @param importFromId The id of the existing DataTencentcloudWedataOpsWorkflows that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_ops_workflows#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudWedataOpsWorkflows to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_ops_workflows", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/wedata_ops_workflows tencentcloud_wedata_ops_workflows} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudWedataOpsWorkflowsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudWedataOpsWorkflowsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_ops_workflows',
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
    this._createTime = config.createTime;
    this._createUserUin = config.createUserUin;
    this._folderId = config.folderId;
    this._id = config.id;
    this._keyWord = config.keyWord;
    this._modifyTime = config.modifyTime;
    this._ownerUin = config.ownerUin;
    this._projectId = config.projectId;
    this._resultOutputFile = config.resultOutputFile;
    this._sortItem = config.sortItem;
    this._sortType = config.sortType;
    this._status = config.status;
    this._workflowType = config.workflowType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
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
  private _data = new DataTencentcloudWedataOpsWorkflowsDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // key_word - computed: false, optional: true, required: false
  private _keyWord?: string; 
  public get keyWord() {
    return this.getStringAttribute('key_word');
  }
  public set keyWord(value: string) {
    this._keyWord = value;
  }
  public resetKeyWord() {
    this._keyWord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyWordInput() {
    return this._keyWord;
  }

  // modify_time - computed: false, optional: true, required: false
  private _modifyTime?: string; 
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }
  public set modifyTime(value: string) {
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

  // sort_item - computed: false, optional: true, required: false
  private _sortItem?: string; 
  public get sortItem() {
    return this.getStringAttribute('sort_item');
  }
  public set sortItem(value: string) {
    this._sortItem = value;
  }
  public resetSortItem() {
    this._sortItem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortItemInput() {
    return this._sortItem;
  }

  // sort_type - computed: false, optional: true, required: false
  private _sortType?: string; 
  public get sortType() {
    return this.getStringAttribute('sort_type');
  }
  public set sortType(value: string) {
    this._sortType = value;
  }
  public resetSortType() {
    this._sortType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortTypeInput() {
    return this._sortType;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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
      create_time: cdktf.stringToTerraform(this._createTime),
      create_user_uin: cdktf.stringToTerraform(this._createUserUin),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      key_word: cdktf.stringToTerraform(this._keyWord),
      modify_time: cdktf.stringToTerraform(this._modifyTime),
      owner_uin: cdktf.stringToTerraform(this._ownerUin),
      project_id: cdktf.stringToTerraform(this._projectId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      sort_item: cdktf.stringToTerraform(this._sortItem),
      sort_type: cdktf.stringToTerraform(this._sortType),
      status: cdktf.stringToTerraform(this._status),
      workflow_type: cdktf.stringToTerraform(this._workflowType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
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
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      key_word: {
        value: cdktf.stringToHclTerraform(this._keyWord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_time: {
        value: cdktf.stringToHclTerraform(this._modifyTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_uin: {
        value: cdktf.stringToHclTerraform(this._ownerUin),
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
      sort_item: {
        value: cdktf.stringToHclTerraform(this._sortItem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_type: {
        value: cdktf.stringToHclTerraform(this._sortType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
