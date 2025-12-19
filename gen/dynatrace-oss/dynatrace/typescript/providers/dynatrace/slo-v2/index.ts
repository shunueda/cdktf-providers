// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SloV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The description of the SLO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2#custom_description SloV2#custom_description}
  */
  readonly customDescription?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2#enabled SloV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `AGGREGATE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2#evaluation_type SloV2#evaluation_type}
  */
  readonly evaluationType: string;
  /**
  * Define the timeframe during which the SLO is to be evaluated. For the timeframe you can enter expressions like -1h (last hour), -1w (last week) or complex expressions like -2d to now (last two days), -1d/d to now/d (beginning of yesterday to beginning of today).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2#evaluation_window SloV2#evaluation_window}
  */
  readonly evaluationWindow: string;
  /**
  * Set a filter parameter (entitySelector) on any GET call to evaluate this SLO against specific services only (for example, type("SERVICE")).  For details, see the [Entity Selector documentation](https://dt-url.net/entityselector).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2#filter SloV2#filter}
  */
  readonly filter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2#id SloV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of this setting when referred to by the Config REST API V1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2#legacy_id SloV2#legacy_id}
  */
  readonly legacyId?: string;
  /**
  * For details, see the [Metrics page](/ui/metrics "Metrics page").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2#metric_expression SloV2#metric_expression}
  */
  readonly metricExpression: string;
  /**
  * Metric name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2#metric_name SloV2#metric_name}
  */
  readonly metricName?: string;
  /**
  * SLO name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2#name SloV2#name}
  */
  readonly name: string;
  /**
  * Set the target value of the SLO. A percentage below this value indicates a failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2#target_success SloV2#target_success}
  */
  readonly targetSuccess: number;
  /**
  * Set the warning value of the SLO. At the warning state the SLO is fulfilled. However, it is getting close to a failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2#target_warning SloV2#target_warning}
  */
  readonly targetWarning: number;
  /**
  * error_budget_burn_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2#error_budget_burn_rate SloV2#error_budget_burn_rate}
  */
  readonly errorBudgetBurnRate: SloV2ErrorBudgetBurnRate;
}
export interface SloV2ErrorBudgetBurnRate {
  /**
  * Burn rate visualization enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2#burn_rate_visualization_enabled SloV2#burn_rate_visualization_enabled}
  */
  readonly burnRateVisualizationEnabled: boolean | cdktf.IResolvable;
  /**
  * The threshold defines when a burn rate is marked as fast-burning (high-emergency). Burn rates lower than this threshold (and greater than 1) are highlighted as slow-burn (low-emergency).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2#fast_burn_threshold SloV2#fast_burn_threshold}
  */
  readonly fastBurnThreshold?: number;
}

export function sloV2ErrorBudgetBurnRateToTerraform(struct?: SloV2ErrorBudgetBurnRateOutputReference | SloV2ErrorBudgetBurnRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burn_rate_visualization_enabled: cdktf.booleanToTerraform(struct!.burnRateVisualizationEnabled),
    fast_burn_threshold: cdktf.numberToTerraform(struct!.fastBurnThreshold),
  }
}


export function sloV2ErrorBudgetBurnRateToHclTerraform(struct?: SloV2ErrorBudgetBurnRateOutputReference | SloV2ErrorBudgetBurnRate): any {
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

export class SloV2ErrorBudgetBurnRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloV2ErrorBudgetBurnRate | undefined {
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

  public set internalValue(value: SloV2ErrorBudgetBurnRate | undefined) {
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

  // burn_rate_visualization_enabled - computed: false, optional: false, required: true
  private _burnRateVisualizationEnabled?: boolean | cdktf.IResolvable; 
  public get burnRateVisualizationEnabled() {
    return this.getBooleanAttribute('burn_rate_visualization_enabled');
  }
  public set burnRateVisualizationEnabled(value: boolean | cdktf.IResolvable) {
    this._burnRateVisualizationEnabled = value;
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
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2 dynatrace_slo_v2}
*/
export class SloV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_slo_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SloV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SloV2 to import
  * @param importFromId The id of the existing SloV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SloV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_slo_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/slo_v2 dynatrace_slo_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SloV2Config
  */
  public constructor(scope: Construct, id: string, config: SloV2Config) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_slo_v2',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customDescription = config.customDescription;
    this._enabled = config.enabled;
    this._evaluationType = config.evaluationType;
    this._evaluationWindow = config.evaluationWindow;
    this._filter = config.filter;
    this._id = config.id;
    this._legacyId = config.legacyId;
    this._metricExpression = config.metricExpression;
    this._metricName = config.metricName;
    this._name = config.name;
    this._targetSuccess = config.targetSuccess;
    this._targetWarning = config.targetWarning;
    this._errorBudgetBurnRate.internalValue = config.errorBudgetBurnRate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_description - computed: false, optional: true, required: false
  private _customDescription?: string; 
  public get customDescription() {
    return this.getStringAttribute('custom_description');
  }
  public set customDescription(value: string) {
    this._customDescription = value;
  }
  public resetCustomDescription() {
    this._customDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDescriptionInput() {
    return this._customDescription;
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

  // evaluation_type - computed: false, optional: false, required: true
  private _evaluationType?: string; 
  public get evaluationType() {
    return this.getStringAttribute('evaluation_type');
  }
  public set evaluationType(value: string) {
    this._evaluationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationTypeInput() {
    return this._evaluationType;
  }

  // evaluation_window - computed: false, optional: false, required: true
  private _evaluationWindow?: string; 
  public get evaluationWindow() {
    return this.getStringAttribute('evaluation_window');
  }
  public set evaluationWindow(value: string) {
    this._evaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationWindowInput() {
    return this._evaluationWindow;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
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

  // legacy_id - computed: true, optional: true, required: false
  private _legacyId?: string; 
  public get legacyId() {
    return this.getStringAttribute('legacy_id');
  }
  public set legacyId(value: string) {
    this._legacyId = value;
  }
  public resetLegacyId() {
    this._legacyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyIdInput() {
    return this._legacyId;
  }

  // metric_expression - computed: false, optional: false, required: true
  private _metricExpression?: string; 
  public get metricExpression() {
    return this.getStringAttribute('metric_expression');
  }
  public set metricExpression(value: string) {
    this._metricExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricExpressionInput() {
    return this._metricExpression;
  }

  // metric_name - computed: true, optional: true, required: false
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

  // target_success - computed: false, optional: false, required: true
  private _targetSuccess?: number; 
  public get targetSuccess() {
    return this.getNumberAttribute('target_success');
  }
  public set targetSuccess(value: number) {
    this._targetSuccess = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSuccessInput() {
    return this._targetSuccess;
  }

  // target_warning - computed: false, optional: false, required: true
  private _targetWarning?: number; 
  public get targetWarning() {
    return this.getNumberAttribute('target_warning');
  }
  public set targetWarning(value: number) {
    this._targetWarning = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetWarningInput() {
    return this._targetWarning;
  }

  // error_budget_burn_rate - computed: false, optional: false, required: true
  private _errorBudgetBurnRate = new SloV2ErrorBudgetBurnRateOutputReference(this, "error_budget_burn_rate");
  public get errorBudgetBurnRate() {
    return this._errorBudgetBurnRate;
  }
  public putErrorBudgetBurnRate(value: SloV2ErrorBudgetBurnRate) {
    this._errorBudgetBurnRate.internalValue = value;
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
      custom_description: cdktf.stringToTerraform(this._customDescription),
      enabled: cdktf.booleanToTerraform(this._enabled),
      evaluation_type: cdktf.stringToTerraform(this._evaluationType),
      evaluation_window: cdktf.stringToTerraform(this._evaluationWindow),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      legacy_id: cdktf.stringToTerraform(this._legacyId),
      metric_expression: cdktf.stringToTerraform(this._metricExpression),
      metric_name: cdktf.stringToTerraform(this._metricName),
      name: cdktf.stringToTerraform(this._name),
      target_success: cdktf.numberToTerraform(this._targetSuccess),
      target_warning: cdktf.numberToTerraform(this._targetWarning),
      error_budget_burn_rate: sloV2ErrorBudgetBurnRateToTerraform(this._errorBudgetBurnRate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_description: {
        value: cdktf.stringToHclTerraform(this._customDescription),
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
      evaluation_type: {
        value: cdktf.stringToHclTerraform(this._evaluationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evaluation_window: {
        value: cdktf.stringToHclTerraform(this._evaluationWindow),
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
      legacy_id: {
        value: cdktf.stringToHclTerraform(this._legacyId),
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
      target_success: {
        value: cdktf.numberToHclTerraform(this._targetSuccess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_warning: {
        value: cdktf.numberToHclTerraform(this._targetWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      error_budget_burn_rate: {
        value: sloV2ErrorBudgetBurnRateToHclTerraform(this._errorBudgetBurnRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SloV2ErrorBudgetBurnRateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
