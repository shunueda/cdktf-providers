// https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseFirstSeenRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#baseline_type CseFirstSeenRule#baseline_type}
  */
  readonly baselineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#baseline_window_size CseFirstSeenRule#baseline_window_size}
  */
  readonly baselineWindowSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#description_expression CseFirstSeenRule#description_expression}
  */
  readonly descriptionExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#enabled CseFirstSeenRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#filter_expression CseFirstSeenRule#filter_expression}
  */
  readonly filterExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#group_by_fields CseFirstSeenRule#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#id CseFirstSeenRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#is_prototype CseFirstSeenRule#is_prototype}
  */
  readonly isPrototype?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#name CseFirstSeenRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#name_expression CseFirstSeenRule#name_expression}
  */
  readonly nameExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#retention_window_size CseFirstSeenRule#retention_window_size}
  */
  readonly retentionWindowSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#severity CseFirstSeenRule#severity}
  */
  readonly severity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#summary_expression CseFirstSeenRule#summary_expression}
  */
  readonly summaryExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#suppression_window_size CseFirstSeenRule#suppression_window_size}
  */
  readonly suppressionWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#tags CseFirstSeenRule#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#value_fields CseFirstSeenRule#value_fields}
  */
  readonly valueFields: string[];
  /**
  * entity_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#entity_selectors CseFirstSeenRule#entity_selectors}
  */
  readonly entitySelectors: CseFirstSeenRuleEntitySelectors[] | cdktf.IResolvable;
}
export interface CseFirstSeenRuleEntitySelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#entity_type CseFirstSeenRule#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#expression CseFirstSeenRule#expression}
  */
  readonly expression: string;
}

export function cseFirstSeenRuleEntitySelectorsToTerraform(struct?: CseFirstSeenRuleEntitySelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function cseFirstSeenRuleEntitySelectorsToHclTerraform(struct?: CseFirstSeenRuleEntitySelectors | cdktf.IResolvable): any {
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

export class CseFirstSeenRuleEntitySelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CseFirstSeenRuleEntitySelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CseFirstSeenRuleEntitySelectors | cdktf.IResolvable | undefined) {
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

export class CseFirstSeenRuleEntitySelectorsList extends cdktf.ComplexList {
  public internalValue? : CseFirstSeenRuleEntitySelectors[] | cdktf.IResolvable

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
  public get(index: number): CseFirstSeenRuleEntitySelectorsOutputReference {
    return new CseFirstSeenRuleEntitySelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule sumologic_cse_first_seen_rule}
*/
export class CseFirstSeenRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_first_seen_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CseFirstSeenRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CseFirstSeenRule to import
  * @param importFromId The id of the existing CseFirstSeenRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CseFirstSeenRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_cse_first_seen_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_first_seen_rule sumologic_cse_first_seen_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseFirstSeenRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CseFirstSeenRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_first_seen_rule',
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
    this._baselineType = config.baselineType;
    this._baselineWindowSize = config.baselineWindowSize;
    this._descriptionExpression = config.descriptionExpression;
    this._enabled = config.enabled;
    this._filterExpression = config.filterExpression;
    this._groupByFields = config.groupByFields;
    this._id = config.id;
    this._isPrototype = config.isPrototype;
    this._name = config.name;
    this._nameExpression = config.nameExpression;
    this._retentionWindowSize = config.retentionWindowSize;
    this._severity = config.severity;
    this._summaryExpression = config.summaryExpression;
    this._suppressionWindowSize = config.suppressionWindowSize;
    this._tags = config.tags;
    this._valueFields = config.valueFields;
    this._entitySelectors.internalValue = config.entitySelectors;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baseline_type - computed: false, optional: false, required: true
  private _baselineType?: string; 
  public get baselineType() {
    return this.getStringAttribute('baseline_type');
  }
  public set baselineType(value: string) {
    this._baselineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineTypeInput() {
    return this._baselineType;
  }

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

  // filter_expression - computed: false, optional: false, required: true
  private _filterExpression?: string; 
  public get filterExpression() {
    return this.getStringAttribute('filter_expression');
  }
  public set filterExpression(value: string) {
    this._filterExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExpressionInput() {
    return this._filterExpression;
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

  // value_fields - computed: false, optional: false, required: true
  private _valueFields?: string[]; 
  public get valueFields() {
    return this.getListAttribute('value_fields');
  }
  public set valueFields(value: string[]) {
    this._valueFields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFieldsInput() {
    return this._valueFields;
  }

  // entity_selectors - computed: false, optional: false, required: true
  private _entitySelectors = new CseFirstSeenRuleEntitySelectorsList(this, "entity_selectors", false);
  public get entitySelectors() {
    return this._entitySelectors;
  }
  public putEntitySelectors(value: CseFirstSeenRuleEntitySelectors[] | cdktf.IResolvable) {
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
      baseline_type: cdktf.stringToTerraform(this._baselineType),
      baseline_window_size: cdktf.stringToTerraform(this._baselineWindowSize),
      description_expression: cdktf.stringToTerraform(this._descriptionExpression),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filter_expression: cdktf.stringToTerraform(this._filterExpression),
      group_by_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupByFields),
      id: cdktf.stringToTerraform(this._id),
      is_prototype: cdktf.booleanToTerraform(this._isPrototype),
      name: cdktf.stringToTerraform(this._name),
      name_expression: cdktf.stringToTerraform(this._nameExpression),
      retention_window_size: cdktf.stringToTerraform(this._retentionWindowSize),
      severity: cdktf.numberToTerraform(this._severity),
      summary_expression: cdktf.stringToTerraform(this._summaryExpression),
      suppression_window_size: cdktf.numberToTerraform(this._suppressionWindowSize),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      value_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._valueFields),
      entity_selectors: cdktf.listMapper(cseFirstSeenRuleEntitySelectorsToTerraform, true)(this._entitySelectors.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      baseline_type: {
        value: cdktf.stringToHclTerraform(this._baselineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_expression: {
        value: cdktf.stringToHclTerraform(this._filterExpression),
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
      value_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._valueFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      entity_selectors: {
        value: cdktf.listMapperHcl(cseFirstSeenRuleEntitySelectorsToHclTerraform, true)(this._entitySelectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CseFirstSeenRuleEntitySelectorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
