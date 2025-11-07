// https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricsRollupRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules#account_id MetricsRollupRules#account_id}
  */
  readonly accountId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules#drop_original_metric MetricsRollupRules#drop_original_metric}
  */
  readonly dropOriginalMetric?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules#labels MetricsRollupRules#labels}
  */
  readonly labels: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules#labels_elimination_method MetricsRollupRules#labels_elimination_method}
  */
  readonly labelsEliminationMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules#metric_name MetricsRollupRules#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules#metric_type MetricsRollupRules#metric_type}
  */
  readonly metricType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules#name MetricsRollupRules#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules#new_metric_name_template MetricsRollupRules#new_metric_name_template}
  */
  readonly newMetricNameTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules#rollup_function MetricsRollupRules#rollup_function}
  */
  readonly rollupFunction?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules#filter MetricsRollupRules#filter}
  */
  readonly filter?: MetricsRollupRulesFilter;
}
export interface MetricsRollupRulesFilterExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules#comparison MetricsRollupRules#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules#name MetricsRollupRules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules#value MetricsRollupRules#value}
  */
  readonly value: string;
}

export function metricsRollupRulesFilterExpressionToTerraform(struct?: MetricsRollupRulesFilterExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function metricsRollupRulesFilterExpressionToHclTerraform(struct?: MetricsRollupRulesFilterExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktf.stringToHclTerraform(struct!.comparison),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsRollupRulesFilterExpressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricsRollupRulesFilterExpression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsRollupRulesFilterExpression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MetricsRollupRulesFilterExpressionList extends cdktf.ComplexList {
  public internalValue? : MetricsRollupRulesFilterExpression[] | cdktf.IResolvable

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
  public get(index: number): MetricsRollupRulesFilterExpressionOutputReference {
    return new MetricsRollupRulesFilterExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricsRollupRulesFilter {
  /**
  * expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules#expression MetricsRollupRules#expression}
  */
  readonly expression: MetricsRollupRulesFilterExpression[] | cdktf.IResolvable;
}

export function metricsRollupRulesFilterToTerraform(struct?: MetricsRollupRulesFilterOutputReference | MetricsRollupRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.listMapper(metricsRollupRulesFilterExpressionToTerraform, true)(struct!.expression),
  }
}


export function metricsRollupRulesFilterToHclTerraform(struct?: MetricsRollupRulesFilterOutputReference | MetricsRollupRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.listMapperHcl(metricsRollupRulesFilterExpressionToHclTerraform, true)(struct!.expression),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsRollupRulesFilterExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsRollupRulesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsRollupRulesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsRollupRulesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression.internalValue = value.expression;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression = new MetricsRollupRulesFilterExpressionList(this, "expression", false);
  public get expression() {
    return this._expression;
  }
  public putExpression(value: MetricsRollupRulesFilterExpression[] | cdktf.IResolvable) {
    this._expression.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules logzio_metrics_rollup_rules}
*/
export class MetricsRollupRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logzio_metrics_rollup_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricsRollupRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricsRollupRules to import
  * @param importFromId The id of the existing MetricsRollupRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricsRollupRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logzio_metrics_rollup_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_rollup_rules logzio_metrics_rollup_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricsRollupRulesConfig
  */
  public constructor(scope: Construct, id: string, config: MetricsRollupRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'logzio_metrics_rollup_rules',
      terraformGeneratorMetadata: {
        providerName: 'logzio',
        providerVersion: '1.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._dropOriginalMetric = config.dropOriginalMetric;
    this._labels = config.labels;
    this._labelsEliminationMethod = config.labelsEliminationMethod;
    this._metricName = config.metricName;
    this._metricType = config.metricType;
    this._name = config.name;
    this._newMetricNameTemplate = config.newMetricNameTemplate;
    this._rollupFunction = config.rollupFunction;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // drop_original_metric - computed: false, optional: true, required: false
  private _dropOriginalMetric?: boolean | cdktf.IResolvable; 
  public get dropOriginalMetric() {
    return this.getBooleanAttribute('drop_original_metric');
  }
  public set dropOriginalMetric(value: boolean | cdktf.IResolvable) {
    this._dropOriginalMetric = value;
  }
  public resetDropOriginalMetric() {
    this._dropOriginalMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropOriginalMetricInput() {
    return this._dropOriginalMetric;
  }

  // drop_policy_rule_id - computed: true, optional: false, required: false
  public get dropPolicyRuleId() {
    return this.getStringAttribute('drop_policy_rule_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_deleted - computed: true, optional: false, required: false
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
  }

  // labels - computed: false, optional: false, required: true
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // labels_elimination_method - computed: false, optional: false, required: true
  private _labelsEliminationMethod?: string; 
  public get labelsEliminationMethod() {
    return this.getStringAttribute('labels_elimination_method');
  }
  public set labelsEliminationMethod(value: string) {
    this._labelsEliminationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsEliminationMethodInput() {
    return this._labelsEliminationMethod;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
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

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // new_metric_name_template - computed: false, optional: true, required: false
  private _newMetricNameTemplate?: string; 
  public get newMetricNameTemplate() {
    return this.getStringAttribute('new_metric_name_template');
  }
  public set newMetricNameTemplate(value: string) {
    this._newMetricNameTemplate = value;
  }
  public resetNewMetricNameTemplate() {
    this._newMetricNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newMetricNameTemplateInput() {
    return this._newMetricNameTemplate;
  }

  // rollup_function - computed: false, optional: true, required: false
  private _rollupFunction?: string; 
  public get rollupFunction() {
    return this.getStringAttribute('rollup_function');
  }
  public set rollupFunction(value: string) {
    this._rollupFunction = value;
  }
  public resetRollupFunction() {
    this._rollupFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupFunctionInput() {
    return this._rollupFunction;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new MetricsRollupRulesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: MetricsRollupRulesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      drop_original_metric: cdktf.booleanToTerraform(this._dropOriginalMetric),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      labels_elimination_method: cdktf.stringToTerraform(this._labelsEliminationMethod),
      metric_name: cdktf.stringToTerraform(this._metricName),
      metric_type: cdktf.stringToTerraform(this._metricType),
      name: cdktf.stringToTerraform(this._name),
      new_metric_name_template: cdktf.stringToTerraform(this._newMetricNameTemplate),
      rollup_function: cdktf.stringToTerraform(this._rollupFunction),
      filter: metricsRollupRulesFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_original_metric: {
        value: cdktf.booleanToHclTerraform(this._dropOriginalMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      labels_elimination_method: {
        value: cdktf.stringToHclTerraform(this._labelsEliminationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_name: {
        value: cdktf.stringToHclTerraform(this._metricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_type: {
        value: cdktf.stringToHclTerraform(this._metricType),
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
      new_metric_name_template: {
        value: cdktf.stringToHclTerraform(this._newMetricNameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rollup_function: {
        value: cdktf.stringToHclTerraform(this._rollupFunction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: metricsRollupRulesFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetricsRollupRulesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
