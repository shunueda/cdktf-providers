// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/wedata_rule_templates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudWedataRuleTemplatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/wedata_rule_templates#id DataTencentcloudWedataRuleTemplates#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/wedata_rule_templates#project_id DataTencentcloudWedataRuleTemplates#project_id}
  */
  readonly projectId?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/wedata_rule_templates#result_output_file DataTencentcloudWedataRuleTemplates#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Applicable type of source data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/wedata_rule_templates#source_engine_types DataTencentcloudWedataRuleTemplates#source_engine_types}
  */
  readonly sourceEngineTypes?: number[];
  /**
  * Source data object type. `1`: Constant, `2`: Offline table level, `3`: Offline field level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/wedata_rule_templates#source_object_type DataTencentcloudWedataRuleTemplates#source_object_type}
  */
  readonly sourceObjectType?: number;
  /**
  * Template type. `1` means System template, `2` means Custom template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/wedata_rule_templates#type DataTencentcloudWedataRuleTemplates#type}
  */
  readonly type?: number;
}
export interface DataTencentcloudWedataRuleTemplatesData {
}

export function dataTencentcloudWedataRuleTemplatesDataToTerraform(struct?: DataTencentcloudWedataRuleTemplatesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataRuleTemplatesDataToHclTerraform(struct?: DataTencentcloudWedataRuleTemplatesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataRuleTemplatesDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataRuleTemplatesData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataRuleTemplatesData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // citation_count - computed: true, optional: false, required: false
  public get citationCount() {
    return this.getNumberAttribute('citation_count');
  }

  // compare_type - computed: true, optional: false, required: false
  public get compareType() {
    return this.getNumberAttribute('compare_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // multi_source_flag - computed: true, optional: false, required: false
  public get multiSourceFlag() {
    return this.getBooleanAttribute('multi_source_flag');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // quality_dim - computed: true, optional: false, required: false
  public get qualityDim() {
    return this.getNumberAttribute('quality_dim');
  }

  // rule_template_id - computed: true, optional: false, required: false
  public get ruleTemplateId() {
    return this.getNumberAttribute('rule_template_id');
  }

  // source_content - computed: true, optional: false, required: false
  public get sourceContent() {
    return this.getStringAttribute('source_content');
  }

  // source_engine_types - computed: true, optional: false, required: false
  public get sourceEngineTypes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('source_engine_types')));
  }

  // source_object_data_type - computed: true, optional: false, required: false
  public get sourceObjectDataType() {
    return this.getNumberAttribute('source_object_data_type');
  }

  // source_object_type - computed: true, optional: false, required: false
  public get sourceObjectType() {
    return this.getNumberAttribute('source_object_type');
  }

  // sql_expression - computed: true, optional: false, required: false
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }

  // sub_quality_dim - computed: true, optional: false, required: false
  public get subQualityDim() {
    return this.getNumberAttribute('sub_quality_dim');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // where_flag - computed: true, optional: false, required: false
  public get whereFlag() {
    return this.getBooleanAttribute('where_flag');
  }
}

export class DataTencentcloudWedataRuleTemplatesDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataRuleTemplatesDataOutputReference {
    return new DataTencentcloudWedataRuleTemplatesDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/wedata_rule_templates tencentcloud_wedata_rule_templates}
*/
export class DataTencentcloudWedataRuleTemplates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_rule_templates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudWedataRuleTemplates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudWedataRuleTemplates to import
  * @param importFromId The id of the existing DataTencentcloudWedataRuleTemplates that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/wedata_rule_templates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudWedataRuleTemplates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_rule_templates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/wedata_rule_templates tencentcloud_wedata_rule_templates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudWedataRuleTemplatesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudWedataRuleTemplatesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_rule_templates',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._projectId = config.projectId;
    this._resultOutputFile = config.resultOutputFile;
    this._sourceEngineTypes = config.sourceEngineTypes;
    this._sourceObjectType = config.sourceObjectType;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataTencentcloudWedataRuleTemplatesDataList(this, "data", false);
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
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

  // source_engine_types - computed: false, optional: true, required: false
  private _sourceEngineTypes?: number[]; 
  public get sourceEngineTypes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('source_engine_types')));
  }
  public set sourceEngineTypes(value: number[]) {
    this._sourceEngineTypes = value;
  }
  public resetSourceEngineTypes() {
    this._sourceEngineTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEngineTypesInput() {
    return this._sourceEngineTypes;
  }

  // source_object_type - computed: false, optional: true, required: false
  private _sourceObjectType?: number; 
  public get sourceObjectType() {
    return this.getNumberAttribute('source_object_type');
  }
  public set sourceObjectType(value: number) {
    this._sourceObjectType = value;
  }
  public resetSourceObjectType() {
    this._sourceObjectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceObjectTypeInput() {
    return this._sourceObjectType;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      source_engine_types: cdktf.listMapper(cdktf.numberToTerraform, false)(this._sourceEngineTypes),
      source_object_type: cdktf.numberToTerraform(this._sourceObjectType),
      type: cdktf.numberToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      source_engine_types: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._sourceEngineTypes),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      source_object_type: {
        value: cdktf.numberToHclTerraform(this._sourceObjectType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
