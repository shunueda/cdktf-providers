// https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseOutlierRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#baseline_window_size CseOutlierRule#baseline_window_size}
  */
  readonly baselineWindowSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#description_expression CseOutlierRule#description_expression}
  */
  readonly descriptionExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#deviation_threshold CseOutlierRule#deviation_threshold}
  */
  readonly deviationThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#enabled CseOutlierRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#floor_value CseOutlierRule#floor_value}
  */
  readonly floorValue: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#group_by_fields CseOutlierRule#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#id CseOutlierRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#is_prototype CseOutlierRule#is_prototype}
  */
  readonly isPrototype?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#match_expression CseOutlierRule#match_expression}
  */
  readonly matchExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#name CseOutlierRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#name_expression CseOutlierRule#name_expression}
  */
  readonly nameExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#retention_window_size CseOutlierRule#retention_window_size}
  */
  readonly retentionWindowSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#severity CseOutlierRule#severity}
  */
  readonly severity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#summary_expression CseOutlierRule#summary_expression}
  */
  readonly summaryExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#suppression_window_size CseOutlierRule#suppression_window_size}
  */
  readonly suppressionWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#tags CseOutlierRule#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#window_size CseOutlierRule#window_size}
  */
  readonly windowSize: string;
  /**
  * aggregation_functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#aggregation_functions CseOutlierRule#aggregation_functions}
  */
  readonly aggregationFunctions: CseOutlierRuleAggregationFunctions;
  /**
  * entity_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#entity_selectors CseOutlierRule#entity_selectors}
  */
  readonly entitySelectors: CseOutlierRuleEntitySelectors[] | cdktf.IResolvable;
}
export interface CseOutlierRuleAggregationFunctions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#arguments CseOutlierRule#arguments}
  */
  readonly arguments: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#function CseOutlierRule#function}
  */
  readonly function: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#name CseOutlierRule#name}
  */
  readonly name: string;
}

export function cseOutlierRuleAggregationFunctionsToTerraform(struct?: CseOutlierRuleAggregationFunctionsOutputReference | CseOutlierRuleAggregationFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.arguments),
    function: cdktf.stringToTerraform(struct!.function),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cseOutlierRuleAggregationFunctionsToHclTerraform(struct?: CseOutlierRuleAggregationFunctionsOutputReference | CseOutlierRuleAggregationFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.arguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CseOutlierRuleAggregationFunctionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CseOutlierRuleAggregationFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CseOutlierRuleAggregationFunctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arguments = undefined;
      this._function = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arguments = value.arguments;
      this._function = value.function;
      this._name = value.name;
    }
  }

  // arguments - computed: false, optional: false, required: true
  private _arguments?: string[]; 
  public get arguments() {
    return this.getListAttribute('arguments');
  }
  public set arguments(value: string[]) {
    this._arguments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // function - computed: false, optional: false, required: true
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
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
}
export interface CseOutlierRuleEntitySelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#entity_type CseOutlierRule#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#expression CseOutlierRule#expression}
  */
  readonly expression: string;
}

export function cseOutlierRuleEntitySelectorsToTerraform(struct?: CseOutlierRuleEntitySelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function cseOutlierRuleEntitySelectorsToHclTerraform(struct?: CseOutlierRuleEntitySelectors | cdktf.IResolvable): any {
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

export class CseOutlierRuleEntitySelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CseOutlierRuleEntitySelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CseOutlierRuleEntitySelectors | cdktf.IResolvable | undefined) {
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

export class CseOutlierRuleEntitySelectorsList extends cdktf.ComplexList {
  public internalValue? : CseOutlierRuleEntitySelectors[] | cdktf.IResolvable

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
  public get(index: number): CseOutlierRuleEntitySelectorsOutputReference {
    return new CseOutlierRuleEntitySelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule sumologic_cse_outlier_rule}
*/
export class CseOutlierRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_outlier_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CseOutlierRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CseOutlierRule to import
  * @param importFromId The id of the existing CseOutlierRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CseOutlierRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_cse_outlier_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_outlier_rule sumologic_cse_outlier_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseOutlierRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CseOutlierRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_outlier_rule',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baselineWindowSize = config.baselineWindowSize;
    this._descriptionExpression = config.descriptionExpression;
    this._deviationThreshold = config.deviationThreshold;
    this._enabled = config.enabled;
    this._floorValue = config.floorValue;
    this._groupByFields = config.groupByFields;
    this._id = config.id;
    this._isPrototype = config.isPrototype;
    this._matchExpression = config.matchExpression;
    this._name = config.name;
    this._nameExpression = config.nameExpression;
    this._retentionWindowSize = config.retentionWindowSize;
    this._severity = config.severity;
    this._summaryExpression = config.summaryExpression;
    this._suppressionWindowSize = config.suppressionWindowSize;
    this._tags = config.tags;
    this._windowSize = config.windowSize;
    this._aggregationFunctions.internalValue = config.aggregationFunctions;
    this._entitySelectors.internalValue = config.entitySelectors;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baseline_window_size - computed: false, optional: false, required: true
  private _baselineWindowSize?: string; 
  public get baselineWindowSize() {
    return this.getStringAttribute('baseline_window_size');
  }
  public set baselineWindowSize(value: string) {
    this._baselineWindowSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineWindowSizeInput() {
    return this._baselineWindowSize;
  }

  // description_expression - computed: false, optional: false, required: true
  private _descriptionExpression?: string; 
  public get descriptionExpression() {
    return this.getStringAttribute('description_expression');
  }
  public set descriptionExpression(value: string) {
    this._descriptionExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionExpressionInput() {
    return this._descriptionExpression;
  }

  // deviation_threshold - computed: false, optional: false, required: true
  private _deviationThreshold?: number; 
  public get deviationThreshold() {
    return this.getNumberAttribute('deviation_threshold');
  }
  public set deviationThreshold(value: number) {
    this._deviationThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviationThresholdInput() {
    return this._deviationThreshold;
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

  // floor_value - computed: false, optional: false, required: true
  private _floorValue?: number; 
  public get floorValue() {
    return this.getNumberAttribute('floor_value');
  }
  public set floorValue(value: number) {
    this._floorValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get floorValueInput() {
    return this._floorValue;
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

  // match_expression - computed: false, optional: false, required: true
  private _matchExpression?: string; 
  public get matchExpression() {
    return this.getStringAttribute('match_expression');
  }
  public set matchExpression(value: string) {
    this._matchExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionInput() {
    return this._matchExpression;
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

  // name_expression - computed: false, optional: false, required: true
  private _nameExpression?: string; 
  public get nameExpression() {
    return this.getStringAttribute('name_expression');
  }
  public set nameExpression(value: string) {
    this._nameExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameExpressionInput() {
    return this._nameExpression;
  }

  // retention_window_size - computed: false, optional: false, required: true
  private _retentionWindowSize?: string; 
  public get retentionWindowSize() {
    return this.getStringAttribute('retention_window_size');
  }
  public set retentionWindowSize(value: string) {
    this._retentionWindowSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionWindowSizeInput() {
    return this._retentionWindowSize;
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

  // aggregation_functions - computed: false, optional: false, required: true
  private _aggregationFunctions = new CseOutlierRuleAggregationFunctionsOutputReference(this, "aggregation_functions");
  public get aggregationFunctions() {
    return this._aggregationFunctions;
  }
  public putAggregationFunctions(value: CseOutlierRuleAggregationFunctions) {
    this._aggregationFunctions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationFunctionsInput() {
    return this._aggregationFunctions.internalValue;
  }

  // entity_selectors - computed: false, optional: false, required: true
  private _entitySelectors = new CseOutlierRuleEntitySelectorsList(this, "entity_selectors", false);
  public get entitySelectors() {
    return this._entitySelectors;
  }
  public putEntitySelectors(value: CseOutlierRuleEntitySelectors[] | cdktf.IResolvable) {
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
      baseline_window_size: cdktf.stringToTerraform(this._baselineWindowSize),
      description_expression: cdktf.stringToTerraform(this._descriptionExpression),
      deviation_threshold: cdktf.numberToTerraform(this._deviationThreshold),
      enabled: cdktf.booleanToTerraform(this._enabled),
      floor_value: cdktf.numberToTerraform(this._floorValue),
      group_by_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupByFields),
      id: cdktf.stringToTerraform(this._id),
      is_prototype: cdktf.booleanToTerraform(this._isPrototype),
      match_expression: cdktf.stringToTerraform(this._matchExpression),
      name: cdktf.stringToTerraform(this._name),
      name_expression: cdktf.stringToTerraform(this._nameExpression),
      retention_window_size: cdktf.stringToTerraform(this._retentionWindowSize),
      severity: cdktf.numberToTerraform(this._severity),
      summary_expression: cdktf.stringToTerraform(this._summaryExpression),
      suppression_window_size: cdktf.numberToTerraform(this._suppressionWindowSize),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      window_size: cdktf.stringToTerraform(this._windowSize),
      aggregation_functions: cseOutlierRuleAggregationFunctionsToTerraform(this._aggregationFunctions.internalValue),
      entity_selectors: cdktf.listMapper(cseOutlierRuleEntitySelectorsToTerraform, true)(this._entitySelectors.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      baseline_window_size: {
        value: cdktf.stringToHclTerraform(this._baselineWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description_expression: {
        value: cdktf.stringToHclTerraform(this._descriptionExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deviation_threshold: {
        value: cdktf.numberToHclTerraform(this._deviationThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      floor_value: {
        value: cdktf.numberToHclTerraform(this._floorValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      match_expression: {
        value: cdktf.stringToHclTerraform(this._matchExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_expression: {
        value: cdktf.stringToHclTerraform(this._nameExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_window_size: {
        value: cdktf.stringToHclTerraform(this._retentionWindowSize),
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
      aggregation_functions: {
        value: cseOutlierRuleAggregationFunctionsToHclTerraform(this._aggregationFunctions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CseOutlierRuleAggregationFunctionsList",
      },
      entity_selectors: {
        value: cdktf.listMapperHcl(cseOutlierRuleEntitySelectorsToHclTerraform, true)(this._entitySelectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CseOutlierRuleEntitySelectorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
