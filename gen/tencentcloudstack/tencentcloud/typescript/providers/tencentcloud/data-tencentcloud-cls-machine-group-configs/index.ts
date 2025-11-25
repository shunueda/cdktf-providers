// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cls_machine_group_configs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudClsMachineGroupConfigsConfig extends cdktf.TerraformMetaArguments {
  /**
  * group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cls_machine_group_configs#group_id DataTencentcloudClsMachineGroupConfigs#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cls_machine_group_configs#id DataTencentcloudClsMachineGroupConfigs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cls_machine_group_configs#result_output_file DataTencentcloudClsMachineGroupConfigs#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudClsMachineGroupConfigsConfigsExcludePaths {
}

export function dataTencentcloudClsMachineGroupConfigsConfigsExcludePathsToTerraform(struct?: DataTencentcloudClsMachineGroupConfigsConfigsExcludePaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClsMachineGroupConfigsConfigsExcludePathsToHclTerraform(struct?: DataTencentcloudClsMachineGroupConfigsConfigsExcludePaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClsMachineGroupConfigsConfigsExcludePathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClsMachineGroupConfigsConfigsExcludePaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClsMachineGroupConfigsConfigsExcludePaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudClsMachineGroupConfigsConfigsExcludePathsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClsMachineGroupConfigsConfigsExcludePathsOutputReference {
    return new DataTencentcloudClsMachineGroupConfigsConfigsExcludePathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleFilterKeyRegex {
}

export function dataTencentcloudClsMachineGroupConfigsConfigsExtractRuleFilterKeyRegexToTerraform(struct?: DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleFilterKeyRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClsMachineGroupConfigsConfigsExtractRuleFilterKeyRegexToHclTerraform(struct?: DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleFilterKeyRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleFilterKeyRegexOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleFilterKeyRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleFilterKeyRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}

export class DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleFilterKeyRegexList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleFilterKeyRegexOutputReference {
    return new DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleFilterKeyRegexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleMetaTags {
}

export function dataTencentcloudClsMachineGroupConfigsConfigsExtractRuleMetaTagsToTerraform(struct?: DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleMetaTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClsMachineGroupConfigsConfigsExtractRuleMetaTagsToHclTerraform(struct?: DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleMetaTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleMetaTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleMetaTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleMetaTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleMetaTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleMetaTagsOutputReference {
    return new DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleMetaTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClsMachineGroupConfigsConfigsExtractRule {
}

export function dataTencentcloudClsMachineGroupConfigsConfigsExtractRuleToTerraform(struct?: DataTencentcloudClsMachineGroupConfigsConfigsExtractRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClsMachineGroupConfigsConfigsExtractRuleToHclTerraform(struct?: DataTencentcloudClsMachineGroupConfigsConfigsExtractRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClsMachineGroupConfigsConfigsExtractRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClsMachineGroupConfigsConfigsExtractRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // backtracking - computed: true, optional: false, required: false
  public get backtracking() {
    return this.getNumberAttribute('backtracking');
  }

  // begin_regex - computed: true, optional: false, required: false
  public get beginRegex() {
    return this.getStringAttribute('begin_regex');
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // filter_key_regex - computed: true, optional: false, required: false
  private _filterKeyRegex = new DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleFilterKeyRegexList(this, "filter_key_regex", false);
  public get filterKeyRegex() {
    return this._filterKeyRegex;
  }

  // is_gbk - computed: true, optional: false, required: false
  public get isGbk() {
    return this.getNumberAttribute('is_gbk');
  }

  // json_standard - computed: true, optional: false, required: false
  public get jsonStandard() {
    return this.getNumberAttribute('json_standard');
  }

  // keys - computed: true, optional: false, required: false
  public get keys() {
    return cdktf.Fn.tolist(this.getListAttribute('keys'));
  }

  // log_regex - computed: true, optional: false, required: false
  public get logRegex() {
    return this.getStringAttribute('log_regex');
  }

  // meta_tags - computed: true, optional: false, required: false
  private _metaTags = new DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleMetaTagsList(this, "meta_tags", false);
  public get metaTags() {
    return this._metaTags;
  }

  // metadata_type - computed: true, optional: false, required: false
  public get metadataType() {
    return this.getNumberAttribute('metadata_type');
  }

  // parse_protocol - computed: true, optional: false, required: false
  public get parseProtocol() {
    return this.getStringAttribute('parse_protocol');
  }

  // path_regex - computed: true, optional: false, required: false
  public get pathRegex() {
    return this.getStringAttribute('path_regex');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // time_format - computed: true, optional: false, required: false
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }

  // time_key - computed: true, optional: false, required: false
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }

  // un_match_log_key - computed: true, optional: false, required: false
  public get unMatchLogKey() {
    return this.getStringAttribute('un_match_log_key');
  }

  // un_match_up_load_switch - computed: true, optional: false, required: false
  public get unMatchUpLoadSwitch() {
    return this.getBooleanAttribute('un_match_up_load_switch');
  }
}

export class DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleOutputReference {
    return new DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClsMachineGroupConfigsConfigs {
}

export function dataTencentcloudClsMachineGroupConfigsConfigsToTerraform(struct?: DataTencentcloudClsMachineGroupConfigsConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClsMachineGroupConfigsConfigsToHclTerraform(struct?: DataTencentcloudClsMachineGroupConfigsConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClsMachineGroupConfigsConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClsMachineGroupConfigsConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClsMachineGroupConfigsConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // exclude_paths - computed: true, optional: false, required: false
  private _excludePaths = new DataTencentcloudClsMachineGroupConfigsConfigsExcludePathsList(this, "exclude_paths", false);
  public get excludePaths() {
    return this._excludePaths;
  }

  // extract_rule - computed: true, optional: false, required: false
  private _extractRule = new DataTencentcloudClsMachineGroupConfigsConfigsExtractRuleList(this, "extract_rule", false);
  public get extractRule() {
    return this._extractRule;
  }

  // log_format - computed: true, optional: false, required: false
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // user_define_rule - computed: true, optional: false, required: false
  public get userDefineRule() {
    return this.getStringAttribute('user_define_rule');
  }
}

export class DataTencentcloudClsMachineGroupConfigsConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClsMachineGroupConfigsConfigsOutputReference {
    return new DataTencentcloudClsMachineGroupConfigsConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cls_machine_group_configs tencentcloud_cls_machine_group_configs}
*/
export class DataTencentcloudClsMachineGroupConfigs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cls_machine_group_configs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudClsMachineGroupConfigs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudClsMachineGroupConfigs to import
  * @param importFromId The id of the existing DataTencentcloudClsMachineGroupConfigs that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cls_machine_group_configs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudClsMachineGroupConfigs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cls_machine_group_configs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cls_machine_group_configs tencentcloud_cls_machine_group_configs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudClsMachineGroupConfigsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudClsMachineGroupConfigsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cls_machine_group_configs',
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
    this._groupId = config.groupId;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configs - computed: true, optional: false, required: false
  private _configs = new DataTencentcloudClsMachineGroupConfigsConfigsList(this, "configs", false);
  public get configs() {
    return this._configs;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
