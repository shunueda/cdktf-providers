// https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ItsiKpiThresholdTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * 
  * Statistical method applied to identify outliers in the data.
  * Supported algorithms are:
  * * stdev - Standard Deviation
  * * iqr - Interquartile Range
  * * mad - Median Absolute Deviation
  * If set to null, outlier exclusion will be disabled.
  * 				
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#adaptive_thresholding_outlier_exclusion_algo ItsiKpiThresholdTemplate#adaptive_thresholding_outlier_exclusion_algo}
  */
  readonly adaptiveThresholdingOutlierExclusionAlgo?: string;
  /**
  * Sensitivity of the algorithm selected to identify outliers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#adaptive_thresholding_outlier_exclusion_sensitivity ItsiKpiThresholdTemplate#adaptive_thresholding_outlier_exclusion_sensitivity}
  */
  readonly adaptiveThresholdingOutlierExclusionSensitivity?: number;
  /**
  * The earliest time for the Adaptive Threshold training algorithm to run over (latest time is always 'now') (e.g. '-7d')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#adaptive_thresholding_training_window ItsiKpiThresholdTemplate#adaptive_thresholding_training_window}
  */
  readonly adaptiveThresholdingTrainingWindow: string;
  /**
  * Determines if adaptive threshold is enabled for this KPI threshold template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#adaptive_thresholds_is_enabled ItsiKpiThresholdTemplate#adaptive_thresholds_is_enabled}
  */
  readonly adaptiveThresholdsIsEnabled: boolean | cdktf.IResolvable;
  /**
  * User-defined description for the kpi Threshold Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#description ItsiKpiThresholdTemplate#description}
  */
  readonly description?: string;
  /**
  * The team the object belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#sec_grp ItsiKpiThresholdTemplate#sec_grp}
  */
  readonly secGrp?: string;
  /**
  * If true, thresholds for alerts are pulled from time_variate_thresholds_specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#time_variate_thresholds ItsiKpiThresholdTemplate#time_variate_thresholds}
  */
  readonly timeVariateThresholds: boolean | cdktf.IResolvable;
  /**
  * Name of this KPI threshold template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#title ItsiKpiThresholdTemplate#title}
  */
  readonly title: string;
  /**
  * time_variate_thresholds_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#time_variate_thresholds_specification ItsiKpiThresholdTemplate#time_variate_thresholds_specification}
  */
  readonly timeVariateThresholdsSpecification?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecification;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#timeouts ItsiKpiThresholdTemplate#timeouts}
  */
  readonly timeouts?: ItsiKpiThresholdTemplateTimeouts;
}
export interface ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevels {
  /**
  * Value of the dynamic parameter for adaptive thresholds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#dynamic_param ItsiKpiThresholdTemplate#dynamic_param}
  */
  readonly dynamicParam: number;
  /**
  * Severity label assigned for this threshold level like info, warning, critical, etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#severity_label ItsiKpiThresholdTemplate#severity_label}
  */
  readonly severityLabel: string;
  /**
  * Value for the threshold field stats identifying this threshold level.
  * 							This is the key value that defines the levels for values derived from the KPI search metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#threshold_value ItsiKpiThresholdTemplate#threshold_value}
  */
  readonly thresholdValue: number;
}

export function itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevelsToTerraform(struct?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_param: cdktf.numberToTerraform(struct!.dynamicParam),
    severity_label: cdktf.stringToTerraform(struct!.severityLabel),
    threshold_value: cdktf.numberToTerraform(struct!.thresholdValue),
  }
}


export function itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevelsToHclTerraform(struct?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic_param: {
      value: cdktf.numberToHclTerraform(struct!.dynamicParam),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity_label: {
      value: cdktf.stringToHclTerraform(struct!.severityLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_value: {
      value: cdktf.numberToHclTerraform(struct!.thresholdValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicParam = this._dynamicParam;
    }
    if (this._severityLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityLabel = this._severityLabel;
    }
    if (this._thresholdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdValue = this._thresholdValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamicParam = undefined;
      this._severityLabel = undefined;
      this._thresholdValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamicParam = value.dynamicParam;
      this._severityLabel = value.severityLabel;
      this._thresholdValue = value.thresholdValue;
    }
  }

  // dynamic_param - computed: false, optional: false, required: true
  private _dynamicParam?: number; 
  public get dynamicParam() {
    return this.getNumberAttribute('dynamic_param');
  }
  public set dynamicParam(value: number) {
    this._dynamicParam = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicParamInput() {
    return this._dynamicParam;
  }

  // severity_label - computed: false, optional: false, required: true
  private _severityLabel?: string; 
  public get severityLabel() {
    return this.getStringAttribute('severity_label');
  }
  public set severityLabel(value: string) {
    this._severityLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityLabelInput() {
    return this._severityLabel;
  }

  // threshold_value - computed: false, optional: false, required: true
  private _thresholdValue?: number; 
  public get thresholdValue() {
    return this.getNumberAttribute('threshold_value');
  }
  public set thresholdValue(value: number) {
    this._thresholdValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdValueInput() {
    return this._thresholdValue;
  }
}

export class ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevelsList extends cdktf.ComplexList {
  public internalValue? : ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevels[] | cdktf.IResolvable

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
  public get(index: number): ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevelsOutputReference {
    return new ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholds {
  /**
  * Base severity label assigned for the threshold (info, normal, low, medium, high, critical). 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#base_severity_label ItsiKpiThresholdTemplate#base_severity_label}
  */
  readonly baseSeverityLabel?: string;
  /**
  * Maximum value for the threshold gauge specified by user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#gauge_max ItsiKpiThresholdTemplate#gauge_max}
  */
  readonly gaugeMax?: number;
  /**
  * Minimum value for the threshold gauge specified by user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#gauge_min ItsiKpiThresholdTemplate#gauge_min}
  */
  readonly gaugeMin?: number;
  /**
  * True when maximum threshold value is a static value, false otherwise. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#is_max_static ItsiKpiThresholdTemplate#is_max_static}
  */
  readonly isMaxStatic: boolean | cdktf.IResolvable;
  /**
  * True when min threshold value is a static value, false otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#is_min_static ItsiKpiThresholdTemplate#is_min_static}
  */
  readonly isMinStatic: boolean | cdktf.IResolvable;
  /**
  * Thresholding field from the search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#metric_field ItsiKpiThresholdTemplate#metric_field}
  */
  readonly metricField?: string;
  /**
  * Upper bound value to use to render the graph for the thresholds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#render_boundary_max ItsiKpiThresholdTemplate#render_boundary_max}
  */
  readonly renderBoundaryMax?: number;
  /**
  * Lower bound value to use to render the graph for the thresholds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#render_boundary_min ItsiKpiThresholdTemplate#render_boundary_min}
  */
  readonly renderBoundaryMin?: number;
  /**
  * threshold_levels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#threshold_levels ItsiKpiThresholdTemplate#threshold_levels}
  */
  readonly thresholdLevels?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevels[] | cdktf.IResolvable;
}

export function itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsToTerraform(struct?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_severity_label: cdktf.stringToTerraform(struct!.baseSeverityLabel),
    gauge_max: cdktf.numberToTerraform(struct!.gaugeMax),
    gauge_min: cdktf.numberToTerraform(struct!.gaugeMin),
    is_max_static: cdktf.booleanToTerraform(struct!.isMaxStatic),
    is_min_static: cdktf.booleanToTerraform(struct!.isMinStatic),
    metric_field: cdktf.stringToTerraform(struct!.metricField),
    render_boundary_max: cdktf.numberToTerraform(struct!.renderBoundaryMax),
    render_boundary_min: cdktf.numberToTerraform(struct!.renderBoundaryMin),
    threshold_levels: cdktf.listMapper(itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevelsToTerraform, true)(struct!.thresholdLevels),
  }
}


export function itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsToHclTerraform(struct?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_severity_label: {
      value: cdktf.stringToHclTerraform(struct!.baseSeverityLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gauge_max: {
      value: cdktf.numberToHclTerraform(struct!.gaugeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gauge_min: {
      value: cdktf.numberToHclTerraform(struct!.gaugeMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_max_static: {
      value: cdktf.booleanToHclTerraform(struct!.isMaxStatic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_min_static: {
      value: cdktf.booleanToHclTerraform(struct!.isMinStatic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_field: {
      value: cdktf.stringToHclTerraform(struct!.metricField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    render_boundary_max: {
      value: cdktf.numberToHclTerraform(struct!.renderBoundaryMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    render_boundary_min: {
      value: cdktf.numberToHclTerraform(struct!.renderBoundaryMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_levels: {
      value: cdktf.listMapperHcl(itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevelsToHclTerraform, true)(struct!.thresholdLevels),
      isBlock: true,
      type: "list",
      storageClassType: "ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseSeverityLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseSeverityLabel = this._baseSeverityLabel;
    }
    if (this._gaugeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gaugeMax = this._gaugeMax;
    }
    if (this._gaugeMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.gaugeMin = this._gaugeMin;
    }
    if (this._isMaxStatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMaxStatic = this._isMaxStatic;
    }
    if (this._isMinStatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMinStatic = this._isMinStatic;
    }
    if (this._metricField !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricField = this._metricField;
    }
    if (this._renderBoundaryMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.renderBoundaryMax = this._renderBoundaryMax;
    }
    if (this._renderBoundaryMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.renderBoundaryMin = this._renderBoundaryMin;
    }
    if (this._thresholdLevels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdLevels = this._thresholdLevels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseSeverityLabel = undefined;
      this._gaugeMax = undefined;
      this._gaugeMin = undefined;
      this._isMaxStatic = undefined;
      this._isMinStatic = undefined;
      this._metricField = undefined;
      this._renderBoundaryMax = undefined;
      this._renderBoundaryMin = undefined;
      this._thresholdLevels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseSeverityLabel = value.baseSeverityLabel;
      this._gaugeMax = value.gaugeMax;
      this._gaugeMin = value.gaugeMin;
      this._isMaxStatic = value.isMaxStatic;
      this._isMinStatic = value.isMinStatic;
      this._metricField = value.metricField;
      this._renderBoundaryMax = value.renderBoundaryMax;
      this._renderBoundaryMin = value.renderBoundaryMin;
      this._thresholdLevels.internalValue = value.thresholdLevels;
    }
  }

  // base_severity_label - computed: true, optional: true, required: false
  private _baseSeverityLabel?: string; 
  public get baseSeverityLabel() {
    return this.getStringAttribute('base_severity_label');
  }
  public set baseSeverityLabel(value: string) {
    this._baseSeverityLabel = value;
  }
  public resetBaseSeverityLabel() {
    this._baseSeverityLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseSeverityLabelInput() {
    return this._baseSeverityLabel;
  }

  // gauge_max - computed: true, optional: true, required: false
  private _gaugeMax?: number; 
  public get gaugeMax() {
    return this.getNumberAttribute('gauge_max');
  }
  public set gaugeMax(value: number) {
    this._gaugeMax = value;
  }
  public resetGaugeMax() {
    this._gaugeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gaugeMaxInput() {
    return this._gaugeMax;
  }

  // gauge_min - computed: true, optional: true, required: false
  private _gaugeMin?: number; 
  public get gaugeMin() {
    return this.getNumberAttribute('gauge_min');
  }
  public set gaugeMin(value: number) {
    this._gaugeMin = value;
  }
  public resetGaugeMin() {
    this._gaugeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gaugeMinInput() {
    return this._gaugeMin;
  }

  // is_max_static - computed: false, optional: false, required: true
  private _isMaxStatic?: boolean | cdktf.IResolvable; 
  public get isMaxStatic() {
    return this.getBooleanAttribute('is_max_static');
  }
  public set isMaxStatic(value: boolean | cdktf.IResolvable) {
    this._isMaxStatic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isMaxStaticInput() {
    return this._isMaxStatic;
  }

  // is_min_static - computed: false, optional: false, required: true
  private _isMinStatic?: boolean | cdktf.IResolvable; 
  public get isMinStatic() {
    return this.getBooleanAttribute('is_min_static');
  }
  public set isMinStatic(value: boolean | cdktf.IResolvable) {
    this._isMinStatic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isMinStaticInput() {
    return this._isMinStatic;
  }

  // metric_field - computed: true, optional: true, required: false
  private _metricField?: string; 
  public get metricField() {
    return this.getStringAttribute('metric_field');
  }
  public set metricField(value: string) {
    this._metricField = value;
  }
  public resetMetricField() {
    this._metricField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricFieldInput() {
    return this._metricField;
  }

  // render_boundary_max - computed: true, optional: true, required: false
  private _renderBoundaryMax?: number; 
  public get renderBoundaryMax() {
    return this.getNumberAttribute('render_boundary_max');
  }
  public set renderBoundaryMax(value: number) {
    this._renderBoundaryMax = value;
  }
  public resetRenderBoundaryMax() {
    this._renderBoundaryMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderBoundaryMaxInput() {
    return this._renderBoundaryMax;
  }

  // render_boundary_min - computed: true, optional: true, required: false
  private _renderBoundaryMin?: number; 
  public get renderBoundaryMin() {
    return this.getNumberAttribute('render_boundary_min');
  }
  public set renderBoundaryMin(value: number) {
    this._renderBoundaryMin = value;
  }
  public resetRenderBoundaryMin() {
    this._renderBoundaryMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderBoundaryMinInput() {
    return this._renderBoundaryMin;
  }

  // threshold_levels - computed: false, optional: true, required: false
  private _thresholdLevels = new ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevelsList(this, "threshold_levels", false);
  public get thresholdLevels() {
    return this._thresholdLevels;
  }
  public putThresholdLevels(value: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsThresholdLevels[] | cdktf.IResolvable) {
    this._thresholdLevels.internalValue = value;
  }
  public resetThresholdLevels() {
    this._thresholdLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdLevelsInput() {
    return this._thresholdLevels.internalValue;
  }
}
export interface ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevels {
  /**
  * Value of the dynamic parameter for adaptive thresholds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#dynamic_param ItsiKpiThresholdTemplate#dynamic_param}
  */
  readonly dynamicParam: number;
  /**
  * Severity label assigned for this threshold level like info, warning, critical, etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#severity_label ItsiKpiThresholdTemplate#severity_label}
  */
  readonly severityLabel: string;
  /**
  * Value for the threshold field stats identifying this threshold level.
  * 							This is the key value that defines the levels for values derived from the KPI search metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#threshold_value ItsiKpiThresholdTemplate#threshold_value}
  */
  readonly thresholdValue: number;
}

export function itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevelsToTerraform(struct?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_param: cdktf.numberToTerraform(struct!.dynamicParam),
    severity_label: cdktf.stringToTerraform(struct!.severityLabel),
    threshold_value: cdktf.numberToTerraform(struct!.thresholdValue),
  }
}


export function itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevelsToHclTerraform(struct?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic_param: {
      value: cdktf.numberToHclTerraform(struct!.dynamicParam),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity_label: {
      value: cdktf.stringToHclTerraform(struct!.severityLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_value: {
      value: cdktf.numberToHclTerraform(struct!.thresholdValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicParam = this._dynamicParam;
    }
    if (this._severityLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityLabel = this._severityLabel;
    }
    if (this._thresholdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdValue = this._thresholdValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamicParam = undefined;
      this._severityLabel = undefined;
      this._thresholdValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamicParam = value.dynamicParam;
      this._severityLabel = value.severityLabel;
      this._thresholdValue = value.thresholdValue;
    }
  }

  // dynamic_param - computed: false, optional: false, required: true
  private _dynamicParam?: number; 
  public get dynamicParam() {
    return this.getNumberAttribute('dynamic_param');
  }
  public set dynamicParam(value: number) {
    this._dynamicParam = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicParamInput() {
    return this._dynamicParam;
  }

  // severity_label - computed: false, optional: false, required: true
  private _severityLabel?: string; 
  public get severityLabel() {
    return this.getStringAttribute('severity_label');
  }
  public set severityLabel(value: string) {
    this._severityLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityLabelInput() {
    return this._severityLabel;
  }

  // threshold_value - computed: false, optional: false, required: true
  private _thresholdValue?: number; 
  public get thresholdValue() {
    return this.getNumberAttribute('threshold_value');
  }
  public set thresholdValue(value: number) {
    this._thresholdValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdValueInput() {
    return this._thresholdValue;
  }
}

export class ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevelsList extends cdktf.ComplexList {
  public internalValue? : ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevels[] | cdktf.IResolvable

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
  public get(index: number): ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevelsOutputReference {
    return new ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholds {
  /**
  * Base severity label assigned for the threshold (info, normal, low, medium, high, critical). 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#base_severity_label ItsiKpiThresholdTemplate#base_severity_label}
  */
  readonly baseSeverityLabel?: string;
  /**
  * Maximum value for the threshold gauge specified by user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#gauge_max ItsiKpiThresholdTemplate#gauge_max}
  */
  readonly gaugeMax?: number;
  /**
  * Minimum value for the threshold gauge specified by user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#gauge_min ItsiKpiThresholdTemplate#gauge_min}
  */
  readonly gaugeMin?: number;
  /**
  * True when maximum threshold value is a static value, false otherwise. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#is_max_static ItsiKpiThresholdTemplate#is_max_static}
  */
  readonly isMaxStatic: boolean | cdktf.IResolvable;
  /**
  * True when min threshold value is a static value, false otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#is_min_static ItsiKpiThresholdTemplate#is_min_static}
  */
  readonly isMinStatic: boolean | cdktf.IResolvable;
  /**
  * Thresholding field from the search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#metric_field ItsiKpiThresholdTemplate#metric_field}
  */
  readonly metricField?: string;
  /**
  * Upper bound value to use to render the graph for the thresholds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#render_boundary_max ItsiKpiThresholdTemplate#render_boundary_max}
  */
  readonly renderBoundaryMax?: number;
  /**
  * Lower bound value to use to render the graph for the thresholds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#render_boundary_min ItsiKpiThresholdTemplate#render_boundary_min}
  */
  readonly renderBoundaryMin?: number;
  /**
  * threshold_levels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#threshold_levels ItsiKpiThresholdTemplate#threshold_levels}
  */
  readonly thresholdLevels?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevels[] | cdktf.IResolvable;
}

export function itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsToTerraform(struct?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_severity_label: cdktf.stringToTerraform(struct!.baseSeverityLabel),
    gauge_max: cdktf.numberToTerraform(struct!.gaugeMax),
    gauge_min: cdktf.numberToTerraform(struct!.gaugeMin),
    is_max_static: cdktf.booleanToTerraform(struct!.isMaxStatic),
    is_min_static: cdktf.booleanToTerraform(struct!.isMinStatic),
    metric_field: cdktf.stringToTerraform(struct!.metricField),
    render_boundary_max: cdktf.numberToTerraform(struct!.renderBoundaryMax),
    render_boundary_min: cdktf.numberToTerraform(struct!.renderBoundaryMin),
    threshold_levels: cdktf.listMapper(itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevelsToTerraform, true)(struct!.thresholdLevels),
  }
}


export function itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsToHclTerraform(struct?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_severity_label: {
      value: cdktf.stringToHclTerraform(struct!.baseSeverityLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gauge_max: {
      value: cdktf.numberToHclTerraform(struct!.gaugeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gauge_min: {
      value: cdktf.numberToHclTerraform(struct!.gaugeMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_max_static: {
      value: cdktf.booleanToHclTerraform(struct!.isMaxStatic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_min_static: {
      value: cdktf.booleanToHclTerraform(struct!.isMinStatic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_field: {
      value: cdktf.stringToHclTerraform(struct!.metricField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    render_boundary_max: {
      value: cdktf.numberToHclTerraform(struct!.renderBoundaryMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    render_boundary_min: {
      value: cdktf.numberToHclTerraform(struct!.renderBoundaryMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_levels: {
      value: cdktf.listMapperHcl(itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevelsToHclTerraform, true)(struct!.thresholdLevels),
      isBlock: true,
      type: "list",
      storageClassType: "ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseSeverityLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseSeverityLabel = this._baseSeverityLabel;
    }
    if (this._gaugeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gaugeMax = this._gaugeMax;
    }
    if (this._gaugeMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.gaugeMin = this._gaugeMin;
    }
    if (this._isMaxStatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMaxStatic = this._isMaxStatic;
    }
    if (this._isMinStatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMinStatic = this._isMinStatic;
    }
    if (this._metricField !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricField = this._metricField;
    }
    if (this._renderBoundaryMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.renderBoundaryMax = this._renderBoundaryMax;
    }
    if (this._renderBoundaryMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.renderBoundaryMin = this._renderBoundaryMin;
    }
    if (this._thresholdLevels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdLevels = this._thresholdLevels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseSeverityLabel = undefined;
      this._gaugeMax = undefined;
      this._gaugeMin = undefined;
      this._isMaxStatic = undefined;
      this._isMinStatic = undefined;
      this._metricField = undefined;
      this._renderBoundaryMax = undefined;
      this._renderBoundaryMin = undefined;
      this._thresholdLevels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseSeverityLabel = value.baseSeverityLabel;
      this._gaugeMax = value.gaugeMax;
      this._gaugeMin = value.gaugeMin;
      this._isMaxStatic = value.isMaxStatic;
      this._isMinStatic = value.isMinStatic;
      this._metricField = value.metricField;
      this._renderBoundaryMax = value.renderBoundaryMax;
      this._renderBoundaryMin = value.renderBoundaryMin;
      this._thresholdLevels.internalValue = value.thresholdLevels;
    }
  }

  // base_severity_label - computed: true, optional: true, required: false
  private _baseSeverityLabel?: string; 
  public get baseSeverityLabel() {
    return this.getStringAttribute('base_severity_label');
  }
  public set baseSeverityLabel(value: string) {
    this._baseSeverityLabel = value;
  }
  public resetBaseSeverityLabel() {
    this._baseSeverityLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseSeverityLabelInput() {
    return this._baseSeverityLabel;
  }

  // gauge_max - computed: true, optional: true, required: false
  private _gaugeMax?: number; 
  public get gaugeMax() {
    return this.getNumberAttribute('gauge_max');
  }
  public set gaugeMax(value: number) {
    this._gaugeMax = value;
  }
  public resetGaugeMax() {
    this._gaugeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gaugeMaxInput() {
    return this._gaugeMax;
  }

  // gauge_min - computed: true, optional: true, required: false
  private _gaugeMin?: number; 
  public get gaugeMin() {
    return this.getNumberAttribute('gauge_min');
  }
  public set gaugeMin(value: number) {
    this._gaugeMin = value;
  }
  public resetGaugeMin() {
    this._gaugeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gaugeMinInput() {
    return this._gaugeMin;
  }

  // is_max_static - computed: false, optional: false, required: true
  private _isMaxStatic?: boolean | cdktf.IResolvable; 
  public get isMaxStatic() {
    return this.getBooleanAttribute('is_max_static');
  }
  public set isMaxStatic(value: boolean | cdktf.IResolvable) {
    this._isMaxStatic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isMaxStaticInput() {
    return this._isMaxStatic;
  }

  // is_min_static - computed: false, optional: false, required: true
  private _isMinStatic?: boolean | cdktf.IResolvable; 
  public get isMinStatic() {
    return this.getBooleanAttribute('is_min_static');
  }
  public set isMinStatic(value: boolean | cdktf.IResolvable) {
    this._isMinStatic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isMinStaticInput() {
    return this._isMinStatic;
  }

  // metric_field - computed: true, optional: true, required: false
  private _metricField?: string; 
  public get metricField() {
    return this.getStringAttribute('metric_field');
  }
  public set metricField(value: string) {
    this._metricField = value;
  }
  public resetMetricField() {
    this._metricField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricFieldInput() {
    return this._metricField;
  }

  // render_boundary_max - computed: true, optional: true, required: false
  private _renderBoundaryMax?: number; 
  public get renderBoundaryMax() {
    return this.getNumberAttribute('render_boundary_max');
  }
  public set renderBoundaryMax(value: number) {
    this._renderBoundaryMax = value;
  }
  public resetRenderBoundaryMax() {
    this._renderBoundaryMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderBoundaryMaxInput() {
    return this._renderBoundaryMax;
  }

  // render_boundary_min - computed: true, optional: true, required: false
  private _renderBoundaryMin?: number; 
  public get renderBoundaryMin() {
    return this.getNumberAttribute('render_boundary_min');
  }
  public set renderBoundaryMin(value: number) {
    this._renderBoundaryMin = value;
  }
  public resetRenderBoundaryMin() {
    this._renderBoundaryMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderBoundaryMinInput() {
    return this._renderBoundaryMin;
  }

  // threshold_levels - computed: false, optional: true, required: false
  private _thresholdLevels = new ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevelsList(this, "threshold_levels", false);
  public get thresholdLevels() {
    return this._thresholdLevels;
  }
  public putThresholdLevels(value: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsThresholdLevels[] | cdktf.IResolvable) {
    this._thresholdLevels.internalValue = value;
  }
  public resetThresholdLevels() {
    this._thresholdLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdLevelsInput() {
    return this._thresholdLevels.internalValue;
  }
}
export interface ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocks {
  /**
  * Corresponds to the cron expression in format: {minute} {hour} {\*} {\*} {day}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#cron ItsiKpiThresholdTemplate#cron}
  */
  readonly cron: string;
  /**
  * Corresponds to the cron expression in format: {minute} {hour} {\*} {\*} {day}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#interval ItsiKpiThresholdTemplate#interval}
  */
  readonly interval: number;
}

export function itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocksToTerraform(struct?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron: cdktf.stringToTerraform(struct!.cron),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocksToHclTerraform(struct?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron: {
      value: cdktf.stringToHclTerraform(struct!.cron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cron !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cron = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cron = value.cron;
      this._interval = value.interval;
    }
  }

  // cron - computed: false, optional: false, required: true
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocksList extends cdktf.ComplexList {
  public internalValue? : ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocks[] | cdktf.IResolvable

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
  public get(index: number): ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocksOutputReference {
    return new ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPolicies {
  /**
  * Internal key value for policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#policy_name ItsiKpiThresholdTemplate#policy_name}
  */
  readonly policyName: string;
  /**
  * The algorithm, specified for the current policy threshold level evaluation.
  * 													Supported values: static, stdev (standard deviation), quantile, range and percentage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#policy_type ItsiKpiThresholdTemplate#policy_type}
  */
  readonly policyType: string;
  /**
  * The policy title, displayed to the user in the UI. Should be unique per policies object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#title ItsiKpiThresholdTemplate#title}
  */
  readonly title: string;
  /**
  * aggregate_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#aggregate_thresholds ItsiKpiThresholdTemplate#aggregate_thresholds}
  */
  readonly aggregateThresholds?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholds;
  /**
  * entity_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#entity_thresholds ItsiKpiThresholdTemplate#entity_thresholds}
  */
  readonly entityThresholds?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholds;
  /**
  * time_blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#time_blocks ItsiKpiThresholdTemplate#time_blocks}
  */
  readonly timeBlocks?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocks[] | cdktf.IResolvable;
}

export function itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesToTerraform(struct?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    title: cdktf.stringToTerraform(struct!.title),
    aggregate_thresholds: itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsToTerraform(struct!.aggregateThresholds),
    entity_thresholds: itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsToTerraform(struct!.entityThresholds),
    time_blocks: cdktf.listMapper(itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocksToTerraform, true)(struct!.timeBlocks),
  }
}


export function itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesToHclTerraform(struct?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregate_thresholds: {
      value: itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsToHclTerraform(struct!.aggregateThresholds),
      isBlock: true,
      type: "struct",
      storageClassType: "ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholds",
    },
    entity_thresholds: {
      value: itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsToHclTerraform(struct!.entityThresholds),
      isBlock: true,
      type: "struct",
      storageClassType: "ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholds",
    },
    time_blocks: {
      value: cdktf.listMapperHcl(itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocksToHclTerraform, true)(struct!.timeBlocks),
      isBlock: true,
      type: "list",
      storageClassType: "ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._aggregateThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateThresholds = this._aggregateThresholds?.internalValue;
    }
    if (this._entityThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityThresholds = this._entityThresholds?.internalValue;
    }
    if (this._timeBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBlocks = this._timeBlocks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyName = undefined;
      this._policyType = undefined;
      this._title = undefined;
      this._aggregateThresholds.internalValue = undefined;
      this._entityThresholds.internalValue = undefined;
      this._timeBlocks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyName = value.policyName;
      this._policyType = value.policyType;
      this._title = value.title;
      this._aggregateThresholds.internalValue = value.aggregateThresholds;
      this._entityThresholds.internalValue = value.entityThresholds;
      this._timeBlocks.internalValue = value.timeBlocks;
    }
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // aggregate_thresholds - computed: false, optional: true, required: false
  private _aggregateThresholds = new ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholdsOutputReference(this, "aggregate_thresholds");
  public get aggregateThresholds() {
    return this._aggregateThresholds;
  }
  public putAggregateThresholds(value: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesAggregateThresholds) {
    this._aggregateThresholds.internalValue = value;
  }
  public resetAggregateThresholds() {
    this._aggregateThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateThresholdsInput() {
    return this._aggregateThresholds.internalValue;
  }

  // entity_thresholds - computed: false, optional: true, required: false
  private _entityThresholds = new ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholdsOutputReference(this, "entity_thresholds");
  public get entityThresholds() {
    return this._entityThresholds;
  }
  public putEntityThresholds(value: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesEntityThresholds) {
    this._entityThresholds.internalValue = value;
  }
  public resetEntityThresholds() {
    this._entityThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityThresholdsInput() {
    return this._entityThresholds.internalValue;
  }

  // time_blocks - computed: false, optional: true, required: false
  private _timeBlocks = new ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocksList(this, "time_blocks", false);
  public get timeBlocks() {
    return this._timeBlocks;
  }
  public putTimeBlocks(value: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesTimeBlocks[] | cdktf.IResolvable) {
    this._timeBlocks.internalValue = value;
  }
  public resetTimeBlocks() {
    this._timeBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBlocksInput() {
    return this._timeBlocks.internalValue;
  }
}

export class ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesList extends cdktf.ComplexList {
  public internalValue? : ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPolicies[] | cdktf.IResolvable

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
  public get(index: number): ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesOutputReference {
    return new ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiKpiThresholdTemplateTimeVariateThresholdsSpecification {
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#policies ItsiKpiThresholdTemplate#policies}
  */
  readonly policies?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPolicies[] | cdktf.IResolvable;
}

export function itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationToTerraform(struct?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: cdktf.listMapper(itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesToTerraform, true)(struct!.policies),
  }
}


export function itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationToHclTerraform(struct?: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: cdktf.listMapperHcl(itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ItsiKpiThresholdTemplateTimeVariateThresholdsSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policies.internalValue = value.policies;
    }
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPoliciesList(this, "policies", true);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}
export interface ItsiKpiThresholdTemplateTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#create ItsiKpiThresholdTemplate#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#delete ItsiKpiThresholdTemplate#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#read ItsiKpiThresholdTemplate#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#update ItsiKpiThresholdTemplate#update}
  */
  readonly update?: string;
}

export function itsiKpiThresholdTemplateTimeoutsToTerraform(struct?: ItsiKpiThresholdTemplateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function itsiKpiThresholdTemplateTimeoutsToHclTerraform(struct?: ItsiKpiThresholdTemplateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiKpiThresholdTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ItsiKpiThresholdTemplateTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiKpiThresholdTemplateTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template itsi_kpi_threshold_template}
*/
export class ItsiKpiThresholdTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "itsi_kpi_threshold_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ItsiKpiThresholdTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ItsiKpiThresholdTemplate to import
  * @param importFromId The id of the existing ItsiKpiThresholdTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ItsiKpiThresholdTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "itsi_kpi_threshold_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_threshold_template itsi_kpi_threshold_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ItsiKpiThresholdTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ItsiKpiThresholdTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'itsi_kpi_threshold_template',
      terraformGeneratorMetadata: {
        providerName: 'splunk-itsi',
        providerVersion: '2.2.4',
        providerVersionConstraint: '2.2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adaptiveThresholdingOutlierExclusionAlgo = config.adaptiveThresholdingOutlierExclusionAlgo;
    this._adaptiveThresholdingOutlierExclusionSensitivity = config.adaptiveThresholdingOutlierExclusionSensitivity;
    this._adaptiveThresholdingTrainingWindow = config.adaptiveThresholdingTrainingWindow;
    this._adaptiveThresholdsIsEnabled = config.adaptiveThresholdsIsEnabled;
    this._description = config.description;
    this._secGrp = config.secGrp;
    this._timeVariateThresholds = config.timeVariateThresholds;
    this._title = config.title;
    this._timeVariateThresholdsSpecification.internalValue = config.timeVariateThresholdsSpecification;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adaptive_thresholding_outlier_exclusion_algo - computed: false, optional: true, required: false
  private _adaptiveThresholdingOutlierExclusionAlgo?: string; 
  public get adaptiveThresholdingOutlierExclusionAlgo() {
    return this.getStringAttribute('adaptive_thresholding_outlier_exclusion_algo');
  }
  public set adaptiveThresholdingOutlierExclusionAlgo(value: string) {
    this._adaptiveThresholdingOutlierExclusionAlgo = value;
  }
  public resetAdaptiveThresholdingOutlierExclusionAlgo() {
    this._adaptiveThresholdingOutlierExclusionAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveThresholdingOutlierExclusionAlgoInput() {
    return this._adaptiveThresholdingOutlierExclusionAlgo;
  }

  // adaptive_thresholding_outlier_exclusion_sensitivity - computed: false, optional: true, required: false
  private _adaptiveThresholdingOutlierExclusionSensitivity?: number; 
  public get adaptiveThresholdingOutlierExclusionSensitivity() {
    return this.getNumberAttribute('adaptive_thresholding_outlier_exclusion_sensitivity');
  }
  public set adaptiveThresholdingOutlierExclusionSensitivity(value: number) {
    this._adaptiveThresholdingOutlierExclusionSensitivity = value;
  }
  public resetAdaptiveThresholdingOutlierExclusionSensitivity() {
    this._adaptiveThresholdingOutlierExclusionSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveThresholdingOutlierExclusionSensitivityInput() {
    return this._adaptiveThresholdingOutlierExclusionSensitivity;
  }

  // adaptive_thresholding_training_window - computed: false, optional: false, required: true
  private _adaptiveThresholdingTrainingWindow?: string; 
  public get adaptiveThresholdingTrainingWindow() {
    return this.getStringAttribute('adaptive_thresholding_training_window');
  }
  public set adaptiveThresholdingTrainingWindow(value: string) {
    this._adaptiveThresholdingTrainingWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveThresholdingTrainingWindowInput() {
    return this._adaptiveThresholdingTrainingWindow;
  }

  // adaptive_thresholds_is_enabled - computed: false, optional: false, required: true
  private _adaptiveThresholdsIsEnabled?: boolean | cdktf.IResolvable; 
  public get adaptiveThresholdsIsEnabled() {
    return this.getBooleanAttribute('adaptive_thresholds_is_enabled');
  }
  public set adaptiveThresholdsIsEnabled(value: boolean | cdktf.IResolvable) {
    this._adaptiveThresholdsIsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveThresholdsIsEnabledInput() {
    return this._adaptiveThresholdsIsEnabled;
  }

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sec_grp - computed: true, optional: true, required: false
  private _secGrp?: string; 
  public get secGrp() {
    return this.getStringAttribute('sec_grp');
  }
  public set secGrp(value: string) {
    this._secGrp = value;
  }
  public resetSecGrp() {
    this._secGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secGrpInput() {
    return this._secGrp;
  }

  // time_variate_thresholds - computed: false, optional: false, required: true
  private _timeVariateThresholds?: boolean | cdktf.IResolvable; 
  public get timeVariateThresholds() {
    return this.getBooleanAttribute('time_variate_thresholds');
  }
  public set timeVariateThresholds(value: boolean | cdktf.IResolvable) {
    this._timeVariateThresholds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeVariateThresholdsInput() {
    return this._timeVariateThresholds;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // time_variate_thresholds_specification - computed: false, optional: true, required: false
  private _timeVariateThresholdsSpecification = new ItsiKpiThresholdTemplateTimeVariateThresholdsSpecificationOutputReference(this, "time_variate_thresholds_specification");
  public get timeVariateThresholdsSpecification() {
    return this._timeVariateThresholdsSpecification;
  }
  public putTimeVariateThresholdsSpecification(value: ItsiKpiThresholdTemplateTimeVariateThresholdsSpecification) {
    this._timeVariateThresholdsSpecification.internalValue = value;
  }
  public resetTimeVariateThresholdsSpecification() {
    this._timeVariateThresholdsSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeVariateThresholdsSpecificationInput() {
    return this._timeVariateThresholdsSpecification.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ItsiKpiThresholdTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ItsiKpiThresholdTemplateTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adaptive_thresholding_outlier_exclusion_algo: cdktf.stringToTerraform(this._adaptiveThresholdingOutlierExclusionAlgo),
      adaptive_thresholding_outlier_exclusion_sensitivity: cdktf.numberToTerraform(this._adaptiveThresholdingOutlierExclusionSensitivity),
      adaptive_thresholding_training_window: cdktf.stringToTerraform(this._adaptiveThresholdingTrainingWindow),
      adaptive_thresholds_is_enabled: cdktf.booleanToTerraform(this._adaptiveThresholdsIsEnabled),
      description: cdktf.stringToTerraform(this._description),
      sec_grp: cdktf.stringToTerraform(this._secGrp),
      time_variate_thresholds: cdktf.booleanToTerraform(this._timeVariateThresholds),
      title: cdktf.stringToTerraform(this._title),
      time_variate_thresholds_specification: itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationToTerraform(this._timeVariateThresholdsSpecification.internalValue),
      timeouts: itsiKpiThresholdTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adaptive_thresholding_outlier_exclusion_algo: {
        value: cdktf.stringToHclTerraform(this._adaptiveThresholdingOutlierExclusionAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adaptive_thresholding_outlier_exclusion_sensitivity: {
        value: cdktf.numberToHclTerraform(this._adaptiveThresholdingOutlierExclusionSensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      adaptive_thresholding_training_window: {
        value: cdktf.stringToHclTerraform(this._adaptiveThresholdingTrainingWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adaptive_thresholds_is_enabled: {
        value: cdktf.booleanToHclTerraform(this._adaptiveThresholdsIsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sec_grp: {
        value: cdktf.stringToHclTerraform(this._secGrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_variate_thresholds: {
        value: cdktf.booleanToHclTerraform(this._timeVariateThresholds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_variate_thresholds_specification: {
        value: itsiKpiThresholdTemplateTimeVariateThresholdsSpecificationToHclTerraform(this._timeVariateThresholdsSpecification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ItsiKpiThresholdTemplateTimeVariateThresholdsSpecification",
      },
      timeouts: {
        value: itsiKpiThresholdTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ItsiKpiThresholdTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
