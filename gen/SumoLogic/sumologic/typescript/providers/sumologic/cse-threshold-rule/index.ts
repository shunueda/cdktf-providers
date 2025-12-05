// https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseThresholdRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#count_distinct CseThresholdRule#count_distinct}
  */
  readonly countDistinct?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#count_field CseThresholdRule#count_field}
  */
  readonly countField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#description CseThresholdRule#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#enabled CseThresholdRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#expression CseThresholdRule#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#group_by_fields CseThresholdRule#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#id CseThresholdRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#is_prototype CseThresholdRule#is_prototype}
  */
  readonly isPrototype?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#limit CseThresholdRule#limit}
  */
  readonly limit: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#name CseThresholdRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#severity CseThresholdRule#severity}
  */
  readonly severity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#summary_expression CseThresholdRule#summary_expression}
  */
  readonly summaryExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#suppression_window_size CseThresholdRule#suppression_window_size}
  */
  readonly suppressionWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#tags CseThresholdRule#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#window_size CseThresholdRule#window_size}
  */
  readonly windowSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#window_size_millis CseThresholdRule#window_size_millis}
  */
  readonly windowSizeMillis?: string;
  /**
  * entity_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#entity_selectors CseThresholdRule#entity_selectors}
  */
  readonly entitySelectors: CseThresholdRuleEntitySelectors[] | cdktf.IResolvable;
}
export interface CseThresholdRuleEntitySelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#entity_type CseThresholdRule#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#expression CseThresholdRule#expression}
  */
  readonly expression: string;
}

export function cseThresholdRuleEntitySelectorsToTerraform(struct?: CseThresholdRuleEntitySelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function cseThresholdRuleEntitySelectorsToHclTerraform(struct?: CseThresholdRuleEntitySelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CseThresholdRuleEntitySelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CseThresholdRuleEntitySelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CseThresholdRuleEntitySelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityType = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityType = value.entityType;
      this._expression = value.expression;
    }
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class CseThresholdRuleEntitySelectorsList extends cdktf.ComplexList {
  public internalValue? : CseThresholdRuleEntitySelectors[] | cdktf.IResolvable

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
  public get(index: number): CseThresholdRuleEntitySelectorsOutputReference {
    return new CseThresholdRuleEntitySelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule sumologic_cse_threshold_rule}
*/
export class CseThresholdRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_threshold_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CseThresholdRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CseThresholdRule to import
  * @param importFromId The id of the existing CseThresholdRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CseThresholdRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_cse_threshold_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_threshold_rule sumologic_cse_threshold_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseThresholdRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CseThresholdRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_threshold_rule',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.2.1',
        providerVersionConstraint: '3.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._countDistinct = config.countDistinct;
    this._countField = config.countField;
    this._description = config.description;
    this._enabled = config.enabled;
    this._expression = config.expression;
    this._groupByFields = config.groupByFields;
    this._id = config.id;
    this._isPrototype = config.isPrototype;
    this._limit = config.limit;
    this._name = config.name;
    this._severity = config.severity;
    this._summaryExpression = config.summaryExpression;
    this._suppressionWindowSize = config.suppressionWindowSize;
    this._tags = config.tags;
    this._windowSize = config.windowSize;
    this._windowSizeMillis = config.windowSizeMillis;
    this._entitySelectors.internalValue = config.entitySelectors;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // count_distinct - computed: false, optional: true, required: false
  private _countDistinct?: boolean | cdktf.IResolvable; 
  public get countDistinct() {
    return this.getBooleanAttribute('count_distinct');
  }
  public set countDistinct(value: boolean | cdktf.IResolvable) {
    this._countDistinct = value;
  }
  public resetCountDistinct() {
    this._countDistinct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countDistinctInput() {
    return this._countDistinct;
  }

  // count_field - computed: false, optional: true, required: false
  private _countField?: string; 
  public get countField() {
    return this.getStringAttribute('count_field');
  }
  public set countField(value: string) {
    this._countField = value;
  }
  public resetCountField() {
    this._countField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countFieldInput() {
    return this._countField;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // group_by_fields - computed: false, optional: true, required: false
  private _groupByFields?: string[]; 
  public get groupByFields() {
    return this.getListAttribute('group_by_fields');
  }
  public set groupByFields(value: string[]) {
    this._groupByFields = value;
  }
  public resetGroupByFields() {
    this._groupByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByFieldsInput() {
    return this._groupByFields;
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

  // is_prototype - computed: false, optional: true, required: false
  private _isPrototype?: boolean | cdktf.IResolvable; 
  public get isPrototype() {
    return this.getBooleanAttribute('is_prototype');
  }
  public set isPrototype(value: boolean | cdktf.IResolvable) {
    this._isPrototype = value;
  }
  public resetIsPrototype() {
    this._isPrototype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrototypeInput() {
    return this._isPrototype;
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: number; 
  public get severity() {
    return this.getNumberAttribute('severity');
  }
  public set severity(value: number) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // summary_expression - computed: false, optional: true, required: false
  private _summaryExpression?: string; 
  public get summaryExpression() {
    return this.getStringAttribute('summary_expression');
  }
  public set summaryExpression(value: string) {
    this._summaryExpression = value;
  }
  public resetSummaryExpression() {
    this._summaryExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryExpressionInput() {
    return this._summaryExpression;
  }

  // suppression_window_size - computed: false, optional: true, required: false
  private _suppressionWindowSize?: number; 
  public get suppressionWindowSize() {
    return this.getNumberAttribute('suppression_window_size');
  }
  public set suppressionWindowSize(value: number) {
    this._suppressionWindowSize = value;
  }
  public resetSuppressionWindowSize() {
    this._suppressionWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionWindowSizeInput() {
    return this._suppressionWindowSize;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // window_size - computed: false, optional: false, required: true
  private _windowSize?: string; 
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
  public set windowSize(value: string) {
    this._windowSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }

  // window_size_millis - computed: false, optional: true, required: false
  private _windowSizeMillis?: string; 
  public get windowSizeMillis() {
    return this.getStringAttribute('window_size_millis');
  }
  public set windowSizeMillis(value: string) {
    this._windowSizeMillis = value;
  }
  public resetWindowSizeMillis() {
    this._windowSizeMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeMillisInput() {
    return this._windowSizeMillis;
  }

  // entity_selectors - computed: false, optional: false, required: true
  private _entitySelectors = new CseThresholdRuleEntitySelectorsList(this, "entity_selectors", false);
  public get entitySelectors() {
    return this._entitySelectors;
  }
  public putEntitySelectors(value: CseThresholdRuleEntitySelectors[] | cdktf.IResolvable) {
    this._entitySelectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySelectorsInput() {
    return this._entitySelectors.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      count_distinct: cdktf.booleanToTerraform(this._countDistinct),
      count_field: cdktf.stringToTerraform(this._countField),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expression: cdktf.stringToTerraform(this._expression),
      group_by_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupByFields),
      id: cdktf.stringToTerraform(this._id),
      is_prototype: cdktf.booleanToTerraform(this._isPrototype),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      severity: cdktf.numberToTerraform(this._severity),
      summary_expression: cdktf.stringToTerraform(this._summaryExpression),
      suppression_window_size: cdktf.numberToTerraform(this._suppressionWindowSize),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      window_size: cdktf.stringToTerraform(this._windowSize),
      window_size_millis: cdktf.stringToTerraform(this._windowSizeMillis),
      entity_selectors: cdktf.listMapper(cseThresholdRuleEntitySelectorsToTerraform, true)(this._entitySelectors.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      count_distinct: {
        value: cdktf.booleanToHclTerraform(this._countDistinct),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      count_field: {
        value: cdktf.stringToHclTerraform(this._countField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expression: {
        value: cdktf.stringToHclTerraform(this._expression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_by_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupByFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_prototype: {
        value: cdktf.booleanToHclTerraform(this._isPrototype),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.numberToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      summary_expression: {
        value: cdktf.stringToHclTerraform(this._summaryExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppression_window_size: {
        value: cdktf.numberToHclTerraform(this._suppressionWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      window_size: {
        value: cdktf.stringToHclTerraform(this._windowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      window_size_millis: {
        value: cdktf.stringToHclTerraform(this._windowSizeMillis),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_selectors: {
        value: cdktf.listMapperHcl(cseThresholdRuleEntitySelectorsToHclTerraform, true)(this._entitySelectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CseThresholdRuleEntitySelectorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
