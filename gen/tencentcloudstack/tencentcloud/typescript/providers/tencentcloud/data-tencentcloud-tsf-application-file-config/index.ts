// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tsf_application_file_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTsfApplicationFileConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tsf_application_file_config#application_id DataTencentcloudTsfApplicationFileConfig#application_id}
  */
  readonly applicationId?: string;
  /**
  * Configuration ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tsf_application_file_config#config_id DataTencentcloudTsfApplicationFileConfig#config_id}
  */
  readonly configId?: string;
  /**
  * List of configuration item ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tsf_application_file_config#config_id_list DataTencentcloudTsfApplicationFileConfig#config_id_list}
  */
  readonly configIdList?: string[];
  /**
  * Configuration item name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tsf_application_file_config#config_name DataTencentcloudTsfApplicationFileConfig#config_name}
  */
  readonly configName?: string;
  /**
  * Configuration item version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tsf_application_file_config#config_version DataTencentcloudTsfApplicationFileConfig#config_version}
  */
  readonly configVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tsf_application_file_config#id DataTencentcloudTsfApplicationFileConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tsf_application_file_config#result_output_file DataTencentcloudTsfApplicationFileConfig#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudTsfApplicationFileConfigResultContent {
}

export function dataTencentcloudTsfApplicationFileConfigResultContentToTerraform(struct?: DataTencentcloudTsfApplicationFileConfigResultContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfApplicationFileConfigResultContentToHclTerraform(struct?: DataTencentcloudTsfApplicationFileConfigResultContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfApplicationFileConfigResultContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfApplicationFileConfigResultContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfApplicationFileConfigResultContent | undefined) {
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

  // config_file_code - computed: true, optional: false, required: false
  public get configFileCode() {
    return this.getStringAttribute('config_file_code');
  }

  // config_file_name - computed: true, optional: false, required: false
  public get configFileName() {
    return this.getStringAttribute('config_file_name');
  }

  // config_file_path - computed: true, optional: false, required: false
  public get configFilePath() {
    return this.getStringAttribute('config_file_path');
  }

  // config_file_value - computed: true, optional: false, required: false
  public get configFileValue() {
    return this.getStringAttribute('config_file_value');
  }

  // config_file_value_length - computed: true, optional: false, required: false
  public get configFileValueLength() {
    return this.getNumberAttribute('config_file_value_length');
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // config_name - computed: true, optional: false, required: false
  public get configName() {
    return this.getStringAttribute('config_name');
  }

  // config_post_cmd - computed: true, optional: false, required: false
  public get configPostCmd() {
    return this.getStringAttribute('config_post_cmd');
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

export class DataTencentcloudTsfApplicationFileConfigResultContentList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfApplicationFileConfigResultContentOutputReference {
    return new DataTencentcloudTsfApplicationFileConfigResultContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTsfApplicationFileConfigResult {
}

export function dataTencentcloudTsfApplicationFileConfigResultToTerraform(struct?: DataTencentcloudTsfApplicationFileConfigResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfApplicationFileConfigResultToHclTerraform(struct?: DataTencentcloudTsfApplicationFileConfigResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfApplicationFileConfigResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfApplicationFileConfigResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfApplicationFileConfigResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  private _content = new DataTencentcloudTsfApplicationFileConfigResultContentList(this, "content", false);
  public get content() {
    return this._content;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
}

export class DataTencentcloudTsfApplicationFileConfigResultList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfApplicationFileConfigResultOutputReference {
    return new DataTencentcloudTsfApplicationFileConfigResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tsf_application_file_config tencentcloud_tsf_application_file_config}
*/
export class DataTencentcloudTsfApplicationFileConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_application_file_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTsfApplicationFileConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTsfApplicationFileConfig to import
  * @param importFromId The id of the existing DataTencentcloudTsfApplicationFileConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tsf_application_file_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTsfApplicationFileConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_application_file_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tsf_application_file_config tencentcloud_tsf_application_file_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTsfApplicationFileConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTsfApplicationFileConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_application_file_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._configId = config.configId;
    this._configIdList = config.configIdList;
    this._configName = config.configName;
    this._configVersion = config.configVersion;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // config_id - computed: false, optional: true, required: false
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

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

  // config_name - computed: false, optional: true, required: false
  private _configName?: string; 
  public get configName() {
    return this.getStringAttribute('config_name');
  }
  public set configName(value: string) {
    this._configName = value;
  }
  public resetConfigName() {
    this._configName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configNameInput() {
    return this._configName;
  }

  // config_version - computed: false, optional: true, required: false
  private _configVersion?: string; 
  public get configVersion() {
    return this.getStringAttribute('config_version');
  }
  public set configVersion(value: string) {
    this._configVersion = value;
  }
  public resetConfigVersion() {
    this._configVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configVersionInput() {
    return this._configVersion;
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
  private _result = new DataTencentcloudTsfApplicationFileConfigResultList(this, "result", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      config_id: cdktf.stringToTerraform(this._configId),
      config_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configIdList),
      config_name: cdktf.stringToTerraform(this._configName),
      config_version: cdktf.stringToTerraform(this._configVersion),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_id: {
        value: cdktf.stringToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      config_name: {
        value: cdktf.stringToHclTerraform(this._configName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_version: {
        value: cdktf.stringToHclTerraform(this._configVersion),
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
