// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/tsf_business_log_configs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTsfBusinessLogConfigsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Config Id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/tsf_business_log_configs#config_id_list DataTencentcloudTsfBusinessLogConfigs#config_id_list}
  */
  readonly configIdList?: string[];
  /**
  * Disable Program auth check or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/tsf_business_log_configs#disable_program_auth_check DataTencentcloudTsfBusinessLogConfigs#disable_program_auth_check}
  */
  readonly disableProgramAuthCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/tsf_business_log_configs#id DataTencentcloudTsfBusinessLogConfigs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/tsf_business_log_configs#result_output_file DataTencentcloudTsfBusinessLogConfigs#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * wild search word.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/tsf_business_log_configs#search_word DataTencentcloudTsfBusinessLogConfigs#search_word}
  */
  readonly searchWord?: string;
}
export interface DataTencentcloudTsfBusinessLogConfigsResultContentConfigAssociatedGroups {
}

export function dataTencentcloudTsfBusinessLogConfigsResultContentConfigAssociatedGroupsToTerraform(struct?: DataTencentcloudTsfBusinessLogConfigsResultContentConfigAssociatedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfBusinessLogConfigsResultContentConfigAssociatedGroupsToHclTerraform(struct?: DataTencentcloudTsfBusinessLogConfigsResultContentConfigAssociatedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfBusinessLogConfigsResultContentConfigAssociatedGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfBusinessLogConfigsResultContentConfigAssociatedGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfBusinessLogConfigsResultContentConfigAssociatedGroups | undefined) {
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

  // application_type - computed: true, optional: false, required: false
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }

  // associated_time - computed: true, optional: false, required: false
  public get associatedTime() {
    return this.getStringAttribute('associated_time');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // namespace_name - computed: true, optional: false, required: false
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
}

export class DataTencentcloudTsfBusinessLogConfigsResultContentConfigAssociatedGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfBusinessLogConfigsResultContentConfigAssociatedGroupsOutputReference {
    return new DataTencentcloudTsfBusinessLogConfigsResultContentConfigAssociatedGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTsfBusinessLogConfigsResultContentConfigSchema {
}

export function dataTencentcloudTsfBusinessLogConfigsResultContentConfigSchemaToTerraform(struct?: DataTencentcloudTsfBusinessLogConfigsResultContentConfigSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfBusinessLogConfigsResultContentConfigSchemaToHclTerraform(struct?: DataTencentcloudTsfBusinessLogConfigsResultContentConfigSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfBusinessLogConfigsResultContentConfigSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfBusinessLogConfigsResultContentConfigSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfBusinessLogConfigsResultContentConfigSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schema_content - computed: true, optional: false, required: false
  public get schemaContent() {
    return this.getStringAttribute('schema_content');
  }

  // schema_create_time - computed: true, optional: false, required: false
  public get schemaCreateTime() {
    return this.getStringAttribute('schema_create_time');
  }

  // schema_date_format - computed: true, optional: false, required: false
  public get schemaDateFormat() {
    return this.getStringAttribute('schema_date_format');
  }

  // schema_multiline_pattern - computed: true, optional: false, required: false
  public get schemaMultilinePattern() {
    return this.getStringAttribute('schema_multiline_pattern');
  }

  // schema_pattern_layout - computed: true, optional: false, required: false
  public get schemaPatternLayout() {
    return this.getStringAttribute('schema_pattern_layout');
  }

  // schema_type - computed: true, optional: false, required: false
  public get schemaType() {
    return this.getNumberAttribute('schema_type');
  }
}

export class DataTencentcloudTsfBusinessLogConfigsResultContentConfigSchemaList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfBusinessLogConfigsResultContentConfigSchemaOutputReference {
    return new DataTencentcloudTsfBusinessLogConfigsResultContentConfigSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTsfBusinessLogConfigsResultContent {
}

export function dataTencentcloudTsfBusinessLogConfigsResultContentToTerraform(struct?: DataTencentcloudTsfBusinessLogConfigsResultContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfBusinessLogConfigsResultContentToHclTerraform(struct?: DataTencentcloudTsfBusinessLogConfigsResultContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfBusinessLogConfigsResultContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfBusinessLogConfigsResultContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfBusinessLogConfigsResultContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_associated_groups - computed: true, optional: false, required: false
  private _configAssociatedGroups = new DataTencentcloudTsfBusinessLogConfigsResultContentConfigAssociatedGroupsList(this, "config_associated_groups", false);
  public get configAssociatedGroups() {
    return this._configAssociatedGroups;
  }

  // config_create_time - computed: true, optional: false, required: false
  public get configCreateTime() {
    return this.getStringAttribute('config_create_time');
  }

  // config_desc - computed: true, optional: false, required: false
  public get configDesc() {
    return this.getStringAttribute('config_desc');
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // config_name - computed: true, optional: false, required: false
  public get configName() {
    return this.getStringAttribute('config_name');
  }

  // config_path - computed: true, optional: false, required: false
  public get configPath() {
    return this.getStringAttribute('config_path');
  }

  // config_pipeline - computed: true, optional: false, required: false
  public get configPipeline() {
    return this.getStringAttribute('config_pipeline');
  }

  // config_schema - computed: true, optional: false, required: false
  private _configSchema = new DataTencentcloudTsfBusinessLogConfigsResultContentConfigSchemaList(this, "config_schema", false);
  public get configSchema() {
    return this._configSchema;
  }

  // config_tags - computed: true, optional: false, required: false
  public get configTags() {
    return this.getStringAttribute('config_tags');
  }

  // config_update_time - computed: true, optional: false, required: false
  public get configUpdateTime() {
    return this.getStringAttribute('config_update_time');
  }
}

export class DataTencentcloudTsfBusinessLogConfigsResultContentList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfBusinessLogConfigsResultContentOutputReference {
    return new DataTencentcloudTsfBusinessLogConfigsResultContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTsfBusinessLogConfigsResult {
}

export function dataTencentcloudTsfBusinessLogConfigsResultToTerraform(struct?: DataTencentcloudTsfBusinessLogConfigsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfBusinessLogConfigsResultToHclTerraform(struct?: DataTencentcloudTsfBusinessLogConfigsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfBusinessLogConfigsResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfBusinessLogConfigsResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfBusinessLogConfigsResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  private _content = new DataTencentcloudTsfBusinessLogConfigsResultContentList(this, "content", false);
  public get content() {
    return this._content;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
}

export class DataTencentcloudTsfBusinessLogConfigsResultList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfBusinessLogConfigsResultOutputReference {
    return new DataTencentcloudTsfBusinessLogConfigsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/tsf_business_log_configs tencentcloud_tsf_business_log_configs}
*/
export class DataTencentcloudTsfBusinessLogConfigs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_business_log_configs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTsfBusinessLogConfigs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTsfBusinessLogConfigs to import
  * @param importFromId The id of the existing DataTencentcloudTsfBusinessLogConfigs that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/tsf_business_log_configs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTsfBusinessLogConfigs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_business_log_configs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/tsf_business_log_configs tencentcloud_tsf_business_log_configs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTsfBusinessLogConfigsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTsfBusinessLogConfigsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_business_log_configs',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
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
    this._disableProgramAuthCheck = config.disableProgramAuthCheck;
    this._id = config.id;
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

  // result - computed: true, optional: false, required: false
  private _result = new DataTencentcloudTsfBusinessLogConfigsResultList(this, "result", false);
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
      disable_program_auth_check: cdktf.booleanToTerraform(this._disableProgramAuthCheck),
      id: cdktf.stringToTerraform(this._id),
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
