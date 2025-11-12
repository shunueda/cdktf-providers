// https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#can_modify Dashboard#can_modify}
  */
  readonly canModify?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#can_view Dashboard#can_view}
  */
  readonly canView?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#description Dashboard#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#display_query_parameters Dashboard#display_query_parameters}
  */
  readonly displayQueryParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#display_section_table_of_contents Dashboard#display_section_table_of_contents}
  */
  readonly displaySectionTableOfContents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#event_filter_type Dashboard#event_filter_type}
  */
  readonly eventFilterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#id Dashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#tags Dashboard#tags}
  */
  readonly tags: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#url Dashboard#url}
  */
  readonly url: string;
  /**
  * parameter_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#parameter_details Dashboard#parameter_details}
  */
  readonly parameterDetails?: DashboardParameterDetails[] | cdktf.IResolvable;
  /**
  * section block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#section Dashboard#section}
  */
  readonly section: DashboardSection[] | cdktf.IResolvable;
}
export interface DashboardParameterDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#default_value Dashboard#default_value}
  */
  readonly defaultValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#dynamic_field_type Dashboard#dynamic_field_type}
  */
  readonly dynamicFieldType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#hide_from_view Dashboard#hide_from_view}
  */
  readonly hideFromView: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#label Dashboard#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#parameter_type Dashboard#parameter_type}
  */
  readonly parameterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#query_value Dashboard#query_value}
  */
  readonly queryValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#tag_key Dashboard#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Map of [string]string. At least one of the keys must match the value of default_value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#values_to_readable_strings Dashboard#values_to_readable_strings}
  */
  readonly valuesToReadableStrings: { [key: string]: string };
}

export function dashboardParameterDetailsToTerraform(struct?: DashboardParameterDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    dynamic_field_type: cdktf.stringToTerraform(struct!.dynamicFieldType),
    hide_from_view: cdktf.booleanToTerraform(struct!.hideFromView),
    label: cdktf.stringToTerraform(struct!.label),
    name: cdktf.stringToTerraform(struct!.name),
    parameter_type: cdktf.stringToTerraform(struct!.parameterType),
    query_value: cdktf.stringToTerraform(struct!.queryValue),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    values_to_readable_strings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.valuesToReadableStrings),
  }
}


export function dashboardParameterDetailsToHclTerraform(struct?: DashboardParameterDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_field_type: {
      value: cdktf.stringToHclTerraform(struct!.dynamicFieldType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_from_view: {
      value: cdktf.booleanToHclTerraform(struct!.hideFromView),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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
    parameter_type: {
      value: cdktf.stringToHclTerraform(struct!.parameterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_value: {
      value: cdktf.stringToHclTerraform(struct!.queryValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_to_readable_strings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.valuesToReadableStrings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardParameterDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardParameterDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._dynamicFieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicFieldType = this._dynamicFieldType;
    }
    if (this._hideFromView !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideFromView = this._hideFromView;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterType = this._parameterType;
    }
    if (this._queryValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryValue = this._queryValue;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._valuesToReadableStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesToReadableStrings = this._valuesToReadableStrings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardParameterDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._dynamicFieldType = undefined;
      this._hideFromView = undefined;
      this._label = undefined;
      this._name = undefined;
      this._parameterType = undefined;
      this._queryValue = undefined;
      this._tagKey = undefined;
      this._valuesToReadableStrings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._dynamicFieldType = value.dynamicFieldType;
      this._hideFromView = value.hideFromView;
      this._label = value.label;
      this._name = value.name;
      this._parameterType = value.parameterType;
      this._queryValue = value.queryValue;
      this._tagKey = value.tagKey;
      this._valuesToReadableStrings = value.valuesToReadableStrings;
    }
  }

  // default_value - computed: false, optional: false, required: true
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // dynamic_field_type - computed: false, optional: true, required: false
  private _dynamicFieldType?: string; 
  public get dynamicFieldType() {
    return this.getStringAttribute('dynamic_field_type');
  }
  public set dynamicFieldType(value: string) {
    this._dynamicFieldType = value;
  }
  public resetDynamicFieldType() {
    this._dynamicFieldType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicFieldTypeInput() {
    return this._dynamicFieldType;
  }

  // hide_from_view - computed: false, optional: false, required: true
  private _hideFromView?: boolean | cdktf.IResolvable; 
  public get hideFromView() {
    return this.getBooleanAttribute('hide_from_view');
  }
  public set hideFromView(value: boolean | cdktf.IResolvable) {
    this._hideFromView = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hideFromViewInput() {
    return this._hideFromView;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // parameter_type - computed: false, optional: false, required: true
  private _parameterType?: string; 
  public get parameterType() {
    return this.getStringAttribute('parameter_type');
  }
  public set parameterType(value: string) {
    this._parameterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterTypeInput() {
    return this._parameterType;
  }

  // query_value - computed: false, optional: true, required: false
  private _queryValue?: string; 
  public get queryValue() {
    return this.getStringAttribute('query_value');
  }
  public set queryValue(value: string) {
    this._queryValue = value;
  }
  public resetQueryValue() {
    this._queryValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryValueInput() {
    return this._queryValue;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // values_to_readable_strings - computed: false, optional: false, required: true
  private _valuesToReadableStrings?: { [key: string]: string }; 
  public get valuesToReadableStrings() {
    return this.getStringMapAttribute('values_to_readable_strings');
  }
  public set valuesToReadableStrings(value: { [key: string]: string }) {
    this._valuesToReadableStrings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesToReadableStringsInput() {
    return this._valuesToReadableStrings;
  }
}

export class DashboardParameterDetailsList extends cdktf.ComplexList {
  public internalValue? : DashboardParameterDetails[] | cdktf.IResolvable

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
  public get(index: number): DashboardParameterDetailsOutputReference {
    return new DashboardParameterDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardSectionRowChartChartSetting {
  /**
  * deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#auto_column_tags Dashboard#auto_column_tags}
  */
  readonly autoColumnTags?: boolean | cdktf.IResolvable;
  /**
  * deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#column_tags Dashboard#column_tags}
  */
  readonly columnTags?: string;
  /**
  * For the tabular view, a list of point tags to display when using the custom tag display mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#custom_tags Dashboard#custom_tags}
  */
  readonly customTags?: string[];
  /**
  * Threshold (in seconds) for time delta between consecutive points in a series above which a dotted line will replace a solid line in line plots. Default: 60s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#expected_data_spacing Dashboard#expected_data_spacing}
  */
  readonly expectedDataSpacing?: number;
  /**
  * For a chart with a fixed legend, a list of statistics to display in the legend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#fixed_legend_display_stats Dashboard#fixed_legend_display_stats}
  */
  readonly fixedLegendDisplayStats?: string[];
  /**
  * Whether to enable a fixed tabular legend adjacent to the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#fixed_legend_enabled Dashboard#fixed_legend_enabled}
  */
  readonly fixedLegendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Statistic to use for determining whether a series is displayed on the fixed legend = ['CURRENT', 'MEAN', 'MEDIAN', 'SUM', 'MIN', 'MAX', 'COUNT']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#fixed_legend_filter_field Dashboard#fixed_legend_filter_field}
  */
  readonly fixedLegendFilterField?: string;
  /**
  * Number of series to include in the fixed legend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#fixed_legend_filter_limit Dashboard#fixed_legend_filter_limit}
  */
  readonly fixedLegendFilterLimit?: number;
  /**
  * Whether to display Top- or Bottom-ranked series in the fixed legend = ['TOP', 'BOTTOM']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#fixed_legend_filter_sort Dashboard#fixed_legend_filter_sort}
  */
  readonly fixedLegendFilterSort?: string;
  /**
  * deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#fixed_legend_hide_label Dashboard#fixed_legend_hide_label}
  */
  readonly fixedLegendHideLabel?: boolean | cdktf.IResolvable;
  /**
  * Where the fixed legend should be displayed with respect to the chart = ['RIGHT', 'TOP', 'LEFT', 'BOTTOM']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#fixed_legend_position Dashboard#fixed_legend_position}
  */
  readonly fixedLegendPosition?: string;
  /**
  * If true, the legend uses non-summarized stats instead of summarized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#fixed_legend_use_raw_stats Dashboard#fixed_legend_use_raw_stats}
  */
  readonly fixedLegendUseRawStats?: boolean | cdktf.IResolvable;
  /**
  * For the tabular view, whether to group multi metrics into a single row by a common source. If false, each metric for each source is displayed in its own row. If true, multiple metrics for the same host will be displayed as different columns in the same row
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#group_by_source Dashboard#group_by_source}
  */
  readonly groupBySource?: boolean | cdktf.IResolvable;
  /**
  * Whether to disable the display of the floating legend (but reenable it when the ctrl-key is pressed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#invert_dynamic_legend_hover_control Dashboard#invert_dynamic_legend_hover_control}
  */
  readonly invertDynamicLegendHoverControl?: boolean | cdktf.IResolvable;
  /**
  * Plot interpolation type. linear is default = ['linear', 'step-before', 'step-after', 'basis', 'cardinal', 'monotone']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#line_type Dashboard#line_type}
  */
  readonly lineType?: string;
  /**
  * Max value of Y-axis. Set to null or leave blank for auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#max Dashboard#max}
  */
  readonly max?: number;
  /**
  * Min value of Y-axis. Set to null or leave blank for auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#min Dashboard#min}
  */
  readonly min?: number;
  /**
  * For the tabular view, how many point tags to display
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#num_tags Dashboard#num_tags}
  */
  readonly numTags?: number;
  /**
  * The Markdown content for a Markdown display, in plain text. Use this field instead of markdownContent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#plain_markdown_content Dashboard#plain_markdown_content}
  */
  readonly plainMarkdownContent?: string;
  /**
  * For the tabular view, whether to display sources. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#show_hosts Dashboard#show_hosts}
  */
  readonly showHosts?: boolean | cdktf.IResolvable;
  /**
  * For the tabular view, whether to display labels. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#show_labels Dashboard#show_labels}
  */
  readonly showLabels?: boolean | cdktf.IResolvable;
  /**
  * For the tabular view, whether to display raw values. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#show_raw_values Dashboard#show_raw_values}
  */
  readonly showRawValues?: boolean | cdktf.IResolvable;
  /**
  * For the tabular view, whether to display display values in descending order. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sort_values_descending Dashboard#sort_values_descending}
  */
  readonly sortValuesDescending?: boolean | cdktf.IResolvable;
  /**
  * For the single stat view, the decimal precision of the displayed number 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sparkline_decimal_precision Dashboard#sparkline_decimal_precision}
  */
  readonly sparklineDecimalPrecision?: number;
  /**
  * For the single stat view, the color of the displayed text (when not dynamically determined). Values should be in rgba(, , ,  format 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sparkline_display_color Dashboard#sparkline_display_color}
  */
  readonly sparklineDisplayColor?: string;
  /**
  * For the single stat view, the font size of the displayed text, in percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sparkline_display_font_size Dashboard#sparkline_display_font_size}
  */
  readonly sparklineDisplayFontSize?: string;
  /**
  * For the single stat view, the horizontal position of the displayed text = ['MIDDLE', 'LEFT', 'RIGHT']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sparkline_display_horizontal_position Dashboard#sparkline_display_horizontal_position}
  */
  readonly sparklineDisplayHorizontalPosition?: string;
  /**
  * For the single stat view, a string to append to the displayed text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sparkline_display_postfix Dashboard#sparkline_display_postfix}
  */
  readonly sparklineDisplayPostfix?: string;
  /**
  * For the single stat view, a string to add before the displayed text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sparkline_display_prefix Dashboard#sparkline_display_prefix}
  */
  readonly sparklineDisplayPrefix?: string;
  /**
  * For the single stat view, whether to display the name of the query or the value of query = ['VALUE', 'LABEL']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sparkline_display_value_type Dashboard#sparkline_display_value_type}
  */
  readonly sparklineDisplayValueType?: string;
  /**
  * deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sparkline_display_vertical_position Dashboard#sparkline_display_vertical_position}
  */
  readonly sparklineDisplayVerticalPosition?: string;
  /**
  * For the single stat view, the color of the background fill. Values should be in rgba(, , ,  format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sparkline_fill_color Dashboard#sparkline_fill_color}
  */
  readonly sparklineFillColor?: string;
  /**
  * For the single stat view, the color of the line. Values should be in rgba(, , ,  format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sparkline_line_color Dashboard#sparkline_line_color}
  */
  readonly sparklineLineColor?: string;
  /**
  * For the single stat view, a misleadingly named property. This determines whether the sparkline of the statistic is displayed in the chart BACKGROUND, BOTTOM, or NONE = ['BACKGROUND', 'BOTTOM', 'NONE']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sparkline_size Dashboard#sparkline_size}
  */
  readonly sparklineSize?: string;
  /**
  * For the single stat view, whether to apply dynamic color settings to the displayed TEXT or BACKGROUND = ['TEXT', 'BACKGROUND']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sparkline_value_color_map_apply_to Dashboard#sparkline_value_color_map_apply_to}
  */
  readonly sparklineValueColorMapApplyTo?: string;
  /**
  * For the single stat view, a list of colors that differing query values map to. Must contain one more element than sparklineValueColorMapValuesV2. Values should be in rgba(, , ,  format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sparkline_value_color_map_colors Dashboard#sparkline_value_color_map_colors}
  */
  readonly sparklineValueColorMapColors?: string[];
  /**
  * deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sparkline_value_color_map_values Dashboard#sparkline_value_color_map_values}
  */
  readonly sparklineValueColorMapValues?: number[];
  /**
  * deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sparkline_value_color_map_values_v2 Dashboard#sparkline_value_color_map_values_v2}
  */
  readonly sparklineValueColorMapValuesV2?: number[];
  /**
  * For the single stat view, a list of display text values that different query values map to. Must contain one more element than sparklineValueTextMapThresholds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sparkline_value_text_map_text Dashboard#sparkline_value_text_map_text}
  */
  readonly sparklineValueTextMapText?: string[];
  /**
  * For the single stat view, a list of threshold boundaries for mapping different query values to display text. Must contain one less element than sparklineValueTextMapText
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#sparkline_value_text_map_thresholds Dashboard#sparkline_value_text_map_thresholds}
  */
  readonly sparklineValueTextMapThresholds?: number[];
  /**
  * Type of stacked chart (applicable only if chart type is stacked). zero (default) means stacked from y=0. expand means Normalized from 0 to 1. wiggle means Minimize weighted changes. silhouette means to Center the Stream = ['zero', 'expand', 'wiggle', 'silhouette']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#stack_type Dashboard#stack_type}
  */
  readonly stackType?: string;
  /**
  * For the tabular view, which mode to use to determine which point tags to display = ['all', 'top', 'custom']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#tag_mode Dashboard#tag_mode}
  */
  readonly tagMode?: string;
  /**
  * Fox x-y scatterplots, whether to color more recent points as darker than older points. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#time_based_coloring Dashboard#time_based_coloring}
  */
  readonly timeBasedColoring?: boolean | cdktf.IResolvable;
  /**
  * Chart Type. 'line' refers to the Line Plot, 'scatter' to the Point Plot, 'stacked-area' to the Stacked Area plot, 'table' to the Tabular View, 'scatterploy-xy' to Scatter Plot, 'markdown-widget' to the Markdown display, and 'sparkline' to the Single Stat view = ['line', 'scatterplot', 'stacked-area', 'table', 'scatterplot-xy', 'markdown-widget', 'sparkline']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * Width, in minutes, of the time window to use for last windowing 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#window_size Dashboard#window_size}
  */
  readonly windowSize?: number;
  /**
  * For the tabular view, whether to use the full time window for the query or the last X minutes = ['full', 'last']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#windowing Dashboard#windowing}
  */
  readonly windowing?: string;
  /**
  * For x-y scatterplots, max value for X-axis. Set null for auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#xmax Dashboard#xmax}
  */
  readonly xmax?: number;
  /**
  * For x-y scatterplots, min value for X-axis. Set null for auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#xmin Dashboard#xmin}
  */
  readonly xmin?: number;
  /**
  * Default: false. Whether to scale numerical magnitude labels for left Y-axis by 1024 in the IEC/Binary manner (instead of by 1000 like SI) ,
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#y0_scale_si_by_1024 Dashboard#y0_scale_si_by_1024}
  */
  readonly y0ScaleSiBy1024?: boolean | cdktf.IResolvable;
  /**
  * Default: false. Whether to automatically adjust magnitude labels and units for the left Y-axis to favor smaller magnitudes and larger units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#y0_unit_autoscaling Dashboard#y0_unit_autoscaling}
  */
  readonly y0UnitAutoscaling?: boolean | cdktf.IResolvable;
  /**
  * Default: false. Whether to scale numerical magnitude labels for right Y-axis by 1024 in the IEC/Binary manner (instead of by 1000 like SI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#y1_scale_si_by_1024 Dashboard#y1_scale_si_by_1024}
  */
  readonly y1ScaleSiBy1024?: boolean | cdktf.IResolvable;
  /**
  * Default: false. Whether to automatically adjust magnitude labels and units for the right Y-axis to favor smaller magnitudes and larger units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#y1_unit_autoscaling Dashboard#y1_unit_autoscaling}
  */
  readonly y1UnitAutoscaling?: boolean | cdktf.IResolvable;
  /**
  * For plots with multiple Y-axes, units for right-side Y-axis 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#y1_units Dashboard#y1_units}
  */
  readonly y1Units?: string;
  /**
  * For plots with multiple Y-axes, max value for right-side Y-axis. Set null for auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#y1max Dashboard#y1max}
  */
  readonly y1Max?: number;
  /**
  * For plots with multiple Y-axes, min value for right-side Y-axis. Set null for auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#y1min Dashboard#y1min}
  */
  readonly y1Min?: number;
  /**
  * For x-y scatterplots, max value for Y-axis. Set null for auto 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#ymax Dashboard#ymax}
  */
  readonly ymax?: number;
  /**
  * For x-y scatterplots, min value for Y-axis. Set null for auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#ymin Dashboard#ymin}
  */
  readonly ymin?: number;
}

export function dashboardSectionRowChartChartSettingToTerraform(struct?: DashboardSectionRowChartChartSettingOutputReference | DashboardSectionRowChartChartSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_column_tags: cdktf.booleanToTerraform(struct!.autoColumnTags),
    column_tags: cdktf.stringToTerraform(struct!.columnTags),
    custom_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customTags),
    expected_data_spacing: cdktf.numberToTerraform(struct!.expectedDataSpacing),
    fixed_legend_display_stats: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fixedLegendDisplayStats),
    fixed_legend_enabled: cdktf.booleanToTerraform(struct!.fixedLegendEnabled),
    fixed_legend_filter_field: cdktf.stringToTerraform(struct!.fixedLegendFilterField),
    fixed_legend_filter_limit: cdktf.numberToTerraform(struct!.fixedLegendFilterLimit),
    fixed_legend_filter_sort: cdktf.stringToTerraform(struct!.fixedLegendFilterSort),
    fixed_legend_hide_label: cdktf.booleanToTerraform(struct!.fixedLegendHideLabel),
    fixed_legend_position: cdktf.stringToTerraform(struct!.fixedLegendPosition),
    fixed_legend_use_raw_stats: cdktf.booleanToTerraform(struct!.fixedLegendUseRawStats),
    group_by_source: cdktf.booleanToTerraform(struct!.groupBySource),
    invert_dynamic_legend_hover_control: cdktf.booleanToTerraform(struct!.invertDynamicLegendHoverControl),
    line_type: cdktf.stringToTerraform(struct!.lineType),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    num_tags: cdktf.numberToTerraform(struct!.numTags),
    plain_markdown_content: cdktf.stringToTerraform(struct!.plainMarkdownContent),
    show_hosts: cdktf.booleanToTerraform(struct!.showHosts),
    show_labels: cdktf.booleanToTerraform(struct!.showLabels),
    show_raw_values: cdktf.booleanToTerraform(struct!.showRawValues),
    sort_values_descending: cdktf.booleanToTerraform(struct!.sortValuesDescending),
    sparkline_decimal_precision: cdktf.numberToTerraform(struct!.sparklineDecimalPrecision),
    sparkline_display_color: cdktf.stringToTerraform(struct!.sparklineDisplayColor),
    sparkline_display_font_size: cdktf.stringToTerraform(struct!.sparklineDisplayFontSize),
    sparkline_display_horizontal_position: cdktf.stringToTerraform(struct!.sparklineDisplayHorizontalPosition),
    sparkline_display_postfix: cdktf.stringToTerraform(struct!.sparklineDisplayPostfix),
    sparkline_display_prefix: cdktf.stringToTerraform(struct!.sparklineDisplayPrefix),
    sparkline_display_value_type: cdktf.stringToTerraform(struct!.sparklineDisplayValueType),
    sparkline_display_vertical_position: cdktf.stringToTerraform(struct!.sparklineDisplayVerticalPosition),
    sparkline_fill_color: cdktf.stringToTerraform(struct!.sparklineFillColor),
    sparkline_line_color: cdktf.stringToTerraform(struct!.sparklineLineColor),
    sparkline_size: cdktf.stringToTerraform(struct!.sparklineSize),
    sparkline_value_color_map_apply_to: cdktf.stringToTerraform(struct!.sparklineValueColorMapApplyTo),
    sparkline_value_color_map_colors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sparklineValueColorMapColors),
    sparkline_value_color_map_values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.sparklineValueColorMapValues),
    sparkline_value_color_map_values_v2: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.sparklineValueColorMapValuesV2),
    sparkline_value_text_map_text: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sparklineValueTextMapText),
    sparkline_value_text_map_thresholds: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.sparklineValueTextMapThresholds),
    stack_type: cdktf.stringToTerraform(struct!.stackType),
    tag_mode: cdktf.stringToTerraform(struct!.tagMode),
    time_based_coloring: cdktf.booleanToTerraform(struct!.timeBasedColoring),
    type: cdktf.stringToTerraform(struct!.type),
    window_size: cdktf.numberToTerraform(struct!.windowSize),
    windowing: cdktf.stringToTerraform(struct!.windowing),
    xmax: cdktf.numberToTerraform(struct!.xmax),
    xmin: cdktf.numberToTerraform(struct!.xmin),
    y0_scale_si_by_1024: cdktf.booleanToTerraform(struct!.y0ScaleSiBy1024),
    y0_unit_autoscaling: cdktf.booleanToTerraform(struct!.y0UnitAutoscaling),
    y1_scale_si_by_1024: cdktf.booleanToTerraform(struct!.y1ScaleSiBy1024),
    y1_unit_autoscaling: cdktf.booleanToTerraform(struct!.y1UnitAutoscaling),
    y1_units: cdktf.stringToTerraform(struct!.y1Units),
    y1max: cdktf.numberToTerraform(struct!.y1Max),
    y1min: cdktf.numberToTerraform(struct!.y1Min),
    ymax: cdktf.numberToTerraform(struct!.ymax),
    ymin: cdktf.numberToTerraform(struct!.ymin),
  }
}


export function dashboardSectionRowChartChartSettingToHclTerraform(struct?: DashboardSectionRowChartChartSettingOutputReference | DashboardSectionRowChartChartSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_column_tags: {
      value: cdktf.booleanToHclTerraform(struct!.autoColumnTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    column_tags: {
      value: cdktf.stringToHclTerraform(struct!.columnTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expected_data_spacing: {
      value: cdktf.numberToHclTerraform(struct!.expectedDataSpacing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_legend_display_stats: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fixedLegendDisplayStats),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fixed_legend_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.fixedLegendEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fixed_legend_filter_field: {
      value: cdktf.stringToHclTerraform(struct!.fixedLegendFilterField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_legend_filter_limit: {
      value: cdktf.numberToHclTerraform(struct!.fixedLegendFilterLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_legend_filter_sort: {
      value: cdktf.stringToHclTerraform(struct!.fixedLegendFilterSort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_legend_hide_label: {
      value: cdktf.booleanToHclTerraform(struct!.fixedLegendHideLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fixed_legend_position: {
      value: cdktf.stringToHclTerraform(struct!.fixedLegendPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_legend_use_raw_stats: {
      value: cdktf.booleanToHclTerraform(struct!.fixedLegendUseRawStats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_by_source: {
      value: cdktf.booleanToHclTerraform(struct!.groupBySource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_dynamic_legend_hover_control: {
      value: cdktf.booleanToHclTerraform(struct!.invertDynamicLegendHoverControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    line_type: {
      value: cdktf.stringToHclTerraform(struct!.lineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_tags: {
      value: cdktf.numberToHclTerraform(struct!.numTags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    plain_markdown_content: {
      value: cdktf.stringToHclTerraform(struct!.plainMarkdownContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_hosts: {
      value: cdktf.booleanToHclTerraform(struct!.showHosts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_labels: {
      value: cdktf.booleanToHclTerraform(struct!.showLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_raw_values: {
      value: cdktf.booleanToHclTerraform(struct!.showRawValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort_values_descending: {
      value: cdktf.booleanToHclTerraform(struct!.sortValuesDescending),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sparkline_decimal_precision: {
      value: cdktf.numberToHclTerraform(struct!.sparklineDecimalPrecision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sparkline_display_color: {
      value: cdktf.stringToHclTerraform(struct!.sparklineDisplayColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sparkline_display_font_size: {
      value: cdktf.stringToHclTerraform(struct!.sparklineDisplayFontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sparkline_display_horizontal_position: {
      value: cdktf.stringToHclTerraform(struct!.sparklineDisplayHorizontalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sparkline_display_postfix: {
      value: cdktf.stringToHclTerraform(struct!.sparklineDisplayPostfix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sparkline_display_prefix: {
      value: cdktf.stringToHclTerraform(struct!.sparklineDisplayPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sparkline_display_value_type: {
      value: cdktf.stringToHclTerraform(struct!.sparklineDisplayValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sparkline_display_vertical_position: {
      value: cdktf.stringToHclTerraform(struct!.sparklineDisplayVerticalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sparkline_fill_color: {
      value: cdktf.stringToHclTerraform(struct!.sparklineFillColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sparkline_line_color: {
      value: cdktf.stringToHclTerraform(struct!.sparklineLineColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sparkline_size: {
      value: cdktf.stringToHclTerraform(struct!.sparklineSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sparkline_value_color_map_apply_to: {
      value: cdktf.stringToHclTerraform(struct!.sparklineValueColorMapApplyTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sparkline_value_color_map_colors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sparklineValueColorMapColors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sparkline_value_color_map_values: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.sparklineValueColorMapValues),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    sparkline_value_color_map_values_v2: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.sparklineValueColorMapValuesV2),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    sparkline_value_text_map_text: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sparklineValueTextMapText),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sparkline_value_text_map_thresholds: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.sparklineValueTextMapThresholds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    stack_type: {
      value: cdktf.stringToHclTerraform(struct!.stackType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_mode: {
      value: cdktf.stringToHclTerraform(struct!.tagMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_based_coloring: {
      value: cdktf.booleanToHclTerraform(struct!.timeBasedColoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_size: {
      value: cdktf.numberToHclTerraform(struct!.windowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    windowing: {
      value: cdktf.stringToHclTerraform(struct!.windowing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xmax: {
      value: cdktf.numberToHclTerraform(struct!.xmax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    xmin: {
      value: cdktf.numberToHclTerraform(struct!.xmin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y0_scale_si_by_1024: {
      value: cdktf.booleanToHclTerraform(struct!.y0ScaleSiBy1024),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    y0_unit_autoscaling: {
      value: cdktf.booleanToHclTerraform(struct!.y0UnitAutoscaling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    y1_scale_si_by_1024: {
      value: cdktf.booleanToHclTerraform(struct!.y1ScaleSiBy1024),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    y1_unit_autoscaling: {
      value: cdktf.booleanToHclTerraform(struct!.y1UnitAutoscaling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    y1_units: {
      value: cdktf.stringToHclTerraform(struct!.y1Units),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y1max: {
      value: cdktf.numberToHclTerraform(struct!.y1Max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y1min: {
      value: cdktf.numberToHclTerraform(struct!.y1Min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ymax: {
      value: cdktf.numberToHclTerraform(struct!.ymax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ymin: {
      value: cdktf.numberToHclTerraform(struct!.ymin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardSectionRowChartChartSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardSectionRowChartChartSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoColumnTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoColumnTags = this._autoColumnTags;
    }
    if (this._columnTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnTags = this._columnTags;
    }
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    if (this._expectedDataSpacing !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedDataSpacing = this._expectedDataSpacing;
    }
    if (this._fixedLegendDisplayStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedLegendDisplayStats = this._fixedLegendDisplayStats;
    }
    if (this._fixedLegendEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedLegendEnabled = this._fixedLegendEnabled;
    }
    if (this._fixedLegendFilterField !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedLegendFilterField = this._fixedLegendFilterField;
    }
    if (this._fixedLegendFilterLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedLegendFilterLimit = this._fixedLegendFilterLimit;
    }
    if (this._fixedLegendFilterSort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedLegendFilterSort = this._fixedLegendFilterSort;
    }
    if (this._fixedLegendHideLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedLegendHideLabel = this._fixedLegendHideLabel;
    }
    if (this._fixedLegendPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedLegendPosition = this._fixedLegendPosition;
    }
    if (this._fixedLegendUseRawStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedLegendUseRawStats = this._fixedLegendUseRawStats;
    }
    if (this._groupBySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBySource = this._groupBySource;
    }
    if (this._invertDynamicLegendHoverControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertDynamicLegendHoverControl = this._invertDynamicLegendHoverControl;
    }
    if (this._lineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineType = this._lineType;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._numTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.numTags = this._numTags;
    }
    if (this._plainMarkdownContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainMarkdownContent = this._plainMarkdownContent;
    }
    if (this._showHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.showHosts = this._showHosts;
    }
    if (this._showLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLabels = this._showLabels;
    }
    if (this._showRawValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.showRawValues = this._showRawValues;
    }
    if (this._sortValuesDescending !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortValuesDescending = this._sortValuesDescending;
    }
    if (this._sparklineDecimalPrecision !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparklineDecimalPrecision = this._sparklineDecimalPrecision;
    }
    if (this._sparklineDisplayColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparklineDisplayColor = this._sparklineDisplayColor;
    }
    if (this._sparklineDisplayFontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparklineDisplayFontSize = this._sparklineDisplayFontSize;
    }
    if (this._sparklineDisplayHorizontalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparklineDisplayHorizontalPosition = this._sparklineDisplayHorizontalPosition;
    }
    if (this._sparklineDisplayPostfix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparklineDisplayPostfix = this._sparklineDisplayPostfix;
    }
    if (this._sparklineDisplayPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparklineDisplayPrefix = this._sparklineDisplayPrefix;
    }
    if (this._sparklineDisplayValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparklineDisplayValueType = this._sparklineDisplayValueType;
    }
    if (this._sparklineDisplayVerticalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparklineDisplayVerticalPosition = this._sparklineDisplayVerticalPosition;
    }
    if (this._sparklineFillColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparklineFillColor = this._sparklineFillColor;
    }
    if (this._sparklineLineColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparklineLineColor = this._sparklineLineColor;
    }
    if (this._sparklineSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparklineSize = this._sparklineSize;
    }
    if (this._sparklineValueColorMapApplyTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparklineValueColorMapApplyTo = this._sparklineValueColorMapApplyTo;
    }
    if (this._sparklineValueColorMapColors !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparklineValueColorMapColors = this._sparklineValueColorMapColors;
    }
    if (this._sparklineValueColorMapValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparklineValueColorMapValues = this._sparklineValueColorMapValues;
    }
    if (this._sparklineValueColorMapValuesV2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparklineValueColorMapValuesV2 = this._sparklineValueColorMapValuesV2;
    }
    if (this._sparklineValueTextMapText !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparklineValueTextMapText = this._sparklineValueTextMapText;
    }
    if (this._sparklineValueTextMapThresholds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparklineValueTextMapThresholds = this._sparklineValueTextMapThresholds;
    }
    if (this._stackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackType = this._stackType;
    }
    if (this._tagMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagMode = this._tagMode;
    }
    if (this._timeBasedColoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBasedColoring = this._timeBasedColoring;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._windowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSize = this._windowSize;
    }
    if (this._windowing !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowing = this._windowing;
    }
    if (this._xmax !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmax = this._xmax;
    }
    if (this._xmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmin = this._xmin;
    }
    if (this._y0ScaleSiBy1024 !== undefined) {
      hasAnyValues = true;
      internalValueResult.y0ScaleSiBy1024 = this._y0ScaleSiBy1024;
    }
    if (this._y0UnitAutoscaling !== undefined) {
      hasAnyValues = true;
      internalValueResult.y0UnitAutoscaling = this._y0UnitAutoscaling;
    }
    if (this._y1ScaleSiBy1024 !== undefined) {
      hasAnyValues = true;
      internalValueResult.y1ScaleSiBy1024 = this._y1ScaleSiBy1024;
    }
    if (this._y1UnitAutoscaling !== undefined) {
      hasAnyValues = true;
      internalValueResult.y1UnitAutoscaling = this._y1UnitAutoscaling;
    }
    if (this._y1Units !== undefined) {
      hasAnyValues = true;
      internalValueResult.y1Units = this._y1Units;
    }
    if (this._y1Max !== undefined) {
      hasAnyValues = true;
      internalValueResult.y1Max = this._y1Max;
    }
    if (this._y1Min !== undefined) {
      hasAnyValues = true;
      internalValueResult.y1Min = this._y1Min;
    }
    if (this._ymax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ymax = this._ymax;
    }
    if (this._ymin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ymin = this._ymin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardSectionRowChartChartSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoColumnTags = undefined;
      this._columnTags = undefined;
      this._customTags = undefined;
      this._expectedDataSpacing = undefined;
      this._fixedLegendDisplayStats = undefined;
      this._fixedLegendEnabled = undefined;
      this._fixedLegendFilterField = undefined;
      this._fixedLegendFilterLimit = undefined;
      this._fixedLegendFilterSort = undefined;
      this._fixedLegendHideLabel = undefined;
      this._fixedLegendPosition = undefined;
      this._fixedLegendUseRawStats = undefined;
      this._groupBySource = undefined;
      this._invertDynamicLegendHoverControl = undefined;
      this._lineType = undefined;
      this._max = undefined;
      this._min = undefined;
      this._numTags = undefined;
      this._plainMarkdownContent = undefined;
      this._showHosts = undefined;
      this._showLabels = undefined;
      this._showRawValues = undefined;
      this._sortValuesDescending = undefined;
      this._sparklineDecimalPrecision = undefined;
      this._sparklineDisplayColor = undefined;
      this._sparklineDisplayFontSize = undefined;
      this._sparklineDisplayHorizontalPosition = undefined;
      this._sparklineDisplayPostfix = undefined;
      this._sparklineDisplayPrefix = undefined;
      this._sparklineDisplayValueType = undefined;
      this._sparklineDisplayVerticalPosition = undefined;
      this._sparklineFillColor = undefined;
      this._sparklineLineColor = undefined;
      this._sparklineSize = undefined;
      this._sparklineValueColorMapApplyTo = undefined;
      this._sparklineValueColorMapColors = undefined;
      this._sparklineValueColorMapValues = undefined;
      this._sparklineValueColorMapValuesV2 = undefined;
      this._sparklineValueTextMapText = undefined;
      this._sparklineValueTextMapThresholds = undefined;
      this._stackType = undefined;
      this._tagMode = undefined;
      this._timeBasedColoring = undefined;
      this._type = undefined;
      this._windowSize = undefined;
      this._windowing = undefined;
      this._xmax = undefined;
      this._xmin = undefined;
      this._y0ScaleSiBy1024 = undefined;
      this._y0UnitAutoscaling = undefined;
      this._y1ScaleSiBy1024 = undefined;
      this._y1UnitAutoscaling = undefined;
      this._y1Units = undefined;
      this._y1Max = undefined;
      this._y1Min = undefined;
      this._ymax = undefined;
      this._ymin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoColumnTags = value.autoColumnTags;
      this._columnTags = value.columnTags;
      this._customTags = value.customTags;
      this._expectedDataSpacing = value.expectedDataSpacing;
      this._fixedLegendDisplayStats = value.fixedLegendDisplayStats;
      this._fixedLegendEnabled = value.fixedLegendEnabled;
      this._fixedLegendFilterField = value.fixedLegendFilterField;
      this._fixedLegendFilterLimit = value.fixedLegendFilterLimit;
      this._fixedLegendFilterSort = value.fixedLegendFilterSort;
      this._fixedLegendHideLabel = value.fixedLegendHideLabel;
      this._fixedLegendPosition = value.fixedLegendPosition;
      this._fixedLegendUseRawStats = value.fixedLegendUseRawStats;
      this._groupBySource = value.groupBySource;
      this._invertDynamicLegendHoverControl = value.invertDynamicLegendHoverControl;
      this._lineType = value.lineType;
      this._max = value.max;
      this._min = value.min;
      this._numTags = value.numTags;
      this._plainMarkdownContent = value.plainMarkdownContent;
      this._showHosts = value.showHosts;
      this._showLabels = value.showLabels;
      this._showRawValues = value.showRawValues;
      this._sortValuesDescending = value.sortValuesDescending;
      this._sparklineDecimalPrecision = value.sparklineDecimalPrecision;
      this._sparklineDisplayColor = value.sparklineDisplayColor;
      this._sparklineDisplayFontSize = value.sparklineDisplayFontSize;
      this._sparklineDisplayHorizontalPosition = value.sparklineDisplayHorizontalPosition;
      this._sparklineDisplayPostfix = value.sparklineDisplayPostfix;
      this._sparklineDisplayPrefix = value.sparklineDisplayPrefix;
      this._sparklineDisplayValueType = value.sparklineDisplayValueType;
      this._sparklineDisplayVerticalPosition = value.sparklineDisplayVerticalPosition;
      this._sparklineFillColor = value.sparklineFillColor;
      this._sparklineLineColor = value.sparklineLineColor;
      this._sparklineSize = value.sparklineSize;
      this._sparklineValueColorMapApplyTo = value.sparklineValueColorMapApplyTo;
      this._sparklineValueColorMapColors = value.sparklineValueColorMapColors;
      this._sparklineValueColorMapValues = value.sparklineValueColorMapValues;
      this._sparklineValueColorMapValuesV2 = value.sparklineValueColorMapValuesV2;
      this._sparklineValueTextMapText = value.sparklineValueTextMapText;
      this._sparklineValueTextMapThresholds = value.sparklineValueTextMapThresholds;
      this._stackType = value.stackType;
      this._tagMode = value.tagMode;
      this._timeBasedColoring = value.timeBasedColoring;
      this._type = value.type;
      this._windowSize = value.windowSize;
      this._windowing = value.windowing;
      this._xmax = value.xmax;
      this._xmin = value.xmin;
      this._y0ScaleSiBy1024 = value.y0ScaleSiBy1024;
      this._y0UnitAutoscaling = value.y0UnitAutoscaling;
      this._y1ScaleSiBy1024 = value.y1ScaleSiBy1024;
      this._y1UnitAutoscaling = value.y1UnitAutoscaling;
      this._y1Units = value.y1Units;
      this._y1Max = value.y1Max;
      this._y1Min = value.y1Min;
      this._ymax = value.ymax;
      this._ymin = value.ymin;
    }
  }

  // auto_column_tags - computed: false, optional: true, required: false
  private _autoColumnTags?: boolean | cdktf.IResolvable; 
  public get autoColumnTags() {
    return this.getBooleanAttribute('auto_column_tags');
  }
  public set autoColumnTags(value: boolean | cdktf.IResolvable) {
    this._autoColumnTags = value;
  }
  public resetAutoColumnTags() {
    this._autoColumnTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoColumnTagsInput() {
    return this._autoColumnTags;
  }

  // column_tags - computed: false, optional: true, required: false
  private _columnTags?: string; 
  public get columnTags() {
    return this.getStringAttribute('column_tags');
  }
  public set columnTags(value: string) {
    this._columnTags = value;
  }
  public resetColumnTags() {
    this._columnTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnTagsInput() {
    return this._columnTags;
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: string[]; 
  public get customTags() {
    return this.getListAttribute('custom_tags');
  }
  public set customTags(value: string[]) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
  }

  // expected_data_spacing - computed: false, optional: true, required: false
  private _expectedDataSpacing?: number; 
  public get expectedDataSpacing() {
    return this.getNumberAttribute('expected_data_spacing');
  }
  public set expectedDataSpacing(value: number) {
    this._expectedDataSpacing = value;
  }
  public resetExpectedDataSpacing() {
    this._expectedDataSpacing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedDataSpacingInput() {
    return this._expectedDataSpacing;
  }

  // fixed_legend_display_stats - computed: false, optional: true, required: false
  private _fixedLegendDisplayStats?: string[]; 
  public get fixedLegendDisplayStats() {
    return this.getListAttribute('fixed_legend_display_stats');
  }
  public set fixedLegendDisplayStats(value: string[]) {
    this._fixedLegendDisplayStats = value;
  }
  public resetFixedLegendDisplayStats() {
    this._fixedLegendDisplayStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLegendDisplayStatsInput() {
    return this._fixedLegendDisplayStats;
  }

  // fixed_legend_enabled - computed: false, optional: true, required: false
  private _fixedLegendEnabled?: boolean | cdktf.IResolvable; 
  public get fixedLegendEnabled() {
    return this.getBooleanAttribute('fixed_legend_enabled');
  }
  public set fixedLegendEnabled(value: boolean | cdktf.IResolvable) {
    this._fixedLegendEnabled = value;
  }
  public resetFixedLegendEnabled() {
    this._fixedLegendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLegendEnabledInput() {
    return this._fixedLegendEnabled;
  }

  // fixed_legend_filter_field - computed: false, optional: true, required: false
  private _fixedLegendFilterField?: string; 
  public get fixedLegendFilterField() {
    return this.getStringAttribute('fixed_legend_filter_field');
  }
  public set fixedLegendFilterField(value: string) {
    this._fixedLegendFilterField = value;
  }
  public resetFixedLegendFilterField() {
    this._fixedLegendFilterField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLegendFilterFieldInput() {
    return this._fixedLegendFilterField;
  }

  // fixed_legend_filter_limit - computed: false, optional: true, required: false
  private _fixedLegendFilterLimit?: number; 
  public get fixedLegendFilterLimit() {
    return this.getNumberAttribute('fixed_legend_filter_limit');
  }
  public set fixedLegendFilterLimit(value: number) {
    this._fixedLegendFilterLimit = value;
  }
  public resetFixedLegendFilterLimit() {
    this._fixedLegendFilterLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLegendFilterLimitInput() {
    return this._fixedLegendFilterLimit;
  }

  // fixed_legend_filter_sort - computed: false, optional: true, required: false
  private _fixedLegendFilterSort?: string; 
  public get fixedLegendFilterSort() {
    return this.getStringAttribute('fixed_legend_filter_sort');
  }
  public set fixedLegendFilterSort(value: string) {
    this._fixedLegendFilterSort = value;
  }
  public resetFixedLegendFilterSort() {
    this._fixedLegendFilterSort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLegendFilterSortInput() {
    return this._fixedLegendFilterSort;
  }

  // fixed_legend_hide_label - computed: false, optional: true, required: false
  private _fixedLegendHideLabel?: boolean | cdktf.IResolvable; 
  public get fixedLegendHideLabel() {
    return this.getBooleanAttribute('fixed_legend_hide_label');
  }
  public set fixedLegendHideLabel(value: boolean | cdktf.IResolvable) {
    this._fixedLegendHideLabel = value;
  }
  public resetFixedLegendHideLabel() {
    this._fixedLegendHideLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLegendHideLabelInput() {
    return this._fixedLegendHideLabel;
  }

  // fixed_legend_position - computed: false, optional: true, required: false
  private _fixedLegendPosition?: string; 
  public get fixedLegendPosition() {
    return this.getStringAttribute('fixed_legend_position');
  }
  public set fixedLegendPosition(value: string) {
    this._fixedLegendPosition = value;
  }
  public resetFixedLegendPosition() {
    this._fixedLegendPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLegendPositionInput() {
    return this._fixedLegendPosition;
  }

  // fixed_legend_use_raw_stats - computed: false, optional: true, required: false
  private _fixedLegendUseRawStats?: boolean | cdktf.IResolvable; 
  public get fixedLegendUseRawStats() {
    return this.getBooleanAttribute('fixed_legend_use_raw_stats');
  }
  public set fixedLegendUseRawStats(value: boolean | cdktf.IResolvable) {
    this._fixedLegendUseRawStats = value;
  }
  public resetFixedLegendUseRawStats() {
    this._fixedLegendUseRawStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLegendUseRawStatsInput() {
    return this._fixedLegendUseRawStats;
  }

  // group_by_source - computed: false, optional: true, required: false
  private _groupBySource?: boolean | cdktf.IResolvable; 
  public get groupBySource() {
    return this.getBooleanAttribute('group_by_source');
  }
  public set groupBySource(value: boolean | cdktf.IResolvable) {
    this._groupBySource = value;
  }
  public resetGroupBySource() {
    this._groupBySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupBySourceInput() {
    return this._groupBySource;
  }

  // invert_dynamic_legend_hover_control - computed: false, optional: true, required: false
  private _invertDynamicLegendHoverControl?: boolean | cdktf.IResolvable; 
  public get invertDynamicLegendHoverControl() {
    return this.getBooleanAttribute('invert_dynamic_legend_hover_control');
  }
  public set invertDynamicLegendHoverControl(value: boolean | cdktf.IResolvable) {
    this._invertDynamicLegendHoverControl = value;
  }
  public resetInvertDynamicLegendHoverControl() {
    this._invertDynamicLegendHoverControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertDynamicLegendHoverControlInput() {
    return this._invertDynamicLegendHoverControl;
  }

  // line_type - computed: false, optional: true, required: false
  private _lineType?: string; 
  public get lineType() {
    return this.getStringAttribute('line_type');
  }
  public set lineType(value: string) {
    this._lineType = value;
  }
  public resetLineType() {
    this._lineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTypeInput() {
    return this._lineType;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // num_tags - computed: false, optional: true, required: false
  private _numTags?: number; 
  public get numTags() {
    return this.getNumberAttribute('num_tags');
  }
  public set numTags(value: number) {
    this._numTags = value;
  }
  public resetNumTags() {
    this._numTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numTagsInput() {
    return this._numTags;
  }

  // plain_markdown_content - computed: false, optional: true, required: false
  private _plainMarkdownContent?: string; 
  public get plainMarkdownContent() {
    return this.getStringAttribute('plain_markdown_content');
  }
  public set plainMarkdownContent(value: string) {
    this._plainMarkdownContent = value;
  }
  public resetPlainMarkdownContent() {
    this._plainMarkdownContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainMarkdownContentInput() {
    return this._plainMarkdownContent;
  }

  // show_hosts - computed: false, optional: true, required: false
  private _showHosts?: boolean | cdktf.IResolvable; 
  public get showHosts() {
    return this.getBooleanAttribute('show_hosts');
  }
  public set showHosts(value: boolean | cdktf.IResolvable) {
    this._showHosts = value;
  }
  public resetShowHosts() {
    this._showHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showHostsInput() {
    return this._showHosts;
  }

  // show_labels - computed: false, optional: true, required: false
  private _showLabels?: boolean | cdktf.IResolvable; 
  public get showLabels() {
    return this.getBooleanAttribute('show_labels');
  }
  public set showLabels(value: boolean | cdktf.IResolvable) {
    this._showLabels = value;
  }
  public resetShowLabels() {
    this._showLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLabelsInput() {
    return this._showLabels;
  }

  // show_raw_values - computed: false, optional: true, required: false
  private _showRawValues?: boolean | cdktf.IResolvable; 
  public get showRawValues() {
    return this.getBooleanAttribute('show_raw_values');
  }
  public set showRawValues(value: boolean | cdktf.IResolvable) {
    this._showRawValues = value;
  }
  public resetShowRawValues() {
    this._showRawValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showRawValuesInput() {
    return this._showRawValues;
  }

  // sort_values_descending - computed: false, optional: true, required: false
  private _sortValuesDescending?: boolean | cdktf.IResolvable; 
  public get sortValuesDescending() {
    return this.getBooleanAttribute('sort_values_descending');
  }
  public set sortValuesDescending(value: boolean | cdktf.IResolvable) {
    this._sortValuesDescending = value;
  }
  public resetSortValuesDescending() {
    this._sortValuesDescending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortValuesDescendingInput() {
    return this._sortValuesDescending;
  }

  // sparkline_decimal_precision - computed: false, optional: true, required: false
  private _sparklineDecimalPrecision?: number; 
  public get sparklineDecimalPrecision() {
    return this.getNumberAttribute('sparkline_decimal_precision');
  }
  public set sparklineDecimalPrecision(value: number) {
    this._sparklineDecimalPrecision = value;
  }
  public resetSparklineDecimalPrecision() {
    this._sparklineDecimalPrecision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparklineDecimalPrecisionInput() {
    return this._sparklineDecimalPrecision;
  }

  // sparkline_display_color - computed: false, optional: true, required: false
  private _sparklineDisplayColor?: string; 
  public get sparklineDisplayColor() {
    return this.getStringAttribute('sparkline_display_color');
  }
  public set sparklineDisplayColor(value: string) {
    this._sparklineDisplayColor = value;
  }
  public resetSparklineDisplayColor() {
    this._sparklineDisplayColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparklineDisplayColorInput() {
    return this._sparklineDisplayColor;
  }

  // sparkline_display_font_size - computed: false, optional: true, required: false
  private _sparklineDisplayFontSize?: string; 
  public get sparklineDisplayFontSize() {
    return this.getStringAttribute('sparkline_display_font_size');
  }
  public set sparklineDisplayFontSize(value: string) {
    this._sparklineDisplayFontSize = value;
  }
  public resetSparklineDisplayFontSize() {
    this._sparklineDisplayFontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparklineDisplayFontSizeInput() {
    return this._sparklineDisplayFontSize;
  }

  // sparkline_display_horizontal_position - computed: false, optional: true, required: false
  private _sparklineDisplayHorizontalPosition?: string; 
  public get sparklineDisplayHorizontalPosition() {
    return this.getStringAttribute('sparkline_display_horizontal_position');
  }
  public set sparklineDisplayHorizontalPosition(value: string) {
    this._sparklineDisplayHorizontalPosition = value;
  }
  public resetSparklineDisplayHorizontalPosition() {
    this._sparklineDisplayHorizontalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparklineDisplayHorizontalPositionInput() {
    return this._sparklineDisplayHorizontalPosition;
  }

  // sparkline_display_postfix - computed: false, optional: true, required: false
  private _sparklineDisplayPostfix?: string; 
  public get sparklineDisplayPostfix() {
    return this.getStringAttribute('sparkline_display_postfix');
  }
  public set sparklineDisplayPostfix(value: string) {
    this._sparklineDisplayPostfix = value;
  }
  public resetSparklineDisplayPostfix() {
    this._sparklineDisplayPostfix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparklineDisplayPostfixInput() {
    return this._sparklineDisplayPostfix;
  }

  // sparkline_display_prefix - computed: false, optional: true, required: false
  private _sparklineDisplayPrefix?: string; 
  public get sparklineDisplayPrefix() {
    return this.getStringAttribute('sparkline_display_prefix');
  }
  public set sparklineDisplayPrefix(value: string) {
    this._sparklineDisplayPrefix = value;
  }
  public resetSparklineDisplayPrefix() {
    this._sparklineDisplayPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparklineDisplayPrefixInput() {
    return this._sparklineDisplayPrefix;
  }

  // sparkline_display_value_type - computed: false, optional: true, required: false
  private _sparklineDisplayValueType?: string; 
  public get sparklineDisplayValueType() {
    return this.getStringAttribute('sparkline_display_value_type');
  }
  public set sparklineDisplayValueType(value: string) {
    this._sparklineDisplayValueType = value;
  }
  public resetSparklineDisplayValueType() {
    this._sparklineDisplayValueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparklineDisplayValueTypeInput() {
    return this._sparklineDisplayValueType;
  }

  // sparkline_display_vertical_position - computed: false, optional: true, required: false
  private _sparklineDisplayVerticalPosition?: string; 
  public get sparklineDisplayVerticalPosition() {
    return this.getStringAttribute('sparkline_display_vertical_position');
  }
  public set sparklineDisplayVerticalPosition(value: string) {
    this._sparklineDisplayVerticalPosition = value;
  }
  public resetSparklineDisplayVerticalPosition() {
    this._sparklineDisplayVerticalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparklineDisplayVerticalPositionInput() {
    return this._sparklineDisplayVerticalPosition;
  }

  // sparkline_fill_color - computed: false, optional: true, required: false
  private _sparklineFillColor?: string; 
  public get sparklineFillColor() {
    return this.getStringAttribute('sparkline_fill_color');
  }
  public set sparklineFillColor(value: string) {
    this._sparklineFillColor = value;
  }
  public resetSparklineFillColor() {
    this._sparklineFillColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparklineFillColorInput() {
    return this._sparklineFillColor;
  }

  // sparkline_line_color - computed: false, optional: true, required: false
  private _sparklineLineColor?: string; 
  public get sparklineLineColor() {
    return this.getStringAttribute('sparkline_line_color');
  }
  public set sparklineLineColor(value: string) {
    this._sparklineLineColor = value;
  }
  public resetSparklineLineColor() {
    this._sparklineLineColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparklineLineColorInput() {
    return this._sparklineLineColor;
  }

  // sparkline_size - computed: false, optional: true, required: false
  private _sparklineSize?: string; 
  public get sparklineSize() {
    return this.getStringAttribute('sparkline_size');
  }
  public set sparklineSize(value: string) {
    this._sparklineSize = value;
  }
  public resetSparklineSize() {
    this._sparklineSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparklineSizeInput() {
    return this._sparklineSize;
  }

  // sparkline_value_color_map_apply_to - computed: false, optional: true, required: false
  private _sparklineValueColorMapApplyTo?: string; 
  public get sparklineValueColorMapApplyTo() {
    return this.getStringAttribute('sparkline_value_color_map_apply_to');
  }
  public set sparklineValueColorMapApplyTo(value: string) {
    this._sparklineValueColorMapApplyTo = value;
  }
  public resetSparklineValueColorMapApplyTo() {
    this._sparklineValueColorMapApplyTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparklineValueColorMapApplyToInput() {
    return this._sparklineValueColorMapApplyTo;
  }

  // sparkline_value_color_map_colors - computed: false, optional: true, required: false
  private _sparklineValueColorMapColors?: string[]; 
  public get sparklineValueColorMapColors() {
    return this.getListAttribute('sparkline_value_color_map_colors');
  }
  public set sparklineValueColorMapColors(value: string[]) {
    this._sparklineValueColorMapColors = value;
  }
  public resetSparklineValueColorMapColors() {
    this._sparklineValueColorMapColors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparklineValueColorMapColorsInput() {
    return this._sparklineValueColorMapColors;
  }

  // sparkline_value_color_map_values - computed: false, optional: true, required: false
  private _sparklineValueColorMapValues?: number[]; 
  public get sparklineValueColorMapValues() {
    return this.getNumberListAttribute('sparkline_value_color_map_values');
  }
  public set sparklineValueColorMapValues(value: number[]) {
    this._sparklineValueColorMapValues = value;
  }
  public resetSparklineValueColorMapValues() {
    this._sparklineValueColorMapValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparklineValueColorMapValuesInput() {
    return this._sparklineValueColorMapValues;
  }

  // sparkline_value_color_map_values_v2 - computed: false, optional: true, required: false
  private _sparklineValueColorMapValuesV2?: number[]; 
  public get sparklineValueColorMapValuesV2() {
    return this.getNumberListAttribute('sparkline_value_color_map_values_v2');
  }
  public set sparklineValueColorMapValuesV2(value: number[]) {
    this._sparklineValueColorMapValuesV2 = value;
  }
  public resetSparklineValueColorMapValuesV2() {
    this._sparklineValueColorMapValuesV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparklineValueColorMapValuesV2Input() {
    return this._sparklineValueColorMapValuesV2;
  }

  // sparkline_value_text_map_text - computed: false, optional: true, required: false
  private _sparklineValueTextMapText?: string[]; 
  public get sparklineValueTextMapText() {
    return this.getListAttribute('sparkline_value_text_map_text');
  }
  public set sparklineValueTextMapText(value: string[]) {
    this._sparklineValueTextMapText = value;
  }
  public resetSparklineValueTextMapText() {
    this._sparklineValueTextMapText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparklineValueTextMapTextInput() {
    return this._sparklineValueTextMapText;
  }

  // sparkline_value_text_map_thresholds - computed: false, optional: true, required: false
  private _sparklineValueTextMapThresholds?: number[]; 
  public get sparklineValueTextMapThresholds() {
    return this.getNumberListAttribute('sparkline_value_text_map_thresholds');
  }
  public set sparklineValueTextMapThresholds(value: number[]) {
    this._sparklineValueTextMapThresholds = value;
  }
  public resetSparklineValueTextMapThresholds() {
    this._sparklineValueTextMapThresholds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparklineValueTextMapThresholdsInput() {
    return this._sparklineValueTextMapThresholds;
  }

  // stack_type - computed: false, optional: true, required: false
  private _stackType?: string; 
  public get stackType() {
    return this.getStringAttribute('stack_type');
  }
  public set stackType(value: string) {
    this._stackType = value;
  }
  public resetStackType() {
    this._stackType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackTypeInput() {
    return this._stackType;
  }

  // tag_mode - computed: false, optional: true, required: false
  private _tagMode?: string; 
  public get tagMode() {
    return this.getStringAttribute('tag_mode');
  }
  public set tagMode(value: string) {
    this._tagMode = value;
  }
  public resetTagMode() {
    this._tagMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagModeInput() {
    return this._tagMode;
  }

  // time_based_coloring - computed: false, optional: true, required: false
  private _timeBasedColoring?: boolean | cdktf.IResolvable; 
  public get timeBasedColoring() {
    return this.getBooleanAttribute('time_based_coloring');
  }
  public set timeBasedColoring(value: boolean | cdktf.IResolvable) {
    this._timeBasedColoring = value;
  }
  public resetTimeBasedColoring() {
    this._timeBasedColoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBasedColoringInput() {
    return this._timeBasedColoring;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // window_size - computed: false, optional: true, required: false
  private _windowSize?: number; 
  public get windowSize() {
    return this.getNumberAttribute('window_size');
  }
  public set windowSize(value: number) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }

  // windowing - computed: false, optional: true, required: false
  private _windowing?: string; 
  public get windowing() {
    return this.getStringAttribute('windowing');
  }
  public set windowing(value: string) {
    this._windowing = value;
  }
  public resetWindowing() {
    this._windowing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowingInput() {
    return this._windowing;
  }

  // xmax - computed: false, optional: true, required: false
  private _xmax?: number; 
  public get xmax() {
    return this.getNumberAttribute('xmax');
  }
  public set xmax(value: number) {
    this._xmax = value;
  }
  public resetXmax() {
    this._xmax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmaxInput() {
    return this._xmax;
  }

  // xmin - computed: false, optional: true, required: false
  private _xmin?: number; 
  public get xmin() {
    return this.getNumberAttribute('xmin');
  }
  public set xmin(value: number) {
    this._xmin = value;
  }
  public resetXmin() {
    this._xmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xminInput() {
    return this._xmin;
  }

  // y0_scale_si_by_1024 - computed: false, optional: true, required: false
  private _y0ScaleSiBy1024?: boolean | cdktf.IResolvable; 
  public get y0ScaleSiBy1024() {
    return this.getBooleanAttribute('y0_scale_si_by_1024');
  }
  public set y0ScaleSiBy1024(value: boolean | cdktf.IResolvable) {
    this._y0ScaleSiBy1024 = value;
  }
  public resetY0ScaleSiBy1024() {
    this._y0ScaleSiBy1024 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get y0ScaleSiBy1024Input() {
    return this._y0ScaleSiBy1024;
  }

  // y0_unit_autoscaling - computed: false, optional: true, required: false
  private _y0UnitAutoscaling?: boolean | cdktf.IResolvable; 
  public get y0UnitAutoscaling() {
    return this.getBooleanAttribute('y0_unit_autoscaling');
  }
  public set y0UnitAutoscaling(value: boolean | cdktf.IResolvable) {
    this._y0UnitAutoscaling = value;
  }
  public resetY0UnitAutoscaling() {
    this._y0UnitAutoscaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get y0UnitAutoscalingInput() {
    return this._y0UnitAutoscaling;
  }

  // y1_scale_si_by_1024 - computed: false, optional: true, required: false
  private _y1ScaleSiBy1024?: boolean | cdktf.IResolvable; 
  public get y1ScaleSiBy1024() {
    return this.getBooleanAttribute('y1_scale_si_by_1024');
  }
  public set y1ScaleSiBy1024(value: boolean | cdktf.IResolvable) {
    this._y1ScaleSiBy1024 = value;
  }
  public resetY1ScaleSiBy1024() {
    this._y1ScaleSiBy1024 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get y1ScaleSiBy1024Input() {
    return this._y1ScaleSiBy1024;
  }

  // y1_unit_autoscaling - computed: false, optional: true, required: false
  private _y1UnitAutoscaling?: boolean | cdktf.IResolvable; 
  public get y1UnitAutoscaling() {
    return this.getBooleanAttribute('y1_unit_autoscaling');
  }
  public set y1UnitAutoscaling(value: boolean | cdktf.IResolvable) {
    this._y1UnitAutoscaling = value;
  }
  public resetY1UnitAutoscaling() {
    this._y1UnitAutoscaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get y1UnitAutoscalingInput() {
    return this._y1UnitAutoscaling;
  }

  // y1_units - computed: false, optional: true, required: false
  private _y1Units?: string; 
  public get y1Units() {
    return this.getStringAttribute('y1_units');
  }
  public set y1Units(value: string) {
    this._y1Units = value;
  }
  public resetY1Units() {
    this._y1Units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get y1UnitsInput() {
    return this._y1Units;
  }

  // y1max - computed: false, optional: true, required: false
  private _y1Max?: number; 
  public get y1Max() {
    return this.getNumberAttribute('y1max');
  }
  public set y1Max(value: number) {
    this._y1Max = value;
  }
  public resetY1Max() {
    this._y1Max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get y1MaxInput() {
    return this._y1Max;
  }

  // y1min - computed: false, optional: true, required: false
  private _y1Min?: number; 
  public get y1Min() {
    return this.getNumberAttribute('y1min');
  }
  public set y1Min(value: number) {
    this._y1Min = value;
  }
  public resetY1Min() {
    this._y1Min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get y1MinInput() {
    return this._y1Min;
  }

  // ymax - computed: false, optional: true, required: false
  private _ymax?: number; 
  public get ymax() {
    return this.getNumberAttribute('ymax');
  }
  public set ymax(value: number) {
    this._ymax = value;
  }
  public resetYmax() {
    this._ymax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ymaxInput() {
    return this._ymax;
  }

  // ymin - computed: false, optional: true, required: false
  private _ymin?: number; 
  public get ymin() {
    return this.getNumberAttribute('ymin');
  }
  public set ymin(value: number) {
    this._ymin = value;
  }
  public resetYmin() {
    this._ymin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yminInput() {
    return this._ymin;
  }
}
export interface DashboardSectionRowChartSource {
  /**
  * Whether to disabled the source from being displayed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#disabled Dashboard#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the Source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Query for the Source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: string;
  /**
  * Whether the query builder should be enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#query_builder_enabled Dashboard#query_builder_enabled}
  */
  readonly queryBuilderEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#scatter_plot_source Dashboard#scatter_plot_source}
  */
  readonly scatterPlotSource?: string;
  /**
  * Description of the source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#source_description Dashboard#source_description}
  */
  readonly sourceDescription?: string;
}

export function dashboardSectionRowChartSourceToTerraform(struct?: DashboardSectionRowChartSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
    query_builder_enabled: cdktf.booleanToTerraform(struct!.queryBuilderEnabled),
    scatter_plot_source: cdktf.stringToTerraform(struct!.scatterPlotSource),
    source_description: cdktf.stringToTerraform(struct!.sourceDescription),
  }
}


export function dashboardSectionRowChartSourceToHclTerraform(struct?: DashboardSectionRowChartSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_builder_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.queryBuilderEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scatter_plot_source: {
      value: cdktf.stringToHclTerraform(struct!.scatterPlotSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_description: {
      value: cdktf.stringToHclTerraform(struct!.sourceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardSectionRowChartSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardSectionRowChartSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._queryBuilderEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryBuilderEnabled = this._queryBuilderEnabled;
    }
    if (this._scatterPlotSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.scatterPlotSource = this._scatterPlotSource;
    }
    if (this._sourceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDescription = this._sourceDescription;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardSectionRowChartSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._name = undefined;
      this._query = undefined;
      this._queryBuilderEnabled = undefined;
      this._scatterPlotSource = undefined;
      this._sourceDescription = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._name = value.name;
      this._query = value.query;
      this._queryBuilderEnabled = value.queryBuilderEnabled;
      this._scatterPlotSource = value.scatterPlotSource;
      this._sourceDescription = value.sourceDescription;
    }
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // query_builder_enabled - computed: false, optional: true, required: false
  private _queryBuilderEnabled?: boolean | cdktf.IResolvable; 
  public get queryBuilderEnabled() {
    return this.getBooleanAttribute('query_builder_enabled');
  }
  public set queryBuilderEnabled(value: boolean | cdktf.IResolvable) {
    this._queryBuilderEnabled = value;
  }
  public resetQueryBuilderEnabled() {
    this._queryBuilderEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryBuilderEnabledInput() {
    return this._queryBuilderEnabled;
  }

  // scatter_plot_source - computed: false, optional: true, required: false
  private _scatterPlotSource?: string; 
  public get scatterPlotSource() {
    return this.getStringAttribute('scatter_plot_source');
  }
  public set scatterPlotSource(value: string) {
    this._scatterPlotSource = value;
  }
  public resetScatterPlotSource() {
    this._scatterPlotSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scatterPlotSourceInput() {
    return this._scatterPlotSource;
  }

  // source_description - computed: false, optional: true, required: false
  private _sourceDescription?: string; 
  public get sourceDescription() {
    return this.getStringAttribute('source_description');
  }
  public set sourceDescription(value: string) {
    this._sourceDescription = value;
  }
  public resetSourceDescription() {
    this._sourceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDescriptionInput() {
    return this._sourceDescription;
  }
}

export class DashboardSectionRowChartSourceList extends cdktf.ComplexList {
  public internalValue? : DashboardSectionRowChartSource[] | cdktf.IResolvable

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
  public get(index: number): DashboardSectionRowChartSourceOutputReference {
    return new DashboardSectionRowChartSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardSectionRowChart {
  /**
  * Base of logarithmic scale, default is 0 for linear scale
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#base Dashboard#base}
  */
  readonly base?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#chart_attribute Dashboard#chart_attribute}
  */
  readonly chartAttribute?: string;
  /**
  * Description of the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#description Dashboard#description}
  */
  readonly description?: string;
  /**
  * Name of the Chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Show events related to the sources included in queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#no_default_events Dashboard#no_default_events}
  */
  readonly noDefaultEvents?: boolean | cdktf.IResolvable;
  /**
  * Summarization strategy for the chart. MEAN is default = ['MEAN', 'MEDIAN', 'MIN', 'MAX', 'SUM', 'COUNT', 'LAST', 'FIRST']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#summarization Dashboard#summarization}
  */
  readonly summarization: string;
  /**
  * Units of measurements for the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#units Dashboard#units}
  */
  readonly units: string;
  /**
  * chart_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#chart_setting Dashboard#chart_setting}
  */
  readonly chartSetting: DashboardSectionRowChartChartSetting;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#source Dashboard#source}
  */
  readonly source: DashboardSectionRowChartSource[] | cdktf.IResolvable;
}

export function dashboardSectionRowChartToTerraform(struct?: DashboardSectionRowChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.numberToTerraform(struct!.base),
    chart_attribute: cdktf.stringToTerraform(struct!.chartAttribute),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    no_default_events: cdktf.booleanToTerraform(struct!.noDefaultEvents),
    summarization: cdktf.stringToTerraform(struct!.summarization),
    units: cdktf.stringToTerraform(struct!.units),
    chart_setting: dashboardSectionRowChartChartSettingToTerraform(struct!.chartSetting),
    source: cdktf.listMapper(dashboardSectionRowChartSourceToTerraform, true)(struct!.source),
  }
}


export function dashboardSectionRowChartToHclTerraform(struct?: DashboardSectionRowChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base: {
      value: cdktf.numberToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chart_attribute: {
      value: cdktf.stringToHclTerraform(struct!.chartAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    no_default_events: {
      value: cdktf.booleanToHclTerraform(struct!.noDefaultEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    summarization: {
      value: cdktf.stringToHclTerraform(struct!.summarization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    units: {
      value: cdktf.stringToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_setting: {
      value: dashboardSectionRowChartChartSettingToHclTerraform(struct!.chartSetting),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardSectionRowChartChartSettingList",
    },
    source: {
      value: cdktf.listMapperHcl(dashboardSectionRowChartSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardSectionRowChartSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardSectionRowChartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardSectionRowChart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._chartAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartAttribute = this._chartAttribute;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._noDefaultEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDefaultEvents = this._noDefaultEvents;
    }
    if (this._summarization !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarization = this._summarization;
    }
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    if (this._chartSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartSetting = this._chartSetting?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardSectionRowChart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base = undefined;
      this._chartAttribute = undefined;
      this._description = undefined;
      this._name = undefined;
      this._noDefaultEvents = undefined;
      this._summarization = undefined;
      this._units = undefined;
      this._chartSetting.internalValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base = value.base;
      this._chartAttribute = value.chartAttribute;
      this._description = value.description;
      this._name = value.name;
      this._noDefaultEvents = value.noDefaultEvents;
      this._summarization = value.summarization;
      this._units = value.units;
      this._chartSetting.internalValue = value.chartSetting;
      this._source.internalValue = value.source;
    }
  }

  // base - computed: false, optional: true, required: false
  private _base?: number; 
  public get base() {
    return this.getNumberAttribute('base');
  }
  public set base(value: number) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // chart_attribute - computed: false, optional: true, required: false
  private _chartAttribute?: string; 
  public get chartAttribute() {
    return this.getStringAttribute('chart_attribute');
  }
  public set chartAttribute(value: string) {
    this._chartAttribute = value;
  }
  public resetChartAttribute() {
    this._chartAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartAttributeInput() {
    return this._chartAttribute;
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

  // no_default_events - computed: false, optional: true, required: false
  private _noDefaultEvents?: boolean | cdktf.IResolvable; 
  public get noDefaultEvents() {
    return this.getBooleanAttribute('no_default_events');
  }
  public set noDefaultEvents(value: boolean | cdktf.IResolvable) {
    this._noDefaultEvents = value;
  }
  public resetNoDefaultEvents() {
    this._noDefaultEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDefaultEventsInput() {
    return this._noDefaultEvents;
  }

  // summarization - computed: false, optional: false, required: true
  private _summarization?: string; 
  public get summarization() {
    return this.getStringAttribute('summarization');
  }
  public set summarization(value: string) {
    this._summarization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizationInput() {
    return this._summarization;
  }

  // units - computed: false, optional: false, required: true
  private _units?: string; 
  public get units() {
    return this.getStringAttribute('units');
  }
  public set units(value: string) {
    this._units = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }

  // chart_setting - computed: false, optional: false, required: true
  private _chartSetting = new DashboardSectionRowChartChartSettingOutputReference(this, "chart_setting");
  public get chartSetting() {
    return this._chartSetting;
  }
  public putChartSetting(value: DashboardSectionRowChartChartSetting) {
    this._chartSetting.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartSettingInput() {
    return this._chartSetting.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new DashboardSectionRowChartSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: DashboardSectionRowChartSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class DashboardSectionRowChartList extends cdktf.ComplexList {
  public internalValue? : DashboardSectionRowChart[] | cdktf.IResolvable

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
  public get(index: number): DashboardSectionRowChartOutputReference {
    return new DashboardSectionRowChartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardSectionRow {
  /**
  * chart block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#chart Dashboard#chart}
  */
  readonly chart: DashboardSectionRowChart[] | cdktf.IResolvable;
}

export function dashboardSectionRowToTerraform(struct?: DashboardSectionRow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.listMapper(dashboardSectionRowChartToTerraform, true)(struct!.chart),
  }
}


export function dashboardSectionRowToHclTerraform(struct?: DashboardSectionRow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart: {
      value: cdktf.listMapperHcl(dashboardSectionRowChartToHclTerraform, true)(struct!.chart),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardSectionRowChartList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardSectionRowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardSectionRow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardSectionRow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart.internalValue = value.chart;
    }
  }

  // chart - computed: false, optional: false, required: true
  private _chart = new DashboardSectionRowChartList(this, "chart", false);
  public get chart() {
    return this._chart;
  }
  public putChart(value: DashboardSectionRowChart[] | cdktf.IResolvable) {
    this._chart.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart.internalValue;
  }
}

export class DashboardSectionRowList extends cdktf.ComplexList {
  public internalValue? : DashboardSectionRow[] | cdktf.IResolvable

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
  public get(index: number): DashboardSectionRowOutputReference {
    return new DashboardSectionRowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardSection {
  /**
  * Name of the Sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * row block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#row Dashboard#row}
  */
  readonly row: DashboardSectionRow[] | cdktf.IResolvable;
}

export function dashboardSectionToTerraform(struct?: DashboardSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    row: cdktf.listMapper(dashboardSectionRowToTerraform, true)(struct!.row),
  }
}


export function dashboardSectionToHclTerraform(struct?: DashboardSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row: {
      value: cdktf.listMapperHcl(dashboardSectionRowToHclTerraform, true)(struct!.row),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardSectionRowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardSectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardSection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._row?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardSection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._row.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._row.internalValue = value.row;
    }
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

  // row - computed: false, optional: false, required: true
  private _row = new DashboardSectionRowList(this, "row", false);
  public get row() {
    return this._row;
  }
  public putRow(value: DashboardSectionRow[] | cdktf.IResolvable) {
    this._row.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowInput() {
    return this._row.internalValue;
  }
}

export class DashboardSectionList extends cdktf.ComplexList {
  public internalValue? : DashboardSection[] | cdktf.IResolvable

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
  public get(index: number): DashboardSectionOutputReference {
    return new DashboardSectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard wavefront_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wavefront_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dashboard to import
  * @param importFromId The id of the existing Dashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wavefront_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/dashboard wavefront_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'wavefront_dashboard',
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
    this._canModify = config.canModify;
    this._canView = config.canView;
    this._description = config.description;
    this._displayQueryParameters = config.displayQueryParameters;
    this._displaySectionTableOfContents = config.displaySectionTableOfContents;
    this._eventFilterType = config.eventFilterType;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._url = config.url;
    this._parameterDetails.internalValue = config.parameterDetails;
    this._section.internalValue = config.section;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_modify - computed: true, optional: true, required: false
  private _canModify?: string[]; 
  public get canModify() {
    return cdktf.Fn.tolist(this.getListAttribute('can_modify'));
  }
  public set canModify(value: string[]) {
    this._canModify = value;
  }
  public resetCanModify() {
    this._canModify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canModifyInput() {
    return this._canModify;
  }

  // can_view - computed: false, optional: true, required: false
  private _canView?: string[]; 
  public get canView() {
    return cdktf.Fn.tolist(this.getListAttribute('can_view'));
  }
  public set canView(value: string[]) {
    this._canView = value;
  }
  public resetCanView() {
    this._canView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canViewInput() {
    return this._canView;
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

  // display_query_parameters - computed: false, optional: true, required: false
  private _displayQueryParameters?: boolean | cdktf.IResolvable; 
  public get displayQueryParameters() {
    return this.getBooleanAttribute('display_query_parameters');
  }
  public set displayQueryParameters(value: boolean | cdktf.IResolvable) {
    this._displayQueryParameters = value;
  }
  public resetDisplayQueryParameters() {
    this._displayQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayQueryParametersInput() {
    return this._displayQueryParameters;
  }

  // display_section_table_of_contents - computed: false, optional: true, required: false
  private _displaySectionTableOfContents?: boolean | cdktf.IResolvable; 
  public get displaySectionTableOfContents() {
    return this.getBooleanAttribute('display_section_table_of_contents');
  }
  public set displaySectionTableOfContents(value: boolean | cdktf.IResolvable) {
    this._displaySectionTableOfContents = value;
  }
  public resetDisplaySectionTableOfContents() {
    this._displaySectionTableOfContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displaySectionTableOfContentsInput() {
    return this._displaySectionTableOfContents;
  }

  // event_filter_type - computed: false, optional: true, required: false
  private _eventFilterType?: string; 
  public get eventFilterType() {
    return this.getStringAttribute('event_filter_type');
  }
  public set eventFilterType(value: string) {
    this._eventFilterType = value;
  }
  public resetEventFilterType() {
    this._eventFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFilterTypeInput() {
    return this._eventFilterType;
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

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // parameter_details - computed: false, optional: true, required: false
  private _parameterDetails = new DashboardParameterDetailsList(this, "parameter_details", false);
  public get parameterDetails() {
    return this._parameterDetails;
  }
  public putParameterDetails(value: DashboardParameterDetails[] | cdktf.IResolvable) {
    this._parameterDetails.internalValue = value;
  }
  public resetParameterDetails() {
    this._parameterDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterDetailsInput() {
    return this._parameterDetails.internalValue;
  }

  // section - computed: false, optional: false, required: true
  private _section = new DashboardSectionList(this, "section", false);
  public get section() {
    return this._section;
  }
  public putSection(value: DashboardSection[] | cdktf.IResolvable) {
    this._section.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionInput() {
    return this._section.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      can_modify: cdktf.listMapper(cdktf.stringToTerraform, false)(this._canModify),
      can_view: cdktf.listMapper(cdktf.stringToTerraform, false)(this._canView),
      description: cdktf.stringToTerraform(this._description),
      display_query_parameters: cdktf.booleanToTerraform(this._displayQueryParameters),
      display_section_table_of_contents: cdktf.booleanToTerraform(this._displaySectionTableOfContents),
      event_filter_type: cdktf.stringToTerraform(this._eventFilterType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      url: cdktf.stringToTerraform(this._url),
      parameter_details: cdktf.listMapper(dashboardParameterDetailsToTerraform, true)(this._parameterDetails.internalValue),
      section: cdktf.listMapper(dashboardSectionToTerraform, true)(this._section.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_modify: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._canModify),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      can_view: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._canView),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_query_parameters: {
        value: cdktf.booleanToHclTerraform(this._displayQueryParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_section_table_of_contents: {
        value: cdktf.booleanToHclTerraform(this._displaySectionTableOfContents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_filter_type: {
        value: cdktf.stringToHclTerraform(this._eventFilterType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameter_details: {
        value: cdktf.listMapperHcl(dashboardParameterDetailsToHclTerraform, true)(this._parameterDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardParameterDetailsList",
      },
      section: {
        value: cdktf.listMapperHcl(dashboardSectionToHclTerraform, true)(this._section.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardSectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
