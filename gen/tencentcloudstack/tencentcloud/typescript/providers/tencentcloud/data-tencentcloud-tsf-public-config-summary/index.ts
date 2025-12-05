// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/tsf_public_config_summary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTsfPublicConfigSummaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Config Id List.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/tsf_public_config_summary#config_id_list DataTencentcloudTsfPublicConfigSummary#config_id_list}
  */
  readonly configIdList?: string[];
  /**
  * config tag list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/tsf_public_config_summary#config_tag_list DataTencentcloudTsfPublicConfigSummary#config_tag_list}
  */
  readonly configTagList?: string[];
  /**
  * Whether to disable dataset authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/tsf_public_config_summary#disable_program_auth_check DataTencentcloudTsfPublicConfigSummary#disable_program_auth_check}
  */
  readonly disableProgramAuthCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/tsf_public_config_summary#id DataTencentcloudTsfPublicConfigSummary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sort by time: creation_time; Sort by name: config_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/tsf_public_config_summary#order_by DataTencentcloudTsfPublicConfigSummary#order_by}
  */
  readonly orderBy?: string;
  /**
  * Pass 0 for ascending order and 1 for descending order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/tsf_public_config_summary#order_type DataTencentcloudTsfPublicConfigSummary#order_type}
  */
  readonly orderType?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/tsf_public_config_summary#result_output_file DataTencentcloudTsfPublicConfigSummary#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Query keyword for fuzzy search: configuration item name. If not passed in, the full set will be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/tsf_public_config_summary#search_word DataTencentcloudTsfPublicConfigSummary#search_word}
  */
  readonly searchWord?: string;
}
export interface DataTencentcloudTsfPublicConfigSummaryResultContent {
}

export function dataTencentcloudTsfPublicConfigSummaryResultContentToTerraform(struct?: DataTencentcloudTsfPublicConfigSummaryResultContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfPublicConfigSummaryResultContentToHclTerraform(struct?: DataTencentcloudTsfPublicConfigSummaryResultContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfPublicConfigSummaryResultContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfPublicConfigSummaryResultContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfPublicConfigSummaryResultContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // config_name - computed: true, optional: false, required: false
  public get configName() {
    return this.getStringAttribute('config_name');
  }

  // config_type - computed: true, optional: false, required: false
  public get configType() {
    return this.getStringAttribute('config_type');
  }

  // config_value - computed: true, optional: false, required: false
  public get configValue() {
    return this.getStringAttribute('config_value');
  }

  // config_version - computed: true, optional: false, required: false
  public get configVersion() {
    return this.getStringAttribute('config_version');
  }

  // config_version_count - computed: true, optional: false, required: false
  public get configVersionCount() {
    return this.getNumberAttribute('config_version_count');
  }

  // config_version_desc - computed: true, optional: false, required: false
  public get configVersionDesc() {
    return this.getStringAttribute('config_version_desc');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // delete_flag - computed: true, optional: false, required: false
  public get deleteFlag() {
    return this.getBooleanAttribute('delete_flag');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }
}

export class DataTencentcloudTsfPublicConfigSummaryResultContentList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfPublicConfigSummaryResultContentOutputReference {
    return new DataTencentcloudTsfPublicConfigSummaryResultContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTsfPublicConfigSummaryResult {
}

export function dataTencentcloudTsfPublicConfigSummaryResultToTerraform(struct?: DataTencentcloudTsfPublicConfigSummaryResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfPublicConfigSummaryResultToHclTerraform(struct?: DataTencentcloudTsfPublicConfigSummaryResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfPublicConfigSummaryResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfPublicConfigSummaryResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfPublicConfigSummaryResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  private _content = new DataTencentcloudTsfPublicConfigSummaryResultContentList(this, "content", false);
  public get content() {
    return this._content;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
}

export class DataTencentcloudTsfPublicConfigSummaryResultList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfPublicConfigSummaryResultOutputReference {
    return new DataTencentcloudTsfPublicConfigSummaryResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/tsf_public_config_summary tencentcloud_tsf_public_config_summary}
*/
export class DataTencentcloudTsfPublicConfigSummary extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_public_config_summary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTsfPublicConfigSummary resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTsfPublicConfigSummary to import
  * @param importFromId The id of the existing DataTencentcloudTsfPublicConfigSummary that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/tsf_public_config_summary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTsfPublicConfigSummary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_public_config_summary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/tsf_public_config_summary tencentcloud_tsf_public_config_summary} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTsfPublicConfigSummaryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTsfPublicConfigSummaryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_public_config_summary',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configIdList = config.configIdList;
    this._configTagList = config.configTagList;
    this._disableProgramAuthCheck = config.disableProgramAuthCheck;
    this._id = config.id;
    this._orderBy = config.orderBy;
    this._orderType = config.orderType;
    this._resultOutputFile = config.resultOutputFile;
    this._searchWord = config.searchWord;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id_list - computed: false, optional: true, required: false
  private _configIdList?: string[]; 
  public get configIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('config_id_list'));
  }
  public set configIdList(value: string[]) {
    this._configIdList = value;
  }
  public resetConfigIdList() {
    this._configIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdListInput() {
    return this._configIdList;
  }

  // config_tag_list - computed: false, optional: true, required: false
  private _configTagList?: string[]; 
  public get configTagList() {
    return cdktf.Fn.tolist(this.getListAttribute('config_tag_list'));
  }
  public set configTagList(value: string[]) {
    this._configTagList = value;
  }
  public resetConfigTagList() {
    this._configTagList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTagListInput() {
    return this._configTagList;
  }

  // disable_program_auth_check - computed: false, optional: true, required: false
  private _disableProgramAuthCheck?: boolean | cdktf.IResolvable; 
  public get disableProgramAuthCheck() {
    return this.getBooleanAttribute('disable_program_auth_check');
  }
  public set disableProgramAuthCheck(value: boolean | cdktf.IResolvable) {
    this._disableProgramAuthCheck = value;
  }
  public resetDisableProgramAuthCheck() {
    this._disableProgramAuthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProgramAuthCheckInput() {
    return this._disableProgramAuthCheck;
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

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // order_type - computed: false, optional: true, required: false
  private _orderType?: number; 
  public get orderType() {
    return this.getNumberAttribute('order_type');
  }
  public set orderType(value: number) {
    this._orderType = value;
  }
  public resetOrderType() {
    this._orderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderTypeInput() {
    return this._orderType;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataTencentcloudTsfPublicConfigSummaryResultList(this, "result", false);
  public get result() {
    return this._result;
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

  // search_word - computed: false, optional: true, required: false
  private _searchWord?: string; 
  public get searchWord() {
    return this.getStringAttribute('search_word');
  }
  public set searchWord(value: string) {
    this._searchWord = value;
  }
  public resetSearchWord() {
    this._searchWord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchWordInput() {
    return this._searchWord;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configIdList),
      config_tag_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configTagList),
      disable_program_auth_check: cdktf.booleanToTerraform(this._disableProgramAuthCheck),
      id: cdktf.stringToTerraform(this._id),
      order_by: cdktf.stringToTerraform(this._orderBy),
      order_type: cdktf.numberToTerraform(this._orderType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      search_word: cdktf.stringToTerraform(this._searchWord),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      config_tag_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configTagList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      disable_program_auth_check: {
        value: cdktf.booleanToHclTerraform(this._disableProgramAuthCheck),
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
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_type: {
        value: cdktf.numberToHclTerraform(this._orderType),
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
      search_word: {
        value: cdktf.stringToHclTerraform(this._searchWord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
