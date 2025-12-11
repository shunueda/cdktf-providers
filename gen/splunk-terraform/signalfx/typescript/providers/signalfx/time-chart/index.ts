// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TimeChartConfig extends cdktf.TerraformMetaArguments {
  /**
  * Force y-axes to always show zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#axes_include_zero TimeChart#axes_include_zero}
  */
  readonly axesIncludeZero?: boolean | cdktf.IResolvable;
  /**
  * Force a specific number of significant digits in the y-axis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#axes_precision TimeChart#axes_precision}
  */
  readonly axesPrecision?: number;
  /**
  * (Dimension by default) Must be "Dimension" or "Metric"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#color_by TimeChart#color_by}
  */
  readonly colorBy?: string;
  /**
  * Description of the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#description TimeChart#description}
  */
  readonly description?: string;
  /**
  * (false by default) If false, samples a subset of the output MTS, which improves UI performance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#disable_sampling TimeChart#disable_sampling}
  */
  readonly disableSampling?: boolean | cdktf.IResolvable;
  /**
  * Seconds since epoch to end the visualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#end_time TimeChart#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#id TimeChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of properties that shouldn't be displayed in the chart legend (i.e. dimension names)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#legend_fields_to_hide TimeChart#legend_fields_to_hide}
  */
  readonly legendFieldsToHide?: string[];
  /**
  * How long (in seconds) to wait for late datapoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#max_delay TimeChart#max_delay}
  */
  readonly maxDelay?: number;
  /**
  * The minimum resolution (in seconds) to use for computing the underlying program
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#minimum_resolution TimeChart#minimum_resolution}
  */
  readonly minimumResolution?: number;
  /**
  * Name of the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#name TimeChart#name}
  */
  readonly name: string;
  /**
  * Dimension to show in the on-chart legend. On-chart legend is off unless a dimension is specified. Allowed: 'metric', 'plot_label' and any dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#on_chart_legend_dimension TimeChart#on_chart_legend_dimension}
  */
  readonly onChartLegendDimension?: string;
  /**
  * (LineChart by default) The default plot display style for the visualization. Must be "LineChart", "AreaChart", "ColumnChart", or "Histogram"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#plot_type TimeChart#plot_type}
  */
  readonly plotType?: string;
  /**
  * Signalflow program text for the chart. More info at "https://developers.signalfx.com/docs/signalflow-overview"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#program_text TimeChart#program_text}
  */
  readonly programText: string;
  /**
  * (false by default) Show markers (circles) for each datapoint used to draw line or area charts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#show_data_markers TimeChart#show_data_markers}
  */
  readonly showDataMarkers?: boolean | cdktf.IResolvable;
  /**
  * (false by default) Whether vertical highlight lines should be drawn in the visualizations at times when events occurred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#show_event_lines TimeChart#show_event_lines}
  */
  readonly showEventLines?: boolean | cdktf.IResolvable;
  /**
  * (false by default) Whether area and bar charts in the visualization should be stacked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#stacked TimeChart#stacked}
  */
  readonly stacked?: boolean | cdktf.IResolvable;
  /**
  * Seconds since epoch to start the visualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#start_time TimeChart#start_time}
  */
  readonly startTime?: number;
  /**
  * Tags associated with the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#tags TimeChart#tags}
  */
  readonly tags?: string[];
  /**
  * Seconds to display in the visualization. This is a rolling range from the current time. Example: 3600 = `-1h`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#time_range TimeChart#time_range}
  */
  readonly timeRange?: number;
  /**
  * The property value is a string that denotes the geographic region associated with the time zone, (e.g. Australia/Sydney)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#timezone TimeChart#timezone}
  */
  readonly timezone?: string;
  /**
  * (Metric by default) Must be "Metric" or "Binary"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#unit_prefix TimeChart#unit_prefix}
  */
  readonly unitPrefix?: string;
  /**
  * axis_left block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#axis_left TimeChart#axis_left}
  */
  readonly axisLeft?: TimeChartAxisLeft;
  /**
  * axis_right block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#axis_right TimeChart#axis_right}
  */
  readonly axisRight?: TimeChartAxisRight;
  /**
  * event_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#event_options TimeChart#event_options}
  */
  readonly eventOptions?: TimeChartEventOptions[] | cdktf.IResolvable;
  /**
  * histogram_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#histogram_options TimeChart#histogram_options}
  */
  readonly histogramOptions?: TimeChartHistogramOptions[] | cdktf.IResolvable;
  /**
  * legend_options_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#legend_options_fields TimeChart#legend_options_fields}
  */
  readonly legendOptionsFields?: TimeChartLegendOptionsFields[] | cdktf.IResolvable;
  /**
  * viz_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#viz_options TimeChart#viz_options}
  */
  readonly vizOptions?: TimeChartVizOptions[] | cdktf.IResolvable;
}
export interface TimeChartAxisLeftWatermarks {
  /**
  * Label to display associated with the watermark line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#label TimeChart#label}
  */
  readonly label?: string;
  /**
  * Axis value where the watermark line will be displayed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#value TimeChart#value}
  */
  readonly value: number;
}

export function timeChartAxisLeftWatermarksToTerraform(struct?: TimeChartAxisLeftWatermarks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function timeChartAxisLeftWatermarksToHclTerraform(struct?: TimeChartAxisLeftWatermarks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimeChartAxisLeftWatermarksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TimeChartAxisLeftWatermarks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeChartAxisLeftWatermarks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TimeChartAxisLeftWatermarksList extends cdktf.ComplexList {
  public internalValue? : TimeChartAxisLeftWatermarks[] | cdktf.IResolvable

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
  public get(index: number): TimeChartAxisLeftWatermarksOutputReference {
    return new TimeChartAxisLeftWatermarksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeChartAxisLeft {
  /**
  * A line to draw as a high watermark
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#high_watermark TimeChart#high_watermark}
  */
  readonly highWatermark?: number;
  /**
  * A label to attach to the high watermark line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#high_watermark_label TimeChart#high_watermark_label}
  */
  readonly highWatermarkLabel?: string;
  /**
  * Label of the left axis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#label TimeChart#label}
  */
  readonly label?: string;
  /**
  * A line to draw as a low watermark
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#low_watermark TimeChart#low_watermark}
  */
  readonly lowWatermark?: number;
  /**
  * A label to attach to the low watermark line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#low_watermark_label TimeChart#low_watermark_label}
  */
  readonly lowWatermarkLabel?: string;
  /**
  * The maximum value for the left axis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#max_value TimeChart#max_value}
  */
  readonly maxValue?: number;
  /**
  * The minimum value for the left axis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#min_value TimeChart#min_value}
  */
  readonly minValue?: number;
  /**
  * watermarks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#watermarks TimeChart#watermarks}
  */
  readonly watermarks?: TimeChartAxisLeftWatermarks[] | cdktf.IResolvable;
}

export function timeChartAxisLeftToTerraform(struct?: TimeChartAxisLeftOutputReference | TimeChartAxisLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_watermark: cdktf.numberToTerraform(struct!.highWatermark),
    high_watermark_label: cdktf.stringToTerraform(struct!.highWatermarkLabel),
    label: cdktf.stringToTerraform(struct!.label),
    low_watermark: cdktf.numberToTerraform(struct!.lowWatermark),
    low_watermark_label: cdktf.stringToTerraform(struct!.lowWatermarkLabel),
    max_value: cdktf.numberToTerraform(struct!.maxValue),
    min_value: cdktf.numberToTerraform(struct!.minValue),
    watermarks: cdktf.listMapper(timeChartAxisLeftWatermarksToTerraform, true)(struct!.watermarks),
  }
}


export function timeChartAxisLeftToHclTerraform(struct?: TimeChartAxisLeftOutputReference | TimeChartAxisLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_watermark: {
      value: cdktf.numberToHclTerraform(struct!.highWatermark),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    high_watermark_label: {
      value: cdktf.stringToHclTerraform(struct!.highWatermarkLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    low_watermark: {
      value: cdktf.numberToHclTerraform(struct!.lowWatermark),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low_watermark_label: {
      value: cdktf.stringToHclTerraform(struct!.lowWatermarkLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_value: {
      value: cdktf.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktf.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    watermarks: {
      value: cdktf.listMapperHcl(timeChartAxisLeftWatermarksToHclTerraform, true)(struct!.watermarks),
      isBlock: true,
      type: "set",
      storageClassType: "TimeChartAxisLeftWatermarksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimeChartAxisLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TimeChartAxisLeft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highWatermark !== undefined) {
      hasAnyValues = true;
      internalValueResult.highWatermark = this._highWatermark;
    }
    if (this._highWatermarkLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.highWatermarkLabel = this._highWatermarkLabel;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._lowWatermark !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowWatermark = this._lowWatermark;
    }
    if (this._lowWatermarkLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowWatermarkLabel = this._lowWatermarkLabel;
    }
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._watermarks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.watermarks = this._watermarks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeChartAxisLeft | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highWatermark = undefined;
      this._highWatermarkLabel = undefined;
      this._label = undefined;
      this._lowWatermark = undefined;
      this._lowWatermarkLabel = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._watermarks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highWatermark = value.highWatermark;
      this._highWatermarkLabel = value.highWatermarkLabel;
      this._label = value.label;
      this._lowWatermark = value.lowWatermark;
      this._lowWatermarkLabel = value.lowWatermarkLabel;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._watermarks.internalValue = value.watermarks;
    }
  }

  // high_watermark - computed: false, optional: true, required: false
  private _highWatermark?: number; 
  public get highWatermark() {
    return this.getNumberAttribute('high_watermark');
  }
  public set highWatermark(value: number) {
    this._highWatermark = value;
  }
  public resetHighWatermark() {
    this._highWatermark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highWatermarkInput() {
    return this._highWatermark;
  }

  // high_watermark_label - computed: false, optional: true, required: false
  private _highWatermarkLabel?: string; 
  public get highWatermarkLabel() {
    return this.getStringAttribute('high_watermark_label');
  }
  public set highWatermarkLabel(value: string) {
    this._highWatermarkLabel = value;
  }
  public resetHighWatermarkLabel() {
    this._highWatermarkLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highWatermarkLabelInput() {
    return this._highWatermarkLabel;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // low_watermark - computed: false, optional: true, required: false
  private _lowWatermark?: number; 
  public get lowWatermark() {
    return this.getNumberAttribute('low_watermark');
  }
  public set lowWatermark(value: number) {
    this._lowWatermark = value;
  }
  public resetLowWatermark() {
    this._lowWatermark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowWatermarkInput() {
    return this._lowWatermark;
  }

  // low_watermark_label - computed: false, optional: true, required: false
  private _lowWatermarkLabel?: string; 
  public get lowWatermarkLabel() {
    return this.getStringAttribute('low_watermark_label');
  }
  public set lowWatermarkLabel(value: string) {
    this._lowWatermarkLabel = value;
  }
  public resetLowWatermarkLabel() {
    this._lowWatermarkLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowWatermarkLabelInput() {
    return this._lowWatermarkLabel;
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }

  // watermarks - computed: false, optional: true, required: false
  private _watermarks = new TimeChartAxisLeftWatermarksList(this, "watermarks", true);
  public get watermarks() {
    return this._watermarks;
  }
  public putWatermarks(value: TimeChartAxisLeftWatermarks[] | cdktf.IResolvable) {
    this._watermarks.internalValue = value;
  }
  public resetWatermarks() {
    this._watermarks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarksInput() {
    return this._watermarks.internalValue;
  }
}
export interface TimeChartAxisRightWatermarks {
  /**
  * Label to display associated with the watermark line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#label TimeChart#label}
  */
  readonly label?: string;
  /**
  * Axis value where the watermark line will be displayed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#value TimeChart#value}
  */
  readonly value: number;
}

export function timeChartAxisRightWatermarksToTerraform(struct?: TimeChartAxisRightWatermarks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function timeChartAxisRightWatermarksToHclTerraform(struct?: TimeChartAxisRightWatermarks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimeChartAxisRightWatermarksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TimeChartAxisRightWatermarks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeChartAxisRightWatermarks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TimeChartAxisRightWatermarksList extends cdktf.ComplexList {
  public internalValue? : TimeChartAxisRightWatermarks[] | cdktf.IResolvable

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
  public get(index: number): TimeChartAxisRightWatermarksOutputReference {
    return new TimeChartAxisRightWatermarksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeChartAxisRight {
  /**
  * A line to draw as a high watermark
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#high_watermark TimeChart#high_watermark}
  */
  readonly highWatermark?: number;
  /**
  * A label to attach to the high watermark line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#high_watermark_label TimeChart#high_watermark_label}
  */
  readonly highWatermarkLabel?: string;
  /**
  * Label of the right axis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#label TimeChart#label}
  */
  readonly label?: string;
  /**
  * A line to draw as a low watermark
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#low_watermark TimeChart#low_watermark}
  */
  readonly lowWatermark?: number;
  /**
  * A label to attach to the low watermark line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#low_watermark_label TimeChart#low_watermark_label}
  */
  readonly lowWatermarkLabel?: string;
  /**
  * The maximum value for the right axis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#max_value TimeChart#max_value}
  */
  readonly maxValue?: number;
  /**
  * The minimum value for the right axis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#min_value TimeChart#min_value}
  */
  readonly minValue?: number;
  /**
  * watermarks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#watermarks TimeChart#watermarks}
  */
  readonly watermarks?: TimeChartAxisRightWatermarks[] | cdktf.IResolvable;
}

export function timeChartAxisRightToTerraform(struct?: TimeChartAxisRightOutputReference | TimeChartAxisRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_watermark: cdktf.numberToTerraform(struct!.highWatermark),
    high_watermark_label: cdktf.stringToTerraform(struct!.highWatermarkLabel),
    label: cdktf.stringToTerraform(struct!.label),
    low_watermark: cdktf.numberToTerraform(struct!.lowWatermark),
    low_watermark_label: cdktf.stringToTerraform(struct!.lowWatermarkLabel),
    max_value: cdktf.numberToTerraform(struct!.maxValue),
    min_value: cdktf.numberToTerraform(struct!.minValue),
    watermarks: cdktf.listMapper(timeChartAxisRightWatermarksToTerraform, true)(struct!.watermarks),
  }
}


export function timeChartAxisRightToHclTerraform(struct?: TimeChartAxisRightOutputReference | TimeChartAxisRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_watermark: {
      value: cdktf.numberToHclTerraform(struct!.highWatermark),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    high_watermark_label: {
      value: cdktf.stringToHclTerraform(struct!.highWatermarkLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    low_watermark: {
      value: cdktf.numberToHclTerraform(struct!.lowWatermark),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low_watermark_label: {
      value: cdktf.stringToHclTerraform(struct!.lowWatermarkLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_value: {
      value: cdktf.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktf.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    watermarks: {
      value: cdktf.listMapperHcl(timeChartAxisRightWatermarksToHclTerraform, true)(struct!.watermarks),
      isBlock: true,
      type: "set",
      storageClassType: "TimeChartAxisRightWatermarksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimeChartAxisRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TimeChartAxisRight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highWatermark !== undefined) {
      hasAnyValues = true;
      internalValueResult.highWatermark = this._highWatermark;
    }
    if (this._highWatermarkLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.highWatermarkLabel = this._highWatermarkLabel;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._lowWatermark !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowWatermark = this._lowWatermark;
    }
    if (this._lowWatermarkLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowWatermarkLabel = this._lowWatermarkLabel;
    }
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._watermarks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.watermarks = this._watermarks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeChartAxisRight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highWatermark = undefined;
      this._highWatermarkLabel = undefined;
      this._label = undefined;
      this._lowWatermark = undefined;
      this._lowWatermarkLabel = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._watermarks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highWatermark = value.highWatermark;
      this._highWatermarkLabel = value.highWatermarkLabel;
      this._label = value.label;
      this._lowWatermark = value.lowWatermark;
      this._lowWatermarkLabel = value.lowWatermarkLabel;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._watermarks.internalValue = value.watermarks;
    }
  }

  // high_watermark - computed: false, optional: true, required: false
  private _highWatermark?: number; 
  public get highWatermark() {
    return this.getNumberAttribute('high_watermark');
  }
  public set highWatermark(value: number) {
    this._highWatermark = value;
  }
  public resetHighWatermark() {
    this._highWatermark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highWatermarkInput() {
    return this._highWatermark;
  }

  // high_watermark_label - computed: false, optional: true, required: false
  private _highWatermarkLabel?: string; 
  public get highWatermarkLabel() {
    return this.getStringAttribute('high_watermark_label');
  }
  public set highWatermarkLabel(value: string) {
    this._highWatermarkLabel = value;
  }
  public resetHighWatermarkLabel() {
    this._highWatermarkLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highWatermarkLabelInput() {
    return this._highWatermarkLabel;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // low_watermark - computed: false, optional: true, required: false
  private _lowWatermark?: number; 
  public get lowWatermark() {
    return this.getNumberAttribute('low_watermark');
  }
  public set lowWatermark(value: number) {
    this._lowWatermark = value;
  }
  public resetLowWatermark() {
    this._lowWatermark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowWatermarkInput() {
    return this._lowWatermark;
  }

  // low_watermark_label - computed: false, optional: true, required: false
  private _lowWatermarkLabel?: string; 
  public get lowWatermarkLabel() {
    return this.getStringAttribute('low_watermark_label');
  }
  public set lowWatermarkLabel(value: string) {
    this._lowWatermarkLabel = value;
  }
  public resetLowWatermarkLabel() {
    this._lowWatermarkLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowWatermarkLabelInput() {
    return this._lowWatermarkLabel;
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }

  // watermarks - computed: false, optional: true, required: false
  private _watermarks = new TimeChartAxisRightWatermarksList(this, "watermarks", true);
  public get watermarks() {
    return this._watermarks;
  }
  public putWatermarks(value: TimeChartAxisRightWatermarks[] | cdktf.IResolvable) {
    this._watermarks.internalValue = value;
  }
  public resetWatermarks() {
    this._watermarks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarksInput() {
    return this._watermarks.internalValue;
  }
}
export interface TimeChartEventOptions {
  /**
  * The color to use. Must be one of gray, blue, azure, navy, brown, orange, yellow, magenta, red, pink, violet, purple, lilac, emerald, chartreuse, yellowgreen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#color TimeChart#color}
  */
  readonly color?: string;
  /**
  * Specifies an alternate value for the Plot Name column of the Data Table associated with the chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#display_name TimeChart#display_name}
  */
  readonly displayName?: string;
  /**
  * The label used in the publish statement that displays the events you want to customize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#label TimeChart#label}
  */
  readonly label: string;
}

export function timeChartEventOptionsToTerraform(struct?: TimeChartEventOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    label: cdktf.stringToTerraform(struct!.label),
  }
}


export function timeChartEventOptionsToHclTerraform(struct?: TimeChartEventOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimeChartEventOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TimeChartEventOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeChartEventOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._displayName = undefined;
      this._label = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._displayName = value.displayName;
      this._label = value.label;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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
}

export class TimeChartEventOptionsList extends cdktf.ComplexList {
  public internalValue? : TimeChartEventOptions[] | cdktf.IResolvable

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
  public get(index: number): TimeChartEventOptionsOutputReference {
    return new TimeChartEventOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeChartHistogramOptions {
  /**
  * Base color theme to use for the graph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#color_theme TimeChart#color_theme}
  */
  readonly colorTheme?: string;
}

export function timeChartHistogramOptionsToTerraform(struct?: TimeChartHistogramOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color_theme: cdktf.stringToTerraform(struct!.colorTheme),
  }
}


export function timeChartHistogramOptionsToHclTerraform(struct?: TimeChartHistogramOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color_theme: {
      value: cdktf.stringToHclTerraform(struct!.colorTheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimeChartHistogramOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TimeChartHistogramOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._colorTheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorTheme = this._colorTheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeChartHistogramOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._colorTheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._colorTheme = value.colorTheme;
    }
  }

  // color_theme - computed: false, optional: true, required: false
  private _colorTheme?: string; 
  public get colorTheme() {
    return this.getStringAttribute('color_theme');
  }
  public set colorTheme(value: string) {
    this._colorTheme = value;
  }
  public resetColorTheme() {
    this._colorTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorThemeInput() {
    return this._colorTheme;
  }
}

export class TimeChartHistogramOptionsList extends cdktf.ComplexList {
  public internalValue? : TimeChartHistogramOptions[] | cdktf.IResolvable

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
  public get(index: number): TimeChartHistogramOptionsOutputReference {
    return new TimeChartHistogramOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeChartLegendOptionsFields {
  /**
  * (true by default) Determines if this property is displayed in the data table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#enabled TimeChart#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of a property to hide or show in the data table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#property TimeChart#property}
  */
  readonly property: string;
}

export function timeChartLegendOptionsFieldsToTerraform(struct?: TimeChartLegendOptionsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    property: cdktf.stringToTerraform(struct!.property),
  }
}


export function timeChartLegendOptionsFieldsToHclTerraform(struct?: TimeChartLegendOptionsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimeChartLegendOptionsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TimeChartLegendOptionsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeChartLegendOptionsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._property = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._property = value.property;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }
}

export class TimeChartLegendOptionsFieldsList extends cdktf.ComplexList {
  public internalValue? : TimeChartLegendOptionsFields[] | cdktf.IResolvable

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
  public get(index: number): TimeChartLegendOptionsFieldsOutputReference {
    return new TimeChartLegendOptionsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeChartVizOptions {
  /**
  * The Y-axis associated with values for this plot. Must be either "right" or "left". Defaults to "left".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#axis TimeChart#axis}
  */
  readonly axis?: string;
  /**
  * The color to use. Must be one of gray, blue, azure, navy, brown, orange, yellow, magenta, red, pink, violet, purple, lilac, emerald, chartreuse, yellowgreen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#color TimeChart#color}
  */
  readonly color?: string;
  /**
  * Specifies an alternate value for the Plot Name column of the Data Table associated with the chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#display_name TimeChart#display_name}
  */
  readonly displayName?: string;
  /**
  * The label used in the publish statement that displays the plot (metric time series data) you want to customize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#label TimeChart#label}
  */
  readonly label: string;
  /**
  * (Chart plot_type by default) The visualization style to use. Must be "LineChart", "AreaChart", "ColumnChart", or "Histogram"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#plot_type TimeChart#plot_type}
  */
  readonly plotType?: string;
  /**
  * An arbitrary prefix to display with the value of this plot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#value_prefix TimeChart#value_prefix}
  */
  readonly valuePrefix?: string;
  /**
  * An arbitrary suffix to display with the value of this plot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#value_suffix TimeChart#value_suffix}
  */
  readonly valueSuffix?: string;
  /**
  * A unit to attach to this plot. Units support automatic scaling (eg thousands of bytes will be displayed as kilobytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#value_unit TimeChart#value_unit}
  */
  readonly valueUnit?: string;
}

export function timeChartVizOptionsToTerraform(struct?: TimeChartVizOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    axis: cdktf.stringToTerraform(struct!.axis),
    color: cdktf.stringToTerraform(struct!.color),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    label: cdktf.stringToTerraform(struct!.label),
    plot_type: cdktf.stringToTerraform(struct!.plotType),
    value_prefix: cdktf.stringToTerraform(struct!.valuePrefix),
    value_suffix: cdktf.stringToTerraform(struct!.valueSuffix),
    value_unit: cdktf.stringToTerraform(struct!.valueUnit),
  }
}


export function timeChartVizOptionsToHclTerraform(struct?: TimeChartVizOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    axis: {
      value: cdktf.stringToHclTerraform(struct!.axis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plot_type: {
      value: cdktf.stringToHclTerraform(struct!.plotType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_prefix: {
      value: cdktf.stringToHclTerraform(struct!.valuePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_suffix: {
      value: cdktf.stringToHclTerraform(struct!.valueSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_unit: {
      value: cdktf.stringToHclTerraform(struct!.valueUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimeChartVizOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TimeChartVizOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._axis !== undefined) {
      hasAnyValues = true;
      internalValueResult.axis = this._axis;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._plotType !== undefined) {
      hasAnyValues = true;
      internalValueResult.plotType = this._plotType;
    }
    if (this._valuePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuePrefix = this._valuePrefix;
    }
    if (this._valueSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueSuffix = this._valueSuffix;
    }
    if (this._valueUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueUnit = this._valueUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeChartVizOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._axis = undefined;
      this._color = undefined;
      this._displayName = undefined;
      this._label = undefined;
      this._plotType = undefined;
      this._valuePrefix = undefined;
      this._valueSuffix = undefined;
      this._valueUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._axis = value.axis;
      this._color = value.color;
      this._displayName = value.displayName;
      this._label = value.label;
      this._plotType = value.plotType;
      this._valuePrefix = value.valuePrefix;
      this._valueSuffix = value.valueSuffix;
      this._valueUnit = value.valueUnit;
    }
  }

  // axis - computed: false, optional: true, required: false
  private _axis?: string; 
  public get axis() {
    return this.getStringAttribute('axis');
  }
  public set axis(value: string) {
    this._axis = value;
  }
  public resetAxis() {
    this._axis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisInput() {
    return this._axis;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // plot_type - computed: false, optional: true, required: false
  private _plotType?: string; 
  public get plotType() {
    return this.getStringAttribute('plot_type');
  }
  public set plotType(value: string) {
    this._plotType = value;
  }
  public resetPlotType() {
    this._plotType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plotTypeInput() {
    return this._plotType;
  }

  // value_prefix - computed: false, optional: true, required: false
  private _valuePrefix?: string; 
  public get valuePrefix() {
    return this.getStringAttribute('value_prefix');
  }
  public set valuePrefix(value: string) {
    this._valuePrefix = value;
  }
  public resetValuePrefix() {
    this._valuePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePrefixInput() {
    return this._valuePrefix;
  }

  // value_suffix - computed: false, optional: true, required: false
  private _valueSuffix?: string; 
  public get valueSuffix() {
    return this.getStringAttribute('value_suffix');
  }
  public set valueSuffix(value: string) {
    this._valueSuffix = value;
  }
  public resetValueSuffix() {
    this._valueSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSuffixInput() {
    return this._valueSuffix;
  }

  // value_unit - computed: false, optional: true, required: false
  private _valueUnit?: string; 
  public get valueUnit() {
    return this.getStringAttribute('value_unit');
  }
  public set valueUnit(value: string) {
    this._valueUnit = value;
  }
  public resetValueUnit() {
    this._valueUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueUnitInput() {
    return this._valueUnit;
  }
}

export class TimeChartVizOptionsList extends cdktf.ComplexList {
  public internalValue? : TimeChartVizOptions[] | cdktf.IResolvable

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
  public get(index: number): TimeChartVizOptionsOutputReference {
    return new TimeChartVizOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart signalfx_time_chart}
*/
export class TimeChart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_time_chart";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TimeChart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TimeChart to import
  * @param importFromId The id of the existing TimeChart that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TimeChart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_time_chart", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/time_chart signalfx_time_chart} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TimeChartConfig
  */
  public constructor(scope: Construct, id: string, config: TimeChartConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_time_chart',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.23.1',
        providerVersionConstraint: '9.23.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._axesIncludeZero = config.axesIncludeZero;
    this._axesPrecision = config.axesPrecision;
    this._colorBy = config.colorBy;
    this._description = config.description;
    this._disableSampling = config.disableSampling;
    this._endTime = config.endTime;
    this._id = config.id;
    this._legendFieldsToHide = config.legendFieldsToHide;
    this._maxDelay = config.maxDelay;
    this._minimumResolution = config.minimumResolution;
    this._name = config.name;
    this._onChartLegendDimension = config.onChartLegendDimension;
    this._plotType = config.plotType;
    this._programText = config.programText;
    this._showDataMarkers = config.showDataMarkers;
    this._showEventLines = config.showEventLines;
    this._stacked = config.stacked;
    this._startTime = config.startTime;
    this._tags = config.tags;
    this._timeRange = config.timeRange;
    this._timezone = config.timezone;
    this._unitPrefix = config.unitPrefix;
    this._axisLeft.internalValue = config.axisLeft;
    this._axisRight.internalValue = config.axisRight;
    this._eventOptions.internalValue = config.eventOptions;
    this._histogramOptions.internalValue = config.histogramOptions;
    this._legendOptionsFields.internalValue = config.legendOptionsFields;
    this._vizOptions.internalValue = config.vizOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // axes_include_zero - computed: false, optional: true, required: false
  private _axesIncludeZero?: boolean | cdktf.IResolvable; 
  public get axesIncludeZero() {
    return this.getBooleanAttribute('axes_include_zero');
  }
  public set axesIncludeZero(value: boolean | cdktf.IResolvable) {
    this._axesIncludeZero = value;
  }
  public resetAxesIncludeZero() {
    this._axesIncludeZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axesIncludeZeroInput() {
    return this._axesIncludeZero;
  }

  // axes_precision - computed: false, optional: true, required: false
  private _axesPrecision?: number; 
  public get axesPrecision() {
    return this.getNumberAttribute('axes_precision');
  }
  public set axesPrecision(value: number) {
    this._axesPrecision = value;
  }
  public resetAxesPrecision() {
    this._axesPrecision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axesPrecisionInput() {
    return this._axesPrecision;
  }

  // color_by - computed: false, optional: true, required: false
  private _colorBy?: string; 
  public get colorBy() {
    return this.getStringAttribute('color_by');
  }
  public set colorBy(value: string) {
    this._colorBy = value;
  }
  public resetColorBy() {
    this._colorBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorByInput() {
    return this._colorBy;
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

  // disable_sampling - computed: false, optional: true, required: false
  private _disableSampling?: boolean | cdktf.IResolvable; 
  public get disableSampling() {
    return this.getBooleanAttribute('disable_sampling');
  }
  public set disableSampling(value: boolean | cdktf.IResolvable) {
    this._disableSampling = value;
  }
  public resetDisableSampling() {
    this._disableSampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSamplingInput() {
    return this._disableSampling;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // legend_fields_to_hide - computed: false, optional: true, required: false
  private _legendFieldsToHide?: string[]; 
  public get legendFieldsToHide() {
    return cdktf.Fn.tolist(this.getListAttribute('legend_fields_to_hide'));
  }
  public set legendFieldsToHide(value: string[]) {
    this._legendFieldsToHide = value;
  }
  public resetLegendFieldsToHide() {
    this._legendFieldsToHide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendFieldsToHideInput() {
    return this._legendFieldsToHide;
  }

  // max_delay - computed: false, optional: true, required: false
  private _maxDelay?: number; 
  public get maxDelay() {
    return this.getNumberAttribute('max_delay');
  }
  public set maxDelay(value: number) {
    this._maxDelay = value;
  }
  public resetMaxDelay() {
    this._maxDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDelayInput() {
    return this._maxDelay;
  }

  // minimum_resolution - computed: false, optional: true, required: false
  private _minimumResolution?: number; 
  public get minimumResolution() {
    return this.getNumberAttribute('minimum_resolution');
  }
  public set minimumResolution(value: number) {
    this._minimumResolution = value;
  }
  public resetMinimumResolution() {
    this._minimumResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumResolutionInput() {
    return this._minimumResolution;
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

  // on_chart_legend_dimension - computed: false, optional: true, required: false
  private _onChartLegendDimension?: string; 
  public get onChartLegendDimension() {
    return this.getStringAttribute('on_chart_legend_dimension');
  }
  public set onChartLegendDimension(value: string) {
    this._onChartLegendDimension = value;
  }
  public resetOnChartLegendDimension() {
    this._onChartLegendDimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onChartLegendDimensionInput() {
    return this._onChartLegendDimension;
  }

  // plot_type - computed: false, optional: true, required: false
  private _plotType?: string; 
  public get plotType() {
    return this.getStringAttribute('plot_type');
  }
  public set plotType(value: string) {
    this._plotType = value;
  }
  public resetPlotType() {
    this._plotType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plotTypeInput() {
    return this._plotType;
  }

  // program_text - computed: false, optional: false, required: true
  private _programText?: string; 
  public get programText() {
    return this.getStringAttribute('program_text');
  }
  public set programText(value: string) {
    this._programText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programTextInput() {
    return this._programText;
  }

  // show_data_markers - computed: false, optional: true, required: false
  private _showDataMarkers?: boolean | cdktf.IResolvable; 
  public get showDataMarkers() {
    return this.getBooleanAttribute('show_data_markers');
  }
  public set showDataMarkers(value: boolean | cdktf.IResolvable) {
    this._showDataMarkers = value;
  }
  public resetShowDataMarkers() {
    this._showDataMarkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDataMarkersInput() {
    return this._showDataMarkers;
  }

  // show_event_lines - computed: false, optional: true, required: false
  private _showEventLines?: boolean | cdktf.IResolvable; 
  public get showEventLines() {
    return this.getBooleanAttribute('show_event_lines');
  }
  public set showEventLines(value: boolean | cdktf.IResolvable) {
    this._showEventLines = value;
  }
  public resetShowEventLines() {
    this._showEventLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showEventLinesInput() {
    return this._showEventLines;
  }

  // stacked - computed: false, optional: true, required: false
  private _stacked?: boolean | cdktf.IResolvable; 
  public get stacked() {
    return this.getBooleanAttribute('stacked');
  }
  public set stacked(value: boolean | cdktf.IResolvable) {
    this._stacked = value;
  }
  public resetStacked() {
    this._stacked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackedInput() {
    return this._stacked;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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

  // time_range - computed: false, optional: true, required: false
  private _timeRange?: number; 
  public get timeRange() {
    return this.getNumberAttribute('time_range');
  }
  public set timeRange(value: number) {
    this._timeRange = value;
  }
  public resetTimeRange() {
    this._timeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // unit_prefix - computed: false, optional: true, required: false
  private _unitPrefix?: string; 
  public get unitPrefix() {
    return this.getStringAttribute('unit_prefix');
  }
  public set unitPrefix(value: string) {
    this._unitPrefix = value;
  }
  public resetUnitPrefix() {
    this._unitPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitPrefixInput() {
    return this._unitPrefix;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // axis_left - computed: false, optional: true, required: false
  private _axisLeft = new TimeChartAxisLeftOutputReference(this, "axis_left");
  public get axisLeft() {
    return this._axisLeft;
  }
  public putAxisLeft(value: TimeChartAxisLeft) {
    this._axisLeft.internalValue = value;
  }
  public resetAxisLeft() {
    this._axisLeft.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisLeftInput() {
    return this._axisLeft.internalValue;
  }

  // axis_right - computed: false, optional: true, required: false
  private _axisRight = new TimeChartAxisRightOutputReference(this, "axis_right");
  public get axisRight() {
    return this._axisRight;
  }
  public putAxisRight(value: TimeChartAxisRight) {
    this._axisRight.internalValue = value;
  }
  public resetAxisRight() {
    this._axisRight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisRightInput() {
    return this._axisRight.internalValue;
  }

  // event_options - computed: false, optional: true, required: false
  private _eventOptions = new TimeChartEventOptionsList(this, "event_options", true);
  public get eventOptions() {
    return this._eventOptions;
  }
  public putEventOptions(value: TimeChartEventOptions[] | cdktf.IResolvable) {
    this._eventOptions.internalValue = value;
  }
  public resetEventOptions() {
    this._eventOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventOptionsInput() {
    return this._eventOptions.internalValue;
  }

  // histogram_options - computed: false, optional: true, required: false
  private _histogramOptions = new TimeChartHistogramOptionsList(this, "histogram_options", false);
  public get histogramOptions() {
    return this._histogramOptions;
  }
  public putHistogramOptions(value: TimeChartHistogramOptions[] | cdktf.IResolvable) {
    this._histogramOptions.internalValue = value;
  }
  public resetHistogramOptions() {
    this._histogramOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramOptionsInput() {
    return this._histogramOptions.internalValue;
  }

  // legend_options_fields - computed: false, optional: true, required: false
  private _legendOptionsFields = new TimeChartLegendOptionsFieldsList(this, "legend_options_fields", false);
  public get legendOptionsFields() {
    return this._legendOptionsFields;
  }
  public putLegendOptionsFields(value: TimeChartLegendOptionsFields[] | cdktf.IResolvable) {
    this._legendOptionsFields.internalValue = value;
  }
  public resetLegendOptionsFields() {
    this._legendOptionsFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendOptionsFieldsInput() {
    return this._legendOptionsFields.internalValue;
  }

  // viz_options - computed: false, optional: true, required: false
  private _vizOptions = new TimeChartVizOptionsList(this, "viz_options", true);
  public get vizOptions() {
    return this._vizOptions;
  }
  public putVizOptions(value: TimeChartVizOptions[] | cdktf.IResolvable) {
    this._vizOptions.internalValue = value;
  }
  public resetVizOptions() {
    this._vizOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vizOptionsInput() {
    return this._vizOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      axes_include_zero: cdktf.booleanToTerraform(this._axesIncludeZero),
      axes_precision: cdktf.numberToTerraform(this._axesPrecision),
      color_by: cdktf.stringToTerraform(this._colorBy),
      description: cdktf.stringToTerraform(this._description),
      disable_sampling: cdktf.booleanToTerraform(this._disableSampling),
      end_time: cdktf.numberToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      legend_fields_to_hide: cdktf.listMapper(cdktf.stringToTerraform, false)(this._legendFieldsToHide),
      max_delay: cdktf.numberToTerraform(this._maxDelay),
      minimum_resolution: cdktf.numberToTerraform(this._minimumResolution),
      name: cdktf.stringToTerraform(this._name),
      on_chart_legend_dimension: cdktf.stringToTerraform(this._onChartLegendDimension),
      plot_type: cdktf.stringToTerraform(this._plotType),
      program_text: cdktf.stringToTerraform(this._programText),
      show_data_markers: cdktf.booleanToTerraform(this._showDataMarkers),
      show_event_lines: cdktf.booleanToTerraform(this._showEventLines),
      stacked: cdktf.booleanToTerraform(this._stacked),
      start_time: cdktf.numberToTerraform(this._startTime),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      time_range: cdktf.numberToTerraform(this._timeRange),
      timezone: cdktf.stringToTerraform(this._timezone),
      unit_prefix: cdktf.stringToTerraform(this._unitPrefix),
      axis_left: timeChartAxisLeftToTerraform(this._axisLeft.internalValue),
      axis_right: timeChartAxisRightToTerraform(this._axisRight.internalValue),
      event_options: cdktf.listMapper(timeChartEventOptionsToTerraform, true)(this._eventOptions.internalValue),
      histogram_options: cdktf.listMapper(timeChartHistogramOptionsToTerraform, true)(this._histogramOptions.internalValue),
      legend_options_fields: cdktf.listMapper(timeChartLegendOptionsFieldsToTerraform, true)(this._legendOptionsFields.internalValue),
      viz_options: cdktf.listMapper(timeChartVizOptionsToTerraform, true)(this._vizOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      axes_include_zero: {
        value: cdktf.booleanToHclTerraform(this._axesIncludeZero),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      axes_precision: {
        value: cdktf.numberToHclTerraform(this._axesPrecision),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      color_by: {
        value: cdktf.stringToHclTerraform(this._colorBy),
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
      disable_sampling: {
        value: cdktf.booleanToHclTerraform(this._disableSampling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      legend_fields_to_hide: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._legendFieldsToHide),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_delay: {
        value: cdktf.numberToHclTerraform(this._maxDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_resolution: {
        value: cdktf.numberToHclTerraform(this._minimumResolution),
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
      on_chart_legend_dimension: {
        value: cdktf.stringToHclTerraform(this._onChartLegendDimension),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plot_type: {
        value: cdktf.stringToHclTerraform(this._plotType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_text: {
        value: cdktf.stringToHclTerraform(this._programText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_data_markers: {
        value: cdktf.booleanToHclTerraform(this._showDataMarkers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_event_lines: {
        value: cdktf.booleanToHclTerraform(this._showEventLines),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stacked: {
        value: cdktf.booleanToHclTerraform(this._stacked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
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
      time_range: {
        value: cdktf.numberToHclTerraform(this._timeRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_prefix: {
        value: cdktf.stringToHclTerraform(this._unitPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      axis_left: {
        value: timeChartAxisLeftToHclTerraform(this._axisLeft.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TimeChartAxisLeftList",
      },
      axis_right: {
        value: timeChartAxisRightToHclTerraform(this._axisRight.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TimeChartAxisRightList",
      },
      event_options: {
        value: cdktf.listMapperHcl(timeChartEventOptionsToHclTerraform, true)(this._eventOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TimeChartEventOptionsList",
      },
      histogram_options: {
        value: cdktf.listMapperHcl(timeChartHistogramOptionsToHclTerraform, true)(this._histogramOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TimeChartHistogramOptionsList",
      },
      legend_options_fields: {
        value: cdktf.listMapperHcl(timeChartLegendOptionsFieldsToHclTerraform, true)(this._legendOptionsFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TimeChartLegendOptionsFieldsList",
      },
      viz_options: {
        value: cdktf.listMapperHcl(timeChartVizOptionsToHclTerraform, true)(this._vizOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TimeChartVizOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
