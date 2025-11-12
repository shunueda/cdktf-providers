// https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/dashboards
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWavefrontDashboardsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/dashboards#id DataWavefrontDashboards#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/dashboards#limit DataWavefrontDashboards#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/dashboards#offset DataWavefrontDashboards#offset}
  */
  readonly offset?: number;
}
export interface DataWavefrontDashboardsDashboardsParameterDetails {
}

export function dataWavefrontDashboardsDashboardsParameterDetailsToTerraform(struct?: DataWavefrontDashboardsDashboardsParameterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWavefrontDashboardsDashboardsParameterDetailsToHclTerraform(struct?: DataWavefrontDashboardsDashboardsParameterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWavefrontDashboardsDashboardsParameterDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWavefrontDashboardsDashboardsParameterDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWavefrontDashboardsDashboardsParameterDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // dynamic_field_type - computed: true, optional: false, required: false
  public get dynamicFieldType() {
    return this.getStringAttribute('dynamic_field_type');
  }

  // hide_from_view - computed: true, optional: false, required: false
  public get hideFromView() {
    return this.getBooleanAttribute('hide_from_view');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // parameter_type - computed: true, optional: false, required: false
  public get parameterType() {
    return this.getStringAttribute('parameter_type');
  }

  // query_value - computed: true, optional: false, required: false
  public get queryValue() {
    return this.getStringAttribute('query_value');
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // values_to_readable_strings - computed: true, optional: false, required: false
  private _valuesToReadableStrings = new cdktf.StringMap(this, "values_to_readable_strings");
  public get valuesToReadableStrings() {
    return this._valuesToReadableStrings;
  }
}

export class DataWavefrontDashboardsDashboardsParameterDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataWavefrontDashboardsDashboardsParameterDetailsOutputReference {
    return new DataWavefrontDashboardsDashboardsParameterDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWavefrontDashboardsDashboardsSectionsRowsChartsChartSettings {
}

export function dataWavefrontDashboardsDashboardsSectionsRowsChartsChartSettingsToTerraform(struct?: DataWavefrontDashboardsDashboardsSectionsRowsChartsChartSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWavefrontDashboardsDashboardsSectionsRowsChartsChartSettingsToHclTerraform(struct?: DataWavefrontDashboardsDashboardsSectionsRowsChartsChartSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWavefrontDashboardsDashboardsSectionsRowsChartsChartSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWavefrontDashboardsDashboardsSectionsRowsChartsChartSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWavefrontDashboardsDashboardsSectionsRowsChartsChartSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_column_tags - computed: true, optional: false, required: false
  public get autoColumnTags() {
    return this.getBooleanAttribute('auto_column_tags');
  }

  // column_tags - computed: true, optional: false, required: false
  public get columnTags() {
    return this.getStringAttribute('column_tags');
  }

  // custom_tags - computed: true, optional: false, required: false
  public get customTags() {
    return this.getListAttribute('custom_tags');
  }

  // expected_data_spacing - computed: true, optional: false, required: false
  public get expectedDataSpacing() {
    return this.getNumberAttribute('expected_data_spacing');
  }

  // fixed_legend_display_stats - computed: true, optional: false, required: false
  public get fixedLegendDisplayStats() {
    return this.getListAttribute('fixed_legend_display_stats');
  }

  // fixed_legend_enabled - computed: true, optional: false, required: false
  public get fixedLegendEnabled() {
    return this.getBooleanAttribute('fixed_legend_enabled');
  }

  // fixed_legend_filter_field - computed: true, optional: false, required: false
  public get fixedLegendFilterField() {
    return this.getStringAttribute('fixed_legend_filter_field');
  }

  // fixed_legend_filter_limit - computed: true, optional: false, required: false
  public get fixedLegendFilterLimit() {
    return this.getNumberAttribute('fixed_legend_filter_limit');
  }

  // fixed_legend_filter_sort - computed: true, optional: false, required: false
  public get fixedLegendFilterSort() {
    return this.getStringAttribute('fixed_legend_filter_sort');
  }

  // fixed_legend_hide_label - computed: true, optional: false, required: false
  public get fixedLegendHideLabel() {
    return this.getBooleanAttribute('fixed_legend_hide_label');
  }

  // fixed_legend_position - computed: true, optional: false, required: false
  public get fixedLegendPosition() {
    return this.getStringAttribute('fixed_legend_position');
  }

  // fixed_legend_use_raw_stats - computed: true, optional: false, required: false
  public get fixedLegendUseRawStats() {
    return this.getBooleanAttribute('fixed_legend_use_raw_stats');
  }

  // group_by_source - computed: true, optional: false, required: false
  public get groupBySource() {
    return this.getBooleanAttribute('group_by_source');
  }

  // invert_dynamic_legend_hover_control - computed: true, optional: false, required: false
  public get invertDynamicLegendHoverControl() {
    return this.getBooleanAttribute('invert_dynamic_legend_hover_control');
  }

  // line_type - computed: true, optional: false, required: false
  public get lineType() {
    return this.getStringAttribute('line_type');
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }

  // num_tags - computed: true, optional: false, required: false
  public get numTags() {
    return this.getNumberAttribute('num_tags');
  }

  // plain_markdown_content - computed: true, optional: false, required: false
  public get plainMarkdownContent() {
    return this.getStringAttribute('plain_markdown_content');
  }

  // show_hosts - computed: true, optional: false, required: false
  public get showHosts() {
    return this.getBooleanAttribute('show_hosts');
  }

  // show_labels - computed: true, optional: false, required: false
  public get showLabels() {
    return this.getBooleanAttribute('show_labels');
  }

  // show_raw_values - computed: true, optional: false, required: false
  public get showRawValues() {
    return this.getBooleanAttribute('show_raw_values');
  }

  // sort_values_descending - computed: true, optional: false, required: false
  public get sortValuesDescending() {
    return this.getBooleanAttribute('sort_values_descending');
  }

  // sparkline_decimal_precision - computed: true, optional: false, required: false
  public get sparklineDecimalPrecision() {
    return this.getNumberAttribute('sparkline_decimal_precision');
  }

  // sparkline_display_color - computed: true, optional: false, required: false
  public get sparklineDisplayColor() {
    return this.getStringAttribute('sparkline_display_color');
  }

  // sparkline_display_font_size - computed: true, optional: false, required: false
  public get sparklineDisplayFontSize() {
    return this.getStringAttribute('sparkline_display_font_size');
  }

  // sparkline_display_horizontal_position - computed: true, optional: false, required: false
  public get sparklineDisplayHorizontalPosition() {
    return this.getStringAttribute('sparkline_display_horizontal_position');
  }

  // sparkline_display_postfix - computed: true, optional: false, required: false
  public get sparklineDisplayPostfix() {
    return this.getStringAttribute('sparkline_display_postfix');
  }

  // sparkline_display_prefix - computed: true, optional: false, required: false
  public get sparklineDisplayPrefix() {
    return this.getStringAttribute('sparkline_display_prefix');
  }

  // sparkline_display_value_type - computed: true, optional: false, required: false
  public get sparklineDisplayValueType() {
    return this.getStringAttribute('sparkline_display_value_type');
  }

  // sparkline_display_vertical_position - computed: true, optional: false, required: false
  public get sparklineDisplayVerticalPosition() {
    return this.getStringAttribute('sparkline_display_vertical_position');
  }

  // sparkline_fill_color - computed: true, optional: false, required: false
  public get sparklineFillColor() {
    return this.getStringAttribute('sparkline_fill_color');
  }

  // sparkline_line_color - computed: true, optional: false, required: false
  public get sparklineLineColor() {
    return this.getStringAttribute('sparkline_line_color');
  }

  // sparkline_size - computed: true, optional: false, required: false
  public get sparklineSize() {
    return this.getStringAttribute('sparkline_size');
  }

  // sparkline_value_color_map_apply_to - computed: true, optional: false, required: false
  public get sparklineValueColorMapApplyTo() {
    return this.getStringAttribute('sparkline_value_color_map_apply_to');
  }

  // sparkline_value_color_map_colors - computed: true, optional: false, required: false
  public get sparklineValueColorMapColors() {
    return this.getListAttribute('sparkline_value_color_map_colors');
  }

  // sparkline_value_color_map_values - computed: true, optional: false, required: false
  public get sparklineValueColorMapValues() {
    return this.getNumberListAttribute('sparkline_value_color_map_values');
  }

  // sparkline_value_color_map_values_v2 - computed: true, optional: false, required: false
  public get sparklineValueColorMapValuesV2() {
    return this.getNumberListAttribute('sparkline_value_color_map_values_v2');
  }

  // sparkline_value_text_map_text - computed: true, optional: false, required: false
  public get sparklineValueTextMapText() {
    return this.getListAttribute('sparkline_value_text_map_text');
  }

  // sparkline_value_text_map_thresholds - computed: true, optional: false, required: false
  public get sparklineValueTextMapThresholds() {
    return this.getNumberListAttribute('sparkline_value_text_map_thresholds');
  }

  // stack_type - computed: true, optional: false, required: false
  public get stackType() {
    return this.getStringAttribute('stack_type');
  }

  // tag_mode - computed: true, optional: false, required: false
  public get tagMode() {
    return this.getStringAttribute('tag_mode');
  }

  // time_based_coloring - computed: true, optional: false, required: false
  public get timeBasedColoring() {
    return this.getBooleanAttribute('time_based_coloring');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // window_size - computed: true, optional: false, required: false
  public get windowSize() {
    return this.getNumberAttribute('window_size');
  }

  // windowing - computed: true, optional: false, required: false
  public get windowing() {
    return this.getStringAttribute('windowing');
  }

  // xmax - computed: true, optional: false, required: false
  public get xmax() {
    return this.getNumberAttribute('xmax');
  }

  // xmin - computed: true, optional: false, required: false
  public get xmin() {
    return this.getNumberAttribute('xmin');
  }

  // y0_scale_si_by1024 - computed: true, optional: false, required: false
  public get y0ScaleSiBy1024() {
    return this.getBooleanAttribute('y0_scale_si_by1024');
  }

  // y0_unit_autoscaling - computed: true, optional: false, required: false
  public get y0UnitAutoscaling() {
    return this.getBooleanAttribute('y0_unit_autoscaling');
  }

  // y1_max - computed: true, optional: false, required: false
  public get y1Max() {
    return this.getNumberAttribute('y1_max');
  }

  // y1_min - computed: true, optional: false, required: false
  public get y1Min() {
    return this.getNumberAttribute('y1_min');
  }

  // y1_scale_si_by1024 - computed: true, optional: false, required: false
  public get y1ScaleSiBy1024() {
    return this.getBooleanAttribute('y1_scale_si_by1024');
  }

  // y1_unit_autoscaling - computed: true, optional: false, required: false
  public get y1UnitAutoscaling() {
    return this.getBooleanAttribute('y1_unit_autoscaling');
  }

  // y1_units - computed: true, optional: false, required: false
  public get y1Units() {
    return this.getStringAttribute('y1_units');
  }

  // ymax - computed: true, optional: false, required: false
  public get ymax() {
    return this.getNumberAttribute('ymax');
  }

  // ymin - computed: true, optional: false, required: false
  public get ymin() {
    return this.getNumberAttribute('ymin');
  }
}

export class DataWavefrontDashboardsDashboardsSectionsRowsChartsChartSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataWavefrontDashboardsDashboardsSectionsRowsChartsChartSettingsOutputReference {
    return new DataWavefrontDashboardsDashboardsSectionsRowsChartsChartSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWavefrontDashboardsDashboardsSectionsRowsChartsSources {
}

export function dataWavefrontDashboardsDashboardsSectionsRowsChartsSourcesToTerraform(struct?: DataWavefrontDashboardsDashboardsSectionsRowsChartsSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWavefrontDashboardsDashboardsSectionsRowsChartsSourcesToHclTerraform(struct?: DataWavefrontDashboardsDashboardsSectionsRowsChartsSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWavefrontDashboardsDashboardsSectionsRowsChartsSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWavefrontDashboardsDashboardsSectionsRowsChartsSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWavefrontDashboardsDashboardsSectionsRowsChartsSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // querybuilder_enabled - computed: true, optional: false, required: false
  public get querybuilderEnabled() {
    return this.getBooleanAttribute('querybuilder_enabled');
  }

  // scatter_plot_source - computed: true, optional: false, required: false
  public get scatterPlotSource() {
    return this.getStringAttribute('scatter_plot_source');
  }

  // secondary_axis - computed: true, optional: false, required: false
  public get secondaryAxis() {
    return this.getBooleanAttribute('secondary_axis');
  }

  // source_color - computed: true, optional: false, required: false
  public get sourceColor() {
    return this.getStringAttribute('source_color');
  }

  // source_description - computed: true, optional: false, required: false
  public get sourceDescription() {
    return this.getStringAttribute('source_description');
  }
}

export class DataWavefrontDashboardsDashboardsSectionsRowsChartsSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataWavefrontDashboardsDashboardsSectionsRowsChartsSourcesOutputReference {
    return new DataWavefrontDashboardsDashboardsSectionsRowsChartsSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWavefrontDashboardsDashboardsSectionsRowsCharts {
}

export function dataWavefrontDashboardsDashboardsSectionsRowsChartsToTerraform(struct?: DataWavefrontDashboardsDashboardsSectionsRowsCharts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWavefrontDashboardsDashboardsSectionsRowsChartsToHclTerraform(struct?: DataWavefrontDashboardsDashboardsSectionsRowsCharts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWavefrontDashboardsDashboardsSectionsRowsChartsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWavefrontDashboardsDashboardsSectionsRowsCharts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWavefrontDashboardsDashboardsSectionsRowsCharts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base - computed: true, optional: false, required: false
  public get base() {
    return this.getNumberAttribute('base');
  }

  // chart_attributes - computed: true, optional: false, required: false
  public get chartAttributes() {
    return this.getStringAttribute('chart_attributes');
  }

  // chart_settings - computed: true, optional: false, required: false
  private _chartSettings = new DataWavefrontDashboardsDashboardsSectionsRowsChartsChartSettingsList(this, "chart_settings", false);
  public get chartSettings() {
    return this._chartSettings;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // include_obsolete_metrics - computed: true, optional: false, required: false
  public get includeObsoleteMetrics() {
    return this.getBooleanAttribute('include_obsolete_metrics');
  }

  // interpolate_points_key - computed: true, optional: false, required: false
  public get interpolatePointsKey() {
    return this.getBooleanAttribute('interpolate_points_key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // no_default_events - computed: true, optional: false, required: false
  public get noDefaultEvents() {
    return this.getBooleanAttribute('no_default_events');
  }

  // sources - computed: true, optional: false, required: false
  private _sources = new DataWavefrontDashboardsDashboardsSectionsRowsChartsSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }

  // summarization - computed: true, optional: false, required: false
  public get summarization() {
    return this.getStringAttribute('summarization');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }
}

export class DataWavefrontDashboardsDashboardsSectionsRowsChartsList extends cdktf.ComplexList {

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
  public get(index: number): DataWavefrontDashboardsDashboardsSectionsRowsChartsOutputReference {
    return new DataWavefrontDashboardsDashboardsSectionsRowsChartsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWavefrontDashboardsDashboardsSectionsRows {
}

export function dataWavefrontDashboardsDashboardsSectionsRowsToTerraform(struct?: DataWavefrontDashboardsDashboardsSectionsRows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWavefrontDashboardsDashboardsSectionsRowsToHclTerraform(struct?: DataWavefrontDashboardsDashboardsSectionsRows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWavefrontDashboardsDashboardsSectionsRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWavefrontDashboardsDashboardsSectionsRows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWavefrontDashboardsDashboardsSectionsRows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // charts - computed: true, optional: false, required: false
  private _charts = new DataWavefrontDashboardsDashboardsSectionsRowsChartsList(this, "charts", false);
  public get charts() {
    return this._charts;
  }

  // height_factor - computed: true, optional: false, required: false
  public get heightFactor() {
    return this.getNumberAttribute('height_factor');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataWavefrontDashboardsDashboardsSectionsRowsList extends cdktf.ComplexList {

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
  public get(index: number): DataWavefrontDashboardsDashboardsSectionsRowsOutputReference {
    return new DataWavefrontDashboardsDashboardsSectionsRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWavefrontDashboardsDashboardsSections {
}

export function dataWavefrontDashboardsDashboardsSectionsToTerraform(struct?: DataWavefrontDashboardsDashboardsSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWavefrontDashboardsDashboardsSectionsToHclTerraform(struct?: DataWavefrontDashboardsDashboardsSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWavefrontDashboardsDashboardsSectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWavefrontDashboardsDashboardsSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWavefrontDashboardsDashboardsSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rows - computed: true, optional: false, required: false
  private _rows = new DataWavefrontDashboardsDashboardsSectionsRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
}

export class DataWavefrontDashboardsDashboardsSectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataWavefrontDashboardsDashboardsSectionsOutputReference {
    return new DataWavefrontDashboardsDashboardsSectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWavefrontDashboardsDashboards {
}

export function dataWavefrontDashboardsDashboardsToTerraform(struct?: DataWavefrontDashboardsDashboards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWavefrontDashboardsDashboardsToHclTerraform(struct?: DataWavefrontDashboardsDashboards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWavefrontDashboardsDashboardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWavefrontDashboardsDashboards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWavefrontDashboardsDashboards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // can_modify - computed: true, optional: false, required: false
  public get canModify() {
    return this.getListAttribute('can_modify');
  }

  // can_view - computed: true, optional: false, required: false
  public get canView() {
    return this.getListAttribute('can_view');
  }

  // chart_title_bg_color - computed: true, optional: false, required: false
  public get chartTitleBgColor() {
    return this.getStringAttribute('chart_title_bg_color');
  }

  // chart_title_color - computed: true, optional: false, required: false
  public get chartTitleColor() {
    return this.getStringAttribute('chart_title_color');
  }

  // chart_title_scalar - computed: true, optional: false, required: false
  public get chartTitleScalar() {
    return this.getNumberAttribute('chart_title_scalar');
  }

  // created_epoch_millis - computed: true, optional: false, required: false
  public get createdEpochMillis() {
    return this.getNumberAttribute('created_epoch_millis');
  }

  // creator_id - computed: true, optional: false, required: false
  public get creatorId() {
    return this.getStringAttribute('creator_id');
  }

  // customer - computed: true, optional: false, required: false
  public get customer() {
    return this.getStringAttribute('customer');
  }

  // default_end_time - computed: true, optional: false, required: false
  public get defaultEndTime() {
    return this.getNumberAttribute('default_end_time');
  }

  // default_start_time - computed: true, optional: false, required: false
  public get defaultStartTime() {
    return this.getNumberAttribute('default_start_time');
  }

  // default_time_window - computed: true, optional: false, required: false
  public get defaultTimeWindow() {
    return this.getStringAttribute('default_time_window');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_description - computed: true, optional: false, required: false
  public get displayDescription() {
    return this.getBooleanAttribute('display_description');
  }

  // display_query_parameters - computed: true, optional: false, required: false
  public get displayQueryParameters() {
    return this.getBooleanAttribute('display_query_parameters');
  }

  // display_section_table_of_contents - computed: true, optional: false, required: false
  public get displaySectionTableOfContents() {
    return this.getBooleanAttribute('display_section_table_of_contents');
  }

  // event_filter_type - computed: true, optional: false, required: false
  public get eventFilterType() {
    return this.getStringAttribute('event_filter_type');
  }

  // event_query - computed: true, optional: false, required: false
  public get eventQuery() {
    return this.getStringAttribute('event_query');
  }

  // favorite - computed: true, optional: false, required: false
  public get favorite() {
    return this.getBooleanAttribute('favorite');
  }

  // hidden - computed: true, optional: false, required: false
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_charts - computed: true, optional: false, required: false
  public get numCharts() {
    return this.getNumberAttribute('num_charts');
  }

  // num_favorites - computed: true, optional: false, required: false
  public get numFavorites() {
    return this.getNumberAttribute('num_favorites');
  }

  // parameter_details - computed: true, optional: false, required: false
  private _parameterDetails = new DataWavefrontDashboardsDashboardsParameterDetailsList(this, "parameter_details", false);
  public get parameterDetails() {
    return this._parameterDetails;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktf.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // sections - computed: true, optional: false, required: false
  private _sections = new DataWavefrontDashboardsDashboardsSectionsList(this, "sections", false);
  public get sections() {
    return this._sections;
  }

  // system_owned - computed: true, optional: false, required: false
  public get systemOwned() {
    return this.getBooleanAttribute('system_owned');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // updated_epoch_millis - computed: true, optional: false, required: false
  public get updatedEpochMillis() {
    return this.getNumberAttribute('updated_epoch_millis');
  }

  // updater_id - computed: true, optional: false, required: false
  public get updaterId() {
    return this.getStringAttribute('updater_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // views_last_day - computed: true, optional: false, required: false
  public get viewsLastDay() {
    return this.getNumberAttribute('views_last_day');
  }

  // views_last_month - computed: true, optional: false, required: false
  public get viewsLastMonth() {
    return this.getNumberAttribute('views_last_month');
  }

  // views_last_week - computed: true, optional: false, required: false
  public get viewsLastWeek() {
    return this.getNumberAttribute('views_last_week');
  }
}

export class DataWavefrontDashboardsDashboardsList extends cdktf.ComplexList {

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
  public get(index: number): DataWavefrontDashboardsDashboardsOutputReference {
    return new DataWavefrontDashboardsDashboardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/dashboards wavefront_dashboards}
*/
export class DataWavefrontDashboards extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wavefront_dashboards";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWavefrontDashboards resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWavefrontDashboards to import
  * @param importFromId The id of the existing DataWavefrontDashboards that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/dashboards#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWavefrontDashboards to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wavefront_dashboards", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/dashboards wavefront_dashboards} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWavefrontDashboardsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataWavefrontDashboardsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'wavefront_dashboards',
      terraformGeneratorMetadata: {
        providerName: 'wavefront',
        providerVersion: '5.1.0',
        providerVersionConstraint: '5.1.0'
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
    this._limit = config.limit;
    this._offset = config.offset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboards - computed: true, optional: false, required: false
  private _dashboards = new DataWavefrontDashboardsDashboardsList(this, "dashboards", true);
  public get dashboards() {
    return this._dashboards;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
