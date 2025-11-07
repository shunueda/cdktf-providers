// https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ItsiKpiBaseSearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of strings, delimited by comma. Corresponds custom actions stanzas, defined in alert_actions.conf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#actions ItsiKpiBaseSearch#actions}
  */
  readonly actions?: string;
  /**
  * Contains the number of seconds of lag to apply to the alert search, max is 30 minutes (1799 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#alert_lag ItsiKpiBaseSearch#alert_lag}
  */
  readonly alertLag: string;
  /**
  * User specified interval to run the KPI search in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#alert_period ItsiKpiBaseSearch#alert_period}
  */
  readonly alertPeriod: string;
  /**
  * KPI search defined by user for this KPI. All generated searches for the KPI are based on this search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#base_search ItsiKpiBaseSearch#base_search}
  */
  readonly baseSearch: string;
  /**
  * General description for this KPI base search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#description ItsiKpiBaseSearch#description}
  */
  readonly description?: string;
  /**
  * Fields from this KPI's search events that will be mapped to the alias fields defined in entities for the service containing this KPI. This field enables the KPI search to tie the aliases of entities to the fields from the KPI events in identifying entities at search time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#entity_alias_filtering_fields ItsiKpiBaseSearch#entity_alias_filtering_fields}
  */
  readonly entityAliasFilteringFields?: string;
  /**
  * KPI search events are split by the alias field defined in entities for the service containing this KPI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#entity_breakdown_id_fields ItsiKpiBaseSearch#entity_breakdown_id_fields}
  */
  readonly entityBreakdownIdFields: string;
  /**
  * Fields from this KPI's search events that will be mapped to the alias fields defined in entities for the service containing this KPI. This field enables the KPI search to tie the aliases of entities to the fields from the KPI events in identifying entities at search time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#entity_id_fields ItsiKpiBaseSearch#entity_id_fields}
  */
  readonly entityIdFields: string;
  /**
  * Determines if search breaks down by entities. See KPI definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#is_entity_breakdown ItsiKpiBaseSearch#is_entity_breakdown}
  */
  readonly isEntityBreakdown: boolean | cdktf.IResolvable;
  /**
  * If true a filter is used on the search based on the entities included in the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#is_service_entity_filter ItsiKpiBaseSearch#is_service_entity_filter}
  */
  readonly isServiceEntityFilter: boolean | cdktf.IResolvable;
  /**
  * Used to further split metrics. Hidden in the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#metric_qualifier ItsiKpiBaseSearch#metric_qualifier}
  */
  readonly metricQualifier?: string;
  /**
  * Value in minutes. This determines how far back each time window is during KPI search runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#search_alert_earliest ItsiKpiBaseSearch#search_alert_earliest}
  */
  readonly searchAlertEarliest: string;
  /**
  * The team the object belongs to. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#sec_grp ItsiKpiBaseSearch#sec_grp}
  */
  readonly secGrp?: string;
  /**
  * Source of DA used for this search. See KPI Threshold Templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#source_itsi_da ItsiKpiBaseSearch#source_itsi_da}
  */
  readonly sourceItsiDa?: string;
  /**
  * Name of this KPI base search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#title ItsiKpiBaseSearch#title}
  */
  readonly title: string;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#metrics ItsiKpiBaseSearch#metrics}
  */
  readonly metrics?: ItsiKpiBaseSearchMetrics[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#timeouts ItsiKpiBaseSearch#timeouts}
  */
  readonly timeouts?: ItsiKpiBaseSearchTimeouts;
}
export interface ItsiKpiBaseSearchMetrics {
  /**
  * Statistical operation (avg, max, median, stdev, and so on) used to combine data for the aggregate alert_value (used for all KPI).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#aggregate_statop ItsiKpiBaseSearch#aggregate_statop}
  */
  readonly aggregateStatop: string;
  /**
  * Statistical operation (avg, max, mean, and so on) used to combine data for alert_values on a per entity basis (used if entity_breakdown is true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#entity_statop ItsiKpiBaseSearch#entity_statop}
  */
  readonly entityStatop: string;
  /**
  * How to fill missing data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#fill_gaps ItsiKpiBaseSearch#fill_gaps}
  */
  readonly fillGaps: string;
  /**
  * Custom value to fill data gaps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#gap_custom_alert_value ItsiKpiBaseSearch#gap_custom_alert_value}
  */
  readonly gapCustomAlertValue?: number;
  /**
  * Severity level assigned for data gaps (info, normal, low, medium, high, critical, or unknown).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#gap_severity ItsiKpiBaseSearch#gap_severity}
  */
  readonly gapSeverity?: string;
  /**
  * Severity color assigned for data gaps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#gap_severity_color ItsiKpiBaseSearch#gap_severity_color}
  */
  readonly gapSeverityColor?: string;
  /**
  * Severity light color assigned for data gaps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#gap_severity_color_light ItsiKpiBaseSearch#gap_severity_color_light}
  */
  readonly gapSeverityColorLight?: string;
  /**
  * Severity value assigned for data gaps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#gap_severity_value ItsiKpiBaseSearch#gap_severity_value}
  */
  readonly gapSeverityValue?: string;
  /**
  * The field on which the statistical operation runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#threshold_field ItsiKpiBaseSearch#threshold_field}
  */
  readonly thresholdField: string;
  /**
  * Name of this metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#title ItsiKpiBaseSearch#title}
  */
  readonly title: string;
  /**
  * User-defined units for the values in threshold field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#unit ItsiKpiBaseSearch#unit}
  */
  readonly unit: string;
}

export function itsiKpiBaseSearchMetricsToTerraform(struct?: ItsiKpiBaseSearchMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_statop: cdktf.stringToTerraform(struct!.aggregateStatop),
    entity_statop: cdktf.stringToTerraform(struct!.entityStatop),
    fill_gaps: cdktf.stringToTerraform(struct!.fillGaps),
    gap_custom_alert_value: cdktf.numberToTerraform(struct!.gapCustomAlertValue),
    gap_severity: cdktf.stringToTerraform(struct!.gapSeverity),
    gap_severity_color: cdktf.stringToTerraform(struct!.gapSeverityColor),
    gap_severity_color_light: cdktf.stringToTerraform(struct!.gapSeverityColorLight),
    gap_severity_value: cdktf.stringToTerraform(struct!.gapSeverityValue),
    threshold_field: cdktf.stringToTerraform(struct!.thresholdField),
    title: cdktf.stringToTerraform(struct!.title),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function itsiKpiBaseSearchMetricsToHclTerraform(struct?: ItsiKpiBaseSearchMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_statop: {
      value: cdktf.stringToHclTerraform(struct!.aggregateStatop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_statop: {
      value: cdktf.stringToHclTerraform(struct!.entityStatop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fill_gaps: {
      value: cdktf.stringToHclTerraform(struct!.fillGaps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gap_custom_alert_value: {
      value: cdktf.numberToHclTerraform(struct!.gapCustomAlertValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gap_severity: {
      value: cdktf.stringToHclTerraform(struct!.gapSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gap_severity_color: {
      value: cdktf.stringToHclTerraform(struct!.gapSeverityColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gap_severity_color_light: {
      value: cdktf.stringToHclTerraform(struct!.gapSeverityColorLight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gap_severity_value: {
      value: cdktf.stringToHclTerraform(struct!.gapSeverityValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_field: {
      value: cdktf.stringToHclTerraform(struct!.thresholdField),
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
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiKpiBaseSearchMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiKpiBaseSearchMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateStatop !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateStatop = this._aggregateStatop;
    }
    if (this._entityStatop !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityStatop = this._entityStatop;
    }
    if (this._fillGaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillGaps = this._fillGaps;
    }
    if (this._gapCustomAlertValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gapCustomAlertValue = this._gapCustomAlertValue;
    }
    if (this._gapSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.gapSeverity = this._gapSeverity;
    }
    if (this._gapSeverityColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.gapSeverityColor = this._gapSeverityColor;
    }
    if (this._gapSeverityColorLight !== undefined) {
      hasAnyValues = true;
      internalValueResult.gapSeverityColorLight = this._gapSeverityColorLight;
    }
    if (this._gapSeverityValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gapSeverityValue = this._gapSeverityValue;
    }
    if (this._thresholdField !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdField = this._thresholdField;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiKpiBaseSearchMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateStatop = undefined;
      this._entityStatop = undefined;
      this._fillGaps = undefined;
      this._gapCustomAlertValue = undefined;
      this._gapSeverity = undefined;
      this._gapSeverityColor = undefined;
      this._gapSeverityColorLight = undefined;
      this._gapSeverityValue = undefined;
      this._thresholdField = undefined;
      this._title = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateStatop = value.aggregateStatop;
      this._entityStatop = value.entityStatop;
      this._fillGaps = value.fillGaps;
      this._gapCustomAlertValue = value.gapCustomAlertValue;
      this._gapSeverity = value.gapSeverity;
      this._gapSeverityColor = value.gapSeverityColor;
      this._gapSeverityColorLight = value.gapSeverityColorLight;
      this._gapSeverityValue = value.gapSeverityValue;
      this._thresholdField = value.thresholdField;
      this._title = value.title;
      this._unit = value.unit;
    }
  }

  // aggregate_statop - computed: false, optional: false, required: true
  private _aggregateStatop?: string; 
  public get aggregateStatop() {
    return this.getStringAttribute('aggregate_statop');
  }
  public set aggregateStatop(value: string) {
    this._aggregateStatop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateStatopInput() {
    return this._aggregateStatop;
  }

  // entity_statop - computed: false, optional: false, required: true
  private _entityStatop?: string; 
  public get entityStatop() {
    return this.getStringAttribute('entity_statop');
  }
  public set entityStatop(value: string) {
    this._entityStatop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityStatopInput() {
    return this._entityStatop;
  }

  // fill_gaps - computed: false, optional: false, required: true
  private _fillGaps?: string; 
  public get fillGaps() {
    return this.getStringAttribute('fill_gaps');
  }
  public set fillGaps(value: string) {
    this._fillGaps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fillGapsInput() {
    return this._fillGaps;
  }

  // gap_custom_alert_value - computed: true, optional: true, required: false
  private _gapCustomAlertValue?: number; 
  public get gapCustomAlertValue() {
    return this.getNumberAttribute('gap_custom_alert_value');
  }
  public set gapCustomAlertValue(value: number) {
    this._gapCustomAlertValue = value;
  }
  public resetGapCustomAlertValue() {
    this._gapCustomAlertValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gapCustomAlertValueInput() {
    return this._gapCustomAlertValue;
  }

  // gap_severity - computed: true, optional: true, required: false
  private _gapSeverity?: string; 
  public get gapSeverity() {
    return this.getStringAttribute('gap_severity');
  }
  public set gapSeverity(value: string) {
    this._gapSeverity = value;
  }
  public resetGapSeverity() {
    this._gapSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gapSeverityInput() {
    return this._gapSeverity;
  }

  // gap_severity_color - computed: true, optional: true, required: false
  private _gapSeverityColor?: string; 
  public get gapSeverityColor() {
    return this.getStringAttribute('gap_severity_color');
  }
  public set gapSeverityColor(value: string) {
    this._gapSeverityColor = value;
  }
  public resetGapSeverityColor() {
    this._gapSeverityColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gapSeverityColorInput() {
    return this._gapSeverityColor;
  }

  // gap_severity_color_light - computed: true, optional: true, required: false
  private _gapSeverityColorLight?: string; 
  public get gapSeverityColorLight() {
    return this.getStringAttribute('gap_severity_color_light');
  }
  public set gapSeverityColorLight(value: string) {
    this._gapSeverityColorLight = value;
  }
  public resetGapSeverityColorLight() {
    this._gapSeverityColorLight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gapSeverityColorLightInput() {
    return this._gapSeverityColorLight;
  }

  // gap_severity_value - computed: true, optional: true, required: false
  private _gapSeverityValue?: string; 
  public get gapSeverityValue() {
    return this.getStringAttribute('gap_severity_value');
  }
  public set gapSeverityValue(value: string) {
    this._gapSeverityValue = value;
  }
  public resetGapSeverityValue() {
    this._gapSeverityValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gapSeverityValueInput() {
    return this._gapSeverityValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // threshold_field - computed: false, optional: false, required: true
  private _thresholdField?: string; 
  public get thresholdField() {
    return this.getStringAttribute('threshold_field');
  }
  public set thresholdField(value: string) {
    this._thresholdField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdFieldInput() {
    return this._thresholdField;
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

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class ItsiKpiBaseSearchMetricsList extends cdktf.ComplexList {
  public internalValue? : ItsiKpiBaseSearchMetrics[] | cdktf.IResolvable

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
  public get(index: number): ItsiKpiBaseSearchMetricsOutputReference {
    return new ItsiKpiBaseSearchMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiKpiBaseSearchTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#create ItsiKpiBaseSearch#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#delete ItsiKpiBaseSearch#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#read ItsiKpiBaseSearch#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#update ItsiKpiBaseSearch#update}
  */
  readonly update?: string;
}

export function itsiKpiBaseSearchTimeoutsToTerraform(struct?: ItsiKpiBaseSearchTimeouts | cdktf.IResolvable): any {
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


export function itsiKpiBaseSearchTimeoutsToHclTerraform(struct?: ItsiKpiBaseSearchTimeouts | cdktf.IResolvable): any {
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

export class ItsiKpiBaseSearchTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ItsiKpiBaseSearchTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ItsiKpiBaseSearchTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search itsi_kpi_base_search}
*/
export class ItsiKpiBaseSearch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "itsi_kpi_base_search";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ItsiKpiBaseSearch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ItsiKpiBaseSearch to import
  * @param importFromId The id of the existing ItsiKpiBaseSearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ItsiKpiBaseSearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "itsi_kpi_base_search", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_kpi_base_search itsi_kpi_base_search} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ItsiKpiBaseSearchConfig
  */
  public constructor(scope: Construct, id: string, config: ItsiKpiBaseSearchConfig) {
    super(scope, id, {
      terraformResourceType: 'itsi_kpi_base_search',
      terraformGeneratorMetadata: {
        providerName: 'splunk-itsi',
        providerVersion: '2.2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions = config.actions;
    this._alertLag = config.alertLag;
    this._alertPeriod = config.alertPeriod;
    this._baseSearch = config.baseSearch;
    this._description = config.description;
    this._entityAliasFilteringFields = config.entityAliasFilteringFields;
    this._entityBreakdownIdFields = config.entityBreakdownIdFields;
    this._entityIdFields = config.entityIdFields;
    this._isEntityBreakdown = config.isEntityBreakdown;
    this._isServiceEntityFilter = config.isServiceEntityFilter;
    this._metricQualifier = config.metricQualifier;
    this._searchAlertEarliest = config.searchAlertEarliest;
    this._secGrp = config.secGrp;
    this._sourceItsiDa = config.sourceItsiDa;
    this._title = config.title;
    this._metrics.internalValue = config.metrics;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: true, optional: true, required: false
  private _actions?: string; 
  public get actions() {
    return this.getStringAttribute('actions');
  }
  public set actions(value: string) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // alert_lag - computed: false, optional: false, required: true
  private _alertLag?: string; 
  public get alertLag() {
    return this.getStringAttribute('alert_lag');
  }
  public set alertLag(value: string) {
    this._alertLag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertLagInput() {
    return this._alertLag;
  }

  // alert_period - computed: false, optional: false, required: true
  private _alertPeriod?: string; 
  public get alertPeriod() {
    return this.getStringAttribute('alert_period');
  }
  public set alertPeriod(value: string) {
    this._alertPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPeriodInput() {
    return this._alertPeriod;
  }

  // base_search - computed: false, optional: false, required: true
  private _baseSearch?: string; 
  public get baseSearch() {
    return this.getStringAttribute('base_search');
  }
  public set baseSearch(value: string) {
    this._baseSearch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseSearchInput() {
    return this._baseSearch;
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

  // entity_alias_filtering_fields - computed: true, optional: true, required: false
  private _entityAliasFilteringFields?: string; 
  public get entityAliasFilteringFields() {
    return this.getStringAttribute('entity_alias_filtering_fields');
  }
  public set entityAliasFilteringFields(value: string) {
    this._entityAliasFilteringFields = value;
  }
  public resetEntityAliasFilteringFields() {
    this._entityAliasFilteringFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityAliasFilteringFieldsInput() {
    return this._entityAliasFilteringFields;
  }

  // entity_breakdown_id_fields - computed: false, optional: false, required: true
  private _entityBreakdownIdFields?: string; 
  public get entityBreakdownIdFields() {
    return this.getStringAttribute('entity_breakdown_id_fields');
  }
  public set entityBreakdownIdFields(value: string) {
    this._entityBreakdownIdFields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityBreakdownIdFieldsInput() {
    return this._entityBreakdownIdFields;
  }

  // entity_id_fields - computed: false, optional: false, required: true
  private _entityIdFields?: string; 
  public get entityIdFields() {
    return this.getStringAttribute('entity_id_fields');
  }
  public set entityIdFields(value: string) {
    this._entityIdFields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdFieldsInput() {
    return this._entityIdFields;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_entity_breakdown - computed: false, optional: false, required: true
  private _isEntityBreakdown?: boolean | cdktf.IResolvable; 
  public get isEntityBreakdown() {
    return this.getBooleanAttribute('is_entity_breakdown');
  }
  public set isEntityBreakdown(value: boolean | cdktf.IResolvable) {
    this._isEntityBreakdown = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEntityBreakdownInput() {
    return this._isEntityBreakdown;
  }

  // is_service_entity_filter - computed: false, optional: false, required: true
  private _isServiceEntityFilter?: boolean | cdktf.IResolvable; 
  public get isServiceEntityFilter() {
    return this.getBooleanAttribute('is_service_entity_filter');
  }
  public set isServiceEntityFilter(value: boolean | cdktf.IResolvable) {
    this._isServiceEntityFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isServiceEntityFilterInput() {
    return this._isServiceEntityFilter;
  }

  // metric_qualifier - computed: true, optional: true, required: false
  private _metricQualifier?: string; 
  public get metricQualifier() {
    return this.getStringAttribute('metric_qualifier');
  }
  public set metricQualifier(value: string) {
    this._metricQualifier = value;
  }
  public resetMetricQualifier() {
    this._metricQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricQualifierInput() {
    return this._metricQualifier;
  }

  // search_alert_earliest - computed: false, optional: false, required: true
  private _searchAlertEarliest?: string; 
  public get searchAlertEarliest() {
    return this.getStringAttribute('search_alert_earliest');
  }
  public set searchAlertEarliest(value: string) {
    this._searchAlertEarliest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchAlertEarliestInput() {
    return this._searchAlertEarliest;
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

  // source_itsi_da - computed: true, optional: true, required: false
  private _sourceItsiDa?: string; 
  public get sourceItsiDa() {
    return this.getStringAttribute('source_itsi_da');
  }
  public set sourceItsiDa(value: string) {
    this._sourceItsiDa = value;
  }
  public resetSourceItsiDa() {
    this._sourceItsiDa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceItsiDaInput() {
    return this._sourceItsiDa;
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

  // metrics - computed: false, optional: true, required: false
  private _metrics = new ItsiKpiBaseSearchMetricsList(this, "metrics", true);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: ItsiKpiBaseSearchMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ItsiKpiBaseSearchTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ItsiKpiBaseSearchTimeouts) {
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
      actions: cdktf.stringToTerraform(this._actions),
      alert_lag: cdktf.stringToTerraform(this._alertLag),
      alert_period: cdktf.stringToTerraform(this._alertPeriod),
      base_search: cdktf.stringToTerraform(this._baseSearch),
      description: cdktf.stringToTerraform(this._description),
      entity_alias_filtering_fields: cdktf.stringToTerraform(this._entityAliasFilteringFields),
      entity_breakdown_id_fields: cdktf.stringToTerraform(this._entityBreakdownIdFields),
      entity_id_fields: cdktf.stringToTerraform(this._entityIdFields),
      is_entity_breakdown: cdktf.booleanToTerraform(this._isEntityBreakdown),
      is_service_entity_filter: cdktf.booleanToTerraform(this._isServiceEntityFilter),
      metric_qualifier: cdktf.stringToTerraform(this._metricQualifier),
      search_alert_earliest: cdktf.stringToTerraform(this._searchAlertEarliest),
      sec_grp: cdktf.stringToTerraform(this._secGrp),
      source_itsi_da: cdktf.stringToTerraform(this._sourceItsiDa),
      title: cdktf.stringToTerraform(this._title),
      metrics: cdktf.listMapper(itsiKpiBaseSearchMetricsToTerraform, true)(this._metrics.internalValue),
      timeouts: itsiKpiBaseSearchTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.stringToHclTerraform(this._actions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_lag: {
        value: cdktf.stringToHclTerraform(this._alertLag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_period: {
        value: cdktf.stringToHclTerraform(this._alertPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_search: {
        value: cdktf.stringToHclTerraform(this._baseSearch),
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
      entity_alias_filtering_fields: {
        value: cdktf.stringToHclTerraform(this._entityAliasFilteringFields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_breakdown_id_fields: {
        value: cdktf.stringToHclTerraform(this._entityBreakdownIdFields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_id_fields: {
        value: cdktf.stringToHclTerraform(this._entityIdFields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_entity_breakdown: {
        value: cdktf.booleanToHclTerraform(this._isEntityBreakdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_service_entity_filter: {
        value: cdktf.booleanToHclTerraform(this._isServiceEntityFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric_qualifier: {
        value: cdktf.stringToHclTerraform(this._metricQualifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_alert_earliest: {
        value: cdktf.stringToHclTerraform(this._searchAlertEarliest),
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
      source_itsi_da: {
        value: cdktf.stringToHclTerraform(this._sourceItsiDa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics: {
        value: cdktf.listMapperHcl(itsiKpiBaseSearchMetricsToHclTerraform, true)(this._metrics.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ItsiKpiBaseSearchMetricsList",
      },
      timeouts: {
        value: itsiKpiBaseSearchTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ItsiKpiBaseSearchTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
