// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/bi_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudBiProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to display all, if true, ignore paging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/bi_project#all_page DataTencentcloudBiProject#all_page}
  */
  readonly allPage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/bi_project#id DataTencentcloudBiProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Retrieve fuzzy fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/bi_project#keyword DataTencentcloudBiProject#keyword}
  */
  readonly keyword?: string;
  /**
  * Role information, can be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/bi_project#module_collection DataTencentcloudBiProject#module_collection}
  */
  readonly moduleCollection?: string;
  /**
  * Page number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/bi_project#page_no DataTencentcloudBiProject#page_no}
  */
  readonly pageNo?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/bi_project#result_output_file DataTencentcloudBiProject#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudBiProjectListConfigListComponents {
}

export function dataTencentcloudBiProjectListConfigListComponentsToTerraform(struct?: DataTencentcloudBiProjectListConfigListComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudBiProjectListConfigListComponentsToHclTerraform(struct?: DataTencentcloudBiProjectListConfigListComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudBiProjectListConfigListComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudBiProjectListConfigListComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudBiProjectListConfigListComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_type - computed: true, optional: false, required: false
  public get includeType() {
    return this.getStringAttribute('include_type');
  }

  // module_id - computed: true, optional: false, required: false
  public get moduleId() {
    return this.getStringAttribute('module_id');
  }

  // params - computed: true, optional: false, required: false
  public get params() {
    return this.getStringAttribute('params');
  }
}

export class DataTencentcloudBiProjectListConfigListComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudBiProjectListConfigListComponentsOutputReference {
    return new DataTencentcloudBiProjectListConfigListComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudBiProjectListConfigListStruct {
}

export function dataTencentcloudBiProjectListConfigListStructToTerraform(struct?: DataTencentcloudBiProjectListConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudBiProjectListConfigListStructToHclTerraform(struct?: DataTencentcloudBiProjectListConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudBiProjectListConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudBiProjectListConfigListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudBiProjectListConfigListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // components - computed: true, optional: false, required: false
  private _components = new DataTencentcloudBiProjectListConfigListComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // module_group - computed: true, optional: false, required: false
  public get moduleGroup() {
    return this.getStringAttribute('module_group');
  }
}

export class DataTencentcloudBiProjectListConfigListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudBiProjectListConfigListStructOutputReference {
    return new DataTencentcloudBiProjectListConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudBiProjectListStruct {
}

export function dataTencentcloudBiProjectListStructToTerraform(struct?: DataTencentcloudBiProjectListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudBiProjectListStructToHclTerraform(struct?: DataTencentcloudBiProjectListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudBiProjectListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudBiProjectListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudBiProjectListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply - computed: true, optional: false, required: false
  public get apply() {
    return this.getBooleanAttribute('apply');
  }

  // auth_list - computed: true, optional: false, required: false
  public get authList() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_list'));
  }

  // color_code - computed: true, optional: false, required: false
  public get colorCode() {
    return this.getStringAttribute('color_code');
  }

  // config_list - computed: true, optional: false, required: false
  private _configList = new DataTencentcloudBiProjectListConfigListStructList(this, "config_list", false);
  public get configList() {
    return this._configList;
  }

  // corp_id - computed: true, optional: false, required: false
  public get corpId() {
    return this.getStringAttribute('corp_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_user - computed: true, optional: false, required: false
  public get createdUser() {
    return this.getStringAttribute('created_user');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_external_manage - computed: true, optional: false, required: false
  public get isExternalManage() {
    return this.getBooleanAttribute('is_external_manage');
  }

  // last_modify_name - computed: true, optional: false, required: false
  public get lastModifyName() {
    return this.getStringAttribute('last_modify_name');
  }

  // logo - computed: true, optional: false, required: false
  public get logo() {
    return this.getStringAttribute('logo');
  }

  // manage_platform - computed: true, optional: false, required: false
  public get managePlatform() {
    return this.getStringAttribute('manage_platform');
  }

  // mark - computed: true, optional: false, required: false
  public get mark() {
    return this.getStringAttribute('mark');
  }

  // member_count - computed: true, optional: false, required: false
  public get memberCount() {
    return this.getNumberAttribute('member_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // page_count - computed: true, optional: false, required: false
  public get pageCount() {
    return this.getNumberAttribute('page_count');
  }

  // panel_scope - computed: true, optional: false, required: false
  public get panelScope() {
    return this.getStringAttribute('panel_scope');
  }

  // seed - computed: true, optional: false, required: false
  public get seed() {
    return this.getStringAttribute('seed');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_user - computed: true, optional: false, required: false
  public get updatedUser() {
    return this.getStringAttribute('updated_user');
  }
}

export class DataTencentcloudBiProjectListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudBiProjectListStructOutputReference {
    return new DataTencentcloudBiProjectListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/bi_project tencentcloud_bi_project}
*/
export class DataTencentcloudBiProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_bi_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudBiProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudBiProject to import
  * @param importFromId The id of the existing DataTencentcloudBiProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/bi_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudBiProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_bi_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/bi_project tencentcloud_bi_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudBiProjectConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudBiProjectConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_bi_project',
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
    this._allPage = config.allPage;
    this._id = config.id;
    this._keyword = config.keyword;
    this._moduleCollection = config.moduleCollection;
    this._pageNo = config.pageNo;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_page - computed: false, optional: true, required: false
  private _allPage?: boolean | cdktf.IResolvable; 
  public get allPage() {
    return this.getBooleanAttribute('all_page');
  }
  public set allPage(value: boolean | cdktf.IResolvable) {
    this._allPage = value;
  }
  public resetAllPage() {
    this._allPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPageInput() {
    return this._allPage;
  }

  // extra - computed: true, optional: false, required: false
  public get extra() {
    return this.getStringAttribute('extra');
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

  // list - computed: true, optional: false, required: false
  private _list = new DataTencentcloudBiProjectListStructList(this, "list", false);
  public get list() {
    return this._list;
  }

  // module_collection - computed: false, optional: true, required: false
  private _moduleCollection?: string; 
  public get moduleCollection() {
    return this.getStringAttribute('module_collection');
  }
  public set moduleCollection(value: string) {
    this._moduleCollection = value;
  }
  public resetModuleCollection() {
    this._moduleCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleCollectionInput() {
    return this._moduleCollection;
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // page_no - computed: false, optional: true, required: false
  private _pageNo?: number; 
  public get pageNo() {
    return this.getNumberAttribute('page_no');
  }
  public set pageNo(value: number) {
    this._pageNo = value;
  }
  public resetPageNo() {
    this._pageNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNoInput() {
    return this._pageNo;
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
      all_page: cdktf.booleanToTerraform(this._allPage),
      id: cdktf.stringToTerraform(this._id),
      keyword: cdktf.stringToTerraform(this._keyword),
      module_collection: cdktf.stringToTerraform(this._moduleCollection),
      page_no: cdktf.numberToTerraform(this._pageNo),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_page: {
        value: cdktf.booleanToHclTerraform(this._allPage),
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
      keyword: {
        value: cdktf.stringToHclTerraform(this._keyword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      module_collection: {
        value: cdktf.stringToHclTerraform(this._moduleCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_no: {
        value: cdktf.numberToHclTerraform(this._pageNo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
