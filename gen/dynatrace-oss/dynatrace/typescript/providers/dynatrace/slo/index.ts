// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SloConfig extends cdktf.TerraformMetaArguments {
  /**
  * The total count metric (the denominator in rate calculation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#denominator Slo#denominator}
  */
  readonly denominator?: string;
  /**
  * The custom description of the SLO (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#description Slo#description}
  */
  readonly description?: string;
  /**
  * The SLO is enabled (`false`) or disabled (`true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#disabled Slo#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The evaluation type of the SLO. Currently only `AGGREGATE` is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#evaluation Slo#evaluation}
  */
  readonly evaluation: string;
  /**
  * The entity filter for the SLO evaluation. Use the [syntax of entity selector](https://dt-url.net/entityselector)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#filter Slo#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#id Slo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The percentage-based metric expression for the calculation of the SLO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#metric_expression Slo#metric_expression}
  */
  readonly metricExpression?: string;
  /**
  * The name that is used to create SLO func metrics keys. Once created, metric name cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#metric_name Slo#metric_name}
  */
  readonly metricName?: string;
  /**
  * The name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * The metric for the count of successes (the numerator in rate calculation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#numerator Slo#numerator}
  */
  readonly numerator?: string;
  /**
  * The percentage-based metric for the calculation of the SLO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#rate Slo#rate}
  */
  readonly rate?: string;
  /**
  * The target value of the SLO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#target Slo#target}
  */
  readonly target: number;
  /**
  * The timeframe for the SLO evaluation. Use the syntax of the global timeframe selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#timeframe Slo#timeframe}
  */
  readonly timeframe: string;
  /**
  * The warning value of the SLO. At warning state the SLO is still fulfilled but is getting close to failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#warning Slo#warning}
  */
  readonly warning: number;
  /**
  * error_budget_burn_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#error_budget_burn_rate Slo#error_budget_burn_rate}
  */
  readonly errorBudgetBurnRate?: SloErrorBudgetBurnRate;
}
export interface SloErrorBudgetBurnRate {
  /**
  * The error budget burn rate calculation is enabled (true) or disabled (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#burn_rate_visualization_enabled Slo#burn_rate_visualization_enabled}
  */
  readonly burnRateVisualizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The threshold between a slow and a fast burn rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#fast_burn_threshold Slo#fast_burn_threshold}
  */
  readonly fastBurnThreshold?: number;
}

export function sloErrorBudgetBurnRateToTerraform(struct?: SloErrorBudgetBurnRateOutputReference | SloErrorBudgetBurnRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burn_rate_visualization_enabled: cdktf.booleanToTerraform(struct!.burnRateVisualizationEnabled),
    fast_burn_threshold: cdktf.numberToTerraform(struct!.fastBurnThreshold),
  }
}


export function sloErrorBudgetBurnRateToHclTerraform(struct?: SloErrorBudgetBurnRateOutputReference | SloErrorBudgetBurnRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burn_rate_visualization_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.burnRateVisualizationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fast_burn_threshold: {
      value: cdktf.numberToHclTerraform(struct!.fastBurnThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloErrorBudgetBurnRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloErrorBudgetBurnRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burnRateVisualizationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.burnRateVisualizationEnabled = this._burnRateVisualizationEnabled;
    }
    if (this._fastBurnThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastBurnThreshold = this._fastBurnThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloErrorBudgetBurnRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._burnRateVisualizationEnabled = undefined;
      this._fastBurnThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._burnRateVisualizationEnabled = value.burnRateVisualizationEnabled;
      this._fastBurnThreshold = value.fastBurnThreshold;
    }
  }

  // burn_rate_visualization_enabled - computed: false, optional: true, required: false
  private _burnRateVisualizationEnabled?: boolean | cdktf.IResolvable; 
  public get burnRateVisualizationEnabled() {
    return this.getBooleanAttribute('burn_rate_visualization_enabled');
  }
  public set burnRateVisualizationEnabled(value: boolean | cdktf.IResolvable) {
    this._burnRateVisualizationEnabled = value;
  }
  public resetBurnRateVisualizationEnabled() {
    this._burnRateVisualizationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burnRateVisualizationEnabledInput() {
    return this._burnRateVisualizationEnabled;
  }

  // fast_burn_threshold - computed: false, optional: true, required: false
  private _fastBurnThreshold?: number; 
  public get fastBurnThreshold() {
    return this.getNumberAttribute('fast_burn_threshold');
  }
  public set fastBurnThreshold(value: number) {
    this._fastBurnThreshold = value;
  }
  public resetFastBurnThreshold() {
    this._fastBurnThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastBurnThresholdInput() {
    return this._fastBurnThreshold;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo dynatrace_slo}
*/
export class Slo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_slo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Slo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Slo to import
  * @param importFromId The id of the existing Slo that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Slo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_slo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/slo dynatrace_slo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SloConfig
  */
  public constructor(scope: Construct, id: string, config: SloConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_slo',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._denominator = config.denominator;
    this._description = config.description;
    this._disabled = config.disabled;
    this._evaluation = config.evaluation;
    this._filter = config.filter;
    this._id = config.id;
    this._metricExpression = config.metricExpression;
    this._metricName = config.metricName;
    this._name = config.name;
    this._numerator = config.numerator;
    this._rate = config.rate;
    this._target = config.target;
    this._timeframe = config.timeframe;
    this._warning = config.warning;
    this._errorBudgetBurnRate.internalValue = config.errorBudgetBurnRate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // denominator - computed: false, optional: true, required: false
  private _denominator?: string; 
  public get denominator() {
    return this.getStringAttribute('denominator');
  }
  public set denominator(value: string) {
    this._denominator = value;
  }
  public resetDenominator() {
    this._denominator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denominatorInput() {
    return this._denominator;
  }

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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // evaluation - computed: false, optional: false, required: true
  private _evaluation?: string; 
  public get evaluation() {
    return this.getStringAttribute('evaluation');
  }
  public set evaluation(value: string) {
    this._evaluation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationInput() {
    return this._evaluation;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // metric_expression - computed: false, optional: true, required: false
  private _metricExpression?: string; 
  public get metricExpression() {
    return this.getStringAttribute('metric_expression');
  }
  public set metricExpression(value: string) {
    this._metricExpression = value;
  }
  public resetMetricExpression() {
    this._metricExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricExpressionInput() {
    return this._metricExpression;
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

  // numerator - computed: false, optional: true, required: false
  private _numerator?: string; 
  public get numerator() {
    return this.getStringAttribute('numerator');
  }
  public set numerator(value: string) {
    this._numerator = value;
  }
  public resetNumerator() {
    this._numerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numeratorInput() {
    return this._numerator;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // target - computed: false, optional: false, required: true
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeframe - computed: false, optional: false, required: true
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
  }

  // warning - computed: false, optional: false, required: true
  private _warning?: number; 
  public get warning() {
    return this.getNumberAttribute('warning');
  }
  public set warning(value: number) {
    this._warning = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }

  // error_budget_burn_rate - computed: false, optional: true, required: false
  private _errorBudgetBurnRate = new SloErrorBudgetBurnRateOutputReference(this, "error_budget_burn_rate");
  public get errorBudgetBurnRate() {
    return this._errorBudgetBurnRate;
  }
  public putErrorBudgetBurnRate(value: SloErrorBudgetBurnRate) {
    this._errorBudgetBurnRate.internalValue = value;
  }
  public resetErrorBudgetBurnRate() {
    this._errorBudgetBurnRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorBudgetBurnRateInput() {
    return this._errorBudgetBurnRate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      denominator: cdktf.stringToTerraform(this._denominator),
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      evaluation: cdktf.stringToTerraform(this._evaluation),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      metric_expression: cdktf.stringToTerraform(this._metricExpression),
      metric_name: cdktf.stringToTerraform(this._metricName),
      name: cdktf.stringToTerraform(this._name),
      numerator: cdktf.stringToTerraform(this._numerator),
      rate: cdktf.stringToTerraform(this._rate),
      target: cdktf.numberToTerraform(this._target),
      timeframe: cdktf.stringToTerraform(this._timeframe),
      warning: cdktf.numberToTerraform(this._warning),
      error_budget_burn_rate: sloErrorBudgetBurnRateToTerraform(this._errorBudgetBurnRate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      denominator: {
        value: cdktf.stringToHclTerraform(this._denominator),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      evaluation: {
        value: cdktf.stringToHclTerraform(this._evaluation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      metric_expression: {
        value: cdktf.stringToHclTerraform(this._metricExpression),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      numerator: {
        value: cdktf.stringToHclTerraform(this._numerator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate: {
        value: cdktf.stringToHclTerraform(this._rate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.numberToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeframe: {
        value: cdktf.stringToHclTerraform(this._timeframe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warning: {
        value: cdktf.numberToHclTerraform(this._warning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      error_budget_burn_rate: {
        value: sloErrorBudgetBurnRateToHclTerraform(this._errorBudgetBurnRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SloErrorBudgetBurnRateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
