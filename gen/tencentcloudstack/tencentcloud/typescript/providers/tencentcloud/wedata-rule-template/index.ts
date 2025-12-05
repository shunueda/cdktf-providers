// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_rule_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataRuleTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_rule_template#description WedataRuleTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_rule_template#id WedataRuleTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to associate other library tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_rule_template#multi_source_flag WedataRuleTemplate#multi_source_flag}
  */
  readonly multiSourceFlag?: boolean | cdktf.IResolvable;
  /**
  * Template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_rule_template#name WedataRuleTemplate#name}
  */
  readonly name?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_rule_template#project_id WedataRuleTemplate#project_id}
  */
  readonly projectId: string;
  /**
  * Quality inspection dimensions. `1`: Accuracy, `2`: Uniqueness, `3`: Completeness, `4`: Consistency, `5`: Timeliness, `6`: Effectiveness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_rule_template#quality_dim WedataRuleTemplate#quality_dim}
  */
  readonly qualityDim?: number;
  /**
  * The engine type corresponding to the source. `2`: hive,`4`: spark, `16`: dlc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_rule_template#source_engine_types WedataRuleTemplate#source_engine_types}
  */
  readonly sourceEngineTypes?: number[];
  /**
  * Source data object type. `1`: Constant, `2`: Offline table level, `3`: Offline field level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_rule_template#source_object_type WedataRuleTemplate#source_object_type}
  */
  readonly sourceObjectType?: number;
  /**
  * SQL Expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_rule_template#sql_expression WedataRuleTemplate#sql_expression}
  */
  readonly sqlExpression?: string;
  /**
  * Template type. `1` means System template, `2` means Custom template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_rule_template#type WedataRuleTemplate#type}
  */
  readonly type?: number;
  /**
  * If add where.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_rule_template#where_flag WedataRuleTemplate#where_flag}
  */
  readonly whereFlag?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_rule_template tencentcloud_wedata_rule_template}
*/
export class WedataRuleTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_rule_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataRuleTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataRuleTemplate to import
  * @param importFromId The id of the existing WedataRuleTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_rule_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataRuleTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_rule_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_rule_template tencentcloud_wedata_rule_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataRuleTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: WedataRuleTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_rule_template',
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
    this._description = config.description;
    this._id = config.id;
    this._multiSourceFlag = config.multiSourceFlag;
    this._name = config.name;
    this._projectId = config.projectId;
    this._qualityDim = config.qualityDim;
    this._sourceEngineTypes = config.sourceEngineTypes;
    this._sourceObjectType = config.sourceObjectType;
    this._sqlExpression = config.sqlExpression;
    this._type = config.type;
    this._whereFlag = config.whereFlag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // multi_source_flag - computed: false, optional: true, required: false
  private _multiSourceFlag?: boolean | cdktf.IResolvable; 
  public get multiSourceFlag() {
    return this.getBooleanAttribute('multi_source_flag');
  }
  public set multiSourceFlag(value: boolean | cdktf.IResolvable) {
    this._multiSourceFlag = value;
  }
  public resetMultiSourceFlag() {
    this._multiSourceFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiSourceFlagInput() {
    return this._multiSourceFlag;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // quality_dim - computed: false, optional: true, required: false
  private _qualityDim?: number; 
  public get qualityDim() {
    return this.getNumberAttribute('quality_dim');
  }
  public set qualityDim(value: number) {
    this._qualityDim = value;
  }
  public resetQualityDim() {
    this._qualityDim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityDimInput() {
    return this._qualityDim;
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

  // sql_expression - computed: false, optional: true, required: false
  private _sqlExpression?: string; 
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }
  public set sqlExpression(value: string) {
    this._sqlExpression = value;
  }
  public resetSqlExpression() {
    this._sqlExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlExpressionInput() {
    return this._sqlExpression;
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

  // where_flag - computed: false, optional: true, required: false
  private _whereFlag?: boolean | cdktf.IResolvable; 
  public get whereFlag() {
    return this.getBooleanAttribute('where_flag');
  }
  public set whereFlag(value: boolean | cdktf.IResolvable) {
    this._whereFlag = value;
  }
  public resetWhereFlag() {
    this._whereFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereFlagInput() {
    return this._whereFlag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      multi_source_flag: cdktf.booleanToTerraform(this._multiSourceFlag),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      quality_dim: cdktf.numberToTerraform(this._qualityDim),
      source_engine_types: cdktf.listMapper(cdktf.numberToTerraform, false)(this._sourceEngineTypes),
      source_object_type: cdktf.numberToTerraform(this._sourceObjectType),
      sql_expression: cdktf.stringToTerraform(this._sqlExpression),
      type: cdktf.numberToTerraform(this._type),
      where_flag: cdktf.booleanToTerraform(this._whereFlag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      multi_source_flag: {
        value: cdktf.booleanToHclTerraform(this._multiSourceFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      quality_dim: {
        value: cdktf.numberToHclTerraform(this._qualityDim),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      sql_expression: {
        value: cdktf.stringToHclTerraform(this._sqlExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      where_flag: {
        value: cdktf.booleanToHclTerraform(this._whereFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
